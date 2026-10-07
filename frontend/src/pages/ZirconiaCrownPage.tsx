import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Kurora zirkoni',
    eyebrow: 'Kurora dhe proteza · Shqipëri',
    subtitle: 'Kurora zirkoni të punuara me porosi, me qëndrueshmëri të jashtëzakonshme. Ideale për dhëmbë të dobësuar, shumë të dëmtuar dhe mbi implante.',
    lead: 'Një kurorë pa metal, aq e fortë sa edhe natyrale, pa vijën e errët te mishi që e tradhton.',
    kicker: 'Kurora zirkoni në Tiranë, Shqipëri',
    articleTitle: 'Kurora zirkoni në Tiranë: forcë pa metal',
    intro: [
      'Një kurorë bën dy punë njëkohësisht. Duhet të mbrojë një dhëmb që nuk mund ta mbrojë më veten, dhe duhet të duket sikur ka qenë gjithmonë aty. Për pjesën më të madhe të historisë së stomatologjisë, këto dy qëllime binin ndesh: kurorat më të forta kishin bërthamë metalike, dhe metali priret të bjerë në sy, me një dhëmb pak të turbullt ose një vijë të errët te mishi që shfaqet pas disa vitesh.',
      'Zirkoni e zgjidh këtë kontradiktë. Është një qeramikë mjaft e fortë për dhëmballët, pa metal në asnjë pjesë të restaurimit, ndaj drita kalon përmes saj në një mënyrë që e bën të duket si dhëmb dhe jo si riparim.',
      'Në Veneer Clinic, një kurorë zirkoni Made in Germany kushton 200 € për dhëmb dhe trajtimi përfundon brenda një qëndrimi prej 3 ditësh.',
    ],
    sections: [
      {
        title: 'Çfarë është kurora e zirkonit?',
        intro: [
          'Kurora është një kapak që mbulon gjithë pjesën e dukshme të dhëmbit, duke i rikthyer formën, forcën dhe funksionin. Kurorat e zirkonit punohen nga dioksidi i zirkonit, një qeramikë e krijuar fillimisht për përdorime inxhinierike shumë kërkuese dhe sot një nga materialet më të besueshme në stomatologjinë restauruese.',
          'Ajo që e bën të dobishme në gojë është një kombinim i rrallë. Zirkoni i reziston jashtëzakonisht mirë thyerjes dhe konsumimit, ndaj përballon forcat e dhëmbëve të pasmë, ku kurorat mbajnë ngarkesën më të madhe. Është gjithashtu plotësisht pa metal, ndaj mbetet biokompatibël, nuk e përcjell të ftohtin dhe të nxehtin si metali dhe nuk krijon kurrë hijen gri te mishi që njihet te kurorat e vjetra metal-qeramikë.',
          'Zirkoni i sotëm është gjithashtu shumë më i tejdukshëm se brezat e parë të materialit. Aty ku kurorat e para prej zirkoni mund të dukeshin pak të sheshta, zirkoni me tejdukshmëri të lartë sot e përcjell dritën shumë më afër mënyrës si e përcjell smalti, prandaj funksionon po aq mirë te dhëmbët e përparmë sa edhe te dhëmballët.',
        ],
      },
      {
        title: 'Kur kurora e zirkonit është zgjedhja e duhur',
        intro: ['Kurora është zgjidhja kur një dhëmb ka nevojë për mbulim të plotë dhe jo për riparim të pjesshëm:'],
        inline: [
          { title: 'Pas trajtimit të kanalit.', text: 'Një dhëmb me kanal të trajtuar bëhet më i brishtë me kohë. Kurora e mban të bashkuar dhe ia zgjat ndjeshëm jetën.' },
          { title: 'Dhëmbë me mbushje të mëdha.', text: 'Kur ka më shumë mbushje se dhëmb, një mbushje tjetër vetëm shton tensionin. Kurora e shpërndan ngarkesën në gjithë dhëmbin.' },
          { title: 'Dhëmbë të plasaritur ose të thyer.', text: 'Kurora e mban dhëmbin të bashkuar dhe e ndalon përhapjen e plasaritjes.' },
          { title: 'Konsumim i rëndë.', text: 'Kërcëllimi ose gërryerja nga acidet mund t’i shkurtojnë dhëmbët deri aty sa lartësia dhe funksioni duhen rindërtuar.' },
          { title: 'Probleme estetike.', text: 'Dhëmbë të shëndoshë nga struktura, por me njolla të thella, formë të pazakontë ose një kurorë të vjetër që nuk përputhet më me dhëmbët fqinjë.' },
          { title: 'Mbi implante.', text: 'Si dhëmbi i dukshëm që plotëson rrënjën e zëvendësuar me implant MegaGen.' },
        ],
        outro: [
          'Jo çdo dhëmb që duket i dëmtuar ka nevojë për kurorë. Kur ka mbetur mjaft strukturë e shëndetshme, një mbushje ose një fasetë ruajnë më shumë nga dhëmbi juaj dhe janë zgjedhja më e mirë. Ju tregojmë në cilën kategori bën pjesë dhëmbi juaj gjatë vizitës: përgjigjja varet nga sa strukturë e shëndoshë ka mbetur, dhe këtë e vlerësojmë, nuk e supozojmë.',
        ],
      },
      {
        title: 'Zirkon, metal-qeramikë apo E-max?',
        intro: ['Tre materiale mbulojnë shumicën e rasteve, dhe secili ka situata ku është zgjedhja më e fortë.'],
        inline: [
          { title: 'Zirkoni', text: 'është më i gjithanshmi. Forca e tij e bën zgjedhjen bazë për dhëmballët dhe paradhëmballët, për ata që kërcëllijnë dhëmbët dhe për urat e gjata. Duke qenë pa metal, e mban edhe kufirin me mishin të pastër me kalimin e viteve. Për shumicën e pacientëve, në shumicën e rasteve, ky është materiali që rekomandojmë.' },
          { title: 'Metal-qeramika', text: 'është mundësia tradicionale dhe vazhdon të funksionojë mirë. Ka një strukturë metalike, që i jep forcë, por sjell edhe dy kompromiset e njohura: më pak tejdukshmëri dhe mundësinë që të shfaqet një kufi i errët te mishi kur ai tërhiqet me vite.' },
          { title: 'E-max (disilikat litiumi)', text: 'ka veti optike të shkëlqyera dhe shpesh është zgjedhja më e mirë për një dhëmb të vetëm të përparmë, ku përputhja me dhëmbin natyral fqinj është gjëja më e vështirë. Është më pak i përshtatshëm se zirkoni për pozicionet me ngarkesën më të madhe.' },
        ],
        outro: ['Në praktikë, një plan trajtimi shpesh përdor më shumë se një material: zirkon në pjesën e pasme të gojës dhe E-max përpara, ku tejdukshmëria ka më shumë rëndësi. Plani juaj tregon cili material vendoset në cilin dhëmb dhe pse.'],
      },
      {
        title: 'Si funksionon trajtimi në Veneer Clinic',
        inline: [
          { title: 'Ekzaminimi dhe planifikimi.', text: 'Në vizitën e parë bëhet një ekzaminim klinik i plotë, një skanim 3D kur nevojitet dhe vlerësimi i mishrave dhe kafshimit. Këtu konfirmojmë cilët dhëmbë kanë nevojë për kurorë dhe nëse diçka duhet bërë më parë, si trajtim kanali, mbushje ose pastrim. Planin e biem dakord me ju para se të nisim.' },
          { title: 'Përgatitja.', text: 'Dhëmbi përgatitet me anestezi lokale: hiqen kariesi dhe çdo restaurim i vjetër që po dështon, dhe dhëmbi formësohet për të pritur kurorën. Pastaj marrim matje të detajuara dhe, bashkë me ngjyrën e rënë dakord me ju, i dërgojmë në laborator. Meqë kurorat punohen dhe vendosen brenda pak ditësh, nuk ka pritje të gjatë ndërmjet përgatitjes dhe rezultatit përfundimtar.' },
          { title: 'Punimi.', text: 'Kurorat punohen mbi këto matje nga zirkon Made in Germany dhe përfundohen me teksturën sipërfaqësore dhe ndryshimet e nuancës që e bëjnë qeramikën të duket natyrale dhe jo uniforme.' },
          { title: 'Vendosja.', text: 'Kurorat provohen për të kontrolluar përshtatjen, ngjyrën dhe konturin para çimentimit përfundimtar. Kur jeni të kënaqur, fiksohen dhe kafshimi rregullohet që gjithçka të mbyllet rehat, një hap që ka më shumë rëndësi nga sa mendojnë pacientët, sepse një kurorë edhe pak e lartë ndryshon mënyrën si mbyllet gjithë goja.' },
        ],
        outro: ['Shumica e rasteve përfundojnë brenda një qëndrimi prej 3 ditësh.'],
      },
      {
        title: 'Trajtimi në faza',
        intro: [
          'Kur keni disa dhëmbë për kurora, ose kur disa prej tyre kanë nevojë fillimisht për trajtim kanali apo mbushje, trajtimi mund të ndahet në faza. Në fazën e parë trajtohen dhëmbët që kanë dhimbje ose infeksion, dhe në fazat pasuese vendosen kurorat, sipas radhës që biem dakord bashkë. Çdo fazë shfaqet veçmas në ofertë, që ta dini që në fillim çfarë përfshin secila.',
        ],
      },
      {
        title: 'Sa zgjasin kurorat e zirkonit?',
        intro: [
          'Zirkoni është ndër materialet më të qëndrueshme në stomatologji, dhe kurorat zakonisht zgjasin shumë vite. Meqë vetë materiali i reziston kaq mirë thyerjes, jetëgjatësia zakonisht varet nga shëndeti i dhëmbit dhe i mishit poshtë saj, më shumë se nga kurora.',
          'Ajo që e mbron këtë bazë është e thjeshtë: larja e përditshme dhe pastrimi ndërmjet dhëmbëve, sidomos përgjatë kufirit të kurorës me mishin, pastrimet profesionale të rregullta, një pllakë nate nëse kërcëllini dhëmbët dhe mos përdorimi i dhëmbëve si vegël.',
          'Zirkoni nuk njollohet, ndaj kurora e ruan ngjyrën. Vlen ta dini nëse vendosni kurora te dhëmbët e përparmë: dhëmbët natyralë vazhdojnë të ndryshojnë nuancë me vite, ndërsa kurora mbetet ashtu siç është punuar, ndaj nëse keni ndër mend zbardhjen, bëjeni para se të përzgjidhet ngjyra e kurorës.',
        ],
      },
    ],
    stats: [
      { value: '2', label: 'Takime' },
      { value: '3 ditë', label: 'Kohëzgjatja e trajtimit' },
      { value: '0', label: 'Metal në kurorë' },
      { value: 'Made in Germany', label: 'Zirkon' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Për dhëmb',
    whatTitle: 'Çfarë e bën zirkonin ndryshe?',
    what: [
      'Zirkoni është një qeramikë shumë e qëndrueshme, e formësuar me saktësi për t’iu përshtatur dhëmbit tuaj dhe e ngjyrosur për t’u përputhur me dhëmbët natyralë. Ndryshe nga kurorat metal-qeramikë, nuk ka fare strukturë metalike: kurora është qeramikë nga fillimi në fund, dhe kjo i jep një pamje më të tejdukshme e natyrale dhe e heq rrezikun e një vije të errët te skaji i mishit kur ai tërhiqet me kohë.',
      'Ky kombinim i forcës dhe biokompatibilitetit pa metal është arsyeja pse kurora e zirkonit është bërë zgjedhje cilësore kudo në gojë, përfshirë dhëmbët e përparmë më të dukshëm dhe dhëmbët e pasmë që mbajnë gjithë forcën e përtypjes. Në Veneer Clinic, çdo kurorë punohet nga zirkon Made in Germany sipas matjeve të dhëmbit tuaj.',
    ],
    calloutTitle: 'Pa metal, plotësisht biokompatibël',
    calloutText:
      'Zirkoni nuk përmban fare metal, gjë që disa pacientë e preferojnë për shkak të alergjive ose thjesht për një rezultat krejt natyral te mishi i dhëmbit.',
    compareTitle: 'Zirkoni krahasuar me alternativat',
    compareIntro: 'Zirkoni është pa metal që nga ndërtimi. Ja si krahasohet me dy alternativat kryesore:',
    compare: [
      { id: 'crown-zirconia', tag: 'Ky trajtim', title: 'Zirkon i plotë', text: 'Një qeramikë plotësisht pa metal, e punuar dhe e ngjyrosur për t’u përputhur me dhëmbët natyralë, e vlerësuar për forcën dhe tejdukshmërinë.' },
      { id: 'crown-porcelain', tag: 'Alternativë më e lirë', title: 'Metal-qeramikë', text: 'Një mundësi me strukturë metalike, për t’u marrë parasysh kur tejdukshmëria ka më pak rëndësi, sidomos te dhëmbët e pasmë.' },
      { id: 'crown-emax', tag: 'Për dhëmbët e përparmë', title: 'E-max', text: 'Qeramikë xhami me tejdukshmërinë më të lartë, shpesh zgjedhja më e mirë për një dhëmb të vetëm të përparmë.' },
    ],
    fitTitle: 'A është kurora e zirkonit e duhura për ju?',
    fitIntro: 'Zirkoni ia vlen të merret parasysh sa herë që pamja e kurorës ka po aq rëndësi sa forca e saj. Mund të jeni kandidat i mirë nëse keni:',
    fit: [
      'Dhëmbë të dëmtuar rëndë ose të dobësuar',
      'Mbushje të mëdha ose shumë punime të mëparshme dentare',
      'Dhëmbë të plasaritur ose shumë të konsumuar',
      'Dhëmbë që kanë kaluar trajtim kanali',
      'Ndryshime të mëdha në formën ose strukturën e dhëmbit',
      'Shqetësime estetike që nuk zgjidhen dot me faseta',
    ],
    fitNote:
      'Zirkoni është zgjedhje e shkëlqyer në çdo pozicion, por për dhëmballët me forcë kafshimi shumë të madhe konfirmojmë që trashësia e rekomanduar është e realizueshme për dhëmbin tuaj.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'Një kurorë zirkoni kërkon dy takime brenda një qëndrimi prej 3 ditësh. Ndërmjet tyre, kurora punohet në laborator mbi matjet e dhëmbit të përgatitur.',
    steps: [
      { title: 'Konsulta dhe vlerësimi', text: 'Dentisti ekzaminon dhëmbët, mishrat dhe kafshimin për të parë nëse kurorat e zirkonit janë zgjedhja e duhur. Kur ndihmon, bëhet skanim 3D, falas me trajtimin.' },
      { title: 'Planifikimi i trajtimit', text: 'Konfirmojmë cilët dhëmbë duan kurorë, cili material u përshtatet dhe biem dakord për formën dhe ngjyrën.' },
      { title: 'Përgatitja e dhëmbit', text: 'Dhëmbi përgatitet me anestezi lokale. Hiqen kariesi dhe restaurimet e vjetra që dështojnë, duke ruajtur sa më shumë strukturë të shëndetshme.' },
      { title: 'Matjet dhe laboratori', text: 'Matjet dërgohen në laborator bashkë me ngjyrën e zgjedhur. Kurorat punohen nga zirkon Made in Germany dhe përfundohen me teksturë e nuanca natyrale.' },
      { title: 'Vendosja e kurorës', text: 'Kontrollohen përshtatja, forma, ngjyra dhe konturi krahasuar me dhëmbët përreth. Kur jeni të kënaqur, kurora fiksohet përfundimisht.' },
      { title: 'Kontrolli i kafshimit', text: 'Kafshimi vlerësohet dhe rregullohet, dhe kurora lustrohet, që gjithçka të mbyllet rehat.' },
    ],
    whyBandTitle: 'Pse Veneer Clinic për një kurorë zirkoni?',
    whyBandText:
      'Zirkon Made in Germany, materiali i duhur në dhëmbin e duhur dhe trajtim konservativ: kur një dhëmb mund të shpëtohet me diçka më pak se një kurorë, jua themi. E dini sa kurora, prej cilit material dhe me çfarë çmimi para se të nisim, dhe oferta nuk ndryshon pasi jeni ulur në karrige.',
    caseText: 'Kurora zirkoni Made in Germany',
    faq: [
      { question: 'Sa kushton një kurorë zirkoni?', answer: 'Një kurorë zirkoni Made in Germany kushton 200 € për dhëmb. Skanimi 3D, kur nevojitet, është falas me trajtimin. Nëse ndonjë dhëmb ka nevojë fillimisht për trajtim kanali ose mbushje, kjo shfaqet veçmas në ofertën me shkrim para se të nisim.' },
      { question: 'Pse rregullohet kafshimi pas vendosjes së kurorës?', answer: 'Kafshimi vlerësohet dhe rregullohet, dhe kurora lustrohet. Ka më shumë rëndësi nga sa mendojnë pacientët: një kurorë edhe pak e lartë ndryshon mënyrën si mbyllet gjithë goja.' },
      { question: 'A do të duket kurora e zirkonit si dhëmbët e mi të tjerë?', answer: 'Zirkoni modern me tejdukshmëri të lartë e përcjell dritën shumë si smalti natyral. Ngjyra përputhet me dhëmbët përreth, dhe tekstura sipërfaqësore krijohet gjatë përfundimit, që kurora të mos duket e sheshtë pranë dhëmbëve fqinjë.' },
      { question: 'A dhemb vendosja e kurorës?', answer: 'Përgatitja bëhet me anestezi lokale. Një ndjeshmëri e lehtë ndërmjet përgatitjes dhe vendosjes përfundimtare është normale dhe kalon pasi çimentohet kurora.' },
      { question: 'A mund të ha normalisht me kurora zirkoni?', answer: 'Po. Zirkoni i përballon lehtë forcat normale të përtypjes, edhe te dhëmballët. Kini kujdes ditën e parë dhe trajtojini kurorat si dhëmbë natyralë: pa akull dhe pa hapur ambalazhe me dhëmbë.' },
      { question: 'A i dëmtojnë kurorat e zirkonit dhëmbët përballë?', answer: 'Zirkoni i lustruar mirë është i butë me dhëmbët me të cilët kafshon. Cilësia e përfundimit ka rëndësi, prandaj lustrimi është pjesë e takimit të vendosjes dhe jo një detaj dytësor.' },
      { question: 'Sa dhëmbë mund të trajtohen njëherësh?', answer: 'Disa kurora mund të përgatiten dhe vendosen brenda të njëjtit trajtim. Plani juaj konfirmon kalendarin sipas numrit të dhëmbëve dhe nëse ndonjëri ka nevojë për trajtim paraprak.' },
      { question: 'A janë të sigurta kurorat e zirkonit nëse kam alergji ndaj metaleve?', answer: 'Zirkoni është pa metal dhe shumë biokompatibël, ndaj është zgjedhje e zakonshme për pacientët që kanë pasur reaksion ndaj restaurimeve me metal. Na e thoni gjatë konsultës dhe e planifikojmë në përputhje me këtë.' },
      { question: 'Sa zgjat trajtimi me kurora zirkoni?', answer: 'Në shumicën e rasteve, një qëndrim prej 3 ditësh me dy takime: një për përgatitjen dhe matjet, dhe një për vendosjen e kurorave. Ju japim kalendarin e saktë bashkë me planin e trajtimit, që ta planifikoni udhëtimin me qetësi.' },
      { question: 'Zirkon apo E-max: cilin të zgjedh?', answer: 'Zirkoni është zgjedhja bazë për dhëmbët e pasmë, për ata që kërcëllijnë dhëmbët dhe për urat, falë forcës së tij. E-max ka tejdukshmërinë më të lartë dhe shpesh është më i miri për një dhëmb të vetëm të përparmë. Shumë plane i kombinojnë të dyja. Dentisti ju rekomandon materialin për çdo dhëmb dhe ju shpjegon pse.' },
      { question: 'Çfarë ndodh pas vendosjes së kurorave?', answer: 'Largoheni me udhëzime me shkrim për kujdesin dhe një numër kontakti që mbetet i hapur për ju. Nëse del diçka, na kontaktoni dhe ju këshillojmë drejtpërdrejt. Kontrollet e rregullta dhe pastrimet profesionale i mbajnë kurorat dhe mishrat përreth të shëndetshëm për vite.' },
    ],
  },
  en: {
    name: 'Zirconia Crowns',
    eyebrow: 'Crowns & dentures · Albania',
    subtitle: 'Custom-made zirconia crowns with exceptional durability. Ideal for weakened or badly damaged teeth and on implants.',
    lead: 'A metal-free crown, as strong as it is natural, without the dark line at the gum that gives it away.',
    kicker: 'Zirconia crowns in Tirana, Albania',
    articleTitle: 'Zirconia crowns in Tirana: strength without metal',
    intro: [
      'A crown does two jobs at once. It has to protect a tooth that can no longer protect itself, and it has to look as if it has always been there. For most of dentistry’s history these two goals clashed: the strongest crowns had a metal core, and metal tends to show, with a slightly dull tooth or a dark line at the gum that appears after a few years.',
      'Zirconia resolves that contradiction. It is a ceramic strong enough for molars, with no metal anywhere in the restoration, so light passes through it in a way that makes it look like a tooth rather than a repair.',
      'At Veneer Clinic, a Made in Germany zirconia crown costs €200 per tooth and treatment is completed within a 3-day stay.',
    ],
    sections: [
      {
        title: 'What is a zirconia crown?',
        intro: [
          'A crown is a cap that covers the whole visible part of a tooth, restoring its shape, strength and function. Zirconia crowns are made from zirconium dioxide, a ceramic originally developed for very demanding engineering uses and today one of the most reliable materials in restorative dentistry.',
          'What makes it useful in the mouth is a rare combination. Zirconia resists fracture and wear exceptionally well, so it handles the forces on back teeth, where crowns carry the most load. It is also completely metal-free, so it stays biocompatible, does not conduct hot and cold like metal and never creates the grey shadow at the gum known from old metal-ceramic crowns.',
          'Today’s zirconia is also much more translucent than the first generations of the material. Where early zirconia crowns could look slightly flat, high-translucency zirconia now carries light much more like enamel does, so it works as well on front teeth as on molars.',
        ],
      },
      {
        title: 'When a zirconia crown is the right choice',
        intro: ['A crown is the solution when a tooth needs full coverage rather than a partial repair:'],
        inline: [
          { title: 'After a root canal.', text: 'A root-treated tooth becomes more brittle over time. A crown holds it together and significantly extends its life.' },
          { title: 'Teeth with large fillings.', text: 'When there is more filling than tooth, another filling only adds stress. A crown spreads the load over the whole tooth.' },
          { title: 'Cracked or broken teeth.', text: 'A crown holds the tooth together and stops the crack from spreading.' },
          { title: 'Severe wear.', text: 'Grinding or acid erosion can shorten teeth to the point where height and function need rebuilding.' },
          { title: 'Cosmetic problems.', text: 'Structurally sound teeth with deep stains, an unusual shape or an old crown that no longer matches its neighbours.' },
          { title: 'On implants.', text: 'As the visible tooth that completes a root replaced with a MegaGen implant.' },
        ],
        outro: [
          'Not every tooth that looks damaged needs a crown. When enough healthy structure remains, a filling or a veneer preserves more of your tooth and is the better choice. We tell you which category your tooth falls into at your visit: the answer depends on how much sound structure is left, and we assess it rather than assume it.',
        ],
      },
      {
        title: 'Zirconia, metal-ceramic or E-max?',
        intro: ['Three materials cover most cases, and each has situations where it is the strongest choice.'],
        inline: [
          { title: 'Zirconia', text: 'is the most versatile. Its strength makes it the default choice for molars and premolars, for people who grind their teeth and for long bridges. Being metal-free, it also keeps the gum margin clean over the years. For most patients, in most cases, this is the material we recommend.' },
          { title: 'Metal-ceramic', text: 'is the traditional option and still works well. It has a metal framework that gives it strength, but it also brings two well-known compromises: less translucency and the possibility of a dark margin showing at the gum as it recedes over the years.' },
          { title: 'E-max (lithium disilicate)', text: 'has excellent optical properties and is often the best choice for a single front tooth, where matching the natural neighbouring tooth is hardest. It is less suited than zirconia to the highest-load positions.' },
        ],
        outro: ['In practice a treatment plan often uses more than one material: zirconia at the back of the mouth and E-max at the front, where translucency matters more. Your plan shows which material goes on which tooth and why.'],
      },
      {
        title: 'How treatment works at Veneer Clinic',
        inline: [
          { title: 'Examination and planning.', text: 'At the first visit there is a full clinical examination, a 3D scan when needed and an assessment of gums and bite. Here we confirm which teeth need crowns and whether anything must be done first, such as a root canal, fillings or cleaning. We agree the plan with you before starting.' },
          { title: 'Preparation.', text: 'The tooth is prepared under local anaesthesia: decay and any failing old restoration are removed, and the tooth is shaped to receive the crown. We then take detailed measurements and send them to the lab with the shade agreed with you. Since crowns are made and fitted within a few days, there is no long wait between preparation and the final result.' },
          { title: 'Fabrication.', text: 'The crowns are made on these measurements from Made in Germany zirconia and finished with the surface texture and shade variations that make ceramic look natural rather than uniform.' },
          { title: 'Fitting.', text: 'The crowns are tried in to check fit, colour and contour before final cementation. When you are happy, they are fixed and the bite is adjusted so everything closes comfortably, a step that matters more than patients think, because a crown even slightly high changes how the whole mouth closes.' },
        ],
        outro: ['Most cases are completed within a 3-day stay.'],
      },
      {
        title: 'Treatment in phases',
        intro: [
          'When you have several teeth for crowns, or some of them first need a root canal or fillings, treatment can be split into phases. The first phase treats teeth with pain or infection, and the following phases place the crowns, in the order we agree together. Each phase appears separately in your quote, so you know from the start what each includes.',
        ],
      },
      {
        title: 'How long do zirconia crowns last?',
        intro: [
          'Zirconia is among the most durable materials in dentistry, and crowns usually last many years. Because the material itself resists fracture so well, lifespan usually depends more on the health of the tooth and gum beneath than on the crown.',
          'What protects that foundation is simple: daily brushing and cleaning between teeth, especially along the crown margin at the gum, regular professional cleanings, a night guard if you grind your teeth and not using your teeth as tools.',
          'Zirconia does not stain, so the crown keeps its colour. Worth knowing if you are crowning front teeth: natural teeth keep changing shade over the years while the crown stays as it was made, so if you are considering whitening, do it before the crown shade is chosen.',
        ],
      },
    ],
    stats: [
      { value: '2', label: 'Appointments' },
      { value: '3 days', label: 'Treatment time' },
      { value: '0', label: 'Metal in the crown' },
      { value: 'Made in Germany', label: 'Zirconia' },
    ],
    priceTitle: 'Price',
    priceNote: 'Per tooth',
    whatTitle: 'What makes zirconia different?',
    what: [
      'Zirconia is a highly durable ceramic, precisely shaped to fit your tooth and shaded to match your natural teeth. Unlike metal-ceramic crowns, it has no metal framework at all: the crown is ceramic from start to finish, giving a more translucent, natural look and removing the risk of a dark line at the gum edge as it recedes over time.',
      'This combination of strength and metal-free biocompatibility is why the zirconia crown has become a quality choice anywhere in the mouth, including the most visible front teeth and the back teeth that carry the full chewing force. At Veneer Clinic every crown is made from Made in Germany zirconia to the measurements of your tooth.',
    ],
    calloutTitle: 'Metal-free, fully biocompatible',
    calloutText:
      'Zirconia contains no metal at all, which some patients prefer because of allergies or simply for a completely natural result at the gum.',
    compareTitle: 'Zirconia compared with the alternatives',
    compareIntro: 'Zirconia is metal-free by design. Here is how it compares with the two main alternatives:',
    compare: [
      { id: 'crown-zirconia', tag: 'This treatment', title: 'Full zirconia', text: 'A completely metal-free ceramic, made and shaded to match your natural teeth, valued for its strength and translucency.' },
      { id: 'crown-porcelain', tag: 'Lower-cost alternative', title: 'Metal-ceramic', text: 'An option with a metal framework, worth considering when translucency matters less, especially on back teeth.' },
      { id: 'crown-emax', tag: 'For front teeth', title: 'E-max', text: 'Glass ceramic with the highest translucency, often the best choice for a single front tooth.' },
    ],
    fitTitle: 'Is a zirconia crown right for you?',
    fitIntro: 'Zirconia is worth considering whenever the look of the crown matters as much as its strength. You may be a good candidate if you have:',
    fit: [
      'Badly damaged or weakened teeth',
      'Large fillings or a lot of previous dental work',
      'Cracked or heavily worn teeth',
      'Teeth that have had a root canal',
      'Major changes in tooth shape or structure',
      'Cosmetic concerns that veneers cannot solve',
    ],
    fitNote:
      'Zirconia is an excellent choice in any position, but for molars with very high bite forces we confirm the recommended thickness is achievable for your tooth.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'A zirconia crown needs two appointments within a 3-day stay. In between, the crown is made in the lab on the measurements of the prepared tooth.',
    steps: [
      { title: 'Consultation and assessment', text: 'The dentist examines teeth, gums and bite to see whether zirconia crowns are the right choice. When it helps, a 3D scan is taken, free with treatment.' },
      { title: 'Treatment planning', text: 'We confirm which teeth need crowns, which material suits them and agree on shape and shade.' },
      { title: 'Tooth preparation', text: 'The tooth is prepared under local anaesthesia. Decay and failing old restorations are removed, keeping as much healthy structure as possible.' },
      { title: 'Measurements and lab', text: 'Measurements go to the lab with the chosen shade. The crowns are made from Made in Germany zirconia and finished with natural texture and shading.' },
      { title: 'Fitting the crown', text: 'Fit, shape, colour and contour are checked against the surrounding teeth. When you are happy, the crown is fixed permanently.' },
      { title: 'Bite check', text: 'The bite is assessed and adjusted, and the crown polished, so everything closes comfortably.' },
    ],
    whyBandTitle: 'Why Veneer Clinic for a zirconia crown?',
    whyBandText:
      'Made in Germany zirconia, the right material on the right tooth and conservative treatment: when a tooth can be saved with less than a crown, we tell you. You know how many crowns, in which material and at what price before we start, and the quote does not change once you are in the chair.',
    caseText: 'Made in Germany zirconia crowns',
    faq: [
      { question: 'How much does a zirconia crown cost?', answer: 'A Made in Germany zirconia crown costs €200 per tooth. The 3D scan, when needed, is free with treatment. If any tooth first needs a root canal or filling, it appears separately in your written quote before we start.' },
      { question: 'Why is the bite adjusted after the crown is fitted?', answer: 'The bite is assessed and adjusted, and the crown polished. It matters more than patients think: a crown even slightly high changes how the whole mouth closes.' },
      { question: 'Will a zirconia crown look like my other teeth?', answer: 'Modern high-translucency zirconia carries light much like natural enamel. The shade is matched to the surrounding teeth, and surface texture is created during finishing so the crown does not look flat next to its neighbours.' },
      { question: 'Does getting a crown hurt?', answer: 'The preparation is done under local anaesthesia. Mild sensitivity between preparation and final fitting is normal and passes once the crown is cemented.' },
      { question: 'Can I eat normally with zirconia crowns?', answer: 'Yes. Zirconia easily handles normal chewing forces, even on molars. Be careful on the first day and treat crowns like natural teeth: no ice and no opening packages with your teeth.' },
      { question: 'Do zirconia crowns damage the opposing teeth?', answer: 'Well-polished zirconia is gentle on the teeth it bites against. Finishing quality matters, which is why polishing is part of the fitting appointment and not an afterthought.' },
      { question: 'How many teeth can be treated at once?', answer: 'Several crowns can be prepared and fitted within the same treatment. Your plan confirms the schedule based on the number of teeth and whether any need prior treatment.' },
      { question: 'Are zirconia crowns safe if I am allergic to metals?', answer: 'Zirconia is metal-free and highly biocompatible, so it is a common choice for patients who have reacted to metal restorations. Tell us at your consultation and we plan accordingly.' },
      { question: 'How long does zirconia crown treatment take?', answer: 'In most cases, a 3-day stay with two appointments: one for preparation and measurements, and one for fitting the crowns. We give you the exact schedule with your treatment plan, so you can plan your trip calmly.' },
      { question: 'Zirconia or E-max: which should I choose?', answer: 'Zirconia is the default for back teeth, for people who grind and for bridges, thanks to its strength. E-max has the highest translucency and is often best for a single front tooth. Many plans combine both. The dentist recommends the material for each tooth and explains why.' },
      { question: 'What happens after the crowns are fitted?', answer: 'You leave with written aftercare instructions and a contact number that stays open for you. If anything comes up, contact us and we advise you directly. Regular check-ups and professional cleanings keep the crowns and surrounding gums healthy for years.' },
    ],
  },
  de: {
    name: 'Zirkonkronen',
    eyebrow: 'Kronen & Prothesen · Albanien',
    subtitle: 'Individuell gefertigte Zirkonkronen mit außergewöhnlicher Belastbarkeit. Ideal für geschwächte, stark beschädigte Zähne und auf Implantaten.',
    lead: 'Eine metallfreie Krone, so stark wie natürlich, ohne den dunklen Rand am Zahnfleisch, der sie verrät.',
    kicker: 'Zirkonkronen in Tirana, Albanien',
    articleTitle: 'Zirkonkronen in Tirana: Stärke ohne Metall',
    intro: [
      'Eine Krone erfüllt zwei Aufgaben zugleich. Sie muss einen Zahn schützen, der sich selbst nicht mehr schützen kann, und sie muss aussehen, als wäre sie schon immer da gewesen. Lange Zeit widersprachen sich diese Ziele: Die stärksten Kronen hatten einen Metallkern, und Metall fällt auf, mit einem leicht matten Zahn oder einem dunklen Rand am Zahnfleisch, der nach einigen Jahren sichtbar wird.',
      'Zirkon löst diesen Widerspruch. Es ist eine Keramik, stark genug für Backenzähne, ohne Metall in irgendeinem Teil der Versorgung, sodass Licht so hindurchgeht, dass sie wie ein Zahn und nicht wie eine Reparatur aussieht.',
      'In der Veneer Clinic kostet eine Zirkonkrone Made in Germany 200 € pro Zahn, und die Behandlung ist innerhalb eines Aufenthalts von 3 Tagen abgeschlossen.',
    ],
    sections: [
      {
        title: 'Was ist eine Zirkonkrone?',
        intro: [
          'Eine Krone ist eine Kappe, die den gesamten sichtbaren Teil des Zahns bedeckt und ihm Form, Stärke und Funktion zurückgibt. Zirkonkronen werden aus Zirkoniumdioxid gefertigt, einer Keramik, die ursprünglich für sehr anspruchsvolle technische Anwendungen entwickelt wurde und heute zu den zuverlässigsten Materialien der restaurativen Zahnmedizin gehört.',
          'Was sie im Mund so nützlich macht, ist eine seltene Kombination. Zirkon widersteht Bruch und Abnutzung außergewöhnlich gut und hält daher den Kräften der Seitenzähne stand, wo Kronen die größte Last tragen. Zudem ist es vollständig metallfrei, bleibt biokompatibel, leitet Hitze und Kälte nicht wie Metall und erzeugt nie den grauen Schatten am Zahnfleisch, den man von alten Metallkeramikkronen kennt.',
          'Heutiges Zirkon ist auch viel transluzenter als die ersten Materialgenerationen. Wo frühe Zirkonkronen etwas flach wirken konnten, leitet hochtransluzentes Zirkon das Licht heute viel ähnlicher wie Zahnschmelz, daher funktioniert es an Frontzähnen ebenso gut wie an Backenzähnen.',
        ],
      },
      {
        title: 'Wann eine Zirkonkrone die richtige Wahl ist',
        intro: ['Eine Krone ist die Lösung, wenn ein Zahn eine vollständige Abdeckung statt einer Teilreparatur braucht:'],
        inline: [
          { title: 'Nach einer Wurzelbehandlung.', text: 'Ein wurzelbehandelter Zahn wird mit der Zeit spröder. Die Krone hält ihn zusammen und verlängert seine Lebensdauer deutlich.' },
          { title: 'Zähne mit großen Füllungen.', text: 'Wenn mehr Füllung als Zahn vorhanden ist, erhöht eine weitere Füllung nur die Spannung. Die Krone verteilt die Last auf den ganzen Zahn.' },
          { title: 'Gerissene oder gebrochene Zähne.', text: 'Die Krone hält den Zahn zusammen und stoppt die Ausbreitung des Risses.' },
          { title: 'Starke Abnutzung.', text: 'Knirschen oder Säureerosion können Zähne so verkürzen, dass Höhe und Funktion wieder aufgebaut werden müssen.' },
          { title: 'Ästhetische Probleme.', text: 'Strukturell gesunde Zähne mit tiefen Verfärbungen, ungewöhnlicher Form oder einer alten Krone, die nicht mehr zu den Nachbarzähnen passt.' },
          { title: 'Auf Implantaten.', text: 'Als sichtbarer Zahn, der eine durch ein MegaGen-Implantat ersetzte Wurzel vervollständigt.' },
        ],
        outro: [
          'Nicht jeder beschädigt aussehende Zahn braucht eine Krone. Bleibt genug gesunde Substanz, erhalten eine Füllung oder ein Veneer mehr von Ihrem Zahn und sind die bessere Wahl. Wir sagen Ihnen beim Termin, in welche Kategorie Ihr Zahn fällt: Die Antwort hängt davon ab, wie viel gesunde Substanz übrig ist, und das beurteilen wir, statt es anzunehmen.',
        ],
      },
      {
        title: 'Zirkon, Metallkeramik oder E-max?',
        intro: ['Drei Materialien decken die meisten Fälle ab, und jedes hat Situationen, in denen es die stärkste Wahl ist.'],
        inline: [
          { title: 'Zirkon', text: 'ist das vielseitigste. Seine Stärke macht es zur Standardwahl für Backenzähne und Prämolaren, für Menschen, die knirschen, und für lange Brücken. Da es metallfrei ist, bleibt auch der Zahnfleischrand über die Jahre sauber. Für die meisten Patienten ist dies in den meisten Fällen das Material, das wir empfehlen.' },
          { title: 'Metallkeramik', text: 'ist die traditionelle Option und funktioniert weiterhin gut. Sie hat ein Metallgerüst, das ihr Stärke gibt, bringt aber zwei bekannte Kompromisse mit: weniger Transluzenz und die Möglichkeit eines dunklen Randes am Zahnfleisch, wenn es sich über die Jahre zurückzieht.' },
          { title: 'E-max (Lithiumdisilikat)', text: 'hat hervorragende optische Eigenschaften und ist oft die beste Wahl für einen einzelnen Frontzahn, wo die Anpassung an den natürlichen Nachbarzahn am schwierigsten ist. Für die am stärksten belasteten Positionen ist es weniger geeignet als Zirkon.' },
        ],
        outro: ['In der Praxis nutzt ein Behandlungsplan oft mehr als ein Material: Zirkon hinten im Mund und E-max vorne, wo Transluzenz wichtiger ist. Ihr Plan zeigt, welches Material auf welchen Zahn kommt und warum.'],
      },
      {
        title: 'So läuft die Behandlung in der Veneer Clinic ab',
        inline: [
          { title: 'Untersuchung und Planung.', text: 'Beim ersten Termin erfolgen eine vollständige klinische Untersuchung, bei Bedarf ein 3D-Scan und die Beurteilung von Zahnfleisch und Biss. Hier bestätigen wir, welche Zähne Kronen brauchen und ob vorher etwas zu tun ist, etwa eine Wurzelbehandlung, Füllungen oder eine Reinigung. Den Plan stimmen wir vor Beginn mit Ihnen ab.' },
          { title: 'Präparation.', text: 'Der Zahn wird unter örtlicher Betäubung präpariert: Karies und versagende alte Versorgungen werden entfernt, und der Zahn wird für die Krone geformt. Dann nehmen wir detaillierte Abdrücke und senden sie mit dem abgestimmten Farbton ins Labor. Da Kronen innerhalb weniger Tage gefertigt und eingesetzt werden, gibt es keine lange Wartezeit zwischen Präparation und Endergebnis.' },
          { title: 'Fertigung.', text: 'Die Kronen werden auf diesen Abdrücken aus Zirkon Made in Germany gefertigt und mit Oberflächentextur und Farbnuancen veredelt, die Keramik natürlich statt einheitlich wirken lassen.' },
          { title: 'Eingliederung.', text: 'Die Kronen werden anprobiert, um Passform, Farbe und Kontur vor dem endgültigen Zementieren zu prüfen. Sind Sie zufrieden, werden sie befestigt und der Biss angepasst, damit alles bequem schließt, ein Schritt, der wichtiger ist, als Patienten denken, denn eine auch nur leicht zu hohe Krone verändert, wie der ganze Mund schließt.' },
        ],
        outro: ['Die meisten Fälle sind innerhalb eines Aufenthalts von 3 Tagen abgeschlossen.'],
      },
      {
        title: 'Behandlung in Phasen',
        intro: [
          'Haben Sie mehrere Zähne für Kronen oder brauchen einige zuerst eine Wurzelbehandlung oder Füllungen, kann die Behandlung in Phasen aufgeteilt werden. In der ersten Phase werden schmerzende oder entzündete Zähne behandelt, in den folgenden Phasen die Kronen eingesetzt, in der gemeinsam vereinbarten Reihenfolge. Jede Phase steht separat im Angebot, damit Sie von Anfang an wissen, was dazugehört.',
        ],
      },
      {
        title: 'Wie lange halten Zirkonkronen?',
        intro: [
          'Zirkon gehört zu den langlebigsten Materialien der Zahnmedizin, und Kronen halten meist viele Jahre. Da das Material selbst Brüchen so gut widersteht, hängt die Lebensdauer meist eher von der Gesundheit von Zahn und Zahnfleisch darunter ab als von der Krone.',
          'Was dieses Fundament schützt, ist einfach: tägliches Putzen und Reinigen der Zwischenräume, besonders am Kronenrand am Zahnfleisch, regelmäßige professionelle Reinigungen, eine Knirscherschiene, falls Sie knirschen, und die Zähne nicht als Werkzeug zu benutzen.',
          'Zirkon verfärbt sich nicht, die Krone behält ihre Farbe. Gut zu wissen bei Frontzahnkronen: Natürliche Zähne verändern über die Jahre ihren Farbton, die Krone bleibt wie gefertigt. Planen Sie ein Bleaching, machen Sie es, bevor der Kronenfarbton gewählt wird.',
        ],
      },
    ],
    stats: [
      { value: '2', label: 'Termine' },
      { value: '3 Tage', label: 'Behandlungsdauer' },
      { value: '0', label: 'Metall in der Krone' },
      { value: 'Made in Germany', label: 'Zirkon' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Pro Zahn',
    whatTitle: 'Was macht Zirkon anders?',
    what: [
      'Zirkon ist eine sehr langlebige Keramik, präzise an Ihren Zahn angepasst und farblich auf Ihre natürlichen Zähne abgestimmt. Anders als Metallkeramikkronen hat sie überhaupt kein Metallgerüst: Die Krone ist durchgehend Keramik, was ihr ein transluzenteres, natürlicheres Aussehen gibt und das Risiko eines dunklen Randes am Zahnfleisch beseitigt, wenn es sich mit der Zeit zurückzieht.',
      'Diese Kombination aus Stärke und metallfreier Biokompatibilität ist der Grund, warum die Zirkonkrone überall im Mund zur Qualitätswahl geworden ist, auch an den sichtbarsten Frontzähnen und an den Seitenzähnen, die die volle Kaukraft tragen. In der Veneer Clinic wird jede Krone aus Zirkon Made in Germany nach den Maßen Ihres Zahns gefertigt.',
    ],
    calloutTitle: 'Metallfrei, vollständig biokompatibel',
    calloutText:
      'Zirkon enthält keinerlei Metall, was manche Patienten wegen Allergien oder einfach für ein ganz natürliches Ergebnis am Zahnfleisch bevorzugen.',
    compareTitle: 'Zirkon im Vergleich zu den Alternativen',
    compareIntro: 'Zirkon ist von Grund auf metallfrei. So schneidet es im Vergleich zu den zwei wichtigsten Alternativen ab:',
    compare: [
      { id: 'crown-zirconia', tag: 'Diese Behandlung', title: 'Vollzirkon', text: 'Eine vollständig metallfreie Keramik, gefertigt und eingefärbt passend zu Ihren natürlichen Zähnen, geschätzt für Stärke und Transluzenz.' },
      { id: 'crown-porcelain', tag: 'Günstigere Alternative', title: 'Metallkeramik', text: 'Eine Option mit Metallgerüst, sinnvoll, wenn Transluzenz weniger wichtig ist, besonders bei Seitenzähnen.' },
      { id: 'crown-emax', tag: 'Für Frontzähne', title: 'E-max', text: 'Glaskeramik mit der höchsten Transluzenz, oft die beste Wahl für einen einzelnen Frontzahn.' },
    ],
    fitTitle: 'Ist eine Zirkonkrone das Richtige für Sie?',
    fitIntro: 'Zirkon lohnt sich immer dann, wenn das Aussehen der Krone ebenso wichtig ist wie ihre Stärke. Sie sind ein guter Kandidat bei:',
    fit: [
      'Stark beschädigten oder geschwächten Zähnen',
      'Großen Füllungen oder viel vorheriger Zahnarbeit',
      'Gerissenen oder stark abgenutzten Zähnen',
      'Wurzelbehandelten Zähnen',
      'Großen Veränderungen in Zahnform oder -struktur',
      'Ästhetischen Anliegen, die Veneers nicht lösen können',
    ],
    fitNote:
      'Zirkon ist in jeder Position eine ausgezeichnete Wahl, doch bei Backenzähnen mit sehr hohen Beißkräften bestätigen wir, dass die empfohlene Stärke für Ihren Zahn umsetzbar ist.',
    stepsTitle: 'So läuft die Behandlung ab',
    stepsIntro: 'Eine Zirkonkrone braucht zwei Termine innerhalb eines Aufenthalts von 3 Tagen. Dazwischen wird die Krone im Labor auf den Abdrücken des präparierten Zahns gefertigt.',
    steps: [
      { title: 'Beratung und Untersuchung', text: 'Der Zahnarzt untersucht Zähne, Zahnfleisch und Biss, um zu sehen, ob Zirkonkronen die richtige Wahl sind. Wenn hilfreich, wird ein 3D-Scan gemacht, kostenlos mit der Behandlung.' },
      { title: 'Behandlungsplanung', text: 'Wir bestätigen, welche Zähne Kronen brauchen, welches Material passt, und stimmen Form und Farbton ab.' },
      { title: 'Präparation des Zahns', text: 'Der Zahn wird unter örtlicher Betäubung präpariert. Karies und versagende alte Versorgungen werden entfernt, möglichst viel gesunde Substanz bleibt.' },
      { title: 'Abdrücke und Labor', text: 'Die Abdrücke gehen mit dem gewählten Farbton ins Labor. Die Kronen werden aus Zirkon Made in Germany gefertigt und mit natürlicher Textur und Farbe veredelt.' },
      { title: 'Einsetzen der Krone', text: 'Passform, Form, Farbe und Kontur werden mit den Nachbarzähnen verglichen. Sind Sie zufrieden, wird die Krone endgültig befestigt.' },
      { title: 'Bisskontrolle', text: 'Der Biss wird geprüft und angepasst und die Krone poliert, damit alles bequem schließt.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für eine Zirkonkrone?',
    whyBandText:
      'Zirkon Made in Germany, das richtige Material am richtigen Zahn und konservative Behandlung: Kann ein Zahn mit weniger als einer Krone gerettet werden, sagen wir es Ihnen. Sie wissen vor Beginn, wie viele Kronen, aus welchem Material und zu welchem Preis, und das Angebot ändert sich nicht, wenn Sie auf dem Stuhl sitzen.',
    caseText: 'Zirkonkronen Made in Germany',
    faq: [
      { question: 'Was kostet eine Zirkonkrone?', answer: 'Eine Zirkonkrone Made in Germany kostet 200 € pro Zahn. Der 3D-Scan ist bei Bedarf mit der Behandlung kostenlos. Braucht ein Zahn zuerst eine Wurzelbehandlung oder Füllung, steht das separat in Ihrem schriftlichen Angebot, bevor wir beginnen.' },
      { question: 'Warum wird der Biss nach dem Einsetzen angepasst?', answer: 'Der Biss wird geprüft und angepasst und die Krone poliert. Das ist wichtiger, als Patienten denken: Eine auch nur leicht zu hohe Krone verändert, wie der ganze Mund schließt.' },
      { question: 'Sieht die Zirkonkrone aus wie meine anderen Zähne?', answer: 'Modernes hochtransluzentes Zirkon leitet Licht sehr ähnlich wie natürlicher Schmelz. Der Farbton wird an die Nachbarzähne angepasst, und die Oberflächentextur entsteht bei der Veredelung, damit die Krone neben den Nachbarzähnen nicht flach wirkt.' },
      { question: 'Tut das Einsetzen einer Krone weh?', answer: 'Die Präparation erfolgt unter örtlicher Betäubung. Eine leichte Empfindlichkeit zwischen Präparation und endgültiger Eingliederung ist normal und vergeht, sobald die Krone zementiert ist.' },
      { question: 'Kann ich mit Zirkonkronen normal essen?', answer: 'Ja. Zirkon hält normalen Kaukräften problemlos stand, auch an Backenzähnen. Seien Sie am ersten Tag vorsichtig und behandeln Sie Kronen wie natürliche Zähne: kein Eis und keine Verpackungen mit den Zähnen öffnen.' },
      { question: 'Schädigen Zirkonkronen die Gegenzähne?', answer: 'Gut poliertes Zirkon ist schonend zu den Zähnen, auf die es beißt. Die Qualität der Veredelung ist wichtig, deshalb gehört die Politur zum Eingliederungstermin und ist kein Nebendetail.' },
      { question: 'Wie viele Zähne können auf einmal behandelt werden?', answer: 'Mehrere Kronen können in derselben Behandlung präpariert und eingesetzt werden. Ihr Plan bestätigt den Zeitplan je nach Anzahl der Zähne und ob einige eine Vorbehandlung brauchen.' },
      { question: 'Sind Zirkonkronen bei Metallallergie sicher?', answer: 'Zirkon ist metallfrei und hochgradig biokompatibel und daher eine häufige Wahl für Patienten, die auf Metallversorgungen reagiert haben. Sagen Sie es uns bei der Beratung, und wir planen entsprechend.' },
      { question: 'Wie lange dauert die Behandlung mit Zirkonkronen?', answer: 'In den meisten Fällen ein Aufenthalt von 3 Tagen mit zwei Terminen: einer für Präparation und Abdrücke, einer für das Einsetzen der Kronen. Den genauen Zeitplan erhalten Sie mit Ihrem Behandlungsplan, damit Sie Ihre Reise in Ruhe planen können.' },
      { question: 'Zirkon oder E-max: Was soll ich wählen?', answer: 'Zirkon ist dank seiner Stärke die Standardwahl für Seitenzähne, für Menschen, die knirschen, und für Brücken. E-max hat die höchste Transluzenz und ist oft am besten für einen einzelnen Frontzahn. Viele Pläne kombinieren beide. Der Zahnarzt empfiehlt das Material für jeden Zahn und erklärt warum.' },
      { question: 'Was passiert nach dem Einsetzen der Kronen?', answer: 'Sie erhalten schriftliche Pflegehinweise und eine Kontaktnummer, die für Sie erreichbar bleibt. Taucht etwas auf, kontaktieren Sie uns und wir beraten Sie direkt. Regelmäßige Kontrollen und professionelle Reinigungen halten Kronen und Zahnfleisch über Jahre gesund.' },
    ],
  },
  it: {
    name: 'Corone in zirconia',
    eyebrow: 'Corone e protesi · Albania',
    subtitle: 'Corone in zirconia su misura, di resistenza eccezionale. Ideali per denti indeboliti, molto danneggiati e su impianti.',
    lead: 'Una corona senza metallo, resistente quanto naturale, senza la linea scura sulla gengiva che la tradisce.',
    kicker: 'Corone in zirconia a Tirana, Albania',
    articleTitle: 'Corone in zirconia a Tirana: resistenza senza metallo',
    intro: [
      'Una corona fa due lavori contemporaneamente. Deve proteggere un dente che non può più proteggersi da solo, e deve sembrare che sia sempre stata lì. Per gran parte della storia dell’odontoiatria questi due obiettivi erano in conflitto: le corone più resistenti avevano un nucleo metallico, e il metallo tende a notarsi, con un dente un po’ opaco o una linea scura sulla gengiva che compare dopo qualche anno.',
      'La zirconia risolve questa contraddizione. È una ceramica abbastanza resistente per i molari, senza metallo in nessuna parte del restauro, quindi la luce la attraversa in un modo che la fa sembrare un dente e non una riparazione.',
      'Alla Veneer Clinic, una corona in zirconia Made in Germany costa 200 € per dente e il trattamento si completa in un soggiorno di 3 giorni.',
    ],
    sections: [
      {
        title: 'Cos’è una corona in zirconia?',
        intro: [
          'La corona è una capsula che copre tutta la parte visibile del dente, restituendogli forma, resistenza e funzione. Le corone in zirconia si realizzano in biossido di zirconio, una ceramica sviluppata inizialmente per usi ingegneristici molto esigenti e oggi uno dei materiali più affidabili nell’odontoiatria restaurativa.',
          'Ciò che la rende utile in bocca è una combinazione rara. La zirconia resiste eccezionalmente bene a fratture e usura, quindi sopporta le forze dei denti posteriori, dove le corone portano il carico maggiore. È anche completamente senza metallo, quindi resta biocompatibile, non conduce caldo e freddo come il metallo e non crea mai l’ombra grigia sulla gengiva tipica delle vecchie corone in metallo-ceramica.',
          'La zirconia di oggi è anche molto più traslucida delle prime generazioni del materiale. Dove le prime corone in zirconia potevano sembrare un po’ piatte, la zirconia ad alta traslucenza oggi trasmette la luce molto più come lo smalto, quindi funziona bene sui denti anteriori quanto sui molari.',
        ],
      },
      {
        title: 'Quando la corona in zirconia è la scelta giusta',
        intro: ['La corona è la soluzione quando un dente ha bisogno di una copertura completa e non di una riparazione parziale:'],
        inline: [
          { title: 'Dopo una cura canalare.', text: 'Un dente devitalizzato diventa più fragile nel tempo. La corona lo tiene unito e ne allunga notevolmente la vita.' },
          { title: 'Denti con otturazioni grandi.', text: 'Quando c’è più otturazione che dente, un’altra otturazione aggiunge solo tensione. La corona distribuisce il carico su tutto il dente.' },
          { title: 'Denti incrinati o rotti.', text: 'La corona tiene unito il dente e ferma la propagazione della crepa.' },
          { title: 'Usura grave.', text: 'Il bruxismo o l’erosione acida possono accorciare i denti al punto che altezza e funzione vanno ricostruite.' },
          { title: 'Problemi estetici.', text: 'Denti strutturalmente sani ma con macchie profonde, forma insolita o una vecchia corona che non si abbina più ai denti vicini.' },
          { title: 'Su impianti.', text: 'Come dente visibile che completa una radice sostituita con un impianto MegaGen.' },
        ],
        outro: [
          'Non ogni dente che sembra danneggiato ha bisogno di una corona. Quando resta abbastanza struttura sana, un’otturazione o una faccetta conservano più del tuo dente e sono la scelta migliore. Ti diciamo in quale categoria rientra il tuo dente durante la visita: la risposta dipende da quanta struttura sana è rimasta, e la valutiamo, non la supponiamo.',
        ],
      },
      {
        title: 'Zirconia, metallo-ceramica o E-max?',
        intro: ['Tre materiali coprono la maggior parte dei casi, e ognuno ha situazioni in cui è la scelta migliore.'],
        inline: [
          { title: 'La zirconia', text: 'è la più versatile. La sua resistenza la rende la scelta di base per molari e premolari, per chi digrigna i denti e per i ponti lunghi. Essendo senza metallo, mantiene pulito anche il margine gengivale negli anni. Per la maggior parte dei pazienti, nella maggior parte dei casi, è il materiale che consigliamo.' },
          { title: 'La metallo-ceramica', text: 'è l’opzione tradizionale e continua a funzionare bene. Ha una struttura metallica che le dà resistenza, ma porta anche due compromessi noti: meno traslucenza e la possibilità che compaia un bordo scuro sulla gengiva quando questa si ritira negli anni.' },
          { title: 'E-max (disilicato di litio)', text: 'ha eccellenti proprietà ottiche ed è spesso la scelta migliore per un singolo dente anteriore, dove abbinarsi al dente naturale vicino è la cosa più difficile. È meno adatta della zirconia per le posizioni con il carico maggiore.' },
        ],
        outro: ['In pratica un piano di trattamento spesso usa più di un materiale: zirconia nella parte posteriore della bocca ed E-max davanti, dove la traslucenza conta di più. Il tuo piano mostra quale materiale va su quale dente e perché.'],
      },
      {
        title: 'Come funziona il trattamento alla Veneer Clinic',
        inline: [
          { title: 'Esame e pianificazione.', text: 'Alla prima visita si fa un esame clinico completo, una TAC 3D quando serve e la valutazione di gengive e morso. Qui confermiamo quali denti hanno bisogno di corone e se qualcosa va fatto prima, come una cura canalare, otturazioni o una pulizia. Concordiamo il piano con te prima di iniziare.' },
          { title: 'Preparazione.', text: 'Il dente si prepara in anestesia locale: si rimuovono carie e ogni vecchio restauro che cede, e il dente si modella per ricevere la corona. Poi prendiamo impronte dettagliate e le inviamo al laboratorio con il colore concordato con te. Poiché le corone si realizzano e applicano in pochi giorni, non c’è una lunga attesa tra preparazione e risultato finale.' },
          { title: 'Realizzazione.', text: 'Le corone si realizzano su queste impronte in zirconia Made in Germany e si rifiniscono con la texture superficiale e le variazioni di tonalità che rendono la ceramica naturale e non uniforme.' },
          { title: 'Applicazione.', text: 'Le corone si provano per controllare adattamento, colore e contorno prima della cementazione definitiva. Quando sei soddisfatto, si fissano e il morso si regola perché tutto chiuda comodamente, un passaggio che conta più di quanto pensino i pazienti, perché una corona anche leggermente alta cambia il modo in cui chiude tutta la bocca.' },
        ],
        outro: ['La maggior parte dei casi si completa in un soggiorno di 3 giorni.'],
      },
      {
        title: 'Trattamento in fasi',
        intro: [
          'Quando hai più denti da incoronare, o alcuni hanno prima bisogno di una cura canalare o di otturazioni, il trattamento si può dividere in fasi. Nella prima fase si trattano i denti con dolore o infezione, e nelle fasi successive si applicano le corone, nell’ordine che concordiamo insieme. Ogni fase compare separatamente nel preventivo, così sai fin dall’inizio cosa comprende.',
        ],
      },
      {
        title: 'Quanto durano le corone in zirconia?',
        intro: [
          'La zirconia è tra i materiali più durevoli in odontoiatria, e le corone di solito durano molti anni. Poiché il materiale stesso resiste così bene alla frattura, la durata dipende di solito più dalla salute del dente e della gengiva sottostanti che dalla corona.',
          'Ciò che protegge questa base è semplice: spazzolino quotidiano e pulizia tra i denti, soprattutto lungo il margine della corona sulla gengiva, pulizie professionali regolari, un bite notturno se digrigni i denti e non usare i denti come attrezzi.',
          'La zirconia non si macchia, quindi la corona mantiene il colore. Utile da sapere se fai corone sui denti anteriori: i denti naturali continuano a cambiare tonalità negli anni, mentre la corona resta com’è stata realizzata, quindi se pensi allo sbiancamento, fallo prima di scegliere il colore della corona.',
        ],
      },
    ],
    stats: [
      { value: '2', label: 'Appuntamenti' },
      { value: '3 giorni', label: 'Durata del trattamento' },
      { value: '0', label: 'Metallo nella corona' },
      { value: 'Made in Germany', label: 'Zirconia' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Per dente',
    whatTitle: 'Cosa rende diversa la zirconia?',
    what: [
      'La zirconia è una ceramica molto durevole, modellata con precisione sul tuo dente e colorata per abbinarsi ai denti naturali. A differenza delle corone in metallo-ceramica, non ha alcuna struttura metallica: la corona è ceramica dall’inizio alla fine, il che le dà un aspetto più traslucido e naturale ed elimina il rischio di una linea scura al margine gengivale quando la gengiva si ritira nel tempo.',
      'Questa combinazione di resistenza e biocompatibilità senza metallo è il motivo per cui la corona in zirconia è diventata una scelta di qualità ovunque in bocca, compresi i denti anteriori più visibili e i denti posteriori che sostengono tutta la forza masticatoria. Alla Veneer Clinic ogni corona si realizza in zirconia Made in Germany sulle misure del tuo dente.',
    ],
    calloutTitle: 'Senza metallo, completamente biocompatibile',
    calloutText:
      'La zirconia non contiene alcun metallo, cosa che alcuni pazienti preferiscono per allergie o semplicemente per un risultato del tutto naturale sulla gengiva.',
    compareTitle: 'La zirconia a confronto con le alternative',
    compareIntro: 'La zirconia è senza metallo per costruzione. Ecco come si confronta con le due alternative principali:',
    compare: [
      { id: 'crown-zirconia', tag: 'Questo trattamento', title: 'Zirconia integrale', text: 'Una ceramica completamente senza metallo, realizzata e colorata per abbinarsi ai denti naturali, apprezzata per resistenza e traslucenza.' },
      { id: 'crown-porcelain', tag: 'Alternativa più economica', title: 'Metallo-ceramica', text: 'Un’opzione con struttura metallica, da considerare quando la traslucenza conta meno, soprattutto sui denti posteriori.' },
      { id: 'crown-emax', tag: 'Per i denti anteriori', title: 'E-max', text: 'Vetroceramica con la massima traslucenza, spesso la scelta migliore per un singolo dente anteriore.' },
    ],
    fitTitle: 'La corona in zirconia è adatta a te?',
    fitIntro: 'La zirconia vale la pena di essere considerata ogni volta che l’aspetto della corona conta quanto la sua resistenza. Potresti essere un buon candidato se hai:',
    fit: [
      'Denti molto danneggiati o indeboliti',
      'Otturazioni grandi o molti lavori dentali precedenti',
      'Denti incrinati o molto usurati',
      'Denti che hanno subito una cura canalare',
      'Grandi cambiamenti nella forma o nella struttura del dente',
      'Problemi estetici che le faccette non possono risolvere',
    ],
    fitNote:
      'La zirconia è un’ottima scelta in ogni posizione, ma per i molari con forze masticatorie molto elevate confermiamo che lo spessore consigliato sia realizzabile per il tuo dente.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'Una corona in zirconia richiede due appuntamenti in un soggiorno di 3 giorni. Nel frattempo, la corona si realizza in laboratorio sulle impronte del dente preparato.',
    steps: [
      { title: 'Consulenza e valutazione', text: 'Il dentista esamina denti, gengive e morso per vedere se le corone in zirconia sono la scelta giusta. Quando aiuta, si fa una TAC 3D, gratuita con il trattamento.' },
      { title: 'Pianificazione del trattamento', text: 'Confermiamo quali denti hanno bisogno di corone, quale materiale è adatto e concordiamo forma e colore.' },
      { title: 'Preparazione del dente', text: 'Il dente si prepara in anestesia locale. Si rimuovono carie e vecchi restauri che cedono, conservando quanta più struttura sana possibile.' },
      { title: 'Impronte e laboratorio', text: 'Le impronte vanno al laboratorio con il colore scelto. Le corone si realizzano in zirconia Made in Germany e si rifiniscono con texture e tonalità naturali.' },
      { title: 'Applicazione della corona', text: 'Si controllano adattamento, forma, colore e contorno rispetto ai denti vicini. Quando sei soddisfatto, la corona si fissa definitivamente.' },
      { title: 'Controllo del morso', text: 'Il morso si valuta e regola, e la corona si lucida, perché tutto chiuda comodamente.' },
    ],
    whyBandTitle: 'Perché Veneer Clinic per una corona in zirconia?',
    whyBandText:
      'Zirconia Made in Germany, il materiale giusto sul dente giusto e un trattamento conservativo: quando un dente si può salvare con meno di una corona, te lo diciamo. Sai quante corone, in quale materiale e a quale prezzo prima di iniziare, e il preventivo non cambia una volta seduto sulla poltrona.',
    caseText: 'Corone in zirconia Made in Germany',
    faq: [
      { question: 'Quanto costa una corona in zirconia?', answer: 'Una corona in zirconia Made in Germany costa 200 € per dente. La TAC 3D, quando serve, è gratuita con il trattamento. Se un dente ha prima bisogno di una cura canalare o di un’otturazione, compare separatamente nel preventivo scritto prima di iniziare.' },
      { question: 'Perché si regola il morso dopo l’applicazione della corona?', answer: 'Il morso si valuta e regola, e la corona si lucida. Conta più di quanto pensino i pazienti: una corona anche leggermente alta cambia il modo in cui chiude tutta la bocca.' },
      { question: 'La corona in zirconia sembrerà come gli altri miei denti?', answer: 'La zirconia moderna ad alta traslucenza trasmette la luce molto come lo smalto naturale. Il colore si abbina ai denti vicini, e la texture superficiale si crea durante la rifinitura, perché la corona non sembri piatta accanto ai denti vicini.' },
      { question: 'Mettere una corona fa male?', answer: 'La preparazione si fa in anestesia locale. Una lieve sensibilità tra la preparazione e l’applicazione definitiva è normale e passa una volta cementata la corona.' },
      { question: 'Posso mangiare normalmente con le corone in zirconia?', answer: 'Sì. La zirconia sopporta facilmente le normali forze masticatorie, anche sui molari. Fai attenzione il primo giorno e tratta le corone come denti naturali: niente ghiaccio e niente confezioni aperte con i denti.' },
      { question: 'Le corone in zirconia danneggiano i denti antagonisti?', answer: 'La zirconia ben lucidata è delicata con i denti contro cui morde. La qualità della rifinitura conta, per questo la lucidatura fa parte dell’appuntamento di applicazione e non è un dettaglio secondario.' },
      { question: 'Quanti denti si possono trattare insieme?', answer: 'Più corone si possono preparare e applicare nello stesso trattamento. Il tuo piano conferma il calendario in base al numero di denti e se qualcuno ha bisogno di un trattamento preliminare.' },
      { question: 'Le corone in zirconia sono sicure se ho allergia ai metalli?', answer: 'La zirconia è senza metallo e molto biocompatibile, quindi è una scelta comune per i pazienti che hanno avuto reazioni a restauri metallici. Diccelo durante la consulenza e pianifichiamo di conseguenza.' },
      { question: 'Quanto dura il trattamento con corone in zirconia?', answer: 'Nella maggior parte dei casi, un soggiorno di 3 giorni con due appuntamenti: uno per preparazione e impronte, e uno per applicare le corone. Ti diamo il calendario esatto con il piano di trattamento, così pianifichi il viaggio con calma.' },
      { question: 'Zirconia o E-max: quale scegliere?', answer: 'La zirconia è la scelta di base per i denti posteriori, per chi digrigna e per i ponti, grazie alla sua resistenza. L’E-max ha la massima traslucenza ed è spesso la migliore per un singolo dente anteriore. Molti piani combinano entrambe. Il dentista consiglia il materiale per ogni dente e spiega perché.' },
      { question: 'Cosa succede dopo l’applicazione delle corone?', answer: 'Esci con istruzioni scritte per la cura e un numero di contatto che resta aperto per te. Se succede qualcosa, contattaci e ti consigliamo direttamente. Controlli regolari e pulizie professionali mantengono sane corone e gengive per anni.' },
    ],
  },
};

export default function ZirconiaCrownPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="crown-zirconia"
      heroImage={images.results[1]?.[0] ?? images.heroAfter}
      whatImage={images.results[1]?.[1] ?? images.heroAfter}
    />
  );
}
