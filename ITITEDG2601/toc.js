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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="it-it_d-edge_2026.1.html"><strong aria-hidden="true"></strong> IT-IT D-EDGE 2026.1</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="1_premesse.html"><strong aria-hidden="true"></strong> 1 PREMESSE</a></li><li class="chapter-item "><a href="2_d-edge.html"><strong aria-hidden="true"></strong> 2 D-EDGE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.1_pagina_iniziale.html"><strong aria-hidden="true"></strong> 2.1 PAGINA INIZIALE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.1.1_gestione_gruppi_ed_elementi.html"><strong aria-hidden="true"></strong> 2.1.1 GESTIONE GRUPPI ED ELEMENTI</a></li></ol></li><li class="chapter-item "><a href="2.2_pagina_allarmi.html"><strong aria-hidden="true"></strong> 2.2 PAGINA ALLARMI</a></li><li class="chapter-item "><a href="2.3_pagina_ricette.html"><strong aria-hidden="true"></strong> 2.3 PAGINA RICETTE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.3.1_lavorazioni.html"><strong aria-hidden="true"></strong> 2.3.1 LAVORAZIONI</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="2.3.1.1_calibratura_superiore.html"><strong aria-hidden="true"></strong> 2.3.1.1 CALIBRATURA SUPERIORE</a></li><li class="chapter-item "><a href="2.3.1.2_calibratura_lucidatura_superiore.html"><strong aria-hidden="true"></strong> 2.3.1.2 CALIBRATURA LUCIDATURA SUPERIORE</a></li><li class="chapter-item "><a href="2.3.1.3_rettifica_costa.html"><strong aria-hidden="true"></strong> 2.3.1.3 RETTIFICA COSTA</a></li><li class="chapter-item "><a href="2.3.1.4_lucidatura_costa.html"><strong aria-hidden="true"></strong> 2.3.1.4 LUCIDATURA COSTA</a></li><li class="chapter-item "><a href="2.3.1.5_smusso_superiore.html"><strong aria-hidden="true"></strong> 2.3.1.5 SMUSSO SUPERIORE</a></li><li class="chapter-item "><a href="2.3.1.6_smusso_inferiore.html"><strong aria-hidden="true"></strong> 2.3.1.6 SMUSSO INFERIORE</a></li><li class="chapter-item "><a href="2.3.1.7_taglio_sopra.html"><strong aria-hidden="true"></strong> 2.3.1.7 TAGLIO SOPRA</a></li><li class="chapter-item "><a href="2.3.1.8_taglio_sotto.html"><strong aria-hidden="true"></strong> 2.3.1.8 TAGLIO SOTTO</a></li><li class="chapter-item "><a href="2.3.1.9_taglio_costa.html"><strong aria-hidden="true"></strong> 2.3.1.9 TAGLIO COSTA</a></li><li class="chapter-item "><a href="2.3.1.10_taglio_posizionamento_manuale.html"><strong aria-hidden="true"></strong> 2.3.1.10 TAGLIO POSIZIONAMENTO MANUALE</a></li><li class="chapter-item "><a href="2.3.1.11_bocciardatura.html"><strong aria-hidden="true"></strong> 2.3.1.11 BOCCIARDATURA</a></li><li class="chapter-item "><a href="2.3.1.12_pulitura_superiore.html"><strong aria-hidden="true"></strong> 2.3.1.12 PULITURA SUPERIORE</a></li></ol></li><li class="chapter-item "><a href="2.3.2_correzioni.html"><strong aria-hidden="true"></strong> 2.3.2 CORREZIONI</a></li></ol></li><li class="chapter-item "><a href="2.4_pagina_statistiche.html"><strong aria-hidden="true"></strong> 2.4 PAGINA STATISTICHE</a></li><li class="chapter-item "><a href="2.5_pagina_impostazioni.html"><strong aria-hidden="true"></strong> 2.5 PAGINA IMPOSTAZIONI</a></li></ol></li></ol></li></ol>';
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
