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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="en-gb_zenit_1.26.html"><strong aria-hidden="true"></strong> EN-GB ZENIT 1.26</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="1_foreword.html"><strong aria-hidden="true"></strong> 1 FOREWORD</a></li><li class="chapter-item "><a href="2_machine_description.html"><strong aria-hidden="true"></strong> 2 MACHINE DESCRIPTION</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.1_starting_the_machine.html"><strong aria-hidden="true"></strong> 2.1 STARTING THE MACHINE</a></li><li class="chapter-item "><a href="2.2_shutting_down_the_machine.html"><strong aria-hidden="true"></strong> 2.2 SHUTTING DOWN THE MACHINE</a></li><li class="chapter-item "><a href="2.3_using_the_panel-mounted_control_panel.html"><strong aria-hidden="true"></strong> 2.3 USING THE PANEL-MOUNTED CONTROL PANEL</a></li><li class="chapter-item "><a href="2.4_hardware_and_software_safety_systems.html"><strong aria-hidden="true"></strong> 2.4 HARDWARE AND SOFTWARE SAFETY SYSTEMS</a></li><li class="chapter-item "><a href="2.5_machine_plc_alarms.html"><strong aria-hidden="true"></strong> 2.5 MACHINE PLC ALARMS</a></li></ol></li><li class="chapter-item "><a href="3_the_software.html"><strong aria-hidden="true"></strong> 3 THE SOFTWARE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="3.1_manual_control.html"><strong aria-hidden="true"></strong> 3.1 MANUAL CONTROL</a></li><li class="chapter-item "><a href="3.2_tool_magazine.html"><strong aria-hidden="true"></strong> 3.2 TOOL MAGAZINE</a></li><li class="chapter-item "><a href="3.3_kits_and_materials.html"><strong aria-hidden="true"></strong> 3.3 KITS AND MATERIALS</a></li><li class="chapter-item "><a href="3.4_workpiece_drawing.html"><strong aria-hidden="true"></strong> 3.4 WORKPIECE DRAWING</a></li><li class="chapter-item "><a href="3.5_applying_processes.html"><strong aria-hidden="true"></strong> 3.5 APPLYING PROCESSES</a></li><li class="chapter-item "><a href="3.6_process_verification_and_control.html"><strong aria-hidden="true"></strong> 3.6 PROCESS VERIFICATION AND CONTROL</a></li><li class="chapter-item "><a href="3.7_starting_processing.html"><strong aria-hidden="true"></strong> 3.7 STARTING PROCESSING</a></li><li class="chapter-item "><a href="3.8_ruler.html"><strong aria-hidden="true"></strong> 3.8 RULER</a></li><li class="chapter-item "><a href="3.9_zoom.html"><strong aria-hidden="true"></strong> 3.9 ZOOM</a></li><li class="chapter-item "><a href="3.10_options.html"><strong aria-hidden="true"></strong> 3.10 OPTIONS</a></li><li class="chapter-item "><a href="3.11_other_functions.html"><strong aria-hidden="true"></strong> 3.11 OTHER FUNCTIONS</a></li></ol></li></ol></li></ol>';
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
