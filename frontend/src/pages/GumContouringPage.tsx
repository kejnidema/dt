import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Konturimi i mishrave të dhëmbëve',
    eyebrow: 'Estetikë · Shqipëri',
    subtitle: 'Rimodelim me lazer i linjës së mishrave për një buzëqeshje të baraspeshuar, falas me Hollywood Smile.',
    lead: 'Një riformim i shpejtë i vijës së mishrave zbulon më shumë nga dhëmbët tuaj natyralë për një buzëqeshje më të barabartë dhe të balancuar.',
    kicker: 'Konturimi i mishrave në Tiranë, Shqipëri',
    articleTitle: 'Konturimi i mishrave me lazer: rimodelimi i kornizës së dhëmbëve tuaj',
    intro: [
      'Shumica e atyre që nuk janë të kënaqur me buzëqeshjen e vet shikojnë dhëmbët. Shpesh dhëmbët janë në rregull, dhe ajo që nuk shkon është korniza përreth tyre.',
      'Konturimi i mishrave e rimodelon atë kornizë. Me lazer hiqet indi gingival i tepërt dhe kufiri rivizatohet që të ndjekë një vijë të njëtrajtshme dhe natyrale përgjatë buzëqeshjes: zbulohet më shumë dhëmb aty ku mishi zbret tepër dhe barazohen pikat ku ai ngrihet a ulet nga një dhëmb te tjetri. Një seancë, anestezi lokale dhe një rezultat i dukshëm para se të ngriheni nga karrigia.',
      'Është një nga ndërhyrjet më të vogla të stomatologjisë estetike dhe një nga ato me efekt më të madh. Syri është jashtëzakonisht i ndjeshëm ndaj simetrisë së mishrave: njerëzit e vërejnë se diçka nuk shkon pa ditur ta emërtojnë, dhe një milimetër te kufiri e ndryshon gjatësinë e dukshme të një dhëmbi shumë më tepër nga sa pritet.',
      'Në Veneer Clinic, konturimi i mishrave dhe i dhëmbëve ofrohet falas për çdo pacient të Hollywood Smile dhe bëhet në të njëjtin udhëtim, para se të përgatiten fasetat ose kurorat.',
    ],
    sections: [
      {
        title: 'Çfarë ndryshon vërtet',
        intro: ['Tri gjëra, zakonisht.'],
        inline: [
          { title: 'Një buzëqeshje gingivale.', text: 'Shumë mish në pamje në raport me dhëmbin, kështu që dhëmbët duken të shkurtër dhe katrorë edhe kur kanë përmasa krejt normale. Është problem përmasash, jo i dhëmbëve, dhe rimodelimi i kufirit e zgjidh drejtpërdrejt.' },
          { title: 'Një linjë gingivale e parregullt.', text: 'Një dhëmb një milimetër më poshtë se simetriku i tij. Mezi përshkruhet, dallohet menjëherë, dhe është arsyeja pse një buzëqeshje del e panjëtrajtshme në fotografi pa pasur dhëmbët asgjë të keqe.' },
          { title: 'Korniza e restaurimeve.', text: 'Fasetat dhe kurorat punohen që të takojnë mishin. Të ndërtuara mbi një kufi të parregullt, do të duken gjithmonë paksa jashtë vendit, sado mirë të jenë bërë. Konturoni më parë, dhe restaurimet punohen mbi linjën që do të mbani vërtet.' },
        ],
      },
      {
        title: 'Pse këtu lazeri ka rëndësi',
        intro: [
          'Më shumë se në shumicën e trajtimeve, sepse këtu punohet në fraksione milimetri mbi dhëmbë që njerëzit i shohin nga një metër largësi.',
          'Lazeri pret dhe mbyll njëkohësisht. Në praktikë kjo do të thotë gjakderdhje thuajse zero, zakonisht asnjë qepje dhe, pjesa që ka rëndësi klinike, një fushë e pastër gjatë gjithë kohës. Dentisti sheh me saktësi çfarë po modelon ndërsa e modelon, në vend që të punojë përmes indit që rrjedh dhe ta vlerësojë rezultatin më pas.',
          'Për pacientin kjo përkthehet në një procedurë nën një orë, pa qepje për të hequr dhe me aktivitet normal po atë pasdite.',
        ],
      },
      {
        title: 'Projektimi i linjës',
        intro: [
          'Procedura në vetvete është e shkurtër. Thuajse e gjithë mjeshtëria qëndron te ajo që ndodh para se të fillojë.',
          'Një linjë gingivale nuk është një buzë e drejtë. Ajo harkohet rreth secilit dhëmb, qëndron paksa më lart te dhëmbët e qenit se te prerësit dhe pasqyrohet në të dyja anët e vijës së mesit të fytyrës. Me atë gjeometri të saktë, rezultati duket si mish natyral. E gabuar, duket si punë dentare, sado mirë të shërohet.',
          'Prandaj nisim nga përmasat dhe jo nga mishrat: sa dhëmb duket me buzët në qetësi, sa mish shfaqet kur buzëqeshni natyrshëm (që rrallë përkon me buzëqeshjen me kërkesë), ku bie linja e buzëve dhe si krahasohet ana e majtë me të djathtën.',
          'Kufiri i ri pastaj shënohet dhe ju tregohet përpara se të hiqet asgjë. Ju shihni ku do të qëndrojë linja dhe pse. Ky është momenti për të ndryshuar mendje, dhe ekziston pikërisht sepse indi gingival nuk rritet sërish sipas dëshirës.',
        ],
      },
      {
        title: 'Rimodelimi',
        intro: [
          'Zona anestezohet me anestezi lokale. Indi gingival është i ndjeshëm dhe ky hap nuk nxitohet.',
          'Lazeri më pas heq indin përgjatë linjës së miratuar, duke e mbyllur ndërsa punon. Sipas numrit të dhëmbëve, kjo zgjat nga pesëmbëdhjetë minuta për një dhëmb të vetëm deri në rreth një orë për të gjithë linjën e buzëqeshjes. Gjakderdhje minimale dhe zakonisht asnjë qepje. Kur duhet, edhe cepat e dhëmbëve rafinohen lehtë për një buzëqeshje më simetrike.',
          'Formën e re e shihni menjëherë, në pasqyrë, para se të largoheni.',
        ],
      },
      {
        title: 'Kufiri që përcakton gjithçka',
        intro: [
          'Ekziston një brez indi që e lidh mishin me dhëmbin dhe që duhet të mbetet i paprekur. Puna brenda tij është ajo që dallon një rezultat që qëndron i shëndetshëm për dhjetëvjeçarë nga një që sjell probleme pas pak vitesh.',
          'Shumica e rasteve të buzëqeshjes gingivale dhe të asimetrisë bien rehat brenda atij kufiri, dhe ndryshimi i dukshëm është i konsiderueshëm edhe kur indi i hequr është i paktë. Kur një rast i afrohet kufirit, e themi në vlerësim dhe jo në mes të procedurës.',
        ],
      },
      {
        title: 'Ku qëndron në një rindërtim buzëqeshjeje',
        intro: [
          'Konturimi shpesh është hapi i parë, jo i fundit.',
          'Nëse do të bëni faseta, kurora ose kompozit, linja gingivale është korniza me të cilën ato restaurime duhet të takohen. Rimodelimi më parë do të thotë që laboratori punon mbi kufirin që do të keni vërtet. Ta bësh më pas do të thotë ose të pranosh një kompromis, ose të ribësh një punë të paguar tashmë.',
          'Zbardhimi është më i lirshëm dhe mund të bëhet para ose pas. Nëse kombinoni trajtime, na e thoni në vlerësim që takimet të radhiten si duhet.',
        ],
      },
      {
        title: 'Opsionet e teknikës',
        intro: ['Të dyja teknikat rimodelojnë linjën e mishrave. Ndryshimi qëndron te saktësia, gjakderdhja dhe koha e shërimit:'],
        cards: [
          { title: 'Rimodelim me lazer (ai që përdorim)', text: 'Lazeri heq indin e tepërt dhe e mbyll ndërsa punon, prandaj gjakderdhja është minimale dhe zakonisht nuk nevojiten qepje. I saktë deri në fraksione milimetri, gjë vendimtare te dhëmbët e përparmë.' },
          { title: 'Rimodelim me bisturi', text: 'Rimodelim kirurgjikal klasik, i përshtatshëm kur duhet ripozicionuar një sasi më e madhe indi. I besueshëm dhe i dokumentuar mirë, me pak më shumë gjakderdhje dhe një periudhë qetësimi më të gjatë.' },
        ],
        outro: ['Kur duhet punuar si te mishi ashtu edhe te dhëmbët, konturimi bëhet i pari dhe fasetat apo kurorat punohen mbi kufirin e shëruar, duke iu përshtatur kornizës së re dhe jo asaj të vjetër.'],
      },
      {
        title: 'Falas me Hollywood Smile',
        intro: [
          'Te ne konturimi i mishrave dhe i dhëmbëve është pjesë e planit të Hollywood Smile dhe nuk paguhet veçmas. Bëhet në të njëjtin udhëtim, zakonisht në takimin e parë, para se dhëmbët të përgatiten për faseta ose kurora.',
          'Kështu laboratori punon mbi linjën e re, dhe fasetat dalin të proporcionuara që në fillim. Nëse ju intereson vetëm konturimi, pa faseta, na shkruani dhe ju japim një ofertë për rastin tuaj.',
        ],
      },
    ],
    stats: [
      { value: '1 ditë', label: 'Koha e trajtimit' },
      { value: '1', label: 'Seancë' },
      { value: '30–60 min', label: 'Kohëzgjatja' },
      { value: '1–2 javë', label: 'Shërimi i plotë' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Pa qepje, rezultati duket menjëherë',
    whatTitle: 'Si funksionon konturimi me lazer?',
    what: [
      'Me lazer hiqet indi i tepërt i mishit dhe kufiri rivizatohet sipas një linje të shënuar e të miratuar me ju paraprakisht. Lazeri e mbyll indin ndërsa punon, prandaj gjakderdhja është minimale dhe zakonisht nuk nevojiten qepje.',
      'E gjithë puna bëhet me anestezi lokale, në 30 deri në 60 minuta sipas numrit të dhëmbëve. Forma e re duket menjëherë; ënjtja e lehtë te kufiri qetësohet gjatë ditëve në vijim, ndërsa indi merr konturin përfundimtar.',
    ],
    calloutTitle: 'Shpesh hapi i parë i një buzëqeshjeje të re',
    calloutText:
      'Një linjë gingivale e baraspeshuar është ajo që i bën fasetat dhe kurorat të duken si dhëmbë dhe jo si punë dentare. Prandaj konturimi zakonisht bëhet i pari: restaurimet punohen mbi linjën e re dhe rezultati duket i proporcionuar, jo thjesht më i bardhë.',
    compareTitle: 'Si e ofrojmë konturimin',
    compareIntro: 'Konturimi mund të bëhet më vete ose si hapi i parë i një rindërtimi buzëqeshjeje:',
    compare: [
      { id: 'gum-contouring', tag: 'Ky trajtim', title: 'Rimodelim me lazer', text: 'Linja e mishrave rimodelohet me lazer, me gjakderdhje minimale dhe pa qepje. I saktë deri në fraksione milimetri, gjë vendimtare te dhëmbët e përparmë.' },
      { id: 'hollywood-smile', tag: 'E kombinuar', title: 'Konturim + Hollywood Smile', text: 'Konturimi bëhet i pari dhe fasetat punohen mbi kufirin e ri, duke iu përshtatur kornizës së re dhe jo asaj të vjetër. Konturimi përfshihet falas.' },
      { id: 'crown-emax', tag: 'Për dhëmbë të shkurtër', title: 'Konturim + faseta e.max', text: 'Kur dhëmbët janë të konsumuar ose të vegjël, konturimi zbulon më shumë dhëmb dhe fasetat e.max rikthejnë gjatësinë dhe formën.' },
    ],
    fitTitle: 'Për kë është konturimi i mishrave?',
    fitIntro: 'Konturimi i mishrave ia vlen të merret parasysh nëse:',
    fit: [
      'Linja e mishrave qëndron më lart te disa dhëmbë se te të tjerët dhe buzëqeshja duket e panjëtrajtshme',
      'Kur buzëqeshni duket më shumë mish se dhëmb, dhe keni mësuar të buzëqeshni më pak',
      'Dhëmbët kanë përmasa normale, por mishi i tepërt i bën të duken të shkurtër',
      'Po planifikoni faseta ose kurora dhe doni kornizën e saktë përpara se të punohen',
      'Kurora të vjetra kanë lënë një kufi të errët ose të parregullt aty ku mishi takon dhëmbin',
      'Doni një ndryshim të dukshëm në një seancë, jo një trajtim të gjatë',
    ],
    fitNote:
      'Konturimi rimodelon ind të shëndetshëm. Nëse ka inflamacion aktiv ose gjakderdhje, e trajtojmë atë më parë: është një seancë e shkurtër dhe rezultati më pas është shumë më i qëndrueshëm.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'Konturimi kryhet në një seancë të vetme me anestezi lokale, dhe shumica e pacientëve kthehen në aktivitetin normal po atë pasdite:',
    steps: [
      { title: 'Vlerësimi dhe projektimi i linjës', text: 'Vlerësojmë linjën e mishrave në raport me buzët, përmasat e dhëmbëve dhe sa mish duket kur buzëqeshni natyrshëm. Kufiri i ri shënohet dhe miratohet me ju.' },
      { title: 'Anestezia lokale', text: 'Zona anestezohet me kujdes. Indi gingival është i ndjeshëm, prandaj ky hap nuk nxitohet: gjatë procedurës duhet të ndieni vetëm presion.' },
      { title: 'Rimodelimi me lazer', text: 'Lazeri heq indin përgjatë linjës së miratuar dhe e mbyll ndërsa punon. Gjakderdhje minimale, zakonisht pa qepje, 30 deri në 60 minuta.' },
      { title: 'Rezultati i menjëhershëm', text: 'Forma e re duket menjëherë. Mbetet një ënjtje e lehtë te kufiri, e cila qetësohet ditët në vijim ndërsa indi merr konturin përfundimtar.' },
      { title: 'Shërimi dhe kontrolli', text: 'Largoheni me udhëzime të shkruara. Shërimi i plotë zgjat një deri në dy javë, dhe rezultatin e kontrollojmë para se të ktheheni në shtëpi.' },
    ],
    whyBandTitle: 'Pse Veneer Clinic për konturimin e mishrave?',
    whyBandText:
      'Linja juaj e re shënohet dhe miratohet bashkë me ju përpara se të rimodelohet asgjë: ju tregojmë ku do të qëndrojë kufiri dhe pse, në raport me buzët dhe përmasat e dhëmbëve tuaj. Nuk hiqet asgjë që nuk mund të justifikohet, sepse indi gingival nuk rritet sërish sipas dëshirës.',
    caseText: 'Linjë e baraspeshuar e mishrave para fasetave',
    faq: [
      { question: 'Sa kushton konturimi i mishrave?', answer: 'Për pacientët e Hollywood Smile, konturimi i mishrave dhe i dhëmbëve është falas dhe bëhet në të njëjtin udhëtim. Nëse ju intereson vetëm konturimi, pa faseta apo kurora, na dërgoni një foto të buzëqeshjes dhe ju japim një ofertë për rastin tuaj.' },
      { question: 'A dhemb konturimi i mishrave?', answer: 'Jo. Zona anestezohet me anestezi lokale përpara se të fillojë gjithçka, dhe gjatë procedurës ndieni presion, jo dhimbje. Më pas, shumica e përshkruajnë një bezdi të lehtë, si një qiellzë e gërvishtur: ndihet kur hani diçka të nxehtë ose acidike, menaxhohet me qetësues të zakonshëm dhe kalon brenda pak ditësh. Meqë lazeri e mbyll indin ndërsa punon, zakonisht nuk ka gjakderdhje dhe nuk nevojiten qepje. Nëse keni ankth nga dentisti, na e thoni kur rezervoni.' },
      { question: 'Sa zgjat shërimi?', answer: 'Rezultati i dukshëm është aty menjëherë, dhe shumica kthehen në aktivitetin normal po atë pasdite, pa ënjtje të fytyrës. Ditët e para kufiri duket paksa i ënjtur dhe më i zbehtë se zakonisht. Gjatë një deri në dy javësh indi shtrëngohet, ngjyra kthehet në normalitet dhe konturi imtësohet: atëherë shihni rezultatin e vërtetë. Për një dasmë ose sesion fotografik, llogaritni dy javë në vend të dy ditëve.' },
      { question: 'A rritet sërish mishi?', answer: 'Jo aty ku ishte. Kur indi i tepërt hiqet siç duhet, kufiri i ri është i qëndrueshëm dhe rezultati konsiderohet i përhershëm. Ka një kthim të vogël natyral ditët e para ndërsa indi qetësohet, dhe këtë e marrim parasysh kur shënojmë kufirin. Ajo që mund ta ndryshojë linjën më vonë është sëmundja e mishrave, e cila shkakton tërheqje dhe jo rritje. Larja, filli dentar dhe kontrollet periodike e ruajnë rezultatin.' },
      { question: 'Sa mish mund të hiqet?', answer: 'Aq sa të ndryshojë ndjeshëm pamjen e buzëqeshjes, dhe jo aq sa të cenojë dhëmbin. Ekziston një kufi biologjik, një brez indi dhe kocke i lidhur me çdo dhëmb që duhet të mbetet i paprekur. Shumica e rasteve bien rehat brenda atij kufiri, dhe një milimetër te kufiri e ndryshon gjatësinë e dukshme të një dhëmbi shumë më tepër nga sa pritet. Në vlerësim ju themi çfarë është realisht e arritshme në rastin tuaj.' },
      { question: 'A e zgjidh buzëqeshjen gingivale?', answer: 'Po, dhe është një nga arsyet më të shpeshta pse na kontaktojnë. Buzëqeshja gingivale zakonisht është problem përmasash: dhëmbët kanë madhësi normale, por shumë mish i mbulon. Rimodelimi i kufirit zbulon më shumë sipërfaqe natyrale të dhëmbit dhe e rikthen atë raport në baraspeshë. Vlerësojmë sa mish duket kur buzëqeshni spontanisht, jo kur ju kërkohet të buzëqeshni: rrallë janë e njëjta gjë.' },
      { question: 'A mund ta bëj bashkë me fasetat?', answer: 'Po, dhe kështu vepron shumica e pacientëve tanë: me Hollywood Smile konturimi përfshihet falas. Radha ka rëndësi. Konturimi bëhet i pari, që fasetat të punohen mbi linjën e re gingivale dhe jo mbi të vjetrën. Mishi është korniza, dhe korniza duhet të jetë e saktë përpara se të vendoset piktura. Zbardhimi mund të bëhet para ose pas.' },
      { question: 'A do të kem ndjeshmëri pas trajtimit?', answer: 'Zakonisht jo. Konturimi heq ind të butë dhe nuk e zbulon sipërfaqen e rrënjës. Disa pacientë vërejnë ndjeshmëri të lehtë ndaj të nxehtit dhe të ftohtit për disa ditë, sidomos aty ku është rimodeluar më shumë ind. Një pastë për dhëmbë të ndjeshëm ndihmon. Nëse ndjeshmëria është e mprehtë ose zgjat më shumë se një-dy javë, na kontaktoni.' },
      { question: 'Lazer apo bisturi?', answer: 'Për rimodelim estetik të dhëmbëve të përparmë lazeri është më i mirë, dhe është ai që përdorim. Pret dhe mbyll njëkohësisht, prandaj gjakderdhja është minimale, zakonisht nuk nevojiten qepje dhe fusha e punës mbetet e pastër. Simetria gjykohet me sy, në largësi bisede, dhe një fraksion milimetri te një dhëmb i përparmë duket. Bisturia mbetet e përshtatshme kur ripozicionohet një sasi më e madhe indi, me më shumë gjakderdhje dhe qetësim pak më të gjatë.' },
      { question: 'A mbetet ndonjë shenjë e dukshme?', answer: 'Jo. Indi gingival shërohet ndryshe nga lëkura dhe nuk lë shenjë. Kufiri duket paksa më i zbehtë ditët e para dhe më pas rikthen ngjyrën normale. Ajo që përcakton nëse rezultati duket natyral është forma e linjës: një linjë që ndjek harkimin natyral rreth çdo dhëmbi duket si mish, një e prerë drejt jo. Brenda një-dy javësh nuk mbetet asgjë që tregon se është bërë diçka, përveç përmasave që duken të sakta.' },
      { question: 'A mund të bëhet vetëm te një ose dy dhëmbë?', answer: 'Po, dhe rastet me një dhëmb janë shumë të shpeshta. Shpesh problemi është një prerës anësor që qëndron një milimetër më poshtë se simetriku i tij: mezi përshkruhet, por syri e kap menjëherë. Këto raste zgjasin pesëmbëdhjetë a njëzet minuta dhe ndryshimi është i madh. Preferojmë të rregullojmë mirë një dhëmb sesa të rimodelojmë gjashtë.' },
      { question: 'Çfarë duhet të shmang pas trajtimit?', answer: 'Një-dy ditët e para shmangni ushqimet dhe pijet shumë të nxehta, gjërat acidike si agrumet a uthulla, ushqimet djegëse dhe alkoolin. Lani dhëmbët normalisht por butë rreth zonës dhe mos e prekni me gjuhë. Shmangni duhanin sa të mundeni, sepse ngadalëson shërimin e mishit. Largoheni me udhëzime të shkruara dhe një numër kontakti; pas dy javësh nuk mbetet asnjë kufizim.' },
    ],
  },
  en: {
    name: 'Gum Contouring',
    eyebrow: 'Aesthetics · Albania',
    subtitle: 'Laser reshaping of the gumline for a balanced smile, free with every Hollywood Smile.',
    lead: 'A quick reshaping of the gumline reveals more of your natural teeth for a more even, balanced smile.',
    kicker: 'Gum contouring in Tirana, Albania',
    articleTitle: 'Laser gum contouring: reshaping the frame around your teeth',
    intro: [
      'Most people unhappy with their smile look at their teeth. Often the teeth are fine, and what is wrong is the frame around them.',
      'Gum contouring reshapes that frame. Excess gum tissue is removed with a laser and the margin is redrawn to follow an even, natural line across the smile: more tooth is revealed where the gum sits too low, and points where it rises or drops from one tooth to the next are evened out. One session, local anaesthesia and a visible result before you get up from the chair.',
      'It is one of the smallest procedures in cosmetic dentistry and one of the most disproportionate in effect. The eye is extremely sensitive to gum symmetry: people notice something is off without being able to name it, and one millimetre at the margin changes the visible length of a tooth far more than you would expect.',
      'At Veneer Clinic, gum and tooth contouring is free for every Hollywood Smile patient and is done on the same trip, before your veneers or crowns are prepared.',
    ],
    sections: [
      {
        title: 'What actually changes',
        intro: ['Three things, usually.'],
        inline: [
          { title: 'A gummy smile.', text: 'Too much gum on show relative to tooth, so the teeth read as short and square even when they are perfectly normal in size. It is a proportion problem, not a tooth problem, and reshaping the margin fixes it directly.' },
          { title: 'An uneven gumline.', text: 'One tooth a millimetre lower than its partner. Barely describable, instantly visible, and the reason a smile looks uneven in photos without anything being wrong with the teeth.' },
          { title: 'The frame for restorations.', text: 'Veneers and crowns are made to meet the gum. Built on an uneven margin, they will always look slightly off, however well they are made. Contour first, and the restorations are made to the line you will actually keep.' },
        ],
      },
      {
        title: 'Why the laser matters here',
        intro: [
          'More than in most treatments, because here we work in fractions of a millimetre on teeth people see from a metre away.',
          'The laser cuts and seals at the same time. In practice that means almost no bleeding, usually no stitches and, the clinically important part, a clean field throughout. The dentist sees exactly what they are shaping as they shape it, instead of working through bleeding tissue and judging the result afterwards.',
          'For you, this means a procedure of under an hour, no stitches to remove and normal activity the same afternoon.',
        ],
      },
      {
        title: 'Designing the line',
        intro: [
          'The procedure itself is short. Almost all of the skill lies in what happens before it starts.',
          'A gumline is not a straight edge. It arches around each tooth, sits slightly higher at the canines than the incisors and mirrors on both sides of the facial midline. With that geometry right, the result reads as gum. Wrong, it reads as dental work, however well it heals.',
          'So we start from proportions, not from the gums: how much tooth shows with your lips at rest, how much gum shows when you smile naturally (which rarely matches a smile on request), where your lip line falls and how the left side compares with the right.',
          'The new margin is then marked and shown to you before anything is removed. You see where the line will sit and why. This is the moment to change your mind, and it exists precisely because gum tissue does not grow back on demand.',
        ],
      },
      {
        title: 'The reshaping',
        intro: [
          'The area is numbed with local anaesthesia. Gum tissue is sensitive and this step is not rushed.',
          'The laser then removes tissue along the approved line, sealing it as it works. Depending on the number of teeth, this takes from fifteen minutes for a single tooth to about an hour for the whole smile line. Minimal bleeding and usually no stitches. Where needed, the tooth edges are also gently refined for a more symmetrical smile.',
          'You see the new shape immediately, in the mirror, before you leave.',
        ],
      },
      {
        title: 'The limit that decides everything',
        intro: [
          'There is a band of tissue that attaches the gum to the tooth and must remain intact. Working within it is what separates a result that stays healthy for decades from one that causes problems a few years later.',
          'Most gummy smiles and asymmetries fall comfortably within that limit, and the visible change is considerable even when little tissue is removed. When a case approaches the limit, we tell you at the assessment, not halfway through the procedure.',
        ],
      },
      {
        title: 'Where it fits in a smile makeover',
        intro: [
          'Contouring is often the first step, not the last.',
          'If you are having veneers, crowns or composite, the gumline is the frame those restorations must meet. Reshaping first means the lab works to the margin you will actually have. Doing it afterwards means either accepting a compromise or redoing work you have already paid for.',
          'Whitening is more flexible and can be done before or after. If you are combining treatments, tell us at the assessment so the appointments are sequenced properly.',
        ],
      },
      {
        title: 'Technique options',
        intro: ['Both techniques reshape the gumline. The difference is precision, bleeding and healing time:'],
        cards: [
          { title: 'Laser reshaping (what we use)', text: 'The laser removes excess tissue and seals it as it works, so bleeding is minimal and stitches are usually not needed. Precise to fractions of a millimetre, which is decisive on front teeth.' },
          { title: 'Scalpel reshaping', text: 'Classic surgical reshaping, suitable when a larger amount of tissue needs repositioning. Reliable and well documented, with a little more bleeding and a longer settling period.' },
        ],
        outro: ['When both gum and teeth need work, contouring comes first and the veneers or crowns are made on the healed margin, fitted to the new frame rather than the old one.'],
      },
      {
        title: 'Free with Hollywood Smile',
        intro: [
          'With us, gum and tooth contouring is part of the Hollywood Smile plan and is not charged separately. It is done on the same trip, usually at the first appointment, before your teeth are prepared for veneers or crowns.',
          'That way the lab works to the new line and your veneers come out in proportion from the start. If you are only interested in contouring, without veneers, write to us and we will give you a quote for your case.',
        ],
      },
    ],
    stats: [
      { value: '1 day', label: 'Treatment time' },
      { value: '1', label: 'Session' },
      { value: '30–60 min', label: 'Duration' },
      { value: '1–2 weeks', label: 'Full healing' },
    ],
    priceTitle: 'Price',
    priceNote: 'No stitches, visible result immediately',
    whatTitle: 'How does laser contouring work?',
    what: [
      'Excess gum tissue is removed with a laser and the margin is redrawn along a line marked and approved with you beforehand. The laser seals the tissue as it works, so bleeding is minimal and stitches are usually not needed.',
      'Everything is done under local anaesthesia, in 30 to 60 minutes depending on the number of teeth. The new shape is visible immediately; slight swelling at the margin settles over the following days as the tissue takes its final contour.',
    ],
    calloutTitle: 'Often the first step of a new smile',
    calloutText:
      'A balanced gumline is what makes veneers and crowns look like teeth rather than dental work. That is why contouring usually comes first: the restorations are made to the new line and the result looks proportioned, not just whiter.',
    compareTitle: 'How we offer contouring',
    compareIntro: 'Contouring can be done on its own or as the first step of a smile makeover:',
    compare: [
      { id: 'gum-contouring', tag: 'This treatment', title: 'Laser reshaping', text: 'The gumline is reshaped with a laser, with minimal bleeding and no stitches. Precise to fractions of a millimetre, which is decisive on front teeth.' },
      { id: 'hollywood-smile', tag: 'Combined', title: 'Contouring + Hollywood Smile', text: 'Contouring comes first and the veneers are made on the new margin, fitted to the new frame rather than the old one. Contouring is included free.' },
      { id: 'crown-emax', tag: 'For short teeth', title: 'Contouring + E.max veneers', text: 'When teeth are worn or small, contouring reveals more tooth and E.max veneers restore length and shape.' },
    ],
    fitTitle: 'Who is gum contouring for?',
    fitIntro: 'Gum contouring is worth considering if:',
    fit: [
      'Your gumline sits higher on some teeth than others and your smile looks uneven',
      'More gum than tooth shows when you smile, and you have learned to smile less',
      'Your teeth are normal in size, but excess gum makes them look short',
      'You are planning veneers or crowns and want the right frame before they are made',
      'Old crowns have left a dark or uneven margin where gum meets tooth',
      'You want a visible change in one session, not a long treatment',
    ],
    fitNote:
      'Contouring reshapes healthy tissue. If there is active inflammation or bleeding, we treat that first: it is a short session and the result afterwards is far more stable.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'Contouring is done in a single session under local anaesthesia, and most patients return to normal activity the same afternoon:',
    steps: [
      { title: 'Assessment and line design', text: 'We assess your gumline against your lip line, tooth proportions and how much gum shows when you smile naturally. The new margin is marked and approved with you.' },
      { title: 'Local anaesthesia', text: 'The area is carefully numbed. Gum tissue is sensitive, so this step is not rushed: during the procedure you should feel only pressure.' },
      { title: 'Laser reshaping', text: 'The laser removes tissue along the approved line and seals it as it works. Minimal bleeding, usually no stitches, 30 to 60 minutes.' },
      { title: 'Immediate result', text: 'The new shape is visible straight away. Slight swelling at the margin remains and settles over the following days as the tissue takes its final contour.' },
      { title: 'Healing and check', text: 'You leave with written instructions. Full healing takes one to two weeks, and we check the result before you fly home.' },
    ],
    whyBandTitle: 'Why choose Veneer Clinic for gum contouring?',
    whyBandText:
      'Your new gumline is marked and approved with you before anything is reshaped: we show you where the margin will sit and why, relative to your lip line and tooth proportions. Nothing is removed that cannot be justified, because gum tissue does not grow back on demand.',
    caseText: 'A balanced gumline before veneers',
    faq: [
      { question: 'How much does gum contouring cost?', answer: 'For Hollywood Smile patients, gum and tooth contouring is free and done on the same trip. If you only want contouring, without veneers or crowns, send us a photo of your smile and we will give you a quote for your case.' },
      { question: 'Does gum contouring hurt?', answer: 'No. The area is numbed with local anaesthesia before anything starts, and during the procedure you feel pressure, not pain. Afterwards, most people describe mild discomfort, like a scratched palate: noticeable with hot or acidic food, managed with ordinary painkillers and gone within a few days. Because the laser seals tissue as it works, there is usually no bleeding and no stitches. If you are anxious about dentists, tell us when you book.' },
      { question: 'How long is the recovery?', answer: 'The visible result is there immediately, and most people return to normal activity the same afternoon, with no facial swelling. For the first few days the margin looks slightly swollen and paler than usual. Over one to two weeks the tissue tightens, the colour returns to normal and the contour refines: that is when you see the real result. For a wedding or photo shoot, allow two weeks rather than two days.' },
      { question: 'Will the gum grow back?', answer: 'Not where it was. When excess tissue is removed properly, the new margin is stable and the result is considered permanent. There is a small natural rebound in the first days as the tissue settles, and we account for it when marking the margin. What can change the line later is gum disease, which causes recession rather than regrowth. Brushing, flossing and regular check-ups preserve the result.' },
      { question: 'How much gum can be removed?', answer: 'Enough to change the look of your smile significantly, and not so much that it compromises the tooth. There is a biological limit, a band of tissue and bone attached to each tooth that must remain intact. Most cases fall comfortably within it, and one millimetre at the margin changes the visible length of a tooth much more than expected. At the assessment we tell you what is realistically achievable in your case.' },
      { question: 'Does it fix a gummy smile?', answer: 'Yes, and it is one of the most common reasons people contact us. A gummy smile is usually a proportion problem: the teeth are a normal size but too much gum covers them. Reshaping the margin reveals more natural tooth surface and restores the balance. We assess how much gum shows when you smile spontaneously, not when asked to smile: they are rarely the same.' },
      { question: 'Can I have it together with veneers?', answer: 'Yes, and most of our patients do: with Hollywood Smile, contouring is included free. The order matters. Contouring comes first, so the veneers are made to the new gumline rather than the old one. The gum is the frame, and the frame needs to be right before the picture goes in. Whitening can be done before or after.' },
      { question: 'Will I have sensitivity afterwards?', answer: 'Usually not. Contouring removes soft tissue and does not expose the root surface. Some patients notice mild sensitivity to hot and cold for a few days, especially where more tissue was reshaped. A sensitive-teeth toothpaste helps. If sensitivity is sharp or lasts more than a week or two, contact us.' },
      { question: 'Laser or scalpel?', answer: 'For aesthetic reshaping of front teeth the laser is better, and it is what we use. It cuts and seals at once, so bleeding is minimal, stitches are usually not needed and the field stays clean. Symmetry is judged by eye at conversation distance, and a fraction of a millimetre on a front tooth shows. The scalpel remains suitable when a larger amount of tissue is repositioned, with more bleeding and slightly longer settling.' },
      { question: 'Will there be a visible scar?', answer: 'No. Gum tissue heals differently from skin and does not scar. The margin looks slightly paler for the first days and then returns to its normal colour. What decides whether the result looks natural is the shape of the line: one that follows the natural arch around each tooth reads as gum, a straight cut does not. Within one to two weeks nothing shows that anything was done, except proportions that look right.' },
      { question: 'Can it be done on just one or two teeth?', answer: 'Yes, and single-tooth cases are very common. Often the problem is a lateral incisor sitting a millimetre lower than its partner: barely describable, but the eye catches it immediately. These cases take fifteen or twenty minutes and the change is large. We would rather fix one tooth well than reshape six.' },
      { question: 'What should I avoid afterwards?', answer: 'For the first one or two days avoid very hot food and drinks, acidic things like citrus or vinegar, spicy food and alcohol. Brush normally but gently around the area and do not touch it with your tongue. Avoid smoking as much as you can, as it slows gum healing. You leave with written instructions and a contact number; after two weeks there are no restrictions.' },
    ],
  },
  de: {
    name: 'Zahnfleischkonturierung',
    eyebrow: 'Ästhetik · Albanien',
    subtitle: 'Laser-Modellierung des Zahnfleischrands für ein ausgewogenes Lächeln, gratis zu jedem Hollywood Smile.',
    lead: 'Eine schnelle Neuformung des Zahnfleischrands zeigt mehr von Ihren natürlichen Zähnen für ein gleichmäßigeres, ausgewogeneres Lächeln.',
    kicker: 'Zahnfleischkonturierung in Tirana, Albanien',
    articleTitle: 'Zahnfleischkonturierung mit Laser: den Rahmen Ihrer Zähne neu gestalten',
    intro: [
      'Die meisten, die mit ihrem Lächeln unzufrieden sind, schauen auf die Zähne. Oft sind die Zähne in Ordnung, und was nicht stimmt, ist der Rahmen um sie herum.',
      'Die Zahnfleischkonturierung formt diesen Rahmen neu. Überschüssiges Zahnfleisch wird mit dem Laser entfernt und der Rand so neu gezogen, dass er einer gleichmäßigen, natürlichen Linie entlang des Lächelns folgt: Wo das Zahnfleisch zu tief sitzt, wird mehr Zahn sichtbar, und Stellen, an denen es von Zahn zu Zahn steigt oder fällt, werden angeglichen. Eine Sitzung, örtliche Betäubung und ein sichtbares Ergebnis, bevor Sie vom Stuhl aufstehen.',
      'Es ist einer der kleinsten Eingriffe der ästhetischen Zahnmedizin und einer mit der größten Wirkung. Das Auge reagiert extrem empfindlich auf Zahnfleischsymmetrie: Man merkt, dass etwas nicht stimmt, ohne es benennen zu können, und ein Millimeter am Rand verändert die sichtbare Länge eines Zahns viel stärker als erwartet.',
      'In der Veneer Clinic ist die Zahnfleisch- und Zahnkonturierung für jeden Hollywood-Smile-Patienten gratis und erfolgt auf derselben Reise, bevor Ihre Veneers oder Kronen präpariert werden.',
    ],
    sections: [
      {
        title: 'Was sich wirklich verändert',
        intro: ['Meist drei Dinge.'],
        inline: [
          { title: 'Ein Gummy Smile.', text: 'Zu viel sichtbares Zahnfleisch im Verhältnis zum Zahn, sodass die Zähne kurz und kantig wirken, obwohl sie völlig normal groß sind. Es ist ein Proportionsproblem, kein Zahnproblem, und die Neuformung des Randes löst es direkt.' },
          { title: 'Ein unregelmäßiger Zahnfleischrand.', text: 'Ein Zahn einen Millimeter tiefer als sein Gegenstück. Kaum zu beschreiben, sofort zu sehen und der Grund, warum ein Lächeln auf Fotos ungleichmäßig wirkt, ohne dass mit den Zähnen etwas nicht stimmt.' },
          { title: 'Der Rahmen für Restaurationen.', text: 'Veneers und Kronen werden so gefertigt, dass sie auf das Zahnfleisch treffen. Auf einem unregelmäßigen Rand wirken sie immer etwas daneben, egal wie gut sie gemacht sind. Erst konturieren, dann werden die Restaurationen an die Linie angepasst, die Sie tatsächlich behalten.' },
        ],
      },
      {
        title: 'Warum hier der Laser zählt',
        intro: [
          'Mehr als bei den meisten Behandlungen, denn hier wird in Bruchteilen eines Millimeters an Zähnen gearbeitet, die man aus einem Meter Entfernung sieht.',
          'Der Laser schneidet und verschließt gleichzeitig. In der Praxis bedeutet das fast keine Blutung, meist keine Nähte und, klinisch entscheidend, ein durchgehend sauberes Arbeitsfeld. Der Zahnarzt sieht genau, was er formt, während er es formt, statt durch blutendes Gewebe zu arbeiten und das Ergebnis erst danach zu beurteilen.',
          'Für Sie heißt das: ein Eingriff unter einer Stunde, keine Fäden zu ziehen und normale Aktivität am selben Nachmittag.',
        ],
      },
      {
        title: 'Die Linie entwerfen',
        intro: [
          'Der Eingriff selbst ist kurz. Fast die gesamte Kunst liegt in dem, was davor passiert.',
          'Ein Zahnfleischrand ist keine gerade Kante. Er wölbt sich um jeden Zahn, liegt an den Eckzähnen etwas höher als an den Schneidezähnen und spiegelt sich auf beiden Seiten der Gesichtsmitte. Mit dieser Geometrie wirkt das Ergebnis wie Zahnfleisch. Falsch gemacht, wirkt es wie Zahnarbeit, egal wie gut es heilt.',
          'Deshalb beginnen wir bei den Proportionen, nicht beim Zahnfleisch: wie viel Zahn bei entspannten Lippen sichtbar ist, wie viel Zahnfleisch beim natürlichen Lächeln erscheint (was selten dem Lächeln auf Kommando entspricht), wo Ihre Lippenlinie liegt und wie die linke Seite im Vergleich zur rechten aussieht.',
          'Der neue Rand wird dann markiert und Ihnen gezeigt, bevor etwas entfernt wird. Sie sehen, wo die Linie liegen wird und warum. Das ist der Moment, es sich anders zu überlegen, und er existiert, weil Zahnfleisch nicht auf Wunsch nachwächst.',
        ],
      },
      {
        title: 'Die Neuformung',
        intro: [
          'Der Bereich wird örtlich betäubt. Zahnfleisch ist empfindlich, und dieser Schritt wird nicht überstürzt.',
          'Der Laser entfernt dann Gewebe entlang der freigegebenen Linie und verschließt es dabei. Je nach Zahnzahl dauert das von fünfzehn Minuten für einen Zahn bis etwa eine Stunde für die ganze Lächellinie. Minimale Blutung und meist keine Nähte. Bei Bedarf werden auch die Zahnkanten sanft angepasst, für ein symmetrischeres Lächeln.',
          'Die neue Form sehen Sie sofort im Spiegel, bevor Sie gehen.',
        ],
      },
      {
        title: 'Die Grenze, die alles entscheidet',
        intro: [
          'Es gibt ein Gewebeband, das das Zahnfleisch mit dem Zahn verbindet und unberührt bleiben muss. Die Arbeit innerhalb dieser Grenze unterscheidet ein Ergebnis, das jahrzehntelang gesund bleibt, von einem, das nach wenigen Jahren Probleme macht.',
          'Die meisten Gummy Smiles und Asymmetrien liegen bequem innerhalb dieser Grenze, und die sichtbare Veränderung ist beträchtlich, auch wenn wenig Gewebe entfernt wird. Nähert sich ein Fall der Grenze, sagen wir es Ihnen bei der Untersuchung, nicht mitten im Eingriff.',
        ],
      },
      {
        title: 'Wo sie in eine Lächel-Neugestaltung passt',
        intro: [
          'Die Konturierung ist oft der erste Schritt, nicht der letzte.',
          'Wenn Sie Veneers, Kronen oder Komposit bekommen, ist der Zahnfleischrand der Rahmen, auf den diese Restaurationen treffen müssen. Zuerst konturieren heißt, das Labor arbeitet auf den Rand, den Sie tatsächlich haben werden. Danach konturieren heißt, einen Kompromiss zu akzeptieren oder bereits bezahlte Arbeit neu zu machen.',
          'Bleaching ist flexibler und kann vorher oder nachher erfolgen. Wenn Sie Behandlungen kombinieren, sagen Sie es uns bei der Untersuchung, damit die Termine richtig geplant werden.',
        ],
      },
      {
        title: 'Technik-Optionen',
        intro: ['Beide Techniken formen den Zahnfleischrand neu. Der Unterschied liegt in Präzision, Blutung und Heilungszeit:'],
        cards: [
          { title: 'Laser-Modellierung (unsere Methode)', text: 'Der Laser entfernt überschüssiges Gewebe und verschließt es dabei, daher ist die Blutung minimal und Nähte sind meist nicht nötig. Präzise auf Bruchteile eines Millimeters, entscheidend bei Frontzähnen.' },
          { title: 'Modellierung mit dem Skalpell', text: 'Klassische chirurgische Modellierung, geeignet, wenn eine größere Gewebemenge verlagert werden muss. Zuverlässig und gut dokumentiert, mit etwas mehr Blutung und längerer Abheilphase.' },
        ],
        outro: ['Wenn sowohl Zahnfleisch als auch Zähne behandelt werden müssen, kommt die Konturierung zuerst, und Veneers oder Kronen werden auf dem verheilten Rand gefertigt, passend zum neuen Rahmen statt zum alten.'],
      },
      {
        title: 'Gratis zum Hollywood Smile',
        intro: [
          'Bei uns ist die Zahnfleisch- und Zahnkonturierung Teil des Hollywood-Smile-Plans und wird nicht separat berechnet. Sie erfolgt auf derselben Reise, meist beim ersten Termin, bevor Ihre Zähne für Veneers oder Kronen präpariert werden.',
          'So arbeitet das Labor auf die neue Linie, und Ihre Veneers sind von Anfang an proportional. Wenn Sie nur an der Konturierung interessiert sind, ohne Veneers, schreiben Sie uns, und wir erstellen ein Angebot für Ihren Fall.',
        ],
      },
    ],
    stats: [
      { value: '1 Tag', label: 'Behandlungsdauer' },
      { value: '1', label: 'Sitzung' },
      { value: '30–60 Min.', label: 'Dauer' },
      { value: '1–2 Wochen', label: 'Vollständige Heilung' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Keine Nähte, Ergebnis sofort sichtbar',
    whatTitle: 'Wie funktioniert die Laser-Konturierung?',
    what: [
      'Überschüssiges Zahnfleisch wird mit dem Laser entfernt und der Rand entlang einer vorher mit Ihnen markierten und freigegebenen Linie neu gezogen. Der Laser verschließt das Gewebe dabei, daher ist die Blutung minimal und Nähte sind meist nicht nötig.',
      'Alles erfolgt unter örtlicher Betäubung, in 30 bis 60 Minuten je nach Zahnzahl. Die neue Form ist sofort sichtbar; eine leichte Schwellung am Rand klingt in den folgenden Tagen ab, während das Gewebe seine endgültige Kontur annimmt.',
    ],
    calloutTitle: 'Oft der erste Schritt zu einem neuen Lächeln',
    calloutText:
      'Ein ausgewogener Zahnfleischrand ist das, was Veneers und Kronen wie Zähne und nicht wie Zahnarbeit aussehen lässt. Deshalb kommt die Konturierung meist zuerst: Die Restaurationen werden auf die neue Linie gefertigt, und das Ergebnis wirkt proportional, nicht nur weißer.',
    compareTitle: 'So bieten wir die Konturierung an',
    compareIntro: 'Die Konturierung kann allein oder als erster Schritt einer Lächel-Neugestaltung erfolgen:',
    compare: [
      { id: 'gum-contouring', tag: 'Diese Behandlung', title: 'Laser-Modellierung', text: 'Der Zahnfleischrand wird mit dem Laser neu geformt, mit minimaler Blutung und ohne Nähte. Präzise auf Bruchteile eines Millimeters, entscheidend bei Frontzähnen.' },
      { id: 'hollywood-smile', tag: 'Kombiniert', title: 'Konturierung + Hollywood Smile', text: 'Die Konturierung kommt zuerst, und die Veneers werden auf dem neuen Rand gefertigt, passend zum neuen Rahmen. Die Konturierung ist gratis inbegriffen.' },
      { id: 'crown-emax', tag: 'Bei kurzen Zähnen', title: 'Konturierung + E.max Veneers', text: 'Wenn Zähne abgenutzt oder klein sind, legt die Konturierung mehr Zahn frei, und E.max Veneers stellen Länge und Form wieder her.' },
    ],
    fitTitle: 'Für wen ist die Zahnfleischkonturierung?',
    fitIntro: 'Eine Zahnfleischkonturierung lohnt sich, wenn:',
    fit: [
      'Ihr Zahnfleischrand an manchen Zähnen höher liegt als an anderen und das Lächeln ungleichmäßig wirkt',
      'Beim Lächeln mehr Zahnfleisch als Zahn sichtbar ist und Sie sich angewöhnt haben, weniger zu lächeln',
      'Ihre Zähne normal groß sind, aber überschüssiges Zahnfleisch sie kurz wirken lässt',
      'Sie Veneers oder Kronen planen und vorher den richtigen Rahmen möchten',
      'Alte Kronen einen dunklen oder unregelmäßigen Rand am Zahnfleisch hinterlassen haben',
      'Sie eine sichtbare Veränderung in einer Sitzung möchten, keine lange Behandlung',
    ],
    fitNote:
      'Die Konturierung formt gesundes Gewebe. Bei aktiver Entzündung oder Blutung behandeln wir diese zuerst: Es ist eine kurze Sitzung, und das Ergebnis ist danach viel stabiler.',
    stepsTitle: 'So funktioniert die Behandlung',
    stepsIntro: 'Die Konturierung erfolgt in einer einzigen Sitzung unter örtlicher Betäubung, und die meisten Patienten sind am selben Nachmittag wieder normal aktiv:',
    steps: [
      { title: 'Untersuchung und Linienentwurf', text: 'Wir beurteilen den Zahnfleischrand im Verhältnis zu Lippenlinie, Zahnproportionen und sichtbarem Zahnfleisch beim natürlichen Lächeln. Der neue Rand wird markiert und mit Ihnen freigegeben.' },
      { title: 'Örtliche Betäubung', text: 'Der Bereich wird sorgfältig betäubt. Zahnfleisch ist empfindlich, daher wird dieser Schritt nicht überstürzt: Während des Eingriffs sollten Sie nur Druck spüren.' },
      { title: 'Laser-Modellierung', text: 'Der Laser entfernt Gewebe entlang der freigegebenen Linie und verschließt es dabei. Minimale Blutung, meist keine Nähte, 30 bis 60 Minuten.' },
      { title: 'Sofortiges Ergebnis', text: 'Die neue Form ist sofort sichtbar. Eine leichte Schwellung am Rand bleibt und klingt in den folgenden Tagen ab, während das Gewebe seine endgültige Kontur annimmt.' },
      { title: 'Heilung und Kontrolle', text: 'Sie gehen mit schriftlichen Hinweisen. Die vollständige Heilung dauert ein bis zwei Wochen, und wir kontrollieren das Ergebnis vor Ihrem Heimflug.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für die Zahnfleischkonturierung?',
    whyBandText:
      'Ihr neuer Zahnfleischrand wird mit Ihnen markiert und freigegeben, bevor etwas modelliert wird: Wir zeigen Ihnen, wo der Rand liegen wird und warum, im Verhältnis zu Lippenlinie und Zahnproportionen. Es wird nichts entfernt, was sich nicht begründen lässt, denn Zahnfleisch wächst nicht auf Wunsch nach.',
    caseText: 'Ein ausgewogener Zahnfleischrand vor den Veneers',
    faq: [
      { question: 'Was kostet eine Zahnfleischkonturierung?', answer: 'Für Hollywood-Smile-Patienten ist die Zahnfleisch- und Zahnkonturierung gratis und erfolgt auf derselben Reise. Wenn Sie nur die Konturierung möchten, ohne Veneers oder Kronen, senden Sie uns ein Foto Ihres Lächelns, und wir erstellen ein Angebot für Ihren Fall.' },
      { question: 'Tut die Zahnfleischkonturierung weh?', answer: 'Nein. Der Bereich wird vor Beginn örtlich betäubt, und während des Eingriffs spüren Sie Druck, keinen Schmerz. Danach beschreiben die meisten ein leichtes Unbehagen, wie ein zerkratzter Gaumen: spürbar bei heißen oder sauren Speisen, mit üblichen Schmerzmitteln gut zu behandeln und nach wenigen Tagen vorbei. Da der Laser das Gewebe dabei verschließt, gibt es meist keine Blutung und keine Nähte. Wenn Sie Angst vor dem Zahnarzt haben, sagen Sie es uns bei der Buchung.' },
      { question: 'Wie lange dauert die Heilung?', answer: 'Das sichtbare Ergebnis ist sofort da, und die meisten sind am selben Nachmittag wieder normal aktiv, ohne Gesichtsschwellung. In den ersten Tagen wirkt der Rand leicht geschwollen und blasser als sonst. Innerhalb von ein bis zwei Wochen strafft sich das Gewebe, die Farbe normalisiert sich und die Kontur verfeinert sich: Dann sehen Sie das echte Ergebnis. Für eine Hochzeit oder ein Fotoshooting planen Sie zwei Wochen statt zwei Tage ein.' },
      { question: 'Wächst das Zahnfleisch nach?', answer: 'Nicht dorthin, wo es war. Wird überschüssiges Gewebe richtig entfernt, ist der neue Rand stabil und das Ergebnis gilt als dauerhaft. In den ersten Tagen gibt es einen kleinen natürlichen Rückfederungseffekt, den wir beim Markieren berücksichtigen. Was die Linie später verändern kann, ist eine Zahnfleischerkrankung, die zu Rückgang statt Wachstum führt. Putzen, Zahnseide und regelmäßige Kontrollen erhalten das Ergebnis.' },
      { question: 'Wie viel Zahnfleisch kann entfernt werden?', answer: 'Genug, um das Aussehen Ihres Lächelns deutlich zu verändern, und nicht so viel, dass der Zahn gefährdet wird. Es gibt eine biologische Grenze, ein Band aus Gewebe und Knochen an jedem Zahn, das intakt bleiben muss. Die meisten Fälle liegen bequem darin, und ein Millimeter am Rand verändert die sichtbare Zahnlänge viel stärker als erwartet. Bei der Untersuchung sagen wir Ihnen, was in Ihrem Fall realistisch ist.' },
      { question: 'Behebt sie ein Gummy Smile?', answer: 'Ja, und es ist einer der häufigsten Gründe, warum man uns kontaktiert. Ein Gummy Smile ist meist ein Proportionsproblem: Die Zähne sind normal groß, aber zu viel Zahnfleisch bedeckt sie. Die Neuformung des Randes legt mehr natürliche Zahnfläche frei und stellt das Gleichgewicht wieder her. Wir beurteilen, wie viel Zahnfleisch beim spontanen Lächeln sichtbar ist, nicht beim Lächeln auf Kommando: Das ist selten dasselbe.' },
      { question: 'Kann ich sie mit Veneers kombinieren?', answer: 'Ja, und die meisten unserer Patienten tun das: Beim Hollywood Smile ist die Konturierung gratis inbegriffen. Die Reihenfolge zählt. Die Konturierung kommt zuerst, damit die Veneers auf den neuen Zahnfleischrand gefertigt werden. Das Zahnfleisch ist der Rahmen, und der Rahmen muss stimmen, bevor das Bild hineinkommt. Bleaching kann vorher oder nachher erfolgen.' },
      { question: 'Habe ich danach empfindliche Zähne?', answer: 'Meist nicht. Die Konturierung entfernt Weichgewebe und legt keine Wurzeloberfläche frei. Manche Patienten bemerken einige Tage lang eine leichte Empfindlichkeit auf Heiß und Kalt, vor allem dort, wo mehr Gewebe modelliert wurde. Eine Zahnpasta für empfindliche Zähne hilft. Ist die Empfindlichkeit stechend oder hält sie länger als ein bis zwei Wochen an, melden Sie sich bei uns.' },
      { question: 'Laser oder Skalpell?', answer: 'Für die ästhetische Modellierung der Frontzähne ist der Laser besser, und wir verwenden ihn. Er schneidet und verschließt zugleich, daher ist die Blutung minimal, Nähte sind meist unnötig und das Arbeitsfeld bleibt sauber. Symmetrie wird mit dem Auge auf Gesprächsdistanz beurteilt, und ein Bruchteil eines Millimeters an einem Frontzahn ist sichtbar. Das Skalpell bleibt geeignet, wenn eine größere Gewebemenge verlagert wird, mit mehr Blutung und etwas längerer Abheilung.' },
      { question: 'Bleibt eine sichtbare Narbe?', answer: 'Nein. Zahnfleisch heilt anders als Haut und hinterlässt keine Narbe. Der Rand wirkt in den ersten Tagen etwas blasser und nimmt dann wieder seine normale Farbe an. Ob das Ergebnis natürlich wirkt, entscheidet die Form der Linie: Eine Linie, die dem natürlichen Bogen um jeden Zahn folgt, wirkt wie Zahnfleisch, ein gerader Schnitt nicht. Nach ein bis zwei Wochen deutet nichts mehr auf einen Eingriff hin, außer Proportionen, die stimmen.' },
      { question: 'Ist das auch an nur ein oder zwei Zähnen möglich?', answer: 'Ja, und Einzelzahnfälle sind sehr häufig. Oft ist das Problem ein seitlicher Schneidezahn, der einen Millimeter tiefer liegt als sein Gegenstück: kaum zu beschreiben, aber das Auge bemerkt es sofort. Diese Fälle dauern fünfzehn bis zwanzig Minuten und die Veränderung ist groß. Wir korrigieren lieber einen Zahn gut, als sechs zu modellieren.' },
      { question: 'Was sollte ich danach meiden?', answer: 'In den ersten ein bis zwei Tagen sehr heiße Speisen und Getränke, Saures wie Zitrusfrüchte oder Essig, scharfes Essen und Alkohol. Putzen Sie normal, aber sanft um den Bereich, und berühren Sie ihn nicht mit der Zunge. Meiden Sie das Rauchen so weit wie möglich, da es die Zahnfleischheilung verlangsamt. Sie erhalten schriftliche Hinweise und eine Kontaktnummer; nach zwei Wochen gibt es keine Einschränkungen mehr.' },
    ],
  },
  it: {
    name: 'Modellamento gengivale',
    eyebrow: 'Estetica · Albania',
    subtitle: 'Rimodellamento laser della linea gengivale per un sorriso equilibrato, gratis con ogni Hollywood Smile.',
    lead: 'Un rapido rimodellamento della linea gengivale mostra di più i tuoi denti naturali, per un sorriso più uniforme ed equilibrato.',
    kicker: 'Modellamento gengivale a Tirana, Albania',
    articleTitle: 'Modellamento gengivale laser: ridisegnare la cornice dei tuoi denti',
    intro: [
      'La maggior parte di chi non è soddisfatto del proprio sorriso guarda i denti. Spesso i denti vanno bene, e ciò che non va è la cornice intorno a loro.',
      'Il modellamento gengivale ridisegna quella cornice. Con il laser si rimuove il tessuto gengivale in eccesso e il margine viene ritracciato per seguire una linea uniforme e naturale lungo il sorriso: si scopre più dente dove la gengiva scende troppo e si livellano i punti in cui sale o scende da un dente all’altro. Una seduta, anestesia locale e un risultato visibile prima di alzarti dalla poltrona.',
      'È uno degli interventi più piccoli dell’odontoiatria estetica e uno di quelli con l’effetto più sproporzionato. L’occhio è estremamente sensibile alla simmetria gengivale: ci si accorge che qualcosa non va senza saperlo nominare, e un millimetro al margine cambia la lunghezza visibile di un dente molto più di quanto ci si aspetti.',
      'Alla Veneer Clinic, il modellamento di gengive e denti è gratuito per ogni paziente Hollywood Smile e si esegue nello stesso viaggio, prima della preparazione di faccette o corone.',
    ],
    sections: [
      {
        title: 'Cosa cambia davvero',
        intro: ['Di solito, tre cose.'],
        inline: [
          { title: 'Un sorriso gengivale.', text: 'Troppa gengiva in vista rispetto al dente, così i denti sembrano corti e squadrati anche quando hanno dimensioni del tutto normali. È un problema di proporzioni, non di denti, e ridisegnare il margine lo risolve direttamente.' },
          { title: 'Una linea gengivale irregolare.', text: 'Un dente un millimetro più in basso del suo simmetrico. Difficile da descrivere, subito visibile, ed è il motivo per cui un sorriso appare irregolare in foto senza che i denti abbiano nulla che non va.' },
          { title: 'La cornice dei restauri.', text: 'Faccette e corone vengono realizzate per incontrare la gengiva. Costruite su un margine irregolare, sembreranno sempre un po’ fuori posto, per quanto ben fatte. Prima si modella, poi i restauri vengono realizzati sulla linea che terrai davvero.' },
        ],
      },
      {
        title: 'Perché qui il laser conta',
        intro: [
          'Più che nella maggior parte dei trattamenti, perché qui si lavora su frazioni di millimetro su denti che le persone vedono da un metro di distanza.',
          'Il laser taglia e sigilla contemporaneamente. In pratica significa sanguinamento quasi nullo, di solito nessun punto e, la parte clinicamente importante, un campo pulito per tutto il tempo. Il dentista vede esattamente cosa sta modellando mentre lo modella, invece di lavorare attraverso tessuto che sanguina e giudicare il risultato dopo.',
          'Per te significa un intervento di meno di un’ora, nessun punto da togliere e attività normale lo stesso pomeriggio.',
        ],
      },
      {
        title: 'Progettare la linea',
        intro: [
          'L’intervento in sé è breve. Quasi tutta l’abilità sta in ciò che accade prima di iniziare.',
          'Una linea gengivale non è un bordo dritto. Si inarca intorno a ogni dente, si trova leggermente più in alto sui canini che sugli incisivi e si rispecchia su entrambi i lati della linea mediana del viso. Con quella geometria giusta, il risultato sembra gengiva. Sbagliata, sembra un lavoro dentale, per quanto guarisca bene.',
          'Per questo partiamo dalle proporzioni, non dalle gengive: quanto dente si vede a labbra rilassate, quanta gengiva compare quando sorridi naturalmente (che raramente coincide con il sorriso su richiesta), dove cade la linea del labbro e come si confronta il lato sinistro con il destro.',
          'Il nuovo margine viene poi segnato e mostrato prima di rimuovere qualsiasi cosa. Vedi dove sarà la linea e perché. È il momento per cambiare idea, ed esiste proprio perché il tessuto gengivale non ricresce a richiesta.',
        ],
      },
      {
        title: 'Il rimodellamento',
        intro: [
          'La zona viene anestetizzata localmente. Il tessuto gengivale è sensibile e questo passaggio non si affretta.',
          'Il laser rimuove poi il tessuto lungo la linea approvata, sigillandolo mentre lavora. A seconda del numero di denti, si va da quindici minuti per un solo dente a circa un’ora per tutta la linea del sorriso. Sanguinamento minimo e di solito nessun punto. Se necessario, anche i bordi dei denti vengono rifiniti delicatamente per un sorriso più simmetrico.',
          'Vedi subito la nuova forma, allo specchio, prima di andare via.',
        ],
      },
      {
        title: 'Il limite che decide tutto',
        intro: [
          'Esiste una fascia di tessuto che unisce la gengiva al dente e che deve restare intatta. Lavorare entro quel limite è ciò che distingue un risultato che resta sano per decenni da uno che crea problemi dopo pochi anni.',
          'La maggior parte dei sorrisi gengivali e delle asimmetrie rientra comodamente in quel limite, e il cambiamento visibile è notevole anche quando si rimuove poco tessuto. Quando un caso si avvicina al limite, te lo diciamo alla valutazione, non a metà intervento.',
        ],
      },
      {
        title: 'Dove si colloca in un rifacimento del sorriso',
        intro: [
          'Il modellamento è spesso il primo passo, non l’ultimo.',
          'Se farai faccette, corone o composito, la linea gengivale è la cornice che quei restauri devono incontrare. Modellare prima significa che il laboratorio lavora sul margine che avrai davvero. Farlo dopo significa accettare un compromesso o rifare un lavoro già pagato.',
          'Lo sbiancamento è più flessibile e può essere fatto prima o dopo. Se combini trattamenti, diccelo alla valutazione così gli appuntamenti vengono ordinati correttamente.',
        ],
      },
      {
        title: 'Opzioni di tecnica',
        intro: ['Entrambe le tecniche ridisegnano la linea gengivale. La differenza sta in precisione, sanguinamento e tempi di guarigione:'],
        cards: [
          { title: 'Rimodellamento laser (quello che usiamo)', text: 'Il laser rimuove il tessuto in eccesso e lo sigilla mentre lavora, quindi il sanguinamento è minimo e di solito non servono punti. Preciso a frazioni di millimetro, decisivo sui denti anteriori.' },
          { title: 'Rimodellamento con bisturi', text: 'Rimodellamento chirurgico classico, adatto quando serve riposizionare una quantità maggiore di tessuto. Affidabile e ben documentato, con un po’ più di sanguinamento e un periodo di assestamento più lungo.' },
        ],
        outro: ['Quando bisogna lavorare sia sulla gengiva sia sui denti, il modellamento viene prima e faccette o corone vengono realizzate sul margine guarito, adattate alla nuova cornice e non a quella vecchia.'],
      },
      {
        title: 'Gratis con Hollywood Smile',
        intro: [
          'Da noi il modellamento di gengive e denti fa parte del piano Hollywood Smile e non si paga a parte. Si esegue nello stesso viaggio, di solito al primo appuntamento, prima che i denti vengano preparati per faccette o corone.',
          'Così il laboratorio lavora sulla nuova linea e le faccette risultano proporzionate fin dall’inizio. Se ti interessa solo il modellamento, senza faccette, scrivici e ti faremo un preventivo per il tuo caso.',
        ],
      },
    ],
    stats: [
      { value: '1 giorno', label: 'Durata del trattamento' },
      { value: '1', label: 'Seduta' },
      { value: '30–60 min', label: 'Durata' },
      { value: '1–2 settimane', label: 'Guarigione completa' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Niente punti, risultato visibile subito',
    whatTitle: 'Come funziona il modellamento laser?',
    what: [
      'Con il laser si rimuove il tessuto gengivale in eccesso e il margine viene ritracciato lungo una linea segnata e approvata con te in anticipo. Il laser sigilla il tessuto mentre lavora, quindi il sanguinamento è minimo e di solito non servono punti.',
      'Tutto avviene in anestesia locale, in 30-60 minuti a seconda del numero di denti. La nuova forma è subito visibile; un leggero gonfiore al margine si riassorbe nei giorni successivi mentre il tessuto prende il contorno definitivo.',
    ],
    calloutTitle: 'Spesso il primo passo di un nuovo sorriso',
    calloutText:
      'Una linea gengivale equilibrata è ciò che fa sembrare faccette e corone denti e non lavori dentali. Per questo il modellamento di solito viene prima: i restauri vengono realizzati sulla nuova linea e il risultato appare proporzionato, non solo più bianco.',
    compareTitle: 'Come offriamo il modellamento',
    compareIntro: 'Il modellamento può essere fatto da solo o come primo passo di un rifacimento del sorriso:',
    compare: [
      { id: 'gum-contouring', tag: 'Questo trattamento', title: 'Rimodellamento laser', text: 'La linea gengivale viene ridisegnata con il laser, con sanguinamento minimo e senza punti. Preciso a frazioni di millimetro, decisivo sui denti anteriori.' },
      { id: 'hollywood-smile', tag: 'Combinato', title: 'Modellamento + Hollywood Smile', text: 'Il modellamento viene prima e le faccette vengono realizzate sul nuovo margine, adattate alla nuova cornice. Il modellamento è incluso gratis.' },
      { id: 'crown-emax', tag: 'Per denti corti', title: 'Modellamento + faccette E.max', text: 'Quando i denti sono consumati o piccoli, il modellamento scopre più dente e le faccette E.max ridanno lunghezza e forma.' },
    ],
    fitTitle: 'Per chi è il modellamento gengivale?',
    fitIntro: 'Vale la pena considerare il modellamento gengivale se:',
    fit: [
      'La linea gengivale è più alta su alcuni denti che su altri e il sorriso appare irregolare',
      'Quando sorridi si vede più gengiva che dente, e hai imparato a sorridere meno',
      'I denti hanno dimensioni normali, ma la gengiva in eccesso li fa sembrare corti',
      'Stai pianificando faccette o corone e vuoi la cornice giusta prima che vengano realizzate',
      'Vecchie corone hanno lasciato un margine scuro o irregolare dove la gengiva incontra il dente',
      'Vuoi un cambiamento visibile in una seduta, non un trattamento lungo',
    ],
    fitNote:
      'Il modellamento ridisegna tessuto sano. Se c’è un’infiammazione attiva o sanguinamento, la trattiamo prima: è una seduta breve e il risultato dopo è molto più stabile.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'Il modellamento si esegue in una sola seduta in anestesia locale, e la maggior parte dei pazienti torna alle attività normali lo stesso pomeriggio:',
    steps: [
      { title: 'Valutazione e progetto della linea', text: 'Valutiamo la linea gengivale rispetto al labbro, alle proporzioni dei denti e a quanta gengiva si vede quando sorridi naturalmente. Il nuovo margine viene segnato e approvato con te.' },
      { title: 'Anestesia locale', text: 'La zona viene anestetizzata con cura. Il tessuto gengivale è sensibile, quindi questo passaggio non si affretta: durante l’intervento dovresti sentire solo pressione.' },
      { title: 'Rimodellamento laser', text: 'Il laser rimuove il tessuto lungo la linea approvata e lo sigilla mentre lavora. Sanguinamento minimo, di solito niente punti, 30-60 minuti.' },
      { title: 'Risultato immediato', text: 'La nuova forma è subito visibile. Resta un leggero gonfiore al margine, che si riassorbe nei giorni successivi mentre il tessuto prende il contorno definitivo.' },
      { title: 'Guarigione e controllo', text: 'Vai via con istruzioni scritte. La guarigione completa richiede una o due settimane, e controlliamo il risultato prima del tuo rientro a casa.' },
    ],
    whyBandTitle: 'Perché scegliere Veneer Clinic per il modellamento gengivale?',
    whyBandText:
      'La tua nuova linea gengivale viene segnata e approvata con te prima di modellare qualsiasi cosa: ti mostriamo dove sarà il margine e perché, rispetto al labbro e alle proporzioni dei denti. Non si rimuove nulla che non sia giustificabile, perché il tessuto gengivale non ricresce a richiesta.',
    caseText: 'Una linea gengivale equilibrata prima delle faccette',
    faq: [
      { question: 'Quanto costa il modellamento gengivale?', answer: 'Per i pazienti Hollywood Smile, il modellamento di gengive e denti è gratuito e si esegue nello stesso viaggio. Se vuoi solo il modellamento, senza faccette o corone, inviaci una foto del tuo sorriso e ti faremo un preventivo per il tuo caso.' },
      { question: 'Il modellamento gengivale fa male?', answer: 'No. La zona viene anestetizzata localmente prima di iniziare, e durante l’intervento senti pressione, non dolore. Dopo, la maggior parte descrive un leggero fastidio, come un palato graffiato: si avverte con cibi caldi o acidi, si gestisce con comuni antidolorifici e passa in pochi giorni. Poiché il laser sigilla il tessuto mentre lavora, di solito non c’è sanguinamento e non servono punti. Se hai ansia dal dentista, diccelo quando prenoti.' },
      { question: 'Quanto dura la guarigione?', answer: 'Il risultato visibile c’è subito, e la maggior parte torna alle attività normali lo stesso pomeriggio, senza gonfiore del viso. Nei primi giorni il margine appare un po’ gonfio e più pallido del solito. In una o due settimane il tessuto si compatta, il colore torna normale e il contorno si affina: è allora che vedi il risultato vero. Per un matrimonio o un servizio fotografico, calcola due settimane invece di due giorni.' },
      { question: 'La gengiva ricresce?', answer: 'Non dove era prima. Quando il tessuto in eccesso viene rimosso correttamente, il nuovo margine è stabile e il risultato è considerato permanente. C’è un piccolo ritorno naturale nei primi giorni mentre il tessuto si assesta, e ne teniamo conto quando segniamo il margine. Ciò che può cambiare la linea in futuro è la malattia gengivale, che provoca recessione e non ricrescita. Spazzolino, filo interdentale e controlli regolari preservano il risultato.' },
      { question: 'Quanta gengiva si può rimuovere?', answer: 'Abbastanza da cambiare in modo significativo l’aspetto del sorriso, e non tanto da compromettere il dente. Esiste un limite biologico, una fascia di tessuto e osso legata a ogni dente che deve restare intatta. La maggior parte dei casi vi rientra comodamente, e un millimetro al margine cambia la lunghezza visibile di un dente molto più del previsto. Alla valutazione ti diciamo cosa è realisticamente ottenibile nel tuo caso.' },
      { question: 'Risolve il sorriso gengivale?', answer: 'Sì, ed è uno dei motivi più frequenti per cui ci contattano. Il sorriso gengivale è di solito un problema di proporzioni: i denti hanno dimensioni normali ma troppa gengiva li copre. Ridisegnare il margine scopre più superficie naturale del dente e riporta l’equilibrio. Valutiamo quanta gengiva si vede quando sorridi spontaneamente, non su richiesta: raramente sono la stessa cosa.' },
      { question: 'Posso farlo insieme alle faccette?', answer: 'Sì, ed è ciò che fa la maggior parte dei nostri pazienti: con Hollywood Smile il modellamento è incluso gratis. L’ordine conta. Il modellamento viene prima, così le faccette vengono realizzate sulla nuova linea gengivale e non su quella vecchia. La gengiva è la cornice, e la cornice deve essere giusta prima di inserire il quadro. Lo sbiancamento può essere fatto prima o dopo.' },
      { question: 'Avrò sensibilità dopo il trattamento?', answer: 'Di solito no. Il modellamento rimuove tessuto molle e non espone la superficie radicolare. Alcuni pazienti notano una lieve sensibilità al caldo e al freddo per qualche giorno, soprattutto dove è stato rimodellato più tessuto. Un dentifricio per denti sensibili aiuta. Se la sensibilità è acuta o dura più di una o due settimane, contattaci.' },
      { question: 'Laser o bisturi?', answer: 'Per il rimodellamento estetico dei denti anteriori il laser è migliore, ed è quello che usiamo. Taglia e sigilla insieme, quindi il sanguinamento è minimo, di solito non servono punti e il campo resta pulito. La simmetria si giudica a occhio, a distanza di conversazione, e una frazione di millimetro su un dente anteriore si vede. Il bisturi resta adatto quando si riposiziona una quantità maggiore di tessuto, con più sanguinamento e un assestamento un po’ più lungo.' },
      { question: 'Rimane una cicatrice visibile?', answer: 'No. Il tessuto gengivale guarisce diversamente dalla pelle e non lascia cicatrici. Il margine appare un po’ più pallido nei primi giorni e poi riprende il colore normale. Ciò che decide se il risultato sembra naturale è la forma della linea: una linea che segue l’arco naturale intorno a ogni dente sembra gengiva, un taglio dritto no. In una o due settimane non resta nulla che indichi un intervento, se non proporzioni che sembrano giuste.' },
      { question: 'Si può fare solo su uno o due denti?', answer: 'Sì, e i casi su un solo dente sono molto frequenti. Spesso il problema è un incisivo laterale un millimetro più in basso del suo simmetrico: difficile da descrivere, ma l’occhio lo coglie subito. Questi casi richiedono quindici o venti minuti e il cambiamento è grande. Preferiamo correggere bene un dente piuttosto che rimodellarne sei.' },
      { question: 'Cosa devo evitare dopo il trattamento?', answer: 'Nei primi uno o due giorni evita cibi e bevande molto caldi, cose acide come agrumi o aceto, cibi piccanti e alcol. Lava i denti normalmente ma con delicatezza intorno alla zona e non toccarla con la lingua. Evita il fumo il più possibile, perché rallenta la guarigione gengivale. Vai via con istruzioni scritte e un numero di contatto; dopo due settimane non resta alcuna limitazione.' },
    ],
  },
};

export default function GumContouringPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="gum-contouring"
      heroImage={images.results[2]?.[0] ?? images.heroAfter}
      whatImage={images.results[3]?.[0] ?? images.heroAfter}
    />
  );
}
