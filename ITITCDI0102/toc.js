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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="it-it_cdi_1.2.html"><strong aria-hidden="true"></strong> IT-IT CDI 1.2</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="1_premesse.html"><strong aria-hidden="true"></strong> 1 PREMESSE</a></li><li class="chapter-item "><a href="2_software_cdi.html"><strong aria-hidden="true"></strong> 2 SOFTWARE CDI</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.1_dashboard.html"><strong aria-hidden="true"></strong> 2.1 DASHBOARD</a></li><li class="chapter-item "><a href="2.2_servizi.html"><strong aria-hidden="true"></strong> 2.2 SERVIZI</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.2.1_acqua.html"><strong aria-hidden="true"></strong> 2.2.1 ACQUA</a></li><li class="chapter-item "><a href="2.2.2_mandrino.html"><strong aria-hidden="true"></strong> 2.2.2 MANDRINO</a></li><li class="chapter-item "><a href="2.2.3_varie.html"><strong aria-hidden="true"></strong> 2.2.3 VARIE</a></li></ol></li><li class="chapter-item "><a href="2.3_origini.html"><strong aria-hidden="true"></strong> 2.3 ORIGINI</a></li><li class="chapter-item "><a href="2.4_magazzino_utensili.html"><strong aria-hidden="true"></strong> 2.4 MAGAZZINO UTENSILI</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.4.1_nuovo_utensile.html"><strong aria-hidden="true"></strong> 2.4.1 NUOVO UTENSILE</a></li><li class="chapter-item "><a href="2.4.2_dettagli_utensile.html"><strong aria-hidden="true"></strong> 2.4.2 DETTAGLI UTENSILE</a></li></ol></li><li class="chapter-item "><a href="2.5_programmi.html"><strong aria-hidden="true"></strong> 2.5 PROGRAMMI</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.5.1_parametri_cnc.html"><strong aria-hidden="true"></strong> 2.5.1 PARAMETRI CNC</a></li></ol></li><li class="chapter-item "><a href="2.6_restart.html"><strong aria-hidden="true"></strong> 2.6 RESTART</a></li><li class="chapter-item "><a href="2.7_esecuzione.html"><strong aria-hidden="true"></strong> 2.7 ESECUZIONE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.7.1_utensile_montato.html"><strong aria-hidden="true"></strong> 2.7.1 UTENSILE MONTATO</a></li><li class="chapter-item "><a href="2.7.2_robot.html"><strong aria-hidden="true"></strong> 2.7.2 ROBOT</a></li><li class="chapter-item "><a href="2.7.3_programmi.html"><strong aria-hidden="true"></strong> 2.7.3 PROGRAMMI</a></li><li class="chapter-item "><a href="2.7.4_comandi_manuali.html"><strong aria-hidden="true"></strong> 2.7.4 COMANDI MANUALI</a></li></ol></li><li class="chapter-item "><a href="2.8_commesse.html"><strong aria-hidden="true"></strong> 2.8 COMMESSE</a></li></ol></li></ol></li></ol>';
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
