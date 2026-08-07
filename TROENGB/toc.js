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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="troubleshootings_en-gb.html"><strong aria-hidden="true"></strong> Troubleshootings EN-GB</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="troubleshooting_articles.html"><strong aria-hidden="true"></strong> TROUBLESHOOTING ARTICLES</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="pe0000_general_emergency.html"><strong aria-hidden="true"></strong> PE0000 GENERAL EMERGENCY</a></li><li class="chapter-item "><a href="pe0003_mains_power_failure.html"><strong aria-hidden="true"></strong> PE0003 MAINS POWER FAILURE</a></li><li class="chapter-item "><a href="pe0005_control_enable_missing.html"><strong aria-hidden="true"></strong> PE0005 CONTROL ENABLE MISSING</a></li><li class="chapter-item "><a href="pe0006_worktable_pump_thermal_protection_active.html"><strong aria-hidden="true"></strong> PE0006 WORKTABLE PUMP THERMAL PROTECTION ACTIVE</a></li><li class="chapter-item "><a href="pe0007_saw_blade_thermal_protection_active.html"><strong aria-hidden="true"></strong> PE0007 SAW BLADE THERMAL PROTECTION ACTIVE</a></li><li class="chapter-item "><a href="pe0008_collision_limit_switch_active.html"><strong aria-hidden="true"></strong> PE0008 COLLISION LIMIT SWITCH ACTIVE</a></li><li class="chapter-item "><a href="pe0009_collision_position_request.html"><strong aria-hidden="true"></strong> PE0009 COLLISION POSITION REQUEST</a></li><li class="chapter-item "><a href="pe0010_x-axis_overcurrent.html"><strong aria-hidden="true"></strong> PE0010 X-AXIS OVERCURRENT</a></li><li class="chapter-item "><a href="pe0011_y-axis_overcurrent.html"><strong aria-hidden="true"></strong> PE0011 Y-AXIS OVERCURRENT</a></li><li class="chapter-item "><a href="pe0012_z-axis_overcurrent.html"><strong aria-hidden="true"></strong> PE0012 Z-AXIS OVERCURRENT</a></li><li class="chapter-item "><a href="pe0013_a-axis_overcurrent.html"><strong aria-hidden="true"></strong> PE0013 A-AXIS OVERCURRENT</a></li><li class="chapter-item "><a href="pe0014_c-axis_overcurrent.html"><strong aria-hidden="true"></strong> PE0014 C-AXIS OVERCURRENT</a></li><li class="chapter-item "><a href="pe0015_spindle_overcurrent.html"><strong aria-hidden="true"></strong> PE0015 SPINDLE OVERCURRENT</a></li><li class="chapter-item "><a href="pe0016_water_missing.html"><strong aria-hidden="true"></strong> PE0016 WATER MISSING</a></li><li class="chapter-item "><a href="pe0018_zero_feed_set__0.html"><strong aria-hidden="true"></strong> PE0018 ZERO FEED SET  0</a></li><li class="chapter-item "><a href="pe0019_drive_error.html"><strong aria-hidden="true"></strong> PE0019 DRIVE ERROR</a></li><li class="chapter-item "><a href="pe0021_tilting_table_not_in_position.html"><strong aria-hidden="true"></strong> PE0021 TILTING TABLE NOT IN POSITION</a></li><li class="chapter-item "><a href="pe0023_muting_active.html"><strong aria-hidden="true"></strong> PE0023 MUTING ACTIVE</a></li><li class="chapter-item "><a href="pe0027_internal_water_missing.html"><strong aria-hidden="true"></strong> PE0027 INTERNAL WATER MISSING</a></li><li class="chapter-item "><a href="pe0028_a_axis_not_in_correct_position.html"><strong aria-hidden="true"></strong> PE0028 A AXIS NOT IN CORRECT POSITION</a></li><li class="chapter-item "><a href="pe0029_lubrication_system_fault.html"><strong aria-hidden="true"></strong> PE0029 LUBRICATION SYSTEM FAULT</a></li><li class="chapter-item "><a href="pe0031_electrical_cabinet_overtemperature.html"><strong aria-hidden="true"></strong> PE0031 ELECTRICAL CABINET OVERTEMPERATURE</a></li><li class="chapter-item "><a href="pe0041_ch_0_program_without_m2-m30.html"><strong aria-hidden="true"></strong> PE0041 CH 0 PROGRAM WITHOUT M2-M30</a></li><li class="chapter-item "><a href="pe0065_vacuum_pump_thermal_protection_active.html"><strong aria-hidden="true"></strong> PE0065 VACUUM PUMP THERMAL PROTECTION ACTIVE</a></li><li class="chapter-item "><a href="pe0066_air_missing.html"><strong aria-hidden="true"></strong> PE0066 AIR MISSING</a></li><li class="chapter-item "><a href="pe0067_vacuum_not_generated.html"><strong aria-hidden="true"></strong> PE0067 VACUUM NOT GENERATED</a></li><li class="chapter-item "><a href="pe0069_suction_cups_not_in_parking_position.html"><strong aria-hidden="true"></strong> PE0069 SUCTION CUPS NOT IN PARKING POSITION</a></li><li class="chapter-item "><a href="pe0070_suction_cups_already_in_contact_(error).html"><strong aria-hidden="true"></strong> PE0070 SUCTION CUPS ALREADY IN CONTACT (ERROR)</a></li><li class="chapter-item "><a href="pe0095_inverter_alarm.html"><strong aria-hidden="true"></strong> PE0095 INVERTER ALARM</a></li><li class="chapter-item "><a href="pm0011_probe_piston_out_of_position.html"><strong aria-hidden="true"></strong> PM0011 PROBE PISTON OUT OF POSITION</a></li></ol></li><li class="chapter-item "><a href="safety_instructions.html"><strong aria-hidden="true"></strong> SAFETY INSTRUCTIONS</a></li></ol></li></ol>';
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
