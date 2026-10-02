import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { images } from '@/lib/images';
import { formatPrice, itemsOf, priceCategories, treatmentPages } from '@/lib/priceList';

export const treatments = [
  {
    icon: 'dentistry',
    title: 'Porcelain Crown Made in Germany',
    description: '',
    link: '/treatments/porcelain-crown',
    price: 'from €100',
    image: images.clinic,
  },
  {
    icon: 'dentistry',
    title: 'Zirkonia Crown Made in Germany',
    description: '',
    link: '/treatments/zirconia-crown',
    price: 'from €200',
    image: images.surgery[2] ?? images.clinic,
  },
  {
    icon: 'dentistry',
    title: 'E-Max Crown and Veneer Made in Germany',
    description: '',
    link: '/treatments/emax-crown-veneer',
    price: 'from €300',
    state: { selectedTreatment: 'emax-crown-veneer', group: 'crowns' },
    image: images.emaxAfter,
  },
  {
    icon: 'dentistry',
    title: 'MegaGen-Titanium Implant',
    description: '',
    link: '/treatments/megagen-implant',
    price: 'from €500',
    image: images.surgery[4] ?? images.clinic,
  },
  {
    icon: 'dentistry',
    title: 'Professional Teeth Whitening',
    description: '',
    link: '/treatments/whitening',
    price: 'from €150',
    image: images.beforeAfterEdited[1] ?? images.heroAfter,
  },
  {
    icon: 'dentistry',
    title: 'Removable Prosthetic',
    description: '',
    link: '/treatments/removable-prosthetic',
    price: 'from €600',
    image: images.surgery[6] ?? images.clinic,
  },
  {
    icon: 'dentistry',
    title: 'Tartar Clean',
    description:
      'Remove tartar buildup and polish your teeth for a healthier, fresher smile.',
    link: '/treatments/tartar-clean',
    price: 'from €30',
    image: images.clinicGallery[1] ?? images.clinic,
  },
  {
    icon: 'dentistry',
    title: 'Fillings',
    description: 'Tooth-colored restorative fillings for cavities and minor damage.',
    link: '/services',
    price: 'from €50',
    image: images.beforeAfterEdited[0] ?? images.heroAfter,
  },
];

export const treatmentGroups = [
  {
    icon: 'diamond',
    title: 'Veneers',
    description: 'E-Max crown and veneer options made in Germany for a natural smile upgrade.',
    link: '/veneers',
    state: { selectedTreatment: 'emax' },
    price: 'from €350',
    image: images.emaxAfter,
  },
  {
    icon: 'precision_manufacturing',
    title: 'Crowns',
    description: 'Porcelain, Zirconia and E-Max crowns made in Germany.',
    link: '/treatments/emax-crown-veneer',
    state: { selectedTreatment: 'emax-crown-veneer', group: 'crowns' },
    price: 'from €100',
    image: images.clinic,
  },
  {
    icon: 'settings_accessibility',
    title: 'Implants',
    description: 'Titanium implant systems for stable long-term tooth replacement.',
    link: '/treatments/megagen-implant',
    state: { selectedTreatment: 'megagen-implant' },
    price: 'from €500',
    image: images.surgery[4] ?? images.clinic,
  },
  {
    icon: 'list_alt',
    title: 'All Services',
    description: 'See every service price including cleaning, whitening and fillings.',
    link: '/services',
    price: 'view prices',
    image: images.clinicGallery[1] ?? images.clinic,
  },
];

const WHATSAPP = 'https://wa.me/355690000000';

const cardImages: Record<string, string | undefined> = {
  'hollywood-smile': images.results[0]?.[0],
  'crown-porcelain': images.surgery[2],
  'crown-zirconia': images.clinic,
  'crown-emax': images.emaxAfter,
  'veneer-composite': images.results[1]?.[0],
  'gum-contouring': images.results[2]?.[0],
  whitening: images.beforeAfterEdited[1],
  'implant-megagen': images.surgery[4],
  'all-on-4': images.beforeAfterEdited[0],
  'implant-bridge': images.surgery[9],
  'all-on-6': images.surgery[5],
  'sinus-lift': images.clinicGallery[3],
  'bone-graft': images.surgery[13],
  'implant-zygomatic': images.surgery[7],
  'implant-pterygoid': images.surgery[8],
  scaling: images.clinicGallery[1],
  'filling-2': images.surgery[10],
  'filling-3': images.surgery[11],
  'oral-surgery': images.surgery[12],
  denture: images.surgery[6],
  'dental-exam': images.surgery[3],
  'ct-scan': images.clinicGallery[2],
  'root-canal': images.surgery[14],
  aligners: images.results[5]?.[0],
};

const cardLinks: Record<string, string> = {
  scaling: '/treatments/tartar-clean',
  whitening: '/treatments/whitening',
  'implant-megagen': '/treatments/megagen-implant',
  'all-on-4': '/treatments/all-on-x',
  'all-on-6': '/treatments/all-on-x',
  'crown-porcelain': '/treatments/porcelain-crown',
  'crown-zirconia': '/treatments/zirconia-crown',
  'crown-emax': '/veneers/emax',
  denture: '/treatments/removable-prosthetic',
};

const copy = {
  en: {
    eyebrow: 'Our Services',
    title: 'Treatments',
    subtitle: 'From life-changing implant solutions to the final aesthetic touches — every treatment is delivered with precision and care.',
    cta: 'Get a Free Consultation',
    travel: 'Not sure about organising the trip?',
    travelLink: 'Chat with our patient coordinators.',
    all: 'All Treatments',
    from: 'From',
    more: 'Learn more',
    finalEyebrow: 'Free remote consultation',
    finalTitle: 'Ready to see your new smile?',
    finalText: 'Send a few photos and a panoramic X-ray, and get a treatment plan and quote within 24 hours. No obligation.',
    book: 'Book a Consultation',
    whatsapp: 'Chat on WhatsApp',
  },
  de: {
    eyebrow: 'Unsere Leistungen',
    title: 'Behandlungen',
    subtitle: 'Von lebensverändernden Implantatlösungen bis zum letzten ästhetischen Feinschliff — jede Behandlung mit Präzision und Sorgfalt.',
    cta: 'Kostenlose Beratung',
    travel: 'Unsicher bei der Reiseplanung?',
    travelLink: 'Sprechen Sie mit unseren Patientenkoordinatoren.',
    all: 'Alle Behandlungen',
    from: 'Ab',
    more: 'Mehr erfahren',
    finalEyebrow: 'Kostenlose Online-Beratung',
    finalTitle: 'Bereit für Ihr neues Lächeln?',
    finalText: 'Senden Sie uns einige Fotos und ein Panorama-Röntgenbild und erhalten Sie innerhalb von 24 Stunden einen Behandlungsplan mit Angebot. Unverbindlich.',
    book: 'Beratung buchen',
    whatsapp: 'Per WhatsApp schreiben',
  },
  it: {
    eyebrow: 'I nostri servizi',
    title: 'Trattamenti',
    subtitle: 'Dalle soluzioni implantari che cambiano la vita agli ultimi ritocchi estetici — ogni trattamento è eseguito con precisione e cura.',
    cta: 'Consulenza gratuita',
    travel: 'Non sai come organizzare il viaggio?',
    travelLink: 'Parla con i nostri coordinatori pazienti.',
    all: 'Tutti i trattamenti',
    from: 'Da',
    more: 'Scopri di più',
    finalEyebrow: 'Consulenza gratuita a distanza',
    finalTitle: 'Pronto a vedere il tuo nuovo sorriso?',
    finalText: 'Inviaci qualche foto e una radiografia panoramica e ricevi un piano di trattamento con preventivo entro 24 ore. Senza impegno.',
    book: 'Prenota una consulenza',
    whatsapp: 'Scrivici su WhatsApp',
  },
  sq: {
    eyebrow: 'Shërbimet tona',
    title: 'Trajtimet',
    subtitle: 'Nga zgjidhjet me implante që ndryshojnë jetën deri te prekjet përfundimtare estetike — çdo trajtim ofrohet me precizion dhe kujdes.',
    cta: 'Merr konsultim falas',
    travel: 'Nuk jeni të sigurt për organizimin e udhëtimit?',
    travelLink: 'Bisedoni me koordinatorët tanë të pacientëve.',
    all: 'Të gjitha trajtimet',
    from: 'Nga',
    more: 'Mëso më shumë',
    finalEyebrow: 'Konsultim falas në distancë',
    finalTitle: 'Gati ta shihni buzëqeshjen tuaj të re?',
    finalText: 'Dërgoni disa foto dhe një grafi panoramike, dhe merrni plan trajtimi me ofertë brenda 24 orësh. Pa asnjë detyrim.',
    book: 'Rezervo një konsultë',
    whatsapp: 'Bisedo në WhatsApp',
  },
};

export default function TreatmentsPage() {
  const { lang } = useI18n();
  const c = copy[lang];
  const [filter, setFilter] = useState<string>('all');

  const cards = useMemo(
    () =>
      priceCategories.flatMap((category) =>
        itemsOf(category).map((item) => ({ item, category })),
      ),
    [],
  );
  const visible = filter === 'all' ? cards : cards.filter((card) => card.category.id === filter);

  const tabs = [
    { id: 'all', label: c.all },
    ...priceCategories.map((category) => ({ id: category.id, label: category.title[lang] })),
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">
            {c.eyebrow}
          </span>
          <h1 className="font-display-lg text-display-lg text-primary mt-3 mb-6">{c.title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">{c.subtitle}</p>
          <div className="flex flex-col items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-md font-label-md"
            >
              {c.cta}
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
            <p className="text-[14px] text-on-surface-variant">
              {c.travel}{' '}
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-semibold text-primary underline underline-offset-4">
                {c.travelLink}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-md border font-label-md text-[14px] transition-colors ${
                  filter === tab.id
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-on-surface-variant border-outline-variant hover:text-primary hover:border-primary/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map(({ item }) => {
              const link = treatmentPages[item.id] ?? cardLinks[item.id] ?? `/services#${item.id}`;
              const image = cardImages[item.id] ?? images.clinic;
              return (
                <Link
                  key={item.id}
                  to={link}
                  className="group bg-white border border-outline-variant rounded-md overflow-hidden flex flex-col hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-52 overflow-hidden bg-surface-container">
                    <img
                      src={image}
                      alt={item.name[lang]}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{item.name[lang]}</h3>
                    <p className="text-[15px] leading-relaxed text-on-surface-variant line-clamp-3 mb-6">
                      {item.description[lang]}
                    </p>
                    <div className="mt-auto pt-4 border-t border-outline-variant flex items-end justify-between gap-4">
                      <div>
                        {item.price !== 'free' && (
                          <span className="block text-[12px] uppercase tracking-wider text-on-surface-variant">{c.from}</span>
                        )}
                        <span className="font-headline-md text-[22px] leading-none text-primary">
                          {formatPrice(item.price, lang)}
                        </span>
                        {item.unit && (
                          <span className="block mt-1 text-[11px] uppercase tracking-wider text-on-surface-variant">
                            {item.unit[lang]}
                          </span>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[14px] font-semibold text-primary group-hover:gap-2 transition-all">
                        {c.more}
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-padding bg-primary text-on-primary">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-aqua">{c.finalEyebrow}</span>
          <h2 className="font-display-lg text-display-lg mt-3 mb-6">{c.finalTitle}</h2>
          <p className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto opacity-80">{c.finalText}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-md font-label-md inline-flex items-center justify-center gap-2"
            >
              {c.book}
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="border border-white/30 text-white px-8 py-4 rounded-md font-label-md inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              {c.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

