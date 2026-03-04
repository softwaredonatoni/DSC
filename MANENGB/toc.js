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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="maintenance_en-gb_home.html"><strong aria-hidden="true">1.</strong> Maintenance EN-GB Home</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="standard_saw.html"><strong aria-hidden="true">1.1.</strong> STANDARD SAW</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="lubricant_comparison_table.html"><strong aria-hidden="true">1.1.1.</strong> LUBRICANT COMPARISON TABLE</a></li><li class="chapter-item "><a href="mn0001_emergency_circuit_test.html"><strong aria-hidden="true">1.1.2.</strong> MN0001 EMERGENCY CIRCUIT TEST</a></li><li class="chapter-item "><a href="mn0002_monthly_maintenance_vacuum_pump.html"><strong aria-hidden="true">1.1.3.</strong> MN0002 MONTHLY MAINTENANCE VACUUM PUMP</a></li><li class="chapter-item "><a href="mn0003_test_operation_light_signal.html"><strong aria-hidden="true">1.1.4.</strong> MN0003 TEST OPERATION LIGHT SIGNAL</a></li><li class="chapter-item "><a href="mn0004_linear_guides_grassing_move_system.html"><strong aria-hidden="true">1.1.5.</strong> MN0004 LINEAR GUIDES GRASSING MOVE SYSTEM</a></li><li class="chapter-item "><a href="mn0005_greasing_bearing_spiral_axe_z.html"><strong aria-hidden="true">1.1.6.</strong> MN0005 GREASING BEARING SPIRAL AXE Z</a></li><li class="chapter-item "><a href="mn0006_greasing_bearings_transmission_shaft_bridge_axis_y.html"><strong aria-hidden="true">1.1.7.</strong> MN0006 GREASING BEARINGS TRANSMISSION SHAFT BRIDGE AXIS Y</a></li><li class="chapter-item "><a href="mn0007_check_greasing_system_of_automatic_greasing.html"><strong aria-hidden="true">1.1.8.</strong> MN0007 CHECK GREASING SYSTEM OF AUTOMATIC GREASING</a></li><li class="chapter-item "><a href="mn0008_grasing_of_the_tilting_bench_pivots.html"><strong aria-hidden="true">1.1.9.</strong> MN0008 GRASING OF THE TILTING BENCH PIVOTS</a></li><li class="chapter-item "><a href="mn0009_grassing_of_swivel_arm_console.html"><strong aria-hidden="true">1.1.10.</strong> MN0009 GRASSING OF SWIVEL ARM CONSOLE</a></li><li class="chapter-item "><a href="mn0010_check_pipes_and_fittings_hydraulic_system.html"><strong aria-hidden="true">1.1.11.</strong> MN0010 CHECK PIPES AND FITTINGS HYDRAULIC SYSTEM</a></li><li class="chapter-item "><a href="mn0011_oil_change_hydraulic_control_unit.html"><strong aria-hidden="true">1.1.12.</strong> MN0011 OIL CHANGE HYDRAULIC CONTROL UNIT</a></li><li class="chapter-item "><a href="mn0012_clean_filters_electrical_cabinet.html"><strong aria-hidden="true">1.1.13.</strong> MN0012 CLEAN FILTERS ELECTRICAL CABINET</a></li><li class="chapter-item "><a href="mn0013_maintenance_compressed_air_intake_group.html"><strong aria-hidden="true">1.1.14.</strong> MN0013 MAINTENANCE COMPRESSED AIR INTAKE GROUP</a></li><li class="chapter-item "><a href="mn0014_spindle_bearings.html"><strong aria-hidden="true">1.1.15.</strong> MN0014 SPINDLE BEARINGS</a></li><li class="chapter-item "><a href="mn0041_greasing_linear_guides_spindle_lateral_tool_plus.html"><strong aria-hidden="true">1.1.16.</strong> MN0041 GREASING LINEAR GUIDES SPINDLE LATERAL TOOL PLUS</a></li><li class="chapter-item "><a href="mn0042_pneumatic_system_filter_cleaning.html"><strong aria-hidden="true">1.1.17.</strong> MN0042 PNEUMATIC SYSTEM FILTER CLEANING</a></li><li class="chapter-item "><a href="mn0043_verify_seal_rotating.html"><strong aria-hidden="true">1.1.18.</strong> MN0043 VERIFY SEAL ROTATING</a></li></ol></li><li class="chapter-item "><a href="waterjet.html"><strong aria-hidden="true">1.2.</strong> WATERJET</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="mn0015_check_pipes_and_fittings_of_high-pressure_system.html"><strong aria-hidden="true">1.2.1.</strong> MN0015 CHECK PIPES AND FITTINGS OF HIGH-PRESSURE SYSTEM</a></li><li class="chapter-item "><a href="mn0016_check_of_the_bath_cleaning_status.html"><strong aria-hidden="true">1.2.2.</strong> MN0016 CHECK OF THE BATH CLEANING STATUS</a></li><li class="chapter-item "><a href="mn0017_repair_the_check_valves_and_the_gates_for_the_low_pressure.html"><strong aria-hidden="true">1.2.3.</strong> MN0017 REPAIR THE CHECK VALVES AND THE GATES FOR THE LOW PRESSURE</a></li><li class="chapter-item "><a href="mn0018_repair_the_high_pressure_cylinder.html"><strong aria-hidden="true">1.2.4.</strong> MN0018 REPAIR THE HIGH PRESSURE CYLINDER</a></li><li class="chapter-item "><a href="mn0019_replace_the_cartridge_of_the_high_pressure_seal_element.html"><strong aria-hidden="true">1.2.5.</strong> MN0019 REPLACE THE CARTRIDGE OF THE HIGH PRESSURE SEAL ELEMENT</a></li><li class="chapter-item "><a href="mn0020_replace_the_shutter_group_for_high_pressure.html"><strong aria-hidden="true">1.2.6.</strong> MN0020 REPLACE THE SHUTTER GROUP FOR HIGH PRESSURE</a></li><li class="chapter-item "><a href="mn0021_replace_the_damper_for_low_pressure.html"><strong aria-hidden="true">1.2.7.</strong> MN0021 REPLACE THE DAMPER FOR LOW PRESSURE</a></li><li class="chapter-item "><a href="mn0022_invert_the_high-pressure_cylinder.html"><strong aria-hidden="true">1.2.8.</strong> MN0022 INVERT THE HIGH-PRESSURE CYLINDER</a></li><li class="chapter-item "><a href="mn0023_replace_the_high_pressure_cylinder.html"><strong aria-hidden="true">1.2.9.</strong> MN0023 REPLACE THE HIGH PRESSURE CYLINDER</a></li><li class="chapter-item "><a href="mn0024_replace_the_check_valve_group.html"><strong aria-hidden="true">1.2.10.</strong> MN0024 REPLACE THE CHECK VALVE GROUP</a></li><li class="chapter-item "><a href="mn0025_replace_the_seal_element_housing_group.html"><strong aria-hidden="true">1.2.11.</strong> MN0025 REPLACE THE SEAL ELEMENT HOUSING GROUP</a></li><li class="chapter-item "><a href="mn0026_replace_the_output_adapter.html"><strong aria-hidden="true">1.2.12.</strong> MN0026 REPLACE THE OUTPUT ADAPTER</a></li><li class="chapter-item "><a href="mn0027.html"><strong aria-hidden="true">1.2.13.</strong> MN0027</a></li><li class="chapter-item "><a href="mn0028_repair_of_central_hydraulic_section.html"><strong aria-hidden="true">1.2.14.</strong> MN0028 REPAIR OF CENTRAL HYDRAULIC SECTION</a></li><li class="chapter-item "><a href="mn0029_repair_the_purge_valve.html"><strong aria-hidden="true">1.2.15.</strong> MN0029 REPAIR THE PURGE VALVE</a></li><li class="chapter-item "><a href="mn0030_lubrication_check_automatic_greasing_system.html"><strong aria-hidden="true">1.2.16.</strong> MN0030 LUBRICATION CHECK AUTOMATIC GREASING SYSTEM</a></li><li class="chapter-item "><a href="mn0031_replace_the_valve_body.html"><strong aria-hidden="true">1.2.17.</strong> MN0031 REPLACE THE VALVE BODY</a></li><li class="chapter-item "><a href="mn0032_clean_the_air_cooler.html"><strong aria-hidden="true">1.2.18.</strong> MN0032 CLEAN THE AIR COOLER</a></li><li class="chapter-item "><a href="mn0033.html"><strong aria-hidden="true">1.2.19.</strong> MN0033</a></li><li class="chapter-item "><a href="mn0034_replace_water_filter.html"><strong aria-hidden="true">1.2.20.</strong> MN0034 REPLACE WATER FILTER</a></li><li class="chapter-item "><a href="mn0035_check_the_water_quality.html"><strong aria-hidden="true">1.2.21.</strong> MN0035 CHECK THE WATER QUALITY</a></li><li class="chapter-item "><a href="mn0036_replace_the_hydraulic_filter_element.html"><strong aria-hidden="true">1.2.22.</strong> MN0036 REPLACE THE HYDRAULIC FILTER ELEMENT</a></li><li class="chapter-item "><a href="mn0037_replace_the_hydraulic_fluid.html"><strong aria-hidden="true">1.2.23.</strong> MN0037 REPLACE THE HYDRAULIC FLUID</a></li><li class="chapter-item "><a href="mn0038_lubricate_the_bearings_of_the_main_motor.html"><strong aria-hidden="true">1.2.24.</strong> MN0038 LUBRICATE THE BEARINGS OF THE MAIN MOTOR</a></li><li class="chapter-item "><a href="mn0039_cleaning_filters_air_intakes_electrical_cabinet.html"><strong aria-hidden="true">1.2.25.</strong> MN0039 CLEANING FILTERS AIR INTAKES ELECTRICAL CABINET</a></li><li class="chapter-item "><a href="mn0040_maintenance_air_compressor_infeed_group.html"><strong aria-hidden="true">1.2.26.</strong> MN0040 MAINTENANCE AIR COMPRESSOR INFEED GROUP</a></li><li class="chapter-item "><a href="bft_pump.html"><strong aria-hidden="true">1.2.27.</strong> BFT PUMP</a></li><li class="chapter-item "><a href="donatoni_pump.html"><strong aria-hidden="true">1.2.28.</strong> DONATONI PUMP</a></li><li class="chapter-item "><a href="hypertherm_pump.html"><strong aria-hidden="true">1.2.29.</strong> HYPERTHERM PUMP</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="group_shutter_for_high_pressure.html"><strong aria-hidden="true">1.2.29.1.</strong> GROUP SHUTTER FOR HIGH PRESSURE</a></li></ol></li></ol></li><li class="chapter-item "><a href="safety_instructions.html"><strong aria-hidden="true">1.3.</strong> SAFETY INSTRUCTIONS</a></li></ol></li></ol>';
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
