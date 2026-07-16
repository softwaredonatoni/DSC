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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="troubleshootings_it-it_home.html"><strong aria-hidden="true"></strong> Troubleshootings IT-IT Home</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="articoli_troubleshooting.html"><strong aria-hidden="true"></strong> ARTICOLI TROUBLESHOOTING</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="pe0000_emergenza_generale.html"><strong aria-hidden="true"></strong> PE0000 EMERGENZA GENERALE</a></li><li class="chapter-item "><a href="pe0003_mancanza_tensione_di_rete.html"><strong aria-hidden="true"></strong> PE0003 MANCANZA TENSIONE DI RETE</a></li><li class="chapter-item "><a href="pe0005_mancanza_abilitazione_comandi.html"><strong aria-hidden="true"></strong> PE0005 MANCANZA ABILITAZIONE COMANDI</a></li><li class="chapter-item "><a href="pe0006_termico_pompa_banco_attivo.html"><strong aria-hidden="true"></strong> PE0006 TERMICO POMPA BANCO ATTIVO</a></li><li class="chapter-item "><a href="pe0007_termico_disco_attivo.html"><strong aria-hidden="true"></strong> PE0007 TERMICO DISCO ATTIVO</a></li><li class="chapter-item "><a href="pe0008_fc_collisione_attivo.html"><strong aria-hidden="true"></strong> PE0008 FC COLLISIONE ATTIVO</a></li><li class="chapter-item "><a href="pe0009_rich._quota_collisione.html"><strong aria-hidden="true"></strong> PE0009 RICH. QUOTA COLLISIONE</a></li><li class="chapter-item "><a href="pe0010_extracorrente_asse_x.html"><strong aria-hidden="true"></strong> PE0010 EXTRACORRENTE ASSE X</a></li><li class="chapter-item "><a href="pe0011_extracorrente_asse_y.html"><strong aria-hidden="true"></strong> PE0011 EXTRACORRENTE ASSE Y</a></li><li class="chapter-item "><a href="pe0012_extracorrente_asse_z.html"><strong aria-hidden="true"></strong> PE0012 EXTRACORRENTE ASSE Z</a></li><li class="chapter-item "><a href="pe0013_extracorrente_asse_a.html"><strong aria-hidden="true"></strong> PE0013 EXTRACORRENTE ASSE A</a></li><li class="chapter-item "><a href="pe0014_extracorrente_asse_c.html"><strong aria-hidden="true"></strong> PE0014 EXTRACORRENTE ASSE C</a></li><li class="chapter-item "><a href="pe0015_extracorrente_mandrino.html"><strong aria-hidden="true"></strong> PE0015 EXTRACORRENTE MANDRINO</a></li><li class="chapter-item "><a href="pe0016_mancanza_acqua.html"><strong aria-hidden="true"></strong> PE0016 MANCANZA ACQUA</a></li><li class="chapter-item "><a href="pe0018_feed_nulla__impostare__0.html"><strong aria-hidden="true"></strong> PE0018 FEED NULLA  IMPOSTARE  0</a></li><li class="chapter-item "><a href="pe0019_errore_su_azionamenti.html"><strong aria-hidden="true"></strong> PE0019 ERRORE SU AZIONAMENTI</a></li><li class="chapter-item "><a href="pe0021_banco_ribaltabile_non_in_posizione.html"><strong aria-hidden="true"></strong> PE0021 BANCO RIBALTABILE NON IN POSIZIONE</a></li><li class="chapter-item "><a href="pe0023_muting_attivo.html"><strong aria-hidden="true"></strong> PE0023 MUTING ATTIVO</a></li><li class="chapter-item "><a href="pe0027_mancanza_acqua_interna.html"><strong aria-hidden="true"></strong> PE0027 MANCANZA ACQUA INTERNA</a></li><li class="chapter-item "><a href="pe0028_asse_a_non_in_posizione_corretta.html"><strong aria-hidden="true"></strong> PE0028 ASSE A NON IN POSIZIONE CORRETTA</a></li><li class="chapter-item "><a href="pe0029_impianto_di_lubrificazione_guasto.html"><strong aria-hidden="true"></strong> PE0029 IMPIANTO DI LUBRIFICAZIONE GUASTO</a></li><li class="chapter-item "><a href="pe0031_sovratemperatura_quadro.html"><strong aria-hidden="true"></strong> PE0031 SOVRATEMPERATURA QUADRO</a></li><li class="chapter-item "><a href="pe0041_ch_0_programma_senza_m2-m30.html"><strong aria-hidden="true"></strong> PE0041 CH 0 PROGRAMMA SENZA M2-M30</a></li><li class="chapter-item "><a href="pe0065_termico_pompa_vuoto_attivo.html"><strong aria-hidden="true"></strong> PE0065 TERMICO POMPA VUOTO ATTIVO</a></li><li class="chapter-item "><a href="pe0066_mancanza_aria.html"><strong aria-hidden="true"></strong> PE0066 MANCANZA ARIA</a></li><li class="chapter-item "><a href="pe0067_vuoto_non_generato.html"><strong aria-hidden="true"></strong> PE0067 VUOTO NON GENERATO</a></li><li class="chapter-item "><a href="pe0069_ventose_non_in_parcheggio.html"><strong aria-hidden="true"></strong> PE0069 VENTOSE NON IN PARCHEGGIO</a></li><li class="chapter-item "><a href="pe0070_ventose_già_a_contatto_(errore).html"><strong aria-hidden="true"></strong> PE0070 VENTOSE GIÀ A CONTATTO (ERRORE)</a></li><li class="chapter-item "><a href="pe0095_allarme_inverter.html"><strong aria-hidden="true"></strong> PE0095 ALLARME INVERTER</a></li><li class="chapter-item "><a href="pm0011_pistone_tastatore_fuori_posizione.html"><strong aria-hidden="true"></strong> PM0011 PISTONE TASTATORE FUORI POSIZIONE</a></li></ol></li></ol></li></ol>';
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
