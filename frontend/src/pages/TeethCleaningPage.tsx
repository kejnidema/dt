import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Pastrimi i dhëmbëve',
    eyebrow: 'Higjienë dhe parandalim · Shqipëri',
    subtitle: 'Pastrim profesional me heqje gurëzash me ultratinguj dhe lustrim, kontroll të mishrave dhe këshilla për kujdesin në shtëpi, në një seancë.',
    lead: 'Një pastrim i plotë që heq atë që furça nuk e arrin, për mishra më të shëndetshëm dhe një buzëqeshje më të ndritshme.',
    kicker: 'Pastrimi i dhëmbëve në Tiranë, Shqipëri',
    articleTitle: 'Pastrimi i dhëmbëve në Tiranë: heqje gurëzash dhe lustrim profesional',
    intro: [
      'Pastrimi i dhëmbëve në Veneer Clinic heq pllakën dhe gurëzat që furça dhe filli dentar i lënë pas. Kur pllaka ngurtësohet dhe kthehet në gurëz, asnjë furçë nuk e heq dot, dhe ajo vazhdon të ushqejë bakteret që përflakin mishrat dhe shkaktojnë karies.',
      'Pastrimi bëhet në një seancë prej 30 deri në 60 minutash. Dhëmbët kontrollohen, pastrohen dhe lustrohen, dhe dilni duke ditur saktësisht në çfarë gjendje janë mishrat tuaj.',
    ],
    sections: [
      {
        title: 'Më shumë se një lustrim',
        intro: [
          'Disa klinika shesin një lustrim të shpejtë si pastrim të plotë. Dhëmbët duken më bukur për një javë, por nën skajin e mishit, aty ku nis vërtet sëmundja e mishrave, nuk ndryshon asgjë. Ne i heqim gurëzat me ultratinguj nga çdo sipërfaqe, edhe ndërmjet dhëmbëve dhe pak nën skajin e mishit, përpara se të kalojmë te lustrimi.',
          'Nëse kontrolli tregon diçka që pastrimi nuk e zgjidh, si xhepa të thellë, humbje kocke ose dhëmbë që lëvizin, jua themi para se të nisim dhe ju shpjegojmë çfarë do të përfshinte trajtimi i mishrave.',
        ],
      },
      {
        title: 'Pastrim dhe zbardhim në të njëjtën ditë',
        intro: [
          'Shumë pacientë e kombinojnë pastrimin me zbardhimin. Ka logjikë: pastrimi heq fillimisht gurëzat dhe njollat sipërfaqësore, kështu që zbardhimi i dhëmbëve vepron mbi smalt të pastër dhe rezultati del më i njëtrajtshëm.',
          'Zbardhimi ynë bëhet në klinikë, me aktivizim me dritë prej zakonisht 20 deri në 30 minutash, të shkurtuar nëse keni dhëmbë të ndjeshëm, dhe mund të bëhet menjëherë pas pastrimit, në të njëjtën vizitë.',
        ],
      },
      {
        title: 'Kujdes për punimet që keni',
        intro: [
          'Kurorat, fasetat dhe implantet qëndrojnë më mirë në një gojë të pastër. Mishi dhe kocka rreth implantit kanë nevojë për të njëjtin kujdes si dhëmbët natyralë, dhe gurëzat në qafën e implantit janë një nga shkaqet kryesore të inflamacionit rreth tij.',
          'Pastrojmë rreth implanteve MegaGen, kurorave prej zirkoni Made in Germany dhe kurorave e fasetave E-max, si dhe rreth punimeve të bëra në klinika të tjera, me kujdes që të mos gërvishtet sipërfaqja e restaurimit. Më pas ju tregojmë si t’i mbani të pastra këto zona në shtëpi.',
        ],
      },
      {
        title: 'Para fasetave, kurorave apo implanteve',
        intro: [
          'Nëse vini për faseta, kurora ose implante, pastrimi është zakonisht një nga hapat e parë të planit. Mishrat e qetë dhe pa gurëza japin matje më të sakta dhe një skaj më të pastër rreth çdo restaurimi, dhe ngjyra e punimeve zgjidhet mbi dhëmbë të pastër.',
        ],
      },
      {
        title: 'Qartësi për çfarë përfshihet',
        intro: [
          'Pastrimi kushton 30 € dhe përfshin heqjen e gurëzave me ultratinguj dhe lustrimin. Nëse e kombinoni me zbardhimin, totali është 180 €. Çdo gjë tjetër, si radiografitë ose trajtimi i mishrave, bëhet vetëm me miratimin tuaj dhe shfaqet në rresht më vete në ofertë. Asgjë nuk shtohet më pas.',
        ],
      },
      {
        title: 'Si bëhet pastrimi profesional i dhëmbëve?',
        intro: ['Një pastrim profesional ndjek gjithmonë të njëjtën radhë, dhe çdo hap ka arsyen e vet.'],
        inline: [
          { title: 'Fillimisht një kontroll.', text: 'Kontrollojmë dhëmbët dhe mishrat: ku janë grumbulluar gurëzat, nëse mishrat gjakosin dhe nëse ka diçka që kërkon vëmendje. Nëse nuk keni bërë prej kohësh një ekzaminim të plotë, ju rekomandojmë ta rezervoni bashkë me pastrimin; ekzaminimi është falas. Radiografitë nuk janë pjesë e pastrimit; nëse nevojiten, ju shpjegojmë më parë pse.' },
          { title: 'Heqja e gurëzave.', text: 'Gurëzat hiqen me ultratinguj nga çdo sipërfaqe e dhëmbit, duke punuar përgjatë mishit dhe ndërmjet dhëmbëve, aty ku grumbullohen më shumë. Ky është hapi më i rëndësishëm për mishrat. Depozitat e trasha hiqen gradualisht, pa forcë, për të ruajtur smaltin dhe mishin. Zakonisht nuk nevojitet anestezi: shumica e njerëzve ndiejnë dridhje dhe ujë të ftohtë më shumë se dhimbje. Nëse një zonë është e ndjeshme, na e thoni dhe ngadalësojmë.' },
          { title: 'Lustrimi.', text: 'Pasi hiqen gurëzat, dhëmbët lustrohen me një pastë të posaçme që heq njollat sipërfaqësore nga kafeja, çaji, vera dhe duhani dhe e lë smaltin të lëmuar. Sipërfaqet e lëmuara mbledhin pllakë më ngadalë, ndaj rezultati zgjat më shumë.' },
          { title: 'Këshilla që ju shërbejnë vërtet.', text: 'Në fund ju tregojmë ku grumbullohet pllaka në gojën tuaj dhe si t’i arrini ato zona: teknikën e larjes, fillin dentar ose furçat ndërdhëmbore, dhe çdo gjë të veçantë për kurorat, fasetat ose implantet tuaja. Këshillat jepen për gojën tuaj, jo si listë e përgjithshme.' },
          { title: 'Çfarë vini re më pas.', text: 'Dhëmbët ndihen të lëmuar dhe duken më të ndritshëm menjëherë. Nëse mishrat ishin të përflakur, mund të jenë pak të ndjeshëm për një ose dy ditë dhe zakonisht gjakosin më pak ndërsa qetësohen gjatë javëve në vijim. Nëse keni zgjedhur edhe zbardhimin, ai mund të bëhet menjëherë pas pastrimit.' },
        ],
      },
    ],
    stats: [
      { value: '30–60', label: 'Minuta' },
      { value: '1', label: 'Seancë' },
      { value: '6', label: 'Muaj ndërmjet pastrimeve' },
      { value: 'Pa', label: 'Anestezi zakonisht' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Me zbardhim: 180 € gjithsej',
    whatTitle: 'Çfarë është pastrimi profesional i dhëmbëve?',
    what: [
      'Pastrimi profesional heq me ultratinguj gurëzat dhe pllakën mbi dhe pak nën vijën e mishit, e ndjekur nga lustrimi që heq njollat sipërfaqësore dhe lëmon smaltin.',
      'Bëhet në një seancë, zakonisht pa dhimbje dhe pa anestezi, dhe rekomandohet çdo gjashtë muaj për shumicën e të rriturve.',
    ],
    calloutTitle: 'Kombinojeni pastrimin me zbardhimin',
    calloutText:
      'Zbardhimi jep rezultat më të mirë mbi smaltin e sapopastruar, pa gurëza dhe pa njolla sipërfaqësore. Bëhet në klinikë, me aktivizim me dritë prej 20 deri në 30 minutash, i përshtatur për dhëmbë të ndjeshëm, dhe mund të bëhet në të njëjtën ditë me pastrimin.',
    compareTitle: 'Mundësitë e pastrimit',
    compareIntro: 'Çdo pastrim përfshin heqjen e gurëzave dhe lustrimin. Çfarë shtoni varet nga dhëmbët dhe qëllimet tuaja:',
    compare: [
      { id: 'scaling', tag: 'Standard', title: 'Pastrim dhe lustrim', text: 'Heqje e gurëzave me ultratinguj nga çdo sipërfaqe dhe lustrim për të hequr njollat. Zgjedhja e duhur për shumicën e pacientëve çdo gjashtë muaj.' },
      { id: 'whitening', tag: 'E kërkuar', title: 'Pastrim dhe zbardhim', text: 'Pastrim dhe lustrim i plotë, i ndjekur nga zbardhimi në klinikë, i përshtatur sipas ndjeshmërisë. Të dyja në të njëjtën ditë, 180 € gjithsej.' },
      { id: 'dental-exam', tag: 'Kur nevojitet', title: 'Ekzaminim dentar', text: 'Nëse kanë kaluar vite nga kontrolli i fundit ose kontrolli tregon probleme me mishrat, ekzaminimi i plotë jep planin. Falas.' },
    ],
    fitTitle: 'Kur duhet të rezervoni një pastrim profesional?',
    fitIntro: 'Ia vlen të rezervoni një pastrim profesional nëse:',
    fit: [
      'Shihni ose ndieni depozita të forta përgjatë mishit ose pas prerësve të poshtëm',
      'Ju gjakosin mishrat kur lani dhëmbët ose përdorni fill, shenja e parë e inflamacionit',
      'Keni njolla sipërfaqësore nga kafeja, çaji, vera ose duhani që furça nuk i heq',
      'Po mendoni për zbardhim dhe doni rezultatin më të njëtrajtshëm',
      'Keni implante, kurora ose faseta dhe doni t’i mbani të shëndetshëm mishrat përreth',
      'Kanë kaluar më shumë se gjashtë muaj nga pastrimi i fundit profesional',
    ],
    fitNote:
      'Nëse mishrat ju gjakosin shumë, ndonjë dhëmb lëviz ose janë krijuar xhepa, vetëm pastrimi mund të mos mjaftojë. E kontrollojmë më parë dhe, nëse nevojitet trajtim i mishrave, jua themi para se të nisim.',
    stepsTitle: 'Si funksionon pastrimi në Veneer Clinic',
    stepsIntro: 'Pastrimi profesional bëhet në një seancë, dhe dilni me dhëmbë më të lëmuar e më të ndritshëm dhe me një pasqyrë të qartë të shëndetit të mishrave:',
    steps: [
      { title: 'Kontrolli i dhëmbëve dhe mishrave', text: 'Kontrollojmë dhëmbët dhe mishrat, gjejmë ku janë grumbulluar gurëzat dhe shënojmë çfarë kërkon vëmendje.' },
      { title: 'Heqja e gurëzave', text: 'Gurëzat hiqen me ultratinguj nga çdo sipërfaqe, përgjatë mishit dhe ndërmjet dhëmbëve. Nëse një zonë është e ndjeshme, ngadalësojmë.' },
      { title: 'Lustrimi', text: 'Një pastë lustruese heq njollat sipërfaqësore dhe lëmon smaltin, kështu pllaka grumbullohet më ngadalë.' },
      { title: 'Këshilla për shtëpinë', text: 'Ju tregojmë ku grumbullohet pllaka në gojën tuaj dhe si ta arrini, edhe rreth kurorave, fasetave dhe implanteve.' },
    ],
    whyBandTitle: 'Pse Veneer Clinic për pastrimin e dhëmbëve?',
    whyBandText:
      'Këtu pastrimi i heq gurëzat nga çdo sipërfaqe, jo vetëm nga pjesët që duken. Ju tregojmë hapur në çfarë gjendje janë mishrat tuaj dhe, nëse pastrimi nuk mjafton, e mësoni para se të nisim, jo më pas. Çmimi që ju japim është çmimi që paguani.',
    caseText: 'Mishra të shëndetshëm, buzëqeshje më e ndritshme',
    faq: [
      { question: 'Sa kushton pastrimi i dhëmbëve?', answer: '30 €, për heqjen e gurëzave me ultratinguj dhe lustrimin. Nëse e kombinoni me zbardhimin në klinikë, totali është 180 €. Ekzaminimi dentar është falas. Çdo trajtim tjetër bëhet vetëm me miratimin tuaj dhe shfaqet veçmas në ofertë.' },
      { question: 'A dhemb pastrimi i dhëmbëve?', answer: 'Zakonisht jo, dhe bëhet pa anestezi. Shumica e njerëzve ndiejnë dridhje, ujë të ftohtë dhe pak presion, më shumë se dhimbje. Nëse mishrat janë të përflakur ose dhëmbët të ndjeshëm, disa zona mund të shqetësojnë, sidomos përgjatë mishit. Na e thoni: ngadalësojmë, punojmë më lehtë ose bëjmë pushim. Ndjeshmëria zakonisht kalon brenda një ose dy ditëve. Nëse ka shumë gurëza ose xhepa të thellë në mishra, pastrimi mund të ndihet më shumë. Në këtë rast flasim më parë për mundësitë që të ndiheni rehat, në vend që të vazhdojmë sidoqoftë.' },
      { question: 'Sa zgjat një pastrim profesional?', answer: 'Zakonisht 30 deri në 60 minuta, në një seancë. Koha varet kryesisht nga sasia e gurëzave që janë grumbulluar që nga pastrimi i fundit. Nëse pastrimi i fundit ka qenë së fundmi, takimi është i shpejtë. Nëse kanë kaluar vite, heqja e gurëzave zgjat më shumë dhe ndonjëherë rekomandojmë ta ndajmë punën në dy seanca, që të mos lodhen mishrat njëherësh. Nëse shtoni zbardhimin, llogaritni kohë shtesë për seancën e zbardhimit.' },
      { question: 'A i zbardh pastrimi dhëmbët?', answer: 'Heq njollat sipërfaqësore, ndaj dhëmbët zakonisht duken dukshëm më të ndritshëm, por nuk e ndryshon ngjyrën natyrale të smaltit. Kafeja, çaji, vera dhe duhani lënë njolla në sipërfaqe, dhe lustrimi heq shumicën e tyre. Nuanca poshtë mbetet e njëjtë. Nëse doni dhëmbë më të çelët se ngjyra e tyre natyrale, për këtë shërben zbardhimi i dhëmbëve. Të dyja trajtimet shkojnë mirë bashkë. Kur pastrimi bëhet i pari, xheli zbardhues vepron mbi smalt të pastër dhe rezultati del më i njëtrajtshëm. Të dyja mund të bëhen në të njëjtën ditë.' },
      { question: 'A mund të bëj pastrim dhe zbardhim në të njëjtën ditë?', answer: 'Po, dhe është një nga kombinimet më të kërkuara. Fillimisht bëhet pastrimi, që heq gurëzat dhe njollat sipërfaqësore. Më pas vjen zbardhimi në klinikë, me aktivizim me dritë prej 20 deri në 30 minutash, të shkurtuar nëse dhëmbët janë të ndjeshëm. Totali për të dyja është 180 €. Nëse nuk jeni të sigurt nëse zbardhimi u përshtatet dhëmbëve tuaj, e vlerësojmë gjatë kontrollit në fillim të pastrimit dhe jua themi para se të vendosni.' },
      { question: 'Më gjakosin mishrat kur laj dhëmbët. A mjafton pastrimi?', answer: 'Shpesh po. Gjakosja zakonisht është shenja e parë e gingivitit, që shkaktohet nga pllaka dhe gurëzat përgjatë mishit. Heqja e tyre dhe kujdesi më i mirë në shtëpi shpesh e zgjidhin problemin brenda pak javësh. Nëse kontrolli tregon probleme më të thella, si xhepa ndërmjet mishit dhe dhëmbit, humbje kocke ose dhëmbë që lëvizin, vetëm pastrimi nuk mjafton. Jua themi para se të nisim dhe ju shpjegojmë çfarë do të përfshinte trajtimi i mishrave. Mos e ndërprisni larjen e dhëmbëve sepse ju gjakosin mishrat: larja e butë dhe e kujdesshme është pjesë e shërimit.' },
      { question: 'A mund të pastroni rreth implanteve, kurorave dhe fasetave?', answer: 'Po, dhe te restaurimet ka edhe më shumë rëndësi. Gurëzat rreth implantit mund ta përflakin mishin dhe, nëse lihen pa trajtuar, të dëmtojnë kockën që e mban. Te kurorat dhe fasetat, problemet zakonisht nisin nga grumbullimi në skaje. Pastrojmë rreth implanteve MegaGen, kurorave prej zirkoni Made in Germany, kurorave e fasetave E-max dhe restaurimeve të bëra gjetiu, me kujdes që të mos gërvishtet sipërfaqja e tyre. Ju tregojmë edhe si t’i pastroni në shtëpi.' },
      { question: 'Sa shpesh duhet të bëj pastrim profesional?', answer: 'Çdo gjashtë muaj është ritmi i duhur për shumicën e të rriturve. Nëse keni pasur probleme me mishrat, pini duhan ose keni implante, kurora apo faseta, mund t’ju rekomandojmë pastrime më të shpeshta. Nëse gurëzat formohen ngadalë dhe mishrat janë të shëndetshëm, mund të mjaftojë një interval më i gjatë. Intervalin jua sugjerojmë sipas asaj që shohim në gojën tuaj, jo sipas një rregulli të ngurtë.' },
      { question: 'A duhet të bëj ekzaminim para pastrimit?', answer: 'Në fillim të çdo pastrimi kontrollojmë dhëmbët dhe mishrat. Kjo mjafton për të punuar në mënyrë të sigurt dhe për të vënë re problemet e dukshme. Megjithatë nuk është e njëjtë me një ekzaminim të plotë dentar. Nëse nuk e keni bërë prej kohësh, ose po mendoni për trajtime të tjera, ju rekomandojmë t’i rezervoni të dyja. Ekzaminimi është falas dhe ju jep një plan trajtimi me shkrim dhe një ofertë të detajuar. Radiografitë bëhen vetëm nëse nevojiten, dhe ju shpjegojmë më parë pse.' },
      { question: 'Si të kujdesem për dhëmbët pas pastrimit?', answer: 'Vazhdoni t’i lani dhëmbët dy herë në ditë me pastë me fluor dhe pastroni çdo ditë ndërmjet dhëmbëve me fill dentar ose furça ndërdhëmbore. Nëse mishrat ishin të përflakur, mund të jenë të ndjeshëm për një ose dy ditë. Lajini me butësi, por pa i anashkaluar ato zona. Nëse keni bërë edhe zbardhim, shmangni kafen, verën e kuqe dhe ushqimet që njollosin për 48 orë.' },
      { question: 'A është i përshtatshëm pastrimi për dhëmbë të ndjeshëm?', answer: 'Po. Dhëmbët e ndjeshëm përfitojnë nga pastrimi i rregullt, sepse gurëzat dhe mishrat e përflakur shpesh e përkeqësojnë ndjeshmërinë. Na tregoni për ndjeshmërinë para se të nisim. E përshtatim mënyrën e punës dhe bëjmë pushime kur keni nevojë. Nëse bëni edhe zbardhim, edhe ajo seancë rregullohet sipas ndjeshmërisë.' },
      { question: 'A mund ta bëj pastrimin gjatë udhëtimit për trajtime të tjera?', answer: 'Po. Pastrimi zgjat 30 deri në 60 minuta dhe bëhet në një vizitë, ndaj futet lehtësisht në çdo qëndrim. Nëse vini për faseta, kurora ose implante, zakonisht e bëjmë në fillim të planit, që mishrat të jenë të qetë dhe të pastër para matjeve.' },
    ],
  },
  en: {
    name: 'Teeth Cleaning',
    eyebrow: 'Hygiene & prevention · Albania',
    subtitle: 'Professional cleaning with ultrasonic scaling and polishing, a gum check and home-care advice, in one session.',
    lead: 'A thorough cleaning that removes what your brush cannot reach, for healthier gums and a brighter smile.',
    kicker: 'Teeth cleaning in Tirana, Albania',
    articleTitle: 'Teeth cleaning in Tirana: professional scaling and polishing',
    intro: [
      'Teeth cleaning at Veneer Clinic removes the plaque and tartar that your brush and floss leave behind. Once plaque hardens into tartar, no brush can remove it, and it keeps feeding the bacteria that inflame gums and cause decay.',
      'Cleaning is done in one session of 30 to 60 minutes. Your teeth are checked, cleaned and polished, and you leave knowing exactly what state your gums are in.',
    ],
    sections: [
      {
        title: 'More than a polish',
        intro: [
          'Some clinics sell a quick polish as a full cleaning. Teeth look nicer for a week, but under the gumline, where gum disease really starts, nothing changes. We remove tartar ultrasonically from every surface, including between teeth and just below the gumline, before moving on to polishing.',
          'If the check shows something cleaning cannot solve, such as deep pockets, bone loss or loose teeth, we tell you before we start and explain what gum treatment would involve.',
        ],
      },
      {
        title: 'Cleaning and whitening on the same day',
        intro: [
          'Many patients combine cleaning with whitening. It makes sense: cleaning first removes tartar and surface stains, so teeth whitening works on clean enamel and the result is more even.',
          'Our whitening is done in the clinic, with light activation of usually 20 to 30 minutes, shortened if you have sensitive teeth, and it can be done right after cleaning, in the same visit.',
        ],
      },
      {
        title: 'Care for the work you already have',
        intro: [
          'Crowns, veneers and implants do better in a clean mouth. The gum and bone around an implant need the same care as natural teeth, and tartar at the implant neck is one of the main causes of inflammation around it.',
          'We clean around MegaGen implants, Made in Germany zirconia crowns and E-max crowns and veneers, as well as work done at other clinics, taking care not to scratch the restoration surface. Then we show you how to keep these areas clean at home.',
        ],
      },
      {
        title: 'Before veneers, crowns or implants',
        intro: [
          'If you are coming for veneers, crowns or implants, cleaning is usually one of the first steps of the plan. Calm, tartar-free gums give more accurate measurements and a cleaner margin around every restoration, and the shade of the work is chosen on clean teeth.',
        ],
      },
      {
        title: 'Clarity about what is included',
        intro: [
          'Cleaning costs €30 and includes ultrasonic scaling and polishing. Combined with whitening, the total is €180. Anything else, such as X-rays or gum treatment, is done only with your approval and appears on a separate line of the quote. Nothing is added afterwards.',
        ],
      },
      {
        title: 'How is professional teeth cleaning done?',
        intro: ['A professional cleaning always follows the same order, and each step has its reason.'],
        inline: [
          { title: 'First, a check.', text: 'We check your teeth and gums: where tartar has built up, whether gums bleed and whether anything needs attention. If you have not had a full examination for a while, we recommend booking one with the cleaning; the examination is free. X-rays are not part of cleaning; if needed, we explain why first.' },
          { title: 'Tartar removal.', text: 'Tartar is removed ultrasonically from every tooth surface, working along the gum and between teeth, where it builds up most. This is the most important step for your gums. Thick deposits are removed gradually, without force, to protect enamel and gum. Anaesthesia is usually not needed: most people feel vibration and cool water more than pain. If an area is sensitive, tell us and we slow down.' },
          { title: 'Polishing.', text: 'Once tartar is removed, teeth are polished with a special paste that removes surface stains from coffee, tea, wine and tobacco and leaves the enamel smooth. Smooth surfaces collect plaque more slowly, so the result lasts longer.' },
          { title: 'Advice that actually helps.', text: 'Finally we show you where plaque builds up in your mouth and how to reach those areas: brushing technique, floss or interdental brushes, and anything specific to your crowns, veneers or implants. The advice is for your mouth, not a generic list.' },
          { title: 'What you notice afterwards.', text: 'Teeth feel smooth and look brighter straight away. If gums were inflamed, they may be slightly tender for a day or two and usually bleed less as they settle over the following weeks. If you chose whitening too, it can be done right after cleaning.' },
        ],
      },
    ],
    stats: [
      { value: '30–60', label: 'Minutes' },
      { value: '1', label: 'Session' },
      { value: '6', label: 'Months between cleanings' },
      { value: 'No', label: 'Anaesthesia usually' },
    ],
    priceTitle: 'Price',
    priceNote: 'With whitening: €180 total',
    whatTitle: 'What is professional teeth cleaning?',
    what: [
      'Professional cleaning removes tartar and plaque above and just below the gumline ultrasonically, followed by polishing that removes surface stains and smooths the enamel.',
      'It is done in one session, usually painless and without anaesthesia, and is recommended every six months for most adults.',
    ],
    calloutTitle: 'Combine cleaning with whitening',
    calloutText:
      'Whitening works best on freshly cleaned enamel, free of tartar and surface stains. It is done in the clinic with 20 to 30 minutes of light activation, adapted for sensitive teeth, and can be done on the same day as cleaning.',
    compareTitle: 'Cleaning options',
    compareIntro: 'Every cleaning includes tartar removal and polishing. What you add depends on your teeth and goals:',
    compare: [
      { id: 'scaling', tag: 'Standard', title: 'Cleaning and polishing', text: 'Ultrasonic tartar removal from every surface and polishing to remove stains. The right choice for most patients every six months.' },
      { id: 'whitening', tag: 'Popular', title: 'Cleaning and whitening', text: 'Full cleaning and polishing, followed by in-clinic whitening adapted to sensitivity. Both on the same day, €180 total.' },
      { id: 'dental-exam', tag: 'When needed', title: 'Dental examination', text: 'If years have passed since your last check-up or the check shows gum problems, a full examination gives you the plan. Free.' },
    ],
    fitTitle: 'When should you book a professional cleaning?',
    fitIntro: 'A professional cleaning is worth booking if:',
    fit: [
      'You see or feel hard deposits along the gum or behind the lower front teeth',
      'Your gums bleed when you brush or floss, the first sign of inflammation',
      'You have surface stains from coffee, tea, wine or tobacco that brushing does not remove',
      'You are considering whitening and want the most even result',
      'You have implants, crowns or veneers and want to keep the gums around them healthy',
      'More than six months have passed since your last professional cleaning',
    ],
    fitNote:
      'If your gums bleed heavily, a tooth is loose or pockets have formed, cleaning alone may not be enough. We check first and, if gum treatment is needed, tell you before we start.',
    stepsTitle: 'How cleaning works at Veneer Clinic',
    stepsIntro: 'Professional cleaning is done in one session, and you leave with smoother, brighter teeth and a clear picture of your gum health:',
    steps: [
      { title: 'Teeth and gum check', text: 'We check teeth and gums, find where tartar has built up and note anything that needs attention.' },
      { title: 'Tartar removal', text: 'Tartar is removed ultrasonically from every surface, along the gum and between teeth. If an area is sensitive, we slow down.' },
      { title: 'Polishing', text: 'A polishing paste removes surface stains and smooths the enamel, so plaque builds up more slowly.' },
      { title: 'Home-care advice', text: 'We show you where plaque builds up in your mouth and how to reach it, including around crowns, veneers and implants.' },
    ],
    whyBandTitle: 'Why Veneer Clinic for teeth cleaning?',
    whyBandText:
      'Here cleaning removes tartar from every surface, not just the visible parts. We tell you openly what state your gums are in and, if cleaning is not enough, you learn it before we start, not afterwards. The price we give you is the price you pay.',
    caseText: 'Healthy gums, a brighter smile',
    faq: [
      { question: 'How much does teeth cleaning cost?', answer: '€30, for ultrasonic scaling and polishing. Combined with in-clinic whitening, the total is €180. The dental examination is free. Any other treatment is done only with your approval and appears separately on the quote.' },
      { question: 'Does teeth cleaning hurt?', answer: 'Usually not, and it is done without anaesthesia. Most people feel vibration, cool water and some pressure more than pain. If gums are inflamed or teeth sensitive, some areas may be uncomfortable, especially along the gum. Tell us: we slow down, work more gently or take a break. Sensitivity usually passes within a day or two. If there is a lot of tartar or deep gum pockets, cleaning may be felt more. In that case we first discuss options to keep you comfortable, rather than carrying on regardless.' },
      { question: 'How long does a professional cleaning take?', answer: 'Usually 30 to 60 minutes, in one session. The time depends mainly on how much tartar has built up since your last cleaning. If your last cleaning was recent, the appointment is quick. If years have passed, tartar removal takes longer and we sometimes recommend splitting it into two sessions so the gums are not overworked at once. If you add whitening, allow extra time for the whitening session.' },
      { question: 'Does cleaning whiten teeth?', answer: 'It removes surface stains, so teeth usually look noticeably brighter, but it does not change the natural colour of the enamel. Coffee, tea, wine and tobacco leave stains on the surface, and polishing removes most of them. The shade underneath stays the same. If you want teeth lighter than their natural colour, that is what teeth whitening is for. The two go well together. When cleaning is done first, the whitening gel works on clean enamel and the result is more even. Both can be done on the same day.' },
      { question: 'Can I have cleaning and whitening on the same day?', answer: 'Yes, and it is one of the most requested combinations. Cleaning comes first, removing tartar and surface stains. Then comes in-clinic whitening, with 20 to 30 minutes of light activation, shortened if your teeth are sensitive. The total for both is €180. If you are not sure whitening suits your teeth, we assess it during the check at the start of the cleaning and tell you before you decide.' },
      { question: 'My gums bleed when I brush. Is cleaning enough?', answer: 'Often, yes. Bleeding is usually the first sign of gingivitis, caused by plaque and tartar along the gum. Removing them and better home care often solve the problem within a few weeks. If the check shows deeper problems, such as pockets between gum and tooth, bone loss or loose teeth, cleaning alone is not enough. We tell you before we start and explain what gum treatment would involve. Do not stop brushing because your gums bleed: gentle, careful brushing is part of healing.' },
      { question: 'Can you clean around implants, crowns and veneers?', answer: 'Yes, and with restorations it matters even more. Tartar around an implant can inflame the gum and, if left untreated, damage the bone holding it. With crowns and veneers, problems usually start from build-up at the margins. We clean around MegaGen implants, Made in Germany zirconia crowns, E-max crowns and veneers, and restorations done elsewhere, taking care not to scratch their surface. We also show you how to clean them at home.' },
      { question: 'How often should I have a professional cleaning?', answer: 'Every six months is the right rhythm for most adults. If you have had gum problems, smoke or have implants, crowns or veneers, we may recommend more frequent cleanings. If tartar forms slowly and gums are healthy, a longer interval may be enough. We suggest the interval based on what we see in your mouth, not a rigid rule.' },
      { question: 'Do I need an examination before cleaning?', answer: 'At the start of every cleaning we check teeth and gums. That is enough to work safely and spot visible problems. It is not the same as a full dental examination, though. If you have not had one for a while, or are considering other treatments, we recommend booking both. The examination is free and gives you a written treatment plan and detailed quote. X-rays are only taken if needed, and we explain why first.' },
      { question: 'How should I care for my teeth after cleaning?', answer: 'Keep brushing twice a day with fluoride toothpaste and clean between your teeth daily with floss or interdental brushes. If gums were inflamed, they may be tender for a day or two. Brush gently, but do not skip those areas. If you also had whitening, avoid coffee, red wine and staining foods for 48 hours.' },
      { question: 'Is cleaning suitable for sensitive teeth?', answer: 'Yes. Sensitive teeth benefit from regular cleaning, because tartar and inflamed gums often make sensitivity worse. Tell us about sensitivity before we start. We adapt how we work and take breaks when you need. If you also have whitening, that session is adjusted for sensitivity too.' },
      { question: 'Can I have a cleaning during my trip for other treatments?', answer: 'Yes. Cleaning takes 30 to 60 minutes in one visit, so it fits easily into any stay. If you are coming for veneers, crowns or implants, we usually do it at the start of the plan, so gums are calm and clean before measurements.' },
    ],
  },
  de: {
    name: 'Zahnreinigung',
    eyebrow: 'Hygiene & Prophylaxe · Albanien',
    subtitle: 'Professionelle Reinigung mit Ultraschall-Zahnsteinentfernung und Politur, Zahnfleischkontrolle und Pflegetipps für zu Hause, in einer Sitzung.',
    lead: 'Eine gründliche Reinigung, die entfernt, was Ihre Bürste nicht erreicht, für gesünderes Zahnfleisch und ein strahlenderes Lächeln.',
    kicker: 'Zahnreinigung in Tirana, Albanien',
    articleTitle: 'Zahnreinigung in Tirana: professionelle Zahnsteinentfernung und Politur',
    intro: [
      'Die Zahnreinigung in der Veneer Clinic entfernt Plaque und Zahnstein, die Bürste und Zahnseide zurücklassen. Sobald Plaque zu Zahnstein verhärtet, kann keine Bürste ihn entfernen, und er ernährt weiter die Bakterien, die das Zahnfleisch entzünden und Karies verursachen.',
      'Die Reinigung erfolgt in einer Sitzung von 30 bis 60 Minuten. Ihre Zähne werden kontrolliert, gereinigt und poliert, und Sie wissen danach genau, in welchem Zustand Ihr Zahnfleisch ist.',
    ],
    sections: [
      {
        title: 'Mehr als eine Politur',
        intro: [
          'Manche Kliniken verkaufen eine schnelle Politur als vollständige Reinigung. Die Zähne sehen eine Woche lang schöner aus, aber unter dem Zahnfleischrand, wo Zahnfleischerkrankungen wirklich beginnen, ändert sich nichts. Wir entfernen Zahnstein mit Ultraschall von jeder Fläche, auch zwischen den Zähnen und knapp unter dem Zahnfleischrand, bevor wir polieren.',
          'Zeigt die Kontrolle etwas, das eine Reinigung nicht löst, etwa tiefe Taschen, Knochenabbau oder lockere Zähne, sagen wir es vor Beginn und erklären, was eine Zahnfleischbehandlung umfassen würde.',
        ],
      },
      {
        title: 'Reinigung und Bleaching am selben Tag',
        intro: [
          'Viele Patienten kombinieren die Reinigung mit einem Bleaching. Das ist sinnvoll: Die Reinigung entfernt zuerst Zahnstein und Oberflächenverfärbungen, sodass das Bleaching auf sauberem Schmelz wirkt und das Ergebnis gleichmäßiger wird.',
          'Unser Bleaching erfolgt in der Praxis mit Lichtaktivierung von meist 20 bis 30 Minuten, verkürzt bei empfindlichen Zähnen, und kann direkt nach der Reinigung im selben Termin erfolgen.',
        ],
      },
      {
        title: 'Pflege für vorhandene Arbeiten',
        intro: [
          'Kronen, Veneers und Implantate halten in einem sauberen Mund besser. Zahnfleisch und Knochen um ein Implantat brauchen dieselbe Pflege wie natürliche Zähne, und Zahnstein am Implantathals ist eine der Hauptursachen für Entzündungen.',
          'Wir reinigen um MegaGen-Implantate, Kronen aus Zirkon Made in Germany und E-max-Kronen und -Veneers sowie um Arbeiten anderer Kliniken, ohne die Oberfläche der Versorgung zu zerkratzen. Danach zeigen wir Ihnen, wie Sie diese Bereiche zu Hause sauber halten.',
        ],
      },
      {
        title: 'Vor Veneers, Kronen oder Implantaten',
        intro: [
          'Kommen Sie für Veneers, Kronen oder Implantate, ist die Reinigung meist einer der ersten Schritte des Plans. Ruhiges, zahnsteinfreies Zahnfleisch ergibt genauere Abdrücke und einen saubereren Rand um jede Versorgung, und die Farbe wird an sauberen Zähnen gewählt.',
        ],
      },
      {
        title: 'Klarheit über den Leistungsumfang',
        intro: [
          'Die Reinigung kostet 30 € und umfasst Ultraschall-Zahnsteinentfernung und Politur. Mit Bleaching beträgt die Summe 180 €. Alles andere, etwa Röntgenbilder oder eine Zahnfleischbehandlung, erfolgt nur mit Ihrer Zustimmung und steht in einer eigenen Zeile des Angebots. Nachträglich kommt nichts hinzu.',
        ],
      },
      {
        title: 'Wie läuft eine professionelle Zahnreinigung ab?',
        intro: ['Eine professionelle Reinigung folgt immer derselben Reihenfolge, und jeder Schritt hat seinen Grund.'],
        inline: [
          { title: 'Zuerst eine Kontrolle.', text: 'Wir prüfen Zähne und Zahnfleisch: wo sich Zahnstein angesammelt hat, ob das Zahnfleisch blutet und ob etwas Aufmerksamkeit braucht. Hatten Sie länger keine vollständige Untersuchung, empfehlen wir, sie mit der Reinigung zu buchen; die Untersuchung ist kostenlos. Röntgenbilder gehören nicht zur Reinigung; falls nötig, erklären wir vorher warum.' },
          { title: 'Zahnsteinentfernung.', text: 'Zahnstein wird mit Ultraschall von jeder Zahnfläche entfernt, entlang des Zahnfleisches und zwischen den Zähnen, wo er sich am meisten ansammelt. Das ist der wichtigste Schritt für Ihr Zahnfleisch. Dicke Ablagerungen werden schrittweise und ohne Kraft entfernt, um Schmelz und Zahnfleisch zu schonen. Eine Betäubung ist meist nicht nötig: Die meisten spüren eher Vibration und kühles Wasser als Schmerz. Ist eine Stelle empfindlich, sagen Sie es, und wir werden langsamer.' },
          { title: 'Politur.', text: 'Nach der Zahnsteinentfernung werden die Zähne mit einer speziellen Paste poliert, die Oberflächenverfärbungen von Kaffee, Tee, Wein und Tabak entfernt und den Schmelz glättet. Glatte Flächen sammeln Plaque langsamer, daher hält das Ergebnis länger.' },
          { title: 'Tipps, die wirklich helfen.', text: 'Zum Schluss zeigen wir Ihnen, wo sich Plaque in Ihrem Mund sammelt und wie Sie diese Stellen erreichen: Putztechnik, Zahnseide oder Interdentalbürsten und alles Besondere für Ihre Kronen, Veneers oder Implantate. Die Tipps gelten Ihrem Mund, keine allgemeine Liste.' },
          { title: 'Was Sie danach bemerken.', text: 'Die Zähne fühlen sich sofort glatt an und wirken heller. War das Zahnfleisch entzündet, kann es ein, zwei Tage etwas empfindlich sein und blutet meist weniger, während es sich in den folgenden Wochen beruhigt. Haben Sie auch ein Bleaching gewählt, kann es direkt nach der Reinigung erfolgen.' },
        ],
      },
    ],
    stats: [
      { value: '30–60', label: 'Minuten' },
      { value: '1', label: 'Sitzung' },
      { value: '6', label: 'Monate zwischen Reinigungen' },
      { value: 'Ohne', label: 'Betäubung in der Regel' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Mit Bleaching: 180 € insgesamt',
    whatTitle: 'Was ist eine professionelle Zahnreinigung?',
    what: [
      'Die professionelle Reinigung entfernt Zahnstein und Beläge ober- und knapp unterhalb des Zahnfleischrands mit Ultraschall, gefolgt von einer Politur, die Oberflächenverfärbungen entfernt und den Schmelz glättet.',
      'Sie erfolgt in einer Sitzung, meist schmerzfrei und ohne Betäubung, und wird für die meisten Erwachsenen alle sechs Monate empfohlen.',
    ],
    calloutTitle: 'Kombinieren Sie Reinigung und Bleaching',
    calloutText:
      'Bleaching wirkt am besten auf frisch gereinigtem Schmelz, ohne Zahnstein und Oberflächenverfärbungen. Es erfolgt in der Praxis mit 20 bis 30 Minuten Lichtaktivierung, angepasst an empfindliche Zähne, und kann am selben Tag wie die Reinigung erfolgen.',
    compareTitle: 'Reinigungsoptionen',
    compareIntro: 'Jede Reinigung umfasst Zahnsteinentfernung und Politur. Was Sie hinzufügen, hängt von Ihren Zähnen und Zielen ab:',
    compare: [
      { id: 'scaling', tag: 'Standard', title: 'Reinigung und Politur', text: 'Ultraschall-Zahnsteinentfernung von jeder Fläche und Politur gegen Verfärbungen. Die richtige Wahl für die meisten Patienten alle sechs Monate.' },
      { id: 'whitening', tag: 'Gefragt', title: 'Reinigung und Bleaching', text: 'Vollständige Reinigung und Politur, gefolgt von Bleaching in der Praxis, angepasst an die Empfindlichkeit. Beides am selben Tag, 180 € insgesamt.' },
      { id: 'dental-exam', tag: 'Bei Bedarf', title: 'Zahnärztliche Untersuchung', text: 'Liegt die letzte Kontrolle Jahre zurück oder zeigt die Kontrolle Zahnfleischprobleme, gibt Ihnen die vollständige Untersuchung den Plan. Kostenlos.' },
    ],
    fitTitle: 'Wann sollten Sie eine professionelle Reinigung buchen?',
    fitIntro: 'Eine professionelle Reinigung lohnt sich, wenn:',
    fit: [
      'Sie harte Ablagerungen entlang des Zahnfleisches oder hinter den unteren Schneidezähnen sehen oder spüren',
      'Ihr Zahnfleisch beim Putzen oder bei Zahnseide blutet, das erste Zeichen einer Entzündung',
      'Sie Oberflächenverfärbungen von Kaffee, Tee, Wein oder Tabak haben, die Putzen nicht entfernt',
      'Sie über ein Bleaching nachdenken und das gleichmäßigste Ergebnis möchten',
      'Sie Implantate, Kronen oder Veneers haben und das Zahnfleisch darum gesund halten möchten',
      'Ihre letzte professionelle Reinigung mehr als sechs Monate zurückliegt',
    ],
    fitNote:
      'Blutet Ihr Zahnfleisch stark, ist ein Zahn locker oder haben sich Taschen gebildet, reicht eine Reinigung allein möglicherweise nicht. Wir prüfen zuerst und sagen es Ihnen vor Beginn, falls eine Zahnfleischbehandlung nötig ist.',
    stepsTitle: 'So läuft die Reinigung in der Veneer Clinic ab',
    stepsIntro: 'Die professionelle Reinigung erfolgt in einer Sitzung, und Sie gehen mit glatteren, helleren Zähnen und einem klaren Bild Ihrer Zahnfleischgesundheit:',
    steps: [
      { title: 'Kontrolle von Zähnen und Zahnfleisch', text: 'Wir prüfen Zähne und Zahnfleisch, finden Zahnsteinansammlungen und notieren, was Aufmerksamkeit braucht.' },
      { title: 'Zahnsteinentfernung', text: 'Zahnstein wird mit Ultraschall von jeder Fläche entfernt, entlang des Zahnfleisches und zwischen den Zähnen. Ist eine Stelle empfindlich, werden wir langsamer.' },
      { title: 'Politur', text: 'Eine Polierpaste entfernt Oberflächenverfärbungen und glättet den Schmelz, sodass sich Plaque langsamer ansammelt.' },
      { title: 'Pflegetipps für zu Hause', text: 'Wir zeigen Ihnen, wo sich Plaque in Ihrem Mund sammelt und wie Sie sie erreichen, auch um Kronen, Veneers und Implantate.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für die Zahnreinigung?',
    whyBandText:
      'Hier entfernt die Reinigung Zahnstein von jeder Fläche, nicht nur von den sichtbaren Stellen. Wir sagen Ihnen offen, in welchem Zustand Ihr Zahnfleisch ist, und reicht die Reinigung nicht, erfahren Sie es vor Beginn, nicht danach. Der Preis, den wir nennen, ist der Preis, den Sie zahlen.',
    caseText: 'Gesundes Zahnfleisch, strahlenderes Lächeln',
    faq: [
      { question: 'Was kostet eine Zahnreinigung?', answer: '30 € für Ultraschall-Zahnsteinentfernung und Politur. Mit Bleaching in der Praxis beträgt die Summe 180 €. Die zahnärztliche Untersuchung ist kostenlos. Jede andere Behandlung erfolgt nur mit Ihrer Zustimmung und steht separat im Angebot.' },
      { question: 'Tut eine Zahnreinigung weh?', answer: 'Meist nicht, und sie erfolgt ohne Betäubung. Die meisten spüren eher Vibration, kühles Wasser und etwas Druck als Schmerz. Ist das Zahnfleisch entzündet oder sind die Zähne empfindlich, können manche Stellen unangenehm sein, besonders entlang des Zahnfleisches. Sagen Sie es uns: Wir werden langsamer, arbeiten sanfter oder machen eine Pause. Die Empfindlichkeit vergeht meist in ein, zwei Tagen. Bei viel Zahnstein oder tiefen Zahnfleischtaschen spürt man die Reinigung mehr. Dann besprechen wir zuerst Möglichkeiten, damit Sie sich wohlfühlen, statt einfach weiterzumachen.' },
      { question: 'Wie lange dauert eine professionelle Reinigung?', answer: 'Meist 30 bis 60 Minuten, in einer Sitzung. Die Dauer hängt vor allem davon ab, wie viel Zahnstein sich seit der letzten Reinigung angesammelt hat. War die letzte Reinigung vor Kurzem, geht der Termin schnell. Liegen Jahre dazwischen, dauert die Zahnsteinentfernung länger, und manchmal empfehlen wir, sie auf zwei Sitzungen zu verteilen, damit das Zahnfleisch nicht auf einmal überlastet wird. Mit Bleaching planen Sie zusätzliche Zeit für die Bleaching-Sitzung ein.' },
      { question: 'Macht die Reinigung die Zähne weißer?', answer: 'Sie entfernt Oberflächenverfärbungen, daher wirken die Zähne meist deutlich heller, aber sie ändert nicht die natürliche Farbe des Schmelzes. Kaffee, Tee, Wein und Tabak hinterlassen Verfärbungen an der Oberfläche, und die Politur entfernt die meisten davon. Der Farbton darunter bleibt gleich. Möchten Sie hellere Zähne als ihre natürliche Farbe, dafür gibt es das Bleaching. Beides passt gut zusammen. Erfolgt die Reinigung zuerst, wirkt das Bleaching-Gel auf sauberem Schmelz und das Ergebnis wird gleichmäßiger. Beides ist am selben Tag möglich.' },
      { question: 'Kann ich Reinigung und Bleaching am selben Tag machen?', answer: 'Ja, und das ist eine der gefragtesten Kombinationen. Zuerst die Reinigung, die Zahnstein und Oberflächenverfärbungen entfernt. Dann das Bleaching in der Praxis mit 20 bis 30 Minuten Lichtaktivierung, verkürzt bei empfindlichen Zähnen. Die Summe für beides beträgt 180 €. Sind Sie unsicher, ob ein Bleaching zu Ihren Zähnen passt, beurteilen wir das bei der Kontrolle zu Beginn der Reinigung und sagen es Ihnen, bevor Sie entscheiden.' },
      { question: 'Mein Zahnfleisch blutet beim Putzen. Reicht eine Reinigung?', answer: 'Oft ja. Bluten ist meist das erste Zeichen einer Gingivitis, verursacht durch Plaque und Zahnstein am Zahnfleischrand. Ihre Entfernung und bessere Pflege zu Hause lösen das Problem oft in wenigen Wochen. Zeigt die Kontrolle tiefere Probleme, etwa Taschen zwischen Zahnfleisch und Zahn, Knochenabbau oder lockere Zähne, reicht eine Reinigung allein nicht. Wir sagen es vor Beginn und erklären, was eine Zahnfleischbehandlung umfassen würde. Hören Sie nicht auf zu putzen, weil das Zahnfleisch blutet: Sanftes, sorgfältiges Putzen gehört zur Heilung.' },
      { question: 'Können Sie um Implantate, Kronen und Veneers reinigen?', answer: 'Ja, und bei Versorgungen ist es sogar noch wichtiger. Zahnstein um ein Implantat kann das Zahnfleisch entzünden und unbehandelt den tragenden Knochen schädigen. Bei Kronen und Veneers beginnen Probleme meist mit Ablagerungen an den Rändern. Wir reinigen um MegaGen-Implantate, Kronen aus Zirkon Made in Germany, E-max-Kronen und -Veneers und anderswo gefertigte Versorgungen, ohne ihre Oberfläche zu zerkratzen. Wir zeigen Ihnen auch, wie Sie sie zu Hause reinigen.' },
      { question: 'Wie oft sollte ich eine professionelle Reinigung machen?', answer: 'Alle sechs Monate ist für die meisten Erwachsenen der richtige Rhythmus. Hatten Sie Zahnfleischprobleme, rauchen Sie oder haben Sie Implantate, Kronen oder Veneers, empfehlen wir eventuell häufigere Reinigungen. Bildet sich Zahnstein langsam und ist das Zahnfleisch gesund, kann ein längeres Intervall reichen. Wir schlagen das Intervall nach dem vor, was wir in Ihrem Mund sehen, nicht nach einer starren Regel.' },
      { question: 'Brauche ich vor der Reinigung eine Untersuchung?', answer: 'Zu Beginn jeder Reinigung prüfen wir Zähne und Zahnfleisch. Das reicht, um sicher zu arbeiten und sichtbare Probleme zu erkennen. Es ist aber nicht dasselbe wie eine vollständige zahnärztliche Untersuchung. Hatten Sie länger keine, oder denken Sie über andere Behandlungen nach, empfehlen wir, beides zu buchen. Die Untersuchung ist kostenlos und gibt Ihnen einen schriftlichen Behandlungsplan und ein detailliertes Angebot. Röntgenbilder werden nur bei Bedarf gemacht, und wir erklären vorher warum.' },
      { question: 'Wie pflege ich meine Zähne nach der Reinigung?', answer: 'Putzen Sie weiter zweimal täglich mit fluoridhaltiger Zahnpasta und reinigen Sie täglich die Zahnzwischenräume mit Zahnseide oder Interdentalbürsten. War das Zahnfleisch entzündet, kann es ein, zwei Tage empfindlich sein. Putzen Sie sanft, aber lassen Sie diese Stellen nicht aus. Hatten Sie auch ein Bleaching, verzichten Sie 48 Stunden auf Kaffee, Rotwein und färbende Lebensmittel.' },
      { question: 'Ist die Reinigung für empfindliche Zähne geeignet?', answer: 'Ja. Empfindliche Zähne profitieren von regelmäßiger Reinigung, denn Zahnstein und entzündetes Zahnfleisch verstärken die Empfindlichkeit oft. Sagen Sie uns vor Beginn Bescheid. Wir passen die Arbeitsweise an und machen Pausen, wenn Sie sie brauchen. Machen Sie auch ein Bleaching, wird auch diese Sitzung an die Empfindlichkeit angepasst.' },
      { question: 'Kann ich die Reinigung während meiner Reise für andere Behandlungen machen?', answer: 'Ja. Die Reinigung dauert 30 bis 60 Minuten in einem Termin und passt daher leicht in jeden Aufenthalt. Kommen Sie für Veneers, Kronen oder Implantate, machen wir sie meist zu Beginn des Plans, damit das Zahnfleisch vor den Abdrücken ruhig und sauber ist.' },
    ],
  },
  it: {
    name: 'Pulizia dei denti',
    eyebrow: 'Igiene e prevenzione · Albania',
    subtitle: 'Pulizia professionale con ablazione del tartaro ad ultrasuoni e lucidatura, controllo delle gengive e consigli per la cura a casa, in una seduta.',
    lead: 'Una pulizia accurata che rimuove ciò che lo spazzolino non raggiunge, per gengive più sane e un sorriso più luminoso.',
    kicker: 'Pulizia dei denti a Tirana, Albania',
    articleTitle: 'Pulizia dei denti a Tirana: ablazione del tartaro e lucidatura professionale',
    intro: [
      'La pulizia dei denti alla Veneer Clinic rimuove la placca e il tartaro che spazzolino e filo interdentale lasciano. Quando la placca si indurisce in tartaro, nessuno spazzolino può toglierlo, e continua a nutrire i batteri che infiammano le gengive e causano carie.',
      'La pulizia si fa in una seduta di 30–60 minuti. I denti vengono controllati, puliti e lucidati, ed esci sapendo esattamente in che stato sono le tue gengive.',
    ],
    sections: [
      {
        title: 'Più di una lucidatura',
        intro: [
          'Alcune cliniche vendono una lucidatura veloce come pulizia completa. I denti sembrano più belli per una settimana, ma sotto il bordo gengivale, dove la malattia gengivale inizia davvero, non cambia nulla. Noi rimuoviamo il tartaro ad ultrasuoni da ogni superficie, anche tra i denti e appena sotto il bordo gengivale, prima di passare alla lucidatura.',
          'Se il controllo mostra qualcosa che la pulizia non risolve, come tasche profonde, perdita ossea o denti mobili, te lo diciamo prima di iniziare e ti spieghiamo cosa comporterebbe il trattamento gengivale.',
        ],
      },
      {
        title: 'Pulizia e sbiancamento nello stesso giorno',
        intro: [
          'Molti pazienti combinano la pulizia con lo sbiancamento. Ha senso: la pulizia rimuove prima tartaro e macchie superficiali, così lo sbiancamento agisce su smalto pulito e il risultato è più uniforme.',
          'Il nostro sbiancamento si fa in studio, con attivazione a luce di solito di 20–30 minuti, ridotta se hai denti sensibili, e può farsi subito dopo la pulizia, nella stessa visita.',
        ],
      },
      {
        title: 'Cura dei lavori che hai già',
        intro: [
          'Corone, faccette e impianti durano meglio in una bocca pulita. La gengiva e l’osso attorno a un impianto hanno bisogno della stessa cura dei denti naturali, e il tartaro al collo dell’impianto è una delle cause principali di infiammazione attorno ad esso.',
          'Puliamo attorno a impianti MegaGen, corone in zirconia Made in Germany e corone e faccette E-max, oltre che attorno a lavori fatti in altre cliniche, facendo attenzione a non graffiare la superficie del restauro. Poi ti mostriamo come mantenere pulite queste zone a casa.',
        ],
      },
      {
        title: 'Prima di faccette, corone o impianti',
        intro: [
          'Se vieni per faccette, corone o impianti, la pulizia è di solito uno dei primi passi del piano. Gengive calme e senza tartaro danno impronte più precise e un margine più pulito attorno a ogni restauro, e il colore dei lavori si sceglie su denti puliti.',
        ],
      },
      {
        title: 'Chiarezza su cosa è incluso',
        intro: [
          'La pulizia costa 30 € e comprende ablazione del tartaro ad ultrasuoni e lucidatura. Con lo sbiancamento, il totale è 180 €. Tutto il resto, come radiografie o trattamento gengivale, si fa solo con la tua approvazione e compare su una riga separata del preventivo. Non si aggiunge nulla dopo.',
        ],
      },
      {
        title: 'Come si fa la pulizia professionale dei denti?',
        intro: ['Una pulizia professionale segue sempre lo stesso ordine, e ogni passo ha il suo motivo.'],
        inline: [
          { title: 'Prima, un controllo.', text: 'Controlliamo denti e gengive: dove si è accumulato il tartaro, se le gengive sanguinano e se c’è qualcosa che richiede attenzione. Se non fai una visita completa da tempo, ti consigliamo di prenotarla insieme alla pulizia; la visita è gratuita. Le radiografie non fanno parte della pulizia; se servono, ti spieghiamo prima perché.' },
          { title: 'Rimozione del tartaro.', text: 'Il tartaro si rimuove ad ultrasuoni da ogni superficie del dente, lavorando lungo la gengiva e tra i denti, dove si accumula di più. È il passo più importante per le gengive. I depositi spessi si rimuovono gradualmente, senza forza, per proteggere smalto e gengiva. Di solito non serve anestesia: la maggior parte delle persone sente vibrazione e acqua fresca più che dolore. Se una zona è sensibile, dillo e rallentiamo.' },
          { title: 'Lucidatura.', text: 'Una volta rimosso il tartaro, i denti si lucidano con una pasta speciale che toglie le macchie superficiali di caffè, tè, vino e tabacco e lascia lo smalto liscio. Le superfici lisce accumulano placca più lentamente, quindi il risultato dura di più.' },
          { title: 'Consigli che servono davvero.', text: 'Alla fine ti mostriamo dove si accumula la placca nella tua bocca e come raggiungere quelle zone: tecnica di spazzolamento, filo o scovolini interdentali, e tutto ciò che è specifico per le tue corone, faccette o impianti. I consigli sono per la tua bocca, non una lista generica.' },
          { title: 'Cosa noti dopo.', text: 'I denti si sentono lisci e appaiono più luminosi subito. Se le gengive erano infiammate, possono essere un po’ sensibili per uno o due giorni e di solito sanguinano meno mentre si calmano nelle settimane successive. Se hai scelto anche lo sbiancamento, si può fare subito dopo la pulizia.' },
        ],
      },
    ],
    stats: [
      { value: '30–60', label: 'Minuti' },
      { value: '1', label: 'Seduta' },
      { value: '6', label: 'Mesi tra le pulizie' },
      { value: 'Senza', label: 'Anestesia di solito' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Con sbiancamento: 180 € in totale',
    whatTitle: 'Cos’è la pulizia professionale dei denti?',
    what: [
      'La pulizia professionale rimuove ad ultrasuoni tartaro e placca sopra e appena sotto il bordo gengivale, seguita da una lucidatura che toglie le macchie superficiali e leviga lo smalto.',
      'Si fa in una seduta, di solito indolore e senza anestesia, ed è consigliata ogni sei mesi per la maggior parte degli adulti.',
    ],
    calloutTitle: 'Combina la pulizia con lo sbiancamento',
    calloutText:
      'Lo sbiancamento dà il meglio su smalto appena pulito, senza tartaro né macchie superficiali. Si fa in studio con 20–30 minuti di attivazione a luce, adattato ai denti sensibili, e può farsi lo stesso giorno della pulizia.',
    compareTitle: 'Opzioni di pulizia',
    compareIntro: 'Ogni pulizia comprende rimozione del tartaro e lucidatura. Cosa aggiungi dipende dai tuoi denti e obiettivi:',
    compare: [
      { id: 'scaling', tag: 'Standard', title: 'Pulizia e lucidatura', text: 'Rimozione del tartaro ad ultrasuoni da ogni superficie e lucidatura per togliere le macchie. La scelta giusta per la maggior parte dei pazienti ogni sei mesi.' },
      { id: 'whitening', tag: 'Richiesto', title: 'Pulizia e sbiancamento', text: 'Pulizia e lucidatura complete, seguite da sbiancamento in studio adattato alla sensibilità. Entrambi lo stesso giorno, 180 € in totale.' },
      { id: 'dental-exam', tag: 'Quando serve', title: 'Visita odontoiatrica', text: 'Se sono passati anni dall’ultimo controllo o il controllo mostra problemi gengivali, la visita completa ti dà il piano. Gratuita.' },
    ],
    fitTitle: 'Quando prenotare una pulizia professionale?',
    fitIntro: 'Vale la pena prenotare una pulizia professionale se:',
    fit: [
      'Vedi o senti depositi duri lungo la gengiva o dietro gli incisivi inferiori',
      'Le gengive sanguinano quando ti lavi i denti o usi il filo, primo segno di infiammazione',
      'Hai macchie superficiali di caffè, tè, vino o tabacco che lo spazzolino non toglie',
      'Stai pensando allo sbiancamento e vuoi il risultato più uniforme',
      'Hai impianti, corone o faccette e vuoi mantenere sane le gengive attorno',
      'Sono passati più di sei mesi dall’ultima pulizia professionale',
    ],
    fitNote:
      'Se le gengive sanguinano molto, un dente si muove o si sono formate tasche, la sola pulizia potrebbe non bastare. Controlliamo prima e, se serve un trattamento gengivale, te lo diciamo prima di iniziare.',
    stepsTitle: 'Come funziona la pulizia alla Veneer Clinic',
    stepsIntro: 'La pulizia professionale si fa in una seduta, ed esci con denti più lisci e luminosi e un quadro chiaro della salute delle gengive:',
    steps: [
      { title: 'Controllo di denti e gengive', text: 'Controlliamo denti e gengive, troviamo dove si è accumulato il tartaro e annotiamo ciò che richiede attenzione.' },
      { title: 'Rimozione del tartaro', text: 'Il tartaro si rimuove ad ultrasuoni da ogni superficie, lungo la gengiva e tra i denti. Se una zona è sensibile, rallentiamo.' },
      { title: 'Lucidatura', text: 'Una pasta lucidante toglie le macchie superficiali e leviga lo smalto, così la placca si accumula più lentamente.' },
      { title: 'Consigli per casa', text: 'Ti mostriamo dove si accumula la placca nella tua bocca e come raggiungerla, anche attorno a corone, faccette e impianti.' },
    ],
    whyBandTitle: 'Perché Veneer Clinic per la pulizia dei denti?',
    whyBandText:
      'Qui la pulizia rimuove il tartaro da ogni superficie, non solo dalle parti visibili. Ti diciamo apertamente in che stato sono le tue gengive e, se la pulizia non basta, lo sai prima di iniziare, non dopo. Il prezzo che ti diamo è il prezzo che paghi.',
    caseText: 'Gengive sane, un sorriso più luminoso',
    faq: [
      { question: 'Quanto costa la pulizia dei denti?', answer: '30 €, per ablazione del tartaro ad ultrasuoni e lucidatura. Con lo sbiancamento in studio, il totale è 180 €. La visita odontoiatrica è gratuita. Qualsiasi altro trattamento si fa solo con la tua approvazione e compare separatamente nel preventivo.' },
      { question: 'La pulizia dei denti fa male?', answer: 'Di solito no, e si fa senza anestesia. La maggior parte delle persone sente vibrazione, acqua fresca e un po’ di pressione più che dolore. Se le gengive sono infiammate o i denti sensibili, alcune zone possono dare fastidio, soprattutto lungo la gengiva. Diccelo: rallentiamo, lavoriamo più delicatamente o facciamo una pausa. La sensibilità di solito passa in uno o due giorni. Se c’è molto tartaro o tasche gengivali profonde, la pulizia si può sentire di più. In quel caso parliamo prima delle opzioni per farti stare comodo, invece di continuare comunque.' },
      { question: 'Quanto dura una pulizia professionale?', answer: 'Di solito 30–60 minuti, in una seduta. Il tempo dipende soprattutto da quanto tartaro si è accumulato dall’ultima pulizia. Se l’ultima pulizia è recente, l’appuntamento è veloce. Se sono passati anni, la rimozione del tartaro richiede più tempo e a volte consigliamo di dividerla in due sedute, per non affaticare le gengive tutto in una volta. Se aggiungi lo sbiancamento, calcola tempo in più per la seduta di sbiancamento.' },
      { question: 'La pulizia sbianca i denti?', answer: 'Rimuove le macchie superficiali, quindi i denti di solito appaiono visibilmente più luminosi, ma non cambia il colore naturale dello smalto. Caffè, tè, vino e tabacco lasciano macchie in superficie, e la lucidatura ne rimuove la maggior parte. La tonalità sotto resta la stessa. Se vuoi denti più chiari del loro colore naturale, a questo serve lo sbiancamento. I due trattamenti vanno bene insieme. Quando la pulizia si fa prima, il gel sbiancante agisce su smalto pulito e il risultato è più uniforme. Entrambi si possono fare lo stesso giorno.' },
      { question: 'Posso fare pulizia e sbiancamento lo stesso giorno?', answer: 'Sì, ed è una delle combinazioni più richieste. Prima la pulizia, che rimuove tartaro e macchie superficiali. Poi lo sbiancamento in studio, con 20–30 minuti di attivazione a luce, ridotta se i denti sono sensibili. Il totale per entrambi è 180 €. Se non sei sicuro che lo sbiancamento sia adatto ai tuoi denti, lo valutiamo durante il controllo all’inizio della pulizia e te lo diciamo prima che tu decida.' },
      { question: 'Le gengive sanguinano quando mi lavo i denti. Basta la pulizia?', answer: 'Spesso sì. Il sanguinamento è di solito il primo segno di gengivite, causata da placca e tartaro lungo la gengiva. Rimuoverli e curare meglio i denti a casa spesso risolve il problema in poche settimane. Se il controllo mostra problemi più profondi, come tasche tra gengiva e dente, perdita ossea o denti mobili, la sola pulizia non basta. Te lo diciamo prima di iniziare e ti spieghiamo cosa comporterebbe il trattamento gengivale. Non smettere di lavarti i denti perché le gengive sanguinano: uno spazzolamento delicato e accurato fa parte della guarigione.' },
      { question: 'Potete pulire attorno a impianti, corone e faccette?', answer: 'Sì, e con i restauri è ancora più importante. Il tartaro attorno a un impianto può infiammare la gengiva e, se non trattato, danneggiare l’osso che lo sostiene. Con corone e faccette, i problemi di solito iniziano dall’accumulo ai margini. Puliamo attorno a impianti MegaGen, corone in zirconia Made in Germany, corone e faccette E-max e restauri fatti altrove, facendo attenzione a non graffiarne la superficie. Ti mostriamo anche come pulirli a casa.' },
      { question: 'Ogni quanto devo fare una pulizia professionale?', answer: 'Ogni sei mesi è il ritmo giusto per la maggior parte degli adulti. Se hai avuto problemi gengivali, fumi o hai impianti, corone o faccette, potremmo consigliarti pulizie più frequenti. Se il tartaro si forma lentamente e le gengive sono sane, può bastare un intervallo più lungo. Ti suggeriamo l’intervallo in base a ciò che vediamo nella tua bocca, non secondo una regola rigida.' },
      { question: 'Devo fare una visita prima della pulizia?', answer: 'All’inizio di ogni pulizia controlliamo denti e gengive. Basta per lavorare in sicurezza e notare i problemi visibili. Non è però la stessa cosa di una visita odontoiatrica completa. Se non la fai da tempo, o stai pensando ad altri trattamenti, ti consigliamo di prenotarle entrambe. La visita è gratuita e ti dà un piano di trattamento scritto e un preventivo dettagliato. Le radiografie si fanno solo se servono, e ti spieghiamo prima perché.' },
      { question: 'Come curare i denti dopo la pulizia?', answer: 'Continua a lavarti i denti due volte al giorno con dentifricio al fluoro e pulisci ogni giorno tra i denti con filo o scovolini interdentali. Se le gengive erano infiammate, possono essere sensibili per uno o due giorni. Spazzola delicatamente, ma senza saltare quelle zone. Se hai fatto anche lo sbiancamento, evita caffè, vino rosso e cibi pigmentanti per 48 ore.' },
      { question: 'La pulizia è adatta ai denti sensibili?', answer: 'Sì. I denti sensibili traggono beneficio dalla pulizia regolare, perché tartaro e gengive infiammate spesso peggiorano la sensibilità. Parlaci della sensibilità prima di iniziare. Adattiamo il modo di lavorare e facciamo pause quando serve. Se fai anche lo sbiancamento, anche quella seduta si regola in base alla sensibilità.' },
      { question: 'Posso fare la pulizia durante il viaggio per altri trattamenti?', answer: 'Sì. La pulizia dura 30–60 minuti in una visita, quindi si inserisce facilmente in qualsiasi soggiorno. Se vieni per faccette, corone o impianti, di solito la facciamo all’inizio del piano, così le gengive sono calme e pulite prima delle impronte.' },
    ],
  },
};

export default function TeethCleaningPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="scaling"
      heroImage={images.results[0]?.[1] ?? images.heroAfter}
      whatImage={images.results[7]?.[0] ?? images.heroAfter}
    />
  );
}
