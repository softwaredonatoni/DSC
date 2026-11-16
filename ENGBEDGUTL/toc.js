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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="en-gb_d-edge_utility.html"><strong aria-hidden="true"></strong> EN-GB D-EDGE UTILITY</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="1_preliminary_notes.html"><strong aria-hidden="true"></strong> 1 PRELIMINARY NOTES</a></li><li class="chapter-item "><a href="2_utilities.html"><strong aria-hidden="true"></strong> 2 UTILITIES</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.1_io.html"><strong aria-hidden="true"></strong> 2.1 IO</a></li><li class="chapter-item "><a href="2.2_configurations_system.html"><strong aria-hidden="true"></strong> 2.2 CONFIGURATIONS SYSTEM</a></li><li class="chapter-item "><a href="2.3_calibrations.html"><strong aria-hidden="true"></strong> 2.3 CALIBRATIONS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.3.1_pneumatics.html"><strong aria-hidden="true"></strong> 2.3.1 PNEUMATICS</a></li><li class="chapter-item "><a href="2.3.2_lubrication.html"><strong aria-hidden="true"></strong> 2.3.2 LUBRICATION</a></li><li class="chapter-item "><a href="2.3.3_warmup.html"><strong aria-hidden="true"></strong> 2.3.3 WARMUP</a></li><li class="chapter-item "><a href="2.3.4_oscillator_unit.html"><strong aria-hidden="true"></strong> 2.3.4 OSCILLATOR UNIT</a></li><li class="chapter-item "><a href="2.3.5_angular_sensors.html"><strong aria-hidden="true"></strong> 2.3.5 ANGULAR SENSORS</a></li><li class="chapter-item "><a href="2.3.6_axes.html"><strong aria-hidden="true"></strong> 2.3.6 AXES</a></li><li class="chapter-item "><a href="2.3.7_belt.html"><strong aria-hidden="true"></strong> 2.3.7 BELT</a></li><li class="chapter-item "><a href="2.3.8_pressers.html"><strong aria-hidden="true"></strong> 2.3.8 PRESSERS</a></li><li class="chapter-item "><a href="2.3.9_pieces.html"><strong aria-hidden="true"></strong> 2.3.9 PIECES</a></li><li class="chapter-item "><a href="2.3.10_workings.html"><strong aria-hidden="true"></strong> 2.3.10 WORKINGS</a></li><li class="chapter-item "><a href="2.3.11_other.html"><strong aria-hidden="true"></strong> 2.3.11 OTHER</a></li></ol></li><li class="chapter-item "><a href="2.4_pressers_control.html"><strong aria-hidden="true"></strong> 2.4 PRESSERS CONTROL</a></li></ol></li></ol></li></ol>';
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
