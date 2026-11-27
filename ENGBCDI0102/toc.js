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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="en-gb_cdi_1.2.html"><strong aria-hidden="true"></strong> EN-GB CDI 1.2</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="1_introduction.html"><strong aria-hidden="true"></strong> 1 INTRODUCTION</a></li><li class="chapter-item "><a href="2_cdi_software.html"><strong aria-hidden="true"></strong> 2 CDI SOFTWARE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.1_dashboard.html"><strong aria-hidden="true"></strong> 2.1 DASHBOARD</a></li><li class="chapter-item "><a href="2.2_services.html"><strong aria-hidden="true"></strong> 2.2 SERVICES</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.2.1_water.html"><strong aria-hidden="true"></strong> 2.2.1 WATER</a></li><li class="chapter-item "><a href="2.2.2_spindle.html"><strong aria-hidden="true"></strong> 2.2.2 SPINDLE</a></li><li class="chapter-item "><a href="2.2.3_miscellaneous.html"><strong aria-hidden="true"></strong> 2.2.3 MISCELLANEOUS</a></li></ol></li><li class="chapter-item "><a href="2.3_origins.html"><strong aria-hidden="true"></strong> 2.3 ORIGINS</a></li><li class="chapter-item "><a href="2.4_tool_magazine.html"><strong aria-hidden="true"></strong> 2.4 TOOL MAGAZINE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.4.1_new_tool.html"><strong aria-hidden="true"></strong> 2.4.1 NEW TOOL</a></li><li class="chapter-item "><a href="2.4.2_tool_details.html"><strong aria-hidden="true"></strong> 2.4.2 TOOL DETAILS</a></li></ol></li><li class="chapter-item "><a href="2.5_programs.html"><strong aria-hidden="true"></strong> 2.5 PROGRAMS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.5.1_cnc_parameters.html"><strong aria-hidden="true"></strong> 2.5.1 CNC PARAMETERS</a></li></ol></li><li class="chapter-item "><a href="2.6_restart.html"><strong aria-hidden="true"></strong> 2.6 RESTART</a></li><li class="chapter-item "><a href="2.7_execution.html"><strong aria-hidden="true"></strong> 2.7 EXECUTION</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.7.1_mounted_tool.html"><strong aria-hidden="true"></strong> 2.7.1 MOUNTED TOOL</a></li><li class="chapter-item "><a href="2.7.2_robot.html"><strong aria-hidden="true"></strong> 2.7.2 ROBOT</a></li><li class="chapter-item "><a href="2.7.3_programs.html"><strong aria-hidden="true"></strong> 2.7.3 PROGRAMS</a></li><li class="chapter-item "><a href="2.7.4_manual_commands.html"><strong aria-hidden="true"></strong> 2.7.4 MANUAL COMMANDS</a></li></ol></li><li class="chapter-item "><a href="2.8_jobs.html"><strong aria-hidden="true"></strong> 2.8 JOBS</a></li></ol></li></ol></li></ol>';
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
