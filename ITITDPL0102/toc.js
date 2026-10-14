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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="it-it_d-plant_1.2.html"><strong aria-hidden="true"></strong> IT-IT D-PLANT 1.2</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="1_premesse.html"><strong aria-hidden="true"></strong> 1 PREMESSE</a></li><li class="chapter-item "><a href="2_il_software.html"><strong aria-hidden="true"></strong> 2 IL SOFTWARE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.1_home.html"><strong aria-hidden="true"></strong> 2.1 HOME</a></li><li class="chapter-item "><a href="2.2_servizi.html"><strong aria-hidden="true"></strong> 2.2 SERVIZI</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.2.1_allarmi.html"><strong aria-hidden="true"></strong> 2.2.1 ALLARMI</a></li><li class="chapter-item "><a href="2.2.2_strategie.html"><strong aria-hidden="true"></strong> 2.2.2 STRATEGIE</a></li><li class="chapter-item "><a href="2.2.3_comandi.html"><strong aria-hidden="true"></strong> 2.2.3 COMANDI</a></li><li class="chapter-item "><a href="2.2.4_parametri.html"><strong aria-hidden="true"></strong> 2.2.4 PARAMETRI</a></li><li class="chapter-item "><a href="2.2.5_formati.html"><strong aria-hidden="true"></strong> 2.2.5 FORMATI</a></li></ol></li><li class="chapter-item "><a href="2.3_contenitori.html"><strong aria-hidden="true"></strong> 2.3 CONTENITORI</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.3.1_tipo_contenitori.html"><strong aria-hidden="true"></strong> 2.3.1 TIPO CONTENITORI</a></li><li class="chapter-item "><a href="2.3.2_nuovo_o_modifica_contenitore.html"><strong aria-hidden="true"></strong> 2.3.2 NUOVO O MODIFICA CONTENITORE</a></li><li class="chapter-item "><a href="2.3.3_dettagli_contenitori.html"><strong aria-hidden="true"></strong> 2.3.3 DETTAGLI CONTENITORI</a></li></ol></li><li class="chapter-item "><a href="2.4_grippers.html"><strong aria-hidden="true"></strong> 2.4 GRIPPERS</a></li><li class="chapter-item "><a href="2.5_stazioni.html"><strong aria-hidden="true"></strong> 2.5 STAZIONI</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.5.1_stazioni_scarico.html"><strong aria-hidden="true"></strong> 2.5.1 STAZIONI SCARICO</a></li><li class="chapter-item "><a href="2.5.2_configurazione_scarico.html"><strong aria-hidden="true"></strong> 2.5.2 CONFIGURAZIONE SCARICO</a></li><li class="chapter-item "><a href="2.5.3_stazioni_carico.html"><strong aria-hidden="true"></strong> 2.5.3 STAZIONI CARICO</a></li><li class="chapter-item "><a href="2.5.4_configurazione_carico.html"><strong aria-hidden="true"></strong> 2.5.4 CONFIGURAZIONE CARICO</a></li><li class="chapter-item "><a href="2.5.5_configurazione_layout.html"><strong aria-hidden="true"></strong> 2.5.5 CONFIGURAZIONE LAYOUT</a></li><li class="chapter-item "><a href="2.5.6_lavorazioni_pezzi.html"><strong aria-hidden="true"></strong> 2.5.6 LAVORAZIONI PEZZI</a></li></ol></li><li class="chapter-item "><a href="2.6_materiali.html"><strong aria-hidden="true"></strong> 2.6 MATERIALI</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.6.1_categoria_di_materiali.html"><strong aria-hidden="true"></strong> 2.6.1 CATEGORIA DI MATERIALI</a></li><li class="chapter-item "><a href="2.6.2_materiali.html"><strong aria-hidden="true"></strong> 2.6.2 MATERIALI</a></li><li class="chapter-item "><a href="2.6.3_lastre.html"><strong aria-hidden="true"></strong> 2.6.3 LASTRE</a></li></ol></li><li class="chapter-item "><a href="2.7_strumenti.html"><strong aria-hidden="true"></strong> 2.7 STRUMENTI</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.7.1_variabili_robot.html"><strong aria-hidden="true"></strong> 2.7.1 VARIABILI ROBOT</a></li><li class="chapter-item "><a href="2.7.2_io.html"><strong aria-hidden="true"></strong> 2.7.2 IO</a></li><li class="chapter-item "><a href="2.7.3_posizioni_di_lavoro.html"><strong aria-hidden="true"></strong> 2.7.3 POSIZIONI DI LAVORO</a></li><li class="chapter-item "><a href="2.7.4_log_files.html"><strong aria-hidden="true"></strong> 2.7.4 LOG FILES</a></li></ol></li><li class="chapter-item "><a href="2.8_statistiche.html"><strong aria-hidden="true"></strong> 2.8 STATISTICHE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.8.1_robot.html"><strong aria-hidden="true"></strong> 2.8.1 ROBOT</a></li><li class="chapter-item "><a href="2.8.2_lavorazioni.html"><strong aria-hidden="true"></strong> 2.8.2 LAVORAZIONI</a></li><li class="chapter-item "><a href="2.8.3_contenitori.html"><strong aria-hidden="true"></strong> 2.8.3 CONTENITORI</a></li><li class="chapter-item "><a href="2.8.4_cicli_di_scarico.html"><strong aria-hidden="true"></strong> 2.8.4 CICLI DI SCARICO</a></li><li class="chapter-item "><a href="2.8.5_pezzi.html"><strong aria-hidden="true"></strong> 2.8.5 PEZZI</a></li><li class="chapter-item "><a href="2.8.6_vista_lavorazioni.html"><strong aria-hidden="true"></strong> 2.8.6 VISTA LAVORAZIONI</a></li></ol></li></ol></li></ol></li></ol>';
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
