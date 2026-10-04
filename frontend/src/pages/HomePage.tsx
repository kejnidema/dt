import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useI18n, type Lang } from '@/lib/i18n';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import PlaceholderPhoto from '@/components/PlaceholderPhoto';
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
  locationTitle: string;
  locationText: string;
  treatmentsEyebrow: string;
  treatmentsTitle: string;
  treatmentsText: string;
  from: string;
  learnMore: string;
  allTreatments: string;
  howEyebrow: string;
  howTitle: string;
  howText: string;
  steps: { title: string; text: string }[];
  clinicEyebrow: string;
  clinicTitle: string;
  clinicText: string;
  intlEyebrow: string;
  intlTitle: string;
  intlText: string;
  arrivalTag: string;
  arrivalTitle: string;
  arrivalText: string;
  stats: { value: string; label: string }[];
  stayTag: string;
  stayTitle: string;
  stayText: string[];
  coordinatorTag: string;
  coordinatorTitle: string;
  coordinatorText: string;
  languages: string[];
  destTag: string;
  destTitle: string;
  destAccent: string;
  destText: string;
  destHighlights: Point[];
  photoSoon: string;
  planTag: string;
  planTitle: string;
  planText: string;
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
    whyEyebrow: 'Pse Veneer Clinic',
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
    locationTitle: 'Tiranë, Shqipëri',
    locationText: 'Rreth dy orë fluturim nga shumica e kryeqyteteve europiane.',
    treatmentsEyebrow: 'Shërbimet tona',
    treatmentsTitle: 'Trajtimet që ofrojmë',
    treatmentsText: 'Nga implantet te estetika e buzëqeshjes, çdo trajtim planifikohet me saktësi dhe kryhet me kujdes.',
    from: 'Nga',
    learnMore: 'Mëso më shumë',
    allTreatments: 'Shikoni të gjitha trajtimet',
    howEyebrow: 'Procesi',
    howTitle: 'Si funksionon',
    howText: 'E kemi thjeshtuar çdo hap, që ju të mendoni vetëm për buzëqeshjen tuaj të re.',
    steps: [
      { title: 'Konsultë falas online', text: 'Na dërgoni foto dhe një grafi panoramike. Brenda 24 orëve merrni planin e trajtimit dhe një ofertë të fiksuar.' },
      { title: 'Ne organizojmë vizitën', text: 'Ju ndihmojmë me datat, transfertën nga aeroporti dhe akomodimin pranë klinikës.' },
      { title: 'Trajtimi dhe kujdesi pas tij', text: 'Trajtimi kryhet sipas planit, dhe ne mbetemi pranë jush edhe pasi ktheheni në shtëpi.' },
    ],
    clinicEyebrow: 'Klinika jonë',
    clinicTitle: 'Brenda Veneer Clinic',
    clinicText: 'Një ambient modern në Tiranë, i menduar për rehatinë tuaj dhe për punë të saktë në çdo hap.',
    intlEyebrow: 'Për pacientët ndërkombëtarë',
    intlTitle: 'Një klinikë në Tiranë, pacientë nga e gjithë Europa',
    intlText: 'Një ekip që kujdeset për çdo detaj të vizitës suaj, nga aeroporti deri te kontrolli i fundit.',
    arrivalTag: 'Mbërritja',
    arrivalTitle: 'Kujdesi ynë fillon në aeroport',
    arrivalText:
      'Një anëtar i ekipit ju pret në aeroport dhe ju shoqëron në hotel ose në klinikë, që dita e parë të nisë qetë dhe pa shqetësime.',
    stats: [
      { value: '24h', label: 'Plani i trajtimit pas fotove' },
      { value: '2', label: 'Udhëtime për implantet, me 6 muaj ndërmjet' },
      { value: '4', label: 'Gjuhë: shqip, anglisht, gjermanisht, italisht' },
    ],
    stayTag: 'Akomodimi',
    stayTitle: 'Qëndrim i rehatshëm pranë klinikës',
    stayText: [
      'Ju ndihmojmë të gjeni akomodim të rehatshëm pranë klinikës, për gjithë kohëzgjatjen e trajtimit.',
      'Kështu çdo takim është vetëm pak minuta larg, dhe pjesën tjetër të ditës e keni të lirë për veten.',
    ],
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
    coordinatorTag: 'Mbështetje',
    coordinatorTitle: 'Koordinatori juaj personal',
    coordinatorText:
      'Nga mesazhi i parë në WhatsApp deri te kontrolli i fundit, një koordinator flet gjuhën tuaj dhe ju përgjigjet për çdo pyetje.',
    languages: ['🇦🇱 Shqip', '🇬🇧 Anglisht', '🇩🇪 Gjermanisht', '🇮🇹 Italisht'],
    planTag: 'Planifikim i personalizuar',
    planTitle: 'Një plan për çdo buzëqeshje',
    planText:
      'Koha juaj vlen. Seancat i planifikojmë sipas fluturimeve dhe ditëve që keni, që të udhëtoni sa më pak. Për shumicën e trajtimeve estetike mjafton një udhëtim; implantet kërkojnë dy, me rreth gjashtë muaj ndërmjet.',
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
    whyEyebrow: 'Why Veneer Clinic',
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
    locationTitle: 'Tirana, Albania',
    locationText: 'About a two-hour flight from most European capitals.',
    treatmentsEyebrow: 'Our Services',
    treatmentsTitle: 'Treatments We Offer',
    treatmentsText: 'From implants to smile aesthetics, every treatment is precisely planned and carefully delivered.',
    from: 'From',
    learnMore: 'Learn more',
    allTreatments: 'View all treatments',
    howEyebrow: 'The Process',
    howTitle: 'How It Works',
    howText: 'We have simplified every step, so you can focus on your new smile.',
    steps: [
      { title: 'Free online consultation', text: 'Send us photos and a panoramic X-ray. Within 24 hours you get a treatment plan and a fixed quote.' },
      { title: 'We organise your visit', text: 'We help with dates, the airport transfer and accommodation near the clinic.' },
      { title: 'Treatment & aftercare', text: 'Treatment follows the agreed plan, and we stay by your side after you return home.' },
    ],
    clinicEyebrow: 'Our Clinic',
    clinicTitle: 'Inside Veneer Clinic',
    clinicText: 'A modern space in Tirana, designed for your comfort and for precise work at every step.',
    intlEyebrow: 'For International Patients',
    intlTitle: 'One clinic in Tirana, patients from all over Europe',
    intlText: 'A team that takes care of every detail of your visit, from the airport to your final check-up.',
    arrivalTag: 'Arrival',
    arrivalTitle: 'Our care starts at the airport',
    arrivalText:
      'A member of our team meets you at the airport and takes you to your hotel or the clinic, so your first day starts calmly and smoothly.',
    stats: [
      { value: '24h', label: 'Treatment plan after your photos' },
      { value: '2', label: 'Trips for implants, 6 months apart' },
      { value: '4', label: 'Languages: Albanian, English, German, Italian' },
    ],
    stayTag: 'Accommodation',
    stayTitle: 'A comfortable stay near the clinic',
    stayText: [
      'We help you find comfortable accommodation near the clinic for the whole length of your treatment.',
      'That way every appointment is only minutes away, and the rest of the day is yours.',
    ],
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
    coordinatorTag: 'Support',
    coordinatorTitle: 'Your personal coordinator',
    coordinatorText:
      'From your first WhatsApp message to your final check-up, a coordinator speaks your language and answers every question.',
    languages: ['🇦🇱 Albanian', '🇬🇧 English', '🇩🇪 German', '🇮🇹 Italian'],
    planTag: 'Personalised Planning',
    planTitle: 'A plan for every smile',
    planText:
      'Your time is valuable. We schedule appointments around your flights and the days you have, so you travel as little as possible. Most aesthetic treatments need one trip; implants need two, about six months apart.',
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
    whyEyebrow: 'Warum Veneer Clinic',
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
    locationTitle: 'Tirana, Albanien',
    locationText: 'Etwa zwei Flugstunden von den meisten europäischen Hauptstädten entfernt.',
    treatmentsEyebrow: 'Unsere Leistungen',
    treatmentsTitle: 'Unsere Behandlungen',
    treatmentsText: 'Von Implantaten bis zur Lächeln-Ästhetik – jede Behandlung wird präzise geplant und sorgfältig durchgeführt.',
    from: 'Ab',
    learnMore: 'Mehr erfahren',
    allTreatments: 'Alle Behandlungen ansehen',
    howEyebrow: 'Der Ablauf',
    howTitle: 'So funktioniert es',
    howText: 'Wir haben jeden Schritt vereinfacht, damit Sie sich ganz auf Ihr neues Lächeln konzentrieren können.',
    steps: [
      { title: 'Kostenlose Online-Beratung', text: 'Senden Sie uns Fotos und ein Panorama-Röntgenbild. Innerhalb von 24 Stunden erhalten Sie Behandlungsplan und Festpreisangebot.' },
      { title: 'Wir organisieren Ihren Besuch', text: 'Wir helfen bei Terminen, Flughafentransfer und Unterkunft in Kliniknähe.' },
      { title: 'Behandlung & Nachsorge', text: 'Die Behandlung folgt dem vereinbarten Plan, und wir bleiben auch nach Ihrer Rückkehr an Ihrer Seite.' },
    ],
    clinicEyebrow: 'Unsere Klinik',
    clinicTitle: 'Einblick in die Veneer Clinic',
    clinicText: 'Moderne Räume in Tirana, gestaltet für Ihren Komfort und für präzise Arbeit in jedem Schritt.',
    intlEyebrow: 'Für internationale Patienten',
    intlTitle: 'Eine Klinik in Tirana, Patienten aus ganz Europa',
    intlText: 'Ein Team, das sich um jedes Detail Ihres Besuchs kümmert – vom Flughafen bis zur Abschlusskontrolle.',
    arrivalTag: 'Ankunft',
    arrivalTitle: 'Unsere Betreuung beginnt am Flughafen',
    arrivalText:
      'Ein Teammitglied holt Sie am Flughafen ab und bringt Sie ins Hotel oder in die Klinik, damit Ihr erster Tag entspannt beginnt.',
    stats: [
      { value: '24 h', label: 'Behandlungsplan nach Ihren Fotos' },
      { value: '2', label: 'Reisen für Implantate, 6 Monate Abstand' },
      { value: '4', label: 'Sprachen: Albanisch, Englisch, Deutsch, Italienisch' },
    ],
    stayTag: 'Unterkunft',
    stayTitle: 'Komfortabel wohnen, nah an der Klinik',
    stayText: [
      'Wir helfen Ihnen, für die gesamte Behandlungsdauer eine komfortable Unterkunft in Kliniknähe zu finden.',
      'So ist jeder Termin nur wenige Minuten entfernt, und der Rest des Tages gehört Ihnen.',
    ],
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
    coordinatorTag: 'Betreuung',
    coordinatorTitle: 'Ihr persönlicher Koordinator',
    coordinatorText:
      'Von der ersten WhatsApp-Nachricht bis zur Abschlusskontrolle spricht ein Koordinator Ihre Sprache und beantwortet jede Frage.',
    languages: ['🇦🇱 Albanisch', '🇬🇧 Englisch', '🇩🇪 Deutsch', '🇮🇹 Italienisch'],
    planTag: 'Individuelle Planung',
    planTitle: 'Ein Plan für jedes Lächeln',
    planText:
      'Ihre Zeit ist wertvoll. Wir planen die Termine nach Ihren Flügen und verfügbaren Tagen, damit Sie so wenig wie möglich reisen. Die meisten ästhetischen Behandlungen brauchen eine Reise; Implantate zwei, im Abstand von etwa sechs Monaten.',
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
    whyEyebrow: 'Perché Veneer Clinic',
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
    locationTitle: 'Tirana, Albania',
    locationText: 'Circa due ore di volo dalla maggior parte delle capitali europee.',
    treatmentsEyebrow: 'I nostri servizi',
    treatmentsTitle: 'I trattamenti che offriamo',
    treatmentsText: 'Dagli impianti all’estetica del sorriso, ogni trattamento è pianificato con precisione ed eseguito con cura.',
    from: 'Da',
    learnMore: 'Scopri di più',
    allTreatments: 'Vedi tutti i trattamenti',
    howEyebrow: 'Il percorso',
    howTitle: 'Come funziona',
    howText: 'Abbiamo semplificato ogni passaggio, così puoi pensare solo al tuo nuovo sorriso.',
    steps: [
      { title: 'Consulenza online gratuita', text: 'Inviaci foto e una radiografia panoramica. Entro 24 ore ricevi piano di trattamento e preventivo fisso.' },
      { title: 'Organizziamo la tua visita', text: 'Ti aiutiamo con le date, il transfer dall’aeroporto e l’alloggio vicino alla clinica.' },
      { title: 'Trattamento e assistenza', text: 'Il trattamento segue il piano concordato, e restiamo al tuo fianco anche dopo il rientro a casa.' },
    ],
    clinicEyebrow: 'La nostra clinica',
    clinicTitle: 'Dentro Veneer Clinic',
    clinicText: 'Uno spazio moderno a Tirana, pensato per il tuo comfort e per un lavoro preciso in ogni fase.',
    intlEyebrow: 'Per i pazienti internazionali',
    intlTitle: 'Una clinica a Tirana, pazienti da tutta Europa',
    intlText: 'Un team che si occupa di ogni dettaglio della tua visita, dall’aeroporto al controllo finale.',
    arrivalTag: 'Arrivo',
    arrivalTitle: 'Ci prendiamo cura di te dall’aeroporto',
    arrivalText:
      'Un membro del team ti accoglie in aeroporto e ti accompagna in hotel o in clinica, perché il primo giorno inizi con calma e senza pensieri.',
    stats: [
      { value: '24h', label: 'Piano di trattamento dopo le foto' },
      { value: '2', label: 'Viaggi per gli impianti, a 6 mesi di distanza' },
      { value: '4', label: 'Lingue: albanese, inglese, tedesco, italiano' },
    ],
    stayTag: 'Alloggio',
    stayTitle: 'Un soggiorno comodo vicino alla clinica',
    stayText: [
      'Ti aiutiamo a trovare un alloggio confortevole vicino alla clinica per tutta la durata del trattamento.',
      'Così ogni appuntamento è a pochi minuti, e il resto della giornata è tutto tuo.',
    ],
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
    coordinatorTag: 'Assistenza',
    coordinatorTitle: 'Il tuo coordinatore personale',
    coordinatorText:
      'Dal primo messaggio su WhatsApp al controllo finale, un coordinatore parla la tua lingua e risponde a ogni domanda.',
    languages: ['🇦🇱 Albanese', '🇬🇧 Inglese', '🇩🇪 Tedesco', '🇮🇹 Italiano'],
    planTag: 'Pianificazione personalizzata',
    planTitle: 'Un piano per ogni sorriso',
    planText:
      'Il tuo tempo è prezioso. Organizziamo gli appuntamenti in base ai voli e ai giorni a disposizione, così viaggi il meno possibile. La maggior parte dei trattamenti estetici richiede un viaggio; gli impianti due, a circa sei mesi di distanza.',
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

/** Placeholder profiles until the real team details are ready */
const team = Array.from({ length: 5 }, (_, index) => ({ id: index, name: '', role: '', photo: '' }));

const whyPhotos = [photo(2), photo(3), photo(4), photo(5)];
const clinicPhotos = [images.clinicGallery[0], images.clinicGallery[1], photo(6), photo(7), photo(8)].map(
  (src) => src ?? images.heroAfter,
);

function SectionHeading({ eyebrow, title, text, light }: { eyebrow: string; title: string; text: string; light?: boolean }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <span className={`font-label-md text-label-md uppercase tracking-[0.14em] ${light ? 'text-aqua' : 'text-on-surface-variant'}`}>
        {eyebrow}
      </span>
      <h2 className={`font-display-lg text-display-lg mt-3 mb-4 ${light ? 'text-white' : 'text-primary'}`}>{title}</h2>
      <p className={`font-body-lg text-body-lg ${light ? 'text-white/75' : 'text-on-surface-variant'}`}>{text}</p>
    </div>
  );
}

export default function HomePage({ hero }: { hero?: ReactNode }) {
  const { lang } = useI18n();
  const c = copy[lang];

  return (
    <>
      {hero ?? (
        <section className="relative bg-surface py-section-padding">
          <div className="max-w-[1200px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">{c.whyEyebrow}</span>
              <h1 className="font-display-lg text-display-lg leading-tight text-primary">
                {c.whyTitle} <span className="text-secondary">{c.whyAccent}</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">{c.whyText}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-md font-label-md">
                {c.ctaBook}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <BeforeAfterSlider beforeImage={images.heroBefore} afterImage={images.heroAfter} aspectRatio="tall" />
          </div>
        </section>
      )}

      {/* Certifications */}
      <section className="py-16 bg-surface border-b border-outline-variant">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="text-center mb-10">
            <h2 className="font-headline-md text-headline-md text-primary">{c.certsTitle}</h2>
            <p className="text-on-surface-variant mt-2">{c.certsText}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {c.certs.map((cert, index) => (
              <div key={cert.code} className="flex flex-col items-center gap-4 bg-white border border-outline-variant rounded-lg p-6 text-center">
                <img
                  src={index === 0 ? '/images/misc/iso-cert.svg' : '/images/misc/ce-cert.svg'}
                  alt={cert.title}
                  className="w-36 h-36 sm:w-40 sm:h-40 object-contain"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-primary">{cert.title}</p>
                  <p className="text-[14px] text-on-surface-variant mt-1">{cert.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-section-padding bg-surface">
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
            {whyPhotos.map((src, index) => (
              <div
                key={src + index}
                className={`relative rounded-lg overflow-hidden bg-surface-container ${index % 2 === 1 ? 'translate-y-8' : ''} aspect-[4/5]`}
              >
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                {index === 1 && (
                  <div className="absolute inset-x-3 bottom-3 bg-white/95 backdrop-blur rounded-md p-3">
                    <p className="flex items-center gap-1 font-semibold text-primary text-[14px]">
                      <span className="material-symbols-outlined text-[18px]">location_on</span>
                      {c.locationTitle}
                    </p>
                    <p className="text-[12px] text-on-surface-variant mt-1">{c.locationText}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <SectionHeading eyebrow={c.treatmentsEyebrow} title={c.treatmentsTitle} text={c.treatmentsText} />
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

      {/* How it works */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <SectionHeading eyebrow={c.howEyebrow} title={c.howTitle} text={c.howText} />
          <div className="grid md:grid-cols-3 gap-6">
            {c.steps.map((step, index) => (
              <div key={step.title} className="relative bg-surface-container-low border border-outline-variant rounded-lg p-8">
                <span className="font-display-lg text-[56px] leading-none text-aqua">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mt-6 mb-3">{step.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside the clinic */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <SectionHeading eyebrow={c.clinicEyebrow} title={c.clinicTitle} text={c.clinicText} />
          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[520px]">
            {clinicPhotos.map((src, index) => (
              <div
                key={src + index}
                className={`rounded-lg overflow-hidden bg-surface-container ${index === 0 ? 'col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto' : 'aspect-square md:aspect-auto'}`}
              >
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International patients */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter space-y-20">
          <SectionHeading eyebrow={c.intlEyebrow} title={c.intlTitle} text={c.intlText} />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-surface-container">
              <img src={images.journey} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-secondary">{c.arrivalTag}</span>
              <h3 className="font-headline-md text-headline-md text-primary mt-3 mb-4">{c.arrivalTitle}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">{c.arrivalText}</p>
              <div className="grid grid-cols-3 gap-4">
                {c.stats.map((stat) => (
                  <div key={stat.label} className="border-l-2 border-aqua pl-4">
                    <p className="font-headline-md text-[30px] leading-none text-primary">{stat.value}</p>
                    <p className="text-[13px] text-on-surface-variant mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <PlaceholderPhoto src={tiranaPhotos[4]} label={c.photoSoon} className="lg:order-2 aspect-[4/3] rounded-lg" />
            <div>
              <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-secondary">{c.stayTag}</span>
              <h3 className="font-headline-md text-headline-md text-primary mt-3 mb-4">{c.stayTitle}</h3>
              {c.stayText.map((p) => (
                <p key={p} className="text-on-surface-variant leading-relaxed mb-4">{p}</p>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary text-on-primary rounded-lg p-8 md:p-10">
              <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-aqua">{c.coordinatorTag}</span>
              <h3 className="font-headline-md text-headline-md mt-3 mb-4">{c.coordinatorTitle}</h3>
              <p className="text-white/75 leading-relaxed mb-6">{c.coordinatorText}</p>
              <div className="flex flex-wrap gap-2">
                {c.languages.map((language) => (
                  <span key={language} className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[13px]">
                    {language}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant rounded-lg p-8 md:p-10">
              <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-secondary">{c.planTag}</span>
              <h3 className="font-headline-md text-headline-md text-primary mt-3 mb-4">{c.planTitle}</h3>
              <p className="text-on-surface-variant leading-relaxed">{c.planText}</p>
            </div>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member) => (
              <div key={member.id} className="bg-white border border-outline-variant rounded-lg overflow-hidden">
                <div className="aspect-[3/4] bg-surface-container grid place-items-center">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} loading="lazy" className="w-full h-full object-cover" />
                  ) : (
                    <span className="material-symbols-outlined text-[64px] text-outline-variant">person</span>
                  )}
                </div>
                <div className="p-4 min-h-[76px]">
                  {member.name ? (
                    <>
                      <p className="font-semibold text-primary">{member.name}</p>
                      <p className="text-[13px] text-on-surface-variant">{member.role}</p>
                    </>
                  ) : (
                    <>
                      <span className="block h-4 w-3/4 rounded bg-surface-container" />
                      <span className="block h-3 w-1/2 rounded bg-surface-container mt-2" />
                    </>
                  )}
                </div>
              </div>
            ))}
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
