import { Link } from 'react-router-dom';
import FaqAccordion from '@/components/FaqAccordion';
import PlaceholderPhoto from '@/components/PlaceholderPhoto';
import { useI18n, type Lang } from '@/lib/i18n';
import { images } from '@/lib/images';

const WHATSAPP_URL = 'https://wa.me/355690000000';

interface Point {
  icon: string;
  title: string;
  text: string;
}

interface Place {
  slug: string;
  name: string;
  text: string;
}

interface Copy {
  heroEyebrow: string;
  heroTitle: string;
  heroText: string;
  cta: string;
  travelPrompt: string;
  travelLink: string;
  xrayLabel: string;
  xrayTitle: string;
  xrayText: string;
  xrayPoints: string[];
  whyEyebrow: string;
  whyTitle: string;
  whyText: string;
  whyPoints: Point[];
  locationTitle: string;
  locationText: string;
  processEyebrow: string;
  processTitle: string;
  processText: string;
  stepLabel: string;
  steps: { title: string; text: string }[];
  tiranaEyebrow: string;
  tiranaTitle: string;
  tiranaSubtitle: string;
  tiranaText: string;
  placesTitle: string;
  places: Place[];
  photoSoon: string;
  faqEyebrow: string;
  faqTitle: string;
  faqText: string;
  faq: { question: string; answer: string }[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaText: string;
  ctaWhatsApp: string;
}

const copy: Record<Lang, Copy> = {
  sq: {
    heroEyebrow: 'Turizëm dentar në Tiranë',
    heroTitle: 'Destinacioni juaj i turizmit dentar',
    heroText:
      'Turizmi dentar ju lejon të bashkoni një trajtim cilësor me kënaqësinë e një qyteti të ri. Në Veneer Clinic ju ofrojmë kujdes dentar me materiale të njohura dhe çmime të ndershme, ndërsa ne kujdesemi që qëndrimi juaj të jetë i qetë dhe pa stres.',
    cta: 'Rezervo një konsultë',
    travelPrompt: 'Nuk jeni të sigurt si ta organizoni udhëtimin?',
    travelLink: 'Bisedoni me koordinatorët tanë të pacientëve.',
    xrayLabel: 'Para udhëtimit',
    xrayTitle: 'Na nevojitet një grafi panoramike (OPG)',
    xrayText:
      'Ju lutemi na dërgoni një grafi panoramike të fundit të dhëmbëve përmes WhatsApp ose email-it para udhëtimit. Ajo na lejon të përcaktojmë diagnozën dhe çmimin e trajtimit me rreth 90% saktësi, para se të rezervoni fluturimin.',
    xrayPoints: ['Diagnozë me rreth 90% saktësi', 'Çmim i besueshëm para udhëtimit', 'Bëhet te çdo dentist ose qendër radiologjie'],
    whyEyebrow: 'Pse të na zgjidhni',
    whyTitle: 'Veneer Clinic për trajtimin tuaj dentar jashtë vendit',
    whyText:
      'Ekipi ynë punon me planifikim të kujdesshëm, teknologji bashkëkohore dhe materiale me emër, me një pjesë të vogël të kostos që do të paguanit në shumicën e vendeve të Europës Perëndimore.',
    whyPoints: [
      { icon: 'trending_down', title: 'Deri në 70% më pak', text: 'Krahasuar me çmimet private në Gjermani, Itali dhe Europën Perëndimore, pa ulur standardin.' },
      { icon: 'biotech', title: 'Teknologji bashkëkohore', text: 'Skanim 3D CT dhe planifikim digjital, që çdo trajtim të nisë nga imazhe të sakta.' },
      { icon: 'verified', title: 'Materiale të certifikuara', text: 'Implante MegaGen, zirkon “Made in Germany” dhe E-max, produkte me certifikim ISO 13485 dhe CE.' },
      { icon: 'translate', title: 'Staf shumëgjuhësh', text: 'Flasim shqip, anglisht, gjermanisht dhe italisht, dhe përgjigjemi shpejt në çdo hap.' },
    ],
    locationTitle: 'Tiranë, Shqipëri',
    locationText: 'Rreth 2 orë fluturim nga shumica e kryeqyteteve europiane.',
    processEyebrow: 'Procesi',
    processTitle: 'Udhëtimi juaj, hap pas hapi',
    processText: 'Nga mesazhi i parë deri te kontrolli pas trajtimit, ja si funksionon gjithçka.',
    stepLabel: 'Hapi',
    steps: [
      { title: 'Konsulta fillestare', text: 'Na shkruani në WhatsApp ose me email. Flasim për shqetësimet tuaja dhe ju na dërgoni foto dhe një grafi panoramike, që ta kuptojmë mirë rastin.' },
      { title: 'Plani i trajtimit dhe çmimi', text: 'Dentisti shqyrton grafinë dhe brenda 24 orëve ju dërgon një plan trajtimi të personalizuar me çmim të fiksuar. Plani mund të ndryshohet sipas dëshirave tuaja.' },
      { title: 'Organizimi i udhëtimit', text: 'Ju ndihmojmë me datat e takimeve, transfertën nga aeroporti dhe akomodimin pranë klinikës, që udhëtimi të jetë sa më i lehtë.' },
      { title: 'Mbërritja dhe takimi i parë', text: 'Fillojmë me një ekzaminim falas dhe, kur kryeni trajtimin, një skanim 3D CT falas. Njiheni me dentistin dhe konfirmojmë planin përfundimtar para se të nisim.' },
      { title: 'Trajtimi dhe rikuperimi', text: 'Trajtimi kryhet sipas planit. Pas tij ju japim udhëzime të qarta për rikuperimin dhe mbetemi pranë jush gjatë shërimit.' },
      { title: 'Ndjekja pas trajtimit', text: 'Mbetemi në kontakt pasi ktheheni në shtëpi. Për implantet nevojitet një udhëtim i dytë, rreth gjashtë muaj më vonë, për punimin përfundimtar.' },
    ],
    tiranaEyebrow: 'Destinacioni',
    tiranaTitle: 'Zbuloni Tiranën',
    tiranaSubtitle: 'Destinacioni juaj dentar, me një prekje kulturore',
    tiranaText:
      'Tirana, kryeqyteti i gjallë i Shqipërisë, bashkon sharmin modern me një histori të pasur. Ndërsa jeni këtu për trajtimin, shijoni një qytet ku tradita takohet me modernen.',
    placesTitle: 'Çfarë të shihni dhe të bëni',
    places: [
      { slug: 'skanderbeg-square', name: 'Sheshi Skënderbej', text: 'Zemra e qytetit, i rrethuar nga Muzeu Historik Kombëtar, Opera dhe Xhamia Et’hem Bej.' },
      { slug: 'bunkart', name: 'Bunk’Art 1 & 2', text: 'Muze brenda bunkerëve të Luftës së Ftohtë, që tregojnë historinë e periudhës komuniste përmes artit.' },
      { slug: 'dajti', name: 'Parku Kombëtar i Dajtit', text: 'Me teleferik deri në mal, për pamje mbi gjithë Tiranën, ecje në natyrë ose një ditë të qetë.' },
      { slug: 'grand-park', name: 'Parku i Madh', text: 'Një oaz i gjelbër me liqen dhe shtigje ecjeje, ideal për t’u çlodhur mes takimeve.' },
      { slug: 'pyramid', name: 'Piramida e Tiranës', text: 'Monument i rinovuar me arkitekturë futuriste, sot me kafene dhe hapësira krijuese.' },
      { slug: 'ethem-bey', name: 'Xhamia Et’hem Bej', text: 'Një nga xhamitë më të vjetra të qytetit, e njohur për afresket e saj të hollësishme.' },
      { slug: 'national-museum', name: 'Muzeu Historik Kombëtar', text: 'Koleksioni më i madh historik i vendit, nga antikiteti deri në ditët tona.' },
      { slug: 'house-of-leaves', name: 'Shtëpia me Gjethe', text: 'Ish-qendër përgjimi e kthyer në muze, për historinë e policisë sekrete komuniste.' },
      { slug: 'new-bazaar', name: 'Pazari i Ri', text: 'Treg i gjallë me prodhime vendase, kafene dhe dyqane të vogla, për të ndjerë jetën e përditshme.' },
    ],
    photoSoon: 'Foto e Tiranës',
    faqEyebrow: 'Pyetje & përgjigje',
    faqTitle: 'Gjithçka për udhëtimin tuaj dentar',
    faqText: 'Përgjigje praktike për kohëzgjatjen, dokumentet dhe përgatitjet para se të vini në Tiranë.',
    faq: [
      { question: 'Sa kohë zgjat realisht turizmi dentar?', answer: 'Varet nga trajtimi, por shumica e udhëtimeve ndjekin të njëjtin model: konsultë falas nga shtëpia, ekzaminim në ditën e parë në Tiranë, ditët e trajtimit dhe kujdesi pas tij. Pas grafisë suaj ju japim një kronologji të saktë për rastin tuaj.' },
      { question: 'Çfarë ndodh para udhëtimit?', answer: 'Gjithçka bëhet nga shtëpia. Na dërgoni foto, një grafi panoramike dhe çfarë dëshironi të ndryshoni. Brenda 24 orëve merrni planin e trajtimit dhe një çmim të fiksuar, pa asnjë detyrim.' },
      { question: 'Çfarë ndodh ditën e parë në Tiranë?', answer: 'Takimi i parë është një ekzaminim klinik i plotë dhe falas, me skanim 3D CT kur nevojitet. Këtu plani i bërë në distancë konfirmohet ose rregullohet sipas asaj që sheh dentisti personalisht.' },
      { question: 'Sa zgjasin ditët e trajtimit?', answer: 'Zbardhimi ose një mbushje përfundojnë brenda ditës. Fasetat dhe kurorat kërkojnë një takim përgatitjeje, disa ditë për punën e laboratorit dhe një takim vendosjeje, zakonisht 3 deri në 7 ditë. Implantet kërkojnë dy udhëtime, me rreth gjashtë muaj ndërmjet, që implanti të shkrihet me kockën.' },
      { question: 'Çfarë duhet të di para se të kthehem në shtëpi?', answer: 'Para se të largoheni ju shpjegojmë udhëzimet e kujdesit për trajtimin tuaj dhe çfarë të prisni në ditët dhe javët në vijim.' },
      { question: 'A më ndiqni edhe pas trajtimit?', answer: 'Po. Mbetemi të kontaktueshëm në WhatsApp për çdo pyetje, dhe për trajtimet që kërkojnë një vizitë të dytë ju ndihmojmë ta planifikoni shumë përpara.' },
      { question: 'A më duhet vizë për të ardhur në Shqipëri?', answer: 'Shtetasit e BE-së, Mbretërisë së Bashkuar, SHBA-së, Kanadasë dhe shumë vendeve të tjera hyjnë pa vizë për qëndrime të shkurtra. Kontrolloni gjithmonë rregullat aktuale për shtetësinë tuaj para rezervimit.' },
      { question: 'Sa ditë duhet të planifikoj?', answer: 'Për trajtime të thjeshta mjaftojnë 1 deri në 2 ditë. Për faseta, kurora ose Hollywood Smile planifikoni 3 deri në 7 ditë. Gjatë konsultës ju japim një program ditë për ditë, që ta rezervoni udhëtimin me siguri.' },
      { question: 'Çfarë dokumentesh ose grafish duhet të sjell?', answer: 'Sillni çdo grafi të fundit, plane trajtimi nga dentistë të tjerë dhe shënime për alergji ose sëmundje, në letër ose në telefon. Kjo na ndihmon të ecim më shpejt dhe të mos përsërisim skanime të bëra së fundmi.' },
      { question: 'Çfarë rrobash duhet të marr me vete?', answer: 'Tirana është e butë pjesën më të madhe të vitit, por vera mund të jetë shumë e nxehtë dhe mbrëmjet e dimrit më të ftohta se sa pritet. Veshjet me shtresa ju ndihmojnë, sidomos nëse dhëmbët janë të ndjeshëm pas trajtimit.' },
      { question: 'Cila është monedha dhe si paguaj?', answer: 'Monedha vendase është leku, por euro pranohet gjerësisht. Në klinikë mund të paguani me kartë, transfertë bankare ose para në dorë, me faturë në euro. Çmimi që merrni pas konsultës është çmimi që paguani.' },
    ],
    ctaEyebrow: 'Konsultë falas në distancë',
    ctaTitle: 'Gati ta shihni buzëqeshjen tuaj të re?',
    ctaText: 'Na dërgoni disa foto dhe një grafi panoramike: brenda 24 orëve merrni plan trajtimi dhe çmim të fiksuar. Pa asnjë detyrim.',
    ctaWhatsApp: 'Bisedo në WhatsApp',
  },
  en: {
    heroEyebrow: 'Dental tourism in Tirana',
    heroTitle: 'Your Dental Tourism Destination',
    heroText:
      'Dental tourism lets you combine quality treatment with the pleasure of discovering a new city. At Veneer Clinic we offer dental care with recognised materials and honest prices, while we make sure your stay is calm and stress-free.',
    cta: 'Book a Consultation',
    travelPrompt: 'Not sure how to organise the trip?',
    travelLink: 'Chat with our patient coordinators.',
    xrayLabel: 'Before you travel',
    xrayTitle: 'We need one panoramic X-ray (OPG)',
    xrayText:
      'Please send us a recent panoramic X-ray of your teeth via WhatsApp or email before you travel. It allows us to determine your diagnosis and the price of your treatment with about 90% accuracy, before you book a flight.',
    xrayPoints: ['Diagnosis about 90% accurate', 'Reliable price before you travel', 'Available at any dentist or X-ray centre'],
    whyEyebrow: 'Why choose us',
    whyTitle: 'Veneer Clinic for your dental treatment abroad',
    whyText:
      'Our team works with careful planning, modern technology and named materials, at a fraction of what you would pay in most of Western Europe.',
    whyPoints: [
      { icon: 'trending_down', title: 'Up to 70% less', text: 'Compared with private prices in Germany, Italy and Western Europe, without lowering the standard.' },
      { icon: 'biotech', title: 'Modern technology', text: '3D CT scanning and digital planning, so every treatment starts from accurate images.' },
      { icon: 'verified', title: 'Certified materials', text: 'MegaGen implants, “Made in Germany” zirconia and E-max, products with ISO 13485 and CE certification.' },
      { icon: 'translate', title: 'Multilingual team', text: 'We speak Albanian, English, German and Italian, and reply quickly at every step.' },
    ],
    locationTitle: 'Tirana, Albania',
    locationText: 'About a 2-hour flight from most European capitals.',
    processEyebrow: 'The Process',
    processTitle: 'Your Journey, Step by Step',
    processText: 'From your first message to your check-up after treatment, this is how it works.',
    stepLabel: 'Step',
    steps: [
      { title: 'Initial consultation', text: 'Message us on WhatsApp or by email. We talk about your concerns and you send us photos and a panoramic X-ray, so we understand your case well.' },
      { title: 'Treatment plan & price', text: 'The dentist reviews your X-ray and within 24 hours sends you a personalised treatment plan with a fixed price. The plan can be adjusted to your wishes.' },
      { title: 'Travel arrangements', text: 'We help with appointment dates, the airport transfer and accommodation near the clinic, to make the trip as easy as possible.' },
      { title: 'Arrival & first appointment', text: 'We start with a free examination and, when you go ahead with treatment, a free 3D CT scan. You meet your dentist and we confirm the final plan before we begin.' },
      { title: 'Treatment & recovery', text: 'Treatment follows the plan. Afterwards we give you clear recovery instructions and stay by your side while you heal.' },
      { title: 'Follow-up & aftercare', text: 'We stay in touch after you return home. Implants need a second trip, about six months later, for the final restoration.' },
    ],
    tiranaEyebrow: 'The Destination',
    tiranaTitle: 'Discover Tirana',
    tiranaSubtitle: 'Your dental destination, with a cultural touch',
    tiranaText:
      'Tirana, Albania’s lively capital, blends modern charm with a rich history. While you are here for treatment, enjoy a city where tradition meets the modern.',
    placesTitle: 'What to See and Do',
    places: [
      { slug: 'skanderbeg-square', name: 'Skanderbeg Square', text: 'The heart of the city, surrounded by the National History Museum, the Opera and the Et’hem Bey Mosque.' },
      { slug: 'bunkart', name: 'Bunk’Art 1 & 2', text: 'Museums inside Cold War bunkers that tell the story of the communist era through art.' },
      { slug: 'dajti', name: 'Dajti National Park', text: 'A cable-car ride up the mountain for views over all of Tirana, walks in nature or a quiet day.' },
      { slug: 'grand-park', name: 'Grand Park', text: 'A green oasis with a lake and walking paths, ideal for relaxing between appointments.' },
      { slug: 'pyramid', name: 'Pyramid of Tirana', text: 'A renovated monument with futuristic architecture, now home to cafés and creative spaces.' },
      { slug: 'ethem-bey', name: 'Et’hem Bey Mosque', text: 'One of the city’s oldest mosques, known for its detailed frescoes.' },
      { slug: 'national-museum', name: 'National History Museum', text: 'The country’s largest historical collection, from antiquity to the present day.' },
      { slug: 'house-of-leaves', name: 'House of Leaves', text: 'A former surveillance centre turned museum, about the communist secret police.' },
      { slug: 'new-bazaar', name: 'New Bazaar', text: 'A lively market with local produce, cafés and small shops, to feel everyday city life.' },
    ],
    photoSoon: 'Tirana photo',
    faqEyebrow: 'Questions & Answers',
    faqTitle: 'Everything About Your Dental Trip',
    faqText: 'Practical answers about timing, documents and preparation before you come to Tirana.',
    faq: [
      { question: 'How long does dental tourism really take?', answer: 'It depends on the treatment, but most trips follow the same pattern: a free consultation from home, an examination on your first day in Tirana, the treatment days and aftercare. After your X-ray we give you an exact timeline for your case.' },
      { question: 'What happens before the trip?', answer: 'Everything happens from home. Send us photos, a panoramic X-ray and what you would like to change. Within 24 hours you get a treatment plan and a fixed price, with no obligation.' },
      { question: 'What happens on the first day in Tirana?', answer: 'Your first appointment is a full, free clinical examination, with a 3D CT scan when needed. This is where the remote plan is confirmed or adjusted based on what the dentist sees in person.' },
      { question: 'How long do the treatment days take?', answer: 'Whitening or a filling is done the same day. Veneers and crowns need a preparation appointment, a few days for the lab work and a fitting appointment, usually 3 to 7 days. Implants need two trips, about six months apart, so the implant can fuse with the bone.' },
      { question: 'What should I know before going home?', answer: 'Before you leave, we explain the aftercare instructions for your treatment and what to expect in the following days and weeks.' },
      { question: 'Do you follow up after treatment?', answer: 'Yes. We stay reachable on WhatsApp for any question, and for treatments that need a second visit we help you plan it well in advance.' },
      { question: 'Do I need a visa to visit Albania?', answer: 'Citizens of the EU, UK, USA, Canada and many other countries enter visa-free for short stays. Always check the current rules for your nationality before booking.' },
      { question: 'How many days should I plan?', answer: 'Simple treatments need 1 to 2 days. For veneers, crowns or a Hollywood Smile, plan 3 to 7 days. During the consultation we give you a day-by-day schedule so you can book your trip with confidence.' },
      { question: 'Which documents or X-rays should I bring?', answer: 'Bring any recent X-rays, treatment plans from other dentists and notes about allergies or medical conditions, on paper or on your phone. This helps us move faster and avoid repeating recent scans.' },
      { question: 'What clothes should I pack?', answer: 'Tirana is mild for most of the year, but summers can be very hot and winter evenings cooler than expected. Layers help, especially if your teeth are sensitive after treatment.' },
      { question: 'What is the currency and how do I pay?', answer: 'The local currency is the lek, but euros are widely accepted. At the clinic you can pay by card, bank transfer or cash, with an invoice in euros. The price you get after the consultation is the price you pay.' },
    ],
    ctaEyebrow: 'Free Remote Consultation',
    ctaTitle: 'Ready to see your new smile?',
    ctaText: 'Send a few photos and a panoramic X-ray, and get a treatment plan and a fixed price within 24 hours. No obligation.',
    ctaWhatsApp: 'Chat on WhatsApp',
  },
  de: {
    heroEyebrow: 'Zahntourismus in Tirana',
    heroTitle: 'Ihr Reiseziel für Zahntourismus',
    heroText:
      'Zahntourismus verbindet eine hochwertige Behandlung mit dem Erlebnis einer neuen Stadt. In der Veneer Clinic erhalten Sie Zahnmedizin mit anerkannten Materialien zu ehrlichen Preisen – und wir sorgen dafür, dass Ihr Aufenthalt entspannt und stressfrei verläuft.',
    cta: 'Beratung buchen',
    travelPrompt: 'Unsicher bei der Reiseplanung?',
    travelLink: 'Sprechen Sie mit unseren Patientenkoordinatoren.',
    xrayLabel: 'Vor Ihrer Reise',
    xrayTitle: 'Wir benötigen ein Panorama-Röntgenbild (OPG)',
    xrayText:
      'Bitte senden Sie uns vor der Reise ein aktuelles Panorama-Röntgenbild Ihrer Zähne per WhatsApp oder E-Mail. Damit können wir Diagnose und Preis Ihrer Behandlung mit ca. 90 % Genauigkeit bestimmen, bevor Sie einen Flug buchen.',
    xrayPoints: ['Diagnose zu ca. 90 % genau', 'Verlässlicher Preis vor der Reise', 'Bei jedem Zahnarzt oder Röntgenzentrum erhältlich'],
    whyEyebrow: 'Warum wir',
    whyTitle: 'Veneer Clinic für Ihre Zahnbehandlung im Ausland',
    whyText:
      'Unser Team arbeitet mit sorgfältiger Planung, moderner Technik und Markenmaterialien – zu einem Bruchteil dessen, was Sie in den meisten Ländern Westeuropas zahlen würden.',
    whyPoints: [
      { icon: 'trending_down', title: 'Bis zu 70 % günstiger', text: 'Im Vergleich zu Privatpreisen in Deutschland, Italien und Westeuropa – ohne Abstriche beim Standard.' },
      { icon: 'biotech', title: 'Moderne Technik', text: '3D-CT und digitale Planung, damit jede Behandlung auf präzisen Bildern aufbaut.' },
      { icon: 'verified', title: 'Zertifizierte Materialien', text: 'MegaGen-Implantate, Zirkon „Made in Germany“ und E-max – Produkte mit ISO-13485- und CE-Zertifizierung.' },
      { icon: 'translate', title: 'Mehrsprachiges Team', text: 'Wir sprechen Albanisch, Englisch, Deutsch und Italienisch und antworten schnell bei jedem Schritt.' },
    ],
    locationTitle: 'Tirana, Albanien',
    locationText: 'Etwa 2 Flugstunden von den meisten europäischen Hauptstädten.',
    processEyebrow: 'Der Ablauf',
    processTitle: 'Ihre Reise, Schritt für Schritt',
    processText: 'Von der ersten Nachricht bis zur Kontrolle nach der Behandlung – so funktioniert es.',
    stepLabel: 'Schritt',
    steps: [
      { title: 'Erstberatung', text: 'Schreiben Sie uns per WhatsApp oder E-Mail. Wir sprechen über Ihre Anliegen, und Sie senden uns Fotos und ein Panorama-Röntgenbild, damit wir Ihren Fall gut verstehen.' },
      { title: 'Behandlungsplan & Preis', text: 'Der Zahnarzt prüft Ihr Röntgenbild und sendet Ihnen innerhalb von 24 Stunden einen individuellen Behandlungsplan mit Festpreis. Der Plan lässt sich nach Ihren Wünschen anpassen.' },
      { title: 'Reiseorganisation', text: 'Wir helfen bei den Terminen, dem Flughafentransfer und einer Unterkunft in Kliniknähe, damit die Reise so einfach wie möglich wird.' },
      { title: 'Ankunft & erster Termin', text: 'Wir beginnen mit einer kostenlosen Untersuchung und – wenn Sie sich für die Behandlung entscheiden – einem kostenlosen 3D-CT. Sie lernen Ihren Zahnarzt kennen, und wir bestätigen den finalen Plan.' },
      { title: 'Behandlung & Erholung', text: 'Die Behandlung folgt dem Plan. Danach erhalten Sie klare Hinweise zur Erholung, und wir sind während der Heilung für Sie da.' },
      { title: 'Nachsorge', text: 'Wir bleiben nach Ihrer Rückkehr in Kontakt. Für Implantate ist eine zweite Reise nach etwa sechs Monaten für die endgültige Versorgung nötig.' },
    ],
    tiranaEyebrow: 'Das Reiseziel',
    tiranaTitle: 'Entdecken Sie Tirana',
    tiranaSubtitle: 'Ihr Zahnreiseziel mit kultureller Note',
    tiranaText:
      'Tirana, die lebendige Hauptstadt Albaniens, verbindet modernen Charme mit reicher Geschichte. Während Ihrer Behandlung erleben Sie eine Stadt, in der Tradition auf Moderne trifft.',
    placesTitle: 'Sehenswertes & Aktivitäten',
    places: [
      { slug: 'skanderbeg-square', name: 'Skanderbeg-Platz', text: 'Das Herz der Stadt, umgeben vom Nationalen Geschichtsmuseum, der Oper und der Et’hem-Bey-Moschee.' },
      { slug: 'bunkart', name: 'Bunk’Art 1 & 2', text: 'Museen in Bunkern aus dem Kalten Krieg, die die kommunistische Zeit mit Kunst erzählen.' },
      { slug: 'dajti', name: 'Nationalpark Dajti', text: 'Mit der Seilbahn auf den Berg – für den Blick über ganz Tirana, Wanderungen oder einen ruhigen Tag.' },
      { slug: 'grand-park', name: 'Großer Park', text: 'Eine grüne Oase mit See und Spazierwegen, ideal zum Entspannen zwischen den Terminen.' },
      { slug: 'pyramid', name: 'Pyramide von Tirana', text: 'Ein renoviertes Denkmal mit futuristischer Architektur, heute mit Cafés und kreativen Räumen.' },
      { slug: 'ethem-bey', name: 'Et’hem-Bey-Moschee', text: 'Eine der ältesten Moscheen der Stadt, bekannt für ihre detailreichen Fresken.' },
      { slug: 'national-museum', name: 'Nationales Geschichtsmuseum', text: 'Die größte historische Sammlung des Landes, von der Antike bis heute.' },
      { slug: 'house-of-leaves', name: 'Haus der Blätter', text: 'Ein ehemaliges Überwachungszentrum, heute Museum über die kommunistische Geheimpolizei.' },
      { slug: 'new-bazaar', name: 'Neuer Basar', text: 'Ein lebendiger Markt mit lokalen Produkten, Cafés und kleinen Läden – Alltag pur.' },
    ],
    photoSoon: 'Foto von Tirana',
    faqEyebrow: 'Fragen & Antworten',
    faqTitle: 'Alles rund um Ihre Zahnreise',
    faqText: 'Praktische Antworten zu Dauer, Unterlagen und Vorbereitung, bevor Sie nach Tirana kommen.',
    faq: [
      { question: 'Wie lange dauert Zahntourismus wirklich?', answer: 'Das hängt von der Behandlung ab, aber die meisten Reisen folgen demselben Muster: kostenlose Beratung von zu Hause, Untersuchung am ersten Tag in Tirana, die Behandlungstage und die Nachsorge. Nach Ihrem Röntgenbild erhalten Sie einen genauen Zeitplan für Ihren Fall.' },
      { question: 'Was passiert vor der Reise?', answer: 'Alles geschieht von zu Hause. Senden Sie uns Fotos, ein Panorama-Röntgenbild und Ihre Wünsche. Innerhalb von 24 Stunden erhalten Sie einen Behandlungsplan mit Festpreis – unverbindlich.' },
      { question: 'Was passiert am ersten Tag in Tirana?', answer: 'Der erste Termin ist eine vollständige, kostenlose Untersuchung, bei Bedarf mit 3D-CT. Dabei wird der Fernplan bestätigt oder angepasst – je nachdem, was der Zahnarzt persönlich sieht.' },
      { question: 'Wie lange dauern die Behandlungstage?', answer: 'Bleaching oder eine Füllung sind am selben Tag erledigt. Veneers und Kronen brauchen einen Präparationstermin, einige Tage für das Labor und einen Einsetztermin, meist 3 bis 7 Tage. Implantate brauchen zwei Reisen im Abstand von etwa sechs Monaten, damit das Implantat einheilt.' },
      { question: 'Was sollte ich vor der Heimreise wissen?', answer: 'Vor Ihrer Abreise erklären wir Ihnen die Pflegehinweise für Ihre Behandlung und was Sie in den folgenden Tagen und Wochen erwartet.' },
      { question: 'Betreuen Sie mich auch nach der Behandlung?', answer: 'Ja. Wir sind per WhatsApp für jede Frage erreichbar und helfen Ihnen, einen eventuell nötigen zweiten Besuch frühzeitig zu planen.' },
      { question: 'Brauche ich ein Visum für Albanien?', answer: 'Bürger der EU, Großbritanniens, der USA, Kanadas und vieler weiterer Länder reisen für kurze Aufenthalte visumfrei ein – mit Personalausweis oder Reisepass. Prüfen Sie vor der Buchung stets die aktuellen Regeln für Ihre Staatsangehörigkeit.' },
      { question: 'Wie viele Tage sollte ich einplanen?', answer: 'Für einfache Behandlungen reichen 1 bis 2 Tage. Für Veneers, Kronen oder ein Hollywood Smile planen Sie 3 bis 7 Tage ein. In der Beratung erhalten Sie einen Tagesplan, damit Sie Ihre Reise sicher buchen können.' },
      { question: 'Welche Unterlagen oder Röntgenbilder sollte ich mitbringen?', answer: 'Bringen Sie aktuelle Röntgenbilder, Behandlungspläne anderer Zahnärzte und Hinweise zu Allergien oder Erkrankungen mit, ausgedruckt oder auf dem Handy. So kommen wir schneller voran und vermeiden doppelte Aufnahmen.' },
      { question: 'Welche Kleidung sollte ich einpacken?', answer: 'Tirana ist den Großteil des Jahres mild, doch die Sommer können sehr heiß und die Winterabende kühler als erwartet sein. Zwiebellook hilft, besonders wenn Ihre Zähne nach der Behandlung empfindlich sind.' },
      { question: 'Welche Währung gilt und wie bezahle ich?', answer: 'Die Landeswährung ist der Lek, Euro werden aber weithin akzeptiert. In der Klinik zahlen Sie per Karte, Überweisung oder bar, mit Rechnung in Euro. Der Preis nach der Beratung ist der Preis, den Sie zahlen.' },
    ],
    ctaEyebrow: 'Kostenlose Fernberatung',
    ctaTitle: 'Bereit für Ihr neues Lächeln?',
    ctaText: 'Senden Sie ein paar Fotos und ein Panorama-Röntgenbild und erhalten Sie innerhalb von 24 Stunden Behandlungsplan und Festpreis. Unverbindlich.',
    ctaWhatsApp: 'Per WhatsApp chatten',
  },
  it: {
    heroEyebrow: 'Turismo dentale a Tirana',
    heroTitle: 'La tua destinazione per il turismo dentale',
    heroText:
      'Il turismo dentale ti permette di unire un trattamento di qualità al piacere di scoprire una nuova città. In Veneer Clinic offriamo cure dentali con materiali riconosciuti e prezzi onesti, mentre ci occupiamo che il tuo soggiorno sia sereno e senza stress.',
    cta: 'Prenota una consulenza',
    travelPrompt: 'Non sai come organizzare il viaggio?',
    travelLink: 'Parla con i nostri coordinatori pazienti.',
    xrayLabel: 'Prima di partire',
    xrayTitle: 'Ci serve una radiografia panoramica (OPT)',
    xrayText:
      'Prima di partire, inviaci via WhatsApp o email una radiografia panoramica recente dei tuoi denti. Ci permette di definire la diagnosi e il prezzo del trattamento con circa il 90% di precisione, prima che tu prenoti il volo.',
    xrayPoints: ['Diagnosi precisa al 90% circa', 'Prezzo affidabile prima del viaggio', 'Disponibile da qualsiasi dentista o centro radiologico'],
    whyEyebrow: 'Perché sceglierci',
    whyTitle: 'Veneer Clinic per le tue cure dentali all’estero',
    whyText:
      'Il nostro team lavora con pianificazione accurata, tecnologia moderna e materiali di marca, a una frazione di quanto pagheresti nella maggior parte dell’Europa occidentale.',
    whyPoints: [
      { icon: 'trending_down', title: 'Fino al 70% in meno', text: 'Rispetto ai prezzi privati in Italia, Germania ed Europa occidentale, senza abbassare lo standard.' },
      { icon: 'biotech', title: 'Tecnologia moderna', text: 'TAC 3D e pianificazione digitale, perché ogni trattamento parta da immagini precise.' },
      { icon: 'verified', title: 'Materiali certificati', text: 'Impianti MegaGen, zirconia “Made in Germany” ed E-max, prodotti con certificazione ISO 13485 e CE.' },
      { icon: 'translate', title: 'Team multilingue', text: 'Parliamo albanese, inglese, tedesco e italiano, e rispondiamo rapidamente a ogni passo.' },
    ],
    locationTitle: 'Tirana, Albania',
    locationText: 'Circa 2 ore di volo dalla maggior parte delle capitali europee.',
    processEyebrow: 'Il percorso',
    processTitle: 'Il tuo viaggio, passo dopo passo',
    processText: 'Dal primo messaggio al controllo dopo il trattamento, ecco come funziona.',
    stepLabel: 'Fase',
    steps: [
      { title: 'Consulenza iniziale', text: 'Scrivici su WhatsApp o via email. Parliamo delle tue esigenze e ci invii foto e una radiografia panoramica, così capiamo bene il tuo caso.' },
      { title: 'Piano di trattamento e prezzo', text: 'Il dentista esamina la radiografia ed entro 24 ore ti invia un piano personalizzato con prezzo fisso. Il piano può essere adattato ai tuoi desideri.' },
      { title: 'Organizzazione del viaggio', text: 'Ti aiutiamo con le date degli appuntamenti, il transfer dall’aeroporto e l’alloggio vicino alla clinica, per rendere il viaggio il più semplice possibile.' },
      { title: 'Arrivo e primo appuntamento', text: 'Iniziamo con una visita gratuita e, se procedi con il trattamento, una TAC 3D gratuita. Conosci il tuo dentista e confermiamo il piano finale prima di iniziare.' },
      { title: 'Trattamento e recupero', text: 'Il trattamento segue il piano. Dopo ti diamo istruzioni chiare per il recupero e restiamo al tuo fianco durante la guarigione.' },
      { title: 'Controlli e assistenza', text: 'Restiamo in contatto dopo il rientro a casa. Gli impianti richiedono un secondo viaggio, circa sei mesi dopo, per la protesi definitiva.' },
    ],
    tiranaEyebrow: 'La destinazione',
    tiranaTitle: 'Scopri Tirana',
    tiranaSubtitle: 'La tua meta dentale, con un tocco culturale',
    tiranaText:
      'Tirana, la vivace capitale dell’Albania, unisce fascino moderno e una storia ricca. Mentre sei qui per il trattamento, goditi una città dove la tradizione incontra il moderno.',
    placesTitle: 'Cosa vedere e fare',
    places: [
      { slug: 'skanderbeg-square', name: 'Piazza Skanderbeg', text: 'Il cuore della città, circondata dal Museo Storico Nazionale, dall’Opera e dalla Moschea di Et’hem Bey.' },
      { slug: 'bunkart', name: 'Bunk’Art 1 e 2', text: 'Musei nei bunker della Guerra Fredda che raccontano l’epoca comunista attraverso l’arte.' },
      { slug: 'dajti', name: 'Parco Nazionale del Dajti', text: 'In funivia fino in montagna, per la vista su tutta Tirana, passeggiate nella natura o una giornata tranquilla.' },
      { slug: 'grand-park', name: 'Parco Grande', text: 'Un’oasi verde con lago e sentieri, ideale per rilassarsi tra un appuntamento e l’altro.' },
      { slug: 'pyramid', name: 'Piramide di Tirana', text: 'Un monumento rinnovato dall’architettura futuristica, oggi con caffè e spazi creativi.' },
      { slug: 'ethem-bey', name: 'Moschea di Et’hem Bey', text: 'Una delle moschee più antiche della città, nota per i suoi affreschi dettagliati.' },
      { slug: 'national-museum', name: 'Museo Storico Nazionale', text: 'La più grande collezione storica del paese, dall’antichità ai giorni nostri.' },
      { slug: 'house-of-leaves', name: 'Casa delle Foglie', text: 'Un ex centro di sorveglianza diventato museo sulla polizia segreta comunista.' },
      { slug: 'new-bazaar', name: 'Nuovo Bazar', text: 'Un mercato vivace con prodotti locali, caffè e piccoli negozi, per respirare la vita quotidiana.' },
    ],
    photoSoon: 'Foto di Tirana',
    faqEyebrow: 'Domande e risposte',
    faqTitle: 'Tutto sul tuo viaggio dentale',
    faqText: 'Risposte pratiche su tempi, documenti e preparativi prima di venire a Tirana.',
    faq: [
      { question: 'Quanto dura davvero il turismo dentale?', answer: 'Dipende dal trattamento, ma la maggior parte dei viaggi segue lo stesso schema: consulenza gratuita da casa, visita il primo giorno a Tirana, i giorni di trattamento e l’assistenza successiva. Dopo la radiografia ti diamo una tempistica precisa per il tuo caso.' },
      { question: 'Cosa succede prima del viaggio?', answer: 'Tutto avviene da casa. Inviaci foto, una radiografia panoramica e cosa vorresti cambiare. Entro 24 ore ricevi un piano di trattamento con prezzo fisso, senza impegno.' },
      { question: 'Cosa succede il primo giorno a Tirana?', answer: 'Il primo appuntamento è una visita clinica completa e gratuita, con TAC 3D se necessaria. Qui il piano a distanza viene confermato o adattato in base a ciò che il dentista vede di persona.' },
      { question: 'Quanto durano i giorni di trattamento?', answer: 'Sbiancamento o un’otturazione si fanno in giornata. Faccette e corone richiedono un appuntamento di preparazione, qualche giorno per il laboratorio e uno per la cementazione, di solito da 3 a 7 giorni. Gli impianti richiedono due viaggi a circa sei mesi di distanza, perché l’impianto si integri con l’osso.' },
      { question: 'Cosa devo sapere prima di tornare a casa?', answer: 'Prima della partenza ti spieghiamo le istruzioni di cura per il tuo trattamento e cosa aspettarti nei giorni e nelle settimane successive.' },
      { question: 'Mi seguite anche dopo il trattamento?', answer: 'Sì. Restiamo raggiungibili su WhatsApp per ogni domanda e, per i trattamenti che richiedono una seconda visita, ti aiutiamo a pianificarla con largo anticipo.' },
      { question: 'Mi serve un visto per l’Albania?', answer: 'I cittadini dell’UE, del Regno Unito, degli Stati Uniti, del Canada e di molti altri paesi entrano senza visto per soggiorni brevi, anche con la carta d’identità. Controlla sempre le regole aggiornate per la tua nazionalità prima di prenotare.' },
      { question: 'Quanti giorni devo prevedere?', answer: 'Per i trattamenti semplici bastano 1 o 2 giorni. Per faccette, corone o Hollywood Smile prevedi da 3 a 7 giorni. Durante la consulenza ti diamo un programma giorno per giorno, così prenoti il viaggio con sicurezza.' },
      { question: 'Quali documenti o radiografie devo portare?', answer: 'Porta le radiografie recenti, eventuali piani di altri dentisti e informazioni su allergie o patologie, su carta o sul telefono. Ci aiuta a procedere più velocemente ed evitare esami già fatti di recente.' },
      { question: 'Che vestiti devo mettere in valigia?', answer: 'Tirana è mite per gran parte dell’anno, ma le estati possono essere molto calde e le sere d’inverno più fresche del previsto. Vestirsi a strati aiuta, soprattutto se i denti sono sensibili dopo il trattamento.' },
      { question: 'Qual è la valuta e come si paga?', answer: 'La valuta locale è il lek, ma l’euro è ampiamente accettato. In clinica puoi pagare con carta, bonifico o contanti, con fattura in euro. Il prezzo che ricevi dopo la consulenza è il prezzo che paghi.' },
    ],
    ctaEyebrow: 'Consulenza gratuita a distanza',
    ctaTitle: 'Pronto a vedere il tuo nuovo sorriso?',
    ctaText: 'Inviaci qualche foto e una radiografia panoramica: entro 24 ore ricevi piano di trattamento e prezzo fisso. Senza impegno.',
    ctaWhatsApp: 'Scrivici su WhatsApp',
  },
};

const placePhoto = (slug: string) => `/images/tirana/places/${slug}.jpg`;

const stepPhotos = [
  images.patients[0],
  '/images/misc/xray.jpeg',
  placePhoto('travel'),
  images.surgery[1],
  images.surgery[3],
  '/images/patients/smile2.jpeg',
];

export default function JourneyPage() {
  const { lang } = useI18n();
  const c = copy[lang];

  return (
    <>
      {/* Hero */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav className="flex items-center gap-2 text-[13px] text-on-surface-variant mb-6">
              <Link to="/" className="hover:text-primary">{lang === 'sq' ? 'Kryefaqja' : lang === 'de' ? 'Startseite' : 'Home'}</Link>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-primary">{c.heroTitle}</span>
            </nav>
            <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">{c.heroEyebrow}</span>
            <h1 className="font-display-lg text-display-lg text-primary mt-3 mb-6">{c.heroTitle}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">{c.heroText}</p>
            <div className="flex flex-col items-start gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-md font-label-md">
                {c.cta}
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
              <p className="text-[14px] text-on-surface-variant">
                {c.travelPrompt}{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="font-semibold text-primary underline underline-offset-4">
                  {c.travelLink}
                </a>
              </p>
            </div>
          </div>
          <PlaceholderPhoto src={placePhoto('hero')} label={c.photoSoon} className="aspect-[4/5] rounded-lg" />
        </div>
      </section>

      {/* Panoramic X-ray requirement */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-[1000px] mx-auto px-gutter">
          <div className="bg-white border border-outline-variant rounded-md p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-6 items-start">
            <span className="w-14 h-14 rounded-md bg-primary text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]">radiology</span>
            </span>
            <div>
              <span className="font-label-md text-label-md uppercase tracking-[0.12em] text-on-surface-variant">{c.xrayLabel}</span>
              <h2 className="font-headline-md text-headline-md text-primary mt-2 mb-4">{c.xrayTitle}</h2>
              <p className="text-on-surface-variant leading-relaxed mb-5">{c.xrayText}</p>
              <ul className="grid sm:grid-cols-3 gap-3 text-[14px]">
                {c.xrayPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 bg-surface-container-low rounded-sm px-3 py-2.5">
                    <span className="material-symbols-outlined text-[18px] text-primary">check</span>
                    <span className="text-primary">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">{c.whyEyebrow}</span>
            <h2 className="font-display-lg text-display-lg text-primary mt-3 mb-6">{c.whyTitle}</h2>
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
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-surface-container">
            <img src={images.journey} alt="" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur rounded-md p-4">
              <p className="flex items-center gap-1 font-semibold text-primary">
                <span className="material-symbols-outlined text-[20px]">location_on</span>
                {c.locationTitle}
              </p>
              <p className="text-[13px] text-on-surface-variant mt-1">{c.locationText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">{c.processEyebrow}</span>
            <h2 className="font-display-lg text-display-lg text-primary mt-3 mb-4">{c.processTitle}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">{c.processText}</p>
          </div>
          <ol className="relative">
            <span aria-hidden className="absolute top-0 bottom-0 left-6 lg:left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10" />
            {c.steps.map((step, index) => {
              const flipped = index % 2 === 1;
              return (
                <li key={step.title} className="relative grid lg:grid-cols-2 gap-6 lg:gap-20 items-center pl-16 lg:pl-0 pb-14 last:pb-0">
                  <span className="absolute left-6 lg:left-1/2 top-0 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-10 grid place-items-center w-12 h-12 rounded-full bg-primary text-on-primary font-semibold text-[18px] ring-8 ring-surface-container-low">
                    {index + 1}
                  </span>
                  <div className={`bg-white border border-outline-variant rounded-lg p-8 shadow-sm ${flipped ? 'lg:order-2' : ''}`}>
                    <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">
                      {c.stepLabel} {index + 1}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mt-2 mb-3">{step.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed">{step.text}</p>
                  </div>
                  <PlaceholderPhoto
                    src={stepPhotos[index]}
                    label={c.photoSoon}
                    className={`aspect-[4/3] rounded-lg shadow-sm ${flipped ? 'lg:order-1' : ''}`}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Discover Tirana */}
      <section className="py-section-padding bg-primary text-on-primary">
        <div className="max-w-[1200px] mx-auto px-gutter grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-aqua">{c.tiranaEyebrow}</span>
            <h2 className="font-display-lg text-display-lg mt-3 mb-2">{c.tiranaTitle}</h2>
            <p className="font-headline-sm text-headline-sm text-aqua mb-6">{c.tiranaSubtitle}</p>
            <p className="font-body-lg text-body-lg text-white/75">{c.tiranaText}</p>
          </div>
          <PlaceholderPhoto src={placePhoto('tirana')} label={c.photoSoon} className="aspect-[4/3] rounded-lg" />
        </div>
      </section>

      {/* What to see and do */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <h2 className="font-display-lg text-display-lg text-primary text-center mb-14">{c.placesTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.places.map((place) => (
              <article key={place.slug} className="bg-white border border-outline-variant rounded-lg overflow-hidden">
                <PlaceholderPhoto src={placePhoto(place.slug)} label={place.name} className="aspect-[4/3]" />
                <div className="p-6">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{place.name}</h3>
                  <p className="text-[15px] text-on-surface-variant leading-relaxed">{place.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[800px] mx-auto px-gutter">
          <div className="text-center mb-12">
            <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant">{c.faqEyebrow}</span>
            <h2 className="font-headline-md text-headline-md text-primary mt-3 mb-3">{c.faqTitle}</h2>
            <p className="text-on-surface-variant">{c.faqText}</p>
          </div>
          <FaqAccordion items={c.faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-padding bg-primary text-on-primary">
        <div className="max-w-3xl mx-auto px-gutter text-center">
          <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-aqua">{c.ctaEyebrow}</span>
          <h2 className="font-display-lg text-display-lg mt-3 mb-4">{c.ctaTitle}</h2>
          <p className="font-body-lg text-body-lg text-white/75 mb-10">{c.ctaText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-md font-label-md">
              {c.cta}
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
