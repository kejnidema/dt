import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Kurora porcelan-metal',
    eyebrow: 'Kurora dhe proteza · Shqipëri',
    subtitle: 'Kurorë e provuar dhe me kosto të arsyeshme, me bërthamë metalike dhe sipërfaqe porcelani, e punuar në laborator sipas matjeve tuaja.',
    lead: 'Një kurorë e fortë me ngjyrën e dhëmbit, me dekada histori klinike, dhe një shpjegim i ndershëm se kur zirkoni është zgjedhja më e mirë.',
    kicker: 'Kurora porcelan-metal në Tiranë, Shqipëri',
    articleTitle: 'Kurora porcelan-metal në Tiranë: të provuara, të forta dhe të përballueshme',
    intro: [
      'Një kurorë porcelan-metal mbulon një dhëmb të dëmtuar me një bërthamë metalike të fortë dhe një sipërfaqe porcelani me ngjyrën e dhëmbit.',
      'E njohur edhe si kurorë metal-qeramike ose PFM, përdoret në stomatologji prej dekadash. Metali i jep forcë, ndërsa porcelani i shtresuar sipër i jep ngjyrën dhe formën e një dhëmbi natyral. Mbetet një nga llojet më të përdorura të kurorave në botë, dhe me arsye: është e besueshme dhe më e përballueshme se zgjidhjet krejtësisht prej qeramike.',
      'Në Veneer Clinic, një kurorë porcelan-metal kushton 100 € për dhëmb dhe trajtimi përfundon brenda një qëndrimi prej 5 ditësh.',
    ],
    sections: [
      {
        title: 'Ku shkëlqen',
        intro: [
          'Një kurorë porcelan-metal është e qëndrueshme. Struktura metalike e mbështet porcelanin, ndaj kurora i përballon mirë forcat e përtypjes te dhëmbët e pasmë. Ka një histori të gjatë klinike, që do të thotë se sjellja e saj ndër vite njihet mirë.',
          'Dhe meqë materialet kushtojnë më pak se qeramikat e nivelit të lartë, shpesh është mënyra më ekonomike për të mbrojtur një dhëmb që ka nevojë për mbulim të plotë. Për shumë pacientë, një kurorë metal-qeramike mbetet mënyra më e thjeshtë për të ruajtur një dhëmb të pasmë për shumë vite pa kosto të larta.',
        ],
      },
      {
        title: 'Kompromiset, të thëna hapur',
        intro: ['Metali që i jep kurorës forcë sjell edhe dy kompromise të njohura.'],
        inline: [
          { title: 'E para,', text: 'drita nuk kalon përmes metalit. Prandaj një kurorë porcelan-metal është më e turbullt se smalti natyral ose zirkoni modern. Te një dhëmb i pasëm kjo rrallë ka rëndësi. Te një dhëmb i përparmë, pranë dhëmbëve natyralë, mund të duket pak e sheshtë.' },
          { title: 'E dyta,', text: 'nëse mishrat tërhiqen me vite, skaji metalik i kurorës mund të duket si një vijë e hollë e errët te mishi. Ky është kufiri gri që shumë njerëz e vënë re te kurorat e vjetra.' },
        ],
        outro: ['Ka edhe një anë praktike: për t’i bërë vend metalit dhe porcelanit, zakonisht hiqet pak më shumë dhëmb sesa për disa kurora krejtësisht qeramike. Dhe për ata që reagojnë ndaj disa metaleve, një zgjidhje pa metal është më e përshtatshme.'],
      },
      {
        title: 'Kurora porcelan-metal në Veneer Clinic',
        intro: [
          'I ofrojmë kurorat porcelan-metal sepse janë zgjedhja e duhur për disa pacientë, jo sepse janë e duhura për të gjithë. Në Veneer Clinic, shumica e kurorave punohen nga zirkon Made in Germany: pa metal, mjaft i fortë për dhëmballët dhe natyral te dhëmbët e përparmë. Për një dhëmb të vetëm të përparmë, ku përputhja me dhëmbin fqinj është më e vështira, shpesh rekomandojmë E-max.',
          'Kur porcelan-metali ka kuptim, zakonisht te dhëmbët e pasmë, për pacientë me buxhet më të kufizuar ose për t’u përputhur me punime ekzistuese porcelan-metal, e punojmë si duhet: dhëmbi përgatitet me kujdes, kurora punohet në laborator sipas matjeve dhe ngjyrës suaj, dhe vendoset me kafshimin të kontrolluar me saktësi.',
          'Oferta e detajuar me shkrim tregon cili material është planifikuar për çdo dhëmb dhe pse, që t’i krahasoni mundësitë para se të vendosni.',
        ],
      },
      {
        title: 'Si punohet dhe vendoset një kurorë metal-qeramike?',
        intro: ['Si çdo kurorë dentare e punuar me porosi, kurora porcelan-metal punohet në laborator sipas matjeve të dhëmbit të përgatitur dhe vendoset në takimin e dytë.'],
        inline: [
          { title: 'Vlerësimi.', text: 'Dentisti ekzaminon dhëmbin, kontrollon mishin përreth dhe kafshimin, dhe bën imazherinë e nevojshme për të parë rrënjën dhe kockën. Nëse dhëmbi ka nevojë fillimisht për trajtim kanali ose trajtim tjetër, ky planifikohet para kurorës. Këtu flasim edhe për materialet: nëse metal-qeramika i përshtatet këtij dhëmbi, apo nëse zirkoni ose E-max do të ishin zgjedhje më e mirë.' },
          { title: 'Përgatitja e dhëmbit.', text: 'Me anestezi lokale hiqen kariesi dhe mbushjet e vjetra që po dështojnë, dhe dhëmbi formësohet për t’i bërë vend kurorës. Meqë kurora porcelan-metal ka dy shtresa, metal dhe porcelan, përgatitja duhet të lërë hapësirë për të dyja, duke ruajtur sa më shumë dhëmb të shëndetshëm.' },
          { title: 'Matjet dhe ngjyra.', text: 'Merren matje të detajuara të dhëmbit të përgatitur dhe të dhëmbëve përreth, dhe ngjyra zgjidhet bashkë me ju në dritë të mirë. Matjet dhe ngjyra dërgohen në laboratorin dentar, bashkë me shënime për formën që dëshironi. Ndërkohë mbani një kurorë të përkohshme.' },
          { title: 'Në laborator.', text: 'Laboratori punon strukturën metalike që t’i përshtatet saktë dhëmbit. Pastaj porcelani vendoset me shtresa mbi metal dhe piqet, duke formësuar kurorën dhe duke përputhur ngjyrën me dhëmbët natyralë. Fillimisht vendoset një shtresë e errët që e fsheh metalin poshtë.' },
          { title: 'Vendosja.', text: 'Në takimin e dytë kurora provohet. Dentisti kontrollon përshtatjen në skaje, kontaktin me dhëmbët fqinjë, formën dhe ngjyrën. Nëse diçka nuk ju pëlqen, e korrigjojmë para çimentimit. Kur jeni të kënaqur, kurora çimentohet.' },
          { title: 'Rregullimi i kafshimit.', text: 'Në fund kafshimi kontrollohet me kujdes. Një kurorë edhe pak e lartë ndryshon mënyrën si takohen dhëmbët dhe mund ta bëjë dhëmbin të dhembë, ndaj pikat e larta rregullohen dhe porcelani lustrohet.' },
        ],
      },
    ],
    stats: [
      { value: '2', label: 'Takime' },
      { value: '5 ditë', label: 'Qëndrim në Tiranë' },
      { value: 'Laborator', label: 'Sipas matjeve tuaja' },
      { value: 'Provisor', label: 'Ndërkohë që punohet kurora' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Për dhëmb',
    whatTitle: 'Çfarë është një kurorë porcelan-metal?',
    what: [
      'Është një kurorë me bërthamë metalike dhe shtresë të jashtme porcelani. Metali i jep forcë, ndërsa porcelani i jep pamjen e dhëmbit. Quhet edhe kurorë metal-qeramike ose PFM.',
      'Punohet në laborator sipas matjeve të dhëmbit të përgatitur dhe vendoset në takimin e dytë. Është zgjedhje e qëndrueshme dhe ekonomike, sidomos për dhëmbët e pasmë.',
    ],
    calloutTitle: 'Ju themi kur zirkoni është më i mirë',
    calloutText:
      'Porcelan-metali është i besueshëm dhe me kosto të arsyeshme, por nuk është zgjedhja më e mirë për çdo dhëmb. Te dhëmbët e përparmë, ose kur mishi mund të tërhiqet, një kurorë zirkoni Made in Germany pa metal zakonisht duket bukur për më gjatë. Ua shpjegojmë kompromisin para se të zgjidhni.',
    compareTitle: 'Porcelan-metal apo pa metal?',
    compareIntro: 'Tre materiale mbulojnë shumicën e rasteve. Ja si krahasohen:',
    compare: [
      { id: 'crown-porcelain', tag: 'Ky trajtim', title: 'Porcelan-metal (PFM)', text: 'Bërthamë metalike me porcelan të shtresuar. E fortë, e provuar dhe më e përballueshme, ideale për dhëmbët e pasmë ku tejdukshmëria ka më pak rëndësi.' },
      { id: 'crown-zirconia', tag: 'Më e rekomanduara', title: 'Zirkon i plotë', text: 'Zirkon Made in Germany pa metal. Mjaft i fortë për dhëmballët, më natyral te mishi dhe pa kufi të errët me kohë.' },
      { id: 'crown-emax', tag: 'Dhëmbët e përparmë', title: 'E-max', text: 'Disilikat litiumi me tejdukshmëri të shkëlqyer, shpesh përputhja më e mirë për një dhëmb të përparmë të dukshëm.' },
    ],
    fitTitle: 'Kur është kurora porcelan-metal zgjedhja e duhur?',
    fitIntro: 'Një kurorë porcelan-metal mund të jetë zgjedhje e arsyeshme nëse keni:',
    fit: [
      'Një dhëmballë ose paradhëmballë që ka nevojë për kurorë, ku forca ka më shumë rëndësi se pamja',
      'Nevojë për mbulim të plotë me kosto më të ulët se kurorat krejt prej qeramike',
      'Një dhëmb të pasëm me kanal të trajtuar që duhet mbrojtur nga thyerja',
      'Kurora ose ura porcelan-metal ekzistuese me të cilat duhet të përputhet kurora e re',
      'Një dhëmb me më shumë mbushje se strukturë natyrale, ku një mbushje tjetër nuk do të mbante',
      'Një kurorë të vjetër porcelan-metal të ciflosur, që rrjedh ose me karies poshtë',
    ],
    fitNote:
      'Nëse kurora vendoset te një dhëmb i përparmë i dukshëm, mishrat tuaj janë të hollë ose po tërhiqen, ose reagoni ndaj metaleve, zakonisht ju rekomandojmë zirkon ose E-max dhe ju shpjegojmë pse para se të vendosni.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'Një kurorë porcelan-metal kërkon dy takime brenda një qëndrimi prej 5 ditësh; ndërmjet tyre kurora punohet në laborator sipas matjeve të dhëmbit të përgatitur:',
    steps: [
      { title: 'Vlerësimi dhe plani', text: 'Ekzaminojmë dhëmbin, mishin dhe kafshimin, bëjmë imazherinë e nevojshme dhe biem dakord për materialin e duhur për çdo dhëmb para se të nisim.' },
      { title: 'Përgatitja e dhëmbit', text: 'Me anestezi lokale hiqen kariesi dhe mbushjet e vjetra, dhe dhëmbi formësohet për të pritur metalin dhe porcelanin. Vendoset një kurorë e përkohshme.' },
      { title: 'Matjet dhe ngjyra', text: 'Matjet e detajuara dhe ngjyra e zgjedhur dërgohen në laborator, ku punohet bërthama metalike dhe shtresohet porcelani.' },
      { title: 'Prova dhe vendosja', text: 'Kurora provohet për të kontrolluar përshtatjen, kontaktet, formën dhe ngjyrën. Kur jeni të kënaqur, çimentohet.' },
      { title: 'Kontrolli i kafshimit', text: 'Kafshimi kontrollohet, pikat e larta rregullohen dhe porcelani lustrohet, që kurora të ndihet natyrale kur mbyllni gojën.' },
    ],
    whyBandTitle: 'Pse Veneer Clinic për një kurorë porcelan-metal?',
    whyBandText:
      'Rekomandojmë materialin që i përshtatet çdo dhëmbi, jo atë që kushton më shumë. Nëse porcelan-metali është zgjedhja e duhur, merrni një kurorë të punuar mirë me çmim të drejtë. Nëse zirkoni ose E-max do t’ju shërbenin më mirë, jua themi. Çdo kurorë dhe çdo material është në ofertën e detajuar me shkrim.',
    caseText: 'Kurora të punuara në laborator',
    faq: [
      { question: 'Sa kushton një kurorë porcelan-metal?', answer: 'Një kurorë porcelan-metal kushton 100 € për dhëmb. Për krahasim, një kurorë zirkoni Made in Germany kushton 200 € dhe një kurorë E-max 300 € për dhëmb. Nëse dhëmbi ka nevojë fillimisht për trajtim kanali ose mbushje, kjo shfaqet veçmas në ofertë.' },
      { question: 'Çfarë është një kurorë porcelan-metal?', answer: 'Është një kurorë me bërthamë metalike dhe shtresë të jashtme porcelani. Metali i jep forcë, ndërsa porcelani i jep pamjen e dhëmbit. Quhet edhe kurorë metal-qeramike ose PFM. Përdoret prej dekadash dhe mbetet një nga llojet më të zakonshme të kurorave sepse është e besueshme dhe me kosto të arsyeshme.' },
      { question: 'Cila është më e mirë, porcelan-metal apo zirkon?', answer: 'Për shumicën e pacientëve, zirkoni. Është pa metal, mjaft i fortë për dhëmbët e pasmë, duket më natyral dhe nuk krijon vijën e errët te mishi. Në Veneer Clinic shumica e kurorave punohen nga zirkon Made in Germany. Porcelan-metali është zgjedhje e arsyeshme te dhëmbët e pasmë ku pamja ka më pak rëndësi, për buxhete më të kufizuara ose për t’u përputhur me punime ekzistuese porcelan-metal. Ju shpjegojmë kompromiset për dhëmbin tuaj para se të vendosni.' },
      { question: 'A duket natyrale një kurorë porcelan-metal?', answer: 'Te dhëmbët e pasmë, po. Porcelani ngjyroset si dhëmbët tuaj. Te dhëmbët e përparmë mund të duket pak më e turbullt se smalti natyral, sepse drita nuk kalon përmes bërthamës metalike. Nëse mishi tërhiqet me vite, mund të shfaqet edhe një vijë e hollë e errët. Për dhëmbët e përparmë të dukshëm zakonisht rekomandojmë zirkon ose E-max.' },
      { question: 'Pse kurorat e vjetra kanë një vijë të errët te mishi?', answer: 'Ajo vijë e errët zakonisht është skaji metalik i një kurore porcelan-metal që duket kur mishi tërhiqet. Nuk është karies në vetvete, por është arsye e shpeshtë për ndërrimin e kurorave të vjetra. Kurorat pa metal prej zirkoni ose E-max nuk e kanë këtë problem, prandaj shpesh zgjidhen për ndërrimin e kurorave te dhëmbët e dukshëm.' },
      { question: 'A dhemb vendosja e kurorës?', answer: 'Dhëmbi përgatitet me anestezi lokale, ndaj ndieni presion dhe dridhje, por jo dhimbje. Pak ndjeshmëri ndaj të ftohtit ose kafshimit ndërmjet përgatitjes dhe vendosjes është normale dhe zakonisht kalon pasi çimentohet kurora përfundimtare. Nëse dhëmbi është shumë i ndjeshëm ose dhemb, na e thoni.' },
      { question: 'Sa takime nevojiten?', answer: 'Dy, brenda një qëndrimi prej 5 ditësh. Në të parin dhëmbi përgatitet dhe matet, dhe vendoset një kurorë e përkohshme. Pastaj kurora punohet në laborator, dhe në takimin e dytë provohet, çimentohet dhe kafshimi rregullohet. Nëse dhëmbi ka nevojë fillimisht për trajtim kanali ose trajtim tjetër, ai planifikohet para kurorës. Plani i trajtimit ju tregon kalendarin e saktë.' },
      { question: 'A mund të vendos kurorë porcelan-metal nëse kam alergji ndaj metaleve?', answer: 'Nëse e dini që reagoni ndaj disa metaleve, na e thoni para trajtimit. Në këtë rast rekomandojmë një kurorë pa metal prej zirkoni ose E-max, që e shmang plotësisht problemin.' },
      { question: 'A mund të ciflosë porcelani?', answer: 'Mund të ndodhë, edhe pse nuk është e shpeshtë. Rreziku është më i madh te njerëzit që shtrëngojnë ose kërcëllijnë dhëmbët, ose që kafshojnë gjëra shumë të forta. Ciflat e vogla ndonjëherë lëmohen ose riparohen. Ato të mëdha zakonisht kërkojnë ndërrimin e kurorës. Një pllakë nate ndihmon ta mbrojë porcelanin nëse kërcëllini dhëmbët.' },
      { question: 'A mund ta ndërroni kurorën time të vjetër porcelan-metal?', answer: 'Po. Nëse një kurorë e vjetër ka vijë të errët të dukshme, cifël, përshtatje të keqe ose karies poshtë, e heqim, trajtojmë dhëmbin dhe vendosim një kurorë të re. Shumë pacientë zgjedhin zirkonin për ndërrimin, sidomos te dhëmbët e përparmë, por është e mundur edhe një kurorë e re porcelan-metal. Ju shpjegojmë të dyja para se të vendosni.' },
      { question: 'Si kujdesem për një kurorë porcelan-metal?', answer: 'Lani dhëmbët dy herë në ditë me pastë me fluor, pastroni çdo ditë ndërmjet dhëmbëve dhe kini kujdes te mishi rreth kurorës, ku zakonisht nis kariesi. Bëni kontrolle dhe pastrime të rregullta. Mos përtypni akull ose ushqime shumë të forta me kurorën dhe përdorni pllakë nate nëse kërcëllini dhëmbët.' },
      { question: 'Çfarë përfshin oferta?', answer: 'Oferta e detajuar me shkrim tregon çdo kurorë dhe materialin e saj, plus çdo gjë që nevojitet më parë, si trajtim kanali ose mbushje, secila në rresht më vete. Nëse për disa dhëmbë rekomandojmë material tjetër, mund t’i tregojmë të dyja mundësitë që t’i krahasoni. Pasi të nisë trajtimi, nuk shtohet asgjë që nuk e kemi diskutuar më parë me ju.' },
    ],
  },
  en: {
    name: 'Porcelain-Metal Crowns',
    eyebrow: 'Crowns & dentures · Albania',
    subtitle: 'A proven, reasonably priced crown with a metal core and porcelain surface, made in the lab to your measurements.',
    lead: 'A strong, tooth-coloured crown with decades of clinical history, and an honest explanation of when zirconia is the better choice.',
    kicker: 'Porcelain-metal crowns in Tirana, Albania',
    articleTitle: 'Porcelain-metal crowns in Tirana: proven, strong and affordable',
    intro: [
      'A porcelain-metal crown covers a damaged tooth with a strong metal core and a tooth-coloured porcelain surface.',
      'Also known as a metal-ceramic crown or PFM, it has been used in dentistry for decades. The metal gives strength, while the porcelain layered on top gives the colour and shape of a natural tooth. It remains one of the most used types of crown in the world, and for good reason: it is reliable and more affordable than all-ceramic solutions.',
      'At Veneer Clinic, a porcelain-metal crown costs €100 per tooth and treatment is completed within a 5-day stay.',
    ],
    sections: [
      {
        title: 'Where it shines',
        intro: [
          'A porcelain-metal crown is durable. The metal framework supports the porcelain, so the crown handles chewing forces on back teeth well. It has a long clinical history, which means its behaviour over the years is well known.',
          'And since the materials cost less than premium ceramics, it is often the most economical way to protect a tooth that needs full coverage. For many patients, a metal-ceramic crown remains the simplest way to keep a back tooth for many years without high costs.',
        ],
      },
      {
        title: 'The trade-offs, stated openly',
        intro: ['The metal that gives the crown its strength also brings two well-known compromises.'],
        inline: [
          { title: 'First,', text: 'light does not pass through metal. So a porcelain-metal crown is more opaque than natural enamel or modern zirconia. On a back tooth this rarely matters. On a front tooth, next to natural teeth, it can look slightly flat.' },
          { title: 'Second,', text: 'if the gums recede over the years, the metal edge of the crown can show as a thin dark line at the gum. This is the grey margin many people notice on old crowns.' },
        ],
        outro: ['There is also a practical side: to make room for metal and porcelain, a little more tooth is usually removed than for some all-ceramic crowns. And for people who react to certain metals, a metal-free solution is more suitable.'],
      },
      {
        title: 'Porcelain-metal crowns at Veneer Clinic',
        intro: [
          'We offer porcelain-metal crowns because they are the right choice for some patients, not because they are right for everyone. At Veneer Clinic most crowns are made from Made in Germany zirconia: metal-free, strong enough for molars and natural on front teeth. For a single front tooth, where matching the neighbouring tooth is hardest, we often recommend E-max.',
          'When porcelain-metal makes sense, usually on back teeth, for patients on a tighter budget or to match existing porcelain-metal work, we do it properly: the tooth is carefully prepared, the crown is made in the lab to your measurements and shade, and it is fitted with the bite precisely checked.',
          'Your detailed written quote shows which material is planned for each tooth and why, so you can compare the options before deciding.',
        ],
      },
      {
        title: 'How a metal-ceramic crown is made and fitted',
        intro: ['Like any custom-made dental crown, the porcelain-metal crown is made in the lab to the measurements of the prepared tooth and fitted at the second appointment.'],
        inline: [
          { title: 'Assessment.', text: 'The dentist examines the tooth, checks the surrounding gum and bite, and takes the imaging needed to see the root and bone. If the tooth first needs a root canal or other treatment, that is planned before the crown. Here we also discuss materials: whether metal-ceramic suits this tooth, or whether zirconia or E-max would be a better choice.' },
          { title: 'Tooth preparation.', text: 'Under local anaesthesia, decay and failing old fillings are removed and the tooth is shaped to make room for the crown. Since a porcelain-metal crown has two layers, metal and porcelain, the preparation must leave space for both while keeping as much healthy tooth as possible.' },
          { title: 'Measurements and shade.', text: 'Detailed measurements of the prepared tooth and surrounding teeth are taken, and the shade is chosen with you in good light. Measurements and shade go to the dental lab, with notes on the shape you want. Meanwhile you wear a temporary crown.' },
          { title: 'In the lab.', text: 'The lab makes the metal framework to fit the tooth precisely. Porcelain is then layered over the metal and fired, shaping the crown and matching the colour to your natural teeth. An opaque layer is applied first to hide the metal beneath.' },
          { title: 'Fitting.', text: 'At the second appointment the crown is tried in. The dentist checks the fit at the margins, contact with neighbouring teeth, shape and colour. If something does not please you, we correct it before cementing. When you are happy, the crown is cemented.' },
          { title: 'Bite adjustment.', text: 'Finally the bite is carefully checked. A crown even slightly high changes how the teeth meet and can make the tooth ache, so high spots are adjusted and the porcelain polished.' },
        ],
      },
    ],
    stats: [
      { value: '2', label: 'Appointments' },
      { value: '5 days', label: 'Stay in Tirana' },
      { value: 'Lab-made', label: 'To your measurements' },
      { value: 'Temporary', label: 'While the crown is made' },
    ],
    priceTitle: 'Price',
    priceNote: 'Per tooth',
    whatTitle: 'What is a porcelain-metal crown?',
    what: [
      'It is a crown with a metal core and an outer layer of porcelain. The metal gives strength, while the porcelain gives the look of a tooth. It is also called a metal-ceramic crown or PFM.',
      'It is made in the lab to the measurements of the prepared tooth and fitted at the second appointment. It is a durable, economical choice, especially for back teeth.',
    ],
    calloutTitle: 'We tell you when zirconia is better',
    calloutText:
      'Porcelain-metal is reliable and reasonably priced, but it is not the best choice for every tooth. On front teeth, or where the gum may recede, a metal-free Made in Germany zirconia crown usually looks good for longer. We explain the trade-off before you choose.',
    compareTitle: 'Porcelain-metal or metal-free?',
    compareIntro: 'Three materials cover most cases. Here is how they compare:',
    compare: [
      { id: 'crown-porcelain', tag: 'This treatment', title: 'Porcelain-metal (PFM)', text: 'Metal core with layered porcelain. Strong, proven and more affordable, ideal for back teeth where translucency matters less.' },
      { id: 'crown-zirconia', tag: 'Most recommended', title: 'Full zirconia', text: 'Metal-free Made in Germany zirconia. Strong enough for molars, more natural at the gum and no dark margin over time.' },
      { id: 'crown-emax', tag: 'Front teeth', title: 'E-max', text: 'Lithium disilicate with excellent translucency, often the best match for a visible front tooth.' },
    ],
    fitTitle: 'When is a porcelain-metal crown the right choice?',
    fitIntro: 'A porcelain-metal crown can be a reasonable choice if you have:',
    fit: [
      'A molar or premolar that needs a crown, where strength matters more than looks',
      'A need for full coverage at a lower cost than all-ceramic crowns',
      'A root-treated back tooth that needs protecting from fracture',
      'Existing porcelain-metal crowns or bridges the new crown must match',
      'A tooth with more filling than natural structure, where another filling would not hold',
      'An old porcelain-metal crown that is chipped, leaking or has decay underneath',
    ],
    fitNote:
      'If the crown is going on a visible front tooth, your gums are thin or receding, or you react to metals, we usually recommend zirconia or E-max and explain why before you decide.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'A porcelain-metal crown needs two appointments within a 5-day stay; in between, the crown is made in the lab to the measurements of the prepared tooth:',
    steps: [
      { title: 'Assessment and plan', text: 'We examine the tooth, gum and bite, take the imaging needed and agree on the right material for each tooth before starting.' },
      { title: 'Tooth preparation', text: 'Under local anaesthesia decay and old fillings are removed, and the tooth is shaped to receive metal and porcelain. A temporary crown is fitted.' },
      { title: 'Measurements and shade', text: 'Detailed measurements and the chosen shade go to the lab, where the metal core is made and the porcelain layered.' },
      { title: 'Try-in and fitting', text: 'The crown is tried in to check fit, contacts, shape and colour. When you are happy, it is cemented.' },
      { title: 'Bite check', text: 'The bite is checked, high spots adjusted and the porcelain polished, so the crown feels natural when you close.' },
    ],
    whyBandTitle: 'Why Veneer Clinic for a porcelain-metal crown?',
    whyBandText:
      'We recommend the material that suits each tooth, not the one that costs more. If porcelain-metal is the right choice, you get a well-made crown at a fair price. If zirconia or E-max would serve you better, we tell you. Every crown and every material is in the detailed written quote.',
    caseText: 'Lab-made crowns',
    faq: [
      { question: 'How much does a porcelain-metal crown cost?', answer: 'A porcelain-metal crown costs €100 per tooth. For comparison, a Made in Germany zirconia crown costs €200 and an E-max crown €300 per tooth. If the tooth first needs a root canal or filling, it appears separately in your quote.' },
      { question: 'What is a porcelain-metal crown?', answer: 'It is a crown with a metal core and an outer layer of porcelain. The metal gives strength, while the porcelain gives the look of a tooth. It is also called a metal-ceramic crown or PFM. It has been used for decades and remains one of the most common types of crown because it is reliable and reasonably priced.' },
      { question: 'Which is better, porcelain-metal or zirconia?', answer: 'For most patients, zirconia. It is metal-free, strong enough for back teeth, looks more natural and does not create the dark line at the gum. At Veneer Clinic most crowns are made from Made in Germany zirconia. Porcelain-metal is a reasonable choice on back teeth where looks matter less, for tighter budgets or to match existing porcelain-metal work. We explain the trade-offs for your tooth before you decide.' },
      { question: 'Does a porcelain-metal crown look natural?', answer: 'On back teeth, yes. The porcelain is shaded like your teeth. On front teeth it can look slightly more opaque than natural enamel, because light does not pass through the metal core. If the gum recedes over the years, a thin dark line may also appear. For visible front teeth we usually recommend zirconia or E-max.' },
      { question: 'Why do old crowns have a dark line at the gum?', answer: 'That dark line is usually the metal edge of a porcelain-metal crown showing as the gum recedes. It is not decay in itself, but it is a common reason for replacing old crowns. Metal-free zirconia or E-max crowns do not have this problem, which is why they are often chosen to replace crowns on visible teeth.' },
      { question: 'Does getting a crown hurt?', answer: 'The tooth is prepared under local anaesthesia, so you feel pressure and vibration but not pain. Some sensitivity to cold or biting between preparation and fitting is normal and usually passes once the final crown is cemented. If the tooth is very sensitive or aches, tell us.' },
      { question: 'How many appointments are needed?', answer: 'Two, within a 5-day stay. At the first the tooth is prepared and measured, and a temporary crown is fitted. The crown is then made in the lab, and at the second appointment it is tried in, cemented and the bite adjusted. If the tooth first needs a root canal or other treatment, that is planned before the crown. Your treatment plan shows the exact schedule.' },
      { question: 'Can I have a porcelain-metal crown if I am allergic to metals?', answer: 'If you know you react to certain metals, tell us before treatment. In that case we recommend a metal-free zirconia or E-max crown, which avoids the problem completely.' },
      { question: 'Can the porcelain chip?', answer: 'It can happen, although it is not common. The risk is higher in people who clench or grind their teeth, or who bite very hard things. Small chips can sometimes be smoothed or repaired. Large ones usually mean replacing the crown. A night guard helps protect the porcelain if you grind your teeth.' },
      { question: 'Can you replace my old porcelain-metal crown?', answer: 'Yes. If an old crown has a visible dark line, a chip, a poor fit or decay underneath, we remove it, treat the tooth and fit a new crown. Many patients choose zirconia for the replacement, especially on front teeth, but a new porcelain-metal crown is also possible. We explain both before you decide.' },
      { question: 'How do I care for a porcelain-metal crown?', answer: 'Brush twice a day with fluoride toothpaste, clean between your teeth daily and take care at the gum around the crown, where decay usually starts. Have regular check-ups and cleanings. Do not chew ice or very hard foods with the crown and use a night guard if you grind your teeth.' },
      { question: 'What does the quote include?', answer: 'Your detailed written quote shows every crown and its material, plus anything needed first, such as a root canal or fillings, each on its own line. If we recommend a different material for some teeth, we can show both options so you can compare. Once treatment starts, nothing is added that we have not discussed with you first.' },
    ],
  },
  de: {
    name: 'Metallkeramikkronen',
    eyebrow: 'Kronen & Prothesen · Albanien',
    subtitle: 'Eine bewährte, preiswerte Krone mit Metallkern und Keramikoberfläche, im Labor nach Ihren Maßen gefertigt.',
    lead: 'Eine stabile, zahnfarbene Krone mit jahrzehntelanger klinischer Erfahrung, und eine ehrliche Erklärung, wann Zirkon die bessere Wahl ist.',
    kicker: 'Metallkeramikkronen in Tirana, Albanien',
    articleTitle: 'Metallkeramikkronen in Tirana: bewährt, stabil und erschwinglich',
    intro: [
      'Eine Metallkeramikkrone bedeckt einen beschädigten Zahn mit einem stabilen Metallkern und einer zahnfarbenen Keramikoberfläche.',
      'Auch als VMK- oder PFM-Krone bekannt, wird sie seit Jahrzehnten in der Zahnmedizin verwendet. Das Metall gibt Stabilität, die darüber geschichtete Keramik die Farbe und Form eines natürlichen Zahns. Sie ist weiterhin eine der meistverwendeten Kronenarten der Welt, und das aus gutem Grund: Sie ist zuverlässig und günstiger als vollkeramische Lösungen.',
      'In der Veneer Clinic kostet eine Metallkeramikkrone 100 € pro Zahn, und die Behandlung ist innerhalb eines Aufenthalts von 5 Tagen abgeschlossen.',
    ],
    sections: [
      {
        title: 'Wo sie glänzt',
        intro: [
          'Eine Metallkeramikkrone ist langlebig. Das Metallgerüst stützt die Keramik, sodass die Krone den Kaukräften an Seitenzähnen gut standhält. Sie hat eine lange klinische Geschichte, ihr Verhalten über die Jahre ist also gut bekannt.',
          'Und da die Materialien weniger kosten als hochwertige Keramiken, ist sie oft der wirtschaftlichste Weg, einen Zahn zu schützen, der eine vollständige Überkronung braucht. Für viele Patienten bleibt eine Metallkeramikkrone der einfachste Weg, einen Seitenzahn viele Jahre ohne hohe Kosten zu erhalten.',
        ],
      },
      {
        title: 'Die Kompromisse, offen gesagt',
        intro: ['Das Metall, das der Krone ihre Stärke gibt, bringt auch zwei bekannte Kompromisse mit.'],
        inline: [
          { title: 'Erstens', text: 'geht Licht nicht durch Metall. Deshalb ist eine Metallkeramikkrone opaker als natürlicher Schmelz oder modernes Zirkon. An einem Seitenzahn spielt das selten eine Rolle. An einem Frontzahn neben natürlichen Zähnen kann sie etwas flach wirken.' },
          { title: 'Zweitens', text: 'kann der Metallrand der Krone, wenn sich das Zahnfleisch über die Jahre zurückzieht, als dünne dunkle Linie am Zahnfleisch sichtbar werden. Das ist der graue Rand, den viele an alten Kronen bemerken.' },
        ],
        outro: ['Es gibt auch eine praktische Seite: Um Platz für Metall und Keramik zu schaffen, wird meist etwas mehr Zahn abgetragen als bei manchen Vollkeramikkronen. Und für Menschen, die auf bestimmte Metalle reagieren, ist eine metallfreie Lösung geeigneter.'],
      },
      {
        title: 'Metallkeramikkronen in der Veneer Clinic',
        intro: [
          'Wir bieten Metallkeramikkronen an, weil sie für manche Patienten die richtige Wahl sind, nicht weil sie für alle richtig sind. In der Veneer Clinic werden die meisten Kronen aus Zirkon Made in Germany gefertigt: metallfrei, stark genug für Backenzähne und natürlich an Frontzähnen. Für einen einzelnen Frontzahn, wo die Anpassung an den Nachbarzahn am schwierigsten ist, empfehlen wir oft E-max.',
          'Wenn Metallkeramik sinnvoll ist, meist an Seitenzähnen, bei knapperem Budget oder passend zu vorhandenen Metallkeramikarbeiten, machen wir es richtig: Der Zahn wird sorgfältig präpariert, die Krone im Labor nach Ihren Maßen und Ihrem Farbton gefertigt und mit genau geprüftem Biss eingesetzt.',
          'Ihr detailliertes schriftliches Angebot zeigt, welches Material für jeden Zahn geplant ist und warum, damit Sie die Optionen vergleichen können, bevor Sie entscheiden.',
        ],
      },
      {
        title: 'So wird eine Metallkeramikkrone gefertigt und eingesetzt',
        intro: ['Wie jede individuell gefertigte Krone wird die Metallkeramikkrone im Labor nach den Maßen des präparierten Zahns hergestellt und beim zweiten Termin eingesetzt.'],
        inline: [
          { title: 'Untersuchung.', text: 'Der Zahnarzt untersucht den Zahn, prüft Zahnfleisch und Biss und macht die nötige Bildgebung, um Wurzel und Knochen zu sehen. Braucht der Zahn zuerst eine Wurzelbehandlung oder eine andere Behandlung, wird diese vor der Krone geplant. Hier besprechen wir auch die Materialien: ob Metallkeramik zu diesem Zahn passt oder ob Zirkon oder E-max die bessere Wahl wäre.' },
          { title: 'Präparation des Zahns.', text: 'Unter örtlicher Betäubung werden Karies und versagende alte Füllungen entfernt und der Zahn wird für die Krone geformt. Da eine Metallkeramikkrone zwei Schichten hat, Metall und Keramik, muss die Präparation Platz für beide lassen und dabei möglichst viel gesunden Zahn erhalten.' },
          { title: 'Abdrücke und Farbton.', text: 'Es werden detaillierte Abdrücke des präparierten Zahns und der Nachbarzähne genommen, und der Farbton wird mit Ihnen bei gutem Licht gewählt. Abdrücke und Farbton gehen ans Dentallabor, mit Hinweisen zur gewünschten Form. In der Zwischenzeit tragen Sie ein Provisorium.' },
          { title: 'Im Labor.', text: 'Das Labor fertigt das Metallgerüst passgenau für den Zahn. Dann wird Keramik schichtweise auf das Metall aufgetragen und gebrannt, wobei die Krone geformt und die Farbe an Ihre natürlichen Zähne angepasst wird. Zuerst wird eine opake Schicht aufgetragen, die das Metall darunter verdeckt.' },
          { title: 'Eingliederung.', text: 'Beim zweiten Termin wird die Krone anprobiert. Der Zahnarzt prüft die Randpassung, den Kontakt zu den Nachbarzähnen, Form und Farbe. Gefällt Ihnen etwas nicht, korrigieren wir es vor dem Zementieren. Sind Sie zufrieden, wird die Krone zementiert.' },
          { title: 'Bissanpassung.', text: 'Zum Schluss wird der Biss sorgfältig geprüft. Eine auch nur leicht zu hohe Krone verändert, wie die Zähne aufeinandertreffen, und kann den Zahn schmerzen lassen, daher werden hohe Stellen angepasst und die Keramik poliert.' },
        ],
      },
    ],
    stats: [
      { value: '2', label: 'Termine' },
      { value: '5 Tage', label: 'Aufenthalt in Tirana' },
      { value: 'Labor', label: 'Nach Ihren Maßen' },
      { value: 'Provisorium', label: 'Während die Krone entsteht' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Pro Zahn',
    whatTitle: 'Was ist eine Metallkeramikkrone?',
    what: [
      'Es ist eine Krone mit Metallkern und äußerer Keramikschicht. Das Metall gibt Stabilität, die Keramik das Aussehen eines Zahns. Sie heißt auch VMK- oder PFM-Krone.',
      'Sie wird im Labor nach den Maßen des präparierten Zahns gefertigt und beim zweiten Termin eingesetzt. Sie ist eine langlebige, wirtschaftliche Wahl, besonders für Seitenzähne.',
    ],
    calloutTitle: 'Wir sagen Ihnen, wann Zirkon besser ist',
    calloutText:
      'Metallkeramik ist zuverlässig und preiswert, aber nicht für jeden Zahn die beste Wahl. An Frontzähnen oder wo sich das Zahnfleisch zurückziehen kann, sieht eine metallfreie Zirkonkrone Made in Germany meist länger gut aus. Wir erklären den Kompromiss, bevor Sie wählen.',
    compareTitle: 'Metallkeramik oder metallfrei?',
    compareIntro: 'Drei Materialien decken die meisten Fälle ab. So schneiden sie im Vergleich ab:',
    compare: [
      { id: 'crown-porcelain', tag: 'Diese Behandlung', title: 'Metallkeramik (VMK)', text: 'Metallkern mit geschichteter Keramik. Stabil, bewährt und günstiger, ideal für Seitenzähne, wo Transluzenz weniger wichtig ist.' },
      { id: 'crown-zirconia', tag: 'Am meisten empfohlen', title: 'Vollzirkon', text: 'Metallfreies Zirkon Made in Germany. Stark genug für Backenzähne, natürlicher am Zahnfleisch und ohne dunklen Rand mit der Zeit.' },
      { id: 'crown-emax', tag: 'Frontzähne', title: 'E-max', text: 'Lithiumdisilikat mit hervorragender Transluzenz, oft die beste Anpassung für einen sichtbaren Frontzahn.' },
    ],
    fitTitle: 'Wann ist eine Metallkeramikkrone die richtige Wahl?',
    fitIntro: 'Eine Metallkeramikkrone kann eine sinnvolle Wahl sein bei:',
    fit: [
      'Einem Backenzahn oder Prämolaren, der eine Krone braucht, wo Stabilität wichtiger ist als Aussehen',
      'Bedarf an vollständiger Überkronung zu geringeren Kosten als Vollkeramik',
      'Einem wurzelbehandelten Seitenzahn, der vor dem Bruch geschützt werden muss',
      'Vorhandenen Metallkeramikkronen oder -brücken, zu denen die neue Krone passen muss',
      'Einem Zahn mit mehr Füllung als natürlicher Substanz, wo eine weitere Füllung nicht halten würde',
      'Einer alten Metallkeramikkrone, die abgeplatzt oder undicht ist oder unter der Karies entstanden ist',
    ],
    fitNote:
      'Kommt die Krone auf einen sichtbaren Frontzahn, ist Ihr Zahnfleisch dünn oder zieht sich zurück oder reagieren Sie auf Metalle, empfehlen wir meist Zirkon oder E-max und erklären warum, bevor Sie entscheiden.',
    stepsTitle: 'So läuft die Behandlung ab',
    stepsIntro: 'Eine Metallkeramikkrone braucht zwei Termine innerhalb eines Aufenthalts von 5 Tagen; dazwischen wird die Krone im Labor nach den Maßen des präparierten Zahns gefertigt:',
    steps: [
      { title: 'Untersuchung und Plan', text: 'Wir untersuchen Zahn, Zahnfleisch und Biss, machen die nötige Bildgebung und stimmen das richtige Material für jeden Zahn ab, bevor wir beginnen.' },
      { title: 'Präparation des Zahns', text: 'Unter örtlicher Betäubung werden Karies und alte Füllungen entfernt und der Zahn für Metall und Keramik geformt. Ein Provisorium wird eingesetzt.' },
      { title: 'Abdrücke und Farbton', text: 'Detaillierte Abdrücke und der gewählte Farbton gehen ins Labor, wo der Metallkern gefertigt und die Keramik geschichtet wird.' },
      { title: 'Anprobe und Eingliederung', text: 'Die Krone wird anprobiert, um Passform, Kontakte, Form und Farbe zu prüfen. Sind Sie zufrieden, wird sie zementiert.' },
      { title: 'Bisskontrolle', text: 'Der Biss wird geprüft, hohe Stellen angepasst und die Keramik poliert, damit sich die Krone beim Zubeißen natürlich anfühlt.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für eine Metallkeramikkrone?',
    whyBandText:
      'Wir empfehlen das Material, das zu jedem Zahn passt, nicht das teurere. Ist Metallkeramik die richtige Wahl, erhalten Sie eine gut gefertigte Krone zu einem fairen Preis. Würden Ihnen Zirkon oder E-max besser dienen, sagen wir es Ihnen. Jede Krone und jedes Material steht im detaillierten schriftlichen Angebot.',
    caseText: 'Im Labor gefertigte Kronen',
    faq: [
      { question: 'Was kostet eine Metallkeramikkrone?', answer: 'Eine Metallkeramikkrone kostet 100 € pro Zahn. Zum Vergleich: Eine Zirkonkrone Made in Germany kostet 200 €, eine E-max-Krone 300 € pro Zahn. Braucht der Zahn zuerst eine Wurzelbehandlung oder Füllung, steht das separat im Angebot.' },
      { question: 'Was ist eine Metallkeramikkrone?', answer: 'Es ist eine Krone mit Metallkern und äußerer Keramikschicht. Das Metall gibt Stabilität, die Keramik das Aussehen eines Zahns. Sie heißt auch VMK- oder PFM-Krone. Sie wird seit Jahrzehnten verwendet und bleibt eine der häufigsten Kronenarten, weil sie zuverlässig und preiswert ist.' },
      { question: 'Was ist besser, Metallkeramik oder Zirkon?', answer: 'Für die meisten Patienten Zirkon. Es ist metallfrei, stark genug für Seitenzähne, sieht natürlicher aus und erzeugt keinen dunklen Rand am Zahnfleisch. In der Veneer Clinic werden die meisten Kronen aus Zirkon Made in Germany gefertigt. Metallkeramik ist eine sinnvolle Wahl an Seitenzähnen, wo das Aussehen weniger zählt, bei knapperem Budget oder passend zu vorhandenen Metallkeramikarbeiten. Wir erklären die Kompromisse für Ihren Zahn, bevor Sie entscheiden.' },
      { question: 'Sieht eine Metallkeramikkrone natürlich aus?', answer: 'An Seitenzähnen ja. Die Keramik wird wie Ihre Zähne eingefärbt. An Frontzähnen kann sie etwas opaker wirken als natürlicher Schmelz, weil Licht nicht durch den Metallkern geht. Zieht sich das Zahnfleisch über die Jahre zurück, kann auch eine dünne dunkle Linie erscheinen. Für sichtbare Frontzähne empfehlen wir meist Zirkon oder E-max.' },
      { question: 'Warum haben alte Kronen eine dunkle Linie am Zahnfleisch?', answer: 'Diese dunkle Linie ist meist der Metallrand einer Metallkeramikkrone, der sichtbar wird, wenn sich das Zahnfleisch zurückzieht. Das ist an sich keine Karies, aber ein häufiger Grund, alte Kronen zu ersetzen. Metallfreie Zirkon- oder E-max-Kronen haben dieses Problem nicht, daher werden sie oft für den Ersatz an sichtbaren Zähnen gewählt.' },
      { question: 'Tut das Einsetzen einer Krone weh?', answer: 'Der Zahn wird unter örtlicher Betäubung präpariert, Sie spüren Druck und Vibration, aber keinen Schmerz. Etwas Empfindlichkeit auf Kälte oder beim Beißen zwischen Präparation und Eingliederung ist normal und vergeht meist, sobald die endgültige Krone zementiert ist. Ist der Zahn sehr empfindlich oder schmerzt er, sagen Sie es uns.' },
      { question: 'Wie viele Termine sind nötig?', answer: 'Zwei, innerhalb eines Aufenthalts von 5 Tagen. Beim ersten wird der Zahn präpariert und abgeformt, und ein Provisorium eingesetzt. Dann wird die Krone im Labor gefertigt, und beim zweiten Termin anprobiert, zementiert und der Biss angepasst. Braucht der Zahn zuerst eine Wurzelbehandlung oder andere Behandlung, wird diese vor der Krone geplant. Ihr Behandlungsplan zeigt den genauen Zeitplan.' },
      { question: 'Kann ich bei Metallallergie eine Metallkeramikkrone bekommen?', answer: 'Wissen Sie, dass Sie auf bestimmte Metalle reagieren, sagen Sie es uns vor der Behandlung. Dann empfehlen wir eine metallfreie Krone aus Zirkon oder E-max, die das Problem vollständig vermeidet.' },
      { question: 'Kann die Keramik abplatzen?', answer: 'Das kann vorkommen, ist aber nicht häufig. Das Risiko ist höher bei Menschen, die pressen oder knirschen oder sehr harte Dinge beißen. Kleine Abplatzungen lassen sich manchmal glätten oder reparieren. Große bedeuten meist den Ersatz der Krone. Eine Knirscherschiene hilft, die Keramik zu schützen, wenn Sie knirschen.' },
      { question: 'Können Sie meine alte Metallkeramikkrone ersetzen?', answer: 'Ja. Hat eine alte Krone eine sichtbare dunkle Linie, eine Abplatzung, schlechte Passform oder Karies darunter, entfernen wir sie, behandeln den Zahn und setzen eine neue Krone ein. Viele Patienten wählen für den Ersatz Zirkon, besonders an Frontzähnen, aber auch eine neue Metallkeramikkrone ist möglich. Wir erklären beides, bevor Sie entscheiden.' },
      { question: 'Wie pflege ich eine Metallkeramikkrone?', answer: 'Putzen Sie zweimal täglich mit Fluoridzahnpasta, reinigen Sie täglich die Zwischenräume und achten Sie auf das Zahnfleisch um die Krone, wo Karies meist beginnt. Gehen Sie regelmäßig zu Kontrollen und Reinigungen. Kauen Sie kein Eis oder sehr harte Speisen mit der Krone und tragen Sie eine Knirscherschiene, wenn Sie knirschen.' },
      { question: 'Was umfasst das Angebot?', answer: 'Ihr detailliertes schriftliches Angebot zeigt jede Krone und ihr Material sowie alles, was vorher nötig ist, etwa eine Wurzelbehandlung oder Füllungen, jeweils als eigene Position. Empfehlen wir für manche Zähne ein anderes Material, können wir beide Optionen zum Vergleich zeigen. Nach Behandlungsbeginn kommt nichts hinzu, was wir nicht vorher mit Ihnen besprochen haben.' },
    ],
  },
  it: {
    name: 'Corone in metallo-ceramica',
    eyebrow: 'Corone e protesi · Albania',
    subtitle: 'Una corona collaudata e dal costo ragionevole, con nucleo in metallo e superficie in porcellana, realizzata in laboratorio sulle tue misure.',
    lead: 'Una corona resistente del colore del dente, con decenni di storia clinica, e una spiegazione onesta di quando la zirconia è la scelta migliore.',
    kicker: 'Corone in metallo-ceramica a Tirana, Albania',
    articleTitle: 'Corone in metallo-ceramica a Tirana: collaudate, resistenti e accessibili',
    intro: [
      'Una corona in metallo-ceramica copre un dente danneggiato con un nucleo metallico resistente e una superficie in porcellana del colore del dente.',
      'Conosciuta anche come corona PFM, si usa in odontoiatria da decenni. Il metallo dà resistenza, mentre la porcellana stratificata sopra dà il colore e la forma di un dente naturale. Resta uno dei tipi di corona più usati al mondo, e a ragione: è affidabile e più accessibile delle soluzioni interamente in ceramica.',
      'Alla Veneer Clinic, una corona in metallo-ceramica costa 100 € per dente e il trattamento si completa in un soggiorno di 5 giorni.',
    ],
    sections: [
      {
        title: 'Dove eccelle',
        intro: [
          'Una corona in metallo-ceramica è durevole. La struttura metallica sostiene la porcellana, quindi la corona sopporta bene le forze masticatorie sui denti posteriori. Ha una lunga storia clinica, il che significa che il suo comportamento negli anni è ben noto.',
          'E poiché i materiali costano meno delle ceramiche di fascia alta, è spesso il modo più economico per proteggere un dente che ha bisogno di una copertura completa. Per molti pazienti, una corona in metallo-ceramica resta il modo più semplice per conservare un dente posteriore per molti anni senza costi elevati.',
        ],
      },
      {
        title: 'I compromessi, detti apertamente',
        intro: ['Il metallo che dà resistenza alla corona porta anche due compromessi noti.'],
        inline: [
          { title: 'Primo,', text: 'la luce non passa attraverso il metallo. Per questo una corona in metallo-ceramica è più opaca dello smalto naturale o della zirconia moderna. Su un dente posteriore raramente conta. Su un dente anteriore, accanto a denti naturali, può sembrare un po’ piatta.' },
          { title: 'Secondo,', text: 'se le gengive si ritirano negli anni, il bordo metallico della corona può vedersi come una sottile linea scura sulla gengiva. È il margine grigio che molti notano sulle vecchie corone.' },
        ],
        outro: ['C’è anche un aspetto pratico: per fare spazio a metallo e porcellana, di solito si toglie un po’ più di dente rispetto ad alcune corone interamente in ceramica. E per chi reagisce ad alcuni metalli, una soluzione senza metallo è più adatta.'],
      },
      {
        title: 'Corone in metallo-ceramica alla Veneer Clinic',
        intro: [
          'Offriamo corone in metallo-ceramica perché sono la scelta giusta per alcuni pazienti, non perché siano giuste per tutti. Alla Veneer Clinic la maggior parte delle corone si realizza in zirconia Made in Germany: senza metallo, abbastanza resistente per i molari e naturale sui denti anteriori. Per un singolo dente anteriore, dove abbinarsi al dente vicino è più difficile, spesso consigliamo l’E-max.',
          'Quando la metallo-ceramica ha senso, di solito sui denti posteriori, per pazienti con un budget più limitato o per abbinarsi a lavori esistenti in metallo-ceramica, la facciamo come si deve: il dente si prepara con cura, la corona si realizza in laboratorio sulle tue misure e il tuo colore, e si applica con il morso controllato con precisione.',
          'Il preventivo scritto dettagliato mostra quale materiale è previsto per ogni dente e perché, così puoi confrontare le opzioni prima di decidere.',
        ],
      },
      {
        title: 'Come si realizza e applica una corona in metallo-ceramica',
        intro: ['Come ogni corona su misura, la corona in metallo-ceramica si realizza in laboratorio sulle misure del dente preparato e si applica al secondo appuntamento.'],
        inline: [
          { title: 'Valutazione.', text: 'Il dentista esamina il dente, controlla la gengiva attorno e il morso, e fa le immagini necessarie per vedere radice e osso. Se il dente ha prima bisogno di una cura canalare o di un altro trattamento, si pianifica prima della corona. Qui parliamo anche dei materiali: se la metallo-ceramica è adatta a questo dente, o se zirconia o E-max sarebbero una scelta migliore.' },
          { title: 'Preparazione del dente.', text: 'In anestesia locale si rimuovono carie e vecchie otturazioni che cedono, e il dente si modella per fare spazio alla corona. Poiché la corona in metallo-ceramica ha due strati, metallo e porcellana, la preparazione deve lasciare spazio per entrambi, conservando quanto più dente sano possibile.' },
          { title: 'Impronte e colore.', text: 'Si prendono impronte dettagliate del dente preparato e dei denti vicini, e il colore si sceglie con te in buona luce. Impronte e colore vanno al laboratorio odontotecnico, con note sulla forma desiderata. Nel frattempo porti una corona provvisoria.' },
          { title: 'In laboratorio.', text: 'Il laboratorio realizza la struttura metallica perché si adatti esattamente al dente. Poi la porcellana si stratifica sul metallo e si cuoce, modellando la corona e abbinando il colore ai denti naturali. Prima si applica uno strato opaco che nasconde il metallo sotto.' },
          { title: 'Applicazione.', text: 'Al secondo appuntamento la corona si prova. Il dentista controlla l’adattamento ai margini, il contatto con i denti vicini, forma e colore. Se qualcosa non ti piace, lo correggiamo prima della cementazione. Quando sei soddisfatto, la corona si cementa.' },
          { title: 'Regolazione del morso.', text: 'Infine il morso si controlla con cura. Una corona anche leggermente alta cambia il modo in cui i denti si incontrano e può far dolere il dente, quindi i punti alti si regolano e la porcellana si lucida.' },
        ],
      },
    ],
    stats: [
      { value: '2', label: 'Appuntamenti' },
      { value: '5 giorni', label: 'Soggiorno a Tirana' },
      { value: 'Laboratorio', label: 'Sulle tue misure' },
      { value: 'Provvisoria', label: 'Mentre si realizza la corona' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Per dente',
    whatTitle: 'Cos’è una corona in metallo-ceramica?',
    what: [
      'È una corona con nucleo metallico e strato esterno in porcellana. Il metallo dà resistenza, mentre la porcellana dà l’aspetto del dente. Si chiama anche corona PFM.',
      'Si realizza in laboratorio sulle misure del dente preparato e si applica al secondo appuntamento. È una scelta durevole ed economica, soprattutto per i denti posteriori.',
    ],
    calloutTitle: 'Ti diciamo quando la zirconia è migliore',
    calloutText:
      'La metallo-ceramica è affidabile e dal costo ragionevole, ma non è la scelta migliore per ogni dente. Sui denti anteriori, o dove la gengiva può ritirarsi, una corona in zirconia Made in Germany senza metallo di solito resta bella più a lungo. Ti spieghiamo il compromesso prima che tu scelga.',
    compareTitle: 'Metallo-ceramica o senza metallo?',
    compareIntro: 'Tre materiali coprono la maggior parte dei casi. Ecco come si confrontano:',
    compare: [
      { id: 'crown-porcelain', tag: 'Questo trattamento', title: 'Metallo-ceramica (PFM)', text: 'Nucleo metallico con porcellana stratificata. Resistente, collaudata e più accessibile, ideale per i denti posteriori dove la traslucenza conta meno.' },
      { id: 'crown-zirconia', tag: 'La più consigliata', title: 'Zirconia integrale', text: 'Zirconia Made in Germany senza metallo. Abbastanza resistente per i molari, più naturale sulla gengiva e senza bordo scuro nel tempo.' },
      { id: 'crown-emax', tag: 'Denti anteriori', title: 'E-max', text: 'Disilicato di litio con eccellente traslucenza, spesso l’abbinamento migliore per un dente anteriore visibile.' },
    ],
    fitTitle: 'Quando la corona in metallo-ceramica è la scelta giusta?',
    fitIntro: 'Una corona in metallo-ceramica può essere una scelta ragionevole se hai:',
    fit: [
      'Un molare o premolare che ha bisogno di una corona, dove la resistenza conta più dell’aspetto',
      'Bisogno di copertura completa a un costo inferiore rispetto alle corone in ceramica integrale',
      'Un dente posteriore devitalizzato da proteggere dalla frattura',
      'Corone o ponti esistenti in metallo-ceramica a cui la nuova corona deve abbinarsi',
      'Un dente con più otturazione che struttura naturale, dove un’altra otturazione non terrebbe',
      'Una vecchia corona in metallo-ceramica scheggiata, infiltrata o con carie sotto',
    ],
    fitNote:
      'Se la corona va su un dente anteriore visibile, le tue gengive sono sottili o si ritirano, o reagisci ai metalli, di solito consigliamo zirconia o E-max e ti spieghiamo perché prima che tu decida.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'Una corona in metallo-ceramica richiede due appuntamenti in un soggiorno di 5 giorni; nel frattempo la corona si realizza in laboratorio sulle misure del dente preparato:',
    steps: [
      { title: 'Valutazione e piano', text: 'Esaminiamo dente, gengiva e morso, facciamo le immagini necessarie e concordiamo il materiale giusto per ogni dente prima di iniziare.' },
      { title: 'Preparazione del dente', text: 'In anestesia locale si rimuovono carie e vecchie otturazioni, e il dente si modella per ricevere metallo e porcellana. Si applica una corona provvisoria.' },
      { title: 'Impronte e colore', text: 'Impronte dettagliate e colore scelto vanno al laboratorio, dove si realizza il nucleo metallico e si stratifica la porcellana.' },
      { title: 'Prova e applicazione', text: 'La corona si prova per controllare adattamento, contatti, forma e colore. Quando sei soddisfatto, si cementa.' },
      { title: 'Controllo del morso', text: 'Il morso si controlla, i punti alti si regolano e la porcellana si lucida, perché la corona sembri naturale quando chiudi.' },
    ],
    whyBandTitle: 'Perché Veneer Clinic per una corona in metallo-ceramica?',
    whyBandText:
      'Consigliamo il materiale adatto a ogni dente, non quello che costa di più. Se la metallo-ceramica è la scelta giusta, ricevi una corona ben fatta a un prezzo onesto. Se zirconia o E-max ti servirebbero meglio, te lo diciamo. Ogni corona e ogni materiale è nel preventivo scritto dettagliato.',
    caseText: 'Corone realizzate in laboratorio',
    faq: [
      { question: 'Quanto costa una corona in metallo-ceramica?', answer: 'Una corona in metallo-ceramica costa 100 € per dente. Per confronto, una corona in zirconia Made in Germany costa 200 € e una corona E-max 300 € per dente. Se il dente ha prima bisogno di una cura canalare o di un’otturazione, compare separatamente nel preventivo.' },
      { question: 'Cos’è una corona in metallo-ceramica?', answer: 'È una corona con nucleo metallico e strato esterno in porcellana. Il metallo dà resistenza, mentre la porcellana dà l’aspetto del dente. Si chiama anche corona PFM. Si usa da decenni e resta uno dei tipi di corona più comuni perché è affidabile e dal costo ragionevole.' },
      { question: 'Cosa è meglio, metallo-ceramica o zirconia?', answer: 'Per la maggior parte dei pazienti, la zirconia. È senza metallo, abbastanza resistente per i denti posteriori, sembra più naturale e non crea la linea scura sulla gengiva. Alla Veneer Clinic la maggior parte delle corone si realizza in zirconia Made in Germany. La metallo-ceramica è una scelta ragionevole sui denti posteriori dove l’aspetto conta meno, per budget più limitati o per abbinarsi a lavori esistenti in metallo-ceramica. Ti spieghiamo i compromessi per il tuo dente prima che tu decida.' },
      { question: 'Una corona in metallo-ceramica sembra naturale?', answer: 'Sui denti posteriori, sì. La porcellana si colora come i tuoi denti. Sui denti anteriori può sembrare un po’ più opaca dello smalto naturale, perché la luce non passa attraverso il nucleo metallico. Se la gengiva si ritira negli anni, può comparire anche una sottile linea scura. Per i denti anteriori visibili di solito consigliamo zirconia o E-max.' },
      { question: 'Perché le vecchie corone hanno una linea scura sulla gengiva?', answer: 'Quella linea scura di solito è il bordo metallico di una corona in metallo-ceramica che si vede quando la gengiva si ritira. Non è carie di per sé, ma è un motivo frequente per sostituire le vecchie corone. Le corone senza metallo in zirconia o E-max non hanno questo problema, per questo si scelgono spesso per sostituire corone sui denti visibili.' },
      { question: 'Mettere una corona fa male?', answer: 'Il dente si prepara in anestesia locale, quindi senti pressione e vibrazione, ma non dolore. Un po’ di sensibilità al freddo o al morso tra preparazione e applicazione è normale e di solito passa una volta cementata la corona definitiva. Se il dente è molto sensibile o fa male, diccelo.' },
      { question: 'Quanti appuntamenti servono?', answer: 'Due, in un soggiorno di 5 giorni. Al primo il dente si prepara e si prendono le impronte, e si applica una corona provvisoria. Poi la corona si realizza in laboratorio, e al secondo appuntamento si prova, si cementa e si regola il morso. Se il dente ha prima bisogno di una cura canalare o di un altro trattamento, si pianifica prima della corona. Il piano di trattamento ti mostra il calendario esatto.' },
      { question: 'Posso avere una corona in metallo-ceramica se sono allergico ai metalli?', answer: 'Se sai di reagire ad alcuni metalli, diccelo prima del trattamento. In questo caso consigliamo una corona senza metallo in zirconia o E-max, che evita completamente il problema.' },
      { question: 'La porcellana può scheggiarsi?', answer: 'Può succedere, anche se non è frequente. Il rischio è maggiore in chi serra o digrigna i denti, o morde cose molto dure. Le piccole scheggiature a volte si levigano o riparano. Quelle grandi di solito richiedono la sostituzione della corona. Un bite notturno aiuta a proteggere la porcellana se digrigni i denti.' },
      { question: 'Potete sostituire la mia vecchia corona in metallo-ceramica?', answer: 'Sì. Se una vecchia corona ha una linea scura visibile, una scheggiatura, un adattamento scarso o carie sotto, la rimuoviamo, trattiamo il dente e applichiamo una nuova corona. Molti pazienti scelgono la zirconia per la sostituzione, soprattutto sui denti anteriori, ma è possibile anche una nuova corona in metallo-ceramica. Ti spieghiamo entrambe prima che tu decida.' },
      { question: 'Come curo una corona in metallo-ceramica?', answer: 'Lava i denti due volte al giorno con dentifricio al fluoro, pulisci ogni giorno tra i denti e fai attenzione alla gengiva attorno alla corona, dove di solito inizia la carie. Fai controlli e pulizie regolari. Non masticare ghiaccio o cibi molto duri con la corona e usa un bite notturno se digrigni i denti.' },
      { question: 'Cosa comprende il preventivo?', answer: 'Il preventivo scritto dettagliato mostra ogni corona e il suo materiale, più tutto ciò che serve prima, come una cura canalare o otturazioni, ciascuno su una riga. Se per alcuni denti consigliamo un materiale diverso, possiamo mostrarti entrambe le opzioni per confrontarle. Una volta iniziato il trattamento, non si aggiunge nulla che non abbiamo discusso prima con te.' },
    ],
  },
};

export default function PorcelainCrownPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="crown-porcelain"
      heroImage={images.results[3]?.[0] ?? images.heroAfter}
      whatImage={images.surgery[11] ?? images.heroAfter}
    />
  );
}
