import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import PricingTable from '@/components/PricingTable';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { images } from '@/lib/images';

export default function EMaxPage() {
  const { lang } = useI18n();

  const t = {
    de: {
      badge: 'Premium Material',
      headline: 'E-Max Veneers: Das Goldstandard für Ihr Lächeln.',
      subtitle:
        'Erleben Sie die perfekte Symbiose aus deutscher Präzision und albanischer Gastfreundschaft. Unsere E-Max-Veneers bieten eine unvergleichliche Ästhetik und Langlebigkeit.',
      cta: 'Kostenlose Beratung',
      whyTitle: 'Warum E-Max bei Dent Luxe?',
      whySubtitle: 'Präzision in jedem Millimeter.',
      feature1Title: 'Natürliche Lichtdurchlässigkeit',
      feature1Desc: 'E-Max Keramik imitiert die optischen Eigenschaften des natürlichen Zahnschmelzes perfekt.',
      feature2Title: '0.3mm Ultradünn',
      feature2Desc: 'Minimale Präparation erforderlich. Maximale Ästhetik bei minimaler Zahnsubstanz.',
      feature3Title: 'Höchste Festigkeit',
      feature3Desc: 'Mit einer Festigkeit von 400 MPa hält E-Max bei richtiger Pflege Jahrzehnte.',
      comparisonTitle: 'Materialvergleich',
      processTitle: 'Behandlungsablauf',
      step1Title: 'Digitale Planung',
      step1Desc: 'Ihr Lächeln wird mit Digital Smile Design (DSD) am Computer entworfen.',
      step2Title: 'Präparation & Scan',
      step2Desc: 'Minimale Vorbereitung und hochpräziser digitaler Scan.',
      step3Title: 'Einsetzen',
      step3Desc: 'Nach 4-5 Tagen werden Ihre handgefertigten Veneers dauerhaft befestigt.',
      investment: 'Investment',
      bestValue: 'Best Value',
      single: 'Einzellösung',
      smile: 'Lächeln-Design',
      full: 'Full Hollywood Smile',
      save200: '*Sparen Sie €200 gegenüber Einzelpreis',
      express: '*Inkl. Express-Fertigung',
      request: 'Angebot anfordern',
      noHidden: 'Keine versteckten Kosten',
      financing: 'Finanzierung möglich',
      financingDesc: 'Zahlen Sie bequem in Raten.',
      ctaTitle: 'Bereit für Ihr Traumlächeln?',
      ctaText: 'Lassen Sie sich unverbindlich beraten.',
      whatsapp: 'WhatsApp Beratung',
      email: 'E-Mail Anfrage',
      galleryTitle: 'Vorher & Nachher',
    },
    en: {
      badge: 'Premium Material',
      headline: 'E-Max Veneers: The Gold Standard for Your Smile.',
      subtitle:
        'Experience the perfect combination of German precision and Albanian hospitality. Our E-Max veneers offer unmatched aesthetics and durability.',
      cta: 'Free Consultation',
      whyTitle: 'Why E-Max at Dent Luxe?',
      whySubtitle: 'Precision in every millimeter.',
      feature1Title: 'Natural Light Transmission',
      feature1Desc: 'E-Max ceramic perfectly imitates the optical properties of natural tooth enamel.',
      feature2Title: '0.3mm Ultra-Thin',
      feature2Desc: 'Minimal preparation required. Maximum aesthetics with minimal tooth structure.',
      feature3Title: 'Highest Strength',
      feature3Desc: 'With 400 MPa strength, E-Max lasts decades with proper care.',
      comparisonTitle: 'Material Comparison',
      processTitle: 'Treatment Process',
      step1Title: 'Digital Planning',
      step1Desc: 'Your smile is designed with Digital Smile Design (DSD) on computer.',
      step2Title: 'Preparation & Scan',
      step2Desc: 'Minimal preparation and high-precision digital scan.',
      step3Title: 'Placement',
      step3Desc: 'After 4-5 days, your handcrafted veneers are permanently bonded.',
      investment: 'Investment',
      bestValue: 'Best Value',
      single: 'Single Tooth',
      smile: 'Smile Design',
      full: 'Full Hollywood Smile',
      save200: '*Save €200 vs single price',
      express: '*Includes express fabrication',
      request: 'Request Quote',
      noHidden: 'No hidden costs',
      financing: 'Financing Available',
      financingDesc: 'Pay conveniently in installments.',
      ctaTitle: 'Ready for Your Dream Smile?',
      ctaText: 'Get a free consultation.',
      whatsapp: 'WhatsApp Consultation',
      email: 'Email Inquiry',
      galleryTitle: 'Before & After',
    },
  }[lang === 'de' ? 'de' : 'en'];

  const pricingRows =
    lang === 'de'
      ? [
        { property: 'Lebensdauer', composite: '3-5 Jahre', emax: '15-20+ Jahre', zirconia: '15-20+ Jahre' },
        { property: 'Verfärbungsresistenz', composite: 'Gering', emax: 'Hervorragend', zirconia: 'Hervorragend' },
        { property: 'Natürlichkeit', composite: 'Befriedigend', emax: 'Exzellent', zirconia: 'Sehr Gut' },
        { property: 'Widerstandsfähigkeit', composite: 'Mittel', emax: 'Sehr Hoch', zirconia: 'Extrem Hoch' },
      ]
      : [
        { property: 'Lifespan', composite: '3-5 years', emax: '15-20+ years', zirconia: '15-20+ years' },
        { property: 'Stain Resistance', composite: 'Low', emax: 'Excellent', zirconia: 'Excellent' },
        { property: 'Natural Look', composite: 'Fair', emax: 'Excellent', zirconia: 'Very Good' },
        { property: 'Durability', composite: 'Medium', emax: 'Very High', zirconia: 'Extremely High' },
      ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-section-padding overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-label-md rounded mb-4">
              {t.badge}
            </span>
            <h1 className="font-display-lg text-display-lg text-primary mb-6">{t.headline}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              {t.subtitle}
            </p>
            <Link
              to="/contact"
              className="bg-primary text-on-primary px-8 py-4 rounded-lg font-headline-sm hover:opacity-90 transition-all flex items-center gap-2"
            >
              {t.cta}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden soft-elevation bg-surface-container">
              <BeforeAfterSlider
                beforeImage={images.emaxBefore}
                afterImage={images.emaxAfter}
                aspectRatio="tall"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface p-6 rounded-xl soft-elevation border border-outline-variant max-w-[240px]">
              <p className="font-label-md text-primary mb-1">German Quality</p>
              <p className="text-on-surface-variant text-sm">
                {lang === 'de' ? 'Lithium-Disilikat-Keramik von Weltklasse.' : 'World-class lithium disilicate ceramic.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="mb-12">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">{t.whyTitle}</h2>
            <p className="text-on-surface-variant">{t.whySubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { icon: 'light_mode', title: t.feature1Title, desc: t.feature1Desc },
              { icon: 'straighten', title: t.feature2Title, desc: t.feature2Desc },
              { icon: 'verified', title: t.feature3Title, desc: t.feature3Desc },
            ].map((f) => (
              <div key={f.title} className="bg-surface p-8 rounded-xl border border-outline-variant soft-elevation flex flex-col gap-4">
                <span className="material-symbols-outlined text-secondary text-4xl">{f.icon}</span>
                <h3 className="font-headline-sm text-headline-sm">{f.title}</h3>
                <p className="text-on-surface-variant">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Comparison */}
      <section className="py-section-padding">
        <div className="max-w-[1200px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Comparison + Process */}
          <div className="lg:col-span-2">
            <h2 className="font-headline-md text-headline-md text-primary mb-8">{t.comparisonTitle}</h2>
            <PricingTable rows={pricingRows} lang={lang} />

            <div className="mt-12">
              <h2 className="font-headline-md text-headline-md text-primary mb-8">{t.processTitle}</h2>
              <div className="space-y-6">
                {[
                  { num: 1, title: t.step1Title, desc: t.step1Desc },
                  { num: 2, title: t.step2Title, desc: t.step2Desc },
                  { num: 3, title: t.step3Title, desc: t.step3Desc },
                ].map((s) => (
                  <div key={s.num} className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0 font-bold">
                      {s.num}
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm mb-2">{s.title}</h4>
                      <p className="text-on-surface-variant">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-surface p-8 rounded-xl border-2 border-primary soft-elevation relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary-container px-3 py-1 font-label-md text-on-secondary-container">
                {t.bestValue}
              </div>
              <h3 className="font-headline-md text-headline-md mb-6">{t.investment}</h3>

              <div className="space-y-6">
                <div className="pb-6 border-b border-outline-variant">
                  <p className="font-label-md text-on-surface-variant">{t.single}</p>
                  <div className="flex justify-between items-end mt-1">
                    <p className="font-headline-sm">1 {lang === 'de' ? 'Zahn' : 'Tooth'}</p>
                    <p className="text-2xl font-bold text-primary">€350</p>
                  </div>
                </div>
                <div className="pb-6 border-b border-outline-variant">
                  <p className="font-label-md text-on-surface-variant">{t.smile}</p>
                  <div className="flex justify-between items-end mt-1">
                    <p className="font-headline-sm">6 {lang === 'de' ? 'Zähne' : 'Teeth'}</p>
                    <p className="text-2xl font-bold text-primary">€1.900</p>
                  </div>
                  <p className="text-xs text-secondary mt-2 italic">{t.save200}</p>
                </div>
                <div className="pb-6">
                  <p className="font-label-md text-on-surface-variant">{t.full}</p>
                  <div className="flex justify-between items-end mt-1">
                    <p className="font-headline-sm">10 {lang === 'de' ? 'Zähne' : 'Teeth'}</p>
                    <p className="text-2xl font-bold text-primary">€3.100</p>
                  </div>
                  <p className="text-xs text-secondary mt-2 italic">{t.express}</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold mt-8 hover:scale-[1.02] transition-transform block text-center"
              >
                {t.request}
              </Link>

              <div className="mt-4 flex items-center justify-center gap-2 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-green-600 text-lg">check_circle</span>
                {t.noHidden}
              </div>
            </div>

            <div className="bg-surface-container p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">payments</span>
              </div>
              <div>
                <p className="font-bold">{t.financing}</p>
                <p className="text-sm text-on-surface-variant">{t.financingDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-padding bg-primary text-on-primary">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <h2 className="font-display-lg text-display-lg mb-6">{t.ctaTitle}</h2>
          <p className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto opacity-80">{t.ctaText}</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/355690000000"
              className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-lg font-headline-sm hover:brightness-110 transition-all"
            >
              {t.whatsapp}
            </a>
            <Link
              to="/contact"
              className="border-2 border-on-primary text-on-primary px-10 py-5 rounded-lg font-headline-sm hover:bg-on-primary hover:text-primary transition-all"
            >
              {t.email}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
