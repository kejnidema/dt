import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'de' | 'en' | 'it' | 'sq';

type I18nCtx = { lang: Lang; setLang: (l: Lang) => void };

const STORAGE_KEY = 'veneer-clinic-language';
const I18nCtx = createContext<I18nCtx>({ lang: 'en', setLang: () => {} });

const it: Record<string, string> = {
  'Treatments': 'Trattamenti',
  'Pricing': 'Prezzi',
  'Veneers': 'Faccette',
  'Gallery': 'Galleria',
  'Travel': 'Viaggio',
  'About Us': 'Chi siamo',
  'Book Now': 'Prenota ora',
  'Premium Dental Aesthetics': 'Estetica dentale premium',
  'Hollywood Smile from €350 — Same Quality, Significantly Cheaper.': 'Sorriso Hollywood da 350 € — stessa qualità, molto più conveniente.',
  'Save up to 70% compared to German prices with EU-certified quality. Boutique dentistry in Tirana for discerning patients.': 'Risparmia fino al 70% rispetto ai prezzi tedeschi con qualità certificata UE. Odontoiatria boutique a Tirana per pazienti esigenti.',
  'Request Free Consultation': 'Richiedi una consulenza gratuita',
  'View Gallery': 'Vedi la galleria',
  'Our Premium Materials': 'I nostri materiali premium',
  'We use only materials from leading German and international manufacturers for durable and naturally beautiful results.': 'Usiamo solo materiali di produttori tedeschi e internazionali leader per risultati durevoli e naturali.',
  'Full ceramic for highest translucency and natural aesthetics. Ideal for front teeth.': 'Ceramica integrale per massima traslucenza ed estetica naturale. Ideale per i denti anteriori.',
  'Extremely durable and long-lasting. Perfect for a radiant white smile.': 'Estremamente resistente e duratura. Perfetta per un sorriso bianco e luminoso.',
  'No grinding of healthy tooth substance required. Gentle and reversible.': 'Non è necessario limare il tessuto dentale sano. Delicata e reversibile.',
  'Ready for Your New Smile?': 'Pronto per il tuo nuovo sorriso?',
  'Simply send us photos of your teeth via WhatsApp for a free initial assessment and a cost estimate within 24 hours.': 'Inviaci semplicemente le foto dei tuoi denti via WhatsApp per una valutazione iniziale gratuita e un preventivo entro 24 ore.',
  'WhatsApp Consultation': 'Consulenza WhatsApp',
  'Book Appointment': 'Prenota appuntamento',
  'Lead Aesthetic Dentist': 'Dentista estetico responsabile',
  'We combine German precision with Albanian hospitality to offer you a first-class experience.': 'Uniamo precisione tedesca e ospitalità albanese per offrirti un’esperienza di prima classe.',
  'What Our Patients Say': 'Cosa dicono i nostri pazienti',
  'Absolutely fantastic result! My E-Max veneers look perfect. The team was incredibly professional.': 'Risultato assolutamente fantastico! Le mie faccette E-Max sono perfette. Il team è stato incredibilmente professionale.',
  'The cost savings compared to Germany are enormous. Quality is at the same level.': 'Il risparmio rispetto alla Germania è enorme. La qualità è allo stesso livello.',
  'I was skeptical, but the result exceeded all my expectations.': 'Ero scettica, ma il risultato ha superato tutte le mie aspettative.',
  'The trip to Tirana was absolutely worth it. I will come again!': 'Il viaggio a Tirana ne è valsa assolutamente la pena. Tornerò!',
  'days ago': 'giorni fa',
  'Veneers: Your Path to the Perfect Smile': 'Faccette: il percorso verso il sorriso perfetto',
  'Veneers are ultra-thin shells of ceramic or composite bonded to the front of your teeth to correct color, length, shape, or size.': 'Le faccette sono sottilissime lamine in ceramica o composito applicate sulla parte frontale dei denti per correggere colore, lunghezza, forma o dimensione.',
  'What are Veneers?': 'Cosa sono le faccette?',
  'Benefits of Veneers': 'Vantaggi delle faccette',
  'Natural, radiant smile': 'Sorriso naturale e luminoso',
  'Long-lasting — up to 20+ years': 'Durature — fino a oltre 20 anni',
  'Minimal tooth structure removal': 'Minima rimozione di tessuto dentale',
  'Stain and scratch resistant': 'Resistenti a macchie e graffi',
  'Immediate results': 'Risultati immediati',
  'The Treatment Process': 'Il processo di trattamento',
  'Consultation & Planning': 'Consulenza e pianificazione',
  'Digital analysis and smile design visualization.': 'Analisi digitale e visualizzazione del design del sorriso.',
  'Preparation & Scan': 'Preparazione e scansione',
  'Minimal reduction and digital scan of your teeth.': 'Riduzione minima e scansione digitale dei denti.',
  'Placement': 'Applicazione',
  'Your handcrafted veneers are permanently bonded.': 'Le faccette artigianali vengono fissate permanentemente.',
  'Material Comparison': 'Confronto materiali',
  'Frequently Asked Questions': 'Domande frequenti',
  'Free Consultation': 'Consulenza gratuita',
  'Price Calculator': 'Calcolatore prezzi',
  'Our Treatments': 'I nostri trattamenti',
  'Premium dentistry at a fraction of German prices.': 'Odontoiatria premium a una frazione dei prezzi tedeschi.',
  'Implants & All-on-X': 'Impianti e All-on-X',
  'Titanium implants, fixed bridges and All-on-4/All-on-6 packages.': 'Impianti in titanio, ponti fissi e pacchetti All-on-4/All-on-6.',
  'Digital Smile Design': 'Digital Smile Design',
  '3D visualization of your new smile before treatment.': 'Visualizzazione 3D del tuo nuovo sorriso prima del trattamento.',
  'Teeth Whitening': 'Sbiancamento dentale',
  'Professional bleaching treatment for brilliantly white teeth.': 'Trattamento professionale di sbiancamento per denti bianchissimi.',
  'Learn More': 'Scopri di più',
  'Which treatment is right for you?': 'Quale trattamento è adatto a te?',
  'Send us photos via WhatsApp for a free assessment.': 'Inviaci foto via WhatsApp per una valutazione gratuita.',
  'Your Journey to a New Smile — Step by Step.': 'Il tuo viaggio verso un nuovo sorriso — passo dopo passo.',
  'The Process': 'Il processo',
  'Your 5-Step Transformation': 'La tua trasformazione in 5 passi',
  'Travel Planning & Arrival': 'Pianificazione viaggio e arrivo',
  'Aftercare & Return Trip': 'Assistenza post-trattamento e rientro',
  'Travel Information for German Patients': 'Informazioni di viaggio per pazienti europei',
  'Everything you need to know for a smooth trip.': 'Tutto ciò che devi sapere per un viaggio senza problemi.',
  'Direct Flights & Flight Times': 'Voli diretti e tempi di volo',
  'Visa & Entry': 'Visto e ingresso',
  'Partner Hotels': 'Hotel partner',
  'VIP Transfer Service': 'Servizio transfer VIP',
  'Price Transparency': 'Trasparenza dei prezzi',
  'Save Thousands of Euros on Your Veneers.': 'Risparmia migliaia di euro sulle tue faccette.',
  'What\'s Included?': 'Cosa è incluso?',
  'No hidden costs. We organize your entire stay.': 'Nessun costo nascosto. Organizziamo tutto il soggiorno.',
  'Personal chauffeur from Tirana airport to hotel and clinic.': 'Autista personale dall’aeroporto di Tirana all’hotel e alla clinica.',
  'Stay at our partner hotels in the heart of Tirana.': 'Soggiorno nei nostri hotel partner nel cuore di Tirana.',
  'Treatment Plan': 'Piano di trattamento',
  'Before & After': 'Prima e dopo',
  'Real results from our patients. Every smile tells a story.': 'Risultati reali dei nostri pazienti. Ogni sorriso racconta una storia.',
  'All': 'Tutti',
  'Zirconia': 'Zirconia',
  'Teeth': 'Denti',
  'Days in Tirana': 'Giorni a Tirana',
  'Savings vs DE': 'Risparmio vs DE',
  'Contact Us': 'Contattaci',
  'We look forward to your inquiry. Our team will respond within 24 hours.': 'Attendiamo la tua richiesta. Il nostro team risponderà entro 24 ore.',
  'Phone': 'Telefono',
  'Email': 'Email',
  'Address': 'Indirizzo',
  'Office Hours': 'Orari di apertura',
  'WhatsApp Chat': 'Chat WhatsApp',
  'Name *': 'Nome *',
  'Your name': 'Il tuo nome',
  'City': 'Città',
  'Your city': 'La tua città',
  'Treatment': 'Trattamento',
  'Other': 'Altro',
  'Message': 'Messaggio',
  'Your message...': 'Il tuo messaggio...',
  'Sending...': 'Invio...',
  'Thank You!': 'Grazie!',
  'Your request has been sent successfully. We will contact you within 24 hours.': 'La tua richiesta è stata inviata con successo. Ti contatteremo entro 24 ore.',
  'In the Heart of Tirana': 'Nel cuore di Tirana',
  'Approx. 25 minutes from Tirana International Airport. VIP transfer included.': 'Circa 25 minuti dall’aeroporto internazionale di Tirana. Transfer VIP incluso.',
  'Veneer Price Calculator': 'Calcolatore prezzi faccette',
  'Calculate your savings based on material and location.': 'Calcola il tuo risparmio in base a materiale e città.',
  'Reference City in Germany': 'Città di riferimento in Germania',
  'Material Quality': 'Qualità del materiale',
  'Number of Veneers': 'Numero di faccette',
  'Your Potential Savings': 'Il tuo potenziale risparmio',
  '* Estimated vs Germany': '* Stima rispetto alla Germania',
  'Our Package Price': 'Il nostro prezzo pacchetto',
  'Cost DE': 'Costo DE',
  'Cost Tirana': 'Costo Tirana',
  'Get a Personalized Quote': 'Ricevi un preventivo personalizzato',
  'Free initial consultation including Digital Smile Design': 'Prima consulenza gratuita inclusa Digital Smile Design',
  'Transparent Pricing & Savings': 'Prezzi e risparmi trasparenti',
  'Calculate Tirana costs versus German averages — no hidden fees.': 'Calcola i costi a Tirana rispetto alle medie tedesche — senza costi nascosti.',
  'Hotel Support': 'Supporto hotel',
  'Payment Plans': 'Piani di pagamento',
  'All-on-X Packages': 'Pacchetti All-on-X',
  'Request': 'Richiedi',
  'Sample 7-Day Itinerary': 'Esempio di itinerario di 7 giorni',
  'Stay & Logistics in Tirana': 'Soggiorno e logistica a Tirana',
  'Aftercare, Warranty & Safety': 'Assistenza, garanzia e sicurezza',
  'Veneer & Dental Tourism Guides': 'Guide su faccette e turismo dentale',
  'Clinic, Technology & Safety': 'Clinica, tecnologia e sicurezza',
  'Premium boutique dentistry in Tirana. Specializing in veneers and digital smile design for patients across Europe.': 'Odontoiatria boutique premium a Tirana. Specializzati in faccette e design digitale del sorriso per pazienti in tutta Europa.',
  'Patient Services': 'Servizi per pazienti',
  'Patient Journey': 'Percorso del paziente',
  'Cost Comparison': 'Confronto costi',
  'Privacy Policy': 'Privacy Policy',
  'Imprint': 'Note legali'
};

const sq: Record<string, string> = {
  'Treatments': 'Trajtimet',
  'Pricing': 'Çmimet',
  'Veneers': 'Fasetat',
  'Gallery': 'Galeria',
  'Travel': 'Udhëtimi',
  'About Us': 'Rreth nesh',
  'Book Now': 'Rezervo tani',
  'Premium Dental Aesthetics': 'Estetikë dentare premium',
  'Hollywood Smile from €350 — Same Quality, Significantly Cheaper.': 'Buzëqeshje Hollywood nga 350 € — e njëjta cilësi, shumë më lirë.',
  'Save up to 70% compared to German prices with EU-certified quality. Boutique dentistry in Tirana for discerning patients.': 'Kurseni deri në 70% krahasuar me çmimet gjermane me cilësi të certifikuar nga BE. Stomatologji boutique në Tiranë për pacientë kërkues.',
  'Request Free Consultation': 'Kërko konsultë falas',
  'View Gallery': 'Shiko galerinë',
  'Our Premium Materials': 'Materialet tona premium',
  'We use only materials from leading German and international manufacturers for durable and naturally beautiful results.': 'Përdorim vetëm materiale nga prodhues kryesorë gjermanë dhe ndërkombëtarë për rezultate të qëndrueshme dhe natyrale.',
  'Full ceramic for highest translucency and natural aesthetics. Ideal for front teeth.': 'Qeramikë e plotë për transparencë maksimale dhe estetikë natyrale. Ideale për dhëmbët e përparmë.',
  'Extremely durable and long-lasting. Perfect for a radiant white smile.': 'Shumë e fortë dhe afatgjatë. Perfekte për një buzëqeshje të bardhë e rrezatuese.',
  'No grinding of healthy tooth substance required. Gentle and reversible.': 'Nuk kërkohet gërryerje e substancës së shëndetshme të dhëmbit. E butë dhe e kthyeshme.',
  'Ready for Your New Smile?': 'Gati për buzëqeshjen tuaj të re?',
  'Simply send us photos of your teeth via WhatsApp for a free initial assessment and a cost estimate within 24 hours.': 'Na dërgoni foto të dhëmbëve në WhatsApp për një vlerësim fillestar falas dhe preventiv brenda 24 orëve.',
  'WhatsApp Consultation': 'Konsultë në WhatsApp',
  'Book Appointment': 'Rezervo takim',
  'Lead Aesthetic Dentist': 'Dentist kryesor estetik',
  'We combine German precision with Albanian hospitality to offer you a first-class experience.': 'Kombinojmë saktësinë gjermane me mikpritjen shqiptare për t’ju ofruar një përvojë të klasit të parë.',
  'What Our Patients Say': 'Çfarë thonë pacientët tanë',
  'Absolutely fantastic result! My E-Max veneers look perfect. The team was incredibly professional.': 'Rezultat absolutisht fantastik! Fasetat e mia E-Max duken perfekte. Ekipi ishte jashtëzakonisht profesional.',
  'The cost savings compared to Germany are enormous. Quality is at the same level.': 'Kursimi krahasuar me Gjermaninë është shumë i madh. Cilësia është në të njëjtin nivel.',
  'I was skeptical, but the result exceeded all my expectations.': 'Isha skeptike, por rezultati i tejkaloi të gjitha pritshmëritë e mia.',
  'The trip to Tirana was absolutely worth it. I will come again!': 'Udhëtimi në Tiranë ia vlejti plotësisht. Do të vij përsëri!',
  'days ago': 'ditë më parë',
  'Veneers: Your Path to the Perfect Smile': 'Fasetat: rruga juaj drejt buzëqeshjes perfekte',
  'Veneers are ultra-thin shells of ceramic or composite bonded to the front of your teeth to correct color, length, shape, or size.': 'Fasetat janë shtresa shumë të holla qeramike ose kompoziti që vendosen në pjesën e përparme të dhëmbëve për të korrigjuar ngjyrën, gjatësinë, formën ose madhësinë.',
  'What are Veneers?': 'Çfarë janë fasetat?',
  'Benefits of Veneers': 'Përfitimet e fasetave',
  'Natural, radiant smile': 'Buzëqeshje natyrale dhe rrezatuese',
  'Long-lasting — up to 20+ years': 'Afatgjata — deri në mbi 20 vjet',
  'Minimal tooth structure removal': 'Heqje minimale e strukturës së dhëmbit',
  'Stain and scratch resistant': 'Rezistente ndaj njollave dhe gërvishtjeve',
  'Immediate results': 'Rezultate të menjëhershme',
  'The Treatment Process': 'Procesi i trajtimit',
  'Consultation & Planning': 'Konsultë dhe planifikim',
  'Digital analysis and smile design visualization.': 'Analizë digjitale dhe vizualizim i dizajnit të buzëqeshjes.',
  'Preparation & Scan': 'Përgatitje dhe skanim',
  'Minimal reduction and digital scan of your teeth.': 'Reduktim minimal dhe skanim digjital i dhëmbëve tuaj.',
  'Placement': 'Vendosja',
  'Your handcrafted veneers are permanently bonded.': 'Fasetat tuaja të punuara me dorë fiksohen në mënyrë të përhershme.',
  'Material Comparison': 'Krahasimi i materialeve',
  'Frequently Asked Questions': 'Pyetje të shpeshta',
  'Free Consultation': 'Konsultë falas',
  'Price Calculator': 'Kalkulator çmimesh',
  'Our Treatments': 'Trajtimet tona',
  'Premium dentistry at a fraction of German prices.': 'Stomatologji premium me një pjesë të çmimeve gjermane.',
  'Implants & All-on-X': 'Implante dhe All-on-X',
  'Titanium implants, fixed bridges and All-on-4/All-on-6 packages.': 'Implante titani, ura fikse dhe paketa All-on-4/All-on-6.',
  'Digital Smile Design': 'Dizajn digjital i buzëqeshjes',
  '3D visualization of your new smile before treatment.': 'Vizualizim 3D i buzëqeshjes suaj të re para trajtimit.',
  'Teeth Whitening': 'Zbardhim dhëmbësh',
  'Professional bleaching treatment for brilliantly white teeth.': 'Trajtim profesional zbardhimi për dhëmbë të bardhë e të ndritshëm.',
  'Learn More': 'Mëso më shumë',
  'Which treatment is right for you?': 'Cili trajtim është i duhuri për ju?',
  'Send us photos via WhatsApp for a free assessment.': 'Na dërgoni foto në WhatsApp për një vlerësim falas.',
  'Your Journey to a New Smile — Step by Step.': 'Udhëtimi juaj drejt një buzëqeshjeje të re — hap pas hapi.',
  'The Process': 'Procesi',
  'Your 5-Step Transformation': 'Transformimi juaj në 5 hapa',
  'Travel Planning & Arrival': 'Planifikimi i udhëtimit dhe mbërritja',
  'Aftercare & Return Trip': 'Kujdesi pas trajtimit dhe kthimi',
  'Travel Information for German Patients': 'Informacion udhëtimi për pacientët evropianë',
  'Everything you need to know for a smooth trip.': 'Gjithçka që duhet të dini për një udhëtim të lehtë.',
  'Direct Flights & Flight Times': 'Fluturime direkte dhe kohë fluturimi',
  'Visa & Entry': 'Viza dhe hyrja',
  'Partner Hotels': 'Hotele partnere',
  'VIP Transfer Service': 'Shërbim transferi VIP',
  'Price Transparency': 'Transparencë çmimesh',
  'Save Thousands of Euros on Your Veneers.': 'Kurseni mijëra euro për fasetat tuaja.',
  'What\'s Included?': 'Çfarë përfshihet?',
  'No hidden costs. We organize your entire stay.': 'Pa kosto të fshehura. Ne organizojmë gjithë qëndrimin tuaj.',
  'Personal chauffeur from Tirana airport to hotel and clinic.': 'Shofer personal nga aeroporti i Tiranës te hoteli dhe klinika.',
  'Stay at our partner hotels in the heart of Tirana.': 'Qëndrim në hotelet tona partnere në zemër të Tiranës.',
  'Treatment Plan': 'Plan trajtimi',
  'Before & After': 'Para dhe pas',
  'Real results from our patients. Every smile tells a story.': 'Rezultate reale nga pacientët tanë. Çdo buzëqeshje tregon një histori.',
  'All': 'Të gjitha',
  'Zirconia': 'Zirkon',
  'Teeth': 'Dhëmbë',
  'Days in Tirana': 'Ditë në Tiranë',
  'Savings vs DE': 'Kursim vs DE',
  'Contact Us': 'Na kontaktoni',
  'We look forward to your inquiry. Our team will respond within 24 hours.': 'Presim kërkesën tuaj. Ekipi ynë do të përgjigjet brenda 24 orëve.',
  'Phone': 'Telefon',
  'Email': 'Email',
  'Address': 'Adresa',
  'Office Hours': 'Orari i punës',
  'WhatsApp Chat': 'Bisedë WhatsApp',
  'Name *': 'Emri *',
  'Your name': 'Emri juaj',
  'City': 'Qyteti',
  'Your city': 'Qyteti juaj',
  'Treatment': 'Trajtimi',
  'Other': 'Tjetër',
  'Message': 'Mesazhi',
  'Your message...': 'Mesazhi juaj...',
  'Sending...': 'Duke dërguar...',
  'Thank You!': 'Faleminderit!',
  'Your request has been sent successfully. We will contact you within 24 hours.': 'Kërkesa juaj u dërgua me sukses. Do t’ju kontaktojmë brenda 24 orëve.',
  'In the Heart of Tirana': 'Në zemër të Tiranës',
  'Approx. 25 minutes from Tirana International Airport. VIP transfer included.': 'Rreth 25 minuta nga Aeroporti Ndërkombëtar i Tiranës. Transferi VIP i përfshirë.',
  'Veneer Price Calculator': 'Kalkulator çmimesh për faseta',
  'Calculate your savings based on material and location.': 'Llogaritni kursimin sipas materialit dhe vendndodhjes.',
  'Reference City in Germany': 'Qyteti referencë në Gjermani',
  'Material Quality': 'Cilësia e materialit',
  'Number of Veneers': 'Numri i fasetave',
  'Your Potential Savings': 'Kursimi juaj i mundshëm',
  '* Estimated vs Germany': '* Vlerësim krahasuar me Gjermaninë',
  'Our Package Price': 'Çmimi ynë i paketës',
  'Cost DE': 'Kosto DE',
  'Cost Tirana': 'Kosto Tirana',
  'Get a Personalized Quote': 'Merrni një ofertë të personalizuar',
  'Free initial consultation including Digital Smile Design': 'Konsultë fillestare falas përfshirë Digital Smile Design',
  'Transparent Pricing & Savings': 'Çmime dhe kursime transparente',
  'Calculate Tirana costs versus German averages — no hidden fees.': 'Llogaritni kostot në Tiranë kundrejt mesatareve gjermane — pa tarifa të fshehura.',
  'Hotel Support': 'Mbështetje hoteli',
  'Payment Plans': 'Plane pagese',
  'All-on-X Packages': 'Paketa All-on-X',
  'Request': 'Kërko',
  'Sample 7-Day Itinerary': 'Shembull itinerari 7-ditor',
  'Stay & Logistics in Tirana': 'Qëndrimi dhe logjistika në Tiranë',
  'Aftercare, Warranty & Safety': 'Kujdes pas trajtimit, garanci dhe siguri',
  'Veneer & Dental Tourism Guides': 'Udhëzues për faseta dhe turizëm dentar',
  'Clinic, Technology & Safety': 'Klinika, teknologjia dhe siguria',
  'Premium boutique dentistry in Tirana. Specializing in veneers and digital smile design for patients across Europe.': 'Stomatologji boutique premium në Tiranë. Të specializuar në faseta dhe dizajn digjital të buzëqeshjes për pacientë nga e gjithë Evropa.',
  'Patient Services': 'Shërbime për pacientët',
  'Patient Journey': 'Udhëtimi i pacientit',
  'Cost Comparison': 'Krahasim kostosh',
  'Privacy Policy': 'Politika e privatësisë',
  'Imprint': 'Impresum'
};

Object.assign(it, {
  'ISO Certified': 'Certificato ISO',
  'German quality standards': 'Standard di qualità tedeschi',
  '500+ happy patients': '500+ pazienti soddisfatti',
  '2 hrs from Frankfurt': '2 ore da Francoforte',
  'Daily direct flights': 'Voli diretti quotidiani',
  '-70% Costs': '-70% costi',
  'Best price guarantee': 'Garanzia miglior prezzo',
  'Price per tooth': 'Prezzo per dente',
  'DE price:': 'Prezzo DE:',
  'View details': 'Vedi dettagli',
  'Veneer Procedure': 'Procedura faccette',
  'Implantology': 'Implantologia',
  'E-Max Veneers: The Gold Standard for Your Smile.': 'Faccette E-Max: il gold standard per il tuo sorriso.',
  'Premium Material': 'Materiale premium',
  'Free Consultation': 'Consulenza gratuita',
  'Why E-Max at Dent Luxe?': 'Perché E-Max da Dent Luxe?',
  'Precision in every millimeter.': 'Precisione in ogni millimetro.',
  'Natural Light Transmission': 'Trasmissione naturale della luce',
  '0.3mm Ultra-Thin': 'Ultra-sottile 0,3 mm',
  'Highest Strength': 'Massima resistenza',
  'Treatment Process': 'Processo di trattamento',
  'Digital Planning': 'Pianificazione digitale',
  'Investment': 'Investimento',
  'Best Value': 'Miglior valore',
  'Single Tooth': 'Dente singolo',
  'Smile Design': 'Design del sorriso',
  'Request Quote': 'Richiedi preventivo',
  'No hidden costs': 'Nessun costo nascosto',
  'Financing Available': 'Finanziamento disponibile',
  'Pay conveniently in installments.': 'Paga comodamente a rate.',
  'Ready for Your Dream Smile?': 'Pronto per il sorriso dei tuoi sogni?',
  'Email Inquiry': 'Richiesta via email',
  'Dental Aesthetics & Veneers': 'Estetica dentale e faccette',
  'Prosthodontics & Implantology': 'Protesi e implantologia',
  'Quality': 'Qualità',
  'Patient First': 'Paziente al primo posto',
  'Technology': 'Tecnologia',
  'Our Team': 'Il nostro team',
  'Meet Our Team': 'Conosci il nostro team',
  'Education:': 'Formazione:',
  'Lead Doctor': 'Medico responsabile',
  'Cookies & privacy.': 'Cookie e privacy.',
  'Reject': 'Rifiuta',
  'Accept': 'Accetta'
});

Object.assign(sq, {
  'ISO Certified': 'Certifikuar ISO',
  'German quality standards': 'Standarde cilësie gjermane',
  '500+ happy patients': '500+ pacientë të lumtur',
  '2 hrs from Frankfurt': '2 orë nga Frankfurti',
  'Daily direct flights': 'Fluturime direkte çdo ditë',
  '-70% Costs': '-70% kosto',
  'Best price guarantee': 'Garanci e çmimit më të mirë',
  'Price per tooth': 'Çmimi për dhëmb',
  'DE price:': 'Çmimi DE:',
  'View details': 'Shiko detajet',
  'Veneer Procedure': 'Procedura e fasetave',
  'Implantology': 'Implantologji',
  'E-Max Veneers: The Gold Standard for Your Smile.': 'Fasetat E-Max: standardi i artë për buzëqeshjen tuaj.',
  'Premium Material': 'Material premium',
  'Why E-Max at Dent Luxe?': 'Pse E-Max te Dent Luxe?',
  'Precision in every millimeter.': 'Saktësi në çdo milimetër.',
  'Natural Light Transmission': 'Transmetim natyral i dritës',
  '0.3mm Ultra-Thin': 'Ultra e hollë 0.3 mm',
  'Highest Strength': 'Fortësi maksimale',
  'Treatment Process': 'Procesi i trajtimit',
  'Digital Planning': 'Planifikim digjital',
  'Investment': 'Investimi',
  'Best Value': 'Vlera më e mirë',
  'Single Tooth': 'Dhëmb i vetëm',
  'Smile Design': 'Dizajn buzëqeshjeje',
  'Request Quote': 'Kërko ofertë',
  'No hidden costs': 'Pa kosto të fshehura',
  'Financing Available': 'Financim i mundshëm',
  'Pay conveniently in installments.': 'Paguani lehtësisht me këste.',
  'Ready for Your Dream Smile?': 'Gati për buzëqeshjen tuaj të ëndrrave?',
  'Email Inquiry': 'Kërkesë me email',
  'Dental Aesthetics & Veneers': 'Estetikë dentare dhe faseta',
  'Prosthodontics & Implantology': 'Protetikë dhe implantologji',
  'Quality': 'Cilësi',
  'Patient First': 'Pacienti në radhë të parë',
  'Technology': 'Teknologji',
  'Our Team': 'Ekipi ynë',
  'Meet Our Team': 'Njihuni me ekipin tonë',
  'Education:': 'Arsimi:',
  'Lead Doctor': 'Mjek kryesor',
  'Cookies & privacy.': 'Cookie dhe privatësia.',
  'Reject': 'Refuzo',
  'Accept': 'Prano'
});

const dictionaries: Partial<Record<Lang, Record<string, string>>> = { it, sq };

function normalize(value: string) {
  return value.replace(/\s+/g, ' ').trim().replace(/^"|"$/g, '');
}

function translateNodeText(text: string, dictionary: Record<string, string>) {
  const key = normalize(text);
  const translated = dictionary[key];
  return translated ? text.replace(text.trim(), translated) : text;
}

function translatePage(lang: Lang) {
  const dictionary = dictionaries[lang];
  if (!dictionary) return;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return node.textContent?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  nodes.forEach((node) => {
    node.textContent = translateNodeText(node.textContent ?? '', dictionary);
  });

  document.querySelectorAll<HTMLElement>('[placeholder],[aria-label],[title]').forEach((el) => {
    ['placeholder', 'aria-label', 'title'].forEach((attr) => {
      const value = el.getAttribute(attr);
      if (value) el.setAttribute(attr, dictionary[normalize(value)] ?? value);
    });
  });
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    return saved === 'it' || saved === 'sq' || saved === 'en' || saved === 'de' ? saved : 'en';
  });

  const setLang = (next: Lang) => {
    localStorage.setItem(STORAGE_KEY, next);
    setLangState(next);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    if (!dictionaries[lang]) return;

    translatePage(lang);
    const observer = new MutationObserver(() => translatePage(lang));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [lang]);

  return (
    <I18nCtx.Provider value={{ lang, setLang }}>
      <div key={lang}>{children}</div>
    </I18nCtx.Provider>
  );
}

export function useI18n() {
  return useContext(I18nCtx);
}
