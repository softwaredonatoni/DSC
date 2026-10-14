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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="en-gb_d-plant_1.2.html"><strong aria-hidden="true"></strong> EN-GB D-PLANT 1.2</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="1_introduction.html"><strong aria-hidden="true"></strong> 1 INTRODUCTION</a></li><li class="chapter-item "><a href="2_the_software.html"><strong aria-hidden="true"></strong> 2 THE SOFTWARE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.1_home.html"><strong aria-hidden="true"></strong> 2.1 HOME</a></li><li class="chapter-item "><a href="2.2_services.html"><strong aria-hidden="true"></strong> 2.2 SERVICES</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.2.1_alarms.html"><strong aria-hidden="true"></strong> 2.2.1 ALARMS</a></li><li class="chapter-item "><a href="2.2.2_strategies.html"><strong aria-hidden="true"></strong> 2.2.2 STRATEGIES</a></li><li class="chapter-item "><a href="2.2.3_commands.html"><strong aria-hidden="true"></strong> 2.2.3 COMMANDS</a></li><li class="chapter-item "><a href="2.2.4_parameters.html"><strong aria-hidden="true"></strong> 2.2.4 PARAMETERS</a></li><li class="chapter-item "><a href="2.2.5_formats.html"><strong aria-hidden="true"></strong> 2.2.5 FORMATS</a></li></ol></li><li class="chapter-item "><a href="2.3_containers.html"><strong aria-hidden="true"></strong> 2.3 CONTAINERS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.3.1_container_types.html"><strong aria-hidden="true"></strong> 2.3.1 CONTAINER TYPES</a></li><li class="chapter-item "><a href="2.3.2_new_or_edit_container.html"><strong aria-hidden="true"></strong> 2.3.2 NEW OR EDIT CONTAINER</a></li><li class="chapter-item "><a href="2.3.3_container_details.html"><strong aria-hidden="true"></strong> 2.3.3 CONTAINER DETAILS</a></li></ol></li><li class="chapter-item "><a href="2.4_grippers.html"><strong aria-hidden="true"></strong> 2.4 GRIPPERS</a></li><li class="chapter-item "><a href="2.5_stations.html"><strong aria-hidden="true"></strong> 2.5 STATIONS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.5.1_unloading_stations.html"><strong aria-hidden="true"></strong> 2.5.1 UNLOADING STATIONS</a></li><li class="chapter-item "><a href="2.5.2_unloading_configuration.html"><strong aria-hidden="true"></strong> 2.5.2 UNLOADING CONFIGURATION</a></li><li class="chapter-item "><a href="2.5.3_loading_stations.html"><strong aria-hidden="true"></strong> 2.5.3 LOADING STATIONS</a></li><li class="chapter-item "><a href="2.5.4_loading_configuration.html"><strong aria-hidden="true"></strong> 2.5.4 LOADING CONFIGURATION</a></li><li class="chapter-item "><a href="2.5.5_layout_configuration.html"><strong aria-hidden="true"></strong> 2.5.5 LAYOUT CONFIGURATION</a></li><li class="chapter-item "><a href="2.5.6_piece_workings.html"><strong aria-hidden="true"></strong> 2.5.6 PIECE WORKINGS</a></li></ol></li><li class="chapter-item "><a href="2.6_materials.html"><strong aria-hidden="true"></strong> 2.6 MATERIALS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.6.1_material_category.html"><strong aria-hidden="true"></strong> 2.6.1 MATERIAL CATEGORY</a></li><li class="chapter-item "><a href="2.6.2_materials.html"><strong aria-hidden="true"></strong> 2.6.2 MATERIALS</a></li><li class="chapter-item "><a href="2.6.3_slabs.html"><strong aria-hidden="true"></strong> 2.6.3 SLABS</a></li></ol></li><li class="chapter-item "><a href="2.7_tools.html"><strong aria-hidden="true"></strong> 2.7 TOOLS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.7.1_robot_variables.html"><strong aria-hidden="true"></strong> 2.7.1 ROBOT VARIABLES</a></li><li class="chapter-item "><a href="2.7.2_io.html"><strong aria-hidden="true"></strong> 2.7.2 IO</a></li><li class="chapter-item "><a href="2.7.3_working_positions.html"><strong aria-hidden="true"></strong> 2.7.3 WORKING POSITIONS</a></li><li class="chapter-item "><a href="2.7.4_log_files.html"><strong aria-hidden="true"></strong> 2.7.4 LOG FILES</a></li></ol></li><li class="chapter-item "><a href="2.8_statistics.html"><strong aria-hidden="true"></strong> 2.8 STATISTICS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.8.1_robot.html"><strong aria-hidden="true"></strong> 2.8.1 ROBOT</a></li><li class="chapter-item "><a href="2.8.2_workings.html"><strong aria-hidden="true"></strong> 2.8.2 WORKINGS</a></li><li class="chapter-item "><a href="2.8.3_containers.html"><strong aria-hidden="true"></strong> 2.8.3 CONTAINERS</a></li><li class="chapter-item "><a href="2.8.4_unloading_cycles.html"><strong aria-hidden="true"></strong> 2.8.4 UNLOADING CYCLES</a></li><li class="chapter-item "><a href="2.8.5_pieces.html"><strong aria-hidden="true"></strong> 2.8.5 PIECES</a></li><li class="chapter-item "><a href="2.8.6_workings_view.html"><strong aria-hidden="true"></strong> 2.8.6 WORKINGS VIEW</a></li></ol></li></ol></li></ol></li></ol>';
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
