function showModal(src) {
    document.getElementById("modal-img").src = src;
    document.getElementById("modal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

// MANITIT-TECHNICAL-ENHANCEMENT:START
/*
 * Progressive enhancement for the whole technical manual.
 * The generated HTML stays untouched: this script classifies each document and
 * adds semantic hooks used by the visual layer in theme/custom.css.
 */
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.replace(/\\/g, "/").split("/").pop().toLowerCase();
    if (currentPage === "print.html") return;

    const main = document.querySelector(".content main");
    const title = main ? main.querySelector("h1") : null;
    if (!main || !title) return;

    const titleText = title.textContent.trim().replace(/\s+/g, " ");
    const maintenanceTitle = titleText.match(/^(MN\d{4})(?:\s+(.+))?$/i);
    const documentType = classifyDocument(titleText, Boolean(maintenanceTitle));
    const documentCode = maintenanceTitle
        ? maintenanceTitle[1].toUpperCase()
        : documentType.code;
    const documentName = maintenanceTitle
        ? maintenanceTitle[2] || "Maintenance sheet"
        : titleText;
    const titleLink = title.querySelector("a") || title;
    const titleRow = title.parentElement;

    document.body.classList.add("maintenance-page", "technical-" + documentType.kind);
    if (maintenanceTitle) document.body.classList.add("technical-maintenance");
    main.classList.add("maintenance-sheet");
    titleRow.classList.add("maintenance-heading");

    const code = document.createElement("span");
    code.className = "maintenance-code";
    code.textContent = documentCode;

    const name = document.createElement("span");
    name.className = "maintenance-name";
    name.textContent = documentName;

    titleLink.replaceChildren(code, name);

    const eyebrow = document.createElement("div");
    eyebrow.className = "maintenance-eyebrow";
    eyebrow.innerHTML = '<span>' + documentType.eyebrow + '</span><span class="maintenance-status"><i class="fa-solid ' + documentType.icon + '" aria-hidden="true"></i> ' + documentType.status + '</span>';
    titleRow.before(eyebrow);

    const infoTable = findMaintenanceDataTable(main);
    if (infoTable) {
        infoTable.classList.add("maintenance-data-grid");
        infoTable.setAttribute("aria-label", "Technical data for document " + documentCode);
        const firstRow = infoTable.querySelector("tr");
        const firstRowText = firstRow ? firstRow.textContent.toLowerCase() : "";
        const isSafetyRow =
            (firstRowText.includes("prima di procedere") &&
             firstRowText.includes("istruzioni di sicurezza")) ||
            (firstRowText.includes("before proceeding") &&
             firstRowText.includes("safety instructions"));
        if (firstRow && isSafetyRow) {
            firstRow.classList.add("maintenance-safety-row");
            removeLeadingSymbol(firstRow, /^(?:⚠️|⚠)\s*/u);
        }

        const dataIcons = [
            { label: "intervallo", icon: "fa-clock" },
            { label: "complessità", icon: "fa-gauge-high" },
            { label: "figura autorizzata", icon: "fa-user-gear" },
            { label: "dpi previsti", icon: "fa-shield-halved" }
        ];

        infoTable.querySelectorAll("tr:not(.maintenance-safety-row) td").forEach(function (cell) {
            const cellText = cell.textContent.toLowerCase();
            const iconData = dataIcons.find(function (item) {
                return cellText.includes(item.label);
            });
            const paragraph = cell.querySelector("p");
            if (!iconData || !paragraph) return;

            const labelElement = paragraph.querySelector("strong");
            const labelText = labelElement
                ? labelElement.textContent.trim()
                : iconData.label;
            const fieldValue = extractFieldValue(paragraph.textContent, labelText);

            removeLeadingSymbol(paragraph, /^(?:⏲️|⏲|🎚️|🎚|🧑‍🏭|🧑|🧤)\s*/u);
            const icon = document.createElement("i");
            icon.className = "maintenance-data-icon fa-solid " + iconData.icon;
            icon.setAttribute("aria-hidden", "true");

            if (iconData.label === "dpi previsti") {
                paragraph.prepend(icon);
                return;
            }

            const content = document.createElement("span");
            content.className = "maintenance-data-content";

            const label = document.createElement("strong");
            label.className = "maintenance-data-label";
            label.textContent = labelText;
            content.appendChild(label);

            if (iconData.label === "complessità") {
                content.appendChild(createComplexityIndicator(fieldValue));
            } else {
                const value = document.createElement("span");
                value.className = "maintenance-data-value";
                value.textContent = fieldValue || "—";
                content.appendChild(value);
            }

            paragraph.classList.add("maintenance-data-layout");
            paragraph.replaceChildren(icon, content);
        });
    }

    let sectionNumber = 0;
    main.querySelectorAll("h2").forEach(function (heading) {
        sectionNumber += 1;
        heading.classList.add("maintenance-section-title");
        heading.style.setProperty("--section-number", '"' + String(sectionNumber).padStart(2, "0") + '"');

        if (heading.textContent.trim().toLowerCase().includes("procedura")) {
            let sibling = heading.nextElementSibling;
            while (sibling && sibling.tagName !== "H2") {
                if (sibling.matches("ul, ol")) sibling.classList.add("procedure-steps");
                sibling = sibling.nextElementSibling;
            }
        }
    });

    main.querySelectorAll("img:not(.inline-img), video").forEach(function (media) {
        media.classList.add("technical-media");
        if (media.tagName === "IMG") media.loading = "lazy";
    });

    const copyButton = document.getElementById("copy-link-btn");
    if (copyButton) {
        copyButton.setAttribute("aria-label", "Copy link to document " + documentCode);
        copyButton.setAttribute("title", "Copy link to document");
        copyButton.addEventListener("click", function () {
            copyButton.classList.add("is-copied");
            const icon = copyButton.querySelector("i");
            if (icon) {
                icon.className = "fa-solid fa-check";
                window.setTimeout(function () {
                    icon.className = "fa-solid fa-copy";
                    copyButton.classList.remove("is-copied");
                }, 1600);
            }
        });
    }
});

function removeLeadingSymbol(root, pattern) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let textNode = walker.nextNode();
    while (textNode) {
        if (textNode.nodeValue.trim()) {
            textNode.nodeValue = textNode.nodeValue.trimStart().replace(pattern, "");
            return;
        }
        textNode = walker.nextNode();
    }
}

function findMaintenanceDataTable(main) {
    const maintenanceFields = [
        "intervallo",
        "complessità operazione",
        "figura autorizzata",
        "dpi previsti"
    ];

    return Array.from(main.querySelectorAll("table.my-table2")).find(function (table) {
        const tableText = table.textContent.toLowerCase().replace(/\s+/g, " ");
        return maintenanceFields.every(function (field) {
            return tableText.includes(field);
        });
    }) || null;
}

function extractFieldValue(text, label) {
    const normalized = text
        .replace(/^(?:⏲️|⏲|🎚️|🎚|🧑‍🏭|🧑|🧤)\s*/u, "")
        .trim();
    const colonPosition = normalized.indexOf(":");
    if (colonPosition >= 0) return normalized.slice(colonPosition + 1).trim();
    return normalized.replace(label, "").trim();
}

function createComplexityIndicator(rawValue) {
    const filledSymbols = rawValue.match(/[⭐★]/gu) || [];
    const level = Math.min(5, Math.max(1, filledSymbols.length || 1));
    const levelNames = ["Low", "Moderate", "Medium", "High", "Critical"];

    const indicator = document.createElement("span");
    indicator.className = "complexity-indicator complexity-level-" + level;
    indicator.setAttribute(
        "aria-label",
        "Complexity " + levelNames[level - 1] + ", level " + level + " of 5"
    );

    const scale = document.createElement("span");
    scale.className = "complexity-scale";
    scale.setAttribute("aria-hidden", "true");
    for (let index = 1; index <= 5; index += 1) {
        const segment = document.createElement("i");
        segment.className = "complexity-segment" + (index <= level ? " is-active" : "");
        scale.appendChild(segment);
    }

    const readout = document.createElement("span");
    readout.className = "complexity-readout";

    const levelName = document.createElement("span");
    levelName.className = "complexity-level-name";
    levelName.textContent = levelNames[level - 1];

    const score = document.createElement("span");
    score.className = "complexity-score";
    score.textContent = String(level).padStart(2, "0") + " / 05";

    readout.append(levelName, score);
    indicator.append(scale, readout);
    return indicator;
}

function classifyDocument(titleText, isMaintenance) {
    const normalized = titleText.toLowerCase();

    if (isMaintenance) {
        return {
            kind: "maintenance",
            code: "MN",
            eyebrow: "Technical maintenance sheet",
            status: "Controlled procedure",
            icon: "fa-circle-check"
        };
    }

    if (normalized.includes("home")) {
        return {
            kind: "index",
            code: "INDEX",
            eyebrow: "Technical maintenance index",
            status: "Operational archive",
            icon: "fa-layer-group"
        };
    }

    if (/^(frese standard|waterjet|pompa )/.test(normalized)) {
        return {
            kind: "category",
            code: "AREA",
            eyebrow: "Machine technical section",
            status: "Maintenance area",
            icon: "fa-gears"
        };
    }

    if (normalized.includes("sicurezza") || normalized.includes("safety")) {
        return {
            kind: "safety",
            code: "HSE",
            eyebrow: "Safety instruction",
            status: "Mandatory reading",
            icon: "fa-triangle-exclamation"
        };
    }

    if (normalized.includes("tabella") || normalized.includes("table") || normalized.includes("lubrificant")) {
        return {
            kind: "reference",
            code: "REF",
            eyebrow: "Technical reference",
            status: "Reference data",
            icon: "fa-table-cells"
        };
    }

    if (normalized.includes("ricerca") || normalized.includes("search")) {
        return {
            kind: "search",
            code: "FIND",
            eyebrow: "Documentation search",
            status: "Searchable index",
            icon: "fa-magnifying-glass"
        };
    }

    if (normalized.includes("404") || normalized.includes("not found")) {
        return {
            kind: "error",
            code: "404",
            eyebrow: "Documentation system",
            status: "Document unavailable",
            icon: "fa-circle-exclamation"
        };
    }

    return {
        kind: "document",
        code: "DOC",
        eyebrow: "Machine technical documentation",
        status: "Operational document",
        icon: "fa-file-lines"
    };
}
// MANITIT-TECHNICAL-ENHANCEMENT:END
