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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="features.html"><strong aria-hidden="true"></strong> FEATURES</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="parametrix.html"><strong aria-hidden="true"></strong> PARAMETRIX</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="prova.html"><strong aria-hidden="true"></strong> PROVA</a></li><li class="chapter-item "><a href="test_rating.html"><strong aria-hidden="true"></strong> TEST RATING</a></li><li class="chapter-item "><a href="feature_test.html"><strong aria-hidden="true"></strong> FEATURE TEST</a></li><li class="chapter-item "><a href="test_pagina_sotto_pagina.html"><strong aria-hidden="true"></strong> TEST PAGINA SOTTO PAGINA</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="sotto_pagina.html"><strong aria-hidden="true"></strong> SOTTO PAGINA</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="sotto_sotto_pagina.html"><strong aria-hidden="true"></strong> SOTTO SOTTO PAGINA</a></li></ol></li></ol></li><li class="chapter-item "><a href="test_elenchi_puntati.html"><strong aria-hidden="true"></strong> TEST ELENCHI PUNTATI</a></li><li class="chapter-item "><a href="test_tip.html"><strong aria-hidden="true"></strong> TEST TIP</a></li><li class="chapter-item "><a href="test_code_block.html"><strong aria-hidden="true"></strong> TEST CODE BLOCK</a></li><li class="chapter-item "><a href="test_collegamenti_e_pagine.html"><strong aria-hidden="true"></strong> TEST COLLEGAMENTI E PAGINE</a></li><li class="chapter-item "><a href="test_capitoli.html"><strong aria-hidden="true"></strong> TEST CAPITOLI</a></li><li class="chapter-item "><a href="test_video.html"><strong aria-hidden="true"></strong> TEST VIDEO</a></li><li class="chapter-item "><a href="test_allegati_pagina_1.html"><strong aria-hidden="true"></strong> TEST ALLEGATI PAGINA 1</a></li><li class="chapter-item "><a href="test_allegati_pagina_2.html"><strong aria-hidden="true"></strong> TEST ALLEGATI PAGINA 2</a></li><li class="chapter-item "><a href="pagina_.html"><strong aria-hidden="true"></strong> Pagina_</a></li><li class="chapter-item "><a href="ddx___statistiche_parametrix.html"><strong aria-hidden="true"></strong> DDX _ STATISTICHE PARAMETRIX</a></li></ol></li><li class="chapter-item "><a href="test_pagina.html"><strong aria-hidden="true"></strong> TEST PAGINA</a></li><li class="chapter-item "><a href="mn0001_test_del_circuito_di_emergenza.html"><strong aria-hidden="true"></strong> MN0001 TEST DEL CIRCUITO DI EMERGENZA</a></li><li class="chapter-item "><a href="test_e_template.html"><strong aria-hidden="true"></strong> Test e Template</a></li><li class="chapter-item "><a href="postgresql_-_servizio_postgresql_non_avviato.html"><strong aria-hidden="true"></strong> POSTGRESQL - SERVIZIO POSTGRESQL NON AVVIATO</a></li><li class="chapter-item "><a href="roadmap.html"><strong aria-hidden="true"></strong> ROADMAP</a></li><li class="chapter-item "><a href="2_programmi_bordo_macchina_test.html"><strong aria-hidden="true"></strong> 2 PROGRAMMI BORDO MACCHINA test</a></li></ol></li></ol>';
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
