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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="parametrix_tutorial_it-it.html"><strong aria-hidden="true"></strong> PARAMETRIX TUTORIAL IT-IT</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="parametrix_tutorials.html"><strong aria-hidden="true"></strong> PARAMETRIX TUTORIALS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tr0001_flusso_di_lavoro_completo.html"><strong aria-hidden="true"></strong> TR0001 FLUSSO DI LAVORO COMPLETO</a></li><li class="chapter-item "><a href="tr0002_gestione_tagli_e_file_pgm.html"><strong aria-hidden="true"></strong> TR0002 GESTIONE TAGLI E FILE PGM</a></li><li class="chapter-item "><a href="tr0003_foto.html"><strong aria-hidden="true"></strong> TR0003 FOTO</a></li><li class="chapter-item "><a href="tr0004_creazione_di_pezzi.html"><strong aria-hidden="true"></strong> TR0004 CREAZIONE DI PEZZI</a></li><li class="chapter-item "><a href="tr0005_gestione_dei_pezzi.html"><strong aria-hidden="true"></strong> TR0005 GESTIONE DEI PEZZI</a></li><li class="chapter-item "><a href="tr0006_spostamenti_automatici.html"><strong aria-hidden="true"></strong> TR0006 SPOSTAMENTI AUTOMATICI</a></li><li class="chapter-item "><a href="tr0007_spostamenti_manuali.html"><strong aria-hidden="true"></strong> TR0007 SPOSTAMENTI MANUALI</a></li><li class="chapter-item "><a href="tr0008_macchia_aperta.html"><strong aria-hidden="true"></strong> TR0008 MACCHIA APERTA</a></li><li class="chapter-item "><a href="tr0009_creazione_progetto_multilastra.html"><strong aria-hidden="true"></strong> TR0009 CREAZIONE PROGETTO MULTILASTRA</a></li><li class="chapter-item "><a href="tr0010_lavorazioni_di_un_progetto_multilastra.html"><strong aria-hidden="true"></strong> TR0010 LAVORAZIONI DI UN PROGETTO MULTILASTRA</a></li><li class="chapter-item "><a href="tr0011_performance_multilastra.html"><strong aria-hidden="true"></strong> TR0011 PERFORMANCE MULTILASTRA</a></li><li class="chapter-item "><a href="tr0012_commesse_csv.html"><strong aria-hidden="true"></strong> TR0012 COMMESSE CSV</a></li><li class="chapter-item "><a href="tr0013_help_system.html"><strong aria-hidden="true"></strong> TR0013 HELP SYSTEM</a></li><li class="chapter-item "><a href="tr0014_lavorazioni_da_layer_dxf.html"><strong aria-hidden="true"></strong> TR0014 LAVORAZIONI DA LAYER DXF</a></li><li class="chapter-item "><a href="tr0015_lavorazioni_da_modifica_pezzo.html"><strong aria-hidden="true"></strong> TR0015 LAVORAZIONI DA MODIFICA PEZZO</a></li><li class="chapter-item "><a href="tr0016_lavorazioni_per_piani_cucina_da_modifica_pezzo.html"><strong aria-hidden="true"></strong> TR0016 LAVORAZIONI PER PIANI CUCINA DA MODIFICA PEZZO</a></li><li class="chapter-item "><a href="tr0017_flusso_di_lavoro_ufficio.html"><strong aria-hidden="true"></strong> TR0017 FLUSSO DI LAVORO UFFICIO</a></li><li class="chapter-item "><a href="tr0018_slab_matching.html"><strong aria-hidden="true"></strong> TR0018 SLAB MATCHING</a></li><li class="chapter-item "><a href="tr0019_tagli_combinati.html"><strong aria-hidden="true"></strong> TR0019 TAGLI COMBINATI</a></li><li class="chapter-item "><a href="tr0020_pezzi_standard.html"><strong aria-hidden="true"></strong> TR0020 PEZZI STANDARD</a></li><li class="chapter-item "><a href="tr0021_nesting.html"><strong aria-hidden="true"></strong> TR0021 NESTING</a></li><li class="chapter-item "><a href="tr0022_importazione_layout_dxf.html"><strong aria-hidden="true"></strong> TR0022 IMPORTAZIONE LAYOUT DXF</a></li><li class="chapter-item "><a href="tr0023_importazione_layout_dxf.html"><strong aria-hidden="true"></strong> TR0023 IMPORTAZIONE LAYOUT DXF</a></li><li class="chapter-item "><a href="tr0024_statistiche.html"><strong aria-hidden="true"></strong> TR0024 STATISTICHE</a></li></ol></li></ol></li></ol>';
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
