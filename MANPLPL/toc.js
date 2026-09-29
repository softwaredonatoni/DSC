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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="maintenance_pl-pl.html"><strong aria-hidden="true"></strong> Maintenance PL-PL</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="standardowe_frezarki.html"><strong aria-hidden="true"></strong> STANDARDOWE FREZARKI</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tabela_porównawcza_środków_smarnych.html"><strong aria-hidden="true"></strong> TABELA PORÓWNAWCZA ŚRODKÓW SMARNYCH</a></li><li class="chapter-item "><a href="mn0001_test_obwodu_zatrzymania_awaryjnego.html"><strong aria-hidden="true"></strong> MN0001 TEST OBWODU ZATRZYMANIA AWARYJNEGO</a></li><li class="chapter-item "><a href="mn0002_comiesięczna_konserwacja_pompy_próżniowej.html"><strong aria-hidden="true"></strong> MN0002 COMIESIĘCZNA KONSERWACJA POMPY PRÓŻNIOWEJ</a></li><li class="chapter-item "><a href="mn0003_test_działania_sygnalizatora_świetlnego.html"><strong aria-hidden="true"></strong> MN0003 TEST DZIAŁANIA SYGNALIZATORA ŚWIETLNEGO</a></li><li class="chapter-item "><a href="mn0004_smarowanie_prowadnic_liniowych_systemu_move.html"><strong aria-hidden="true"></strong> MN0004 SMAROWANIE PROWADNIC LINIOWYCH SYSTEMU MOVE</a></li><li class="chapter-item "><a href="mn0005_smarowanie_łożyska_nakrętki_osi_z.html"><strong aria-hidden="true"></strong> MN0005 SMAROWANIE ŁOŻYSKA NAKRĘTKI OSI Z</a></li><li class="chapter-item "><a href="mn0006_smarowanie_łożysk_wału_napędowego_mostu_osi_y.html"><strong aria-hidden="true"></strong> MN0006 SMAROWANIE ŁOŻYSK WAŁU NAPĘDOWEGO MOSTU OSI Y</a></li><li class="chapter-item "><a href="mn0007_kontrola_środka_smarnego_układu_automatycznego_smarowania.html"><strong aria-hidden="true"></strong> MN0007 KONTROLA ŚRODKA SMARNEGO UKŁADU AUTOMATYCZNEGO SMAROWANIA</a></li><li class="chapter-item "><a href="mn0008_smarowanie_przegubów_stołu_uchylnego.html"><strong aria-hidden="true"></strong> MN0008 SMAROWANIE PRZEGUBÓW STOŁU UCHYLNEGO</a></li><li class="chapter-item "><a href="mn0009_smarowanie_przegubu_ramienia_konsoli.html"><strong aria-hidden="true"></strong> MN0009 SMAROWANIE PRZEGUBU RAMIENIA KONSOLI</a></li><li class="chapter-item "><a href="mn0010_kontrola_przewodów_i_złączy_układu_hydraulicznego.html"><strong aria-hidden="true"></strong> MN0010 KONTROLA PRZEWODÓW I ZŁĄCZY UKŁADU HYDRAULICZNEGO</a></li><li class="chapter-item "><a href="mn0011_wymiana_oleju_w_agregacie_hydraulicznym.html"><strong aria-hidden="true"></strong> MN0011 WYMIANA OLEJU W AGREGACIE HYDRAULICZNYM</a></li><li class="chapter-item "><a href="mn0012_czyszczenie_filtrów_szafy_elektrycznej.html"><strong aria-hidden="true"></strong> MN0012 CZYSZCZENIE FILTRÓW SZAFY ELEKTRYCZNEJ</a></li><li class="chapter-item "><a href="mn0013_konserwacja_zespołu_wlotu_sprężonego_powietrza.html"><strong aria-hidden="true"></strong> MN0013 KONSERWACJA ZESPOŁU WLOTU SPRĘŻONEGO POWIETRZA</a></li><li class="chapter-item "><a href="mn0014_łożyska_elektrowrzeciona.html"><strong aria-hidden="true"></strong> MN0014 ŁOŻYSKA ELEKTROWRZECIONA</a></li><li class="chapter-item "><a href="mn0041_smarowanie_prowadnic_liniowych_bocznego_wrzeciona_tool_plus.html"><strong aria-hidden="true"></strong> MN0041 SMAROWANIE PROWADNIC LINIOWYCH BOCZNEGO WRZECIONA TOOL PLUS</a></li><li class="chapter-item "><a href="mn0042_czyszczenie_filtra_układu_pneumatycznego.html"><strong aria-hidden="true"></strong> MN0042 CZYSZCZENIE FILTRA UKŁADU PNEUMATYCZNEGO</a></li><li class="chapter-item "><a href="mn0043_kontrola_szczelności_złącza_obrotowego.html"><strong aria-hidden="true"></strong> MN0043 KONTROLA SZCZELNOŚCI ZŁĄCZA OBROTOWEGO</a></li></ol></li><li class="chapter-item "><a href="waterjet.html"><strong aria-hidden="true"></strong> WATERJET</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="mn0044_wymiana_kryzy.html"><strong aria-hidden="true"></strong> MN0044 WYMIANA KRYZY</a></li><li class="chapter-item "><a href="mn0045_smarowanie_ręczne.html"><strong aria-hidden="true"></strong> MN0045 SMAROWANIE RĘCZNE</a></li><li class="chapter-item "><a href="mn0039_czyszczenie_filtrów_otworów_wentylacyjnych_szafy_elektrycznej.html"><strong aria-hidden="true"></strong> MN0039 CZYSZCZENIE FILTRÓW OTWORÓW WENTYLACYJNYCH SZAFY ELEKTRYCZNEJ</a></li><li class="chapter-item "><a href="mn0015_kontrola_przewodów_i_złączy_układu_wysokiego_ciśnienia.html"><strong aria-hidden="true"></strong> MN0015 KONTROLA PRZEWODÓW I ZŁĄCZY UKŁADU WYSOKIEGO CIŚNIENIA</a></li><li class="chapter-item "><a href="mn0030_kontrola_środka_smarnego_układu_automatycznego_smarowania.html"><strong aria-hidden="true"></strong> MN0030 KONTROLA ŚRODKA SMARNEGO UKŁADU AUTOMATYCZNEGO SMAROWANIA</a></li><li class="chapter-item "><a href="mn0016_kontrola_czystości_zbiornika_i_opróżnianie.html"><strong aria-hidden="true"></strong> MN0016 KONTROLA CZYSTOŚCI ZBIORNIKA I OPRÓŻNIANIE</a></li><li class="chapter-item "><a href="mn0035_kontrola_jakości_wody.html"><strong aria-hidden="true"></strong> MN0035 KONTROLA JAKOŚCI WODY</a></li><li class="chapter-item "><a href="mn0040_konserwacja_zespołu_wlotu_sprężonego_powietrza.html"><strong aria-hidden="true"></strong> MN0040 KONSERWACJA ZESPOŁU WLOTU SPRĘŻONEGO POWIETRZA</a></li><li class="chapter-item "><a href="pompa_bft.html"><strong aria-hidden="true"></strong> POMPA BFT</a></li><li class="chapter-item "><a href="pompa_donatoni_hydrox.html"><strong aria-hidden="true"></strong> POMPA DONATONI HYDROX</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="mn0046_kontrola_ilub_wymiana_filtrów_wody_pompy_hydrox.html"><strong aria-hidden="true"></strong> MN0046 Kontrola ilub wymiana filtrów wody pompy Hydrox</a></li><li class="chapter-item "><a href="mn0048_różne_kontrole_pompy_hydrox.html"><strong aria-hidden="true"></strong> MN0048 Różne kontrole pompy Hydrox</a></li><li class="chapter-item "><a href="mn0049_wymiana_oleju_pompy_hydrox.html"><strong aria-hidden="true"></strong> MN0049 Wymiana oleju pompy Hydrox</a></li><li class="chapter-item "><a href="mn0050_wymiana_oleju_pompy_hydrox.html"><strong aria-hidden="true"></strong> MN0050 Wymiana oleju pompy Hydrox</a></li><li class="chapter-item "><a href="mn0051_konserwacja_korpusu_pompy_wysokiego_ciśnienia.html"><strong aria-hidden="true"></strong> MN0051 Konserwacja korpusu pompy wysokiego ciśnienia</a></li><li class="chapter-item "><a href="mn0052_wymiana_pasów_napędowych_pompy_hydrox.html"><strong aria-hidden="true"></strong> MN0052 Wymiana pasów napędowych pompy Hydrox</a></li></ol></li><li class="chapter-item "><a href="pompa_hypertherm.html"><strong aria-hidden="true"></strong> POMPA HYPERTHERM</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="zespół_zaworu_grzybkowego_wysokiego_ciśnienia.html"><strong aria-hidden="true"></strong> ZESPÓŁ ZAWORU GRZYBKOWEGO WYSOKIEGO CIŚNIENIA</a></li><li class="chapter-item "><a href="mn0029_naprawa_zaworu_odpowietrzającego.html"><strong aria-hidden="true"></strong> MN0029 NAPRAWA ZAWORU ODPOWIETRZAJĄCEGO</a></li><li class="chapter-item "><a href="mn0017_naprawa_zaworów_zwrotnych_i_zaworów_grzybkowych_niskiego_ciśnienia.html"><strong aria-hidden="true"></strong> MN0017 NAPRAWA ZAWORÓW ZWROTNYCH I ZAWORÓW GRZYBKOWYCH NISKIEGO CIŚNIENIA</a></li><li class="chapter-item "><a href="mn0018_naprawa_cylindra_wysokiego_ciśnienia.html"><strong aria-hidden="true"></strong> MN0018 NAPRAWA CYLINDRA WYSOKIEGO CIŚNIENIA</a></li><li class="chapter-item "><a href="mn0019_wymiana_wkładu_elementu_uszczelniającego_wysokiego_ciśnienia.html"><strong aria-hidden="true"></strong> MN0019 WYMIANA WKŁADU ELEMENTU USZCZELNIAJĄCEGO WYSOKIEGO CIŚNIENIA</a></li><li class="chapter-item "><a href="mn0021_wymiana_zaworu_grzybkowego_niskiego_ciśnienia.html"><strong aria-hidden="true"></strong> MN0021 WYMIANA ZAWORU GRZYBKOWEGO NISKIEGO CIŚNIENIA</a></li><li class="chapter-item "><a href="mn0022_odwrócenie_cylindra_wysokiego_ciśnienia.html"><strong aria-hidden="true"></strong> MN0022 ODWRÓCENIE CYLINDRA WYSOKIEGO CIŚNIENIA</a></li><li class="chapter-item "><a href="mn0023_wymiana_cylindra_wysokiego_ciśnienia.html"><strong aria-hidden="true"></strong> MN0023 WYMIANA CYLINDRA WYSOKIEGO CIŚNIENIA</a></li><li class="chapter-item "><a href="mn0024_wymiana_zespołu_zaworu_zwrotnego.html"><strong aria-hidden="true"></strong> MN0024 WYMIANA ZESPOŁU ZAWORU ZWROTNEGO</a></li><li class="chapter-item "><a href="mn0025_wymiana_zespołu_obudowy_elementu_uszczelniającego.html"><strong aria-hidden="true"></strong> MN0025 WYMIANA ZESPOŁU OBUDOWY ELEMENTU USZCZELNIAJĄCEGO</a></li><li class="chapter-item "><a href="mn0026_wymiana_adaptera_wylotowego.html"><strong aria-hidden="true"></strong> MN0026 WYMIANA ADAPTERA WYLOTOWEGO</a></li><li class="chapter-item "><a href="mn0028_naprawa_centralnej_sekcji_hydraulicznej.html"><strong aria-hidden="true"></strong> MN0028 NAPRAWA CENTRALNEJ SEKCJI HYDRAULICZNEJ</a></li><li class="chapter-item "><a href="mn0034_wymiana_filtra_wody.html"><strong aria-hidden="true"></strong> MN0034 WYMIANA FILTRA WODY</a></li><li class="chapter-item "><a href="mn0031_wymiana_korpusu_zaworu_odpowietrzającego.html"><strong aria-hidden="true"></strong> MN0031 WYMIANA KORPUSU ZAWORU ODPOWIETRZAJĄCEGO</a></li><li class="chapter-item "><a href="mn0032_czyszczenie_chłodnicy_powietrznej.html"><strong aria-hidden="true"></strong> MN0032 CZYSZCZENIE CHŁODNICY POWIETRZNEJ</a></li><li class="chapter-item "><a href="mn0036_wymiana_wkładu_filtra_hydraulicznego.html"><strong aria-hidden="true"></strong> MN0036 WYMIANA WKŁADU FILTRA HYDRAULICZNEGO</a></li><li class="chapter-item "><a href="mn0037_wymiana_płynu_hydraulicznego.html"><strong aria-hidden="true"></strong> MN0037 WYMIANA PŁYNU HYDRAULICZNEGO</a></li><li class="chapter-item "><a href="mn0038_smarowanie_łożysk_silnika_głównego.html"><strong aria-hidden="true"></strong> MN0038 SMAROWANIE ŁOŻYSK SILNIKA GŁÓWNEGO</a></li><li class="chapter-item "><a href="mn0020_wymiana_zespołu_zaworu_grzybkowego_wysokiego_ciśnienia.html"><strong aria-hidden="true"></strong> MN0020 WYMIANA ZESPOŁU ZAWORU GRZYBKOWEGO WYSOKIEGO CIŚNIENIA</a></li></ol></li><li class="chapter-item "><a href="mn0047_wymiana_rurki_ogniskującej.html"><strong aria-hidden="true"></strong> MN0047 WYMIANA RURKI OGNISKUJĄCEJ</a></li><li class="chapter-item "><a href="mn0053_wymiana_przewodu_ścierniwa.html"><strong aria-hidden="true"></strong> MN0053 WYMIANA PRZEWODU ŚCIERNIWA</a></li></ol></li><li class="chapter-item "><a href="instrukcje_bezpieczeństwa.html"><strong aria-hidden="true"></strong> INSTRUKCJE BEZPIECZEŃSTWA</a></li></ol></li></ol>';
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
