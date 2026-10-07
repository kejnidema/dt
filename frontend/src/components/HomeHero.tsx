import { Link } from 'react-router-dom';
import { useI18n, type Lang } from '@/lib/i18n';
import { formatPrice, localMarkets, menuSummaries, priceGroups, treatmentHref } from '@/lib/priceList';

const HERO_PHOTO = '/images/patients/smile0.jpeg';
const PACKAGE_IDS = ['all-on-4', 'all-on-6'];

interface Copy {
  badge: string;
  titleTop: string;
  titleAccent: string;
  text: string;
  germany: string;
  noChina: string;
  checks: string[];
  cta: string;
  warrantyTitle: string;
  warrantyText: string;
  photoAlt: string;
}

const copy: Record<Lang, Copy> = {
  sq: {
    badge: 'Implante dentare në Tiranë',
    titleTop: 'Implante MegaGen me',
    titleAccent: '10 vjet garanci',
    text: 'Ne planifikojmë çdo gjë, nga konsulta e parë deri te kontrollet pas trajtimit.',
    germany: 'Materiale “Made in Germany”, të certifikuara',
    noChina: '0 materiale nga Kina',
    checks: ['Konsultë online falas', 'Ripunim falas brenda garancisë', 'Transfertë nga aeroporti', 'Koordinator në gjuhën tuaj'],
    cta: 'Merr ofertën falas',
    warrantyTitle: '10 vjet garanci',
    warrantyText: 'për çdo implant',
    photoAlt: 'Buzëqeshje pas trajtimit në Veneer Clinic',
  },
  en: {
    badge: 'Dental implants in Tirana',
    titleTop: 'MegaGen implants with a',
    titleAccent: '10-year warranty',
    text: 'We plan everything, from your first consultation to your follow-up check-ups.',
    germany: 'Certified “Made in Germany” materials',
    noChina: '0 materials from China',
    checks: ['Free online consultation', 'Free rework under warranty', 'Airport transfer', 'A coordinator who speaks your language'],
    cta: 'Get your free quote',
    warrantyTitle: '10-year warranty',
    warrantyText: 'on every implant',
    photoAlt: 'Smile after treatment at Veneer Clinic',
  },
  de: {
    badge: 'Zahnimplantate in Tirana',
    titleTop: 'MegaGen-Implantate mit',
    titleAccent: '10 Jahren Garantie',
    text: 'Wir planen alles – von der ersten Beratung bis zu den Nachkontrollen.',
    germany: 'Zertifizierte Materialien „Made in Germany“',
    noChina: '0 Materialien aus China',
    checks: ['Kostenlose Online-Beratung', 'Kostenlose Nacharbeit im Rahmen der Garantie', 'Flughafentransfer', 'Koordinator in Ihrer Sprache'],
    cta: 'Kostenloses Angebot erhalten',
    warrantyTitle: '10 Jahre Garantie',
    warrantyText: 'auf jedes Implantat',
    photoAlt: 'Lächeln nach der Behandlung in der Veneer Clinic',
  },
  it: {
    badge: 'Impianti dentali a Tirana',
    titleTop: 'Impianti MegaGen con',
    titleAccent: '10 anni di garanzia',
    text: 'Pianifichiamo tutto, dalla prima consulenza ai controlli successivi.',
    germany: 'Materiali certificati “Made in Germany”',
    noChina: '0 materiali dalla Cina',
    checks: ['Consulenza online gratuita', 'Rifacimento gratuito in garanzia', 'Transfer dall’aeroporto', 'Un coordinatore che parla la tua lingua'],
    cta: 'Ricevi il preventivo gratuito',
    warrantyTitle: '10 anni di garanzia',
    warrantyText: 'su ogni impianto',
    photoAlt: 'Sorriso dopo il trattamento alla Veneer Clinic',
  },
};

const allItems = priceGroups.flatMap((group) => group.items);
const packages = PACKAGE_IDS.map((id) => allItems.find((item) => item.id === id)).filter((item) => item !== undefined);

export default function HomeHero() {
  const { lang } = useI18n();
  const c = copy[lang];
  const oldPrices = localMarkets[lang]?.prices;

  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-aqua-soft blur-3xl opacity-70" />

      <div className="relative max-w-[1200px] mx-auto px-gutter py-10 md:py-14 lg:py-16 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-aqua-soft text-primary text-[12px] font-bold uppercase tracking-[0.1em]">
            <span className="material-symbols-outlined text-[16px]">dentistry</span>
            {c.badge}
          </span>

          <h1 className="mt-5 text-primary font-extrabold text-[38px] leading-[1.08] md:text-[54px] tracking-[-0.035em]">
            {c.titleTop}{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="absolute inset-x-[-0.12em] bottom-[0.08em] h-[0.4em] rounded-full bg-aqua" />
              <span className="relative">{c.titleAccent}</span>
            </span>
          </h1>

          <p className="mt-5 text-[18px] leading-relaxed text-on-surface-variant max-w-xl">{c.text}</p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
            {[c.germany, c.noChina, ...c.checks].map((check) => (
              <li key={check} className="flex items-center gap-2.5 text-[15px] font-semibold text-primary">
                <span className="grid place-items-center w-6 h-6 rounded-full bg-aqua text-primary shrink-0">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </span>
                {check}
              </li>
            ))}
          </ul>

          <div className="mt-7 max-w-xl rounded-3xl bg-primary p-5 sm:p-6 shadow-2xl">
            <div className="grid grid-cols-2 divide-x divide-white/15">
              {packages.map((item, index) => {
                const old = oldPrices?.[item.id];
                return (
                  <Link
                    key={item.id}
                    to={treatmentHref(item.id)}
                    className={`group block ${index === 0 ? 'pr-4 sm:pr-6' : 'pl-4 sm:pl-6'}`}
                  >
                    <p className="flex items-center gap-1 font-extrabold text-white text-[18px]">
                      {item.name[lang]}
                      <span className="material-symbols-outlined text-[18px] text-aqua opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        arrow_forward
                      </span>
                    </p>
                    <p className="text-[13px] text-white/60">{menuSummaries[item.id]?.[lang]}</p>
                    {old !== undefined && (
                      <p className="mt-3 text-[15px] text-white/50 line-through decoration-2 decoration-red-400">{formatPrice(old, lang)}</p>
                    )}
                    <p className="text-[30px] sm:text-[36px] font-extrabold leading-tight text-aqua">{formatPrice(item.price, lang)}</p>
                    {item.unit && <p className="text-[12px] text-white/60">{item.unit[lang]}</p>}
                  </Link>
                );
              })}
            </div>

            <span className="cta-spin mt-6 flex w-full rounded-full">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-3 bg-secondary-fixed text-on-secondary-fixed px-8 py-4 sm:py-5 rounded-full font-extrabold text-[18px]"
              >
                {c.cta}
                <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
              </Link>
            </span>
          </div>
        </div>

        <div className="relative lg:pl-4">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[5/4] lg:aspect-[4/5]">
            <img src={HERO_PHOTO} alt={c.photoAlt} className="w-full h-full object-cover" fetchPriority="high" />
          </div>

          <div className="hero-float absolute -bottom-6 left-0 sm:-left-6 flex items-center gap-3 bg-white rounded-2xl border border-outline-variant shadow-[0_20px_45px_-12px_rgba(19,28,21,0.35),0_4px_12px_-4px_rgba(19,28,21,0.12)] px-5 py-4">
            <span className="grid place-items-center w-12 h-12 rounded-full bg-aqua text-primary">
              <span className="material-symbols-outlined">verified_user</span>
            </span>
            <div>
              <p className="font-extrabold text-primary text-[18px] leading-tight">{c.warrantyTitle}</p>
              <p className="text-[13px] text-on-surface-variant">{c.warrantyText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
