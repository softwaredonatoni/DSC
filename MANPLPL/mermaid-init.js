(() => {
    const darkThemes = ["ayu", "navy", "coal"];
    const lightThemes = ["light", "rust"];

    const classList = document.getElementsByTagName("html")[0].classList;

    let lastThemeWasLight = true;
    for (const cssClass of classList) {
        if (darkThemes.includes(cssClass)) {
            lastThemeWasLight = false;
            break;
        }
    }

    const theme = lastThemeWasLight ? "default" : "dark";
    mermaid.initialize({ startOnLoad: true, theme });

    // Simplest way to make mermaid re-render the diagrams in the new theme is via refreshing the page

    for (const darkTheme of darkThemes) {
        let tagDarkTheme = document.getElementById(darkTheme);
        if (tagDarkTheme != null) {
            tagDarkTheme.addEventListener("click", () => {
                if (lastThemeWasLight) {
                    window.location.reload();
                }
            });
        }
    }

    for (const lightTheme of lightThemes) {
        let tagLightTheme = document.getElementById(lightTheme);
        if (tagLightTheme != null) {
            tagLightTheme.addEventListener("click", () => {
                if (!lastThemeWasLight) {
                    window.location.reload();
                }
            });
        }
    }
})();
