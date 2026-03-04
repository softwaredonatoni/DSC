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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="maintenance_it-it_home.html"><strong aria-hidden="true">1.</strong> Maintenance IT-IT Home</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="frese_standard.html"><strong aria-hidden="true">1.1.</strong> FRESE STANDARD</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tabella_comparativa_dei_lubrificanti.html"><strong aria-hidden="true">1.1.1.</strong> TABELLA COMPARATIVA DEI LUBRIFICANTI</a></li><li class="chapter-item "><a href="mn0001_test_del_circuito_di_emergenza.html"><strong aria-hidden="true">1.1.2.</strong> MN0001 TEST DEL CIRCUITO DI EMERGENZA</a></li><li class="chapter-item "><a href="mn0002_manutenzione_mensile_pompa_del_vuoto.html"><strong aria-hidden="true">1.1.3.</strong> MN0002 MANUTENZIONE MENSILE POMPA DEL VUOTO</a></li><li class="chapter-item "><a href="mn0003_test_funzionamento_segnale_luminoso.html"><strong aria-hidden="true">1.1.4.</strong> MN0003 TEST FUNZIONAMENTO SEGNALE LUMINOSO</a></li><li class="chapter-item "><a href="mn0004_ingrassaggio_guide_lineari_sistema_move.html"><strong aria-hidden="true">1.1.5.</strong> MN0004 INGRASSAGGIO GUIDE LINEARI SISTEMA MOVE</a></li><li class="chapter-item "><a href="mn0005_ingrassaggio_cuscinetto_chiocciola_asse_z.html"><strong aria-hidden="true">1.1.6.</strong> MN0005 INGRASSAGGIO CUSCINETTO CHIOCCIOLA ASSE Z</a></li><li class="chapter-item "><a href="mn0006_ingrassaggio_cuscinetti_albero_trasmissione_ponte_asse_y.html"><strong aria-hidden="true">1.1.7.</strong> MN0006 INGRASSAGGIO CUSCINETTI ALBERO TRASMISSIONE PONTE ASSE Y</a></li><li class="chapter-item "><a href="mn0007_controllo_lubrificante_sistema_di_ingrassaggio_automatico.html"><strong aria-hidden="true">1.1.8.</strong> MN0007 CONTROLLO LUBRIFICANTE SISTEMA DI INGRASSAGGIO AUTOMATICO</a></li><li class="chapter-item "><a href="mn0008_ingrassaggio_snodi_del_banco_ribaltabile.html"><strong aria-hidden="true">1.1.9.</strong> MN0008 INGRASSAGGIO SNODI DEL BANCO RIBALTABILE</a></li><li class="chapter-item "><a href="mn0009_ingrassaggio_snodo_braccio_console.html"><strong aria-hidden="true">1.1.10.</strong> MN0009 INGRASSAGGIO SNODO BRACCIO CONSOLE</a></li><li class="chapter-item "><a href="mn0010_controllo_tubazioni_e_raccordi_impianto_oleodinamico.html"><strong aria-hidden="true">1.1.11.</strong> MN0010 CONTROLLO TUBAZIONI E RACCORDI IMPIANTO OLEODINAMICO</a></li><li class="chapter-item "><a href="mn0011_cambio_olio_centralina_idraulica.html"><strong aria-hidden="true">1.1.12.</strong> MN0011 CAMBIO OLIO CENTRALINA IDRAULICA</a></li><li class="chapter-item "><a href="mn0012_pulizia_filtri_quadro_elettrico.html"><strong aria-hidden="true">1.1.13.</strong> MN0012 PULIZIA FILTRI QUADRO ELETTRICO</a></li><li class="chapter-item "><a href="mn0013_manutenzione_gruppo_ingresso_aria_compressa.html"><strong aria-hidden="true">1.1.14.</strong> MN0013 MANUTENZIONE GRUPPO INGRESSO ARIA COMPRESSA</a></li><li class="chapter-item "><a href="mn0014_cuscinetti_elettromandrino.html"><strong aria-hidden="true">1.1.15.</strong> MN0014 CUSCINETTI ELETTROMANDRINO</a></li><li class="chapter-item "><a href="mn0041_ingrassaggio_guide_lineari_mandrino_laterale_tool_plus.html"><strong aria-hidden="true">1.1.16.</strong> MN0041 INGRASSAGGIO GUIDE LINEARI MANDRINO LATERALE TOOL PLUS</a></li><li class="chapter-item "><a href="mn0042_pulizia_filtro_impianto_pneumatico.html"><strong aria-hidden="true">1.1.17.</strong> MN0042 PULIZIA FILTRO IMPIANTO PNEUMATICO</a></li><li class="chapter-item "><a href="mn0043_verifica_tenuta_giunto_rotante.html"><strong aria-hidden="true">1.1.18.</strong> MN0043 VERIFICA TENUTA GIUNTO ROTANTE</a></li></ol></li><li class="chapter-item "><a href="waterjet.html"><strong aria-hidden="true">1.2.</strong> WATERJET</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="mn0015_controllo_tubazioni_e_raccordi_dellimpianto_di_alta_pressione.html"><strong aria-hidden="true">1.2.1.</strong> MN0015 CONTROLLO TUBAZIONI E RACCORDI DELLIMPIANTO DI ALTA PRESSIONE</a></li><li class="chapter-item "><a href="mn0016_controllo_dello_stato_di_pulizia_della_vasca.html"><strong aria-hidden="true">1.2.2.</strong> MN0016 CONTROLLO DELLO STATO DI PULIZIA DELLA VASCA</a></li><li class="chapter-item "><a href="mn0017_riparare_le_valvole_di_ritegno_e_gli_otturatori_per_la_bassa_pressione.html"><strong aria-hidden="true">1.2.3.</strong> MN0017 RIPARARE LE VALVOLE DI RITEGNO E GLI OTTURATORI PER LA BASSA PRESSIONE</a></li><li class="chapter-item "><a href="mn0018_riparare_il_cilindro_dellalta_pressione.html"><strong aria-hidden="true">1.2.4.</strong> MN0018 RIPARARE IL CILINDRO DELLALTA PRESSIONE</a></li><li class="chapter-item "><a href="mn0019_sostituire_la_cartuccia_dellelemento_di_tenuta_dellalta_pressione.html"><strong aria-hidden="true">1.2.5.</strong> MN0019 SOSTITUIRE LA CARTUCCIA DELLELEMENTO DI TENUTA DELLALTA PRESSIONE</a></li><li class="chapter-item "><a href="mn0020_sostituire_il_gruppo_otturatore_per_lalta_pressione.html"><strong aria-hidden="true">1.2.6.</strong> MN0020 SOSTITUIRE IL GRUPPO OTTURATORE PER LALTA PRESSIONE</a></li><li class="chapter-item "><a href="mn0021_sostituire_lotturatore_per_la_bassa_pressione.html"><strong aria-hidden="true">1.2.7.</strong> MN0021 SOSTITUIRE LOTTURATORE PER LA BASSA PRESSIONE</a></li><li class="chapter-item "><a href="mn0022_invertire_il_cilindro_dellalta_pressione.html"><strong aria-hidden="true">1.2.8.</strong> MN0022 INVERTIRE IL CILINDRO DELLALTA PRESSIONE</a></li><li class="chapter-item "><a href="mn0023_sostituire_il_cilindro_dellalta_pressione.html"><strong aria-hidden="true">1.2.9.</strong> MN0023 SOSTITUIRE IL CILINDRO DELLALTA PRESSIONE</a></li><li class="chapter-item "><a href="mn0024_sostituire_il_gruppo_valvola_di_ritegno.html"><strong aria-hidden="true">1.2.10.</strong> MN0024 SOSTITUIRE IL GRUPPO VALVOLA DI RITEGNO</a></li><li class="chapter-item "><a href="mn0025_sostituire_il_gruppo_alloggiamento_dellelemento_di_tenuta.html"><strong aria-hidden="true">1.2.11.</strong> MN0025 SOSTITUIRE IL GRUPPO ALLOGGIAMENTO DELLELEMENTO DI TENUTA</a></li><li class="chapter-item "><a href="mn0026_sostituire_ladattatore_in_uscita.html"><strong aria-hidden="true">1.2.12.</strong> MN0026 SOSTITUIRE LADATTATORE IN USCITA</a></li><li class="chapter-item "><a href="mn0027.html"><strong aria-hidden="true">1.2.13.</strong> MN0027</a></li><li class="chapter-item "><a href="mn0028_riparazione_della_sezione_idraulica_centrale.html"><strong aria-hidden="true">1.2.14.</strong> MN0028 RIPARAZIONE DELLA SEZIONE IDRAULICA CENTRALE</a></li><li class="chapter-item "><a href="mn0029_riparare_la_valvola_di_spurgo.html"><strong aria-hidden="true">1.2.15.</strong> MN0029 RIPARARE LA VALVOLA DI SPURGO</a></li><li class="chapter-item "><a href="mn0030_controllo_lubrificante_sistema_di_ingrassaggio_automatico.html"><strong aria-hidden="true">1.2.16.</strong> MN0030 CONTROLLO LUBRIFICANTE SISTEMA DI INGRASSAGGIO AUTOMATICO</a></li><li class="chapter-item "><a href="mn0031_sostituire_il_corpo_della_valvola_di_spurgo.html"><strong aria-hidden="true">1.2.17.</strong> MN0031 SOSTITUIRE IL CORPO DELLA VALVOLA DI SPURGO</a></li><li class="chapter-item "><a href="mn0032_pulire_il_refrigeratore_ad_aria.html"><strong aria-hidden="true">1.2.18.</strong> MN0032 PULIRE IL REFRIGERATORE AD ARIA</a></li><li class="chapter-item "><a href="mn0033.html"><strong aria-hidden="true">1.2.19.</strong> MN0033</a></li><li class="chapter-item "><a href="mn0034_sostituire_il_filtro_dellacqua.html"><strong aria-hidden="true">1.2.20.</strong> MN0034 SOSTITUIRE IL FILTRO DELLACQUA</a></li><li class="chapter-item "><a href="mn0035_controllare_la_qualità_dellacqua.html"><strong aria-hidden="true">1.2.21.</strong> MN0035 CONTROLLARE LA QUALITÀ DELLACQUA</a></li><li class="chapter-item "><a href="mn0036_sostituire_lelemento_del_filtro_idraulico.html"><strong aria-hidden="true">1.2.22.</strong> MN0036 SOSTITUIRE LELEMENTO DEL FILTRO IDRAULICO</a></li><li class="chapter-item "><a href="mn0037_sostituire_il_fluido_idraulico.html"><strong aria-hidden="true">1.2.23.</strong> MN0037 SOSTITUIRE IL FLUIDO IDRAULICO</a></li><li class="chapter-item "><a href="mn0038_lubrificare_i_cuscinetti_del_motore_primario.html"><strong aria-hidden="true">1.2.24.</strong> MN0038 LUBRIFICARE I CUSCINETTI DEL MOTORE PRIMARIO</a></li><li class="chapter-item "><a href="mn0039_pulizia_filtri_prese_di_aerazione_quadro_elettrico.html"><strong aria-hidden="true">1.2.25.</strong> MN0039 PULIZIA FILTRI PRESE DI AERAZIONE QUADRO ELETTRICO</a></li><li class="chapter-item "><a href="mn0040_manutenzione_gruppo_ingresso_aria_compressa.html"><strong aria-hidden="true">1.2.26.</strong> MN0040 MANUTENZIONE GRUPPO INGRESSO ARIA COMPRESSA</a></li><li class="chapter-item "><a href="pompa_bft.html"><strong aria-hidden="true">1.2.27.</strong> POMPA BFT</a></li><li class="chapter-item "><a href="pompa_donatoni.html"><strong aria-hidden="true">1.2.28.</strong> POMPA DONATONI</a></li><li class="chapter-item "><a href="pompa_hypertherm.html"><strong aria-hidden="true">1.2.29.</strong> POMPA HYPERTHERM</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="gruppo_otturatore_per_alta_pressione.html"><strong aria-hidden="true">1.2.29.1.</strong> GRUPPO OTTURATORE PER ALTA PRESSIONE</a></li></ol></li></ol></li><li class="chapter-item "><a href="istruzioni_di_sicurezza.html"><strong aria-hidden="true">1.3.</strong> ISTRUZIONI DI SICUREZZA</a></li></ol></li></ol>';
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
