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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="it-it_zenit_1.26.html"><strong aria-hidden="true"></strong> IT-IT ZENIT 1.26</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="1_premesse.html"><strong aria-hidden="true"></strong> 1 PREMESSE</a></li><li class="chapter-item "><a href="2_descrizione_della_macchina.html"><strong aria-hidden="true"></strong> 2 DESCRIZIONE DELLA MACCHINA</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.1_avviamento_della_macchina.html"><strong aria-hidden="true"></strong> 2.1 AVVIAMENTO DELLA MACCHINA</a></li><li class="chapter-item "><a href="2.2_spegnimento_macchina.html"><strong aria-hidden="true"></strong> 2.2 SPEGNIMENTO MACCHINA</a></li><li class="chapter-item "><a href="2.3_utilizzo_della_pulsantiera_a_pannello.html"><strong aria-hidden="true"></strong> 2.3 UTILIZZO DELLA PULSANTIERA A PANNELLO</a></li><li class="chapter-item "><a href="2.4_sicurezze_hardware_e_software.html"><strong aria-hidden="true"></strong> 2.4 SICUREZZE HARDWARE E SOFTWARE</a></li><li class="chapter-item "><a href="2.5_allarmi_plc_macchina.html"><strong aria-hidden="true"></strong> 2.5 ALLARMI PLC MACCHINA</a></li></ol></li><li class="chapter-item "><a href="3_il_software.html"><strong aria-hidden="true"></strong> 3 IL SOFTWARE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="3.1_controllo_manuale.html"><strong aria-hidden="true"></strong> 3.1 CONTROLLO MANUALE</a></li><li class="chapter-item "><a href="3.2_magazzino_utensili.html"><strong aria-hidden="true"></strong> 3.2 MAGAZZINO UTENSILI</a></li><li class="chapter-item "><a href="3.3_kit_e_materiali.html"><strong aria-hidden="true"></strong> 3.3 KIT E MATERIALI</a></li><li class="chapter-item "><a href="3.4_disegno_del_pezzo.html"><strong aria-hidden="true"></strong> 3.4 DISEGNO DEL PEZZO</a></li><li class="chapter-item "><a href="3.5_applicazione_delle_lavorazioni.html"><strong aria-hidden="true"></strong> 3.5 APPLICAZIONE DELLE LAVORAZIONI</a></li><li class="chapter-item "><a href="3.6_verifica_e_controllo_delle_lavorazioni.html"><strong aria-hidden="true"></strong> 3.6 VERIFICA E CONTROLLO DELLE LAVORAZIONI</a></li><li class="chapter-item "><a href="3.7_avvio_lavorazione.html"><strong aria-hidden="true"></strong> 3.7 AVVIO LAVORAZIONE</a></li><li class="chapter-item "><a href="3.8_righello.html"><strong aria-hidden="true"></strong> 3.8 RIGHELLO</a></li><li class="chapter-item "><a href="3.9_zoom.html"><strong aria-hidden="true"></strong> 3.9 ZOOM</a></li><li class="chapter-item "><a href="3.10_opzioni.html"><strong aria-hidden="true"></strong> 3.10 OPZIONI</a></li><li class="chapter-item "><a href="3.11_altro.html"><strong aria-hidden="true"></strong> 3.11 ALTRO</a></li></ol></li></ol></li></ol>';
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
