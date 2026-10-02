import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Heqja e dhëmbit',
    eyebrow: 'Trajtime të përgjithshme · Shqipëri',
    subtitle: 'Heqje e kujdesshme e dhëmbëve të dëmtuar, të infektuar ose të pjekurisë me anestezi lokale, e planifikuar me skanim 3D kur nevojitet.',
    lead: 'Heqje e sigurt dhe e planifikuar me kujdes, me anestezi lokale, me një plan të qartë për atë që do ta zëvendësojë dhëmbin.',
    kicker: 'Heqja e dhëmbit në Tiranë, Shqipëri',
    articleTitle: 'Heqja e dhëmbit në Tiranë: e kujdesshme, e planifikuar dhe e shpjeguar',
    intro: [
      'Heqja e dhëmbit largon një dhëmb që nuk mund të shpëtohet më, që dhimbja dhe infeksioni të mos përhapen në pjesën tjetër të gojës.',
      'Është një nga procedurat më të zakonshme në stomatologji, por për ne nuk është kurrë rutinë. Një dhëmb i hequr lë një boshllëk, dhe ajo që ndodh me atë boshllëk ndikon për vite në kafshim, te dhëmbët fqinjë dhe te kocka poshtë.',
      'Në Veneer Clinic, heqja e dhëmbit dhe ndërhyrjet e tjera të vogla kirurgjikale kushtojnë nga 100 deri në 300 €, sipas kompleksitetit, dhe bëhen me anestezi lokale brenda një qëndrimi prej 1–2 ditësh.',
    ],
    sections: [
      {
        title: 'Fillimisht përpiqemi ta shpëtojmë dhëmbin',
        intro: [
          'Para se të rekomandojmë heqjen, vlerësojmë nëse dhëmbi mund të ruhet. Shumë dhëmbë që duken të humbur shpëtohen me trajtim kanali, kurorë ose trajtim të mishrave. Nëse kjo është realiste, jua themi dhe ju shpjegojmë hapur të mirat dhe të metat. Një mendim i dytë është gjithmonë i mirëpritur nëse diku tjetër ju kanë thënë që dhëmbi duhet hequr.',
          'Kur një dhëmb vërtet nuk shpëtohet, sepse është çarë, është shumë i prishur për t’u rindërtuar, ka infeksion të rëndë ose ka humbur mbështetjen e kockës, heqja është zgjedhja më e shëndetshme. Lënia e tij zakonisht sjell më shumë dhimbje dhe një infeksion që vazhdon të përhapet.',
        ],
      },
      {
        title: 'E planifikuar, jo e improvizuar',
        intro: [
          'Shumica e heqjeve janë të thjeshta. Disa jo: dhëmballë pjekurie të shtrira anash, dhëmbë me rrënjë të përkulura ose dhëmbë të poshtëm afër nervit. Në këto raste, një skanim 3D CT tregon saktësisht ku ndodhen rrënjët para se të nisim, kështu që heqja planifikohet duke pasur parasysh nervin dhe sinusin, në vend që ato të zbulohen gjatë ndërhyrjes.',
          'Skanimi bëhet vetëm kur rasti juaj e kërkon, dhe është falas për pacientët që trajtohen te ne.',
        ],
      },
      {
        title: 'Mendojmë që tani për boshllëkun',
        intro: [
          'Çdo heqje dhëmbi shoqërohet me një bisedë për atë që do ta zëvendësojë. Mundësitë janë implant, urë, protezë ose, për disa dhëmbë të pasmë, lënia e hapësirës. Nëse ka gjasa për implant, dhëmbi hiqet në mënyrë që të ruhet kocka, dhe aty ku kocka do të tkurrej mund të diskutohet ruajtja e alveolës me shtim kocke.',
          'Implantet MegaGen kanë nevojë për rreth gjashtë muaj shërim para kurorës përfundimtare prej zirkoni Made in Germany, ndaj heqja shpesh është hapi i parë i një trajtimi në dy udhëtime. Oferta me shkrim tregon çdo hap që në fillim, që ta dini çfarë ju pret para se të uleni në karrige.',
        ],
      },
      {
        title: 'Si bëhet heqja e dhëmbit',
        intro: ['Shumica e heqjeve bëhen në një seancë me anestezi lokale. Procedura varet nga fakti nëse heqja është e thjeshtë apo kirurgjikale:'],
        inline: [
          { title: 'Anestezia.', text: 'Anestezia lokale vendoset rreth dhëmbit dhe i jepet kohë të veprojë. E kontrollojmë zonën para se të nisim dhe shtojmë anestezi nëse ndieni ende diçka të mprehtë. Gjatë heqjes ndieni presion dhe lëvizje, por jo dhimbje. Nëse jeni në ankth, na e thoni kur rezervoni: ju shpjegojmë çdo hap para se ta bëjmë dhe ecim me ritmin tuaj.' },
          { title: 'Dhëmballët e pjekurisë.', text: 'Dhëmballët e poshtme të pjekurisë shpesh ndodhen afër nervit që i jep ndjeshmëri buzës dhe mjekrës. Skanimi 3D e tregon këtë distancë me saktësi, kështu që ndërhyrja planifikohet që të qëndrojë larg tij. Të sipërmet mund të jenë afër sinusit, dhe skanimi e tregon edhe këtë. E planifikuar kështu, heqja është më e parashikueshme dhe zakonisht shërohet me më pak shqetësim.' },
          { title: 'Menjëherë pas.', text: 'Kafshoni një garzë për pak kohë që në alveolë të formohet mpiksja e gjakut. Kjo mpiksje është fillimi i shërimit, dhe mbrojtja e saj është qëllimi kryesor i 24 orëve të para. Para se të largoheni, ju shpjegojmë çfarë të hani, si ta menaxhoni shqetësimin dhe cilat shenja tregojnë që duhet të na kontaktoni.' },
        ],
      },
      {
        title: 'Llojet e heqjes',
        intro: ['Mënyra si hiqet një dhëmb varet nga pozicioni, rrënjët dhe kocka përreth tij:'],
        cards: [
          { title: 'Heqje e thjeshtë (më e zakonshmja)', text: 'Për një dhëmb plotësisht të dukshëm mbi mish. Shkëputet me kujdes nga ligamenti që e mban në alveolë dhe hiqet, duke ruajtur kockën e hollë përreth, gjë e rëndësishme nëse më vonë vendoset implant. Rrallë nevojiten qepje.' },
          { title: 'Heqje kirurgjikale (kur nevojitet)', text: 'Për dhëmbë të thyer në nivelin e mishit, të futur në kockë ose me rrënjë të përkulura. Bëhet një hapje e vogël në mish, mund të hiqet pak kockë dhe dhëmbi ndahet në pjesë që secila të dalë me forcë minimale. Zona mbyllet me qepje.' },
        ],
        outro: ['Dhëmballët e pjekurisë të futura planifikohen mbi një skanim 3D CT që tregon sa afër nervit janë rrënjët, para çdo ndërhyrjeje.'],
      },
      {
        title: 'Pas heqjes, para fluturimit',
        intro: [
          'Pas shumicës së heqjeve të thjeshta mund të ktheheni në aktivitet normal të nesërmen. Pas heqjeve kirurgjikale ose të dhëmballëve të pjekurisë, rikuperimi zgjat zakonisht 3 deri në 7 ditë, me ënjtjen më të madhe rreth ditës së dytë.',
          'Nëse vini nga jashtë, planifikoni 1 deri në 2 ditë në Tiranë: dita e heqjes dhe një kontroll i shkurtër para nisjes. Për heqjet kirurgjikale ju themi paraprakisht nëse ia vlen të qëndroni një ditë më shumë.',
        ],
      },
    ],
    stats: [
      { value: '1', label: 'Seancë në shumicën e rasteve' },
      { value: '3D', label: 'Planifikim për dhëmballët e pjekurisë' },
      { value: 'Lokale', label: 'Anestezia' },
      { value: '3–7 ditë', label: 'Rikuperimi' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Sipas kompleksitetit',
    whatTitle: 'Çfarë është heqja e dhëmbit?',
    what: [
      'Heqja e dhëmbit është largimi i një dhëmbi nga alveola e tij në kockë, me anestezi lokale. Bëhet kur dhëmbi nuk mund të shpëtohet me mbushje, trajtim kanali apo kurorë, ose kur pozicioni i tij, si te shumë dhëmballë pjekurie, shkakton probleme.',
      'Mund të jetë e thjeshtë, kur dhëmbi është plotësisht i dukshëm, ose kirurgjikale, kur është i thyer, i futur në kockë ose me rrënjë komplekse. Të dyja planifikohen me imazheri dhe me një plan për atë që do ta zëvendësojë dhëmbin.',
    ],
    calloutTitle: 'Fillimisht planifikojmë çfarë do ta zëvendësojë dhëmbin',
    calloutText:
      'Para se të hiqet një dhëmb, flasim për hapin tjetër: implant, urë, protezë ose lënien e hapësirës. Nëse ka gjasa për implant, heqja planifikohet që të ruhet kocka që do t’i nevojitet.',
    compareTitle: 'Heqje, shpëtim apo zëvendësim?',
    compareIntro: 'Heqja është gjithmonë mundësia e fundit. Ja si lidhet me trajtimet e tjera:',
    compare: [
      { id: 'oral-surgery', tag: 'Ky trajtim', title: 'Heqje dhëmbi', text: 'Kur dhëmbi nuk shpëtohet më. Me anestezi lokale, e planifikuar me skanim 3D kur nevojitet.' },
      { id: 'root-canal', tag: 'Para heqjes', title: 'Trajtim kanali', text: 'Shpesh shpëton një dhëmb të infektuar që duket i humbur, pa e hequr fare.' },
      { id: 'implant-megagen', tag: 'Pas heqjes', title: 'Implant dentar', text: 'Zëvendësimi më i afërt me dhëmbin natyral, që e ruan edhe kockën poshtë.' },
    ],
    fitTitle: 'Kur është heqja zgjedhja e duhur?',
    fitIntro: 'E rekomandojmë heqjen e dhëmbit vetëm kur shpëtimi i tij nuk është mundësi reale. Zakonisht kjo ndodh nëse keni:',
    fit: [
      'Një dhëmb aq të prishur ose të thyer sa nuk rindërtohet më me mbushje, trajtim kanali ose kurorë',
      'Një dhëmb të infektuar ku trajtimi i kanalit nuk është i mundur ose ka dështuar',
      'Dhëmballë pjekurie të futura ose gjysmë të dala që shkaktojnë dhimbje, ënjtje ose infeksione të përsëritura',
      'Sëmundje të avancuar të mishrave, me dhëmbë që lëvizin dhe nuk stabilizohen',
      'Dhëmbë që duhen hequr si pjesë e një plani me implante, përfshirë All-on-4 ose All-on-6',
      'Dhëmbë të mbivendosur, ku heqja e njërit krijon hapësirë për trajtim ortodontik',
    ],
    fitNote:
      'Nëse një trajtim kanali, një kurorë ose një trajtim i mishrave mund ta ruajnë dhëmbin, jua themi të parën. Heqja e dhëmbit është e përhershme, ndaj është gjithmonë mundësia e fundit, jo më e shpejta.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'Shumica e heqjeve bëhen në një seancë, dhe dilni duke ditur saktësisht si të kujdeseni për zonën:',
    steps: [
      { title: 'Vlerësimi dhe imazheria', text: 'Ekzaminojmë dhëmbin dhe grafinë. Për dhëmballë pjekurie të futura ose dhëmbë afër nervit bëhet skanim 3D CT, falas me trajtimin tuaj.' },
      { title: 'Plani dhe zëvendësimi', text: 'Ju shpjegojmë pse dhëmbi duhet hequr, si do të hiqet dhe çfarë mund ta zëvendësojë, me gjithçka të shkruar në ofertë.' },
      { title: 'Anestezi lokale', text: 'Zona mpihet plotësisht dhe e kontrollojmë para se të nisim. Ndieni presion, jo dhimbje.' },
      { title: 'Heqja', text: 'Dhëmbi lirohet dhe hiqet me kujdes, duke ruajtur kockën dhe mishin përreth. Rastet kirurgjikale mbyllen me qepje.' },
      { title: 'Kujdesi pas heqjes', text: 'Kafshoni një garzë për të ndalur gjakderdhjen, dhe ju shpjegojmë si të kujdeseni për alveolën ditët në vijim dhe kur të na kontaktoni.' },
    ],
    whyBandTitle: 'Pse Veneer Clinic për heqjen e dhëmbit?',
    whyBandText:
      'Fillimisht përpiqemi ta shpëtojmë dhëmbin dhe e heqim vetëm kur ky është vendimi i duhur. Kur heqja nevojitet, planifikohet mirë, bëhet me kujdes dhe lidhet me një plan të qartë për zëvendësimin e dhëmbit. Çmimi që ju japim është çmimi që paguani.',
    caseText: 'Heqje e planifikuar me kujdes',
    faq: [
      { question: 'Sa kushton heqja e dhëmbit?', answer: 'Heqja e dhëmbit dhe ndërhyrjet e vogla kirurgjikale kushtojnë nga 100 deri në 300 €, sipas kompleksitetit: një heqje e thjeshtë është në fund të poshtëm, ndërsa dhëmballët e pjekurisë të futura dhe heqjet kirurgjikale më lart. Skanimi 3D, kur duhet, është falas. Çmimi i saktë konfirmohet pas grafisë panoramike.' },
      { question: 'A dhemb heqja e dhëmbit?', answer: 'Vetë heqja nuk duhet të dhembë. Zona mpihet me anestezi lokale dhe e kontrollojmë para se të nisim. Do të ndieni presion dhe lëvizje, që mund të duken të çuditshme, por jo dhimbje të mprehtë. Nëse ndieni diçka të mprehtë, na e thoni dhe shtojmë anestezi. Pasi kalon efekti, pak dhimbje për disa ditë është normale dhe kontrollohet mirë me qetësuesit që ju rekomandojmë. Heqjet kirurgjikale dhe të dhëmballëve të pjekurisë shqetësojnë zakonisht më shumë.' },
      { question: 'Sa zgjat heqja e një dhëmbi?', answer: 'Një heqje e thjeshtë zakonisht është e shpejtë, pasi zona është mpirë. Pjesa më e madhe e takimit shkon për vlerësimin, anestezinë dhe shpjegimin e kujdesit pas heqjes. Heqjet kirurgjikale dhe dhëmballët e pjekurisë të futura zgjasin më shumë, zakonisht 30 deri në 90 minuta gjithsej, sipas pozicionit të dhëmbit dhe rrënjëve.' },
      { question: 'A mund të shpëtohet dhëmbi?', answer: 'Shpesh po, dhe gjithmonë e kontrollojmë këtë së pari. Trajtimi i kanalit, kurora ose trajtimi i mishrave mund të shpëtojnë shumë dhëmbë që duken të humbur. E rekomandojmë heqjen kur dhëmbi është çarë nën mish, është shumë i prishur për t’u rindërtuar, ka infeksion që nuk trajtohet ose ka humbur shumë mbështetje kocke. Nëse diku tjetër ju kanë thënë që një dhëmb duhet hequr, me kënaqësi ju japim një mendim të dytë.' },
      { question: 'A më duhet radiografi ose skanim 3D para heqjes?', answer: 'Çdo heqje ka nevojë për imazheri që të shihen rrënjët dhe kocka përreth. Për shumicën e dhëmbëve mjafton grafia panoramike ose një radiografi e zakonshme. Për dhëmballë pjekurie të futura, dhëmbë afër nervit ose sinusit dhe heqje para implanteve, përdorim skanim 3D CT, që tregon saktësisht ku janë rrënjët. Për pacientët tanë skanimi është falas.' },
      { question: 'Çfarë mund të ha pas heqjes?', answer: 'Ushqime të buta dhe të vakëta për një ose dy ditët e para: kos, supë e ftohur, pure patatesh, vezë, makarona. Përtypni nga ana tjetër. Shmangni pijet shumë të nxehta, alkoolin, ushqimet pikante dhe çdo gjë të fortë, kërcitëse ose me fara të vogla që mund të futen në alveolë. Mos pini me kallam ditët e para, sepse thithja mund ta shkëpusë mpiksjen. Shumica kthehen te ushqimi normal brenda pak ditësh.' },
      { question: 'Çfarë është alveoliti?', answer: 'Alveoliti ndodh kur mpiksja e gjakut në alveolë humbet ose nuk formohet mirë, dhe kocka mbetet e zbuluar. Zakonisht shfaqet dy deri në katër ditë pas heqjes, me dhimbje që përkeqësohet në vend që të qetësohet, ndonjëherë me shije të keqe. Duhani, shpëlarja me forcë dhe pirja me kallam e rrisin rrezikun. Nëse mendoni se keni alveolit, na kontaktoni: trajtohet duke pastruar alveolën dhe duke vendosur një mjekim qetësues, dhe dhimbja zakonisht qetësohet shpejt.' },
      { question: 'Kur mund të fluturoj dhe të kthehem në punë?', answer: 'Pas shumicës së heqjeve të thjeshta mund të ktheheni në punë të nesërmen, madje edhe po atë ditë nëse puna nuk është fizikisht e rëndë. Pas heqjeve kirurgjikale ose të dhëmballëve të pjekurisë mund t’ju duhen një ose dy ditë pushim, sidomos nëse ka ënjtje. Para nisjes bëjmë një kontroll të shkurtër dhe ju themi nëse është në rregull të fluturoni.' },
      { question: 'Sa shpejt mund të vendos implant pas heqjes?', answer: 'Varet nga dhëmbi, nga kocka dhe nga prania e infeksionit. Dentisti e vendos kohën bazuar te imazhet dhe te mënyra si shërohet zona, dhe jua shpjegon para heqjes. Pasi vendoset, implanti ka nevojë për rreth gjashtë muaj shërim para kurorës përfundimtare, ndaj trajtimi bëhet në dy udhëtime. Aty ku kocka do të tkurrej shumë, mund të rekomandohet shtim kocke në momentin e heqjes për ta ruajtur zonën.' },
      { question: 'A duhen hequr gjithmonë dhëmballët e pjekurisë?', answer: 'Jo. Dhëmballët e pjekurisë që kanë dalë plotësisht, janë të shëndetshme dhe pastrohen mirë mund të mbeten. E rekomandojmë heqjen kur shkaktojnë infeksione të përsëritura, dhimbje ose ënjtje, kur shtyjnë ose dëmtojnë dhëmbin përpara, kur prishen dhe pastrohen vështirë, ose kur janë të futura në një pozicion që ka gjasa të krijojë probleme. Skanimi 3D tregon sa afër nervit ndodhet një dhëmballë e poshtme para se të planifikohet ndërhyrja.' },
      { question: 'Po nëse kam frikë nga heqja?', answer: 'Është shumë e zakonshme. Na e thoni kur rezervoni, që të planifikojmë më shumë kohë. Ju shpjegojmë çdo hap para se ta bëjmë, kontrollojmë që zona të jetë plotësisht e mpirë dhe biem dakord për një shenjë që ta ndalni procedurën në çdo moment. Shumë pacientë me ankth e shohin që të dish saktësisht çfarë do të ndodhë bën një ndryshim të madh.' },
      { question: 'Çfarë përfshin oferta për heqjen e dhëmbit?', answer: 'Oferta me shkrim përfshin heqjen dhe çdo gjë që i nevojitet rastit tuaj, si qasje kirurgjikale ose shtim kocke, secila në rresht më vete. Nëse heqja është pjesë e një trajtimi me implante ose proteza, plani i plotë tregohet që në fillim, me implantin MegaGen dhe materialin e kurorës. Nuk shtohet asgjë që nuk e kemi diskutuar më parë me ju.' },
    ],
  },
  en: {
    name: 'Tooth Extraction',
    eyebrow: 'General treatments · Albania',
    subtitle: 'Careful removal of damaged, infected or wisdom teeth under local anaesthesia, planned with a 3D scan when needed.',
    lead: 'A safe, carefully planned extraction under local anaesthesia, with a clear plan for what will replace the tooth.',
    kicker: 'Tooth extraction in Tirana, Albania',
    articleTitle: 'Tooth extraction in Tirana: careful, planned and explained',
    intro: [
      'A tooth extraction removes a tooth that can no longer be saved, so pain and infection do not spread to the rest of the mouth.',
      'It is one of the most common procedures in dentistry, but for us it is never routine. A removed tooth leaves a gap, and what happens to that gap affects your bite, the neighbouring teeth and the bone beneath for years.',
      'At Veneer Clinic, tooth extraction and other minor oral surgery cost €100 to €300 depending on complexity, and are done under local anaesthesia within a 1–2 day stay.',
    ],
    sections: [
      {
        title: 'First we try to save the tooth',
        intro: [
          'Before recommending extraction, we assess whether the tooth can be kept. Many teeth that look lost are saved with a root canal, a crown or gum treatment. If that is realistic, we tell you and explain the pros and cons openly. A second opinion is always welcome if you have been told elsewhere that a tooth must come out.',
          'When a tooth really cannot be saved, because it is cracked, too decayed to rebuild, severely infected or has lost its bone support, extraction is the healthiest choice. Leaving it usually means more pain and an infection that keeps spreading.',
        ],
      },
      {
        title: 'Planned, not improvised',
        intro: [
          'Most extractions are straightforward. Some are not: wisdom teeth lying sideways, teeth with curved roots or lower teeth close to the nerve. In these cases a 3D CT scan shows exactly where the roots are before we start, so the extraction is planned around the nerve and sinus instead of discovering them during the procedure.',
          'The scan is only taken when your case needs it, and it is free for patients treated with us.',
        ],
      },
      {
        title: 'We think about the gap now',
        intro: [
          'Every extraction comes with a conversation about what will replace the tooth. The options are an implant, a bridge, a denture or, for some back teeth, leaving the space. If an implant is likely, the tooth is removed in a way that preserves the bone, and where the bone would shrink, socket preservation with a bone graft can be discussed.',
          'MegaGen implants need about six months of healing before the final Made in Germany zirconia crown, so an extraction is often the first step of a two-trip treatment. Your written quote shows every step from the start, so you know what to expect before you sit in the chair.',
        ],
      },
      {
        title: 'How a tooth is extracted',
        intro: ['Most extractions are done in one session under local anaesthesia. The procedure depends on whether the extraction is simple or surgical:'],
        inline: [
          { title: 'Anaesthesia.', text: 'Local anaesthetic is placed around the tooth and given time to work. We check the area before starting and add more if you still feel anything sharp. During the extraction you feel pressure and movement, but not pain. If you are anxious, tell us when you book: we explain each step before doing it and go at your pace.' },
          { title: 'Wisdom teeth.', text: 'Lower wisdom teeth often sit close to the nerve that gives feeling to the lip and chin. The 3D scan shows that distance precisely, so the procedure is planned to stay clear of it. Upper ones can be close to the sinus, and the scan shows that too. Planned this way, the extraction is more predictable and usually heals with less discomfort.' },
          { title: 'Straight afterwards.', text: 'You bite on gauze for a while so a blood clot forms in the socket. That clot is the start of healing, and protecting it is the main goal of the first 24 hours. Before you leave we explain what to eat, how to manage discomfort and which signs mean you should contact us.' },
        ],
      },
      {
        title: 'Types of extraction',
        intro: ['How a tooth is removed depends on its position, its roots and the bone around it:'],
        cards: [
          { title: 'Simple extraction (most common)', text: 'For a tooth fully visible above the gum. It is carefully loosened from the ligament holding it in the socket and removed, preserving the thin bone around it, which matters if an implant follows. Stitches are rarely needed.' },
          { title: 'Surgical extraction (when needed)', text: 'For teeth broken at gum level, buried in bone or with curved roots. A small opening is made in the gum, a little bone may be removed and the tooth is divided so each piece comes out with minimal force. The area is closed with stitches.' },
        ],
        outro: ['Impacted wisdom teeth are planned on a 3D CT scan showing how close the roots are to the nerve, before any procedure.'],
      },
      {
        title: 'After the extraction, before your flight',
        intro: [
          'After most simple extractions you can return to normal activity the next day. After surgical or wisdom tooth extractions, recovery usually takes 3 to 7 days, with swelling peaking around the second day.',
          'If you are travelling from abroad, plan 1 to 2 days in Tirana: the day of the extraction and a short check before you leave. For surgical extractions we tell you in advance whether it is worth staying an extra day.',
        ],
      },
    ],
    stats: [
      { value: '1', label: 'Session in most cases' },
      { value: '3D', label: 'Planning for wisdom teeth' },
      { value: 'Local', label: 'Anaesthesia' },
      { value: '3–7 days', label: 'Recovery' },
    ],
    priceTitle: 'Price',
    priceNote: 'Depending on complexity',
    whatTitle: 'What is a tooth extraction?',
    what: [
      'A tooth extraction is the removal of a tooth from its socket in the bone, under local anaesthesia. It is done when the tooth cannot be saved with a filling, root canal or crown, or when its position, as with many wisdom teeth, causes problems.',
      'It can be simple, when the tooth is fully visible, or surgical, when it is broken, buried in bone or has complex roots. Both are planned with imaging and with a plan for what will replace the tooth.',
    ],
    calloutTitle: 'First we plan what will replace the tooth',
    calloutText:
      'Before a tooth is removed, we talk about the next step: implant, bridge, denture or leaving the space. If an implant is likely, the extraction is planned to preserve the bone it will need.',
    compareTitle: 'Extract, save or replace?',
    compareIntro: 'Extraction is always the last option. Here is how it connects with other treatments:',
    compare: [
      { id: 'oral-surgery', tag: 'This treatment', title: 'Tooth extraction', text: 'When the tooth can no longer be saved. Under local anaesthesia, planned with a 3D scan when needed.' },
      { id: 'root-canal', tag: 'Before extraction', title: 'Root canal', text: 'Often saves an infected tooth that looks lost, without removing it at all.' },
      { id: 'implant-megagen', tag: 'After extraction', title: 'Dental implant', text: 'The closest replacement to a natural tooth, which also preserves the bone beneath.' },
    ],
    fitTitle: 'When is extraction the right choice?',
    fitIntro: 'We recommend extraction only when saving the tooth is not a real option. Usually this is the case if you have:',
    fit: [
      'A tooth so decayed or broken it can no longer be rebuilt with a filling, root canal or crown',
      'An infected tooth where a root canal is not possible or has failed',
      'Impacted or partially erupted wisdom teeth causing pain, swelling or repeated infections',
      'Advanced gum disease, with teeth that move and cannot be stabilised',
      'Teeth that need to come out as part of an implant plan, including All-on-4 or All-on-6',
      'Crowded teeth, where removing one creates space for orthodontic treatment',
    ],
    fitNote:
      'If a root canal, a crown or gum treatment can keep the tooth, we tell you first. Extraction is permanent, so it is always the last option, not the quickest.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'Most extractions are done in one session, and you leave knowing exactly how to care for the area:',
    steps: [
      { title: 'Assessment and imaging', text: 'We examine the tooth and the X-ray. For impacted wisdom teeth or teeth near the nerve, a 3D CT scan is taken, free with your treatment.' },
      { title: 'Plan and replacement', text: 'We explain why the tooth needs to come out, how it will be removed and what can replace it, all written in the quote.' },
      { title: 'Local anaesthesia', text: 'The area is fully numbed and checked before we start. You feel pressure, not pain.' },
      { title: 'The extraction', text: 'The tooth is loosened and removed carefully, preserving the surrounding bone and gum. Surgical cases are closed with stitches.' },
      { title: 'Aftercare', text: 'You bite on gauze to stop the bleeding, and we explain how to care for the socket over the following days and when to contact us.' },
    ],
    whyBandTitle: 'Why Veneer Clinic for a tooth extraction?',
    whyBandText:
      'We try to save the tooth first and remove it only when that is the right decision. When extraction is needed, it is well planned, carefully done and linked to a clear plan for replacing the tooth. The price we give you is the price you pay.',
    caseText: 'A carefully planned extraction',
    faq: [
      { question: 'How much does a tooth extraction cost?', answer: 'Tooth extraction and minor oral surgery cost €100 to €300 depending on complexity: a simple extraction is at the lower end, while impacted wisdom teeth and surgical extractions are higher. The 3D scan, when needed, is free. The exact price is confirmed after your panoramic X-ray.' },
      { question: 'Does a tooth extraction hurt?', answer: 'The extraction itself should not hurt. The area is numbed with local anaesthetic and checked before we start. You will feel pressure and movement, which can feel strange, but not sharp pain. If you feel anything sharp, tell us and we add more anaesthetic. Once it wears off, some soreness for a few days is normal and well controlled with the painkillers we recommend. Surgical and wisdom tooth extractions usually cause more discomfort.' },
      { question: 'How long does an extraction take?', answer: 'A simple extraction is usually quick once the area is numb. Most of the appointment goes on assessment, anaesthesia and explaining aftercare. Surgical extractions and impacted wisdom teeth take longer, usually 30 to 90 minutes in total, depending on the position of the tooth and roots.' },
      { question: 'Can the tooth be saved?', answer: 'Often, yes, and we always check this first. A root canal, crown or gum treatment can save many teeth that look lost. We recommend extraction when the tooth is cracked below the gum, too decayed to rebuild, has an untreatable infection or has lost too much bone support. If you have been told elsewhere that a tooth must come out, we are happy to give a second opinion.' },
      { question: 'Do I need an X-ray or 3D scan before an extraction?', answer: 'Every extraction needs imaging to see the roots and surrounding bone. For most teeth a panoramic or standard X-ray is enough. For impacted wisdom teeth, teeth near the nerve or sinus and extractions before implants, we use a 3D CT scan, which shows exactly where the roots are. For our patients the scan is free.' },
      { question: 'What can I eat after an extraction?', answer: 'Soft, lukewarm foods for the first day or two: yoghurt, cooled soup, mashed potato, eggs, pasta. Chew on the other side. Avoid very hot drinks, alcohol, spicy food and anything hard, crunchy or with small seeds that can get into the socket. Do not drink through a straw for the first days, as suction can dislodge the clot. Most people are back to normal food within a few days.' },
      { question: 'What is dry socket?', answer: 'Dry socket happens when the blood clot in the socket is lost or does not form properly, leaving the bone exposed. It usually appears two to four days after the extraction, with pain that gets worse instead of better, sometimes with a bad taste. Smoking, vigorous rinsing and drinking through a straw increase the risk. If you think you have it, contact us: it is treated by cleaning the socket and placing a soothing dressing, and the pain usually settles quickly.' },
      { question: 'When can I fly and go back to work?', answer: 'After most simple extractions you can go back to work the next day, even the same day if your work is not physically demanding. After surgical or wisdom tooth extractions you may need a day or two off, especially if there is swelling. Before you leave we do a short check and tell you whether it is fine to fly.' },
      { question: 'How soon can I have an implant after an extraction?', answer: 'It depends on the tooth, the bone and whether there is infection. The dentist decides the timing based on the imaging and how the area heals, and explains it before the extraction. Once placed, the implant needs about six months of healing before the final crown, so treatment is done over two trips. Where the bone would shrink a lot, a bone graft at the time of extraction may be recommended to preserve the site.' },
      { question: 'Do wisdom teeth always need to come out?', answer: 'No. Wisdom teeth that have fully erupted, are healthy and can be cleaned well can stay. We recommend removal when they cause repeated infections, pain or swelling, push on or damage the tooth in front, decay and are hard to clean, or are impacted in a position likely to cause problems. The 3D scan shows how close a lower wisdom tooth is to the nerve before the procedure is planned.' },
      { question: 'What if I am afraid of the extraction?', answer: 'That is very common. Tell us when you book so we can plan more time. We explain each step before we do it, check the area is completely numb and agree a signal so you can stop the procedure at any moment. Many anxious patients find that knowing exactly what will happen makes a big difference.' },
      { question: 'What does the quote for an extraction include?', answer: 'Your written quote includes the extraction and everything your case needs, such as surgical access or a bone graft, each on its own line. If the extraction is part of an implant or denture treatment, the full plan is shown from the start, with the MegaGen implant and the crown material. Nothing is added that we have not discussed with you first.' },
    ],
  },
  de: {
    name: 'Zahnextraktion',
    eyebrow: 'Allgemeine Behandlungen · Albanien',
    subtitle: 'Schonende Entfernung beschädigter, entzündeter oder Weisheitszähne unter örtlicher Betäubung, bei Bedarf mit 3D-Scan geplant.',
    lead: 'Eine sichere, sorgfältig geplante Extraktion unter örtlicher Betäubung, mit einem klaren Plan, was den Zahn ersetzen wird.',
    kicker: 'Zahnextraktion in Tirana, Albanien',
    articleTitle: 'Zahnextraktion in Tirana: schonend, geplant und erklärt',
    intro: [
      'Eine Zahnextraktion entfernt einen Zahn, der nicht mehr zu retten ist, damit sich Schmerz und Entzündung nicht im übrigen Mund ausbreiten.',
      'Sie ist einer der häufigsten Eingriffe der Zahnmedizin, für uns aber nie Routine. Ein entfernter Zahn hinterlässt eine Lücke, und was mit dieser Lücke geschieht, beeinflusst über Jahre Biss, Nachbarzähne und den Knochen darunter.',
      'In der Veneer Clinic kosten Zahnextraktion und andere kleine oralchirurgische Eingriffe je nach Aufwand 100 bis 300 € und erfolgen unter örtlicher Betäubung innerhalb eines Aufenthalts von 1–2 Tagen.',
    ],
    sections: [
      {
        title: 'Zuerst versuchen wir, den Zahn zu retten',
        intro: [
          'Bevor wir eine Extraktion empfehlen, prüfen wir, ob der Zahn erhalten werden kann. Viele scheinbar verlorene Zähne lassen sich mit Wurzelbehandlung, Krone oder Zahnfleischbehandlung retten. Ist das realistisch, sagen wir es Ihnen und erklären offen Vor- und Nachteile. Eine Zweitmeinung ist immer willkommen, wenn man Ihnen anderswo gesagt hat, der Zahn müsse raus.',
          'Ist ein Zahn wirklich nicht zu retten, weil er gerissen, zu stark zerstört, schwer entzündet ist oder seinen Knochenhalt verloren hat, ist die Extraktion die gesündeste Wahl. Ihn zu belassen bedeutet meist mehr Schmerzen und eine sich ausbreitende Entzündung.',
        ],
      },
      {
        title: 'Geplant, nicht improvisiert',
        intro: [
          'Die meisten Extraktionen sind unkompliziert. Manche nicht: quer liegende Weisheitszähne, Zähne mit gekrümmten Wurzeln oder untere Zähne nahe am Nerv. Dann zeigt ein 3D-Scan vor Beginn genau, wo die Wurzeln liegen, sodass die Extraktion um Nerv und Kieferhöhle herum geplant wird, statt sie während des Eingriffs zu entdecken.',
          'Der Scan wird nur gemacht, wenn Ihr Fall ihn erfordert, und ist für Patienten in Behandlung bei uns kostenlos.',
        ],
      },
      {
        title: 'Wir denken jetzt schon an die Lücke',
        intro: [
          'Zu jeder Extraktion gehört ein Gespräch darüber, was den Zahn ersetzen wird. Die Möglichkeiten sind Implantat, Brücke, Prothese oder bei manchen Seitenzähnen das Belassen der Lücke. Ist ein Implantat wahrscheinlich, wird der Zahn knochenschonend entfernt, und wo der Knochen schwinden würde, kann ein Alveolenerhalt mit Knochenaufbau besprochen werden.',
          'MegaGen-Implantate brauchen etwa sechs Monate Heilung vor der definitiven Zirkonkrone Made in Germany, daher ist die Extraktion oft der erste Schritt einer Behandlung in zwei Reisen. Ihr schriftliches Angebot zeigt jeden Schritt von Anfang an, damit Sie wissen, was Sie erwartet, bevor Sie auf dem Stuhl sitzen.',
        ],
      },
      {
        title: 'So wird ein Zahn entfernt',
        intro: ['Die meisten Extraktionen erfolgen in einer Sitzung unter örtlicher Betäubung. Der Ablauf hängt davon ab, ob sie einfach oder chirurgisch ist:'],
        inline: [
          { title: 'Betäubung.', text: 'Das Lokalanästhetikum wird um den Zahn gesetzt und braucht etwas Zeit. Wir prüfen den Bereich vor Beginn und betäuben nach, wenn Sie noch etwas Scharfes spüren. Während der Extraktion spüren Sie Druck und Bewegung, aber keinen Schmerz. Sind Sie ängstlich, sagen Sie es bei der Buchung: Wir erklären jeden Schritt vorher und gehen in Ihrem Tempo vor.' },
          { title: 'Weisheitszähne.', text: 'Untere Weisheitszähne liegen oft nahe am Nerv, der Lippe und Kinn Gefühl gibt. Der 3D-Scan zeigt diesen Abstand genau, sodass der Eingriff so geplant wird, dass er Abstand hält. Obere können nahe an der Kieferhöhle liegen, auch das zeigt der Scan. So geplant ist die Extraktion vorhersehbarer und heilt meist mit weniger Beschwerden.' },
          { title: 'Direkt danach.', text: 'Sie beißen eine Weile auf einen Tupfer, damit sich in der Alveole ein Blutgerinnsel bildet. Dieses Gerinnsel ist der Beginn der Heilung, und es zu schützen ist das Hauptziel der ersten 24 Stunden. Vor dem Gehen erklären wir, was Sie essen dürfen, wie Sie Beschwerden lindern und bei welchen Zeichen Sie uns kontaktieren sollten.' },
        ],
      },
      {
        title: 'Arten der Extraktion',
        intro: ['Wie ein Zahn entfernt wird, hängt von seiner Lage, seinen Wurzeln und dem umgebenden Knochen ab:'],
        cards: [
          { title: 'Einfache Extraktion (am häufigsten)', text: 'Für einen vollständig sichtbaren Zahn über dem Zahnfleisch. Er wird vorsichtig vom Halteapparat gelöst und entfernt, wobei der dünne Knochen ringsum erhalten bleibt, was wichtig ist, wenn ein Implantat folgt. Nähte sind selten nötig.' },
          { title: 'Chirurgische Extraktion (bei Bedarf)', text: 'Für auf Zahnfleischhöhe abgebrochene, im Knochen liegende Zähne oder solche mit gekrümmten Wurzeln. Eine kleine Öffnung im Zahnfleisch, eventuell etwas Knochenabtrag, und der Zahn wird geteilt, damit jedes Stück mit minimaler Kraft herauskommt. Der Bereich wird vernäht.' },
        ],
        outro: ['Verlagerte Weisheitszähne werden auf einem 3D-Scan geplant, der zeigt, wie nah die Wurzeln am Nerv liegen, vor jedem Eingriff.'],
      },
      {
        title: 'Nach der Extraktion, vor dem Rückflug',
        intro: [
          'Nach den meisten einfachen Extraktionen können Sie am nächsten Tag wieder normal aktiv sein. Nach chirurgischen oder Weisheitszahnextraktionen dauert die Erholung meist 3 bis 7 Tage, mit der stärksten Schwellung um den zweiten Tag.',
          'Reisen Sie aus dem Ausland an, planen Sie 1 bis 2 Tage in Tirana ein: den Tag der Extraktion und eine kurze Kontrolle vor der Abreise. Bei chirurgischen Extraktionen sagen wir Ihnen vorher, ob sich ein zusätzlicher Tag lohnt.',
        ],
      },
    ],
    stats: [
      { value: '1', label: 'Sitzung in den meisten Fällen' },
      { value: '3D', label: 'Planung für Weisheitszähne' },
      { value: 'Lokal', label: 'Betäubung' },
      { value: '3–7 Tage', label: 'Erholung' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Je nach Aufwand',
    whatTitle: 'Was ist eine Zahnextraktion?',
    what: [
      'Eine Zahnextraktion ist die Entfernung eines Zahns aus seinem Knochenfach unter örtlicher Betäubung. Sie erfolgt, wenn der Zahn nicht mit Füllung, Wurzelbehandlung oder Krone zu retten ist oder wenn seine Lage, wie bei vielen Weisheitszähnen, Probleme verursacht.',
      'Sie kann einfach sein, wenn der Zahn vollständig sichtbar ist, oder chirurgisch, wenn er abgebrochen, im Knochen verlagert ist oder komplexe Wurzeln hat. Beide werden mit Bildgebung und einem Plan für den Zahnersatz geplant.',
    ],
    calloutTitle: 'Zuerst planen wir, was den Zahn ersetzt',
    calloutText:
      'Bevor ein Zahn entfernt wird, sprechen wir über den nächsten Schritt: Implantat, Brücke, Prothese oder Belassen der Lücke. Ist ein Implantat wahrscheinlich, wird die Extraktion so geplant, dass der benötigte Knochen erhalten bleibt.',
    compareTitle: 'Entfernen, retten oder ersetzen?',
    compareIntro: 'Die Extraktion ist immer die letzte Option. So hängt sie mit anderen Behandlungen zusammen:',
    compare: [
      { id: 'oral-surgery', tag: 'Diese Behandlung', title: 'Zahnextraktion', text: 'Wenn der Zahn nicht mehr zu retten ist. Unter örtlicher Betäubung, bei Bedarf mit 3D-Scan geplant.' },
      { id: 'root-canal', tag: 'Vor der Extraktion', title: 'Wurzelbehandlung', text: 'Rettet oft einen entzündeten Zahn, der verloren scheint, ganz ohne ihn zu entfernen.' },
      { id: 'implant-megagen', tag: 'Nach der Extraktion', title: 'Zahnimplantat', text: 'Der natürlichste Zahnersatz, der auch den Knochen darunter erhält.' },
    ],
    fitTitle: 'Wann ist eine Extraktion richtig?',
    fitIntro: 'Wir empfehlen die Extraktion nur, wenn die Rettung des Zahns keine echte Option ist. Meist ist das der Fall bei:',
    fit: [
      'Einem Zahn, der so zerstört oder gebrochen ist, dass er mit Füllung, Wurzelbehandlung oder Krone nicht mehr aufzubauen ist',
      'Einem entzündeten Zahn, bei dem eine Wurzelbehandlung nicht möglich ist oder versagt hat',
      'Verlagerten oder teilweise durchgebrochenen Weisheitszähnen mit Schmerzen, Schwellung oder wiederkehrenden Entzündungen',
      'Fortgeschrittener Parodontitis mit beweglichen Zähnen, die sich nicht stabilisieren lassen',
      'Zähnen, die im Rahmen eines Implantatplans entfernt werden müssen, auch bei All-on-4 oder All-on-6',
      'Engstand, bei dem die Entfernung eines Zahns Platz für eine kieferorthopädische Behandlung schafft',
    ],
    fitNote:
      'Kann eine Wurzelbehandlung, eine Krone oder eine Zahnfleischbehandlung den Zahn erhalten, sagen wir es Ihnen zuerst. Eine Extraktion ist endgültig, daher immer die letzte Option, nicht die schnellste.',
    stepsTitle: 'So läuft die Behandlung ab',
    stepsIntro: 'Die meisten Extraktionen erfolgen in einer Sitzung, und Sie wissen danach genau, wie Sie den Bereich pflegen:',
    steps: [
      { title: 'Untersuchung und Bildgebung', text: 'Wir untersuchen den Zahn und das Röntgenbild. Bei verlagerten Weisheitszähnen oder Zähnen nahe am Nerv wird ein 3D-Scan gemacht, kostenlos mit Ihrer Behandlung.' },
      { title: 'Plan und Ersatz', text: 'Wir erklären, warum der Zahn raus muss, wie er entfernt wird und was ihn ersetzen kann, alles schriftlich im Angebot.' },
      { title: 'Örtliche Betäubung', text: 'Der Bereich wird vollständig betäubt und vor Beginn geprüft. Sie spüren Druck, keinen Schmerz.' },
      { title: 'Die Extraktion', text: 'Der Zahn wird vorsichtig gelöst und entfernt, Knochen und Zahnfleisch ringsum werden geschont. Chirurgische Fälle werden vernäht.' },
      { title: 'Nachsorge', text: 'Sie beißen auf einen Tupfer, um die Blutung zu stillen, und wir erklären, wie Sie die Alveole in den Folgetagen pflegen und wann Sie uns kontaktieren sollten.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für eine Zahnextraktion?',
    whyBandText:
      'Wir versuchen zuerst, den Zahn zu retten, und entfernen ihn nur, wenn das die richtige Entscheidung ist. Ist eine Extraktion nötig, wird sie gut geplant, schonend durchgeführt und mit einem klaren Plan für den Zahnersatz verbunden. Der Preis, den wir nennen, ist der Preis, den Sie zahlen.',
    caseText: 'Eine sorgfältig geplante Extraktion',
    faq: [
      { question: 'Was kostet eine Zahnextraktion?', answer: 'Zahnextraktion und kleine oralchirurgische Eingriffe kosten je nach Aufwand 100 bis 300 €: Eine einfache Extraktion liegt am unteren Ende, verlagerte Weisheitszähne und chirurgische Extraktionen höher. Der 3D-Scan ist bei Bedarf kostenlos. Der genaue Preis wird nach Ihrem Panoramaröntgen bestätigt.' },
      { question: 'Tut eine Zahnextraktion weh?', answer: 'Die Extraktion selbst sollte nicht wehtun. Der Bereich wird örtlich betäubt und vor Beginn geprüft. Sie spüren Druck und Bewegung, was sich seltsam anfühlen kann, aber keinen scharfen Schmerz. Spüren Sie etwas Scharfes, sagen Sie es und wir betäuben nach. Nach Abklingen ist etwas Wundschmerz für einige Tage normal und mit den empfohlenen Schmerzmitteln gut zu kontrollieren. Chirurgische und Weisheitszahnextraktionen verursachen meist mehr Beschwerden.' },
      { question: 'Wie lange dauert eine Extraktion?', answer: 'Eine einfache Extraktion geht meist schnell, sobald der Bereich betäubt ist. Der größte Teil des Termins entfällt auf Untersuchung, Betäubung und Erklärung der Nachsorge. Chirurgische Extraktionen und verlagerte Weisheitszähne dauern länger, meist insgesamt 30 bis 90 Minuten, je nach Lage von Zahn und Wurzeln.' },
      { question: 'Kann der Zahn gerettet werden?', answer: 'Oft ja, und das prüfen wir immer zuerst. Wurzelbehandlung, Krone oder Zahnfleischbehandlung können viele scheinbar verlorene Zähne retten. Wir empfehlen die Extraktion, wenn der Zahn unter dem Zahnfleisch gerissen, zu zerstört für einen Aufbau ist, eine nicht behandelbare Entzündung hat oder zu viel Knochenhalt verloren hat. Hat man Ihnen anderswo gesagt, ein Zahn müsse raus, geben wir gern eine Zweitmeinung.' },
      { question: 'Brauche ich vor der Extraktion ein Röntgenbild oder einen 3D-Scan?', answer: 'Jede Extraktion braucht Bildgebung, um Wurzeln und umliegenden Knochen zu sehen. Für die meisten Zähne genügt ein Panorama- oder normales Röntgenbild. Bei verlagerten Weisheitszähnen, Zähnen nahe Nerv oder Kieferhöhle und Extraktionen vor Implantaten nutzen wir einen 3D-Scan, der genau zeigt, wo die Wurzeln liegen. Für unsere Patienten ist der Scan kostenlos.' },
      { question: 'Was darf ich nach der Extraktion essen?', answer: 'Weiche, lauwarme Kost für die ersten ein bis zwei Tage: Joghurt, abgekühlte Suppe, Kartoffelpüree, Eier, Nudeln. Kauen Sie auf der anderen Seite. Meiden Sie sehr heiße Getränke, Alkohol, scharfes Essen und alles Harte, Knusprige oder mit kleinen Körnern, die in die Alveole gelangen können. Trinken Sie die ersten Tage nicht mit Strohhalm, denn das Saugen kann das Gerinnsel lösen. Die meisten essen nach wenigen Tagen wieder normal.' },
      { question: 'Was ist eine trockene Alveole?', answer: 'Eine trockene Alveole entsteht, wenn das Blutgerinnsel verloren geht oder sich nicht richtig bildet und der Knochen freiliegt. Sie zeigt sich meist zwei bis vier Tage nach der Extraktion, mit Schmerzen, die stärker statt schwächer werden, manchmal mit schlechtem Geschmack. Rauchen, kräftiges Spülen und Trinken mit Strohhalm erhöhen das Risiko. Vermuten Sie sie, kontaktieren Sie uns: Die Alveole wird gereinigt und mit einer lindernden Einlage versorgt, und der Schmerz lässt meist schnell nach.' },
      { question: 'Wann kann ich fliegen und wieder arbeiten?', answer: 'Nach den meisten einfachen Extraktionen können Sie am nächsten Tag arbeiten, bei körperlich leichter Arbeit sogar am selben Tag. Nach chirurgischen oder Weisheitszahnextraktionen brauchen Sie eventuell ein bis zwei Tage Pause, vor allem bei Schwellung. Vor der Abreise machen wir eine kurze Kontrolle und sagen Ihnen, ob Sie fliegen können.' },
      { question: 'Wie bald kann nach einer Extraktion ein Implantat gesetzt werden?', answer: 'Das hängt von Zahn, Knochen und einer eventuellen Entzündung ab. Der Zahnarzt bestimmt den Zeitpunkt anhand der Bildgebung und der Heilung und erklärt ihn vor der Extraktion. Einmal gesetzt, braucht das Implantat etwa sechs Monate Heilung vor der definitiven Krone, daher erfolgt die Behandlung in zwei Reisen. Wo der Knochen stark schwinden würde, kann ein Knochenaufbau bei der Extraktion empfohlen werden, um die Stelle zu erhalten.' },
      { question: 'Müssen Weisheitszähne immer raus?', answer: 'Nein. Vollständig durchgebrochene, gesunde und gut zu reinigende Weisheitszähne können bleiben. Wir empfehlen die Entfernung bei wiederkehrenden Entzündungen, Schmerzen oder Schwellung, wenn sie gegen den Nachbarzahn drücken oder ihn schädigen, kariös und schwer zu reinigen sind oder in einer Lage verlagert sind, die wahrscheinlich Probleme macht. Der 3D-Scan zeigt vor der Planung, wie nah ein unterer Weisheitszahn am Nerv liegt.' },
      { question: 'Was, wenn ich Angst vor der Extraktion habe?', answer: 'Das ist sehr häufig. Sagen Sie es bei der Buchung, damit wir mehr Zeit einplanen. Wir erklären jeden Schritt vorher, prüfen, dass der Bereich vollständig betäubt ist, und vereinbaren ein Zeichen, mit dem Sie jederzeit unterbrechen können. Viele ängstliche Patienten merken, dass es einen großen Unterschied macht, genau zu wissen, was passiert.' },
      { question: 'Was umfasst das Angebot für eine Extraktion?', answer: 'Ihr schriftliches Angebot umfasst die Extraktion und alles, was Ihr Fall braucht, etwa chirurgischen Zugang oder Knochenaufbau, jeweils als eigene Position. Ist die Extraktion Teil einer Implantat- oder Prothesenbehandlung, wird der ganze Plan von Anfang an gezeigt, mit MegaGen-Implantat und Kronenmaterial. Es kommt nichts hinzu, was wir nicht vorher mit Ihnen besprochen haben.' },
    ],
  },
  it: {
    name: 'Estrazione dentale',
    eyebrow: 'Trattamenti generali · Albania',
    subtitle: 'Rimozione accurata di denti danneggiati, infetti o del giudizio in anestesia locale, pianificata con TAC 3D quando serve.',
    lead: 'Un’estrazione sicura e pianificata con cura, in anestesia locale, con un piano chiaro per ciò che sostituirà il dente.',
    kicker: 'Estrazione dentale a Tirana, Albania',
    articleTitle: 'Estrazione dentale a Tirana: accurata, pianificata e spiegata',
    intro: [
      'L’estrazione dentale rimuove un dente che non si può più salvare, perché dolore e infezione non si diffondano al resto della bocca.',
      'È uno degli interventi più comuni in odontoiatria, ma per noi non è mai routine. Un dente estratto lascia uno spazio, e ciò che succede a quello spazio influisce per anni sul morso, sui denti vicini e sull’osso sottostante.',
      'Alla Veneer Clinic, estrazioni e altri piccoli interventi di chirurgia orale costano da 100 a 300 € a seconda della complessità, e si eseguono in anestesia locale in un soggiorno di 1–2 giorni.',
    ],
    sections: [
      {
        title: 'Prima proviamo a salvare il dente',
        intro: [
          'Prima di consigliare l’estrazione, valutiamo se il dente si può conservare. Molti denti che sembrano persi si salvano con una cura canalare, una corona o un trattamento gengivale. Se è realistico, te lo diciamo e spieghiamo apertamente pro e contro. Un secondo parere è sempre benvenuto se altrove ti hanno detto che il dente va tolto.',
          'Quando un dente davvero non si salva, perché è fratturato, troppo cariato per essere ricostruito, gravemente infetto o ha perso il sostegno osseo, l’estrazione è la scelta più sana. Lasciarlo di solito significa più dolore e un’infezione che continua a diffondersi.',
        ],
      },
      {
        title: 'Pianificata, non improvvisata',
        intro: [
          'La maggior parte delle estrazioni è semplice. Alcune no: denti del giudizio coricati, denti con radici curve o denti inferiori vicini al nervo. In questi casi una TAC 3D mostra esattamente dove sono le radici prima di iniziare, così l’estrazione si pianifica tenendo conto di nervo e seno, invece di scoprirli durante l’intervento.',
          'La scansione si fa solo quando il tuo caso la richiede, ed è gratuita per i pazienti in trattamento da noi.',
        ],
      },
      {
        title: 'Pensiamo subito allo spazio',
        intro: [
          'Ogni estrazione è accompagnata da una conversazione su cosa sostituirà il dente. Le opzioni sono impianto, ponte, protesi o, per alcuni denti posteriori, lasciare lo spazio. Se è probabile un impianto, il dente si estrae preservando l’osso, e dove l’osso si ridurrebbe si può valutare la preservazione dell’alveolo con un innesto osseo.',
          'Gli impianti MegaGen hanno bisogno di circa sei mesi di guarigione prima della corona definitiva in zirconia Made in Germany, quindi l’estrazione è spesso il primo passo di un trattamento in due viaggi. Il preventivo scritto mostra ogni passo fin dall’inizio, così sai cosa ti aspetta prima di sederti sulla poltrona.',
        ],
      },
      {
        title: 'Come si estrae un dente',
        intro: ['La maggior parte delle estrazioni si fa in una seduta in anestesia locale. La procedura dipende dal fatto che l’estrazione sia semplice o chirurgica:'],
        inline: [
          { title: 'Anestesia.', text: 'L’anestetico locale si applica attorno al dente e gli si dà il tempo di agire. Controlliamo la zona prima di iniziare e ne aggiungiamo se senti ancora qualcosa di acuto. Durante l’estrazione senti pressione e movimento, ma non dolore. Se sei ansioso, dillo quando prenoti: ti spieghiamo ogni passo prima di farlo e andiamo al tuo ritmo.' },
          { title: 'Denti del giudizio.', text: 'I denti del giudizio inferiori spesso si trovano vicino al nervo che dà sensibilità a labbro e mento. La TAC 3D mostra con precisione questa distanza, così l’intervento si pianifica per restarne lontano. Quelli superiori possono essere vicini al seno, e la scansione mostra anche questo. Pianificata così, l’estrazione è più prevedibile e di solito guarisce con meno fastidio.' },
          { title: 'Subito dopo.', text: 'Mordi una garza per un po’ perché nell’alveolo si formi il coagulo. Quel coagulo è l’inizio della guarigione, e proteggerlo è l’obiettivo principale delle prime 24 ore. Prima di uscire ti spieghiamo cosa mangiare, come gestire il fastidio e quali segnali significano che devi contattarci.' },
        ],
      },
      {
        title: 'Tipi di estrazione',
        intro: ['Il modo in cui si estrae un dente dipende dalla sua posizione, dalle radici e dall’osso attorno:'],
        cards: [
          { title: 'Estrazione semplice (la più comune)', text: 'Per un dente completamente visibile sopra la gengiva. Si stacca con cura dal legamento che lo tiene nell’alveolo e si rimuove, preservando l’osso sottile attorno, importante se poi si inserisce un impianto. Raramente servono punti.' },
          { title: 'Estrazione chirurgica (quando serve)', text: 'Per denti rotti a livello della gengiva, inclusi nell’osso o con radici curve. Si fa una piccola apertura nella gengiva, a volte si rimuove un po’ d’osso e il dente si divide perché ogni parte esca con forza minima. La zona si chiude con punti.' },
        ],
        outro: ['I denti del giudizio inclusi si pianificano su una TAC 3D che mostra quanto le radici sono vicine al nervo, prima di qualsiasi intervento.'],
      },
      {
        title: 'Dopo l’estrazione, prima del volo',
        intro: [
          'Dopo la maggior parte delle estrazioni semplici puoi tornare alle attività normali il giorno dopo. Dopo estrazioni chirurgiche o dei denti del giudizio, il recupero richiede di solito 3–7 giorni, con il gonfiore massimo verso il secondo giorno.',
          'Se arrivi dall’estero, prevedi 1–2 giorni a Tirana: il giorno dell’estrazione e un breve controllo prima della partenza. Per le estrazioni chirurgiche ti diciamo in anticipo se conviene restare un giorno in più.',
        ],
      },
    ],
    stats: [
      { value: '1', label: 'Seduta nella maggior parte dei casi' },
      { value: '3D', label: 'Pianificazione per i denti del giudizio' },
      { value: 'Locale', label: 'Anestesia' },
      { value: '3–7 giorni', label: 'Recupero' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'In base alla complessità',
    whatTitle: 'Cos’è l’estrazione dentale?',
    what: [
      'L’estrazione dentale è la rimozione di un dente dal suo alveolo nell’osso, in anestesia locale. Si esegue quando il dente non si può salvare con otturazione, cura canalare o corona, o quando la sua posizione, come per molti denti del giudizio, crea problemi.',
      'Può essere semplice, quando il dente è completamente visibile, o chirurgica, quando è rotto, incluso nell’osso o ha radici complesse. Entrambe si pianificano con le immagini e con un piano per ciò che sostituirà il dente.',
    ],
    calloutTitle: 'Prima pianifichiamo cosa sostituirà il dente',
    calloutText:
      'Prima di estrarre un dente, parliamo del passo successivo: impianto, ponte, protesi o lasciare lo spazio. Se è probabile un impianto, l’estrazione si pianifica per preservare l’osso di cui avrà bisogno.',
    compareTitle: 'Estrarre, salvare o sostituire?',
    compareIntro: 'L’estrazione è sempre l’ultima opzione. Ecco come si collega agli altri trattamenti:',
    compare: [
      { id: 'oral-surgery', tag: 'Questo trattamento', title: 'Estrazione dentale', text: 'Quando il dente non si salva più. In anestesia locale, pianificata con TAC 3D quando serve.' },
      { id: 'root-canal', tag: 'Prima dell’estrazione', title: 'Cura canalare', text: 'Spesso salva un dente infetto che sembra perso, senza estrarlo affatto.' },
      { id: 'implant-megagen', tag: 'Dopo l’estrazione', title: 'Impianto dentale', text: 'La sostituzione più vicina al dente naturale, che preserva anche l’osso sottostante.' },
    ],
    fitTitle: 'Quando l’estrazione è la scelta giusta?',
    fitIntro: 'Consigliamo l’estrazione solo quando salvare il dente non è un’opzione reale. Di solito succede se hai:',
    fit: [
      'Un dente così cariato o rotto che non si ricostruisce più con otturazione, cura canalare o corona',
      'Un dente infetto in cui la cura canalare non è possibile o è fallita',
      'Denti del giudizio inclusi o semi-erotti che causano dolore, gonfiore o infezioni ripetute',
      'Malattia gengivale avanzata, con denti che si muovono e non si stabilizzano',
      'Denti da estrarre come parte di un piano implantare, compresi All-on-4 o All-on-6',
      'Denti affollati, dove togliere un dente crea spazio per un trattamento ortodontico',
    ],
    fitNote:
      'Se una cura canalare, una corona o un trattamento gengivale possono conservare il dente, te lo diciamo per primo. L’estrazione è definitiva, quindi è sempre l’ultima opzione, non la più rapida.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'La maggior parte delle estrazioni si fa in una seduta, ed esci sapendo esattamente come curare la zona:',
    steps: [
      { title: 'Valutazione e immagini', text: 'Esaminiamo il dente e la radiografia. Per denti del giudizio inclusi o denti vicini al nervo si fa una TAC 3D, gratuita con il tuo trattamento.' },
      { title: 'Piano e sostituzione', text: 'Ti spieghiamo perché il dente va estratto, come verrà rimosso e cosa può sostituirlo, tutto scritto nel preventivo.' },
      { title: 'Anestesia locale', text: 'La zona viene anestetizzata completamente e controllata prima di iniziare. Senti pressione, non dolore.' },
      { title: 'L’estrazione', text: 'Il dente si stacca e si rimuove con cura, preservando osso e gengiva attorno. I casi chirurgici si chiudono con punti.' },
      { title: 'Cure post-estrazione', text: 'Mordi una garza per fermare il sanguinamento, e ti spieghiamo come curare l’alveolo nei giorni successivi e quando contattarci.' },
    ],
    whyBandTitle: 'Perché Veneer Clinic per un’estrazione?',
    whyBandText:
      'Prima proviamo a salvare il dente e lo estraiamo solo quando è la decisione giusta. Quando l’estrazione serve, è ben pianificata, eseguita con cura e collegata a un piano chiaro per sostituire il dente. Il prezzo che ti diamo è il prezzo che paghi.',
    caseText: 'Un’estrazione pianificata con cura',
    faq: [
      { question: 'Quanto costa un’estrazione dentale?', answer: 'Estrazioni e piccoli interventi di chirurgia orale costano da 100 a 300 € a seconda della complessità: un’estrazione semplice è nella fascia bassa, mentre denti del giudizio inclusi ed estrazioni chirurgiche sono più alti. La TAC 3D, quando serve, è gratuita. Il prezzo esatto si conferma dopo la tua panoramica.' },
      { question: 'L’estrazione fa male?', answer: 'L’estrazione in sé non dovrebbe fare male. La zona viene anestetizzata e controllata prima di iniziare. Sentirai pressione e movimento, che possono sembrare strani, ma non dolore acuto. Se senti qualcosa di acuto, dillo e aggiungiamo anestetico. Quando l’effetto passa, un po’ di dolore per qualche giorno è normale e si controlla bene con gli antidolorifici che consigliamo. Le estrazioni chirurgiche e dei denti del giudizio di solito danno più fastidio.' },
      { question: 'Quanto dura un’estrazione?', answer: 'Un’estrazione semplice di solito è rapida una volta anestetizzata la zona. Gran parte dell’appuntamento va in valutazione, anestesia e spiegazione delle cure successive. Le estrazioni chirurgiche e i denti del giudizio inclusi richiedono di più, di solito 30–90 minuti in totale, a seconda della posizione di dente e radici.' },
      { question: 'Il dente si può salvare?', answer: 'Spesso sì, e lo verifichiamo sempre per primo. Una cura canalare, una corona o un trattamento gengivale possono salvare molti denti che sembrano persi. Consigliamo l’estrazione quando il dente è fratturato sotto la gengiva, troppo cariato per ricostruirlo, ha un’infezione non trattabile o ha perso troppo sostegno osseo. Se altrove ti hanno detto che un dente va tolto, ti diamo volentieri un secondo parere.' },
      { question: 'Serve una radiografia o una TAC 3D prima dell’estrazione?', answer: 'Ogni estrazione richiede immagini per vedere radici e osso circostante. Per la maggior parte dei denti basta una panoramica o una radiografia normale. Per denti del giudizio inclusi, denti vicini a nervo o seno ed estrazioni prima di impianti, usiamo una TAC 3D, che mostra esattamente dove sono le radici. Per i nostri pazienti la scansione è gratuita.' },
      { question: 'Cosa posso mangiare dopo l’estrazione?', answer: 'Cibi morbidi e tiepidi per i primi uno o due giorni: yogurt, minestra raffreddata, purè, uova, pasta. Mastica dall’altro lato. Evita bevande molto calde, alcol, cibi piccanti e tutto ciò che è duro, croccante o con piccoli semi che possono entrare nell’alveolo. Non bere con la cannuccia nei primi giorni, perché l’aspirazione può staccare il coagulo. La maggior parte torna a mangiare normalmente in pochi giorni.' },
      { question: 'Cos’è l’alveolite?', answer: 'L’alveolite si verifica quando il coagulo nell’alveolo si perde o non si forma bene, lasciando l’osso scoperto. Di solito compare due-quattro giorni dopo l’estrazione, con un dolore che peggiora invece di migliorare, a volte con cattivo sapore. Fumo, sciacqui energici e bere con la cannuccia aumentano il rischio. Se pensi di averla, contattaci: si tratta pulendo l’alveolo e applicando una medicazione lenitiva, e il dolore di solito passa presto.' },
      { question: 'Quando posso volare e tornare al lavoro?', answer: 'Dopo la maggior parte delle estrazioni semplici puoi tornare al lavoro il giorno dopo, anche lo stesso giorno se il lavoro non è fisicamente pesante. Dopo estrazioni chirurgiche o dei denti del giudizio potrebbero servire uno o due giorni di riposo, soprattutto in caso di gonfiore. Prima della partenza facciamo un breve controllo e ti diciamo se puoi volare.' },
      { question: 'Quanto presto posso fare un impianto dopo l’estrazione?', answer: 'Dipende dal dente, dall’osso e dalla presenza di infezione. Il dentista decide i tempi in base alle immagini e a come guarisce la zona, e te li spiega prima dell’estrazione. Una volta inserito, l’impianto ha bisogno di circa sei mesi di guarigione prima della corona definitiva, quindi il trattamento si fa in due viaggi. Dove l’osso si ridurrebbe molto, si può consigliare un innesto osseo al momento dell’estrazione per preservare il sito.' },
      { question: 'I denti del giudizio vanno sempre tolti?', answer: 'No. I denti del giudizio completamente erotti, sani e ben pulibili possono restare. Consigliamo di toglierli quando causano infezioni ripetute, dolore o gonfiore, spingono o danneggiano il dente davanti, si cariano e si puliscono a fatica, o sono inclusi in una posizione che probabilmente creerà problemi. La TAC 3D mostra quanto un dente del giudizio inferiore è vicino al nervo prima di pianificare l’intervento.' },
      { question: 'E se ho paura dell’estrazione?', answer: 'È molto comune. Dillo quando prenoti, così pianifichiamo più tempo. Ti spieghiamo ogni passo prima di farlo, controlliamo che la zona sia completamente anestetizzata e concordiamo un segnale per fermare l’intervento in qualsiasi momento. Molti pazienti ansiosi scoprono che sapere esattamente cosa succederà fa una grande differenza.' },
      { question: 'Cosa comprende il preventivo per un’estrazione?', answer: 'Il preventivo scritto comprende l’estrazione e tutto ciò che serve al tuo caso, come accesso chirurgico o innesto osseo, ciascuno su una riga. Se l’estrazione fa parte di un trattamento con impianti o protesi, il piano completo è mostrato fin dall’inizio, con l’impianto MegaGen e il materiale della corona. Non si aggiunge nulla che non abbiamo discusso prima con te.' },
    ],
  },
};

export default function ToothExtractionPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="oral-surgery"
      heroImage={images.surgery[12] ?? images.heroAfter}
      whatImage={images.surgery[16] ?? images.heroAfter}
    />
  );
}
