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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="en-gb_d-edge_2026.1.html"><strong aria-hidden="true"></strong> EN-GB D-EDGE 2026.1</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="1_preliminary_notes.html"><strong aria-hidden="true"></strong> 1 PRELIMINARY NOTES</a></li><li class="chapter-item "><a href="2_d-edge.html"><strong aria-hidden="true"></strong> 2 D-EDGE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.1_home_page.html"><strong aria-hidden="true"></strong> 2.1 HOME PAGE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.1.1_user_groups_and_elements_management.html"><strong aria-hidden="true"></strong> 2.1.1 USER GROUPS AND ELEMENTS MANAGEMENT</a></li></ol></li><li class="chapter-item "><a href="2.2_alarms_page.html"><strong aria-hidden="true"></strong> 2.2 ALARMS PAGE</a></li><li class="chapter-item "><a href="2.3_recipes_page.html"><strong aria-hidden="true"></strong> 2.3 RECIPES PAGE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.3.1_workings.html"><strong aria-hidden="true"></strong> 2.3.1 WORKINGS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.3.1.1_calibrate_top.html"><strong aria-hidden="true"></strong> 2.3.1.1 CALIBRATE TOP</a></li><li class="chapter-item "><a href="2.3.1.2_calibrate_top_polishing.html"><strong aria-hidden="true"></strong> 2.3.1.2 CALIBRATE TOP POLISHING</a></li><li class="chapter-item "><a href="2.3.1.3_side_rectify.html"><strong aria-hidden="true"></strong> 2.3.1.3 SIDE RECTIFY</a></li><li class="chapter-item "><a href="2.3.1.4_side_polishing.html"><strong aria-hidden="true"></strong> 2.3.1.4 SIDE POLISHING</a></li><li class="chapter-item "><a href="2.3.1.5_top_bevelling.html"><strong aria-hidden="true"></strong> 2.3.1.5 TOP BEVELLING</a></li><li class="chapter-item "><a href="2.3.1.6_bottom_chamfer.html"><strong aria-hidden="true"></strong> 2.3.1.6 BOTTOM CHAMFER</a></li><li class="chapter-item "><a href="2.3.1.7_top_cut.html"><strong aria-hidden="true"></strong> 2.3.1.7 TOP CUT</a></li><li class="chapter-item "><a href="2.3.1.8_lower_cut.html"><strong aria-hidden="true"></strong> 2.3.1.8 LOWER CUT</a></li><li class="chapter-item "><a href="2.3.1.9_side_cut.html"><strong aria-hidden="true"></strong> 2.3.1.9 SIDE CUT</a></li><li class="chapter-item "><a href="2.3.1.10_manual_positioning_cut.html"><strong aria-hidden="true"></strong> 2.3.1.10 MANUAL POSITIONING CUT</a></li><li class="chapter-item "><a href="2.3.1.11_bush-hammering.html"><strong aria-hidden="true"></strong> 2.3.1.11 BUSH-HAMMERING</a></li><li class="chapter-item "><a href="2.3.1.12_top_polishing.html"><strong aria-hidden="true"></strong> 2.3.1.12 TOP POLISHING</a></li></ol></li><li class="chapter-item "><a href="2.3.2_corrections.html"><strong aria-hidden="true"></strong> 2.3.2 CORRECTIONS</a></li></ol></li><li class="chapter-item "><a href="2.4_statistics_page.html"><strong aria-hidden="true"></strong> 2.4 STATISTICS PAGE</a></li><li class="chapter-item "><a href="2.5_settings_page.html"><strong aria-hidden="true"></strong> 2.5 SETTINGS PAGE</a></li></ol></li></ol></li></ol>';
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
