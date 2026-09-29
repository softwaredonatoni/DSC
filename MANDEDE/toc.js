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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="maintenance_de-de.html"><strong aria-hidden="true"></strong> Maintenance DE-DE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="standard-fräsmaschinen.html"><strong aria-hidden="true"></strong> STANDARD-FRÄSMASCHINEN</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="vergleichstabelle_der_schmierstoffe.html"><strong aria-hidden="true"></strong> VERGLEICHSTABELLE DER SCHMIERSTOFFE</a></li><li class="chapter-item "><a href="mn0001_prüfung_des_not-halt-kreises.html"><strong aria-hidden="true"></strong> MN0001 PRÜFUNG DES NOT-HALT-KREISES</a></li><li class="chapter-item "><a href="mn0002_monatliche_wartung_der_vakuumpumpe.html"><strong aria-hidden="true"></strong> MN0002 MONATLICHE WARTUNG DER VAKUUMPUMPE</a></li><li class="chapter-item "><a href="mn0003_funktionsprüfung_der_signalleuchte.html"><strong aria-hidden="true"></strong> MN0003 FUNKTIONSPRÜFUNG DER SIGNALLEUCHTE</a></li><li class="chapter-item "><a href="mn0004_schmierung_der_linearführungen_des_move-systems.html"><strong aria-hidden="true"></strong> MN0004 SCHMIERUNG DER LINEARFÜHRUNGEN DES MOVE-SYSTEMS</a></li><li class="chapter-item "><a href="mn0005_schmierung_des_lagers_der_z-achs-mutter.html"><strong aria-hidden="true"></strong> MN0005 SCHMIERUNG DES LAGERS DER Z-ACHS-MUTTER</a></li><li class="chapter-item "><a href="mn0006_schmierung_der_lager_der_antriebswelle_der_y-achs-brücke.html"><strong aria-hidden="true"></strong> MN0006 SCHMIERUNG DER LAGER DER ANTRIEBSWELLE DER Y-ACHS-BRÜCKE</a></li><li class="chapter-item "><a href="mn0007_kontrolle_des_schmierstoffs_des_automatischen_schmiersystems.html"><strong aria-hidden="true"></strong> MN0007 KONTROLLE DES SCHMIERSTOFFS DES AUTOMATISCHEN SCHMIERSYSTEMS</a></li><li class="chapter-item "><a href="mn0008_schmierung_der_gelenke_des_kipptisches.html"><strong aria-hidden="true"></strong> MN0008 SCHMIERUNG DER GELENKE DES KIPPTISCHES</a></li><li class="chapter-item "><a href="mn0009_schmierung_des_gelenks_des_konsolenarms.html"><strong aria-hidden="true"></strong> MN0009 SCHMIERUNG DES GELENKS DES KONSOLENARMS</a></li><li class="chapter-item "><a href="mn0010_kontrolle_der_leitungen_und_anschlüsse_des_hydrauliksystems.html"><strong aria-hidden="true"></strong> MN0010 KONTROLLE DER LEITUNGEN UND ANSCHLÜSSE DES HYDRAULIKSYSTEMS</a></li><li class="chapter-item "><a href="mn0011_ölwechsel_am_hydraulikaggregat.html"><strong aria-hidden="true"></strong> MN0011 ÖLWECHSEL AM HYDRAULIKAGGREGAT</a></li><li class="chapter-item "><a href="mn0012_reinigung_der_filter_des_schaltschranks.html"><strong aria-hidden="true"></strong> MN0012 REINIGUNG DER FILTER DES SCHALTSCHRANKS</a></li><li class="chapter-item "><a href="mn0013_wartung_der_druckluft-eingangseinheit.html"><strong aria-hidden="true"></strong> MN0013 WARTUNG DER DRUCKLUFT-EINGANGSEINHEIT</a></li><li class="chapter-item "><a href="mn0014_lager_der_elektrospindel.html"><strong aria-hidden="true"></strong> MN0014 LAGER DER ELEKTROSPINDEL</a></li><li class="chapter-item "><a href="mn0041_schmierung_der_linearführungen_der_seitenspindel_tool_plus.html"><strong aria-hidden="true"></strong> MN0041 SCHMIERUNG DER LINEARFÜHRUNGEN DER SEITENSPINDEL TOOL PLUS</a></li><li class="chapter-item "><a href="mn0042_reinigung_des_filters_der_pneumatikanlage.html"><strong aria-hidden="true"></strong> MN0042 REINIGUNG DES FILTERS DER PNEUMATIKANLAGE</a></li><li class="chapter-item "><a href="mn0043_dichtheitsprüfung_der_drehdurchführung.html"><strong aria-hidden="true"></strong> MN0043 DICHTHEITSPRÜFUNG DER DREHDURCHFÜHRUNG</a></li></ol></li><li class="chapter-item "><a href="waterjet.html"><strong aria-hidden="true"></strong> WATERJET</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="mn0044_austausch_der_düse.html"><strong aria-hidden="true"></strong> MN0044 AUSTAUSCH DER DÜSE</a></li><li class="chapter-item "><a href="mn0045_manuelle_schmierung.html"><strong aria-hidden="true"></strong> MN0045 MANUELLE SCHMIERUNG</a></li><li class="chapter-item "><a href="mn0039_reinigung_der_filter_der_lüftungsöffnungen_des_schaltschranks.html"><strong aria-hidden="true"></strong> MN0039 REINIGUNG DER FILTER DER LÜFTUNGSÖFFNUNGEN DES SCHALTSCHRANKS</a></li><li class="chapter-item "><a href="mn0015_kontrolle_der_leitungen_und_anschlüsse_des_hochdrucksystems.html"><strong aria-hidden="true"></strong> MN0015 KONTROLLE DER LEITUNGEN UND ANSCHLÜSSE DES HOCHDRUCKSYSTEMS</a></li><li class="chapter-item "><a href="mn0030_kontrolle_des_schmierstoffs_des_automatischen_schmiersystems.html"><strong aria-hidden="true"></strong> MN0030 KONTROLLE DES SCHMIERSTOFFS DES AUTOMATISCHEN SCHMIERSYSTEMS</a></li><li class="chapter-item "><a href="mn0016_kontrolle_des_reinigungszustands_und_entleeren_des_beckens.html"><strong aria-hidden="true"></strong> MN0016 KONTROLLE DES REINIGUNGSZUSTANDS UND ENTLEEREN DES BECKENS</a></li><li class="chapter-item "><a href="mn0035_wasserqualität_prüfen.html"><strong aria-hidden="true"></strong> MN0035 WASSERQUALITÄT PRÜFEN</a></li><li class="chapter-item "><a href="mn0040_wartung_der_druckluft-eingangseinheit.html"><strong aria-hidden="true"></strong> MN0040 WARTUNG DER DRUCKLUFT-EINGANGSEINHEIT</a></li><li class="chapter-item "><a href="bft-pumpe.html"><strong aria-hidden="true"></strong> BFT-PUMPE</a></li><li class="chapter-item "><a href="donatoni-hydrox-pumpe.html"><strong aria-hidden="true"></strong> DONATONI-HYDROX-PUMPE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="mn0046_kontrolle_undoder_austausch_der_wasserfilter_der_hydrox-pumpe.html"><strong aria-hidden="true"></strong> MN0046 Kontrolle undoder Austausch der Wasserfilter der Hydrox-Pumpe</a></li><li class="chapter-item "><a href="mn0048_verschiedene_kontrollen_an_der_hydrox-pumpe.html"><strong aria-hidden="true"></strong> MN0048 Verschiedene Kontrollen an der Hydrox-Pumpe</a></li><li class="chapter-item "><a href="mn0049_ölwechsel_der_hydrox-pumpe.html"><strong aria-hidden="true"></strong> MN0049 Ölwechsel der Hydrox-Pumpe</a></li><li class="chapter-item "><a href="mn0050_ölwechsel_der_hydrox-pumpe.html"><strong aria-hidden="true"></strong> MN0050 Ölwechsel der Hydrox-Pumpe</a></li><li class="chapter-item "><a href="mn0051_wartung_des_hochdruckpumpenkörpers.html"><strong aria-hidden="true"></strong> MN0051 Wartung des Hochdruckpumpenkörpers</a></li><li class="chapter-item "><a href="mn0052_austausch_der_antriebsriemen_der_hydrox-pumpe.html"><strong aria-hidden="true"></strong> MN0052 Austausch der Antriebsriemen der Hydrox-Pumpe</a></li></ol></li><li class="chapter-item "><a href="hypertherm-pumpe.html"><strong aria-hidden="true"></strong> HYPERTHERM-PUMPE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="ventilkegelgruppe_für_hochdruck.html"><strong aria-hidden="true"></strong> VENTILKEGELGRUPPE FÜR HOCHDRUCK</a></li><li class="chapter-item "><a href="mn0029_entlüftungsventil_reparieren.html"><strong aria-hidden="true"></strong> MN0029 ENTLÜFTUNGSVENTIL REPARIEREN</a></li><li class="chapter-item "><a href="mn0017_rückschlagventile_und_ventilkegel_für_niederdruck_reparieren.html"><strong aria-hidden="true"></strong> MN0017 RÜCKSCHLAGVENTILE UND VENTILKEGEL FÜR NIEDERDRUCK REPARIEREN</a></li><li class="chapter-item "><a href="mn0018_hochdruckzylinder_reparieren.html"><strong aria-hidden="true"></strong> MN0018 HOCHDRUCKZYLINDER REPARIEREN</a></li><li class="chapter-item "><a href="mn0019_kartusche_des_hochdruck-dichtelements_ersetzen.html"><strong aria-hidden="true"></strong> MN0019 KARTUSCHE DES HOCHDRUCK-DICHTELEMENTS ERSETZEN</a></li><li class="chapter-item "><a href="mn0021_ventilkegel_für_niederdruck_ersetzen.html"><strong aria-hidden="true"></strong> MN0021 VENTILKEGEL FÜR NIEDERDRUCK ERSETZEN</a></li><li class="chapter-item "><a href="mn0022_hochdruckzylinder_umdrehen.html"><strong aria-hidden="true"></strong> MN0022 HOCHDRUCKZYLINDER UMDREHEN</a></li><li class="chapter-item "><a href="mn0023_hochdruckzylinder_ersetzen.html"><strong aria-hidden="true"></strong> MN0023 HOCHDRUCKZYLINDER ERSETZEN</a></li><li class="chapter-item "><a href="mn0024_rückschlagventilgruppe_ersetzen.html"><strong aria-hidden="true"></strong> MN0024 RÜCKSCHLAGVENTILGRUPPE ERSETZEN</a></li><li class="chapter-item "><a href="mn0025_gehäusegruppe_des_dichtelements_ersetzen.html"><strong aria-hidden="true"></strong> MN0025 GEHÄUSEGRUPPE DES DICHTELEMENTS ERSETZEN</a></li><li class="chapter-item "><a href="mn0026_auslassadapter_ersetzen.html"><strong aria-hidden="true"></strong> MN0026 AUSLASSADAPTER ERSETZEN</a></li><li class="chapter-item "><a href="mn0028_reparatur_des_zentralen_hydraulikabschnitts.html"><strong aria-hidden="true"></strong> MN0028 REPARATUR DES ZENTRALEN HYDRAULIKABSCHNITTS</a></li><li class="chapter-item "><a href="mn0034_wasserfilter_ersetzen.html"><strong aria-hidden="true"></strong> MN0034 WASSERFILTER ERSETZEN</a></li><li class="chapter-item "><a href="mn0031_körper_des_entlüftungsventils_ersetzen.html"><strong aria-hidden="true"></strong> MN0031 KÖRPER DES ENTLÜFTUNGSVENTILS ERSETZEN</a></li><li class="chapter-item "><a href="mn0032_luftkühler_reinigen.html"><strong aria-hidden="true"></strong> MN0032 LUFTKÜHLER REINIGEN</a></li><li class="chapter-item "><a href="mn0036_hydraulikfilterelement_ersetzen.html"><strong aria-hidden="true"></strong> MN0036 HYDRAULIKFILTERELEMENT ERSETZEN</a></li><li class="chapter-item "><a href="mn0037_hydraulikflüssigkeit_ersetzen.html"><strong aria-hidden="true"></strong> MN0037 HYDRAULIKFLÜSSIGKEIT ERSETZEN</a></li><li class="chapter-item "><a href="mn0038_lager_des_hauptmotors_schmieren.html"><strong aria-hidden="true"></strong> MN0038 LAGER DES HAUPTMOTORS SCHMIEREN</a></li><li class="chapter-item "><a href="mn0020_ventilkegelgruppe_für_hochdruck_ersetzen.html"><strong aria-hidden="true"></strong> MN0020 VENTILKEGELGRUPPE FÜR HOCHDRUCK ERSETZEN</a></li></ol></li><li class="chapter-item "><a href="mn0047_austausch_des_fokussierrohrs.html"><strong aria-hidden="true"></strong> MN0047 AUSTAUSCH DES FOKUSSIERROHRS</a></li><li class="chapter-item "><a href="mn0053_austausch_des_strahlmittelschlauchs.html"><strong aria-hidden="true"></strong> MN0053 AUSTAUSCH DES STRAHLMITTELSCHLAUCHS</a></li></ol></li><li class="chapter-item "><a href="sicherheitshinweise.html"><strong aria-hidden="true"></strong> SICHERHEITSHINWEISE</a></li></ol></li></ol>';
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
