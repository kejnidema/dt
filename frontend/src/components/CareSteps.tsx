import { useI18n, type Lang } from '@/lib/i18n';
import PlaceholderPhoto from '@/components/PlaceholderPhoto';
import { images, tiranaPhotos } from '@/lib/images';

interface Step {
  icon: string;
  tag: string;
  title: string;
  text: string;
}

interface Copy {
  eyebrow: string;
  title: string;
  text: string;
  languageTitle: string;
  languages: string[];
  photoSoon: string;
  steps: Step[];
}

const copy: Record<Lang, Copy> = {
  sq: {
    eyebrow: 'Si funksionon',
    title: 'Ne kujdesemi për të gjithë hapat',
    text: 'Nga aeroporti deri te kontrolli i fundit jeni gjithmonë të shoqëruar, dhe çdo gjë ju shpjegohet në gjuhën tuaj.',
    languageTitle: 'Shoqërim dhe komunikim në gjuhën tuaj',
    languages: ['🇩🇪 Gjermanisht', '🇬🇧 Anglisht', '🇮🇹 Italisht', '🇦🇱 Shqip'],
    photoSoon: 'Foto së shpejti',
    steps: [
      { icon: 'flight_land', tag: 'Mbërritja', title: 'Kujdesi ynë fillon në aeroport', text: 'Një anëtar i ekipit ju pret në aeroport dhe ju shoqëron në hotel ose në klinikë, që dita e parë të nisë qetë.' },
      { icon: 'support_agent', tag: 'Koordinatori', title: 'Koordinator personal që flet gjuhën tuaj', text: 'Nga mesazhi i parë në WhatsApp deri te kontrolli i fundit, një koordinator ju shoqëron dhe ju përgjigjet për çdo pyetje.' },
      { icon: 'hotel', tag: 'Akomodimi', title: 'Qëndrim i rehatshëm pranë klinikës', text: 'Ju ndihmojmë të gjeni akomodim pranë klinikës, që çdo takim të jetë vetëm pak minuta larg.' },
      { icon: 'local_hospital', tag: 'Klinika', title: 'Një klinikë moderne në qendër të Tiranës', text: 'Ambient i pastër dhe modern, pajisje të certifikuara dhe një ekip që ju shpjegon çdo hap para se të fillojë.' },
      { icon: 'dentistry', tag: 'Trajtimi', title: 'Trajtimi sipas planit tuaj', text: 'Trajtimi kryhet sipas planit dhe ofertës që keni marrë paraprakisht. Seancat i organizojmë sipas fluturimeve tuaja; implantet kërkojnë dy udhëtime, me rreth 6 muaj ndërmjet.' },
      { icon: 'fact_check', tag: 'Pas trajtimit', title: 'Kontrollet pas trajtimit', text: 'Bëjmë kontrollet e nevojshme pas trajtimit dhe mbetemi në kontakt edhe pasi ktheheni në shtëpi, me garanci dhe ripunim falas brenda saj.' },
    ],
  },
  en: {
    eyebrow: 'How it works',
    title: 'We take care of every step',
    text: 'From the airport to your final check-up you are always accompanied, and everything is explained in your language.',
    languageTitle: 'Support and communication in your language',
    languages: ['🇩🇪 German', '🇬🇧 English', '🇮🇹 Italian', '🇦🇱 Albanian'],
    photoSoon: 'Photo coming soon',
    steps: [
      { icon: 'flight_land', tag: 'Arrival', title: 'Our care starts at the airport', text: 'A team member meets you at the airport and takes you to your hotel or the clinic, so your first day starts calmly.' },
      { icon: 'support_agent', tag: 'Coordinator', title: 'A personal coordinator who speaks your language', text: 'From the first WhatsApp message to the final check-up, a coordinator is by your side and answers every question.' },
      { icon: 'hotel', tag: 'Accommodation', title: 'A comfortable stay near the clinic', text: 'We help you find accommodation close to the clinic, so every appointment is just a few minutes away.' },
      { icon: 'local_hospital', tag: 'The clinic', title: 'A modern clinic in the centre of Tirana', text: 'A clean, modern space, certified equipment and a team that explains every step before it begins.' },
      { icon: 'dentistry', tag: 'Treatment', title: 'Treatment according to your plan', text: 'Treatment follows the plan and quote you received in advance. We schedule sessions around your flights; implants need two trips, about 6 months apart.' },
      { icon: 'fact_check', tag: 'Aftercare', title: 'Follow-up check-ups', text: 'We carry out the necessary check-ups after treatment and stay in touch after you return home, with a warranty and free rework under it.' },
    ],
  },
  de: {
    eyebrow: 'So funktioniert es',
    title: 'Wir kümmern uns um jeden Schritt',
    text: 'Vom Flughafen bis zur Abschlusskontrolle werden Sie begleitet – und alles wird Ihnen in Ihrer Sprache erklärt.',
    languageTitle: 'Begleitung und Kommunikation in Ihrer Sprache',
    languages: ['🇩🇪 Deutsch', '🇬🇧 Englisch', '🇮🇹 Italienisch', '🇦🇱 Albanisch'],
    photoSoon: 'Foto folgt',
    steps: [
      { icon: 'flight_land', tag: 'Ankunft', title: 'Unsere Betreuung beginnt am Flughafen', text: 'Ein Teammitglied holt Sie am Flughafen ab und bringt Sie ins Hotel oder in die Klinik, damit Ihr erster Tag entspannt beginnt.' },
      { icon: 'support_agent', tag: 'Koordinator', title: 'Ein persönlicher Koordinator, der Ihre Sprache spricht', text: 'Von der ersten WhatsApp-Nachricht bis zur Abschlusskontrolle begleitet Sie ein Koordinator und beantwortet jede Frage.' },
      { icon: 'hotel', tag: 'Unterkunft', title: 'Komfortabel wohnen, nah an der Klinik', text: 'Wir helfen Ihnen, eine Unterkunft nahe der Klinik zu finden, damit jeder Termin nur wenige Minuten entfernt ist.' },
      { icon: 'local_hospital', tag: 'Die Klinik', title: 'Eine moderne Klinik im Zentrum von Tirana', text: 'Saubere, moderne Räume, zertifizierte Geräte und ein Team, das Ihnen jeden Schritt erklärt, bevor er beginnt.' },
      { icon: 'dentistry', tag: 'Behandlung', title: 'Behandlung nach Ihrem Plan', text: 'Die Behandlung folgt dem Plan und Angebot, das Sie vorab erhalten haben. Die Termine planen wir nach Ihren Flügen; Implantate brauchen zwei Reisen im Abstand von etwa 6 Monaten.' },
      { icon: 'fact_check', tag: 'Nachsorge', title: 'Nachkontrollen', text: 'Nach der Behandlung führen wir die nötigen Kontrollen durch und bleiben auch nach Ihrer Rückkehr in Kontakt – mit Garantie und kostenloser Nacharbeit.' },
    ],
  },
  it: {
    eyebrow: 'Come funziona',
    title: 'Ci prendiamo cura di ogni passo',
    text: 'Dall’aeroporto all’ultimo controllo sei sempre accompagnato, e tutto ti viene spiegato nella tua lingua.',
    languageTitle: 'Assistenza e comunicazione nella tua lingua',
    languages: ['🇮🇹 Italiano', '🇩🇪 Tedesco', '🇬🇧 Inglese', '🇦🇱 Albanese'],
    photoSoon: 'Foto in arrivo',
    steps: [
      { icon: 'flight_land', tag: 'Arrivo', title: 'La nostra assistenza inizia in aeroporto', text: 'Un membro del team ti accoglie in aeroporto e ti accompagna in hotel o in clinica, così il primo giorno inizia con calma.' },
      { icon: 'support_agent', tag: 'Coordinatore', title: 'Un coordinatore personale che parla la tua lingua', text: 'Dal primo messaggio su WhatsApp all’ultimo controllo, un coordinatore ti segue e risponde a ogni domanda.' },
      { icon: 'hotel', tag: 'Alloggio', title: 'Un soggiorno confortevole vicino alla clinica', text: 'Ti aiutiamo a trovare un alloggio vicino alla clinica, così ogni appuntamento è a pochi minuti.' },
      { icon: 'local_hospital', tag: 'La clinica', title: 'Una clinica moderna nel centro di Tirana', text: 'Ambienti puliti e moderni, attrezzature certificate e un team che ti spiega ogni passo prima di iniziare.' },
      { icon: 'dentistry', tag: 'Trattamento', title: 'Il trattamento secondo il tuo piano', text: 'Il trattamento segue il piano e il preventivo ricevuti in anticipo. Organizziamo le sedute in base ai tuoi voli; gli impianti richiedono due viaggi, a circa 6 mesi di distanza.' },
      { icon: 'fact_check', tag: 'Dopo il trattamento', title: 'Controlli successivi', text: 'Eseguiamo i controlli necessari dopo il trattamento e restiamo in contatto anche dopo il tuo rientro, con garanzia e rifacimento gratuito.' },
    ],
  },
};

const clinicCollage = [images.clinicGallery[1], images.surgery[6], images.surgery[7]].map((src) => src ?? images.heroAfter);

const stepPhotos: (string | undefined)[] = [
  '/images/journey/airport.jpg',
  images.team,
  tiranaPhotos[4],
  undefined,
  images.surgery[3],
  '/images/patients/smile2.jpeg',
];

export default function CareSteps() {
  const { lang } = useI18n();
  const c = copy[lang];

  return (
    <section className="py-section-padding bg-surface">
      <div className="max-w-[1200px] mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">{c.eyebrow}</span>
          <h2 className="font-display-lg text-[36px] md:text-[44px] leading-tight text-primary mt-3 mb-4">{c.title}</h2>
          <p className="text-[17px] text-on-surface-variant">{c.text}</p>
        </div>

        <div className="mx-auto mb-16 max-w-3xl flex flex-col sm:flex-row items-center justify-center gap-4 rounded-3xl bg-aqua-soft px-6 py-5 text-center sm:text-left">
          <span className="grid place-items-center w-12 h-12 rounded-full bg-aqua text-primary shrink-0">
            <span className="material-symbols-outlined">translate</span>
          </span>
          <p className="font-bold text-primary text-[17px]">{c.languageTitle}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {c.languages.map((language) => (
              <span key={language} className="rounded-full bg-white px-3 py-1 text-[13px] font-semibold text-primary shadow-sm">
                {language}
              </span>
            ))}
          </div>
        </div>

        <ol className="relative">
          <span aria-hidden className="absolute top-0 bottom-0 left-6 lg:left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-aqua/30 via-aqua-deep to-aqua/30" />
          {c.steps.map((step, index) => {
            const flipped = index % 2 === 1;
            const src = stepPhotos[index];
            return (
              <li key={step.title} className="relative grid lg:grid-cols-2 gap-6 lg:gap-20 items-center pl-16 lg:pl-0 pb-14 last:pb-0">
                <span className="absolute left-6 lg:left-1/2 top-0 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-10 grid place-items-center w-12 h-12 rounded-full bg-aqua text-primary font-extrabold text-[18px] ring-8 ring-surface">
                  {index + 1}
                </span>

                <div className={`bg-white border border-outline-variant rounded-3xl p-7 md:p-8 shadow-sm hover:shadow-lg transition-shadow ${flipped ? 'lg:order-2' : ''}`}>
                  <span className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px] text-primary">{step.icon}</span>
                    {step.tag}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-2 mb-3">{step.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{step.text}</p>
                  {index === 1 && (
                    <div className="flex flex-wrap gap-2 mt-5">
                      {c.languages.map((language) => (
                        <span key={language} className="rounded-full bg-aqua-soft px-3 py-1 text-[13px] font-semibold text-primary">
                          {language}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {src ? (
                  <PlaceholderPhoto
                    src={src}
                    label={c.photoSoon}
                    className={`aspect-[4/3] rounded-3xl shadow-md ${flipped ? 'lg:order-1' : ''}`}
                  />
                ) : (
                  <div className={`grid grid-cols-2 grid-rows-2 gap-3 aspect-[4/3] ${flipped ? 'lg:order-1' : ''}`}>
                    {clinicCollage.map((photo, i) => (
                      <div key={photo + i} className={`rounded-3xl overflow-hidden bg-surface-container shadow-md ${i === 0 ? 'row-span-2' : ''}`}>
                        <img src={photo} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
