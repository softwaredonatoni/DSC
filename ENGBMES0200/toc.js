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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="en-gb_d-mes_2.0.html"><strong aria-hidden="true"></strong> EN-GB D-MES 2.0</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="1_introduction.html"><strong aria-hidden="true"></strong> 1 INTRODUCTION</a></li><li class="chapter-item "><a href="2_dmes.html"><strong aria-hidden="true"></strong> 2 DMES</a></li><li class="chapter-item "><a href="3_dmes_core.html"><strong aria-hidden="true"></strong> 3 DMES CORE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="3.1_machine_info.html"><strong aria-hidden="true"></strong> 3.1 MACHINE INFO</a></li><li class="chapter-item "><a href="3.2_production.html"><strong aria-hidden="true"></strong> 3.2 PRODUCTION</a></li><li class="chapter-item "><a href="3.3_statistics.html"><strong aria-hidden="true"></strong> 3.3 STATISTICS</a></li><li class="chapter-item "><a href="3.4_tools.html"><strong aria-hidden="true"></strong> 3.4 TOOLS</a></li></ol></li><li class="chapter-item "><a href="4_dmes_trace.html"><strong aria-hidden="true"></strong> 4 DMES TRACE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="4.1_working_management.html"><strong aria-hidden="true"></strong> 4.1 WORKING MANAGEMENT</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="4.1.1_working_stages.html"><strong aria-hidden="true"></strong> 4.1.1 WORKING STAGES</a></li><li class="chapter-item "><a href="4.1.2_working_info.html"><strong aria-hidden="true"></strong> 4.1.2 WORKING INFO</a></li><li class="chapter-item "><a href="4.1.3_print_labels.html"><strong aria-hidden="true"></strong> 4.1.3 PRINT LABELS</a></li></ol></li><li class="chapter-item "><a href="4.2_contacts.html"><strong aria-hidden="true"></strong> 4.2 CONTACTS</a></li><li class="chapter-item "><a href="4.3_customers.html"><strong aria-hidden="true"></strong> 4.3 CUSTOMERS</a></li><li class="chapter-item "><a href="4.4_suppliers.html"><strong aria-hidden="true"></strong> 4.4 SUPPLIERS</a></li></ol></li><li class="chapter-item "><a href="5_dmes_matrix.html"><strong aria-hidden="true"></strong> 5 DMES MATRIX</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="5.1_material_categories.html"><strong aria-hidden="true"></strong> 5.1 MATERIAL CATEGORIES</a></li><li class="chapter-item "><a href="5.2_materials.html"><strong aria-hidden="true"></strong> 5.2 MATERIALS</a></li><li class="chapter-item "><a href="5.3_material_colors.html"><strong aria-hidden="true"></strong> 5.3 MATERIAL COLORS</a></li><li class="chapter-item "><a href="5.4_slabs.html"><strong aria-hidden="true"></strong> 5.4 SLABS</a></li><li class="chapter-item "><a href="5.5_blocks.html"><strong aria-hidden="true"></strong> 5.5 BLOCKS</a></li><li class="chapter-item "><a href="5.6_slabs.html"><strong aria-hidden="true"></strong> 5.6 SLABS</a></li><li class="chapter-item "><a href="5.7_slab_search.html"><strong aria-hidden="true"></strong> 5.7 SLAB SEARCH</a></li></ol></li><li class="chapter-item "><a href="6_dmes_pro.html"><strong aria-hidden="true"></strong> 6 DMES PRO</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="6.1_working_options.html"><strong aria-hidden="true"></strong> 6.1 WORKING OPTIONS</a></li><li class="chapter-item "><a href="6.2_users.html"><strong aria-hidden="true"></strong> 6.2 USERS</a></li><li class="chapter-item "><a href="6.3_users.html"><strong aria-hidden="true"></strong> 6.3 USERS</a></li><li class="chapter-item "><a href="6.4_user_groups.html"><strong aria-hidden="true"></strong> 6.4 USER GROUPS</a></li><li class="chapter-item "><a href="6.5_activities.html"><strong aria-hidden="true"></strong> 6.5 ACTIVITIES</a></li><li class="chapter-item "><a href="6.6_activities_in_progress.html"><strong aria-hidden="true"></strong> 6.6 ACTIVITIES IN PROGRESS</a></li></ol></li><li class="chapter-item "><a href="7_stations.html"><strong aria-hidden="true"></strong> 7 STATIONS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="7.1_production.html"><strong aria-hidden="true"></strong> 7.1 PRODUCTION</a></li><li class="chapter-item "><a href="7.2_user_management.html"><strong aria-hidden="true"></strong> 7.2 USER MANAGEMENT</a></li><li class="chapter-item "><a href="7.3_activity_management.html"><strong aria-hidden="true"></strong> 7.3 ACTIVITY MANAGEMENT</a></li></ol></li><li class="chapter-item "><a href="8_settings.html"><strong aria-hidden="true"></strong> 8 SETTINGS</a></li></ol></li></ol>';
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
