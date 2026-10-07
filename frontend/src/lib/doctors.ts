import type { Localized } from '@/lib/priceList';

const L = (sq: string, en: string, de: string, it: string): Localized => ({ sq, en, de, it });

export type Specialty = 'implantology' | 'oral-surgery' | 'maxillofacial' | 'general' | 'hygiene' | 'assistance';

export const specialtyLabels: Record<Specialty, Localized> = {
  implantology: L('Implantologji', 'Implantology', 'Implantologie', 'Implantologia'),
  'oral-surgery': L('Kirurgji Orale', 'Oral Surgery', 'Oralchirurgie', 'Chirurgia orale'),
  maxillofacial: L('Kirurgji Maksilofaciale', 'Maxillofacial Surgery', 'Kieferchirurgie', 'Chirurgia maxillo-facciale'),
  general: L('Stomatologji e Përgjithshme', 'General Dentistry', 'Allgemeine Zahnmedizin', 'Odontoiatria generale'),
  hygiene: L('Higjienë Dentare', 'Dental Hygiene', 'Dentalhygiene', 'Igiene dentale'),
  assistance: L('Asistencë Klinike', 'Chairside Assistance', 'Stuhlassistenz', 'Assistenza alla poltrona'),
};

export interface Doctor {
  slug: string;
  name: string;
  credentials?: string;
  photo: string;
  /** Year of graduation, used for the "years of experience" badge */
  since: number;
  lead?: boolean;
  role: Localized;
  university: Localized;
  summary: Localized;
  about: Localized[];
  specialties: Specialty[];
  tags: Localized[];
  highlights: { value: string; label: Localized }[];
  education: { years: string | Localized; title: Localized; place: Localized }[];
  experience: { years: string; title: Localized; place: Localized }[];
  training: { year: string; title: Localized; place?: Localized }[];
  academic: Localized[];
  publications: string[];
  skills?: Localized[];
}

const uniTirana = L(
  'Universiteti i Tiranës, Fakulteti i Mjekësisë',
  'University of Tirana, Faculty of Medicine',
  'Universität Tirana, Medizinische Fakultät',
  'Università di Tirana, Facoltà di Medicina',
);
const uniMedicine = L(
  'Universiteti i Mjekësisë, Tiranë',
  'University of Medicine, Tirana',
  'Medizinische Universität Tirana',
  'Università di Medicina, Tirana',
);
const qsut = L(
  'QSUT “Nënë Tereza”, Tiranë',
  '“Mother Teresa” University Hospital Centre, Tirana',
  'Universitätsklinikum „Mutter Teresa“, Tirana',
  'Centro Ospedaliero Universitario “Madre Teresa”, Tirana',
);
const uniDentalClinic = L(
  'Klinika Stomatologjike Universitare, Tiranë',
  'University Dental Clinic, Tirana',
  'Universitätszahnklinik Tirana',
  'Clinica Odontoiatrica Universitaria, Tirana',
);

export const doctors: Doctor[] = [
  {
    slug: 'besmir-skenderi',
    name: 'Dr. Besmir Skënderi',
    photo: '/images/staff/lab0.jpeg',
    since: 2013,
    lead: true,
    role: L(
      'Mjeku Kryesor · Kirurg Oral & Implantolog',
      'Lead Dentist · Oral Surgeon & Implantologist',
      'Leitender Zahnarzt · Oralchirurg & Implantologe',
      'Medico responsabile · Chirurgo orale e implantologo',
    ),
    university: uniMedicine,
    summary: L(
      'Specialist në Kirurgji Orale e Implantologji dhe në Kirurgji Maksilofaciale, me fokus te implantet, rigjenerimi kockor dhe rehabilitimet e plota me ngarkim të menjëhershëm.',
      'Specialist in oral surgery, implantology and maxillofacial surgery, focused on implants, bone regeneration and immediate-loading full-arch rehabilitation.',
      'Facharzt für Oralchirurgie, Implantologie und Kieferchirurgie mit Schwerpunkt auf Implantaten, Knochenaufbau und Full-Arch-Versorgungen mit Sofortbelastung.',
      'Specialista in chirurgia orale, implantologia e chirurgia maxillo-facciale, con focus su impianti, rigenerazione ossea e riabilitazioni full-arch a carico immediato.',
    ),
    about: [
      L(
        'Dr. Besmir Skënderi u diplomua në Mjekësi Dentare në Fakultetin e Mjekësisë të Universitetit të Tiranës në vitin 2013. Në vitin 2017 përfundoi specializimin në Kirurgji Orale dhe Implantologji, ndërsa në vitin 2025 specializimin në Kirurgji Maksilofaciale pranë Universitetit të Mjekësisë, Tiranë.',
        'Dr. Besmir Skënderi graduated in Dental Medicine from the Faculty of Medicine of the University of Tirana in 2013. He completed his specialisation in Oral Surgery and Implantology in 2017, and in Maxillofacial Surgery in 2025, at the University of Medicine, Tirana.',
        'Dr. Besmir Skënderi schloss 2013 sein Studium der Zahnmedizin an der Medizinischen Fakultät der Universität Tirana ab. 2017 beendete er die Facharztausbildung in Oralchirurgie und Implantologie, 2025 die in Kieferchirurgie an der Medizinischen Universität Tirana.',
        'Il Dr. Besmir Skënderi si è laureato in Odontoiatria presso la Facoltà di Medicina dell’Università di Tirana nel 2013. Nel 2017 ha completato la specializzazione in Chirurgia orale e Implantologia e nel 2025 quella in Chirurgia maxillo-facciale presso l’Università di Medicina di Tirana.',
      ),
      L(
        'Ka punuar si mjek rezident në Kirurgji Orale në QSUT “Nënë Tereza” dhe si specialist në Shërbimin e Kirurgjisë Orale të Klinikës Stomatologjike Universitare. Që nga viti 2017 zhvillon seminare praktike dhe laboratorike të Kirurgjisë Orale në Fakultetin e Mjekësisë Dentare.',
        'He has worked as a resident in Oral Surgery at the “Mother Teresa” University Hospital Centre and as a specialist in the Oral Surgery Service of the University Dental Clinic. Since 2017 he has led practical and laboratory seminars in Oral Surgery at the Faculty of Dentistry.',
        'Er war Assistenzarzt für Oralchirurgie am Universitätsklinikum „Mutter Teresa“ und Facharzt im oralchirurgischen Dienst der Universitätszahnklinik. Seit 2017 leitet er praktische und Laborseminare in Oralchirurgie an der Zahnmedizinischen Fakultät.',
        'Ha lavorato come medico specializzando in Chirurgia orale presso il Centro Ospedaliero Universitario “Madre Teresa” e come specialista nel Servizio di Chirurgia orale della Clinica Odontoiatrica Universitaria. Dal 2017 tiene seminari pratici e di laboratorio di Chirurgia orale presso la Facoltà di Odontoiatria.',
      ),
      L(
        'E përditëson vazhdimisht praktikën me trajnime në Shqipëri dhe Europë: implante në zonën estetike, rigjenerim kockor horizontal dhe vertikal, menaxhim i indeve të buta dhe rehabilitime full-arch me ngarkim të menjëhershëm. Çdo rast e planifikon mbi imazhe 3D, që pacienti ta kuptojë qartë çdo hap para se të nisë trajtimi.',
        'He keeps his practice current through training in Albania and across Europe: implants in the aesthetic zone, horizontal and vertical bone regeneration, soft-tissue management and immediate-loading full-arch rehabilitation. Every case is planned on 3D images, so patients clearly understand each step before treatment begins.',
        'Seine Praxis hält er durch Fortbildungen in Albanien und Europa aktuell: Implantate in der ästhetischen Zone, horizontaler und vertikaler Knochenaufbau, Weichgewebsmanagement und Full-Arch-Versorgungen mit Sofortbelastung. Jeder Fall wird anhand von 3D-Bildern geplant, damit Patienten jeden Schritt vor Behandlungsbeginn verstehen.',
        'Aggiorna costantemente la sua pratica con corsi in Albania e in Europa: impianti in zona estetica, rigenerazione ossea orizzontale e verticale, gestione dei tessuti molli e riabilitazioni full-arch a carico immediato. Ogni caso viene pianificato su immagini 3D, così il paziente comprende ogni passaggio prima dell’inizio del trattamento.',
      ),
    ],
    specialties: ['implantology', 'oral-surgery', 'maxillofacial'],
    tags: [
      specialtyLabels.implantology,
      specialtyLabels['oral-surgery'],
      specialtyLabels.maxillofacial,
      L('Rehabilitim full-arch', 'Full-arch rehabilitation', 'Full-Arch-Versorgung', 'Riabilitazione full-arch'),
      L('Rigjenerim kockor', 'Bone regeneration', 'Knochenaufbau', 'Rigenerazione ossea'),
      L('Indet e buta', 'Soft-tissue management', 'Weichgewebsmanagement', 'Gestione dei tessuti molli'),
    ],
    highlights: [
      { value: '2', label: L('Specializime', 'Specialisations', 'Facharzttitel', 'Specializzazioni') },
      { value: '2017', label: L('Pedagog universitar që nga', 'University lecturer since', 'Hochschuldozent seit', 'Docente universitario dal') },
      { value: '7+', label: L('Trajnime të avancuara', 'Advanced trainings', 'Fortbildungen', 'Corsi avanzati') },
    ],
    education: [
      {
        years: '2008–2013',
        title: L('Diplomë (Master Shkencor) në Mjekësi Dentare', 'Diploma (MSc) in Dental Medicine', 'Diplom (MSc) in Zahnmedizin', 'Laurea magistrale in Odontoiatria'),
        place: uniTirana,
      },
      {
        years: '2016–2017',
        title: L('Specializim në Kirurgji Orale dhe Implantologji', 'Specialisation in Oral Surgery and Implantology', 'Facharztausbildung Oralchirurgie und Implantologie', 'Specializzazione in Chirurgia orale e Implantologia'),
        place: uniMedicine,
      },
      {
        years: '2021–2025',
        title: L('Specializim në Kirurgji Maksilofaciale', 'Specialisation in Maxillofacial Surgery', 'Facharztausbildung Kieferchirurgie', 'Specializzazione in Chirurgia maxillo-facciale'),
        place: uniMedicine,
      },
    ],
    experience: [
      {
        years: '2017–2021',
        title: L('Specialist në Shërbimin e Kirurgjisë Orale', 'Specialist, Oral Surgery Service', 'Facharzt im oralchirurgischen Dienst', 'Specialista, Servizio di Chirurgia orale'),
        place: uniDentalClinic,
      },
      {
        years: '2016–2017',
        title: L('Mjek rezident në Kirurgji Orale', 'Resident in Oral Surgery', 'Assistenzarzt Oralchirurgie', 'Specializzando in Chirurgia orale'),
        place: qsut,
      },
      {
        years: '2013–2020',
        title: L('Mjek stomatolog', 'Dentist', 'Zahnarzt', 'Odontoiatra'),
        place: L('Praktikë private dentare, Tiranë', 'Private dental practice, Tirana', 'Private Zahnarztpraxis, Tirana', 'Studio dentistico privato, Tirana'),
      },
    ],
    training: [
      {
        year: '2026',
        title: L(
          'Rehabilitim full-arch me protokolle implantesh zigomatike, pterigoide dhe transnazale',
          'Full-arch restoration with zygomatic, pterygoid and transnasal implant protocols',
          'Full-Arch-Versorgung mit zygomatischen, pterygoiden und transnasalen Implantatprotokollen',
          'Riabilitazione full-arch con protocolli implantari zigomatici, pterigoidei e transnasali',
        ),
        place: L('Këln, Gjermani', 'Cologne, Germany', 'Köln, Deutschland', 'Colonia, Germania'),
      },
      {
        year: '2026',
        title: L(
          'Graftim i indeve të buta në zonat e implanteve',
          'Soft-tissue grafting at implant sites',
          'Weichgewebstransplantation an Implantatstellen',
          'Innesti di tessuto molle nei siti implantari',
        ),
      },
      {
        year: '2025',
        title: L(
          'Ngarkim i menjëhershëm në rehabilitimet full-arch dhe pozicionim hibrid i implanteve',
          'Immediate loading for full-arch rehabilitation and hybrid implant positioning',
          'Sofortbelastung bei Full-Arch-Versorgungen und hybride Implantatpositionierung',
          'Carico immediato nelle riabilitazioni full-arch e posizionamento implantare ibrido',
        ),
        place: L('Tiranë', 'Tirana', 'Tirana', 'Tirana'),
      },
      {
        year: '2024',
        title: L(
          'Menaxhim i indeve të buta, rigjenerim kockor horizontal dhe vertikal',
          'Soft-tissue management, horizontal and vertical bone regeneration',
          'Weichgewebsmanagement, horizontaler und vertikaler Knochenaufbau',
          'Gestione dei tessuti molli, rigenerazione ossea orizzontale e verticale',
        ),
        place: L('Rodio Pharma Academy & ASHA Academy', 'Rodio Pharma Academy & ASHA Academy', 'Rodio Pharma Academy & ASHA Academy', 'Rodio Pharma Academy & ASHA Academy'),
      },
      {
        year: '2022',
        title: L(
          'Implante të avancuara në zonën estetike, rigjenerim kockor i drejtuar (GBR), graft kockor GTO dhe membranë i-Gen',
          'Advanced implant placement in the aesthetic zone, guided bone regeneration (GBR), GTO bone graft and i-Gen membrane',
          'Fortgeschrittene Implantation in der ästhetischen Zone, gesteuerte Knochenregeneration (GBR), GTO-Knochenersatz und i-Gen-Membran',
          'Implantologia avanzata in zona estetica, rigenerazione ossea guidata (GBR), innesto osseo GTO e membrana i-Gen',
        ),
      },
      {
        year: '2020',
        title: L(
          'Përdorimi dhe avantazhet e sistemeve A-PRF, S-PRF dhe i-PRF+',
          'Use and advantages of A-PRF, S-PRF and i-PRF+ systems',
          'Einsatz und Vorteile der Systeme A-PRF, S-PRF und i-PRF+',
          'Uso e vantaggi dei sistemi A-PRF, S-PRF e i-PRF+',
        ),
        place: L('Tiranë', 'Tirana', 'Tirana', 'Tirana'),
      },
      {
        year: '2020',
        title: L(
          'Teknika teorike dhe praktike të mbushësve dermalë',
          'Theoretical and practical dermal filler techniques',
          'Theorie und Praxis der Dermalfiller-Techniken',
          'Tecniche teoriche e pratiche dei filler dermici',
        ),
      },
    ],
    academic: [
      L(
        'Seminare praktike dhe laboratorike të Kirurgjisë Orale, Fakulteti i Mjekësisë Dentare (që nga 2017)',
        'Practical and laboratory seminars in Oral Surgery, Faculty of Dentistry (since 2017)',
        'Praktische und Laborseminare in Oralchirurgie, Zahnmedizinische Fakultät (seit 2017)',
        'Seminari pratici e di laboratorio di Chirurgia orale, Facoltà di Odontoiatria (dal 2017)',
      ),
      L(
        'Pjesëmarrje në konferenca dhe kongrese dentare në Shqipëri dhe Europë',
        'Participation in dental conferences and congresses in Albania and Europe',
        'Teilnahme an zahnmedizinischen Konferenzen und Kongressen in Albanien und Europa',
        'Partecipazione a conferenze e congressi odontoiatrici in Albania e in Europa',
      ),
    ],
    publications: ['Dental Abscess: Microbiological Review (2022)'],
  },
  {
    slug: 'eriselda-simoni',
    name: 'Dr. Eriselda Simoni',
    credentials: 'Sp. MSc, PhD Candidate',
    photo: '/images/staff/eriselda-simoni.jpeg',
    since: 2007,
    role: L(
      'Kirurge Oromaksilofaciale',
      'Oral & Maxillofacial Surgeon',
      'Mund-, Kiefer- und Gesichtschirurgin',
      'Chirurgo orale e maxillo-facciale',
    ),
    university: uniTirana,
    summary: L(
      'Specialiste në Kirurgji Oromaksilofaciale dhe pedagoge në Universitetin e Mjekësisë, Tiranë, autore e mbi 100 artikujve shkencorë dhe lektore në universitete europiane.',
      'Oral and maxillofacial surgery specialist and lecturer at the University of Medicine, Tirana, author of over 100 scientific papers and guest lecturer at European universities.',
      'Fachärztin für Mund-, Kiefer- und Gesichtschirurgie und Dozentin an der Medizinischen Universität Tirana, Autorin von über 100 wissenschaftlichen Arbeiten und Gastdozentin an europäischen Universitäten.',
      'Specialista in chirurgia orale e maxillo-facciale e docente presso l’Università di Medicina di Tirana, autrice di oltre 100 lavori scientifici e docente ospite in università europee.',
    ),
    about: [
      L(
        'Dr. Eriselda Simoni u diplomua në Stomatologji në Fakultetin e Mjekësisë të Universitetit të Tiranës (2002–2007). Nga viti 2011 deri në 2015 kreu specializimin afatgjatë në Kirurgji Oromaksilofaciale pranë QSUT “Nënë Tereza”, ku punoi si mjeke specializante.',
        'Dr. Eriselda Simoni graduated in Dentistry from the Faculty of Medicine of the University of Tirana (2002–2007). From 2011 to 2015 she completed her long-term specialisation in Oral and Maxillofacial Surgery at the “Mother Teresa” University Hospital Centre, where she worked as a resident surgeon.',
        'Dr. Eriselda Simoni studierte Zahnmedizin an der Medizinischen Fakultät der Universität Tirana (2002–2007). Von 2011 bis 2015 absolvierte sie ihre Facharztausbildung in Mund-, Kiefer- und Gesichtschirurgie am Universitätsklinikum „Mutter Teresa“, wo sie als Assistenzärztin tätig war.',
        'La Dr.ssa Eriselda Simoni si è laureata in Odontoiatria presso la Facoltà di Medicina dell’Università di Tirana (2002–2007). Dal 2011 al 2015 ha svolto la specializzazione in Chirurgia orale e maxillo-facciale presso il Centro Ospedaliero Universitario “Madre Teresa”, dove ha lavorato come medico specializzando.',
      ),
      L(
        'Që nga viti 2016 ushtron profesionin si specialiste e Kirurgjisë Oromaksilofaciale pranë Klinikës Stomatologjike Universitare. Është pedagoge në katedrën e Kirurgjisë Maksilofaciale të Fakultetit të Mjekësisë Dentare, Universiteti i Mjekësisë Tiranë, dhe po kryen studimet e doktoraturës.',
        'Since 2016 she has practised as an oral and maxillofacial surgery specialist at the University Dental Clinic. She lectures in the Department of Maxillofacial Surgery at the Faculty of Dental Medicine, University of Medicine, Tirana, and is completing her PhD.',
        'Seit 2016 ist sie als Fachärztin für Mund-, Kiefer- und Gesichtschirurgie an der Universitätszahnklinik tätig. Sie lehrt am Lehrstuhl für Kieferchirurgie der Zahnmedizinischen Fakultät der Medizinischen Universität Tirana und promoviert derzeit.',
        'Dal 2016 esercita come specialista in chirurgia orale e maxillo-facciale presso la Clinica Odontoiatrica Universitaria. È docente presso la cattedra di Chirurgia maxillo-facciale della Facoltà di Odontoiatria dell’Università di Medicina di Tirana e sta completando il dottorato.',
      ),
      L(
        'Me rreth dy dekada në stomatologji, është autore e mbi 100 artikujve, botimeve dhe prezantimeve shkencore në revista kombëtare dhe ndërkombëtare, dhe ka marrë pjesë në disa projekte kërkimore. Ka mbajtur cikle leksionesh në universitete europiane, si në L’Aquila (Itali), Sofje (Bullgari) dhe Krajova (Rumani).',
        'With around two decades in dentistry, she has authored over 100 scientific articles, publications and presentations in national and international journals, and has taken part in several research projects. She has given lecture series at European universities, including L’Aquila (Italy), Sofia (Bulgaria) and Craiova (Romania).',
        'Mit rund zwei Jahrzehnten Erfahrung in der Zahnmedizin ist sie Autorin von über 100 wissenschaftlichen Artikeln, Publikationen und Vorträgen in nationalen und internationalen Fachzeitschriften und hat an mehreren Forschungsprojekten mitgewirkt. Vorlesungsreihen hielt sie an europäischen Universitäten, u. a. in L’Aquila (Italien), Sofia (Bulgarien) und Craiova (Rumänien).',
        'Con circa vent’anni di attività in odontoiatria, è autrice di oltre 100 articoli, pubblicazioni e presentazioni scientifiche su riviste nazionali e internazionali e ha partecipato a diversi progetti di ricerca. Ha tenuto cicli di lezioni in università europee, tra cui L’Aquila (Italia), Sofia (Bulgaria) e Craiova (Romania).',
      ),
    ],
    specialties: ['maxillofacial', 'oral-surgery', 'general'],
    tags: [
      L('Kirurgji Oromaksilofaciale', 'Oral & Maxillofacial Surgery', 'Mund-, Kiefer- und Gesichtschirurgie', 'Chirurgia maxillo-facciale'),
      specialtyLabels['oral-surgery'],
      L('Stomatologji', 'Dentistry', 'Zahnmedizin', 'Odontoiatria'),
      L('Kërkim shkencor', 'Scientific research', 'Wissenschaftliche Forschung', 'Ricerca scientifica'),
      L('Pedagoge universitare', 'University lecturer', 'Hochschuldozentin', 'Docente universitaria'),
    ],
    highlights: [
      { value: '100+', label: L('Artikuj shkencorë', 'Scientific papers', 'Wissenschaftliche Arbeiten', 'Articoli scientifici') },
      { value: '100+', label: L('Konferenca e trajnime', 'Conferences & trainings', 'Konferenzen & Fortbildungen', 'Conferenze e corsi') },
      { value: '3', label: L('Universitete europiane ku ka dhënë leksione', 'European universities lectured at', 'Europäische Gastuniversitäten', 'Università europee come docente ospite') },
    ],
    education: [
      {
        years: '2002–2007',
        title: L('Diplomë në Stomatologji', 'Degree in Dentistry', 'Studium der Zahnmedizin', 'Laurea in Odontoiatria'),
        place: uniTirana,
      },
      {
        years: '2011–2015',
        title: L('Specializim afatgjatë në Kirurgji Oromaksilofaciale', 'Long-term specialisation in Oral and Maxillofacial Surgery', 'Facharztausbildung Mund-, Kiefer- und Gesichtschirurgie', 'Specializzazione in Chirurgia orale e maxillo-facciale'),
        place: qsut,
      },
      {
        years: L('në vazhdim', 'ongoing', 'laufend', 'in corso'),
        title: L('Doktoraturë (PhD)', 'Doctorate (PhD)', 'Promotion (PhD)', 'Dottorato (PhD)'),
        place: uniMedicine,
      },
    ],
    experience: [
      {
        years: '2016–',
        title: L('Specialiste në Kirurgji Oromaksilofaciale', 'Oral and maxillofacial surgery specialist', 'Fachärztin für Mund-, Kiefer- und Gesichtschirurgie', 'Specialista in chirurgia orale e maxillo-facciale'),
        place: uniDentalClinic,
      },
      {
        years: '2015–2016',
        title: L('Mjeke stomatologe dhe specialiste kirurge', 'Dentist and specialist surgeon', 'Zahnärztin und Fachchirurgin', 'Odontoiatra e chirurgo specialista'),
        place: L('Klinikë private dentare, Tiranë', 'Private dental clinic, Tirana', 'Private Zahnklinik, Tirana', 'Clinica dentistica privata, Tirana'),
      },
      {
        years: '2011–2015',
        title: L('Mjeke specializante në Kirurgji Oromaksilofaciale', 'Resident in Oral and Maxillofacial Surgery', 'Assistenzärztin Mund-, Kiefer- und Gesichtschirurgie', 'Specializzanda in Chirurgia orale e maxillo-facciale'),
        place: qsut,
      },
    ],
    training: [],
    academic: [
      L(
        'Pedagoge në katedrën e Kirurgjisë Maksilofaciale, Fakulteti i Mjekësisë Dentare, Universiteti i Mjekësisë Tiranë',
        'Lecturer, Department of Maxillofacial Surgery, Faculty of Dental Medicine, University of Medicine, Tirana',
        'Dozentin, Lehrstuhl für Kieferchirurgie, Zahnmedizinische Fakultät, Medizinische Universität Tirana',
        'Docente, Cattedra di Chirurgia maxillo-facciale, Facoltà di Odontoiatria, Università di Medicina di Tirana',
      ),
      L(
        'Pedagoge me kohë të pjesshme, Departamenti i Farmacisë dhe Stomatologjisë, Universiteti “Kristal” (2013–2014)',
        'Part-time lecturer, Department of Pharmacy and Dentistry, “Kristal” University (2013–2014)',
        'Lehrbeauftragte, Fachbereich Pharmazie und Zahnmedizin, Universität „Kristal“ (2013–2014)',
        'Docente a contratto, Dipartimento di Farmacia e Odontoiatria, Università “Kristal” (2013–2014)',
      ),
      L(
        'Cikle leksionesh në Universitetin e L’Aquila-s (Itali), Sofje (Bullgari) dhe Krajova (Rumani)',
        'Lecture series at the University of L’Aquila (Italy), Sofia (Bulgaria) and Craiova (Romania)',
        'Vorlesungsreihen an der Universität L’Aquila (Italien), in Sofia (Bulgarien) und Craiova (Rumänien)',
        'Cicli di lezioni presso l’Università dell’Aquila (Italia), Sofia (Bulgaria) e Craiova (Romania)',
      ),
      L(
        'Mbi 100 konferenca, trajnime dhe seminare në Shqipëri, Maqedoni të Veriut, Kosovë, Bosnjë-Hercegovinë, Rumani, Bullgari, Itali, Francë dhe Emiratet e Bashkuara Arabe',
        'Over 100 conferences, trainings and seminars in Albania, North Macedonia, Kosovo, Bosnia and Herzegovina, Romania, Bulgaria, Italy, France and the UAE',
        'Über 100 Konferenzen, Fortbildungen und Seminare in Albanien, Nordmazedonien, Kosovo, Bosnien und Herzegowina, Rumänien, Bulgarien, Italien, Frankreich und den VAE',
        'Oltre 100 conferenze, corsi e seminari in Albania, Macedonia del Nord, Kosovo, Bosnia ed Erzegovina, Romania, Bulgaria, Italia, Francia ed Emirati Arabi Uniti',
      ),
      L(
        'Pjesëmarrje në disa projekte të kërkimit shkencor',
        'Participation in several scientific research projects',
        'Mitwirkung an mehreren wissenschaftlichen Forschungsprojekten',
        'Partecipazione a diversi progetti di ricerca scientifica',
      ),
    ],
    publications: [],
  },
  {
    slug: 'gledisa-ozuni',
    name: 'Gledisa Ozuni',
    photo: '/images/staff/gledisa-ozuni.jpeg',
    since: 2022,
    role: L('Higjieniste Dentare', 'Dental Hygienist', 'Dentalhygienikerin', 'Igienista dentale'),
    university: uniMedicine,
    summary: L(
      'Higjieniste dentare me diplomë nga Fakulteti i Mjekësisë Dentare dhe rreth katër vite përvojë si asistente në klinikë, me fokus te pastrimi profesional, zbardhimi dhe standardet e higjienës.',
      'Dental hygienist graduated from the Faculty of Dental Medicine, with around four years of chairside experience, focused on professional cleaning, whitening and hygiene standards.',
      'Dentalhygienikerin mit Abschluss an der Zahnmedizinischen Fakultät und rund vier Jahren Assistenzerfahrung – mit Schwerpunkt auf professioneller Zahnreinigung, Bleaching und Hygienestandards.',
      'Igienista dentale laureata presso la Facoltà di Odontoiatria, con circa quattro anni di esperienza alla poltrona, focalizzata su pulizia professionale, sbiancamento e standard di igiene.',
    ),
    about: [
      L(
        'Gledisa Ozuni ka përfunduar studimet Bachelor në Higjienë Dentare pranë Fakultetit të Mjekësisë Dentare, Universiteti i Mjekësisë, Tiranë. Prej rreth katër vitesh punon si asistente dentare, përkrah mjekëve në trajtime konservative, endodontike, protetike dhe kirurgjikale.',
        'Gledisa Ozuni holds a Bachelor’s degree in Dental Hygiene from the Faculty of Dental Medicine, University of Medicine, Tirana. For around four years she has worked as a dental assistant, supporting the dentists in restorative, endodontic, prosthetic and surgical treatments.',
        'Gledisa Ozuni hat ihren Bachelor in Dentalhygiene an der Zahnmedizinischen Fakultät der Medizinischen Universität Tirana abgeschlossen. Seit rund vier Jahren arbeitet sie als zahnmedizinische Assistentin und unterstützt die Zahnärzte bei konservierenden, endodontischen, prothetischen und chirurgischen Behandlungen.',
        'Gledisa Ozuni ha conseguito la laurea triennale in Igiene dentale presso la Facoltà di Odontoiatria dell’Università di Medicina di Tirana. Da circa quattro anni lavora come assistente alla poltrona, affiancando i medici nei trattamenti conservativi, endodontici, protesici e chirurgici.',
      ),
      L(
        'Kryen procedurat e profilaksisë dentare, si detartrazhi dhe pastrimi profesional i gurëzave, si dhe zbardhimin dentar sipas protokolleve klinike. Kujdeset që çdo ambient dhe instrument të jetë gati dhe në përputhje me standardet e higjienës, asepsisë dhe parandalimit të infeksioneve.',
        'She performs dental prophylaxis procedures such as scaling and professional tartar removal, as well as teeth whitening according to clinical protocols. She makes sure every room and instrument is ready and meets hygiene, asepsis and infection-prevention standards.',
        'Sie führt Prophylaxebehandlungen wie Zahnsteinentfernung und professionelle Zahnreinigung sowie Bleaching nach klinischen Protokollen durch. Sie sorgt dafür, dass jeder Raum und jedes Instrument bereit ist und den Standards für Hygiene, Asepsis und Infektionsprävention entspricht.',
        'Esegue procedure di profilassi dentale come detartrasi e pulizia professionale del tartaro, oltre allo sbiancamento secondo i protocolli clinici. Si assicura che ogni ambiente e strumento sia pronto e conforme agli standard di igiene, asepsi e prevenzione delle infezioni.',
      ),
    ],
    specialties: ['hygiene'],
    tags: [
      specialtyLabels.hygiene,
      L('Pastrim profesional', 'Professional cleaning', 'Professionelle Zahnreinigung', 'Pulizia professionale'),
      L('Zbardhim dentar', 'Teeth whitening', 'Bleaching', 'Sbiancamento'),
      L('Asistencë klinike', 'Chairside assistance', 'Stuhlassistenz', 'Assistenza alla poltrona'),
      L('Kontroll infeksionesh', 'Infection control', 'Infektionsschutz', 'Controllo delle infezioni'),
    ],
    highlights: [
      { value: '4+', label: L('Vite si asistente dentare', 'Years as dental assistant', 'Jahre als Assistentin', 'Anni come assistente') },
      { value: 'BSc', label: L('Higjienë Dentare', 'Dental Hygiene', 'Dentalhygiene', 'Igiene dentale') },
      { value: '4', label: L('Fusha klinike ku asiston', 'Clinical fields assisted', 'Klinische Fachbereiche', 'Ambiti clinici di assistenza') },
    ],
    education: [
      {
        years: L('E diplomuar', 'Graduated', 'Abgeschlossen', 'Laureata'),
        title: L('Bachelor në Higjienë Dentare', 'Bachelor in Dental Hygiene', 'Bachelor in Dentalhygiene', 'Laurea in Igiene dentale'),
        place: L(
          'Fakulteti i Mjekësisë Dentare, Universiteti i Mjekësisë, Tiranë',
          'Faculty of Dental Medicine, University of Medicine, Tirana',
          'Zahnmedizinische Fakultät, Medizinische Universität Tirana',
          'Facoltà di Odontoiatria, Università di Medicina di Tirana',
        ),
      },
    ],
    experience: [
      {
        years: '2022–',
        title: L('Asistente dentare', 'Dental assistant', 'Zahnmedizinische Assistentin', 'Assistente alla poltrona'),
        place: L('Klinikë dentare, Tiranë', 'Dental clinic, Tirana', 'Zahnklinik, Tirana', 'Clinica dentistica, Tirana'),
      },
    ],
    training: [],
    academic: [],
    publications: [],
    skills: [
      L(
        'Profilaksi dentare: detartrazh dhe pastrim profesional i gurëzave',
        'Dental prophylaxis: scaling and professional tartar removal',
        'Prophylaxe: Zahnsteinentfernung und professionelle Zahnreinigung',
        'Profilassi dentale: detartrasi e pulizia professionale',
      ),
      L(
        'Zbardhim dentar sipas protokolleve klinike',
        'Teeth whitening according to clinical protocols',
        'Bleaching nach klinischen Protokollen',
        'Sbiancamento secondo i protocolli clinici',
      ),
      L(
        'Përgatitja e instrumenteve dhe materialeve për trajtime konservative, endodontike, protetike dhe kirurgjikale',
        'Preparing instruments and materials for restorative, endodontic, prosthetic and surgical treatments',
        'Vorbereitung von Instrumenten und Materialien für konservierende, endodontische, prothetische und chirurgische Behandlungen',
        'Preparazione di strumenti e materiali per trattamenti conservativi, endodontici, protesici e chirurgici',
      ),
      L(
        'Protokolle higjiene, asepsie, antisepsie dhe parandalimi i infeksioneve',
        'Hygiene, asepsis, antisepsis and infection-prevention protocols',
        'Protokolle für Hygiene, Asepsis, Antisepsis und Infektionsprävention',
        'Protocolli di igiene, asepsi, antisepsi e prevenzione delle infezioni',
      ),
      L(
        'Organizimi i ambienteve klinike sipas standardeve të higjienës dhe funksionalitetit',
        'Organising clinical rooms to hygiene and workflow standards',
        'Organisation der Behandlungsräume nach Hygiene- und Ablaufstandards',
        'Organizzazione degli ambienti clinici secondo standard di igiene e funzionalità',
      ),
    ],
  },
  {
    slug: 'xhorxhia-xhelollari',
    name: 'Xhorxhia Xhelollari',
    photo: '/images/staff/xhorxhia-xhelollari.jpeg',
    since: 2023,
    role: L('Asistente Dentare · Teknike Dentare', 'Dental Assistant · Dental Technician', 'Zahnmedizinische Assistentin · Zahntechnikerin', 'Assistente alla poltrona · Odontotecnica'),
    university: uniMedicine,
    summary: L(
      'Teknike dentare me diplomë nga Fakulteti i Mjekësisë Dentare dhe rreth tre vite përvojë si asistente klinike, e përkushtuar ndaj sterilizimit, kontrollit të infeksioneve dhe rehatisë së pacientit.',
      'Dental technician graduated from the Faculty of Dental Medicine, with around three years as a chairside assistant, dedicated to sterilisation, infection control and patient comfort.',
      'Zahntechnikerin mit Abschluss an der Zahnmedizinischen Fakultät und rund drei Jahren Erfahrung als Stuhlassistenz – mit Fokus auf Sterilisation, Infektionsschutz und Patientenkomfort.',
      'Odontotecnica laureata presso la Facoltà di Odontoiatria, con circa tre anni di esperienza come assistente alla poltrona, attenta a sterilizzazione, controllo delle infezioni e comfort del paziente.',
    ),
    about: [
      L(
        'Xhorxhia Xhelollari ka përfunduar studimet Bachelor në Teknikë Dentare pranë Fakultetit të Mjekësisë Dentare, Universiteti i Mjekësisë, Tiranë. Prej rreth tre vitesh punon si asistente dentare, në asistencë të drejtpërdrejtë të mjekut gjatë procedurave stomatologjike, kirurgjikale dhe protetike.',
        'Xhorxhia Xhelollari holds a Bachelor’s degree in Dental Technology from the Faculty of Dental Medicine, University of Medicine, Tirana. For around three years she has worked as a dental assistant, directly supporting the dentist during restorative, surgical and prosthetic procedures.',
        'Xhorxhia Xhelollari hat ihren Bachelor in Zahntechnik an der Zahnmedizinischen Fakultät der Medizinischen Universität Tirana abgeschlossen. Seit rund drei Jahren arbeitet sie als zahnmedizinische Assistentin und unterstützt den Zahnarzt direkt bei konservierenden, chirurgischen und prothetischen Eingriffen.',
        'Xhorxhia Xhelollari ha conseguito la laurea triennale in Tecnica dentale presso la Facoltà di Odontoiatria dell’Università di Medicina di Tirana. Da circa tre anni lavora come assistente alla poltrona, affiancando direttamente il medico durante le procedure conservative, chirurgiche e protesiche.',
      ),
      L(
        'Përgatit pacientin, kabinetin, instrumentet dhe materialet para çdo procedure dhe menaxhon gjithë ciklin e dezinfektimit, paketimit dhe sterilizimit me autoklavë, sipas protokolleve të kontrollit të infeksioneve. Pacientët e njohin për qetësinë, komunikimin e kujdesshëm dhe respektin për konfidencialitetin.',
        'She prepares the patient, the treatment room, instruments and materials before every procedure and manages the full cycle of disinfection, packaging and autoclave sterilisation according to infection-control protocols. Patients know her for her calm manner, careful communication and respect for confidentiality.',
        'Sie bereitet Patient, Behandlungsraum, Instrumente und Materialien vor jedem Eingriff vor und steuert den gesamten Ablauf aus Desinfektion, Verpackung und Autoklav-Sterilisation nach den Protokollen des Infektionsschutzes. Patienten schätzen ihre ruhige Art, ihre sorgfältige Kommunikation und ihre Diskretion.',
        'Prepara paziente, studio, strumenti e materiali prima di ogni procedura e gestisce l’intero ciclo di disinfezione, confezionamento e sterilizzazione in autoclave secondo i protocolli di controllo delle infezioni. I pazienti apprezzano la sua calma, la comunicazione attenta e il rispetto della riservatezza.',
      ),
    ],
    specialties: ['assistance'],
    tags: [
      specialtyLabels.assistance,
      L('Teknikë Dentare', 'Dental Technology', 'Zahntechnik', 'Tecnica dentale'),
      L('Sterilizim', 'Sterilisation', 'Sterilisation', 'Sterilizzazione'),
      L('Kontroll infeksionesh', 'Infection control', 'Infektionsschutz', 'Controllo delle infezioni'),
      L('Kujdes për pacientin', 'Patient care', 'Patientenbetreuung', 'Cura del paziente'),
    ],
    highlights: [
      { value: '3+', label: L('Vite si asistente dentare', 'Years as dental assistant', 'Jahre als Assistentin', 'Anni come assistente') },
      { value: 'BSc', label: L('Teknikë Dentare', 'Dental Technology', 'Zahntechnik', 'Tecnica dentale') },
      { value: '3', label: L('Fusha klinike ku asiston', 'Clinical fields assisted', 'Klinische Fachbereiche', 'Ambiti clinici di assistenza') },
    ],
    education: [
      {
        years: L('E diplomuar', 'Graduated', 'Abgeschlossen', 'Laureata'),
        title: L('Bachelor në Teknikë Dentare', 'Bachelor in Dental Technology', 'Bachelor in Zahntechnik', 'Laurea in Tecnica dentale'),
        place: L(
          'Fakulteti i Mjekësisë Dentare, Universiteti i Mjekësisë, Tiranë',
          'Faculty of Dental Medicine, University of Medicine, Tirana',
          'Zahnmedizinische Fakultät, Medizinische Universität Tirana',
          'Facoltà di Odontoiatria, Università di Medicina di Tirana',
        ),
      },
    ],
    experience: [
      {
        years: '2023–',
        title: L('Asistente dentare', 'Dental assistant', 'Zahnmedizinische Assistentin', 'Assistente alla poltrona'),
        place: L('Klinikë dentare, Tiranë', 'Dental clinic, Tirana', 'Zahnklinik, Tirana', 'Clinica dentistica, Tirana'),
      },
    ],
    training: [],
    academic: [],
    publications: [],
    skills: [
      L(
        'Përgatitja e pacientit, kabinetit, instrumenteve dhe materialeve para çdo procedure',
        'Preparing the patient, treatment room, instruments and materials before every procedure',
        'Vorbereitung von Patient, Behandlungsraum, Instrumenten und Materialien vor jedem Eingriff',
        'Preparazione di paziente, studio, strumenti e materiali prima di ogni procedura',
      ),
      L(
        'Asistencë e drejtpërdrejtë gjatë procedurave stomatologjike, kirurgjikale dhe protetike',
        'Direct chairside assistance during restorative, surgical and prosthetic procedures',
        'Direkte Assistenz bei konservierenden, chirurgischen und prothetischen Eingriffen',
        'Assistenza diretta durante procedure conservative, chirurgiche e protesiche',
      ),
      L(
        'Dezinfektim, dekontaminim, paketim dhe sterilizim i instrumenteve',
        'Disinfection, decontamination, packaging and sterilisation of instruments',
        'Desinfektion, Dekontamination, Verpackung und Sterilisation der Instrumente',
        'Disinfezione, decontaminazione, confezionamento e sterilizzazione degli strumenti',
      ),
      L(
        'Monitorim i sterilizimit me autoklavë sipas protokolleve të kontrollit të infeksioneve',
        'Monitoring autoclave sterilisation according to infection-control protocols',
        'Überwachung der Autoklav-Sterilisation nach Infektionsschutzprotokollen',
        'Monitoraggio della sterilizzazione in autoclave secondo i protocolli di controllo delle infezioni',
      ),
      L(
        'Konfidencialitet dhe standarde profesionale në komunikimin me pacientët',
        'Confidentiality and professional standards in patient communication',
        'Vertraulichkeit und professionelle Standards in der Patientenkommunikation',
        'Riservatezza e standard professionali nella comunicazione con i pazienti',
      ),
    ],
  },
];

/** Total team size shown on the team page; unfilled slots render as placeholders */
export const TEAM_SIZE = 4;
