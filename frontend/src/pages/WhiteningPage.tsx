import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Zbardhimi i dhëmbëve',
    eyebrow: 'Estetikë · Shqipëri',
    subtitle:
      'Zbardhim në klinikë që i çel dhëmbët disa nuanca në një seancë të vetme, me xhel të sigurt për smaltin dhe ndjeshmëri minimale pas trajtimit.',
    lead: 'Një buzëqeshje më e ndritshme në një takim të vetëm: zbardhim profesional, i bërë në mënyrë të sigurt nën kontroll klinik.',
    kicker: 'Zbardhimi i dhëmbëve në Tiranë, Shqipëri',
    articleTitle: 'Zbardhimi i dhëmbëve në Tiranë: një nuancë më e ndritshme, e bërë siç duhet',
    intro: [
      'Dhëmbët errësohen aq ngadalë sa shumica e njerëzve e vënë re vetëm kur shohin një fotografi. Kafeja, çaji, vera e kuqe dhe duhani lënë pigment në poret mikroskopike të smaltit, dhe vetë smalti hollohet me moshën, duke lënë të duket më shumë dentina poshtë tij, që është më e verdhë. Asnjëra nuk tregon higjienë të dobët: është thjesht ajo që ndodh me kohën.',
      'Zbardhimi profesional e kthen mbrapsht një pjesë të mirë të kësaj. I bërë nga dentisti, me përqendrimin e duhur dhe mishrat e dhëmbëve të mbrojtur mirë, është një nga përmirësimet më të thjeshta në stomatologjinë estetike: pa frezim, pa hequr asgjë dhe pa asgjë të përhershme.',
      'Në Veneer Clinic në Tiranë, zbardhimi i dhëmbëve përfundon në një takim të vetëm, dhe para se të fillojmë ju themi sinqerisht sa ndryshim të prisni në rastin tuaj.',
    ],
    sections: [
      {
        title: 'Çfarë mund dhe çfarë nuk mund të ndryshojë zbardhimi',
        intro: ['Kjo është pjesa që shumica e faqeve e lënë jashtë, dhe është pjesa që ia vlen të lexohet.'],
        inline: [
          { title: 'Zbardhimi funksionon mirë', text: 'te njollat që ndodhen në smalt, si kafeja, çaji, vera e kuqe, pijet me kola dhe duhani, si dhe te zverdhja e përgjithshme nga mosha. Këto janë arsyet më të zakonshme pse njerëzit pyesin për zbardhim dhe zakonisht reagojnë mirë.' },
          { title: 'Zbardhimi funksionon në mënyrë më pak të parashikueshme', text: 'te njollat e brendshme: vija nga tetraciklina, fluoroza ose një dhëmb i vetëm që u errësua pas një goditjeje apo mjekimi të kanalit. Shpesh arrihet njëfarë përmirësimi, por rezultati është më i kufizuar, dhe në këto raste fasetat mund të jenë rruga më e mirë. Jua themi në vizitë, jo më pas.' },
          { title: 'Zbardhimi nuk funksionon fare', text: 'te kurorat, fasetat, kompoziti apo mbushjet. Qeramika dhe kompoziti e mbajnë nuancën me të cilën janë punuar. Kjo ka një pasojë të drejtpërdrejtë: nëse keni restaurime të dukshme, zbardhimi i dhëmbëve natyralë do t’i bëjë ato të dallohen, jo të përzihen.' },
        ],
      },
      {
        title: 'Nëse po planifikoni faseta ose kurora, fillimisht zbardhimi',
        intro: [
          'Restaurimet përshtaten me ngjyrën e dhëmbëve në ditën kur punohen. Nëse zbardhoni më pas, dhëmbët natyralë çelen dhe restaurimet mbeten saktësisht siç ishin, dhe mospërputhja është e përhershme nëse nuk ribëhen.',
          'Pra, rendi i saktë është: fillimisht zbardhimi, pritet që nuanca të stabilizohet, pastaj restaurimet përshtaten me bazën e re më të ndritshme. Ta bësh në rendin e kundërt është një nga gabimet më të kushtueshme në stomatologjinë estetike, dhe shmanget plotësisht me një bisedë.',
          'Nëse vini te ne për faseta apo kurora, na e thoni në fazën e planifikimit dhe zbardhimin e vendosim në kalendar para punës protetike.',
        ],
      },
      {
        title: 'Për kë është i përshtatshëm zbardhimi?',
        intro: [
          'Shumica e të rriturve të shëndetshëm janë kandidatë të mirë. Ajo që ka rëndësi është gjendja poshtë: xheli zbardhues i aplikuar mbi karies të patrajtuar, rrënjë të ekspozuara apo mishra të inflamuar është i bezdisshëm dhe mund ta rrisë ndjeshmërinë. Prandaj trajtimi fillon me një vizitë, jo me xhelin.',
          'Situata që i planifikojmë në vend që ta refuzojmë trajtimin:',
        ],
        points: [
          { title: 'Dhëmbë të ndjeshëm:', text: 'protokolli mund të përshtatet dhe mund të përdoret trajtim desensibilizues para dhe pas.' },
          { title: 'Tërheqje e mishrave ose sipërfaqe rrënjësh të ekspozuara:', text: 'duhen mbrojtur dhe ndonjëherë trajtuar më parë.' },
          { title: 'Karies të patrajtuar ose mbushje të dëmtuara:', text: 'zgjidhen para zbardhimit.' },
          { title: 'Restaurime të dukshme ekzistuese:', text: 'vlen ajo që thamë më lart për rendin e trajtimeve.' },
        ],
        outro: ['Zbardhimi nuk rekomandohet gjatë shtatzënisë apo ushqyerjes me gji, as për fëmijët, dhëmbët e të cilëve janë ende në zhvillim.'],
      },
      {
        title: 'Si funksionon trajtimi te ne',
        inline: [
          { title: 'Matja e nuancës.', text: 'Regjistrojmë nuancën aktuale me një shkallë standarde ngjyrash dhe konfirmojmë që zbardhimi është i përshtatshëm për dhëmbët dhe mishrat tuaj. Këtu vendosim edhe një pritshmëri realiste se sa nuanca ka gjasa të fitoni.' },
          { title: 'Përgatitja mbrojtëse.', text: 'Mishrat dhe indet e buta mbrohen që xheli të prekë vetëm smaltin, pastaj mbi dhëmbë aplikohet një xhel zbardhues i nivelit profesional.' },
          { title: 'Aktivizimi.', text: 'Një seancë e vetme me një dritë të posaçme, zakonisht 20 deri në 30 minuta. Kur ndjeshmëria është shqetësim e shkurtojmë: qëllimi është një rezultat i rehatshëm, jo aplikimi më i gjatë i mundshëm.' },
          { title: 'Kontrolli i nuancës.', text: 'E krahasojmë rezultatin me nuancën fillestare, që ta shihni ndryshimin të matur dhe jo të hamendësuar.' },
          { title: 'Udhëzimet për më pas.', text: 'Para se të largoheni ju shpjegojmë si ta mbroni rezultatin, sidomos çfarë të shmangni në 48 orët e para, kur smalti njollet më lehtë.' },
        ],
      },
      {
        title: 'Pse Veneer Clinic',
        inline: [
          { title: 'Fillimisht një vlerësim i sinqertë.', text: 'Ju themi çfarë mund të arrini realisht para se të vendosni, edhe kur zbardhimi nuk është trajtimi i duhur për llojin e njollës që keni.' },
          { title: 'Nën mbikëqyrjen e dentistit nga fillimi në fund.', text: 'Mbrojtja e mishrave, përqendrime të kontrolluara dhe monitorim mes cikleve: kjo e dallon zbardhimin profesional nga një komplet i blerë në dyqan.' },
          { title: 'Në rendin e duhur me trajtimet e tjera.', text: 'Nëse plani juaj përfshin faseta apo kurora, zbardhimi planifikohet para tyre, jo pas.' },
          { title: 'Pas trajtimit.', text: 'Ju shpjegojmë si ta kujdeseni rezultatin para se të largoheni, dhe mund të ktheheni për një kontroll ose rifreskim sa herë t’ju duhet.' },
        ],
      },
      {
        title: 'Zbardhim dhe higjienë në të njëjtën vizitë',
        intro: [
          'Shumë pacientë i bashkojnë të dyja: një seancë pastrimi dhe një seancë zbardhimi, të bëra siç duhet, në një ose dy takime të afërta.',
          'Ato funksionojnë më mirë pikërisht në këtë rend. Pastrimi profesional heq fillimisht njollat sipërfaqësore dhe gurëzat, kështu xheli zbardhues vepron mbi një smalt të pastër: rezultati është më i ndritshëm dhe më i njëtrajtshëm se zbardhimi mbi një shtresë pllake.',
          'Nëse plani juaj përfshin edhe faseta, kurora apo implante, zbardhimi thjesht planifikohet para punës protetike, siç u shpjegua më lart.',
        ],
      },
      {
        title: 'Sa zgjasin rezultatet?',
        intro: [
          'Nga gjashtë muaj deri në tre vjet, dhe varet pothuajse tërësisht nga zakonet. Kafeja, çaji, vera e kuqe dhe duhani janë ato që e kthejnë nuancën mbrapsht: sa i konsumoni dhe nëse e shpëlani gojën pas tyre ka më shumë rëndësi se çdo gjë që bëjmë ne në karrige.',
          'Seancat e rregullta të higjienës ndihmojnë shumë, sepse njollat sipërfaqësore hiqen para se të ngulen. Shumë pacientë bëjnë një rifreskim të shkurtër në vizitën e radhës, shumë më e thjeshtë se përsëritja e trajtimit të plotë.',
          '48 orët e para kanë më shumë rëndësi. Pas zbardhimit smalti është përkohësisht më poroz, kështu që një dietë me ngjyra të çelëta për dy ditë e mbron rezultatin që sapo keni marrë.',
        ],
      },
    ],
    stats: [
      { value: '1 ditë', label: 'Koha e trajtimit' },
      { value: '1', label: 'Seancë' },
      { value: '60–90 min', label: 'Kohëzgjatja e seancës' },
      { value: '6 muaj – 3 vjet', label: 'Rezultatet zgjasin' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Rezultati duket po atë ditë',
    whatTitle: 'Si funksionon zbardhimi profesional?',
    what: [
      'Zbardhimi profesional përdor një xhel zbardhues me përqendrim më të lartë se produktet që shiten pa recetë, i aplikuar nën kontroll të rreptë klinik. Para se të aplikohet çdo xhel, kontrollojmë nuancën aktuale dhe konfirmojmë që zbardhimi është i përshtatshëm për dhëmbët dhe mishrat tuaj.',
      'Mishrat pastaj mbrohen dhe mbi dhëmbë aplikohet një xhel i nivelit profesional, shpesh me ndihmën e një drite të posaçme, në cikle të shkurtra. Pikërisht ky kombinim i xhelit më të fortë me mbrojtjen klinike e bën zbardhimin të veprojë më shpejt dhe më parashikueshëm se kompletet për në shtëpi, shpesh brenda një takimi të vetëm.',
    ],
    calloutTitle: 'Zbardhimi funksionon vetëm te dhëmbët natyralë',
    calloutText:
      'Xheli zbardhues nuk e ndryshon ngjyrën e kurorave, fasetave apo mbushjeve. Nëse keni restaurime të dukshme te dhëmbët e përparmë, na tregoni para takimit që ta planifikojmë siç duhet.',
    compareTitle: 'Opsionet për një buzëqeshje më të ndritshme',
    compareIntro: 'Zgjedhja varet nga lloji i njollave dhe nga gjendja e dhëmbëve tuaj:',
    compare: [
      { id: 'whitening', tag: 'Ky trajtim', title: 'Zbardhim në klinikë', text: 'Një xhel me përqendrim më të lartë i aplikuar nën kontroll klinik, me rezultate të dukshme në një seancë të vetme.' },
      { id: 'scaling', tag: 'Rezultati më i njëtrajtshëm', title: 'Pastrim + zbardhim', text: 'Pastrimi heq fillimisht gurëzat dhe njollat sipërfaqësore, pastaj xheli vepron mbi një smalt të pastër për një nuancë më të ndritshme dhe më të barabartë.', priceText: '180 €' },
      { id: 'crown-emax', tag: 'Për njolla të thella', title: 'Faseta e.max', text: 'Kur njollat janë brenda dhëmbit (tetraciklinë, fluorozë ose një dhëmb i errësuar), fasetat japin një ngjyrë të re që zbardhimi nuk e arrin.' },
    ],
    fitTitle: 'Për kë është zbardhimi i dhëmbëve?',
    fitIntro: 'Zbardhimi profesional ia vlen ta merrni në konsideratë nëse:',
    fit: [
      'Dëshironi një buzëqeshje dukshëm më të ndritshme para një eventi të rëndësishëm',
      'Keni njolla nga kafeja, çaji, vera apo duhani',
      'Keni provuar komplete për në shtëpi pa rezultatin që prisnit',
      'Kërkoni një alternativë të sigurt dhe të mbikëqyrur ndaj produkteve të dyqanit',
    ],
    fitNote:
      'Zbardhimi nuk vepron mbi kurora, faseta apo mbushje: nëse keni restaurime të dukshme te dhëmbët e përparmë, do të flasim bashkë si t’i përshtatim pasi dhëmbët natyralë të arrijnë nuancën e re.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'Zbardhimi përfundon në një takim të vetëm, nga matja e nuancës deri te rezultati përfundimtar:',
    steps: [
      { title: 'Matja e nuancës', text: 'Regjistrojmë nuancën aktuale me një shkallë standarde ngjyrash dhe konfirmojmë që zbardhimi është i përshtatshëm, me një pritshmëri realiste të ndryshimit.' },
      { title: 'Përgatitja mbrojtëse', text: 'Mishrat dhe indet e buta mbrohen që xheli të prekë vetëm smaltin, pastaj mbi dhëmbë aplikohet një xhel zbardhues i nivelit profesional.' },
      { title: 'Aktivizimi', text: 'Një seancë e vetme me një dritë të posaçme, zakonisht 20 deri në 30 minuta. Kur ndjeshmëria është shqetësim e shkurtojmë: qëllimi është një rezultat i rehatshëm.' },
      { title: 'Kontrolli i nuancës', text: 'E krahasojmë rezultatin me nuancën fillestare, që ta shihni ndryshimin të matur me shkallën e ngjyrave dhe jo të hamendësuar.' },
      { title: 'Udhëzimet për më pas', text: 'Para se të largoheni ju shpjegojmë si ta mbroni rezultatin, sidomos çfarë të shmangni në 48 orët e para, kur smalti njollet më lehtë.' },
    ],
    whyBandTitle: 'Pse të zgjidhni Veneer Clinic për zbardhimin e dhëmbëve?',
    whyBandText:
      'Nuanca aktuale dhe shëndeti i mishrave kontrollohen para se të aplikohet çdo xhel, kështu që zbardhimi bëhet vetëm pasi kemi konfirmuar se është vërtet i përshtatshëm për dhëmbët tuaj.',
    caseText: 'Buzëqeshje më e ndritshme pas zbardhimit profesional',
    faq: [
      { question: 'A e dëmton zbardhimi smaltin?', answer: 'Jo. Xhelet profesionale e heqin pigmentin nga brenda smaltit pa hequr strukturë dhëmbi. Rreziku i produkteve pa mbikëqyrje nuk është vetë zbardhimi, por përqendrimet e pakontrolluara dhe mishrat e pambrojtur.' },
      { question: 'A do të më bëhen dhëmbët të ndjeshëm?', answer: 'Disa pacientë ndiejnë një ndjeshmëri të lehtë për një ose dy ditë pas trajtimit. Është e përkohshme. Nëse i keni dhëmbët tashmë të ndjeshëm, na tregoni më parë dhe e përshtatim protokollin.' },
      { question: 'Sa të bardhë do të bëhen dhëmbët e mi?', answer: 'Shumica e pacientëve fitojnë disa nuanca. Kufiri realist varet nga nuanca fillestare dhe lloji i njollës, prandaj vlerësojmë para trajtimit në vend që të premtojmë një numër. Synojmë gjithashtu një rezultat që duket natyral me lëkurën tuaj.' },
      { question: 'Sa kushton zbardhimi?', answer: '150 € për një seancë zbardhimi në klinikë. Me pastrim gurëzash para zbardhimit, totali është 180 €.' },
      { question: 'A funksionon zbardhimi te kurorat apo fasetat?', answer: 'Jo. Qeramika dhe kompoziti e mbajnë nuancën me të cilën janë punuar. Nëse keni restaurime të dukshme, do të flasim si ta njëtrajtësojmë gjithë buzëqeshjen, zakonisht duke zbardhur fillimisht dhe duke zëvendësuar ose përshtatur restaurimet më pas.' },
      { question: 'A mund të ha dhe të pi menjëherë pas?', answer: 'Po, por shmangni ushqimet dhe pijet me ngjyrë të fortë për 48 orët e para: kafe, çaj, verë të kuqe, fruta pylli, salcë domatesh dhe duhan. Uji është gjithmonë në rregull.' },
      { question: 'Sa shpesh mund ta përsëris?', answer: 'Shumica e njerëzve bëjnë një rifreskim çdo gjashtë deri në dymbëdhjetë muaj. Ju këshillojmë sipas mënyrës si mbahet nuanca juaj.' },
      { question: 'A mjafton një seancë?', answer: 'Për shumicën e pacientëve, po. Kur nuanca fillestare është veçanërisht e errët, mund të rekomandohet një seancë e dytë për të arritur objektivin.' },
      { question: 'Po nëse kam nevojë për ndihmë më pas?', answer: 'Ju shpjegojmë kujdesin pas trajtimit para se të largoheni, dhe mund të na kontaktoni ose të ktheheni në klinikë sa herë t’ju duhet. Nëse diçka ju shqetëson, ju këshillojmë drejtpërdrejt.' },
    ],
  },
  en: {
    name: 'Teeth Whitening',
    eyebrow: 'Aesthetics · Albania',
    subtitle:
      'In-clinic whitening that lightens your teeth by several shades in a single session, with an enamel-safe gel and minimal sensitivity afterwards.',
    lead: 'A brighter smile in a single appointment: professional whitening, done safely under clinical control.',
    kicker: 'Teeth Whitening in Tirana, Albania',
    articleTitle: 'Teeth whitening in Tirana: a brighter shade, done properly',
    intro: [
      'Teeth darken so slowly that most people only notice when they see a photo. Coffee, tea, red wine and tobacco leave pigment in the microscopic pores of the enamel, and the enamel itself thins with age, letting more of the yellower dentine underneath show through. None of this means poor hygiene: it is simply what happens over time.',
      'Professional whitening reverses a good part of it. Done by a dentist, with the right concentration and the gums properly protected, it is one of the simplest improvements in cosmetic dentistry: no drilling, nothing removed and nothing permanent.',
      'At Veneer Clinic in Tirana, teeth whitening is completed in a single appointment, and before we start we tell you honestly how much change to expect in your case.',
    ],
    sections: [
      {
        title: 'What whitening can and cannot change',
        intro: ['This is the part most pages leave out, and it is the part worth reading.'],
        inline: [
          { title: 'Whitening works well', text: 'on stains sitting in the enamel, such as coffee, tea, red wine, cola and tobacco, as well as general yellowing with age. These are the most common reasons people ask about whitening and they usually respond well.' },
          { title: 'Whitening works less predictably', text: 'on internal stains: tetracycline bands, fluorosis or a single tooth that darkened after a knock or a root canal. Some improvement is often achieved, but the result is more limited, and in these cases veneers may be the better route. We tell you at the visit, not afterwards.' },
          { title: 'Whitening does not work at all', text: 'on crowns, veneers, composite or fillings. Ceramic and composite keep the shade they were made in. This has a direct consequence: if you have visible restorations, whitening your natural teeth will make them stand out, not blend in.' },
        ],
      },
      {
        title: 'If you are planning veneers or crowns, whiten first',
        intro: [
          'Restorations are matched to the colour of your teeth on the day they are made. If you whiten afterwards, the natural teeth lighten and the restorations stay exactly as they were, and the mismatch is permanent unless they are remade.',
          'So the correct order is: whiten first, let the shade settle, then match the restorations to the new, brighter base. Doing it the other way round is one of the most expensive mistakes in cosmetic dentistry, and it is completely avoided with one conversation.',
          'If you come to us for veneers or crowns, tell us at the planning stage and we will schedule whitening before the prosthetic work.',
        ],
      },
      {
        title: 'Who is whitening suitable for?',
        intro: [
          'Most healthy adults are good candidates. What matters is the condition underneath: whitening gel applied over untreated decay, exposed roots or inflamed gums is uncomfortable and can increase sensitivity. That is why treatment starts with a check, not with the gel.',
          'Situations we plan around rather than refusing treatment:',
        ],
        points: [
          { title: 'Sensitive teeth:', text: 'the protocol can be adapted and a desensitising treatment can be used before and after.' },
          { title: 'Gum recession or exposed root surfaces:', text: 'these need protecting and sometimes treating first.' },
          { title: 'Untreated decay or damaged fillings:', text: 'these are resolved before whitening.' },
          { title: 'Existing visible restorations:', text: 'what we said above about the order of treatments applies.' },
        ],
        outro: ['Whitening is not recommended during pregnancy or breastfeeding, nor for children whose teeth are still developing.'],
      },
      {
        title: 'How treatment works with us',
        inline: [
          { title: 'Shade measurement.', text: 'We record your current shade on a standard shade guide and confirm that whitening is suitable for your teeth and gums. This is also where we set a realistic expectation of how many shades you are likely to gain.' },
          { title: 'Protective preparation.', text: 'The gums and soft tissues are protected so the gel only touches the enamel, then a professional-grade whitening gel is applied to the teeth.' },
          { title: 'Activation.', text: 'A single session with a special light, usually 20 to 30 minutes. When sensitivity is a concern we shorten it: the goal is a comfortable result, not the longest possible application.' },
          { title: 'Shade check.', text: 'We compare the result with your starting shade, so you see the change measured rather than guessed.' },
          { title: 'Aftercare instructions.', text: 'Before you leave we explain how to protect the result, especially what to avoid in the first 48 hours, when enamel stains most easily.' },
        ],
      },
      {
        title: 'Why Veneer Clinic',
        inline: [
          { title: 'An honest assessment first.', text: 'We tell you what you can realistically achieve before you decide, even when whitening is not the right treatment for the type of stain you have.' },
          { title: 'Supervised by a dentist from start to finish.', text: 'Gum protection, controlled concentrations and monitoring between cycles: that is what separates professional whitening from a shop-bought kit.' },
          { title: 'In the right order with other treatments.', text: 'If your plan includes veneers or crowns, whitening is scheduled before them, not after.' },
          { title: 'After treatment.', text: 'We explain how to care for the result before you leave, and you can come back for a check-up or touch-up whenever you need.' },
        ],
      },
      {
        title: 'Whitening and hygiene in the same visit',
        intro: [
          'Many patients combine the two: a cleaning session and a whitening session, done properly, in one or two appointments close together.',
          'They work best in exactly this order. Professional cleaning first removes surface stains and tartar, so the whitening gel works on clean enamel: the result is brighter and more even than whitening over a layer of plaque.',
          'If your plan also includes veneers, crowns or implants, whitening is simply scheduled before the prosthetic work, as explained above.',
        ],
      },
      {
        title: 'How long do the results last?',
        intro: [
          'From six months to three years, and it depends almost entirely on habits. Coffee, tea, red wine and tobacco are what bring the shade back: how much you consume and whether you rinse afterwards matters more than anything we do in the chair.',
          'Regular hygiene appointments help a lot, because surface stains are removed before they settle in. Many patients do a short touch-up at their next visit, much simpler than repeating the full treatment.',
          'The first 48 hours matter most. After whitening the enamel is temporarily more porous, so a light-coloured diet for two days protects the result you have just had.',
        ],
      },
    ],
    stats: [
      { value: '1 day', label: 'Treatment time' },
      { value: '1', label: 'Session' },
      { value: '60–90 min', label: 'Session length' },
      { value: '6 mo – 3 yrs', label: 'Results last' },
    ],
    priceTitle: 'Price',
    priceNote: 'Visible result the same day',
    whatTitle: 'How does professional whitening work?',
    what: [
      'Professional whitening uses a whitening gel with a higher concentration than over-the-counter products, applied under strict clinical control. Before any gel is applied, we check your current shade and confirm that whitening is suitable for your teeth and gums.',
      'The gums are then protected and a professional-grade gel is applied to the teeth, often with the help of a special light, in short cycles. It is precisely this combination of stronger gel and clinical protection that makes whitening work faster and more predictably than home kits, often within a single appointment.',
    ],
    calloutTitle: 'Whitening only works on natural teeth',
    calloutText:
      'Whitening gel does not change the colour of crowns, veneers or fillings. If you have visible restorations on your front teeth, let us know before the appointment so we can plan properly.',
    compareTitle: 'Options for a brighter smile',
    compareIntro: 'The right choice depends on the type of staining and the condition of your teeth:',
    compare: [
      { id: 'whitening', tag: 'This treatment', title: 'In-clinic whitening', text: 'A higher-concentration gel applied under clinical control, with visible results in a single session.' },
      { id: 'scaling', tag: 'Most even result', title: 'Cleaning + whitening', text: 'Cleaning first removes tartar and surface stains, then the gel works on clean enamel for a brighter, more even shade.', priceText: '€180' },
      { id: 'crown-emax', tag: 'For deep stains', title: 'E.max veneers', text: 'When the staining is inside the tooth (tetracycline, fluorosis or a darkened tooth), veneers give a new colour that whitening cannot reach.' },
    ],
    fitTitle: 'Who is teeth whitening for?',
    fitIntro: 'Professional whitening is worth considering if:',
    fit: [
      'You want a noticeably brighter smile before an important event',
      'You have stains from coffee, tea, wine or tobacco',
      'You have tried home kits without the result you expected',
      'You want a safe, supervised alternative to shop products',
    ],
    fitNote:
      'Whitening does not work on crowns, veneers or fillings: if you have visible restorations on your front teeth, we will talk together about how to match them once your natural teeth reach their new shade.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'Whitening is completed in a single appointment, from shade measurement to the final result:',
    steps: [
      { title: 'Shade measurement', text: 'We record your current shade on a standard shade guide and confirm that whitening is suitable, with a realistic expectation of the change.' },
      { title: 'Protective preparation', text: 'The gums and soft tissues are protected so the gel only touches the enamel, then a professional-grade whitening gel is applied.' },
      { title: 'Activation', text: 'A single session with a special light, usually 20 to 30 minutes. When sensitivity is a concern we shorten it: the goal is a comfortable result.' },
      { title: 'Shade check', text: 'We compare the result with your starting shade, so you see the change measured on the shade guide rather than guessed.' },
      { title: 'Aftercare instructions', text: 'Before you leave we explain how to protect the result, especially what to avoid in the first 48 hours, when enamel stains most easily.' },
    ],
    whyBandTitle: 'Why choose Veneer Clinic for teeth whitening?',
    whyBandText:
      'Your current shade and gum health are checked before any gel is applied, so whitening is only done once we have confirmed it is genuinely suitable for your teeth.',
    caseText: 'A brighter smile after professional whitening',
    faq: [
      { question: 'Does whitening damage enamel?', answer: 'No. Professional gels remove pigment from within the enamel without removing tooth structure. The risk with unsupervised products is not whitening itself, but uncontrolled concentrations and unprotected gums.' },
      { question: 'Will my teeth become sensitive?', answer: 'Some patients feel mild sensitivity for a day or two after treatment. It is temporary. If your teeth are already sensitive, tell us beforehand and we will adapt the protocol.' },
      { question: 'How white will my teeth get?', answer: 'Most patients gain several shades. The realistic limit depends on your starting shade and the type of stain, so we assess before treatment rather than promising a number. We also aim for a result that looks natural with your skin.' },
      { question: 'How much does whitening cost?', answer: '€150 for an in-clinic whitening session. With scaling before whitening, the total is €180.' },
      { question: 'Does whitening work on crowns or veneers?', answer: 'No. Ceramic and composite keep the shade they were made in. If you have visible restorations, we will talk about how to even out the whole smile, usually by whitening first and replacing or matching the restorations afterwards.' },
      { question: 'Can I eat and drink straight after?', answer: 'Yes, but avoid strongly coloured food and drinks for the first 48 hours: coffee, tea, red wine, berries, tomato sauce and tobacco. Water is always fine.' },
      { question: 'How often can I repeat it?', answer: 'Most people do a touch-up every six to twelve months. We advise you based on how your shade holds.' },
      { question: 'Is one session enough?', answer: 'For most patients, yes. When the starting shade is particularly dark, a second session may be recommended to reach the goal.' },
      { question: 'What if I need help afterwards?', answer: 'We explain aftercare before you leave, and you can contact us or come back to the clinic whenever you need. If something worries you, we advise you directly.' },
    ],
  },
  de: {
    name: 'Bleaching',
    eyebrow: 'Ästhetik · Albanien',
    subtitle:
      'Bleaching in der Praxis, das Ihre Zähne in einer einzigen Sitzung um mehrere Nuancen aufhellt, mit schmelzschonendem Gel und minimaler Empfindlichkeit danach.',
    lead: 'Ein strahlenderes Lächeln in einem einzigen Termin: professionelles Bleaching, sicher unter klinischer Kontrolle durchgeführt.',
    kicker: 'Bleaching in Tirana, Albanien',
    articleTitle: 'Bleaching in Tirana: ein hellerer Farbton, richtig gemacht',
    intro: [
      'Zähne dunkeln so langsam nach, dass die meisten es erst auf einem Foto bemerken. Kaffee, Tee, Rotwein und Tabak hinterlassen Pigmente in den mikroskopischen Poren des Zahnschmelzes, und der Schmelz selbst wird mit dem Alter dünner, sodass mehr vom gelblicheren Dentin darunter durchscheint. Nichts davon bedeutet schlechte Hygiene: Es ist einfach das, was mit der Zeit passiert.',
      'Professionelles Bleaching macht einen guten Teil davon rückgängig. Vom Zahnarzt durchgeführt, mit der richtigen Konzentration und gut geschütztem Zahnfleisch, ist es eine der einfachsten Verbesserungen in der ästhetischen Zahnmedizin: kein Bohren, nichts wird entfernt und nichts ist dauerhaft.',
      'In der Veneer Clinic in Tirana ist das Bleaching in einem einzigen Termin abgeschlossen, und vor Beginn sagen wir Ihnen ehrlich, wie viel Veränderung Sie in Ihrem Fall erwarten können.',
    ],
    sections: [
      {
        title: 'Was Bleaching verändern kann und was nicht',
        intro: ['Das ist der Teil, den die meisten Seiten weglassen, und es ist der Teil, der sich zu lesen lohnt.'],
        inline: [
          { title: 'Bleaching wirkt gut', text: 'bei Verfärbungen im Schmelz, etwa durch Kaffee, Tee, Rotwein, Cola und Tabak, sowie bei allgemeiner Vergilbung im Alter. Das sind die häufigsten Gründe für eine Bleaching-Anfrage, und sie sprechen meist gut an.' },
          { title: 'Bleaching wirkt weniger vorhersehbar', text: 'bei inneren Verfärbungen: Tetrazyklin-Streifen, Fluorose oder ein einzelner Zahn, der nach einem Schlag oder einer Wurzelbehandlung nachgedunkelt ist. Oft wird eine gewisse Verbesserung erreicht, das Ergebnis ist aber begrenzter, und in diesen Fällen können Veneers der bessere Weg sein. Wir sagen es Ihnen beim Termin, nicht danach.' },
          { title: 'Bleaching wirkt gar nicht', text: 'bei Kronen, Veneers, Komposit oder Füllungen. Keramik und Komposit behalten den Farbton, in dem sie gefertigt wurden. Das hat eine direkte Folge: Wenn Sie sichtbare Restaurationen haben, lässt das Bleaching Ihrer natürlichen Zähne sie hervorstechen, statt sich anzugleichen.' },
        ],
      },
      {
        title: 'Wenn Sie Veneers oder Kronen planen: zuerst Bleaching',
        intro: [
          'Restaurationen werden an die Zahnfarbe am Tag ihrer Fertigung angepasst. Bleichen Sie danach, hellen sich die natürlichen Zähne auf, während die Restaurationen genau so bleiben, wie sie waren, und der Farbunterschied ist dauerhaft, sofern sie nicht neu gefertigt werden.',
          'Die richtige Reihenfolge ist also: zuerst bleichen, den Farbton sich stabilisieren lassen, dann die Restaurationen an die neue, hellere Basis anpassen. Umgekehrt vorzugehen ist einer der teuersten Fehler in der ästhetischen Zahnmedizin und lässt sich mit einem einzigen Gespräch vollständig vermeiden.',
          'Wenn Sie für Veneers oder Kronen zu uns kommen, sagen Sie es uns in der Planungsphase, und wir legen das Bleaching vor die prothetische Arbeit.',
        ],
      },
      {
        title: 'Für wen eignet sich Bleaching?',
        intro: [
          'Die meisten gesunden Erwachsenen sind gute Kandidaten. Entscheidend ist der Zustand darunter: Bleaching-Gel auf unbehandelter Karies, freiliegenden Wurzeln oder entzündetem Zahnfleisch ist unangenehm und kann die Empfindlichkeit erhöhen. Deshalb beginnt die Behandlung mit einer Untersuchung, nicht mit dem Gel.',
          'Situationen, die wir einplanen, statt die Behandlung abzulehnen:',
        ],
        points: [
          { title: 'Empfindliche Zähne:', text: 'Das Protokoll kann angepasst und vorher und nachher eine desensibilisierende Behandlung eingesetzt werden.' },
          { title: 'Zahnfleischrückgang oder freiliegende Wurzeloberflächen:', text: 'Sie müssen geschützt und manchmal zuerst behandelt werden.' },
          { title: 'Unbehandelte Karies oder beschädigte Füllungen:', text: 'Sie werden vor dem Bleaching behoben.' },
          { title: 'Bestehende sichtbare Restaurationen:', text: 'Es gilt, was wir oben zur Reihenfolge der Behandlungen gesagt haben.' },
        ],
        outro: ['Bleaching wird während der Schwangerschaft und Stillzeit nicht empfohlen, ebenso wenig für Kinder, deren Zähne sich noch entwickeln.'],
      },
      {
        title: 'So läuft die Behandlung bei uns ab',
        inline: [
          { title: 'Farbbestimmung.', text: 'Wir erfassen Ihren aktuellen Farbton mit einer Standard-Farbskala und bestätigen, dass Bleaching für Ihre Zähne und Ihr Zahnfleisch geeignet ist. Hier legen wir auch eine realistische Erwartung fest, wie viele Nuancen Sie voraussichtlich gewinnen.' },
          { title: 'Schützende Vorbereitung.', text: 'Zahnfleisch und Weichgewebe werden geschützt, damit das Gel nur den Schmelz berührt, dann wird ein professionelles Bleaching-Gel auf die Zähne aufgetragen.' },
          { title: 'Aktivierung.', text: 'Eine einzige Sitzung mit einem speziellen Licht, meist 20 bis 30 Minuten. Bei Empfindlichkeit verkürzen wir sie: Ziel ist ein angenehmes Ergebnis, nicht die längstmögliche Anwendung.' },
          { title: 'Farbkontrolle.', text: 'Wir vergleichen das Ergebnis mit Ihrem Ausgangsfarbton, sodass Sie die Veränderung gemessen und nicht geschätzt sehen.' },
          { title: 'Hinweise für danach.', text: 'Bevor Sie gehen, erklären wir Ihnen, wie Sie das Ergebnis schützen, vor allem, was Sie in den ersten 48 Stunden meiden sollten, wenn der Schmelz am leichtesten verfärbt.' },
        ],
      },
      {
        title: 'Warum Veneer Clinic',
        inline: [
          { title: 'Zuerst eine ehrliche Einschätzung.', text: 'Wir sagen Ihnen vor der Entscheidung, was realistisch erreichbar ist, auch wenn Bleaching nicht die richtige Behandlung für Ihre Art der Verfärbung ist.' },
          { title: 'Von Anfang bis Ende zahnärztlich betreut.', text: 'Zahnfleischschutz, kontrollierte Konzentrationen und Überwachung zwischen den Zyklen: Das unterscheidet professionelles Bleaching von einem Set aus dem Laden.' },
          { title: 'In der richtigen Reihenfolge mit anderen Behandlungen.', text: 'Gehören Veneers oder Kronen zu Ihrem Plan, wird das Bleaching davor geplant, nicht danach.' },
          { title: 'Nach der Behandlung.', text: 'Wir erklären Ihnen vor dem Gehen, wie Sie das Ergebnis pflegen, und Sie können jederzeit zur Kontrolle oder Auffrischung wiederkommen.' },
        ],
      },
      {
        title: 'Bleaching und Prophylaxe im selben Besuch',
        intro: [
          'Viele Patienten kombinieren beides: eine Reinigungs- und eine Bleaching-Sitzung, richtig durchgeführt, in einem oder zwei nah beieinanderliegenden Terminen.',
          'Am besten wirken sie genau in dieser Reihenfolge. Die professionelle Reinigung entfernt zuerst oberflächliche Verfärbungen und Zahnstein, sodass das Bleaching-Gel auf sauberem Schmelz wirkt: Das Ergebnis ist heller und gleichmäßiger als ein Bleaching über einer Plaqueschicht.',
          'Gehören auch Veneers, Kronen oder Implantate zu Ihrem Plan, wird das Bleaching einfach vor die prothetische Arbeit gelegt, wie oben erklärt.',
        ],
      },
      {
        title: 'Wie lange hält das Ergebnis?',
        intro: [
          'Sechs Monate bis drei Jahre, und es hängt fast vollständig von den Gewohnheiten ab. Kaffee, Tee, Rotwein und Tabak bringen den Farbton zurück: Wie viel Sie davon konsumieren und ob Sie danach den Mund ausspülen, zählt mehr als alles, was wir am Stuhl tun.',
          'Regelmäßige Prophylaxe hilft sehr, weil oberflächliche Verfärbungen entfernt werden, bevor sie sich festsetzen. Viele Patienten lassen beim nächsten Besuch eine kurze Auffrischung machen, viel einfacher als die komplette Behandlung zu wiederholen.',
          'Die ersten 48 Stunden sind am wichtigsten. Nach dem Bleaching ist der Schmelz vorübergehend poröser, daher schützt eine helle Ernährung für zwei Tage das gerade erzielte Ergebnis.',
        ],
      },
    ],
    stats: [
      { value: '1 Tag', label: 'Behandlungsdauer' },
      { value: '1', label: 'Sitzung' },
      { value: '60–90 Min.', label: 'Dauer der Sitzung' },
      { value: '6 Mon. – 3 J.', label: 'Ergebnis hält' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Sichtbares Ergebnis am selben Tag',
    whatTitle: 'Wie funktioniert professionelles Bleaching?',
    what: [
      'Professionelles Bleaching verwendet ein Gel mit höherer Konzentration als frei verkäufliche Produkte, aufgetragen unter strenger klinischer Kontrolle. Bevor Gel aufgetragen wird, prüfen wir Ihren aktuellen Farbton und bestätigen, dass Bleaching für Ihre Zähne und Ihr Zahnfleisch geeignet ist.',
      'Dann wird das Zahnfleisch geschützt und ein professionelles Gel auf die Zähne aufgetragen, oft mit Unterstützung eines speziellen Lichts, in kurzen Zyklen. Genau diese Kombination aus stärkerem Gel und klinischem Schutz lässt das Bleaching schneller und vorhersehbarer wirken als Heimsets, oft in einem einzigen Termin.',
    ],
    calloutTitle: 'Bleaching wirkt nur bei natürlichen Zähnen',
    calloutText:
      'Bleaching-Gel verändert die Farbe von Kronen, Veneers oder Füllungen nicht. Wenn Sie sichtbare Restaurationen an den Frontzähnen haben, sagen Sie es uns vor dem Termin, damit wir richtig planen können.',
    compareTitle: 'Optionen für ein helleres Lächeln',
    compareIntro: 'Die richtige Wahl hängt von der Art der Verfärbung und dem Zustand Ihrer Zähne ab:',
    compare: [
      { id: 'whitening', tag: 'Diese Behandlung', title: 'Bleaching in der Praxis', text: 'Ein höher konzentriertes Gel unter klinischer Kontrolle, mit sichtbarem Ergebnis in einer einzigen Sitzung.' },
      { id: 'scaling', tag: 'Gleichmäßigstes Ergebnis', title: 'Reinigung + Bleaching', text: 'Die Reinigung entfernt zuerst Zahnstein und oberflächliche Verfärbungen, dann wirkt das Gel auf sauberem Schmelz für einen helleren, gleichmäßigeren Farbton.', priceText: '180 €' },
      { id: 'crown-emax', tag: 'Bei tiefen Verfärbungen', title: 'E.max Veneers', text: 'Liegt die Verfärbung im Zahn (Tetrazyklin, Fluorose oder ein nachgedunkelter Zahn), geben Veneers eine neue Farbe, die Bleaching nicht erreicht.' },
    ],
    fitTitle: 'Für wen ist Bleaching?',
    fitIntro: 'Professionelles Bleaching lohnt sich, wenn:',
    fit: [
      'Sie vor einem wichtigen Ereignis ein deutlich helleres Lächeln möchten',
      'Sie Verfärbungen durch Kaffee, Tee, Wein oder Tabak haben',
      'Sie Heimsets ohne das erwartete Ergebnis ausprobiert haben',
      'Sie eine sichere, betreute Alternative zu Produkten aus dem Laden suchen',
    ],
    fitNote:
      'Bleaching wirkt nicht bei Kronen, Veneers oder Füllungen: Wenn Sie sichtbare Restaurationen an den Frontzähnen haben, besprechen wir gemeinsam, wie wir sie anpassen, sobald Ihre natürlichen Zähne den neuen Farbton erreicht haben.',
    stepsTitle: 'So funktioniert die Behandlung',
    stepsIntro: 'Das Bleaching ist in einem einzigen Termin abgeschlossen, von der Farbbestimmung bis zum Endergebnis:',
    steps: [
      { title: 'Farbbestimmung', text: 'Wir erfassen Ihren aktuellen Farbton mit einer Standard-Farbskala und bestätigen, dass Bleaching geeignet ist, mit einer realistischen Erwartung der Veränderung.' },
      { title: 'Schützende Vorbereitung', text: 'Zahnfleisch und Weichgewebe werden geschützt, damit das Gel nur den Schmelz berührt, dann wird ein professionelles Bleaching-Gel aufgetragen.' },
      { title: 'Aktivierung', text: 'Eine einzige Sitzung mit einem speziellen Licht, meist 20 bis 30 Minuten. Bei Empfindlichkeit verkürzen wir sie: Ziel ist ein angenehmes Ergebnis.' },
      { title: 'Farbkontrolle', text: 'Wir vergleichen das Ergebnis mit Ihrem Ausgangsfarbton, sodass Sie die Veränderung auf der Farbskala gemessen und nicht geschätzt sehen.' },
      { title: 'Hinweise für danach', text: 'Bevor Sie gehen, erklären wir Ihnen, wie Sie das Ergebnis schützen, vor allem, was Sie in den ersten 48 Stunden meiden sollten.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für Ihr Bleaching?',
    whyBandText:
      'Ihr aktueller Farbton und Ihre Zahnfleischgesundheit werden geprüft, bevor Gel aufgetragen wird. So bleichen wir erst, wenn wir bestätigt haben, dass es für Ihre Zähne wirklich geeignet ist.',
    caseText: 'Ein strahlenderes Lächeln nach professionellem Bleaching',
    faq: [
      { question: 'Schadet Bleaching dem Zahnschmelz?', answer: 'Nein. Professionelle Gele entfernen Pigmente aus dem Schmelz, ohne Zahnsubstanz abzutragen. Das Risiko unbetreuter Produkte ist nicht das Bleaching selbst, sondern unkontrollierte Konzentrationen und ungeschütztes Zahnfleisch.' },
      { question: 'Werden meine Zähne empfindlich?', answer: 'Manche Patienten spüren ein bis zwei Tage nach der Behandlung eine leichte Empfindlichkeit. Sie ist vorübergehend. Wenn Ihre Zähne bereits empfindlich sind, sagen Sie es uns vorher, und wir passen das Protokoll an.' },
      { question: 'Wie weiß werden meine Zähne?', answer: 'Die meisten Patienten gewinnen mehrere Nuancen. Die realistische Grenze hängt vom Ausgangsfarbton und der Art der Verfärbung ab, deshalb beurteilen wir vor der Behandlung, statt eine Zahl zu versprechen. Wir streben auch ein Ergebnis an, das zu Ihrer Haut natürlich wirkt.' },
      { question: 'Was kostet ein Bleaching?', answer: '150 € für eine Bleaching-Sitzung in der Praxis. Mit Zahnsteinentfernung vor dem Bleaching sind es insgesamt 180 €.' },
      { question: 'Wirkt Bleaching bei Kronen oder Veneers?', answer: 'Nein. Keramik und Komposit behalten den Farbton, in dem sie gefertigt wurden. Wenn Sie sichtbare Restaurationen haben, besprechen wir, wie wir das ganze Lächeln angleichen, meist durch zuerst Bleaching und danach Ersetzen oder Anpassen der Restaurationen.' },
      { question: 'Kann ich direkt danach essen und trinken?', answer: 'Ja, aber meiden Sie in den ersten 48 Stunden stark färbende Speisen und Getränke: Kaffee, Tee, Rotwein, Beeren, Tomatensoße und Tabak. Wasser ist immer in Ordnung.' },
      { question: 'Wie oft kann ich es wiederholen?', answer: 'Die meisten lassen alle sechs bis zwölf Monate auffrischen. Wir beraten Sie danach, wie gut sich Ihr Farbton hält.' },
      { question: 'Reicht eine Sitzung?', answer: 'Für die meisten Patienten ja. Ist der Ausgangsfarbton besonders dunkel, kann eine zweite Sitzung empfohlen werden, um das Ziel zu erreichen.' },
      { question: 'Was, wenn ich danach Hilfe brauche?', answer: 'Wir erklären Ihnen die Nachsorge, bevor Sie gehen, und Sie können uns jederzeit kontaktieren oder in die Klinik kommen. Wenn Sie etwas beunruhigt, beraten wir Sie direkt.' },
    ],
  },
  it: {
    name: 'Sbiancamento dentale',
    eyebrow: 'Estetica · Albania',
    subtitle:
      'Sbiancamento in studio che schiarisce i denti di diverse tonalità in una sola seduta, con un gel sicuro per lo smalto e sensibilità minima dopo il trattamento.',
    lead: 'Un sorriso più luminoso in un solo appuntamento: sbiancamento professionale, eseguito in sicurezza sotto controllo clinico.',
    kicker: 'Sbiancamento dentale a Tirana, Albania',
    articleTitle: 'Sbiancamento dentale a Tirana: una tonalità più luminosa, fatta come si deve',
    intro: [
      'I denti si scuriscono così lentamente che la maggior parte delle persone se ne accorge solo guardando una foto. Caffè, tè, vino rosso e tabacco lasciano pigmenti nei pori microscopici dello smalto, e lo smalto stesso si assottiglia con l’età, lasciando trasparire di più la dentina sottostante, più gialla. Niente di tutto ciò indica scarsa igiene: è semplicemente ciò che accade con il tempo.',
      'Lo sbiancamento professionale ne inverte buona parte. Eseguito dal dentista, con la giusta concentrazione e le gengive ben protette, è uno dei miglioramenti più semplici dell’odontoiatria estetica: niente fresa, nulla da rimuovere e niente di permanente.',
      'Alla Veneer Clinic di Tirana, lo sbiancamento si conclude in un solo appuntamento, e prima di iniziare ti diciamo sinceramente quanto cambiamento aspettarti nel tuo caso.',
    ],
    sections: [
      {
        title: 'Cosa può e cosa non può cambiare lo sbiancamento',
        intro: ['È la parte che la maggior parte delle pagine tralascia, ed è quella che vale la pena leggere.'],
        inline: [
          { title: 'Lo sbiancamento funziona bene', text: 'sulle macchie che si trovano nello smalto, come caffè, tè, vino rosso, bibite a base di cola e tabacco, oltre all’ingiallimento generale dovuto all’età. Sono i motivi più comuni per cui si chiede uno sbiancamento e di solito rispondono bene.' },
          { title: 'Lo sbiancamento funziona in modo meno prevedibile', text: 'sulle macchie interne: bande da tetraciclina, fluorosi o un singolo dente scurito dopo un trauma o una devitalizzazione. Spesso si ottiene un certo miglioramento, ma il risultato è più limitato, e in questi casi le faccette possono essere la strada migliore. Te lo diciamo durante la visita, non dopo.' },
          { title: 'Lo sbiancamento non funziona affatto', text: 'su corone, faccette, composito o otturazioni. Ceramica e composito mantengono la tonalità con cui sono stati realizzati. Questo ha una conseguenza diretta: se hai restauri visibili, sbiancare i denti naturali li farà risaltare, non fondere.' },
        ],
      },
      {
        title: 'Se stai pianificando faccette o corone, prima lo sbiancamento',
        intro: [
          'I restauri vengono abbinati al colore dei denti il giorno in cui vengono realizzati. Se sbianchi dopo, i denti naturali si schiariscono e i restauri restano esattamente com’erano, e la differenza è permanente a meno di rifarli.',
          'Quindi l’ordine corretto è: prima lo sbiancamento, si lascia stabilizzare la tonalità, poi i restauri vengono abbinati alla nuova base più luminosa. Farlo al contrario è uno degli errori più costosi dell’odontoiatria estetica, e si evita del tutto con una conversazione.',
          'Se vieni da noi per faccette o corone, diccelo in fase di pianificazione e inseriamo lo sbiancamento prima del lavoro protesico.',
        ],
      },
      {
        title: 'Per chi è indicato lo sbiancamento?',
        intro: [
          'La maggior parte degli adulti sani è un buon candidato. Ciò che conta è la condizione sottostante: il gel sbiancante applicato su carie non trattate, radici esposte o gengive infiammate è fastidioso e può aumentare la sensibilità. Per questo il trattamento inizia con una visita, non con il gel.',
          'Situazioni che pianifichiamo invece di rifiutare il trattamento:',
        ],
        points: [
          { title: 'Denti sensibili:', text: 'il protocollo può essere adattato e si può usare un trattamento desensibilizzante prima e dopo.' },
          { title: 'Recessione gengivale o superfici radicolari esposte:', text: 'vanno protette e a volte trattate prima.' },
          { title: 'Carie non trattate o otturazioni danneggiate:', text: 'si risolvono prima dello sbiancamento.' },
          { title: 'Restauri visibili esistenti:', text: 'vale quanto detto sopra sull’ordine dei trattamenti.' },
        ],
        outro: ['Lo sbiancamento non è consigliato in gravidanza o durante l’allattamento, né per i bambini, i cui denti sono ancora in sviluppo.'],
      },
      {
        title: 'Come funziona il trattamento da noi',
        inline: [
          { title: 'Misurazione della tonalità.', text: 'Registriamo la tonalità attuale con una scala colori standard e confermiamo che lo sbiancamento è adatto ai tuoi denti e alle tue gengive. Qui fissiamo anche un’aspettativa realistica di quante tonalità potresti guadagnare.' },
          { title: 'Preparazione protettiva.', text: 'Gengive e tessuti molli vengono protetti affinché il gel tocchi solo lo smalto, poi si applica sui denti un gel sbiancante di livello professionale.' },
          { title: 'Attivazione.', text: 'Una sola seduta con una luce speciale, di solito da 20 a 30 minuti. Quando la sensibilità è un problema la accorciamo: l’obiettivo è un risultato confortevole, non l’applicazione più lunga possibile.' },
          { title: 'Controllo della tonalità.', text: 'Confrontiamo il risultato con la tonalità iniziale, così vedi il cambiamento misurato e non ipotizzato.' },
          { title: 'Istruzioni per dopo.', text: 'Prima che tu vada via ti spieghiamo come proteggere il risultato, soprattutto cosa evitare nelle prime 48 ore, quando lo smalto si macchia più facilmente.' },
        ],
      },
      {
        title: 'Perché Veneer Clinic',
        inline: [
          { title: 'Prima una valutazione sincera.', text: 'Ti diciamo cosa puoi realisticamente ottenere prima che tu decida, anche quando lo sbiancamento non è il trattamento giusto per il tipo di macchia che hai.' },
          { title: 'Sotto la supervisione del dentista dall’inizio alla fine.', text: 'Protezione gengivale, concentrazioni controllate e monitoraggio tra i cicli: è ciò che distingue lo sbiancamento professionale da un kit comprato in negozio.' },
          { title: 'Nell’ordine giusto con gli altri trattamenti.', text: 'Se il tuo piano include faccette o corone, lo sbiancamento viene programmato prima, non dopo.' },
          { title: 'Dopo il trattamento.', text: 'Ti spieghiamo come prenderti cura del risultato prima che tu vada via, e puoi tornare per un controllo o un ritocco ogni volta che ne hai bisogno.' },
        ],
      },
      {
        title: 'Sbiancamento e igiene nella stessa visita',
        intro: [
          'Molti pazienti uniscono le due cose: una seduta di pulizia e una di sbiancamento, eseguite correttamente, in uno o due appuntamenti ravvicinati.',
          'Funzionano meglio proprio in quest’ordine. La pulizia professionale rimuove prima le macchie superficiali e il tartaro, così il gel sbiancante agisce su uno smalto pulito: il risultato è più luminoso e uniforme rispetto a uno sbiancamento su uno strato di placca.',
          'Se il tuo piano include anche faccette, corone o impianti, lo sbiancamento viene semplicemente programmato prima del lavoro protesico, come spiegato sopra.',
        ],
      },
      {
        title: 'Quanto durano i risultati?',
        intro: [
          'Da sei mesi a tre anni, e dipende quasi interamente dalle abitudini. Caffè, tè, vino rosso e tabacco sono ciò che riporta indietro la tonalità: quanto ne consumi e se ti sciacqui la bocca dopo conta più di qualsiasi cosa facciamo noi alla poltrona.',
          'Le sedute di igiene regolari aiutano molto, perché le macchie superficiali vengono rimosse prima che si fissino. Molti pazienti fanno un breve ritocco alla visita successiva, molto più semplice che ripetere l’intero trattamento.',
          'Le prime 48 ore contano di più. Dopo lo sbiancamento lo smalto è temporaneamente più poroso, quindi una dieta a colori chiari per due giorni protegge il risultato appena ottenuto.',
        ],
      },
    ],
    stats: [
      { value: '1 giorno', label: 'Durata del trattamento' },
      { value: '1', label: 'Seduta' },
      { value: '60–90 min', label: 'Durata della seduta' },
      { value: '6 mesi – 3 anni', label: 'Durata dei risultati' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Risultato visibile lo stesso giorno',
    whatTitle: 'Come funziona lo sbiancamento professionale?',
    what: [
      'Lo sbiancamento professionale utilizza un gel con una concentrazione più alta dei prodotti da banco, applicato sotto rigoroso controllo clinico. Prima di applicare qualsiasi gel, controlliamo la tonalità attuale e confermiamo che lo sbiancamento è adatto ai tuoi denti e alle tue gengive.',
      'Le gengive vengono poi protette e sui denti si applica un gel di livello professionale, spesso con l’aiuto di una luce speciale, in cicli brevi. È proprio questa combinazione di gel più forte e protezione clinica che rende lo sbiancamento più rapido e prevedibile dei kit domiciliari, spesso in un solo appuntamento.',
    ],
    calloutTitle: 'Lo sbiancamento funziona solo sui denti naturali',
    calloutText:
      'Il gel sbiancante non cambia il colore di corone, faccette o otturazioni. Se hai restauri visibili sui denti anteriori, faccelo sapere prima dell’appuntamento così possiamo pianificare correttamente.',
    compareTitle: 'Opzioni per un sorriso più luminoso',
    compareIntro: 'La scelta giusta dipende dal tipo di macchie e dalle condizioni dei tuoi denti:',
    compare: [
      { id: 'whitening', tag: 'Questo trattamento', title: 'Sbiancamento in studio', text: 'Un gel a concentrazione più alta applicato sotto controllo clinico, con risultati visibili in una sola seduta.' },
      { id: 'scaling', tag: 'Risultato più uniforme', title: 'Pulizia + sbiancamento', text: 'La pulizia rimuove prima tartaro e macchie superficiali, poi il gel agisce su uno smalto pulito per una tonalità più luminosa e uniforme.', priceText: '180 €' },
      { id: 'crown-emax', tag: 'Per macchie profonde', title: 'Faccette E.max', text: 'Quando la macchia è dentro il dente (tetraciclina, fluorosi o un dente scurito), le faccette danno un nuovo colore che lo sbiancamento non raggiunge.' },
    ],
    fitTitle: 'Per chi è lo sbiancamento dentale?',
    fitIntro: 'Vale la pena considerare lo sbiancamento professionale se:',
    fit: [
      'Desideri un sorriso visibilmente più luminoso prima di un evento importante',
      'Hai macchie da caffè, tè, vino o tabacco',
      'Hai provato kit domiciliari senza il risultato sperato',
      'Cerchi un’alternativa sicura e supervisionata ai prodotti da negozio',
    ],
    fitNote:
      'Lo sbiancamento non agisce su corone, faccette o otturazioni: se hai restauri visibili sui denti anteriori, valuteremo insieme come abbinarli una volta che i denti naturali avranno raggiunto la nuova tonalità.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'Lo sbiancamento si conclude in un solo appuntamento, dalla misurazione della tonalità al risultato finale:',
    steps: [
      { title: 'Misurazione della tonalità', text: 'Registriamo la tonalità attuale con una scala colori standard e confermiamo che lo sbiancamento è adatto, con un’aspettativa realistica del cambiamento.' },
      { title: 'Preparazione protettiva', text: 'Gengive e tessuti molli vengono protetti affinché il gel tocchi solo lo smalto, poi si applica un gel sbiancante di livello professionale.' },
      { title: 'Attivazione', text: 'Una sola seduta con una luce speciale, di solito da 20 a 30 minuti. Quando la sensibilità è un problema la accorciamo: l’obiettivo è un risultato confortevole.' },
      { title: 'Controllo della tonalità', text: 'Confrontiamo il risultato con la tonalità iniziale, così vedi il cambiamento misurato sulla scala colori e non ipotizzato.' },
      { title: 'Istruzioni per dopo', text: 'Prima che tu vada via ti spieghiamo come proteggere il risultato, soprattutto cosa evitare nelle prime 48 ore.' },
    ],
    whyBandTitle: 'Perché scegliere Veneer Clinic per lo sbiancamento?',
    whyBandText:
      'La tonalità attuale e la salute delle gengive vengono controllate prima di applicare qualsiasi gel, così lo sbiancamento si esegue solo dopo aver confermato che è davvero adatto ai tuoi denti.',
    caseText: 'Un sorriso più luminoso dopo lo sbiancamento professionale',
    faq: [
      { question: 'Lo sbiancamento danneggia lo smalto?', answer: 'No. I gel professionali rimuovono il pigmento dall’interno dello smalto senza togliere struttura dentale. Il rischio dei prodotti non supervisionati non è lo sbiancamento in sé, ma le concentrazioni non controllate e le gengive non protette.' },
      { question: 'I miei denti diventeranno sensibili?', answer: 'Alcuni pazienti avvertono una lieve sensibilità per uno o due giorni dopo il trattamento. È temporanea. Se i tuoi denti sono già sensibili, diccelo prima e adattiamo il protocollo.' },
      { question: 'Quanto diventeranno bianchi i miei denti?', answer: 'La maggior parte dei pazienti guadagna diverse tonalità. Il limite realistico dipende dalla tonalità di partenza e dal tipo di macchia, per questo valutiamo prima del trattamento invece di promettere un numero. Puntiamo anche a un risultato naturale con la tua carnagione.' },
      { question: 'Quanto costa lo sbiancamento?', answer: '150 € per una seduta di sbiancamento in studio. Con l’ablazione del tartaro prima dello sbiancamento, il totale è 180 €.' },
      { question: 'Lo sbiancamento funziona su corone o faccette?', answer: 'No. Ceramica e composito mantengono la tonalità con cui sono stati realizzati. Se hai restauri visibili, parleremo di come uniformare l’intero sorriso, di solito sbiancando prima e sostituendo o abbinando i restauri dopo.' },
      { question: 'Posso mangiare e bere subito dopo?', answer: 'Sì, ma evita cibi e bevande molto colorati nelle prime 48 ore: caffè, tè, vino rosso, frutti di bosco, salsa di pomodoro e tabacco. L’acqua va sempre bene.' },
      { question: 'Ogni quanto posso ripeterlo?', answer: 'La maggior parte delle persone fa un ritocco ogni sei-dodici mesi. Ti consigliamo in base a come si mantiene la tua tonalità.' },
      { question: 'Basta una seduta?', answer: 'Per la maggior parte dei pazienti, sì. Quando la tonalità di partenza è particolarmente scura, può essere consigliata una seconda seduta per raggiungere l’obiettivo.' },
      { question: 'E se dopo ho bisogno di aiuto?', answer: 'Ti spieghiamo le cure post-trattamento prima che tu vada via, e puoi contattarci o tornare in clinica ogni volta che ne hai bisogno. Se qualcosa ti preoccupa, ti consigliamo direttamente.' },
    ],
  },
};

export default function WhiteningPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="whitening"
      heroImage={images.beforeAfterEdited[1] ?? images.heroAfter}
      whatImage={images.results[4]?.[0] ?? images.heroAfter}
    />
  );
}
