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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="dmes_packages.html"><strong aria-hidden="true">1.</strong> DMES PACKAGES</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="configurazione.html"><strong aria-hidden="true">1.1.</strong> CONFIGURAZIONE</a></li><li class="chapter-item "><a href="core.html"><strong aria-hidden="true">1.2.</strong> CORE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="dmes_base_-_descrizione_crm.html"><strong aria-hidden="true">1.2.1.</strong> DMES BASE - descrizione CRM</a></li></ol></li><li class="chapter-item "><a href="trace.html"><strong aria-hidden="true">1.3.</strong> TRACE</a></li><li class="chapter-item "><a href="matrix.html"><strong aria-hidden="true">1.4.</strong> MATRIX</a></li><li class="chapter-item "><a href="pro.html"><strong aria-hidden="true">1.5.</strong> PRO</a></li><li class="chapter-item "><a href="notifiche.html"><strong aria-hidden="true">1.6.</strong> NOTIFICHE</a></li><li class="chapter-item "><a href="macchine_aggiuntive_e_area_manuale.html"><strong aria-hidden="true">1.7.</strong> MACCHINE AGGIUNTIVE E AREA MANUALE</a></li><li class="chapter-item "><a href="varie.html"><strong aria-hidden="true">1.8.</strong> Varie</a></li></ol></li></ol>';
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
