import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Skanim 3D CT',
    eyebrow: 'Diagnostikë · Shqipëri',
    subtitle: 'Skanim 3D i dhëmbëve, nofullave dhe nervave, që trajtimi të planifikohet mbi matje reale, jo mbi hamendje.',
    lead: 'Një skanim 3D i shpejtë dhe pa dhimbje që tregon kockën, rrënjët dhe nervat me detaje që radiografia nuk i jep, vetëm kur ndryshon planin tuaj.',
    kicker: 'Skanim 3D CT në Tiranë, Shqipëri',
    articleTitle: 'Skanim 3D CT në Tiranë: plani mbi matje reale',
    intro: [
      'Një skanim 3D CT tregon kockën, dhëmbët dhe nervat në tri dimensione, që trajtimi të planifikohet mbi matje dhe jo mbi hamendje.',
      'Njihet edhe si tomografi dentare me rreze konike, ose CBCT, dhe ndërton një imazh tredimensional me një rrotullim të vetëm rreth kokës. Dentisti mund ta rrotullojë, ta presë në shtresa dhe ta matë, gjë që radiografia e sheshtë nuk e lejon.',
      'Në Veneer Clinic, skanimi 3D CT është falas për pacientët që trajtohen te ne, dhe bëhet zakonisht në vizitën e parë, vetëm kur rasti juaj e kërkon.',
    ],
    sections: [
      {
        title: 'Çfarë nuk sheh radiografia',
        intro: [
          'Radiografia e zakonshme e shtyp nofullën në një imazh të vetëm të sheshtë. Strukturat mbivendosen, distancat shtrembërohen dhe gjerësia e kockës nuk duket fare. Për një mbushje kjo ka pak rëndësi. Për një implant, një heqje të vështirë dhëmbi ose një trajtim kanali në një dhëmb kompleks, ka shumë rëndësi. Është dallimi mes shikimit të një fotoje dhe shikimit të objektit nga të gjitha anët.',
          'Skanimi tregon lartësinë, gjerësinë dhe dendësinë e kockës, rrugën e saktë të nervit në nofullën e poshtme, pozicionin e sinuseve në nofullën e sipërme dhe formën e çdo rrënje. Probleme që mbeten të fshehura në një imazh të sheshtë, si një infeksion në majë të rrënjës, shpesh bëhen të dukshme.',
        ],
      },
      {
        title: 'Pse ka rëndësi për implantet',
        intro: [
          'Çdo rast me implante planifikohet mbi një skanim 3D CT. Na tregon nëse ka kockë të mjaftueshme, ku ndodhen nervi dhe sinuset, dhe cila gjatësi e cili diametër implanti MegaGen përshtaten në mënyrë të sigurt. Madhësia e duhur zgjidhet para ndërhyrjes, jo gjatë saj.',
          'Nëse kocka është shumë e hollë ose shumë e ulët, skanimi e tregon edhe këtë, dhe ju e mësoni në fazën e planifikimit, jo në karrige.',
        ],
      },
      {
        title: 'Nga grafia panoramike te skanimi 3D',
        intro: [
          'Para udhëtimit, grafia panoramike që na dërgoni nga shtëpia mjafton për diagnozën e parë dhe për një ofertë me rreth 90% saktësi. Ajo tregon dhëmbët, rrënjët dhe lartësinë e përafërt të kockës.',
          'Kur rasti përfshin implante, heqje të vështira ose kanale komplekse, në vizitën e parë në klinikë bëhet skanimi 3D. Ai konfirmon matjet që panoramikja vetëm i përafron, dhe oferta përfundimtare mbështetet mbi to.',
        ],
      },
      {
        title: 'E lexon dentisti që ju trajton',
        intro: [
          'Skanimi bëhet në klinikë, dhe dentisti që e lexon është ai që e kryen punën, kështu që asgjë nuk humbet mes asaj që tregon imazhi dhe asaj që bëhet. Nëse shfaqet diçka e papritur, si një cistë, një plasaritje e fshehur ose humbje kocke rreth një dhëmbi të vjetër, e mësoni po atë ditë, me imazhin përpara.',
        ],
      },
      {
        title: 'Vetëm kur ndryshon planin',
        intro: [
          'Skanimi 3D CT nuk është pjesë e çdo vizite. Shumë ekzaminime nuk kanë nevojë për imazheri shtesë, dhe disa kanë nevojë vetëm për një radiografi të zakonshme. Kur rasti juaj e kërkon, dentisti ju shpjegon pse para se të bëhet.',
          'Arsyeja nuk është kostoja, sepse për pacientët tanë skanimi është falas. Është rrezatimi: doza është e ulët, por më e lartë se ajo e një radiografie të vogël, ndaj e bëjmë vetëm kur informacioni ndryshon trajtimin.',
        ],
      },
      {
        title: 'Si funksionon skanimi',
        intro: ['Aparati dërgon një rreze X në formë koni përmes zonës që ekzaminohet, ndërsa një krah bën një rrotullim rreth kokës. Programi i bashkon imazhet në një model të vetëm 3D të dhëmbëve, nofullave dhe strukturave përreth.'],
        inline: [
          { title: 'Para skanimit.', text: 'Hiqni syzet, vathët, kapëset e flokëve, protezat e lëvizshme dhe çdo send metalik në kokë e qafë, sepse metali e turbullon imazhin. Na tregoni nëse jeni ose mund të jeni shtatzënë. Nuk nevojitet agjërim apo përgatitje tjetër.' },
          { title: 'Gjatë skanimit.', text: 'Uleni ose qëndroni në këmbë, mbështetni mjekrën dhe ndoshta kafshoni lehtë një pjesë të vogël që e mban nofullën të palëvizur. Krahu rrotullohet për më pak se një minutë. Pa dhimbje, dhe aparati është i hapur, ndaj nuk ndiheni të mbyllur.' },
          { title: 'Rrezatimi.', text: 'Rreze e fokusuar dhe dozë shumë më e ulët se një CT mjekësore e kokës. Nëse keni pyetje, bisedojini me dentistin para ekzaminimit.' },
          { title: 'Leximi i rezultateve.', text: 'Imazhet janë gati pothuajse menjëherë. Dentisti i shqyrton me ju dhe ju tregon kockën, nervat, sinuset dhe çdo gjë të papritur. Për implantet, matjet merren drejtpërdrejt nga skanimi.' },
          { title: 'Si futet në planin tuaj.', text: 'Gjetjet kalojnë në planin e trajtimit me shkrim: nëse implantet janë të mundshme pa procedura shtesë, cilët dhëmbë shpëtohen dhe me çfarë radhe ecën trajtimi. Nëse skanimi e ndryshon planin, ndryshon edhe oferta, para se të nisë çdo gjë.' },
        ],
      },
      {
        title: 'Për çfarë përdoret skanimi',
        intro: ['Skanimi 3D u përgjigjet pyetjeve që radiografia e sheshtë nuk i zgjidh:'],
        cards: [
          { title: 'Planifikimi i implanteve (gjithmonë)', text: 'Lartësia, gjerësia dhe dendësia e kockës, si dhe pozicioni i nervit dhe sinuseve, maten para ndërhyrjes për të zgjedhur implantin MegaGen.' },
          { title: 'Trajtim kanali dhe heqje (kur duhet)', text: 'Tregon formën e plotë të rrënjëve të përkulura ose shtesë, infeksione të fshehura në radiografi dhe sa afër nervit është një dhëmballë pjekurie.' },
        ],
        outro: ['Nëse keni një skanim 3D të kohëve të fundit nga një klinikë tjetër, e shqyrtojmë të parin. Nëse mbulon zonën e duhur me cilësi të mirë, planifikojmë mbi të pa e përsëritur.'],
      },
    ],
    stats: [
      { value: '3D', label: 'Pamje e plotë' },
      { value: '<1 min', label: 'Skanimi' },
      { value: '1', label: 'Vizitë' },
      { value: 'Falas', label: 'Me trajtimin tuaj' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Vetëm kur ndryshon planin',
    whatTitle: 'Çfarë është skanimi 3D CT?',
    what: [
      'Skanimi 3D CT, ose tomografia dentare me rreze konike (CBCT), është një imazh tredimensional i dhëmbëve, nofullave, nervave dhe sinuseve, i marrë me një rrotullim të vetëm rreth kokës në më pak se një minutë.',
      'Ndryshe nga radiografia e sheshtë, mund të rrotullohet, të pritet në shtresa dhe të matet në milimetra. Kjo e bën bazën e planifikimit për implante, heqje të vështira dhe trajtime kanali komplekse.',
    ],
    calloutTitle: 'Vetëm kur nevojitet',
    calloutText:
      'Skanimi 3D nuk bëhet automatikisht. Dentisti ju shpjegon më parë pse rasti juaj e kërkon. Për pacientët që trajtohen te ne është falas, dhe nëse keni një skanim të kohëve të fundit nga një klinikë tjetër që mjafton, përdorim atë.',
    compareTitle: 'Ku hyn skanimi në trajtimin tuaj?',
    compareIntro: 'Skanimi është pjesë e diagnozës. Këto janë trajtimet ku ka më shumë rëndësi:',
    compare: [
      { id: 'ct-scan', tag: 'Ky shërbim', title: 'Skanim 3D CT', text: 'Matje reale të kockës, nervave dhe sinuseve në më pak se një minutë, falas me trajtimin tuaj.' },
      { id: 'dental-exam', tag: 'Hapi i parë', title: 'Ekzaminim dentar', text: 'Ekzaminimi vendos nëse duhet skanim. Shpesh të dyja bëhen në të njëjtën vizitë.' },
      { id: 'implant-megagen', tag: 'Gjithmonë me skanim', title: 'Implant dentar', text: 'Çdo implant planifikohet mbi skanim 3D, që madhësia dhe pozicioni të zgjidhen para ndërhyrjes.' },
    ],
    fitTitle: 'Kush ka nevojë për skanim 3D?',
    fitIntro: 'Skanimi 3D zakonisht rekomandohet nëse:',
    fit: [
      'Po planifikoni implante, përfshirë All-on-4 ose All-on-6, dhe kocka duhet matur',
      'Duhet të hiqni një dhëmballë pjekurie që mund të jetë afër nervit',
      'Keni nevojë për trajtim kanali në një dhëmb me kanale të përkulura ose shtesë, ose një që ka dështuar',
      'Keni dhimbje ose ënjtje që radiografia e zakonshme nuk e ka shpjeguar',
      'Keni humbur dhëmbë prej kohësh dhe doni të dini nëse ka mbetur kockë e mjaftueshme',
      'Keni një plan nga një klinikë tjetër dhe doni një kontroll të pavarur të kockës dhe rrënjëve',
    ],
    fitNote:
      'Nëse një ekzaminim i zakonshëm dhe grafia panoramike mjaftojnë për të planifikuar trajtimin, nuk ju propozojmë skanim. Bëjmë vetëm imazherinë që i nevojitet vërtet rastit tuaj.',
    stepsTitle: 'Si funksionon në Veneer Clinic',
    stepsIntro: 'Vetë skanimi zgjat më pak se një minutë dhe zakonisht bëhet gjatë vizitës së parë, jo në një takim më vete:',
    steps: [
      { title: 'Arsyeja e shpjeguar', text: 'Para skanimit ju tregojmë pse nevojitet dhe çfarë pritet të tregojë. Asgjë nuk bëhet pa miratimin tuaj.' },
      { title: 'Pozicionimi', text: 'Hiqni syzet, vathët dhe sendet e tjera metalike në kokë dhe qafë, pastaj qëndroni të palëvizur me mjekrën mbi mbajtëse.' },
      { title: 'Skanimi', text: 'Krahu rrotullohet rreth kokës për më pak se një minutë. Pa dhimbje dhe i hapur, pa injeksione dhe pa lëndë kontrasti.' },
      { title: 'Shqyrtim së bashku', text: 'Dentisti shqyrton me ju imazhet 3D dhe ju tregon kockën, rrënjët, nervat dhe sinuset rreth zonës që do të trajtohet.' },
      { title: 'Plani dhe oferta', text: 'Gjetjet kalojnë në planin e trajtimit me shkrim dhe në ofertën e detajuar, me madhësinë e implantit kur duhet.' },
    ],
    whyBandTitle: 'Pse Veneer Clinic për skanimin tuaj 3D CT?',
    whyBandText:
      'Skanimi bëhet në klinikën ku planifikohet dhe kryhet trajtimi, dhe dentisti që e lexon është ai që ju trajton. E rekomandojmë vetëm kur ndryshon planin, është falas me trajtimin tuaj, dhe e shihni çfarë tregon para se të vendosni për çdo gjë.',
    caseText: 'Trajtim i planifikuar mbi skanim 3D',
    faq: [
      { question: 'Sa kushton skanimi 3D CT?', answer: 'Për pacientët që trajtohen te ne, skanimi 3D CT është falas. Nëse ju duhet vetëm skanimi, pa trajtim në klinikë, na kontaktoni dhe ju japim çmimin.' },
      { question: 'A është skanimi 3D CT i njëjtë me një CT mjekësore?', answer: 'Jo. Të dyja krijojnë një imazh 3D me rreze X, por tomografia dentare me rreze konike është projektuar posaçërisht për dhëmbët dhe nofullat. Rrezja përqendrohet në një zonë më të vogël, aparati është i hapur dhe jo tunel, dhe doza është shumë më e ulët se ajo e një CT mjekësore të kokës. Për nevoja dentare jep detajet që duhen për implante dhe rrënjë komplekse.' },
      { question: 'A është i sigurt skanimi?', answer: 'Doza e një tomografie dentare me rreze konike është e ulët, dhe dukshëm më e ulët se ajo e një CT mjekësore. Është më e lartë se ajo e një radiografie të vogël dentare, prandaj e rekomandojmë vetëm kur ndryshon trajtimin. Na tregoni para skanimit nëse jeni ose mund të jeni shtatzënë; në këtë rast zakonisht e shtyjmë, përveç kur ka arsye klinike urgjente.' },
      { question: 'A dhemb skanimi 3D?', answer: 'Jo. Qëndroni ulur ose në këmbë ndërsa krahu rrotullohet rreth kokës. Asgjë nuk ju prek, përveç mbajtëses së mjekrës dhe ndonjëherë një pjese të vogël që e kafshoni lehtë. Aparati është i hapur dhe rrotullimi zgjat më pak se një minutë.' },
      { question: 'Sa zgjat skanimi?', answer: 'Vetë skanimi zgjat më pak se një minutë. Bashkë me pozicionimin dhe heqjen e sendeve metalike, zakonisht mbaroni brenda pak minutash. Leximi i rezultateve zgjat më shumë, sepse dentisti i shqyrton imazhet bashkë me ju, zakonisht në të njëjtën vizitë.' },
      { question: 'A më duhet skanim 3D për implante dentare?', answer: 'Po. Çdo rast me implante planifikohet mbi një skanim 3D CT. Është mënyra e vetme për të matur saktë lartësinë, gjerësinë dhe dendësinë e kockës dhe për të parë ku ndodhen nervi dhe sinuset. Këto matje vendosin cili implant MegaGen përshtatet, ku vendoset dhe nëse duhet më parë shtim kocke ose ngritje sinusi.' },
      { question: 'Pse më kërkoni grafi panoramike para udhëtimit?', answer: 'Sepse panoramikja mund të bëhet kudo afër jush dhe na mjafton për diagnozën e parë dhe për një ofertë me rreth 90% saktësi. Për implante, ajo tregon vetëm lartësinë e përafërt të kockës, jo gjerësinë, prandaj në vizitën e parë në klinikë e plotësojmë me skanimin 3D para çdo ndërhyrjeje.' },
      { question: 'A mund të përdor një skanim nga një klinikë tjetër?', answer: 'Shpesh po. Na e dërgoni ose sillni në vizitë. Nëse mbulon zonën e duhur, ka cilësi të mjaftueshme dhe nuk ka ndryshuar asgjë e rëndësishme që kur është bërë, planifikojmë mbi të. Nëse është shumë i vjetër, nuk e tregon zonën që duhet trajtuar ose ndërkohë është hequr një dhëmb, ju shpjegojmë pse duhet një i ri.' },
      { question: 'Çfarë duhet të heq para skanimit?', answer: 'Syzet, vathët, kapëset e flokëve, varëset, piercing-et në kokë dhe qafë, si dhe protezat ose aparatet e lëvizshme. Metali e turbullon imazhin. Sillni skanimet ose radiografitë e mëparshme dhe listën e ilaçeve që merrni, dhe na tregoni nëse jeni ose mund të jeni shtatzënë.' },
      { question: 'A mund ta bëj skanimin në të njëjtën ditë me ekzaminimin?', answer: 'Po, dhe kështu e bëjnë shumica e pacientëve. Ekzaminimi përcakton nëse duhet skanim, skanimi bëhet dhe dentisti e shqyrton me ju në të njëjtën vizitë. Kështu plani i trajtimit dhe oferta përfundimtare mund të jenë gati që ditën e parë, pa humbur ditë nga qëndrimi juaj.' },
      { question: 'Çfarë tregon skanimi 3D që radiografia nuk e tregon?', answer: 'Gjerësinë e kockës, që radiografia e sheshtë nuk e tregon fare. Rrugën e saktë të nervit në nofullën e poshtme. Pozicionin e sinuseve. Formën e plotë të rrënjëve të përkulura ose shtesë. Infeksionet në majë të rrënjës që i fshehin strukturat e mbivendosura. Dhe pozicionin e dhëmballëve të pjekurisë në raport me nervin.' },
      { question: 'Pse radiografia e zakonshme nuk mjafton për implante?', answer: 'Sepse radiografia e sheshtë tregon vetëm lartësinë e përafërt të kockës, jo gjerësinë e saj, dhe distancat në të mund të jenë të shtrembëruara. Një implant ka nevojë për kockë të mjaftueshme në të gjitha drejtimet dhe për distancë të sigurt nga nervi dhe sinuset. Pa skanim 3D këto nuk maten me saktësi.' },
    ],
  },
  en: {
    name: '3D CT Scan',
    eyebrow: 'Diagnostics · Albania',
    subtitle: 'A 3D scan of teeth, jaws and nerves, so treatment is planned on real measurements, not guesswork.',
    lead: 'A fast, painless 3D scan that shows bone, roots and nerves in detail an X-ray cannot give, only when it changes your plan.',
    kicker: '3D CT scan in Tirana, Albania',
    articleTitle: '3D CT scan in Tirana: the plan on real measurements',
    intro: [
      'A 3D CT scan shows bone, teeth and nerves in three dimensions, so treatment is planned on measurements rather than guesswork.',
      'It is also known as cone-beam computed tomography, or CBCT, and builds a three-dimensional image with a single rotation around the head. The dentist can rotate it, slice it and measure it, which a flat X-ray does not allow.',
      'At Veneer Clinic, the 3D CT scan is free for patients treated with us, and is usually done at the first visit, only when your case needs it.',
    ],
    sections: [
      {
        title: 'What an X-ray cannot see',
        intro: [
          'A standard X-ray flattens the jaw into a single image. Structures overlap, distances distort and bone width does not show at all. For a filling this matters little. For an implant, a difficult extraction or a root canal in a complex tooth, it matters a lot. It is the difference between looking at a photo and looking at the object from every side.',
          'The scan shows the height, width and density of the bone, the exact path of the nerve in the lower jaw, the position of the sinuses in the upper jaw and the shape of every root. Problems hidden on a flat image, such as an infection at the tip of a root, often become visible.',
        ],
      },
      {
        title: 'Why it matters for implants',
        intro: [
          'Every implant case is planned on a 3D CT scan. It tells us whether there is enough bone, where the nerve and sinuses are, and which MegaGen implant length and diameter fit safely. The right size is chosen before surgery, not during it.',
          'If the bone is too thin or too low, the scan shows that too, and you find out at the planning stage, not in the chair.',
        ],
      },
      {
        title: 'From panoramic X-ray to 3D scan',
        intro: [
          'Before you travel, the panoramic X-ray you send from home is enough for a first diagnosis and a quote with about 90% accuracy. It shows teeth, roots and the approximate bone height.',
          'When your case involves implants, difficult extractions or complex root canals, the 3D scan is taken at your first visit to the clinic. It confirms the measurements the panoramic only approximates, and the final quote is based on them.',
        ],
      },
      {
        title: 'Read by the dentist who treats you',
        intro: [
          'The scan is taken at the clinic, and the dentist who reads it is the one doing the work, so nothing is lost between what the image shows and what is done. If something unexpected shows up, such as a cyst, a hidden crack or bone loss around an old tooth, you find out the same day, with the image in front of you.',
        ],
      },
      {
        title: 'Only when it changes the plan',
        intro: [
          'A 3D CT scan is not part of every visit. Many examinations need no extra imaging, and some need only a standard X-ray. When your case needs it, the dentist explains why before it is taken.',
          'The reason is not cost, since the scan is free for our patients. It is radiation: the dose is low, but higher than a small X-ray, so we only take it when the information changes the treatment.',
        ],
      },
      {
        title: 'How the scan works',
        intro: ['The machine sends a cone-shaped X-ray beam through the area being examined while an arm rotates once around your head. Software combines the images into a single 3D model of the teeth, jaws and surrounding structures.'],
        inline: [
          { title: 'Before the scan.', text: 'Remove glasses, earrings, hair clips, removable dentures and any metal on the head and neck, because metal blurs the image. Tell us if you are or might be pregnant. No fasting or other preparation is needed.' },
          { title: 'During the scan.', text: 'You sit or stand, rest your chin and may lightly bite a small piece that keeps the jaw still. The arm rotates for less than a minute. Painless, and the machine is open, so you do not feel enclosed.' },
          { title: 'Radiation.', text: 'A focused beam and a much lower dose than a medical head CT. If you have questions, talk to the dentist before the examination.' },
          { title: 'Reading the results.', text: 'The images are ready almost immediately. The dentist goes through them with you, showing the bone, nerves, sinuses and anything unexpected. For implants, measurements are taken directly from the scan.' },
          { title: 'How it feeds your plan.', text: 'The findings go straight into your written treatment plan: whether implants are possible without extra procedures, which teeth can be saved and in what order treatment goes. If the scan changes the plan, the quote changes too, before anything starts.' },
        ],
      },
      {
        title: 'What the scan is used for',
        intro: ['A 3D scan answers questions a flat X-ray cannot:'],
        cards: [
          { title: 'Implant planning (always)', text: 'Bone height, width and density, and the position of the nerve and sinuses, are measured before surgery to choose the MegaGen implant.' },
          { title: 'Root canals and extractions (when needed)', text: 'Shows the full shape of curved or extra roots, infections hidden on X-rays and how close a wisdom tooth is to the nerve.' },
        ],
        outro: ['If you have a recent 3D scan from another clinic, we review it first. If it covers the right area in good quality, we plan on it without repeating it.'],
      },
    ],
    stats: [
      { value: '3D', label: 'Full view' },
      { value: '<1 min', label: 'Scan' },
      { value: '1', label: 'Visit' },
      { value: 'Free', label: 'With your treatment' },
    ],
    priceTitle: 'Price',
    priceNote: 'Only when it changes the plan',
    whatTitle: 'What is a 3D CT scan?',
    what: [
      'A 3D CT scan, or cone-beam computed tomography (CBCT), is a three-dimensional image of teeth, jaws, nerves and sinuses, taken with a single rotation around the head in under a minute.',
      'Unlike a flat X-ray, it can be rotated, sliced and measured in millimetres. That makes it the basis for planning implants, difficult extractions and complex root canals.',
    ],
    calloutTitle: 'Only when needed',
    calloutText:
      'A 3D scan is not taken automatically. The dentist first explains why your case needs it. For patients treated with us it is free, and if you have a recent scan from another clinic that is good enough, we use it.',
    compareTitle: 'Where does the scan fit in your treatment?',
    compareIntro: 'The scan is part of the diagnosis. These are the treatments where it matters most:',
    compare: [
      { id: 'ct-scan', tag: 'This service', title: '3D CT scan', text: 'Real measurements of bone, nerves and sinuses in under a minute, free with your treatment.' },
      { id: 'dental-exam', tag: 'The first step', title: 'Dental examination', text: 'The examination decides whether a scan is needed. Often both happen in the same visit.' },
      { id: 'implant-megagen', tag: 'Always with a scan', title: 'Dental implant', text: 'Every implant is planned on a 3D scan, so size and position are chosen before surgery.' },
    ],
    fitTitle: 'Who needs a 3D scan?',
    fitIntro: 'A 3D scan is usually recommended if you:',
    fit: [
      'Are planning implants, including All-on-4 or All-on-6, and the bone needs measuring',
      'Need a wisdom tooth removed that may be close to the nerve',
      'Need a root canal on a tooth with curved or extra canals, or one that has failed',
      'Have pain or swelling a standard X-ray has not explained',
      'Lost teeth long ago and want to know whether enough bone remains',
      'Have a plan from another clinic and want an independent check of bone and roots',
    ],
    fitNote:
      'If a standard examination and panoramic X-ray are enough to plan treatment, we do not propose a scan. We only take the imaging your case really needs.',
    stepsTitle: 'How it works at Veneer Clinic',
    stepsIntro: 'The scan itself takes under a minute and is usually done during the first visit, not as a separate appointment:',
    steps: [
      { title: 'The reason explained', text: 'Before the scan we tell you why it is needed and what it is expected to show. Nothing is done without your agreement.' },
      { title: 'Positioning', text: 'Remove glasses, earrings and other metal on the head and neck, then stay still with your chin on the rest.' },
      { title: 'The scan', text: 'The arm rotates around your head for under a minute. Painless and open, with no injections and no contrast agent.' },
      { title: 'Review together', text: 'The dentist goes through the 3D images with you, showing the bone, roots, nerves and sinuses around the treatment area.' },
      { title: 'Plan and quote', text: 'The findings go into your written treatment plan and detailed quote, with the implant size where relevant.' },
    ],
    whyBandTitle: 'Why Veneer Clinic for your 3D CT scan?',
    whyBandText:
      'The scan is taken at the clinic where your treatment is planned and carried out, and the dentist who reads it is the one who treats you. We recommend it only when it changes the plan, it is free with your treatment, and you see what it shows before you decide anything.',
    caseText: 'Treatment planned on a 3D scan',
    faq: [
      { question: 'How much does a 3D CT scan cost?', answer: 'For patients treated with us, the 3D CT scan is free. If you need only the scan, without treatment at the clinic, contact us and we will give you the price.' },
      { question: 'Is a 3D CT scan the same as a medical CT?', answer: 'No. Both create a 3D image with X-rays, but cone-beam dental tomography is designed specifically for teeth and jaws. The beam is focused on a smaller area, the machine is open rather than a tunnel, and the dose is much lower than a medical head CT. For dental needs it gives the detail required for implants and complex roots.' },
      { question: 'Is the scan safe?', answer: 'The dose of a cone-beam dental scan is low, and noticeably lower than a medical CT. It is higher than a small dental X-ray, which is why we recommend it only when it changes treatment. Tell us before the scan if you are or might be pregnant; in that case we usually postpone it unless there is an urgent clinical reason.' },
      { question: 'Does the 3D scan hurt?', answer: 'No. You sit or stand while the arm rotates around your head. Nothing touches you except the chin rest and sometimes a small piece you bite lightly. The machine is open and the rotation takes less than a minute.' },
      { question: 'How long does the scan take?', answer: 'The scan itself takes under a minute. With positioning and removing metal items, you are usually done within a few minutes. Reading the results takes longer, because the dentist goes through the images with you, usually at the same visit.' },
      { question: 'Do I need a 3D scan for dental implants?', answer: 'Yes. Every implant case is planned on a 3D CT scan. It is the only way to measure bone height, width and density accurately and see where the nerve and sinuses are. These measurements decide which MegaGen implant fits, where it goes and whether a bone graft or sinus lift is needed first.' },
      { question: 'Why do you ask for a panoramic X-ray before I travel?', answer: 'Because a panoramic can be taken anywhere near you and is enough for a first diagnosis and a quote with about 90% accuracy. For implants it shows only the approximate bone height, not the width, so at your first visit to the clinic we complete it with the 3D scan before any procedure.' },
      { question: 'Can I use a scan from another clinic?', answer: 'Often, yes. Send it to us or bring it to the visit. If it covers the right area, is of sufficient quality and nothing important has changed since it was taken, we plan on it. If it is too old, does not show the area to be treated or a tooth has been removed since, we explain why a new one is needed.' },
      { question: 'What do I need to remove before the scan?', answer: 'Glasses, earrings, hair clips, necklaces, piercings on the head and neck, and removable dentures or appliances. Metal blurs the image. Bring any previous scans or X-rays and a list of your medications, and tell us if you are or might be pregnant.' },
      { question: 'Can I have the scan on the same day as the examination?', answer: 'Yes, and most patients do. The examination decides whether a scan is needed, the scan is taken and the dentist goes through it with you at the same visit. That way your treatment plan and final quote can be ready on day one, without losing days of your stay.' },
      { question: 'What does a 3D scan show that an X-ray does not?', answer: 'Bone width, which a flat X-ray does not show at all. The exact path of the nerve in the lower jaw. The position of the sinuses. The full shape of curved or extra roots. Infections at the root tip hidden by overlapping structures. And the position of wisdom teeth relative to the nerve.' },
      { question: 'Why is a standard X-ray not enough for implants?', answer: 'Because a flat X-ray shows only the approximate bone height, not its width, and distances on it can be distorted. An implant needs enough bone in every direction and a safe distance from the nerve and sinuses. Without a 3D scan these cannot be measured accurately.' },
    ],
  },
  de: {
    name: '3D-Röntgen (DVT)',
    eyebrow: 'Diagnostik · Albanien',
    subtitle: 'Ein 3D-Scan von Zähnen, Kiefern und Nerven, damit die Behandlung auf echten Messungen geplant wird, nicht auf Vermutungen.',
    lead: 'Ein schneller, schmerzfreier 3D-Scan, der Knochen, Wurzeln und Nerven so detailliert zeigt, wie es ein Röntgenbild nicht kann, nur wenn er Ihren Plan verändert.',
    kicker: '3D-Röntgen in Tirana, Albanien',
    articleTitle: '3D-Röntgen in Tirana: der Plan auf echten Messungen',
    intro: [
      'Ein 3D-Scan zeigt Knochen, Zähne und Nerven in drei Dimensionen, damit die Behandlung auf Messungen statt auf Vermutungen geplant wird.',
      'Er heißt auch digitale Volumentomographie (DVT) oder CBCT und erzeugt mit einer einzigen Umdrehung um den Kopf ein dreidimensionales Bild. Der Zahnarzt kann es drehen, in Schichten schneiden und vermessen, was ein flaches Röntgenbild nicht erlaubt.',
      'In der Veneer Clinic ist der 3D-Scan für Patienten in Behandlung bei uns kostenlos und wird meist beim ersten Besuch gemacht, nur wenn Ihr Fall es erfordert.',
    ],
    sections: [
      {
        title: 'Was ein Röntgenbild nicht sieht',
        intro: [
          'Ein normales Röntgenbild presst den Kiefer in ein einziges flaches Bild. Strukturen überlagern sich, Abstände verzerren sich, und die Knochenbreite ist gar nicht zu sehen. Für eine Füllung spielt das kaum eine Rolle. Für ein Implantat, eine schwierige Extraktion oder eine Wurzelbehandlung an einem komplexen Zahn sehr wohl. Es ist der Unterschied zwischen einem Foto und dem Objekt von allen Seiten.',
          'Der Scan zeigt Höhe, Breite und Dichte des Knochens, den genauen Verlauf des Nervs im Unterkiefer, die Lage der Kieferhöhlen im Oberkiefer und die Form jeder Wurzel. Probleme, die auf einem flachen Bild verborgen bleiben, etwa eine Entzündung an der Wurzelspitze, werden oft sichtbar.',
        ],
      },
      {
        title: 'Warum er für Implantate wichtig ist',
        intro: [
          'Jeder Implantatfall wird auf einem 3D-Scan geplant. Er zeigt, ob genug Knochen vorhanden ist, wo Nerv und Kieferhöhlen liegen und welche Länge und welcher Durchmesser des MegaGen-Implantats sicher passen. Die richtige Größe wird vor dem Eingriff gewählt, nicht währenddessen.',
          'Ist der Knochen zu dünn oder zu niedrig, zeigt der Scan auch das, und Sie erfahren es in der Planung, nicht auf dem Stuhl.',
        ],
      },
      {
        title: 'Vom Panoramaröntgen zum 3D-Scan',
        intro: [
          'Vor der Reise genügt das Panoramaröntgen, das Sie von zu Hause senden, für eine erste Diagnose und ein Angebot mit etwa 90 % Genauigkeit. Es zeigt Zähne, Wurzeln und die ungefähre Knochenhöhe.',
          'Umfasst Ihr Fall Implantate, schwierige Extraktionen oder komplexe Wurzelkanäle, wird beim ersten Besuch in der Klinik der 3D-Scan gemacht. Er bestätigt die Maße, die das Panoramabild nur annähert, und das endgültige Angebot stützt sich darauf.',
        ],
      },
      {
        title: 'Ausgewertet vom behandelnden Zahnarzt',
        intro: [
          'Der Scan wird in der Klinik gemacht, und der Zahnarzt, der ihn auswertet, ist derjenige, der die Arbeit ausführt. So geht nichts verloren zwischen dem, was das Bild zeigt, und dem, was gemacht wird. Taucht etwas Unerwartetes auf, etwa eine Zyste, ein verborgener Riss oder Knochenverlust um einen alten Zahn, erfahren Sie es am selben Tag, mit dem Bild vor Augen.',
        ],
      },
      {
        title: 'Nur wenn er den Plan verändert',
        intro: [
          'Ein 3D-Scan gehört nicht zu jedem Besuch. Viele Untersuchungen brauchen keine zusätzliche Bildgebung, manche nur ein normales Röntgenbild. Wenn Ihr Fall ihn erfordert, erklärt der Zahnarzt vorher warum.',
          'Der Grund sind nicht die Kosten, denn für unsere Patienten ist der Scan kostenlos. Es ist die Strahlung: Die Dosis ist niedrig, aber höher als bei einem kleinen Röntgenbild, daher machen wir ihn nur, wenn die Information die Behandlung verändert.',
        ],
      },
      {
        title: 'So funktioniert der Scan',
        intro: ['Das Gerät sendet einen kegelförmigen Röntgenstrahl durch den untersuchten Bereich, während ein Arm einmal um den Kopf rotiert. Eine Software fügt die Bilder zu einem einzigen 3D-Modell von Zähnen, Kiefern und umliegenden Strukturen zusammen.'],
        inline: [
          { title: 'Vor dem Scan.', text: 'Nehmen Sie Brille, Ohrringe, Haarspangen, herausnehmbare Prothesen und alles Metallische an Kopf und Hals ab, denn Metall verwischt das Bild. Sagen Sie uns, ob Sie schwanger sind oder sein könnten. Nüchternheit oder andere Vorbereitung ist nicht nötig.' },
          { title: 'Während des Scans.', text: 'Sie sitzen oder stehen, legen das Kinn auf und beißen eventuell leicht auf ein kleines Teil, das den Kiefer ruhig hält. Der Arm rotiert weniger als eine Minute. Schmerzfrei, und das Gerät ist offen, sodass Sie sich nicht eingeengt fühlen.' },
          { title: 'Strahlung.', text: 'Ein fokussierter Strahl und eine viel geringere Dosis als ein medizinisches Kopf-CT. Bei Fragen sprechen Sie vor der Untersuchung mit dem Zahnarzt.' },
          { title: 'Auswertung.', text: 'Die Bilder sind fast sofort fertig. Der Zahnarzt bespricht sie mit Ihnen und zeigt Knochen, Nerven, Kieferhöhlen und alles Unerwartete. Für Implantate werden die Maße direkt aus dem Scan genommen.' },
          { title: 'Wie er in Ihren Plan einfließt.', text: 'Die Befunde gehen direkt in Ihren schriftlichen Behandlungsplan: ob Implantate ohne Zusatzeingriffe möglich sind, welche Zähne erhalten werden können und in welcher Reihenfolge behandelt wird. Ändert der Scan den Plan, ändert sich auch das Angebot, bevor etwas beginnt.' },
        ],
      },
      {
        title: 'Wofür der Scan genutzt wird',
        intro: ['Ein 3D-Scan beantwortet Fragen, die ein flaches Röntgenbild nicht klärt:'],
        cards: [
          { title: 'Implantatplanung (immer)', text: 'Höhe, Breite und Dichte des Knochens sowie die Lage von Nerv und Kieferhöhlen werden vor dem Eingriff gemessen, um das MegaGen-Implantat zu wählen.' },
          { title: 'Wurzelbehandlung und Extraktion (bei Bedarf)', text: 'Zeigt die vollständige Form gekrümmter oder zusätzlicher Wurzeln, auf Röntgenbildern verborgene Entzündungen und wie nah ein Weisheitszahn am Nerv liegt.' },
        ],
        outro: ['Haben Sie einen aktuellen 3D-Scan einer anderen Klinik, prüfen wir zuerst diesen. Deckt er den richtigen Bereich in guter Qualität ab, planen wir darauf, ohne ihn zu wiederholen.'],
      },
    ],
    stats: [
      { value: '3D', label: 'Vollständige Ansicht' },
      { value: '<1 Min.', label: 'Scan' },
      { value: '1', label: 'Besuch' },
      { value: 'Gratis', label: 'Mit Ihrer Behandlung' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Nur wenn er den Plan verändert',
    whatTitle: 'Was ist ein 3D-Scan (DVT)?',
    what: [
      'Ein 3D-Scan, auch digitale Volumentomographie (DVT) oder CBCT, ist ein dreidimensionales Bild von Zähnen, Kiefern, Nerven und Kieferhöhlen, aufgenommen mit einer einzigen Umdrehung um den Kopf in weniger als einer Minute.',
      'Anders als ein flaches Röntgenbild lässt er sich drehen, in Schichten schneiden und in Millimetern vermessen. Damit ist er die Grundlage für die Planung von Implantaten, schwierigen Extraktionen und komplexen Wurzelbehandlungen.',
    ],
    calloutTitle: 'Nur wenn nötig',
    calloutText:
      'Ein 3D-Scan wird nicht automatisch gemacht. Der Zahnarzt erklärt zuerst, warum Ihr Fall ihn braucht. Für Patienten in Behandlung bei uns ist er kostenlos, und haben Sie einen ausreichenden aktuellen Scan einer anderen Klinik, nutzen wir diesen.',
    compareTitle: 'Wo passt der Scan in Ihre Behandlung?',
    compareIntro: 'Der Scan ist Teil der Diagnose. Bei diesen Behandlungen ist er am wichtigsten:',
    compare: [
      { id: 'ct-scan', tag: 'Diese Leistung', title: '3D-Röntgen', text: 'Echte Maße von Knochen, Nerven und Kieferhöhlen in weniger als einer Minute, kostenlos mit Ihrer Behandlung.' },
      { id: 'dental-exam', tag: 'Der erste Schritt', title: 'Zahnärztliche Untersuchung', text: 'Die Untersuchung entscheidet, ob ein Scan nötig ist. Oft erfolgt beides im selben Besuch.' },
      { id: 'implant-megagen', tag: 'Immer mit Scan', title: 'Zahnimplantat', text: 'Jedes Implantat wird auf einem 3D-Scan geplant, damit Größe und Position vor dem Eingriff feststehen.' },
    ],
    fitTitle: 'Wer braucht einen 3D-Scan?',
    fitIntro: 'Ein 3D-Scan wird meist empfohlen, wenn Sie:',
    fit: [
      'Implantate planen, auch All-on-4 oder All-on-6, und der Knochen vermessen werden muss',
      'Einen Weisheitszahn entfernen lassen müssen, der nahe am Nerv liegen könnte',
      'Eine Wurzelbehandlung an einem Zahn mit gekrümmten oder zusätzlichen Kanälen brauchen, oder an einem, bei dem sie versagt hat',
      'Schmerzen oder Schwellungen haben, die ein normales Röntgenbild nicht erklärt hat',
      'Vor langer Zeit Zähne verloren haben und wissen möchten, ob genug Knochen geblieben ist',
      'Einen Plan einer anderen Klinik haben und eine unabhängige Kontrolle von Knochen und Wurzeln möchten',
    ],
    fitNote:
      'Genügen eine normale Untersuchung und ein Panoramaröntgen für die Planung, schlagen wir keinen Scan vor. Wir machen nur die Bildgebung, die Ihr Fall wirklich braucht.',
    stepsTitle: 'So läuft es in der Veneer Clinic ab',
    stepsIntro: 'Der Scan selbst dauert weniger als eine Minute und erfolgt meist beim ersten Besuch, nicht als eigener Termin:',
    steps: [
      { title: 'Der Grund erklärt', text: 'Vor dem Scan sagen wir Ihnen, warum er nötig ist und was er zeigen soll. Nichts geschieht ohne Ihre Zustimmung.' },
      { title: 'Positionierung', text: 'Brille, Ohrringe und anderes Metall an Kopf und Hals abnehmen, dann mit dem Kinn auf der Stütze ruhig bleiben.' },
      { title: 'Der Scan', text: 'Der Arm rotiert weniger als eine Minute um den Kopf. Schmerzfrei und offen, ohne Spritzen und ohne Kontrastmittel.' },
      { title: 'Gemeinsame Besprechung', text: 'Der Zahnarzt bespricht die 3D-Bilder mit Ihnen und zeigt Knochen, Wurzeln, Nerven und Kieferhöhlen im Behandlungsbereich.' },
      { title: 'Plan und Angebot', text: 'Die Befunde gehen in Ihren schriftlichen Behandlungsplan und das detaillierte Angebot, bei Bedarf mit der Implantatgröße.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für Ihr 3D-Röntgen?',
    whyBandText:
      'Der Scan wird in der Klinik gemacht, in der Ihre Behandlung geplant und durchgeführt wird, und der Zahnarzt, der ihn auswertet, behandelt Sie auch. Wir empfehlen ihn nur, wenn er den Plan verändert, er ist mit Ihrer Behandlung kostenlos, und Sie sehen, was er zeigt, bevor Sie etwas entscheiden.',
    caseText: 'Behandlung auf einem 3D-Scan geplant',
    faq: [
      { question: 'Was kostet ein 3D-Scan?', answer: 'Für Patienten in Behandlung bei uns ist der 3D-Scan kostenlos. Brauchen Sie nur den Scan, ohne Behandlung in der Klinik, kontaktieren Sie uns und wir nennen Ihnen den Preis.' },
      { question: 'Ist ein DVT dasselbe wie ein medizinisches CT?', answer: 'Nein. Beide erzeugen mit Röntgenstrahlen ein 3D-Bild, aber die dentale Volumentomographie ist speziell für Zähne und Kiefer konzipiert. Der Strahl ist auf einen kleineren Bereich gerichtet, das Gerät ist offen statt einer Röhre, und die Dosis ist viel niedriger als bei einem medizinischen Kopf-CT. Für zahnärztliche Zwecke liefert es die Details, die für Implantate und komplexe Wurzeln nötig sind.' },
      { question: 'Ist der Scan sicher?', answer: 'Die Dosis eines dentalen DVT ist niedrig und deutlich geringer als bei einem medizinischen CT. Sie ist höher als bei einem kleinen Zahnröntgenbild, weshalb wir ihn nur empfehlen, wenn er die Behandlung verändert. Sagen Sie uns vorher, ob Sie schwanger sind oder sein könnten; dann verschieben wir ihn meist, außer bei dringendem klinischem Grund.' },
      { question: 'Tut der 3D-Scan weh?', answer: 'Nein. Sie sitzen oder stehen, während der Arm um Ihren Kopf rotiert. Nichts berührt Sie außer der Kinnstütze und manchmal einem kleinen Teil, auf das Sie leicht beißen. Das Gerät ist offen und die Umdrehung dauert weniger als eine Minute.' },
      { question: 'Wie lange dauert der Scan?', answer: 'Der Scan selbst dauert weniger als eine Minute. Mit Positionierung und Ablegen von Metall sind Sie meist in wenigen Minuten fertig. Die Auswertung dauert länger, weil der Zahnarzt die Bilder mit Ihnen bespricht, meist im selben Besuch.' },
      { question: 'Brauche ich für Implantate einen 3D-Scan?', answer: 'Ja. Jeder Implantatfall wird auf einem 3D-Scan geplant. Nur so lassen sich Höhe, Breite und Dichte des Knochens genau messen und Nerv und Kieferhöhlen lokalisieren. Diese Maße bestimmen, welches MegaGen-Implantat passt, wo es hinkommt und ob vorher ein Knochenaufbau oder Sinuslift nötig ist.' },
      { question: 'Warum fragen Sie vor der Reise nach einem Panoramaröntgen?', answer: 'Weil ein Panoramabild überall in Ihrer Nähe gemacht werden kann und für eine erste Diagnose und ein Angebot mit etwa 90 % Genauigkeit genügt. Für Implantate zeigt es nur die ungefähre Knochenhöhe, nicht die Breite, daher ergänzen wir es beim ersten Besuch in der Klinik vor jedem Eingriff durch den 3D-Scan.' },
      { question: 'Kann ich einen Scan einer anderen Klinik nutzen?', answer: 'Oft ja. Senden Sie ihn uns oder bringen Sie ihn mit. Deckt er den richtigen Bereich ab, hat ausreichende Qualität und hat sich seitdem nichts Wichtiges verändert, planen wir darauf. Ist er zu alt, zeigt den Behandlungsbereich nicht oder wurde inzwischen ein Zahn entfernt, erklären wir, warum ein neuer nötig ist.' },
      { question: 'Was muss ich vor dem Scan ablegen?', answer: 'Brille, Ohrringe, Haarspangen, Ketten, Piercings an Kopf und Hals sowie herausnehmbare Prothesen oder Apparaturen. Metall verwischt das Bild. Bringen Sie frühere Scans oder Röntgenbilder und Ihre Medikamentenliste mit, und sagen Sie uns, ob Sie schwanger sind oder sein könnten.' },
      { question: 'Kann der Scan am selben Tag wie die Untersuchung erfolgen?', answer: 'Ja, und so machen es die meisten Patienten. Die Untersuchung entscheidet, ob ein Scan nötig ist, er wird gemacht und der Zahnarzt bespricht ihn mit Ihnen im selben Besuch. So können Behandlungsplan und endgültiges Angebot am ersten Tag fertig sein, ohne Tage Ihres Aufenthalts zu verlieren.' },
      { question: 'Was zeigt ein 3D-Scan, was ein Röntgenbild nicht zeigt?', answer: 'Die Knochenbreite, die ein flaches Röntgenbild gar nicht zeigt. Den genauen Nervverlauf im Unterkiefer. Die Lage der Kieferhöhlen. Die vollständige Form gekrümmter oder zusätzlicher Wurzeln. Entzündungen an der Wurzelspitze, die überlagerte Strukturen verdecken. Und die Lage von Weisheitszähnen zum Nerv.' },
      { question: 'Warum genügt ein normales Röntgenbild für Implantate nicht?', answer: 'Weil ein flaches Röntgenbild nur die ungefähre Knochenhöhe zeigt, nicht die Breite, und Abstände darauf verzerrt sein können. Ein Implantat braucht genug Knochen in alle Richtungen und sicheren Abstand zu Nerv und Kieferhöhlen. Ohne 3D-Scan lässt sich das nicht genau messen.' },
    ],
  },
  it: {
    name: 'TAC 3D (CBCT)',
    eyebrow: 'Diagnostica · Albania',
    subtitle: 'Una scansione 3D di denti, ossa mascellari e nervi, perché il trattamento si pianifichi su misure reali, non a occhio.',
    lead: 'Una scansione 3D rapida e indolore che mostra osso, radici e nervi con un dettaglio che la radiografia non dà, solo quando cambia il tuo piano.',
    kicker: 'TAC 3D a Tirana, Albania',
    articleTitle: 'TAC 3D a Tirana: il piano su misure reali',
    intro: [
      'Una TAC 3D mostra osso, denti e nervi in tre dimensioni, perché il trattamento si pianifichi su misure e non a occhio.',
      'È nota anche come tomografia computerizzata a fascio conico, o CBCT, e costruisce un’immagine tridimensionale con un’unica rotazione attorno alla testa. Il dentista può ruotarla, sezionarla e misurarla, cosa che la radiografia piatta non consente.',
      'Alla Veneer Clinic, la TAC 3D è gratuita per i pazienti in trattamento da noi e si fa di solito alla prima visita, solo quando il tuo caso lo richiede.',
    ],
    sections: [
      {
        title: 'Cosa non vede la radiografia',
        intro: [
          'La radiografia normale schiaccia l’arcata in un’unica immagine piatta. Le strutture si sovrappongono, le distanze si deformano e la larghezza dell’osso non si vede affatto. Per un’otturazione conta poco. Per un impianto, un’estrazione difficile o una cura canalare su un dente complesso, conta molto. È la differenza tra guardare una foto e guardare l’oggetto da ogni lato.',
          'La scansione mostra altezza, larghezza e densità dell’osso, il percorso esatto del nervo nell’arcata inferiore, la posizione dei seni nell’arcata superiore e la forma di ogni radice. Problemi nascosti in un’immagine piatta, come un’infezione all’apice della radice, spesso diventano visibili.',
        ],
      },
      {
        title: 'Perché conta per gli impianti',
        intro: [
          'Ogni caso implantare si pianifica su una TAC 3D. Ci dice se c’è abbastanza osso, dove si trovano nervo e seni, e quale lunghezza e diametro dell’impianto MegaGen sono sicuri. La misura giusta si sceglie prima dell’intervento, non durante.',
          'Se l’osso è troppo sottile o troppo basso, la scansione mostra anche questo, e lo scopri in fase di pianificazione, non sulla poltrona.',
        ],
      },
      {
        title: 'Dalla panoramica alla TAC 3D',
        intro: [
          'Prima del viaggio, la panoramica che ci invii da casa basta per una prima diagnosi e un preventivo con circa il 90% di precisione. Mostra denti, radici e l’altezza approssimativa dell’osso.',
          'Quando il tuo caso comprende impianti, estrazioni difficili o canali complessi, la TAC 3D si fa alla prima visita in clinica. Conferma le misure che la panoramica solo approssima, e il preventivo definitivo si basa su di esse.',
        ],
      },
      {
        title: 'La legge il dentista che ti cura',
        intro: [
          'La scansione si fa in clinica, e il dentista che la legge è quello che esegue il lavoro, così nulla si perde tra ciò che mostra l’immagine e ciò che si fa. Se emerge qualcosa di inatteso, come una cisti, una frattura nascosta o perdita ossea attorno a un dente vecchio, lo scopri lo stesso giorno, con l’immagine davanti.',
        ],
      },
      {
        title: 'Solo quando cambia il piano',
        intro: [
          'La TAC 3D non fa parte di ogni visita. Molte visite non richiedono immagini aggiuntive, e alcune solo una radiografia normale. Quando il tuo caso la richiede, il dentista ti spiega perché prima di eseguirla.',
          'Il motivo non è il costo, perché per i nostri pazienti la scansione è gratuita. È la radiazione: la dose è bassa, ma più alta di una piccola radiografia, quindi la facciamo solo quando l’informazione cambia il trattamento.',
        ],
      },
      {
        title: 'Come funziona la scansione',
        intro: ['L’apparecchio invia un fascio di raggi X a forma di cono attraverso la zona esaminata mentre un braccio compie una rotazione attorno alla testa. Un software unisce le immagini in un unico modello 3D di denti, ossa mascellari e strutture circostanti.'],
        inline: [
          { title: 'Prima della scansione.', text: 'Togli occhiali, orecchini, fermagli, protesi mobili e qualsiasi oggetto metallico su testa e collo, perché il metallo sfoca l’immagine. Dicci se sei o potresti essere incinta. Non serve digiuno né altra preparazione.' },
          { title: 'Durante la scansione.', text: 'Stai seduto o in piedi, appoggi il mento e forse mordi leggermente un piccolo elemento che tiene ferma l’arcata. Il braccio ruota per meno di un minuto. Indolore, e l’apparecchio è aperto, quindi non ti senti chiuso.' },
          { title: 'Radiazioni.', text: 'Un fascio mirato e una dose molto più bassa di una TAC medica della testa. Se hai domande, parlane con il dentista prima dell’esame.' },
          { title: 'Lettura dei risultati.', text: 'Le immagini sono pronte quasi subito. Il dentista le esamina con te e ti mostra osso, nervi, seni e qualsiasi sorpresa. Per gli impianti, le misure si prendono direttamente dalla scansione.' },
          { title: 'Come entra nel tuo piano.', text: 'I risultati passano direttamente nel piano di trattamento scritto: se gli impianti sono possibili senza interventi aggiuntivi, quali denti si salvano e in che ordine procede il trattamento. Se la scansione cambia il piano, cambia anche il preventivo, prima che inizi qualsiasi cosa.' },
        ],
      },
      {
        title: 'A cosa serve la scansione',
        intro: ['La TAC 3D risponde a domande che la radiografia piatta non risolve:'],
        cards: [
          { title: 'Pianificazione implantare (sempre)', text: 'Altezza, larghezza e densità dell’osso, e la posizione di nervo e seni, si misurano prima dell’intervento per scegliere l’impianto MegaGen.' },
          { title: 'Cure canalari ed estrazioni (quando serve)', text: 'Mostra la forma completa di radici curve o in più, infezioni nascoste in radiografia e quanto un dente del giudizio è vicino al nervo.' },
        ],
        outro: ['Se hai una TAC 3D recente di un’altra clinica, la esaminiamo per prima. Se copre la zona giusta con buona qualità, pianifichiamo su quella senza ripeterla.'],
      },
    ],
    stats: [
      { value: '3D', label: 'Vista completa' },
      { value: '<1 min', label: 'Scansione' },
      { value: '1', label: 'Visita' },
      { value: 'Gratis', label: 'Con il trattamento' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Solo quando cambia il piano',
    whatTitle: 'Cos’è la TAC 3D?',
    what: [
      'La TAC 3D, o tomografia computerizzata a fascio conico (CBCT), è un’immagine tridimensionale di denti, ossa mascellari, nervi e seni, acquisita con un’unica rotazione attorno alla testa in meno di un minuto.',
      'A differenza della radiografia piatta, si può ruotare, sezionare e misurare in millimetri. Per questo è la base per pianificare impianti, estrazioni difficili e cure canalari complesse.',
    ],
    calloutTitle: 'Solo quando serve',
    calloutText:
      'La TAC 3D non si fa automaticamente. Il dentista ti spiega prima perché il tuo caso la richiede. Per i pazienti in trattamento da noi è gratuita, e se hai una scansione recente di un’altra clinica sufficiente, usiamo quella.',
    compareTitle: 'Dove entra la scansione nel tuo trattamento?',
    compareIntro: 'La scansione fa parte della diagnosi. Questi sono i trattamenti in cui conta di più:',
    compare: [
      { id: 'ct-scan', tag: 'Questo servizio', title: 'TAC 3D', text: 'Misure reali di osso, nervi e seni in meno di un minuto, gratuita con il tuo trattamento.' },
      { id: 'dental-exam', tag: 'Il primo passo', title: 'Visita odontoiatrica', text: 'La visita decide se serve la scansione. Spesso entrambe avvengono nello stesso appuntamento.' },
      { id: 'implant-megagen', tag: 'Sempre con scansione', title: 'Impianto dentale', text: 'Ogni impianto si pianifica su una TAC 3D, così misura e posizione si scelgono prima dell’intervento.' },
    ],
    fitTitle: 'A chi serve una TAC 3D?',
    fitIntro: 'La TAC 3D si consiglia di solito se:',
    fit: [
      'Stai pianificando impianti, compresi All-on-4 o All-on-6, e l’osso va misurato',
      'Devi togliere un dente del giudizio che potrebbe essere vicino al nervo',
      'Ti serve una cura canalare su un dente con canali curvi o in più, o su uno in cui è fallita',
      'Hai dolore o gonfiore che la radiografia normale non ha spiegato',
      'Hai perso denti da tempo e vuoi sapere se resta abbastanza osso',
      'Hai un piano di un’altra clinica e vuoi un controllo indipendente di osso e radici',
    ],
    fitNote:
      'Se una visita normale e la panoramica bastano per pianificare il trattamento, non ti proponiamo la scansione. Facciamo solo le immagini che servono davvero al tuo caso.',
    stepsTitle: 'Come funziona alla Veneer Clinic',
    stepsIntro: 'La scansione dura meno di un minuto e si fa di solito durante la prima visita, non in un appuntamento a parte:',
    steps: [
      { title: 'Il motivo spiegato', text: 'Prima della scansione ti diciamo perché serve e cosa dovrebbe mostrare. Nulla si fa senza il tuo consenso.' },
      { title: 'Posizionamento', text: 'Togli occhiali, orecchini e altro metallo su testa e collo, poi resta fermo con il mento sull’appoggio.' },
      { title: 'La scansione', text: 'Il braccio ruota attorno alla testa per meno di un minuto. Indolore e aperta, senza iniezioni né mezzo di contrasto.' },
      { title: 'Esame insieme', text: 'Il dentista esamina con te le immagini 3D e ti mostra osso, radici, nervi e seni attorno alla zona da trattare.' },
      { title: 'Piano e preventivo', text: 'I risultati entrano nel piano di trattamento scritto e nel preventivo dettagliato, con la misura dell’impianto quando serve.' },
    ],
    whyBandTitle: 'Perché Veneer Clinic per la tua TAC 3D?',
    whyBandText:
      'La scansione si fa nella clinica dove il trattamento si pianifica e si esegue, e il dentista che la legge è quello che ti cura. La consigliamo solo quando cambia il piano, è gratuita con il tuo trattamento, e vedi cosa mostra prima di decidere qualsiasi cosa.',
    caseText: 'Trattamento pianificato su TAC 3D',
    faq: [
      { question: 'Quanto costa la TAC 3D?', answer: 'Per i pazienti in trattamento da noi, la TAC 3D è gratuita. Se ti serve solo la scansione, senza trattamento in clinica, contattaci e ti diamo il prezzo.' },
      { question: 'La TAC 3D è uguale a una TAC medica?', answer: 'No. Entrambe creano un’immagine 3D con raggi X, ma la tomografia dentale a fascio conico è progettata apposta per denti e ossa mascellari. Il fascio si concentra su una zona più piccola, l’apparecchio è aperto e non a tunnel, e la dose è molto più bassa di una TAC medica della testa. Per l’odontoiatria dà il dettaglio necessario per impianti e radici complesse.' },
      { question: 'La scansione è sicura?', answer: 'La dose di una TAC dentale a fascio conico è bassa, e nettamente inferiore a quella di una TAC medica. È più alta di una piccola radiografia dentale, per questo la consigliamo solo quando cambia il trattamento. Dicci prima se sei o potresti essere incinta; in quel caso di solito la rimandiamo, salvo motivi clinici urgenti.' },
      { question: 'La TAC 3D fa male?', answer: 'No. Stai seduto o in piedi mentre il braccio ruota attorno alla testa. Nulla ti tocca tranne l’appoggio per il mento e a volte un piccolo elemento che mordi leggermente. L’apparecchio è aperto e la rotazione dura meno di un minuto.' },
      { question: 'Quanto dura la scansione?', answer: 'La scansione dura meno di un minuto. Con posizionamento e rimozione degli oggetti metallici, di solito finisci in pochi minuti. La lettura dei risultati richiede di più, perché il dentista esamina le immagini con te, di solito nella stessa visita.' },
      { question: 'Mi serve una TAC 3D per gli impianti?', answer: 'Sì. Ogni caso implantare si pianifica su una TAC 3D. È l’unico modo per misurare con precisione altezza, larghezza e densità dell’osso e vedere dove sono nervo e seni. Queste misure decidono quale impianto MegaGen va bene, dove va e se prima serve un innesto osseo o un rialzo del seno.' },
      { question: 'Perché mi chiedete una panoramica prima del viaggio?', answer: 'Perché una panoramica si può fare ovunque vicino a te e basta per una prima diagnosi e un preventivo con circa il 90% di precisione. Per gli impianti mostra solo l’altezza approssimativa dell’osso, non la larghezza, quindi alla prima visita in clinica la completiamo con la TAC 3D prima di qualsiasi intervento.' },
      { question: 'Posso usare una scansione di un’altra clinica?', answer: 'Spesso sì. Inviacela o portala alla visita. Se copre la zona giusta, ha qualità sufficiente e non è cambiato nulla di importante da quando è stata fatta, pianifichiamo su quella. Se è troppo vecchia, non mostra la zona da trattare o nel frattempo è stato tolto un dente, ti spieghiamo perché ne serve una nuova.' },
      { question: 'Cosa devo togliere prima della scansione?', answer: 'Occhiali, orecchini, fermagli, collane, piercing su testa e collo, e protesi o apparecchi mobili. Il metallo sfoca l’immagine. Porta eventuali scansioni o radiografie precedenti e l’elenco dei farmaci, e dicci se sei o potresti essere incinta.' },
      { question: 'Posso fare la scansione lo stesso giorno della visita?', answer: 'Sì, ed è ciò che fa la maggior parte dei pazienti. La visita decide se serve la scansione, la scansione si esegue e il dentista la esamina con te nello stesso appuntamento. Così piano di trattamento e preventivo definitivo possono essere pronti il primo giorno, senza perdere giorni del soggiorno.' },
      { question: 'Cosa mostra la TAC 3D che la radiografia non mostra?', answer: 'La larghezza dell’osso, che la radiografia piatta non mostra affatto. Il percorso esatto del nervo nell’arcata inferiore. La posizione dei seni. La forma completa di radici curve o in più. Le infezioni all’apice nascoste dalle strutture sovrapposte. E la posizione dei denti del giudizio rispetto al nervo.' },
      { question: 'Perché la radiografia normale non basta per gli impianti?', answer: 'Perché la radiografia piatta mostra solo l’altezza approssimativa dell’osso, non la larghezza, e le distanze possono essere deformate. Un impianto ha bisogno di osso sufficiente in ogni direzione e di una distanza sicura da nervo e seni. Senza TAC 3D queste cose non si misurano con precisione.' },
    ],
  },
};

export default function CtScanPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="ct-scan"
      heroImage={images.clinicGallery[2] ?? images.heroAfter}
      whatImage={images.surgery[15] ?? images.heroAfter}
    />
  );
}
