import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Mbushje me kompozit',
    eyebrow: 'Trajtime të përgjithshme · Shqipëri',
    subtitle: 'Mbushje me ngjyrën e dhëmbit që riparon kariesin ose thyerje të vogla në një seancë, e ngjitur mirë dhe me të njëjtën nuancë.',
    lead: 'Kariesi hiqet dhe dhëmbi rindërtohet në një seancë, me një mbushje me ngjyrën e dhëmbit që ngjitet mirë dhe nuk dallohet.',
    kicker: 'Mbushje me kompozit në Tiranë, Shqipëri',
    articleTitle: 'Mbushje me kompozit në Tiranë: trajtoni kariesin, ruani dhëmbin',
    intro: [
      'Mbushja me kompozit riparon një dhëmb të dëmtuar nga kariesi, me një material me ngjyrën e dhëmbit që ngjitet drejtpërdrejt në atë që ka mbetur.',
      'Është mënyra më e zakonshme e trajtimit të kariesit. Pjesa e prishur hiqet, dhëmbi rindërtohet me shtresa dhe mbushja e përfunduar formësohet sipas kafshimit dhe përshtatet me nuancën e dhëmbit, kështu që mezi dallohet.',
      'Në Veneer Clinic, një mbushje për kavitet mesatar (gradë e II) kushton 50 € për dhëmb, dhe një mbushje për kavitet të thellë afër nervit (gradë e III) kushton 70 € për dhëmb.',
    ],
    sections: [
      {
        title: 'Pse me ngjyrën e dhëmbit',
        intro: [
          'Mbushjet e vjetra me amalgamë argjendi mbahen në vend kryesisht nga forma e tyre, gjë që zakonisht kërkon të hiqet më shumë dhëmb i shëndetshëm për t’i fiksuar. Një mbushje e bardhë ngjitet kimikisht me smaltin dhe dentinën, kështu që përgatitja mund të jetë më e vogël dhe ruhet më shumë dhëmb natyral.',
          'Gjithashtu duket natyrale. Mbushja përshtatet me nuancën e dhëmbit, ndaj një riparim në një dhëmb të përparmë ose në një dhëmballë të dukshme nuk bie në sy kur buzëqeshni ose flisni. Shumica e njerëzve harrojnë brenda pak javësh se cili dhëmb është mbushur.',
        ],
      },
      {
        title: 'Riparim, jo trajtim estetik',
        intro: [
          'Mbushja me kompozit është trajtimi i kariesit, i një thyerjeje të vogël ose i një mbushjeje të vjetër që po dështon. Nuk është e njëjtë me fasetat me kompozit, ku materiali shtohet mbi dhëmbë të shëndetshëm për t’u ndryshuar formën ose ngjyrën. Qëllimi është i thjeshtë: të hiqet problemi dhe dhëmbi të funksionojë sërish si duhet, në mënyrë të qëndrueshme dhe me pamje natyrale.',
        ],
      },
      {
        title: 'Trajtimi në kohë',
        intro: [
          'Kariesi zakonisht nuk dhemb derisa të jetë i thellë. Kur dhëmbi fillon të dhembë, një karies i vogël mund të jetë kthyer në një që kërkon mbushje shumë më të madhe, trajtim kanali ose kurorë. Trajtimi i hershëm e mban mbushjen të vogël, dhëmbin të fortë dhe trajtimin të thjeshtë.',
          'Disa karieze fshihen ndërmjet dhëmbëve ose poshtë mbushjeve të vjetra. Grafia panoramike që na dërgoni para udhëtimit shpesh i tregon ato që në fillim, dhe kur dyshojmë për diçka që syri nuk e sheh, një radiografi e konfirmon.',
        ],
      },
      {
        title: 'Kur mbushja nuk mjafton',
        intro: [
          'Mbushja me kompozit funksionon më mirë për riparime të vogla dhe të mesme. Kur mungon pjesa më e madhe e dhëmbit ose ai është i plasaritur rëndë, një mbushje e madhe ka shumë gjasa të thyhet. Në këtë rast rekomandojmë një kurorë prej zirkoni Made in Germany ose E-max, të punuar në laborator, dhe ju shpjegojmë pse para se të bëjmë çdo gjë.',
          'Çdo mbushje me kompozit në Veneer Clinic nis me këtë vlerësim të ndershëm.',
        ],
      },
      {
        title: 'Si bëhet mbushja me kompozit?',
        intro: ['Mbushja e dhëmbit me kompozit bëhet në një takim të vetëm, zakonisht me anestezi lokale.'],
        inline: [
          { title: 'Kontrolli i dhëmbit.', text: 'Dentisti ekzaminon dhëmbin, kontrollon sa thellë ka shkuar kariesi dhe, kur nevojitet, bën një radiografi për të parë ndërmjet dhëmbëve ose poshtë mbushjeve ekzistuese. Para se të nisim, ju tregojmë cilët dhëmbë kanë nevojë për trajtim dhe çfarë përfshin secili, që të vendosni me qetësi dhe pa surpriza.' },
          { title: 'Mpirja dhe heqja e kariesit.', text: 'Zona mpihet, kështu që ndieni presion dhe dridhje, por jo dhimbje. Pastaj kariesi hiqet me kujdes, duke larguar vetëm indin e butë dhe të dëmtuar dhe duke ruajtur sa më shumë strukturë të shëndetshme. Nëse një mbushje e vjetër po dështon, ajo hiqet në këtë fazë.' },
          { title: 'Dhëmbi mbahet i thatë.', text: 'Kompoziti ngjitet më mirë në një sipërfaqe të pastër dhe të thatë, ndaj dhëmbi izolohet nga pështyma gjatë vendosjes së mbushjes. Ky hap ka rëndësi: lagështia gjatë ngjitjes është një nga shkaqet më të zakonshme pse mbushjet dështojnë herët.' },
          { title: 'Ngjitja dhe shtresat.', text: 'Sipërfaqja e dhëmbit përgatitet me një material ngjitës, dhe kompoziti vendoset në shtresa të holla. Çdo shtresë forcohet brenda pak sekondash me një llambë të posaçme. Ndërtimi gradual i mbushjes jep rezultat më të fortë dhe i lejon dentistit ta riprodhojë saktë formën origjinale të dhëmbit. Te kavitetet e thella, nën mbushje vendoset një shtresë mbrojtëse që dhëmbi të mbetet i gjallë.' },
          { title: 'Zgjedhja e ngjyrës.', text: 'Para se të vendoset materiali, zgjidhet nuanca që përputhet me dhëmbin tuaj. Te dhëmbët e përparmë mund të kombinohen disa nuanca, që mbushja të shkrihet me tejdukshmërinë natyrale të smaltit.' },
          { title: 'Formësimi, kontrolli dhe lustrimi.', text: 'Pasi forcohet, mbushja formësohet sipas brazdave natyrale të dhëmbit. Kafshimi kontrollohet me një letër të hollë artikulimi, dhe pikat e larta rregullohen që dhëmbi të mos ndihet “i lartë” kur mbyllni gojën. Në fund mbushja lustrohet, që të jetë e lëmuar dhe t’u rezistojë njollave.' },
          { title: 'Pas takimit.', text: 'Kompoziti është plotësisht i forcuar kur ngriheni nga karrigia, ndaj vetë materiali nuk kërkon kohë pritjeje. Arsyeja e vetme për të pritur para se të hani është anestezia: shmangni përtypjen nga ajo anë derisa të kalojë mpirja, që të mos kafshoni faqen ose gjuhën pa e kuptuar.' },
        ],
      },
    ],
    stats: [
      { value: '1', label: 'Seancë' },
      { value: 'Menjëherë', label: 'Përdorim normal pas mpirjes' },
      { value: 'Nuancë', label: 'Si dhëmbi juaj' },
      { value: '30–60 min', label: 'Për dhëmb' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Gradë e II · gradë e III 70 €',
    whatTitle: 'Çfarë është mbushja me kompozit?',
    what: [
      'Mbushja me kompozit është një riparim me ngjyrën e dhëmbit për një dhëmb të dëmtuar nga kariesi ose nga një thyerje e vogël. Pjesa e prishur hiqet dhe dhëmbi rindërtohet me një rrëshirë kompozite që ngjitet drejtpërdrejt në smalt dhe dentinë.',
      'Bëhet në një seancë, zakonisht me anestezi lokale. Materiali forcohet me dritë gjatë takimit, ndaj dhëmbi mund të përdoret normalisht sapo kalon mpirja.',
    ],
    calloutTitle: 'Mbushja trajton kariesin. Nuk është trajtim estetik.',
    calloutText:
      'Mbushja me kompozit rindërton pjesën e dhëmbit të dëmtuar nga kariesi ose një thyerje e vogël. Është riparim, jo trajtim për të ndryshuar formën ose për të mbuluar dhëmbë të shëndetshëm. Nëse doni të ndryshoni pamjen e buzëqeshjes, kjo është një bisedë tjetër.',
    compareTitle: 'Mbushje apo diçka më e fortë?',
    compareIntro: 'Riparimi i duhur varet nga sa dhëmb i shëndetshëm ka mbetur:',
    compare: [
      { id: 'filling-2', tag: 'Më e zakonshmja', title: 'Mbushje me kompozit', text: 'Për karieze të vogla dhe të mesme dhe thyerje të lehta. Kariesi hiqet dhe dhëmbi rindërtohet me shtresa në të njëjtën nuancë, në një seancë.' },
      { id: 'filling-3', tag: 'Kur është i thellë', title: 'Mbushje e thellë', text: 'Për karies afër nervit, ose për mbushje të vjetra që rrjedhin, përfshirë amalgamat. Nën mbushje vendoset një shtresë mbrojtëse.' },
      { id: 'crown-zirconia', tag: 'Kur është shumë i madh', title: 'Një kurorë', text: 'Kur ka mbetur shumë pak dhëmb që mbushja të zgjasë, një kurorë zirkoni Made in Germany e mbron dhëmbin. Fillimisht ju shpjegojmë pse.' },
    ],
    fitTitle: 'Kur është mbushja me kompozit riparimi i duhur?',
    fitIntro: 'Mbushja me kompozit zakonisht është trajtimi i duhur nëse keni:',
    fit: [
      'Një karies të zbuluar në kontroll ose në radiografi, para se të arrijë nervin',
      'Një dhëmb që reagon ndaj të ëmblës, të nxehtit ose të ftohtit, shpesh shenja e parë e kariesit',
      'Një skaj të ciflosur ose të plasaritur ku ka mbetur mjaft dhëmb për të mbajtur mbushjen',
      'Një mbushje të vjetër të plasaritur, që rrjedh ose me karies që formohet në skaje',
      'Amalgama të konsumuara që duhen ndërruar dhe mund të ribëhen me ngjyrën e dhëmbit',
      'Një hapësirë ose skaj të ashpër ku ngec ushqimi për shkak të kariesit ose një mbushjeje të thyer',
    ],
    fitNote:
      'Nëse dëmtimi është shumë i madh që mbushja të zgjasë, ose kariesi ka arritur nervin, jua themi para se të nisim dhe ju shpjegojmë nëse është më mirë një kurorë apo trajtim kanali.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'Shumica e mbushjeve me kompozit përfundojnë në një seancë, dhe dhëmbi përdoret normalisht sapo kalon mpirja:',
    steps: [
      { title: 'Kontrolli dhe plani', text: 'Ekzaminojmë dhëmbin dhe, nëse duhet, bëjmë radiografi. Ju tregojmë cilët dhëmbë duhen trajtuar, dhe secili shfaqet në ofertën me shkrim.' },
      { title: 'Anestezi lokale', text: 'Zona mpihet që të ndieni presion dhe dridhje, jo dhimbje. Kontrollojmë që të jetë plotësisht e mpirë para se të nisim.' },
      { title: 'Heqja e kariesit', text: 'Hiqet vetëm indi i dëmtuar, duke ruajtur sa më shumë strukturë të shëndetshme. Hiqen edhe mbushjet e vjetra që po dështojnë.' },
      { title: 'Ngjitja dhe shtresat', text: 'Dhëmbi mbahet i thatë, aplikohet ngjitësi dhe kompoziti në nuancën e duhur vendoset në shtresa të holla, të forcuara me dritë.' },
      { title: 'Formësimi dhe lustrimi', text: 'Mbushja formësohet sipas dhëmbit, kafshimi kontrollohet dhe rregullohet, dhe sipërfaqja lustrohet.' },
    ],
    whyBandTitle: 'Pse Veneer Clinic për mbushjen tuaj?',
    whyBandText:
      'Heqim vetëm kariesin, ruajmë sa më shumë dhëmb të shëndetshëm dhe ju themi hapur kur një mbushje nuk do të zgjasë. Çdo dhëmb që ka nevojë për trajtim shfaqet në ofertën e detajuar me shkrim para se të nisim. Çmimi që ju japim është çmimi që paguani.',
    caseText: 'Mbushje me ngjyrën e dhëmbit',
    faq: [
      { question: 'Sa kushton një mbushje me kompozit?', answer: 'Një mbushje për kavitet mesatar (gradë e II) kushton 50 € për dhëmb. Një mbushje për kavitet të thellë afër nervit (gradë e III), me shtresë mbrojtëse poshtë, kushton 70 € për dhëmb. Grada përcaktohet nga thellësia e kariesit, dhe çdo dhëmb shfaqet veçmas në ofertën me shkrim para se të nisim.' },
      { question: 'A është mbushja me kompozit e njëjtë me fasetat me kompozit?', answer: 'Jo. Përdorin materiale të ngjashme, por shërbejnë për gjëra të ndryshme. Mbushja me kompozit riparon një dhëmb të dëmtuar nga kariesi, një thyerje e vogël ose një mbushje e vjetër që po dështon. Pjesa e dëmtuar hiqet dhe dhëmbi rindërtohet që të funksionojë sërish si duhet. Fasetat me kompozit janë trajtim estetik që shton material mbi dhëmbë të shëndetshëm për t’u ndryshuar formën, gjatësinë ose ngjyrën. Kjo faqe flet për mbushjet: trajtimin e një problemi në dhëmb, jo ndryshimin e pamjes së buzëqeshjes.' },
      { question: 'A dhemb mbushja e dhëmbit?', answer: 'Nuk duhet të dhembë. Fillimisht dhëmbi mpihet dhe e kontrollojmë para se të nisim. Gjatë heqjes së kariesit do të ndieni presion dhe dridhje, por jo dhimbje. Mbushjet shumë të vogla dhe sipërfaqësore ndonjëherë nuk kërkojnë anestezi, por zgjedhja është e juaja. Nëse preferoni anestezi, na e thoni. Më pas, dhëmbi mund të jetë pak i ndjeshëm ndaj të ftohtit ose presionit për disa ditë, sidomos pas një mbushjeje të thellë. Zakonisht kalon vetë.' },
      { question: 'A mund të ha menjëherë pas mbushjes?', answer: 'Po, për sa i përket mbushjes. Kompoziti forcohet me dritë gjatë takimit, ndaj kur largoheni është plotësisht i forcuar. Arsyeja e vetme për të pritur është anestezia. Derisa të kalojë mpirja, shmangni përtypjen nga ajo anë dhe pijet shumë të nxehta, që të mos kafshoni faqen ose të digjeni pa e kuptuar.' },
      { question: 'Sa zgjat një mbushje me kompozit?', answer: 'Me kujdes të mirë, shumë vite. Mbushjet e vogla dhe të mesme zgjasin më shumë. Ato të mëdha, ato te dhëmballët me ngarkesë të madhe dhe ato te njerëzit që kërcëllijnë dhëmbët zakonisht kërkojnë vëmendje më herët. Arsyeja më e zakonshme për ndërrimin e një mbushjeje është kariesi i ri në skajet e saj, ndaj larja me pastë me fluor, pastrimi ndërmjet dhëmbëve dhe kontrollet e rregullta bëjnë diferencën më të madhe.' },
      { question: 'A mund t’i ndërroni mbushjet e mia të vjetra me amalgamë?', answer: 'Po, kur kanë nevojë për ndërrim. Nëse një amalgamë është e plasaritur, rrjedh, ka karies përreth ose dhëmbi pranë saj po thyhet, e heqim dhe e rindërtojmë dhëmbin me një mbushje të bardhë ose, nëse dhëmbi është dobësuar, me një kurorë. Nuk rekomandojmë ndërrimin e amalgamave të shëndosha vetëm për pamjen pa diskutuar të mirat dhe të metat, sepse çdo ndërrim heq edhe pak dhëmb. Dentisti ju thotë hapur cilat mbushje kanë nevojë për vëmendje.' },
      { question: 'Po nëse kariesi është shumë i madh për mbushje?', answer: 'Atëherë mbushja nuk është riparimi i duhur, dhe jua themi para se të nisim. Një mbushje e madhe në një dhëmb me pak strukturë të mbetur ka gjasa të plasaritet ose ta thyejë dhëmbin. Në këtë rast një kurorë mbron më mirë: në Veneer Clinic kurorat punohen prej zirkoni Made in Germany ose E-max. Nëse kariesi ka arritur nervin, mund të nevojitet fillimisht trajtim kanali. Gjithçka shpjegohet dhe shënohet në ofertën me shkrim para se të nisë puna.' },
      { question: 'A më duhet radiografi para mbushjes?', answer: 'Jo gjithmonë. Kariesi në sipërfaqen e përtypjes ose në pjesën e përparme të dhëmbit shpesh duket drejtpërdrejt. Ai ndërmjet dhëmbëve, poshtë mbushjeve të vjetra ose afër nervit shpesh nuk duket pa radiografi. Në këto raste, radiografia tregon sa thellë shkon problemi dhe nëse mbushja është trajtimi i duhur. Bëhet vetëm kur rasti juaj e kërkon.' },
      { question: 'A do ta ketë mbushja ngjyrën e dhëmbit tim?', answer: 'Po. Nuanca zgjidhet para se të vendoset materiali, dhe te dhëmbët e përparmë mund të kombinohen disa nuanca që të shkrihet me smaltin natyral. Nëse keni ndër mend të bëni zbardhje, bëjeni para mbushjeve të dukshme. Zbardhja i çel dhëmbët natyralë, por nuk e ndryshon ngjyrën e mbushjeve ekzistuese, ndaj përshtatja e mbushjes me nuancën e re jep rezultatin më të mirë.' },
      { question: 'Sa mbushje mund të bëhen në një seancë?', answer: 'Shpesh disa, në varësi të vendit dhe thellësisë. Mbushjet në të njëjtën anë të gojës zakonisht bëhen bashkë me një anestezi të vetme. Nëse ka shumë punë, mund ta ndajmë në disa takime gjatë qëndrimit tuaj, që të ndiheni rehat dhe kafshimi të kontrollohet si duhet. Dentisti e planifikon radhën bashkë me ju.' },
      { question: 'A është normale që dhëmbi të jetë i ndjeshëm më pas?', answer: 'Pak ndjeshmëri ndaj të ftohtit, të ëmblës ose kafshimit është e zakonshme për disa ditë pas një mbushjeje, sidomos nëse është e thellë. Zakonisht zbehet vetë. Na kontaktoni nëse ndjeshmëria përkeqësohet në vend që të qetësohet, nëse zgjat më shumë se dy javë, nëse dhëmbi dhemb vetë ose nëse kafshimi ndihet i pabarabartë. Një pikë e lartë në mbushje rregullohet lehtë.' },
      { question: 'Çfarë përfshin oferta për mbushjet?', answer: 'Oferta e detajuar me shkrim tregon çdo dhëmb që ka nevojë për mbushje, me gradën dhe çmimin e saj, dhe çdo gjë tjetër që kërkon rasti juaj, si një kurorë ose trajtim kanali kur mbushja nuk do të zgjaste. Trajtimi i kariesit planifikohet sipas përparësive. Pasi të nisë trajtimi, nuk shtohet asgjë që nuk e kemi diskutuar më parë me ju.' },
    ],
  },
  en: {
    name: 'Composite Fillings',
    eyebrow: 'General treatments · Albania',
    subtitle: 'A tooth-coloured filling that repairs decay or small fractures in one session, well bonded and in the same shade.',
    lead: 'The decay is removed and the tooth rebuilt in one session, with a tooth-coloured filling that bonds well and blends in.',
    kicker: 'Composite fillings in Tirana, Albania',
    articleTitle: 'Composite fillings in Tirana: treat the decay, keep the tooth',
    intro: [
      'A composite filling repairs a tooth damaged by decay with a tooth-coloured material that bonds directly to what remains.',
      'It is the most common way to treat decay. The decayed part is removed, the tooth is rebuilt in layers and the finished filling is shaped to your bite and matched to the tooth’s shade, so it is barely visible.',
      'At Veneer Clinic, a filling for a medium cavity (grade II) costs €50 per tooth, and a filling for a deep cavity close to the nerve (grade III) costs €70 per tooth.',
    ],
    sections: [
      {
        title: 'Why tooth-coloured',
        intro: [
          'Old silver amalgam fillings are held in place mainly by their shape, which usually means removing more healthy tooth to lock them in. A white filling bonds chemically to enamel and dentine, so the preparation can be smaller and more natural tooth is preserved.',
          'It also looks natural. The filling is matched to the tooth’s shade, so a repair on a front tooth or a visible molar does not stand out when you smile or talk. Most people forget within a few weeks which tooth was filled.',
        ],
      },
      {
        title: 'A repair, not a cosmetic treatment',
        intro: [
          'A composite filling treats decay, a small fracture or an old filling that is failing. It is not the same as composite veneers, where material is added over healthy teeth to change their shape or colour. The goal is simple: remove the problem and make the tooth work properly again, durably and with a natural look.',
        ],
      },
      {
        title: 'Treating it in time',
        intro: [
          'Decay usually does not hurt until it is deep. By the time a tooth starts aching, a small cavity may have become one that needs a much larger filling, a root canal or a crown. Early treatment keeps the filling small, the tooth strong and the treatment simple.',
          'Some decay hides between teeth or under old fillings. The panoramic X-ray you send before your trip often shows it from the start, and when we suspect something the eye cannot see, an X-ray confirms it.',
        ],
      },
      {
        title: 'When a filling is not enough',
        intro: [
          'Composite fillings work best for small and medium repairs. When most of the tooth is missing or it is badly cracked, a large filling is very likely to break. In that case we recommend a Made in Germany zirconia or E-max crown, made in the lab, and explain why before doing anything.',
          'Every composite filling at Veneer Clinic starts with this honest assessment.',
        ],
      },
      {
        title: 'How a composite filling is done',
        intro: ['A composite filling is done in a single appointment, usually under local anaesthesia.'],
        inline: [
          { title: 'Checking the tooth.', text: 'The dentist examines the tooth, checks how deep the decay goes and, when needed, takes an X-ray to see between teeth or under existing fillings. Before starting, we show you which teeth need treatment and what each involves, so you can decide calmly and without surprises.' },
          { title: 'Numbing and removing the decay.', text: 'The area is numbed, so you feel pressure and vibration but not pain. Then the decay is carefully removed, taking away only the soft, damaged tissue and keeping as much healthy structure as possible. If an old filling is failing, it is removed at this stage.' },
          { title: 'Keeping the tooth dry.', text: 'Composite bonds best to a clean, dry surface, so the tooth is isolated from saliva while the filling is placed. This step matters: moisture during bonding is one of the most common reasons fillings fail early.' },
          { title: 'Bonding and layering.', text: 'The tooth surface is prepared with a bonding agent, and the composite is placed in thin layers. Each layer is hardened within seconds with a special light. Building the filling gradually gives a stronger result and lets the dentist reproduce the tooth’s original shape accurately. In deep cavities, a protective liner is placed under the filling to keep the tooth vital.' },
          { title: 'Choosing the shade.', text: 'Before the material is placed, the shade matching your tooth is selected. On front teeth several shades can be combined, so the filling blends with the natural translucency of the enamel.' },
          { title: 'Shaping, checking and polishing.', text: 'Once hardened, the filling is shaped to the tooth’s natural grooves. The bite is checked with thin articulating paper, and high spots are adjusted so the tooth does not feel “high” when you close. Finally the filling is polished so it is smooth and resists staining.' },
          { title: 'After the appointment.', text: 'The composite is fully hardened when you get up from the chair, so the material itself needs no waiting time. The only reason to wait before eating is the anaesthetic: avoid chewing on that side until the numbness wears off, so you do not bite your cheek or tongue without noticing.' },
        ],
      },
    ],
    stats: [
      { value: '1', label: 'Session' },
      { value: 'Immediately', label: 'Normal use after numbness' },
      { value: 'Shade', label: 'Matched to your tooth' },
      { value: '30–60 min', label: 'Per tooth' },
    ],
    priceTitle: 'Price',
    priceNote: 'Grade II · grade III €70',
    whatTitle: 'What is a composite filling?',
    what: [
      'A composite filling is a tooth-coloured repair for a tooth damaged by decay or a small fracture. The decayed part is removed and the tooth rebuilt with a composite resin that bonds directly to enamel and dentine.',
      'It is done in one session, usually under local anaesthesia. The material is light-cured during the appointment, so the tooth can be used normally as soon as the numbness wears off.',
    ],
    calloutTitle: 'A filling treats decay. It is not a cosmetic treatment.',
    calloutText:
      'A composite filling rebuilds the part of the tooth damaged by decay or a small fracture. It is a repair, not a treatment to change shape or cover healthy teeth. If you want to change how your smile looks, that is a different conversation.',
    compareTitle: 'A filling or something stronger?',
    compareIntro: 'The right repair depends on how much healthy tooth is left:',
    compare: [
      { id: 'filling-2', tag: 'Most common', title: 'Composite filling', text: 'For small and medium cavities and minor fractures. The decay is removed and the tooth rebuilt in layers in the same shade, in one session.' },
      { id: 'filling-3', tag: 'When it is deep', title: 'Deep filling', text: 'For decay close to the nerve, or leaking old fillings, including amalgams. A protective liner is placed under the filling.' },
      { id: 'crown-zirconia', tag: 'When it is too large', title: 'A crown', text: 'When too little tooth is left for a filling to last, a Made in Germany zirconia crown protects it. We explain why first.' },
    ],
    fitTitle: 'When is a composite filling the right repair?',
    fitIntro: 'A composite filling is usually the right treatment if you have:',
    fit: [
      'A cavity found at a check-up or on an X-ray, before it reaches the nerve',
      'A tooth that reacts to sweet, hot or cold, often the first sign of decay',
      'A chipped or cracked edge with enough tooth left to hold a filling',
      'An old filling that is cracked, leaking or has decay forming at the edges',
      'Worn amalgams that need replacing and can be redone in a tooth colour',
      'A gap or rough edge where food gets stuck because of decay or a broken filling',
    ],
    fitNote:
      'If the damage is too large for a filling to last, or the decay has reached the nerve, we tell you before starting and explain whether a crown or a root canal is better.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'Most composite fillings are finished in one session, and the tooth is used normally as soon as the numbness wears off:',
    steps: [
      { title: 'Check-up and plan', text: 'We examine the tooth and, if needed, take an X-ray. We show you which teeth need treatment, and each one appears in your written quote.' },
      { title: 'Local anaesthesia', text: 'The area is numbed so you feel pressure and vibration, not pain. We check it is fully numb before starting.' },
      { title: 'Removing the decay', text: 'Only damaged tissue is removed, keeping as much healthy structure as possible. Failing old fillings are removed too.' },
      { title: 'Bonding and layering', text: 'The tooth is kept dry, the bonding agent applied and the composite in the right shade placed in thin, light-cured layers.' },
      { title: 'Shaping and polishing', text: 'The filling is shaped to the tooth, the bite checked and adjusted, and the surface polished.' },
    ],
    whyBandTitle: 'Why Veneer Clinic for your filling?',
    whyBandText:
      'We remove only the decay, keep as much healthy tooth as possible and tell you openly when a filling will not last. Every tooth that needs treatment appears in the detailed written quote before we start. The price we give you is the price you pay.',
    caseText: 'Tooth-coloured fillings',
    faq: [
      { question: 'How much does a composite filling cost?', answer: 'A filling for a medium cavity (grade II) costs €50 per tooth. A filling for a deep cavity close to the nerve (grade III), with a protective liner underneath, costs €70 per tooth. The grade is set by how deep the decay goes, and each tooth appears separately in your written quote before we start.' },
      { question: 'Is a composite filling the same as composite veneers?', answer: 'No. They use similar materials but serve different purposes. A composite filling repairs a tooth damaged by decay, a small fracture or a failing old filling. The damaged part is removed and the tooth rebuilt so it works properly again. Composite veneers are a cosmetic treatment that adds material over healthy teeth to change their shape, length or colour. This page is about fillings: treating a problem in a tooth, not changing how your smile looks.' },
      { question: 'Does a filling hurt?', answer: 'It should not. The tooth is numbed first and we check it before starting. While the decay is removed you will feel pressure and vibration, but not pain. Very small, shallow fillings sometimes do not need anaesthesia, but the choice is yours. If you prefer anaesthesia, just tell us. Afterwards the tooth may be slightly sensitive to cold or pressure for a few days, especially after a deep filling. It usually settles on its own.' },
      { question: 'Can I eat straight after a filling?', answer: 'Yes, as far as the filling is concerned. The composite is light-cured during the appointment, so it is fully hardened when you leave. The only reason to wait is the anaesthetic. Until the numbness wears off, avoid chewing on that side and very hot drinks, so you do not bite your cheek or burn yourself without noticing.' },
      { question: 'How long does a composite filling last?', answer: 'With good care, many years. Small and medium fillings last longest. Large ones, those on heavily loaded molars and those in people who grind their teeth usually need attention sooner. The most common reason to replace a filling is new decay at its edges, so brushing with fluoride toothpaste, cleaning between teeth and regular check-ups make the biggest difference.' },
      { question: 'Can you replace my old amalgam fillings?', answer: 'Yes, when they need replacing. If an amalgam is cracked, leaking, has decay around it or the tooth next to it is breaking, we remove it and rebuild the tooth with a white filling or, if the tooth is weakened, a crown. We do not recommend replacing sound amalgams purely for looks without discussing the pros and cons, because every replacement removes a little more tooth. The dentist tells you openly which fillings need attention.' },
      { question: 'What if the decay is too large for a filling?', answer: 'Then a filling is not the right repair, and we tell you before starting. A large filling in a tooth with little structure left is likely to crack or break the tooth. In that case a crown protects it better: at Veneer Clinic crowns are made from Made in Germany zirconia or E-max. If the decay has reached the nerve, a root canal may be needed first. Everything is explained and written in the quote before work begins.' },
      { question: 'Do I need an X-ray before a filling?', answer: 'Not always. Decay on the chewing surface or the front of a tooth is often directly visible. Decay between teeth, under old fillings or close to the nerve often cannot be seen without an X-ray. In those cases the X-ray shows how deep the problem goes and whether a filling is the right treatment. It is only taken when your case needs it.' },
      { question: 'Will the filling match my tooth colour?', answer: 'Yes. The shade is chosen before the material is placed, and on front teeth several shades can be combined so it blends with the natural enamel. If you are planning whitening, do it before visible fillings. Whitening lightens natural teeth but does not change the colour of existing fillings, so matching the filling to the new shade gives the best result.' },
      { question: 'How many fillings can be done in one session?', answer: 'Often several, depending on location and depth. Fillings on the same side of the mouth are usually done together with a single anaesthetic. If there is a lot of work, we can split it over several appointments during your stay, so you are comfortable and the bite is checked properly. The dentist plans the order with you.' },
      { question: 'Is it normal for the tooth to be sensitive afterwards?', answer: 'Some sensitivity to cold, sweet or biting is common for a few days after a filling, especially a deep one. It usually fades on its own. Contact us if the sensitivity gets worse instead of better, lasts more than two weeks, the tooth aches on its own or your bite feels uneven. A high spot on a filling is easy to adjust.' },
      { question: 'What does the quote for fillings include?', answer: 'Your detailed written quote shows every tooth that needs a filling, with its grade and price, and anything else your case needs, such as a crown or root canal where a filling would not last. Decay treatment is planned by priority. Once treatment starts, nothing is added that we have not discussed with you first.' },
    ],
  },
  de: {
    name: 'Kompositfüllungen',
    eyebrow: 'Allgemeine Behandlungen · Albanien',
    subtitle: 'Eine zahnfarbene Füllung, die Karies oder kleine Brüche in einer Sitzung repariert, gut verklebt und im gleichen Farbton.',
    lead: 'Die Karies wird entfernt und der Zahn in einer Sitzung aufgebaut, mit einer zahnfarbenen Füllung, die gut haftet und nicht auffällt.',
    kicker: 'Kompositfüllungen in Tirana, Albanien',
    articleTitle: 'Kompositfüllungen in Tirana: Karies behandeln, Zahn erhalten',
    intro: [
      'Eine Kompositfüllung repariert einen kariösen Zahn mit einem zahnfarbenen Material, das direkt an der verbliebenen Zahnsubstanz haftet.',
      'Sie ist die häufigste Art, Karies zu behandeln. Der kariöse Teil wird entfernt, der Zahn schichtweise aufgebaut und die fertige Füllung an Ihren Biss angepasst und farblich abgestimmt, sodass sie kaum zu sehen ist.',
      'In der Veneer Clinic kostet eine Füllung für eine mittelgroße Kavität (Grad II) 50 € pro Zahn und eine Füllung für eine tiefe Kavität nahe am Nerv (Grad III) 70 € pro Zahn.',
    ],
    sections: [
      {
        title: 'Warum zahnfarben',
        intro: [
          'Alte Amalgamfüllungen halten vor allem durch ihre Form, wofür meist mehr gesunde Zahnsubstanz entfernt werden muss. Eine weiße Füllung verbindet sich chemisch mit Schmelz und Dentin, sodass die Präparation kleiner ausfallen kann und mehr natürlicher Zahn erhalten bleibt.',
          'Außerdem sieht sie natürlich aus. Die Füllung wird an den Farbton des Zahns angepasst, sodass eine Reparatur an einem Frontzahn oder sichtbaren Backenzahn beim Lächeln oder Sprechen nicht auffällt. Die meisten vergessen nach wenigen Wochen, welcher Zahn gefüllt wurde.',
        ],
      },
      {
        title: 'Reparatur, keine ästhetische Behandlung',
        intro: [
          'Eine Kompositfüllung behandelt Karies, einen kleinen Bruch oder eine versagende alte Füllung. Sie ist nicht dasselbe wie Komposit-Veneers, bei denen Material auf gesunde Zähne aufgetragen wird, um Form oder Farbe zu ändern. Das Ziel ist einfach: das Problem beseitigen und den Zahn wieder richtig funktionieren lassen, dauerhaft und natürlich aussehend.',
        ],
      },
      {
        title: 'Rechtzeitig behandeln',
        intro: [
          'Karies tut meist erst weh, wenn sie tief ist. Bis ein Zahn schmerzt, kann aus einem kleinen Loch eines geworden sein, das eine viel größere Füllung, eine Wurzelbehandlung oder eine Krone braucht. Frühe Behandlung hält die Füllung klein, den Zahn stark und die Behandlung einfach.',
          'Manche Karies versteckt sich zwischen den Zähnen oder unter alten Füllungen. Das Panoramaröntgen, das Sie uns vor der Reise schicken, zeigt sie oft schon zu Beginn, und wenn wir etwas vermuten, das das Auge nicht sieht, bestätigt es ein Röntgenbild.',
        ],
      },
      {
        title: 'Wenn eine Füllung nicht reicht',
        intro: [
          'Kompositfüllungen eignen sich am besten für kleine und mittlere Reparaturen. Fehlt der größte Teil des Zahns oder ist er stark gerissen, bricht eine große Füllung sehr wahrscheinlich. Dann empfehlen wir eine Krone aus Zirkon Made in Germany oder E-max, im Labor gefertigt, und erklären Ihnen vorher, warum.',
          'Jede Kompositfüllung in der Veneer Clinic beginnt mit dieser ehrlichen Einschätzung.',
        ],
      },
      {
        title: 'So wird eine Kompositfüllung gemacht',
        intro: ['Eine Kompositfüllung erfolgt in einem einzigen Termin, meist unter örtlicher Betäubung.'],
        inline: [
          { title: 'Untersuchung des Zahns.', text: 'Der Zahnarzt untersucht den Zahn, prüft, wie tief die Karies reicht, und macht bei Bedarf ein Röntgenbild, um zwischen die Zähne oder unter bestehende Füllungen zu sehen. Vor Beginn zeigen wir Ihnen, welche Zähne behandelt werden müssen und was jeweils dazugehört, damit Sie in Ruhe und ohne Überraschungen entscheiden.' },
          { title: 'Betäubung und Kariesentfernung.', text: 'Der Bereich wird betäubt, Sie spüren Druck und Vibration, aber keinen Schmerz. Dann wird die Karies vorsichtig entfernt, nur das weiche, geschädigte Gewebe, und möglichst viel gesunde Substanz bleibt erhalten. Eine versagende alte Füllung wird in diesem Schritt entfernt.' },
          { title: 'Der Zahn bleibt trocken.', text: 'Komposit haftet am besten auf einer sauberen, trockenen Oberfläche, daher wird der Zahn während des Füllens vom Speichel isoliert. Dieser Schritt ist wichtig: Feuchtigkeit beim Kleben ist einer der häufigsten Gründe für frühes Versagen von Füllungen.' },
          { title: 'Kleben und Schichten.', text: 'Die Zahnoberfläche wird mit einem Haftvermittler vorbereitet, und das Komposit wird in dünnen Schichten eingebracht. Jede Schicht härtet in Sekunden unter einer speziellen Lampe aus. Der schrittweise Aufbau ergibt ein stabileres Ergebnis und lässt den Zahnarzt die ursprüngliche Zahnform genau nachbilden. Bei tiefen Kavitäten wird unter die Füllung eine schützende Unterfüllung gelegt, um den Zahn vital zu erhalten.' },
          { title: 'Farbauswahl.', text: 'Vor dem Einbringen wird der Farbton gewählt, der zu Ihrem Zahn passt. An Frontzähnen können mehrere Farbtöne kombiniert werden, damit die Füllung mit der natürlichen Transluzenz des Schmelzes verschmilzt.' },
          { title: 'Formen, Kontrolle und Politur.', text: 'Nach dem Aushärten wird die Füllung den natürlichen Fissuren des Zahns nachgeformt. Der Biss wird mit dünnem Artikulationspapier geprüft und hohe Stellen werden angepasst, damit sich der Zahn beim Zubeißen nicht „zu hoch“ anfühlt. Zum Schluss wird die Füllung poliert, damit sie glatt ist und Verfärbungen widersteht.' },
          { title: 'Nach dem Termin.', text: 'Das Komposit ist vollständig ausgehärtet, wenn Sie vom Stuhl aufstehen, das Material selbst braucht also keine Wartezeit. Der einzige Grund zu warten ist die Betäubung: Kauen Sie nicht auf dieser Seite, bis sie nachlässt, damit Sie sich nicht unbemerkt in Wange oder Zunge beißen.' },
        ],
      },
    ],
    stats: [
      { value: '1', label: 'Sitzung' },
      { value: 'Sofort', label: 'Normal belastbar nach der Betäubung' },
      { value: 'Farbton', label: 'Wie Ihr Zahn' },
      { value: '30–60 Min.', label: 'Pro Zahn' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Grad II · Grad III 70 €',
    whatTitle: 'Was ist eine Kompositfüllung?',
    what: [
      'Eine Kompositfüllung ist eine zahnfarbene Reparatur für einen durch Karies oder einen kleinen Bruch geschädigten Zahn. Der kariöse Teil wird entfernt und der Zahn mit einem Kompositharz aufgebaut, das direkt an Schmelz und Dentin haftet.',
      'Sie erfolgt in einer Sitzung, meist unter örtlicher Betäubung. Das Material wird während des Termins lichtgehärtet, sodass der Zahn normal belastbar ist, sobald die Betäubung nachlässt.',
    ],
    calloutTitle: 'Eine Füllung behandelt Karies. Sie ist keine ästhetische Behandlung.',
    calloutText:
      'Eine Kompositfüllung baut den durch Karies oder einen kleinen Bruch geschädigten Teil des Zahns wieder auf. Sie ist eine Reparatur, keine Behandlung, um die Form zu ändern oder gesunde Zähne zu verblenden. Wenn Sie das Aussehen Ihres Lächelns ändern möchten, ist das ein anderes Gespräch.',
    compareTitle: 'Füllung oder etwas Stärkeres?',
    compareIntro: 'Die richtige Reparatur hängt davon ab, wie viel gesunder Zahn übrig ist:',
    compare: [
      { id: 'filling-2', tag: 'Am häufigsten', title: 'Kompositfüllung', text: 'Für kleine und mittlere Kavitäten und leichte Brüche. Die Karies wird entfernt und der Zahn schichtweise im gleichen Farbton aufgebaut, in einer Sitzung.' },
      { id: 'filling-3', tag: 'Wenn sie tief ist', title: 'Tiefe Füllung', text: 'Für Karies nahe am Nerv oder undichte alte Füllungen, auch Amalgam. Unter die Füllung kommt eine schützende Unterfüllung.' },
      { id: 'crown-zirconia', tag: 'Wenn sie zu groß ist', title: 'Eine Krone', text: 'Wenn zu wenig Zahn für eine haltbare Füllung übrig ist, schützt ihn eine Zirkonkrone Made in Germany. Wir erklären zuerst, warum.' },
    ],
    fitTitle: 'Wann ist eine Kompositfüllung die richtige Reparatur?',
    fitIntro: 'Eine Kompositfüllung ist meist die richtige Behandlung bei:',
    fit: [
      'Einer Karies, die bei einer Kontrolle oder im Röntgenbild gefunden wurde, bevor sie den Nerv erreicht',
      'Einem Zahn, der auf Süßes, Heißes oder Kaltes reagiert, oft das erste Zeichen von Karies',
      'Einer abgeplatzten oder gerissenen Kante mit genug Zahn, um eine Füllung zu halten',
      'Einer alten Füllung, die gerissen oder undicht ist oder an den Rändern Karies zeigt',
      'Abgenutzten Amalgamfüllungen, die ersetzt und zahnfarben erneuert werden können',
      'Einer Lücke oder rauen Kante, an der wegen Karies oder einer gebrochenen Füllung Essen hängen bleibt',
    ],
    fitNote:
      'Ist der Schaden zu groß für eine haltbare Füllung oder hat die Karies den Nerv erreicht, sagen wir es Ihnen vor Beginn und erklären, ob eine Krone oder eine Wurzelbehandlung besser ist.',
    stepsTitle: 'So läuft die Behandlung ab',
    stepsIntro: 'Die meisten Kompositfüllungen sind in einer Sitzung fertig, und der Zahn ist normal belastbar, sobald die Betäubung nachlässt:',
    steps: [
      { title: 'Untersuchung und Plan', text: 'Wir untersuchen den Zahn und machen bei Bedarf ein Röntgenbild. Wir zeigen Ihnen, welche Zähne behandelt werden müssen, und jeder erscheint in Ihrem schriftlichen Angebot.' },
      { title: 'Örtliche Betäubung', text: 'Der Bereich wird betäubt, Sie spüren Druck und Vibration, keinen Schmerz. Wir prüfen vor Beginn, dass er vollständig betäubt ist.' },
      { title: 'Kariesentfernung', text: 'Nur geschädigtes Gewebe wird entfernt, möglichst viel gesunde Substanz bleibt. Versagende alte Füllungen werden ebenfalls entfernt.' },
      { title: 'Kleben und Schichten', text: 'Der Zahn bleibt trocken, der Haftvermittler wird aufgetragen und das Komposit im richtigen Farbton in dünnen, lichtgehärteten Schichten eingebracht.' },
      { title: 'Formen und Polieren', text: 'Die Füllung wird dem Zahn nachgeformt, der Biss geprüft und angepasst und die Oberfläche poliert.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für Ihre Füllung?',
    whyBandText:
      'Wir entfernen nur die Karies, erhalten möglichst viel gesunden Zahn und sagen Ihnen offen, wenn eine Füllung nicht halten wird. Jeder behandlungsbedürftige Zahn erscheint im detaillierten schriftlichen Angebot, bevor wir beginnen. Der Preis, den wir nennen, ist der Preis, den Sie zahlen.',
    caseText: 'Zahnfarbene Füllungen',
    faq: [
      { question: 'Was kostet eine Kompositfüllung?', answer: 'Eine Füllung für eine mittelgroße Kavität (Grad II) kostet 50 € pro Zahn. Eine Füllung für eine tiefe Kavität nahe am Nerv (Grad III), mit schützender Unterfüllung, kostet 70 € pro Zahn. Der Grad richtet sich nach der Tiefe der Karies, und jeder Zahn erscheint einzeln in Ihrem schriftlichen Angebot, bevor wir beginnen.' },
      { question: 'Ist eine Kompositfüllung dasselbe wie Komposit-Veneers?', answer: 'Nein. Sie verwenden ähnliche Materialien, dienen aber verschiedenen Zwecken. Eine Kompositfüllung repariert einen Zahn, der durch Karies, einen kleinen Bruch oder eine versagende alte Füllung geschädigt ist. Der geschädigte Teil wird entfernt und der Zahn so aufgebaut, dass er wieder richtig funktioniert. Komposit-Veneers sind eine ästhetische Behandlung, bei der Material auf gesunde Zähne aufgetragen wird, um Form, Länge oder Farbe zu ändern. Diese Seite handelt von Füllungen: ein Problem am Zahn behandeln, nicht das Aussehen des Lächelns ändern.' },
      { question: 'Tut eine Füllung weh?', answer: 'Sie sollte nicht wehtun. Der Zahn wird zuerst betäubt und vor Beginn geprüft. Während die Karies entfernt wird, spüren Sie Druck und Vibration, aber keinen Schmerz. Sehr kleine, oberflächliche Füllungen brauchen manchmal keine Betäubung, aber die Wahl liegt bei Ihnen. Möchten Sie eine Betäubung, sagen Sie es einfach. Danach kann der Zahn einige Tage leicht empfindlich auf Kälte oder Druck sein, besonders nach einer tiefen Füllung. Das legt sich meist von selbst.' },
      { question: 'Kann ich direkt nach der Füllung essen?', answer: 'Ja, was die Füllung betrifft. Das Komposit wird während des Termins lichtgehärtet und ist beim Gehen vollständig ausgehärtet. Der einzige Grund zu warten ist die Betäubung. Bis sie nachlässt, kauen Sie nicht auf dieser Seite und meiden sehr heiße Getränke, damit Sie sich nicht unbemerkt in die Wange beißen oder verbrennen.' },
      { question: 'Wie lange hält eine Kompositfüllung?', answer: 'Bei guter Pflege viele Jahre. Kleine und mittlere Füllungen halten am längsten. Große, solche auf stark belasteten Backenzähnen und bei Menschen, die mit den Zähnen knirschen, brauchen meist früher Aufmerksamkeit. Der häufigste Grund für den Ersatz einer Füllung ist neue Karies an ihren Rändern, daher machen Zähneputzen mit Fluoridzahnpasta, Reinigung der Zahnzwischenräume und regelmäßige Kontrollen den größten Unterschied.' },
      { question: 'Können Sie meine alten Amalgamfüllungen ersetzen?', answer: 'Ja, wenn sie ersetzt werden müssen. Ist ein Amalgam gerissen, undicht, von Karies umgeben oder bricht der Zahn daneben, entfernen wir es und bauen den Zahn mit einer weißen Füllung oder, wenn er geschwächt ist, mit einer Krone auf. Intakte Amalgamfüllungen nur aus optischen Gründen zu ersetzen, empfehlen wir nicht ohne Besprechung der Vor- und Nachteile, denn jeder Ersatz entfernt etwas mehr Zahn. Der Zahnarzt sagt Ihnen offen, welche Füllungen Aufmerksamkeit brauchen.' },
      { question: 'Was, wenn die Karies zu groß für eine Füllung ist?', answer: 'Dann ist eine Füllung nicht die richtige Reparatur, und wir sagen es Ihnen vor Beginn. Eine große Füllung in einem Zahn mit wenig Restsubstanz reißt wahrscheinlich oder bricht den Zahn. Dann schützt eine Krone besser: In der Veneer Clinic werden Kronen aus Zirkon Made in Germany oder E-max gefertigt. Hat die Karies den Nerv erreicht, kann zuerst eine Wurzelbehandlung nötig sein. Alles wird erklärt und im Angebot festgehalten, bevor die Arbeit beginnt.' },
      { question: 'Brauche ich vor der Füllung ein Röntgenbild?', answer: 'Nicht immer. Karies auf der Kaufläche oder an der Vorderseite eines Zahns ist oft direkt sichtbar. Karies zwischen den Zähnen, unter alten Füllungen oder nahe am Nerv ist ohne Röntgenbild oft nicht zu sehen. Dann zeigt das Röntgenbild, wie tief das Problem reicht und ob eine Füllung die richtige Behandlung ist. Es wird nur gemacht, wenn Ihr Fall es erfordert.' },
      { question: 'Hat die Füllung die Farbe meines Zahns?', answer: 'Ja. Der Farbton wird vor dem Einbringen gewählt, und an Frontzähnen können mehrere Farbtöne kombiniert werden, damit sie mit dem natürlichen Schmelz verschmilzt. Planen Sie ein Bleaching, machen Sie es vor sichtbaren Füllungen. Bleaching hellt natürliche Zähne auf, ändert aber nicht die Farbe bestehender Füllungen, daher bringt die Anpassung der Füllung an den neuen Farbton das beste Ergebnis.' },
      { question: 'Wie viele Füllungen sind in einer Sitzung möglich?', answer: 'Oft mehrere, je nach Lage und Tiefe. Füllungen auf derselben Seite werden meist zusammen mit einer einzigen Betäubung gemacht. Bei viel Arbeit können wir sie während Ihres Aufenthalts auf mehrere Termine verteilen, damit Sie sich wohlfühlen und der Biss richtig geprüft wird. Der Zahnarzt plant die Reihenfolge mit Ihnen.' },
      { question: 'Ist es normal, dass der Zahn danach empfindlich ist?', answer: 'Etwas Empfindlichkeit auf Kälte, Süßes oder beim Beißen ist einige Tage nach einer Füllung üblich, besonders nach einer tiefen. Sie lässt meist von selbst nach. Kontaktieren Sie uns, wenn sie stärker statt schwächer wird, länger als zwei Wochen anhält, der Zahn von selbst schmerzt oder sich der Biss ungleichmäßig anfühlt. Eine zu hohe Stelle an der Füllung ist leicht anzupassen.' },
      { question: 'Was umfasst das Angebot für Füllungen?', answer: 'Ihr detailliertes schriftliches Angebot zeigt jeden Zahn, der eine Füllung braucht, mit Grad und Preis, und alles andere, was Ihr Fall erfordert, etwa eine Krone oder Wurzelbehandlung, wo eine Füllung nicht halten würde. Die Kariesbehandlung wird nach Priorität geplant. Nach Behandlungsbeginn kommt nichts hinzu, was wir nicht vorher mit Ihnen besprochen haben.' },
    ],
  },
  it: {
    name: 'Otturazioni in composito',
    eyebrow: 'Trattamenti generali · Albania',
    subtitle: 'Un’otturazione del colore del dente che ripara carie o piccole fratture in una seduta, ben adesa e della stessa tonalità.',
    lead: 'La carie si rimuove e il dente si ricostruisce in una seduta, con un’otturazione del colore del dente che aderisce bene e non si nota.',
    kicker: 'Otturazioni in composito a Tirana, Albania',
    articleTitle: 'Otturazioni in composito a Tirana: curare la carie, conservare il dente',
    intro: [
      'L’otturazione in composito ripara un dente danneggiato dalla carie con un materiale del colore del dente che aderisce direttamente a ciò che resta.',
      'È il modo più comune di curare la carie. La parte cariata si rimuove, il dente si ricostruisce a strati e l’otturazione finita si modella sul morso e si abbina alla tonalità del dente, così si nota appena.',
      'Alla Veneer Clinic, un’otturazione per una carie di media entità (grado II) costa 50 € per dente, e un’otturazione per una carie profonda vicina al nervo (grado III) costa 70 € per dente.',
    ],
    sections: [
      {
        title: 'Perché del colore del dente',
        intro: [
          'Le vecchie otturazioni in amalgama d’argento restano in sede soprattutto grazie alla loro forma, il che di solito richiede di togliere più dente sano per bloccarle. Un’otturazione bianca aderisce chimicamente a smalto e dentina, quindi la preparazione può essere più piccola e si conserva più dente naturale.',
          'Inoltre sembra naturale. L’otturazione si abbina alla tonalità del dente, quindi una riparazione su un dente anteriore o su un molare visibile non si nota quando sorridi o parli. La maggior parte delle persone dimentica in poche settimane quale dente è stato otturato.',
        ],
      },
      {
        title: 'Una riparazione, non un trattamento estetico',
        intro: [
          'L’otturazione in composito cura una carie, una piccola frattura o una vecchia otturazione che sta cedendo. Non è la stessa cosa delle faccette in composito, dove il materiale si aggiunge su denti sani per cambiarne forma o colore. L’obiettivo è semplice: eliminare il problema e far funzionare di nuovo bene il dente, in modo duraturo e con un aspetto naturale.',
        ],
      },
      {
        title: 'Curarla in tempo',
        intro: [
          'La carie di solito non fa male finché non è profonda. Quando il dente inizia a dolere, una piccola carie può essere diventata una che richiede un’otturazione molto più grande, una cura canalare o una corona. Curarla presto mantiene l’otturazione piccola, il dente forte e il trattamento semplice.',
          'Alcune carie si nascondono tra i denti o sotto vecchie otturazioni. La panoramica che ci invii prima del viaggio spesso le mostra fin dall’inizio, e quando sospettiamo qualcosa che l’occhio non vede, una radiografia lo conferma.',
        ],
      },
      {
        title: 'Quando l’otturazione non basta',
        intro: [
          'Le otturazioni in composito funzionano meglio per riparazioni piccole e medie. Quando manca gran parte del dente o è gravemente incrinato, un’otturazione grande ha molte probabilità di rompersi. In questo caso consigliamo una corona in zirconia Made in Germany o E-max, realizzata in laboratorio, e ti spieghiamo perché prima di fare qualsiasi cosa.',
          'Ogni otturazione in composito alla Veneer Clinic inizia con questa valutazione onesta.',
        ],
      },
      {
        title: 'Come si fa un’otturazione in composito',
        intro: ['L’otturazione in composito si fa in un unico appuntamento, di solito in anestesia locale.'],
        inline: [
          { title: 'Controllo del dente.', text: 'Il dentista esamina il dente, verifica quanto è profonda la carie e, quando serve, fa una radiografia per vedere tra i denti o sotto le otturazioni esistenti. Prima di iniziare ti mostriamo quali denti vanno curati e cosa comporta ciascuno, così decidi con calma e senza sorprese.' },
          { title: 'Anestesia e rimozione della carie.', text: 'La zona viene anestetizzata, quindi senti pressione e vibrazione ma non dolore. Poi la carie si rimuove con cura, togliendo solo il tessuto molle e danneggiato e conservando quanta più struttura sana possibile. Se una vecchia otturazione sta cedendo, si rimuove in questa fase.' },
          { title: 'Il dente resta asciutto.', text: 'Il composito aderisce meglio a una superficie pulita e asciutta, quindi il dente si isola dalla saliva durante l’otturazione. Questo passaggio conta: l’umidità durante l’adesione è una delle cause più comuni per cui le otturazioni falliscono presto.' },
          { title: 'Adesione e stratificazione.', text: 'La superficie del dente si prepara con un adesivo, e il composito si applica in strati sottili. Ogni strato indurisce in pochi secondi con una lampada speciale. Costruire l’otturazione gradualmente dà un risultato più resistente e permette al dentista di riprodurre con precisione la forma originale del dente. Nelle carie profonde, sotto l’otturazione si applica un sottofondo protettivo per mantenere il dente vitale.' },
          { title: 'Scelta del colore.', text: 'Prima di applicare il materiale si sceglie la tonalità che corrisponde al tuo dente. Sui denti anteriori si possono combinare più tonalità, perché l’otturazione si fonda con la traslucenza naturale dello smalto.' },
          { title: 'Modellazione, controllo e lucidatura.', text: 'Una volta indurita, l’otturazione si modella secondo i solchi naturali del dente. Il morso si controlla con una sottile carta da articolazione, e i punti alti si regolano perché il dente non sembri “alto” quando chiudi. Infine l’otturazione si lucida, perché sia liscia e resista alle macchie.' },
          { title: 'Dopo l’appuntamento.', text: 'Il composito è completamente indurito quando ti alzi dalla poltrona, quindi il materiale non richiede attese. L’unico motivo per aspettare prima di mangiare è l’anestesia: evita di masticare da quel lato finché passa, per non morderti guancia o lingua senza accorgertene.' },
        ],
      },
    ],
    stats: [
      { value: '1', label: 'Seduta' },
      { value: 'Subito', label: 'Uso normale dopo l’anestesia' },
      { value: 'Tonalità', label: 'Come il tuo dente' },
      { value: '30–60 min', label: 'Per dente' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Grado II · grado III 70 €',
    whatTitle: 'Cos’è un’otturazione in composito?',
    what: [
      'L’otturazione in composito è una riparazione del colore del dente per un dente danneggiato da carie o da una piccola frattura. La parte cariata si rimuove e il dente si ricostruisce con una resina composita che aderisce direttamente a smalto e dentina.',
      'Si fa in una seduta, di solito in anestesia locale. Il materiale si indurisce con la luce durante l’appuntamento, quindi il dente si può usare normalmente appena passa l’anestesia.',
    ],
    calloutTitle: 'L’otturazione cura la carie. Non è un trattamento estetico.',
    calloutText:
      'L’otturazione in composito ricostruisce la parte del dente danneggiata dalla carie o da una piccola frattura. È una riparazione, non un trattamento per cambiare forma o coprire denti sani. Se vuoi cambiare l’aspetto del tuo sorriso, è un altro discorso.',
    compareTitle: 'Otturazione o qualcosa di più resistente?',
    compareIntro: 'La riparazione giusta dipende da quanto dente sano è rimasto:',
    compare: [
      { id: 'filling-2', tag: 'La più comune', title: 'Otturazione in composito', text: 'Per carie piccole e medie e fratture lievi. La carie si rimuove e il dente si ricostruisce a strati nella stessa tonalità, in una seduta.' },
      { id: 'filling-3', tag: 'Quando è profonda', title: 'Otturazione profonda', text: 'Per carie vicine al nervo, o vecchie otturazioni infiltrate, comprese le amalgame. Sotto l’otturazione si applica un sottofondo protettivo.' },
      { id: 'crown-zirconia', tag: 'Quando è troppo grande', title: 'Una corona', text: 'Quando resta troppo poco dente perché l’otturazione duri, una corona in zirconia Made in Germany lo protegge. Prima ti spieghiamo perché.' },
    ],
    fitTitle: 'Quando l’otturazione in composito è la riparazione giusta?',
    fitIntro: 'L’otturazione in composito di solito è il trattamento giusto se hai:',
    fit: [
      'Una carie trovata durante un controllo o in radiografia, prima che raggiunga il nervo',
      'Un dente che reagisce a dolce, caldo o freddo, spesso il primo segno di carie',
      'Un bordo scheggiato o incrinato con abbastanza dente per sostenere un’otturazione',
      'Una vecchia otturazione incrinata, infiltrata o con carie che si forma ai bordi',
      'Amalgame consumate da sostituire, che si possono rifare del colore del dente',
      'Uno spazio o un bordo ruvido dove il cibo si ferma per una carie o un’otturazione rotta',
    ],
    fitNote:
      'Se il danno è troppo grande perché l’otturazione duri, o la carie ha raggiunto il nervo, te lo diciamo prima di iniziare e ti spieghiamo se è meglio una corona o una cura canalare.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'La maggior parte delle otturazioni in composito si completa in una seduta, e il dente si usa normalmente appena passa l’anestesia:',
    steps: [
      { title: 'Controllo e piano', text: 'Esaminiamo il dente e, se serve, facciamo una radiografia. Ti mostriamo quali denti vanno curati, e ciascuno compare nel preventivo scritto.' },
      { title: 'Anestesia locale', text: 'La zona viene anestetizzata così senti pressione e vibrazione, non dolore. Controlliamo che sia completamente anestetizzata prima di iniziare.' },
      { title: 'Rimozione della carie', text: 'Si rimuove solo il tessuto danneggiato, conservando quanta più struttura sana possibile. Si rimuovono anche le vecchie otturazioni che cedono.' },
      { title: 'Adesione e stratificazione', text: 'Il dente resta asciutto, si applica l’adesivo e il composito nella tonalità giusta si stratifica in strati sottili, induriti con la luce.' },
      { title: 'Modellazione e lucidatura', text: 'L’otturazione si modella sul dente, il morso si controlla e regola, e la superficie si lucida.' },
    ],
    whyBandTitle: 'Perché Veneer Clinic per la tua otturazione?',
    whyBandText:
      'Rimuoviamo solo la carie, conserviamo quanto più dente sano possibile e ti diciamo apertamente quando un’otturazione non durerà. Ogni dente da curare compare nel preventivo scritto dettagliato prima di iniziare. Il prezzo che ti diamo è il prezzo che paghi.',
    caseText: 'Otturazioni del colore del dente',
    faq: [
      { question: 'Quanto costa un’otturazione in composito?', answer: 'Un’otturazione per una carie di media entità (grado II) costa 50 € per dente. Un’otturazione per una carie profonda vicina al nervo (grado III), con sottofondo protettivo, costa 70 € per dente. Il grado dipende dalla profondità della carie, e ogni dente compare separatamente nel preventivo scritto prima di iniziare.' },
      { question: 'L’otturazione in composito è uguale alle faccette in composito?', answer: 'No. Usano materiali simili ma servono a cose diverse. L’otturazione in composito ripara un dente danneggiato da carie, una piccola frattura o una vecchia otturazione che cede. La parte danneggiata si rimuove e il dente si ricostruisce perché funzioni di nuovo bene. Le faccette in composito sono un trattamento estetico che aggiunge materiale su denti sani per cambiarne forma, lunghezza o colore. Questa pagina parla di otturazioni: curare un problema del dente, non cambiare l’aspetto del sorriso.' },
      { question: 'L’otturazione fa male?', answer: 'Non dovrebbe. Prima il dente viene anestetizzato e lo controlliamo prima di iniziare. Durante la rimozione della carie sentirai pressione e vibrazione, ma non dolore. Le otturazioni molto piccole e superficiali a volte non richiedono anestesia, ma la scelta è tua. Se preferisci l’anestesia, dillo. Dopo, il dente può essere un po’ sensibile al freddo o alla pressione per qualche giorno, soprattutto dopo un’otturazione profonda. Di solito passa da sola.' },
      { question: 'Posso mangiare subito dopo l’otturazione?', answer: 'Sì, per quanto riguarda l’otturazione. Il composito si indurisce con la luce durante l’appuntamento, quindi quando esci è completamente indurito. L’unico motivo per aspettare è l’anestesia. Finché non passa, evita di masticare da quel lato e le bevande molto calde, per non morderti la guancia o scottarti senza accorgertene.' },
      { question: 'Quanto dura un’otturazione in composito?', answer: 'Con una buona cura, molti anni. Le otturazioni piccole e medie durano di più. Quelle grandi, quelle sui molari molto caricati e quelle di chi digrigna i denti di solito richiedono attenzione prima. Il motivo più comune per sostituire un’otturazione è una nuova carie ai bordi, quindi lavarsi i denti con dentifricio al fluoro, pulire tra i denti e fare controlli regolari fa la differenza maggiore.' },
      { question: 'Potete sostituire le mie vecchie otturazioni in amalgama?', answer: 'Sì, quando vanno sostituite. Se un’amalgama è incrinata, infiltrata, ha carie attorno o il dente vicino si sta rompendo, la rimuoviamo e ricostruiamo il dente con un’otturazione bianca o, se il dente è indebolito, con una corona. Non consigliamo di sostituire amalgame sane solo per l’aspetto senza discutere pro e contro, perché ogni sostituzione toglie un po’ di dente. Il dentista ti dice apertamente quali otturazioni richiedono attenzione.' },
      { question: 'E se la carie è troppo grande per un’otturazione?', answer: 'Allora l’otturazione non è la riparazione giusta, e te lo diciamo prima di iniziare. Un’otturazione grande in un dente con poca struttura rimasta rischia di incrinarsi o di rompere il dente. In questo caso una corona protegge meglio: alla Veneer Clinic le corone si realizzano in zirconia Made in Germany o E-max. Se la carie ha raggiunto il nervo, potrebbe servire prima una cura canalare. Tutto viene spiegato e scritto nel preventivo prima di iniziare il lavoro.' },
      { question: 'Serve una radiografia prima dell’otturazione?', answer: 'Non sempre. La carie sulla superficie masticatoria o sulla parte anteriore del dente spesso si vede direttamente. Quella tra i denti, sotto vecchie otturazioni o vicino al nervo spesso non si vede senza radiografia. In questi casi la radiografia mostra quanto è profondo il problema e se l’otturazione è il trattamento giusto. Si fa solo quando il tuo caso lo richiede.' },
      { question: 'L’otturazione avrà il colore del mio dente?', answer: 'Sì. La tonalità si sceglie prima di applicare il materiale, e sui denti anteriori si possono combinare più tonalità perché si fonda con lo smalto naturale. Se pensi di fare lo sbiancamento, fallo prima delle otturazioni visibili. Lo sbiancamento schiarisce i denti naturali ma non cambia il colore delle otturazioni esistenti, quindi abbinare l’otturazione alla nuova tonalità dà il risultato migliore.' },
      { question: 'Quante otturazioni si possono fare in una seduta?', answer: 'Spesso diverse, a seconda di posizione e profondità. Le otturazioni sullo stesso lato della bocca di solito si fanno insieme con un’unica anestesia. Se c’è molto lavoro, possiamo dividerlo in più appuntamenti durante il tuo soggiorno, così stai comodo e il morso si controlla bene. Il dentista pianifica l’ordine con te.' },
      { question: 'È normale che il dente sia sensibile dopo?', answer: 'Un po’ di sensibilità al freddo, al dolce o al morso è comune per qualche giorno dopo un’otturazione, soprattutto se profonda. Di solito svanisce da sola. Contattaci se la sensibilità peggiora invece di migliorare, dura più di due settimane, il dente fa male da solo o il morso sembra irregolare. Un punto alto sull’otturazione si regola facilmente.' },
      { question: 'Cosa comprende il preventivo per le otturazioni?', answer: 'Il preventivo scritto dettagliato mostra ogni dente che ha bisogno di un’otturazione, con grado e prezzo, e tutto ciò che serve al tuo caso, come una corona o una cura canalare dove l’otturazione non durerebbe. La cura delle carie si pianifica per priorità. Una volta iniziato il trattamento, non si aggiunge nulla che non abbiamo discusso prima con te.' },
    ],
  },
};

export default function CompositeFillingsPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="filling-2"
      heroImage={images.clinicGallery[1] ?? images.heroAfter}
      whatImage={images.results[2]?.[0] ?? images.heroAfter}
    />
  );
}
