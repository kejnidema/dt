import { Link } from 'react-router-dom';
import { useI18n, type Lang } from '@/lib/i18n';
import DoctorCard, { DoctorPlaceholderCard } from '@/components/DoctorCard';
import { doctors, TEAM_SIZE } from '@/lib/doctors';
import { whatsAppUrl } from '@/lib/whatsapp';

const WHATSAPP_URL = whatsAppUrl();

interface Copy {
  home: string;
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  teamEyebrow: string;
  teamTitle: string;
  soon: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaText: string;
  ctaWhatsApp: string;
}

const copy: Record<Lang, Copy> = {
  sq: {
    home: 'Kryefaqja',
    eyebrow: 'Specialistët tanë',
    title: 'Njihuni me ekipin tonë dentar',
    text: 'Çdo plan trajtimi udhëhiqet nga mjekë specialistë me formim universitar, përvojë klinike dhe akademike, të mbështetur nga planifikimi digjital 3D.',
    cta: 'Rezervo një konsultë falas',
    teamEyebrow: 'Njihuni me ekipin',
    teamTitle: 'Të gjithë specialistët',
    soon: 'Profili shtohet së shpejti',
    ctaEyebrow: 'Konsultë falas në distancë',
    ctaTitle: 'Gati ta shihni buzëqeshjen tuaj të re?',
    ctaText: 'Na dërgoni disa foto dhe një grafi panoramike: brenda 24 orëve merrni plan trajtimi dhe çmim të fiksuar. Pa asnjë detyrim.',
    ctaWhatsApp: 'Bisedo në WhatsApp',
  },
  en: {
    home: 'Home',
    eyebrow: 'Our specialists',
    title: 'Meet our dental team',
    text: 'Every treatment plan is led by specialist doctors with university training and clinical and academic experience, supported by 3D digital planning.',
    cta: 'Book a free consultation',
    teamEyebrow: 'Meet the team',
    teamTitle: 'All specialists',
    soon: 'Profile coming soon',
    ctaEyebrow: 'Free remote consultation',
    ctaTitle: 'Ready to see your new smile?',
    ctaText: 'Send a few photos and a panoramic X-ray: within 24 hours you get a treatment plan and a fixed price. No obligation.',
    ctaWhatsApp: 'Chat on WhatsApp',
  },
  de: {
    home: 'Startseite',
    eyebrow: 'Unsere Spezialisten',
    title: 'Lernen Sie unser Zahnärzteteam kennen',
    text: 'Jeder Behandlungsplan wird von Fachärzten mit universitärer Ausbildung sowie klinischer und akademischer Erfahrung geleitet – unterstützt durch digitale 3D-Planung.',
    cta: 'Kostenlose Beratung buchen',
    teamEyebrow: 'Das Team',
    teamTitle: 'Alle Spezialisten',
    soon: 'Profil folgt in Kürze',
    ctaEyebrow: 'Kostenlose Fernberatung',
    ctaTitle: 'Bereit für Ihr neues Lächeln?',
    ctaText: 'Senden Sie ein paar Fotos und ein Panorama-Röntgenbild und erhalten Sie innerhalb von 24 Stunden Behandlungsplan und Festpreis. Unverbindlich.',
    ctaWhatsApp: 'Per WhatsApp chatten',
  },
  it: {
    home: 'Home',
    eyebrow: 'I nostri specialisti',
    title: 'Conosci il nostro team dentale',
    text: 'Ogni piano di trattamento è guidato da medici specialisti con formazione universitaria ed esperienza clinica e accademica, supportati dalla pianificazione digitale 3D.',
    cta: 'Prenota una consulenza gratuita',
    teamEyebrow: 'Il team',
    teamTitle: 'Tutti gli specialisti',
    soon: 'Profilo in arrivo',
    ctaEyebrow: 'Consulenza gratuita a distanza',
    ctaTitle: 'Pronto a vedere il tuo nuovo sorriso?',
    ctaText: 'Inviaci qualche foto e una panoramica: entro 24 ore ricevi piano di trattamento e prezzo fisso. Senza impegno.',
    ctaWhatsApp: 'Scrivici su WhatsApp',
  },
};


export default function AboutPage() {
  const { lang } = useI18n();
  const c = copy[lang];
  const placeholders = Math.max(0, TEAM_SIZE - doctors.length);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-section-padding bg-primary text-on-primary">
        <div className="absolute -right-32 -top-32 w-[28rem] h-[28rem] rounded-full bg-aqua/20 blur-3xl" aria-hidden />
        <div className="relative max-w-[1200px] mx-auto px-gutter">
          <nav className="flex items-center gap-2 text-[13px] text-white/70 mb-8">
            <Link to="/" className="hover:text-white">{c.home}</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-white">{c.title}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-aqua">{c.eyebrow}</span>
              <h1 className="font-display-lg text-display-lg mt-3 mb-6">{c.title}</h1>
              <p className="font-body-lg text-body-lg text-white/80 mb-10">{c.text}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-md font-label-md">
                {c.cta}
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/15">
              <img src="/images/staff/team0.jpeg" alt={c.title} className="w-full h-full object-cover aspect-[5/4]" />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-section-padding bg-surface">
        <div className="max-w-[1400px] mx-auto px-gutter">
          <div className="text-center mb-12">
            <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">{c.teamEyebrow}</span>
            <h2 className="font-display-lg text-display-lg text-primary mt-3">{c.teamTitle}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
            {Array.from({ length: placeholders }, (_, i) => (
              <DoctorPlaceholderCard key={i} label={c.soon} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-gutter text-center">
          <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">{c.ctaEyebrow}</span>
          <h2 className="font-display-lg text-display-lg text-primary mt-3 mb-4">{c.ctaTitle}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">{c.ctaText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-md font-label-md">
              {c.cta}
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
            {WHATSAPP_URL && (
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-md font-label-md hover:bg-primary/5 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                {c.ctaWhatsApp}
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
