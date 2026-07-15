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
    const troubleshootingTitle = titleText.match(/^(PE\d{4})(?:\s+(.+))?$/i);
    const documentType = classifyDocument(
        titleText,
        Boolean(maintenanceTitle),
        Boolean(troubleshootingTitle)
    );
    const documentCode = maintenanceTitle
        ? maintenanceTitle[1].toUpperCase()
        : troubleshootingTitle
            ? troubleshootingTitle[1].toUpperCase()
            : documentType.code;
    const documentName = maintenanceTitle
        ? maintenanceTitle[2] || "Maintenance sheet"
        : troubleshootingTitle
            ? troubleshootingTitle[2] || "Troubleshooting sheet"
            : titleText;
    const titleLink = title.querySelector("a") || title;
    const titleRow = title.parentElement;

    document.body.classList.add("maintenance-page", "technical-" + documentType.kind);
    if (maintenanceTitle) document.body.classList.add("technical-maintenance");
    if (troubleshootingTitle) document.body.classList.add("technical-troubleshooting");
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
        enhanceTechnicalDataTable(infoTable, documentCode, [
            { labels: ["intervallo", "interval"], icon: "fa-clock", kind: "value" },
            { labels: ["complessità", "complexity"], icon: "fa-gauge-high", kind: "complexity" },
            { labels: ["figura autorizzata", "authorized role"], icon: "fa-user-gear", kind: "value" },
            { labels: ["dpi previsti", "required ppe"], icon: "fa-shield-halved", kind: "ppe" }
        ]);
    }

    const troubleshootingTemplateTable = troubleshootingTitle
        ? findTroubleshootingTemplateTable(main)
        : null;
    if (troubleshootingTemplateTable) {
        troubleshootingTemplateTable.classList.add("troubleshooting-template-grid");
        enhanceTechnicalDataTable(troubleshootingTemplateTable, documentCode, [
            { labels: ["descrizione", "description"], icon: "fa-file-lines", kind: "value" },
            { labels: ["gravità", "severity"], icon: "fa-triangle-exclamation", kind: "severity" },
            { labels: ["figura autorizzata", "authorized role"], icon: "fa-user-gear", kind: "value" },
            { labels: ["dpi previsti", "required ppe"], icon: "fa-shield-halved", kind: "ppe" }
        ]);
    }

    const troubleshootingTable = main.querySelector(".troubleshooting-data-grid");
    if (troubleshootingTable && troubleshootingTable.dataset.severity) {
        document.body.classList.add("severity-" + troubleshootingTable.dataset.severity.toLowerCase());
    }

    let sectionNumber = 0;
    main.querySelectorAll("h2").forEach(function (heading) {
        sectionNumber += 1;
        heading.classList.add("maintenance-section-title");
        heading.style.setProperty("--section-number", '"' + String(sectionNumber).padStart(2, "0") + '"');

        const headingText = heading.textContent.trim().toLowerCase();
        const isProcedureSection =
            headingText.includes("procedura") ||
            headingText.includes("diagnostic procedure") ||
            headingText.includes("possibili soluzioni") ||
            headingText.includes("possible solutions");
        const isSymptomsSection = headingText === "sintomi" || headingText === "symptoms";
        const isCausesSection =
            headingText.includes("possibili cause") || headingText.includes("possible causes");

        if (isProcedureSection || isSymptomsSection || isCausesSection) {
            let sibling = heading.nextElementSibling;
            while (sibling && sibling.tagName !== "H2") {
                if (isProcedureSection && sibling.matches("ul, ol")) {
                    sibling.classList.add("procedure-steps");
                }
                if (isProcedureSection && sibling.matches(".panelContent")) {
                    sibling.classList.add("resolution-panel-content");
                    const topLevelList = sibling.querySelector(":scope > ol, :scope > ul");
                    if (topLevelList) topLevelList.classList.add("procedure-steps");
                }
                if ((isSymptomsSection || isCausesSection) && sibling.matches("ul, ol")) {
                    sibling.classList.add("troubleshooting-list");
                    if (isCausesSection) sibling.classList.add("cause-list");
                }
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
        ["intervallo", "interval"],
        ["complessità operazione", "operation complexity"],
        ["figura autorizzata", "authorized role"],
        ["dpi previsti", "required ppe"]
    ];

    return Array.from(main.querySelectorAll("table.my-table2")).find(function (table) {
        const tableText = table.textContent.toLowerCase().replace(/\s+/g, " ");
        return maintenanceFields.every(function (aliases) {
            return aliases.some(function (field) {
                return tableText.includes(field);
            });
        });
    }) || null;
}

function findTroubleshootingTemplateTable(main) {
    const troubleshootingFields = [
        ["descrizione", "description"],
        ["gravità", "severity"],
        ["figura autorizzata", "authorized role"],
        ["dpi previsti", "required ppe"]
    ];

    return Array.from(main.querySelectorAll("table.my-table2")).find(function (table) {
        const tableText = table.textContent.toLowerCase().replace(/\s+/g, " ");
        return troubleshootingFields.every(function (aliases) {
            return aliases.some(function (field) {
                return tableText.includes(field);
            });
        });
    }) || null;
}

function enhanceTechnicalDataTable(table, documentCode, dataFields) {
    table.classList.add("maintenance-data-grid");
    table.setAttribute("aria-label", "Technical data for document " + documentCode);

    const firstRow = table.querySelector("tr");
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

    table.querySelectorAll("tr:not(.maintenance-safety-row) td").forEach(function (cell) {
        const cellText = cell.textContent.toLowerCase();
        const field = dataFields.find(function (item) {
            return item.labels.some(function (label) {
                return cellText.includes(label);
            });
        });
        const paragraph = cell.querySelector("p");
        if (!field || !paragraph) return;

        const labelElement = paragraph.querySelector("strong");
        const labelText = labelElement
            ? labelElement.textContent.trim()
            : field.labels[0];
        const fieldValue = extractFieldValue(paragraph.textContent, labelText);

        removeLeadingSymbol(paragraph, /^(?:⏲️|⏲|🎚️|🎚|🧑‍🏭|🧑|🧤)\s*/u);
        const icon = document.createElement("i");
        icon.className = "maintenance-data-icon fa-solid " + field.icon;
        icon.setAttribute("aria-hidden", "true");

        if (field.kind === "ppe") {
            paragraph.prepend(icon);
            return;
        }

        const content = document.createElement("span");
        content.className = "maintenance-data-content";

        const label = document.createElement("strong");
        label.className = "maintenance-data-label";
        label.textContent = labelText;
        content.appendChild(label);

        if (field.kind === "complexity") {
            content.appendChild(createComplexityIndicator(fieldValue));
        } else if (field.kind === "severity") {
            content.appendChild(createSeverityIndicator(fieldValue));
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

function createSeverityIndicator(rawValue) {
    const filledSymbols = rawValue.match(/[⭐★]/gu) || [];
    const level = Math.min(5, Math.max(1, filledSymbols.length || 1));
    const levelNames = ["Low", "Moderate", "Medium", "High", "Critical"];

    const indicator = document.createElement("span");
    indicator.className = "severity-indicator severity-level-" + level;
    indicator.setAttribute(
        "aria-label",
        "Severity " + levelNames[level - 1] + ", level " + level + " of 5"
    );

    const scale = document.createElement("span");
    scale.className = "severity-scale";
    scale.setAttribute("aria-hidden", "true");
    for (let index = 1; index <= 5; index += 1) {
        const segment = document.createElement("i");
        segment.className = "severity-segment" + (index <= level ? " is-active" : "");
        scale.appendChild(segment);
    }

    const readout = document.createElement("span");
    readout.className = "severity-readout";

    const levelName = document.createElement("span");
    levelName.className = "severity-level-name";
    levelName.textContent = levelNames[level - 1];

    const score = document.createElement("span");
    score.className = "severity-score";
    score.textContent = String(level).padStart(2, "0") + " / 05";

    readout.append(levelName, score);
    indicator.append(scale, readout);
    return indicator;
}

function classifyDocument(titleText, isMaintenance, isTroubleshooting) {
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

    if (isTroubleshooting) {
        return {
            kind: "troubleshooting",
            code: "PE",
            eyebrow: "Technical troubleshooting sheet",
            status: "Diagnostic procedure",
            icon: "fa-screwdriver-wrench"
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
