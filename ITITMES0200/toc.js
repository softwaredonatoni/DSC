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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="it-it_d-mes_2.0.html"><strong aria-hidden="true"></strong> IT-IT D-MES 2.0</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="1_premesse.html"><strong aria-hidden="true"></strong> 1 PREMESSE</a></li><li class="chapter-item "><a href="2_dmes.html"><strong aria-hidden="true"></strong> 2 DMES</a></li><li class="chapter-item "><a href="3_dmes_core.html"><strong aria-hidden="true"></strong> 3 DMES CORE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="3.1_info_macchina.html"><strong aria-hidden="true"></strong> 3.1 INFO MACCHINA</a></li><li class="chapter-item "><a href="3.2_produzione.html"><strong aria-hidden="true"></strong> 3.2 PRODUZIONE</a></li><li class="chapter-item "><a href="3.3_statistiche.html"><strong aria-hidden="true"></strong> 3.3 STATISTICHE</a></li><li class="chapter-item "><a href="3.4_utensili.html"><strong aria-hidden="true"></strong> 3.4 UTENSILI</a></li></ol></li><li class="chapter-item "><a href="4_dmes_trace.html"><strong aria-hidden="true"></strong> 4 DMES TRACE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="4.1_gestione_di_una_lavorazione.html"><strong aria-hidden="true"></strong> 4.1 GESTIONE DI UNA LAVORAZIONE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="4.1.1_fasi_di_lavorazione.html"><strong aria-hidden="true"></strong> 4.1.1 FASI DI LAVORAZIONE</a></li><li class="chapter-item "><a href="4.1.2_info_lavorazione.html"><strong aria-hidden="true"></strong> 4.1.2 INFO LAVORAZIONE</a></li><li class="chapter-item "><a href="4.1.3_stampa_etichette.html"><strong aria-hidden="true"></strong> 4.1.3 STAMPA ETICHETTE</a></li></ol></li><li class="chapter-item "><a href="4.2_contatti.html"><strong aria-hidden="true"></strong> 4.2 CONTATTI</a></li><li class="chapter-item "><a href="4.3_clienti.html"><strong aria-hidden="true"></strong> 4.3 CLIENTI</a></li><li class="chapter-item "><a href="4.4_fornitori.html"><strong aria-hidden="true"></strong> 4.4 FORNITORI</a></li></ol></li><li class="chapter-item "><a href="5_dmes_matrix.html"><strong aria-hidden="true"></strong> 5 DMES MATRIX</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="5.1_categoria_materiali.html"><strong aria-hidden="true"></strong> 5.1 CATEGORIA MATERIALI</a></li><li class="chapter-item "><a href="5.2_materiali.html"><strong aria-hidden="true"></strong> 5.2 MATERIALI</a></li><li class="chapter-item "><a href="5.3_colore_materiali.html"><strong aria-hidden="true"></strong> 5.3 COLORE MATERIALI</a></li><li class="chapter-item "><a href="5.4_slabs.html"><strong aria-hidden="true"></strong> 5.4 SLABS</a></li><li class="chapter-item "><a href="5.5__blocchi.html"><strong aria-hidden="true"></strong> 5.5  BLOCCHI</a></li><li class="chapter-item "><a href="5.6_lastre.html"><strong aria-hidden="true"></strong> 5.6 LASTRE</a></li><li class="chapter-item "><a href="5.7_ricerca_lastre.html"><strong aria-hidden="true"></strong> 5.7 RICERCA LASTRE</a></li></ol></li><li class="chapter-item "><a href="6_dmes_pro.html"><strong aria-hidden="true"></strong> 6 DMES PRO</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="6.1_opzioni_lavorazioni.html"><strong aria-hidden="true"></strong> 6.1 OPZIONI LAVORAZIONI</a></li><li class="chapter-item "><a href="6.2_users.html"><strong aria-hidden="true"></strong> 6.2 USERS</a></li><li class="chapter-item "><a href="6.3_utenti.html"><strong aria-hidden="true"></strong> 6.3 UTENTI</a></li><li class="chapter-item "><a href="6.4__gruppi_utente.html"><strong aria-hidden="true"></strong> 6.4  GRUPPI UTENTE</a></li><li class="chapter-item "><a href="6.5__attivita.html"><strong aria-hidden="true"></strong> 6.5  ATTIVITA</a></li><li class="chapter-item "><a href="6.6__attivita_in_esecuzione.html"><strong aria-hidden="true"></strong> 6.6  ATTIVITA IN ESECUZIONE</a></li></ol></li><li class="chapter-item "><a href="7_stations.html"><strong aria-hidden="true"></strong> 7 STATIONS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="7.1_produzione.html"><strong aria-hidden="true"></strong> 7.1 PRODUZIONE</a></li><li class="chapter-item "><a href="7.2_gestione_utenti.html"><strong aria-hidden="true"></strong> 7.2 GESTIONE UTENTI</a></li><li class="chapter-item "><a href="7.3_gestione_attivita.html"><strong aria-hidden="true"></strong> 7.3 GESTIONE ATTIVITA</a></li></ol></li><li class="chapter-item "><a href="8_impostazioni.html"><strong aria-hidden="true"></strong> 8 IMPOSTAZIONI</a></li></ol></li></ol>';
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
