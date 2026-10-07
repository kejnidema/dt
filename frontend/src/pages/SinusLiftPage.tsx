import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Ngritja e sinusit',
    eyebrow: 'Implante · Shqipëri',
    subtitle: 'Rindërtimi i lartësisë së kockës në nofullën e sipërme për implante.',
    lead: 'Lartësi shtesë kocke mbi dhëmbët e pasmë të sipërm, që hap rrugën për implante aty ku më parë nuk kishte hapësirë.',
    kicker: 'Ngritja e sinusit në Tiranë, Shqipëri',
    articleTitle: 'Ngritja e sinusit: rindërtimi i kockës për implante në nofullën e sipërme',
    intro: [
      'Ngritja e sinusit rindërton lartësinë e kockës në pjesën e pasme të nofullës së sipërme, që implantet të kenë ku të ankorohen.',
      'Është përgatitje, jo trajtim. Askush nuk dëshiron një ngritje sinusi; dëshiron implantet që ajo i bën të mundura. Prandaj gjëja më e dobishme që mund t’ju themi është se ndoshta nuk ju duhet.',
      'Në Veneer Clinic, ngritja e sinusit kushton 500 €, kryhet me anestezi lokale në 45 deri në 120 minuta dhe përdor kockë artificiale ose humane. Trajtimi bëhet në dy udhëtime, me rreth 8 muaj ndërmjet tyre.',
    ],
    sections: [
      {
        title: 'Pse mbaron kocka pikërisht aty',
        intro: [
          'Ndodhin dy gjëra njëherësh, dhe shkojnë në të njëjtin drejtim.',
          'Kur humbet një dhëmballë e sipërme, kocka që e mbante pushon së ngarkuari dhe fillon të thithet nga poshtë: kreshta shkurtohet. Ndërkohë sinusi maksilar, zgavra me ajër që ndodhet pikërisht mbi ata dhëmbë, priret të zgjerohet poshtë drejt hapësirës së mbetur bosh. Dyshemeja e sinusit zbret ndërsa kreshta ngjitet drejt saj.',
          'Rezultati është një brez i hollë kocke mes të dyjave, ndonjëherë vetëm dy a tre milimetra, ku një implant kërkon shumë më tepër. Prandaj dhëmbët e pasmë të sipërm janë vendi më i vështirë në gojë për implante, dhe prandaj aq shpesh u thuhet njerëzve se nuk bëhet.',
        ],
      },
      {
        title: 'Çfarë bën vërtet procedura',
        intro: [
          'Sinusi është i veshur me një membranë të hollë. Ngritja nuk e hap sinusin: e ndan atë membranë nga kocka poshtë dhe e ngre paksa, pastaj e mbush hapësirën e krijuar me material kockor.',
          'Në muajt në vijim kocka juaj rritet përmes atij materiali dhe e zëvendëson. Sinusi përfundon disa milimetra më lart, me kockë të fortë poshtë aty ku më parë nuk kishte thuajse fare. Implanti pastaj ankorohet në kockën tuaj të rigjeneruar, jo në material.',
        ],
      },
      {
        title: 'Përpara se ta pranoni se ju duhet',
        intro: [
          'Shumë pacientë vijnë pasi u është thënë se u duhen dy ngritje sinusi, dhe largohen pa bërë asnjë.',
          'Vendosja e pjerrët, parimi pas All-on-4, i anon implantet përpara që të kapin kockën më të dendur në pjesën e përparme, duke e shmangur plotësisht sinusin. Edhe implantet e shkurtra funksionojnë aty ku lartësia është e kufizuar por gjerësia është e mirë. Asnjëra nuk është marifet: janë teknika të konsoliduara që përdorin kockën që keni në vend që të ndërtojnë atë që nuk e keni.',
          'Ndonjëherë përgjigjja është vërtet se ju duhet një ngritje, dhe e themi qartë. Por kushton, shton muaj dhe shton një ndërhyrje, ndaj ia vlen të jeni të sigurt më parë.',
        ],
      },
      {
        title: 'Në një fazë apo në dy',
        intro: [
          'Është pyetja që ndikon më shumë te kostoja dhe te kalendari juaj.',
          'Nëse ekziston tashmë kockë e mjaftueshme për ta mbajtur implantin të qëndrueshëm ndërsa materiali piqet përreth, zakonisht katër a pesë milimetra ose më shumë, ngritja dhe implanti bëhen bashkë: një procedurë, një shërim. Nën atë prag implanti nuk do të kishte ku të kapej; ngritja bëhet vetëm dhe implantet vendosen në udhëtimin e dytë.',
          'Në të dyja rastet udhëtimi i dytë vjen pas rreth 8 muajsh: ose për implantet, ose, nëse ato janë vendosur tashmë, për kurorat. Ju themi cila vlen për ju që në fillim, sepse dallimi është i konsiderueshëm.',
        ],
      },
      {
        title: 'Pse anatomia duhet njohur paraprakisht',
        intro: [
          'Më shumë se për çdo procedurë tjetër implantare, ngritja e sinusit varet nga njohja e anatomisë para ndërhyrjes.',
          'Grafia panoramike që na dërgoni tregon lartësinë e përafërt të kockës nën sinus dhe mjafton për planin paraprak. Por ajo e sheshon një zgavër tredimensionale në dy përmasa dhe nuk tregon gjithmonë formën e vërtetë të dyshemesë sinusale apo septat kockore që në disa sinuse krijojnë ndarje. Prandaj në klinikë, para ndërhyrjes, zona vlerësohet me imazhe të detajuara. Gjetja e një septumi para ndërhyrjes dhe jo gjatë saj është dallimi mes një procedure të planifikuar dhe një të improvizuar.',
        ],
      },
      {
        title: 'Cilën teknikë kërkon rasti juaj?',
        intro: ['Dy qasje, të zgjedhura sipas sa milimetra duhen fituar. Vendosin imazhet, jo preferenca:'],
        cards: [
          { title: 'Ngritje krestale (e brendshme)', text: 'Kur duhen vetëm pak milimetra. Dyshemeja e sinusit ngrihet përmes të njëjtit kanal të përgatitur për implantin, pa hapje të veçantë. Më pak invazive, shërim më i shpejtë, shpesh në të njëjtën seancë me implantin.' },
          { title: 'Ngritje me dritare anësore (e jashtme)', text: 'Kur duhet më shumë lartësi. Hapet një dritare e vogël në anë të nofullës, mbi vijën e mishrave; membrana ngrihet me kujdes nën pamje të drejtpërdrejtë dhe materiali vendoset poshtë saj. Më e parashikueshme për fitime të mëdha, me shërim më të gjatë.' },
        ],
        outro: ['Forcimi i një ngritjeje krestale përtej mundësive të saj është mënyra si çahen membranat. Kur duhet lartësi e madhe, dritarja anësore është zgjedhja e besueshme.'],
      },
    ],
    stats: [
      { value: '1', label: 'Seancë' },
      { value: '45–120 min', label: 'Kohëzgjatja' },
      { value: 'Lokale', label: 'Anestezia' },
      { value: '8 muaj', label: 'Ndërmjet udhëtimeve' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Dy udhëtime, 8 muaj larg',
    whatTitle: 'Çfarë është ngritja e sinusit?',
    what: [
      'Ngritja e sinusit është një shtim kocke në pjesën e pasme të nofullës së sipërme. Membrana që vesh dyshemenë e sinusit ngrihet disa milimetra dhe hapësira poshtë saj mbushet me kockë artificiale ose humane.',
      'Gjatë muajve në vijim kocka juaj rritet përmes materialit dhe krijon lartësinë që i duhet një implanti. Sinusi mbetet i mbyllur dhe plotësisht funksional; thjesht qëndron pak më lart se më parë.',
    ],
    calloutTitle: 'Jo të gjithëve që u thuhet se u duhet, u duhet vërtet',
    calloutText:
      'Vendosja e pjerrët dhe implantet e shkurtra shpesh arrijnë kockë të përdorshme pa e ngritur fare sinusin, prandaj një “ju duhet ngritje sinusi” i mëparshëm ia vlen të rishqyrtohet. Jua themi hapur çfarë vlen për ju, edhe kur përgjigjja është se ju duhet vërtet.',
    compareTitle: 'Ngritje sinusi apo një rrugë tjetër?',
    compareIntro: 'Ka disa mënyra për të vendosur implante në pjesën e pasme të sipërme:',
    compare: [
      { id: 'sinus-lift', tag: 'Ky trajtim', title: 'Ngritje sinusi', text: 'Ndërton lartësinë që mungon nën sinus. Një seancë, pastaj rreth 8 muaj deri në udhëtimin e dytë.' },
      { id: 'all-on-4', tag: 'Pa ngritje', title: 'All-on-4', text: 'Për një hark të plotë, implantet e pasme anohen përpara drejt kockës më të dendur dhe e shmangin sinusin.' },
      { id: 'bone-graft', tag: 'Kur mungon gjerësia', title: 'Shtim kocke', text: 'Kur problemi nuk është lartësia nën sinus, por gjerësia e kreshtës, kocka rindërtohet me shtim kocke.' },
    ],
    fitTitle: 'Kush ka nevojë për ngritje sinusi?',
    fitIntro: 'Ngritja e sinusit mund t’ju duhet nëse:',
    fit: [
      'Ju është thënë se nuk ka lartësi të mjaftueshme kocke për implante të sipërme',
      'Dhëmbët që mungojnë janë dhëmballë ose premolarë të sipërm, nën sinus',
      'Dhëmbët mungojnë prej vitesh dhe kreshta është hollëzuar',
      'Doni implante në vend të protezës dhe duhet ndërtuar më parë themeli',
      'Një klinikë tjetër ka refuzuar të vendosë implante pa shtim kocke',
      'Po planifikoni një hark të plotë dhe nofulla e sipërme kërkon lartësi prapa',
    ],
    fitNote:
      'Ngritja e sinusit nuk është kurrë qëllimi. Është ajo që i bën të mundura implantet aty ku lartësia e kockës ka mbaruar, dhe nëse rasti juaj arrin të njëjtin rezultat pa të, jua themi.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'Ngritja e sinusit është një seancë e vetme me anestezi lokale. Shërimi pas saj është ai që kërkon kohë:',
    steps: [
      { title: 'Grafia dhe vlerësimi', text: 'Nga grafia panoramike bëjmë planin paraprak; në klinikë imazhet tregojnë lartësinë e kockës dhe formën e dyshemesë sinusale. Kjo vendos qasjen, sasinë e materialit dhe nëse implantet hyjnë në të njëjtën seancë.' },
      { title: 'Anestezia lokale', text: 'Zona anestezohet mirë. Ngritja e sinusit tingëllon më frikësuese nga sa ndihet: membrana e sinusit nuk ka ndjeshmëri dhimbjeje dhe pacientët raportojnë më pak siklet se sa prisnin.' },
      { title: 'Ngritja e membranës', text: 'Membrana e sinusit ndahet nga kocka dhe ngrihet butësisht. Kjo është pjesa delikate e procedurës dhe arsyeja pse bëhet ngadalë e jo shpejt.' },
      { title: 'Vendosja e materialit', text: 'Kocka artificiale ose humane vendoset në hapësirën nën membranën e ngritur. Në muajt në vijim kocka juaj rritet përmes saj dhe formon lartësinë ku do të ankorohet implanti.' },
      { title: 'Shërimi dhe udhëtimi i dytë', text: 'Rreth 8 muaj që materiali të konsolidohet. Pastaj ktheheni për implantet, ose, nëse u vendosën në të njëjtën seancë, për kurorat.' },
    ],
    whyBandTitle: 'Pse Veneer Clinic për ngritje sinusi?',
    whyBandText:
      'Ju themi nëse nuk ju duhet. Ngritja e sinusit shton kosto, shton muaj dhe shton një ndërhyrje kirurgjikale, dhe ka raste ku vendosja e pjerrët ose implantet e shkurtra arrijnë të njëjtin rezultat pa të. Ai vlerësim bëhet paraprakisht nga imazhet tuaja, jo zbulohet në karrige.',
    caseText: 'Lartësi kocke e rindërtuar për implante të sipërme',
    faq: [
      { question: 'Sa kushton ngritja e sinusit?', answer: 'Ngritja e sinusit kushton 500 €. Implantet që vijnë pas saj llogariten veçmas (MegaGen, 500 € për implant). Oferta e saktë ju dërgohet me shkrim pas vlerësimit të grafisë panoramike.' },
      { question: 'A më duhet vërtet ngritje sinusi?', answer: 'Ndoshta jo, dhe ia vlen të verifikohet mirë përpara se ta pranoni. Ngritja rekomandohet kur nuk ka lartësi të mjaftueshme kocke mes kreshtës dhe dyshemesë së sinusit për të mbajtur një implant në siguri. Ajo matje është reale, por përfundimi varet nga teknika. Vendosja e pjerrët e anon implantin drejt kockës më të dendur përpara dhe e shmang sinusin; implantet e shkurtra funksionojnë kur lartësia është modeste por gjerësia e mirë. Kështu një pacient që i është thënë se i duhen dy ngritje mund të dalë se i duhet një, ose asnjë. Preferojmë t’ju themi se nuk ju duhet një procedurë sesa t’jua shesim.' },
      { question: 'A dhemb ngritja e sinusit?', answer: 'Më pak nga sa pret thuajse kushdo. Zona anestezohet lokalisht, dhe vetë membrana e sinusit nuk ka ndjeshmëri ndaj dhimbjes: ndieni presion dhe dridhje në faqe, jo dhimbje. Shumica e përshkruajnë përvojën si të çuditshme më shumë se të pakëndshme. Më pas priten ënjtje dhe ndonjë mavijosje mbi faqe për disa ditë dhe një ndjesi plotësie në atë anë, që menaxhohen me barnat e përshkruara. Shumica kthehen në aktivitet të lehtë brenda dy-tri ditësh.' },
      { question: 'Sa duhet pritur para implanteve?', answer: 'Rreth 8 muaj, prandaj trajtimi bëhet në dy udhëtime. Materiali nuk është ende kockë kur vendoset: është një skelë përmes së cilës rritet kocka juaj dhe që gradualisht e zëvendëson. Ngarkimi i një implanti shumë herët është një nga pak mënyrat reale për të humbur gjithë rezultatin, prandaj afatet nuk negociohen. Ju japim kalendarin që në fillim, që të planifikoni udhëtimin e dytë.' },
      { question: 'A mund të hyjë implanti në të njëjtën seancë?', answer: 'Ndonjëherë, dhe është përfundimi më i mirë kur është i mundur. Funksionon kur ekziston kockë e mjaftueshme për ta mbajtur implantin të qëndrueshëm ndërsa materiali piqet përreth, zakonisht katër a pesë milimetra ose më shumë. Atëherë ngritja dhe implanti bëhen bashkë dhe në udhëtimin e dytë vendosen kurorat. Aty ku lartësia është më e vogël, ngritja bëhet e para dhe implantet vendosen në udhëtimin e dytë.' },
      { question: 'Nga çfarë është bërë materiali?', answer: 'Përdorim kockë artificiale ose humane, që vepron si skelë më shumë se si mbushës i përhershëm. Ajo mban hapësirën nën membranën e ngritur ndërsa kocka juaj rritet brenda dhe përmes saj, dhe gradualisht zëvendësohet nga kocka juaj e gjallë. Ajo që në fund e ankoron implantin jeni ju, jo materiali. Materiali i saktë shkruhet në ofertë, ashtu si sistemi i implanteve; nëse keni preferenca për origjinën e tij, na i thoni në vlerësim.' },
      { question: 'A është e rrezikshme të punohet pranë sinusit?', answer: 'Është punë delikate, por rutinë dhe shumë e dokumentuar. Ngritja nuk hyn në sinus: e ngre membranën dhe vendos materialin poshtë saj, kështu që sinusi mbetet i mbyllur dhe thjesht qëndron pak milimetra më lart. Mjeshtëria qëndron te ndarja e membranës pa e çarë, prandaj procedura bëhet ngadalë dhe prandaj ka rëndësi njohja paraprake e formës së dyshemesë sinusale dhe e çdo septumi. Ndërlikimet janë të rralla në raste të planifikuara.' },
      { question: 'A mund të fluturoj për në shtëpi pas ndërhyrjes?', answer: 'Po, por jo menjëherë. Ndryshimi i presionit gjatë fluturimit mund ta lëvizë materialin para se të stabilizohet, prandaj planifikoni të qëndroni disa ditë në Tiranë pas ndërhyrjes. Sa ditë saktësisht varet nga madhësia e ngritjes, dhe jua themi para se të rezervoni biletën e kthimit. Para nisjes bëhet një kontroll i shkurtër.' },
      { question: 'Si është rikuperimi?', answer: 'I thjeshtë, me disa udhëzime të sakta që kanë më shumë rëndësi se zakonisht. Priten ënjtje dhe mavijosje mbi faqe për disa ditë, me kulm rreth ditës së dytë a të tretë. Mos e fryni hundën për dy javët e para, teshtini me gojë hapur dhe mos fluturoni pa e konfirmuar me ne: të gjitha këto ndryshojnë presionin në sinus. Asnjë ngritje peshash apo stërvitje intensive për një javë. Përndryshe shumica kthehen në normalitet brenda dy-tri ditësh.' },
      { question: 'A do të ndikojë te frymëmarrja apo sinuset në afat të gjatë?', answer: 'Jo. Një ngritje sinusi e shëruar nuk ndikon te frymëmarrja, te funksioni i sinuseve apo te si ndiheni përditë. Fitohen disa milimetra te dyshemeja e një zgavre që mbetet plotësisht funksionale. Në javët e para mund të ketë një ndjesi plotësie ndërsa ënjtja qetësohet. Nëse keni histori sinuziti kronik ose bllokimi hundor, na e thoni në vlerësim: nuk e pengon domosdoshmërisht trajtimin, por ndikon te koha dhe ndonjëherë do të thotë të trajtohet ajo e para.' },
      { question: 'Po nëse membrana çahet?', answer: 'Është ndërlikimi më i shpeshtë, zakonisht i menaxhueshëm, dhe është më mirë ta dini paraprakisht. Çarje të vogla shpesh riparohen në të njëjtën seancë me një barrierë të tretshme dhe procedura vazhdon sipas planit. Aty ku çarja është e madhe, vendimi i duhur është të ndalohet, të lihet membrana të shërohet, gjë që ndodh besueshëm brenda disa muajsh, dhe ngritja të përsëritet më pas. Është zhgënjyese por është zgjedhja e saktë. Jua themi nëse ndodh dhe pse.' },
      { question: 'A zgjat ngritja e sinusit?', answer: 'Po. Sapo materiali konsolidohet në kockën tuaj, sillet si pjesa tjetër e nofullës. Ajo që e mban është implanti: kocka ruhet nga ngarkesa, dhe një implant në vendin e shtuar e stimulon atë kockë ashtu si do ta bënte një rrënjë natyrale. Aty ku vendoset material dhe nuk vjen asnjë implant, kocka e re thithet gradualisht. Me implante në vend dhe mishra të shëndetshëm, rezultati është i përhershëm.' },
      { question: 'Sa kohë duhet të qëndroj në Tiranë?', answer: 'Vetë ndërhyrja është një seancë e vetme, 45 deri në 120 minuta sipas qasjes. Pas saj qëndroni disa ditë për kontrollin dhe derisa të jetë e sigurt të fluturoni. Gjatë muajve të konsolidimit jeni në shtëpi dhe ne mbetemi të kontaktueshëm. Udhëtimi i dytë, pas rreth 8 muajsh, është për implantet ose kurorat. Ju ndihmojmë me organizimin e të dy udhëtimeve dhe të qëndrimit.' },
    ],
  },
  en: {
    name: 'Sinus Lift',
    eyebrow: 'Implants · Albania',
    subtitle: 'Rebuilding bone height in the upper jaw for implants.',
    lead: 'Extra bone height added above the upper back teeth, opening the way for implants where there used to be no room.',
    kicker: 'Sinus lift in Tirana, Albania',
    articleTitle: 'Sinus lift: rebuilding bone for implants in the upper jaw',
    intro: [
      'A sinus lift rebuilds bone height in the back of the upper jaw, so implants have somewhere to anchor.',
      'It is preparation, not treatment. Nobody wants a sinus lift; they want the implants it makes possible. So the most useful thing we can tell you is that you may not need one.',
      'At Veneer Clinic, a sinus lift costs €500, is done under local anaesthesia in 45 to 120 minutes and uses artificial or human bone. Treatment is done over two trips, about 8 months apart.',
    ],
    sections: [
      {
        title: 'Why the bone runs out exactly there',
        intro: [
          'Two things happen at once, and they push in the same direction.',
          'When an upper molar is lost, the bone that held it stops being loaded and starts to resorb from below: the ridge shortens. Meanwhile the maxillary sinus, the air-filled cavity sitting right above those teeth, tends to expand downwards into the empty space. The sinus floor drops while the ridge rises towards it.',
          'The result is a thin band of bone between the two, sometimes only two or three millimetres, where an implant needs far more. That is why the upper back teeth are the hardest place in the mouth for implants, and why people are so often told it cannot be done.',
        ],
      },
      {
        title: 'What the procedure actually does',
        intro: [
          'The sinus is lined with a thin membrane. The lift does not open the sinus: it separates that membrane from the bone below and raises it slightly, then fills the space created with bone material.',
          'Over the following months your own bone grows through that material and replaces it. The sinus ends up a few millimetres higher, with solid bone below where there was almost none. The implant then anchors in your regenerated bone, not in the material.',
        ],
      },
      {
        title: 'Before you accept that you need one',
        intro: [
          'Many patients arrive having been told they need two sinus lifts, and leave without having either.',
          'Angled placement, the principle behind All-on-4, tilts the implants forward to grip the denser bone at the front, avoiding the sinus entirely. Short implants also work where height is limited but width is good. None of these is a trick: they are established techniques that use the bone you have instead of building what you do not.',
          'Sometimes the answer really is that you need a lift, and we say so clearly. But it costs money, adds months and adds a procedure, so it is worth being sure first.',
        ],
      },
      {
        title: 'In one stage or two',
        intro: [
          'This is the question that affects your cost and calendar the most.',
          'If there is already enough bone to hold the implant stable while the material matures around it, usually four or five millimetres or more, the lift and the implant are done together: one procedure, one healing period. Below that threshold the implant would have nothing to grip; the lift is done alone and the implants are placed on the second trip.',
          'Either way, the second trip comes after about 8 months: for the implants, or, if they are already in, for the crowns. We tell you which applies from the start, because the difference is considerable.',
        ],
      },
      {
        title: 'Why the anatomy must be known in advance',
        intro: [
          'More than any other implant procedure, a sinus lift depends on knowing the anatomy before surgery.',
          'The panoramic X-ray you send shows the approximate bone height under the sinus and is enough for the preliminary plan. But it flattens a three-dimensional cavity into two dimensions and does not always show the true shape of the sinus floor or the bony septa that divide some sinuses. So at the clinic, before the procedure, the area is assessed with detailed imaging. Finding a septum before surgery rather than during it is the difference between a planned procedure and an improvised one.',
        ],
      },
      {
        title: 'Which technique does your case need?',
        intro: ['Two approaches, chosen by how many millimetres need to be gained. The imaging decides, not preference:'],
        cards: [
          { title: 'Crestal lift (internal)', text: 'When only a few millimetres are needed. The sinus floor is raised through the same channel prepared for the implant, with no separate opening. Less invasive, faster healing, often in the same session as the implant.' },
          { title: 'Lateral window lift (external)', text: 'When more height is needed. A small window is opened in the side of the jaw, above the gum line; the membrane is lifted carefully under direct view and material placed beneath it. More predictable for large gains, with longer healing.' },
        ],
        outro: ['Pushing a crestal lift beyond its limits is how membranes tear. When a lot of height is needed, the lateral window is the reliable choice.'],
      },
    ],
    stats: [
      { value: '1', label: 'Session' },
      { value: '45–120 min', label: 'Duration' },
      { value: 'Local', label: 'Anaesthesia' },
      { value: '8 months', label: 'Between trips' },
    ],
    priceTitle: 'Price',
    priceNote: 'Two trips, 8 months apart',
    whatTitle: 'What is a sinus lift?',
    what: [
      'A sinus lift is bone grafting in the back of the upper jaw. The membrane lining the sinus floor is raised a few millimetres and the space beneath it is filled with artificial or human bone.',
      'Over the following months your own bone grows through the material and creates the height an implant needs. The sinus stays closed and fully functional; it simply sits slightly higher than before.',
    ],
    calloutTitle: 'Not everyone who is told they need one really does',
    calloutText:
      'Angled placement and short implants often reach usable bone without lifting the sinus at all, so an earlier “you need a sinus lift” is worth reviewing. We tell you openly what applies to you, even when the answer is that you really do need one.',
    compareTitle: 'Sinus lift, or another route?',
    compareIntro: 'There are several ways to place implants in the upper back jaw:',
    compare: [
      { id: 'sinus-lift', tag: 'This treatment', title: 'Sinus lift', text: 'Builds the missing height under the sinus. One session, then about 8 months until the second trip.' },
      { id: 'all-on-4', tag: 'No lift', title: 'All-on-4', text: 'For a full arch, the back implants tilt forward into denser bone and avoid the sinus.' },
      { id: 'bone-graft', tag: 'When width is missing', title: 'Bone grafting', text: 'When the problem is not the height under the sinus but the width of the ridge, the bone is rebuilt with a graft.' },
    ],
    fitTitle: 'Who needs a sinus lift?',
    fitIntro: 'You may need a sinus lift if:',
    fit: [
      'You have been told there is not enough bone height for upper implants',
      'The missing teeth are upper molars or premolars, under the sinus',
      'The teeth have been missing for years and the ridge has thinned',
      'You want implants instead of a denture and the foundation has to be built first',
      'Another clinic has refused to place implants without grafting',
      'You are planning a full arch and the upper jaw needs height at the back',
    ],
    fitNote:
      'A sinus lift is never the goal. It is what makes implants possible where bone height has run out, and if your case reaches the same result without one, we tell you.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'A sinus lift is a single session under local anaesthesia. The healing afterwards is what takes time:',
    steps: [
      { title: 'X-ray and assessment', text: 'We make the preliminary plan from your panoramic X-ray; at the clinic, imaging shows the bone height and the shape of the sinus floor. This decides the approach, the amount of material and whether implants go in the same session.' },
      { title: 'Local anaesthesia', text: 'The area is numbed thoroughly. A sinus lift sounds more frightening than it feels: the sinus membrane has no pain sensation and patients report less discomfort than they expected.' },
      { title: 'Lifting the membrane', text: 'The sinus membrane is separated from the bone and lifted gently. This is the delicate part of the procedure and the reason it is done slowly, not quickly.' },
      { title: 'Placing the material', text: 'Artificial or human bone is placed in the space beneath the lifted membrane. Over the following months your bone grows through it and forms the height the implant will anchor in.' },
      { title: 'Healing and the second trip', text: 'About 8 months for the material to consolidate. Then you return for the implants, or, if they were placed in the same session, for the crowns.' },
    ],
    whyBandTitle: 'Why Veneer Clinic for a sinus lift?',
    whyBandText:
      'We tell you if you do not need one. A sinus lift adds cost, adds months and adds a surgical procedure, and there are cases where angled placement or short implants reach the same result without it. That assessment is made in advance from your imaging, not discovered in the chair.',
    caseText: 'Bone height rebuilt for upper implants',
    faq: [
      { question: 'How much does a sinus lift cost?', answer: 'A sinus lift costs €500. The implants that follow are charged separately (MegaGen, €500 per implant). The exact quote is sent to you in writing after we assess your panoramic X-ray.' },
      { question: 'Do I really need a sinus lift?', answer: 'Possibly not, and it is worth checking carefully before you accept it. A lift is recommended when there is not enough bone height between the ridge and the sinus floor to hold an implant safely. That measurement is real, but the conclusion depends on the technique. Angled placement tilts the implant towards denser bone at the front and avoids the sinus; short implants work when height is modest but width is good. So a patient told they need two lifts may turn out to need one, or none. We would rather tell you that you do not need a procedure than sell it to you.' },
      { question: 'Does a sinus lift hurt?', answer: 'Less than almost anyone expects. The area is numbed locally, and the sinus membrane itself has no pain sensation: you feel pressure and vibration in the cheek, not pain. Most describe the experience as strange more than unpleasant. Afterwards expect swelling and some bruising over the cheek for a few days and a feeling of fullness on that side, managed with the prescribed medication. Most people are back to light activity within two or three days.' },
      { question: 'How long before the implants?', answer: 'About 8 months, which is why treatment is done over two trips. The material is not yet bone when it is placed: it is a scaffold your bone grows through and gradually replaces. Loading an implant too early is one of the few real ways to lose the whole result, so the timelines are not negotiable. We give you the calendar from the start so you can plan the second trip.' },
      { question: 'Can the implant go in at the same session?', answer: 'Sometimes, and it is the best outcome when possible. It works when there is enough bone to hold the implant stable while the material matures around it, usually four or five millimetres or more. Then the lift and implant are done together and the crowns are fitted on the second trip. Where height is lower, the lift is done first and the implants are placed on the second trip.' },
      { question: 'What is the material made of?', answer: 'We use artificial or human bone, which acts as a scaffold rather than a permanent filler. It holds the space under the lifted membrane while your bone grows into and through it, and is gradually replaced by your own living bone. What finally anchors the implant is you, not the material. The exact material is written in the quote, as is the implant system; if you have preferences about its origin, tell us at the assessment.' },
      { question: 'Is it risky to work near the sinus?', answer: 'It is delicate work, but routine and very well documented. The lift does not enter the sinus: it raises the membrane and places material beneath it, so the sinus stays closed and simply sits a few millimetres higher. The skill lies in separating the membrane without tearing it, which is why the procedure is done slowly and why knowing the shape of the sinus floor and any septa in advance matters. Complications are rare in planned cases.' },
      { question: 'Can I fly home after the procedure?', answer: 'Yes, but not straight away. The pressure change during a flight can move the material before it stabilises, so plan to stay a few days in Tirana after the procedure. Exactly how many depends on the size of the lift, and we tell you before you book your return flight. A short check is done before you leave.' },
      { question: 'What is recovery like?', answer: 'Simple, with a few precise instructions that matter more than usual. Expect swelling and bruising over the cheek for a few days, peaking around the second or third day. Do not blow your nose for the first two weeks, sneeze with your mouth open and do not fly without confirming with us: all of these change sinus pressure. No weightlifting or intense exercise for a week. Otherwise most people are back to normal within two or three days.' },
      { question: 'Will it affect my breathing or sinuses long term?', answer: 'No. A healed sinus lift does not affect breathing, sinus function or how you feel day to day. A few millimetres are gained at the floor of a cavity that remains fully functional. In the first weeks there may be a feeling of fullness while the swelling settles. If you have a history of chronic sinusitis or nasal blockage, tell us at the assessment: it does not necessarily prevent treatment, but it affects timing and sometimes means treating that first.' },
      { question: 'What if the membrane tears?', answer: 'It is the most common complication, usually manageable, and better to know about in advance. Small tears are often repaired in the same session with a resorbable barrier and the procedure continues as planned. Where the tear is large, the right decision is to stop, let the membrane heal, which happens reliably within a few months, and repeat the lift afterwards. It is disappointing but it is the correct choice. We tell you if it happens and why.' },
      { question: 'Does a sinus lift last?', answer: 'Yes. Once the material has consolidated into your bone, it behaves like the rest of the jaw. What maintains it is the implant: bone is preserved by load, and an implant in the grafted site stimulates that bone just as a natural root would. Where material is placed and no implant follows, the new bone gradually resorbs. With implants in place and healthy gums, the result is permanent.' },
      { question: 'How long do I need to stay in Tirana?', answer: 'The procedure itself is a single session of 45 to 120 minutes depending on the approach. Afterwards you stay a few days for the check and until it is safe to fly. During the consolidation months you are at home and we stay reachable. The second trip, after about 8 months, is for the implants or crowns. We help you organise both trips and your stay.' },
    ],
  },
  de: {
    name: 'Sinuslift',
    eyebrow: 'Implantate · Albanien',
    subtitle: 'Wiederaufbau der Knochenhöhe im Oberkiefer für Implantate.',
    lead: 'Zusätzliche Knochenhöhe über den oberen Seitenzähnen, die den Weg für Implantate öffnet, wo vorher kein Platz war.',
    kicker: 'Sinuslift in Tirana, Albanien',
    articleTitle: 'Sinuslift: Knochenaufbau für Implantate im Oberkiefer',
    intro: [
      'Ein Sinuslift stellt die Knochenhöhe im hinteren Oberkiefer wieder her, damit Implantate einen Halt finden.',
      'Er ist Vorbereitung, keine Behandlung. Niemand möchte einen Sinuslift; man möchte die Implantate, die er möglich macht. Deshalb ist das Nützlichste, was wir Ihnen sagen können: Vielleicht brauchen Sie keinen.',
      'In der Veneer Clinic kostet ein Sinuslift 500 €, erfolgt unter örtlicher Betäubung in 45 bis 120 Minuten und nutzt künstlichen oder humanen Knochen. Die Behandlung erfolgt in zwei Reisen im Abstand von etwa 8 Monaten.',
    ],
    sections: [
      {
        title: 'Warum der Knochen genau dort ausgeht',
        intro: [
          'Zwei Dinge geschehen gleichzeitig, und beide wirken in dieselbe Richtung.',
          'Geht ein oberer Backenzahn verloren, wird der Knochen, der ihn hielt, nicht mehr belastet und beginnt sich von unten abzubauen: Der Kamm wird kürzer. Gleichzeitig dehnt sich die Kieferhöhle, der luftgefüllte Hohlraum direkt über diesen Zähnen, nach unten in den leeren Raum aus. Der Kieferhöhlenboden sinkt, während der Kamm ihm entgegenwächst.',
          'Das Ergebnis ist ein dünnes Knochenband dazwischen, manchmal nur zwei oder drei Millimeter, wo ein Implantat viel mehr braucht. Deshalb sind die oberen Seitenzähne die schwierigste Stelle im Mund für Implantate, und deshalb hört man so oft, es gehe nicht.',
        ],
      },
      {
        title: 'Was der Eingriff tatsächlich macht',
        intro: [
          'Die Kieferhöhle ist mit einer dünnen Schleimhaut ausgekleidet. Der Lift öffnet die Kieferhöhle nicht: Er löst diese Membran vom Knochen darunter, hebt sie leicht an und füllt den entstandenen Raum mit Knochenmaterial.',
          'In den folgenden Monaten wächst Ihr eigener Knochen durch das Material und ersetzt es. Die Kieferhöhle liegt am Ende einige Millimeter höher, mit festem Knochen darunter, wo vorher fast keiner war. Das Implantat verankert sich dann in Ihrem regenerierten Knochen, nicht im Material.',
        ],
      },
      {
        title: 'Bevor Sie akzeptieren, dass Sie einen brauchen',
        intro: [
          'Viele Patienten kommen mit der Aussage, sie bräuchten zwei Sinuslifts, und gehen ohne einen einzigen.',
          'Die geneigte Insertion, das Prinzip hinter All-on-4, kippt die Implantate nach vorn in den dichteren vorderen Knochen und umgeht die Kieferhöhle ganz. Auch kurze Implantate funktionieren, wo die Höhe begrenzt, die Breite aber gut ist. Nichts davon ist ein Trick: Es sind bewährte Techniken, die den vorhandenen Knochen nutzen, statt fehlenden aufzubauen.',
          'Manchmal lautet die Antwort tatsächlich, dass Sie einen Lift brauchen, und das sagen wir klar. Aber er kostet, dauert Monate länger und bedeutet einen weiteren Eingriff, also lohnt es sich, vorher sicher zu sein.',
        ],
      },
      {
        title: 'Einzeitig oder zweizeitig',
        intro: [
          'Das ist die Frage, die Ihre Kosten und Ihren Zeitplan am stärksten beeinflusst.',
          'Ist bereits genug Knochen vorhanden, um das Implantat stabil zu halten, während das Material ringsum reift, meist vier oder fünf Millimeter oder mehr, werden Lift und Implantat zusammen gemacht: ein Eingriff, eine Heilung. Darunter hätte das Implantat keinen Halt; der Lift erfolgt allein und die Implantate werden bei der zweiten Reise gesetzt.',
          'In beiden Fällen kommt die zweite Reise nach etwa 8 Monaten: für die Implantate oder, wenn sie schon sitzen, für die Kronen. Wir sagen Ihnen von Anfang an, was gilt, denn der Unterschied ist erheblich.',
        ],
      },
      {
        title: 'Warum die Anatomie vorher bekannt sein muss',
        intro: [
          'Mehr als jeder andere Implantateingriff hängt der Sinuslift davon ab, die Anatomie vorher zu kennen.',
          'Das Panoramaröntgen, das Sie senden, zeigt die ungefähre Knochenhöhe unter der Kieferhöhle und genügt für die Vorplanung. Doch es projiziert einen dreidimensionalen Hohlraum auf zwei Dimensionen und zeigt nicht immer die wahre Form des Kieferhöhlenbodens oder die knöchernen Septen, die manche Kieferhöhlen unterteilen. Deshalb wird der Bereich in der Klinik vor dem Eingriff mit detaillierter Bildgebung beurteilt. Ein Septum vor dem Eingriff statt währenddessen zu finden, ist der Unterschied zwischen einem geplanten und einem improvisierten Eingriff.',
        ],
      },
      {
        title: 'Welche Technik braucht Ihr Fall?',
        intro: ['Zwei Ansätze, gewählt danach, wie viele Millimeter gewonnen werden müssen. Die Bildgebung entscheidet, nicht die Vorliebe:'],
        cards: [
          { title: 'Krestaler Sinuslift (intern)', text: 'Wenn nur wenige Millimeter nötig sind. Der Kieferhöhlenboden wird durch denselben für das Implantat vorbereiteten Kanal angehoben, ohne separate Öffnung. Weniger invasiv, schnellere Heilung, oft in derselben Sitzung wie das Implantat.' },
          { title: 'Lateraler Sinuslift (extern)', text: 'Wenn mehr Höhe nötig ist. Ein kleines Fenster wird seitlich im Kiefer über dem Zahnfleischrand geöffnet; die Membran wird unter direkter Sicht vorsichtig angehoben und Material darunter eingebracht. Vorhersehbarer für große Gewinne, mit längerer Heilung.' },
        ],
        outro: ['Einen krestalen Lift über seine Grenzen zu treiben ist der Weg, wie Membranen reißen. Wird viel Höhe benötigt, ist das laterale Fenster die zuverlässige Wahl.'],
      },
    ],
    stats: [
      { value: '1', label: 'Sitzung' },
      { value: '45–120 Min.', label: 'Dauer' },
      { value: 'Lokal', label: 'Betäubung' },
      { value: '8 Monate', label: 'Zwischen den Reisen' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Zwei Reisen, 8 Monate Abstand',
    whatTitle: 'Was ist ein Sinuslift?',
    what: [
      'Ein Sinuslift ist ein Knochenaufbau im hinteren Oberkiefer. Die Membran, die den Kieferhöhlenboden auskleidet, wird einige Millimeter angehoben und der Raum darunter mit künstlichem oder humanem Knochen gefüllt.',
      'In den folgenden Monaten wächst Ihr eigener Knochen durch das Material und schafft die Höhe, die ein Implantat braucht. Die Kieferhöhle bleibt geschlossen und voll funktionsfähig; sie liegt nur etwas höher als vorher.',
    ],
    calloutTitle: 'Nicht jeder, dem man es sagt, braucht ihn wirklich',
    calloutText:
      'Geneigte Insertion und kurze Implantate erreichen oft nutzbaren Knochen, ganz ohne Sinuslift, daher lohnt es sich, ein früheres „Sie brauchen einen Sinuslift“ überprüfen zu lassen. Wir sagen Ihnen offen, was für Sie gilt, auch wenn die Antwort lautet, dass Sie ihn wirklich brauchen.',
    compareTitle: 'Sinuslift oder ein anderer Weg?',
    compareIntro: 'Es gibt mehrere Wege, Implantate im hinteren Oberkiefer zu setzen:',
    compare: [
      { id: 'sinus-lift', tag: 'Diese Behandlung', title: 'Sinuslift', text: 'Baut die fehlende Höhe unter der Kieferhöhle auf. Eine Sitzung, dann etwa 8 Monate bis zur zweiten Reise.' },
      { id: 'all-on-4', tag: 'Ohne Lift', title: 'All-on-4', text: 'Bei einem ganzen Kiefer werden die hinteren Implantate nach vorn in dichteren Knochen geneigt und umgehen die Kieferhöhle.' },
      { id: 'bone-graft', tag: 'Wenn Breite fehlt', title: 'Knochenaufbau', text: 'Fehlt nicht die Höhe unter der Kieferhöhle, sondern die Breite des Kieferkamms, wird der Knochen mit einem Aufbau rekonstruiert.' },
    ],
    fitTitle: 'Wer braucht einen Sinuslift?',
    fitIntro: 'Sie brauchen möglicherweise einen Sinuslift, wenn:',
    fit: [
      'Man Ihnen sagte, die Knochenhöhe reiche nicht für Implantate im Oberkiefer',
      'Die fehlenden Zähne obere Backen- oder Vorbackenzähne unter der Kieferhöhle sind',
      'Die Zähne seit Jahren fehlen und der Kamm dünner geworden ist',
      'Sie Implantate statt einer Prothese möchten und zuerst das Fundament gebaut werden muss',
      'Eine andere Klinik Implantate ohne Knochenaufbau abgelehnt hat',
      'Sie einen ganzen Kiefer planen und der Oberkiefer hinten Höhe braucht',
    ],
    fitNote:
      'Ein Sinuslift ist nie das Ziel. Er macht Implantate dort möglich, wo die Knochenhöhe zu Ende ist, und erreicht Ihr Fall dasselbe Ergebnis ohne ihn, sagen wir es Ihnen.',
    stepsTitle: 'So funktioniert die Behandlung',
    stepsIntro: 'Ein Sinuslift ist eine einzige Sitzung unter örtlicher Betäubung. Was Zeit braucht, ist die Heilung danach:',
    steps: [
      { title: 'Röntgen und Untersuchung', text: 'Wir erstellen die Vorplanung anhand Ihres Panoramaröntgens; in der Klinik zeigt die Bildgebung die Knochenhöhe und die Form des Kieferhöhlenbodens. Das bestimmt den Ansatz, die Materialmenge und ob Implantate in derselben Sitzung gesetzt werden.' },
      { title: 'Örtliche Betäubung', text: 'Der Bereich wird gründlich betäubt. Ein Sinuslift klingt beängstigender, als er sich anfühlt: Die Kieferhöhlenschleimhaut hat kein Schmerzempfinden, und Patienten berichten von weniger Beschwerden als erwartet.' },
      { title: 'Anheben der Membran', text: 'Die Kieferhöhlenschleimhaut wird vom Knochen gelöst und sanft angehoben. Das ist der heikle Teil des Eingriffs und der Grund, warum er langsam statt schnell erfolgt.' },
      { title: 'Einbringen des Materials', text: 'Künstlicher oder humaner Knochen wird in den Raum unter der angehobenen Membran eingebracht. In den folgenden Monaten wächst Ihr Knochen hindurch und bildet die Höhe, in der das Implantat verankert wird.' },
      { title: 'Heilung und zweite Reise', text: 'Etwa 8 Monate, bis das Material konsolidiert ist. Dann kommen Sie für die Implantate zurück oder, wenn sie in derselben Sitzung gesetzt wurden, für die Kronen.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für einen Sinuslift?',
    whyBandText:
      'Wir sagen Ihnen, wenn Sie keinen brauchen. Ein Sinuslift bedeutet mehr Kosten, mehr Monate und einen weiteren chirurgischen Eingriff, und in manchen Fällen erreichen geneigte Insertion oder kurze Implantate dasselbe ohne ihn. Diese Beurteilung erfolgt vorab anhand Ihrer Bildgebung, nicht erst auf dem Stuhl.',
    caseText: 'Knochenhöhe für Implantate im Oberkiefer wiederaufgebaut',
    faq: [
      { question: 'Was kostet ein Sinuslift?', answer: 'Ein Sinuslift kostet 500 €. Die anschließenden Implantate werden separat berechnet (MegaGen, 500 € pro Implantat). Das genaue Angebot erhalten Sie schriftlich nach Auswertung Ihres Panoramaröntgens.' },
      { question: 'Brauche ich wirklich einen Sinuslift?', answer: 'Vielleicht nicht, und das sollte sorgfältig geprüft werden, bevor Sie zustimmen. Ein Lift wird empfohlen, wenn zwischen Kamm und Kieferhöhlenboden nicht genug Knochenhöhe ist, um ein Implantat sicher zu halten. Diese Messung ist real, aber die Schlussfolgerung hängt von der Technik ab. Die geneigte Insertion kippt das Implantat in den dichteren vorderen Knochen und umgeht die Kieferhöhle; kurze Implantate funktionieren bei mäßiger Höhe und guter Breite. So kann ein Patient, dem zwei Lifts angekündigt wurden, am Ende einen oder keinen brauchen. Wir sagen Ihnen lieber, dass Sie einen Eingriff nicht brauchen, als ihn zu verkaufen.' },
      { question: 'Tut ein Sinuslift weh?', answer: 'Weniger, als fast jeder erwartet. Der Bereich wird örtlich betäubt, und die Kieferhöhlenschleimhaut selbst hat kein Schmerzempfinden: Sie spüren Druck und Vibration in der Wange, keinen Schmerz. Die meisten beschreiben es als eher seltsam als unangenehm. Danach sind Schwellung, etwas Bluterguss über der Wange für einige Tage und ein Völlegefühl auf dieser Seite zu erwarten, behandelt mit den verordneten Medikamenten. Die meisten sind nach zwei bis drei Tagen wieder leicht aktiv.' },
      { question: 'Wie lange bis zu den Implantaten?', answer: 'Etwa 8 Monate, weshalb die Behandlung in zwei Reisen erfolgt. Das Material ist beim Einbringen noch kein Knochen: Es ist ein Gerüst, durch das Ihr Knochen wächst und das er nach und nach ersetzt. Ein Implantat zu früh zu belasten ist einer der wenigen echten Wege, das ganze Ergebnis zu verlieren, deshalb sind die Fristen nicht verhandelbar. Wir geben Ihnen den Zeitplan von Anfang an, damit Sie die zweite Reise planen können.' },
      { question: 'Kann das Implantat in derselben Sitzung gesetzt werden?', answer: 'Manchmal, und das ist das beste Ergebnis, wenn möglich. Es funktioniert, wenn genug Knochen vorhanden ist, um das Implantat stabil zu halten, während das Material reift, meist vier oder fünf Millimeter oder mehr. Dann erfolgen Lift und Implantat zusammen, und bei der zweiten Reise werden die Kronen eingesetzt. Bei geringerer Höhe kommt zuerst der Lift, und die Implantate werden bei der zweiten Reise gesetzt.' },
      { question: 'Woraus besteht das Material?', answer: 'Wir verwenden künstlichen oder humanen Knochen, der eher als Gerüst denn als dauerhafte Füllung dient. Er hält den Raum unter der angehobenen Membran, während Ihr Knochen hinein- und hindurchwächst, und wird nach und nach durch Ihren eigenen lebenden Knochen ersetzt. Was das Implantat am Ende verankert, sind Sie, nicht das Material. Das genaue Material steht im Angebot, ebenso das Implantatsystem; haben Sie Präferenzen zur Herkunft, sagen Sie es uns bei der Untersuchung.' },
      { question: 'Ist es riskant, nahe der Kieferhöhle zu arbeiten?', answer: 'Es ist feine Arbeit, aber Routine und sehr gut dokumentiert. Der Lift dringt nicht in die Kieferhöhle ein: Er hebt die Membran an und bringt Material darunter ein, sodass die Kieferhöhle geschlossen bleibt und nur einige Millimeter höher liegt. Die Kunst liegt darin, die Membran zu lösen, ohne sie einzureißen, deshalb erfolgt der Eingriff langsam, und deshalb ist es wichtig, die Form des Kieferhöhlenbodens und etwaige Septen vorher zu kennen. Komplikationen sind in geplanten Fällen selten.' },
      { question: 'Kann ich nach dem Eingriff nach Hause fliegen?', answer: 'Ja, aber nicht sofort. Die Druckänderung beim Fliegen kann das Material verschieben, bevor es sich stabilisiert, planen Sie daher einige Tage in Tirana nach dem Eingriff ein. Wie viele genau, hängt von der Größe des Lifts ab, und wir sagen es Ihnen, bevor Sie Ihren Rückflug buchen. Vor der Abreise erfolgt eine kurze Kontrolle.' },
      { question: 'Wie verläuft die Erholung?', answer: 'Einfach, mit einigen genauen Hinweisen, die wichtiger sind als sonst. Schwellung und Bluterguss über der Wange für einige Tage, mit Höhepunkt am zweiten oder dritten Tag. Zwei Wochen lang nicht die Nase schnäuzen, mit offenem Mund niesen und nicht ohne Rücksprache mit uns fliegen: All das verändert den Druck in der Kieferhöhle. Eine Woche kein Gewichtheben und kein intensiver Sport. Ansonsten sind die meisten nach zwei bis drei Tagen wieder normal.' },
      { question: 'Beeinflusst es langfristig Atmung oder Nebenhöhlen?', answer: 'Nein. Ein verheilter Sinuslift beeinflusst weder Atmung noch Nebenhöhlenfunktion noch Ihr tägliches Befinden. Es werden einige Millimeter am Boden eines Hohlraums gewonnen, der voll funktionsfähig bleibt. In den ersten Wochen kann ein Völlegefühl bestehen, während die Schwellung abklingt. Haben Sie eine Vorgeschichte chronischer Sinusitis oder verstopfter Nase, sagen Sie es uns bei der Untersuchung: Das verhindert die Behandlung nicht unbedingt, beeinflusst aber den Zeitpunkt und bedeutet manchmal, dies zuerst zu behandeln.' },
      { question: 'Was, wenn die Membran reißt?', answer: 'Das ist die häufigste Komplikation, meist beherrschbar, und es ist besser, vorher davon zu wissen. Kleine Risse werden oft in derselben Sitzung mit einer resorbierbaren Barriere repariert, und der Eingriff geht wie geplant weiter. Bei einem großen Riss ist die richtige Entscheidung, aufzuhören, die Membran heilen zu lassen, was zuverlässig innerhalb einiger Monate geschieht, und den Lift danach zu wiederholen. Das ist enttäuschend, aber richtig. Wir sagen Ihnen, wenn es passiert und warum.' },
      { question: 'Hält ein Sinuslift dauerhaft?', answer: 'Ja. Sobald das Material in Ihren Knochen übergegangen ist, verhält es sich wie der übrige Kiefer. Was ihn erhält, ist das Implantat: Knochen bleibt durch Belastung erhalten, und ein Implantat an der aufgebauten Stelle stimuliert diesen Knochen wie eine natürliche Wurzel. Wird Material eingebracht und folgt kein Implantat, baut sich der neue Knochen allmählich ab. Mit Implantaten und gesundem Zahnfleisch ist das Ergebnis dauerhaft.' },
      { question: 'Wie lange muss ich in Tirana bleiben?', answer: 'Der Eingriff selbst ist eine einzige Sitzung von 45 bis 120 Minuten je nach Ansatz. Danach bleiben Sie einige Tage für die Kontrolle und bis Fliegen sicher ist. In den Monaten der Konsolidierung sind Sie zu Hause, und wir bleiben erreichbar. Die zweite Reise nach etwa 8 Monaten ist für die Implantate oder Kronen. Wir helfen bei der Organisation beider Reisen und Ihres Aufenthalts.' },
    ],
  },
  it: {
    name: 'Rialzo del seno',
    eyebrow: 'Impianti · Albania',
    subtitle: 'Ricostruire l’altezza ossea nell’arcata superiore per gli impianti.',
    lead: 'Altezza ossea in più sopra i denti posteriori superiori, che apre la strada agli impianti dove prima non c’era spazio.',
    kicker: 'Rialzo del seno a Tirana, Albania',
    articleTitle: 'Rialzo del seno: ricostruire l’osso per gli impianti nell’arcata superiore',
    intro: [
      'Il rialzo del seno ricostruisce l’altezza ossea nella parte posteriore dell’arcata superiore, perché gli impianti abbiano dove ancorarsi.',
      'È una preparazione, non un trattamento. Nessuno desidera un rialzo del seno; desidera gli impianti che rende possibili. Per questo la cosa più utile che possiamo dirti è che forse non ti serve.',
      'Alla Veneer Clinic, il rialzo del seno costa 500 €, si esegue in anestesia locale in 45-120 minuti e usa osso artificiale o umano. Il trattamento si svolge in due viaggi, a circa 8 mesi di distanza.',
    ],
    sections: [
      {
        title: 'Perché l’osso finisce proprio lì',
        intro: [
          'Succedono due cose insieme, e spingono nella stessa direzione.',
          'Quando si perde un molare superiore, l’osso che lo sosteneva smette di ricevere carico e inizia a riassorbirsi dal basso: la cresta si accorcia. Nel frattempo il seno mascellare, la cavità piena d’aria proprio sopra quei denti, tende a espandersi verso il basso nello spazio rimasto vuoto. Il pavimento del seno scende mentre la cresta sale verso di esso.',
          'Il risultato è una sottile fascia d’osso tra i due, a volte solo due o tre millimetri, dove un impianto ne richiede molti di più. Per questo i denti posteriori superiori sono il punto più difficile della bocca per gli impianti, e per questo alle persone si dice così spesso che non si può fare.',
        ],
      },
      {
        title: 'Cosa fa davvero l’intervento',
        intro: [
          'Il seno è rivestito da una sottile membrana. Il rialzo non apre il seno: separa quella membrana dall’osso sottostante, la solleva leggermente e riempie lo spazio creato con materiale osseo.',
          'Nei mesi successivi il tuo osso cresce attraverso quel materiale e lo sostituisce. Il seno finisce qualche millimetro più in alto, con osso solido sotto dove prima non ce n’era quasi. L’impianto si ancora poi nel tuo osso rigenerato, non nel materiale.',
        ],
      },
      {
        title: 'Prima di accettare che ti serva',
        intro: [
          'Molti pazienti arrivano dopo che gli è stato detto che servono due rialzi del seno, e ripartono senza averne fatto nessuno.',
          'L’inserimento inclinato, il principio dietro l’All-on-4, inclina gli impianti in avanti per agganciare l’osso più denso della parte anteriore, evitando del tutto il seno. Anche gli impianti corti funzionano dove l’altezza è limitata ma la larghezza è buona. Nessuno di questi è un trucco: sono tecniche consolidate che usano l’osso che hai invece di costruire quello che non hai.',
          'A volte la risposta è davvero che ti serve un rialzo, e lo diciamo chiaramente. Ma costa, aggiunge mesi e aggiunge un intervento, quindi vale la pena esserne sicuri prima.',
        ],
      },
      {
        title: 'In una fase o in due',
        intro: [
          'È la domanda che incide di più sui costi e sul tuo calendario.',
          'Se c’è già abbastanza osso per tenere stabile l’impianto mentre il materiale matura attorno, di solito quattro o cinque millimetri o più, rialzo e impianto si fanno insieme: un intervento, una guarigione. Sotto quella soglia l’impianto non avrebbe dove aggrapparsi; il rialzo si fa da solo e gli impianti si inseriscono nel secondo viaggio.',
          'In entrambi i casi il secondo viaggio arriva dopo circa 8 mesi: per gli impianti o, se sono già inseriti, per le corone. Ti diciamo quale vale per te fin dall’inizio, perché la differenza è notevole.',
        ],
      },
      {
        title: 'Perché l’anatomia va conosciuta prima',
        intro: [
          'Più di qualsiasi altro intervento implantare, il rialzo del seno dipende dal conoscere l’anatomia prima dell’intervento.',
          'La panoramica che ci invii mostra l’altezza ossea approssimativa sotto il seno e basta per il piano preliminare. Ma schiaccia una cavità tridimensionale in due dimensioni e non sempre mostra la vera forma del pavimento del seno o i setti ossei che dividono alcuni seni. Per questo in clinica, prima dell’intervento, la zona viene valutata con immagini dettagliate. Trovare un setto prima dell’intervento e non durante è la differenza tra un intervento pianificato e uno improvvisato.',
        ],
      },
      {
        title: 'Quale tecnica richiede il tuo caso?',
        intro: ['Due approcci, scelti in base a quanti millimetri servono. Decidono le immagini, non le preferenze:'],
        cards: [
          { title: 'Rialzo crestale (interno)', text: 'Quando servono solo pochi millimetri. Il pavimento del seno si solleva attraverso lo stesso canale preparato per l’impianto, senza aperture separate. Meno invasivo, guarigione più rapida, spesso nella stessa seduta dell’impianto.' },
          { title: 'Rialzo con finestra laterale (esterno)', text: 'Quando serve più altezza. Si apre una piccola finestra sul lato dell’osso, sopra la linea gengivale; la membrana si solleva con cura sotto visione diretta e il materiale si posiziona sotto. Più prevedibile per guadagni importanti, con guarigione più lunga.' },
        ],
        outro: ['Spingere un rialzo crestale oltre i suoi limiti è il modo in cui le membrane si lacerano. Quando serve molta altezza, la finestra laterale è la scelta affidabile.'],
      },
    ],
    stats: [
      { value: '1', label: 'Seduta' },
      { value: '45–120 min', label: 'Durata' },
      { value: 'Locale', label: 'Anestesia' },
      { value: '8 mesi', label: 'Tra i viaggi' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Due viaggi, a 8 mesi di distanza',
    whatTitle: 'Cos’è il rialzo del seno?',
    what: [
      'Il rialzo del seno è un innesto osseo nella parte posteriore dell’arcata superiore. La membrana che riveste il pavimento del seno viene sollevata di qualche millimetro e lo spazio sotto riempito con osso artificiale o umano.',
      'Nei mesi successivi il tuo osso cresce attraverso il materiale e crea l’altezza di cui un impianto ha bisogno. Il seno resta chiuso e pienamente funzionale; si trova solo un po’ più in alto di prima.',
    ],
    calloutTitle: 'Non a tutti quelli a cui viene detto serve davvero',
    calloutText:
      'L’inserimento inclinato e gli impianti corti spesso raggiungono osso utilizzabile senza sollevare affatto il seno, per questo un precedente “le serve un rialzo del seno” merita di essere rivalutato. Ti diciamo apertamente cosa vale per te, anche quando la risposta è che ti serve davvero.',
    compareTitle: 'Rialzo del seno o un’altra strada?',
    compareIntro: 'Ci sono diversi modi per inserire impianti nella zona posteriore superiore:',
    compare: [
      { id: 'sinus-lift', tag: 'Questo trattamento', title: 'Rialzo del seno', text: 'Costruisce l’altezza mancante sotto il seno. Una seduta, poi circa 8 mesi fino al secondo viaggio.' },
      { id: 'all-on-4', tag: 'Senza rialzo', title: 'All-on-4', text: 'Per un’arcata completa, gli impianti posteriori si inclinano in avanti verso l’osso più denso ed evitano il seno.' },
      { id: 'bone-graft', tag: 'Quando manca larghezza', title: 'Innesto osseo', text: 'Quando il problema non è l’altezza sotto il seno ma la larghezza della cresta, l’osso si ricostruisce con un innesto.' },
    ],
    fitTitle: 'A chi serve un rialzo del seno?',
    fitIntro: 'Potresti aver bisogno di un rialzo del seno se:',
    fit: [
      'Ti è stato detto che non c’è abbastanza altezza ossea per impianti superiori',
      'I denti mancanti sono molari o premolari superiori, sotto il seno',
      'I denti mancano da anni e la cresta si è assottigliata',
      'Vuoi impianti invece di una protesi e bisogna prima costruire le fondamenta',
      'Un’altra clinica ha rifiutato di inserire impianti senza innesto',
      'Stai pianificando un’arcata completa e la parte superiore ha bisogno di altezza dietro',
    ],
    fitNote:
      'Il rialzo del seno non è mai l’obiettivo. È ciò che rende possibili gli impianti dove l’altezza ossea è finita, e se il tuo caso arriva allo stesso risultato senza, te lo diciamo.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'Il rialzo del seno è un’unica seduta in anestesia locale. Ciò che richiede tempo è la guarigione successiva:',
    steps: [
      { title: 'Radiografia e valutazione', text: 'Facciamo il piano preliminare dalla tua panoramica; in clinica le immagini mostrano l’altezza ossea e la forma del pavimento del seno. Questo decide l’approccio, la quantità di materiale e se gli impianti entrano nella stessa seduta.' },
      { title: 'Anestesia locale', text: 'La zona viene anestetizzata a fondo. Il rialzo del seno suona più spaventoso di quanto si senta: la membrana del seno non ha sensibilità al dolore e i pazienti riferiscono meno fastidio del previsto.' },
      { title: 'Sollevamento della membrana', text: 'La membrana del seno viene separata dall’osso e sollevata delicatamente. È la parte delicata dell’intervento e il motivo per cui si fa lentamente, non in fretta.' },
      { title: 'Posizionamento del materiale', text: 'Osso artificiale o umano viene posizionato nello spazio sotto la membrana sollevata. Nei mesi successivi il tuo osso ci cresce attraverso e forma l’altezza in cui si ancorerà l’impianto.' },
      { title: 'Guarigione e secondo viaggio', text: 'Circa 8 mesi perché il materiale si consolidi. Poi torni per gli impianti o, se sono stati inseriti nella stessa seduta, per le corone.' },
    ],
    whyBandTitle: 'Perché Veneer Clinic per il rialzo del seno?',
    whyBandText:
      'Ti diciamo se non ti serve. Il rialzo del seno aggiunge costi, mesi e un intervento chirurgico, e ci sono casi in cui l’inserimento inclinato o gli impianti corti arrivano allo stesso risultato senza. Quella valutazione si fa prima dalle tue immagini, non si scopre sulla poltrona.',
    caseText: 'Altezza ossea ricostruita per impianti superiori',
    faq: [
      { question: 'Quanto costa il rialzo del seno?', answer: 'Il rialzo del seno costa 500 €. Gli impianti che seguono sono a parte (MegaGen, 500 € per impianto). Il preventivo esatto ti viene inviato per iscritto dopo aver valutato la tua panoramica.' },
      { question: 'Mi serve davvero un rialzo del seno?', answer: 'Forse no, e vale la pena verificarlo bene prima di accettarlo. Il rialzo si consiglia quando non c’è abbastanza altezza ossea tra la cresta e il pavimento del seno per sostenere un impianto in sicurezza. Quella misura è reale, ma la conclusione dipende dalla tecnica. L’inserimento inclinato orienta l’impianto verso l’osso più denso davanti ed evita il seno; gli impianti corti funzionano quando l’altezza è modesta ma la larghezza buona. Così un paziente a cui sono stati prospettati due rialzi può scoprire che gliene serve uno, o nessuno. Preferiamo dirti che non ti serve un intervento piuttosto che vendertelo.' },
      { question: 'Il rialzo del seno fa male?', answer: 'Meno di quanto quasi tutti si aspettino. La zona viene anestetizzata localmente, e la membrana del seno non ha sensibilità al dolore: senti pressione e vibrazione nella guancia, non dolore. La maggior parte descrive l’esperienza come strana più che sgradevole. Dopo aspettati gonfiore e qualche livido sulla guancia per alcuni giorni e una sensazione di pienezza da quel lato, gestiti con i farmaci prescritti. La maggior parte torna ad attività leggere in due o tre giorni.' },
      { question: 'Quanto bisogna aspettare per gli impianti?', answer: 'Circa 8 mesi, per questo il trattamento si svolge in due viaggi. Il materiale non è ancora osso quando viene posizionato: è un’impalcatura attraverso cui cresce il tuo osso e che gradualmente sostituisce. Caricare un impianto troppo presto è uno dei pochi modi reali per perdere tutto il risultato, per questo i tempi non si negoziano. Ti diamo il calendario fin dall’inizio, così puoi pianificare il secondo viaggio.' },
      { question: 'L’impianto può entrare nella stessa seduta?', answer: 'A volte, ed è il risultato migliore quando è possibile. Funziona quando c’è abbastanza osso per tenere stabile l’impianto mentre il materiale matura attorno, di solito quattro o cinque millimetri o più. Allora rialzo e impianto si fanno insieme e nel secondo viaggio si applicano le corone. Dove l’altezza è minore, si fa prima il rialzo e gli impianti si inseriscono nel secondo viaggio.' },
      { question: 'Di cosa è fatto il materiale?', answer: 'Usiamo osso artificiale o umano, che funziona più da impalcatura che da riempitivo permanente. Mantiene lo spazio sotto la membrana sollevata mentre il tuo osso cresce dentro e attraverso, e viene gradualmente sostituito dal tuo osso vivo. Ciò che alla fine ancora l’impianto sei tu, non il materiale. Il materiale esatto è scritto nel preventivo, così come il sistema implantare; se hai preferenze sulla sua origine, diccelo alla valutazione.' },
      { question: 'È rischioso lavorare vicino al seno?', answer: 'È un lavoro delicato, ma di routine e molto documentato. Il rialzo non entra nel seno: solleva la membrana e posiziona il materiale sotto, così il seno resta chiuso e si trova solo qualche millimetro più in alto. L’abilità sta nel separare la membrana senza lacerarla, per questo l’intervento si fa lentamente e per questo conta conoscere in anticipo la forma del pavimento del seno e gli eventuali setti. Le complicanze sono rare nei casi pianificati.' },
      { question: 'Posso tornare a casa in aereo dopo l’intervento?', answer: 'Sì, ma non subito. Il cambio di pressione durante il volo può spostare il materiale prima che si stabilizzi, quindi prevedi di restare qualche giorno a Tirana dopo l’intervento. Quanti esattamente dipende dall’entità del rialzo, e te lo diciamo prima che prenoti il volo di ritorno. Prima della partenza si fa un breve controllo.' },
      { question: 'Com’è la ripresa?', answer: 'Semplice, con alcune istruzioni precise che contano più del solito. Gonfiore e lividi sulla guancia per qualche giorno, con il picco verso il secondo o terzo giorno. Non soffiare il naso per le prime due settimane, starnutisci a bocca aperta e non volare senza averlo confermato con noi: tutto questo cambia la pressione nel seno. Niente pesi né allenamenti intensi per una settimana. Per il resto la maggior parte torna alla normalità in due o tre giorni.' },
      { question: 'Influirà sulla respirazione o sui seni a lungo termine?', answer: 'No. Un rialzo del seno guarito non influisce sulla respirazione, sulla funzione dei seni o su come ti senti ogni giorno. Si guadagnano pochi millimetri sul pavimento di una cavità che resta pienamente funzionale. Nelle prime settimane può esserci una sensazione di pienezza mentre il gonfiore si attenua. Se hai una storia di sinusite cronica o ostruzione nasale, diccelo alla valutazione: non impedisce necessariamente il trattamento, ma influisce sui tempi e a volte significa trattare prima quella.' },
      { question: 'E se la membrana si lacera?', answer: 'È la complicanza più comune, di solito gestibile, ed è meglio saperlo prima. Le piccole lacerazioni spesso si riparano nella stessa seduta con una barriera riassorbibile e l’intervento prosegue come previsto. Dove la lacerazione è ampia, la decisione giusta è fermarsi, lasciar guarire la membrana, cosa che avviene in modo affidabile in pochi mesi, e ripetere il rialzo dopo. È deludente ma è la scelta corretta. Ti diciamo se succede e perché.' },
      { question: 'Il rialzo del seno dura?', answer: 'Sì. Una volta che il materiale si è consolidato nel tuo osso, si comporta come il resto dell’arcata. Ciò che lo mantiene è l’impianto: l’osso si conserva con il carico, e un impianto nel sito innestato stimola quell’osso come farebbe una radice naturale. Dove si posiziona materiale e non segue alcun impianto, l’osso nuovo si riassorbe gradualmente. Con impianti in posizione e gengive sane, il risultato è permanente.' },
      { question: 'Quanto devo restare a Tirana?', answer: 'L’intervento in sé è un’unica seduta di 45-120 minuti a seconda dell’approccio. Dopo resti qualche giorno per il controllo e finché volare è sicuro. Durante i mesi di consolidamento sei a casa e restiamo raggiungibili. Il secondo viaggio, dopo circa 8 mesi, è per gli impianti o le corone. Ti aiutiamo a organizzare entrambi i viaggi e il soggiorno.' },
    ],
  },
};

export default function SinusLiftPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="sinus-lift"
      heroImage={images.clinicGallery[3] ?? images.heroAfter}
      whatImage={images.surgery[10] ?? images.heroAfter}
    />
  );
}
