import { Link, Navigate, useParams } from 'react-router-dom';
import { useI18n, type Lang } from '@/lib/i18n';
import DoctorCard, { yearsOfExperience } from '@/components/DoctorCard';
import { doctors } from '@/lib/doctors';

interface Copy {
  home: string;
  team: string;
  expertise: string;
  cta: string;
  about: string;
  education: string;
  experience: string;
  training: string;
  academic: string;
  publications: string;
  skills: string;
  more: string;
  moreTitle: string;
  ctaTitle: string;
  ctaText: string;
}

const copy: Record<Lang, Copy> = {
  sq: {
    home: 'Kryefaqja',
    team: 'Ekipi ynë',
    expertise: 'Vite përvojë klinike',
    cta: 'Rezervo një konsultë falas',
    about: 'Rreth',
    education: 'Edukimi',
    experience: 'Përvoja klinike',
    training: 'Trajnime të avancuara',
    academic: 'Mësimdhënie & kërkim',
    publications: 'Publikime',
    skills: 'Kompetenca klinike',
    more: 'Njihuni me ekipin',
    moreTitle: 'Më shumë specialistë',
    ctaTitle: 'Gati ta shihni buzëqeshjen tuaj të re?',
    ctaText: 'Na dërgoni disa foto dhe një grafi panoramike: brenda 24 orëve merrni plan trajtimi dhe çmim të fiksuar. Pa asnjë detyrim.',
  },
  en: {
    home: 'Home',
    team: 'Our team',
    expertise: 'Years of clinical expertise',
    cta: 'Book a free consultation',
    about: 'About',
    education: 'Education',
    experience: 'Clinical experience',
    training: 'Advanced training',
    academic: 'Teaching & research',
    publications: 'Publications',
    skills: 'Clinical skills',
    more: 'Meet the team',
    moreTitle: 'More specialists',
    ctaTitle: 'Ready to see your new smile?',
    ctaText: 'Send a few photos and a panoramic X-ray: within 24 hours you get a treatment plan and a fixed price. No obligation.',
  },
  de: {
    home: 'Startseite',
    team: 'Unser Team',
    expertise: 'Jahre klinische Erfahrung',
    cta: 'Kostenlose Beratung buchen',
    about: 'Über',
    education: 'Ausbildung',
    experience: 'Klinische Erfahrung',
    training: 'Fortbildungen',
    academic: 'Lehre & Forschung',
    publications: 'Publikationen',
    skills: 'Klinische Kompetenzen',
    more: 'Das Team',
    moreTitle: 'Weitere Spezialisten',
    ctaTitle: 'Bereit für Ihr neues Lächeln?',
    ctaText: 'Senden Sie ein paar Fotos und ein Panorama-Röntgenbild und erhalten Sie innerhalb von 24 Stunden Behandlungsplan und Festpreis. Unverbindlich.',
  },
  it: {
    home: 'Home',
    team: 'Il nostro team',
    expertise: 'Anni di esperienza clinica',
    cta: 'Prenota una consulenza gratuita',
    about: 'Chi è',
    education: 'Formazione',
    experience: 'Esperienza clinica',
    training: 'Corsi avanzati',
    academic: 'Didattica e ricerca',
    publications: 'Pubblicazioni',
    skills: 'Competenze cliniche',
    more: 'Il team',
    moreTitle: 'Altri specialisti',
    ctaTitle: 'Pronto a vedere il tuo nuovo sorriso?',
    ctaText: 'Inviaci qualche foto e una panoramica: entro 24 ore ricevi piano di trattamento e prezzo fisso. Senza impegno.',
  },
};

function SectionTitle({ icon, children }: { icon: string; children: string }) {
  return (
    <h2 className="flex items-center gap-3 font-headline-sm text-headline-sm text-primary mb-6">
      <span className="grid place-items-center w-10 h-10 rounded-md bg-aqua-soft text-primary">
        <span className="material-symbols-outlined text-[22px]">{icon}</span>
      </span>
      {children}
    </h2>
  );
}

function TimelineList({ items }: { items: { years: string; title: string; place: string }[] }) {
  return (
    <ol className="relative border-l border-outline-variant ml-2 space-y-6">
      {items.map((item) => (
        <li key={item.title + item.years} className="pl-6 relative">
          <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="text-[13px] font-semibold text-secondary">{item.years}</span>
          <p className="font-semibold text-primary mt-0.5">{item.title}</p>
          <p className="text-[14px] text-on-surface-variant">{item.place}</p>
        </li>
      ))}
    </ol>
  );
}

export default function DoctorPage() {
  const { slug } = useParams();
  const { lang } = useI18n();
  const c = copy[lang];
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) return <Navigate to="/about/doctors" replace />;

  const others = doctors.filter((d) => d.slug !== doctor.slug);

  return (
    <>
      {/* Hero */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <nav className="flex flex-wrap items-center gap-2 text-[13px] text-on-surface-variant mb-8">
            <Link to="/" className="hover:text-primary">{c.home}</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <Link to="/about/doctors" className="hover:text-primary">{c.team}</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-primary">{doctor.name}</span>
          </nav>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-surface-container shadow-xl">
                <img src={doctor.photo} alt={doctor.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-primary text-on-primary rounded-lg px-6 py-4 shadow-xl">
                <p className="font-display-lg text-[40px] leading-none">{yearsOfExperience(doctor.since)}+</p>
                <p className="text-[13px] text-white/75 mt-1">{c.expertise}</p>
              </div>
            </div>
            <div>
              <h1 className="font-display-lg text-display-lg text-primary">{doctor.name}</h1>
              {doctor.credentials && <p className="text-[14px] text-on-surface-variant mt-2">{doctor.credentials}</p>}
              <p className="font-headline-sm text-headline-sm text-secondary mt-3 mb-6">{doctor.role[lang]}</p>
              <div className="flex items-center gap-3 bg-white border border-outline-variant rounded-md p-4 mb-6 max-w-md">
                <span className="material-symbols-outlined text-primary text-[28px]">school</span>
                <span className="font-semibold text-primary">{doctor.university[lang]}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {doctor.tags.map((tag) => (
                  <span key={tag.en} className="text-[13px] px-3 py-1.5 rounded-full bg-aqua-soft text-primary">
                    {tag[lang]}
                  </span>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-md font-label-md">
                {c.cta}
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About + highlights */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1000px] mx-auto px-gutter">
          <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">{c.about}</span>
          <div className="mt-4 space-y-5 font-body-lg text-body-lg text-on-surface-variant">
            {doctor.about.map((p) => (
              <p key={p.en}>{p[lang]}</p>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-12">
            {doctor.highlights.map((h) => (
              <div key={h.label.en} className="bg-white border border-outline-variant rounded-lg p-6 text-center">
                <p className="font-display-lg text-[36px] leading-none text-primary">{h.value}</p>
                <p className="text-[14px] text-on-surface-variant mt-2">{h.label[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education + experience */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1100px] mx-auto px-gutter grid md:grid-cols-2 gap-12">
          <div>
            <SectionTitle icon="school">{c.education}</SectionTitle>
            <TimelineList
              items={doctor.education.map((e) => ({
                years: typeof e.years === 'string' ? e.years : e.years[lang],
                title: e.title[lang],
                place: e.place[lang],
              }))}
            />
          </div>
          <div>
            <SectionTitle icon="medical_services">{c.experience}</SectionTitle>
            <TimelineList items={doctor.experience.map((e) => ({ years: e.years, title: e.title[lang], place: e.place[lang] }))} />
          </div>
        </div>
      </section>

      {/* Training + academic */}
      {(doctor.training.length > 0 || doctor.academic.length > 0 || doctor.skills) && (
      <section className="py-section-padding bg-surface-container-low">
        <div className={`max-w-[1100px] mx-auto px-gutter grid gap-12 ${doctor.training.length ? 'md:grid-cols-2' : ''}`}>
          {doctor.training.length > 0 && (
            <div>
              <SectionTitle icon="workspace_premium">{c.training}</SectionTitle>
              <ul className="space-y-3">
                {doctor.training.map((t) => (
                  <li key={t.title.en} className="bg-white border border-outline-variant rounded-md p-4 flex gap-4">
                    <span className="shrink-0 text-[13px] font-semibold text-secondary w-12">{t.year}</span>
                    <span>
                      <span className="text-primary font-medium">{t.title[lang]}</span>
                      {t.place && <span className="block text-[13px] text-on-surface-variant mt-0.5">{t.place[lang]}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {doctor.academic.length > 0 && (
          <div className={doctor.training.length ? '' : 'max-w-3xl mx-auto w-full'}>
            <SectionTitle icon="menu_book">{c.academic}</SectionTitle>
            <ul className="space-y-3">
              {doctor.academic.map((a) => (
                <li key={a.en} className="flex gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                  {a[lang]}
                </li>
              ))}
            </ul>
            {doctor.publications.length > 0 && (
              <>
                <h3 className="font-semibold text-primary mt-8 mb-3">{c.publications}</h3>
                <ul className="space-y-2">
                  {doctor.publications.map((p) => (
                    <li key={p} className="flex gap-3 text-on-surface-variant italic">
                      <span className="material-symbols-outlined text-secondary text-[20px] not-italic">article</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          )}
          {doctor.skills && (
            <div className="max-w-3xl mx-auto w-full">
              <SectionTitle icon="clinical_notes">{c.skills}</SectionTitle>
              <ul className="grid gap-3">
                {doctor.skills.map((skill) => (
                  <li key={skill.en} className="flex gap-3 bg-white border border-outline-variant rounded-md p-4 text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                    {skill[lang]}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      )}

      {/* More specialists */}
      {others.length > 0 && (
        <section className="py-section-padding bg-surface">
          <div className="max-w-[1200px] mx-auto px-gutter">
            <div className="text-center mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">{c.more}</span>
              <h2 className="font-display-lg text-display-lg text-primary mt-3">{c.moreTitle}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {others.map((d) => (
                <DoctorCard key={d.slug} doctor={d} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-section-padding bg-primary text-on-primary">
        <div className="max-w-3xl mx-auto px-gutter text-center">
          <h2 className="font-display-lg text-display-lg mb-4">{c.ctaTitle}</h2>
          <p className="font-body-lg text-body-lg text-white/75 mb-10">{c.ctaText}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-md font-label-md">
            {c.cta}
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
