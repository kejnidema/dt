import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type Point, type TreatmentArticleContent } from '@/components/TreatmentArticle';

interface Copy {
  eyebrow: string;
  subtitle: string;
  lead: string;
  kicker: string;
  articleTitle: string;
  intro: string[];
  includesTitle: string;
  includesIntro: string;
  includes: Point[];
  includesNote: string;
  vsTitle: string;
  vsIntro: string;
  vs: Point[];
  vsApproach: string;
  candidatesTitle: string;
  candidatesIntro: string;
  candidates: Point[];
  candidatesNotes: string[];
  processTitle: string;
  process: Point[];
  processNote: string;
  whyTitle: string;
  why: Point[];
  lastTitle: string;
  last: string[];
  stats: { value: string; label: string }[];
  priceTitle: string;
  priceNote: string;
  whatTitle: string;
  what: string[];
  calloutTitle: string;
  calloutText: string;
  materialsTitle: string;
  materialsIntro: string;
  materials: { id: string; tag: string; title: string; text: string }[];
  fitTitle: string;
  fitIntro: string;
  fit: string[];
  fitNote: string;
  stepsTitle: string;
  stepsIntro: string;
  steps: Point[];
  whyBandTitle: string;
  whyBandText: string;
  caseText: string;
  faq: { question: string; answer: string }[];
}


const content: Record<Lang, Copy> = {
  sq: {
    eyebrow: 'Kozmetike · Shqipëri',
    subtitle:
      'Rikonstruksion i plotë i buzëqeshjes në Tiranë. Faseta, kurora dhe zbardhje të planifikuara sipas fytyrës suaj, për një rezultat të ndritshëm e të balancuar.',
    lead: 'Faseta, zbardhje dhe kurora të bashkuara në një rikonstruksion të vetëm të buzëqeshjes, të planifikuar tërësisht rreth fytyrës suaj.',
    kicker: 'Hollywood Smile në Tiranë, Shqipëri',
    articleTitle: 'Hollywood Smile në Tiranë: rikonstruksion i plotë i buzëqeshjes, i menduar për fytyrën tuaj',
    intro: [
      'Hollywood Smile është një transformim estetik i plotë i buzëqeshjes. Bëhet fjalë për një grup restaurimesh te dhëmbët e dukshëm, të planifikuara së bashku që forma, gjatësia, ngjyra dhe përmasat të funksionojnë si një kompozim i vetëm.',
      'Pikërisht kjo e dallon një rezultat të mirë nga një i zakonshëm. Çdo dhëmb mund të jetë i punuar mirë teknikisht, e megjithatë buzëqeshja në tërësi mund të mos i shkojë personit. Dhëmbët duhet të lidhen me vijën e buzëve, me vijën e mesit të fytyrës dhe me përmasat e fytyrës përreth. Prandaj një rikonstruksion i buzëqeshjes është fillimisht punë planifikimi, dhe vetëm më pas punë laboratori.',
      'Në Veneer Clinic në Tiranë, transformimi i buzëqeshjes përfundon zakonisht brenda 3 deri në 5 ditësh, në një udhëtim të vetëm, me kurora dhe faseta Made in Germany.',
    ],
    includesTitle: 'Çfarë përfshin një Hollywood Smile',
    includesIntro: 'Një rikonstruksion i plotë i buzëqeshjes kombinon, sipas nevojave të rastit tuaj, disa nga këto trajtime:',
    includes: [
      { title: 'Faseta', text: 'për dhëmbë të shëndoshë nga struktura që kanë nevojë për korrigjim estetik. Kjo është zgjidhja jonë e preferuar sa herë që situata klinike e lejon, sepse ruan sa më shumë dhëmb natyral.' },
      { title: 'Kurora zirkoni', text: 'për dhëmbë që janë restauruar shumë, janë devitalizuar ose janë të dobësuar strukturalisht, ku mbulimi i plotë jep rezultatin më të fortë dhe më jetëgjatë.' },
      { title: 'Zbardhje profesionale', text: 'e dhëmbëve që nuk mbulohen, që dhëmbët e restauruar dhe ata natyralë të kenë nuanca të ngjashme.' },
      { title: 'Konturimi i mishrave', text: 'kur vija e mishit është e parregullt ose buzëqeshja tregon më shumë mish se sa dëshironi. Një vijë e saktë e mishit shpesh është ajo që e bën rezultatin të duket natyral. Te ne përfshihet falas në çdo Hollywood Smile.' },
      { title: 'Trajtime paraprake', text: 'si pastrim, mbushje ose kujdes tjetër, kur baza ka nevojë për vëmendje më parë.' },
    ],
    includesNote:
      'Numri i elementeve ndryshon sipas rastit. Zona e dukshme e buzëqeshjes zakonisht përfshin 8–10 dhëmbët e sipërm, por nëse dhëmbët e poshtëm duken kur flisni ose qeshni, trajtimi i të dyja nofullave e mban rezultatin të njëtrajtshëm.',
    vsTitle: 'Faseta apo kurora: si vendosim',
    vsIntro: 'Të dyja kanë vendin e tyre, dhe të dish cila i përshtatet secilit dhëmb është një nga informacionet më të dobishme që merrni në konsultë.',
    vs: [
      { title: 'Faseta', text: 'mbulon sipërfaqen e përparme të dhëmbit dhe kërkon përgatitje minimale. Kur dhëmbi është i shëndetshëm dhe ka smalt të mjaftueshëm për ngjitje, faseta jep një rezultat estetik të shkëlqyer duke ruajtur sa më shumë nga dhëmbi juaj.' },
      { title: 'Kurora', text: 'e mbulon dhëmbin plotësisht. Është zgjedhja e duhur kur dhëmbi është i devitalizuar, ka mbushje të mëdha, është i plasaritur ose nuk ka smaltin që i nevojitet fasetës për t’u ngjitur në mënyrë të besueshme. Në këto raste mbulimi i plotë është vërtet restaurimi më i qëndrueshëm afatgjatë.' },
    ],
    vsApproach:
      'Qasja jonë është të përgatisim në mënyrë konservative dhe të përdorim faseta sa herë që dhëmbi e lejon. Kur për një dhëmb është më mirë kurora, jua shpjegojmë para se të nisim. Merrni një plan me shkrim që tregon, dhëmb për dhëmb, çfarë do të vendoset, që ta dini saktësisht çfarë do të merrni para se të fillojë trajtimi.',
    candidatesTitle: 'Kush është kandidat i mirë?',
    candidatesIntro: 'Hollywood Smile u përshtatet atyre që kanë qëllime për gjithë buzëqeshjen, jo për një ose dy dhëmbë:',
    candidates: [
      { title: 'Njolla të përhapura', text: 'që zbardhja nuk i korrigjon: ngjyrime të brendshme, vija nga tetraciklina ose fluoroza.' },
      { title: 'Dhëmbë të konsumuar ose të shkurtuar', text: 'shpesh nga vite kërcëllimi ose gërryerje nga acidet, ku buzëqeshja ka humbur gjatësinë e saj.' },
      { title: 'Disa boshllëqe ose shpërndarje e parregullt', text: 'përgjatë nofullës.' },
      { title: 'Restaurime të vjetra të ndryshme:', text: 'kurora, ura dhe mbushje me ngjyra dhe materiale të ndryshme.' },
      { title: 'Asimetri mes buzëqeshjes dhe fytyrës,', text: 'kur dhëmbët veç e veç janë në rregull, por kompozimi i përgjithshëm jo.' },
    ],
    candidatesNotes: [
      'Mishrat e shëndetshëm dhe një kafshim i qëndrueshëm janë themeli, dhe nëse njëri prej tyre ka nevojë për vëmendje, e përfshijmë në plan. Kërcëllimi i dhëmbëve menaxhohet lehtë me zgjedhjen e materialeve të duhura dhe një pllakë mbrojtëse nate.',
      'Nëse rasti juaj zgjidhet më mirë me diçka më të thjeshtë, si zbardhje ose duke trajtuar vetëm dy dhëmbët që ju shqetësojnë, jua themi në konsultë. Një rekomandim që mund t’i besoni vlen më shumë se një plan trajtimi më i madh.',
    ],
    processTitle: 'Si funksionon trajtimi te ne',
    process: [
      { title: 'Konsulta.', text: 'Në vizitën e parë flasim për çfarë dëshironi të ndryshoni, shohim buzëqeshjen tuaj nga afër dhe marrim foto. Ju tregojmë sa elementë ka gjasa të nevojiten dhe cilët do të jenë faseta e cilët kurora.' },
      { title: 'Ekzaminimi dhe planifikimi.', text: 'Bëhet një ekzaminim klinik i plotë, një grafi panoramike, vlerësimi i mishrave dhe i kafshimit. Konfirmojmë ose përshtatim planin sipas asaj që gjejmë dhe biem dakord me ju për formën, gjatësinë dhe ngjyrën e buzëqeshjes së re para se të nisim.' },
      { title: 'Përgatitja.', text: 'Përgatitja mbahet në minimumin që i nevojitet çdo dhëmbi. Pastaj marrim matje të detajuara dhe i dërgojmë në laborator bashkë me ngjyrën e rënë dakord, që restaurimet të punohen për rastin tuaj dhe jo sipas një modeli standard.' },
      { title: 'Punimi.', text: 'Restaurimet punohen sipas këtyre matjeve dhe përfundohen me teksturën dhe nuancat që e bëjnë qeramikën të duket natyrale dhe jo uniforme.' },
      { title: 'Prova dhe vendosja.', text: 'Restaurimet provohen para çimentimit përfundimtar, që përshtatja, ngjyra dhe konturi të kontrollohen dhe të përmirësohen. Kur jeni të kënaqur, ngjiten, kafshimi rregullohet dhe gjithçka lustrohet.' },
    ],
    processNote: 'Shumica e rasteve të plota përfundojnë brenda 3 deri në 5 ditësh, në një udhëtim të vetëm.',
    whyTitle: 'Pse Veneer Clinic',
    why: [
      { title: 'Përgatitje konservative.', text: 'Përdorim faseta sa herë që dhëmbi e lejon, duke ruajtur sa më shumë strukturë natyrale.' },
      { title: 'Made in Germany.', text: 'Kurorat dhe fasetat tona punohen me qeramika dhe zirkon me cilësi gjermane, materiale që janë pikë reference në stomatologjinë estetike evropiane.' },
      { title: 'Preventiv me shkrim, element për element.', text: 'E dini sa elementë, të çfarë lloji dhe me çfarë çmimi para se të nisim, dhe preventivi nuk ndryshon pasi jeni ulur në karrige.' },
      { title: 'Buzëqeshja juaj e rënë dakord paraprakisht.', text: 'Forma, gjatësia dhe ngjyra vendosen me ju para se të fillojë trajtimi.' },
      { title: 'Kujdesi pas trajtimit.', text: 'Largoheni me udhëzime me shkrim për kujdesin, dhe një numër kontakti i drejtpërdrejtë mbetet i hapur për ju: nëse del diçka më vonë, mund të na kontaktoni.' },
    ],
    lastTitle: 'Sa zgjat një Hollywood Smile?',
    last: [
      'Me ngjitje të mirë, mishra të shëndetshëm dhe kujdes të vazhdueshëm, punimet cilësore prej qeramike zakonisht zgjasin dhjetë deri në pesëmbëdhjetë vjet, shpesh edhe më shumë. Ajo që ua zgjat jetën është e thjeshtë: larja e përditshme dhe pastrimi ndërmjet dhëmbëve, pastrimet profesionale të rregullta, një pllakë nate nëse kërcëllini dhëmbët dhe mos përdorimi i dhëmbëve si vegël.',
      'Qeramika e ruan ngjyrën shumë më mirë se kompoziti. Kafeja, vera dhe duhani nuk i njollosin restaurimet, ndërsa pastrimet e rregullta i mbajnë në gjendje të mirë mishrat dhe dhëmbët e patrajtuar përreth.',
    ],
    stats: [
      { value: '3–5 ditë', label: 'Koha e trajtimit' },
      { value: '3', label: 'Seanca' },
      { value: '1', label: 'Udhëtim' },
      { value: 'Me shkrim', label: 'Preventiv i detajuar' },
    ],
    priceTitle: 'Çmimi për dhëmb',
    priceNote: 'Konturimi i mishrave përfshihet falas',
    whatTitle: 'Çfarë është Hollywood Smile?',
    what: [
      'Hollywood Smile është një rikonstruksion i buzëqeshjes plotësisht i personalizuar, që kombinon faseta, kurora dhe zbardhje në një plan të vetëm të koordinuar. Në vend që çdo dhëmb të trajtohet veç e veç, e gjithë buzëqeshja projektohet sipas përmasave të fytyrës, vijës së buzëve dhe ngjyrës së lëkurës, që rezultati përfundimtar të duket i balancuar dhe natyral, jo uniform.',
      'Procesi nis me një konsultë të hollësishme dhe me zgjedhjen, bashkë me ju, të formës, gjatësisë dhe ngjyrës së dhëmbëve të rinj. Prej aty kombinojmë faseta, kurora dhe zbardhje në mënyrën që u përshtatet më mirë dhëmbëve dhe qëllimeve tuaja, përgatisim dhëmbët dhe dërgojmë matjet në laborator. Në takimin e fundit, restaurimet përfundimtare provohen, çimentohen, lustrohen dhe kontrollohen sipas asaj që kemi rënë dakord.',
    ],
    calloutTitle: 'E rënë dakord para se të nisim',
    calloutText:
      'Forma, gjatësia dhe ngjyra e buzëqeshjes së re bien dakord me ju para se të përgatitet ndonjë dhëmb, dhe restaurimet provohen para çimentimit, që përshtatja dhe ngjyra të mund të përmirësohen ende.',
    materialsTitle: 'Cili material është i duhuri për ju?',
    materialsIntro: 'Plani juaj për Hollywood Smile ndërtohet mbi një nga këto materiale, të gjitha Made in Germany:',
    materials: [
      { id: 'crown-emax', tag: 'Më natyrali', title: 'Faseta & kurora E.max', text: 'Një qelqo-qeramikë e vlerësuar për tejdukshmërinë e saj natyrale, ideale për dhëmbët e përparmë, ku kalimi natyral i dritës ka më shumë rëndësi.' },
      { id: 'crown-zirconia', tag: 'Më i qëndrueshmi', title: 'Kurora zirkoni', text: 'Më të forta dhe më pak të prirura të ciflosen, të përshtatshme kur qëndrueshmëria ka po aq rëndësi sa pamja.' },
      { id: 'crown-porcelain', tag: 'Më ekonomiku', title: 'Kurora porcelani', text: 'Metal-qeramikë e fortë dhe e provuar, një zgjedhje e qëndrueshme me çmim të favorshëm, sidomos për dhëmbët e pasmë.' },
    ],
    fitTitle: 'A është Hollywood Smile i duhuri për ju?',
    fitIntro: 'Hollywood Smile është menduar për një transformim të plotë, jo për të rregulluar një detaj të vetëm. Ia vlen ta merrni parasysh nëse:',
    fit: [
      'Doni një transformim të plotë të buzëqeshjes, gati për çdo fotografi',
      'Keni njëkohësisht njolla, boshllëqe dhe dhëmbë të parregullt',
      'Doni rezultatin e plotë brenda një jave, pa e shtyrë trajtimin me muaj',
      'Doni të bini dakord për formën, gjatësinë dhe ngjyrën para se të angazhoheni',
    ],
    fitNote:
      'Hollywood Smile është një angazhim i rëndësishëm dhe kryesisht i pakthyeshëm mbi disa dhëmbë. Nëse nuk jeni të sigurt deri ku të shkoni, fillojmë duke rënë dakord me ju për formën, gjatësinë dhe ngjyrën para se të përgatitet ndonjë dhëmb.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'Një Hollywood Smile zakonisht përfundon brenda 3–5 ditësh, në tre takime:',
    steps: [
      { title: 'Konsulta', text: 'Flasim për çfarë dëshironi të ndryshoni, shohim buzëqeshjen tuaj nga afër dhe marrim foto. Ju tregojmë sa elementë ka gjasa të nevojiten.' },
      { title: 'Ekzaminimi dhe planifikimi', text: 'Ekzaminim klinik i plotë, grafi panoramike, vlerësim i mishrave dhe kafshimit. Konfirmojmë ose përshtatim planin dhe biem dakord për formën, gjatësinë dhe ngjyrën.' },
      { title: 'Përgatitja', text: 'Përgatitja mbahet në minimumin e nevojshëm për çdo dhëmb. Pastaj marrim matje të detajuara dhe i dërgojmë në laborator me ngjyrën e rënë dakord.' },
      { title: 'Punimi', text: 'Restaurimet punohen sipas këtyre matjeve dhe përfundohen me teksturën dhe nuancat që e bëjnë qeramikën të duket natyrale dhe jo uniforme.' },
      { title: 'Prova dhe vendosja', text: 'Restaurimet provohen para çimentimit për të përmirësuar përshtatjen, ngjyrën dhe konturin. Kur jeni të kënaqur, ngjiten, kafshimi rregullohet dhe gjithçka lustrohet.' },
    ],
    whyBandTitle: 'Pse Veneer Clinic për Hollywood Smile?',
    whyBandText:
      'Një rikonstruksion i plotë i buzëqeshjes projektohet një herë, rreth fytyrës dhe vijës së buzëve tuaja, jo dhëmb pas dhëmbi. Forma, gjatësia dhe ngjyra bien dakord me ju para çdo përgatitjeje.',
    caseText: 'Buzëqeshje e përmirësuar me Hollywood Smile',
    faq: [
      { question: 'A është Hollywood Smile e njëjtë me fasetat?', answer: 'Fasetat janë një pjesë. Hollywood Smile është një plan estetik i plotë që mund të kombinojë faseta, kurora, zbardhje dhe rregullim të mishrave, të projektuara si një rezultat i vetëm dhe jo dhëmb pas dhëmbi.' },
      { question: 'Sa dhëmbë trajtohen zakonisht?', answer: 'Më shpesh 8–10 dhëmbët e sipërm që duken kur buzëqeshni. Nëse dhëmbët e poshtëm duken kur flisni ose qeshni, trajtimi i të dyja nofullave e mban gjithçka të njëtrajtshme. Plani juaj tregon numrin e saktë.' },
      { question: 'A dhemb?', answer: 'Përgatitja bëhet me anestezi lokale. Një ndjeshmëri e lehtë ndërmjet përgatitjes dhe vendosjes përfundimtare është normale dhe kalon pasi vendosen restaurimet.' },
      { question: 'Sa të bardhë t’i zgjedh?', answer: 'Zgjedhja është e juaja dhe bie dakord para se të nisim. Ju japim një mendim të sinqertë për çfarë do të duket natyrale me ngjyrën e lëkurës dhe tiparet tuaja: shumica e pacientëve zgjedhin një ose dy nuanca më poshtë se më e bardha.' },
      { question: 'A do të duket natyrale?', answer: 'Varet nga planifikimi dhe mjeshtëria: përmasa që i shkojnë fytyrës suaj, një vijë e saktë e mishit dhe qeramikë e përfunduar me teksturën dhe nuancat e dhëmbëve natyralë. Kësaj i kushtojmë më shumë kohë.' },
      { question: 'Sa zgjat trajtimi?', answer: 'Tre deri në pesë ditë për shumicën e rasteve të plota, në tre takime dhe një udhëtim të vetëm. Ju japim kalendarin e saktë bashkë me planin e trajtimit, që t’i planifikoni takimet me qetësi.' },
      { question: 'A është trajtimi i përhershëm?', answer: 'Po. Pasi dhëmbët përgatiten, restaurimet ndërrohen në fund të jetës së tyre, nuk hiqen. Prandaj planifikojmë me kujdes dhe përgatisim në mënyrë konservative, që themeli të mbetet sa më i fortë afatgjatë.' },
      { question: 'Sa kushton një Hollywood Smile?', answer: 'Çmimi varet nga materiali dhe numri i dhëmbëve: kurorë porcelani 100 €, kurorë zirkoni 200 € dhe E.max 300 € për dhëmb. Konturimi i mishrave përfshihet falas. Dërgoni një grafi panoramike dhe ju japim një ofertë me rreth 90% saktësi.' },
      { question: 'Çfarë ndodh pas përfundimit të trajtimit?', answer: 'Largoheni me udhëzime me shkrim për kujdesin dhe një numër kontakti që mbetet i hapur për ju. Nëse del diçka, na telefononi dhe ju këshillojmë drejtpërdrejt. Kontrollet dhe pastrimet e rregullta e mbajnë buzëqeshjen të shëndetshme për vite.' },
    ],
  },
  en: {
    eyebrow: 'Cosmetic · Albania',
    subtitle:
      'A complete smile makeover in Tirana. Veneers, crowns and whitening planned around your face, for a bright and balanced result.',
    lead: 'Veneers, whitening and crowns combined into a single smile reconstruction, planned entirely around your face.',
    kicker: 'Hollywood Smile in Tirana, Albania',
    articleTitle: 'Hollywood Smile in Tirana: a complete smile makeover, designed for your face',
    intro: [
      'A Hollywood Smile is a complete aesthetic transformation of your smile. It is a set of restorations on the visible teeth, planned together so that shape, length, colour and proportions work as a single composition.',
      'That is exactly what separates a great result from an ordinary one. Every tooth can be technically well made, and yet the smile as a whole may not suit the person. The teeth need to relate to the lip line, the facial midline and the proportions of the face around them. That is why a smile makeover is first a planning job, and only then a laboratory job.',
      'At Veneer Clinic in Tirana, a smile makeover is usually completed within 3 to 5 days, in a single trip, with crowns and veneers made in Germany.',
    ],
    includesTitle: 'What a Hollywood Smile includes',
    includesIntro: 'Depending on your case, a complete smile makeover combines some of these treatments:',
    includes: [
      { title: 'Veneers', text: 'for structurally sound teeth that need aesthetic correction. This is our preferred solution whenever the clinical situation allows, because it preserves as much natural tooth as possible.' },
      { title: 'Zirconia crowns', text: 'for teeth that are heavily restored, root-treated or structurally weakened, where full coverage gives the strongest and longest-lasting result.' },
      { title: 'Professional whitening', text: 'of the teeth that are not covered, so restored and natural teeth share a similar shade.' },
      { title: 'Gum contouring', text: 'when the gum line is uneven or the smile shows more gum than you would like. A precise gum line is often what makes the result look natural. With us it is included free of charge in every Hollywood Smile.' },
      { title: 'Preparatory treatments', text: 'such as cleaning, fillings or other care, when the foundation needs attention first.' },
    ],
    includesNote:
      'The number of units varies from case to case. The visible smile zone usually covers the 8–10 upper teeth, but if your lower teeth show when you talk or laugh, treating both jaws keeps the result consistent.',
    vsTitle: 'Veneers or crowns: how we decide',
    vsIntro: 'Both have their place, and knowing which suits each tooth is one of the most useful things you learn at the consultation.',
    vs: [
      { title: 'A veneer', text: 'covers the front surface of the tooth and needs minimal preparation. When the tooth is healthy and has enough enamel for bonding, a veneer gives an excellent aesthetic result while preserving as much of your tooth as possible.' },
      { title: 'A crown', text: 'covers the tooth completely. It is the right choice when the tooth is root-treated, has large fillings, is cracked or lacks the enamel a veneer needs to bond reliably. In these cases full coverage is genuinely the most durable long-term restoration.' },
    ],
    vsApproach:
      'Our approach is to prepare conservatively and use veneers whenever the tooth allows. When a crown is better for a tooth, we explain why before we start. You receive a written plan showing, tooth by tooth, what will be placed, so you know exactly what you are getting before treatment begins.',
    candidatesTitle: 'Who is a good candidate?',
    candidatesIntro: 'A Hollywood Smile suits people whose goals involve the whole smile, not one or two teeth:',
    candidates: [
      { title: 'Widespread discolouration', text: 'that whitening cannot fix: internal staining, tetracycline bands or fluorosis.' },
      { title: 'Worn or shortened teeth,', text: 'often from years of grinding or acid erosion, where the smile has lost its length.' },
      { title: 'Several gaps or uneven spacing', text: 'along the arch.' },
      { title: 'Mixed old restorations:', text: 'crowns, bridges and fillings in different shades and materials.' },
      { title: 'Asymmetry between smile and face,', text: 'when the individual teeth are fine but the overall composition is not.' },
    ],
    candidatesNotes: [
      'Healthy gums and a stable bite are the foundation, and if either needs attention, we include it in the plan. Grinding is easily managed with the right choice of materials and a protective night guard.',
      'If your case is better solved with something simpler, such as whitening or treating only the two teeth that bother you, we will tell you at the consultation. A recommendation you can trust is worth more than a bigger treatment plan.',
    ],
    processTitle: 'How treatment works with us',
    process: [
      { title: 'Consultation.', text: 'At the first visit we talk about what you would like to change, look at your smile up close and take photos. We tell you how many units are likely to be needed and which will be veneers and which crowns.' },
      { title: 'Examination and planning.', text: 'A full clinical examination, a panoramic X-ray, and an assessment of your gums and bite. We confirm or adjust the plan based on what we find and agree with you on the shape, length and colour of your new smile before we begin.' },
      { title: 'Preparation.', text: 'Preparation is kept to the minimum each tooth needs. We then take detailed impressions and send them to the laboratory with the agreed shade, so your restorations are made for your case and not from a standard template.' },
      { title: 'Fabrication.', text: 'The restorations are made to these impressions and finished with the texture and shading that make ceramic look natural rather than uniform.' },
      { title: 'Try-in and fitting.', text: 'The restorations are tried in before final cementation so fit, colour and contour can be checked and refined. Once you are happy, they are bonded, the bite is adjusted and everything is polished.' },
    ],
    processNote: 'Most full cases are completed within 3 to 5 days, in a single trip.',
    whyTitle: 'Why Veneer Clinic',
    why: [
      { title: 'Conservative preparation.', text: 'We use veneers whenever the tooth allows, preserving as much natural structure as possible.' },
      { title: 'Made in Germany.', text: 'Our crowns and veneers are made from German-quality ceramics and zirconia, materials that are a benchmark in European cosmetic dentistry.' },
      { title: 'Written quote, unit by unit.', text: 'You know how many units, of what type and at what price before we start, and the quote does not change once you are in the chair.' },
      { title: 'Your smile agreed in advance.', text: 'Shape, length and colour are decided with you before treatment begins.' },
      { title: 'Aftercare.', text: 'You leave with written care instructions, and a direct contact number stays open for you: if anything comes up later, you can reach us.' },
    ],
    lastTitle: 'How long does a Hollywood Smile last?',
    last: [
      'With good bonding, healthy gums and ongoing care, quality ceramic work usually lasts ten to fifteen years, often longer. What extends its life is simple: daily brushing and cleaning between the teeth, regular professional cleanings, a night guard if you grind, and not using your teeth as tools.',
      'Ceramic holds its colour far better than composite. Coffee, wine and tobacco do not stain the restorations, while regular cleanings keep the gums and the untreated teeth around them in good condition.',
    ],
    stats: [
      { value: '3–5 days', label: 'Treatment time' },
      { value: '3', label: 'Appointments' },
      { value: '1', label: 'Trip' },
      { value: 'Written', label: 'Detailed quote' },
    ],
    priceTitle: 'Price per tooth',
    priceNote: 'Gum contouring included free of charge',
    whatTitle: 'What is a Hollywood Smile?',
    what: [
      'A Hollywood Smile is a fully personalised smile reconstruction that combines veneers, crowns and whitening in a single coordinated plan. Instead of treating each tooth separately, the whole smile is designed around your facial proportions, lip line and skin tone, so the final result looks balanced and natural rather than uniform.',
      'The process starts with a detailed consultation and choosing, together with you, the shape, length and colour of your new teeth. From there we combine veneers, crowns and whitening in the way that best suits your teeth and goals, prepare the teeth and send the impressions to the laboratory. At the final appointment, the definitive restorations are tried in, cemented, polished and checked against what we agreed.',
    ],
    calloutTitle: 'Agreed before we start',
    calloutText:
      'The shape, length and colour of your new smile are agreed with you before any tooth is prepared, and the restorations are tried in before cementation so fit and colour can still be refined.',
    materialsTitle: 'Which material is right for you?',
    materialsIntro: 'Your Hollywood Smile plan is built on one of these materials, all made in Germany:',
    materials: [
      { id: 'crown-emax', tag: 'Most natural', title: 'E.max veneers & crowns', text: 'A glass-ceramic valued for its natural translucency, ideal for front teeth where the natural passage of light matters most.' },
      { id: 'crown-zirconia', tag: 'Most durable', title: 'Zirconia crowns', text: 'Stronger and less prone to chipping, suitable when durability matters as much as appearance.' },
      { id: 'crown-porcelain', tag: 'Most economical', title: 'Porcelain crowns', text: 'Strong, proven metal-ceramic, a durable choice at a favourable price, especially for back teeth.' },
    ],
    fitTitle: 'Is a Hollywood Smile right for you?',
    fitIntro: 'A Hollywood Smile is designed for a complete transformation, not for fixing a single detail. It is worth considering if:',
    fit: [
      'You want a complete smile transformation, ready for any photo',
      'You have discolouration, gaps and uneven teeth at the same time',
      'You want the full result within a week, without stretching treatment over months',
      'You want to agree on shape, length and colour before committing',
    ],
    fitNote:
      'A Hollywood Smile is a significant and largely irreversible commitment on several teeth. If you are not sure how far to go, we start by agreeing on shape, length and colour with you before any tooth is prepared.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'A Hollywood Smile is usually completed within 3–5 days, over three appointments:',
    steps: [
      { title: 'Consultation', text: 'We talk about what you would like to change, look at your smile up close and take photos. We tell you how many units are likely to be needed.' },
      { title: 'Examination and planning', text: 'Full clinical examination, panoramic X-ray, gum and bite assessment. We confirm or adjust the plan and agree on shape, length and colour.' },
      { title: 'Preparation', text: 'Preparation is kept to the minimum each tooth needs. We then take detailed impressions and send them to the laboratory with the agreed shade.' },
      { title: 'Fabrication', text: 'The restorations are made to these impressions and finished with the texture and shading that make ceramic look natural rather than uniform.' },
      { title: 'Try-in and fitting', text: 'The restorations are tried in before cementation to refine fit, colour and contour. Once you are happy, they are bonded, the bite is adjusted and everything is polished.' },
    ],
    whyBandTitle: 'Why Veneer Clinic for a Hollywood Smile?',
    whyBandText:
      'A complete smile makeover is designed once, around your face and lip line, not tooth by tooth. Shape, length and colour are agreed with you before any preparation.',
    caseText: 'Smile improved with a Hollywood Smile',
    faq: [
      { question: 'Is a Hollywood Smile the same as veneers?', answer: 'Veneers are one part of it. A Hollywood Smile is a complete aesthetic plan that can combine veneers, crowns, whitening and gum contouring, designed as a single result rather than tooth by tooth.' },
      { question: 'How many teeth are usually treated?', answer: 'Most often the 8–10 upper teeth that show when you smile. If your lower teeth show when you talk or laugh, treating both jaws keeps everything consistent. Your plan shows the exact number.' },
      { question: 'Does it hurt?', answer: 'Preparation is done under local anaesthesia. Mild sensitivity between preparation and final fitting is normal and passes once the restorations are placed.' },
      { question: 'How white should I go?', answer: 'The choice is yours and is agreed before we start. We give you an honest opinion on what will look natural with your skin tone and features: most patients choose one or two shades below the whitest.' },
      { question: 'Will it look natural?', answer: 'It depends on planning and craftsmanship: proportions that suit your face, a precise gum line and ceramic finished with the texture and shading of natural teeth. This is where we spend the most time.' },
      { question: 'How long does treatment take?', answer: 'Three to five days for most full cases, over three appointments and a single trip. We give you the exact schedule together with the treatment plan, so you can plan your stay with peace of mind.' },
      { question: 'Is the treatment permanent?', answer: 'Yes. Once the teeth are prepared, restorations are replaced at the end of their life, not removed. That is why we plan carefully and prepare conservatively, so the foundation stays as strong as possible in the long term.' },
      { question: 'How much does a Hollywood Smile cost?', answer: 'The price depends on the material and number of teeth: porcelain crown €100, zirconia crown €200 and E.max €300 per tooth. Gum contouring is included free of charge. Send us a panoramic X-ray and we will give you a quote with about 90% accuracy.' },
      { question: 'What happens after treatment is finished?', answer: 'You leave with written care instructions and a contact number that stays open for you. If anything comes up, call us and we will advise you directly. Regular check-ups and cleanings keep your smile healthy for years.' },
    ],
  },
  de: {
    eyebrow: 'Ästhetik · Albanien',
    subtitle:
      'Komplette Lächeln-Neugestaltung in Tirana. Veneers, Kronen und Bleaching, abgestimmt auf Ihr Gesicht, für ein strahlendes und harmonisches Ergebnis.',
    lead: 'Veneers, Bleaching und Kronen in einer einzigen Lächeln-Rekonstruktion vereint, vollständig rund um Ihr Gesicht geplant.',
    kicker: 'Hollywood Smile in Tirana, Albanien',
    articleTitle: 'Hollywood Smile in Tirana: eine komplette Lächeln-Neugestaltung, entworfen für Ihr Gesicht',
    intro: [
      'Ein Hollywood Smile ist eine vollständige ästhetische Verwandlung Ihres Lächelns. Es handelt sich um eine Reihe von Restaurationen an den sichtbaren Zähnen, die gemeinsam geplant werden, damit Form, Länge, Farbe und Proportionen als eine einzige Komposition wirken.',
      'Genau das unterscheidet ein großartiges Ergebnis von einem gewöhnlichen. Jeder Zahn kann technisch gut gearbeitet sein, und trotzdem passt das Lächeln als Ganzes nicht zur Person. Die Zähne müssen zur Lippenlinie, zur Gesichtsmitte und zu den Proportionen des Gesichts passen. Deshalb ist eine Lächeln-Neugestaltung zuerst Planungsarbeit und erst danach Laborarbeit.',
      'In der Veneer Clinic in Tirana ist die Lächeln-Neugestaltung meist innerhalb von 3 bis 5 Tagen abgeschlossen, mit nur einer Reise und mit Kronen und Veneers Made in Germany.',
    ],
    includesTitle: 'Was ein Hollywood Smile umfasst',
    includesIntro: 'Je nach Ihrem Fall kombiniert eine komplette Lächeln-Neugestaltung einige dieser Behandlungen:',
    includes: [
      { title: 'Veneers', text: 'für strukturell gesunde Zähne, die eine ästhetische Korrektur brauchen. Das ist unsere bevorzugte Lösung, wann immer die klinische Situation es erlaubt, weil sie so viel natürliche Zahnsubstanz wie möglich erhält.' },
      { title: 'Zirkonkronen', text: 'für stark restaurierte, wurzelbehandelte oder strukturell geschwächte Zähne, bei denen eine vollständige Überkronung das stabilste und langlebigste Ergebnis liefert.' },
      { title: 'Professionelles Bleaching', text: 'der Zähne, die nicht versorgt werden, damit restaurierte und natürliche Zähne einen ähnlichen Farbton haben.' },
      { title: 'Zahnfleischkonturierung', text: 'wenn der Zahnfleischverlauf unregelmäßig ist oder beim Lächeln mehr Zahnfleisch sichtbar ist, als Ihnen lieb ist. Eine präzise Zahnfleischlinie lässt das Ergebnis oft erst natürlich wirken. Bei uns ist sie in jedem Hollywood Smile kostenlos inbegriffen.' },
      { title: 'Vorbehandlungen', text: 'wie Reinigung, Füllungen oder andere Maßnahmen, wenn die Basis zuerst Aufmerksamkeit braucht.' },
    ],
    includesNote:
      'Die Anzahl der Einheiten ist von Fall zu Fall verschieden. Die sichtbare Lächelzone umfasst meist die 8–10 oberen Zähne. Sind beim Sprechen oder Lachen auch die unteren Zähne sichtbar, sorgt die Behandlung beider Kiefer für ein einheitliches Ergebnis.',
    vsTitle: 'Veneers oder Kronen: wie wir entscheiden',
    vsIntro: 'Beide haben ihren Platz, und zu wissen, was zu welchem Zahn passt, gehört zu den wertvollsten Informationen aus der Beratung.',
    vs: [
      { title: 'Ein Veneer', text: 'bedeckt die Vorderseite des Zahns und erfordert nur minimale Präparation. Ist der Zahn gesund und hat genug Schmelz zum Kleben, liefert ein Veneer ein hervorragendes ästhetisches Ergebnis und erhält so viel von Ihrem Zahn wie möglich.' },
      { title: 'Eine Krone', text: 'umschließt den Zahn vollständig. Sie ist die richtige Wahl, wenn der Zahn wurzelbehandelt ist, große Füllungen hat, gerissen ist oder nicht genug Schmelz für eine zuverlässige Veneer-Klebung bietet. In diesen Fällen ist die vollständige Überkronung tatsächlich die langfristig stabilste Versorgung.' },
    ],
    vsApproach:
      'Unser Ansatz: substanzschonend präparieren und Veneers verwenden, wann immer der Zahn es erlaubt. Ist für einen Zahn eine Krone besser, erklären wir Ihnen das vor Beginn. Sie erhalten einen schriftlichen Plan, der Zahn für Zahn zeigt, was eingesetzt wird, damit Sie genau wissen, was Sie bekommen, bevor die Behandlung beginnt.',
    candidatesTitle: 'Wer ist ein guter Kandidat?',
    candidatesIntro: 'Ein Hollywood Smile passt zu Menschen, deren Ziele das ganze Lächeln betreffen, nicht ein oder zwei Zähne:',
    candidates: [
      { title: 'Ausgedehnte Verfärbungen,', text: 'die Bleaching nicht korrigiert: innere Verfärbungen, Tetrazyklin-Streifen oder Fluorose.' },
      { title: 'Abgenutzte oder verkürzte Zähne,', text: 'oft nach Jahren des Knirschens oder durch Säureerosion, sodass das Lächeln an Länge verloren hat.' },
      { title: 'Mehrere Lücken oder ungleichmäßige Abstände', text: 'entlang des Zahnbogens.' },
      { title: 'Unterschiedliche alte Restaurationen:', text: 'Kronen, Brücken und Füllungen in verschiedenen Farben und Materialien.' },
      { title: 'Asymmetrie zwischen Lächeln und Gesicht,', text: 'wenn die einzelnen Zähne in Ordnung sind, die Gesamtkomposition aber nicht.' },
    ],
    candidatesNotes: [
      'Gesundes Zahnfleisch und ein stabiler Biss sind das Fundament. Braucht eines davon Aufmerksamkeit, nehmen wir es in den Plan auf. Zähneknirschen lässt sich mit der richtigen Materialwahl und einer Schutzschiene für die Nacht gut beherrschen.',
      'Lässt sich Ihr Fall besser mit etwas Einfacherem lösen, etwa mit Bleaching oder der Behandlung nur der zwei Zähne, die Sie stören, sagen wir Ihnen das in der Beratung. Eine Empfehlung, der Sie vertrauen können, ist mehr wert als ein größerer Behandlungsplan.',
    ],
    processTitle: 'So läuft die Behandlung bei uns ab',
    process: [
      { title: 'Beratung.', text: 'Beim ersten Termin sprechen wir darüber, was Sie ändern möchten, sehen uns Ihr Lächeln aus der Nähe an und machen Fotos. Wir sagen Ihnen, wie viele Einheiten voraussichtlich nötig sind und welche davon Veneers und welche Kronen werden.' },
      { title: 'Untersuchung und Planung.', text: 'Eine vollständige klinische Untersuchung, ein Panorama-Röntgenbild sowie die Beurteilung von Zahnfleisch und Biss. Wir bestätigen oder passen den Plan an und stimmen Form, Länge und Farbe Ihres neuen Lächelns mit Ihnen ab, bevor wir beginnen.' },
      { title: 'Präparation.', text: 'Die Präparation wird auf das Minimum beschränkt, das jeder Zahn braucht. Danach nehmen wir detaillierte Abdrücke und senden sie mit dem vereinbarten Farbton ins Labor, damit Ihre Restaurationen für Ihren Fall gefertigt werden und nicht nach Schablone.' },
      { title: 'Fertigung.', text: 'Die Restaurationen werden nach diesen Abdrücken gefertigt und mit der Textur und Farbgebung vollendet, die Keramik natürlich statt uniform wirken lässt.' },
      { title: 'Anprobe und Einsetzen.', text: 'Die Restaurationen werden vor der endgültigen Befestigung anprobiert, damit Passform, Farbe und Kontur geprüft und verfeinert werden können. Sind Sie zufrieden, werden sie verklebt, der Biss wird eingestellt und alles poliert.' },
    ],
    processNote: 'Die meisten vollständigen Fälle sind innerhalb von 3 bis 5 Tagen mit nur einer Reise abgeschlossen.',
    whyTitle: 'Warum Veneer Clinic',
    why: [
      { title: 'Substanzschonende Präparation.', text: 'Wir verwenden Veneers, wann immer der Zahn es erlaubt, und erhalten so viel natürliche Struktur wie möglich.' },
      { title: 'Made in Germany.', text: 'Unsere Kronen und Veneers werden aus Keramik und Zirkon in deutscher Qualität gefertigt, Materialien, die in der europäischen ästhetischen Zahnmedizin als Referenz gelten.' },
      { title: 'Schriftliches Angebot, Einheit für Einheit.', text: 'Sie wissen vor Beginn, wie viele Einheiten welcher Art zu welchem Preis, und das Angebot ändert sich nicht, wenn Sie auf dem Stuhl sitzen.' },
      { title: 'Ihr Lächeln vorab abgestimmt.', text: 'Form, Länge und Farbe werden vor Behandlungsbeginn mit Ihnen festgelegt.' },
      { title: 'Nachsorge.', text: 'Sie erhalten schriftliche Pflegehinweise, und eine direkte Kontaktnummer bleibt für Sie erreichbar: Sollte später etwas auftreten, können Sie uns jederzeit kontaktieren.' },
    ],
    lastTitle: 'Wie lange hält ein Hollywood Smile?',
    last: [
      'Mit guter Verklebung, gesundem Zahnfleisch und regelmäßiger Pflege halten hochwertige Keramikarbeiten in der Regel zehn bis fünfzehn Jahre, oft länger. Was ihre Lebensdauer verlängert, ist einfach: tägliches Putzen und Reinigen der Zahnzwischenräume, regelmäßige professionelle Reinigungen, eine Nachtschiene bei Knirschen und die Zähne nicht als Werkzeug zu benutzen.',
      'Keramik behält ihre Farbe viel besser als Komposit. Kaffee, Wein und Tabak verfärben die Restaurationen nicht, und regelmäßige Reinigungen halten Zahnfleisch und die umliegenden unbehandelten Zähne in gutem Zustand.',
    ],
    stats: [
      { value: '3–5 Tage', label: 'Behandlungsdauer' },
      { value: '3', label: 'Termine' },
      { value: '1', label: 'Reise' },
      { value: 'Schriftlich', label: 'Detailliertes Angebot' },
    ],
    priceTitle: 'Preis pro Zahn',
    priceNote: 'Zahnfleischkonturierung kostenlos inbegriffen',
    whatTitle: 'Was ist ein Hollywood Smile?',
    what: [
      'Ein Hollywood Smile ist eine vollständig individuelle Lächeln-Rekonstruktion, die Veneers, Kronen und Bleaching in einem einzigen abgestimmten Plan vereint. Statt jeden Zahn einzeln zu behandeln, wird das ganze Lächeln nach Ihren Gesichtsproportionen, Ihrer Lippenlinie und Ihrem Hautton gestaltet, damit das Endergebnis harmonisch und natürlich statt uniform wirkt.',
      'Der Ablauf beginnt mit einer ausführlichen Beratung und der gemeinsamen Wahl von Form, Länge und Farbe Ihrer neuen Zähne. Danach kombinieren wir Veneers, Kronen und Bleaching so, wie es am besten zu Ihren Zähnen und Zielen passt, präparieren die Zähne und senden die Abdrücke ins Labor. Beim letzten Termin werden die endgültigen Restaurationen anprobiert, befestigt, poliert und mit dem Vereinbarten abgeglichen.',
    ],
    calloutTitle: 'Vereinbart, bevor wir beginnen',
    calloutText:
      'Form, Länge und Farbe Ihres neuen Lächelns werden mit Ihnen abgestimmt, bevor ein Zahn präpariert wird, und die Restaurationen werden vor der Befestigung anprobiert, damit Passform und Farbe noch verfeinert werden können.',
    materialsTitle: 'Welches Material passt zu Ihnen?',
    materialsIntro: 'Ihr Hollywood-Smile-Plan basiert auf einem dieser Materialien, alle Made in Germany:',
    materials: [
      { id: 'crown-emax', tag: 'Am natürlichsten', title: 'E.max Veneers & Kronen', text: 'Eine Glaskeramik, geschätzt für ihre natürliche Transluzenz, ideal für Frontzähne, bei denen der natürliche Lichtdurchgang am wichtigsten ist.' },
      { id: 'crown-zirconia', tag: 'Am langlebigsten', title: 'Zirkonkronen', text: 'Stärker und weniger anfällig für Absplitterungen, geeignet, wenn Haltbarkeit genauso wichtig ist wie das Aussehen.' },
      { id: 'crown-porcelain', tag: 'Am preiswertesten', title: 'Porzellankronen', text: 'Stabile, bewährte Metallkeramik, eine langlebige Wahl zu einem günstigen Preis, besonders für Seitenzähne.' },
    ],
    fitTitle: 'Ist ein Hollywood Smile das Richtige für Sie?',
    fitIntro: 'Ein Hollywood Smile ist für eine komplette Verwandlung gedacht, nicht für die Korrektur eines einzelnen Details. Es lohnt sich, wenn:',
    fit: [
      'Sie eine komplette Lächeln-Verwandlung möchten, bereit für jedes Foto',
      'Sie gleichzeitig Verfärbungen, Lücken und unregelmäßige Zähne haben',
      'Sie das komplette Ergebnis innerhalb einer Woche möchten, ohne die Behandlung über Monate zu strecken',
      'Sie Form, Länge und Farbe festlegen möchten, bevor Sie sich entscheiden',
    ],
    fitNote:
      'Ein Hollywood Smile ist eine bedeutende und weitgehend unumkehrbare Entscheidung für mehrere Zähne. Wenn Sie nicht sicher sind, wie weit Sie gehen möchten, stimmen wir zuerst Form, Länge und Farbe mit Ihnen ab, bevor ein Zahn präpariert wird.',
    stepsTitle: 'So funktioniert die Behandlung',
    stepsIntro: 'Ein Hollywood Smile ist meist innerhalb von 3–5 Tagen in drei Terminen abgeschlossen:',
    steps: [
      { title: 'Beratung', text: 'Wir sprechen darüber, was Sie ändern möchten, sehen uns Ihr Lächeln aus der Nähe an und machen Fotos. Wir sagen Ihnen, wie viele Einheiten voraussichtlich nötig sind.' },
      { title: 'Untersuchung und Planung', text: 'Vollständige klinische Untersuchung, Panorama-Röntgenbild, Beurteilung von Zahnfleisch und Biss. Wir bestätigen oder passen den Plan an und legen Form, Länge und Farbe fest.' },
      { title: 'Präparation', text: 'Die Präparation wird auf das nötige Minimum je Zahn beschränkt. Danach nehmen wir detaillierte Abdrücke und senden sie mit dem vereinbarten Farbton ins Labor.' },
      { title: 'Fertigung', text: 'Die Restaurationen werden nach diesen Abdrücken gefertigt und mit Textur und Farbgebung vollendet, die Keramik natürlich statt uniform wirken lässt.' },
      { title: 'Anprobe und Einsetzen', text: 'Die Restaurationen werden vor der Befestigung anprobiert, um Passform, Farbe und Kontur zu verfeinern. Sind Sie zufrieden, werden sie verklebt, der Biss eingestellt und alles poliert.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für Ihr Hollywood Smile?',
    whyBandText:
      'Eine komplette Lächeln-Neugestaltung wird einmal entworfen, rund um Ihr Gesicht und Ihre Lippenlinie, nicht Zahn für Zahn. Form, Länge und Farbe werden vor jeder Präparation mit Ihnen abgestimmt.',
    caseText: 'Lächeln verbessert mit einem Hollywood Smile',
    faq: [
      { question: 'Ist ein Hollywood Smile dasselbe wie Veneers?', answer: 'Veneers sind ein Teil davon. Ein Hollywood Smile ist ein kompletter ästhetischer Plan, der Veneers, Kronen, Bleaching und Zahnfleischkonturierung kombinieren kann, als ein einziges Ergebnis gestaltet und nicht Zahn für Zahn.' },
      { question: 'Wie viele Zähne werden normalerweise behandelt?', answer: 'Meist die 8–10 oberen Zähne, die beim Lächeln sichtbar sind. Sind beim Sprechen oder Lachen auch die unteren Zähne sichtbar, sorgt die Behandlung beider Kiefer für ein einheitliches Bild. Ihr Plan nennt die genaue Anzahl.' },
      { question: 'Tut es weh?', answer: 'Die Präparation erfolgt unter örtlicher Betäubung. Eine leichte Empfindlichkeit zwischen Präparation und endgültigem Einsetzen ist normal und vergeht, sobald die Restaurationen eingesetzt sind.' },
      { question: 'Wie weiß sollen die Zähne werden?', answer: 'Die Wahl liegt bei Ihnen und wird vor Beginn festgelegt. Wir sagen Ihnen ehrlich, was zu Ihrem Hautton und Ihren Gesichtszügen natürlich wirkt: Die meisten Patienten wählen ein oder zwei Nuancen unter dem hellsten Ton.' },
      { question: 'Wird es natürlich aussehen?', answer: 'Das hängt von Planung und Handwerk ab: Proportionen, die zu Ihrem Gesicht passen, eine präzise Zahnfleischlinie und Keramik mit der Textur und Farbgebung natürlicher Zähne. Genau darauf verwenden wir die meiste Zeit.' },
      { question: 'Wie lange dauert die Behandlung?', answer: 'Drei bis fünf Tage für die meisten vollständigen Fälle, in drei Terminen und mit nur einer Reise. Den genauen Zeitplan erhalten Sie zusammen mit dem Behandlungsplan, damit Sie Ihren Aufenthalt in Ruhe planen können.' },
      { question: 'Ist die Behandlung dauerhaft?', answer: 'Ja. Sind die Zähne einmal präpariert, werden Restaurationen am Ende ihrer Lebensdauer ersetzt, nicht entfernt. Deshalb planen wir sorgfältig und präparieren substanzschonend, damit das Fundament langfristig so stark wie möglich bleibt.' },
      { question: 'Was kostet ein Hollywood Smile?', answer: 'Der Preis hängt von Material und Anzahl der Zähne ab: Porzellankrone 100 €, Zirkonkrone 200 € und E.max 300 € pro Zahn. Die Zahnfleischkonturierung ist kostenlos inbegriffen. Senden Sie uns ein Panorama-Röntgenbild, und Sie erhalten ein Angebot mit etwa 90 % Genauigkeit.' },
      { question: 'Was passiert nach Abschluss der Behandlung?', answer: 'Sie erhalten schriftliche Pflegehinweise und eine Kontaktnummer, die für Sie erreichbar bleibt. Sollte etwas auftreten, rufen Sie uns an und wir beraten Sie direkt. Regelmäßige Kontrollen und Reinigungen halten Ihr Lächeln über Jahre gesund.' },
    ],
  },
  it: {
    eyebrow: 'Estetica · Albania',
    subtitle:
      'Rifacimento completo del sorriso a Tirana. Faccette, corone e sbiancamento pianificati sul tuo viso, per un risultato luminoso ed equilibrato.',
    lead: 'Faccette, sbiancamento e corone riuniti in un’unica ricostruzione del sorriso, pianificata interamente attorno al tuo viso.',
    kicker: 'Hollywood Smile a Tirana, Albania',
    articleTitle: 'Hollywood Smile a Tirana: un rifacimento completo del sorriso, pensato per il tuo viso',
    intro: [
      'L’Hollywood Smile è una trasformazione estetica completa del sorriso. Si tratta di un insieme di restauri sui denti visibili, pianificati insieme affinché forma, lunghezza, colore e proporzioni funzionino come un’unica composizione.',
      'È proprio questo che distingue un ottimo risultato da uno ordinario. Ogni dente può essere tecnicamente ben realizzato, eppure il sorriso nel suo insieme può non adattarsi alla persona. I denti devono armonizzarsi con la linea delle labbra, la linea mediana del viso e le proporzioni del volto. Per questo un rifacimento del sorriso è prima di tutto un lavoro di pianificazione, e solo dopo un lavoro di laboratorio.',
      'Alla Veneer Clinic di Tirana, il rifacimento del sorriso si conclude di solito in 3–5 giorni, con un solo viaggio, con corone e faccette Made in Germany.',
    ],
    includesTitle: 'Cosa comprende un Hollywood Smile',
    includesIntro: 'A seconda del tuo caso, un rifacimento completo del sorriso combina alcuni di questi trattamenti:',
    includes: [
      { title: 'Faccette', text: 'per denti strutturalmente sani che necessitano di una correzione estetica. È la nostra soluzione preferita ogni volta che la situazione clinica lo consente, perché preserva il più possibile il dente naturale.' },
      { title: 'Corone in zirconia', text: 'per denti molto restaurati, devitalizzati o strutturalmente indeboliti, dove la copertura completa offre il risultato più solido e duraturo.' },
      { title: 'Sbiancamento professionale', text: 'dei denti che non vengono rivestiti, affinché denti restaurati e naturali abbiano tonalità simili.' },
      { title: 'Modellamento gengivale', text: 'quando la linea gengivale è irregolare o il sorriso mostra più gengiva di quanto desideri. Una linea gengivale precisa è spesso ciò che rende il risultato naturale. Da noi è incluso gratuitamente in ogni Hollywood Smile.' },
      { title: 'Trattamenti preliminari', text: 'come igiene, otturazioni o altre cure, quando la base ha bisogno di attenzione prima.' },
    ],
    includesNote:
      'Il numero di elementi varia da caso a caso. La zona visibile del sorriso comprende di solito gli 8–10 denti superiori, ma se i denti inferiori si vedono quando parli o ridi, trattare entrambe le arcate mantiene il risultato uniforme.',
    vsTitle: 'Faccette o corone: come decidiamo',
    vsIntro: 'Entrambe hanno il loro ruolo, e sapere quale si adatta a ciascun dente è una delle informazioni più utili che ricevi durante la consulenza.',
    vs: [
      { title: 'Una faccetta', text: 'copre la superficie anteriore del dente e richiede una preparazione minima. Quando il dente è sano e ha smalto sufficiente per l’adesione, la faccetta offre un risultato estetico eccellente preservando il più possibile il tuo dente.' },
      { title: 'Una corona', text: 'riveste completamente il dente. È la scelta giusta quando il dente è devitalizzato, ha grandi otturazioni, è incrinato o non ha lo smalto necessario perché una faccetta aderisca in modo affidabile. In questi casi la copertura completa è davvero il restauro più duraturo nel lungo periodo.' },
    ],
    vsApproach:
      'Il nostro approccio è preparare in modo conservativo e usare faccette ogni volta che il dente lo consente. Quando per un dente è meglio una corona, te lo spieghiamo prima di iniziare. Ricevi un piano scritto che indica, dente per dente, cosa verrà applicato, così sai esattamente cosa riceverai prima che inizi il trattamento.',
    candidatesTitle: 'Chi è un buon candidato?',
    candidatesIntro: 'L’Hollywood Smile è adatto a chi ha obiettivi che riguardano l’intero sorriso, non uno o due denti:',
    candidates: [
      { title: 'Discromie diffuse', text: 'che lo sbiancamento non corregge: colorazioni interne, bande da tetraciclina o fluorosi.' },
      { title: 'Denti consumati o accorciati,', text: 'spesso dopo anni di bruxismo o erosione acida, quando il sorriso ha perso la sua lunghezza.' },
      { title: 'Diversi spazi o distribuzione irregolare', text: 'lungo l’arcata.' },
      { title: 'Vecchi restauri diversi tra loro:', text: 'corone, ponti e otturazioni di colori e materiali differenti.' },
      { title: 'Asimmetria tra sorriso e viso,', text: 'quando i singoli denti vanno bene ma la composizione complessiva no.' },
    ],
    candidatesNotes: [
      'Gengive sane e un morso stabile sono la base, e se uno dei due richiede attenzione lo includiamo nel piano. Il bruxismo si gestisce facilmente con la scelta dei materiali giusti e un bite notturno di protezione.',
      'Se il tuo caso si risolve meglio con qualcosa di più semplice, come uno sbiancamento o trattando solo i due denti che ti danno fastidio, te lo diciamo durante la consulenza. Una raccomandazione di cui puoi fidarti vale più di un piano di trattamento più grande.',
    ],
    processTitle: 'Come funziona il trattamento da noi',
    process: [
      { title: 'Consulenza.', text: 'Alla prima visita parliamo di cosa vorresti cambiare, osserviamo il tuo sorriso da vicino e scattiamo delle foto. Ti diciamo quanti elementi saranno probabilmente necessari e quali saranno faccette e quali corone.' },
      { title: 'Esame e pianificazione.', text: 'Un esame clinico completo, una radiografia panoramica e la valutazione di gengive e morso. Confermiamo o adattiamo il piano in base a ciò che troviamo e concordiamo con te forma, lunghezza e colore del nuovo sorriso prima di iniziare.' },
      { title: 'Preparazione.', text: 'La preparazione è ridotta al minimo necessario per ogni dente. Poi prendiamo impronte dettagliate e le inviamo al laboratorio insieme al colore concordato, così i restauri vengono realizzati per il tuo caso e non su un modello standard.' },
      { title: 'Realizzazione.', text: 'I restauri vengono realizzati su queste impronte e rifiniti con la texture e le sfumature che rendono la ceramica naturale e non uniforme.' },
      { title: 'Prova e applicazione.', text: 'I restauri vengono provati prima della cementazione definitiva, così adattamento, colore e contorno possono essere controllati e perfezionati. Quando sei soddisfatto, vengono cementati, il morso viene regolato e tutto viene lucidato.' },
    ],
    processNote: 'La maggior parte dei casi completi si conclude in 3–5 giorni, con un solo viaggio.',
    whyTitle: 'Perché Veneer Clinic',
    why: [
      { title: 'Preparazione conservativa.', text: 'Usiamo faccette ogni volta che il dente lo consente, preservando il più possibile la struttura naturale.' },
      { title: 'Made in Germany.', text: 'Le nostre corone e faccette sono realizzate con ceramiche e zirconia di qualità tedesca, materiali di riferimento nell’odontoiatria estetica europea.' },
      { title: 'Preventivo scritto, elemento per elemento.', text: 'Sai quanti elementi, di che tipo e a quale prezzo prima di iniziare, e il preventivo non cambia una volta seduto sulla poltrona.' },
      { title: 'Il tuo sorriso concordato in anticipo.', text: 'Forma, lunghezza e colore vengono decisi con te prima dell’inizio del trattamento.' },
      { title: 'Assistenza dopo il trattamento.', text: 'Riparti con istruzioni scritte per la cura e un numero di contatto diretto sempre disponibile: se qualcosa dovesse emergere in seguito, puoi contattarci.' },
    ],
    lastTitle: 'Quanto dura un Hollywood Smile?',
    last: [
      'Con una buona adesione, gengive sane e cure costanti, i lavori in ceramica di qualità durano di solito dai dieci ai quindici anni, spesso di più. Ciò che ne allunga la vita è semplice: spazzolamento quotidiano e pulizia tra i denti, igiene professionale regolare, un bite notturno se digrigni i denti e non usare i denti come attrezzi.',
      'La ceramica mantiene il colore molto meglio del composito. Caffè, vino e tabacco non macchiano i restauri, mentre l’igiene regolare mantiene in buone condizioni le gengive e i denti non trattati circostanti.',
    ],
    stats: [
      { value: '3–5 giorni', label: 'Durata del trattamento' },
      { value: '3', label: 'Appuntamenti' },
      { value: '1', label: 'Viaggio' },
      { value: 'Scritto', label: 'Preventivo dettagliato' },
    ],
    priceTitle: 'Prezzo per dente',
    priceNote: 'Modellamento gengivale incluso gratuitamente',
    whatTitle: 'Cos’è l’Hollywood Smile?',
    what: [
      'L’Hollywood Smile è una ricostruzione del sorriso completamente personalizzata, che combina faccette, corone e sbiancamento in un unico piano coordinato. Invece di trattare ogni dente separatamente, l’intero sorriso viene progettato in base alle proporzioni del viso, alla linea delle labbra e al tono della pelle, affinché il risultato finale appaia equilibrato e naturale, non uniforme.',
      'Il percorso inizia con una consulenza approfondita e con la scelta, insieme a te, di forma, lunghezza e colore dei nuovi denti. Da lì combiniamo faccette, corone e sbiancamento nel modo più adatto ai tuoi denti e ai tuoi obiettivi, prepariamo i denti e inviamo le impronte al laboratorio. All’ultimo appuntamento i restauri definitivi vengono provati, cementati, lucidati e verificati rispetto a quanto concordato.',
    ],
    calloutTitle: 'Concordato prima di iniziare',
    calloutText:
      'Forma, lunghezza e colore del nuovo sorriso vengono concordati con te prima di preparare qualsiasi dente, e i restauri vengono provati prima della cementazione, così adattamento e colore possono ancora essere perfezionati.',
    materialsTitle: 'Quale materiale è giusto per te?',
    materialsIntro: 'Il tuo piano Hollywood Smile si basa su uno di questi materiali, tutti Made in Germany:',
    materials: [
      { id: 'crown-emax', tag: 'Il più naturale', title: 'Faccette e corone E.max', text: 'Una vetroceramica apprezzata per la sua traslucenza naturale, ideale per i denti anteriori, dove il passaggio naturale della luce conta di più.' },
      { id: 'crown-zirconia', tag: 'Il più resistente', title: 'Corone in zirconia', text: 'Più forti e meno soggette a scheggiature, adatte quando la resistenza conta quanto l’estetica.' },
      { id: 'crown-porcelain', tag: 'Il più economico', title: 'Corone in porcellana', text: 'Metallo-ceramica robusta e collaudata, una scelta durevole a un prezzo vantaggioso, soprattutto per i denti posteriori.' },
    ],
    fitTitle: 'L’Hollywood Smile è giusto per te?',
    fitIntro: 'L’Hollywood Smile è pensato per una trasformazione completa, non per correggere un singolo dettaglio. Vale la pena considerarlo se:',
    fit: [
      'Desideri una trasformazione completa del sorriso, pronta per qualsiasi foto',
      'Hai contemporaneamente discromie, spazi e denti irregolari',
      'Vuoi il risultato completo entro una settimana, senza prolungare il trattamento per mesi',
      'Vuoi concordare forma, lunghezza e colore prima di impegnarti',
    ],
    fitNote:
      'L’Hollywood Smile è un impegno importante e in gran parte irreversibile su più denti. Se non sei sicuro di quanto spingerti, iniziamo concordando con te forma, lunghezza e colore prima di preparare qualsiasi dente.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'Un Hollywood Smile si conclude di solito in 3–5 giorni, in tre appuntamenti:',
    steps: [
      { title: 'Consulenza', text: 'Parliamo di cosa vorresti cambiare, osserviamo il tuo sorriso da vicino e scattiamo delle foto. Ti diciamo quanti elementi saranno probabilmente necessari.' },
      { title: 'Esame e pianificazione', text: 'Esame clinico completo, radiografia panoramica, valutazione di gengive e morso. Confermiamo o adattiamo il piano e concordiamo forma, lunghezza e colore.' },
      { title: 'Preparazione', text: 'La preparazione è ridotta al minimo necessario per ogni dente. Poi prendiamo impronte dettagliate e le inviamo al laboratorio con il colore concordato.' },
      { title: 'Realizzazione', text: 'I restauri vengono realizzati su queste impronte e rifiniti con la texture e le sfumature che rendono la ceramica naturale e non uniforme.' },
      { title: 'Prova e applicazione', text: 'I restauri vengono provati prima della cementazione per perfezionare adattamento, colore e contorno. Quando sei soddisfatto, vengono cementati, il morso viene regolato e tutto viene lucidato.' },
    ],
    whyBandTitle: 'Perché Veneer Clinic per l’Hollywood Smile?',
    whyBandText:
      'Un rifacimento completo del sorriso si progetta una sola volta, attorno al tuo viso e alla linea delle labbra, non dente per dente. Forma, lunghezza e colore vengono concordati con te prima di ogni preparazione.',
    caseText: 'Sorriso migliorato con l’Hollywood Smile',
    faq: [
      { question: 'L’Hollywood Smile è la stessa cosa delle faccette?', answer: 'Le faccette ne sono una parte. L’Hollywood Smile è un piano estetico completo che può combinare faccette, corone, sbiancamento e modellamento gengivale, progettati come un unico risultato e non dente per dente.' },
      { question: 'Quanti denti vengono trattati di solito?', answer: 'Più spesso gli 8–10 denti superiori visibili quando sorridi. Se i denti inferiori si vedono quando parli o ridi, trattare entrambe le arcate mantiene tutto uniforme. Il tuo piano indica il numero esatto.' },
      { question: 'Fa male?', answer: 'La preparazione viene eseguita in anestesia locale. Una lieve sensibilità tra la preparazione e l’applicazione definitiva è normale e scompare una volta applicati i restauri.' },
      { question: 'Quanto bianchi sceglierli?', answer: 'La scelta è tua e viene concordata prima di iniziare. Ti diamo un parere sincero su cosa apparirà naturale con il tuo tono di pelle e i tuoi lineamenti: la maggior parte dei pazienti sceglie una o due tonalità sotto la più bianca.' },
      { question: 'Sembrerà naturale?', answer: 'Dipende dalla pianificazione e dall’abilità artigianale: proporzioni adatte al tuo viso, una linea gengivale precisa e ceramica rifinita con la texture e le sfumature dei denti naturali. È qui che dedichiamo più tempo.' },
      { question: 'Quanto dura il trattamento?', answer: 'Da tre a cinque giorni per la maggior parte dei casi completi, in tre appuntamenti e con un solo viaggio. Ti forniamo il calendario esatto insieme al piano di trattamento, così puoi organizzare il soggiorno con serenità.' },
      { question: 'Il trattamento è permanente?', answer: 'Sì. Una volta preparati i denti, i restauri vengono sostituiti alla fine della loro vita, non rimossi. Per questo pianifichiamo con cura e prepariamo in modo conservativo, affinché la base resti il più solida possibile nel lungo periodo.' },
      { question: 'Quanto costa un Hollywood Smile?', answer: 'Il prezzo dipende dal materiale e dal numero di denti: corona in porcellana 100 €, corona in zirconia 200 € ed E.max 300 € per dente. Il modellamento gengivale è incluso gratuitamente. Inviaci una radiografia panoramica e ti daremo un preventivo con circa il 90% di precisione.' },
      { question: 'Cosa succede dopo la fine del trattamento?', answer: 'Riparti con istruzioni scritte per la cura e un numero di contatto sempre disponibile. Se dovesse emergere qualcosa, chiamaci e ti consiglieremo direttamente. Controlli e igiene regolari mantengono il sorriso sano per anni.' },
    ],
  },
};


function toArticle(c: Copy): TreatmentArticleContent {
  return {
    name: 'Hollywood Smile',
    eyebrow: c.eyebrow,
    subtitle: c.subtitle,
    lead: c.lead,
    kicker: c.kicker,
    articleTitle: c.articleTitle,
    intro: c.intro,
    sections: [
      { title: c.includesTitle, intro: [c.includesIntro], points: c.includes, outro: [c.includesNote] },
      { title: c.vsTitle, intro: [c.vsIntro], cards: c.vs, outro: [c.vsApproach] },
      { title: c.candidatesTitle, intro: [c.candidatesIntro], points: c.candidates, outro: c.candidatesNotes },
      { title: c.processTitle, inline: c.process, outro: [c.processNote] },
      { title: c.whyTitle, inline: c.why },
      { title: c.lastTitle, intro: c.last },
    ],
    stats: c.stats,
    priceTitle: c.priceTitle,
    priceNote: c.priceNote,
    whatTitle: c.whatTitle,
    what: c.what,
    calloutTitle: c.calloutTitle,
    calloutText: c.calloutText,
    compareTitle: c.materialsTitle,
    compareIntro: c.materialsIntro,
    compare: c.materials,
    fitTitle: c.fitTitle,
    fitIntro: c.fitIntro,
    fit: c.fit,
    fitNote: c.fitNote,
    stepsTitle: c.stepsTitle,
    stepsIntro: c.stepsIntro,
    steps: c.steps,
    whyBandTitle: c.whyBandTitle,
    whyBandText: c.whyBandText,
    caseText: c.caseText,
    faq: c.faq,
  };
}

const article: Record<Lang, TreatmentArticleContent> = {
  sq: toArticle(content.sq),
  en: toArticle(content.en),
  de: toArticle(content.de),
  it: toArticle(content.it),
};

export default function HollywoodSmilePage() {
  return (
    <TreatmentArticle
      warrantyYears={5}
      content={article}
      itemId="hollywood-smile"
      heroImage={images.results[0]?.[0] ?? images.heroAfter}
      whatImage={images.results[1]?.[0] ?? images.heroAfter}
    />
  );
}
