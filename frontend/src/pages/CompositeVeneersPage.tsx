import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Faseta kompoziti',
    eyebrow: 'Estetikë · Shqipëri',
    subtitle:
      'Një mënyrë pak invazive dhe e përballueshme për të përmirësuar formën, ngjyrën dhe simetrinë e dhëmbëve, e modeluar direkt në një seancë.',
    lead: 'Thyerje, hapësira dhe defekte të vogla të korrigjuara në një vizitë: pa laborator, vetëm rrëshirë e modeluar në ngjyrën e dhëmbit tuaj.',
    kicker: 'Faseta kompoziti në Tiranë, Shqipëri',
    articleTitle: 'Faseta kompoziti në Tiranë: një buzëqeshje e re në një takim të vetëm',
    intro: [
      'Fasetat e kompozitit modelohen me dorë direkt mbi dhëmbët tuaj, në karrige, në një vizitë të vetme. Nuk ka fazë laboratori dhe nuk ka pritje: vini me dhëmbët që keni dhe largoheni me ata që dëshironit.',
      'Kjo shpejtësi është arsyeja kryesore pse zgjidhen, por jo më e rëndësishmja. Meqë kompoziti i shtohet dhëmbit në vend që ta mbulojë, në shumë raste duhet hequr pak ose aspak smalt. Kur nuk hiqet asgjë, trajtimi është i kthyeshëm: diçka e rrallë në stomatologjinë estetike, dhe arsyeja pse kompoziti shpesh është hapi i parë i duhur për këdo që nuk është ende gati të angazhohet me qeramikën.',
      'Në Veneer Clinic në Tiranë, një fasetë kompoziti përfundon në një takim të vetëm dhe kushton 100 € për dhëmb, një e treta e një fasete e.max.',
    ],
    sections: [
      {
        title: 'Çfarë janë fasetat e kompozitit?',
        intro: [
          'Fasetat e kompozitit punohen me një rrëshirë kompozite në ngjyrën e dhëmbit, një përzierje grimcash të imëta qelqi në një matricë rrëshire, që aplikohet në sipërfaqen e përparme të dhëmbit në shtresa të holla. Çdo shtresë ngurtësohet me një llambë polimerizimi, dhe materiali skalitet, konturohet dhe lustrohet direkt mbi dhëmb derisa forma të jetë e saktë.',
          'I gjithë procesi ndodh në gojë dhe jo në laborator. Ky është ndryshimi thelbësor nga fasetat qeramike, dhe gjithçka tjetër rrjedh prej tij: shpejtësia, kostoja më e ulët, kthyeshmëria dhe jetëgjatësia më e shkurtër.',
          'Trajtimi quhet shpesh edhe bonding dentar, dhe të dy termat përshkruajnë të njëjtën gjë. Për “bonding” flitet zakonisht kur riparohen një ose dy dhëmbë, ndërsa për “faseta kompoziti” kur disa dhëmbë të përparmë riformësohen bashkë si një set.',
        ],
      },
      {
        title: 'Çfarë mund të korrigjojnë fasetat e kompozitit',
        points: [
          { title: 'Skaje të thyera ose të konsumuara,', text: 'sidomos te dhëmbët e përparmë, ku një riparim i vogël rikthen konturin origjinal.' },
          { title: 'Hapësira mes dhëmbëve:', text: 'hapësira të vogla deri të mesme që mbyllen duke shtuar material te dhëmbët fqinjë.' },
          { title: 'Forma të parregullta ose të konsumuara:', text: 'dhëmbë që janë shkurtuar me vite, ose që nuk kanë qenë kurrë në harmoni me fqinjët.' },
          { title: 'Njolla sipërfaqësore dhe shenja të lokalizuara', text: 'që zbardhimi nuk arrin t’i njëtrajtësojë.' },
          { title: 'Dhëmbë lehtësisht të rrotulluar ose të futur brenda,', text: 'ku shtimi i materialit në sipërfaqe përmirëson rreshtimin pa ortodonci.' },
          { title: 'Kompozit i vjetër', text: 'nga punime të mëparshme, i njollosur në buzë dhe që duhet zëvendësuar.' },
        ],
        outro: [
          'Kompoziti është më pak i parashikueshëm mbi njollat e thella të brendshme, si njollat e forta nga tetraciklina ose një dhëmb i errët i mjekuar në kanal. Kompoziti është i tejdukshëm, kështu që një dhëmb shumë i errët mund të duket përmes tij nëse shtresëzimi nuk ndërtohet për ta mbuluar. Qeramika i trajton këto raste në mënyrë më të besueshme, dhe në vizitë ju themi në cilin grup bëjnë pjesë dhëmbët tuaj.',
        ],
      },
      {
        title: 'Kompozit apo qeramikë: një krahasim i sinqertë',
        intro: ['Të dyja janë trajtime të mira. U përshtaten njerëzve, afateve dhe buxheteve të ndryshme.'],
        cards: [
          { title: 'Kompoziti është zgjedhja më e mirë kur', text: 'doni rezultatin në një takim, kur preferoni të mos bëni diçka të pakthyeshme, kur duhen trajtuar vetëm pak dhëmbë ose kur buxheti ka rëndësi. Është gjithashtu pika më e arsyeshme e nisjes nëse jeni i ri ose nuk jeni i sigurt sa larg doni të shkoni: mund të kaloni gjithmonë te qeramika më vonë.' },
          { title: 'Qeramika, pra e.max, është zgjedhja më e mirë kur', text: 'doni jetëgjatësinë maksimale, kur dhëmbët janë shumë të errët dhe duhen mbuluar, kur doni një rezultat që nuk njollet ose kur riformësoni gjithë buzëqeshjen dhe doni rezultatin më të qëndrueshëm.' },
        ],
      },
      {
        title: 'Ndryshimet praktike',
        points: [
          { title: 'Jetëgjatësia.', text: 'Kompoziti zakonisht zgjat 4–8 vjet; qeramika e.max zakonisht 10–15 vjet ose më shumë.' },
          { title: 'Njollat.', text: 'Kompoziti është poroz dhe me kohën merr ngjyrë nga kafeja, çaji, vera e kuqe dhe duhani. Qeramika nuk njollet.' },
          { title: 'Riparimi.', text: 'Këtu fiton kompoziti. Një fasetë kompoziti e thyer zakonisht riparohet në karrige brenda pak minutash. Një fasetë qeramike e thyer normalisht duhet ribërë.' },
          { title: 'Përgatitja.', text: 'Kompoziti shpesh kërkon pak ose aspak heqje smalti. Qeramika kërkon një sasi të vogël, dhe kjo është e pakthyeshme.' },
          { title: 'Koha.', text: 'Kompoziti: një takim. Qeramika: përgatitje, punë laboratori dhe vendosje.' },
          { title: 'Kostoja.', text: 'Kompoziti kushton 100 € për dhëmb, e.max 300 €.' },
        ],
        outro: [
          'Asnjëri nuk është version i dobët i tjetrit. Kompoziti nuk është “qeramikë e lirë”: është një trajtim tjetër me përparësi dhe kufizime të tjera, dhe në shumë raste është përgjigjja e duhur.',
        ],
      },
      {
        title: 'Kush është kandidat i mirë?',
        intro: [
          'Shumica e njerëzve me dhëmbë dhe mishra të shëndetshëm. Ajo që ka rëndësi poshtë është e njëjtë si për çdo punë estetike: kariesi aktiv, inflamacioni i mishrave apo një restaurim i vjetër që po dështon trajtohen më parë, sepse kompoziti i ngjitur mbi një bazë të paqëndrueshme nuk zgjat.',
          'Dy gjëra që ia vlen t’i dini para se të vendosni:',
        ],
        inline: [
          { title: 'Nëse i shtrëngoni ose i kërcëllini dhëmbët,', text: 'kompoziti thyhet më lehtë se qeramika. Mbetet një opsion i vlefshëm, një mbrojtëse nate e ruan dhe riparimet janë të shpejta, por duhet ta dini që në fillim.' },
          { title: 'Nëse pini duhan ose shumë kafe, çaj apo verë të kuqe,', text: 'kompoziti do të çngjyroset më shpejt. Seancat e rregullta të higjienës ndihmojnë shumë, dhe lustrimi rikthen pjesën më të madhe të shkëlqimit origjinal.' },
        ],
      },
      {
        title: 'Fillimisht zbardhimi, pastaj përshtatja e ngjyrës',
        intro: [
          'Kompoziti nuk zbardhet. As kurorat, fasetat qeramike apo mbushjet: nuanca fiksohet në momentin kur vendoset materiali.',
          'Prandaj, nëse po mendoni për zbardhim, bëjeni fillimisht. Zbardhni, prisni që nuanca të stabilizohet, pastaj kompoziti përshtatet me bazën e re më të ndritshme. Nëse e bëni në rendin e kundërt, dhëmbët natyralë çelen ndërsa kompoziti mbetet siç ishte, dhe e vetmja zgjidhje është zëvendësimi i tij.',
          'Na e thoni në fazën e planifikimit dhe i rendisim takimet siç duhet.',
        ],
      },
      {
        title: 'Si funksionon trajtimi te ne',
        inline: [
          { title: 'Vizita dhe vlerësimi i buzëqeshjes.', text: 'Dentisti ekzaminon dhëmbët, mishrat dhe kafshimin dhe flet me ju për atë që doni të ndryshoni. Këtu konfirmojmë nëse fasetat e kompozitit janë trajtimi i duhur për rastin tuaj apo nëse qeramika do t’ju shërbente më mirë.' },
          { title: 'Planifikimi i buzëqeshjes.', text: 'Forma, përmasat dhe pamja e dhëmbëve planifikohen sipas tipareve të fytyrës dhe buzëqeshjes suaj natyrale, dhe ngjyra vendoset bashkë me ju para se të vendoset çdo material.' },
          { title: 'Zgjedhja e ngjyrës dhe përgatitja.', text: 'Ngjyra përputhet me dhëmbët përreth dhe sipërfaqja e dhëmbit pastrohet dhe kondicionohet që kompoziti të ngjitet në mënyrë të besueshme. Në shumë raste nuk hiqet fare smalt.' },
          { title: 'Aplikimi i kompozitit.', text: 'Rrëshira në ngjyrën e dhëmbit aplikohet në shtresa mbi dhëmbët e zgjedhur dhe modelohet direkt mbi ta, me çdo shtresë të ngurtësuar me llambë para se të ndërtohet tjetra.' },
          { title: 'Modelimi dhe lustrimi.', text: 'Kur forma është e saktë, kompoziti rafinohet, konturohet dhe lustrohet deri në një sipërfaqe të lëmuar dhe natyrale. Lustrimi është ajo që e pengon kompozitin të duket i sheshtë, prandaj nuk bëhet me nxitim.' },
          { title: 'Kontrolli përfundimtar.', text: 'Kafshimi dhe pamja e përgjithshme e buzëqeshjes kontrollohen bashkë, me rregullimet e fundit para se të largoheni.' },
        ],
      },
      {
        title: 'Pse Veneer Clinic',
        inline: [
          { title: 'Kompoziti është aftësi, jo rrugë e shkurtër.', text: 'Rezultati varet pothuajse tërësisht nga dora që e modelon: shtresëzimi, konturimi dhe lustrimi janë ato që e dallojnë një kompozit që duket natyral nga një që duket si riparim.' },
          { title: 'Ju themi kur qeramika është opsioni më i mirë.', text: 'Në disa raste është, dhe duhet ta dini para se të vendosni, jo pas.' },
          { title: 'Një takim i vetëm.', text: 'Pa fazë laboratori dhe pa vizitë të dytë: largoheni po atë ditë me rezultatin e përfunduar.' },
          { title: 'Në rendin e duhur me zbardhimin.', text: 'Nëse një nuancë më e ndritshme është pjesë e planit tuaj, zbardhimi vjen i pari.' },
          { title: 'Pas trajtimit.', text: 'Ju shpjegojmë si ta kujdeseni rezultatin para se të largoheni, dhe lustrimi në seancat e higjienës e mban kompozitin si të ri.' },
        ],
      },
      {
        title: 'Kompozit, zbardhim dhe higjienë në të njëjtën vizitë',
        intro: [
          'Meqë fasetat e kompozitit përfundojnë në një takim të vetëm, kombinohen lehtë me një seancë higjiene ose zbardhimi. Rendi është i thjeshtë: fillimisht pastrimi, pastaj zbardhimi nëse e dëshironi, dhe në fund kompoziti i përshtatur me nuancën e re.',
        ],
      },
      {
        title: 'Sa zgjasin fasetat e kompozitit?',
        intro: [
          'Zakonisht katër deri në tetë vjet, në varësi të zakoneve dhe kujdesit. Nuk dështojnë papritur: humbasin gradualisht shkëlqimin dhe marrin ngjyrë në buzë, dhe zakonisht rifreskohen në vend që të zëvendësohen plotësisht.',
          'Çfarë ua zgjat jetën: larja e përditshme dhe pastrimi mes dhëmbëve, seancat e rregullta të higjienës, një mbrojtëse nate nëse i shtrëngoni dhëmbët, shmangia e ngarkesave pikësore si akulli dhe paketimet, dhe kufizimi i asaj që njollos: kafe, çaj, verë e kuqe dhe duhan.',
          'Lustrimi gjatë seancave të higjienës rikthen pjesën më të madhe të shkëlqimit origjinal dhe është gjëja më efektive për ta mbajtur kompozitin si të ri.',
        ],
      },
    ],
    stats: [
      { value: '1–2 ditë', label: 'Kohëzgjatja e trajtimit' },
      { value: '1', label: 'Seancë' },
      { value: '1', label: 'Udhëtim' },
      { value: '4–8 vjet', label: 'Jetëgjatësia tipike' },
    ],
    priceTitle: 'Çmimi për dhëmb',
    priceNote: 'Pa laborator, gati në një seancë',
    whatTitle: 'Çfarë janë fasetat e kompozitit?',
    what: [
      'Fasetat e kompozitit janë një shtresë e hollë rrëshire në ngjyrën e dhëmbit, e skalitur me dorë direkt mbi sipërfaqen e përparme të dhëmbëve, në karrige, në një vizitë të vetme. Ndryshe nga fasetat qeramike, nuk përfshihet laboratori, dhe zakonisht hiqet shumë pak smalt natyral, ose aspak.',
      'Rrëshira ndërtohet në shtresa, secila e modeluar dhe e ngurtësuar me një llambë polimerizimi para se të shtohet tjetra, pastaj lustrohet deri në një shkëlqim natyral. Meqë gjithçka ndodh në një takim, largoheni po atë ditë me rezultatin e përfunduar.',
    ],
    calloutTitle: 'Kompoziti është korrigjim, jo zgjidhje e përhershme',
    calloutText:
      'Është një opsion i shkëlqyer me kosto të ulët për korrigjime të vogla, por nëse kërkoni një rezultat të përhershëm, fasetat e.max e mbajnë ngjyrën dhe shkëlqimin shumë më gjatë.',
    compareTitle: 'Opsionet sipas shtrirjes',
    compareIntro: 'Fasetat e kompozitit mund të mbulojnë një dhëmb të vetëm ose gjithë vijën e buzëqeshjes:',
    compare: [
      { id: 'veneer-composite', tag: 'Një dhëmb', title: 'Fasetë kompoziti individuale', text: 'Korrigjon formën, ngjyrën ose simetrinë e një dhëmbi të vetëm.' },
      { id: 'veneer-composite', tag: 'Buzëqeshje e plotë', title: 'Faseta kompoziti për gjithë harkun', text: 'Riformëson disa dhëmbë bashkë për një vijë buzëqeshjeje të plotë dhe të harmonishme.', priceText: '800–1.000 € · 8–10 dhëmbë' },
    ],
    fitTitle: 'Për kë janë fasetat e kompozitit?',
    fitIntro: 'Fasetat e kompozitit ia vlen t’i merrni në konsideratë nëse doni të korrigjoni:',
    fit: ['Hapësira mes dhëmbëve', 'Dhëmbë të konsumuar ose jo në përpjesëtim', 'Papërsosmëri të vogla estetike', 'Buzëqeshje të parregullt ose asimetrike'],
    fitNote:
      'Fasetat e kompozitit janë një fillim i shkëlqyer me kosto më të ulët, por i rezistojnë më pak njollave dhe zgjasin më pak se fasetat e.max. Nëse doni një rezultat më të qëndrueshëm, i shohim bashkë të dyja opsionet.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'Fasetat e kompozitit zakonisht përfundojnë në një vizitë të vetme, nga fillimi në fund: pa laborator dhe pa takim të dytë.',
    steps: [
      { title: 'Vizita dhe vlerësimi', text: 'Dentisti ekzaminon dhëmbët, mishrat dhe kafshimin dhe flet me ju për objektivat estetike. Këtu konfirmojmë nëse fasetat e kompozitit janë trajtimi i duhur.' },
      { title: 'Planifikimi i buzëqeshjes', text: 'Forma, përmasat dhe pamja që dëshironi për dhëmbët diskutohen dhe planifikohen sipas tipareve të fytyrës dhe buzëqeshjes suaj natyrale.' },
      { title: 'Ngjyra dhe përgatitja', text: 'Ngjyra përputhet me dhëmbët përreth dhe sipërfaqja pastrohet e kondicionohet që kompoziti të ngjitet mirë. Në shumë raste nuk hiqet smalt.' },
      { title: 'Aplikimi i kompozitit', text: 'Një rrëshirë kompozite në ngjyrën e dhëmbit aplikohet në shtresa dhe modelohet direkt mbi dhëmb, me çdo shtresë të ngurtësuar me llambë para tjetrës.' },
      { title: 'Modelimi dhe lustrimi', text: 'Kur arrihet forma e dëshiruar, kompoziti rafinohet, konturohet dhe lustrohet deri në një sipërfaqe të lëmuar e natyrale. Lustrimi nuk bëhet me nxitim.' },
      { title: 'Rezultati përfundimtar', text: 'Kafshimi dhe pamja e përgjithshme e buzëqeshjes kontrollohen bashkë, me rregullimet e fundit para se të largoheni.' },
    ],
    whyBandTitle: 'Pse të zgjidhni Veneer Clinic për fasetat e kompozitit?',
    whyBandText:
      'Fasetat e kompozitit punohen tërësisht me dorë: rezultati varet nga aftësia e dentistit që modelon dhe lustron çdo shtresë në karrige. Ekipi ynë e formëson çdo fasetë sipas përmasave të fytyrës suaj, jo sipas një kallëpi standard.',
    caseText: 'Buzëqeshje e përmirësuar me faseta kompoziti',
    faq: [
      { question: 'A janë të kthyeshme fasetat e kompozitit?', answer: 'Shpesh po. Kur nuk është hequr smalt, kompoziti mund të hiqet dhe dhëmbi kthehet në gjendjen e mëparshme. Kjo është një nga përparësitë kryesore ndaj qeramikës. Kur është përgatitur një sasi e vogël smalti, nuk është e kthyeshme: ju themi cila vlen në rastin tuaj.' },
      { question: 'Sa zgjat takimi?', answer: 'Varet nga sa dhëmbë trajtohen. Një dhëmb i vetëm i thyer është i shpejtë; një set dhëmbësh të përparmë kërkon dukshëm më shumë kohë, sepse secili shtresëzohet dhe modelohet veçmas. Ju japim një kohë realiste kur planifikojmë rastin.' },
      { question: 'Sa kushton një fasetë kompoziti?', answer: '100 € për dhëmb. Një buzëqeshje e plotë me 8–10 dhëmbë kushton zakonisht 800–1.000 €. Dërgoni një grafi panoramike dhe foto, dhe ju japim një ofertë para se të udhëtoni.' },
      { question: 'A njollosen fasetat e kompozitit?', answer: 'Gradualisht po: kompoziti është më poroz se qeramika dhe me vite merr ngjyrë nga kafeja, çaji, vera e kuqe dhe duhani. Seancat e rregullta të higjienës dhe lustrimi e mbajnë këtë nën kontroll.' },
      { question: 'Çfarë ndodh nëse njëra thyhet?', answer: 'Zakonisht riparohet në karrige në një vizitë të shkurtër, pa ribërë të gjithë fasetën. Kjo është një përparësi reale praktike ndaj qeramikës, që normalisht duhet zëvendësuar.' },
      { question: 'A funksionon zbardhimi mbi to?', answer: 'Jo. Kompoziti e ruan nuancën me të cilën u vendos. Nëse doni dhëmbë më të bardhë, zbardhni fillimisht dhe pastaj e përshtatim kompozitin.' },
      { question: 'Kompozit apo e.max: cilin të zgjedh?', answer: 'Varet nga sa doni të zgjasë rezultati, sa duhen mbuluar dhëmbët, buxheti dhe afatet tuaja. Të dyja janë trajtime të mira. Ju japim një rekomandim të sinqertë për dhëmbët tuaj, jo një përgjigje standarde.' },
      { question: 'A dhemb?', answer: 'Zakonisht nuk ka asgjë për të anestezuar, sepse në shumë raste nuk hiqet smalt. Kur duhet një përgatitje e vogël, përdoret anestezi lokale.' },
      { question: 'A mund t’i zëvendësoj më vonë me faseta e.max?', answer: 'Po. Shumë pacientë fillojnë me kompozit dhe kalojnë te e.max vite më vonë. Fillimi me kompozit e mban të hapur këtë mundësi, dhe pikërisht për këtë u përshtatet atyre që nuk janë ende gati të angazhohen.' },
    ],
  },
  en: {
    name: 'Composite Veneers',
    eyebrow: 'Aesthetics · Albania',
    subtitle:
      'A minimally invasive, affordable way to improve the shape, colour and symmetry of your teeth, sculpted directly in a single session.',
    lead: 'Chips, gaps and small flaws corrected in one visit: no laboratory, just resin sculpted in the colour of your own teeth.',
    kicker: 'Composite Veneers in Tirana, Albania',
    articleTitle: 'Composite veneers in Tirana: a new smile in a single appointment',
    intro: [
      'Composite veneers are sculpted by hand directly on your teeth, in the chair, in a single visit. There is no laboratory stage and no waiting: you arrive with the teeth you have and leave with the ones you wanted.',
      'That speed is the main reason people choose them, but not the most important one. Because composite is added to the tooth rather than covering it, in many cases little or no enamel needs to be removed. When nothing is removed, the treatment is reversible: something rare in cosmetic dentistry, and the reason composite is often the right first step for anyone not yet ready to commit to ceramic.',
      'At Veneer Clinic in Tirana, a composite veneer is completed in a single appointment and costs €100 per tooth, a third of an E.max veneer.',
    ],
    sections: [
      {
        title: 'What are composite veneers?',
        intro: [
          'Composite veneers are made from a tooth-coloured composite resin, a mix of fine glass particles in a resin matrix, applied to the front surface of the tooth in thin layers. Each layer is hardened with a curing light, and the material is sculpted, contoured and polished directly on the tooth until the shape is exactly right.',
          'The whole process happens in the mouth, not in a laboratory. That is the fundamental difference from ceramic veneers, and everything else follows from it: the speed, the lower cost, the reversibility and the shorter lifespan.',
          'The treatment is also often called dental bonding, and both terms describe the same thing. “Bonding” is usually used when one or two teeth are repaired, while “composite veneers” is used when several front teeth are reshaped together as a set.',
        ],
      },
      {
        title: 'What composite veneers can correct',
        points: [
          { title: 'Chipped or worn edges,', text: 'especially on the front teeth, where a small repair restores the original contour.' },
          { title: 'Gaps between teeth:', text: 'small to moderate spaces closed by adding material to the neighbouring teeth.' },
          { title: 'Irregular or worn shapes:', text: 'teeth that have shortened over the years, or that were never in harmony with their neighbours.' },
          { title: 'Surface stains and localised marks', text: 'that whitening cannot even out.' },
          { title: 'Slightly rotated or tucked-in teeth,', text: 'where adding material to the surface improves alignment without orthodontics.' },
          { title: 'Old composite', text: 'from previous work, stained at the edges and in need of replacement.' },
        ],
        outro: [
          'Composite is less predictable over deep internal staining, such as heavy tetracycline stains or a dark root-treated tooth. Composite is translucent, so a very dark tooth can show through it unless the layering is built to mask it. Ceramic handles these cases more reliably, and at the visit we tell you which group your teeth belong to.',
        ],
      },
      {
        title: 'Composite or ceramic: an honest comparison',
        intro: ['Both are good treatments. They suit different people, timelines and budgets.'],
        cards: [
          { title: 'Composite is the better choice when', text: 'you want the result in one appointment, you prefer not to do anything irreversible, only a few teeth need treatment or budget matters. It is also the most sensible starting point if you are young or unsure how far you want to go: you can always move to ceramic later.' },
          { title: 'Ceramic, meaning E.max, is the better choice when', text: 'you want maximum longevity, the teeth are very dark and need masking, you want a result that does not stain, or you are reshaping the whole smile and want the most durable result.' },
        ],
      },
      {
        title: 'The practical differences',
        points: [
          { title: 'Lifespan.', text: 'Composite usually lasts 4–8 years; E.max ceramic usually 10–15 years or more.' },
          { title: 'Staining.', text: 'Composite is porous and picks up colour over time from coffee, tea, red wine and tobacco. Ceramic does not stain.' },
          { title: 'Repair.', text: 'This is where composite wins. A chipped composite veneer can usually be repaired in the chair within minutes. A chipped ceramic veneer normally has to be remade.' },
          { title: 'Preparation.', text: 'Composite often needs little or no enamel removal. Ceramic needs a small amount, and that is irreversible.' },
          { title: 'Time.', text: 'Composite: one appointment. Ceramic: preparation, lab work and fitting.' },
          { title: 'Cost.', text: 'Composite costs €100 per tooth, E.max €300.' },
        ],
        outro: [
          'Neither is a weaker version of the other. Composite is not “cheap ceramic”: it is a different treatment with different advantages and limitations, and in many cases it is the right answer.',
        ],
      },
      {
        title: 'Who is a good candidate?',
        intro: [
          'Most people with healthy teeth and gums. What matters underneath is the same as for any cosmetic work: active decay, gum inflammation or an old failing restoration are treated first, because composite bonded to an unstable base does not last.',
          'Two things worth knowing before you decide:',
        ],
        inline: [
          { title: 'If you clench or grind your teeth,', text: 'composite chips more easily than ceramic. It remains a valid option, a night guard protects it and repairs are quick, but you should know from the start.' },
          { title: 'If you smoke or drink a lot of coffee, tea or red wine,', text: 'composite will discolour faster. Regular hygiene appointments help a lot, and polishing restores most of the original shine.' },
        ],
      },
      {
        title: 'Whitening first, then colour matching',
        intro: [
          'Composite does not whiten. Neither do crowns, ceramic veneers or fillings: the shade is fixed the moment the material is placed.',
          'So if you are thinking about whitening, do it first. Whiten, let the shade settle, then the composite is matched to the new, brighter base. Do it the other way round and your natural teeth lighten while the composite stays as it was, and the only fix is to replace it.',
          'Tell us at the planning stage and we will order the appointments correctly.',
        ],
      },
      {
        title: 'How treatment works with us',
        inline: [
          { title: 'Visit and smile assessment.', text: 'The dentist examines your teeth, gums and bite and talks with you about what you want to change. This is where we confirm whether composite veneers are the right treatment for your case or whether ceramic would serve you better.' },
          { title: 'Smile planning.', text: 'The shape, proportions and look of the teeth are planned around your facial features and natural smile, and the shade is decided with you before any material is placed.' },
          { title: 'Shade selection and preparation.', text: 'The shade is matched to the surrounding teeth and the tooth surface is cleaned and conditioned so the composite bonds reliably. In many cases no enamel is removed at all.' },
          { title: 'Applying the composite.', text: 'Tooth-coloured resin is applied in layers to the chosen teeth and sculpted directly on them, with each layer cured by light before the next is built.' },
          { title: 'Shaping and polishing.', text: 'Once the shape is right, the composite is refined, contoured and polished to a smooth, natural surface. Polishing is what keeps composite from looking flat, so it is never rushed.' },
          { title: 'Final check.', text: 'Your bite and the overall look of your smile are checked together, with final adjustments before you leave.' },
        ],
      },
      {
        title: 'Why Veneer Clinic',
        inline: [
          { title: 'Composite is a skill, not a shortcut.', text: 'The result depends almost entirely on the hand that sculpts it: layering, contouring and polishing are what separate composite that looks natural from composite that looks like a repair.' },
          { title: 'We tell you when ceramic is the better option.', text: 'In some cases it is, and you should know before you decide, not after.' },
          { title: 'A single appointment.', text: 'No lab stage and no second visit: you leave the same day with the finished result.' },
          { title: 'In the right order with whitening.', text: 'If a brighter shade is part of your plan, whitening comes first.' },
          { title: 'After treatment.', text: 'We explain how to care for the result before you leave, and polishing at hygiene appointments keeps the composite looking new.' },
        ],
      },
      {
        title: 'Composite, whitening and hygiene in the same visit',
        intro: [
          'Because composite veneers are finished in a single appointment, they combine easily with a hygiene or whitening session. The order is simple: cleaning first, then whitening if you want it, and finally composite matched to the new shade.',
        ],
      },
      {
        title: 'How long do composite veneers last?',
        intro: [
          'Usually four to eight years, depending on habits and care. They do not fail suddenly: they gradually lose their shine and pick up colour at the edges, and are usually refreshed rather than fully replaced.',
          'What extends their life: daily brushing and cleaning between the teeth, regular hygiene appointments, a night guard if you grind, avoiding point loads such as ice and packaging, and limiting what stains: coffee, tea, red wine and tobacco.',
          'Polishing during hygiene appointments restores most of the original shine and is the most effective way to keep composite looking new.',
        ],
      },
    ],
    stats: [
      { value: '1–2 days', label: 'Treatment time' },
      { value: '1', label: 'Session' },
      { value: '1', label: 'Trip' },
      { value: '4–8 yrs', label: 'Typical lifespan' },
    ],
    priceTitle: 'Price per tooth',
    priceNote: 'No lab, finished in one session',
    whatTitle: 'What are composite veneers?',
    what: [
      'Composite veneers are a thin layer of tooth-coloured resin, hand-sculpted directly on the front surface of the teeth, in the chair, in a single visit. Unlike ceramic veneers, no laboratory is involved, and usually very little natural enamel is removed, or none at all.',
      'The resin is built up in layers, each one shaped and hardened with a curing light before the next is added, then polished to a natural shine. Because everything happens in one appointment, you leave the same day with the finished result.',
    ],
    calloutTitle: 'Composite is a correction, not a permanent solution',
    calloutText:
      'It is an excellent low-cost option for small corrections, but if you want a permanent result, E.max veneers keep their colour and shine much longer.',
    compareTitle: 'Options by scope',
    compareIntro: 'Composite veneers can cover a single tooth or the whole smile line:',
    compare: [
      { id: 'veneer-composite', tag: 'One tooth', title: 'Individual composite veneer', text: 'Corrects the shape, colour or symmetry of a single tooth.' },
      { id: 'veneer-composite', tag: 'Full smile', title: 'Full-arch composite veneers', text: 'Reshapes several teeth together for a complete, harmonious smile line.', priceText: '€800–1,000 · 8–10 teeth' },
    ],
    fitTitle: 'Who are composite veneers for?',
    fitIntro: 'Composite veneers are worth considering if you want to correct:',
    fit: ['Gaps between teeth', 'Worn or disproportionate teeth', 'Minor aesthetic imperfections', 'An irregular or asymmetric smile'],
    fitNote:
      'Composite veneers are an excellent, lower-cost start, but they resist staining less and last less long than E.max veneers. If you want a more durable result, we will look at both options together.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'Composite veneers are usually completed in a single visit, from start to finish: no laboratory and no second appointment.',
    steps: [
      { title: 'Visit and assessment', text: 'The dentist examines your teeth, gums and bite and talks with you about your aesthetic goals. This is where we confirm whether composite veneers are the right treatment.' },
      { title: 'Smile planning', text: 'The shape, proportions and look you want for your teeth are discussed and planned around your facial features and natural smile.' },
      { title: 'Shade and preparation', text: 'The shade is matched to the surrounding teeth and the surface is cleaned and conditioned so the composite bonds well. In many cases no enamel is removed.' },
      { title: 'Applying the composite', text: 'A tooth-coloured composite resin is applied in layers and sculpted directly on the tooth, with each layer light-cured before the next.' },
      { title: 'Shaping and polishing', text: 'Once the desired shape is reached, the composite is refined, contoured and polished to a smooth, natural surface. Polishing is never rushed.' },
      { title: 'Final result', text: 'Your bite and the overall look of your smile are checked together, with final adjustments before you leave.' },
    ],
    whyBandTitle: 'Why choose Veneer Clinic for composite veneers?',
    whyBandText:
      'Composite veneers are made entirely by hand: the result depends on the skill of the dentist who sculpts and polishes each layer in the chair. Our team shapes every veneer to your facial proportions, not to a standard template.',
    caseText: 'Smile improved with composite veneers',
    faq: [
      { question: 'Are composite veneers reversible?', answer: 'Often, yes. When no enamel has been removed, the composite can be taken off and the tooth returns to its previous state. This is one of the main advantages over ceramic. When a small amount of enamel has been prepared, it is not reversible: we tell you which applies in your case.' },
      { question: 'How long does the appointment take?', answer: 'It depends on how many teeth are treated. A single chipped tooth is quick; a set of front teeth takes considerably longer, because each one is layered and sculpted separately. We give you a realistic time when we plan your case.' },
      { question: 'How much does a composite veneer cost?', answer: '€100 per tooth. A full smile of 8–10 teeth usually costs €800–1,000. Send us a panoramic X-ray and photos and we will give you a quote before you travel.' },
      { question: 'Do composite veneers stain?', answer: 'Gradually, yes: composite is more porous than ceramic and over the years picks up colour from coffee, tea, red wine and tobacco. Regular hygiene appointments and polishing keep this under control.' },
      { question: 'What happens if one chips?', answer: 'It can usually be repaired in the chair in a short visit, without remaking the whole veneer. This is a real practical advantage over ceramic, which normally has to be replaced.' },
      { question: 'Does whitening work on them?', answer: 'No. Composite keeps the shade it was placed in. If you want whiter teeth, whiten first and then we match the composite.' },
      { question: 'Composite or E.max: which should I choose?', answer: 'It depends on how long you want the result to last, how much the teeth need masking, your budget and your timeline. Both are good treatments. We give you an honest recommendation for your teeth, not a standard answer.' },
      { question: 'Does it hurt?', answer: 'Usually there is nothing to numb, because in many cases no enamel is removed. When a small preparation is needed, local anaesthesia is used.' },
      { question: 'Can I replace them with E.max veneers later?', answer: 'Yes. Many patients start with composite and move to E.max years later. Starting with composite keeps that option open, which is exactly why it suits people who are not yet ready to commit.' },
    ],
  },
  de: {
    name: 'Komposit-Veneers',
    eyebrow: 'Ästhetik · Albanien',
    subtitle:
      'Eine minimalinvasive, günstige Möglichkeit, Form, Farbe und Symmetrie Ihrer Zähne zu verbessern, direkt in einer einzigen Sitzung modelliert.',
    lead: 'Absplitterungen, Lücken und kleine Makel in einem Termin korrigiert: kein Labor, nur Kunststoff, modelliert in der Farbe Ihrer eigenen Zähne.',
    kicker: 'Komposit-Veneers in Tirana, Albanien',
    articleTitle: 'Komposit-Veneers in Tirana: ein neues Lächeln in einem einzigen Termin',
    intro: [
      'Komposit-Veneers werden von Hand direkt auf Ihren Zähnen modelliert, auf dem Behandlungsstuhl, in einem einzigen Termin. Es gibt keine Laborphase und keine Wartezeit: Sie kommen mit den Zähnen, die Sie haben, und gehen mit denen, die Sie sich gewünscht haben.',
      'Diese Schnelligkeit ist der Hauptgrund für die Wahl, aber nicht der wichtigste. Da Komposit auf den Zahn aufgetragen wird, statt ihn zu ummanteln, muss in vielen Fällen wenig oder gar kein Schmelz abgetragen werden. Wird nichts abgetragen, ist die Behandlung umkehrbar: etwas Seltenes in der ästhetischen Zahnmedizin und der Grund, warum Komposit oft der richtige erste Schritt für alle ist, die sich noch nicht für Keramik entscheiden möchten.',
      'In der Veneer Clinic in Tirana ist ein Komposit-Veneer in einem einzigen Termin fertig und kostet 100 € pro Zahn, ein Drittel eines E.max Veneers.',
    ],
    sections: [
      {
        title: 'Was sind Komposit-Veneers?',
        intro: [
          'Komposit-Veneers bestehen aus zahnfarbenem Kompositkunststoff, einer Mischung feiner Glaspartikel in einer Kunststoffmatrix, der in dünnen Schichten auf die Vorderseite des Zahns aufgetragen wird. Jede Schicht wird mit einer Polymerisationslampe gehärtet, und das Material wird direkt auf dem Zahn modelliert, konturiert und poliert, bis die Form exakt stimmt.',
          'Der gesamte Prozess findet im Mund statt, nicht im Labor. Das ist der grundlegende Unterschied zu Keramik-Veneers, und alles andere folgt daraus: die Schnelligkeit, die geringeren Kosten, die Umkehrbarkeit und die kürzere Lebensdauer.',
          'Die Behandlung wird oft auch Bonding genannt, und beide Begriffe beschreiben dasselbe. Von „Bonding“ spricht man meist, wenn ein oder zwei Zähne repariert werden, von „Komposit-Veneers“, wenn mehrere Frontzähne gemeinsam als Set umgeformt werden.',
        ],
      },
      {
        title: 'Was Komposit-Veneers korrigieren können',
        points: [
          { title: 'Abgebrochene oder abgenutzte Kanten,', text: 'besonders an den Frontzähnen, wo eine kleine Reparatur die ursprüngliche Kontur wiederherstellt.' },
          { title: 'Lücken zwischen den Zähnen:', text: 'kleine bis mittlere Lücken, die durch Materialaufbau an den Nachbarzähnen geschlossen werden.' },
          { title: 'Unregelmäßige oder abgenutzte Formen:', text: 'Zähne, die über die Jahre kürzer geworden sind oder nie mit ihren Nachbarn harmoniert haben.' },
          { title: 'Oberflächliche Verfärbungen und lokale Flecken,', text: 'die Bleaching nicht ausgleichen kann.' },
          { title: 'Leicht gedrehte oder nach innen stehende Zähne,', text: 'bei denen Materialaufbau an der Oberfläche die Ausrichtung ohne Kieferorthopädie verbessert.' },
          { title: 'Altes Komposit', text: 'aus früheren Arbeiten, am Rand verfärbt und erneuerungsbedürftig.' },
        ],
        outro: [
          'Bei tiefen inneren Verfärbungen, etwa starken Tetrazyklin-Verfärbungen oder einem dunklen wurzelbehandelten Zahn, ist Komposit weniger vorhersehbar. Komposit ist transluzent, sodass ein sehr dunkler Zahn durchscheinen kann, wenn die Schichtung nicht darauf ausgelegt ist, ihn abzudecken. Keramik löst diese Fälle zuverlässiger, und beim Termin sagen wir Ihnen, zu welcher Gruppe Ihre Zähne gehören.',
        ],
      },
      {
        title: 'Komposit oder Keramik: ein ehrlicher Vergleich',
        intro: ['Beides sind gute Behandlungen. Sie passen zu unterschiedlichen Menschen, Zeitplänen und Budgets.'],
        cards: [
          { title: 'Komposit ist die bessere Wahl, wenn', text: 'Sie das Ergebnis in einem Termin möchten, nichts Unumkehrbares tun wollen, nur wenige Zähne behandelt werden müssen oder das Budget zählt. Es ist auch der sinnvollste Einstieg, wenn Sie jung sind oder nicht sicher, wie weit Sie gehen möchten: Zu Keramik können Sie später immer wechseln.' },
          { title: 'Keramik, also E.max, ist die bessere Wahl, wenn', text: 'Sie maximale Haltbarkeit möchten, die Zähne sehr dunkel sind und abgedeckt werden müssen, Sie ein Ergebnis wünschen, das sich nicht verfärbt, oder Sie das ganze Lächeln neu gestalten und das langlebigste Ergebnis möchten.' },
        ],
      },
      {
        title: 'Die praktischen Unterschiede',
        points: [
          { title: 'Lebensdauer.', text: 'Komposit hält meist 4–8 Jahre, E.max-Keramik meist 10–15 Jahre oder länger.' },
          { title: 'Verfärbung.', text: 'Komposit ist porös und nimmt mit der Zeit Farbe von Kaffee, Tee, Rotwein und Tabak an. Keramik verfärbt sich nicht.' },
          { title: 'Reparatur.', text: 'Hier gewinnt Komposit. Ein abgesplittertes Komposit-Veneer lässt sich meist in wenigen Minuten am Stuhl reparieren. Ein abgesplittertes Keramik-Veneer muss normalerweise neu gefertigt werden.' },
          { title: 'Präparation.', text: 'Komposit erfordert oft wenig oder keinen Schmelzabtrag. Keramik erfordert eine kleine Menge, und das ist unumkehrbar.' },
          { title: 'Zeit.', text: 'Komposit: ein Termin. Keramik: Präparation, Laborarbeit und Einsetzen.' },
          { title: 'Kosten.', text: 'Komposit kostet 100 € pro Zahn, E.max 300 €.' },
        ],
        outro: [
          'Keines ist eine schwächere Version des anderen. Komposit ist keine „billige Keramik“: Es ist eine andere Behandlung mit anderen Vorteilen und Grenzen, und in vielen Fällen die richtige Antwort.',
        ],
      },
      {
        title: 'Wer ist ein guter Kandidat?',
        intro: [
          'Die meisten Menschen mit gesunden Zähnen und gesundem Zahnfleisch. Was darunter zählt, ist dasselbe wie bei jeder ästhetischen Arbeit: Aktive Karies, Zahnfleischentzündungen oder eine alte, versagende Restauration werden zuerst behandelt, denn Komposit auf einer instabilen Basis hält nicht.',
          'Zwei Dinge, die Sie vor der Entscheidung wissen sollten:',
        ],
        inline: [
          { title: 'Wenn Sie pressen oder knirschen,', text: 'splittert Komposit leichter als Keramik. Es bleibt eine gute Option, eine Nachtschiene schützt es und Reparaturen gehen schnell, aber Sie sollten es von Anfang an wissen.' },
          { title: 'Wenn Sie rauchen oder viel Kaffee, Tee oder Rotwein trinken,', text: 'verfärbt sich Komposit schneller. Regelmäßige Prophylaxe hilft sehr, und Politur stellt den Großteil des ursprünglichen Glanzes wieder her.' },
        ],
      },
      {
        title: 'Erst Bleaching, dann Farbanpassung',
        intro: [
          'Komposit lässt sich nicht bleichen. Kronen, Keramik-Veneers und Füllungen ebenso wenig: Der Farbton ist in dem Moment festgelegt, in dem das Material eingebracht wird.',
          'Wenn Sie über Bleaching nachdenken, machen Sie es daher zuerst. Bleichen, den Farbton sich stabilisieren lassen, dann wird das Komposit an die neue, hellere Basis angepasst. Umgekehrt hellen sich Ihre natürlichen Zähne auf, während das Komposit bleibt, wie es war, und die einzige Lösung ist der Austausch.',
          'Sagen Sie es uns in der Planungsphase, und wir legen die Termine in der richtigen Reihenfolge.',
        ],
      },
      {
        title: 'So läuft die Behandlung bei uns ab',
        inline: [
          { title: 'Termin und Lächelanalyse.', text: 'Der Zahnarzt untersucht Zähne, Zahnfleisch und Biss und bespricht mit Ihnen, was Sie ändern möchten. Hier bestätigen wir, ob Komposit-Veneers die richtige Behandlung für Ihren Fall sind oder ob Keramik Ihnen besser dienen würde.' },
          { title: 'Lächelplanung.', text: 'Form, Proportionen und Aussehen der Zähne werden nach Ihren Gesichtszügen und Ihrem natürlichen Lächeln geplant, und der Farbton wird mit Ihnen festgelegt, bevor Material aufgetragen wird.' },
          { title: 'Farbwahl und Vorbereitung.', text: 'Der Farbton wird an die umliegenden Zähne angepasst und die Zahnoberfläche gereinigt und konditioniert, damit das Komposit zuverlässig haftet. In vielen Fällen wird gar kein Schmelz abgetragen.' },
          { title: 'Auftragen des Komposits.', text: 'Zahnfarbener Kunststoff wird in Schichten auf die gewählten Zähne aufgetragen und direkt darauf modelliert, wobei jede Schicht lichtgehärtet wird, bevor die nächste folgt.' },
          { title: 'Formen und Polieren.', text: 'Stimmt die Form, wird das Komposit verfeinert, konturiert und zu einer glatten, natürlichen Oberfläche poliert. Die Politur verhindert, dass Komposit flach wirkt, deshalb wird sie nie überstürzt.' },
          { title: 'Endkontrolle.', text: 'Biss und Gesamtbild Ihres Lächelns werden gemeinsam geprüft, mit letzten Anpassungen, bevor Sie gehen.' },
        ],
      },
      {
        title: 'Warum Veneer Clinic',
        inline: [
          { title: 'Komposit ist Können, keine Abkürzung.', text: 'Das Ergebnis hängt fast vollständig von der Hand ab, die modelliert: Schichtung, Konturierung und Politur unterscheiden natürlich wirkendes Komposit von einem, das wie eine Reparatur aussieht.' },
          { title: 'Wir sagen Ihnen, wann Keramik die bessere Option ist.', text: 'In manchen Fällen ist sie es, und Sie sollten es vor der Entscheidung wissen, nicht danach.' },
          { title: 'Ein einziger Termin.', text: 'Keine Laborphase und kein zweiter Besuch: Sie gehen am selben Tag mit dem fertigen Ergebnis.' },
          { title: 'In der richtigen Reihenfolge mit Bleaching.', text: 'Gehört ein hellerer Farbton zu Ihrem Plan, kommt das Bleaching zuerst.' },
          { title: 'Nach der Behandlung.', text: 'Wir erklären Ihnen vor dem Gehen, wie Sie das Ergebnis pflegen, und die Politur bei der Prophylaxe hält das Komposit wie neu.' },
        ],
      },
      {
        title: 'Komposit, Bleaching und Prophylaxe im selben Besuch',
        intro: [
          'Da Komposit-Veneers in einem einzigen Termin fertig sind, lassen sie sich leicht mit einer Prophylaxe- oder Bleaching-Sitzung kombinieren. Die Reihenfolge ist einfach: zuerst die Reinigung, dann auf Wunsch das Bleaching und zum Schluss das Komposit, angepasst an den neuen Farbton.',
        ],
      },
      {
        title: 'Wie lange halten Komposit-Veneers?',
        intro: [
          'Meist vier bis acht Jahre, je nach Gewohnheiten und Pflege. Sie versagen nicht plötzlich: Sie verlieren allmählich ihren Glanz und verfärben sich am Rand und werden meist aufgefrischt statt komplett ersetzt.',
          'Was ihre Lebensdauer verlängert: tägliches Putzen und Reinigen der Zahnzwischenräume, regelmäßige Prophylaxe, eine Nachtschiene bei Knirschen, das Vermeiden punktueller Belastungen wie Eis und Verpackungen sowie weniger Verfärbendes: Kaffee, Tee, Rotwein und Tabak.',
          'Die Politur bei der Prophylaxe stellt den Großteil des ursprünglichen Glanzes wieder her und ist das Wirksamste, um Komposit wie neu zu halten.',
        ],
      },
    ],
    stats: [
      { value: '1–2 Tage', label: 'Behandlungsdauer' },
      { value: '1', label: 'Sitzung' },
      { value: '1', label: 'Reise' },
      { value: '4–8 J.', label: 'Typische Lebensdauer' },
    ],
    priceTitle: 'Preis pro Zahn',
    priceNote: 'Ohne Labor, in einer Sitzung fertig',
    whatTitle: 'Was sind Komposit-Veneers?',
    what: [
      'Komposit-Veneers sind eine dünne Schicht zahnfarbenen Kunststoffs, von Hand direkt auf die Vorderseite der Zähne modelliert, auf dem Behandlungsstuhl, in einem einzigen Termin. Anders als bei Keramik-Veneers ist kein Labor beteiligt, und meist wird sehr wenig natürlicher Schmelz abgetragen oder gar keiner.',
      'Der Kunststoff wird in Schichten aufgebaut, jede geformt und mit einer Polymerisationslampe gehärtet, bevor die nächste folgt, und dann auf natürlichen Glanz poliert. Da alles in einem Termin geschieht, gehen Sie am selben Tag mit dem fertigen Ergebnis.',
    ],
    calloutTitle: 'Komposit ist eine Korrektur, keine Dauerlösung',
    calloutText:
      'Es ist eine hervorragende, günstige Option für kleine Korrekturen. Wenn Sie aber ein dauerhaftes Ergebnis möchten, behalten E.max Veneers Farbe und Glanz viel länger.',
    compareTitle: 'Optionen nach Umfang',
    compareIntro: 'Komposit-Veneers können einen einzelnen Zahn oder die gesamte Lächellinie abdecken:',
    compare: [
      { id: 'veneer-composite', tag: 'Ein Zahn', title: 'Einzelnes Komposit-Veneer', text: 'Korrigiert Form, Farbe oder Symmetrie eines einzelnen Zahns.' },
      { id: 'veneer-composite', tag: 'Ganzes Lächeln', title: 'Komposit-Veneers für den ganzen Zahnbogen', text: 'Formt mehrere Zähne gemeinsam für eine vollständige, harmonische Lächellinie.', priceText: '800–1.000 € · 8–10 Zähne' },
    ],
    fitTitle: 'Für wen sind Komposit-Veneers?',
    fitIntro: 'Komposit-Veneers lohnen sich, wenn Sie Folgendes korrigieren möchten:',
    fit: ['Lücken zwischen den Zähnen', 'Abgenutzte oder unproportionierte Zähne', 'Kleine ästhetische Makel', 'Ein unregelmäßiges oder asymmetrisches Lächeln'],
    fitNote:
      'Komposit-Veneers sind ein hervorragender, günstigerer Einstieg, verfärben sich aber leichter und halten kürzer als E.max Veneers. Wenn Sie ein haltbareres Ergebnis möchten, sehen wir uns beide Optionen gemeinsam an.',
    stepsTitle: 'So funktioniert die Behandlung',
    stepsIntro: 'Komposit-Veneers sind meist in einem einzigen Termin fertig, von Anfang bis Ende: kein Labor und kein zweiter Termin.',
    steps: [
      { title: 'Termin und Beurteilung', text: 'Der Zahnarzt untersucht Zähne, Zahnfleisch und Biss und bespricht mit Ihnen Ihre ästhetischen Ziele. Hier bestätigen wir, ob Komposit-Veneers die richtige Behandlung sind.' },
      { title: 'Lächelplanung', text: 'Die gewünschte Form, Proportion und Optik Ihrer Zähne wird besprochen und nach Ihren Gesichtszügen und Ihrem natürlichen Lächeln geplant.' },
      { title: 'Farbe und Vorbereitung', text: 'Der Farbton wird an die umliegenden Zähne angepasst und die Oberfläche gereinigt und konditioniert, damit das Komposit gut haftet. In vielen Fällen wird kein Schmelz abgetragen.' },
      { title: 'Auftragen des Komposits', text: 'Zahnfarbener Kompositkunststoff wird in Schichten aufgetragen und direkt auf dem Zahn modelliert, jede Schicht wird vor der nächsten lichtgehärtet.' },
      { title: 'Formen und Polieren', text: 'Ist die gewünschte Form erreicht, wird das Komposit verfeinert, konturiert und zu einer glatten, natürlichen Oberfläche poliert. Die Politur wird nie überstürzt.' },
      { title: 'Endergebnis', text: 'Biss und Gesamtbild Ihres Lächelns werden gemeinsam geprüft, mit letzten Anpassungen, bevor Sie gehen.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für Komposit-Veneers?',
    whyBandText:
      'Komposit-Veneers sind reine Handarbeit: Das Ergebnis hängt vom Können des Zahnarztes ab, der jede Schicht am Stuhl modelliert und poliert. Unser Team formt jedes Veneer nach Ihren Gesichtsproportionen, nicht nach Schablone.',
    caseText: 'Lächeln verbessert mit Komposit-Veneers',
    faq: [
      { question: 'Sind Komposit-Veneers umkehrbar?', answer: 'Oft ja. Wurde kein Schmelz abgetragen, kann das Komposit entfernt werden und der Zahn kehrt in seinen vorherigen Zustand zurück. Das ist einer der wichtigsten Vorteile gegenüber Keramik. Wurde eine kleine Menge Schmelz präpariert, ist es nicht umkehrbar: Wir sagen Ihnen, was in Ihrem Fall gilt.' },
      { question: 'Wie lange dauert der Termin?', answer: 'Das hängt davon ab, wie viele Zähne behandelt werden. Ein einzelner abgebrochener Zahn geht schnell; ein Set Frontzähne dauert deutlich länger, weil jeder einzeln geschichtet und modelliert wird. Bei der Planung nennen wir Ihnen eine realistische Zeit.' },
      { question: 'Was kostet ein Komposit-Veneer?', answer: '100 € pro Zahn. Ein komplettes Lächeln mit 8–10 Zähnen kostet meist 800–1.000 €. Senden Sie uns ein Panorama-Röntgenbild und Fotos, und Sie erhalten vor der Reise ein Angebot.' },
      { question: 'Verfärben sich Komposit-Veneers?', answer: 'Allmählich ja: Komposit ist poröser als Keramik und nimmt über die Jahre Farbe von Kaffee, Tee, Rotwein und Tabak an. Regelmäßige Prophylaxe und Politur halten das unter Kontrolle.' },
      { question: 'Was passiert, wenn eines absplittert?', answer: 'Es lässt sich meist in einem kurzen Termin am Stuhl reparieren, ohne das ganze Veneer neu zu machen. Das ist ein echter praktischer Vorteil gegenüber Keramik, die normalerweise ersetzt werden muss.' },
      { question: 'Wirkt Bleaching auf ihnen?', answer: 'Nein. Komposit behält den Farbton, in dem es eingebracht wurde. Wenn Sie weißere Zähne möchten, bleichen Sie zuerst, und dann passen wir das Komposit an.' },
      { question: 'Komposit oder E.max: Was soll ich wählen?', answer: 'Das hängt davon ab, wie lange das Ergebnis halten soll, wie stark die Zähne abgedeckt werden müssen, von Ihrem Budget und Ihrem Zeitplan. Beides sind gute Behandlungen. Wir geben Ihnen eine ehrliche Empfehlung für Ihre Zähne, keine Standardantwort.' },
      { question: 'Tut es weh?', answer: 'Meist gibt es nichts zu betäuben, da in vielen Fällen kein Schmelz abgetragen wird. Ist eine kleine Präparation nötig, wird örtlich betäubt.' },
      { question: 'Kann ich sie später durch E.max Veneers ersetzen?', answer: 'Ja. Viele Patienten beginnen mit Komposit und wechseln Jahre später zu E.max. Der Einstieg mit Komposit hält diese Möglichkeit offen, und genau deshalb passt er zu allen, die sich noch nicht festlegen möchten.' },
    ],
  },
  it: {
    name: 'Faccette in composito',
    eyebrow: 'Estetica · Albania',
    subtitle:
      'Un modo poco invasivo ed economico per migliorare forma, colore e simmetria dei denti, modellato direttamente in una sola seduta.',
    lead: 'Scheggiature, spazi e piccoli difetti corretti in una visita: niente laboratorio, solo resina modellata nel colore dei tuoi denti.',
    kicker: 'Faccette in composito a Tirana, Albania',
    articleTitle: 'Faccette in composito a Tirana: un nuovo sorriso in un solo appuntamento',
    intro: [
      'Le faccette in composito vengono modellate a mano direttamente sui tuoi denti, sulla poltrona, in un’unica visita. Non c’è fase di laboratorio né attesa: arrivi con i denti che hai e te ne vai con quelli che desideravi.',
      'Questa rapidità è il motivo principale per cui vengono scelte, ma non il più importante. Poiché il composito si aggiunge al dente invece di rivestirlo, in molti casi occorre rimuovere poco o nessuno smalto. Quando non si rimuove nulla, il trattamento è reversibile: una cosa rara in odontoiatria estetica, e il motivo per cui il composito è spesso il primo passo giusto per chi non è ancora pronto a impegnarsi con la ceramica.',
      'Alla Veneer Clinic di Tirana, una faccetta in composito si completa in un solo appuntamento e costa 100 € per dente, un terzo di una faccetta E.max.',
    ],
    sections: [
      {
        title: 'Cosa sono le faccette in composito?',
        intro: [
          'Le faccette in composito sono realizzate con una resina composita del colore del dente, una miscela di particelle di vetro finissime in una matrice di resina, applicata sulla superficie anteriore del dente in strati sottili. Ogni strato viene indurito con una lampada fotopolimerizzante, e il materiale viene scolpito, modellato e lucidato direttamente sul dente finché la forma è perfetta.',
          'L’intero processo avviene in bocca e non in laboratorio. È questa la differenza fondamentale rispetto alle faccette in ceramica, e tutto il resto ne deriva: la rapidità, il costo inferiore, la reversibilità e la durata più breve.',
          'Il trattamento viene spesso chiamato anche bonding dentale, ed entrambi i termini descrivono la stessa cosa. Si parla di “bonding” di solito quando si riparano uno o due denti, e di “faccette in composito” quando più denti anteriori vengono rimodellati insieme come un set.',
        ],
      },
      {
        title: 'Cosa possono correggere le faccette in composito',
        points: [
          { title: 'Bordi scheggiati o consumati,', text: 'soprattutto sui denti anteriori, dove una piccola riparazione ripristina il contorno originale.' },
          { title: 'Spazi tra i denti:', text: 'spazi da piccoli a moderati chiusi aggiungendo materiale ai denti vicini.' },
          { title: 'Forme irregolari o consumate:', text: 'denti che si sono accorciati negli anni, o che non sono mai stati in armonia con i vicini.' },
          { title: 'Macchie superficiali e segni localizzati', text: 'che lo sbiancamento non riesce a uniformare.' },
          { title: 'Denti leggermente ruotati o arretrati,', text: 'dove aggiungere materiale in superficie migliora l’allineamento senza ortodonzia.' },
          { title: 'Vecchio composito', text: 'di lavori precedenti, macchiato ai bordi e da sostituire.' },
        ],
        outro: [
          'Il composito è meno prevedibile sulle macchie interne profonde, come forti macchie da tetraciclina o un dente scuro devitalizzato. Il composito è traslucido, quindi un dente molto scuro può trasparire se la stratificazione non è costruita per mascherarlo. La ceramica gestisce questi casi in modo più affidabile, e durante la visita ti diciamo a quale gruppo appartengono i tuoi denti.',
        ],
      },
      {
        title: 'Composito o ceramica: un confronto sincero',
        intro: ['Sono entrambi buoni trattamenti. Si adattano a persone, tempi e budget diversi.'],
        cards: [
          { title: 'Il composito è la scelta migliore quando', text: 'vuoi il risultato in un appuntamento, preferisci non fare nulla di irreversibile, devono essere trattati solo pochi denti o il budget conta. È anche il punto di partenza più sensato se sei giovane o non sei sicuro di quanto spingerti: puoi sempre passare alla ceramica in seguito.' },
          { title: 'La ceramica, cioè l’E.max, è la scelta migliore quando', text: 'vuoi la massima durata, i denti sono molto scuri e vanno mascherati, desideri un risultato che non si macchi o stai rimodellando l’intero sorriso e vuoi il risultato più duraturo.' },
        ],
      },
      {
        title: 'Le differenze pratiche',
        points: [
          { title: 'Durata.', text: 'Il composito dura di solito 4–8 anni; la ceramica E.max di solito 10–15 anni o più.' },
          { title: 'Macchie.', text: 'Il composito è poroso e con il tempo assorbe colore da caffè, tè, vino rosso e tabacco. La ceramica non si macchia.' },
          { title: 'Riparazione.', text: 'Qui vince il composito. Una faccetta in composito scheggiata di solito si ripara alla poltrona in pochi minuti. Una faccetta in ceramica scheggiata normalmente va rifatta.' },
          { title: 'Preparazione.', text: 'Il composito spesso richiede poca o nessuna rimozione di smalto. La ceramica ne richiede una piccola quantità, ed è irreversibile.' },
          { title: 'Tempo.', text: 'Composito: un appuntamento. Ceramica: preparazione, lavoro di laboratorio e applicazione.' },
          { title: 'Costo.', text: 'Il composito costa 100 € per dente, l’E.max 300 €.' },
        ],
        outro: [
          'Nessuno dei due è una versione inferiore dell’altro. Il composito non è “ceramica economica”: è un trattamento diverso con vantaggi e limiti diversi, e in molti casi è la risposta giusta.',
        ],
      },
      {
        title: 'Chi è un buon candidato?',
        intro: [
          'La maggior parte delle persone con denti e gengive sani. Ciò che conta alla base è lo stesso di qualsiasi lavoro estetico: carie attive, infiammazione gengivale o un vecchio restauro che sta cedendo vanno trattati prima, perché il composito incollato su una base instabile non dura.',
          'Due cose da sapere prima di decidere:',
        ],
        inline: [
          { title: 'Se serri o digrigni i denti,', text: 'il composito si scheggia più facilmente della ceramica. Resta un’opzione valida, un bite notturno lo protegge e le riparazioni sono rapide, ma è bene saperlo fin dall’inizio.' },
          { title: 'Se fumi o bevi molto caffè, tè o vino rosso,', text: 'il composito si scolorirà più in fretta. Le sedute di igiene regolari aiutano molto, e la lucidatura ripristina gran parte della lucentezza originale.' },
        ],
      },
      {
        title: 'Prima lo sbiancamento, poi l’abbinamento del colore',
        intro: [
          'Il composito non si sbianca. Nemmeno corone, faccette in ceramica o otturazioni: la tonalità si fissa nel momento in cui il materiale viene applicato.',
          'Per questo, se stai pensando allo sbiancamento, fallo prima. Sbianca, lascia stabilizzare la tonalità, poi il composito viene abbinato alla nuova base più luminosa. Se lo fai al contrario, i denti naturali si schiariscono mentre il composito resta com’era, e l’unica soluzione è sostituirlo.',
          'Diccelo in fase di pianificazione e organizziamo gli appuntamenti nell’ordine giusto.',
        ],
      },
      {
        title: 'Come funziona il trattamento da noi',
        inline: [
          { title: 'Visita e valutazione del sorriso.', text: 'Il dentista esamina denti, gengive e morso e parla con te di cosa desideri cambiare. Qui confermiamo se le faccette in composito sono il trattamento giusto per il tuo caso o se la ceramica ti servirebbe meglio.' },
          { title: 'Pianificazione del sorriso.', text: 'Forma, proporzioni e aspetto dei denti vengono pianificati in base ai lineamenti del viso e al tuo sorriso naturale, e il colore viene deciso con te prima di applicare qualsiasi materiale.' },
          { title: 'Scelta del colore e preparazione.', text: 'Il colore viene abbinato ai denti circostanti e la superficie del dente viene pulita e condizionata perché il composito aderisca in modo affidabile. In molti casi non si rimuove affatto smalto.' },
          { title: 'Applicazione del composito.', text: 'La resina del colore del dente viene applicata a strati sui denti scelti e modellata direttamente su di essi, con ogni strato fotopolimerizzato prima di costruire il successivo.' },
          { title: 'Modellazione e lucidatura.', text: 'Quando la forma è corretta, il composito viene rifinito, sagomato e lucidato fino a una superficie liscia e naturale. La lucidatura è ciò che impedisce al composito di apparire piatto, per questo non si fa mai di fretta.' },
          { title: 'Controllo finale.', text: 'Morso e aspetto generale del sorriso vengono controllati insieme, con le ultime regolazioni prima che tu vada via.' },
        ],
      },
      {
        title: 'Perché Veneer Clinic',
        inline: [
          { title: 'Il composito è abilità, non una scorciatoia.', text: 'Il risultato dipende quasi interamente dalla mano che lo modella: stratificazione, modellazione e lucidatura distinguono un composito naturale da uno che sembra una riparazione.' },
          { title: 'Ti diciamo quando la ceramica è l’opzione migliore.', text: 'In alcuni casi lo è, e devi saperlo prima di decidere, non dopo.' },
          { title: 'Un solo appuntamento.', text: 'Nessuna fase di laboratorio e nessuna seconda visita: te ne vai lo stesso giorno con il risultato finito.' },
          { title: 'Nell’ordine giusto con lo sbiancamento.', text: 'Se una tonalità più luminosa fa parte del tuo piano, lo sbiancamento viene prima.' },
          { title: 'Dopo il trattamento.', text: 'Ti spieghiamo come prenderti cura del risultato prima che tu vada via, e la lucidatura durante le sedute di igiene mantiene il composito come nuovo.' },
        ],
      },
      {
        title: 'Composito, sbiancamento e igiene nella stessa visita',
        intro: [
          'Poiché le faccette in composito si completano in un solo appuntamento, si combinano facilmente con una seduta di igiene o di sbiancamento. L’ordine è semplice: prima la pulizia, poi lo sbiancamento se lo desideri, e infine il composito abbinato alla nuova tonalità.',
        ],
      },
      {
        title: 'Quanto durano le faccette in composito?',
        intro: [
          'Di solito da quattro a otto anni, a seconda delle abitudini e della cura. Non cedono all’improvviso: perdono gradualmente lucentezza e si colorano ai bordi, e di solito vengono rinnovate invece di essere sostituite del tutto.',
          'Cosa ne allunga la vita: spazzolamento quotidiano e pulizia tra i denti, sedute di igiene regolari, un bite notturno se digrigni i denti, evitare carichi puntuali come ghiaccio e confezioni, e limitare ciò che macchia: caffè, tè, vino rosso e tabacco.',
          'La lucidatura durante le sedute di igiene ripristina gran parte della lucentezza originale ed è la cosa più efficace per mantenere il composito come nuovo.',
        ],
      },
    ],
    stats: [
      { value: '1–2 giorni', label: 'Durata del trattamento' },
      { value: '1', label: 'Seduta' },
      { value: '1', label: 'Viaggio' },
      { value: '4–8 anni', label: 'Durata tipica' },
    ],
    priceTitle: 'Prezzo per dente',
    priceNote: 'Senza laboratorio, pronta in una seduta',
    whatTitle: 'Cosa sono le faccette in composito?',
    what: [
      'Le faccette in composito sono uno strato sottile di resina del colore del dente, scolpito a mano direttamente sulla superficie anteriore dei denti, sulla poltrona, in un’unica visita. A differenza delle faccette in ceramica, non è coinvolto alcun laboratorio, e di solito si rimuove pochissimo smalto naturale, o nessuno.',
      'La resina viene costruita a strati, ognuno modellato e indurito con una lampada fotopolimerizzante prima di aggiungere il successivo, poi lucidata fino a una brillantezza naturale. Poiché tutto avviene in un appuntamento, te ne vai lo stesso giorno con il risultato finito.',
    ],
    calloutTitle: 'Il composito è una correzione, non una soluzione permanente',
    calloutText:
      'È un’ottima opzione a basso costo per piccole correzioni, ma se cerchi un risultato permanente, le faccette E.max mantengono colore e lucentezza molto più a lungo.',
    compareTitle: 'Opzioni in base all’estensione',
    compareIntro: 'Le faccette in composito possono coprire un singolo dente o l’intera linea del sorriso:',
    compare: [
      { id: 'veneer-composite', tag: 'Un dente', title: 'Faccetta in composito singola', text: 'Corregge forma, colore o simmetria di un singolo dente.' },
      { id: 'veneer-composite', tag: 'Sorriso completo', title: 'Faccette in composito per l’intera arcata', text: 'Rimodella più denti insieme per una linea del sorriso completa e armoniosa.', priceText: '800–1.000 € · 8–10 denti' },
    ],
    fitTitle: 'Per chi sono le faccette in composito?',
    fitIntro: 'Vale la pena considerare le faccette in composito se desideri correggere:',
    fit: ['Spazi tra i denti', 'Denti consumati o sproporzionati', 'Piccole imperfezioni estetiche', 'Un sorriso irregolare o asimmetrico'],
    fitNote:
      'Le faccette in composito sono un ottimo inizio a costo inferiore, ma resistono meno alle macchie e durano meno delle faccette E.max. Se desideri un risultato più duraturo, valutiamo insieme entrambe le opzioni.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'Le faccette in composito si completano di solito in un’unica visita, dall’inizio alla fine: senza laboratorio e senza secondo appuntamento.',
    steps: [
      { title: 'Visita e valutazione', text: 'Il dentista esamina denti, gengive e morso e parla con te dei tuoi obiettivi estetici. Qui confermiamo se le faccette in composito sono il trattamento giusto.' },
      { title: 'Pianificazione del sorriso', text: 'Forma, proporzioni e aspetto che desideri per i tuoi denti vengono discussi e pianificati in base ai lineamenti del viso e al tuo sorriso naturale.' },
      { title: 'Colore e preparazione', text: 'Il colore viene abbinato ai denti circostanti e la superficie viene pulita e condizionata perché il composito aderisca bene. In molti casi non si rimuove smalto.' },
      { title: 'Applicazione del composito', text: 'Una resina composita del colore del dente viene applicata a strati e modellata direttamente sul dente, con ogni strato fotopolimerizzato prima del successivo.' },
      { title: 'Modellazione e lucidatura', text: 'Raggiunta la forma desiderata, il composito viene rifinito, sagomato e lucidato fino a una superficie liscia e naturale. La lucidatura non si fa mai di fretta.' },
      { title: 'Risultato finale', text: 'Morso e aspetto generale del sorriso vengono controllati insieme, con le ultime regolazioni prima che tu vada via.' },
    ],
    whyBandTitle: 'Perché scegliere Veneer Clinic per le faccette in composito?',
    whyBandText:
      'Le faccette in composito sono interamente fatte a mano: il risultato dipende dall’abilità del dentista che modella e lucida ogni strato alla poltrona. Il nostro team modella ogni faccetta sulle proporzioni del tuo viso, non su uno stampo standard.',
    caseText: 'Sorriso migliorato con faccette in composito',
    faq: [
      { question: 'Le faccette in composito sono reversibili?', answer: 'Spesso sì. Quando non è stato rimosso smalto, il composito può essere tolto e il dente torna allo stato precedente. È uno dei principali vantaggi rispetto alla ceramica. Quando è stata preparata una piccola quantità di smalto, non è reversibile: ti diciamo cosa vale nel tuo caso.' },
      { question: 'Quanto dura l’appuntamento?', answer: 'Dipende da quanti denti vengono trattati. Un singolo dente scheggiato è rapido; un set di denti anteriori richiede molto più tempo, perché ognuno viene stratificato e modellato separatamente. Ti diamo un tempo realistico quando pianifichiamo il caso.' },
      { question: 'Quanto costa una faccetta in composito?', answer: '100 € per dente. Un sorriso completo di 8–10 denti costa di solito 800–1.000 €. Inviaci una radiografia panoramica e delle foto e ti daremo un preventivo prima di partire.' },
      { question: 'Le faccette in composito si macchiano?', answer: 'Gradualmente sì: il composito è più poroso della ceramica e negli anni assorbe colore da caffè, tè, vino rosso e tabacco. Sedute di igiene regolari e lucidatura tengono la cosa sotto controllo.' },
      { question: 'Cosa succede se una si scheggia?', answer: 'Di solito si ripara alla poltrona in una breve visita, senza rifare l’intera faccetta. È un vero vantaggio pratico rispetto alla ceramica, che normalmente va sostituita.' },
      { question: 'Lo sbiancamento funziona su di esse?', answer: 'No. Il composito mantiene la tonalità con cui è stato applicato. Se desideri denti più bianchi, sbianca prima e poi abbiniamo il composito.' },
      { question: 'Composito o E.max: quale scegliere?', answer: 'Dipende da quanto vuoi che duri il risultato, da quanto i denti vanno mascherati, dal budget e dai tempi. Sono entrambi buoni trattamenti. Ti diamo una raccomandazione sincera per i tuoi denti, non una risposta standard.' },
      { question: 'Fa male?', answer: 'Di solito non c’è nulla da anestetizzare, perché in molti casi non si rimuove smalto. Quando serve una piccola preparazione, si usa l’anestesia locale.' },
      { question: 'Posso sostituirle più avanti con faccette E.max?', answer: 'Sì. Molti pazienti iniziano con il composito e passano all’E.max anni dopo. Iniziare con il composito lascia aperta questa possibilità, ed è proprio per questo che è adatto a chi non è ancora pronto a impegnarsi.' },
    ],
  },
};

export default function CompositeVeneersPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="veneer-composite"
      heroImage={images.results[1]?.[0] ?? images.heroAfter}
      whatImage={images.results[3]?.[0] ?? images.heroAfter}
    />
  );
}
