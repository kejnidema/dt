import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Urë e mbështetur nga implante',
    eyebrow: 'Implante · Shqipëri',
    subtitle: 'Disa dhëmbë të munguar me radhë zëvendësohen mbi dy ose tre implante MegaGen.',
    lead: 'Zëvendësoni disa dhëmbë të munguar radhazi pa gdhendur asnjë dhëmb të shëndetshëm për mbështetje: vetëm dy ose më shumë implante që bëjnë punën.',
    kicker: 'Urë mbi implante në Tiranë, Shqipëri',
    articleTitle: 'Urë mbi implante: zëvendësimi i disa dhëmbëve me më pak implante',
    intro: [
      'Ura mbi implante zëvendëson disa dhëmbë të munguar me radhë, e mbajtur nga dy ose tre implante në vend të njërit për çdo dhëmb.',
      'Në atë fjali është i gjithë argumenti. Nuk ju duhet një implant për çdo dhëmb që mungon, dhe kuptimi i arsyes është ajo që e bën këtë trajtim të përballueshëm në vend se frikësues.',
      'Në Veneer Clinic, ura mbi implante ndërtohet mbi implante titani MegaGen, 500 € për implant, me urë zirkoni ose porcelan-metal Made in Germany. Trajtimi kryhet në dy udhëtime, me gjashtë muaj ndërmjet tyre.',
    ],
    sections: [
      {
        title: 'Pse dy implante mund të mbajnë tre dhëmbë',
        intro: [
          'Implantet janë jashtëzakonisht të forta në ngjeshje. Një urë e ndërtuar mbi dy prej tyre sillet si një pjesë e vetme, duke shpërndarë forcën e kafshimit mes mbështetësve në vend që çdo dhëmb zëvendësues të qëndrojë vetëm.',
          'Kështu një hapësirë me tre dhëmbë kërkon zakonisht dy implante, me dhëmbin e mesit të varur mes tyre. Një hapësirë me katër dhëmbë shpesh kërkon dy a tre.',
          'Kursimi nuk është i vogël. Tre implante të ndara do të thonë tre vende kirurgjikale, tre grupe komponentësh dhe tre shërime. Dy implante dhe një urë do të thonë një ndërhyrje, një shërim dhe një ofertë dukshëm më e ulët, për një rezultat që askush nuk e dallon.',
        ],
      },
      {
        title: 'Çfarë zëvendëson një urë mbi implante',
        inline: [
          { title: 'Një protezë të pjesshme.', text: 'Kapëse, lëvizje, diçka në një gotë natën, dhe mishra që mbajnë një ngarkesë për të cilën nuk ishin bërë. Një urë fikse i jep fund të gjithë kësaj dhe rikthen pjesën më të madhe të forcës natyrale të kafshimit.' },
          { title: 'Një urë klasike.', text: 'E mbajtur nga dhëmbët tuaj, të cilët duhen gdhendur për kurora: dy dhëmbë të shëndetshëm të ndryshuar përgjithmonë dhe pastaj të ngarkuar me punën e katërve. Kur njëri prej tyre dorëzohet, ura shkon bashkë me të.' },
          { title: 'Asgjë fare.', text: 'Mundësia më e zakonshme, dhe më e shtrenjta me kalimin e kohës. Një hapësirë me dhëmbë të munguar lë që fqinjët të anohen, që dhëmbët përballë të zbresin në zbrazëtirë dhe që kocka poshtë të tërhiqet vit pas viti.' },
        ],
      },
      {
        title: 'Sa implante i duhen një ure',
        intro: [
          'Tri gjëra e vendosin: gjatësia e hapësirës, kocka në dispozicion në secilin vend të mundshëm, dhe ku bie forca juaj e kafshimit.',
          'Një urë me tre elemente në nofullën e poshtme, ku kocka është e dendur, është gjë tjetër nga e njëjta hapësirë lart, ku kocka është më e butë. Hapësirat më të gjata kërkojnë më shumë mbështetje, jo se ura do të thyhej, por sepse implantet në skaje do të merrnin shumë levë.',
          'Imazhet e kockës i përgjigjen kësaj para se të planifikohet gjë, dhe numri shkon në ofertë bashkë me arsyetimin. Më shumë implante do të thotë faturë më e madhe, pikërisht prandaj rekomandimi duhet të vijë nga kocka dhe jo nga lista e çmimeve.',
        ],
      },
      {
        title: 'Pse pozicioni ka më shumë rëndësi se simetria',
        intro: [
          'Një keqkuptim i zakonshëm është se implantet duhet të qëndrojnë të shpërndara rregullisht poshtë hapësirës. Ato duhet të shkojnë aty ku kocka është më e mirë.',
          'Këtu qëndron fleksibiliteti i vërtetë i një ure ndaj implanteve të veçanta. Ndërsa një implant i vetëm duhet të jetë poshtë dhëmbit që zëvendëson, një urë mund të ankorohet pak më përpara ose më prapa për të arritur kockë më të dendur, për të shmangur sinusin ose për të qëndruar larg nervit, dhe projektimi i urës e thith ndryshimin.',
          'Është edhe arsyeja pse raste që duken të vështira për implante të veçanta janë shpesh të thjeshta si urë mbi implante.',
        ],
      },
      {
        title: 'Kur kocka është e pakët',
        intro: [
          'Një hapësirë pa dhëmbë prej vitesh do të ketë humbur gjerësi dhe lartësi.',
          'Shpesh zgjidhja është thjesht të vendosen implantet aty ku kocka ka mbetur. Kur kjo nuk mjafton, shtimi i kockës e rindërton vendin, dhe në zonën e pasme të sipërme mund të duhet ngritje sinusi. Të dyja shtojnë një fazë dhe kohë shërimi. Jua themi paraprakisht.',
        ],
      },
      {
        title: 'Kur bëhet hark i plotë',
        intro: [
          'Ka një pikë ku ura pushon së qeni përgjigjja e duhur.',
          'Nëse shumica e dhëmbëve të një harku kanë humbur ose nuk shpëtohen, rindërtimi i tyre me disa ura të ndara është më i ndërlikuar dhe më i shtrenjtë sesa trajtimi i të gjithë harkut njëherësh. Në atë pikë All-on-4 ose All-on-6 janë zakonisht si më të lira ashtu edhe më të parashikueshme. Ju themi hapur në cilën anë të asaj vije bie rasti juaj.',
        ],
      },
      {
        title: 'Cili material ure ju përshtatet?',
        intro: ['Të dyja janë zgjidhje të konsoliduara me histori të gjatë klinike. Zgjedhja varet nga vendi i urës, forca e kafshimit dhe buxheti:'],
        cards: [
          { title: 'Urë zirkoni Made in Germany (e rekomanduar)', text: 'Mjaftueshëm e fortë për dhëmbët e pasmë, nuk njolloset dhe e përcjell dritën si dhëmb, gjë që ka rëndësi aty ku ura duket kur buzëqeshni.' },
          { title: 'Urë porcelan-metal Made in Germany', text: 'Porcelan i shtresuar mbi strukturë metalike. Histori klinike shumë e gjatë, e shkëlqyer nën ngarkesa të forta dhe më ekonomike. Kompromisi është estetik: bërthama metalike nuk e lëshon dritën.' },
        ],
      },
    ],
    stats: [
      { value: '2–3', label: 'Implante për urë' },
      { value: '2', label: 'Udhëtime' },
      { value: '6 muaj', label: 'Ndërmjet udhëtimeve' },
      { value: 'Dekada', label: 'Jetëgjatësia e implanteve' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Ura llogaritet sipas materialit',
    whatTitle: 'Çfarë është një urë mbi implante?',
    what: [
      'Ura mbi implante ka dy pjesë: implantet në kockë dhe ura që i lidh. Punohen, vendosen dhe zëvendësohen në kohë krejt të ndryshme. Implantet janë shtylla titani të vendosura në nofull në pozicionet ku kocka është më e fortë, jo domosdoshmërisht poshtë dhëmbëve që mungojnë.',
      'Ura është një pjesë e vetme e punuar në laborator, me kurora në skaje që ulen mbi implante dhe një a më shumë dhëmbë të varur mes tyre. Vidhoset ose çimentohet mbi implante dhe hiqet vetëm nga dentisti.',
    ],
    calloutTitle: 'Shëndeti juaj i përgjithshëm ka po aq rëndësi sa nofulla',
    calloutText:
      'Diabeti i pakontrolluar, infeksioni aktiv i mishrave, duhani i shpeshtë dhe disa barna për kockat ndikojnë te integrimi i implanteve, prandaj shqyrtojmë historikun tuaj mjekësor para se të planifikojmë. Në shumicën e rasteve menaxhohen, por duhen ditur që në fillim.',
    compareTitle: 'Cila zgjidhje i përshtatet hapësirës suaj?',
    compareIntro: 'Varet nga sa dhëmbë mungojnë dhe nga kocka që keni:',
    compare: [
      { id: 'implant-bridge', tag: 'Ky trajtim', title: 'Urë mbi implante', text: 'Tre ose katër dhëmbë me radhë mbi dy a tre implante. Një ndërhyrje, një shërim dhe pa gdhendur asnjë dhëmb të shëndetshëm.' },
      { id: 'implant-megagen', tag: 'Për një dhëmb', title: 'Implant i vetëm', text: 'Kur mungon vetëm një dhëmb, ose kur dhëmbët që mungojnë nuk janë ngjitur, secili vend merr implantin dhe kurorën e vet.' },
      { id: 'all-on-4', tag: 'Për gjithë harkun', title: 'All-on-4', text: 'Kur shumica e dhëmbëve të një nofulle mungojnë ose nuk shpëtohen, një urë e plotë mbi katër implante është më e thjeshtë se disa ura të ndara.' },
    ],
    fitTitle: 'Për kë është ura mbi implante?',
    fitIntro: 'Ura mbi implante zakonisht është përgjigjja e duhur nëse:',
    fit: [
      'Ju mungojnë tre ose katër dhëmbë ngjitur në të njëjtën nofull',
      'Hapësira është aq e gjerë sa një implant për çdo dhëmb do të ishte i tepërt',
      'Mbani një protezë të pjesshme me kapëse dhe doni diçka fikse',
      'Një urë klasike ka dështuar, ose kanë dështuar dhëmbët që e mbanin',
      'Dhëmbët në të dyja anët e hapësirës janë të shëndetshëm dhe doni t’i lini të paprekur',
      'Keni ende shumicën e dhëmbëve tuaj, ndaj harku i plotë nuk është përgjigjja',
    ],
    fitNote:
      'Numrin e implanteve e vendos kocka juaj dhe kafshimi juaj, jo numri i dhëmbëve që mungojnë. Tre dhëmbë me radhë shumë shpesh kërkojnë vetëm dy implante, dhe kur hapësira është më e gjatë, ju themi çfarë duhet vërtet në vend që t’ju ofrojmë zgjidhjen më të lirë.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'Ura mbi implante kryhet në dy udhëtime, me gjashtë muaj shërimi ndërmjet. Gjithçka përveç pritjes është e shkurtër:',
    steps: [
      { title: 'Vlerësimi dhe imazhet', text: 'Ekzaminim i plotë dhe imazhe të kockës. Vëllimi dhe dendësia përgjatë hapësirës vendosin sa implante duhen dhe ku saktësisht; kjo fazë përcakton koston e gjithë rastit.' },
      { title: 'Vendosja e implanteve', text: 'Implantet vendosen me anestezi lokale në një seancë të vetme. Dy a tre implante zgjasin pak më shumë se një, sepse përgatitja është e përbashkët.' },
      { title: 'Periudha e shërimit', text: 'Gjashtë muaj ndërsa implantet integrohen me kockën. Ktheheni në shtëpi dhe vazhdoni jetën normale; ne mbetemi të kontaktueshëm.' },
      { title: 'Ura sipas kafshimit tuaj', text: 'Në udhëtimin e dytë merren masat dhe ura punohet si një pjesë e vetme, e përshtatur me dhëmbët tuaj në ngjyrë dhe formë.' },
      { title: 'Vendosja e urës', text: 'Ura vendoset mbi implante, kafshimi rregullohet përgjatë gjithë hapësirës, dhe sipërfaqet e poshtme përfundohen që të pastroni mirë poshtë saj.' },
    ],
    whyBandTitle: 'Pse Veneer Clinic për një urë mbi implante?',
    whyBandText:
      'Ju themi sa implante kërkon rasti juaj dhe pse, para se të filloni, dhe në ofertë shkruhen si sistemi i implanteve ashtu edhe materiali i urës. Më shumë implante do të thotë faturë më e madhe, pikërisht prandaj duhet t’ju thuhet çfarë tregon kocka dhe jo çfarë shitet më mirë.',
    caseText: 'Disa dhëmbë të zëvendësuar me urë mbi implante',
    faq: [
      { question: 'Sa kushton një urë mbi implante?', answer: 'Implantet MegaGen kushtojnë 500 € secili, dhe ura llogaritet veçmas sipas materialit (zirkon ose porcelan-metal Made in Germany) dhe numrit të dhëmbëve. Për një hapësirë me tre dhëmbë zakonisht duhen dy implante. Oferta e saktë, me numrin e implanteve dhe materialin, ju dërgohet me shkrim pas vlerësimit të grafisë.' },
      { question: 'Pse jo një implant për çdo dhëmb që mungon?', answer: 'Sepse zakonisht nuk duhet, dhe të paguash për implante që nuk të duhen nuk jep rezultat më të mirë. Dy implante të vendosura mirë e mbajnë rehat një urë me tre elemente, dhe katër dhëmbë me radhë shpesh mbahen mbi dy a tre. Tre implante të veçanta do të thonë tre vende kirurgjikale dhe tre shërime; dy implante dhe një urë, një ndërhyrje dhe një faturë dukshëm më e ulët. Kur dhëmbët nuk janë ngjitur, implantet e veçanta janë më të mira, dhe e themi.' },
      { question: 'Sa implante do të duhen vërtet?', answer: 'Dy ose tre në shumicën e rasteve, dhe e vendos kocka, jo numri i dhëmbëve. Atë e përcaktojnë gjatësia e hapësirës, cilësia e kockës në çdo vend të mundshëm dhe ku bie forca e kafshimit. Numrin jua themi përpara, bashkë me arsyetimin, dhe shkruhet në ofertë. Nëse përgjigjja e ndershme është tre e jo dy, e themi edhe atë.' },
      { question: 'Urë mbi implante apo urë klasike?', answer: 'Ura klasike mbahet nga dhëmbët tuaj: dy dhëmbë të shëndetshëm gdhenden për kurora dhe dhëmbët zëvendësues varen mes tyre. Pa kirurgji, më shpejt, më lirë në fillim, por dy dhëmbë ndryshohen përgjithmonë, mbajnë ngarkesën e tre a katërve dhe kocka poshtë vazhdon të tërhiqet. Ura mbi implante mbahet nga kocka, nuk prek dhëmbët tuaj dhe e ruan kockën. Sa më e gjatë hapësira, aq më shumë anon pesha nga implantet.' },
      { question: 'A është më e mirë se një protezë e pjesshme?', answer: 'Për shumicën e njerëzve po. Proteza e pjesshme mbështetet mbi mishra, kapet me kapëse, hiqet natën, lëviz kur hani dhe me kohë mund t’i lëkundë dhëmbët ku kapet. Ura mbi implante është fikse, pa kapëse, dhe rikthen pjesën më të madhe të forcës së kafshimit. Proteza kushton shumë më pak dhe mbetet zgjidhje e arsyeshme e përkohshme, por si përgjigje përfundimtare është kompromis.' },
      { question: 'Sa zgjat një urë mbi implante?', answer: 'Implantet dhe ura plaken ndryshe. Implantet, me mishra të shëndetshëm dhe higjienë të mirë, zgjasin zakonisht dekada dhe shpesh tërë jetën; ajo që i kërcënon është periimplantiti, kryesisht i parandalueshëm. Ura konsumohet si çdo restaurim, rreth 10 deri në 15 vjet para një zëvendësimi të mundshëm, por zëvendësimi i saj është punë protetike, jo kirurgjikale, sepse implantet mbeten aty ku janë.' },
      { question: 'A dhemb ndërhyrja?', answer: 'Jo më shumë se një implant i vetëm. Zona anestezohet lokalisht dhe vendosja e dy a tre implanteve në të njëjtën zonë zgjat pak më shumë se e njërit, sepse përgatitja është e përbashkët. Ndieni presion dhe lëvizje, jo dhimbje. Ënjtja dhe ndjeshmëria për disa ditë janë normale dhe menaxhohen me qetësues të zakonshëm. Shumica kthehen në aktivitet normal brenda një-dy ditësh.' },
      { question: 'Pse duhen dy udhëtime?', answer: 'Sepse implantet kanë nevojë për rreth gjashtë muaj që të integrohen me kockën para se mbi to të ngarkohet ura, dhe atë afat e cakton shërimi, jo orari. Në udhëtimin e parë bëhen ekzaminimi dhe vendosja e implanteve; në të dytin merren masat dhe vendoset ura. Një urë përfundimtare brenda një jave do të ishte ose e përkohshme, ose e ngarkuar mbi implante të paintegruara.' },
      { question: 'Po nëse nuk kam kockë të mjaftueshme?', answer: 'Është më e shpeshtë te një hapësirë e vjetër, dhe rrallë e përjashton trajtimin. Ndonjëherë mjafton të ndryshohet vendi ku shkojnë implantet, sepse ura ka një fleksibilitet që implanti i vetëm nuk e ka. Kur shtimi i kockës duhet vërtet, shton një fazë dhe kohë shërimi; në zonën e pasme të sipërme ndonjëherë duhet ngritje sinusi. Jua themi paraprakisht.' },
      { question: 'Zirkon apo porcelan-metal?', answer: 'Zirkoni në shumicën e rasteve, sidomos aty ku ura duket kur buzëqeshni: është i fortë për dhëmbët e pasmë, nuk njolloset dhe e përcjell dritën si dhëmb. Porcelan-metali ka histori klinike shumë të gjatë dhe përballon mirë ngarkesat, me kosto më të ulët, por metali e bllokon dritën dhe pas vitesh mund të shfaqet një vijë e errët te mishi. Nëse ura është prapa dhe nuk duket, porcelan-metali është zgjedhje krejt e vlefshme.' },
      { question: 'Si pastrohet poshtë urës?', answer: 'Kjo vendos sa zgjat ura. Mes pjesës së poshtme të urës dhe mishit ka një hapësirë ku mblidhet pllaka, dhe larja e sipërfaqeve të jashtme nuk arrin. Duhet pastruar poshtë urës çdo ditë, me fill të posaçëm, furçë interdentale ose irrigator. Ju tregojmë saktësisht si bëhet dhe largoheni me udhëzime të shkruara.' },
      { question: 'Çfarë ndodh nëse një implant dështon?', answer: 'Është e rrallë, dhe një urë e përballon më mirë nga sa mendohet. Pothuajse të gjitha dështimet ndodhin herët, kur një implant nuk integrohet. Meqë ura mbahet nga më shumë se një implant, humbja e njërit nuk do të thotë humbje e gjithë rastit: ura ndonjëherë riprojektohet mbi implantet e mbetura, ose vendi shërohet dhe vendoset një implant i ri më vonë. Dështimet e vonshme janë pothuajse gjithmonë nga pllaka, prandaj pastrimi dhe kontrollet kanë kaq rëndësi.' },
    ],
  },
  en: {
    name: 'Implant-Supported Bridge',
    eyebrow: 'Implants · Albania',
    subtitle: 'Several missing teeth in a row replaced on two or three MegaGen implants.',
    lead: 'Replace several missing teeth in a row without grinding down a single healthy tooth for support: just two or more implants doing the work.',
    kicker: 'Implant bridge in Tirana, Albania',
    articleTitle: 'Implant bridge: replacing several teeth with fewer implants',
    intro: [
      'An implant-supported bridge replaces several missing teeth in a row, carried by two or three implants instead of one for every tooth.',
      'That sentence holds the whole argument. You do not need an implant for every missing tooth, and understanding why is what makes this treatment affordable rather than daunting.',
      'At Veneer Clinic, implant bridges are built on MegaGen titanium implants, €500 per implant, with a Made in Germany zirconia or metal-ceramic bridge. Treatment is done over two trips, six months apart.',
    ],
    sections: [
      {
        title: 'Why two implants can carry three teeth',
        intro: [
          'Implants are extremely strong under compression. A bridge built on two of them behaves as a single piece, spreading the bite between the supports instead of each replacement tooth standing alone.',
          'So a three-tooth gap usually needs two implants, with the middle tooth suspended between them. A four-tooth gap often needs two or three.',
          'The saving is not small. Three separate implants mean three surgical sites, three sets of components and three healing periods. Two implants and a bridge mean one procedure, one healing period and a noticeably lower quote, for a result nobody can tell apart.',
        ],
      },
      {
        title: 'What an implant bridge replaces',
        inline: [
          { title: 'A partial denture.', text: 'Clasps, movement, something in a glass at night, and gums carrying a load they were never made for. A fixed bridge ends all of that and restores most of your natural bite force.' },
          { title: 'A conventional bridge.', text: 'Held by your own teeth, which have to be ground down for crowns: two healthy teeth altered permanently and then loaded with the work of four. When one of them gives way, the bridge goes with it.' },
          { title: 'Nothing at all.', text: 'The most common option, and the most expensive over time. A gap of missing teeth lets the neighbours tilt in, the opposing teeth drift into the space and the bone below shrink year after year.' },
        ],
      },
      {
        title: 'How many implants a bridge needs',
        intro: [
          'Three things decide it: the length of the gap, the bone available at each possible site, and where your bite force falls.',
          'A three-unit bridge in the lower jaw, where bone is dense, is a different matter from the same gap above, where bone is softer. Longer gaps need more support, not because the bridge would break but because the end implants would take too much leverage.',
          'Imaging of the bone answers this before anything is planned, and the number goes in your quote with the reasoning. More implants mean a bigger bill, which is exactly why the recommendation must come from the bone and not from the price list.',
        ],
      },
      {
        title: 'Why position matters more than symmetry',
        intro: [
          'A common misconception is that implants should be spaced evenly under the gap. They should go where the bone is best.',
          'This is the real flexibility a bridge has over separate implants. While a single implant has to sit under the tooth it replaces, a bridge can be anchored slightly further forward or back to reach denser bone, avoid the sinus or stay clear of the nerve, and the bridge design absorbs the difference.',
          'It is also why cases that look difficult for separate implants are often simple as an implant bridge.',
        ],
      },
      {
        title: 'When bone is thin',
        intro: [
          'A gap that has been without teeth for years will have lost width and height.',
          'Often the solution is simply to place the implants where bone remains. When that is not enough, bone grafting rebuilds the site, and in the upper back jaw a sinus lift may be needed. Both add a phase and healing time. We tell you in advance.',
        ],
      },
      {
        title: 'When it becomes a full arch',
        intro: [
          'There is a point where a bridge stops being the right answer.',
          'If most of the teeth in an arch are missing or cannot be saved, rebuilding them with several separate bridges is more complicated and more expensive than treating the whole arch at once. At that point All-on-4 or All-on-6 is usually both cheaper and more predictable. We tell you openly which side of that line your case falls on.',
        ],
      },
      {
        title: 'Which bridge material suits you?',
        intro: ['Both are established solutions with a long clinical history. The choice depends on where the bridge is, your bite force and your budget:'],
        cards: [
          { title: 'Zirconia bridge, Made in Germany (recommended)', text: 'Strong enough for back teeth, does not stain and transmits light like a tooth, which matters where the bridge shows when you smile.' },
          { title: 'Metal-ceramic bridge, Made in Germany', text: 'Porcelain layered over a metal framework. A very long clinical history, excellent under heavy loads and more economical. The trade-off is aesthetic: the metal core does not let light through.' },
        ],
      },
    ],
    stats: [
      { value: '2–3', label: 'Implants per bridge' },
      { value: '2', label: 'Trips' },
      { value: '6 months', label: 'Between trips' },
      { value: 'Decades', label: 'Implant lifespan' },
    ],
    priceTitle: 'Price',
    priceNote: 'Bridge quoted by material',
    whatTitle: 'What is an implant bridge?',
    what: [
      'An implant bridge has two parts: the implants in the bone and the bridge that connects them. They are made, fitted and replaced at very different times. The implants are titanium posts placed in the jaw where the bone is strongest, not necessarily under the missing teeth.',
      'The bridge is a single lab-made piece, with crowns at the ends that sit on the implants and one or more teeth suspended between them. It is screwed or cemented onto the implants and only removed by the dentist.',
    ],
    calloutTitle: 'Your general health matters as much as the jaw',
    calloutText:
      'Uncontrolled diabetes, active gum infection, frequent smoking and some bone medications affect implant integration, so we review your medical history before planning. In most cases they are manageable, but they need to be known from the start.',
    compareTitle: 'Which solution suits your gap?',
    compareIntro: 'It depends on how many teeth are missing and on the bone you have:',
    compare: [
      { id: 'implant-bridge', tag: 'This treatment', title: 'Implant bridge', text: 'Three or four teeth in a row on two or three implants. One procedure, one healing period and no healthy teeth ground down.' },
      { id: 'implant-megagen', tag: 'For one tooth', title: 'Single implant', text: 'When only one tooth is missing, or the missing teeth are not next to each other, each site gets its own implant and crown.' },
      { id: 'all-on-4', tag: 'For the whole arch', title: 'All-on-4', text: 'When most teeth in a jaw are missing or cannot be saved, one full bridge on four implants is simpler than several separate bridges.' },
    ],
    fitTitle: 'Who is an implant bridge for?',
    fitIntro: 'An implant bridge is usually the right answer if:',
    fit: [
      'You are missing three or four adjacent teeth in the same jaw',
      'The gap is wide enough that one implant per tooth would be excessive',
      'You wear a partial denture with clasps and want something fixed',
      'A conventional bridge has failed, or the teeth holding it have',
      'The teeth on both sides of the gap are healthy and you want to leave them untouched',
      'You still have most of your own teeth, so a full arch is not the answer',
    ],
    fitNote:
      'The number of implants is decided by your bone and your bite, not by the number of missing teeth. Three teeth in a row very often need only two implants, and when the gap is longer we tell you what is really needed rather than quoting the cheapest option.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'An implant bridge is done over two trips, with six months of healing in between. Everything except the wait is short:',
    steps: [
      { title: 'Assessment and imaging', text: 'A full examination and bone imaging. Volume and density along the gap decide how many implants are needed and exactly where; this stage sets the cost of the whole case.' },
      { title: 'Implant placement', text: 'The implants are placed under local anaesthesia in a single session. Two or three implants take a little longer than one, because the preparation is shared.' },
      { title: 'Healing period', text: 'Six months while the implants integrate with the bone. You go home and carry on with normal life; we stay reachable.' },
      { title: 'A bridge to fit your bite', text: 'On the second trip impressions are taken and the bridge is made as a single piece, matched to your teeth in colour and shape.' },
      { title: 'Bridge fitting', text: 'The bridge is fitted on the implants, the bite is adjusted along the whole span, and the underside is finished so you can clean properly beneath it.' },
    ],
    whyBandTitle: 'Why Veneer Clinic for an implant bridge?',
    whyBandText:
      'We tell you how many implants your case needs and why, before you start, and both the implant system and the bridge material are written in your quote. More implants mean a bigger bill, which is exactly why you should be told what the bone shows, not what sells best.',
    caseText: 'Several teeth replaced with an implant bridge',
    faq: [
      { question: 'How much does an implant bridge cost?', answer: 'MegaGen implants cost €500 each, and the bridge is quoted separately according to material (Made in Germany zirconia or metal-ceramic) and number of teeth. A three-tooth gap usually needs two implants. The exact quote, with the number of implants and the material, is sent to you in writing after we assess your X-ray.' },
      { question: 'Why not one implant for every missing tooth?', answer: 'Because it is usually not needed, and paying for implants you do not need does not give a better result. Two well-placed implants comfortably carry a three-unit bridge, and four teeth in a row are often held on two or three. Three separate implants mean three surgical sites and three healing periods; two implants and a bridge mean one procedure and a noticeably lower bill. When the teeth are not adjacent, separate implants are better, and we say so.' },
      { question: 'How many implants will I really need?', answer: 'Two or three in most cases, and the bone decides, not the number of teeth. Gap length, bone quality at each possible site and where the bite falls determine it. We tell you the number in advance with the reasoning, and it is written in your quote. If the honest answer is three rather than two, we tell you that too.' },
      { question: 'Implant bridge or conventional bridge?', answer: 'A conventional bridge is held by your own teeth: two healthy teeth are ground down for crowns and the replacement teeth hang between them. No surgery, faster, cheaper at first, but two teeth are altered forever, carry the load of three or four and the bone below keeps shrinking. An implant bridge is held by the bone, does not touch your teeth and preserves the bone. The longer the gap, the more the balance tips towards implants.' },
      { question: 'Is it better than a partial denture?', answer: 'For most people, yes. A partial denture rests on the gums, holds on with clasps, comes out at night, moves when you eat and over time can loosen the teeth it clips to. An implant bridge is fixed, has no clasps and restores most of your bite force. A denture costs far less and remains a reasonable temporary solution, but as a final answer it is a compromise.' },
      { question: 'How long does an implant bridge last?', answer: 'The implants and bridge age differently. With healthy gums and good hygiene the implants usually last decades and often a lifetime; what threatens them is peri-implantitis, which is largely preventable. The bridge wears like any restoration, around 10 to 15 years before possible replacement, but replacing it is prosthetic work, not surgery, because the implants stay where they are.' },
      { question: 'Does the procedure hurt?', answer: 'No more than a single implant. The area is numbed locally, and placing two or three implants in the same area takes only a little longer than one, because the preparation is shared. You feel pressure and movement, not pain. Swelling and tenderness for a few days are normal and managed with ordinary painkillers. Most people are back to normal within a day or two.' },
      { question: 'Why are two trips needed?', answer: 'Because the implants need about six months to integrate with the bone before a bridge can be loaded on them, and that timeline is set by healing, not the calendar. On the first trip, examination and implant placement; on the second, impressions and bridge fitting. A final bridge within a week would be either a temporary one or loaded onto implants that have not integrated.' },
      { question: 'What if I do not have enough bone?', answer: 'It is more common in an old gap, and it rarely rules out treatment. Sometimes it is enough to change where the implants go, because a bridge has a flexibility a single implant does not. When grafting is really needed, it adds a phase and healing time; in the upper back jaw a sinus lift is sometimes needed. We tell you in advance.' },
      { question: 'Zirconia or metal-ceramic?', answer: 'Zirconia in most cases, especially where the bridge shows when you smile: it is strong enough for back teeth, does not stain and transmits light like a tooth. Metal-ceramic has a very long clinical history and handles heavy loads well at a lower cost, but the metal blocks light and after years a dark line may appear at the gum. If the bridge is at the back and does not show, metal-ceramic is a perfectly valid choice.' },
      { question: 'How do I clean under the bridge?', answer: 'This decides how long the bridge lasts. There is a space between the underside of the bridge and the gum where plaque collects, and brushing the outer surfaces does not reach it. You need to clean under the bridge every day, with special floss, an interdental brush or a water flosser. We show you exactly how and you leave with written instructions.' },
      { question: 'What happens if an implant fails?', answer: 'It is rare, and a bridge copes with it better than people think. Almost all failures happen early, when an implant does not integrate. Because the bridge is carried by more than one implant, losing one does not mean losing the whole case: the bridge can sometimes be redesigned on the remaining implants, or the site heals and a new implant is placed later. Late failures almost always come from plaque, which is why cleaning and check-ups matter so much.' },
    ],
  },
  de: {
    name: 'Implantatgetragene Brücke',
    eyebrow: 'Implantate · Albanien',
    subtitle: 'Mehrere nebeneinander fehlende Zähne, ersetzt auf zwei oder drei MegaGen-Implantaten.',
    lead: 'Ersetzen Sie mehrere fehlende Zähne in einer Reihe, ohne einen einzigen gesunden Zahn zu beschleifen: nur zwei oder mehr Implantate, die die Arbeit übernehmen.',
    kicker: 'Implantatbrücke in Tirana, Albanien',
    articleTitle: 'Implantatbrücke: mehrere Zähne mit weniger Implantaten ersetzen',
    intro: [
      'Eine implantatgetragene Brücke ersetzt mehrere nebeneinander fehlende Zähne und wird von zwei oder drei Implantaten getragen statt von einem pro Zahn.',
      'In diesem Satz steckt das ganze Argument. Sie brauchen nicht für jeden fehlenden Zahn ein Implantat, und zu verstehen warum, macht diese Behandlung bezahlbar statt einschüchternd.',
      'In der Veneer Clinic werden Implantatbrücken auf MegaGen-Titanimplantaten gefertigt, 500 € pro Implantat, mit einer Zirkon- oder Metallkeramikbrücke Made in Germany. Die Behandlung erfolgt in zwei Reisen im Abstand von sechs Monaten.',
    ],
    sections: [
      {
        title: 'Warum zwei Implantate drei Zähne tragen können',
        intro: [
          'Implantate sind unter Druck außerordentlich belastbar. Eine Brücke auf zwei Implantaten verhält sich wie ein einziges Stück und verteilt die Beißkraft auf die Pfeiler, statt dass jeder Ersatzzahn allein steht.',
          'Eine Lücke von drei Zähnen braucht daher meist zwei Implantate, mit dem mittleren Zahn als Brückenglied dazwischen. Eine Lücke von vier Zähnen braucht oft zwei oder drei.',
          'Die Ersparnis ist nicht klein. Drei einzelne Implantate bedeuten drei Operationsstellen, drei Komponentensätze und drei Heilungsphasen. Zwei Implantate und eine Brücke bedeuten einen Eingriff, eine Heilung und ein deutlich niedrigeres Angebot, für ein Ergebnis, das niemand unterscheiden kann.',
        ],
      },
      {
        title: 'Was eine Implantatbrücke ersetzt',
        inline: [
          { title: 'Eine Teilprothese.', text: 'Klammern, Bewegung, etwas im Glas über Nacht, und Zahnfleisch, das eine Last trägt, für die es nie gemacht war. Eine feste Brücke beendet all das und stellt den Großteil der natürlichen Beißkraft wieder her.' },
          { title: 'Eine konventionelle Brücke.', text: 'Von Ihren eigenen Zähnen getragen, die für Kronen beschliffen werden müssen: zwei gesunde Zähne dauerhaft verändert und dann mit der Arbeit von vier belastet. Gibt einer nach, geht die Brücke mit.' },
          { title: 'Gar nichts.', text: 'Die häufigste Option und auf Dauer die teuerste. Eine Lücke lässt die Nachbarzähne kippen, die Gegenzähne in den Raum wandern und den Knochen darunter Jahr für Jahr schwinden.' },
        ],
      },
      {
        title: 'Wie viele Implantate eine Brücke braucht',
        intro: [
          'Drei Dinge entscheiden: die Länge der Lücke, der verfügbare Knochen an jeder möglichen Stelle und wo Ihre Beißkraft wirkt.',
          'Eine dreigliedrige Brücke im Unterkiefer, wo der Knochen dicht ist, ist etwas anderes als dieselbe Lücke oben, wo er weicher ist. Längere Lücken brauchen mehr Stütze, nicht weil die Brücke brechen würde, sondern weil die Endimplantate zu viel Hebelkraft abbekämen.',
          'Die Bildgebung des Knochens beantwortet das, bevor etwas geplant wird, und die Zahl steht mit Begründung im Angebot. Mehr Implantate bedeuten eine höhere Rechnung, genau deshalb muss die Empfehlung vom Knochen kommen und nicht von der Preisliste.',
        ],
      },
      {
        title: 'Warum Position wichtiger ist als Symmetrie',
        intro: [
          'Ein verbreiteter Irrtum ist, Implantate müssten gleichmäßig unter der Lücke verteilt sein. Sie gehören dorthin, wo der Knochen am besten ist.',
          'Hier liegt die echte Flexibilität einer Brücke gegenüber einzelnen Implantaten. Während ein Einzelimplantat unter dem Zahn sitzen muss, den es ersetzt, kann eine Brücke etwas weiter vorne oder hinten verankert werden, um dichteren Knochen zu erreichen, die Kieferhöhle zu umgehen oder Abstand zum Nerv zu halten, und das Brückendesign gleicht den Unterschied aus.',
          'Deshalb sind Fälle, die für Einzelimplantate schwierig wirken, als Implantatbrücke oft einfach.',
        ],
      },
      {
        title: 'Wenn der Knochen knapp ist',
        intro: [
          'Eine Lücke, die seit Jahren zahnlos ist, hat an Breite und Höhe verloren.',
          'Oft genügt es, die Implantate dort zu setzen, wo Knochen geblieben ist. Reicht das nicht, baut ein Knochenaufbau die Stelle wieder auf, und im hinteren Oberkiefer kann ein Sinuslift nötig sein. Beides fügt eine Phase und Heilungszeit hinzu. Wir sagen es Ihnen vorher.',
        ],
      },
      {
        title: 'Wenn es ein ganzer Kiefer wird',
        intro: [
          'Es gibt einen Punkt, an dem eine Brücke nicht mehr die richtige Antwort ist.',
          'Fehlen die meisten Zähne eines Kiefers oder sind sie nicht zu retten, ist die Versorgung mit mehreren einzelnen Brücken komplizierter und teurer als die Behandlung des ganzen Kiefers auf einmal. Dann sind All-on-4 oder All-on-6 meist sowohl günstiger als auch vorhersehbarer. Wir sagen Ihnen offen, auf welcher Seite dieser Linie Ihr Fall liegt.',
        ],
      },
      {
        title: 'Welches Brückenmaterial passt zu Ihnen?',
        intro: ['Beide sind bewährte Lösungen mit langer klinischer Geschichte. Die Wahl hängt von der Position der Brücke, Ihrer Beißkraft und Ihrem Budget ab:'],
        cards: [
          { title: 'Zirkonbrücke Made in Germany (empfohlen)', text: 'Fest genug für Seitenzähne, verfärbt nicht und leitet Licht wie ein Zahn, was zählt, wo die Brücke beim Lächeln sichtbar ist.' },
          { title: 'Metallkeramikbrücke Made in Germany', text: 'Porzellan auf einem Metallgerüst. Sehr lange klinische Geschichte, ausgezeichnet unter starker Belastung und günstiger. Der Kompromiss ist ästhetisch: Der Metallkern lässt kein Licht durch.' },
        ],
      },
    ],
    stats: [
      { value: '2–3', label: 'Implantate pro Brücke' },
      { value: '2', label: 'Reisen' },
      { value: '6 Monate', label: 'Zwischen den Reisen' },
      { value: 'Jahrzehnte', label: 'Lebensdauer der Implantate' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Brücke nach Material berechnet',
    whatTitle: 'Was ist eine Implantatbrücke?',
    what: [
      'Eine Implantatbrücke hat zwei Teile: die Implantate im Knochen und die Brücke, die sie verbindet. Sie werden zu ganz unterschiedlichen Zeiten gefertigt, eingesetzt und ersetzt. Die Implantate sind Titanpfeiler im Kiefer an den Stellen, wo der Knochen am festesten ist, nicht unbedingt unter den fehlenden Zähnen.',
      'Die Brücke ist ein einziges im Labor gefertigtes Stück, mit Kronen an den Enden, die auf den Implantaten sitzen, und einem oder mehreren Brückengliedern dazwischen. Sie wird auf die Implantate geschraubt oder zementiert und nur vom Zahnarzt abgenommen.',
    ],
    calloutTitle: 'Ihre allgemeine Gesundheit zählt so viel wie der Kiefer',
    calloutText:
      'Unkontrollierter Diabetes, aktive Zahnfleischentzündung, häufiges Rauchen und manche Knochenmedikamente beeinflussen die Einheilung, daher prüfen wir Ihre Krankengeschichte vor der Planung. Meist ist das beherrschbar, muss aber von Anfang an bekannt sein.',
    compareTitle: 'Welche Lösung passt zu Ihrer Lücke?',
    compareIntro: 'Es hängt davon ab, wie viele Zähne fehlen und welchen Knochen Sie haben:',
    compare: [
      { id: 'implant-bridge', tag: 'Diese Behandlung', title: 'Implantatbrücke', text: 'Drei oder vier Zähne in einer Reihe auf zwei oder drei Implantaten. Ein Eingriff, eine Heilung und kein gesunder Zahn wird beschliffen.' },
      { id: 'implant-megagen', tag: 'Für einen Zahn', title: 'Einzelimplantat', text: 'Fehlt nur ein Zahn oder liegen die fehlenden Zähne nicht nebeneinander, bekommt jede Stelle ihr eigenes Implantat mit Krone.' },
      { id: 'all-on-4', tag: 'Für den ganzen Kiefer', title: 'All-on-4', text: 'Fehlen die meisten Zähne eines Kiefers oder sind sie nicht zu retten, ist eine ganze Brücke auf vier Implantaten einfacher als mehrere einzelne Brücken.' },
    ],
    fitTitle: 'Für wen ist eine Implantatbrücke?',
    fitIntro: 'Eine Implantatbrücke ist meist die richtige Antwort, wenn:',
    fit: [
      'Ihnen drei oder vier benachbarte Zähne im selben Kiefer fehlen',
      'Die Lücke so breit ist, dass ein Implantat pro Zahn übertrieben wäre',
      'Sie eine Teilprothese mit Klammern tragen und etwas Festes möchten',
      'Eine konventionelle Brücke versagt hat oder die Pfeilerzähne',
      'Die Zähne auf beiden Seiten der Lücke gesund sind und unberührt bleiben sollen',
      'Sie noch die meisten eigenen Zähne haben, ein ganzer Kiefer also nicht die Antwort ist',
    ],
    fitNote:
      'Die Zahl der Implantate bestimmen Ihr Knochen und Ihr Biss, nicht die Zahl der fehlenden Zähne. Drei Zähne in einer Reihe brauchen sehr oft nur zwei Implantate, und bei längeren Lücken sagen wir Ihnen, was wirklich nötig ist, statt die günstigste Variante anzubieten.',
    stepsTitle: 'So funktioniert die Behandlung',
    stepsIntro: 'Eine Implantatbrücke erfolgt in zwei Reisen mit sechs Monaten Heilung dazwischen. Alles außer dem Warten ist kurz:',
    steps: [
      { title: 'Untersuchung und Bildgebung', text: 'Eine vollständige Untersuchung und Bildgebung des Knochens. Volumen und Dichte entlang der Lücke bestimmen, wie viele Implantate nötig sind und wo genau; diese Phase legt die Kosten des ganzen Falls fest.' },
      { title: 'Implantation', text: 'Die Implantate werden unter örtlicher Betäubung in einer Sitzung gesetzt. Zwei oder drei Implantate dauern nur wenig länger als eines, weil die Vorbereitung gemeinsam erfolgt.' },
      { title: 'Heilungsphase', text: 'Sechs Monate, in denen die Implantate mit dem Knochen verwachsen. Sie fliegen nach Hause und leben normal weiter; wir bleiben erreichbar.' },
      { title: 'Eine Brücke passend zu Ihrem Biss', text: 'Bei der zweiten Reise werden Abdrücke genommen und die Brücke als ein Stück gefertigt, in Farbe und Form an Ihre Zähne angepasst.' },
      { title: 'Einsetzen der Brücke', text: 'Die Brücke wird auf den Implantaten befestigt, der Biss über die ganze Spanne angepasst und die Unterseite so fertiggestellt, dass Sie darunter gut reinigen können.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für eine Implantatbrücke?',
    whyBandText:
      'Wir sagen Ihnen vor Beginn, wie viele Implantate Ihr Fall braucht und warum, und sowohl das Implantatsystem als auch das Brückenmaterial stehen im Angebot. Mehr Implantate bedeuten eine höhere Rechnung, genau deshalb sollten Sie erfahren, was der Knochen zeigt, nicht was sich am besten verkauft.',
    caseText: 'Mehrere Zähne ersetzt durch eine Implantatbrücke',
    faq: [
      { question: 'Was kostet eine Implantatbrücke?', answer: 'MegaGen-Implantate kosten je 500 €, und die Brücke wird separat nach Material (Zirkon oder Metallkeramik Made in Germany) und Zahnzahl berechnet. Eine Lücke von drei Zähnen braucht meist zwei Implantate. Das genaue Angebot mit Implantatzahl und Material erhalten Sie schriftlich nach Auswertung Ihres Röntgenbilds.' },
      { question: 'Warum nicht ein Implantat pro fehlendem Zahn?', answer: 'Weil es meist nicht nötig ist, und für unnötige Implantate zu zahlen ergibt kein besseres Ergebnis. Zwei gut gesetzte Implantate tragen eine dreigliedrige Brücke bequem, und vier Zähne in einer Reihe werden oft von zwei oder drei getragen. Drei Einzelimplantate bedeuten drei Operationsstellen und drei Heilungen; zwei Implantate und eine Brücke einen Eingriff und eine deutlich niedrigere Rechnung. Liegen die Zähne nicht nebeneinander, sind Einzelimplantate besser, und das sagen wir.' },
      { question: 'Wie viele Implantate brauche ich wirklich?', answer: 'In den meisten Fällen zwei oder drei, und das entscheidet der Knochen, nicht die Zahnzahl. Länge der Lücke, Knochenqualität an jeder möglichen Stelle und Verteilung der Beißkraft bestimmen es. Wir nennen Ihnen die Zahl vorher mit Begründung, und sie steht im Angebot. Ist die ehrliche Antwort drei statt zwei, sagen wir auch das.' },
      { question: 'Implantatbrücke oder konventionelle Brücke?', answer: 'Eine konventionelle Brücke wird von Ihren eigenen Zähnen getragen: Zwei gesunde Zähne werden für Kronen beschliffen und die Ersatzzähne hängen dazwischen. Ohne Eingriff, schneller, anfangs günstiger, aber zwei Zähne werden für immer verändert, tragen die Last von drei oder vier, und der Knochen darunter schwindet weiter. Eine Implantatbrücke wird vom Knochen getragen, berührt Ihre Zähne nicht und erhält den Knochen. Je länger die Lücke, desto mehr spricht für Implantate.' },
      { question: 'Ist sie besser als eine Teilprothese?', answer: 'Für die meisten ja. Eine Teilprothese liegt auf dem Zahnfleisch, hält mit Klammern, wird nachts herausgenommen, bewegt sich beim Essen und kann mit der Zeit die Klammerzähne lockern. Eine Implantatbrücke ist fest, ohne Klammern, und stellt den Großteil der Beißkraft wieder her. Eine Prothese kostet viel weniger und bleibt eine vernünftige Übergangslösung, als Endlösung ist sie ein Kompromiss.' },
      { question: 'Wie lange hält eine Implantatbrücke?', answer: 'Implantate und Brücke altern unterschiedlich. Bei gesundem Zahnfleisch und guter Hygiene halten die Implantate meist Jahrzehnte, oft ein Leben lang; gefährdet werden sie durch Periimplantitis, die weitgehend vermeidbar ist. Die Brücke nutzt sich ab wie jede Restauration, etwa 10 bis 15 Jahre bis zu einem möglichen Ersatz, doch der Ersatz ist prothetische Arbeit, kein Eingriff, weil die Implantate bleiben.' },
      { question: 'Tut der Eingriff weh?', answer: 'Nicht mehr als ein Einzelimplantat. Der Bereich wird örtlich betäubt, und zwei oder drei Implantate im selben Bereich dauern nur wenig länger als eines, weil die Vorbereitung gemeinsam erfolgt. Sie spüren Druck und Bewegung, keinen Schmerz. Schwellung und Empfindlichkeit für einige Tage sind normal und mit üblichen Schmerzmitteln gut zu behandeln. Die meisten sind nach ein bis zwei Tagen wieder normal aktiv.' },
      { question: 'Warum sind zwei Reisen nötig?', answer: 'Weil die Implantate etwa sechs Monate brauchen, um mit dem Knochen zu verwachsen, bevor eine Brücke darauf belastet werden kann, und diesen Zeitrahmen setzt die Heilung, nicht der Kalender. Bei der ersten Reise Untersuchung und Implantation; bei der zweiten Abdrücke und Einsetzen der Brücke. Eine definitive Brücke innerhalb einer Woche wäre entweder ein Provisorium oder auf nicht eingeheilten Implantaten belastet.' },
      { question: 'Was, wenn ich nicht genug Knochen habe?', answer: 'Das ist bei alten Lücken häufiger und schließt die Behandlung selten aus. Manchmal genügt es, die Implantatpositionen zu ändern, weil eine Brücke eine Flexibilität hat, die ein Einzelimplantat nicht hat. Ist ein Knochenaufbau wirklich nötig, fügt er eine Phase und Heilungszeit hinzu; im hinteren Oberkiefer ist manchmal ein Sinuslift nötig. Wir sagen es Ihnen vorher.' },
      { question: 'Zirkon oder Metallkeramik?', answer: 'In den meisten Fällen Zirkon, vor allem wo die Brücke beim Lächeln sichtbar ist: Es ist fest genug für Seitenzähne, verfärbt nicht und leitet Licht wie ein Zahn. Metallkeramik hat eine sehr lange klinische Geschichte und verträgt starke Belastung bei geringeren Kosten, aber das Metall blockiert Licht, und nach Jahren kann am Zahnfleisch ein dunkler Rand erscheinen. Liegt die Brücke hinten und ist nicht sichtbar, ist Metallkeramik eine völlig gute Wahl.' },
      { question: 'Wie reinige ich unter der Brücke?', answer: 'Das entscheidet, wie lange die Brücke hält. Zwischen Brückenunterseite und Zahnfleisch gibt es einen Raum, in dem sich Plaque sammelt und den Zähneputzen nicht erreicht. Sie müssen täglich unter der Brücke reinigen, mit spezieller Zahnseide, Interdentalbürste oder Munddusche. Wir zeigen Ihnen genau wie, und Sie erhalten schriftliche Hinweise.' },
      { question: 'Was passiert, wenn ein Implantat versagt?', answer: 'Es ist selten, und eine Brücke verkraftet es besser als gedacht. Fast alle Misserfolge treten früh auf, wenn ein Implantat nicht einheilt. Da die Brücke von mehr als einem Implantat getragen wird, bedeutet der Verlust eines Implantats nicht den Verlust des ganzen Falls: Die Brücke kann manchmal auf die verbleibenden Implantate umgeplant werden, oder die Stelle heilt und später wird ein neues gesetzt. Späte Misserfolge entstehen fast immer durch Plaque, deshalb sind Reinigung und Kontrollen so wichtig.' },
    ],
  },
  it: {
    name: 'Ponte su impianti',
    eyebrow: 'Impianti · Albania',
    subtitle: 'Più denti mancanti in fila sostituiti su due o tre impianti MegaGen.',
    lead: 'Sostituisci più denti mancanti in fila senza limare neanche un dente sano come supporto: solo due o più impianti che fanno il lavoro.',
    kicker: 'Ponte su impianti a Tirana, Albania',
    articleTitle: 'Ponte su impianti: sostituire più denti con meno impianti',
    intro: [
      'Il ponte su impianti sostituisce più denti mancanti in fila, sostenuto da due o tre impianti invece che da uno per ogni dente.',
      'In quella frase c’è tutto l’argomento. Non ti serve un impianto per ogni dente mancante, e capire perché è ciò che rende questo trattamento accessibile invece che spaventoso.',
      'Alla Veneer Clinic, i ponti su impianti si realizzano su impianti in titanio MegaGen, 500 € per impianto, con un ponte in zirconia o metallo-ceramica Made in Germany. Il trattamento si svolge in due viaggi, a sei mesi di distanza.',
    ],
    sections: [
      {
        title: 'Perché due impianti possono sostenere tre denti',
        intro: [
          'Gli impianti sono estremamente resistenti alla compressione. Un ponte costruito su due di essi si comporta come un pezzo unico, distribuendo la forza del morso tra i pilastri invece di far stare da solo ogni dente sostitutivo.',
          'Così uno spazio di tre denti richiede di solito due impianti, con il dente centrale sospeso tra loro. Uno spazio di quattro denti spesso ne richiede due o tre.',
          'Il risparmio non è piccolo. Tre impianti separati significano tre siti chirurgici, tre set di componenti e tre guarigioni. Due impianti e un ponte significano un intervento, una guarigione e un preventivo nettamente più basso, per un risultato che nessuno distingue.',
        ],
      },
      {
        title: 'Cosa sostituisce un ponte su impianti',
        inline: [
          { title: 'Una protesi parziale.', text: 'Ganci, movimento, qualcosa in un bicchiere la notte, e gengive che sopportano un carico per cui non sono fatte. Un ponte fisso mette fine a tutto questo e restituisce gran parte della forza masticatoria naturale.' },
          { title: 'Un ponte tradizionale.', text: 'Sostenuto dai tuoi denti, che vanno limati per le corone: due denti sani modificati per sempre e poi caricati del lavoro di quattro. Quando uno di loro cede, il ponte se ne va con lui.' },
          { title: 'Niente.', text: 'L’opzione più comune, e la più costosa nel tempo. Uno spazio vuoto lascia che i vicini si inclinino, che i denti opposti scendano nel vuoto e che l’osso sotto si ritiri anno dopo anno.' },
        ],
      },
      {
        title: 'Quanti impianti servono a un ponte',
        intro: [
          'Tre cose lo decidono: la lunghezza dello spazio, l’osso disponibile in ogni possibile sito e dove cade la forza del tuo morso.',
          'Un ponte di tre elementi nell’arcata inferiore, dove l’osso è denso, è diverso dallo stesso spazio sopra, dove l’osso è più morbido. Gli spazi più lunghi richiedono più supporto, non perché il ponte si romperebbe ma perché gli impianti alle estremità subirebbero troppa leva.',
          'Le immagini dell’osso rispondono prima di pianificare qualsiasi cosa, e il numero va nel preventivo con la motivazione. Più impianti significano un conto più alto, proprio per questo la raccomandazione deve venire dall’osso e non dal listino.',
        ],
      },
      {
        title: 'Perché la posizione conta più della simmetria',
        intro: [
          'Un equivoco comune è che gli impianti debbano essere distribuiti in modo regolare sotto lo spazio. Devono andare dove l’osso è migliore.',
          'È qui la vera flessibilità di un ponte rispetto agli impianti separati. Mentre un impianto singolo deve stare sotto il dente che sostituisce, un ponte può essere ancorato un po’ più avanti o più indietro per raggiungere osso più denso, evitare il seno o stare lontano dal nervo, e il disegno del ponte assorbe la differenza.',
          'È anche il motivo per cui casi che sembrano difficili per impianti separati sono spesso semplici come ponte su impianti.',
        ],
      },
      {
        title: 'Quando l’osso è scarso',
        intro: [
          'Uno spazio senza denti da anni avrà perso larghezza e altezza.',
          'Spesso la soluzione è semplicemente inserire gli impianti dove l’osso è rimasto. Quando non basta, l’innesto osseo ricostruisce il sito, e nella zona posteriore superiore può servire un rialzo del seno. Entrambi aggiungono una fase e tempo di guarigione. Te lo diciamo in anticipo.',
        ],
      },
      {
        title: 'Quando diventa un’arcata completa',
        intro: [
          'C’è un punto in cui il ponte smette di essere la risposta giusta.',
          'Se la maggior parte dei denti di un’arcata manca o non si può salvare, ricostruirli con più ponti separati è più complicato e costoso che trattare l’intera arcata in una volta. A quel punto All-on-4 o All-on-6 sono di solito sia più economici sia più prevedibili. Ti diciamo apertamente da quale lato di quella linea cade il tuo caso.',
        ],
      },
      {
        title: 'Quale materiale per il ponte fa per te?',
        intro: ['Entrambi sono soluzioni consolidate con una lunga storia clinica. La scelta dipende da dove si trova il ponte, dalla forza del morso e dal budget:'],
        cards: [
          { title: 'Ponte in zirconia Made in Germany (consigliato)', text: 'Abbastanza resistente per i denti posteriori, non si macchia e trasmette la luce come un dente, cosa importante dove il ponte si vede quando sorridi.' },
          { title: 'Ponte in metallo-ceramica Made in Germany', text: 'Porcellana stratificata su una struttura metallica. Storia clinica lunghissima, eccellente sotto carichi forti e più economico. Il compromesso è estetico: il nucleo metallico non lascia passare la luce.' },
        ],
      },
    ],
    stats: [
      { value: '2–3', label: 'Impianti per ponte' },
      { value: '2', label: 'Viaggi' },
      { value: '6 mesi', label: 'Tra i viaggi' },
      { value: 'Decenni', label: 'Durata degli impianti' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Ponte quotato in base al materiale',
    whatTitle: 'Cos’è un ponte su impianti?',
    what: [
      'Un ponte su impianti ha due parti: gli impianti nell’osso e il ponte che li collega. Vengono realizzati, applicati e sostituiti in momenti molto diversi. Gli impianti sono pilastri in titanio inseriti nell’osso dove è più solido, non necessariamente sotto i denti mancanti.',
      'Il ponte è un unico pezzo realizzato in laboratorio, con corone alle estremità che poggiano sugli impianti e uno o più denti sospesi tra loro. Viene avvitato o cementato sugli impianti e lo rimuove solo il dentista.',
    ],
    calloutTitle: 'La tua salute generale conta quanto l’osso',
    calloutText:
      'Diabete non controllato, infezione gengivale attiva, fumo frequente e alcuni farmaci per le ossa influiscono sull’integrazione degli impianti, per questo esaminiamo la tua storia medica prima di pianificare. Nella maggior parte dei casi sono gestibili, ma vanno conosciuti fin dall’inizio.',
    compareTitle: 'Quale soluzione per il tuo spazio?',
    compareIntro: 'Dipende da quanti denti mancano e dall’osso che hai:',
    compare: [
      { id: 'implant-bridge', tag: 'Questo trattamento', title: 'Ponte su impianti', text: 'Tre o quattro denti in fila su due o tre impianti. Un intervento, una guarigione e nessun dente sano limato.' },
      { id: 'implant-megagen', tag: 'Per un dente', title: 'Impianto singolo', text: 'Quando manca un solo dente, o i denti mancanti non sono vicini, ogni sito riceve il proprio impianto e la propria corona.' },
      { id: 'all-on-4', tag: 'Per tutta l’arcata', title: 'All-on-4', text: 'Quando la maggior parte dei denti di un’arcata manca o non si può salvare, un ponte completo su quattro impianti è più semplice di più ponti separati.' },
    ],
    fitTitle: 'Per chi è il ponte su impianti?',
    fitIntro: 'Il ponte su impianti è di solito la risposta giusta se:',
    fit: [
      'Ti mancano tre o quattro denti vicini nella stessa arcata',
      'Lo spazio è abbastanza ampio che un impianto per dente sarebbe eccessivo',
      'Porti una protesi parziale con ganci e vuoi qualcosa di fisso',
      'Un ponte tradizionale ha ceduto, o hanno ceduto i denti che lo sostenevano',
      'I denti ai due lati dello spazio sono sani e vuoi lasciarli intatti',
      'Hai ancora la maggior parte dei tuoi denti, quindi l’arcata completa non è la risposta',
    ],
    fitNote:
      'Il numero di impianti lo decidono il tuo osso e il tuo morso, non il numero di denti mancanti. Tre denti in fila molto spesso richiedono solo due impianti, e quando lo spazio è più lungo ti diciamo cosa serve davvero invece di proporti l’opzione più economica.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'Il ponte su impianti si svolge in due viaggi, con sei mesi di guarigione in mezzo. Tutto tranne l’attesa è breve:',
    steps: [
      { title: 'Valutazione e immagini', text: 'Una visita completa e immagini dell’osso. Volume e densità lungo lo spazio decidono quanti impianti servono e dove esattamente; questa fase determina il costo di tutto il caso.' },
      { title: 'Inserimento degli impianti', text: 'Gli impianti vengono inseriti in anestesia locale in una sola seduta. Due o tre impianti richiedono poco più di uno, perché la preparazione è condivisa.' },
      { title: 'Periodo di guarigione', text: 'Sei mesi mentre gli impianti si integrano con l’osso. Torni a casa e continui la vita normale; restiamo raggiungibili.' },
      { title: 'Un ponte sul tuo morso', text: 'Nel secondo viaggio si prendono le impronte e il ponte viene realizzato come un pezzo unico, abbinato ai tuoi denti per colore e forma.' },
      { title: 'Applicazione del ponte', text: 'Il ponte viene fissato sugli impianti, il morso regolato lungo tutta la campata, e la parte inferiore rifinita perché tu possa pulire bene sotto.' },
    ],
    whyBandTitle: 'Perché Veneer Clinic per un ponte su impianti?',
    whyBandText:
      'Ti diciamo quanti impianti richiede il tuo caso e perché, prima di iniziare, e nel preventivo sono scritti sia il sistema implantare sia il materiale del ponte. Più impianti significano un conto più alto, proprio per questo devi sapere cosa mostra l’osso, non cosa si vende meglio.',
    caseText: 'Più denti sostituiti con un ponte su impianti',
    faq: [
      { question: 'Quanto costa un ponte su impianti?', answer: 'Gli impianti MegaGen costano 500 € ciascuno, e il ponte è quotato a parte in base al materiale (zirconia o metallo-ceramica Made in Germany) e al numero di denti. Uno spazio di tre denti richiede di solito due impianti. Il preventivo esatto, con numero di impianti e materiale, ti viene inviato per iscritto dopo aver valutato la tua radiografia.' },
      { question: 'Perché non un impianto per ogni dente mancante?', answer: 'Perché di solito non serve, e pagare impianti che non servono non dà un risultato migliore. Due impianti ben posizionati sostengono comodamente un ponte di tre elementi, e quattro denti in fila spesso stanno su due o tre. Tre impianti separati significano tre siti chirurgici e tre guarigioni; due impianti e un ponte, un intervento e un conto nettamente più basso. Quando i denti non sono vicini, gli impianti separati sono migliori, e lo diciamo.' },
      { question: 'Quanti impianti mi serviranno davvero?', answer: 'Due o tre nella maggior parte dei casi, e lo decide l’osso, non il numero di denti. Lunghezza dello spazio, qualità dell’osso in ogni sito possibile e distribuzione del morso lo determinano. Ti diciamo il numero in anticipo con la motivazione, ed è scritto nel preventivo. Se la risposta onesta è tre e non due, diciamo anche quello.' },
      { question: 'Ponte su impianti o ponte tradizionale?', answer: 'Il ponte tradizionale è sostenuto dai tuoi denti: due denti sani vengono limati per le corone e i denti sostitutivi sono sospesi tra loro. Niente intervento, più rapido, più economico all’inizio, ma due denti vengono modificati per sempre, portano il carico di tre o quattro e l’osso sotto continua a ritirarsi. Il ponte su impianti è sostenuto dall’osso, non tocca i tuoi denti e preserva l’osso. Più lungo è lo spazio, più la bilancia pende verso gli impianti.' },
      { question: 'È meglio di una protesi parziale?', answer: 'Per la maggior parte delle persone sì. La protesi parziale poggia sulle gengive, si aggancia con ganci, si toglie la notte, si muove quando mangi e col tempo può far muovere i denti a cui si aggancia. Il ponte su impianti è fisso, senza ganci, e restituisce gran parte della forza masticatoria. La protesi costa molto meno e resta una soluzione provvisoria ragionevole, ma come risposta definitiva è un compromesso.' },
      { question: 'Quanto dura un ponte su impianti?', answer: 'Impianti e ponte invecchiano in modo diverso. Con gengive sane e buona igiene gli impianti durano di solito decenni e spesso tutta la vita; ciò che li minaccia è la perimplantite, in gran parte prevenibile. Il ponte si consuma come ogni restauro, circa 10-15 anni prima di un’eventuale sostituzione, ma sostituirlo è un lavoro protesico, non chirurgico, perché gli impianti restano dove sono.' },
      { question: 'L’intervento fa male?', answer: 'Non più di un impianto singolo. La zona viene anestetizzata localmente, e inserire due o tre impianti nella stessa zona richiede poco più di uno, perché la preparazione è condivisa. Senti pressione e movimento, non dolore. Gonfiore e sensibilità per qualche giorno sono normali e si gestiscono con comuni antidolorifici. La maggior parte torna alla normalità in uno o due giorni.' },
      { question: 'Perché servono due viaggi?', answer: 'Perché gli impianti hanno bisogno di circa sei mesi per integrarsi con l’osso prima di poter caricare un ponte, e quei tempi li decide la guarigione, non il calendario. Nel primo viaggio visita e inserimento degli impianti; nel secondo impronte e applicazione del ponte. Un ponte definitivo entro una settimana sarebbe o un provvisorio o caricato su impianti non integrati.' },
      { question: 'E se non ho abbastanza osso?', answer: 'È più comune in uno spazio vecchio, e raramente esclude il trattamento. A volte basta cambiare dove vanno gli impianti, perché il ponte ha una flessibilità che l’impianto singolo non ha. Quando l’innesto serve davvero, aggiunge una fase e tempo di guarigione; nella zona posteriore superiore a volte serve un rialzo del seno. Te lo diciamo in anticipo.' },
      { question: 'Zirconia o metallo-ceramica?', answer: 'Zirconia nella maggior parte dei casi, soprattutto dove il ponte si vede quando sorridi: è abbastanza resistente per i denti posteriori, non si macchia e trasmette la luce come un dente. La metallo-ceramica ha una storia clinica lunghissima e sopporta bene i carichi a un costo inferiore, ma il metallo blocca la luce e dopo anni può comparire una linea scura alla gengiva. Se il ponte è dietro e non si vede, la metallo-ceramica è una scelta del tutto valida.' },
      { question: 'Come si pulisce sotto il ponte?', answer: 'È ciò che decide quanto dura il ponte. Tra la parte inferiore del ponte e la gengiva c’è uno spazio dove si accumula la placca, e lo spazzolino sulle superfici esterne non ci arriva. Bisogna pulire sotto il ponte ogni giorno, con filo speciale, scovolino o idropulsore. Ti mostriamo esattamente come e vai via con istruzioni scritte.' },
      { question: 'Cosa succede se un impianto fallisce?', answer: 'È raro, e un ponte lo sopporta meglio di quanto si pensi. Quasi tutti i fallimenti avvengono presto, quando un impianto non si integra. Poiché il ponte è sostenuto da più di un impianto, perderne uno non significa perdere tutto il caso: il ponte a volte si riprogetta sugli impianti rimasti, oppure il sito guarisce e si inserisce un nuovo impianto più tardi. I fallimenti tardivi derivano quasi sempre dalla placca, per questo pulizia e controlli contano tanto.' },
    ],
  },
};

export default function ImplantBridgePage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="implant-bridge"
      heroImage={images.surgery[9] ?? images.heroAfter}
      whatImage={images.surgery[2] ?? images.heroAfter}
    />
  );
}
