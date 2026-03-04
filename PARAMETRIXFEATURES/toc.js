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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="parametrix_features.html"><strong aria-hidden="true">1.</strong> PARAMETRIX FEATURES</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="parametrix.html"><strong aria-hidden="true">1.1.</strong> PARAMETRIX</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="workflow_-_complete.html"><strong aria-hidden="true">1.1.1.</strong> WORKFLOW - COMPLETE</a></li><li class="chapter-item "><a href="workflow_-_cut_management_-_pgm.html"><strong aria-hidden="true">1.1.2.</strong> WORKFLOW - CUT MANAGEMENT - PGM</a></li><li class="chapter-item "><a href="workflow_-_office.html"><strong aria-hidden="true">1.1.3.</strong> WORKFLOW - OFFICE</a></li><li class="chapter-item "><a href="workflow_-_office_-_machine_slabmatching_-_move.html"><strong aria-hidden="true">1.1.4.</strong> WORKFLOW - OFFICE - MACHINE SLABMATCHING - MOVE</a></li><li class="chapter-item "><a href="workflow_-_tool_plus.html"><strong aria-hidden="true">1.1.5.</strong> WORKFLOW - TOOL PLUS</a></li><li class="chapter-item "><a href="workflow_-_double_disk.html"><strong aria-hidden="true">1.1.6.</strong> WORKFLOW - DOUBLE DISK</a></li><li class="chapter-item "><a href="photo.html"><strong aria-hidden="true">1.1.7.</strong> PHOTO</a></li><li class="chapter-item "><a href="photo_-_automatic_perimeter.html"><strong aria-hidden="true">1.1.8.</strong> PHOTO - AUTOMATIC PERIMETER</a></li><li class="chapter-item "><a href="photo_-_external_integration.html"><strong aria-hidden="true">1.1.9.</strong> PHOTO - EXTERNAL INTEGRATION</a></li><li class="chapter-item "><a href="photo_-_dslab_integration.html"><strong aria-hidden="true">1.1.10.</strong> PHOTO - DSLAB INTEGRATION</a></li><li class="chapter-item "><a href="piece_creation.html"><strong aria-hidden="true">1.1.11.</strong> PIECE CREATION</a></li><li class="chapter-item "><a href="piece_creation_-_dxf.html"><strong aria-hidden="true">1.1.12.</strong> PIECE CREATION - DXF</a></li><li class="chapter-item "><a href="piece_creation_-_dxf_-_tag.html"><strong aria-hidden="true">1.1.13.</strong> PIECE CREATION - DXF - TAG</a></li><li class="chapter-item "><a href="piece_creation_-_csv.html"><strong aria-hidden="true">1.1.14.</strong> PIECE CREATION - CSV</a></li><li class="chapter-item "><a href="piece_creation_-_csv_-_workings.html"><strong aria-hidden="true">1.1.15.</strong> PIECE CREATION - CSV - WORKINGS</a></li><li class="chapter-item "><a href="piece_creation_-_ellipse_-_figure_-_dxf.html"><strong aria-hidden="true">1.1.16.</strong> PIECE CREATION - ELLIPSE - FIGURE - DXF</a></li><li class="chapter-item "><a href="modify_piece.html"><strong aria-hidden="true">1.1.17.</strong> MODIFY PIECE</a></li><li class="chapter-item "><a href="modify_piece_-_automatic_working.html"><strong aria-hidden="true">1.1.18.</strong> MODIFY PIECE - AUTOMATIC WORKING</a></li><li class="chapter-item "><a href="easy_match.html"><strong aria-hidden="true">1.1.19.</strong> EASY MATCH</a></li><li class="chapter-item "><a href="project_match.html"><strong aria-hidden="true">1.1.20.</strong> PROJECT MATCH</a></li><li class="chapter-item "><a href="project_match_-_job_simulation_-_nesting.html"><strong aria-hidden="true">1.1.21.</strong> PROJECT MATCH - JOB SIMULATION - NESTING</a></li><li class="chapter-item "><a href="project_match_-_dxf_entities.html"><strong aria-hidden="true">1.1.22.</strong> PROJECT MATCH - DXF ENTITIES</a></li><li class="chapter-item "><a href="project_match_-_paginate.html"><strong aria-hidden="true">1.1.23.</strong> PROJECT MATCH - PAGINATE</a></li><li class="chapter-item "><a href="project_match_-_cutmode.html"><strong aria-hidden="true">1.1.24.</strong> PROJECT MATCH - CUTMODE</a></li><li class="chapter-item "><a href="project_match_-_execution_project.html"><strong aria-hidden="true">1.1.25.</strong> PROJECT MATCH - EXECUTION PROJECT</a></li><li class="chapter-item "><a href="manage_cuts_-_automatic_move.html"><strong aria-hidden="true">1.1.26.</strong> MANAGE CUTS - AUTOMATIC MOVE</a></li><li class="chapter-item "><a href="manage_cuts_-_manual_move.html"><strong aria-hidden="true">1.1.27.</strong> MANAGE CUTS - MANUAL MOVE</a></li><li class="chapter-item "><a href="manage_cuts_-_unload_scrap.html"><strong aria-hidden="true">1.1.28.</strong> MANAGE CUTS - UNLOAD SCRAP</a></li><li class="chapter-item "><a href="manage_cuts_-_stroke_check.html"><strong aria-hidden="true">1.1.29.</strong> MANAGE CUTS - STROKE CHECK</a></li><li class="chapter-item "><a href="manage_cuts_-_operations.html"><strong aria-hidden="true">1.1.30.</strong> MANAGE CUTS - OPERATIONS</a></li><li class="chapter-item "><a href="manage_cuts_-_sx_optimization.html"><strong aria-hidden="true">1.1.31.</strong> MANAGE CUTS - SX OPTIMIZATION</a></li><li class="chapter-item "><a href="dxf_layout_-_import.html"><strong aria-hidden="true">1.1.32.</strong> DXF LAYOUT - IMPORT</a></li><li class="chapter-item "><a href="dxf_layout_-_import_-_slabmatching.html"><strong aria-hidden="true">1.1.33.</strong> DXF LAYOUT - IMPORT - SLABMATCHING</a></li><li class="chapter-item "><a href="dxf_layout_-_export.html"><strong aria-hidden="true">1.1.34.</strong> DXF LAYOUT - EXPORT</a></li><li class="chapter-item "><a href="nesting.html"><strong aria-hidden="true">1.1.35.</strong> NESTING</a></li><li class="chapter-item "><a href="nesting_-_advanced.html"><strong aria-hidden="true">1.1.36.</strong> NESTING - ADVANCED</a></li><li class="chapter-item "><a href="standard_piece.html"><strong aria-hidden="true">1.1.37.</strong> STANDARD PIECE</a></li><li class="chapter-item "><a href="piece_perimeter_offset.html"><strong aria-hidden="true">1.1.38.</strong> PIECE PERIMETER OFFSET</a></li><li class="chapter-item "><a href="statistics.html"><strong aria-hidden="true">1.1.39.</strong> STATISTICS</a></li><li class="chapter-item "><a href="statistics_-_slab_rework.html"><strong aria-hidden="true">1.1.40.</strong> STATISTICS - SLAB REWORK</a></li><li class="chapter-item "><a href="statistics_-_office.html"><strong aria-hidden="true">1.1.41.</strong> STATISTICS - OFFICE</a></li><li class="chapter-item "><a href="labelling.html"><strong aria-hidden="true">1.1.42.</strong> LABELLING</a></li><li class="chapter-item "><a href="recovery_slabs.html"><strong aria-hidden="true">1.1.43.</strong> RECOVERY SLABS</a></li><li class="chapter-item "><a href="slab_matching.html"><strong aria-hidden="true">1.1.44.</strong> SLAB MATCHING</a></li><li class="chapter-item "><a href="combine_cut.html"><strong aria-hidden="true">1.1.45.</strong> COMBINE CUT</a></li><li class="chapter-item "><a href="heading_cuts.html"><strong aria-hidden="true">1.1.46.</strong> HEADING CUTS</a></li><li class="chapter-item "><a href="piece_filters.html"><strong aria-hidden="true">1.1.47.</strong> PIECE FILTERS</a></li><li class="chapter-item "><a href="iso_control_-_z_view.html"><strong aria-hidden="true">1.1.48.</strong> ISO CONTROL - Z VIEW</a></li><li class="chapter-item "><a href="tool_sharpening.html"><strong aria-hidden="true">1.1.49.</strong> TOOL SHARPENING</a></li><li class="chapter-item "><a href="robot_optimization.html"><strong aria-hidden="true">1.1.50.</strong> ROBOT OPTIMIZATION</a></li><li class="chapter-item "><a href="laser.html"><strong aria-hidden="true">1.1.51.</strong> LASER</a></li><li class="chapter-item "><a href="working_parameters.html"><strong aria-hidden="true">1.1.52.</strong> WORKING PARAMETERS</a></li><li class="chapter-item "><a href="working_parameters_-_probe_cut.html"><strong aria-hidden="true">1.1.53.</strong> WORKING PARAMETERS - PROBE CUT</a></li><li class="chapter-item "><a href="working_parameters_-_extend_step_cut.html"><strong aria-hidden="true">1.1.54.</strong> WORKING PARAMETERS - EXTEND STEP CUT</a></li><li class="chapter-item "><a href="references.html"><strong aria-hidden="true">1.1.55.</strong> REFERENCES</a></li></ol></li><li class="chapter-item "><a href="dmes.html"><strong aria-hidden="true">1.2.</strong> DMES</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="configurazione.html"><strong aria-hidden="true">1.2.1.</strong> CONFIGURAZIONE</a></li><li class="chapter-item "><a href="base.html"><strong aria-hidden="true">1.2.2.</strong> BASE</a></li><li class="chapter-item "><a href="label.html"><strong aria-hidden="true">1.2.3.</strong> LABEL</a></li><li class="chapter-item "><a href="slabs.html"><strong aria-hidden="true">1.2.4.</strong> SLABS</a></li><li class="chapter-item "><a href="jobs.html"><strong aria-hidden="true">1.2.5.</strong> JOBS</a></li><li class="chapter-item "><a href="notifiche.html"><strong aria-hidden="true">1.2.6.</strong> NOTIFICHE</a></li><li class="chapter-item "><a href="macchine_aggiuntive_e_area_manuale.html"><strong aria-hidden="true">1.2.7.</strong> MACCHINE AGGIUNTIVE E AREA MANUALE</a></li></ol></li></ol></li></ol>';
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
