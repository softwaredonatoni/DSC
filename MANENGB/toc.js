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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="maintenance_en-gb.html"><strong aria-hidden="true"></strong> Maintenance EN-GB</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="standard_bridge_saws.html"><strong aria-hidden="true"></strong> STANDARD BRIDGE SAWS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="lubricant_comparison_table.html"><strong aria-hidden="true"></strong> LUBRICANT COMPARISON TABLE</a></li><li class="chapter-item "><a href="mn0001_emergency_circuit_test.html"><strong aria-hidden="true"></strong> MN0001 EMERGENCY CIRCUIT TEST</a></li><li class="chapter-item "><a href="mn0002_monthly_vacuum_pump_maintenance.html"><strong aria-hidden="true"></strong> MN0002 MONTHLY VACUUM PUMP MAINTENANCE</a></li><li class="chapter-item "><a href="mn0003_signal_light_function_test.html"><strong aria-hidden="true"></strong> MN0003 SIGNAL LIGHT FUNCTION TEST</a></li><li class="chapter-item "><a href="mn0004_greasing_move_system_linear_guides.html"><strong aria-hidden="true"></strong> MN0004 GREASING MOVE SYSTEM LINEAR GUIDES</a></li><li class="chapter-item "><a href="mn0005_greasing_z-axis_ball_nut_bearing.html"><strong aria-hidden="true"></strong> MN0005 GREASING Z-AXIS BALL NUT BEARING</a></li><li class="chapter-item "><a href="mn0006_greasing_y-axis_bridge_transmission_shaft_bearings.html"><strong aria-hidden="true"></strong> MN0006 GREASING Y-AXIS BRIDGE TRANSMISSION SHAFT BEARINGS</a></li><li class="chapter-item "><a href="mn0007_checking_the_automatic_greasing_system_lubricant.html"><strong aria-hidden="true"></strong> MN0007 CHECKING THE AUTOMATIC GREASING SYSTEM LUBRICANT</a></li><li class="chapter-item "><a href="mn0008_greasing_tilting_worktable_joints.html"><strong aria-hidden="true"></strong> MN0008 GREASING TILTING WORKTABLE JOINTS</a></li><li class="chapter-item "><a href="mn0009_greasing_console_arm_joint.html"><strong aria-hidden="true"></strong> MN0009 GREASING CONSOLE ARM JOINT</a></li><li class="chapter-item "><a href="mn0010_checking_hydraulic_system_pipes_and_fittings.html"><strong aria-hidden="true"></strong> MN0010 CHECKING HYDRAULIC SYSTEM PIPES AND FITTINGS</a></li><li class="chapter-item "><a href="mn0011_hydraulic_power_unit_oil_change.html"><strong aria-hidden="true"></strong> MN0011 HYDRAULIC POWER UNIT OIL CHANGE</a></li><li class="chapter-item "><a href="mn0012_cleaning_electrical_cabinet_filters.html"><strong aria-hidden="true"></strong> MN0012 CLEANING ELECTRICAL CABINET FILTERS</a></li><li class="chapter-item "><a href="mn0013_compressed_air_inlet_unit_maintenance.html"><strong aria-hidden="true"></strong> MN0013 COMPRESSED AIR INLET UNIT MAINTENANCE</a></li><li class="chapter-item "><a href="mn0014_electrospindle_bearings.html"><strong aria-hidden="true"></strong> MN0014 ELECTROSPINDLE BEARINGS</a></li><li class="chapter-item "><a href="mn0041_greasing_tool_plus_side_spindle_linear_guides.html"><strong aria-hidden="true"></strong> MN0041 GREASING TOOL PLUS SIDE SPINDLE LINEAR GUIDES</a></li><li class="chapter-item "><a href="mn0042_cleaning_pneumatic_system_filter.html"><strong aria-hidden="true"></strong> MN0042 CLEANING PNEUMATIC SYSTEM FILTER</a></li><li class="chapter-item "><a href="mn0043_checking_rotary_union_seal.html"><strong aria-hidden="true"></strong> MN0043 CHECKING ROTARY UNION SEAL</a></li></ol></li><li class="chapter-item "><a href="waterjet.html"><strong aria-hidden="true"></strong> WATERJET</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="mn0044_orifice_replacement.html"><strong aria-hidden="true"></strong> MN0044 ORIFICE REPLACEMENT</a></li><li class="chapter-item "><a href="mn0045_manual_greasing.html"><strong aria-hidden="true"></strong> MN0045 MANUAL GREASING</a></li><li class="chapter-item "><a href="mn0039_cleaning_electrical_cabinet_vent_filters.html"><strong aria-hidden="true"></strong> MN0039 CLEANING ELECTRICAL CABINET VENT FILTERS</a></li><li class="chapter-item "><a href="mn0015_checking_high-pressure_system_pipes_and_fittings.html"><strong aria-hidden="true"></strong> MN0015 CHECKING HIGH-PRESSURE SYSTEM PIPES AND FITTINGS</a></li><li class="chapter-item "><a href="mn0030_checking_the_automatic_greasing_system_lubricant.html"><strong aria-hidden="true"></strong> MN0030 CHECKING THE AUTOMATIC GREASING SYSTEM LUBRICANT</a></li><li class="chapter-item "><a href="mn0016_checking_tank_cleanliness_and_draining.html"><strong aria-hidden="true"></strong> MN0016 CHECKING TANK CLEANLINESS AND DRAINING</a></li><li class="chapter-item "><a href="mn0035_checking_water_quality.html"><strong aria-hidden="true"></strong> MN0035 CHECKING WATER QUALITY</a></li><li class="chapter-item "><a href="mn0040_compressed_air_inlet_unit_maintenance.html"><strong aria-hidden="true"></strong> MN0040 COMPRESSED AIR INLET UNIT MAINTENANCE</a></li><li class="chapter-item "><a href="bft_pump.html"><strong aria-hidden="true"></strong> BFT PUMP</a></li><li class="chapter-item "><a href="donatoni_hydrox_pump.html"><strong aria-hidden="true"></strong> DONATONI HYDROX PUMP</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="mn0046_checking_andor_replacing_hydrox_pump_water_filters.html"><strong aria-hidden="true"></strong> MN0046 CHECKING ANDOR REPLACING HYDROX PUMP WATER FILTERS</a></li><li class="chapter-item "><a href="mn0048_miscellaneous_checks_on_the_hydrox_pump.html"><strong aria-hidden="true"></strong> MN0048 MISCELLANEOUS CHECKS ON THE HYDROX PUMP</a></li><li class="chapter-item "><a href="mn0049_hydrox_pump_oil_replacement.html"><strong aria-hidden="true"></strong> MN0049 HYDROX PUMP OIL REPLACEMENT</a></li><li class="chapter-item "><a href="mn0050_hydrox_pump_oil_replacement.html"><strong aria-hidden="true"></strong> MN0050 HYDROX PUMP OIL REPLACEMENT</a></li><li class="chapter-item "><a href="mn0051_high-pressure_pump_body_maintenance.html"><strong aria-hidden="true"></strong> MN0051 HIGH-PRESSURE PUMP BODY MAINTENANCE</a></li><li class="chapter-item "><a href="mn0052_hydrox_pump_drive_belt_replacement.html"><strong aria-hidden="true"></strong> MN0052 HYDROX PUMP DRIVE BELT REPLACEMENT</a></li></ol></li><li class="chapter-item "><a href="hypertherm_pump.html"><strong aria-hidden="true"></strong> HYPERTHERM PUMP</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="high-pressure_poppet_assembly.html"><strong aria-hidden="true"></strong> HIGH-PRESSURE POPPET ASSEMBLY</a></li><li class="chapter-item "><a href="mn0029_repairing_the_bleed_valve.html"><strong aria-hidden="true"></strong> MN0029 REPAIRING THE BLEED VALVE</a></li><li class="chapter-item "><a href="mn0017_repairing_the_check_valves_and_low-pressure_poppets.html"><strong aria-hidden="true"></strong> MN0017 REPAIRING THE CHECK VALVES AND LOW-PRESSURE POPPETS</a></li><li class="chapter-item "><a href="mn0018_repairing_the_high-pressure_cylinder.html"><strong aria-hidden="true"></strong> MN0018 REPAIRING THE HIGH-PRESSURE CYLINDER</a></li><li class="chapter-item "><a href="mn0019_replacing_the_high-pressure_seal_element_cartridge.html"><strong aria-hidden="true"></strong> MN0019 REPLACING THE HIGH-PRESSURE SEAL ELEMENT CARTRIDGE</a></li><li class="chapter-item "><a href="mn0021_replacing_the_low-pressure_poppet.html"><strong aria-hidden="true"></strong> MN0021 REPLACING THE LOW-PRESSURE POPPET</a></li><li class="chapter-item "><a href="mn0022_reversing_the_high-pressure_cylinder.html"><strong aria-hidden="true"></strong> MN0022 REVERSING THE HIGH-PRESSURE CYLINDER</a></li><li class="chapter-item "><a href="mn0023_replacing_the_high-pressure_cylinder.html"><strong aria-hidden="true"></strong> MN0023 REPLACING THE HIGH-PRESSURE CYLINDER</a></li><li class="chapter-item "><a href="mn0024_replacing_the_check_valve_assembly.html"><strong aria-hidden="true"></strong> MN0024 REPLACING THE CHECK VALVE ASSEMBLY</a></li><li class="chapter-item "><a href="mn0025_replacing_the_seal_element_housing_assembly.html"><strong aria-hidden="true"></strong> MN0025 REPLACING THE SEAL ELEMENT HOUSING ASSEMBLY</a></li><li class="chapter-item "><a href="mn0026_replacing_the_outlet_adapter.html"><strong aria-hidden="true"></strong> MN0026 REPLACING THE OUTLET ADAPTER</a></li><li class="chapter-item "><a href="mn0028_repairing_the_central_hydraulic_section.html"><strong aria-hidden="true"></strong> MN0028 REPAIRING THE CENTRAL HYDRAULIC SECTION</a></li><li class="chapter-item "><a href="mn0034_replacing_the_water_filter.html"><strong aria-hidden="true"></strong> MN0034 REPLACING THE WATER FILTER</a></li><li class="chapter-item "><a href="mn0031_replacing_the_bleed_valve_body.html"><strong aria-hidden="true"></strong> MN0031 REPLACING THE BLEED VALVE BODY</a></li><li class="chapter-item "><a href="mn0032_cleaning_the_air_cooler.html"><strong aria-hidden="true"></strong> MN0032 CLEANING THE AIR COOLER</a></li><li class="chapter-item "><a href="mn0036_replacing_the_hydraulic_filter_element.html"><strong aria-hidden="true"></strong> MN0036 REPLACING THE HYDRAULIC FILTER ELEMENT</a></li><li class="chapter-item "><a href="mn0037_replacing_the_hydraulic_fluid.html"><strong aria-hidden="true"></strong> MN0037 REPLACING THE HYDRAULIC FLUID</a></li><li class="chapter-item "><a href="mn0038_lubricating_the_primary_motor_bearings.html"><strong aria-hidden="true"></strong> MN0038 LUBRICATING THE PRIMARY MOTOR BEARINGS</a></li><li class="chapter-item "><a href="mn0020_replacing_the_high-pressure_poppet_assembly.html"><strong aria-hidden="true"></strong> MN0020 REPLACING THE HIGH-PRESSURE POPPET ASSEMBLY</a></li></ol></li><li class="chapter-item "><a href="mn0047_focuser_replacement.html"><strong aria-hidden="true"></strong> MN0047 FOCUSER REPLACEMENT</a></li><li class="chapter-item "><a href="mn0053_abrasive_hose_replacement.html"><strong aria-hidden="true"></strong> MN0053 ABRASIVE HOSE REPLACEMENT</a></li></ol></li><li class="chapter-item "><a href="safety_instructions.html"><strong aria-hidden="true"></strong> SAFETY INSTRUCTIONS</a></li></ol></li></ol>';
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
