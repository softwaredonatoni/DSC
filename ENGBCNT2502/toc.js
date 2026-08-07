// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="en-gb_d-contour_2025.2.html"><strong aria-hidden="true"></strong> EN-GB D-CONTOUR 2025.2</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="1_preliminary_information.html"><strong aria-hidden="true"></strong> 1 PRELIMINARY INFORMATION</a></li><li class="chapter-item "><a href="2_dcontour.html"><strong aria-hidden="true"></strong> 2 DCONTOUR</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.1_iso.html"><strong aria-hidden="true"></strong> 2.1 ISO</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.1.1_manual_mode.html"><strong aria-hidden="true"></strong> 2.1.1 MANUAL MODE</a></li><li class="chapter-item "><a href="2.1.2_mdi_mode.html"><strong aria-hidden="true"></strong> 2.1.2 MDI MODE</a></li><li class="chapter-item "><a href="2.1.3_automatic_mode.html"><strong aria-hidden="true"></strong> 2.1.3 AUTOMATIC MODE</a></li></ol></li><li class="chapter-item "><a href="2.2_tools.html"><strong aria-hidden="true"></strong> 2.2 TOOLS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.2.1_tool_magazines.html"><strong aria-hidden="true"></strong> 2.2.1 TOOL MAGAZINES</a></li><li class="chapter-item "><a href="2.2.2_tools.html"><strong aria-hidden="true"></strong> 2.2.2 TOOLS</a></li></ol></li><li class="chapter-item "><a href="2.3_alarms.html"><strong aria-hidden="true"></strong> 2.3 ALARMS</a></li><li class="chapter-item "><a href="2.4_origins.html"><strong aria-hidden="true"></strong> 2.4 ORIGINS</a></li><li class="chapter-item "><a href="2.5_statistics.html"><strong aria-hidden="true"></strong> 2.5 STATISTICS</a></li><li class="chapter-item "><a href="2.6_tools.html"><strong aria-hidden="true"></strong> 2.6 TOOLS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.6.1_io.html"><strong aria-hidden="true"></strong> 2.6.1 IO</a></li></ol></li><li class="chapter-item "><a href="2.7_machine_settings.html"><strong aria-hidden="true"></strong> 2.7 MACHINE SETTINGS</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
