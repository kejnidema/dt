import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Shtim kocke',
    eyebrow: 'Implante · Shqipëri',
    subtitle: 'Rindërtimi i kockës së nofullës që implanti të ketë bazë të fortë.',
    lead: 'Rindërtimi i kockës së humbur të nofullës që një implant të ketë diçka të fortë ku të ankorohet: shpesh hapi i parë drejt një buzëqeshjeje më të fortë.',
    kicker: 'Shtim kocke në Tiranë, Shqipëri',
    articleTitle: 'Shtimi i kockës në Tiranë: rindërtimi i nofullës para implanteve',
    intro: [
      'Shtimi i kockës rindërton kockën e nofullës aty ku është tërhequr, që implanti të ketë një bazë të fortë ku të ankorohet.',
      'Kocka nuk është skelet i përhershëm. Ajo ekziston për të mbajtur ngarkesë, dhe kur humbet një dhëmb, rrënja pushon së transmetuari forcën e kafshimit te nofulla. Trupi e lexon atë zonë si të papërdorur dhe e riabsorbon. Pjesa më e madhe e humbjes ndodh brenda vitit të parë pas heqjes së dhëmbit, dhe vazhdon në heshtje edhe vitet në vijim.',
      'Në Veneer Clinic, shtimi i kockës kushton 500 €, kryhet me anestezi lokale në 45–60 minuta dhe përdor kockë artificiale ose humane nën një membranë të tretshme.',
    ],
    sections: [
      {
        title: 'Pse shtimi i kockës vjen para implantit',
        intro: [
          'Implanti ka nevojë për kockë nga të gjitha anët. Nëse gjerësia nuk mjafton, spiralet mbeten të zbuluara; nëse lartësia nuk mjafton, implanti nuk arrin një thellësi të qëndrueshme. Një implant i vendosur në kockë të pamjaftueshme nuk dështon ditën e parë. Dështon ngadalë, dy ose tre vjet më vonë, kur kurora është vendosur dhe paguar tashmë: momenti më i keq i mundshëm për ta kuptuar.',
          'Shtimi e kthen volumin që mungon. Granulat ngjeshen në zonën me mangësi dhe mbulohen me një membranë të tretshme që pengon indin e butë të rritet brenda; gjatë muajve në vijim, qelizat tuaja kockore migrojnë përmes materialit. Materiali nuk mbetet si bllok i huaj në nofull. Është një skelet që trupi juaj e zëvendëson me kockë të gjallë.',
        ],
      },
      {
        title: 'Sa kockë mungon është matje, jo mendim',
        intro: [
          'Humbja e kockës nuk duket nga jashtë. Një nofull që në pasqyrë duket krejt normale mund të jetë tre ose katër milimetra shumë e ngushtë për një implant.',
          'Grafia panoramike që na dërgoni nga shtëpia na jep pamjen e parë dhe lartësinë e përafërt. Por panoramikja e shtyp një kockë të lakuar në një plan të vetëm dhe nuk thotë shumë për gjerësinë, prandaj në klinikë, para çdo ndërhyrjeje, kocka vlerësohet pikërisht aty ku do të shkojë implanti. Kjo është diferenca mes planifikimit të një rasti dhe hamendësimit të tij.',
        ],
      },
      {
        title: 'Shtimi është një fazë, jo një pengesë',
        intro: [
          '“Ju duhet shtim kocke” merret si lajm i keq. Është e kundërta: do të thotë se rasti po planifikohet mbi atë që tregojnë imazhet, jo mbi shpresë.',
          'Klinikat që nuk e përmendin kurrë shtimin e kockës nuk gjejnë më shumë kockë se ne. Thjesht vendosin implante në më pak kockë.',
        ],
      },
      {
        title: 'Katër situata që mbulojnë pothuajse çdo rast',
        intro: ['Shtimi i kockës nuk është një ndërhyrje e vetme. Teknika zgjidhet sipas asaj që tregojnë imazhet:'],
        inline: [
          { title: 'Ruajtja e alveolës.', text: 'Kryhet në të njëjtin takim me heqjen e dhëmbit. Materiali vendoset menjëherë në alveolën e zbrazët, para se të ketë kohë të shembet. Është forma më e thjeshtë e shtimit dhe parandalon problemin në vend që ta korrigjojë. Nëse e dini se një dhëmb do të hiqet dhe më vonë doni implant, kërkojeni që në atë moment.' },
          { title: 'Zgjerimi i kreshtës.', text: 'Për një nofull që është ngushtuar ose rrafshuar tashmë, zakonisht vite pas humbjes së dhëmbit. Materiali vendoset përballë kreshtës me mangësi dhe mbahet nën membranë derisa konsolidohet. Gjerësia rindërtohet shumë mirë; lartësia është më e vështirë dhe kërkon më shumë kohë, dhe për këtë ju themi hapur çfarë është realiste.' },
          { title: 'Ngritja e sinusit.', text: 'Në pjesën e pasme të nofullës së sipërme dyshemeja e sinusit qëndron ulët, dhe pas humbjes së dhëmbëve zbret edhe më poshtë. Membrana e sinusit ngrihet dhe materiali vendoset poshtë saj. E trajtojmë si procedurë më vete, me planifikimin e vet.' },
          { title: 'Rigjenerim gjatë vendosjes së implantit.', text: 'Kur mangësia është e vogël, shtimi kryhet në të njëjtën ndërhyrje me implantin. Spiralet e zbuluara mbulohen me granula dhe membranë, dhe gjithçka shërohet bashkë. Pa pritje të veçantë, por funksionon vetëm nëse implanti arrin qëndrueshmëri fillestare në kockën ekzistuese.' },
        ],
      },
      {
        title: 'Si vendosim cila ju duhet',
        intro: [
          'Matja e gjerësisë dhe e lartësisë pikërisht aty ku do të shkojë implanti përcakton cila nga teknikat e mësipërme zbatohet, dhe bëhet para se të angazhoheni për asgjë.',
          'Ajo përcakton edhe fazat. Një shtim i vogël i kryer bashkë me implantin nuk shton asnjë fazë. Një shtim i konsiderueshëm duhet të shërohet i pari, dhe implanti vjen në udhëtimin e dytë, 6 deri në 8 muaj më vonë. Ju themi cila vlen për rastin tuaj që në fillim, sepse ndryshon renditjen e gjithë trajtimit.',
        ],
      },
      {
        title: 'Si është në të vërtetë procedura',
        intro: [
          'Anestezi lokale, një takim, zakonisht 45 deri në 60 minuta për një zonë. Hapet mishi, vendoset dhe formësohet materiali, pozicionohet membrana, qepet. Dilni po atë ditë. Ënjtja dhe sikleti për dy-tre ditë janë normale dhe kalojnë me qetësues të zakonshëm. Pa anestezi të përgjithshme dhe pa qëndrim spitalor.',
          'Kur vijnë implantet, ato janë MegaGen, dhe vendosen vetëm pasi një kontroll i dytë konfirmon se zona e shtuar është gati.',
        ],
      },
      {
        title: 'Cili material shtimi ju përshtatet?',
        intro: ['Të dyja janë zgjidhje të konsoliduara; zgjedhja varet nga madhësia e defektit dhe nga preferenca juaj për origjinën e materialit:'],
        cards: [
          { title: 'Kockë artificiale (sintetike)', text: 'Granula minerale laboratorike që shërbejnë vetëm si skelet për rritjen e kockës suaj. Pa origjinë shtazore apo donatori, gjë që për disa pacientë ka rëndësi për arsye fetare ose personale.' },
          { title: 'Kockë humane (alograft)', text: 'Kockë dhuruesi e përpunuar dhe e sterilizuar sipas standardeve të bankave të indeve. Strukturë shumë e ngjashme me kockën tuaj, që integrohet mirë dhe e ruan volumin.' },
        ],
        outro: ['Cilindo material të përdorim, shkruhet në ofertën tuaj. Keni të drejtë të dini çfarë hyn në nofullën tuaj.'],
      },
    ],
    stats: [
      { value: '1 ditë', label: 'Procedura' },
      { value: 'Lokale', label: 'Anestezia' },
      { value: '45–60 min', label: 'Për zonë' },
      { value: '6–8 muaj', label: 'Shërimi' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Dy udhëtime, 6–8 muaj larg',
    whatTitle: 'Çfarë është shtimi i kockës?',
    what: [
      'Shtimi i kockës është vendosja e një materiali kockor në një zonë të nofullës ku kocka është tërhequr, që trupi juaj ta përdorë si skelet dhe ta zëvendësojë me kockë të gjallë.',
      'Materiali mbulohet me një membranë të tretshme që mban indin e butë jashtë, dhe gjatë 6 deri në 8 muajve zona kthehet në kockë të fortë mjaftueshëm për të mbajtur një implant.',
    ],
    calloutTitle: 'Shëndeti i përgjithshëm ka po aq rëndësi sa nofulla',
    calloutText:
      'Duhani, diabeti i pakontrolluar, infeksioni aktiv i mishrave dhe disa barna për kockat ndikojnë te mënyra si integrohet materiali. Në shumicën e rasteve menaxhohen në vend që të përjashtojnë trajtimin, por duhen ditur para ndërhyrjes, jo të zbulohen gjatë shërimit.',
    compareTitle: 'Rindërtim apo shmangie e tij?',
    compareIntro: 'Varet nga ku mungon kocka dhe sa mungon:',
    compare: [
      { id: 'bone-graft', tag: 'Ky trajtim', title: 'Shtim kocke', text: 'Rindërton gjerësinë ose lartësinë aty ku do të shkojë implanti. Një takim, pastaj 6 deri në 8 muaj shërim.' },
      { id: 'sinus-lift', tag: 'Nofulla e sipërme prapa', title: 'Ngritje sinusi', text: 'Forma e shtimit për pjesën e pasme të sipërme, ku sinusi qëndron ulët dhe implantit i mungon lartësia.' },
      { id: 'implant-zygomatic', tag: 'Pa shtim', title: 'Implante zigomatike', text: 'Kur humbja e kockës lart është e rëndë, implantet ankorohen në kockën e mollëzës dhe shtimi shmanget plotësisht.' },
    ],
    fitTitle: 'Kujt i duhet shtim kocke?',
    fitIntro: 'Imazhet japin përgjigjen përfundimtare, por shtimi i kockës zakonisht hyn në lojë nëse:',
    fit: [
      'Një dhëmb ju mungon prej një viti a më shumë dhe kreshta është ngushtuar dukshëm',
      'Një klinikë tjetër ju tha se nuk kishte kockë të mjaftueshme për implant',
      'Ju duhen implante në pjesën e pasme të sipërme, ku sinusi qëndron ulët',
      'Një dhëmb do të hiqet dhe doni ta ruani alveolën për një implant të mëvonshëm',
      'Proteza e lëvizshme ka përshpejtuar humbjen e kockës poshtë saj',
      'Paradontiti shkatërroi kockën rreth dhëmbëve që i keni humbur më pas',
    ],
    fitNote:
      'Jo çdo rast e kërkon. Kur mangësia është e lehtë, një implant më i shkurtër ose një vendosje e pjerrët mund ta shmangin plotësisht, dhe preferojmë t’jua themi këtë sesa të shtojmë një procedurë. Vendosin imazhet, dhe imazhet i shihni edhe ju.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'Vetë shtimi është një takim i vetëm. Kohën e merr shërimi pas tij, dhe ajo fazë kalon pa ndërhyrje:',
    steps: [
      { title: 'Grafia dhe vlerësimi', text: 'Nga grafia panoramike planifikojmë rastin; në klinikë kocka vlerësohet në vendin e implantit. Vendoset nëse ju duhet shtim, cilën teknikë kërkon dhe nëse kombinohet me implantin.' },
      { title: 'Vendosja e materialit', text: 'Një takim me anestezi lokale. Hapet zona, materiali ngjeshet në defekt, mbulohet me membranë të tretshme dhe mishi qepet. Dilni po atë ditë.' },
      { title: 'Shërimi i hershëm', text: 'Ënjtje dhe siklet për disa ditë, që kalojnë me qetësues të zakonshëm. Ushqim i butë për një javë, pa presion mbi zonën, pa duhan. Qepjet bien ose hiqen brenda dhjetë ditësh.' },
      { title: 'Integrimi', text: '6 deri në 8 muaj derisa kocka juaj zëvendëson materialin. Jeni në shtëpi; nuk ka asgjë për të bërë dhe asgjë për t’u parë.' },
      { title: 'Kontrolli dhe implanti', text: 'Në udhëtimin e dytë një kontroll konfirmon se kocka e shtuar ka volum dhe dendësi për të mbajtur implant. Vetëm atëherë vendoset implanti MegaGen.' },
    ],
    whyBandTitle: 'Pse Veneer Clinic për shtim kocke?',
    whyBandText:
      'Rekomandojmë shtim vetëm kur imazhet tregojnë se duhet, dhe imazhet jua tregojmë. Materiali që hyn në nofullën tuaj shkruhet në ofertë, po ashtu edhe sistemi i implanteve që vjen pas tij, dhe nëse rasti juaj zgjidhet pa shtim, do t’jua themi.',
    caseText: 'Kockë e rindërtuar para implanteve',
    faq: [
      { question: 'Sa kushton shtimi i kockës?', answer: 'Shtimi i kockës kushton 500 €. Nëse duhen disa zona, ose ngritje sinusi në pjesën e pasme të sipërme, kjo shkruhet veçmas në ofertë. Oferta e saktë ju dërgohet me shkrim pas vlerësimit të grafisë panoramike.' },
      { question: 'A dhemb shtimi i kockës?', answer: 'Jo. Procedura kryhet me anestezi lokale dhe ajo që ndihet është presion, jo dhimbje. Pas saj ka ënjtje dhe siklet për dy-tre ditë, të krahasueshme me heqjen e një dhëmbi, dhe qetësuesit e zakonshëm mjaftojnë. Shumica e pacientëve çuditen se sa e lehtë rezulton krahasuar me sa kirurgjikale tingëllon. Para se të dilni merrni udhëzimet me shkrim: ushqim i butë, pa duhan, asgjë e nxehtë ditën e parë dhe mos e prekni zonën.' },
      { question: 'Sa duhet të pres para implanteve?', answer: '6 deri në 8 muaj, prandaj trajtimi bëhet në dy udhëtime. Pritja nuk është arbitrare: materiali duhet të zëvendësohet nga kocka juaj e gjallë para se të mbajë një implant, dhe ai proces nuk përshpejtohet. Vendosja e një implanti në material që nuk është konsoliduar është pikërisht mënyra si dështojnë implantet dy vjet më vonë. Para implantit gatishmëria konfirmohet me një kontroll të dytë, jo duke numëruar muaj në kalendar.' },
      { question: 'A më duhet shtim për çdo implant?', answer: 'Jo, dhe shumica e rasteve me implante nuk kërkojnë fare shtim. Shtimi bëhet i nevojshëm kur dhëmbi ka munguar mjaft gjatë sa kreshta të jetë tërhequr, kur sëmundja e mishrave ka shkatërruar kockën përreth, ose kur sinusi lart qëndron shumë ulët për gjatësinë e implantit që duhet. Një dhëmb i hequr së fundmi, në një nofull përndryshe të shëndetshme, zakonisht ka kockë të mjaftueshme. Është krejt normale të duhet shtim në një pozicion dhe asgjë në atë ngjitur.' },
      { question: 'A mund të bëhen shtimi dhe implanti njëkohësisht?', answer: 'Ndonjëherë po, dhe kur është e mundur e bëjmë, sepse ju kursen një periudhë shërimi. Funksionon kur implanti arrin qëndrueshmëri fillestare në kockën që keni tashmë dhe materiali vetëm mbulon një zonë të vogël të zbuluar. Kur mangësia është më e madhe, materiali duhet të shërohet i pari: implanti ka nevojë për diçka të fortë ku të kapet që ditën e parë, dhe granulat e lira nuk janë ajo. Jua themi që në fillim, sepse ndryshon renditjen e fazave.' },
      { question: 'Nga vjen materiali i shtimit?', answer: 'Përdorim kockë artificiale ose humane. Kocka artificiale janë granula minerale laboratorike, pa asnjë origjinë shtazore apo donatori, diçka që për disa pacientë ka rëndësi për arsye fetare ose personale. Kocka humane është kockë dhuruesi e përpunuar dhe e sterilizuar, me strukturë shumë të ngjashme me kockën tuaj. Zgjedhja varet nga madhësia e defektit dhe nga preferenca juaj, dhe cilado të jetë, shkruhet në ofertë.' },
      { question: 'Po nëse e kapërcej shtimin dhe vendos direkt implantin?', answer: 'Atëherë implanti shkon në kockë që nuk mund ta mbajë plotësisht, dhe rezultati i zakonshëm është dështim i vonshëm, jo i menjëhershëm. Aty ku kocka është shumë e ngushtë, spiralet mbeten të zbuluara përballë mishit; aty ku është shumë e ulët, implanti nuk arrin thellësi të qëndrueshme. Mund të duket mirë një ose dy vjet, pastaj sipërfaqja e zbuluar mbledh baktere, kocka tërhiqet më tej dhe implanti lirohet, zakonisht kur kurora është vendosur dhe paguar. Preferojmë të shtojmë një procedurë tani sesa të ribëjmë gjithë rastin më vonë.' },
      { question: 'A mund të dështojë shtimi i kockës?', answer: 'Po, edhe pse është e rrallë, dhe zakonisht ka zgjidhje. Dështim do të thotë se materiali nuk integrohet: riabsorbohet më shpejt sesa kocka juaj e zëvendëson, ose një infeksion ndërpret shërimin. Faktorët kryesorë janë duhani, diabeti i pakontrolluar, higjiena e dobët gjatë shërimit dhe ngarkimi i zonës shumë herët. Kur ndodh, del në kontrollin para implantit, prandaj kontrollojmë së dyti në vend që të hamendësojmë. Një shtim i dështuar ribëhet; një implant i dështuar brenda tij është problem shumë më i madh.' },
      { question: 'Sa faza ka i gjithë trajtimi?', answer: 'Zakonisht dy udhëtime, ndonjëherë vetëm një fazë kirurgjikale. Nëse shtimi kryhet bashkë me implantin, nuk shton asnjë fazë: i njëjti takim, i njëjti shërim, dhe në udhëtimin e dytë vendoset kurora. Nëse duhet të shërohet i pari, udhëtimi i parë është për shtimin dhe i dyti, 6 deri në 8 muaj më vonë, për implantin. Muajt e shërimit i kaloni në shtëpi pa ndërhyrje.' },
      { question: 'A jam shumë i moshuar për shtim kocke?', answer: 'Mosha në vetvete nuk është pengesë. Rëndësi ka aftësia e shërimit dhe gjendja e përgjithshme shëndetësore. Rimodelimi i kockës ngadalësohet me moshën, ndaj integrimi mund të zgjatë pak më shumë, por biologjia funksionon njësoj. Ajo që e ndryshon vërtet pamjen është mjekimi: bifosfonatet dhe barnat e ngjashme për osteoporozën ndryshojnë mënyrën si reagon kocka dhe duhen deklaruar para planifikimit. Sillni listën e plotë të barnave; ka më shumë rëndësi sesa datëlindja.' },
      { question: 'A ka vërtet kaq rëndësi duhani?', answer: 'Po. Është gjëja e vetme më e rëndësishme që varet nga ju. Materiali i shtuar varet nga enët e gjakut që rriten brenda tij nga kocka përreth, dhe nikotina ngushton pikërisht ato enë. Duhanpirësit kanë norma më të larta dështimi të shtimit dhe të implanteve, një nga gjetjet më të qëndrueshme në implantologji. Ju trajtojmë gjithsesi, por ndalimi dy javë para ndërhyrjes dhe muajin e parë pas saj i ndryshon shanset tuaja në mënyrë reale.' },
      { question: 'Çfarë duhet të bëj ditët e para pas ndërhyrjes?', answer: 'Ushqim i butë, pa duhan, pa presion mbi zonën dhe pa e prekur. Ditën e parë shmangni ushqimet dhe pijet e nxehta. Ënjtja arrin kulmin rreth ditës së dytë dhe pastaj bie; akulli nga jashtë ndihmon në 24 orët e para. Qetësuesit e zakonshëm mjaftojnë. Nëse diçka nuk duket normale, si gjakderdhje që nuk ndalon, dhimbje që rritet pas ditës së tretë ose temperaturë, na kontaktoni menjëherë.' },
    ],
  },
  en: {
    name: 'Bone Grafting',
    eyebrow: 'Implants · Albania',
    subtitle: 'Rebuilding the jawbone so an implant has a solid base.',
    lead: 'Rebuilding lost jawbone so an implant has something solid to anchor into: often the first step towards a stronger smile.',
    kicker: 'Bone grafting in Tirana, Albania',
    articleTitle: 'Bone grafting in Tirana: rebuilding the jaw before implants',
    intro: [
      'Bone grafting rebuilds the jawbone where it has receded, so an implant has a solid base to anchor into.',
      'Bone is not a permanent skeleton. It exists to carry load, and when a tooth is lost the root stops transmitting bite force to the jaw. The body reads that area as unused and resorbs it. Most of the loss happens within the first year after extraction, and it continues quietly in the years that follow.',
      'At Veneer Clinic, bone grafting costs €500, is done under local anaesthesia in 45–60 minutes and uses artificial or human bone under a resorbable membrane.',
    ],
    sections: [
      {
        title: 'Why grafting comes before the implant',
        intro: [
          'An implant needs bone on every side. If the width is not enough, threads are left exposed; if the height is not enough, the implant cannot reach a stable depth. An implant placed in insufficient bone does not fail on day one. It fails slowly, two or three years later, when the crown is already fitted and paid for: the worst possible moment to find out.',
          'Grafting restores the missing volume. Granules are packed into the deficient area and covered with a resorbable membrane that stops soft tissue growing in; over the following months your own bone cells migrate through the material. The material does not stay as a foreign block in the jaw. It is a scaffold your body replaces with living bone.',
        ],
      },
      {
        title: 'How much bone is missing is a measurement, not an opinion',
        intro: [
          'Bone loss does not show from the outside. A jaw that looks perfectly normal in the mirror can be three or four millimetres too narrow for an implant.',
          'The panoramic X-ray you send from home gives us the first picture and the approximate height. But a panoramic flattens a curved bone into a single plane and says little about width, so at the clinic, before any procedure, the bone is assessed exactly where the implant will go. That is the difference between planning a case and guessing at it.',
        ],
      },
      {
        title: 'Grafting is a phase, not an obstacle',
        intro: [
          '“You need a bone graft” is taken as bad news. It is the opposite: it means your case is being planned on what the imaging actually shows, not on hope.',
          'Clinics that never mention grafting do not find more bone than we do. They simply place implants in less bone.',
        ],
      },
      {
        title: 'Four situations that cover almost every case',
        intro: ['Bone grafting is not a single procedure. The technique is chosen according to what the imaging shows:'],
        inline: [
          { title: 'Socket preservation.', text: 'Done at the same appointment as the extraction. Material goes straight into the empty socket before it has time to collapse. It is the simplest form of grafting and prevents the problem rather than correcting it. If you know a tooth is coming out and you will want an implant later, ask for it at that moment.' },
          { title: 'Ridge augmentation.', text: 'For a jaw that has already narrowed or flattened, usually years after tooth loss. Material is placed against the deficient ridge and held under a membrane until it consolidates. Width is rebuilt very reliably; height is harder and takes longer, and we tell you openly what is realistic.' },
          { title: 'Sinus lift.', text: 'In the upper back jaw the sinus floor sits low, and after tooth loss it drops further. The sinus membrane is lifted and material placed beneath it. We treat it as a procedure in its own right, with its own planning.' },
          { title: 'Guided regeneration during implant placement.', text: 'When the deficiency is small, grafting is done in the same procedure as the implant. Exposed threads are covered with granules and membrane, and everything heals together. No separate wait, but it only works if the implant achieves primary stability in the existing bone.' },
        ],
      },
      {
        title: 'How we decide which you need',
        intro: [
          'Measuring width and height exactly where the implant will go determines which of the techniques above applies, and it is done before you commit to anything.',
          'It also determines the phases. A small graft done with the implant adds no phase. A substantial graft has to heal first, and the implant comes on the second trip, 6 to 8 months later. We tell you which applies to your case from the start, because it changes the order of the whole treatment.',
        ],
      },
      {
        title: 'What the procedure is really like',
        intro: [
          'Local anaesthesia, one appointment, usually 45 to 60 minutes for one area. The gum is opened, the material placed and shaped, the membrane positioned, stitched. You leave the same day. Swelling and discomfort for two or three days are normal and settle with ordinary painkillers. No general anaesthesia and no hospital stay.',
          'When the implants follow, they are MegaGen, and they are only placed after a second check confirms the grafted area is ready.',
        ],
      },
      {
        title: 'Which graft material suits you?',
        intro: ['Both are established solutions; the choice depends on the size of the defect and your preference about the material’s origin:'],
        cards: [
          { title: 'Artificial bone (synthetic)', text: 'Laboratory mineral granules that act purely as a scaffold for your own bone to grow into. No animal or donor origin, which matters to some patients for religious or personal reasons.' },
          { title: 'Human bone (allograft)', text: 'Donor bone processed and sterilised to tissue bank standards. A structure very close to your own bone, which integrates well and holds its volume.' },
        ],
        outro: ['Whichever material we use is written in your quote. You have a right to know what goes into your jaw.'],
      },
    ],
    stats: [
      { value: '1 day', label: 'Procedure' },
      { value: 'Local', label: 'Anaesthesia' },
      { value: '45–60 min', label: 'Per area' },
      { value: '6–8 months', label: 'Healing' },
    ],
    priceTitle: 'Price',
    priceNote: 'Two trips, 6–8 months apart',
    whatTitle: 'What is bone grafting?',
    what: [
      'Bone grafting is placing bone material in an area of the jaw where bone has receded, so your body uses it as a scaffold and replaces it with living bone.',
      'The material is covered with a resorbable membrane that keeps soft tissue out, and over 6 to 8 months the area turns into bone strong enough to carry an implant.',
    ],
    calloutTitle: 'General health matters as much as the jaw',
    calloutText:
      'Smoking, uncontrolled diabetes, active gum infection and some bone medications affect how the material integrates. In most cases they are managed rather than ruling out treatment, but they need to be known before the procedure, not discovered during healing.',
    compareTitle: 'Rebuild, or avoid it?',
    compareIntro: 'It depends on where bone is missing and how much:',
    compare: [
      { id: 'bone-graft', tag: 'This treatment', title: 'Bone grafting', text: 'Rebuilds width or height where the implant will go. One appointment, then 6 to 8 months of healing.' },
      { id: 'sinus-lift', tag: 'Upper back jaw', title: 'Sinus lift', text: 'The form of grafting for the upper back jaw, where the sinus sits low and the implant lacks height.' },
      { id: 'implant-zygomatic', tag: 'No grafting', title: 'Zygomatic implants', text: 'When upper bone loss is severe, implants anchor in the cheekbone and grafting is avoided entirely.' },
    ],
    fitTitle: 'Who needs a bone graft?',
    fitIntro: 'Imaging gives the final answer, but bone grafting usually comes into play if:',
    fit: [
      'A tooth has been missing for a year or more and the ridge has visibly narrowed',
      'Another clinic told you there was not enough bone for an implant',
      'You need implants in the upper back jaw, where the sinus sits low',
      'A tooth is coming out and you want to preserve the socket for a later implant',
      'A removable denture has accelerated bone loss beneath it',
      'Gum disease destroyed the bone around teeth you later lost',
    ],
    fitNote:
      'Not every case needs it. When the deficiency is mild, a shorter implant or an angled placement can avoid it entirely, and we would rather tell you that than add a procedure. The imaging decides, and you see the imaging too.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'The graft itself is a single appointment. The time goes into the healing afterwards, and that phase needs no intervention:',
    steps: [
      { title: 'X-ray and assessment', text: 'We plan the case from your panoramic X-ray; at the clinic the bone is assessed at the implant site. We decide whether you need a graft, which technique and whether it combines with the implant.' },
      { title: 'Placing the material', text: 'One appointment under local anaesthesia. The area is opened, material packed into the defect, covered with a resorbable membrane and the gum stitched. You leave the same day.' },
      { title: 'Early healing', text: 'Swelling and discomfort for a few days, settled with ordinary painkillers. Soft food for a week, no pressure on the area, no smoking. Stitches dissolve or are removed within ten days.' },
      { title: 'Integration', text: '6 to 8 months while your bone replaces the material. You are at home; there is nothing to do and nothing to see.' },
      { title: 'Check and implant', text: 'On the second trip a check confirms the grafted bone has the volume and density to carry an implant. Only then is the MegaGen implant placed.' },
    ],
    whyBandTitle: 'Why Veneer Clinic for bone grafting?',
    whyBandText:
      'We recommend grafting only when the imaging shows it is needed, and we show you the imaging. The material going into your jaw is written in the quote, as is the implant system that follows, and if your case can be solved without grafting, we will tell you.',
    caseText: 'Bone rebuilt before implants',
    faq: [
      { question: 'How much does bone grafting cost?', answer: 'Bone grafting costs €500. If several areas are needed, or a sinus lift in the upper back jaw, that is itemised separately in the quote. The exact quote is sent to you in writing after we assess your panoramic X-ray.' },
      { question: 'Does bone grafting hurt?', answer: 'No. The procedure is done under local anaesthesia and what you feel is pressure, not pain. Afterwards there is swelling and discomfort for two or three days, comparable to an extraction, and ordinary painkillers are enough. Most patients are surprised how easy it is compared with how surgical it sounds. Before you leave you get written instructions: soft food, no smoking, nothing hot on the first day and do not touch the area.' },
      { question: 'How long do I wait before implants?', answer: '6 to 8 months, which is why treatment is done over two trips. The wait is not arbitrary: the material has to be replaced by your own living bone before it can carry an implant, and that process cannot be rushed. Placing an implant in material that has not consolidated is exactly how implants fail two years later. Before the implant, readiness is confirmed with a second check, not by counting months on a calendar.' },
      { question: 'Do I need a graft for every implant?', answer: 'No, and most implant cases need no grafting at all. Grafting becomes necessary when a tooth has been missing long enough for the ridge to recede, when gum disease has destroyed the surrounding bone, or when the upper sinus sits too low for the implant length needed. A recently extracted tooth in an otherwise healthy jaw usually has enough bone. It is perfectly normal to need grafting at one position and nothing at the one next to it.' },
      { question: 'Can the graft and the implant be done at the same time?', answer: 'Sometimes, and when it is possible we do it, because it saves you a healing period. It works when the implant achieves primary stability in the bone you already have and the material only covers a small exposed area. When the deficiency is larger, the material has to heal first: the implant needs something solid to grip from day one, and loose granules are not that. We tell you from the start, because it changes the order of the phases.' },
      { question: 'Where does the graft material come from?', answer: 'We use artificial or human bone. Artificial bone is laboratory mineral granules with no animal or donor origin, something that matters to some patients for religious or personal reasons. Human bone is donor bone, processed and sterilised, with a structure very close to your own. The choice depends on the size of the defect and your preference, and whichever it is, it is written in the quote.' },
      { question: 'What if I skip the graft and go straight to the implant?', answer: 'Then the implant goes into bone that cannot fully hold it, and the usual result is a late failure, not an immediate one. Where bone is too narrow, threads are left exposed against the gum; where it is too low, the implant cannot reach a stable depth. It can look fine for a year or two, then the exposed surface collects bacteria, the bone recedes further and the implant loosens, usually once the crown is fitted and paid for. We would rather add a procedure now than redo the whole case later.' },
      { question: 'Can a bone graft fail?', answer: 'Yes, though it is rare, and there is usually a solution. Failure means the material does not integrate: it resorbs faster than your bone replaces it, or an infection interrupts healing. The main factors are smoking, uncontrolled diabetes, poor hygiene during healing and loading the area too early. When it happens, it shows at the check before the implant, which is why we check a second time instead of guessing. A failed graft is redone; a failed implant inside one is a much bigger problem.' },
      { question: 'How many phases does the whole treatment have?', answer: 'Usually two trips, sometimes only one surgical phase. If grafting is done with the implant, it adds no phase: same appointment, same healing, and the crown is fitted on the second trip. If it has to heal first, the first trip is for the graft and the second, 6 to 8 months later, for the implant. You spend the healing months at home with no intervention.' },
      { question: 'Am I too old for a bone graft?', answer: 'Age on its own is not an obstacle. What matters is healing capacity and general health. Bone remodelling slows with age, so integration can take a little longer, but the biology works the same. What really changes the picture is medication: bisphosphonates and similar osteoporosis drugs change how bone responds and must be declared before planning. Bring your full medication list; it matters more than your date of birth.' },
      { question: 'Does smoking really matter that much?', answer: 'Yes. It is the single most important thing that depends on you. The grafted material relies on blood vessels growing into it from the surrounding bone, and nicotine constricts exactly those vessels. Smokers have higher failure rates for grafts and implants, one of the most consistent findings in implantology. We will treat you anyway, but stopping two weeks before the procedure and for the first month after it changes your odds in a real way.' },
      { question: 'What should I do in the first days after the procedure?', answer: 'Soft food, no smoking, no pressure on the area and do not touch it. On the first day avoid hot food and drinks. Swelling peaks around the second day and then goes down; ice on the outside helps in the first 24 hours. Ordinary painkillers are enough. If anything does not seem normal, such as bleeding that will not stop, pain that increases after the third day or a temperature, contact us straight away.' },
    ],
  },
  de: {
    name: 'Knochenaufbau',
    eyebrow: 'Implantate · Albanien',
    subtitle: 'Wiederaufbau des Kieferknochens, damit das Implantat eine feste Basis hat.',
    lead: 'Wiederaufbau verlorenen Kieferknochens, damit ein Implantat festen Halt findet: oft der erste Schritt zu einem stärkeren Lächeln.',
    kicker: 'Knochenaufbau in Tirana, Albanien',
    articleTitle: 'Knochenaufbau in Tirana: den Kiefer vor Implantaten wiederherstellen',
    intro: [
      'Ein Knochenaufbau stellt den Kieferknochen dort wieder her, wo er sich zurückgebildet hat, damit ein Implantat eine feste Basis zur Verankerung hat.',
      'Knochen ist kein dauerhaftes Gerüst. Er existiert, um Last zu tragen, und wenn ein Zahn verloren geht, überträgt die Wurzel keine Kaukraft mehr auf den Kiefer. Der Körper liest diesen Bereich als ungenutzt und baut ihn ab. Der größte Teil des Verlusts geschieht im ersten Jahr nach der Extraktion und setzt sich in den Folgejahren still fort.',
      'In der Veneer Clinic kostet ein Knochenaufbau 500 €, erfolgt unter örtlicher Betäubung in 45–60 Minuten und nutzt künstlichen oder humanen Knochen unter einer resorbierbaren Membran.',
    ],
    sections: [
      {
        title: 'Warum der Aufbau vor dem Implantat kommt',
        intro: [
          'Ein Implantat braucht Knochen auf allen Seiten. Reicht die Breite nicht, bleiben Gewindegänge frei; reicht die Höhe nicht, erreicht das Implantat keine stabile Tiefe. Ein Implantat in unzureichendem Knochen versagt nicht am ersten Tag. Es versagt langsam, zwei oder drei Jahre später, wenn die Krone bereits sitzt und bezahlt ist: der schlechteste Moment, es zu erfahren.',
          'Der Aufbau ersetzt das fehlende Volumen. Granulat wird in den Defekt verdichtet und mit einer resorbierbaren Membran abgedeckt, die das Einwachsen von Weichgewebe verhindert; in den folgenden Monaten wandern Ihre eigenen Knochenzellen durch das Material. Das Material bleibt kein Fremdkörper im Kiefer. Es ist ein Gerüst, das Ihr Körper durch lebenden Knochen ersetzt.',
        ],
      },
      {
        title: 'Wie viel Knochen fehlt, ist eine Messung, keine Meinung',
        intro: [
          'Knochenverlust sieht man von außen nicht. Ein Kiefer, der im Spiegel völlig normal aussieht, kann drei oder vier Millimeter zu schmal für ein Implantat sein.',
          'Das Panoramaröntgen, das Sie von zu Hause senden, liefert das erste Bild und die ungefähre Höhe. Doch ein Panoramabild projiziert einen gebogenen Knochen auf eine Ebene und sagt wenig über die Breite, daher wird der Knochen in der Klinik vor jedem Eingriff genau dort beurteilt, wo das Implantat hinkommt. Das ist der Unterschied zwischen Planen und Raten.',
        ],
      },
      {
        title: 'Der Aufbau ist eine Phase, kein Hindernis',
        intro: [
          '„Sie brauchen einen Knochenaufbau“ wird als schlechte Nachricht verstanden. Es ist das Gegenteil: Ihr Fall wird auf Grundlage dessen geplant, was die Bildgebung tatsächlich zeigt, nicht auf Hoffnung.',
          'Kliniken, die nie einen Knochenaufbau erwähnen, finden nicht mehr Knochen als wir. Sie setzen Implantate einfach in weniger Knochen.',
        ],
      },
      {
        title: 'Vier Situationen, die fast jeden Fall abdecken',
        intro: ['Knochenaufbau ist kein einzelner Eingriff. Die Technik richtet sich nach dem, was die Bildgebung zeigt:'],
        inline: [
          { title: 'Alveolenerhalt.', text: 'Im selben Termin wie die Extraktion. Das Material kommt sofort in die leere Alveole, bevor sie einfallen kann. Die einfachste Form des Aufbaus, die das Problem verhindert statt es zu korrigieren. Wenn Sie wissen, dass ein Zahn gezogen wird und Sie später ein Implantat wollen, fragen Sie in diesem Moment danach.' },
          { title: 'Kieferkammaugmentation.', text: 'Für einen Kiefer, der bereits schmaler oder flacher geworden ist, meist Jahre nach dem Zahnverlust. Das Material wird an den Defekt angelagert und unter einer Membran gehalten, bis es konsolidiert. Die Breite lässt sich sehr zuverlässig aufbauen; die Höhe ist schwieriger und braucht länger, und wir sagen Ihnen offen, was realistisch ist.' },
          { title: 'Sinuslift.', text: 'Im hinteren Oberkiefer liegt der Kieferhöhlenboden tief und sinkt nach Zahnverlust weiter ab. Die Kieferhöhlenschleimhaut wird angehoben und Material darunter eingebracht. Wir behandeln ihn als eigenen Eingriff mit eigener Planung.' },
          { title: 'Gesteuerte Regeneration bei der Implantation.', text: 'Ist der Defekt klein, erfolgt der Aufbau im selben Eingriff wie das Implantat. Freie Gewindegänge werden mit Granulat und Membran abgedeckt, und alles heilt gemeinsam. Keine eigene Wartezeit, funktioniert aber nur, wenn das Implantat im vorhandenen Knochen Primärstabilität erreicht.' },
        ],
      },
      {
        title: 'Wie wir entscheiden, was Sie brauchen',
        intro: [
          'Die Messung von Breite und Höhe genau an der Implantatstelle bestimmt, welche der Techniken zur Anwendung kommt, und sie erfolgt, bevor Sie sich zu irgendetwas verpflichten.',
          'Sie bestimmt auch die Phasen. Ein kleiner Aufbau mit dem Implantat fügt keine Phase hinzu. Ein umfangreicher Aufbau muss zuerst heilen, und das Implantat folgt bei der zweiten Reise, 6 bis 8 Monate später. Wir sagen Ihnen von Anfang an, was für Ihren Fall gilt, weil es die Reihenfolge der ganzen Behandlung ändert.',
        ],
      },
      {
        title: 'Wie der Eingriff wirklich abläuft',
        intro: [
          'Örtliche Betäubung, ein Termin, meist 45 bis 60 Minuten für einen Bereich. Das Zahnfleisch wird geöffnet, das Material eingebracht und geformt, die Membran positioniert, vernäht. Sie gehen am selben Tag. Schwellung und Beschwerden für zwei bis drei Tage sind normal und klingen mit üblichen Schmerzmitteln ab. Keine Vollnarkose, kein Klinikaufenthalt.',
          'Wenn die Implantate folgen, sind es MegaGen-Implantate, und sie werden erst gesetzt, nachdem eine zweite Kontrolle bestätigt, dass der aufgebaute Bereich bereit ist.',
        ],
      },
      {
        title: 'Welches Aufbaumaterial passt zu Ihnen?',
        intro: ['Beide sind bewährte Lösungen; die Wahl hängt von der Größe des Defekts und Ihrer Präferenz zur Herkunft des Materials ab:'],
        cards: [
          { title: 'Künstlicher Knochen (synthetisch)', text: 'Mineralisches Granulat aus dem Labor, das nur als Gerüst für Ihren eigenen Knochen dient. Ohne tierische Herkunft oder Spender, was manchen Patienten aus religiösen oder persönlichen Gründen wichtig ist.' },
          { title: 'Humaner Knochen (Allograft)', text: 'Spenderknochen, aufbereitet und sterilisiert nach Gewebebank-Standards. Eine Struktur, die Ihrem eigenen Knochen sehr ähnlich ist, gut einheilt und das Volumen hält.' },
        ],
        outro: ['Welches Material wir verwenden, steht in Ihrem Angebot. Sie haben ein Recht zu wissen, was in Ihren Kiefer kommt.'],
      },
    ],
    stats: [
      { value: '1 Tag', label: 'Eingriff' },
      { value: 'Lokal', label: 'Betäubung' },
      { value: '45–60 Min.', label: 'Pro Bereich' },
      { value: '6–8 Monate', label: 'Heilung' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Zwei Reisen, 6–8 Monate Abstand',
    whatTitle: 'Was ist ein Knochenaufbau?',
    what: [
      'Beim Knochenaufbau wird Knochenmaterial in einen Kieferbereich eingebracht, in dem sich der Knochen zurückgebildet hat, damit Ihr Körper es als Gerüst nutzt und durch lebenden Knochen ersetzt.',
      'Das Material wird mit einer resorbierbaren Membran abgedeckt, die Weichgewebe fernhält, und innerhalb von 6 bis 8 Monaten wird der Bereich zu Knochen, der fest genug ist, ein Implantat zu tragen.',
    ],
    calloutTitle: 'Die allgemeine Gesundheit zählt so viel wie der Kiefer',
    calloutText:
      'Rauchen, unkontrollierter Diabetes, aktive Zahnfleischentzündung und manche Knochenmedikamente beeinflussen, wie das Material einheilt. Meist sind sie beherrschbar und schließen die Behandlung nicht aus, müssen aber vor dem Eingriff bekannt sein, nicht während der Heilung entdeckt werden.',
    compareTitle: 'Aufbauen oder vermeiden?',
    compareIntro: 'Es hängt davon ab, wo Knochen fehlt und wie viel:',
    compare: [
      { id: 'bone-graft', tag: 'Diese Behandlung', title: 'Knochenaufbau', text: 'Baut Breite oder Höhe dort auf, wo das Implantat hinkommt. Ein Termin, dann 6 bis 8 Monate Heilung.' },
      { id: 'sinus-lift', tag: 'Hinterer Oberkiefer', title: 'Sinuslift', text: 'Die Form des Aufbaus für den hinteren Oberkiefer, wo die Kieferhöhle tief liegt und dem Implantat Höhe fehlt.' },
      { id: 'implant-zygomatic', tag: 'Ohne Aufbau', title: 'Zygoma-Implantate', text: 'Bei starkem Knochenschwund im Oberkiefer werden Implantate im Jochbein verankert und ein Aufbau ganz vermieden.' },
    ],
    fitTitle: 'Wer braucht einen Knochenaufbau?',
    fitIntro: 'Die Bildgebung gibt die endgültige Antwort, aber ein Knochenaufbau kommt meist infrage, wenn:',
    fit: [
      'Ein Zahn seit einem Jahr oder länger fehlt und der Kieferkamm sichtbar schmaler ist',
      'Eine andere Klinik sagte, es gebe nicht genug Knochen für ein Implantat',
      'Sie Implantate im hinteren Oberkiefer brauchen, wo die Kieferhöhle tief liegt',
      'Ein Zahn gezogen wird und Sie die Alveole für ein späteres Implantat erhalten möchten',
      'Eine herausnehmbare Prothese den Knochenabbau darunter beschleunigt hat',
      'Parodontitis den Knochen um später verlorene Zähne zerstört hat',
    ],
    fitNote:
      'Nicht jeder Fall braucht ihn. Bei leichtem Defekt kann ein kürzeres Implantat oder eine schräge Insertion ihn ganz vermeiden, und das sagen wir Ihnen lieber, als einen Eingriff hinzuzufügen. Die Bildgebung entscheidet, und Sie sehen sie auch.',
    stepsTitle: 'So funktioniert die Behandlung',
    stepsIntro: 'Der Aufbau selbst ist ein einziger Termin. Die Zeit geht in die Heilung danach, und diese Phase braucht keinen Eingriff:',
    steps: [
      { title: 'Röntgen und Untersuchung', text: 'Wir planen den Fall anhand Ihres Panoramaröntgens; in der Klinik wird der Knochen an der Implantatstelle beurteilt. Wir entscheiden, ob Sie einen Aufbau brauchen, welche Technik und ob er mit dem Implantat kombiniert wird.' },
      { title: 'Einbringen des Materials', text: 'Ein Termin unter örtlicher Betäubung. Der Bereich wird geöffnet, Material in den Defekt verdichtet, mit resorbierbarer Membran abgedeckt und das Zahnfleisch vernäht. Sie gehen am selben Tag.' },
      { title: 'Frühe Heilung', text: 'Schwellung und Beschwerden für einige Tage, gelindert mit üblichen Schmerzmitteln. Eine Woche weiche Kost, kein Druck auf den Bereich, nicht rauchen. Fäden lösen sich auf oder werden innerhalb von zehn Tagen entfernt.' },
      { title: 'Einheilung', text: '6 bis 8 Monate, in denen Ihr Knochen das Material ersetzt. Sie sind zu Hause; es gibt nichts zu tun und nichts zu sehen.' },
      { title: 'Kontrolle und Implantat', text: 'Bei der zweiten Reise bestätigt eine Kontrolle, dass der aufgebaute Knochen Volumen und Dichte für ein Implantat hat. Erst dann wird das MegaGen-Implantat gesetzt.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für einen Knochenaufbau?',
    whyBandText:
      'Wir empfehlen einen Aufbau nur, wenn die Bildgebung zeigt, dass er nötig ist, und wir zeigen Ihnen die Bilder. Das Material, das in Ihren Kiefer kommt, steht im Angebot, ebenso das Implantatsystem danach, und lässt sich Ihr Fall ohne Aufbau lösen, sagen wir es Ihnen.',
    caseText: 'Knochen vor Implantaten wiederaufgebaut',
    faq: [
      { question: 'Was kostet ein Knochenaufbau?', answer: 'Ein Knochenaufbau kostet 500 €. Werden mehrere Bereiche oder ein Sinuslift im hinteren Oberkiefer nötig, wird das im Angebot separat aufgeführt. Das genaue Angebot erhalten Sie schriftlich nach Auswertung Ihres Panoramaröntgens.' },
      { question: 'Tut ein Knochenaufbau weh?', answer: 'Nein. Der Eingriff erfolgt unter örtlicher Betäubung, und Sie spüren Druck, keinen Schmerz. Danach gibt es zwei bis drei Tage Schwellung und Beschwerden, vergleichbar mit einer Extraktion, und übliche Schmerzmittel reichen. Die meisten Patienten sind überrascht, wie leicht es ist im Vergleich dazu, wie chirurgisch es klingt. Vor dem Gehen erhalten Sie schriftliche Hinweise: weiche Kost, nicht rauchen, am ersten Tag nichts Heißes und den Bereich nicht berühren.' },
      { question: 'Wie lange muss ich vor den Implantaten warten?', answer: '6 bis 8 Monate, weshalb die Behandlung in zwei Reisen erfolgt. Die Wartezeit ist nicht willkürlich: Das Material muss durch Ihren lebenden Knochen ersetzt sein, bevor es ein Implantat tragen kann, und dieser Prozess lässt sich nicht beschleunigen. Ein Implantat in nicht konsolidiertes Material zu setzen ist genau der Weg, wie Implantate zwei Jahre später versagen. Vor dem Implantat wird die Bereitschaft mit einer zweiten Kontrolle bestätigt, nicht durch Monatezählen.' },
      { question: 'Brauche ich für jedes Implantat einen Aufbau?', answer: 'Nein, und die meisten Implantatfälle brauchen gar keinen. Ein Aufbau wird nötig, wenn ein Zahn so lange fehlt, dass der Kamm geschwunden ist, wenn Parodontitis den umliegenden Knochen zerstört hat oder wenn die Kieferhöhle für die benötigte Implantatlänge zu tief liegt. Ein kürzlich gezogener Zahn in einem sonst gesunden Kiefer hat meist genug Knochen. Es ist völlig normal, an einer Stelle einen Aufbau zu brauchen und an der benachbarten nicht.' },
      { question: 'Können Aufbau und Implantat gleichzeitig erfolgen?', answer: 'Manchmal, und wenn möglich tun wir es, weil es Ihnen eine Heilungsphase spart. Es funktioniert, wenn das Implantat im vorhandenen Knochen Primärstabilität erreicht und das Material nur einen kleinen freiliegenden Bereich abdeckt. Ist der Defekt größer, muss das Material zuerst heilen: Das Implantat braucht ab dem ersten Tag festen Halt, und loses Granulat bietet das nicht. Wir sagen es Ihnen von Anfang an, weil es die Reihenfolge der Phasen ändert.' },
      { question: 'Woher stammt das Aufbaumaterial?', answer: 'Wir verwenden künstlichen oder humanen Knochen. Künstlicher Knochen ist mineralisches Laborgranulat ohne tierische Herkunft oder Spender, was manchen Patienten aus religiösen oder persönlichen Gründen wichtig ist. Humaner Knochen ist aufbereiteter und sterilisierter Spenderknochen mit einer Struktur sehr nah an Ihrem eigenen. Die Wahl hängt von der Defektgröße und Ihrer Präferenz ab, und was auch immer es ist, es steht im Angebot.' },
      { question: 'Was, wenn ich den Aufbau auslasse und direkt implantiere?', answer: 'Dann kommt das Implantat in Knochen, der es nicht vollständig halten kann, und das übliche Ergebnis ist ein später, kein sofortiger Misserfolg. Wo der Knochen zu schmal ist, liegen Gewindegänge am Zahnfleisch frei; wo er zu niedrig ist, erreicht das Implantat keine stabile Tiefe. Ein bis zwei Jahre kann es gut aussehen, dann sammelt die freie Oberfläche Bakterien, der Knochen schwindet weiter und das Implantat lockert sich, meist wenn die Krone sitzt und bezahlt ist. Wir fügen lieber jetzt einen Eingriff hinzu, als später den ganzen Fall neu zu machen.' },
      { question: 'Kann ein Knochenaufbau misslingen?', answer: 'Ja, wenn auch selten, und meist gibt es eine Lösung. Misserfolg heißt, das Material heilt nicht ein: Es resorbiert schneller, als Ihr Knochen es ersetzt, oder eine Infektion unterbricht die Heilung. Hauptfaktoren sind Rauchen, unkontrollierter Diabetes, schlechte Hygiene während der Heilung und zu frühe Belastung. Passiert es, zeigt es sich bei der Kontrolle vor dem Implantat, deshalb kontrollieren wir ein zweites Mal statt zu raten. Ein misslungener Aufbau wird wiederholt; ein misslungenes Implantat darin ist ein viel größeres Problem.' },
      { question: 'Wie viele Phasen hat die ganze Behandlung?', answer: 'Meist zwei Reisen, manchmal nur eine chirurgische Phase. Erfolgt der Aufbau mit dem Implantat, fügt er keine Phase hinzu: gleicher Termin, gleiche Heilung, und bei der zweiten Reise wird die Krone eingesetzt. Muss er zuerst heilen, ist die erste Reise für den Aufbau und die zweite, 6 bis 8 Monate später, für das Implantat. Die Heilungsmonate verbringen Sie ohne Eingriff zu Hause.' },
      { question: 'Bin ich zu alt für einen Knochenaufbau?', answer: 'Das Alter allein ist kein Hindernis. Entscheidend sind Heilungsfähigkeit und allgemeine Gesundheit. Der Knochenumbau verlangsamt sich mit dem Alter, die Einheilung kann etwas länger dauern, aber die Biologie funktioniert gleich. Was das Bild wirklich verändert, sind Medikamente: Bisphosphonate und ähnliche Osteoporosemittel verändern die Knochenreaktion und müssen vor der Planung angegeben werden. Bringen Sie Ihre vollständige Medikamentenliste mit; sie zählt mehr als Ihr Geburtsdatum.' },
      { question: 'Ist Rauchen wirklich so wichtig?', answer: 'Ja. Es ist das Wichtigste, was von Ihnen abhängt. Das Aufbaumaterial ist auf Blutgefäße angewiesen, die aus dem umliegenden Knochen einwachsen, und Nikotin verengt genau diese Gefäße. Raucher haben höhere Misserfolgsraten bei Aufbauten und Implantaten, einer der beständigsten Befunde der Implantologie. Wir behandeln Sie trotzdem, aber zwei Wochen vor dem Eingriff und im ersten Monat danach aufzuhören verändert Ihre Chancen spürbar.' },
      { question: 'Was sollte ich in den ersten Tagen danach tun?', answer: 'Weiche Kost, nicht rauchen, kein Druck auf den Bereich und nicht berühren. Am ersten Tag heiße Speisen und Getränke meiden. Die Schwellung erreicht etwa am zweiten Tag ihren Höhepunkt und geht dann zurück; Kühlen von außen hilft in den ersten 24 Stunden. Übliche Schmerzmittel reichen. Wirkt etwas nicht normal, etwa Blutung, die nicht aufhört, Schmerzen, die nach dem dritten Tag zunehmen, oder Fieber, kontaktieren Sie uns sofort.' },
    ],
  },
  it: {
    name: 'Innesto osseo',
    eyebrow: 'Impianti · Albania',
    subtitle: 'Ricostruire l’osso mascellare perché l’impianto abbia una base solida.',
    lead: 'Ricostruire l’osso mascellare perso perché un impianto abbia qualcosa di solido in cui ancorarsi: spesso il primo passo verso un sorriso più forte.',
    kicker: 'Innesto osseo a Tirana, Albania',
    articleTitle: 'Innesto osseo a Tirana: ricostruire l’osso prima degli impianti',
    intro: [
      'L’innesto osseo ricostruisce l’osso mascellare dove si è ritirato, perché l’impianto abbia una base solida in cui ancorarsi.',
      'L’osso non è uno scheletro permanente. Esiste per sostenere carico, e quando si perde un dente la radice smette di trasmettere la forza del morso all’osso. Il corpo legge quella zona come inutilizzata e la riassorbe. La maggior parte della perdita avviene entro il primo anno dall’estrazione, e continua in silenzio negli anni successivi.',
      'Alla Veneer Clinic, l’innesto osseo costa 500 €, si esegue in anestesia locale in 45–60 minuti e usa osso artificiale o umano sotto una membrana riassorbibile.',
    ],
    sections: [
      {
        title: 'Perché l’innesto viene prima dell’impianto',
        intro: [
          'L’impianto ha bisogno di osso su tutti i lati. Se la larghezza non basta, le spire restano scoperte; se l’altezza non basta, l’impianto non raggiunge una profondità stabile. Un impianto inserito in osso insufficiente non fallisce il primo giorno. Fallisce lentamente, due o tre anni dopo, quando la corona è già applicata e pagata: il momento peggiore per scoprirlo.',
          'L’innesto restituisce il volume mancante. I granuli vengono compattati nella zona carente e coperti da una membrana riassorbibile che impedisce al tessuto molle di crescere all’interno; nei mesi successivi le tue cellule ossee migrano attraverso il materiale. Il materiale non resta come un blocco estraneo nell’osso. È un’impalcatura che il tuo corpo sostituisce con osso vivo.',
        ],
      },
      {
        title: 'Quanto osso manca è una misura, non un’opinione',
        intro: [
          'La perdita ossea non si vede dall’esterno. Un’arcata che allo specchio sembra del tutto normale può essere tre o quattro millimetri troppo stretta per un impianto.',
          'La panoramica che ci invii da casa ci dà il primo quadro e l’altezza approssimativa. Ma la panoramica schiaccia un osso curvo su un unico piano e dice poco sulla larghezza, per questo in clinica, prima di qualsiasi intervento, l’osso viene valutato esattamente dove andrà l’impianto. È la differenza tra pianificare un caso e tirare a indovinare.',
        ],
      },
      {
        title: 'L’innesto è una fase, non un ostacolo',
        intro: [
          '“Le serve un innesto osseo” viene preso come una cattiva notizia. È il contrario: significa che il tuo caso viene pianificato su ciò che mostrano davvero le immagini, non sulla speranza.',
          'Le cliniche che non parlano mai di innesto non trovano più osso di noi. Semplicemente inseriscono impianti in meno osso.',
        ],
      },
      {
        title: 'Quattro situazioni che coprono quasi ogni caso',
        intro: ['L’innesto osseo non è un intervento unico. La tecnica si sceglie in base a ciò che mostrano le immagini:'],
        inline: [
          { title: 'Preservazione dell’alveolo.', text: 'Si esegue nello stesso appuntamento dell’estrazione. Il materiale va subito nell’alveolo vuoto, prima che abbia tempo di collassare. È la forma più semplice di innesto e previene il problema invece di correggerlo. Se sai che un dente verrà estratto e vorrai un impianto più avanti, chiedilo in quel momento.' },
          { title: 'Aumento della cresta.', text: 'Per un’arcata già ristretta o appiattita, di solito anni dopo la perdita del dente. Il materiale si applica contro la cresta carente e si tiene sotto una membrana finché si consolida. La larghezza si ricostruisce in modo molto affidabile; l’altezza è più difficile e richiede più tempo, e ti diciamo apertamente cosa è realistico.' },
          { title: 'Rialzo del seno.', text: 'Nella zona posteriore superiore il pavimento del seno è basso, e dopo la perdita dei denti scende ancora. La membrana del seno viene sollevata e il materiale posto sotto di essa. Lo trattiamo come intervento a sé, con la sua pianificazione.' },
          { title: 'Rigenerazione guidata durante l’impianto.', text: 'Quando il difetto è piccolo, l’innesto si esegue nello stesso intervento dell’impianto. Le spire scoperte vengono coperte con granuli e membrana, e tutto guarisce insieme. Nessuna attesa separata, ma funziona solo se l’impianto raggiunge stabilità primaria nell’osso esistente.' },
        ],
      },
      {
        title: 'Come decidiamo quale ti serve',
        intro: [
          'La misura di larghezza e altezza esattamente dove andrà l’impianto determina quale delle tecniche si applica, e si fa prima che tu ti impegni a qualsiasi cosa.',
          'Determina anche le fasi. Un piccolo innesto fatto con l’impianto non aggiunge fasi. Un innesto consistente deve guarire prima, e l’impianto arriva nel secondo viaggio, 6-8 mesi dopo. Ti diciamo quale vale per il tuo caso fin dall’inizio, perché cambia l’ordine di tutto il trattamento.',
        ],
      },
      {
        title: 'Com’è davvero l’intervento',
        intro: [
          'Anestesia locale, un appuntamento, di solito 45-60 minuti per una zona. Si apre la gengiva, si posiziona e modella il materiale, si applica la membrana, si sutura. Esci lo stesso giorno. Gonfiore e fastidio per due o tre giorni sono normali e passano con comuni antidolorifici. Niente anestesia generale né ricovero.',
          'Quando arrivano gli impianti, sono MegaGen, e vengono inseriti solo dopo che un secondo controllo conferma che la zona innestata è pronta.',
        ],
      },
      {
        title: 'Quale materiale d’innesto fa per te?',
        intro: ['Entrambi sono soluzioni consolidate; la scelta dipende dalle dimensioni del difetto e dalla tua preferenza sull’origine del materiale:'],
        cards: [
          { title: 'Osso artificiale (sintetico)', text: 'Granuli minerali di laboratorio che servono solo da impalcatura per la crescita del tuo osso. Nessuna origine animale o da donatore, cosa che per alcuni pazienti conta per motivi religiosi o personali.' },
          { title: 'Osso umano (allograft)', text: 'Osso da donatore trattato e sterilizzato secondo gli standard delle banche dei tessuti. Una struttura molto simile al tuo osso, che si integra bene e mantiene il volume.' },
        ],
        outro: ['Qualunque materiale usiamo, è scritto nel tuo preventivo. Hai il diritto di sapere cosa entra nel tuo osso.'],
      },
    ],
    stats: [
      { value: '1 giorno', label: 'Intervento' },
      { value: 'Locale', label: 'Anestesia' },
      { value: '45–60 min', label: 'Per zona' },
      { value: '6–8 mesi', label: 'Guarigione' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Due viaggi, a 6–8 mesi di distanza',
    whatTitle: 'Cos’è l’innesto osseo?',
    what: [
      'L’innesto osseo consiste nel posizionare materiale osseo in una zona dell’arcata dove l’osso si è ritirato, perché il tuo corpo lo usi come impalcatura e lo sostituisca con osso vivo.',
      'Il materiale viene coperto da una membrana riassorbibile che tiene fuori il tessuto molle, e nell’arco di 6-8 mesi la zona diventa osso abbastanza solido da sostenere un impianto.',
    ],
    calloutTitle: 'La salute generale conta quanto l’osso',
    calloutText:
      'Fumo, diabete non controllato, infezione gengivale attiva e alcuni farmaci per le ossa influiscono su come si integra il materiale. Nella maggior parte dei casi si gestiscono invece di escludere il trattamento, ma vanno conosciuti prima dell’intervento, non scoperti durante la guarigione.',
    compareTitle: 'Ricostruire o evitarlo?',
    compareIntro: 'Dipende da dove manca l’osso e quanto:',
    compare: [
      { id: 'bone-graft', tag: 'Questo trattamento', title: 'Innesto osseo', text: 'Ricostruisce larghezza o altezza dove andrà l’impianto. Un appuntamento, poi 6-8 mesi di guarigione.' },
      { id: 'sinus-lift', tag: 'Arcata superiore posteriore', title: 'Rialzo del seno', text: 'La forma di innesto per la zona posteriore superiore, dove il seno è basso e all’impianto manca altezza.' },
      { id: 'implant-zygomatic', tag: 'Senza innesto', title: 'Impianti zigomatici', text: 'Quando la perdita ossea superiore è grave, gli impianti si ancorano nell’osso zigomatico e l’innesto si evita del tutto.' },
    ],
    fitTitle: 'A chi serve un innesto osseo?',
    fitIntro: 'Le immagini danno la risposta definitiva, ma l’innesto osseo di solito entra in gioco se:',
    fit: [
      'Un dente manca da un anno o più e la cresta si è visibilmente ristretta',
      'Un’altra clinica ti ha detto che non c’era abbastanza osso per un impianto',
      'Ti servono impianti nella zona posteriore superiore, dove il seno è basso',
      'Un dente verrà estratto e vuoi preservare l’alveolo per un impianto futuro',
      'Una protesi mobile ha accelerato la perdita ossea sotto di essa',
      'La parodontite ha distrutto l’osso attorno ai denti che hai poi perso',
    ],
    fitNote:
      'Non tutti i casi lo richiedono. Quando il difetto è lieve, un impianto più corto o un inserimento inclinato possono evitarlo del tutto, e preferiamo dirtelo piuttosto che aggiungere un intervento. Decidono le immagini, e le immagini le vedi anche tu.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'L’innesto in sé è un unico appuntamento. Il tempo va nella guarigione successiva, e quella fase non richiede interventi:',
    steps: [
      { title: 'Radiografia e valutazione', text: 'Pianifichiamo il caso dalla tua panoramica; in clinica l’osso viene valutato nel sito dell’impianto. Decidiamo se serve l’innesto, quale tecnica e se si combina con l’impianto.' },
      { title: 'Posizionamento del materiale', text: 'Un appuntamento in anestesia locale. Si apre la zona, il materiale viene compattato nel difetto, coperto con membrana riassorbibile e la gengiva suturata. Esci lo stesso giorno.' },
      { title: 'Guarigione iniziale', text: 'Gonfiore e fastidio per qualche giorno, che passano con comuni antidolorifici. Cibi morbidi per una settimana, nessuna pressione sulla zona, niente fumo. I punti si riassorbono o si rimuovono entro dieci giorni.' },
      { title: 'Integrazione', text: '6-8 mesi mentre il tuo osso sostituisce il materiale. Sei a casa; non c’è niente da fare e niente da vedere.' },
      { title: 'Controllo e impianto', text: 'Nel secondo viaggio un controllo conferma che l’osso innestato ha volume e densità per sostenere un impianto. Solo allora si inserisce l’impianto MegaGen.' },
    ],
    whyBandTitle: 'Perché Veneer Clinic per l’innesto osseo?',
    whyBandText:
      'Consigliamo l’innesto solo quando le immagini mostrano che serve, e le immagini te le mostriamo. Il materiale che entra nel tuo osso è scritto nel preventivo, così come il sistema implantare che segue, e se il tuo caso si risolve senza innesto, te lo diciamo.',
    caseText: 'Osso ricostruito prima degli impianti',
    faq: [
      { question: 'Quanto costa l’innesto osseo?', answer: 'L’innesto osseo costa 500 €. Se servono più zone, o un rialzo del seno nella zona posteriore superiore, viene indicato separatamente nel preventivo. Il preventivo esatto ti viene inviato per iscritto dopo aver valutato la tua panoramica.' },
      { question: 'L’innesto osseo fa male?', answer: 'No. L’intervento si esegue in anestesia locale e ciò che senti è pressione, non dolore. Dopo ci sono gonfiore e fastidio per due o tre giorni, paragonabili a un’estrazione, e bastano comuni antidolorifici. La maggior parte dei pazienti si sorprende di quanto sia semplice rispetto a quanto suoni chirurgico. Prima di uscire ricevi istruzioni scritte: cibi morbidi, niente fumo, niente di caldo il primo giorno e non toccare la zona.' },
      { question: 'Quanto devo aspettare prima degli impianti?', answer: '6-8 mesi, per questo il trattamento si svolge in due viaggi. L’attesa non è arbitraria: il materiale deve essere sostituito dal tuo osso vivo prima di poter sostenere un impianto, e quel processo non si accelera. Inserire un impianto in materiale non consolidato è esattamente il modo in cui gli impianti falliscono due anni dopo. Prima dell’impianto la prontezza viene confermata con un secondo controllo, non contando i mesi sul calendario.' },
      { question: 'Mi serve un innesto per ogni impianto?', answer: 'No, e la maggior parte dei casi implantari non richiede alcun innesto. L’innesto diventa necessario quando il dente manca da abbastanza tempo da far ritirare la cresta, quando la malattia gengivale ha distrutto l’osso attorno, o quando il seno superiore è troppo basso per la lunghezza d’impianto necessaria. Un dente estratto di recente in un’arcata altrimenti sana di solito ha osso sufficiente. È del tutto normale che serva un innesto in una posizione e niente in quella accanto.' },
      { question: 'Innesto e impianto si possono fare insieme?', answer: 'A volte sì, e quando è possibile lo facciamo, perché ti risparmia un periodo di guarigione. Funziona quando l’impianto raggiunge stabilità primaria nell’osso che hai già e il materiale copre solo una piccola zona scoperta. Quando il difetto è maggiore, il materiale deve guarire prima: l’impianto ha bisogno di qualcosa di solido a cui aggrapparsi dal primo giorno, e i granuli sciolti non lo sono. Te lo diciamo fin dall’inizio, perché cambia l’ordine delle fasi.' },
      { question: 'Da dove viene il materiale d’innesto?', answer: 'Usiamo osso artificiale o umano. L’osso artificiale è costituito da granuli minerali di laboratorio, senza origine animale o da donatore, cosa che per alcuni pazienti conta per motivi religiosi o personali. L’osso umano è osso da donatore trattato e sterilizzato, con una struttura molto vicina al tuo. La scelta dipende dalle dimensioni del difetto e dalla tua preferenza, e qualunque sia, è scritta nel preventivo.' },
      { question: 'E se salto l’innesto e vado direttamente all’impianto?', answer: 'Allora l’impianto va in osso che non può sostenerlo del tutto, e il risultato abituale è un fallimento tardivo, non immediato. Dove l’osso è troppo stretto, le spire restano scoperte contro la gengiva; dove è troppo basso, l’impianto non raggiunge una profondità stabile. Può sembrare a posto per un anno o due, poi la superficie scoperta raccoglie batteri, l’osso si ritira ancora e l’impianto si allenta, di solito quando la corona è già applicata e pagata. Preferiamo aggiungere un intervento ora che rifare tutto il caso dopo.' },
      { question: 'L’innesto osseo può fallire?', answer: 'Sì, anche se è raro, e di solito c’è una soluzione. Fallimento significa che il materiale non si integra: si riassorbe più in fretta di quanto il tuo osso lo sostituisca, oppure un’infezione interrompe la guarigione. I fattori principali sono fumo, diabete non controllato, scarsa igiene durante la guarigione e carico precoce della zona. Quando succede, emerge al controllo prima dell’impianto, per questo controlliamo una seconda volta invece di indovinare. Un innesto fallito si rifà; un impianto fallito al suo interno è un problema molto più grande.' },
      { question: 'Quante fasi ha l’intero trattamento?', answer: 'Di solito due viaggi, a volte una sola fase chirurgica. Se l’innesto si fa con l’impianto, non aggiunge fasi: stesso appuntamento, stessa guarigione, e nel secondo viaggio si applica la corona. Se deve guarire prima, il primo viaggio è per l’innesto e il secondo, 6-8 mesi dopo, per l’impianto. I mesi di guarigione li passi a casa senza interventi.' },
      { question: 'Sono troppo anziano per un innesto osseo?', answer: 'L’età in sé non è un ostacolo. Contano la capacità di guarigione e la salute generale. Il rimodellamento osseo rallenta con l’età, quindi l’integrazione può richiedere un po’ di più, ma la biologia funziona allo stesso modo. Ciò che cambia davvero il quadro sono i farmaci: bifosfonati e farmaci simili per l’osteoporosi modificano la risposta dell’osso e vanno dichiarati prima della pianificazione. Porta l’elenco completo dei farmaci; conta più della tua data di nascita.' },
      { question: 'Il fumo conta davvero così tanto?', answer: 'Sì. È la cosa più importante che dipende da te. Il materiale innestato dipende dai vasi sanguigni che crescono al suo interno dall’osso circostante, e la nicotina restringe proprio quei vasi. I fumatori hanno tassi di fallimento più alti per innesti e impianti, uno dei risultati più costanti in implantologia. Ti trattiamo comunque, ma smettere due settimane prima dell’intervento e per il primo mese dopo cambia le tue probabilità in modo reale.' },
      { question: 'Cosa devo fare nei primi giorni dopo l’intervento?', answer: 'Cibi morbidi, niente fumo, nessuna pressione sulla zona e non toccarla. Il primo giorno evita cibi e bevande calde. Il gonfiore raggiunge il picco verso il secondo giorno e poi cala; il ghiaccio dall’esterno aiuta nelle prime 24 ore. Bastano comuni antidolorifici. Se qualcosa non sembra normale, come un sanguinamento che non si ferma, dolore che aumenta dopo il terzo giorno o febbre, contattaci subito.' },
    ],
  },
};

export default function BoneGraftPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="bone-graft"
      heroImage={images.surgery[13] ?? images.heroAfter}
      whatImage={images.surgery[14] ?? images.heroAfter}
    />
  );
}
