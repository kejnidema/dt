import { useI18n, type Lang } from '@/lib/i18n';
import PlaceholderPhoto from '@/components/PlaceholderPhoto';

const ADDRESS = 'Rr. Ibrahim Rugova, 1001 Tirana';
const MAP_QUERY = encodeURIComponent('Rruga Ibrahim Rugova, Tirana, Albania');
const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
/** Drop the clinic photo here; a placeholder shows until the file exists */
const CLINIC_PHOTO = '/images/clinic/exterior.jpg';

interface Copy {
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
  points: { icon: string; title: string; text: string }[];
  openMap: string;
  clinicPhoto: string;
  pinTitle: string;
}

const copy: Record<Lang, Copy> = {
  sq: {
    eyebrow: 'Vendndodhja',
    title: 'Në qendër',
    accent: 'të Tiranës',
    text: 'Klinika ndodhet në zemër të qytetit, pranë Bllokut. Hotele, restorante dhe kafene janë vetëm pak minuta larg në këmbë, kështu që gjatë qëndrimit nuk ju duhet makinë.',
    points: [
      { icon: 'location_on', title: ADDRESS, text: 'Në qendër të qytetit, pranë Bllokut' },
      { icon: 'flight_land', title: 'Rreth 25 minuta nga aeroporti', text: 'Ju presim në Aeroportin Nënë Tereza dhe ju sjellim deri te klinika.' },
      { icon: 'hotel', title: 'Hotele në distancë në këmbë', text: 'Ju ndihmojmë të gjeni akomodim të rehatshëm pranë klinikës.' },
    ],
    openMap: 'Hap në Google Maps',
    clinicPhoto: 'Foto e klinikës',
    pinTitle: 'Veneer Clinic Tirana',
  },
  en: {
    eyebrow: 'Location',
    title: 'In the heart',
    accent: 'of Tirana',
    text: 'The clinic is right in the city centre, next to Blloku. Hotels, restaurants and cafés are only a few minutes’ walk away, so you won’t need a car during your stay.',
    points: [
      { icon: 'location_on', title: ADDRESS, text: 'City centre, next to Blloku' },
      { icon: 'flight_land', title: 'About 25 minutes from the airport', text: 'We meet you at Tirana International Airport and bring you to the clinic.' },
      { icon: 'hotel', title: 'Hotels within walking distance', text: 'We help you find comfortable accommodation close to the clinic.' },
    ],
    openMap: 'Open in Google Maps',
    clinicPhoto: 'Clinic photo',
    pinTitle: 'Veneer Clinic Tirana',
  },
  de: {
    eyebrow: 'Standort',
    title: 'Mitten im Zentrum',
    accent: 'von Tirana',
    text: 'Die Klinik liegt im Herzen der Stadt, direkt am Blloku-Viertel. Hotels, Restaurants und Cafés erreichen Sie in wenigen Gehminuten – ein Auto brauchen Sie während Ihres Aufenthalts nicht.',
    points: [
      { icon: 'location_on', title: ADDRESS, text: 'Stadtzentrum, direkt am Blloku' },
      { icon: 'flight_land', title: 'Etwa 25 Minuten vom Flughafen', text: 'Wir holen Sie am Flughafen Tirana ab und bringen Sie zur Klinik.' },
      { icon: 'hotel', title: 'Hotels in Gehweite', text: 'Wir helfen Ihnen, eine komfortable Unterkunft nahe der Klinik zu finden.' },
    ],
    openMap: 'In Google Maps öffnen',
    clinicPhoto: 'Foto der Klinik',
    pinTitle: 'Veneer Clinic Tirana',
  },
  it: {
    eyebrow: 'Dove siamo',
    title: 'Nel cuore',
    accent: 'di Tirana',
    text: 'La clinica si trova nel centro della città, accanto al Blloku. Hotel, ristoranti e caffè sono a pochi minuti a piedi, quindi durante il soggiorno non serve l’auto.',
    points: [
      { icon: 'location_on', title: ADDRESS, text: 'Centro città, accanto al Blloku' },
      { icon: 'flight_land', title: 'Circa 25 minuti dall’aeroporto', text: 'Ti accogliamo all’aeroporto di Tirana e ti accompagniamo in clinica.' },
      { icon: 'hotel', title: 'Hotel a pochi passi', text: 'Ti aiutiamo a trovare un alloggio confortevole vicino alla clinica.' },
    ],
    openMap: 'Apri in Google Maps',
    clinicPhoto: 'Foto della clinica',
    pinTitle: 'Veneer Clinic Tirana',
  },
};

export default function ClinicLocation() {
  const { lang } = useI18n();
  const c = copy[lang];

  return (
    <section className="py-section-padding bg-surface-container-low overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-gutter grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-16 items-center">
        <div>
          <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">{c.eyebrow}</span>
          <h2 className="mt-3 mb-6 text-primary font-extrabold text-[44px] leading-[1.05] md:text-[60px] tracking-[-0.035em]">
            {c.title}
            <br />
            <span className="relative inline-block">
              <span className="absolute inset-x-[-0.1em] bottom-[0.08em] h-[0.4em] rounded-full bg-aqua" />
              <span className="relative">{c.accent}</span>
            </span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">{c.text}</p>

          <ul className="space-y-5 mb-9">
            {c.points.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-aqua-soft text-primary shrink-0">
                  <span className="material-symbols-outlined">{point.icon}</span>
                </span>
                <div>
                  <p className="font-bold text-primary">{point.title}</p>
                  <p className="text-[15px] text-on-surface-variant mt-0.5">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed font-bold shadow-aqua px-7 py-4 rounded-full font-bold hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">map</span>
            {c.openMap}
          </a>
        </div>

        <div className="relative pb-16 sm:pb-0 sm:pr-10">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-outline-variant bg-surface-container h-[360px] md:h-[460px]">
            <iframe
              title={c.pinTitle}
              src={MAP_EMBED}
              className="absolute inset-0 w-full h-full border-0 grayscale-[25%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="absolute top-4 left-4 flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl shadow-lg px-4 py-3">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-primary text-white">
                <span className="material-symbols-outlined text-[20px]">location_on</span>
              </span>
              <div>
                <p className="font-bold text-primary text-[14px] leading-tight">{c.pinTitle}</p>
                <p className="text-[12px] text-on-surface-variant">{ADDRESS}</p>
              </div>
            </div>
          </div>

          <PlaceholderPhoto
            src={CLINIC_PHOTO}
            label={c.clinicPhoto}
            className="absolute -bottom-2 sm:-bottom-10 right-4 sm:right-0 w-52 sm:w-64 aspect-[4/3] rounded-3xl ring-[6px] ring-white shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
