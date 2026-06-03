import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import FaqAccordion from '@/components/FaqAccordion';
import PricingTable from '@/components/PricingTable';

export default function VeneersHubPage() {
  const { lang } = useI18n();

  const t = {
    de: {
      headline: 'Veneers: Ihr Weg zum perfekten Lächeln',
      subtitle:
        'Veneers sind ultradünne Schalen aus Keramik oder Komposit, die auf die Vorderseite Ihrer Zähne geklebt werden, um Farbe, Länge, Form oder Größe zu korrigieren.',
      whatTitle: 'Was sind Veneers?',
      whatText:
        'Veneers sind eine der beliebtesten Methoden der ästhetischen Zahnmedizin. Sie können verschiedene Zahnprobleme in einer einzigen Behandlung lösen — von Verfärbungen über Spalten bis hin zu unregelmäßigen Formen.',
      benefitsTitle: 'Vorteile von Veneers',
      benefit1: 'Natürliches, strahlendes Lächeln',
      benefit2: 'Langlebig — bis zu 20+ Jahre',
      benefit3: 'Minimaler Zahnsubstanzverlust',
      benefit4: 'Farb- und kratzbeständig',
      benefit5: 'Sofortige Ergebnisse',
      processTitle: 'Der Behandlungsprozess',
      step1Title: 'Beratung & Planung',
      step1Desc: 'Digitale Analyse und Smile-Design-Visualisierung.',
      step2Title: 'Präparation & Scan',
      step2Desc: 'Minimaler Abtrag und digitaler Scan Ihrer Zähne.',
      step3Title: 'Einsetzen',
      step3Desc: 'Ihre handgefertigten Veneers werden permanent befestigt.',
      comparisonTitle: 'Materialvergleich',
      faqTitle: 'Häufig gestellte Fragen',
      ctaTitle: 'Bereit für Ihr neues Lächeln?',
      ctaText: 'Lassen Sie sich unverbindlich beraten.',
      ctaButton: 'Kostenlose Beratung',
    },
    en: {
      headline: 'Veneers: Your Path to the Perfect Smile',
      subtitle:
        'Veneers are ultra-thin shells of ceramic or composite bonded to the front of your teeth to correct color, length, shape, or size.',
      whatTitle: 'What are Veneers?',
      whatText:
        'Veneers are one of the most popular methods in cosmetic dentistry. They can solve various dental issues in a single treatment — from discoloration to gaps to irregular shapes.',
      benefitsTitle: 'Benefits of Veneers',
      benefit1: 'Natural, radiant smile',
      benefit2: 'Long-lasting — up to 20+ years',
      benefit3: 'Minimal tooth structure removal',
      benefit4: 'Stain and scratch resistant',
      benefit5: 'Immediate results',
      processTitle: 'The Treatment Process',
      step1Title: 'Consultation & Planning',
      step1Desc: 'Digital analysis and smile design visualization.',
      step2Title: 'Preparation & Scan',
      step2Desc: 'Minimal reduction and digital scan of your teeth.',
      step3Title: 'Placement',
      step3Desc: 'Your handcrafted veneers are permanently bonded.',
      comparisonTitle: 'Material Comparison',
      faqTitle: 'Frequently Asked Questions',
      ctaTitle: 'Ready for Your New Smile?',
      ctaText: 'Get a free consultation.',
      ctaButton: 'Free Consultation',
    },
  }[lang];

  const pricingRows =
    lang === 'de'
      ? [
        { property: 'Lebensdauer', composite: '3-5 Jahre', emax: '15-20+ Jahre', zirconia: '15-20+ Jahre' },
        { property: 'Verfärbungsresistenz', composite: 'Gering', emax: 'Hervorragend', zirconia: 'Hervorragend' },
        { property: 'Natürlichkeit', composite: 'Befriedigend', emax: 'Exzellent', zirconia: 'Sehr Gut' },
        { property: 'Widerstandsfähigkeit', composite: 'Mittel', emax: 'Sehr Hoch', zirconia: 'Extrem Hoch' },
        { property: 'Preis/Zahn', composite: 'ab 200 €', emax: 'ab 350 €', zirconia: 'ab 400 €' },
      ]
      : [
        { property: 'Lifespan', composite: '3-5 years', emax: '15-20+ years', zirconia: '15-20+ years' },
        { property: 'Stain Resistance', composite: 'Low', emax: 'Excellent', zirconia: 'Excellent' },
        { property: 'Natural Look', composite: 'Fair', emax: 'Excellent', zirconia: 'Very Good' },
        { property: 'Durability', composite: 'Medium', emax: 'Very High', zirconia: 'Extremely High' },
        { property: 'Price/Tooth', composite: 'from €200', emax: 'from €350', zirconia: 'from €400' },
      ];

  const faqItems =
    lang === 'de'
      ? [
        { question: 'Schmerzt die Veneer-Behandlung?', answer: 'Nein. Die Behandlung wird unter lokaler Betäubung durchgeführt. Nach der Behandlung können leichte Empfindlichkeiten auftreten, die innerhalb weniger Tage abklingen.' },
        { question: 'Wie lange halten Veneers?', answer: 'Bei richtiger Pflege halten E-Max Veneers 15-20+ Jahre. Zirkonia-Veneers sind noch langlebiger.' },
        { question: 'Wie viele Veneers brauche ich?', answer: 'Das hängt von Ihren Zielen ab. Ein "Hollywood Smile" umfasst typischerweise 8-10 Veneers (vordere Zähne). Einzelne Veneers sind auch möglich.' },
        { question: 'Was kostet die Behandlung in Tirana?', answer: 'E-Max Veneers ab 350 € pro Zahn, Zirkonia ab 400 € pro Zahn. Das ist bis zu 70% günstiger als in Deutschland.' },
      ]
      : [
        { question: 'Does the veneer procedure hurt?', answer: 'No. The procedure is performed under local anesthesia. Mild sensitivity may occur after treatment, resolving within a few days.' },
        { question: 'How long do veneers last?', answer: 'With proper care, E-Max veneers last 15-20+ years. Zirconia veneers are even more durable.' },
        { question: 'How many veneers do I need?', answer: 'It depends on your goals. A "Hollywood Smile" typically includes 8-10 veneers (front teeth). Individual veneers are also possible.' },
        { question: 'How much does treatment cost in Tirana?', answer: 'E-Max veneers from €350 per tooth, Zirconia from €400 per tooth. Up to 70% cheaper than in Germany.' },
      ];

  return (
    <>
      {/* Hero */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <h1 className="font-display-lg text-display-lg text-primary mb-6">{t.headline}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            {t.subtitle}
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-primary text-on-primary px-8 py-4 font-label-md rounded-sm hover:opacity-95 shadow-md flex items-center gap-2"
            >
              {t.ctaButton}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              to="/veneers/cost-comparison"
              className="border border-secondary text-secondary px-8 py-4 font-label-md rounded-sm hover:bg-secondary/5 transition-colors"
            >
              {lang === 'de' ? 'Preisrechner' : 'Price Calculator'}
            </Link>
          </div>
        </div>
      </section>

      {/* What are Veneers */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-6">{t.whatTitle}</h2>
            <p className="text-on-surface-variant mb-8">{t.whatText}</p>
            <h3 className="font-label-md text-primary uppercase tracking-wider mb-4">{t.benefitsTitle}</h3>
            <ul className="space-y-3">
              {[t.benefit1, t.benefit2, t.benefit3, t.benefit4, t.benefit5].map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="text-on-surface">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-square bg-surface-container rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-8xl text-outline-variant">tooth</span>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <h2 className="font-headline-md text-headline-md text-primary mb-12 text-center">{t.processTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: 1, icon: 'videocam', title: t.step1Title, desc: t.step1Desc },
              { num: 2, icon: 'biotech', title: t.step2Title, desc: t.step2Desc },
              { num: 3, icon: 'auto_fix_high', title: t.step3Title, desc: t.step3Desc },
            ].map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0 font-bold">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm mb-2">{step.title}</h4>
                  <p className="text-on-surface-variant">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <h2 className="font-headline-md text-headline-md text-primary mb-8">{t.comparisonTitle}</h2>
          <PricingTable rows={pricingRows} lang={lang} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[800px] mx-auto px-gutter">
          <h2 className="font-headline-md text-headline-md text-primary text-center mb-12">{t.faqTitle}</h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-padding bg-primary text-on-primary">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <h2 className="font-display-lg text-display-lg mb-6">{t.ctaTitle}</h2>
          <p className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto opacity-80">{t.ctaText}</p>
          <Link
            to="/contact"
            className="bg-secondary-fixed text-on-secondary-fixed px-10 py-5 font-headline-sm hover:brightness-110 transition-all inline-block"
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
