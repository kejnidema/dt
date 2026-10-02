import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Implant i vetëm',
    eyebrow: 'Implante · Shqipëri',
    subtitle: 'Një dhëmb i munguar zëvendësohet me një rrënjë titani MegaGen dhe një kurorë të personalizuar.',
    lead: 'Mungon një dhëmb? Një implant i vetëm e mbush hapësirën me një rrënjë titani dhe një kurorë natyrale, pa prekur dhëmbët përreth.',
    kicker: 'Implanti dentar i vetëm në Tiranë, Shqipëri',
    articleTitle: 'Implanti dentar i vetëm: zëvendësimi i një dhëmbi pa prekur të tjerët',
    intro: [
      'Implanti dentar i vetëm zëvendëson një dhëmb të munguar: një rrënjë titani në kockë, një kurorë sipër dhe dhëmbët anësorë të paprekur.',
      'Një dhëmb i vetëm që mungon duket problem i vogël. Është hapësira me të cilën mësohesh të jetosh: përtyp nga ana tjetër, buzëqesh pak më ngushtë, e shtyn për më vonë.',
      'Por implanti nuk është protezë dhe nuk është urë e varur te dhëmbët anësorë. Është një dhëmb i ankoruar në kockë, që lahet si dhëmb dhe me të cilin kafshon si me dhëmb.',
      'Në Veneer Clinic përdorim implante titani MegaGen, 500 € për implant, dhe kurora Made in Germany. Trajtimi kryhet në dy udhëtime, me gjashtë muaj ndërmjet tyre.',
    ],
    sections: [
      {
        title: 'Pse hapësira nuk mbetet thjesht hapësirë',
        intro: [
          'Dhëmbët e mbajnë njëri-tjetrin në pozicion. Hiqni një dhe rendi fillon të lëvizë.',
          'Dhëmbët anësorë anohen drejt zbrazëtirës, ngadalë dhe pa asnjë ndjesi. Dhëmbi sipër ose poshtë, pa asgjë kundër së cilës të kafshojë, del gradualisht drejt hapësirës. Kontaktet që ishin të ngushta hapen, dhe ushqimi fillon të ngecë aty ku më parë nuk ngecte.',
          'Poshtë, kocka që mbante rrënjën nuk ngarkohet më. Kocka ruhet duke u përdorur, prandaj fillon të tërhiqet: më shpejt vitin e parë, pastaj më ngadalë, pa u ndalur.',
          'Asgjë dramatike nga muaji në muaj. Por brenda pesë vitesh një dhëmb i munguar kthehet në një problem kafshimi që prek tre a katër dhëmbë, në një zonë me më pak kockë nga sa kishte.',
        ],
      },
      {
        title: 'Implant i vetëm apo urë?',
        intro: ['Shumica e atyre që kanë një dhëmb të munguar zgjedhin mes këtyre të dyjave, dhe ndryshimi meriton të kuptohet para se dikush të rekomandojë njërën.'],
        inline: [
          { title: 'Një urë', text: 'gdhend dhëmbët e shëndetshëm në të dyja anët dhe var një dhëmb artificial mes tyre. Më e shpejtë, më e lirë në fillim, pa kirurgji. Çmimi është se dy dhëmbë të paprekur gdhenden përgjithmonë për të zgjidhur problemin e një dhëmbi të tretë, dhe kocka poshtë vazhdon gjithsesi të tërhiqet.' },
          { title: 'Një implant i vetëm', text: 'zëvendëson edhe rrënjën. Dhëmbët anësorë mbeten të paprekur dhe kocka mbetet e ngarkuar. Kushton më shumë në fillim dhe kërkon muaj në vend të javëve, por zakonisht zgjat shumë më gjatë.' },
        ],
        outro: ['Ka raste kur ura është vërtet zgjidhja më e mirë, dhe e themi kur është kështu. Por nëse dhëmbët anësorë janë të shëndetshëm, gdhendja e tyre është një kosto reale që rrallë shfaqet në një ofertë.'],
      },
      {
        title: 'Pse planifikimi vendos gjithçka',
        intro: [
          'Implanti duhet të shkojë në një vend të saktë, me një kënd të saktë dhe në një thellësi të saktë, dhe hapësira për gabim është minimale.',
          'Në nofullën e sipërme sinusi ndodhet mbi dhëmbët e pasmë, dhe pas vitesh pa dhëmb lartësia e kockës aty mund të jetë minimale. Në të poshtmen, nervi kalon në zonën e pasme dhe duhet shmangur me një distancë të qartë. Mes dhëmbëve anësorë gjerësia është e kufizuar, dhe implanti plus kocka përreth duhet të nxënë brenda saj.',
          'Prandaj imazhet e kockës vijnë para planit dhe jo si formalitet pas tij: ato tregojnë vëllimin, dendësinë dhe ku ndodhet anatomia që duhet shmangur.',
        ],
      },
      {
        title: 'Koha pas një heqjeje',
        intro: [
          'Nëse dhëmbi është ende aty, ose është hequr së fundmi, radha ndryshon.',
          'Ndonjëherë implanti mund të vendoset në alveol në të njëjtën seancë me heqjen, gjë që ruan kockë dhe kursen muaj. Kjo varet nga mungesa e infeksionit aktiv dhe nga sa kockë e paprekur ka përreth.',
          'Më shpesh zona lihet të shërohet disa muaj dhe implanti vendoset në kockë të shëruar. Është rruga më e parashikueshme dhe ajo që rekomandojmë në rast dyshimi. Nëse e keni ende dhëmbin dhe e dini se nuk shpëtohet, ia vlen të pyesni për këtë para se të hiqet.',
        ],
      },
      {
        title: 'Kur mungon kocka',
        intro: [
          'Një hapësirë e vjetër ka humbur zakonisht gjerësi dhe lartësi, dhe ndonjëherë nuk mbetet mjaftueshëm për të mbajtur një implant në siguri.',
          'Shtimi i kockës e rindërton zonën. Për një dhëmb të vetëm është zakonisht një ndërhyrje e vogël dhe shton një fazë shërimi para implantit. Imazhet na thonë nëse duhet, dhe jua themi paraprakisht.',
        ],
      },
      {
        title: 'Çfarë vendoset në nofullën tuaj',
        intro: ['Ju themi me emër çfarë do të vendoset, para se të filloni, dhe e shkruajmë në ofertë:'],
        cards: [
          { title: 'Implant titani MegaGen', text: 'Sistemi jugkorean që vendosim, i përdorur gjerësisht në Evropë dhe i dokumentuar mirë për rendimentin në kockë më të butë ose të reduktuar, kushtet e zakonshme të një vendi të shëruar pas heqjes.' },
          { title: 'Kurorë zirkoni Made in Germany', text: 'Kurora sipër, e formësuar dhe e përshtatur me ngjyrën e dhëmbëve anash. E fortë, nuk njolloset dhe e përcjell dritën si dhëmb: e vetmja pjesë që dikush do ta shohë ndonjëherë.' },
        ],
        outro: ['Për dhëmbë të pasmë që nuk duken, kurora porcelan-metal Made in Germany është një alternativë e fortë dhe më ekonomike.'],
      },
    ],
    stats: [
      { value: '2', label: 'Udhëtime' },
      { value: '6 muaj', label: 'Ndërmjet udhëtimeve' },
      { value: '30–60 min', label: 'Vendosja e implantit' },
      { value: 'Dekada', label: 'Jetëgjatësia' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Kurora llogaritet veçmas',
    whatTitle: 'Çfarë është një implant dentar i vetëm?',
    what: [
      'Implanti dentar i vetëm përbëhet nga tri pjesë, dhe ia vlen të dihet cila bën çfarë, sepse sillen shumë ndryshe me kalimin e kohës. Implanti është një vidë titani e vendosur në kockën e nofullës, në vend të rrënjës. Titani përdoret sepse kocka lidhet drejtpërdrejt me të, një proces që quhet osteointegrim.',
      'Abutmenti është lidhësja që qëndron mbi implant dhe kalon përmes mishit. Kurora është dhëmbi i dukshëm, e punuar në laborator dhe e përshtatur me ngjyrën e dhëmbëve anësorë. Vetëm kurora duket dhe vetëm kurora konsumohet. Implanti, nëse mishi përreth mbetet i shëndetshëm, është strukturë e përhershme.',
    ],
    calloutTitle: 'Shëndeti juaj i përgjithshëm ka po aq rëndësi sa nofulla',
    calloutText:
      'Diabeti i pakontrolluar, infeksioni aktiv i mishrave, duhani i shpeshtë dhe disa barna për kockat ndikojnë te integrimi i implantit, prandaj shqyrtojmë historikun tuaj mjekësor para se të planifikojmë. Në shumicën e rasteve menaxhohen, por duhen ditur që në fillim.',
    compareTitle: 'Çfarë përfshin një implant i vetëm',
    compareIntro: 'Implanti zëvendëson rrënjën; kurora sipër zgjidhet sipas vendit të dhëmbit:',
    compare: [
      { id: 'implant-megagen', tag: 'Ky trajtim', title: 'Implant MegaGen', text: 'Rrënja prej titani, e vendosur me anestezi lokale. Pasi integrohet me kockën gjatë gjashtë muajve, mbi të vendoset kurora.' },
      { id: 'crown-zirconia', tag: 'Kurora e rekomanduar', title: 'Kurorë zirkoni', text: 'Made in Germany, pa metal dhe me pamje natyrale. E fortë mjaftueshëm për dhëmbët e pasmë dhe e bukur për ata të përparmit.' },
      { id: 'crown-porcelain', tag: 'Alternativë ekonomike', title: 'Kurorë porcelan-metal', text: 'Made in Germany, e fortë dhe me histori të gjatë klinike. Zgjedhje e vlefshme për dhëmbët e pasmë që nuk duken kur buzëqeshni.' },
    ],
    fitTitle: 'Për kë është implanti i vetëm?',
    fitIntro: 'Një implant dentar i vetëm zakonisht është përgjigjja e duhur nëse:',
    fit: [
      'Keni një hapësirë bosh nga një heqje, nga një goditje ose nga një dhëmb që nuk doli kurrë',
      'Një dhëmb është çarë, ka karies të rëndë ose ka dështuar pas trajtimit të kanalit',
      'Doni t’i lini të paprekur dhëmbët e shëndetshëm anash në vend që t’i gdhendni për kurora',
      'Një urë ekzistuese ka dështuar dhe nuk doni të përsëritni të njëjtën zgjidhje',
      'Hapësira duket kur buzëqeshni dhe e mbuloni prej vitesh',
      'Përtypni vetëm nga një anë sepse nga tjetra ka një hapësirë që nuk e vini më re',
    ],
    fitNote:
      'Një dhëmballë që mungon ka po aq rëndësi sa një dhëmb i përparmë. Dhëmbi përpara është ai që vihet re; ai prapa është ai që përtyp, dhe humbja e tij e zhvendos në heshtje ngarkesën te dhëmbë që nuk ishin bërë ta mbanin vetë.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'Implanti i vetëm kryhet në dy udhëtime, me gjashtë muaj shërimi ndërmjet. Ndërhyrja është e shkurtër; pritja është biologji:',
    steps: [
      { title: 'Vlerësimi dhe imazhet', text: 'Ekzaminim i plotë dhe imazhe të zonës. Vëllimi dhe dendësia e kockës, pozicioni i sinusit ose nervit dhe hapësira mes dhëmbëve përcaktojnë masën dhe këndin e implantit.' },
      { title: 'Vendosja e implantit', text: 'Implanti vendoset me anestezi lokale, për një dhëmb zakonisht 30 deri në 60 minuta. Shumë pacientë çuditen sa më e shkurtër është se heqja që krijoi hapësirën.' },
      { title: 'Periudha e shërimit', text: 'Gjashtë muaj ndërsa implanti integrohet me kockën. Ktheheni në shtëpi dhe vazhdoni jetën normale; ne mbetemi të kontaktueshëm gjatë gjithë kohës.' },
      { title: 'Kurora sipas dhëmbëve tuaj', text: 'Në udhëtimin e dytë merren masat dhe kurora punohet sipas ngjyrës, formës dhe tejdukshmërisë së dhëmbëve anash.' },
      { title: 'Vendosja e kurorës', text: 'Kurora vendoset mbi implant, kafshimi kontrollohet e rregullohet, dhe kontaktet me dhëmbët anash finalizohen që filli dentar të kalojë pastër.' },
    ],
    whyBandTitle: 'Pse Veneer Clinic për një implant dentar të vetëm?',
    whyBandText:
      'Ju themi cili implant do të vendoset në nofullën tuaj, me emër, para se të filloni, dhe e shkruajmë në ofertë. Implanti i vetëm është një ndërhyrje e vogël me një jetë të gjatë përpara, dhe atë jetë e përcakton çfarë u vendos dhe me sa saktësi.',
    caseText: 'Një dhëmb i zëvendësuar me implant dhe kurorë',
    faq: [
      { question: 'Sa kushton një implant i vetëm?', answer: 'Implanti MegaGen kushton 500 €. Kurora sipër llogaritet veçmas dhe konfirmohet në ofertë; për referencë, kurorat tona të zirkonit Made in Germany kushtojnë 200 € dhe ato porcelan-metal 100 € për dhëmb. Nëse duhet shtim kocke, ju themi paraprakisht.' },
      { question: 'Implant apo urë?', answer: 'Ura e zëvendëson dhëmbin duke gdhendur dy dhëmbët e shëndetshëm anash për kurora dhe duke varur një dhëmb artificial mes tyre. Është më e shpejtë, kushton më pak në fillim dhe nuk kërkon kirurgji, por dy dhëmbë të shëndetshëm gdhenden përgjithmonë dhe kocka poshtë vazhdon të tërhiqet. Implanti zëvendëson edhe rrënjën, nuk prek dhëmbët anash dhe e ruan kockën. Ka raste kur ura është zgjidhja më e mirë, për shembull kur dhëmbët anash gjithsesi kanë nevojë për kurora, dhe e themi kur është kështu.' },
      { question: 'A mund ta marr kurorën po atë ditë me implantin?', answer: 'Ndonjëherë, por jo zakonisht. Ngarkimi i menjëhershëm është i mundur me kockë të dendur, stabilitet fillestar shumë të mirë dhe një kafshim që nuk e ngarkon rëndë atë dhëmb, kushte më të shpeshta te dhëmbët e përparmë. Ajo që vendoset atë ditë është një kurorë e përkohshme; kurora përfundimtare pret gjithsesi integrimin. Nëse hapësira duket kur buzëqeshni, do të diskutojmë një zgjidhje të përkohshme.' },
      { question: 'Sa zgjat një implant i vetëm?', answer: 'Implanti dhe kurora plaken ndryshe. Implanti është titan i integruar në kockë të gjallë; me mishra të shëndetshëm dhe higjienë të mirë zgjat zakonisht dekada dhe shpesh tërë jetën. Ajo që e kërcënon është periimplantiti, inflamacioni nga pllaka, kryesisht i parandalueshëm. Kurora konsumohet si çdo restaurim dhe mund të duhet zëvendësuar pas 10 deri në 15 vjetësh, por implanti poshtë mbetet aty ku është.' },
      { question: 'A dhemb?', answer: 'Më pak nga sa presin shumica, dhe zakonisht më pak se heqja që krijoi hapësirën. Zona anestezohet lokalisht dhe ndieni presion e lëvizje, jo dhimbje. Më pas, ënjtja dhe ndjeshmëria për disa ditë janë normale dhe menaxhohen me qetësues të zakonshëm. Shumica kthehen në aktivitet të nesërmen. Nëse keni ankth nga dentisti, na e thoni kur rezervoni.' },
      { question: 'Po nëse hapësira është prej vitesh?', answer: 'Ka rëndësi, por rrallë e përjashton trajtimin. Një hapësirë e vjetër zakonisht ka më pak kockë se një e re, dhe kjo ndryshon planifikimin, jo mundësinë. Në shumë raste ka ende kockë të mjaftueshme për një implant standard; në disa duhet fillimisht shtim kocke. Dhëmbët anash mund të jenë anuar drejt hapësirës dhe ndonjëherë kjo duhet rregulluar më parë. Jua themi paraprakisht.' },
      { question: 'A do t’u ngjajë kurora dhëmbëve të mi?', answer: 'Kjo është sfida e vërtetë e një implanti përpara: një kurorë e vetme duhet të përzihet mes dy dhëmbëve natyralë me ngjyrën dhe tejdukshmërinë e tyre. Ngjyra merret mbi dhëmbët tuaj anash dhe dërgohet në laborator me masat. Zirkoni e përcjell dritën si dhëmb. Nëse planifikoni zbardhim, bëjeni para se të punohet kurora, sepse kurorat nuk zbardhen.' },
      { question: 'Çfarë marke implantesh përdorni?', answer: 'MegaGen, prodhuesi jugkorean i përdorur gjerësisht në Evropë dhe i dokumentuar mirë për rendimentin në kockë më të butë ose të reduktuar. Sistemi shkruhet në ofertë para se të filloni. Asnjë pacient nuk i dallon dot implantet në pasqyrë, pikërisht prandaj ka rëndësi t’ju thuhet çfarë vendoset.' },
      { question: 'Pse duhen dy udhëtime për një dhëmb?', answer: 'Sepse implanti ka nevojë për rreth gjashtë muaj që të integrohet me kockën para se mbi të të ngarkohet kurora përfundimtare. Atë afat e cakton shërimi, jo orari. Për një dhëmb të vetëm të dyja vizitat janë të shkurtra: në të parën vendoset implanti, në të dytën merren masat dhe vendoset kurora.' },
      { question: 'A ia vlen për një dhëmballë që nuk duket?', answer: 'Po, ndoshta më shumë se për një dhëmb të përparmë. Dhëmballët japin pjesën më të madhe të forcës së përtypjes, dhe kur mungon njëra ngarkesa kalon te dhëmbë që nuk ishin bërë për të. Me vite kjo sjell çarje, konsumim dhe lëvizje dhëmbësh, ndërsa kocka poshtë vazhdon të tërhiqet, qoftë e dukshme hapësira apo jo.' },
      { question: 'A është duhani problem?', answer: 'Rrit rrezikun e dështimit, sepse zvogëlon qarkullimin e gjakut në mishra dhe ngadalëson shërimin gjatë integrimit, dhe rrit rrezikun afatgjatë të periimplantitit. Nuk është kundërindikacion absolut dhe shumë duhanpirës kanë implante të suksesshme, por rreziku është real. Pakësimi në javët rreth ndërhyrjes bën ndryshim konkret.' },
      { question: 'Çfarë ndodh nëse implanti dështon?', answer: 'Është e rrallë, por ndodh. Pothuajse të gjitha dështimet ndodhin herët, kur implanti nuk integrohet siç pritej, dhe zakonisht ndihen si siklet ose lëkundje. Atëherë implanti hiqet, zona lihet të shërohet dhe vendoset një i ri më vonë. Dështimet e vonshme janë pothuajse gjithmonë periimplantit nga pllaka, prandaj higjiena dhe kontrollet vjetore kanë kaq rëndësi. Jua themi hapur para se të filloni.' },
    ],
  },
  en: {
    name: 'Single Implant',
    eyebrow: 'Implants · Albania',
    subtitle: 'One missing tooth replaced with a MegaGen titanium root and a custom crown.',
    lead: 'Missing a tooth? A single implant fills the gap with a titanium root and a natural-looking crown, without touching the teeth around it.',
    kicker: 'Single dental implant in Tirana, Albania',
    articleTitle: 'The single dental implant: replacing one tooth without touching the others',
    intro: [
      'A single dental implant replaces one missing tooth: a titanium root in the bone, a crown on top, and the neighbouring teeth left untouched.',
      'One missing tooth seems like a small problem. It is the gap you learn to live with: you chew on the other side, smile a little narrower, put it off until later.',
      'But an implant is not a denture and it is not a bridge hung from the neighbouring teeth. It is a tooth anchored in bone, cleaned like a tooth and bitten with like a tooth.',
      'At Veneer Clinic we use MegaGen titanium implants, €500 per implant, with Made in Germany crowns. Treatment is done over two trips, six months apart.',
    ],
    sections: [
      {
        title: 'Why a gap does not stay just a gap',
        intro: [
          'Teeth hold each other in position. Take one away and the arrangement starts to shift.',
          'The neighbouring teeth tilt into the space, slowly and without any sensation. The tooth above or below, with nothing to bite against, gradually drifts towards the gap. Contacts that were tight open up, and food starts catching where it never used to.',
          'Below, the bone that held the root is no longer loaded. Bone is maintained by use, so it starts to shrink: fastest in the first year, then more slowly, without stopping.',
          'Nothing dramatic from month to month. But within five years one missing tooth becomes a bite problem affecting three or four, in an area with less bone than it had.',
        ],
      },
      {
        title: 'Single implant or bridge?',
        intro: ['Most people with one missing tooth choose between these two, and the difference deserves to be understood before anyone recommends one.'],
        inline: [
          { title: 'A bridge', text: 'grinds down the healthy teeth on both sides and hangs an artificial tooth between them. Faster, cheaper at first, no surgery. The cost is that two intact teeth are permanently cut down to solve the problem of a third, and the bone below keeps shrinking anyway.' },
          { title: 'A single implant', text: 'replaces the root as well. The neighbouring teeth stay untouched and the bone stays loaded. It costs more at first and takes months rather than weeks, but it usually lasts much longer.' },
        ],
        outro: ['There are cases where a bridge really is the better solution, and we say so when it is. But if the neighbouring teeth are healthy, cutting them down is a real cost that rarely appears on a quote.'],
      },
      {
        title: 'Why planning decides everything',
        intro: [
          'The implant has to go in an exact place, at an exact angle and to an exact depth, and the margin for error is minimal.',
          'In the upper jaw the sinus sits above the back teeth, and after years without a tooth the bone height there can be minimal. In the lower jaw the nerve runs through the back and must be avoided with a clear distance. Between neighbouring teeth the width is limited, and the implant plus surrounding bone has to fit within it.',
          'That is why imaging of the bone comes before the plan, not as a formality after it: it shows volume, density and where the anatomy to be avoided actually is.',
        ],
      },
      {
        title: 'Timing after an extraction',
        intro: [
          'If the tooth is still there, or was recently removed, the order changes.',
          'Sometimes the implant can be placed in the socket in the same session as the extraction, which preserves bone and saves months. That depends on the absence of active infection and on how much intact bone is around it.',
          'More often the site is left to heal for a few months and the implant is placed in healed bone. It is the most predictable route and the one we recommend when in doubt. If you still have the tooth and know it cannot be saved, it is worth asking about this before it is removed.',
        ],
      },
      {
        title: 'When bone is missing',
        intro: [
          'An old gap has usually lost width and height, and sometimes not enough remains to hold an implant safely.',
          'Bone grafting rebuilds the site. For a single tooth it is usually a small procedure and adds a healing phase before the implant. The imaging tells us whether it is needed, and we tell you in advance.',
        ],
      },
      {
        title: 'What goes into your jaw',
        intro: ['We tell you by name what will be placed before you start, and write it in your quote:'],
        cards: [
          { title: 'MegaGen titanium implant', text: 'The South Korean system we place, widely used in Europe and well documented for performance in softer or reduced bone, the typical conditions of a site healed after extraction.' },
          { title: 'Zirconia crown, Made in Germany', text: 'The crown on top, shaped and matched to the colour of the neighbouring teeth. Strong, stain-resistant and transmits light like a tooth: the only part anyone will ever see.' },
        ],
        outro: ['For back teeth that do not show, a Made in Germany metal-ceramic crown is a strong and more economical alternative.'],
      },
    ],
    stats: [
      { value: '2', label: 'Trips' },
      { value: '6 months', label: 'Between trips' },
      { value: '30–60 min', label: 'Implant placement' },
      { value: 'Decades', label: 'Lifespan' },
    ],
    priceTitle: 'Price',
    priceNote: 'Crown quoted separately',
    whatTitle: 'What is a single dental implant?',
    what: [
      'A single dental implant has three parts, and it is worth knowing which does what, because they behave very differently over time. The implant is a titanium screw placed in the jawbone in place of the root. Titanium is used because bone bonds directly to it, a process called osseointegration.',
      'The abutment is the connector that sits on the implant and passes through the gum. The crown is the visible tooth, made in the lab and matched to the colour of the neighbouring teeth. Only the crown shows and only the crown wears. The implant, if the gum around it stays healthy, is a permanent structure.',
    ],
    calloutTitle: 'Your general health matters as much as the jaw',
    calloutText:
      'Uncontrolled diabetes, active gum infection, frequent smoking and some bone medications affect implant integration, so we review your medical history before planning. In most cases they are manageable, but they need to be known from the start.',
    compareTitle: 'What a single implant includes',
    compareIntro: 'The implant replaces the root; the crown on top is chosen according to where the tooth is:',
    compare: [
      { id: 'implant-megagen', tag: 'This treatment', title: 'MegaGen implant', text: 'The titanium root, placed under local anaesthesia. Once it has fused with the bone over six months, the crown is fitted on top.' },
      { id: 'crown-zirconia', tag: 'Recommended crown', title: 'Zirconia crown', text: 'Made in Germany, metal-free and natural-looking. Strong enough for back teeth and beautiful for front ones.' },
      { id: 'crown-porcelain', tag: 'Economical alternative', title: 'Metal-ceramic crown', text: 'Made in Germany, strong and with a long clinical history. A valid choice for back teeth that do not show when you smile.' },
    ],
    fitTitle: 'Who is a single implant for?',
    fitIntro: 'A single dental implant is usually the right answer if:',
    fit: [
      'You have a gap from an extraction, an accident or a tooth that never came through',
      'A tooth is cracked, badly decayed or has failed after root canal treatment',
      'You want to leave the healthy neighbouring teeth untouched instead of cutting them for crowns',
      'An existing bridge has failed and you do not want to repeat the same solution',
      'The gap shows when you smile and you have been hiding it for years',
      'You chew on one side only because the other has a gap you no longer notice',
    ],
    fitNote:
      'A missing molar matters as much as a front tooth. The front tooth is the one people notice; the back one is the one that chews, and losing it quietly shifts the load onto teeth that were never meant to carry it alone.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'A single implant is done over two trips, with six months of healing in between. The procedure is short; the wait is biology:',
    steps: [
      { title: 'Assessment and imaging', text: 'A full examination and imaging of the area. Bone volume and density, the position of the sinus or nerve and the space between teeth determine the size and angle of the implant.' },
      { title: 'Implant placement', text: 'The implant is placed under local anaesthesia, usually in 30 to 60 minutes for one tooth. Many patients are surprised how much shorter it is than the extraction that created the gap.' },
      { title: 'Healing period', text: 'Six months while the implant fuses with the bone. You go home and carry on with normal life; we stay reachable throughout.' },
      { title: 'A crown to match your teeth', text: 'On the second trip impressions are taken and the crown is made to the colour, shape and translucency of the neighbouring teeth.' },
      { title: 'Crown fitting', text: 'The crown is fixed on the implant, the bite is checked and adjusted, and contacts with the neighbouring teeth are finished so floss passes cleanly.' },
    ],
    whyBandTitle: 'Why Veneer Clinic for a single dental implant?',
    whyBandText:
      'We tell you by name which implant will go into your jaw before you start, and write it in your quote. A single implant is a small procedure with a long life ahead of it, and that life is decided by what was placed and how precisely.',
    caseText: 'One tooth replaced with an implant and crown',
    faq: [
      { question: 'How much does a single implant cost?', answer: 'The MegaGen implant costs €500. The crown on top is quoted separately and confirmed in your quote; for reference, our Made in Germany zirconia crowns cost €200 and metal-ceramic crowns €100 per tooth. If bone grafting is needed, we tell you in advance.' },
      { question: 'Implant or bridge?', answer: 'A bridge replaces the tooth by cutting down the two healthy teeth on either side for crowns and hanging an artificial tooth between them. It is faster, cheaper at first and needs no surgery, but two healthy teeth are permanently altered and the bone below keeps shrinking. An implant replaces the root too, leaves the neighbours untouched and preserves the bone. There are cases where a bridge is better, for example when the neighbouring teeth need crowns anyway, and we say so when it is.' },
      { question: 'Can I get the crown the same day as the implant?', answer: 'Sometimes, but not usually. Immediate loading is possible with dense bone, very good initial stability and a bite that does not load that tooth heavily, conditions more common at the front. What goes on that day is a temporary crown; the final crown still waits for integration. If the gap shows when you smile, we will discuss a temporary solution.' },
      { question: 'How long does a single implant last?', answer: 'The implant and crown age differently. The implant is titanium integrated into living bone; with healthy gums and good hygiene it usually lasts decades and often a lifetime. What threatens it is peri-implantitis, inflammation from plaque, which is largely preventable. The crown wears like any restoration and may need replacing after 10 to 15 years, but the implant below stays where it is.' },
      { question: 'Does it hurt?', answer: 'Less than most people expect, and usually less than the extraction that created the gap. The area is numbed locally and you feel pressure and movement, not pain. Afterwards, swelling and tenderness for a few days are normal and managed with ordinary painkillers. Most people are back to normal activity the next day. If dentists make you anxious, tell us when you book.' },
      { question: 'What if the gap is years old?', answer: 'It matters, but it rarely rules anything out. An old gap usually has less bone than a recent one, which changes the planning, not the possibility. In many cases there is still enough bone for a standard implant; in some, bone grafting is needed first. The neighbouring teeth may have tilted into the space and sometimes this needs correcting first. We tell you in advance.' },
      { question: 'Will the crown match my teeth?', answer: 'This is the real challenge of a front implant: a single crown has to blend between two natural teeth with their own colour and translucency. The shade is taken from your neighbouring teeth and sent to the lab with the impressions. Zirconia transmits light like a tooth. If you plan to whiten, do it before the crown is made, because crowns do not whiten.' },
      { question: 'Which implant brand do you use?', answer: 'MegaGen, the South Korean manufacturer widely used in Europe and well documented for performance in softer or reduced bone. The system is written in your quote before you start. No patient can tell implants apart in the mirror, which is exactly why it matters to be told what is placed.' },
      { question: 'Why does one tooth need two trips?', answer: 'Because the implant needs about six months to integrate with the bone before the final crown can be loaded on it. That timeline is set by healing, not by the calendar. For a single tooth both visits are short: on the first the implant is placed, on the second impressions are taken and the crown is fitted.' },
      { question: 'Is it worth it for a molar that does not show?', answer: 'Yes, perhaps more than for a front tooth. Molars generate most of the chewing force, and when one is missing the load shifts onto teeth not built for it. Over the years this leads to cracks, wear and shifting teeth, while the bone below keeps shrinking whether the gap shows or not.' },
      { question: 'Is smoking a problem?', answer: 'It increases the risk of failure, because it reduces blood flow to the gums and slows healing during integration, and it raises the long-term risk of peri-implantitis. It is not an absolute contraindication and many smokers have successful implants, but the risk is real. Cutting down in the weeks around the procedure makes a concrete difference.' },
      { question: 'What happens if the implant fails?', answer: 'It is rare, but it happens. Almost all failures happen early, when the implant does not integrate as expected, and usually show as discomfort or looseness. The implant is then removed, the site heals and a new one is placed later. Late failures are almost always peri-implantitis from plaque, which is why hygiene and yearly check-ups matter so much. We tell you openly before you start.' },
    ],
  },
  de: {
    name: 'Einzelimplantat',
    eyebrow: 'Implantate · Albanien',
    subtitle: 'Ein fehlender Zahn, ersetzt durch eine MegaGen-Titanwurzel und eine individuelle Krone.',
    lead: 'Fehlt ein Zahn? Ein Einzelimplantat schließt die Lücke mit einer Titanwurzel und einer natürlich wirkenden Krone, ohne die Nachbarzähne anzutasten.',
    kicker: 'Einzelimplantat in Tirana, Albanien',
    articleTitle: 'Das Einzelimplantat: einen Zahn ersetzen, ohne die anderen anzutasten',
    intro: [
      'Ein Einzelimplantat ersetzt einen fehlenden Zahn: eine Titanwurzel im Knochen, eine Krone darauf, und die Nachbarzähne bleiben unberührt.',
      'Ein einzelner fehlender Zahn wirkt wie ein kleines Problem. Es ist die Lücke, mit der man zu leben lernt: Man kaut auf der anderen Seite, lächelt etwas schmaler, schiebt es auf.',
      'Aber ein Implantat ist keine Prothese und keine Brücke, die an den Nachbarzähnen hängt. Es ist ein im Knochen verankerter Zahn, der wie ein Zahn geputzt wird und mit dem man wie mit einem Zahn beißt.',
      'In der Veneer Clinic verwenden wir MegaGen-Titanimplantate, 500 € pro Implantat, mit Kronen Made in Germany. Die Behandlung erfolgt in zwei Reisen im Abstand von sechs Monaten.',
    ],
    sections: [
      {
        title: 'Warum eine Lücke nicht einfach eine Lücke bleibt',
        intro: [
          'Zähne halten sich gegenseitig in Position. Nimmt man einen weg, gerät die Ordnung in Bewegung.',
          'Die Nachbarzähne kippen in die Lücke, langsam und ohne jedes Gefühl. Der Gegenzahn oben oder unten, der keinen Partner mehr hat, wandert allmählich in den freien Raum. Kontakte, die eng waren, öffnen sich, und Essen bleibt hängen, wo es früher nie hängen blieb.',
          'Darunter wird der Knochen, der die Wurzel hielt, nicht mehr belastet. Knochen erhält sich durch Gebrauch, also beginnt er zu schwinden: im ersten Jahr am schnellsten, dann langsamer, aber ohne aufzuhören.',
          'Nichts Dramatisches von Monat zu Monat. Doch innerhalb von fünf Jahren wird aus einem fehlenden Zahn ein Bissproblem, das drei oder vier betrifft, in einem Bereich mit weniger Knochen als zuvor.',
        ],
      },
      {
        title: 'Einzelimplantat oder Brücke?',
        intro: ['Die meisten mit einem fehlenden Zahn wählen zwischen diesen beiden, und der Unterschied verdient es, verstanden zu werden, bevor jemand das eine empfiehlt.'],
        inline: [
          { title: 'Eine Brücke', text: 'beschleift die gesunden Zähne auf beiden Seiten und hängt einen künstlichen Zahn dazwischen. Schneller, anfangs günstiger, ohne Eingriff. Der Preis: Zwei intakte Zähne werden dauerhaft beschliffen, um das Problem eines dritten zu lösen, und der Knochen darunter schwindet trotzdem weiter.' },
          { title: 'Ein Einzelimplantat', text: 'ersetzt auch die Wurzel. Die Nachbarzähne bleiben unberührt und der Knochen bleibt belastet. Es kostet anfangs mehr und braucht Monate statt Wochen, hält aber meist deutlich länger.' },
        ],
        outro: ['Es gibt Fälle, in denen eine Brücke wirklich die bessere Lösung ist, und wir sagen es dann. Sind die Nachbarzähne aber gesund, ist das Beschleifen ein echter Preis, der selten in einem Angebot auftaucht.'],
      },
      {
        title: 'Warum die Planung alles entscheidet',
        intro: [
          'Das Implantat muss an eine exakte Stelle, in einem exakten Winkel und in einer exakten Tiefe, und der Spielraum für Fehler ist minimal.',
          'Im Oberkiefer liegt die Kieferhöhle über den Seitenzähnen, und nach Jahren ohne Zahn kann die Knochenhöhe dort minimal sein. Im Unterkiefer verläuft hinten der Nerv, der mit klarem Abstand umgangen werden muss. Zwischen den Nachbarzähnen ist die Breite begrenzt, und Implantat plus umgebender Knochen müssen hineinpassen.',
          'Deshalb kommt die Bildgebung des Knochens vor dem Plan, nicht als Formalität danach: Sie zeigt Volumen, Dichte und wo die zu meidende Anatomie tatsächlich liegt.',
        ],
      },
      {
        title: 'Der Zeitpunkt nach einer Extraktion',
        intro: [
          'Ist der Zahn noch vorhanden oder wurde er gerade entfernt, ändert sich die Reihenfolge.',
          'Manchmal kann das Implantat in derselben Sitzung wie die Extraktion in das Zahnfach gesetzt werden, was Knochen erhält und Monate spart. Das hängt davon ab, dass keine aktive Entzündung vorliegt und genug intakter Knochen vorhanden ist.',
          'Häufiger lässt man die Stelle einige Monate heilen und setzt das Implantat in verheilten Knochen. Das ist der vorhersehbarste Weg und der, den wir im Zweifel empfehlen. Wenn Sie den Zahn noch haben und wissen, dass er nicht zu retten ist, lohnt es sich, vor der Entfernung danach zu fragen.',
        ],
      },
      {
        title: 'Wenn Knochen fehlt',
        intro: [
          'Eine alte Lücke hat meist an Breite und Höhe verloren, und manchmal bleibt nicht genug, um ein Implantat sicher zu tragen.',
          'Ein Knochenaufbau stellt die Stelle wieder her. Für einen einzelnen Zahn ist das meist ein kleiner Eingriff und fügt eine Heilungsphase vor dem Implantat hinzu. Die Bildgebung zeigt, ob er nötig ist, und wir sagen es Ihnen vorher.',
        ],
      },
      {
        title: 'Was in Ihren Kiefer kommt',
        intro: ['Wir nennen Ihnen vor Beginn beim Namen, was eingesetzt wird, und schreiben es ins Angebot:'],
        cards: [
          { title: 'MegaGen-Titanimplantat', text: 'Das südkoreanische System, das wir setzen, in Europa weit verbreitet und gut dokumentiert für weicheren oder reduzierten Knochen, typisch für eine nach Extraktion verheilte Stelle.' },
          { title: 'Zirkonkrone Made in Germany', text: 'Die Krone darauf, geformt und farblich an die Nachbarzähne angepasst. Fest, verfärbungsresistent und lichtdurchlässig wie ein Zahn: der einzige Teil, den je jemand sehen wird.' },
        ],
        outro: ['Für Seitenzähne, die nicht sichtbar sind, ist eine Metallkeramikkrone Made in Germany eine stabile und günstigere Alternative.'],
      },
    ],
    stats: [
      { value: '2', label: 'Reisen' },
      { value: '6 Monate', label: 'Zwischen den Reisen' },
      { value: '30–60 Min.', label: 'Implantation' },
      { value: 'Jahrzehnte', label: 'Lebensdauer' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Krone wird separat berechnet',
    whatTitle: 'Was ist ein Einzelimplantat?',
    what: [
      'Ein Einzelimplantat besteht aus drei Teilen, und es lohnt sich zu wissen, welcher was tut, weil sie sich mit der Zeit sehr unterschiedlich verhalten. Das Implantat ist eine Titanschraube, die anstelle der Wurzel in den Kieferknochen gesetzt wird. Titan wird verwendet, weil der Knochen direkt damit verwächst, ein Vorgang namens Osseointegration.',
      'Das Abutment ist das Verbindungsteil, das auf dem Implantat sitzt und durch das Zahnfleisch führt. Die Krone ist der sichtbare Zahn, im Labor gefertigt und farblich an die Nachbarzähne angepasst. Nur die Krone ist sichtbar und nur die Krone nutzt sich ab. Das Implantat ist bei gesundem Zahnfleisch eine dauerhafte Struktur.',
    ],
    calloutTitle: 'Ihre allgemeine Gesundheit zählt so viel wie der Kiefer',
    calloutText:
      'Unkontrollierter Diabetes, aktive Zahnfleischentzündung, häufiges Rauchen und manche Knochenmedikamente beeinflussen die Einheilung, daher prüfen wir Ihre Krankengeschichte vor der Planung. Meist ist das beherrschbar, muss aber von Anfang an bekannt sein.',
    compareTitle: 'Was ein Einzelimplantat umfasst',
    compareIntro: 'Das Implantat ersetzt die Wurzel; die Krone darauf wird je nach Position des Zahns gewählt:',
    compare: [
      { id: 'implant-megagen', tag: 'Diese Behandlung', title: 'MegaGen-Implantat', text: 'Die Titanwurzel, unter örtlicher Betäubung gesetzt. Nach sechs Monaten Einheilung wird die Krone darauf befestigt.' },
      { id: 'crown-zirconia', tag: 'Empfohlene Krone', title: 'Zirkonkrone', text: 'Made in Germany, metallfrei und natürlich wirkend. Fest genug für Seitenzähne und schön für Frontzähne.' },
      { id: 'crown-porcelain', tag: 'Günstige Alternative', title: 'Metallkeramikkrone', text: 'Made in Germany, stabil und mit langer klinischer Geschichte. Eine gute Wahl für Seitenzähne, die beim Lächeln nicht sichtbar sind.' },
    ],
    fitTitle: 'Für wen ist ein Einzelimplantat?',
    fitIntro: 'Ein Einzelimplantat ist meist die richtige Antwort, wenn:',
    fit: [
      'Sie eine Lücke durch Extraktion, Unfall oder einen nie durchgebrochenen Zahn haben',
      'Ein Zahn gebrochen, stark kariös oder nach einer Wurzelbehandlung gescheitert ist',
      'Sie die gesunden Nachbarzähne unberührt lassen möchten, statt sie für Kronen zu beschleifen',
      'Eine bestehende Brücke versagt hat und Sie nicht dieselbe Lösung wiederholen möchten',
      'Die Lücke beim Lächeln sichtbar ist und Sie sie seit Jahren verbergen',
      'Sie nur auf einer Seite kauen, weil auf der anderen eine Lücke ist, die Sie kaum noch bemerken',
    ],
    fitNote:
      'Ein fehlender Backenzahn zählt so viel wie ein Frontzahn. Den vorderen bemerken andere; der hintere ist der, der kaut, und sein Verlust verlagert die Last still auf Zähne, die sie nie allein tragen sollten.',
    stepsTitle: 'So funktioniert die Behandlung',
    stepsIntro: 'Ein Einzelimplantat erfolgt in zwei Reisen mit sechs Monaten Heilung dazwischen. Der Eingriff ist kurz; das Warten ist Biologie:',
    steps: [
      { title: 'Untersuchung und Bildgebung', text: 'Eine vollständige Untersuchung und Bildgebung des Bereichs. Knochenvolumen und -dichte, Lage von Kieferhöhle oder Nerv und der Platz zwischen den Zähnen bestimmen Größe und Winkel des Implantats.' },
      { title: 'Implantation', text: 'Das Implantat wird unter örtlicher Betäubung gesetzt, für einen Zahn meist in 30 bis 60 Minuten. Viele Patienten sind überrascht, wie viel kürzer es ist als die Extraktion, die die Lücke schuf.' },
      { title: 'Heilungsphase', text: 'Sechs Monate, in denen das Implantat mit dem Knochen verwächst. Sie fliegen nach Hause und leben normal weiter; wir bleiben jederzeit erreichbar.' },
      { title: 'Eine Krone passend zu Ihren Zähnen', text: 'Bei der zweiten Reise werden Abdrücke genommen und die Krone nach Farbe, Form und Transluzenz der Nachbarzähne gefertigt.' },
      { title: 'Einsetzen der Krone', text: 'Die Krone wird auf dem Implantat befestigt, der Biss geprüft und angepasst, und die Kontakte zu den Nachbarzähnen so fertiggestellt, dass Zahnseide sauber durchgleitet.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für ein Einzelimplantat?',
    whyBandText:
      'Wir nennen Ihnen vor Beginn beim Namen, welches Implantat in Ihren Kiefer kommt, und schreiben es ins Angebot. Ein Einzelimplantat ist ein kleiner Eingriff mit einem langen Leben vor sich, und dieses Leben entscheidet sich daran, was gesetzt wurde und wie präzise.',
    caseText: 'Ein Zahn ersetzt durch Implantat und Krone',
    faq: [
      { question: 'Was kostet ein Einzelimplantat?', answer: 'Das MegaGen-Implantat kostet 500 €. Die Krone darauf wird separat berechnet und im Angebot bestätigt; zur Orientierung kosten unsere Zirkonkronen Made in Germany 200 € und Metallkeramikkronen 100 € pro Zahn. Ist ein Knochenaufbau nötig, sagen wir es Ihnen vorher.' },
      { question: 'Implantat oder Brücke?', answer: 'Eine Brücke ersetzt den Zahn, indem die beiden gesunden Nachbarzähne für Kronen beschliffen werden und ein künstlicher Zahn dazwischen hängt. Sie ist schneller, anfangs günstiger und ohne Eingriff, aber zwei gesunde Zähne werden dauerhaft verändert und der Knochen darunter schwindet weiter. Ein Implantat ersetzt auch die Wurzel, lässt die Nachbarn unberührt und erhält den Knochen. Manchmal ist eine Brücke besser, etwa wenn die Nachbarzähne ohnehin Kronen brauchen, und das sagen wir dann.' },
      { question: 'Bekomme ich die Krone am selben Tag wie das Implantat?', answer: 'Manchmal, aber nicht in der Regel. Sofortbelastung ist bei dichtem Knochen, sehr guter Primärstabilität und einem Biss möglich, der den Zahn nicht stark belastet, was vorne häufiger der Fall ist. Was an diesem Tag eingesetzt wird, ist eine provisorische Krone; die definitive wartet trotzdem auf die Einheilung. Ist die Lücke beim Lächeln sichtbar, besprechen wir eine Übergangslösung.' },
      { question: 'Wie lange hält ein Einzelimplantat?', answer: 'Implantat und Krone altern unterschiedlich. Das Implantat ist Titan, eingeheilt in lebenden Knochen; bei gesundem Zahnfleisch und guter Hygiene hält es meist Jahrzehnte, oft ein Leben lang. Gefährdet wird es durch Periimplantitis, eine Entzündung durch Plaque, die weitgehend vermeidbar ist. Die Krone nutzt sich ab und muss eventuell nach 10 bis 15 Jahren ersetzt werden, das Implantat bleibt.' },
      { question: 'Tut es weh?', answer: 'Weniger als die meisten erwarten, und meist weniger als die Extraktion, die die Lücke schuf. Der Bereich wird örtlich betäubt, und Sie spüren Druck und Bewegung, keinen Schmerz. Danach sind Schwellung und Empfindlichkeit für einige Tage normal und mit üblichen Schmerzmitteln gut zu behandeln. Die meisten sind am nächsten Tag wieder aktiv. Wenn Sie Angst vor dem Zahnarzt haben, sagen Sie es uns bei der Buchung.' },
      { question: 'Was, wenn die Lücke schon Jahre alt ist?', answer: 'Das spielt eine Rolle, schließt aber selten etwas aus. Eine alte Lücke hat meist weniger Knochen als eine neue, was die Planung ändert, nicht die Möglichkeit. Oft reicht der Knochen noch für ein Standardimplantat; manchmal ist zuerst ein Knochenaufbau nötig. Die Nachbarzähne können in die Lücke gekippt sein, was manchmal vorher korrigiert werden muss. Wir sagen es Ihnen vorher.' },
      { question: 'Passt die Krone zu meinen Zähnen?', answer: 'Das ist die eigentliche Herausforderung eines Frontimplantats: Eine einzelne Krone muss zwischen zwei natürlichen Zähnen mit eigener Farbe und Transluzenz verschwinden. Die Farbe wird an Ihren Nachbarzähnen bestimmt und mit den Abdrücken ans Labor geschickt. Zirkon leitet Licht wie ein Zahn. Wenn Sie bleichen möchten, tun Sie es vor der Kronenfertigung, denn Kronen hellen nicht auf.' },
      { question: 'Welche Implantatmarke verwenden Sie?', answer: 'MegaGen, den südkoreanischen Hersteller, der in Europa weit verbreitet und für weicheren oder reduzierten Knochen gut dokumentiert ist. Das System steht vor Beginn in Ihrem Angebot. Kein Patient kann Implantate im Spiegel unterscheiden, gerade deshalb ist es wichtig, zu erfahren, was gesetzt wird.' },
      { question: 'Warum braucht ein Zahn zwei Reisen?', answer: 'Weil das Implantat etwa sechs Monate braucht, um mit dem Knochen zu verwachsen, bevor die definitive Krone darauf belastet werden kann. Diesen Zeitrahmen setzt die Heilung, nicht der Kalender. Für einen einzelnen Zahn sind beide Besuche kurz: beim ersten wird das Implantat gesetzt, beim zweiten werden Abdrücke genommen und die Krone eingesetzt.' },
      { question: 'Lohnt es sich für einen unsichtbaren Backenzahn?', answer: 'Ja, vielleicht mehr als für einen Frontzahn. Backenzähne erzeugen den Großteil der Kaukraft, und fehlt einer, verlagert sich die Last auf Zähne, die dafür nicht gebaut sind. Über die Jahre führt das zu Rissen, Abnutzung und Zahnwanderungen, während der Knochen darunter weiter schwindet, ob die Lücke sichtbar ist oder nicht.' },
      { question: 'Ist Rauchen ein Problem?', answer: 'Es erhöht das Risiko eines Misserfolgs, weil es die Durchblutung des Zahnfleischs verringert und die Heilung während der Einheilung verlangsamt, und es erhöht das Langzeitrisiko für Periimplantitis. Es ist keine absolute Kontraindikation, und viele Raucher haben erfolgreiche Implantate, aber das Risiko ist real. Weniger Rauchen in den Wochen um den Eingriff macht einen konkreten Unterschied.' },
      { question: 'Was passiert, wenn das Implantat versagt?', answer: 'Es ist selten, kommt aber vor. Fast alle Misserfolge treten früh auf, wenn das Implantat nicht wie erwartet einheilt, und zeigen sich meist als Beschwerden oder Lockerung. Dann wird das Implantat entfernt, die Stelle heilt und später wird ein neues gesetzt. Späte Misserfolge sind fast immer Periimplantitis durch Plaque, deshalb sind Hygiene und jährliche Kontrollen so wichtig. Wir sagen es Ihnen offen vor Beginn.' },
    ],
  },
  it: {
    name: 'Impianto singolo',
    eyebrow: 'Impianti · Albania',
    subtitle: 'Un dente mancante sostituito con una radice in titanio MegaGen e una corona su misura.',
    lead: 'Ti manca un dente? Un impianto singolo colma lo spazio con una radice in titanio e una corona dall’aspetto naturale, senza toccare i denti vicini.',
    kicker: 'Impianto dentale singolo a Tirana, Albania',
    articleTitle: 'L’impianto dentale singolo: sostituire un dente senza toccare gli altri',
    intro: [
      'L’impianto dentale singolo sostituisce un dente mancante: una radice in titanio nell’osso, una corona sopra e i denti vicini lasciati intatti.',
      'Un solo dente mancante sembra un piccolo problema. È lo spazio con cui impari a convivere: mastichi dall’altro lato, sorridi un po’ meno, rimandi a dopo.',
      'Ma un impianto non è una protesi e non è un ponte appeso ai denti vicini. È un dente ancorato nell’osso, che si pulisce come un dente e con cui si morde come con un dente.',
      'Alla Veneer Clinic usiamo impianti in titanio MegaGen, 500 € per impianto, con corone Made in Germany. Il trattamento si svolge in due viaggi, a sei mesi di distanza.',
    ],
    sections: [
      {
        title: 'Perché uno spazio non resta solo uno spazio',
        intro: [
          'I denti si tengono in posizione a vicenda. Togline uno e l’ordine comincia a spostarsi.',
          'I denti vicini si inclinano verso lo spazio, lentamente e senza alcuna sensazione. Il dente sopra o sotto, senza più nulla contro cui mordere, scende gradualmente verso il vuoto. I contatti che erano stretti si aprono, e il cibo inizia a fermarsi dove prima non succedeva.',
          'Sotto, l’osso che teneva la radice non viene più caricato. L’osso si mantiene con l’uso, quindi inizia a ridursi: più in fretta il primo anno, poi più lentamente, senza fermarsi.',
          'Niente di drammatico da un mese all’altro. Ma in cinque anni un dente mancante diventa un problema di morso che riguarda tre o quattro denti, in una zona con meno osso di prima.',
        ],
      },
      {
        title: 'Impianto singolo o ponte?',
        intro: ['La maggior parte di chi ha un dente mancante sceglie tra questi due, e la differenza merita di essere capita prima che qualcuno ne consigli uno.'],
        inline: [
          { title: 'Un ponte', text: 'lima i denti sani da entrambi i lati e appende un dente artificiale tra loro. Più rapido, più economico all’inizio, senza intervento. Il prezzo è che due denti integri vengono limati per sempre per risolvere il problema di un terzo, e l’osso sotto continua comunque a ritirarsi.' },
          { title: 'Un impianto singolo', text: 'sostituisce anche la radice. I denti vicini restano intatti e l’osso resta caricato. Costa di più all’inizio e richiede mesi invece di settimane, ma di solito dura molto di più.' },
        ],
        outro: ['Ci sono casi in cui il ponte è davvero la soluzione migliore, e lo diciamo quando è così. Ma se i denti vicini sono sani, limarli è un costo reale che raramente compare in un preventivo.'],
      },
      {
        title: 'Perché la pianificazione decide tutto',
        intro: [
          'L’impianto deve andare in un punto esatto, con un angolo esatto e a una profondità esatta, e il margine di errore è minimo.',
          'Nell’arcata superiore il seno si trova sopra i denti posteriori, e dopo anni senza dente l’altezza ossea lì può essere minima. In quella inferiore il nervo passa nella zona posteriore e va evitato con una distanza chiara. Tra i denti vicini lo spazio è limitato, e impianto più osso circostante devono starci dentro.',
          'Per questo le immagini dell’osso vengono prima del piano, non come formalità dopo: mostrano volume, densità e dove si trova davvero l’anatomia da evitare.',
        ],
      },
      {
        title: 'I tempi dopo un’estrazione',
        intro: [
          'Se il dente c’è ancora, o è stato estratto da poco, l’ordine cambia.',
          'A volte l’impianto può essere inserito nell’alveolo nella stessa seduta dell’estrazione, il che preserva l’osso e fa risparmiare mesi. Dipende dall’assenza di infezione attiva e da quanto osso integro c’è intorno.',
          'Più spesso la zona viene lasciata guarire per qualche mese e l’impianto inserito in osso guarito. È la strada più prevedibile e quella che consigliamo nel dubbio. Se hai ancora il dente e sai che non si può salvare, conviene chiederlo prima di estrarlo.',
        ],
      },
      {
        title: 'Quando manca l’osso',
        intro: [
          'Uno spazio vecchio ha di solito perso larghezza e altezza, e a volte non ne resta abbastanza per sostenere un impianto in sicurezza.',
          'L’innesto osseo ricostruisce la zona. Per un singolo dente è di solito un piccolo intervento e aggiunge una fase di guarigione prima dell’impianto. Le immagini ci dicono se serve, e te lo diciamo in anticipo.',
        ],
      },
      {
        title: 'Cosa entra nella tua bocca',
        intro: ['Ti diciamo per nome cosa verrà inserito prima di iniziare, e lo scriviamo nel preventivo:'],
        cards: [
          { title: 'Impianto in titanio MegaGen', text: 'Il sistema sudcoreano che inseriamo, molto diffuso in Europa e ben documentato per le prestazioni in osso più morbido o ridotto, le condizioni tipiche di una zona guarita dopo un’estrazione.' },
          { title: 'Corona in zirconia Made in Germany', text: 'La corona sopra, modellata e abbinata al colore dei denti vicini. Resistente, non si macchia e trasmette la luce come un dente: l’unica parte che qualcuno vedrà mai.' },
        ],
        outro: ['Per i denti posteriori che non si vedono, una corona in metallo-ceramica Made in Germany è un’alternativa resistente e più economica.'],
      },
    ],
    stats: [
      { value: '2', label: 'Viaggi' },
      { value: '6 mesi', label: 'Tra i viaggi' },
      { value: '30–60 min', label: 'Inserimento impianto' },
      { value: 'Decenni', label: 'Durata' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Corona quotata a parte',
    whatTitle: 'Cos’è un impianto dentale singolo?',
    what: [
      'Un impianto dentale singolo è composto da tre parti, e vale la pena sapere cosa fa ciascuna, perché si comportano in modo molto diverso nel tempo. L’impianto è una vite in titanio inserita nell’osso al posto della radice. Si usa il titanio perché l’osso si lega direttamente ad esso, un processo chiamato osteointegrazione.',
      'L’abutment è il connettore che si trova sull’impianto e attraversa la gengiva. La corona è il dente visibile, realizzata in laboratorio e abbinata al colore dei denti vicini. Solo la corona si vede e solo la corona si consuma. L’impianto, se la gengiva intorno resta sana, è una struttura permanente.',
    ],
    calloutTitle: 'La tua salute generale conta quanto l’osso',
    calloutText:
      'Diabete non controllato, infezione gengivale attiva, fumo frequente e alcuni farmaci per le ossa influiscono sull’integrazione dell’impianto, per questo esaminiamo la tua storia medica prima di pianificare. Nella maggior parte dei casi sono gestibili, ma vanno conosciuti fin dall’inizio.',
    compareTitle: 'Cosa comprende un impianto singolo',
    compareIntro: 'L’impianto sostituisce la radice; la corona sopra si sceglie in base alla posizione del dente:',
    compare: [
      { id: 'implant-megagen', tag: 'Questo trattamento', title: 'Impianto MegaGen', text: 'La radice in titanio, inserita in anestesia locale. Dopo sei mesi di integrazione con l’osso, sopra viene fissata la corona.' },
      { id: 'crown-zirconia', tag: 'Corona consigliata', title: 'Corona in zirconia', text: 'Made in Germany, senza metallo e dall’aspetto naturale. Abbastanza resistente per i denti posteriori e bella per quelli anteriori.' },
      { id: 'crown-porcelain', tag: 'Alternativa economica', title: 'Corona in metallo-ceramica', text: 'Made in Germany, resistente e con una lunga storia clinica. Una scelta valida per i denti posteriori che non si vedono quando sorridi.' },
    ],
    fitTitle: 'Per chi è l’impianto singolo?',
    fitIntro: 'Un impianto dentale singolo è di solito la risposta giusta se:',
    fit: [
      'Hai uno spazio vuoto per un’estrazione, un incidente o un dente mai spuntato',
      'Un dente è incrinato, molto cariato o ha ceduto dopo una devitalizzazione',
      'Vuoi lasciare intatti i denti sani vicini invece di limarli per le corone',
      'Un ponte esistente ha ceduto e non vuoi ripetere la stessa soluzione',
      'Lo spazio si vede quando sorridi e lo nascondi da anni',
      'Mastichi da un solo lato perché dall’altro c’è uno spazio che non noti più',
    ],
    fitNote:
      'Un molare mancante conta quanto un dente anteriore. Quello davanti è quello che si nota; quello dietro è quello che mastica, e perderlo sposta in silenzio il carico su denti che non erano fatti per sostenerlo da soli.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'L’impianto singolo si svolge in due viaggi, con sei mesi di guarigione in mezzo. L’intervento è breve; l’attesa è biologia:',
    steps: [
      { title: 'Valutazione e immagini', text: 'Una visita completa e immagini della zona. Volume e densità dell’osso, posizione del seno o del nervo e spazio tra i denti determinano misura e angolo dell’impianto.' },
      { title: 'Inserimento dell’impianto', text: 'L’impianto viene inserito in anestesia locale, per un dente di solito in 30-60 minuti. Molti pazienti si stupiscono di quanto sia più breve dell’estrazione che ha creato lo spazio.' },
      { title: 'Periodo di guarigione', text: 'Sei mesi mentre l’impianto si integra con l’osso. Torni a casa e continui la vita normale; restiamo raggiungibili per tutto il tempo.' },
      { title: 'Una corona come i tuoi denti', text: 'Nel secondo viaggio si prendono le impronte e la corona viene realizzata secondo colore, forma e traslucenza dei denti vicini.' },
      { title: 'Applicazione della corona', text: 'La corona viene fissata sull’impianto, il morso controllato e regolato, e i contatti con i denti vicini rifiniti perché il filo passi pulito.' },
    ],
    whyBandTitle: 'Perché Veneer Clinic per un impianto dentale singolo?',
    whyBandText:
      'Ti diciamo per nome quale impianto verrà inserito prima di iniziare, e lo scriviamo nel preventivo. L’impianto singolo è un piccolo intervento con una lunga vita davanti, e quella vita dipende da cosa è stato inserito e con quanta precisione.',
    caseText: 'Un dente sostituito con impianto e corona',
    faq: [
      { question: 'Quanto costa un impianto singolo?', answer: 'L’impianto MegaGen costa 500 €. La corona sopra è quotata a parte e confermata nel preventivo; come riferimento, le nostre corone in zirconia Made in Germany costano 200 € e quelle in metallo-ceramica 100 € per dente. Se serve un innesto osseo, te lo diciamo in anticipo.' },
      { question: 'Impianto o ponte?', answer: 'Il ponte sostituisce il dente limando i due denti sani ai lati per le corone e appendendo un dente artificiale tra loro. È più rapido, costa meno all’inizio e non richiede intervento, ma due denti sani vengono modificati per sempre e l’osso sotto continua a ritirarsi. L’impianto sostituisce anche la radice, lascia intatti i vicini e preserva l’osso. Ci sono casi in cui il ponte è migliore, per esempio quando i denti vicini hanno comunque bisogno di corone, e lo diciamo.' },
      { question: 'Posso avere la corona lo stesso giorno dell’impianto?', answer: 'A volte, ma non di solito. Il carico immediato è possibile con osso denso, ottima stabilità iniziale e un morso che non carica molto quel dente, condizioni più frequenti davanti. Ciò che si applica quel giorno è una corona provvisoria; quella definitiva aspetta comunque l’integrazione. Se lo spazio si vede quando sorridi, valuteremo una soluzione provvisoria.' },
      { question: 'Quanto dura un impianto singolo?', answer: 'Impianto e corona invecchiano in modo diverso. L’impianto è titanio integrato nell’osso vivo; con gengive sane e buona igiene dura di solito decenni e spesso tutta la vita. Ciò che lo minaccia è la perimplantite, un’infiammazione da placca in gran parte prevenibile. La corona si consuma come ogni restauro e può richiedere la sostituzione dopo 10-15 anni, ma l’impianto sotto resta dov’è.' },
      { question: 'Fa male?', answer: 'Meno di quanto la maggior parte si aspetti, e di solito meno dell’estrazione che ha creato lo spazio. La zona viene anestetizzata localmente e senti pressione e movimento, non dolore. Dopo, gonfiore e sensibilità per qualche giorno sono normali e si gestiscono con comuni antidolorifici. La maggior parte torna alle attività il giorno dopo. Se il dentista ti mette ansia, diccelo quando prenoti.' },
      { question: 'E se lo spazio è vecchio di anni?', answer: 'Conta, ma raramente esclude qualcosa. Uno spazio vecchio ha di solito meno osso di uno recente, e questo cambia la pianificazione, non la possibilità. In molti casi c’è ancora osso sufficiente per un impianto standard; in alcuni serve prima un innesto. I denti vicini possono essersi inclinati verso lo spazio e a volte va corretto prima. Te lo diciamo in anticipo.' },
      { question: 'La corona somiglierà ai miei denti?', answer: 'È la vera sfida di un impianto anteriore: una singola corona deve sparire tra due denti naturali con il loro colore e la loro traslucenza. Il colore viene preso sui denti vicini e inviato al laboratorio con le impronte. La zirconia trasmette la luce come un dente. Se pensi di sbiancare, fallo prima di realizzare la corona, perché le corone non si sbiancano.' },
      { question: 'Che marca di impianti usate?', answer: 'MegaGen, il produttore sudcoreano molto diffuso in Europa e ben documentato per le prestazioni in osso più morbido o ridotto. Il sistema è scritto nel preventivo prima di iniziare. Nessun paziente può distinguere gli impianti allo specchio, proprio per questo conta sapere cosa viene inserito.' },
      { question: 'Perché servono due viaggi per un dente?', answer: 'Perché l’impianto ha bisogno di circa sei mesi per integrarsi con l’osso prima di poter caricare la corona definitiva. Quei tempi li decide la guarigione, non il calendario. Per un singolo dente entrambe le visite sono brevi: nella prima si inserisce l’impianto, nella seconda si prendono le impronte e si applica la corona.' },
      { question: 'Vale la pena per un molare che non si vede?', answer: 'Sì, forse più che per un dente anteriore. I molari generano la maggior parte della forza masticatoria, e quando ne manca uno il carico passa a denti non fatti per questo. Negli anni ciò porta a incrinature, usura e spostamenti, mentre l’osso sotto continua a ritirarsi, che lo spazio si veda o no.' },
      { question: 'Il fumo è un problema?', answer: 'Aumenta il rischio di fallimento, perché riduce la circolazione nelle gengive e rallenta la guarigione durante l’integrazione, e aumenta il rischio a lungo termine di perimplantite. Non è una controindicazione assoluta e molti fumatori hanno impianti riusciti, ma il rischio è reale. Ridurre nelle settimane intorno all’intervento fa una differenza concreta.' },
      { question: 'Cosa succede se l’impianto fallisce?', answer: 'È raro, ma succede. Quasi tutti i fallimenti avvengono presto, quando l’impianto non si integra come previsto, e di solito si avvertono come fastidio o mobilità. In quel caso l’impianto si rimuove, la zona guarisce e se ne inserisce uno nuovo più tardi. I fallimenti tardivi sono quasi sempre perimplantite da placca, per questo igiene e controlli annuali contano tanto. Te lo diciamo apertamente prima di iniziare.' },
    ],
  },
};

export default function SingleImplantPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="implant-megagen"
      heroImage={images.surgery[4] ?? images.heroAfter}
      whatImage={images.surgery[3] ?? images.heroAfter}
    />
  );
}
