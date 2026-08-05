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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="parametrix_tutorial_en-gb.html"><strong aria-hidden="true"></strong> PARAMETRIX TUTORIAL EN-GB</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="parametrix_tutorials.html"><strong aria-hidden="true"></strong> PARAMETRIX TUTORIALS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tr0001_complete_workflow.html"><strong aria-hidden="true"></strong> TR0001 COMPLETE WORKFLOW</a></li><li class="chapter-item "><a href="tr0002_cut_management_and_pgm_file.html"><strong aria-hidden="true"></strong> TR0002 CUT MANAGEMENT AND PGM FILE</a></li><li class="chapter-item "><a href="tr0003_photo.html"><strong aria-hidden="true"></strong> TR0003 PHOTO</a></li><li class="chapter-item "><a href="tr0004_piece_creation.html"><strong aria-hidden="true"></strong> TR0004 PIECE CREATION</a></li><li class="chapter-item "><a href="tr0005_piece_management.html"><strong aria-hidden="true"></strong> TR0005 PIECE MANAGEMENT</a></li><li class="chapter-item "><a href="tr0006_automatic_move.html"><strong aria-hidden="true"></strong> TR0006 AUTOMATIC MOVE</a></li><li class="chapter-item "><a href="tr0007_manual_move.html"><strong aria-hidden="true"></strong> TR0007 MANUAL MOVE</a></li><li class="chapter-item "><a href="tr0008_book_match.html"><strong aria-hidden="true"></strong> TR0008 BOOK MATCH</a></li><li class="chapter-item "><a href="tr0009_multi_slab_project_creation.html"><strong aria-hidden="true"></strong> TR0009 MULTI SLAB PROJECT CREATION</a></li><li class="chapter-item "><a href="tr0010_multi_slab_open_workings.html"><strong aria-hidden="true"></strong> TR0010 MULTI SLAB OPEN WORKINGS</a></li><li class="chapter-item "><a href="tr0011_multi_slab_performance.html"><strong aria-hidden="true"></strong> TR0011 MULTI SLAB PERFORMANCE</a></li><li class="chapter-item "><a href="tr0012_csv_jobs.html"><strong aria-hidden="true"></strong> TR0012 CSV JOBS</a></li><li class="chapter-item "><a href="tr0013_help_system.html"><strong aria-hidden="true"></strong> TR0013 HELP SYSTEM</a></li><li class="chapter-item "><a href="tr0014_workings_from_dxf_layers.html"><strong aria-hidden="true"></strong> TR0014 WORKINGS FROM DXF LAYERS</a></li><li class="chapter-item "><a href="tr0015_workings_from_modify_piece.html"><strong aria-hidden="true"></strong> TR0015 WORKINGS FROM MODIFY PIECE</a></li><li class="chapter-item "><a href="tr0016_workings_from_modify_piece_kitchen.html"><strong aria-hidden="true"></strong> TR0016 WORKINGS FROM MODIFY PIECE KITCHEN</a></li><li class="chapter-item "><a href="tr0017_office_work_flow.html"><strong aria-hidden="true"></strong> TR0017 OFFICE WORK FLOW</a></li><li class="chapter-item "><a href="tr0018_slab_matching.html"><strong aria-hidden="true"></strong> TR0018 SLAB MATCHING</a></li><li class="chapter-item "><a href="tr0019_combine_cuts.html"><strong aria-hidden="true"></strong> TR0019 COMBINE CUTS</a></li><li class="chapter-item "><a href="tr0020_standard_piece.html"><strong aria-hidden="true"></strong> TR0020 STANDARD PIECE</a></li><li class="chapter-item "><a href="tr0021_nesting.html"><strong aria-hidden="true"></strong> TR0021 NESTING</a></li><li class="chapter-item "><a href="tr0022_dxf_layout_import.html"><strong aria-hidden="true"></strong> TR0022 DXF LAYOUT IMPORT</a></li><li class="chapter-item "><a href="tr0023_dxf_layout_import.html"><strong aria-hidden="true"></strong> TR0023 DXF LAYOUT IMPORT</a></li><li class="chapter-item "><a href="tr0024_statistics.html"><strong aria-hidden="true"></strong> TR0024 STATISTICS</a></li></ol></li></ol></li></ol>';
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
