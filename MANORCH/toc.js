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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="maintenance_orchestrator.html"><strong aria-hidden="true"></strong> Maintenance Orchestrator</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="manutenzioni.html"><strong aria-hidden="true"></strong> MANUTENZIONI</a></li><li class="chapter-item "><a href="traduzioni.html"><strong aria-hidden="true"></strong> TRADUZIONI</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="it-it.html"><strong aria-hidden="true"></strong> it-IT</a></li><li class="chapter-item "><a href="en-gb.html"><strong aria-hidden="true"></strong> en-GB</a></li><li class="chapter-item "><a href="pl-pl.html"><strong aria-hidden="true"></strong> pl-PL</a></li><li class="chapter-item "><a href="de-de.html"><strong aria-hidden="true"></strong> de-De</a></li><li class="chapter-item "><a href="ar-bh.html"><strong aria-hidden="true"></strong> ar-BH</a></li><li class="chapter-item "><a href="bg-bg.html"><strong aria-hidden="true"></strong> bg-BG</a></li><li class="chapter-item "><a href="cs-cz.html"><strong aria-hidden="true"></strong> cs-CZ</a></li><li class="chapter-item "><a href="da-dk.html"><strong aria-hidden="true"></strong> da-DK</a></li><li class="chapter-item "><a href="el-gr.html"><strong aria-hidden="true"></strong> el-GR</a></li><li class="chapter-item "><a href="es-es.html"><strong aria-hidden="true"></strong> es-ES</a></li><li class="chapter-item "><a href="he-il.html"><strong aria-hidden="true"></strong> he-IL</a></li><li class="chapter-item "><a href="hr-hr.html"><strong aria-hidden="true"></strong> hr-HR</a></li><li class="chapter-item "><a href="hu-hu.html"><strong aria-hidden="true"></strong> hu-HU</a></li><li class="chapter-item "><a href="nl-nl.html"><strong aria-hidden="true"></strong> nl-NL</a></li><li class="chapter-item "><a href="pt-pt.html"><strong aria-hidden="true"></strong> pt-PT</a></li><li class="chapter-item "><a href="ro-ro.html"><strong aria-hidden="true"></strong> ro-RO</a></li><li class="chapter-item "><a href="ru-ru.html"><strong aria-hidden="true"></strong> ru-RU</a></li><li class="chapter-item "><a href="sk-sk.html"><strong aria-hidden="true"></strong> sk-SK</a></li><li class="chapter-item "><a href="sl-si.html"><strong aria-hidden="true"></strong> sl-SI</a></li><li class="chapter-item "><a href="sv-se.html"><strong aria-hidden="true"></strong> sv-SE</a></li><li class="chapter-item "><a href="tr-tr.html"><strong aria-hidden="true"></strong> tr-TR</a></li><li class="chapter-item "><a href="zh-cn.html"><strong aria-hidden="true"></strong> zh-CN</a></li><li class="chapter-item "><a href="fr-fr.html"><strong aria-hidden="true"></strong> fr-FR</a></li></ol></li></ol></li></ol>';
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
