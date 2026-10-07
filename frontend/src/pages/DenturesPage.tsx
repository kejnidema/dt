import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Proteza dentare',
    eyebrow: 'Kurora dhe proteza · Shqipëri',
    subtitle: 'Proteza dentare të plota ose të pjesshme me porosi, që ju rikthejnë buzëqeshjen, përtypjen dhe të folurit, pa ndërhyrje kirurgjikale.',
    lead: 'Dhëmbë të lëvizshëm të punuar për gojën dhe fytyrën tuaj, që të hani, të flisni dhe të buzëqeshni sërish me siguri, pa kirurgji.',
    kicker: 'Proteza dentare në Tiranë, Shqipëri',
    articleTitle: 'Proteza dentare në Tiranë: buzëqeshje natyrale pa kirurgji',
    intro: [
      'Protezat dentare janë dhëmbë të lëvizshëm me porosi që zëvendësojnë disa ose të gjithë dhëmbët që mungojnë, pa kirurgji.',
      'Rikthejnë aftësinë për të përtypur dhe për të folur qartë, mbështesin buzët dhe faqet që fytyra të mos duket e rënë, dhe ju japin një buzëqeshje me pamje natyrale. Një protezë e plotë zëvendëson të gjithë dhëmbët e një nofulle. Një protezë e pjesshme mbush boshllëqet ndërmjet dhëmbëve natyralë që kanë mbetur dhe kapet pas tyre për mbështetje.',
      'Në Veneer Clinic, një protezë e plotë ose e pjesshme kushton 600 € për nofull, dhe e gjithë puna, nga matjet te vendosja, bëhet brenda një qëndrimi prej 7 ditësh.',
    ],
    sections: [
      {
        title: 'E punuar për fytyrën tuaj, jo nga katalogu',
        intro: [
          'Një protezë e mirë nuk është thjesht një rresht dhëmbësh. Forma, madhësia dhe ngjyra e dhëmbëve zgjidhen sipas fytyrës, moshës dhe ngjyrës së lëkurës suaj. Pozicioni i dhëmbëve ndikon në mënyrën si qëndrojnë buzët, sa të plota duken faqet dhe si i shqiptoni disa tinguj. Prandaj u kushtojmë kohë matjeve dhe ju lëmë t’i shihni dhëmbët në gojë para se proteza të përfundojë.',
        ],
      },
      {
        title: 'Protezë e plotë dhe protezë e pjesshme',
        intro: [
          'Proteza e plotë qëndron mbi mishrat dhe mbahet në vend nga thithja dhe forma e nofullës. Proteza e sipërme zakonisht mbahet mirë sepse mbulon qiellzën. Ajo e poshtme ka më pak sipërfaqe mbështetjeje dhe lëviz më lehtë, dhe për këtë flasim hapur që në fillim.',
          'Një protezë e pjesshme zëvendëson një ose disa dhëmbë që mungojnë dhe mbështetet te dhëmbët që kanë mbetur. Para se të punohet, trajtohen kariesi ose problemet e mishrave te dhëmbët e mbetur, sepse proteza varet prej tyre.',
        ],
      },
      {
        title: 'Një vështrim i ndershëm te alternativat',
        intro: [
          'Proteza është mënyra më ekonomike për të zëvendësuar shumë dhëmbë që mungojnë, dhe për shumë njerëz funksionon shumë mirë. Nuk është për të gjithë. Nëse një protezë e poshtme që lëviz është tashmë problem, ose doni dhëmbë të fiksuar, një zgjidhje mbi implante mund të jetë investimi më i mirë. Në Veneer Clinic, All-on-4 dhe All-on-6 mbi implante MegaGen ju japin dhëmbë të fiksuar që nuk hiqen. Implantet kanë nevojë për rreth gjashtë muaj shërim, ndaj kjo rrugë bëhet në dy udhëtime.',
          'Ju shpjegojmë qartë të dyja rrugët, përfshirë kompromiset, dhe oferta e detajuar me shkrim tregon saktësisht çfarë përfshin secila.',
        ],
      },
      {
        title: 'Si punohet dhe vendoset një protezë dentare?',
        intro: ['Proteza punohet me faza, dhe çdo fazë ndërtohet mbi të mëparshmen. Koha që i kushtohet këtu bën diferencën mes një proteze që përshtatet mirë dhe një që vret.'],
        inline: [
          { title: 'Ekzaminimi dhe planifikimi.', text: 'Dentisti ekzaminon mishrat, dhëmbët që kanë mbetur dhe kockën e nofullave, dhe bën imazherinë e nevojshme. Nëse dhëmbët e mbetur kanë nevojë për mbushje, heqje ose trajtim të mishrave, këto planifikohen së pari. Këtu vlerësojmë gjithashtu nëse ju përshtatet një protezë e plotë, e pjesshme apo një zgjidhje mbi implante.' },
          { title: 'Matjet.', text: 'Merren matje të detajuara të mishrave dhe të dhëmbëve të mbetur, dhe dërgohen në laborator. Te protezat e plota, matjet riprodhojnë formën e kreshtave dhe të qiellzës, që është ajo që i jep protezës mbajtje.' },
          { title: 'Kafshimi dhe zgjedhja e dhëmbëve.', text: 'Më pas regjistrojmë si lidhen nofullat me njëra-tjetrën dhe sa hapësirë duhet të zënë dhëmbët. Zgjedhim bashkë me ju formën, madhësinë dhe ngjyrën e dhëmbëve, duke parë fytyrën, buzët dhe çdo foto të vjetër të buzëqeshjes suaj natyrale që dëshironi të sillni.' },
          { title: 'Prova në dyll.', text: 'Para se proteza të përfundojë, dhëmbët montohen në dyll dhe provohen në gojë. Mund të shihni si duken kur buzëqeshni dhe flisni, dhe ne kontrollojmë kafshimin. Nëse i doni dhëmbët më të gjatë, më të çelët ose të vendosur ndryshe, ky është momenti për ta ndryshuar.' },
          { title: 'Vendosja dhe rregullimet.', text: 'Proteza e përfunduar vendoset dhe kontrollohet për rehati, kafshim dhe pika presioni. Rregullimet bëhen para se të ktheheni në shtëpi, dhe ju tregojmë si ta vendosni, ta hiqni dhe ta pastroni protezën. Te një protezë e pjesshme kontrollojmë edhe sa mirë kapet pas dhëmbëve natyralë.' },
          { title: 'Mësimi me protezën.', text: 'Një protezë e re gjithmonë ndihet e çuditshme në fillim. Për disa ditë zëri mund të tingëllojë pak ndryshe dhe të ngrënit kërkon praktikë. Filloni me ushqime të buta të prera në copa të vogla, duke përtypur nga të dyja anët njëkohësisht. Pikat që vrasin janë të zakonshme ditët e para dhe rregullohen lehtë. Zakonisht duhen 2 deri në 4 javë për t’u mësuar plotësisht.' },
        ],
      },
    ],
    stats: [
      { value: '7 ditë', label: 'Qëndrim në Tiranë' },
      { value: 'Pa kirurgji', label: 'Procedura' },
      { value: 'Provë', label: 'Para përfundimit' },
      { value: '2–4 javë', label: 'Për t’u mësuar' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Për nofull, e plotë ose e pjesshme',
    whatTitle: 'Çfarë janë protezat dentare?',
    what: [
      'Protezat dentare janë dhëmbë të lëvizshëm të punuar me porosi, mbi një bazë me ngjyrën e mishit. Një protezë e plotë zëvendëson të gjithë dhëmbët e një nofulle, ndërsa një e pjesshme mbush boshllëqet dhe mbështetet te dhëmbët që kanë mbetur.',
      'Punohen pa kirurgji, në disa faza: matje, regjistrim i kafshimit, provë në dyll dhe vendosje përfundimtare me rregullime, të gjitha brenda një qëndrimi prej 7 ditësh.',
    ],
    calloutTitle: 'I shihni dhëmbët e rinj para se të përfundojnë',
    calloutText:
      'Në provën në dyll i shihni dhe i ndieni dhëmbët në gojë para se proteza të përfundojë. Forma, ngjyra, gjatësia dhe kafshimi mund të ndryshohen ende, që proteza përfundimtare të duket dhe të ndihet ashtu siç kemi rënë dakord.',
    compareTitle: 'Protezë apo dhëmbë të fiksuar?',
    compareIntro: 'Zgjidhja e duhur varet nga sa dhëmbë mungojnë, nga shëndeti i mishrave dhe nga çfarë prisni nga dhëmbët e rinj:',
    compare: [
      { id: 'denture', tag: 'Ky trajtim', title: 'Protezë e lëvizshme', text: 'E plotë ose e pjesshme, pa kirurgji, e punuar dhe e vendosur brenda një qëndrimi prej 7 ditësh. Mënyra më ekonomike.' },
      { id: 'all-on-4', tag: 'Alternativë e fiksuar', title: 'All-on-4', text: 'Një urë e plotë e fiksuar mbi katër implante MegaGen. Kërkon kirurgji dhe rreth 6 muaj shërim ndërmjet udhëtimeve.' },
      { id: 'all-on-6', tag: 'Më shumë mbështetje', title: 'All-on-6', text: 'Një urë e plotë mbi gjashtë implante, për më shumë stabilitet aty ku kocka e lejon.' },
    ],
    fitTitle: 'A është proteza dentare e duhura për ju?',
    fitIntro: 'Proteza dentare zakonisht është zgjedhje e mirë nëse:',
    fit: [
      'Keni humbur të gjithë dhëmbët e njërës ose të dyja nofullave dhe doni sërish një buzëqeshje të plotë',
      'Ju mungojnë disa dhëmbë dhe kërkoni një mënyrë të lëvizshme për të mbushur boshllëqet',
      'Preferoni një zgjidhje pa kirurgji, ose implantet nuk ju përshtaten tani për tani',
      'Duhet të zëvendësoni shumë dhëmbë me kosto më të ulët se zgjidhjet mbi implante',
      'Keni proteza të vjetra që lëvizin, janë konsumuar ose nuk i përshtaten më fytyrës suaj',
      'Do t’ju hiqen dhëmbët e mbetur dhe keni nevojë për një plan zëvendësimi',
    ],
    fitNote:
      'Nëse një protezë që lëviz është tashmë problemi juaj kryesor, ose doni dhëmbë që nuk hiqen, na pyesni për zgjidhjet mbi implante si All-on-4 ose All-on-6. Ju shpjegojmë hapur të dyja rrugët para se të vendosni.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'Proteza punohet në disa takime brenda një qëndrimi prej 7 ditësh, dhe çdo fazë kontrollohet me ju para se të kalojmë te tjetra:',
    steps: [
      { title: 'Ekzaminimi dhe planifikimi', text: 'Ekzaminojmë mishrat, dhëmbët e mbetur dhe nofullat, bëjmë imazherinë e nevojshme dhe biem dakord për llojin e duhur të protezës.' },
      { title: 'Matjet', text: 'Merren matje të detajuara të mishrave dhe dhëmbëve dhe dërgohen në laborator, ku formësohet baza e protezës.' },
      { title: 'Kafshimi dhe zgjedhja e dhëmbëve', text: 'Regjistrojmë kafshimin dhe zgjedhim bashkë me ju formën, madhësinë dhe ngjyrën e dhëmbëve, sipas fytyrës suaj.' },
      { title: 'Prova në dyll', text: 'I shihni dhe i ndieni dhëmbët në gojë para se proteza të përfundojë. Forma, ngjyra dhe kafshimi mund të ndryshohen ende.' },
      { title: 'Vendosja dhe rregullimet', text: 'Proteza e përfunduar vendoset, kontrollohet për rehati dhe kafshim, dhe rregullohet para nisjes. Ju tregojmë si ta mbani dhe ta pastroni.' },
    ],
    whyBandTitle: 'Pse Veneer Clinic për protezën tuaj dentare?',
    whyBandText:
      'Proteza juaj formësohet sipas fytyrës suaj, jo nga një set standard. E shihni para se të përfundojë, përshtatja kontrollohet me kujdes para se të ktheheni në shtëpi dhe ju themi hapur kur një zgjidhje mbi implante do t’ju shërbente më mirë. Çdo fazë është në ofertën e detajuar me shkrim.',
    caseText: 'Protezë e punuar sipas fytyrës',
    faq: [
      { question: 'Sa kushton një protezë dentare?', answer: 'Një protezë e plotë ose e pjesshme kushton 600 € për nofull. Çmimi përfshin matjet, regjistrimin e kafshimit, provën në dyll, vendosjen përfundimtare dhe rregullimet para nisjes. Nëse më parë nevojiten heqje dhëmbësh ose mbushje, këto shfaqen veçmas në ofertën me shkrim.' },
      { question: 'Sa kohë duhet për të pasur protezën?', answer: 'Rreth 7 ditë në Tiranë, me disa takime: ekzaminimi dhe matjet, regjistrimi i kafshimit, prova në dyll dhe vendosja përfundimtare me rregullimet. Nëse më parë nevojiten heqje dhëmbësh, mbushje ose trajtim i mishrave, këto planifikohen para protezës. Plani i trajtimit ju tregon kalendarin e saktë.' },
      { question: 'A do të duket natyrale proteza ime?', answer: 'Po. Forma, madhësia dhe ngjyra e dhëmbëve zgjidhen sipas fytyrës suaj, dhe baza me ngjyrën e mishit punohet që të duket si mish i vërtetë. Në provë i shihni dhëmbët në gojë para se proteza të përfundojë, dhe mund të ndryshojmë çdo gjë që nuk ju pëlqen.' },
      { question: 'A do të mund të ha normalisht?', answer: 'Me praktikë, shumica e njerëzve hanë rehat me protezë, por duhen 2 deri në 4 javë për t’u mësuar. Filloni me ushqime të buta të prera në copa të vogla dhe përtypni nga të dyja anët njëkohësisht. Ushqimet shumë të forta, ngjitëse ose që përtypen gjatë mbeten më të vështira se me dhëmbë natyralë. Nëse përtypja është përparësi, dhëmbët mbi implante japin një kafshim shumë më të fortë.' },
      { question: 'A ndikon proteza në të folur?', answer: 'Ditët e para zëri mund të tingëllojë pak ndryshe ndërsa gjuha dhe buzët mësohen. Leximi me zë të lartë ndihmon. Shumica e njerëzve flasin normalisht brenda një ose dy javësh. Nëse disa tinguj mbeten të vështirë, proteza mund të rregullohet.' },
      { question: 'Pse më lëviz proteza e poshtme?', answer: 'Proteza e plotë e poshtme ka më pak sipërfaqe mbështetjeje se e sipërmja, dhe gjuha e faqet e lëvizin më shumë. Kjo është ankesë e zakonshme. Një protezë e punuar mirë ndihmon, dhe një ngjitës për proteza mund të japë më shumë siguri. Për stabilitet afatgjatë, implantet janë zgjidhja më efektive, sepse e mbajnë protezën fort në vend.' },
      { question: 'Protezë apo implante?', answer: 'Varet nga përparësitë, kocka dhe buxheti juaj. Proteza nuk kërkon kirurgji, është më e shpejtë dhe më ekonomike. Dhëmbët mbi implante, si All-on-4 ose All-on-6 mbi implante MegaGen, janë të fiksuar, shumë më të qëndrueshëm dhe ndihmojnë në ruajtjen e kockës, por kërkojnë kirurgji dhe rreth gjashtë muaj shërim ndërmjet dy udhëtimeve. Ju shpjegojmë hapur të dyja mundësitë dhe, nëse doni t’i krahasoni, i tregojmë të dyja në ofertën me shkrim.' },
      { question: 'A dhemb proteza?', answer: 'Një protezë e re mund të shkaktojë pika që vrasin ditët e para, ndërsa mishrat përshtaten. Janë të zakonshme dhe zgjidhen lehtë me rregullime të vogla, prandaj i bëjmë para se të ktheheni në shtëpi. Një protezë që vazhdon të dhembë pas dy javëve të para nuk është normale. Kontrollojeni në vend që ta duroni.' },
      { question: 'Si ta pastroj protezën?', answer: 'Hiqeni dhe lajeni çdo ditë me një furçë të butë dhe pastrues për proteza. Shmangni pastën e zakonshme të dhëmbëve, që mund ta gërvishtë sipërfaqen. Shpëlajeni pas ushqimit. Kur nuk e keni në gojë, mbajeni në ujë që të mos thahet. Pastroni edhe mishrat, gjuhën dhe dhëmbët natyralë të mbetur.' },
      { question: 'A mund të fle me protezë?', answer: 'Zakonisht rekomandojmë ta hiqni natën. Kështu mishrat pushojnë dhe ulet rreziku i infeksioneve poshtë protezës. Në raste të veçanta dentisti mund t’ju këshillojë ndryshe, për shembull ditët e para pas heqjes së dhëmbëve.' },
      { question: 'Çfarë përfshin oferta?', answer: 'Oferta e detajuar me shkrim përfshin llojin e protezës, numrin e nofullave dhe çdo gjë që nevojitet më parë, si heqje dhëmbësh ose mbushje, secila në rresht më vete. Nëse doni ta krahasoni protezën me një zgjidhje mbi implante, mund t’i tregojmë të dyja. Pasi të nisë trajtimi, nuk shtohet asgjë që nuk e kemi diskutuar më parë me ju.' },
    ],
  },
  en: {
    name: 'Dentures',
    eyebrow: 'Crowns & dentures · Albania',
    subtitle: 'Custom full or partial dentures that restore your smile, chewing and speech, without surgery.',
    lead: 'Removable teeth made for your mouth and face, so you can eat, speak and smile with confidence again, without surgery.',
    kicker: 'Dentures in Tirana, Albania',
    articleTitle: 'Dentures in Tirana: a natural smile without surgery',
    intro: [
      'Dentures are custom removable teeth that replace some or all missing teeth, without surgery.',
      'They restore the ability to chew and speak clearly, support the lips and cheeks so the face does not look sunken, and give you a natural-looking smile. A full denture replaces all the teeth in one jaw. A partial denture fills the gaps between your remaining natural teeth and clips onto them for support.',
      'At Veneer Clinic, a full or partial denture costs €600 per jaw, and all the work, from impressions to fitting, is done within a 7-day stay.',
    ],
    sections: [
      {
        title: 'Made for your face, not from a catalogue',
        intro: [
          'A good denture is not just a row of teeth. The shape, size and shade of the teeth are chosen to suit your face, age and skin tone. The position of the teeth affects how your lips sit, how full your cheeks look and how you pronounce certain sounds. That is why we take time over the measurements and let you see the teeth in your mouth before the denture is finished.',
        ],
      },
      {
        title: 'Full and partial dentures',
        intro: [
          'A full denture sits on the gums and is held in place by suction and the shape of the jaw. An upper denture usually holds well because it covers the palate. A lower one has less supporting surface and moves more easily, and we talk about this openly from the start.',
          'A partial denture replaces one or several missing teeth and is supported by your remaining teeth. Before it is made, decay or gum problems on the remaining teeth are treated, because the denture depends on them.',
        ],
      },
      {
        title: 'An honest look at the alternatives',
        intro: [
          'A denture is the most economical way to replace many missing teeth, and for many people it works very well. It is not for everyone. If a moving lower denture is already a problem, or you want fixed teeth, an implant solution may be the better investment. At Veneer Clinic, All-on-4 and All-on-6 on MegaGen implants give you fixed teeth that do not come out. Implants need about six months of healing, so this route is done over two trips.',
          'We explain both routes clearly, including the trade-offs, and your detailed written quote shows exactly what each includes.',
        ],
      },
      {
        title: 'How a denture is made and fitted',
        intro: ['A denture is made in stages, and each stage builds on the previous one. The time spent here makes the difference between a denture that fits well and one that rubs.'],
        inline: [
          { title: 'Examination and planning.', text: 'The dentist examines your gums, remaining teeth and jawbone, and takes the imaging needed. If remaining teeth need fillings, extraction or gum treatment, these are planned first. Here we also assess whether a full, partial or implant-supported solution suits you.' },
          { title: 'Impressions.', text: 'Detailed impressions of your gums and remaining teeth are taken and sent to the lab. For full dentures, the impressions reproduce the shape of the ridges and palate, which is what gives the denture its retention.' },
          { title: 'Bite and tooth selection.', text: 'Next we record how your jaws relate to each other and how much space the teeth should take. Together we choose the shape, size and shade of the teeth, looking at your face, lips and any old photos of your natural smile you would like to bring.' },
          { title: 'Wax try-in.', text: 'Before the denture is finished, the teeth are set in wax and tried in your mouth. You can see how they look when you smile and talk, and we check the bite. If you want the teeth longer, lighter or positioned differently, this is the moment to change it.' },
          { title: 'Fitting and adjustments.', text: 'The finished denture is fitted and checked for comfort, bite and pressure points. Adjustments are made before you fly home, and we show you how to put in, remove and clean the denture. For a partial denture we also check how well it clips onto your natural teeth.' },
          { title: 'Getting used to it.', text: 'A new denture always feels strange at first. For a few days your voice may sound slightly different and eating takes practice. Start with soft foods cut into small pieces, chewing on both sides at once. Sore spots are common in the first days and easily adjusted. It usually takes 2 to 4 weeks to get fully used to it.' },
        ],
      },
    ],
    stats: [
      { value: '7 days', label: 'Stay in Tirana' },
      { value: 'No surgery', label: 'Procedure' },
      { value: 'Try-in', label: 'Before it is finished' },
      { value: '2–4 weeks', label: 'To get used to it' },
    ],
    priceTitle: 'Price',
    priceNote: 'Per jaw, full or partial',
    whatTitle: 'What are dentures?',
    what: [
      'Dentures are custom-made removable teeth on a gum-coloured base. A full denture replaces all the teeth in one jaw, while a partial denture fills the gaps and is supported by your remaining teeth.',
      'They are made without surgery, in several stages: impressions, bite registration, wax try-in and final fitting with adjustments, all within a 7-day stay.',
    ],
    calloutTitle: 'You see your new teeth before they are finished',
    calloutText:
      'At the wax try-in you see and feel the teeth in your mouth before the denture is finished. Shape, shade, length and bite can still be changed, so the final denture looks and feels the way we agreed.',
    compareTitle: 'A denture or fixed teeth?',
    compareIntro: 'The right solution depends on how many teeth are missing, the health of your gums and what you expect from your new teeth:',
    compare: [
      { id: 'denture', tag: 'This treatment', title: 'Removable denture', text: 'Full or partial, without surgery, made and fitted within a 7-day stay. The most economical option.' },
      { id: 'all-on-4', tag: 'Fixed alternative', title: 'All-on-4', text: 'A full fixed bridge on four MegaGen implants. Requires surgery and about 6 months of healing between trips.' },
      { id: 'all-on-6', tag: 'More support', title: 'All-on-6', text: 'A full bridge on six implants, for more stability where the bone allows.' },
    ],
    fitTitle: 'Is a denture right for you?',
    fitIntro: 'A denture is usually a good choice if:',
    fit: [
      'You have lost all the teeth in one or both jaws and want a full smile again',
      'You are missing several teeth and want a removable way to fill the gaps',
      'You prefer a solution without surgery, or implants do not suit you at the moment',
      'You need to replace many teeth at a lower cost than implant solutions',
      'You have old dentures that move, are worn or no longer suit your face',
      'Your remaining teeth are going to be removed and you need a replacement plan',
    ],
    fitNote:
      'If a moving denture is already your main problem, or you want teeth that do not come out, ask us about implant solutions such as All-on-4 or All-on-6. We explain both routes openly before you decide.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'The denture is made over several appointments within a 7-day stay, and each stage is checked with you before we move on:',
    steps: [
      { title: 'Examination and planning', text: 'We examine your gums, remaining teeth and jaws, take the imaging needed and agree on the right type of denture.' },
      { title: 'Impressions', text: 'Detailed impressions of gums and teeth are taken and sent to the lab, where the denture base is shaped.' },
      { title: 'Bite and tooth selection', text: 'We record your bite and choose the shape, size and shade of the teeth with you, to suit your face.' },
      { title: 'Wax try-in', text: 'You see and feel the teeth in your mouth before the denture is finished. Shape, shade and bite can still be changed.' },
      { title: 'Fitting and adjustments', text: 'The finished denture is fitted, checked for comfort and bite, and adjusted before you leave. We show you how to wear and clean it.' },
    ],
    whyBandTitle: 'Why Veneer Clinic for your denture?',
    whyBandText:
      'Your denture is shaped to your face, not taken from a standard set. You see it before it is finished, the fit is carefully checked before you fly home and we tell you openly when an implant solution would serve you better. Every stage is in the detailed written quote.',
    caseText: 'A denture shaped to the face',
    faq: [
      { question: 'How much does a denture cost?', answer: 'A full or partial denture costs €600 per jaw. The price includes impressions, bite registration, the wax try-in, final fitting and adjustments before you leave. If extractions or fillings are needed first, they appear separately in your written quote.' },
      { question: 'How long does it take to get a denture?', answer: 'About 7 days in Tirana, with several appointments: examination and impressions, bite registration, wax try-in and final fitting with adjustments. If extractions, fillings or gum treatment are needed first, these are planned before the denture. Your treatment plan shows the exact schedule.' },
      { question: 'Will my denture look natural?', answer: 'Yes. The shape, size and shade of the teeth are chosen to suit your face, and the gum-coloured base is made to look like real gum. At the try-in you see the teeth in your mouth before the denture is finished, and we can change anything you do not like.' },
      { question: 'Will I be able to eat normally?', answer: 'With practice, most people eat comfortably with a denture, but it takes 2 to 4 weeks to get used to it. Start with soft foods cut into small pieces and chew on both sides at once. Very hard, sticky or chewy foods remain harder than with natural teeth. If chewing is a priority, implant-supported teeth give a much stronger bite.' },
      { question: 'Will a denture affect my speech?', answer: 'In the first days your voice may sound slightly different while your tongue and lips adapt. Reading aloud helps. Most people speak normally within one or two weeks. If certain sounds remain difficult, the denture can be adjusted.' },
      { question: 'Why does my lower denture move?', answer: 'A full lower denture has less supporting surface than an upper one, and the tongue and cheeks move it more. This is a common complaint. A well-made denture helps, and a denture adhesive can give extra security. For long-term stability, implants are the most effective solution because they hold the denture firmly in place.' },
      { question: 'Denture or implants?', answer: 'It depends on your priorities, bone and budget. A denture needs no surgery, is quicker and more economical. Implant-supported teeth, such as All-on-4 or All-on-6 on MegaGen implants, are fixed, much more stable and help preserve bone, but they need surgery and about six months of healing between two trips. We explain both options openly and, if you want to compare them, show both in your written quote.' },
      { question: 'Does a denture hurt?', answer: 'A new denture can cause sore spots in the first days while the gums adapt. These are common and easily solved with small adjustments, which is why we make them before you fly home. A denture that keeps hurting after the first two weeks is not normal. Have it checked rather than putting up with it.' },
      { question: 'How do I clean my denture?', answer: 'Remove and clean it daily with a soft brush and denture cleaner. Avoid ordinary toothpaste, which can scratch the surface. Rinse it after eating. When it is out of your mouth, keep it in water so it does not dry out. Clean your gums, tongue and any remaining natural teeth too.' },
      { question: 'Can I sleep with my denture?', answer: 'We usually recommend removing it at night. This lets your gums rest and lowers the risk of infection under the denture. In particular cases the dentist may advise otherwise, for example in the first days after extractions.' },
      { question: 'What does the quote include?', answer: 'Your detailed written quote includes the type of denture, the number of jaws and anything needed first, such as extractions or fillings, each on its own line. If you want to compare the denture with an implant solution, we can show both. Once treatment starts, nothing is added that we have not discussed with you first.' },
    ],
  },
  de: {
    name: 'Zahnprothesen',
    eyebrow: 'Kronen & Prothesen · Albanien',
    subtitle: 'Individuelle Voll- oder Teilprothesen, die Ihnen Lächeln, Kauen und Sprechen zurückgeben, ohne chirurgischen Eingriff.',
    lead: 'Herausnehmbare Zähne, gefertigt für Ihren Mund und Ihr Gesicht, damit Sie wieder sicher essen, sprechen und lächeln, ohne Chirurgie.',
    kicker: 'Zahnprothesen in Tirana, Albanien',
    articleTitle: 'Zahnprothesen in Tirana: ein natürliches Lächeln ohne Chirurgie',
    intro: [
      'Zahnprothesen sind individuell gefertigte herausnehmbare Zähne, die einige oder alle fehlenden Zähne ersetzen, ohne Chirurgie.',
      'Sie stellen das Kauen und deutliche Sprechen wieder her, stützen Lippen und Wangen, damit das Gesicht nicht eingefallen wirkt, und geben Ihnen ein natürlich aussehendes Lächeln. Eine Vollprothese ersetzt alle Zähne eines Kiefers. Eine Teilprothese füllt die Lücken zwischen Ihren verbliebenen natürlichen Zähnen und hält sich an ihnen fest.',
      'In der Veneer Clinic kostet eine Voll- oder Teilprothese 600 € pro Kiefer, und die gesamte Arbeit, vom Abdruck bis zur Eingliederung, erfolgt innerhalb eines Aufenthalts von 7 Tagen.',
    ],
    sections: [
      {
        title: 'Für Ihr Gesicht gefertigt, nicht aus dem Katalog',
        intro: [
          'Eine gute Prothese ist nicht einfach eine Zahnreihe. Form, Größe und Farbe der Zähne werden passend zu Gesicht, Alter und Hautton gewählt. Die Stellung der Zähne beeinflusst, wie die Lippen liegen, wie voll die Wangen wirken und wie Sie bestimmte Laute aussprechen. Deshalb nehmen wir uns Zeit für die Abdrücke und lassen Sie die Zähne im Mund sehen, bevor die Prothese fertig ist.',
        ],
      },
      {
        title: 'Voll- und Teilprothese',
        intro: [
          'Die Vollprothese liegt auf dem Zahnfleisch und hält durch Saugwirkung und die Form des Kiefers. Die obere hält meist gut, weil sie den Gaumen bedeckt. Die untere hat weniger Auflagefläche und bewegt sich leichter, und darüber sprechen wir von Anfang an offen.',
          'Eine Teilprothese ersetzt einen oder mehrere fehlende Zähne und stützt sich auf die verbliebenen Zähne. Bevor sie gefertigt wird, werden Karies oder Zahnfleischprobleme an den Restzähnen behandelt, denn die Prothese hängt von ihnen ab.',
        ],
      },
      {
        title: 'Ein ehrlicher Blick auf die Alternativen',
        intro: [
          'Eine Prothese ist der wirtschaftlichste Weg, viele fehlende Zähne zu ersetzen, und für viele Menschen funktioniert sie sehr gut. Sie ist nicht für jeden. Ist eine wackelnde Unterkieferprothese bereits ein Problem oder möchten Sie feste Zähne, kann eine Implantatlösung die bessere Investition sein. In der Veneer Clinic geben Ihnen All-on-4 und All-on-6 auf MegaGen-Implantaten feste Zähne, die nicht herausgenommen werden. Implantate brauchen etwa sechs Monate Heilung, daher erfolgt dieser Weg in zwei Reisen.',
          'Wir erklären beide Wege klar, einschließlich der Kompromisse, und Ihr detailliertes schriftliches Angebot zeigt genau, was jeder umfasst.',
        ],
      },
      {
        title: 'So wird eine Zahnprothese gefertigt und eingesetzt',
        intro: ['Eine Prothese wird in Phasen gefertigt, und jede Phase baut auf der vorherigen auf. Die Zeit, die man hier investiert, macht den Unterschied zwischen einer gut sitzenden Prothese und einer, die drückt.'],
        inline: [
          { title: 'Untersuchung und Planung.', text: 'Der Zahnarzt untersucht Zahnfleisch, Restzähne und Kieferknochen und macht die nötige Bildgebung. Brauchen die Restzähne Füllungen, eine Extraktion oder Zahnfleischbehandlung, wird das zuerst geplant. Hier beurteilen wir auch, ob eine Voll-, Teil- oder implantatgetragene Lösung zu Ihnen passt.' },
          { title: 'Abdrücke.', text: 'Detaillierte Abdrücke von Zahnfleisch und Restzähnen werden genommen und ins Labor geschickt. Bei Vollprothesen geben die Abdrücke die Form von Kieferkamm und Gaumen wieder, die der Prothese ihren Halt gibt.' },
          { title: 'Biss und Zahnauswahl.', text: 'Dann registrieren wir, wie die Kiefer zueinander stehen und wie viel Platz die Zähne einnehmen sollen. Gemeinsam wählen wir Form, Größe und Farbe der Zähne, mit Blick auf Gesicht, Lippen und alte Fotos Ihres natürlichen Lächelns, die Sie gern mitbringen können.' },
          { title: 'Wachseinprobe.', text: 'Bevor die Prothese fertig ist, werden die Zähne in Wachs aufgestellt und im Mund anprobiert. Sie sehen, wie sie beim Lächeln und Sprechen aussehen, und wir prüfen den Biss. Möchten Sie die Zähne länger, heller oder anders gestellt, ist jetzt der Moment für Änderungen.' },
          { title: 'Eingliederung und Anpassungen.', text: 'Die fertige Prothese wird eingesetzt und auf Komfort, Biss und Druckstellen geprüft. Anpassungen erfolgen vor Ihrer Heimreise, und wir zeigen Ihnen, wie Sie die Prothese einsetzen, herausnehmen und reinigen. Bei einer Teilprothese prüfen wir auch, wie gut sie an den natürlichen Zähnen hält.' },
          { title: 'Eingewöhnung.', text: 'Eine neue Prothese fühlt sich anfangs immer ungewohnt an. Einige Tage kann die Stimme etwas anders klingen, und Essen erfordert Übung. Beginnen Sie mit weicher Kost in kleinen Stücken und kauen Sie auf beiden Seiten gleichzeitig. Druckstellen sind in den ersten Tagen häufig und leicht zu beheben. Die vollständige Eingewöhnung dauert meist 2 bis 4 Wochen.' },
        ],
      },
    ],
    stats: [
      { value: '7 Tage', label: 'Aufenthalt in Tirana' },
      { value: 'Ohne OP', label: 'Verfahren' },
      { value: 'Einprobe', label: 'Vor der Fertigstellung' },
      { value: '2–4 Wochen', label: 'Eingewöhnung' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Pro Kiefer, Voll- oder Teilprothese',
    whatTitle: 'Was sind Zahnprothesen?',
    what: [
      'Zahnprothesen sind individuell gefertigte herausnehmbare Zähne auf einer zahnfleischfarbenen Basis. Eine Vollprothese ersetzt alle Zähne eines Kiefers, eine Teilprothese füllt die Lücken und stützt sich auf die Restzähne.',
      'Sie werden ohne Chirurgie in mehreren Phasen gefertigt: Abdruck, Bissregistrierung, Wachseinprobe und Eingliederung mit Anpassungen, alles innerhalb eines Aufenthalts von 7 Tagen.',
    ],
    calloutTitle: 'Sie sehen Ihre neuen Zähne, bevor sie fertig sind',
    calloutText:
      'Bei der Wachseinprobe sehen und spüren Sie die Zähne im Mund, bevor die Prothese fertig ist. Form, Farbe, Länge und Biss können noch geändert werden, damit die fertige Prothese so aussieht und sich so anfühlt, wie vereinbart.',
    compareTitle: 'Prothese oder feste Zähne?',
    compareIntro: 'Die richtige Lösung hängt davon ab, wie viele Zähne fehlen, wie gesund das Zahnfleisch ist und was Sie von den neuen Zähnen erwarten:',
    compare: [
      { id: 'denture', tag: 'Diese Behandlung', title: 'Herausnehmbare Prothese', text: 'Voll oder teilweise, ohne Chirurgie, gefertigt und eingesetzt innerhalb von 7 Tagen. Die wirtschaftlichste Option.' },
      { id: 'all-on-4', tag: 'Feste Alternative', title: 'All-on-4', text: 'Eine vollständige feste Brücke auf vier MegaGen-Implantaten. Erfordert Chirurgie und etwa 6 Monate Heilung zwischen den Reisen.' },
      { id: 'all-on-6', tag: 'Mehr Halt', title: 'All-on-6', text: 'Eine vollständige Brücke auf sechs Implantaten, für mehr Stabilität, wo der Knochen es erlaubt.' },
    ],
    fitTitle: 'Ist eine Zahnprothese das Richtige für Sie?',
    fitIntro: 'Eine Zahnprothese ist meist eine gute Wahl, wenn:',
    fit: [
      'Sie alle Zähne in einem oder beiden Kiefern verloren haben und wieder ein volles Lächeln möchten',
      'Ihnen mehrere Zähne fehlen und Sie eine herausnehmbare Lösung für die Lücken suchen',
      'Sie eine Lösung ohne Chirurgie bevorzugen oder Implantate derzeit nicht passen',
      'Sie viele Zähne günstiger ersetzen müssen als mit Implantatlösungen',
      'Sie alte Prothesen haben, die wackeln, abgenutzt sind oder nicht mehr zu Ihrem Gesicht passen',
      'Ihre Restzähne entfernt werden und Sie einen Ersatzplan brauchen',
    ],
    fitNote:
      'Ist eine wackelnde Prothese bereits Ihr Hauptproblem oder möchten Sie Zähne, die nicht herausgenommen werden, fragen Sie uns nach Implantatlösungen wie All-on-4 oder All-on-6. Wir erklären beide Wege offen, bevor Sie entscheiden.',
    stepsTitle: 'So läuft die Behandlung ab',
    stepsIntro: 'Die Prothese wird in mehreren Terminen innerhalb von 7 Tagen gefertigt, und jede Phase wird mit Ihnen geprüft, bevor wir weitergehen:',
    steps: [
      { title: 'Untersuchung und Planung', text: 'Wir untersuchen Zahnfleisch, Restzähne und Kiefer, machen die nötige Bildgebung und stimmen die richtige Prothesenart ab.' },
      { title: 'Abdrücke', text: 'Detaillierte Abdrücke von Zahnfleisch und Zähnen gehen ins Labor, wo die Prothesenbasis geformt wird.' },
      { title: 'Biss und Zahnauswahl', text: 'Wir registrieren den Biss und wählen mit Ihnen Form, Größe und Farbe der Zähne passend zu Ihrem Gesicht.' },
      { title: 'Wachseinprobe', text: 'Sie sehen und spüren die Zähne im Mund, bevor die Prothese fertig ist. Form, Farbe und Biss können noch geändert werden.' },
      { title: 'Eingliederung und Anpassungen', text: 'Die fertige Prothese wird eingesetzt, auf Komfort und Biss geprüft und vor der Abreise angepasst. Wir zeigen Ihnen Tragen und Reinigung.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für Ihre Zahnprothese?',
    whyBandText:
      'Ihre Prothese wird nach Ihrem Gesicht geformt, nicht aus einem Standardset. Sie sehen sie, bevor sie fertig ist, die Passform wird vor Ihrer Heimreise sorgfältig geprüft, und wir sagen Ihnen offen, wenn eine Implantatlösung Ihnen besser dienen würde. Jede Phase steht im detaillierten schriftlichen Angebot.',
    caseText: 'Eine Prothese nach dem Gesicht geformt',
    faq: [
      { question: 'Was kostet eine Zahnprothese?', answer: 'Eine Voll- oder Teilprothese kostet 600 € pro Kiefer. Der Preis umfasst Abdrücke, Bissregistrierung, Wachseinprobe, Eingliederung und Anpassungen vor der Abreise. Sind vorher Extraktionen oder Füllungen nötig, stehen sie separat im schriftlichen Angebot.' },
      { question: 'Wie lange dauert es bis zur Prothese?', answer: 'Etwa 7 Tage in Tirana, mit mehreren Terminen: Untersuchung und Abdrücke, Bissregistrierung, Wachseinprobe und Eingliederung mit Anpassungen. Sind vorher Extraktionen, Füllungen oder Zahnfleischbehandlung nötig, werden sie vor der Prothese geplant. Ihr Behandlungsplan zeigt den genauen Zeitplan.' },
      { question: 'Sieht meine Prothese natürlich aus?', answer: 'Ja. Form, Größe und Farbe der Zähne werden passend zu Ihrem Gesicht gewählt, und die zahnfleischfarbene Basis wird so gefertigt, dass sie wie echtes Zahnfleisch aussieht. Bei der Einprobe sehen Sie die Zähne im Mund, bevor die Prothese fertig ist, und wir können alles ändern, was Ihnen nicht gefällt.' },
      { question: 'Kann ich normal essen?', answer: 'Mit etwas Übung essen die meisten bequem mit Prothese, die Eingewöhnung dauert aber 2 bis 4 Wochen. Beginnen Sie mit weicher Kost in kleinen Stücken und kauen Sie auf beiden Seiten gleichzeitig. Sehr harte, klebrige oder zähe Speisen bleiben schwieriger als mit natürlichen Zähnen. Ist das Kauen eine Priorität, geben implantatgetragene Zähne einen viel stärkeren Biss.' },
      { question: 'Beeinflusst die Prothese das Sprechen?', answer: 'In den ersten Tagen kann die Stimme etwas anders klingen, während sich Zunge und Lippen gewöhnen. Lautes Lesen hilft. Die meisten sprechen nach ein bis zwei Wochen normal. Bleiben bestimmte Laute schwierig, kann die Prothese angepasst werden.' },
      { question: 'Warum bewegt sich meine Unterkieferprothese?', answer: 'Eine untere Vollprothese hat weniger Auflagefläche als die obere, und Zunge und Wangen bewegen sie mehr. Das ist eine häufige Beschwerde. Eine gut gefertigte Prothese hilft, und Haftcreme kann zusätzliche Sicherheit geben. Für langfristige Stabilität sind Implantate die wirksamste Lösung, weil sie die Prothese fest an ihrem Platz halten.' },
      { question: 'Prothese oder Implantate?', answer: 'Das hängt von Ihren Prioritäten, Ihrem Knochen und Budget ab. Eine Prothese braucht keine Chirurgie, ist schneller und günstiger. Implantatgetragene Zähne wie All-on-4 oder All-on-6 auf MegaGen-Implantaten sind fest, viel stabiler und helfen, den Knochen zu erhalten, erfordern aber Chirurgie und etwa sechs Monate Heilung zwischen zwei Reisen. Wir erklären beide Möglichkeiten offen und zeigen auf Wunsch beide im schriftlichen Angebot.' },
      { question: 'Tut eine Prothese weh?', answer: 'Eine neue Prothese kann in den ersten Tagen Druckstellen verursachen, während sich das Zahnfleisch anpasst. Das ist häufig und mit kleinen Anpassungen leicht zu lösen, deshalb machen wir sie vor Ihrer Heimreise. Eine Prothese, die nach den ersten zwei Wochen weiter schmerzt, ist nicht normal. Lassen Sie sie kontrollieren, statt es zu ertragen.' },
      { question: 'Wie reinige ich die Prothese?', answer: 'Nehmen Sie sie täglich heraus und reinigen Sie sie mit einer weichen Bürste und Prothesenreiniger. Vermeiden Sie normale Zahnpasta, die die Oberfläche zerkratzen kann. Spülen Sie sie nach dem Essen ab. Wenn sie nicht im Mund ist, bewahren Sie sie in Wasser auf, damit sie nicht austrocknet. Reinigen Sie auch Zahnfleisch, Zunge und verbliebene natürliche Zähne.' },
      { question: 'Kann ich mit der Prothese schlafen?', answer: 'Wir empfehlen meist, sie nachts herauszunehmen. So erholt sich das Zahnfleisch, und das Risiko von Entzündungen unter der Prothese sinkt. In besonderen Fällen kann der Zahnarzt anders raten, etwa in den ersten Tagen nach Extraktionen.' },
      { question: 'Was umfasst das Angebot?', answer: 'Ihr detailliertes schriftliches Angebot umfasst die Prothesenart, die Anzahl der Kiefer und alles, was vorher nötig ist, etwa Extraktionen oder Füllungen, jeweils als eigene Position. Möchten Sie die Prothese mit einer Implantatlösung vergleichen, zeigen wir beides. Nach Behandlungsbeginn kommt nichts hinzu, was wir nicht vorher mit Ihnen besprochen haben.' },
    ],
  },
  it: {
    name: 'Protesi dentarie',
    eyebrow: 'Corone e protesi · Albania',
    subtitle: 'Protesi dentarie totali o parziali su misura, che ti restituiscono sorriso, masticazione e parola, senza intervento chirurgico.',
    lead: 'Denti mobili realizzati per la tua bocca e il tuo viso, per mangiare, parlare e sorridere di nuovo con sicurezza, senza chirurgia.',
    kicker: 'Protesi dentarie a Tirana, Albania',
    articleTitle: 'Protesi dentarie a Tirana: un sorriso naturale senza chirurgia',
    intro: [
      'Le protesi dentarie sono denti mobili su misura che sostituiscono alcuni o tutti i denti mancanti, senza chirurgia.',
      'Restituiscono la capacità di masticare e parlare chiaramente, sostengono labbra e guance perché il viso non sembri incavato, e ti danno un sorriso dall’aspetto naturale. Una protesi totale sostituisce tutti i denti di un’arcata. Una protesi parziale riempie gli spazi tra i denti naturali rimasti e si aggancia a essi per sostegno.',
      'Alla Veneer Clinic, una protesi totale o parziale costa 600 € per arcata, e tutto il lavoro, dalle impronte alla consegna, si fa in un soggiorno di 7 giorni.',
    ],
    sections: [
      {
        title: 'Realizzata per il tuo viso, non da catalogo',
        intro: [
          'Una buona protesi non è solo una fila di denti. Forma, dimensione e colore dei denti si scelgono in base al viso, all’età e al tono della pelle. La posizione dei denti influisce su come stanno le labbra, su quanto appaiono piene le guance e su come pronunci alcuni suoni. Per questo dedichiamo tempo alle impronte e ti facciamo vedere i denti in bocca prima che la protesi sia finita.',
        ],
      },
      {
        title: 'Protesi totale e protesi parziale',
        intro: [
          'La protesi totale poggia sulle gengive e resta in sede grazie all’aspirazione e alla forma dell’arcata. Quella superiore di solito tiene bene perché copre il palato. Quella inferiore ha meno superficie d’appoggio e si muove più facilmente, e ne parliamo apertamente fin dall’inizio.',
          'Una protesi parziale sostituisce uno o più denti mancanti e si appoggia ai denti rimasti. Prima di realizzarla, si trattano carie o problemi gengivali sui denti rimasti, perché la protesi dipende da loro.',
        ],
      },
      {
        title: 'Uno sguardo onesto alle alternative',
        intro: [
          'La protesi è il modo più economico per sostituire molti denti mancanti, e per molte persone funziona molto bene. Non è per tutti. Se una protesi inferiore che si muove è già un problema, o vuoi denti fissi, una soluzione su impianti può essere l’investimento migliore. Alla Veneer Clinic, All-on-4 e All-on-6 su impianti MegaGen ti danno denti fissi che non si tolgono. Gli impianti hanno bisogno di circa sei mesi di guarigione, quindi questa strada si fa in due viaggi.',
          'Ti spieghiamo chiaramente entrambe le strade, compresi i compromessi, e il preventivo scritto dettagliato mostra esattamente cosa comprende ciascuna.',
        ],
      },
      {
        title: 'Come si realizza e applica una protesi dentaria',
        intro: ['La protesi si realizza per fasi, e ogni fase si basa sulla precedente. Il tempo dedicato qui fa la differenza tra una protesi che calza bene e una che fa male.'],
        inline: [
          { title: 'Esame e pianificazione.', text: 'Il dentista esamina gengive, denti rimasti e osso delle arcate, e fa le immagini necessarie. Se i denti rimasti hanno bisogno di otturazioni, estrazioni o trattamento gengivale, si pianificano prima. Qui valutiamo anche se ti è adatta una protesi totale, parziale o una soluzione su impianti.' },
          { title: 'Impronte.', text: 'Si prendono impronte dettagliate delle gengive e dei denti rimasti, e si inviano al laboratorio. Nelle protesi totali, le impronte riproducono la forma delle creste e del palato, che è ciò che dà tenuta alla protesi.' },
          { title: 'Morso e scelta dei denti.', text: 'Poi registriamo come si rapportano le arcate e quanto spazio devono occupare i denti. Scegliamo con te forma, dimensione e colore dei denti, guardando viso, labbra e qualsiasi vecchia foto del tuo sorriso naturale che vuoi portare.' },
          { title: 'Prova in cera.', text: 'Prima che la protesi sia finita, i denti si montano in cera e si provano in bocca. Puoi vedere come appaiono quando sorridi e parli, e noi controlliamo il morso. Se li vuoi più lunghi, più chiari o posizionati diversamente, è il momento di cambiarlo.' },
          { title: 'Consegna e regolazioni.', text: 'La protesi finita si applica e si controlla per comfort, morso e punti di pressione. Le regolazioni si fanno prima del rientro a casa, e ti mostriamo come inserirla, toglierla e pulirla. Nella protesi parziale controlliamo anche quanto bene si aggancia ai denti naturali.' },
          { title: 'Abituarsi alla protesi.', text: 'Una protesi nuova all’inizio sembra sempre strana. Per qualche giorno la voce può suonare un po’ diversa e mangiare richiede pratica. Inizia con cibi morbidi tagliati a pezzetti, masticando su entrambi i lati contemporaneamente. I punti dolenti sono comuni nei primi giorni e si regolano facilmente. Di solito servono 2–4 settimane per abituarsi del tutto.' },
        ],
      },
    ],
    stats: [
      { value: '7 giorni', label: 'Soggiorno a Tirana' },
      { value: 'Senza chirurgia', label: 'Procedura' },
      { value: 'Prova', label: 'Prima della finitura' },
      { value: '2–4 settimane', label: 'Per abituarsi' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Per arcata, totale o parziale',
    whatTitle: 'Cosa sono le protesi dentarie?',
    what: [
      'Le protesi dentarie sono denti mobili su misura su una base color gengiva. Una protesi totale sostituisce tutti i denti di un’arcata, mentre una parziale riempie gli spazi e si appoggia ai denti rimasti.',
      'Si realizzano senza chirurgia, in più fasi: impronte, registrazione del morso, prova in cera e consegna con regolazioni, tutto in un soggiorno di 7 giorni.',
    ],
    calloutTitle: 'Vedi i nuovi denti prima che siano finiti',
    calloutText:
      'Alla prova in cera vedi e senti i denti in bocca prima che la protesi sia finita. Forma, colore, lunghezza e morso si possono ancora cambiare, perché la protesi definitiva appaia e si senta come concordato.',
    compareTitle: 'Protesi o denti fissi?',
    compareIntro: 'La soluzione giusta dipende da quanti denti mancano, dalla salute delle gengive e da cosa ti aspetti dai nuovi denti:',
    compare: [
      { id: 'denture', tag: 'Questo trattamento', title: 'Protesi mobile', text: 'Totale o parziale, senza chirurgia, realizzata e consegnata in un soggiorno di 7 giorni. L’opzione più economica.' },
      { id: 'all-on-4', tag: 'Alternativa fissa', title: 'All-on-4', text: 'Un ponte completo fisso su quattro impianti MegaGen. Richiede chirurgia e circa 6 mesi di guarigione tra i viaggi.' },
      { id: 'all-on-6', tag: 'Più sostegno', title: 'All-on-6', text: 'Un ponte completo su sei impianti, per più stabilità dove l’osso lo permette.' },
    ],
    fitTitle: 'La protesi dentaria è adatta a te?',
    fitIntro: 'La protesi dentaria di solito è una buona scelta se:',
    fit: [
      'Hai perso tutti i denti di una o entrambe le arcate e vuoi di nuovo un sorriso completo',
      'Ti mancano alcuni denti e cerchi un modo rimovibile per riempire gli spazi',
      'Preferisci una soluzione senza chirurgia, o gli impianti non sono adatti a te al momento',
      'Devi sostituire molti denti a un costo inferiore rispetto alle soluzioni su impianti',
      'Hai protesi vecchie che si muovono, sono consumate o non si adattano più al tuo viso',
      'Ti verranno estratti i denti rimasti e hai bisogno di un piano di sostituzione',
    ],
    fitNote:
      'Se una protesi che si muove è già il tuo problema principale, o vuoi denti che non si tolgono, chiedici delle soluzioni su impianti come All-on-4 o All-on-6. Ti spieghiamo apertamente entrambe le strade prima che tu decida.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'La protesi si realizza in più appuntamenti in un soggiorno di 7 giorni, e ogni fase si controlla con te prima di passare alla successiva:',
    steps: [
      { title: 'Esame e pianificazione', text: 'Esaminiamo gengive, denti rimasti e arcate, facciamo le immagini necessarie e concordiamo il tipo di protesi giusto.' },
      { title: 'Impronte', text: 'Si prendono impronte dettagliate di gengive e denti e si inviano al laboratorio, dove si modella la base della protesi.' },
      { title: 'Morso e scelta dei denti', text: 'Registriamo il morso e scegliamo con te forma, dimensione e colore dei denti, in base al tuo viso.' },
      { title: 'Prova in cera', text: 'Vedi e senti i denti in bocca prima che la protesi sia finita. Forma, colore e morso si possono ancora cambiare.' },
      { title: 'Consegna e regolazioni', text: 'La protesi finita si applica, si controlla per comfort e morso, e si regola prima della partenza. Ti mostriamo come portarla e pulirla.' },
    ],
    whyBandTitle: 'Perché Veneer Clinic per la tua protesi dentaria?',
    whyBandText:
      'La tua protesi si modella sul tuo viso, non da un set standard. La vedi prima che sia finita, l’adattamento si controlla con cura prima del rientro e ti diciamo apertamente quando una soluzione su impianti ti servirebbe meglio. Ogni fase è nel preventivo scritto dettagliato.',
    caseText: 'Una protesi modellata sul viso',
    faq: [
      { question: 'Quanto costa una protesi dentaria?', answer: 'Una protesi totale o parziale costa 600 € per arcata. Il prezzo comprende impronte, registrazione del morso, prova in cera, consegna e regolazioni prima della partenza. Se prima servono estrazioni o otturazioni, compaiono separatamente nel preventivo scritto.' },
      { question: 'Quanto tempo serve per avere la protesi?', answer: 'Circa 7 giorni a Tirana, con più appuntamenti: esame e impronte, registrazione del morso, prova in cera e consegna con regolazioni. Se prima servono estrazioni, otturazioni o trattamento gengivale, si pianificano prima della protesi. Il piano di trattamento ti mostra il calendario esatto.' },
      { question: 'La mia protesi sembrerà naturale?', answer: 'Sì. Forma, dimensione e colore dei denti si scelgono in base al tuo viso, e la base color gengiva si realizza perché sembri gengiva vera. Alla prova vedi i denti in bocca prima che la protesi sia finita, e possiamo cambiare tutto ciò che non ti piace.' },
      { question: 'Potrò mangiare normalmente?', answer: 'Con la pratica, la maggior parte delle persone mangia comodamente con la protesi, ma servono 2–4 settimane per abituarsi. Inizia con cibi morbidi tagliati a pezzetti e mastica su entrambi i lati contemporaneamente. I cibi molto duri, appiccicosi o gommosi restano più difficili che con i denti naturali. Se la masticazione è una priorità, i denti su impianti danno un morso molto più forte.' },
      { question: 'La protesi influisce sulla parola?', answer: 'Nei primi giorni la voce può suonare un po’ diversa mentre lingua e labbra si abituano. Leggere ad alta voce aiuta. La maggior parte delle persone parla normalmente entro una o due settimane. Se alcuni suoni restano difficili, la protesi si può regolare.' },
      { question: 'Perché la protesi inferiore si muove?', answer: 'La protesi totale inferiore ha meno superficie d’appoggio di quella superiore, e lingua e guance la muovono di più. È un lamento comune. Una protesi ben fatta aiuta, e un adesivo per protesi può dare più sicurezza. Per una stabilità a lungo termine, gli impianti sono la soluzione più efficace, perché tengono la protesi saldamente in sede.' },
      { question: 'Protesi o impianti?', answer: 'Dipende dalle tue priorità, dall’osso e dal budget. La protesi non richiede chirurgia, è più rapida e più economica. I denti su impianti, come All-on-4 o All-on-6 su impianti MegaGen, sono fissi, molto più stabili e aiutano a preservare l’osso, ma richiedono chirurgia e circa sei mesi di guarigione tra due viaggi. Ti spieghiamo apertamente entrambe le opzioni e, se vuoi confrontarle, le mostriamo entrambe nel preventivo scritto.' },
      { question: 'La protesi fa male?', answer: 'Una protesi nuova può causare punti dolenti nei primi giorni, mentre le gengive si adattano. Sono comuni e si risolvono facilmente con piccole regolazioni, per questo le facciamo prima del tuo rientro. Una protesi che continua a fare male dopo le prime due settimane non è normale. Falla controllare invece di sopportarla.' },
      { question: 'Come pulisco la protesi?', answer: 'Toglila e puliscila ogni giorno con uno spazzolino morbido e un detergente per protesi. Evita il dentifricio normale, che può graffiare la superficie. Sciacquala dopo i pasti. Quando non è in bocca, tienila in acqua perché non si secchi. Pulisci anche gengive, lingua e i denti naturali rimasti.' },
      { question: 'Posso dormire con la protesi?', answer: 'Di solito consigliamo di toglierla di notte. Così le gengive riposano e si riduce il rischio di infezioni sotto la protesi. In casi particolari il dentista può consigliare diversamente, per esempio nei primi giorni dopo le estrazioni.' },
      { question: 'Cosa comprende il preventivo?', answer: 'Il preventivo scritto dettagliato comprende il tipo di protesi, il numero di arcate e tutto ciò che serve prima, come estrazioni o otturazioni, ciascuno su una riga. Se vuoi confrontare la protesi con una soluzione su impianti, possiamo mostrarti entrambe. Una volta iniziato il trattamento, non si aggiunge nulla che non abbiamo discusso prima con te.' },
    ],
  },
};

export default function DenturesPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="denture"
      heroImage={images.results[4]?.[0] ?? images.heroAfter}
      whatImage={images.surgery[10] ?? images.heroAfter}
    />
  );
}
