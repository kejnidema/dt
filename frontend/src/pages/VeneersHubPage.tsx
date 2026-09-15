import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import FaqAccordion from '@/components/FaqAccordion';
import PricingTable from '@/components/PricingTable';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { images } from '@/lib/images';

export default function VeneersHubPage() {
  const { localized, t: tr } = useI18n();
  const location = useLocation();
  const initialSelected =
    (location.state as { selectedTreatment?: string } | null)?.selectedTreatment ?? 'emax';
  const [selectedMaterial, setSelectedMaterial] = useState(initialSelected);

  const t = localized({
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
        'Veneers are ultra-thin ceramic restorations bonded to the front of your teeth to correct color, length, shape, or size.',
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
  });

  const pricingRows = localized({
    de: [
      { property: 'Idealer Einsatz', porcelain: 'Natürliche Versorgung zum Einstiegspreis', zirconia: 'Sehr starke und helle Kronen', emax: 'Premium-Ästhetik für Krone oder Veneer' },
      { property: 'Ästhetik', porcelain: 'Natürlich', zirconia: 'Hell und gleichmäßig', emax: 'Höchste Transluzenz' },
      { property: 'Stärke', porcelain: 'Gut', zirconia: 'Extrem hoch', emax: 'Sehr hoch' },
      { property: 'Herstellung', porcelain: 'Made in Germany', zirconia: 'Made in Germany', emax: 'Made in Germany' },
      { property: 'Preis/Zahn', porcelain: 'ab 100 €', zirconia: 'ab 200 €', emax: 'ab 300 €' },
    ],
    en: [
      { property: 'Best for', porcelain: 'Natural restoration at entry price', zirconia: 'Very strong and bright crowns', emax: 'Premium aesthetics for crown or veneer' },
      { property: 'Aesthetics', porcelain: 'Natural', zirconia: 'Bright and uniform', emax: 'Highest translucency' },
      { property: 'Strength', porcelain: 'Good', zirconia: 'Extremely high', emax: 'Very high' },
      { property: 'Production', porcelain: 'Made in Germany', zirconia: 'Made in Germany', emax: 'Made in Germany' },
      { property: 'Price/Tooth', porcelain: 'from €100', zirconia: 'from €200', emax: 'from €300' },
    ],
  });

  const materialOptions = localized({
    de: [
      { key: 'emax', title: 'E-Max Crown and Veneer Made in Germany', price: 'ab 300 €', desc: 'Premium-Keramik mit natürlicher Transluzenz für Kronen und Veneers.' },
      { key: 'porcelain', title: 'Porcelain Crown Made in Germany', price: 'ab 100 €', desc: 'Natürliche keramische Versorgung zum Einstiegspreis.' },
      { key: 'zirconia', title: 'Zirkonia Crown Made in Germany', price: 'ab 200 €', desc: 'Sehr widerstandsfähig und langlebig für ein helles, stabiles Ergebnis.' },
    ],
    en: [
      { key: 'emax', title: 'E-Max Crown and Veneer Made in Germany', price: 'from €300', desc: 'Premium ceramic with natural translucency for crowns and veneers.' },
      { key: 'porcelain', title: 'Porcelain Crown Made in Germany', price: 'from €100', desc: 'Natural ceramic restoration at an entry price.' },
      { key: 'zirconia', title: 'Zirkonia Crown Made in Germany', price: 'from €200', desc: 'Highly durable and long-lasting for a bright, stable result.' },
    ],
  });
  const activeMaterial =
    materialOptions.find((item) => item.key === selectedMaterial) ??
    { key: 'emax', title: 'E-Max Crown and Veneer Made in Germany', price: 'from €300', desc: 'Premium ceramic with natural translucency.' };

  const faqItems = localized({
    de: [
        { question: 'Schmerzt die Veneer-Behandlung?', answer: 'Nein. Die Behandlung wird unter lokaler Betäubung durchgeführt. Nach der Behandlung können leichte Empfindlichkeiten auftreten, die innerhalb weniger Tage abklingen.' },
        { question: 'Wie lange halten Veneers?', answer: 'Bei richtiger Pflege halten E-Max Kronen und Veneers viele Jahre. Die genaue Haltbarkeit hängt von Pflege, Biss und Material ab.' },
        { question: 'Wie viele Veneers brauche ich?', answer: 'Das hängt von Ihren Zielen ab. Ein "Hollywood Smile" umfasst typischerweise 8-10 sichtbare Frontzähne. Einzelne Veneers sind auch möglich.' },
        { question: 'Was kostet die Behandlung in Tirana?', answer: 'E-Max Krone und Veneer ab 300 €, Zirkonia-Krone ab 200 € und Porzellankrone ab 100 € pro Zahn.' },
      ],
    en: [
        { question: 'Does the veneer procedure hurt?', answer: 'No. The procedure is performed under local anesthesia. Mild sensitivity may occur after treatment, resolving within a few days.' },
        { question: 'How long do veneers last?', answer: 'With proper care, E-Max crowns and veneers last for many years. Exact longevity depends on care, bite and material.' },
        { question: 'How many veneers do I need?', answer: 'It depends on your goals. A "Hollywood Smile" typically includes 8-10 visible front teeth. Individual veneers are also possible.' },
        { question: 'How much does treatment cost in Tirana?', answer: 'E-Max crown and veneer from €300, Zirconia crown from €200 and Porcelain crown from €100 per tooth.' },
      ],
  });

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
              {tr('Price Calculator')}
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
          <BeforeAfterSlider
            beforeImage={images.heroBefore}
            afterImage={images.heroAfter}
            aspectRatio="square"
          />
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
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">{t.comparisonTitle}</h2>
              <p className="text-on-surface-variant max-w-2xl">
                {tr('Choose a veneer material to compare options and prices.')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {materialOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setSelectedMaterial(option.key)}
                  className={`px-5 py-3 rounded-full border font-label-md transition-colors ${
                    selectedMaterial === option.key
                      ? 'bg-primary text-on-primary border-primary'
                      : 'bg-white text-on-surface-variant border-outline-variant hover:text-primary hover:border-primary'
                  }`}
                >
                  {option.title}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white border border-outline-variant rounded-xl p-6 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary">{activeMaterial.title}</h3>
              <p className="text-on-surface-variant mt-1">{activeMaterial.desc}</p>
            </div>
            <p className="font-headline-md text-headline-md text-secondary whitespace-nowrap">{activeMaterial.price}</p>
          </div>

          <PricingTable rows={pricingRows} />
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
