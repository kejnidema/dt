import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n, type Lang } from '@/lib/i18n';
import { images, galleryPairs } from '@/lib/images';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import FaqAccordion from '@/components/FaqAccordion';
import ContactForm from '@/components/ContactForm';
import { formatPrice, priceGroups, priceListLabels, treatmentHref, type PriceItem } from '@/lib/priceList';

const WHATSAPP = 'https://wa.me/355690000000';

export type Point = { title: string; text: string };

export interface ArticleSection {
  title: string;
  intro?: string[];
  /** Checklist with a bold lead-in */
  points?: Point[];
  /** Side-by-side cards */
  cards?: Point[];
  /** Paragraphs with a bold lead-in */
  inline?: Point[];
  outro?: string[];
}

export interface TreatmentArticleContent {
  name: string;
  eyebrow: string;
  subtitle: string;
  lead: string;
  kicker: string;
  articleTitle: string;
  intro: string[];
  sections: ArticleSection[];
  stats: { value: string; label: string }[];
  priceTitle: string;
  priceNote: string;
  whatTitle: string;
  what: string[];
  calloutTitle: string;
  calloutText: string;
  compareTitle: string;
  compareIntro: string;
  /** Cards link to the price item `id`; `priceText` replaces its listed price */
  compare: { id: string; tag: string; title: string; text: string; priceText?: string }[];
  fitTitle: string;
  fitIntro: string;
  fit: string[];
  fitNote: string;
  stepsTitle: string;
  stepsIntro: string;
  steps: Point[];
  whyBandTitle: string;
  whyBandText: string;
  caseText: string;
  faq: { question: string; answer: string }[];
}

const common = {
  sq: {
    home: 'Kryefaqja',
    treatments: 'Trajtimet',
    cta: 'Rezervo një konsultë',
    travel: 'Nuk jeni të sigurt për organizimin e udhëtimit?',
    travelLink: 'Bisedoni me koordinatorët tanë të pacientëve.',
    galleryEyebrow: 'Rezultatet',
    galleryTitle: 'Galeria Para & Pas',
    galleryText: 'Tërhiqni rrëshqitësin mbi imazh për të zbuluar rezultatin. Përdorni shigjetat ose pikat për të shfletuar rastet.',
    caseLabel: 'Rasti',
    othersTitle: 'Trajtime të tjera',
    othersText: 'Eksploroni gamën tonë të plotë të trajtimeve',
    explore: 'Eksploro',
    faqTitle: 'Pyetjet e shpeshta',
    formEyebrow: 'Konsultim falas',
    formTitle: 'Merrni planin e buzëqeshjes suaj dhe një ofertë të fiksuar',
    formText:
      'Na dërgoni disa të dhëna dhe një grafi panoramike, dhe koordinatorët tanë të pacientëve do t’ju kontaktojnë brenda 24 orëve me një plan trajtimi, afat kohor dhe çmim. Pa asnjë detyrim.',
  },
  en: {
    home: 'Home',
    treatments: 'Treatments',
    cta: 'Book a Consultation',
    travel: 'Not sure about organising the trip?',
    travelLink: 'Chat with our patient coordinators.',
    galleryEyebrow: 'Results',
    galleryTitle: 'Before & After Gallery',
    galleryText: 'Drag the slider across the image to reveal the result. Use the arrows or dots to browse the cases.',
    caseLabel: 'Case',
    othersTitle: 'Other Treatments',
    othersText: 'Explore our full range of treatments',
    explore: 'Explore',
    faqTitle: 'Frequently Asked Questions',
    formEyebrow: 'Free consultation',
    formTitle: 'Get your smile plan and a fixed quote',
    formText:
      'Send us a few details and a panoramic X-ray, and our patient coordinators will contact you within 24 hours with a treatment plan, timeline and price. No obligation.',
  },
  de: {
    home: 'Startseite',
    treatments: 'Behandlungen',
    cta: 'Beratung buchen',
    travel: 'Unsicher bei der Reiseplanung?',
    travelLink: 'Sprechen Sie mit unseren Patientenkoordinatoren.',
    galleryEyebrow: 'Ergebnisse',
    galleryTitle: 'Vorher-Nachher-Galerie',
    galleryText: 'Ziehen Sie den Regler über das Bild, um das Ergebnis zu sehen. Mit den Pfeilen oder Punkten blättern Sie durch die Fälle.',
    caseLabel: 'Fall',
    othersTitle: 'Weitere Behandlungen',
    othersText: 'Entdecken Sie unser gesamtes Behandlungsangebot',
    explore: 'Entdecken',
    faqTitle: 'Häufig gestellte Fragen',
    formEyebrow: 'Kostenlose Beratung',
    formTitle: 'Erhalten Sie Ihren Lächeln-Plan und ein Festpreisangebot',
    formText:
      'Senden Sie uns einige Angaben und ein Panorama-Röntgenbild, und unsere Patientenkoordinatoren melden sich innerhalb von 24 Stunden mit Behandlungsplan, Zeitrahmen und Preis. Unverbindlich.',
  },
  it: {
    home: 'Home',
    treatments: 'Trattamenti',
    cta: 'Prenota una consulenza',
    travel: 'Non sai come organizzare il viaggio?',
    travelLink: 'Parla con i nostri coordinatori pazienti.',
    galleryEyebrow: 'Risultati',
    galleryTitle: 'Galleria Prima e Dopo',
    galleryText: 'Trascina il cursore sull’immagine per scoprire il risultato. Usa le frecce o i punti per sfogliare i casi.',
    caseLabel: 'Caso',
    othersTitle: 'Altri trattamenti',
    othersText: 'Scopri la nostra gamma completa di trattamenti',
    explore: 'Scopri',
    faqTitle: 'Domande frequenti',
    formEyebrow: 'Consulenza gratuita',
    formTitle: 'Ricevi il tuo piano del sorriso e un preventivo fisso',
    formText:
      'Inviaci alcuni dati e una radiografia panoramica: i nostri coordinatori pazienti ti contatteranno entro 24 ore con piano di trattamento, tempistiche e prezzo. Senza impegno.',
  },
} satisfies Record<Lang, Record<string, string>>;

const allItems = priceGroups.flatMap((group) => group.items);
const findItem = (id: string) => allItems.find((item) => item.id === id);

function Points({ items }: { items: Point[] }) {
  return (
    <ul className="space-y-3 my-6">
      {items.map((point) => (
        <li key={point.title} className="flex gap-3">
          <span className="material-symbols-outlined text-[20px] text-secondary mt-0.5">check_circle</span>
          <span className="text-on-surface-variant leading-relaxed">
            <strong className="font-semibold text-primary">{point.title}</strong> {point.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ItemPrice({ item, lang }: { item: PriceItem | undefined; lang: Lang }) {
  if (!item) return null;
  return (
    <span className="font-headline-md text-[22px] leading-none text-primary">
      {formatPrice(item.price, lang)}
      {item.unit && <span className="ml-1 text-[13px] text-on-surface-variant">/ {item.unit[lang]}</span>}
    </span>
  );
}

interface Props {
  content: Record<Lang, TreatmentArticleContent>;
  /** Price list item this page describes */
  itemId: string;
  heroImage: string;
  whatImage: string;
}

export default function TreatmentArticle({ content, itemId, heroImage, whatImage }: Props) {
  const { lang } = useI18n();
  const c = content[lang];
  const ui = common[lang];
  const item = findItem(itemId);
  const otherItems = allItems.filter((entry) => entry.id !== itemId);
  const [caseIndex, setCaseIndex] = useState(0);
  const pair = galleryPairs[caseIndex] ?? galleryPairs[0];
  const goTo = (index: number) => setCaseIndex((index + galleryPairs.length) % galleryPairs.length);

  return (
    <>
      {/* Hero */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav className="flex items-center gap-2 text-[13px] text-on-surface-variant mb-6">
              <Link to="/" className="hover:text-primary">{ui.home}</Link>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <Link to="/treatments" className="hover:text-primary">{ui.treatments}</Link>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-primary">{c.name}</span>
            </nav>
            <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">{c.eyebrow}</span>
            <h1 className="font-display-lg text-display-lg text-primary mt-3 mb-6">{c.name}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">{c.subtitle}</p>
            <p className="text-on-surface-variant mb-8">{c.lead}</p>
            <div className="flex flex-col items-start gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-md font-label-md"
              >
                {ui.cta}
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
              <p className="text-[14px] text-on-surface-variant">
                {ui.travel}{' '}
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-semibold text-primary underline underline-offset-4">
                  {ui.travelLink}
                </a>
              </p>
            </div>
          </div>
          <div className="aspect-[4/5] rounded-lg overflow-hidden bg-surface-container">
            <img src={heroImage} alt={c.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Long-form article + facts */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-start">
          <article className="bg-white border border-outline-variant rounded-lg p-8 md:p-12">
            <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">{c.kicker}</span>
            <h2 className="font-headline-md text-headline-md text-primary mt-3 mb-6">{c.articleTitle}</h2>
            {c.intro.map((p) => (
              <p key={p} className="text-on-surface-variant leading-relaxed mb-4">{p}</p>
            ))}

            {c.sections.map((section) => (
              <div key={section.title}>
                <h3 className="font-headline-sm text-headline-sm text-primary mt-10 mb-3">{section.title}</h3>
                {section.intro?.map((p) => (
                  <p key={p} className="text-on-surface-variant leading-relaxed mb-4">{p}</p>
                ))}
                {section.points && <Points items={section.points} />}
                {section.cards && (
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {section.cards.map((point) => (
                      <div key={point.title} className="bg-surface-container-low border border-outline-variant rounded-md p-5">
                        <p className="font-semibold text-primary mb-2">{point.title}</p>
                        <p className="text-[15px] text-on-surface-variant leading-relaxed">{point.text}</p>
                      </div>
                    ))}
                  </div>
                )}
                {section.inline && (
                  <div className="space-y-4 mb-4">
                    {section.inline.map((point) => (
                      <p key={point.title} className="text-on-surface-variant leading-relaxed">
                        <strong className="font-semibold text-primary">{point.title}</strong> {point.text}
                      </p>
                    ))}
                  </div>
                )}
                {section.outro?.map((p) => (
                  <p key={p} className="text-on-surface-variant leading-relaxed mb-4">{p}</p>
                ))}
              </div>
            ))}
          </article>

          <aside className="lg:sticky lg:top-24 space-y-4">
            <div className="bg-white border border-outline-variant rounded-lg divide-y divide-outline-variant">
              {c.stats.map((stat) => (
                <div key={stat.label} className="px-6 py-5">
                  <p className="font-headline-md text-[26px] leading-none text-primary">{stat.value}</p>
                  <p className="mt-2 text-[13px] uppercase tracking-wider text-on-surface-variant">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="bg-primary text-on-primary rounded-lg p-6">
              <p className="text-[13px] uppercase tracking-wider text-white/70">{c.priceTitle}</p>
              <p className="font-headline-md text-[28px] leading-tight mt-2">{item ? formatPrice(item.price, lang) : ''}</p>
              {item?.unit && <p className="text-[13px] text-white/70 mt-1">{item.unit[lang]}</p>}
              <p className="flex items-center gap-2 text-[14px] text-aqua mt-3">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                {c.priceNote}
              </p>
              <Link
                to="/contact"
                className="mt-6 w-full bg-secondary-fixed text-on-secondary-fixed px-6 py-3 rounded-md font-label-md inline-flex items-center justify-center gap-2"
              >
                {ui.cta}
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* What is it */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-surface-container">
            <img src={whatImage} alt="" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-6">{c.whatTitle}</h2>
            {c.what.map((p) => (
              <p key={p} className="text-on-surface-variant leading-relaxed mb-4">{p}</p>
            ))}
            <div className="mt-6 border-l-2 border-primary bg-surface-container-low rounded-r-md p-5">
              <p className="font-semibold text-primary mb-1">{c.calloutTitle}</p>
              <p className="text-[15px] text-on-surface-variant leading-relaxed">{c.calloutText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">{c.compareTitle}</h2>
            <p className="text-on-surface-variant">{c.compareIntro}</p>
          </div>
          <div className={`grid grid-cols-1 gap-6 ${c.compare.length === 2 ? 'md:grid-cols-2 max-w-[900px] mx-auto' : 'md:grid-cols-3'}`}>
            {c.compare.map((option) => {
              const isCurrent = option.id === itemId;
              return (
                <Link
                  key={option.title}
                  to={treatmentHref(option.id)}
                  className={`group bg-white border rounded-md p-8 flex flex-col hover:shadow-lg transition-all duration-300 ${
                    isCurrent ? 'border-primary' : 'border-outline-variant hover:border-primary/40'
                  }`}
                >
                  <span
                    className={`self-start text-[12px] uppercase tracking-wider px-2.5 py-1 rounded-sm mb-5 ${
                      isCurrent ? 'bg-primary text-on-primary' : 'bg-secondary-container text-on-secondary-container'
                    }`}
                  >
                    {option.tag}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{option.title}</h3>
                  <p className="text-[15px] text-on-surface-variant leading-relaxed mb-6">{option.text}</p>
                  <div className="mt-auto pt-4 border-t border-outline-variant">
                    {option.priceText ? (
                      <span className="font-headline-md text-[22px] leading-none text-primary">{option.priceText}</span>
                    ) : (
                      <ItemPrice item={findItem(option.id)} lang={lang} />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Is it right for you */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[900px] mx-auto px-gutter">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">{c.fitTitle}</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8">{c.fitIntro}</p>
          <ul className="grid sm:grid-cols-2 gap-4 mb-8">
            {c.fit.map((entry) => (
              <li key={entry} className="flex gap-3 bg-surface-container-low border border-outline-variant rounded-md p-5">
                <span className="material-symbols-outlined text-[20px] text-secondary">check_circle</span>
                <span className="text-on-surface">{entry}</span>
              </li>
            ))}
          </ul>
          <p className="text-on-surface-variant leading-relaxed">{c.fitNote}</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">{c.stepsTitle}</h2>
            <p className="text-on-surface-variant">{c.stepsIntro}</p>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${
            c.steps.length === 6 ? 'lg:grid-cols-3' : c.steps.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-5'
          }`}>
            {c.steps.map((step, index) => (
              <div key={step.title} className="bg-white border border-outline-variant rounded-md p-6">
                <span className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-semibold mb-4">
                  {index + 1}
                </span>
                <h3 className="font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-[14px] text-on-surface-variant leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us band */}
      <section className="py-section-padding bg-primary text-on-primary">
        <div className="max-w-[900px] mx-auto px-gutter text-center">
          <h2 className="font-headline-md text-headline-md mb-4">{c.whyBandTitle}</h2>
          <p className="font-body-lg text-body-lg opacity-80">{c.whyBandText}</p>
        </div>
      </section>

      {/* Before & after */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">{ui.galleryEyebrow}</span>
            <h2 className="font-headline-md text-headline-md text-primary mt-3 mb-4">{ui.galleryTitle}</h2>
            <p className="text-on-surface-variant mb-8">{ui.galleryText}</p>
            <p className="font-headline-sm text-headline-sm text-primary">
              {ui.caseLabel} {caseIndex + 1}
            </p>
            <p className="text-on-surface-variant mb-8">{c.caseText}</p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => goTo(caseIndex - 1)}
                aria-label="Previous"
                className="w-11 h-11 rounded-md border border-outline-variant flex items-center justify-center hover:border-primary"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <div className="flex gap-2">
                {galleryPairs.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`${ui.caseLabel} ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${index === caseIndex ? 'w-6 bg-primary' : 'w-2 bg-outline-variant'}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => goTo(caseIndex + 1)}
                aria-label="Next"
                className="w-11 h-11 rounded-md border border-outline-variant flex items-center justify-center hover:border-primary"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          {pair && (
            <BeforeAfterSlider
              key={caseIndex}
              beforeImage={pair.before[0] ?? images.heroBefore}
              afterImage={pair.after[0] ?? images.heroAfter}
              aspectRatio="square"
            />
          )}
        </div>
      </section>

      {/* Other treatments */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="text-center mb-12">
            <h2 className="font-headline-md text-headline-md text-primary mb-3">{ui.othersTitle}</h2>
            <p className="text-on-surface-variant">{ui.othersText}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {otherItems.map((entry) => (
              <Link
                key={entry.id}
                to={treatmentHref(entry.id)}
                className="group bg-white border border-outline-variant rounded-md px-5 py-4 flex items-center justify-between gap-4 hover:border-primary/40 transition-colors"
              >
                <span className="text-primary font-medium">{entry.name[lang]}</span>
                <span className="inline-flex items-center gap-1 text-[14px] text-on-surface-variant group-hover:text-primary">
                  {ui.explore}
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[800px] mx-auto px-gutter">
          <h2 className="font-headline-md text-headline-md text-primary text-center mb-12">{ui.faqTitle}</h2>
          <FaqAccordion items={c.faq} />
        </div>
      </section>

      {/* Smile plan form */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">{ui.formEyebrow}</span>
            <h2 className="font-headline-md text-headline-md text-primary mt-3 mb-4">{ui.formTitle}</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">{ui.formText}</p>
            <p className="flex items-start gap-3 text-[15px] text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary">radiology</span>
              {priceListLabels[lang].note}
            </p>
          </div>
          <div className="bg-white border border-outline-variant rounded-lg p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
