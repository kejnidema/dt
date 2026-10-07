import { Link } from 'react-router-dom';
import { useI18n, type Lang } from '@/lib/i18n';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import PlaceholderPhoto from '@/components/PlaceholderPhoto';
import DoctorCard from '@/components/DoctorCard';
import { doctors } from '@/lib/doctors';
import HomeHero from '@/components/HomeHero';
import ClinicLocation from '@/components/ClinicLocation';
import CareSteps from '@/components/CareSteps';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { images, galleryPairs, tiranaPhotos } from '@/lib/images';
import { formatPrice, lowestPrice, priceGroups, treatmentHref, type Localized } from '@/lib/priceList';

const WHATSAPP_URL = 'https://wa.me/355690000000';
const photo = (index: number) => images.surgery[index] ?? images.heroAfter;

interface Point {
  icon: string;
  title: string;
  text: string;
}

interface Copy {
  certsTitle: string;
  certsText: string;
  certs: { code: string; title: string; text: string }[];
  whyEyebrow: string;
  whyTitle: string;
  whyAccent: string;
  whyText: string;
  whyPoints: Point[];
  treatmentsTitle: string;
  treatmentsText: string;
  from: string;
  learnMore: string;
  allTreatments: string;
  destTag: string;
  destTitle: string;
  destAccent: string;
  destText: string;
  destHighlights: Point[];
  photoSoon: string;
  storiesEyebrow: string;
  storiesTitle: string;
  storiesText: string;
  caseLabel: string;
  storiesAll: string;
  teamEyebrow: string;
  teamTitle: string;
  teamText: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaText: string;
  ctaBook: string;
  ctaWhatsApp: string;
}

const copy: Record<Lang, Copy> = {
  sq: {
    certsTitle: 'Certifikime dhe standarde',
    certsText: 'Materialet dhe pajisjet që përdorim mbajnë certifikime ndërkombëtare dhe europiane.',
    certs: [
      { code: 'ISO 13485', title: 'Produkte të certifikuara ISO 13485', text: 'Standardi ndërkombëtar i cilësisë për pajisjet mjekësore.' },
      { code: 'CE', title: 'Produkte me certifikim CE / EU MDR', text: 'Në përputhje me Rregulloren Europiane për Pajisjet Mjekësore.' },
    ],
    whyEyebrow: 'Veneer Clinic',
    whyTitle: 'Cilësi europiane.',
    whyAccent: 'Çmime të ndershme.',
    whyText:
      'Veneer Clinic mirëpret pacientë nga e gjithë Europa që zgjedhin Tiranën për trajtimin e tyre dentar. Punojmë me materiale të njohura, planifikim të kujdesshëm dhe vëmendje personale, me çmime që i dini që në fillim.',
    whyPoints: [
      { icon: 'trending_down', title: 'Deri në 70% më pak', text: 'Krahasuar me çmimet private në Gjermani, Itali dhe Europën Perëndimore, me të njëjtat materiale.' },
      { icon: 'verified', title: 'Materiale që i njihni', text: 'Implante MegaGen, zirkon “Made in Germany” dhe qeramikë E-max. Ju themi saktësisht çfarë vendoset në gojën tuaj.' },
      { icon: 'event_available', title: 'Pa lista pritjeje', text: 'Trajtimi nis që ditën e parë të vizitës, sipas planit që keni marrë paraprakisht.' },
      { icon: 'travel_explore', title: 'Buzëqeshje dhe udhëtim', text: 'Mes seancave, zbuloni Tiranën: kuzhinën, rrugët plot jetë dhe mikpritjen shqiptare.' },
    ],
    treatmentsTitle: 'Trajtimet që ofrojmë',
    treatmentsText: 'Nga implantet te estetika e buzëqeshjes, çdo trajtim planifikohet me saktësi dhe kryhet me kujdes.',
    from: 'Nga',
    learnMore: 'Mëso më shumë',
    allTreatments: 'Shikoni të gjitha trajtimet',
    destTag: 'Destinacioni',
    destTitle: 'Jo thjesht një vizitë dentare.',
    destAccent: 'Një udhëtim në Tiranë.',
    destText:
      'Mes takimeve, Tirana ju pret. Një qytet plot ngjyra, shije dhe energji, ku tradita takohet me modernen. Shumë pacientë e kthejnë trajtimin në pushime të vogla dhe duan të qëndrojnë edhe pak më gjatë.',
    destHighlights: [
      { icon: 'restaurant', title: 'Kuzhina shqiptare', text: 'Ushqim i freskët mesdhetar, me çmime shumë të arsyeshme.' },
      { icon: 'local_cafe', title: 'Blloku', text: 'Lagjja më e gjallë e qytetit, plot kafene, restorante dhe jetë nate.' },
      { icon: 'landscape', title: 'Mali i Dajtit', text: 'Me teleferik, në pak minuta mbi qytet, me pamje mbi gjithë Tiranën.' },
      { icon: 'beach_access', title: 'Deti afër', text: 'Plazhet e Durrësit janë rreth 40 minuta larg me makinë.' },
    ],
    photoSoon: 'Foto e Tiranës',
    storiesEyebrow: 'Rezultate',
    storiesTitle: 'Histori buzëqeshjesh',
    storiesText: 'Raste reale nga klinika jonë. Tërhiqni rrëshqitësin për të parë ndryshimin.',
    caseLabel: 'Rasti',
    storiesAll: 'Shikoni galerinë',
    teamEyebrow: 'Ekipi ynë',
    teamTitle: 'Njihuni me ekipin',
    teamText: 'Një ekip i vogël dhe i përkushtuar, me një qëllim të përbashkët: t’ju japim buzëqeshjen që meritoni.',
    ctaEyebrow: 'Konsultë falas në distancë',
    ctaTitle: 'Gati ta shihni buzëqeshjen tuaj të re?',
    ctaText: 'Na dërgoni disa foto dhe një grafi panoramike: brenda 24 orëve merrni plan trajtimi dhe ofertë të fiksuar. Pa asnjë detyrim.',
    ctaBook: 'Rezervo një konsultë',
    ctaWhatsApp: 'Bisedo në WhatsApp',
  },
  en: {
    certsTitle: 'Certifications & Standards',
    certsText: 'The materials and devices we use carry recognised international and European certifications.',
    certs: [
      { code: 'ISO 13485', title: 'ISO 13485 Certified Products', text: 'The international quality standard for medical devices.' },
      { code: 'CE', title: 'CE / EU MDR Certified Products', text: 'Compliant with the European Medical Device Regulation.' },
    ],
    whyEyebrow: 'Veneer Clinic',
    whyTitle: 'European quality.',
    whyAccent: 'Honest prices.',
    whyText:
      'Veneer Clinic welcomes patients from all over Europe who choose Tirana for their dental care. We work with recognised materials, careful planning and personal attention, at prices you know from the start.',
    whyPoints: [
      { icon: 'trending_down', title: 'Up to 70% less', text: 'Compared with private prices in Germany, Italy and Western Europe, using the same materials.' },
      { icon: 'verified', title: 'Materials you can trust', text: 'MegaGen implants, “Made in Germany” zirconia and E-max ceramic. We tell you exactly what goes into your mouth.' },
      { icon: 'event_available', title: 'No waiting lists', text: 'Treatment starts on the first day of your visit, following the plan you received in advance.' },
      { icon: 'travel_explore', title: 'Smile & stay', text: 'Between appointments, discover Tirana: the food, the lively streets and Albanian hospitality.' },
    ],
    treatmentsTitle: 'Treatments We Offer',
    treatmentsText: 'From implants to smile aesthetics, every treatment is precisely planned and carefully delivered.',
    from: 'From',
    learnMore: 'Learn more',
    allTreatments: 'View all treatments',
    destTag: 'The Destination',
    destTitle: 'Not just a dental visit.',
    destAccent: 'A trip to Tirana.',
    destText:
      'Between appointments, Tirana is waiting. A city full of colour, flavour and energy, where tradition meets the modern. Many patients turn their treatment into a short holiday and wish they could stay a little longer.',
    destHighlights: [
      { icon: 'restaurant', title: 'Albanian cuisine', text: 'Fresh Mediterranean food at very reasonable prices.' },
      { icon: 'local_cafe', title: 'Blloku', text: 'The city’s liveliest district, full of cafés, restaurants and nightlife.' },
      { icon: 'landscape', title: 'Mount Dajti', text: 'A short cable-car ride above the city, with views over all of Tirana.' },
      { icon: 'beach_access', title: 'The sea nearby', text: 'The beaches of Durrës are about 40 minutes away by car.' },
    ],
    photoSoon: 'Tirana photo',
    storiesEyebrow: 'Results',
    storiesTitle: 'Smile Stories',
    storiesText: 'Real cases from our clinic. Drag the slider to see the difference.',
    caseLabel: 'Case',
    storiesAll: 'View the gallery',
    teamEyebrow: 'Our Team',
    teamTitle: 'Meet the Team',
    teamText: 'A small, dedicated team with one shared goal: giving you the smile you deserve.',
    ctaEyebrow: 'Free Remote Consultation',
    ctaTitle: 'Ready to see your new smile?',
    ctaText: 'Send a few photos and a panoramic X-ray, and get a treatment plan and a fixed quote within 24 hours. No obligation.',
    ctaBook: 'Book a Consultation',
    ctaWhatsApp: 'Chat on WhatsApp',
  },
  de: {
    certsTitle: 'Zertifizierungen & Standards',
    certsText: 'Die Materialien und Geräte, mit denen wir arbeiten, tragen anerkannte internationale und europäische Zertifizierungen.',
    certs: [
      { code: 'ISO 13485', title: 'ISO-13485-zertifizierte Produkte', text: 'Der internationale Qualitätsstandard für Medizinprodukte.' },
      { code: 'CE', title: 'CE- / EU-MDR-zertifizierte Produkte', text: 'Konform mit der europäischen Medizinprodukteverordnung.' },
    ],
    whyEyebrow: 'Veneer Clinic',
    whyTitle: 'Europäische Qualität.',
    whyAccent: 'Ehrliche Preise.',
    whyText:
      'Veneer Clinic empfängt Patienten aus ganz Europa, die sich für ihre Zahnbehandlung in Tirana entscheiden. Wir arbeiten mit anerkannten Materialien, sorgfältiger Planung und persönlicher Betreuung – zu Preisen, die Sie von Anfang an kennen.',
    whyPoints: [
      { icon: 'trending_down', title: 'Bis zu 70 % günstiger', text: 'Im Vergleich zu Privatpreisen in Deutschland, Italien und Westeuropa – mit denselben Materialien.' },
      { icon: 'verified', title: 'Materialien mit Namen', text: 'MegaGen-Implantate, Zirkon „Made in Germany“ und E-max-Keramik. Wir sagen Ihnen genau, was in Ihren Mund kommt.' },
      { icon: 'event_available', title: 'Keine Wartelisten', text: 'Die Behandlung beginnt am ersten Tag Ihres Besuchs, nach dem Plan, den Sie vorab erhalten haben.' },
      { icon: 'travel_explore', title: 'Lächeln & Reisen', text: 'Zwischen den Terminen entdecken Sie Tirana: die Küche, die lebendigen Straßen und albanische Gastfreundschaft.' },
    ],
    treatmentsTitle: 'Unsere Behandlungen',
    treatmentsText: 'Von Implantaten bis zur Lächeln-Ästhetik – jede Behandlung wird präzise geplant und sorgfältig durchgeführt.',
    from: 'Ab',
    learnMore: 'Mehr erfahren',
    allTreatments: 'Alle Behandlungen ansehen',
    destTag: 'Das Reiseziel',
    destTitle: 'Nicht nur ein Zahnarztbesuch.',
    destAccent: 'Eine Reise nach Tirana.',
    destText:
      'Zwischen den Terminen wartet Tirana auf Sie. Eine Stadt voller Farben, Geschmack und Energie, in der Tradition auf Moderne trifft. Viele Patienten machen aus der Behandlung einen Kurzurlaub und würden gern etwas länger bleiben.',
    destHighlights: [
      { icon: 'restaurant', title: 'Albanische Küche', text: 'Frische mediterrane Küche zu sehr fairen Preisen.' },
      { icon: 'local_cafe', title: 'Blloku', text: 'Das lebendigste Viertel der Stadt, voller Cafés, Restaurants und Nachtleben.' },
      { icon: 'landscape', title: 'Berg Dajti', text: 'Mit der Seilbahn in wenigen Minuten über der Stadt, mit Blick auf ganz Tirana.' },
      { icon: 'beach_access', title: 'Das Meer ganz nah', text: 'Die Strände von Durrës sind etwa 40 Autominuten entfernt.' },
    ],
    photoSoon: 'Foto von Tirana',
    storiesEyebrow: 'Ergebnisse',
    storiesTitle: 'Lächel-Geschichten',
    storiesText: 'Echte Fälle aus unserer Klinik. Ziehen Sie den Regler, um den Unterschied zu sehen.',
    caseLabel: 'Fall',
    storiesAll: 'Zur Galerie',
    teamEyebrow: 'Unser Team',
    teamTitle: 'Lernen Sie das Team kennen',
    teamText: 'Ein kleines, engagiertes Team mit einem gemeinsamen Ziel: Ihnen das Lächeln zu geben, das Sie verdienen.',
    ctaEyebrow: 'Kostenlose Fernberatung',
    ctaTitle: 'Bereit für Ihr neues Lächeln?',
    ctaText: 'Senden Sie ein paar Fotos und ein Panorama-Röntgenbild und erhalten Sie innerhalb von 24 Stunden Behandlungsplan und Festpreis. Unverbindlich.',
    ctaBook: 'Beratung buchen',
    ctaWhatsApp: 'Per WhatsApp chatten',
  },
  it: {
    certsTitle: 'Certificazioni e standard',
    certsText: 'I materiali e i dispositivi che utilizziamo hanno certificazioni internazionali ed europee riconosciute.',
    certs: [
      { code: 'ISO 13485', title: 'Prodotti certificati ISO 13485', text: 'Lo standard internazionale di qualità per i dispositivi medici.' },
      { code: 'CE', title: 'Prodotti certificati CE / EU MDR', text: 'Conformi al Regolamento europeo sui dispositivi medici.' },
    ],
    whyEyebrow: 'Veneer Clinic',
    whyTitle: 'Qualità europea.',
    whyAccent: 'Prezzi onesti.',
    whyText:
      'Veneer Clinic accoglie pazienti da tutta Europa che scelgono Tirana per le proprie cure dentali. Lavoriamo con materiali riconosciuti, pianificazione accurata e attenzione personale, con prezzi che conosci fin dall’inizio.',
    whyPoints: [
      { icon: 'trending_down', title: 'Fino al 70% in meno', text: 'Rispetto ai prezzi privati in Italia, Germania ed Europa occidentale, con gli stessi materiali.' },
      { icon: 'verified', title: 'Materiali con un nome', text: 'Impianti MegaGen, zirconia “Made in Germany” e ceramica E-max. Ti diciamo esattamente cosa mettiamo nella tua bocca.' },
      { icon: 'event_available', title: 'Nessuna lista d’attesa', text: 'Il trattamento inizia dal primo giorno della visita, secondo il piano ricevuto in anticipo.' },
      { icon: 'travel_explore', title: 'Sorriso e viaggio', text: 'Tra un appuntamento e l’altro, scopri Tirana: la cucina, le strade vivaci e l’ospitalità albanese.' },
    ],
    treatmentsTitle: 'I trattamenti che offriamo',
    treatmentsText: 'Dagli impianti all’estetica del sorriso, ogni trattamento è pianificato con precisione ed eseguito con cura.',
    from: 'Da',
    learnMore: 'Scopri di più',
    allTreatments: 'Vedi tutti i trattamenti',
    destTag: 'La destinazione',
    destTitle: 'Non solo una visita dal dentista.',
    destAccent: 'Un viaggio a Tirana.',
    destText:
      'Tra un appuntamento e l’altro, Tirana ti aspetta. Una città piena di colori, sapori ed energia, dove la tradizione incontra il moderno. Molti pazienti trasformano il trattamento in una piccola vacanza e vorrebbero restare un po’ di più.',
    destHighlights: [
      { icon: 'restaurant', title: 'Cucina albanese', text: 'Cucina mediterranea fresca a prezzi molto convenienti.' },
      { icon: 'local_cafe', title: 'Blloku', text: 'Il quartiere più vivace della città, pieno di caffè, ristoranti e vita notturna.' },
      { icon: 'landscape', title: 'Monte Dajti', text: 'In funivia, pochi minuti sopra la città, con vista su tutta Tirana.' },
      { icon: 'beach_access', title: 'Il mare vicino', text: 'Le spiagge di Durazzo sono a circa 40 minuti in auto.' },
    ],
    photoSoon: 'Foto di Tirana',
    storiesEyebrow: 'Risultati',
    storiesTitle: 'Storie di sorrisi',
    storiesText: 'Casi reali della nostra clinica. Trascina il cursore per vedere la differenza.',
    caseLabel: 'Caso',
    storiesAll: 'Vedi la galleria',
    teamEyebrow: 'Il nostro team',
    teamTitle: 'Conosci il team',
    teamText: 'Un team piccolo e dedicato, con un unico obiettivo: darti il sorriso che meriti.',
    ctaEyebrow: 'Consulenza gratuita a distanza',
    ctaTitle: 'Pronto a vedere il tuo nuovo sorriso?',
    ctaText: 'Inviaci qualche foto e una radiografia panoramica: entro 24 ore ricevi piano di trattamento e preventivo fisso. Senza impegno.',
    ctaBook: 'Prenota una consulenza',
    ctaWhatsApp: 'Scrivici su WhatsApp',
  },
};

const featured: { id: string; image: string; text: Localized }[] = [
  {
    id: 'hollywood-smile',
    image: images.results[0]?.[0] ?? images.heroAfter,
    text: {
      sq: 'Rikonstruksion i plotë i buzëqeshjes me faseta, kurora dhe zbardhim, i planifikuar sipas fytyrës suaj.',
      en: 'A complete smile makeover with veneers, crowns and whitening, planned around your face.',
      de: 'Komplette Lächeln-Neugestaltung mit Veneers, Kronen und Bleaching, abgestimmt auf Ihr Gesicht.',
      it: 'Un rifacimento completo del sorriso con faccette, corone e sbiancamento, progettato sul tuo viso.',
    },
  },
  {
    id: 'crown-emax',
    image: images.emaxAfter,
    text: {
      sq: 'Faseta të holla qeramike E-max për një buzëqeshje të ndritshme e natyrale, me përgatitje minimale të dhëmbit.',
      en: 'Thin E-max ceramic veneers for a bright, natural smile with minimal tooth preparation.',
      de: 'Dünne E-max-Keramikveneers für ein helles, natürliches Lächeln bei minimaler Präparation.',
      it: 'Faccette sottili in ceramica E-max per un sorriso luminoso e naturale, con preparazione minima.',
    },
  },
  {
    id: 'crown-zirconia',
    image: images.results[1]?.[0] ?? images.heroAfter,
    text: {
      sq: 'Kurora zirkoni “Made in Germany”, pa metal dhe shumë të qëndrueshme. Ideale për dhëmbë të dëmtuar dhe mbi implante.',
      en: 'Metal-free “Made in Germany” zirconia crowns, very durable. Ideal for damaged teeth and on implants.',
      de: 'Metallfreie Zirkonkronen „Made in Germany“, sehr langlebig. Ideal für geschädigte Zähne und auf Implantaten.',
      it: 'Corone in zirconia “Made in Germany”, senza metallo e molto resistenti. Ideali per denti danneggiati e su impianti.',
    },
  },
  {
    id: 'whitening',
    image: images.beforeAfterEdited[1] ?? images.heroAfter,
    text: {
      sq: 'Zbardhim profesional në klinikë që i çel dhëmbët disa nuanca në një seancë të vetme.',
      en: 'Professional in-clinic whitening that lifts your teeth several shades in a single session.',
      de: 'Professionelles Bleaching in der Klinik, das Ihre Zähne in einer Sitzung um mehrere Stufen aufhellt.',
      it: 'Sbiancamento professionale in studio che schiarisce i denti di più tonalità in una sola seduta.',
    },
  },
  {
    id: 'veneer-composite',
    image: images.results[2]?.[0] ?? images.heroAfter,
    text: {
      sq: 'Mënyrë e shpejtë dhe e përballueshme për të përmirësuar formën dhe ngjyrën e dhëmbëve, e modeluar në një seancë.',
      en: 'A quick, affordable way to improve the shape and colour of your teeth, sculpted in one session.',
      de: 'Schnell und günstig Form und Farbe Ihrer Zähne verbessern, in einer Sitzung modelliert.',
      it: 'Un modo rapido ed economico per migliorare forma e colore dei denti, modellato in una seduta.',
    },
  },
  {
    id: 'implant-megagen',
    image: images.beforeAfterEdited[0] ?? images.heroAfter,
    text: {
      sq: 'Zëvendësim i përhershëm dhe me pamje natyrale i një dhëmbi që mungon, me implant titani MegaGen.',
      en: 'A permanent, natural-looking replacement for a missing tooth, with a MegaGen titanium implant.',
      de: 'Dauerhafter, natürlich aussehender Ersatz für einen fehlenden Zahn mit einem MegaGen-Titanimplantat.',
      it: 'Una sostituzione permanente e naturale di un dente mancante, con un impianto in titanio MegaGen.',
    },
  },
];

const allItems = priceGroups.flatMap((group) => group.items);


const clinicPhotos = [images.clinicGallery[1], photo(6), photo(7), photo(8)].map(
  (src) => src ?? images.heroAfter,
);

function SectionHeading({ eyebrow, title, text, light, compact }: { eyebrow?: string; title: string; text: string; light?: boolean; compact?: boolean }) {
  return (
    <div className={`text-center max-w-2xl mx-auto ${compact ? 'mb-10' : 'mb-14'}`}>
      {eyebrow && (
        <span className={`font-label-md text-label-md uppercase tracking-[0.14em] ${light ? 'text-aqua' : 'text-on-surface-variant'}`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`${compact ? 'text-[32px] md:text-[38px] font-bold tracking-[-0.02em] mb-3' : 'font-display-lg text-display-lg mt-3 mb-4'} ${light ? 'text-white' : 'text-primary'}`}
      >
        {title}
      </h2>
      <p className={`${compact ? 'text-[16px]' : 'font-body-lg text-body-lg'} ${light ? 'text-white/75' : 'text-on-surface-variant'}`}>{text}</p>
    </div>
  );
}

export default function HomePage() {
  const { lang } = useI18n();
  const c = copy[lang];

  return (
    <>
      <HomeHero />

      {/* Treatments */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <SectionHeading title={c.treatmentsTitle} text={c.treatmentsText} compact />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((entry) => {
              const item = allItems.find((i) => i.id === entry.id);
              if (!item) return null;
              const from = lowestPrice([item]);
              return (
                <Link
                  key={entry.id}
                  to={treatmentHref(entry.id)}
                  className="group flex flex-col bg-white border border-outline-variant rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                    <img
                      src={entry.image}
                      alt={item.name[lang]}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{item.name[lang]}</h3>
                    <p className="text-[15px] text-on-surface-variant leading-relaxed flex-1">{entry.text[lang]}</p>
                    <div className="flex items-end justify-between gap-3 mt-6 pt-4 border-t border-outline-variant">
                      <p className="text-[13px] text-on-surface-variant">
                        {c.from}{' '}
                        <span className="font-headline-md text-[22px] text-primary">
                          {formatPrice(from ?? item.price, lang)}
                        </span>
                        {item.unit && <span> / {item.unit[lang]}</span>}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[14px] font-semibold text-primary whitespace-nowrap">
                        {c.learnMore}
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-md font-label-md hover:bg-primary hover:text-on-primary transition-colors"
            >
              {c.allTreatments}
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-10 bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="text-center mb-6">
            <h2 className="text-[24px] md:text-[28px] font-bold tracking-[-0.02em] text-primary">{c.certsTitle}</h2>
            <p className="text-[14px] text-on-surface-variant mt-1">{c.certsText}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {c.certs.map((cert) => (
              <div key={cert.code} className="flex items-center gap-4 bg-white border border-outline-variant rounded-lg p-4">
                <img
                  src={cert.code === 'CE' ? '/images/certs/ce.webp' : '/images/certs/iso-13485.webp'}
                  alt={cert.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain shrink-0"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-primary text-[15px]">{cert.title}</p>
                  <p className="text-[13px] text-on-surface-variant mt-0.5">{cert.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClinicLocation />

      <CareSteps />

      {/* Veneer Clinic: quality, prices and the clinic inside */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">{c.whyEyebrow}</span>
            <h2 className="font-display-lg text-display-lg text-primary mt-3 mb-6">
              {c.whyTitle}
              <br />
              <span className="text-secondary">{c.whyAccent}</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">{c.whyText}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {c.whyPoints.map((point) => (
                <div key={point.title}>
                  <span className="grid place-items-center w-11 h-11 rounded-md bg-aqua-soft text-primary mb-3">
                    <span className="material-symbols-outlined text-[22px]">{point.icon}</span>
                  </span>
                  <p className="font-semibold text-primary mb-1">{point.title}</p>
                  <p className="text-[15px] text-on-surface-variant leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {clinicPhotos.map((src, index) => (
              <div
                key={src + index}
                className={`relative rounded-lg overflow-hidden bg-surface-container ${index % 2 === 1 ? 'translate-y-8' : ''} aspect-[4/5]`}
              >
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination */}
      <section className="py-section-padding bg-primary text-on-primary overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-gutter grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-aqua">{c.destTag}</span>
            <h2 className="font-display-lg text-display-lg mt-3 mb-6">
              {c.destTitle}
              <br />
              <span className="text-aqua">{c.destAccent}</span>
            </h2>
            <p className="font-body-lg text-body-lg text-white/75 mb-10">{c.destText}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {c.destHighlights.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <span className="shrink-0 grid place-items-center w-11 h-11 rounded-md bg-white/10 text-aqua">
                    <span className="material-symbols-outlined text-[22px]">{point.icon}</span>
                  </span>
                  <div>
                    <p className="font-semibold">{point.title}</p>
                    <p className="text-[14px] text-white/70 leading-relaxed mt-1">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-[repeat(3,minmax(0,1fr))] gap-4 h-[520px]">
            <PlaceholderPhoto src={tiranaPhotos[0]} label={c.photoSoon} className="row-span-2 rounded-lg" />
            <PlaceholderPhoto src={tiranaPhotos[1]} label={c.photoSoon} className="rounded-lg" />
            <PlaceholderPhoto src={tiranaPhotos[2]} label={c.photoSoon} className="row-span-2 rounded-lg" />
            <PlaceholderPhoto src={tiranaPhotos[3]} label={c.photoSoon} className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Smile stories */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <SectionHeading eyebrow={c.storiesEyebrow} title={c.storiesTitle} text={c.storiesText} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPairs.map((pair, index) => (
              <div key={index}>
                <BeforeAfterSlider
                  beforeImage={pair.before[0] ?? images.heroBefore}
                  afterImage={pair.after[0] ?? images.heroAfter}
                  aspectRatio="square"
                />
                <p className="mt-3 font-semibold text-primary">
                  {c.caseLabel} {index + 1}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-md font-label-md hover:bg-primary hover:text-on-primary transition-colors"
            >
              {c.storiesAll}
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <TestimonialsCarousel />

      {/* Team */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <SectionHeading eyebrow={c.teamEyebrow} title={c.teamTitle} text={c.teamText} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-label-md hover:gap-3 transition-all">
              {{ sq: 'Njihuni me të gjithë ekipin', en: 'Meet the whole team', de: 'Das ganze Team kennenlernen', it: 'Conosci tutto il team' }[lang]}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-padding bg-primary text-on-primary">
        <div className="max-w-3xl mx-auto px-gutter text-center">
          <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-aqua">{c.ctaEyebrow}</span>
          <h2 className="font-display-lg text-display-lg mt-3 mb-4">{c.ctaTitle}</h2>
          <p className="font-body-lg text-body-lg text-white/75 mb-10">{c.ctaText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-md font-label-md"
            >
              {c.ctaBook}
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/40 px-8 py-4 rounded-md font-label-md hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              {c.ctaWhatsApp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
