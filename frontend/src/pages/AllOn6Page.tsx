import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'All-on-6',
    eyebrow: 'Implante · Shqipëri',
    subtitle: 'Zëvendësim i plotë i harkut dentar me 6 implante për stabilitet shtesë.',
    lead: 'Një hark i plotë i rindërtuar mbi gjashtë implante në vend të katërve: mbështetje shtesë për një kafshim më të fortë ose kockë më të butë.',
    kicker: 'All-on-6 në Tiranë, Shqipëri',
    articleTitle: 'All-on-6: një hark i plotë dhëmbësh fiks mbi gjashtë implante',
    intro: [
      'All-on-6 zëvendëson një hark të plotë dhëmbësh të munguar ose të dëmtuar duke përdorur gjashtë implante në vend të katër, duke shpërndarë forcën e kafshimit në më shumë pika mbështetëse.',
      'Zakonisht rekomandohet për pacientët që duan stabilitet shtesë, që kanë një kafshim të fortë, ose që kanë kockë të mjaftueshme për implante shtesë, sidomos në nofullën e sipërme, ku kocka është më e butë.',
      'Në Veneer Clinic, All-on-6 kushton 5.500 € për nofull si paketë e plotë dhe kryhet në dy udhëtime, me gjashtë muaj ndërmjet tyre. Largoheni nga udhëtimi i parë me dhëmbë të përkohshëm fiks.',
    ],
    sections: [
      {
        title: 'Pse gjashtë implante në vend të katërve',
        intro: [
          'Dy implantet shtesë shpërndajnë forcën e kafshimit në më shumë pika përgjatë nofullës. Secili implant mban më pak ngarkesë, ura ka më shumë mbështetje në skaje dhe sistemi në tërësi ka më shumë rezervë.',
          'Kjo është arsyeja kryesore për zgjedhjen e gjashtë implanteve: struktura kockore ose forca e kafshimit e disa pacientëve përfitojnë më shumë nga shpërndarja e ngarkesës mbi më shumë implante. Nuk do të thotë se All-on-4 është më pak i sigurt; do të thotë se disa raste kanë nevojë për më shumë mbështetje se të tjerët.',
        ],
      },
      {
        title: 'Kur gjashtë kanë më shumë kuptim',
        inline: [
          { title: 'Nofulla e sipërme.', text: 'Kocka lart është më e butë dhe më pak e dendur se poshtë. Më shumë implante do të thotë më shumë sipërfaqe kontakti me kockën dhe më pak ngarkesë mbi secilin.' },
          { title: 'Kafshim i fortë ose shtrëngim dhëmbësh.', text: 'Kur forca e kafshimit është e madhe, ose kur dhëmbët shtrëngohen natën, ngarkesa e ndarë në gjashtë pika e mbron më mirë si implantet ashtu edhe urën.' },
          { title: 'Hark më i gjerë.', text: 'Një nofull e gjatë ose e gjerë lë një urë me krahë më të gjatë mbi katër implante. Dy implante shtesë e shkurtojnë atë levë.' },
          { title: 'Kockë e mjaftueshme.', text: 'All-on-6 kërkon kockë në gjashtë pozicione. Kur kocka e lejon, shtimi i dy implanteve është mënyra më e thjeshtë për të rritur rezervën e sistemit.' },
        ],
      },
      {
        title: 'Dhëmbë fiks që në udhëtimin e parë',
        intro: [
          'Çdo dhëmb që nuk shpëtohet hiqet dhe të gjashtë implantet vendosen në të njëjtën seancë. Mbi to fiksohet një urë e përkohshme po atë ditë, kështu që largoheni me dhëmbë funksionalë dhe jo me boshllëk apo me protezë të lëvizshme.',
          'Ura e përkohshme është fikse: nuk hiqet natën dhe nuk lëviz kur flisni apo hani. Në javët e para ndiqet një dietë e butë, ndërsa implantet fillojnë të integrohen me kockën.',
        ],
      },
      {
        title: 'Planifikim më i saktë se te All-on-4',
        intro: [
          'All-on-6 kërkon më shumë precizion në planifikim sesa All-on-4: gjashtë implantet duhet të pozicionohen që ta shpërndajnë ngarkesën në mënyrë të barabartë përgjatë harkut, pa prekur sinusin lart ose nervin poshtë.',
          'Çdo rast planifikohet nga imazhet e kockës suaj. Para kirurgjisë kontrollojmë vëllimin dhe dendësinë në çdo pozicion të mundshëm dhe ju themi hapur nëse kocka mbështet vërtet gjashtë implante, apo nëse All-on-4 është zgjidhja më e mirë për rastin tuaj.',
        ],
      },
      {
        title: 'Cili material ure është i duhuri për ju?',
        intro: ['Ura përfundimtare ofrohet në dy materiale, secili me një raport të ndryshëm mes kostos, qëndrueshmërisë dhe pamjes:'],
        cards: [
          { title: 'Urë hibride akrilike (PMMA)', text: 'Një skelet titani i veshur me dhëmbë dhe mish akrilik. Kosto më e ulët dhe më e lehtë, megjithëse sipërfaqja akrilike konsumohet më shpejt dhe zakonisht kërkon rifreskim ose zëvendësim çdo 5 deri në 7 vjet.' },
          { title: 'Urë hibride zirkoni', text: 'Një urë monolitike zirkoni e frezuar nga një bllok i vetëm. Shumë rezistente ndaj konsumit, njollave dhe thyerjes, me një tejdukshmëri më natyrale, të ngjashme me dhëmbin. Zakonisht zgjat 10 deri në 15 vjet ose më shumë.' },
        ],
        outro: ['Cili material përfshihet në paketën tuaj, dhe çdo diferencë çmimi, shkruhen në ofertë para se të filloni.'],
      },
      {
        title: 'Dy udhëtime, gjashtë muaj larg',
        intro: [
          'All-on-6 kërkon dy udhëtime në Tiranë, të ndara nga një periudhë shërimi në shtëpi. Implantet kanë nevojë për rreth gjashtë muaj që të shkrihen me kockën para se mbi to të vendoset ura përfundimtare.',
          'Në udhëtimin e parë bëhen ekzaminimi, kirurgjia dhe ura e përkohshme fikse. Në të dytin merren masat dhe vendoset ura përfundimtare, me kafshimin e rregulluar. Ju ndihmojmë me organizimin e udhëtimit dhe të qëndrimit për të dyja.',
        ],
      },
    ],
    stats: [
      { value: '6', label: 'Implante për nofull' },
      { value: '2', label: 'Udhëtime' },
      { value: '6 muaj', label: 'Ndërmjet udhëtimeve' },
      { value: '2,5–3,5 orë', label: 'Kirurgjia për nofull' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Dhëmbë fiks që në udhëtimin e parë',
    whatTitle: 'Çfarë është All-on-6?',
    what: [
      'All-on-6 zëvendëson një hark të plotë dhëmbësh të munguar ose të dëmtuar me një urë të vetme fikse, të mbajtur nga gjashtë implante në vend të katërve të përdorur në All-on-4. Dy implantet shtesë shpërndajnë forcën e kafshimit në më shumë pika mbështetëse përgjatë nofullës.',
      'Ura është fikse në vend dhe nuk hiqet kurrë nga pacienti, duke ofruar një alternativë të përhershme ndaj protezës së lëvizshme. Dentisti konfirmon nga imazhet se cilën qasje e mbështet realisht kocka juaj.',
    ],
    calloutTitle: 'Shëndeti ka po aq rëndësi sa nofulla',
    calloutText:
      'Diabeti i pakontrolluar, infeksioni aktiv i mishrave, duhanpirja e rëndë dhe disa barna për kockat ndikojnë në cilësinë e integrimit të implanteve. Disa prej tyre menaxhohen dhe nuk e përjashtojnë trajtimin, por duhen ditur paraprakisht, jo të zbulohen më vonë.',
    compareTitle: 'Cili opsion ju përshtatet?',
    compareIntro: 'Të gjitha zëvendësojnë një hark të plotë dhëmbësh fiks. Ndryshojnë në numrin e implanteve dhe në kockën që kërkojnë:',
    compare: [
      { id: 'all-on-6', tag: 'Ky trajtim', title: 'All-on-6', text: 'Gjashtë implante shpërndajnë kafshimin në më shumë pika. Rezervë shtesë për nofullën e sipërme, kafshim të fortë ose hark të gjerë.' },
      { id: 'all-on-4', tag: 'Më pak implante', title: 'All-on-4', text: 'Katër implante, dy prej tyre të anuara, mbajnë të njëjtën urë fikse. Shpesh shmang shtimin e kockës kur kocka prapa është e pakët.' },
      { id: 'sinus-lift', tag: 'Kur kocka mungon', title: 'Ngritje sinusi', text: 'Kur kocka lart është shumë e pakët edhe për implante të anuara, ngritja e sinusit ndërton lartësinë që u nevojitet implanteve.' },
    ],
    fitTitle: 'Për kë është All-on-6?',
    fitIntro: 'All-on-6 zakonisht rekomandohet për personat që:',
    fit: [
      'Ju mungojnë shumica ose të gjithë dhëmbët në një nofull',
      'Dëshironi stabilitetin maksimal për një restaurim të plotë të harkut',
      'Ju është këshilluar që gjashtë implante i përshtaten strukturës suaj kockore më mirë se katër',
      'Keni një kafshim të fortë ose i shtrëngoni dhëmbët natën',
      'Kanë nevojë për restaurim të nofullës së sipërme, ku kocka është më e butë',
      'Dëshironi një alternativë fikse dhe të përhershme ndaj protezave',
    ],
    fitNote:
      'All-on-6 zakonisht nuk rekomandohet për pacientët me diabet të pakontrolluar, infeksion aktiv të mishrave ose duhanpirje të rëndë, pasi këto ndikojnë ndjeshëm në integrimin e implanteve. Në këto raste rekomandojmë që fillimisht të trajtohet problemi bazë.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'All-on-6 kërkon dy udhëtime në Tiranë, të ndara nga gjashtë muaj shërimi në shtëpi. Të gjashtë implantet vendosen në një vizitë dhe largoheni me urë fikse të përkohshme po atë ditë:',
    steps: [
      { title: 'Konsulta dhe imazhet', text: 'Nga grafia panoramike planifikojmë rastin; në klinikë imazhet e kockës përcaktojnë pozicionin e të gjashtë implanteve për mbështetje optimale.' },
      { title: 'Vendosja e implanteve', text: 'Çdo dhëmb që nuk shpëtohet hiqet dhe gjashtë implante vendosen me anestezi lokale në një seancë, zakonisht 2,5 deri në 3,5 orë për nofull.' },
      { title: 'Dhëmbë të përkohshëm', text: 'Një urë fikse e përkohshme vendoset po atë ditë, kështu që largoheni me dhëmbë funksionalë. Pastaj gjashtë muaj shërim në shtëpi.' },
      { title: 'Restaurimi përfundimtar', text: 'Në udhëtimin e dytë vendoset ura juaj e përhershme, e punuar posaçërisht për ju, me kafshimin e rregulluar.' },
    ],
    whyBandTitle: 'Pse të zgjidhni Veneer Clinic për All-on-6?',
    whyBandText:
      'All-on-6 kërkon më shumë precizion në planifikim se All-on-4: gjashtë implantet duhet të pozicionohen që ta shpërndajnë ngarkesën në mënyrë të barabartë përgjatë harkut. Çdo rast planifikohet sipas anatomisë së kockës suaj, çmimi i paketës është i fiksuar që në fillim, dhe ju themi hapur nëse katër implante mjaftojnë.',
    caseText: 'Restaurim i plotë i harkut me All-on-6',
    faq: [
      { question: 'Sa kushton All-on-6?', answer: '5.500 € për nofull, si paketë e plotë: gjashtë implantet, ura e përkohshme fikse në udhëtimin e parë dhe ura përfundimtare në të dytin. Oferta e saktë, me materialin e urës dhe çdo heqje dhëmbi të nevojshme, ju dërgohet me shkrim pas vlerësimit.' },
      { question: 'Si ndryshon All-on-6 nga All-on-4?', answer: 'All-on-6 përdor dy implante shtesë për të shpërndarë kafshimin në më shumë pika mbështetëse, çka për disa pacientë, në varësi të strukturës kockore ose forcës së kafshimit, e bën zgjedhjen e preferuar. All-on-4 përdor implante të anuara prapa dhe shpesh shmang shtimin e kockës kur kocka është e pakët. Rezultati që shihni, një urë fikse me dhëmbë të plotë, është i njëjtë.' },
      { question: 'Si vendoset nëse më duhen katër apo gjashtë implante?', answer: 'Nga kocka juaj dhe kafshimi juaj. Imazhet tregojnë nëse ka kockë të mjaftueshme në gjashtë pozicione dhe sa e dendur është ajo; kafshimi tregon sa ngarkesë do të mbajë ura. Nëse kocka nuk mbështet gjashtë implante pa shtim, All-on-4 me implante të anuara është zakonisht zgjidhja më e mirë, dhe jua themi.' },
      { question: 'Sa zgjasin implantet All-on-6?', answer: 'Me kujdes të duhur dhe kontrolle të rregullta, implantet janë projektuar të zgjasin shumë vite, shpesh dekada. Ura përfundimtare konsumohet si çdo restaurim: akriliku zakonisht rifreskohet çdo 5 deri në 7 vjet, zirkoni zgjat 10 deri në 15 vjet ose më shumë.' },
      { question: 'Sa udhëtime duhen?', answer: 'Dy. Në të parin bëhen ekzaminimi, kirurgjia dhe ura e përkohshme fikse. Pas gjashtë muajsh, në udhëtimin e dytë, vendoset ura përfundimtare. Ju ndihmojmë me organizimin e të dyja udhëtimeve dhe të qëndrimit.' },
      { question: 'Sa zgjat kirurgjia?', answer: 'Zakonisht 2,5 deri në 3,5 orë për nofull, pak më shumë se All-on-4 për shkak të dy implanteve shtesë. Heqjet e dhëmbëve, vendosja e implanteve dhe ura e përkohshme bëhen të gjitha në të njëjtin udhëtim.' },
      { question: 'A është e dhimbshme procedura?', answer: 'Procedura kryhet me anestezi lokale dhe gjatë saj ndieni presion, jo dhimbje. Shumica e pacientëve raportojnë siklet të lehtë më pas, që menaxhohet me qetësues të zakonshëm. Ënjtja e ditëve të para është normale dhe kalon shpejt.' },
      { question: 'A largohem me dhëmbë që ditën e parë?', answer: 'Po. Mbi gjashtë implantet fiksohet një urë e përkohshme po atë ditë, kështu që nuk mbeteni asnjë ditë pa dhëmbë. Ura e përkohshme nuk hiqet; në javët e para ndiqet një dietë e butë ndërsa implantet integrohen.' },
      { question: 'A më duhet shtim kocke?', answer: 'Jo domosdoshmërisht. All-on-6 kërkon kockë në gjashtë pozicione, prandaj imazhet kontrollohen me kujdes para planifikimit. Nëse kocka është e pakët, zakonisht All-on-4 me implante të anuara e shmang shtimin; nëse rasti kërkon gjithsesi shtim kocke ose ngritje sinusi, jua themi paraprakisht dhe shkruhet në ofertë.' },
      { question: 'A mund të bëj të dyja nofullat?', answer: 'Po. Shumë pacientë trajtojnë nofullën e sipërme dhe të poshtme në të njëjtin udhëtim, dhe kombinimi mund të jetë edhe All-on-6 lart me All-on-4 poshtë, sipas kockës. Çmimi llogaritet për nofull.' },
      { question: 'Si kujdesem për urën?', answer: 'Si për dhëmbë natyralë, me një hap shtesë: pastrimi poshtë urës, ku mblidhet pllaka. Furçë, fill i posaçëm ose irrigator çdo ditë, dhe kontrolle të rregullta. Ju tregojmë saktësisht si bëhet dhe largoheni me udhëzime të shkruara.' },
    ],
  },
  en: {
    name: 'All-on-6',
    eyebrow: 'Implants · Albania',
    subtitle: 'Full arch replacement on 6 implants for extra stability.',
    lead: 'A full arch rebuilt on six implants instead of four: extra support for a stronger bite or softer bone.',
    kicker: 'All-on-6 in Tirana, Albania',
    articleTitle: 'All-on-6: a full arch of fixed teeth on six implants',
    intro: [
      'All-on-6 replaces a full arch of missing or failing teeth using six implants instead of four, spreading the bite force over more support points.',
      'It is usually recommended for patients who want extra stability, have a strong bite, or have enough bone for additional implants, especially in the upper jaw, where bone is softer.',
      'At Veneer Clinic, All-on-6 costs €5,500 per jaw as a full package and is done over two trips, six months apart. You leave the first trip with fixed temporary teeth.',
    ],
    sections: [
      {
        title: 'Why six implants instead of four',
        intro: [
          'The two extra implants spread the bite force over more points along the jaw. Each implant carries less load, the bridge has more support at the ends and the system as a whole has more reserve.',
          'That is the main reason for choosing six: some patients’ bone structure or bite force benefits more from spreading the load over more implants. It does not mean All-on-4 is less safe; it means some cases need more support than others.',
        ],
      },
      {
        title: 'When six makes more sense',
        inline: [
          { title: 'The upper jaw.', text: 'Upper bone is softer and less dense than lower. More implants mean more contact surface with the bone and less load on each one.' },
          { title: 'A strong bite or clenching.', text: 'When bite force is high, or the teeth are clenched at night, a load shared across six points better protects both the implants and the bridge.' },
          { title: 'A wider arch.', text: 'A long or wide jaw leaves a bridge with longer cantilevers on four implants. Two extra implants shorten that lever.' },
          { title: 'Enough bone.', text: 'All-on-6 needs bone at six positions. When the bone allows it, adding two implants is the simplest way to increase the system’s reserve.' },
        ],
      },
      {
        title: 'Fixed teeth from the first trip',
        intro: [
          'Any teeth that cannot be saved are removed and all six implants are placed in the same session. A temporary bridge is fixed onto them the same day, so you leave with functional teeth rather than a gap or a removable plate.',
          'The temporary bridge is fixed: it does not come out at night and does not move when you talk or eat. A soft diet is followed for the first weeks while the implants begin to integrate with the bone.',
        ],
      },
      {
        title: 'More precise planning than All-on-4',
        intro: [
          'All-on-6 demands more precision in planning than All-on-4: the six implants have to be positioned to spread the load evenly along the arch, without touching the sinus above or the nerve below.',
          'Every case is planned from imaging of your bone. Before surgery we check volume and density at every possible position and tell you openly whether the bone really supports six implants, or whether All-on-4 is the better solution for your case.',
        ],
      },
      {
        title: 'Which bridge material is right for you?',
        intro: ['The final bridge comes in two materials, each with a different balance of cost, durability and appearance:'],
        cards: [
          { title: 'Acrylic hybrid bridge (PMMA)', text: 'A titanium framework covered with acrylic teeth and gum. Lower cost and lighter, although the acrylic surface wears faster and usually needs refreshing or replacing every 5 to 7 years.' },
          { title: 'Zirconia hybrid bridge', text: 'A monolithic zirconia bridge milled from a single block. Highly resistant to wear, staining and fracture, with a more natural, tooth-like translucency. Usually lasts 10 to 15 years or more.' },
        ],
        outro: ['Which material is included in your package, and any price difference, is written in your quote before you start.'],
      },
      {
        title: 'Two trips, six months apart',
        intro: [
          'All-on-6 requires two trips to Tirana, separated by a healing period at home. The implants need about six months to fuse with the bone before the final bridge can go on.',
          'On the first trip, examination, surgery and the fixed temporary bridge. On the second, impressions and the final bridge, with the bite adjusted. We help you organise travel and accommodation for both.',
        ],
      },
    ],
    stats: [
      { value: '6', label: 'Implants per jaw' },
      { value: '2', label: 'Trips' },
      { value: '6 months', label: 'Between trips' },
      { value: '2.5–3.5 hrs', label: 'Surgery per jaw' },
    ],
    priceTitle: 'Price',
    priceNote: 'Fixed teeth from the first trip',
    whatTitle: 'What is All-on-6?',
    what: [
      'All-on-6 replaces a full arch of missing or failing teeth with a single fixed bridge, held by six implants instead of the four used in All-on-4. The two extra implants spread the bite force over more support points along the jaw.',
      'The bridge is fixed in place and never removed by the patient, offering a permanent alternative to a removable denture. The dentist confirms from imaging which approach your bone really supports.',
    ],
    calloutTitle: 'Health matters as much as the jaw',
    calloutText:
      'Uncontrolled diabetes, active gum infection, heavy smoking and some bone medications all affect how well implants integrate. Some of them can be managed and do not rule out treatment, but they need to be known in advance, not discovered later.',
    compareTitle: 'Which option suits you?',
    compareIntro: 'All replace a full arch with fixed teeth. They differ in the number of implants and the bone they need:',
    compare: [
      { id: 'all-on-6', tag: 'This treatment', title: 'All-on-6', text: 'Six implants spread the bite over more points. Extra reserve for the upper jaw, a strong bite or a wide arch.' },
      { id: 'all-on-4', tag: 'Fewer implants', title: 'All-on-4', text: 'Four implants, two of them tilted, carry the same fixed bridge. Often avoids bone grafting when bone at the back is thin.' },
      { id: 'sinus-lift', tag: 'When bone is missing', title: 'Sinus lift', text: 'When upper bone is too thin even for tilted implants, a sinus lift builds the height the implants need.' },
    ],
    fitTitle: 'Who is All-on-6 for?',
    fitIntro: 'All-on-6 is usually recommended for people who:',
    fit: [
      'Are missing most or all of the teeth in one jaw',
      'Want maximum stability for a full arch restoration',
      'Have been advised that six implants suit their bone structure better than four',
      'Have a strong bite or clench their teeth at night',
      'Need an upper jaw restoration, where bone is softer',
      'Want a fixed, permanent alternative to dentures',
    ],
    fitNote:
      'All-on-6 is usually not recommended for patients with uncontrolled diabetes, active gum infection or heavy smoking, as these significantly affect implant integration. In those cases we recommend treating the underlying problem first.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'All-on-6 requires two trips to Tirana, separated by six months of healing at home. All six implants are placed in one visit and you leave with a fixed temporary bridge the same day:',
    steps: [
      { title: 'Consultation and imaging', text: 'We plan the case from your panoramic X-ray; at the clinic, imaging of the bone sets the position of all six implants for optimal support.' },
      { title: 'Implant placement', text: 'Any teeth that cannot be saved are removed and six implants are placed under local anaesthesia in one session, usually 2.5 to 3.5 hours per jaw.' },
      { title: 'Temporary teeth', text: 'A fixed temporary bridge is fitted the same day, so you leave with functional teeth. Then six months of healing at home.' },
      { title: 'Final restoration', text: 'On the second trip your permanent bridge, made specifically for you, is fitted with the bite adjusted.' },
    ],
    whyBandTitle: 'Why choose Veneer Clinic for All-on-6?',
    whyBandText:
      'All-on-6 demands more planning precision than All-on-4: the six implants have to be positioned to spread the load evenly along the arch. Every case is planned around your bone anatomy, the package price is fixed from the start, and we tell you openly if four implants are enough.',
    caseText: 'Full arch restoration with All-on-6',
    faq: [
      { question: 'How much does All-on-6 cost?', answer: '€5,500 per jaw as a full package: the six implants, the fixed temporary bridge on the first trip and the final bridge on the second. The exact quote, with the bridge material and any extractions needed, is sent to you in writing after assessment.' },
      { question: 'How is All-on-6 different from All-on-4?', answer: 'All-on-6 uses two extra implants to spread the bite over more support points, which for some patients, depending on bone structure or bite force, makes it the preferred choice. All-on-4 uses tilted implants at the back and often avoids bone grafting when bone is thin. The result you see, a fixed bridge with a full set of teeth, is the same.' },
      { question: 'How is it decided whether I need four or six implants?', answer: 'By your bone and your bite. Imaging shows whether there is enough bone at six positions and how dense it is; your bite shows how much load the bridge will carry. If the bone does not support six implants without grafting, All-on-4 with tilted implants is usually the better solution, and we tell you so.' },
      { question: 'How long do All-on-6 implants last?', answer: 'With proper care and regular check-ups, the implants are designed to last many years, often decades. The final bridge wears like any restoration: acrylic is usually refreshed every 5 to 7 years, zirconia lasts 10 to 15 years or more.' },
      { question: 'How many trips are needed?', answer: 'Two. On the first, examination, surgery and the fixed temporary bridge. After six months, on the second trip, the final bridge is fitted. We help you organise both trips and your stay.' },
      { question: 'How long does the surgery take?', answer: 'Usually 2.5 to 3.5 hours per jaw, slightly longer than All-on-4 because of the two extra implants. Extractions, implant placement and the temporary bridge all happen on the same trip.' },
      { question: 'Is the procedure painful?', answer: 'The procedure is done under local anaesthesia and during it you feel pressure, not pain. Most patients report mild discomfort afterwards, managed with ordinary painkillers. Swelling in the first days is normal and passes quickly.' },
      { question: 'Do I leave with teeth on the first day?', answer: 'Yes. A temporary bridge is fixed onto the six implants the same day, so you are never without teeth. The temporary bridge does not come out; a soft diet is followed for the first weeks while the implants integrate.' },
      { question: 'Do I need a bone graft?', answer: 'Not necessarily. All-on-6 needs bone at six positions, so the imaging is checked carefully before planning. If bone is thin, All-on-4 with tilted implants usually avoids grafting; if your case still needs a graft or sinus lift, we tell you in advance and it is written in the quote.' },
      { question: 'Can I have both jaws done?', answer: 'Yes. Many patients treat the upper and lower jaw on the same trip, and the combination can even be All-on-6 above with All-on-4 below, depending on the bone. The price is per jaw.' },
      { question: 'How do I care for the bridge?', answer: 'Like natural teeth, with one extra step: cleaning under the bridge, where plaque collects. Brush, special floss or a water flosser every day, and regular check-ups. We show you exactly how and you leave with written instructions.' },
    ],
  },
  de: {
    name: 'All-on-6',
    eyebrow: 'Implantate · Albanien',
    subtitle: 'Kompletter Kieferersatz auf 6 Implantaten für zusätzliche Stabilität.',
    lead: 'Ein ganzer Kiefer auf sechs statt vier Implantaten: zusätzliche Stütze für einen stärkeren Biss oder weicheren Knochen.',
    kicker: 'All-on-6 in Tirana, Albanien',
    articleTitle: 'All-on-6: ein ganzer Kiefer fester Zähne auf sechs Implantaten',
    intro: [
      'All-on-6 ersetzt einen ganzen Kiefer fehlender oder kranker Zähne mit sechs statt vier Implantaten und verteilt die Beißkraft auf mehr Stützpunkte.',
      'Es wird meist Patienten empfohlen, die zusätzliche Stabilität wünschen, einen starken Biss haben oder genug Knochen für weitere Implantate, besonders im Oberkiefer, wo der Knochen weicher ist.',
      'In der Veneer Clinic kostet All-on-6 5.500 € pro Kiefer als Komplettpaket und erfolgt in zwei Reisen im Abstand von sechs Monaten. Sie verlassen die erste Reise mit festen provisorischen Zähnen.',
    ],
    sections: [
      {
        title: 'Warum sechs statt vier Implantate',
        intro: [
          'Die zwei zusätzlichen Implantate verteilen die Beißkraft auf mehr Punkte entlang des Kiefers. Jedes Implantat trägt weniger, die Brücke hat mehr Stütze an den Enden, und das System als Ganzes hat mehr Reserve.',
          'Das ist der Hauptgrund für sechs: Knochenstruktur oder Beißkraft mancher Patienten profitieren mehr von einer Lastverteilung auf mehr Implantate. Das heißt nicht, dass All-on-4 weniger sicher ist; es heißt, dass manche Fälle mehr Stütze brauchen als andere.',
        ],
      },
      {
        title: 'Wann sechs sinnvoller sind',
        inline: [
          { title: 'Der Oberkiefer.', text: 'Der obere Knochen ist weicher und weniger dicht als der untere. Mehr Implantate bedeuten mehr Kontaktfläche zum Knochen und weniger Last auf jedem einzelnen.' },
          { title: 'Starker Biss oder Pressen.', text: 'Bei hoher Beißkraft oder nächtlichem Zähnepressen schützt eine auf sechs Punkte verteilte Last Implantate und Brücke besser.' },
          { title: 'Ein breiterer Kiefer.', text: 'Ein langer oder breiter Kiefer lässt bei vier Implantaten längere Freiendglieder. Zwei zusätzliche Implantate verkürzen diesen Hebel.' },
          { title: 'Genug Knochen.', text: 'All-on-6 braucht Knochen an sechs Positionen. Wenn der Knochen es erlaubt, ist das Hinzufügen von zwei Implantaten der einfachste Weg, die Reserve des Systems zu erhöhen.' },
        ],
      },
      {
        title: 'Feste Zähne ab der ersten Reise',
        intro: [
          'Nicht erhaltungswürdige Zähne werden entfernt und alle sechs Implantate in derselben Sitzung gesetzt. Am selben Tag wird darauf eine provisorische Brücke befestigt, sodass Sie mit funktionsfähigen Zähnen abreisen statt mit einer Lücke oder herausnehmbaren Platte.',
          'Die provisorische Brücke ist fest: Sie wird nachts nicht herausgenommen und bewegt sich nicht beim Sprechen oder Essen. In den ersten Wochen gilt weiche Kost, während die Implantate einzuheilen beginnen.',
        ],
      },
      {
        title: 'Präzisere Planung als bei All-on-4',
        intro: [
          'All-on-6 erfordert mehr Planungspräzision als All-on-4: Die sechs Implantate müssen so positioniert werden, dass sie die Last gleichmäßig über den Kiefer verteilen, ohne die Kieferhöhle oben oder den Nerv unten zu berühren.',
          'Jeder Fall wird anhand der Bildgebung Ihres Knochens geplant. Vor dem Eingriff prüfen wir Volumen und Dichte an jeder möglichen Position und sagen Ihnen offen, ob der Knochen wirklich sechs Implantate trägt oder ob All-on-4 für Ihren Fall die bessere Lösung ist.',
        ],
      },
      {
        title: 'Welches Brückenmaterial ist das richtige?',
        intro: ['Die definitive Brücke gibt es in zwei Materialien, jedes mit einer anderen Balance aus Kosten, Haltbarkeit und Aussehen:'],
        cards: [
          { title: 'Hybridbrücke aus Acryl (PMMA)', text: 'Ein Titangerüst mit Zähnen und Zahnfleisch aus Acryl. Günstiger und leichter, doch die Acryloberfläche nutzt sich schneller ab und muss meist alle 5 bis 7 Jahre aufgefrischt oder ersetzt werden.' },
          { title: 'Hybridbrücke aus Zirkon', text: 'Eine monolithische Zirkonbrücke aus einem einzigen Block gefräst. Sehr widerstandsfähig gegen Abrieb, Verfärbung und Bruch, mit natürlicherer, zahnähnlicher Transluzenz. Hält meist 10 bis 15 Jahre oder länger.' },
        ],
        outro: ['Welches Material in Ihrem Paket enthalten ist und jeder Preisunterschied stehen vor Beginn im Angebot.'],
      },
      {
        title: 'Zwei Reisen, sechs Monate Abstand',
        intro: [
          'All-on-6 erfordert zwei Reisen nach Tirana mit einer Heilungsphase zu Hause dazwischen. Die Implantate brauchen etwa sechs Monate, um mit dem Knochen zu verwachsen, bevor die definitive Brücke kommt.',
          'Bei der ersten Reise Untersuchung, Eingriff und feste provisorische Brücke. Bei der zweiten Abdrücke und definitive Brücke mit angepasstem Biss. Wir helfen bei der Organisation von Reise und Unterkunft für beide.',
        ],
      },
    ],
    stats: [
      { value: '6', label: 'Implantate pro Kiefer' },
      { value: '2', label: 'Reisen' },
      { value: '6 Monate', label: 'Zwischen den Reisen' },
      { value: '2,5–3,5 Std.', label: 'Eingriff pro Kiefer' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Feste Zähne ab der ersten Reise',
    whatTitle: 'Was ist All-on-6?',
    what: [
      'All-on-6 ersetzt einen ganzen Kiefer fehlender oder kranker Zähne durch eine einzige feste Brücke, getragen von sechs statt der vier Implantate bei All-on-4. Die zwei zusätzlichen Implantate verteilen die Beißkraft auf mehr Stützpunkte entlang des Kiefers.',
      'Die Brücke ist fest verankert und wird vom Patienten nie herausgenommen, eine dauerhafte Alternative zur herausnehmbaren Prothese. Der Zahnarzt bestätigt anhand der Bildgebung, welchen Ansatz Ihr Knochen wirklich trägt.',
    ],
    calloutTitle: 'Gesundheit zählt so viel wie der Kiefer',
    calloutText:
      'Unkontrollierter Diabetes, aktive Zahnfleischentzündung, starkes Rauchen und manche Knochenmedikamente beeinflussen die Einheilung der Implantate. Manches ist beherrschbar und schließt die Behandlung nicht aus, muss aber vorher bekannt sein, nicht später entdeckt werden.',
    compareTitle: 'Welche Option passt zu Ihnen?',
    compareIntro: 'Alle ersetzen einen ganzen Kiefer durch feste Zähne. Sie unterscheiden sich in der Zahl der Implantate und im benötigten Knochen:',
    compare: [
      { id: 'all-on-6', tag: 'Diese Behandlung', title: 'All-on-6', text: 'Sechs Implantate verteilen den Biss auf mehr Punkte. Zusätzliche Reserve für den Oberkiefer, einen starken Biss oder einen breiten Kiefer.' },
      { id: 'all-on-4', tag: 'Weniger Implantate', title: 'All-on-4', text: 'Vier Implantate, zwei davon geneigt, tragen dieselbe feste Brücke. Vermeidet oft einen Knochenaufbau, wenn der hintere Knochen dünn ist.' },
      { id: 'sinus-lift', tag: 'Wenn Knochen fehlt', title: 'Sinuslift', text: 'Ist der obere Knochen selbst für geneigte Implantate zu dünn, schafft ein Sinuslift die Höhe, die die Implantate brauchen.' },
    ],
    fitTitle: 'Für wen ist All-on-6?',
    fitIntro: 'All-on-6 wird meist Menschen empfohlen, die:',
    fit: [
      'Die meisten oder alle Zähne eines Kiefers verloren haben',
      'Maximale Stabilität für eine Versorgung des ganzen Kiefers wünschen',
      'Den Rat erhalten haben, dass sechs Implantate besser zu ihrem Knochen passen als vier',
      'Einen starken Biss haben oder nachts mit den Zähnen pressen',
      'Eine Versorgung des Oberkiefers brauchen, wo der Knochen weicher ist',
      'Eine feste, dauerhafte Alternative zur Prothese wünschen',
    ],
    fitNote:
      'All-on-6 wird meist nicht empfohlen bei unkontrolliertem Diabetes, aktiver Zahnfleischentzündung oder starkem Rauchen, da diese die Einheilung deutlich beeinträchtigen. In diesen Fällen empfehlen wir, zuerst das Grundproblem zu behandeln.',
    stepsTitle: 'So funktioniert die Behandlung',
    stepsIntro: 'All-on-6 erfordert zwei Reisen nach Tirana mit sechs Monaten Heilung zu Hause dazwischen. Alle sechs Implantate werden in einem Besuch gesetzt und Sie reisen am selben Tag mit einer festen provisorischen Brücke ab:',
    steps: [
      { title: 'Beratung und Bildgebung', text: 'Wir planen den Fall anhand Ihres Panoramaröntgens; in der Klinik legt die Bildgebung des Knochens die Position aller sechs Implantate für optimale Stütze fest.' },
      { title: 'Implantation', text: 'Nicht erhaltungswürdige Zähne werden entfernt und sechs Implantate unter örtlicher Betäubung in einer Sitzung gesetzt, meist 2,5 bis 3,5 Stunden pro Kiefer.' },
      { title: 'Provisorische Zähne', text: 'Am selben Tag wird eine feste provisorische Brücke eingesetzt, sodass Sie mit funktionsfähigen Zähnen abreisen. Dann sechs Monate Heilung zu Hause.' },
      { title: 'Definitive Versorgung', text: 'Bei der zweiten Reise wird Ihre eigens für Sie gefertigte definitive Brücke mit angepasstem Biss eingesetzt.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für All-on-6?',
    whyBandText:
      'All-on-6 erfordert mehr Planungspräzision als All-on-4: Die sechs Implantate müssen die Last gleichmäßig über den Kiefer verteilen. Jeder Fall wird nach Ihrer Knochenanatomie geplant, der Paketpreis steht von Anfang an fest, und wir sagen Ihnen offen, wenn vier Implantate genügen.',
    caseText: 'Versorgung des ganzen Kiefers mit All-on-6',
    faq: [
      { question: 'Was kostet All-on-6?', answer: '5.500 € pro Kiefer als Komplettpaket: die sechs Implantate, die feste provisorische Brücke bei der ersten Reise und die definitive Brücke bei der zweiten. Das genaue Angebot mit Brückenmaterial und eventuell nötigen Extraktionen erhalten Sie nach der Untersuchung schriftlich.' },
      { question: 'Wie unterscheidet sich All-on-6 von All-on-4?', answer: 'All-on-6 nutzt zwei zusätzliche Implantate, um den Biss auf mehr Stützpunkte zu verteilen, was es für manche Patienten, je nach Knochenstruktur oder Beißkraft, zur bevorzugten Wahl macht. All-on-4 nutzt hinten geneigte Implantate und vermeidet bei dünnem Knochen oft einen Aufbau. Das sichtbare Ergebnis, eine feste Brücke mit vollständigen Zähnen, ist gleich.' },
      { question: 'Wie wird entschieden, ob ich vier oder sechs Implantate brauche?', answer: 'Anhand Ihres Knochens und Ihres Bisses. Die Bildgebung zeigt, ob an sechs Positionen genug Knochen vorhanden ist und wie dicht er ist; der Biss zeigt, wie viel Last die Brücke tragen wird. Trägt der Knochen ohne Aufbau keine sechs Implantate, ist All-on-4 mit geneigten Implantaten meist die bessere Lösung, und das sagen wir Ihnen.' },
      { question: 'Wie lange halten All-on-6-Implantate?', answer: 'Bei richtiger Pflege und regelmäßigen Kontrollen sind die Implantate auf viele Jahre, oft Jahrzehnte ausgelegt. Die definitive Brücke nutzt sich wie jede Restauration ab: Acryl wird meist alle 5 bis 7 Jahre aufgefrischt, Zirkon hält 10 bis 15 Jahre oder länger.' },
      { question: 'Wie viele Reisen sind nötig?', answer: 'Zwei. Bei der ersten Untersuchung, Eingriff und feste provisorische Brücke. Nach sechs Monaten wird bei der zweiten Reise die definitive Brücke eingesetzt. Wir helfen bei der Organisation beider Reisen und Ihres Aufenthalts.' },
      { question: 'Wie lange dauert der Eingriff?', answer: 'Meist 2,5 bis 3,5 Stunden pro Kiefer, etwas länger als All-on-4 wegen der zwei zusätzlichen Implantate. Extraktionen, Implantation und provisorische Brücke erfolgen alle in derselben Reise.' },
      { question: 'Ist der Eingriff schmerzhaft?', answer: 'Der Eingriff erfolgt unter örtlicher Betäubung, und Sie spüren Druck, keinen Schmerz. Die meisten berichten danach von leichten Beschwerden, die sich mit üblichen Schmerzmitteln gut behandeln lassen. Schwellungen in den ersten Tagen sind normal und klingen schnell ab.' },
      { question: 'Reise ich am ersten Tag mit Zähnen ab?', answer: 'Ja. Am selben Tag wird eine provisorische Brücke auf den sechs Implantaten befestigt, sodass Sie nie ohne Zähne sind. Die provisorische Brücke wird nicht herausgenommen; in den ersten Wochen gilt weiche Kost, während die Implantate einheilen.' },
      { question: 'Brauche ich einen Knochenaufbau?', answer: 'Nicht unbedingt. All-on-6 braucht Knochen an sechs Positionen, daher wird die Bildgebung vor der Planung sorgfältig geprüft. Ist der Knochen dünn, vermeidet All-on-4 mit geneigten Implantaten meist einen Aufbau; braucht Ihr Fall trotzdem einen Aufbau oder Sinuslift, sagen wir es vorher und es steht im Angebot.' },
      { question: 'Kann ich beide Kiefer machen lassen?', answer: 'Ja. Viele Patienten behandeln Ober- und Unterkiefer in derselben Reise, und die Kombination kann je nach Knochen auch All-on-6 oben mit All-on-4 unten sein. Der Preis gilt pro Kiefer.' },
      { question: 'Wie pflege ich die Brücke?', answer: 'Wie natürliche Zähne, mit einem zusätzlichen Schritt: der Reinigung unter der Brücke, wo sich Plaque sammelt. Täglich Bürste, spezielle Zahnseide oder Munddusche, und regelmäßige Kontrollen. Wir zeigen Ihnen genau wie, und Sie erhalten schriftliche Hinweise.' },
    ],
  },
  it: {
    name: 'All-on-6',
    eyebrow: 'Impianti · Albania',
    subtitle: 'Sostituzione dell’arcata completa su 6 impianti per una stabilità in più.',
    lead: 'Un’arcata completa ricostruita su sei impianti invece di quattro: supporto in più per un morso più forte o un osso più morbido.',
    kicker: 'All-on-6 a Tirana, Albania',
    articleTitle: 'All-on-6: un’arcata completa di denti fissi su sei impianti',
    intro: [
      'L’All-on-6 sostituisce un’arcata completa di denti mancanti o compromessi usando sei impianti invece di quattro, distribuendo la forza del morso su più punti di appoggio.',
      'Si consiglia di solito a chi desidera una stabilità in più, ha un morso forte o ha abbastanza osso per impianti aggiuntivi, soprattutto nell’arcata superiore, dove l’osso è più morbido.',
      'Alla Veneer Clinic, l’All-on-6 costa 5.500 € per arcata come pacchetto completo e si svolge in due viaggi, a sei mesi di distanza. Riparti dal primo viaggio con denti provvisori fissi.',
    ],
    sections: [
      {
        title: 'Perché sei impianti invece di quattro',
        intro: [
          'I due impianti in più distribuiscono la forza del morso su più punti lungo l’arcata. Ogni impianto sopporta meno carico, il ponte ha più supporto alle estremità e il sistema nel suo insieme ha più margine.',
          'È il motivo principale per sceglierne sei: la struttura ossea o la forza del morso di alcuni pazienti traggono più beneficio da un carico distribuito su più impianti. Non significa che l’All-on-4 sia meno sicuro; significa che alcuni casi hanno bisogno di più supporto di altri.',
        ],
      },
      {
        title: 'Quando sei hanno più senso',
        inline: [
          { title: 'L’arcata superiore.', text: 'L’osso superiore è più morbido e meno denso di quello inferiore. Più impianti significano più superficie di contatto con l’osso e meno carico su ciascuno.' },
          { title: 'Morso forte o serramento.', text: 'Quando la forza del morso è elevata, o si serrano i denti di notte, un carico condiviso su sei punti protegge meglio sia gli impianti sia il ponte.' },
          { title: 'Un’arcata più ampia.', text: 'Un’arcata lunga o larga lascia un ponte con estensioni più lunghe su quattro impianti. Due impianti in più accorciano quella leva.' },
          { title: 'Osso sufficiente.', text: 'L’All-on-6 richiede osso in sei posizioni. Quando l’osso lo consente, aggiungere due impianti è il modo più semplice per aumentare il margine del sistema.' },
        ],
      },
      {
        title: 'Denti fissi dal primo viaggio',
        intro: [
          'I denti che non si possono salvare vengono estratti e tutti e sei gli impianti inseriti nella stessa seduta. Sopra si fissa un ponte provvisorio lo stesso giorno, così riparti con denti funzionali e non con uno spazio vuoto o una placca mobile.',
          'Il ponte provvisorio è fisso: non si toglie la notte e non si muove quando parli o mangi. Nelle prime settimane si segue una dieta morbida mentre gli impianti iniziano a integrarsi con l’osso.',
        ],
      },
      {
        title: 'Una pianificazione più precisa dell’All-on-4',
        intro: [
          'L’All-on-6 richiede più precisione di pianificazione dell’All-on-4: i sei impianti vanno posizionati in modo da distribuire il carico in modo uniforme lungo l’arcata, senza toccare il seno sopra o il nervo sotto.',
          'Ogni caso si pianifica dalle immagini del tuo osso. Prima dell’intervento controlliamo volume e densità in ogni posizione possibile e ti diciamo apertamente se l’osso sostiene davvero sei impianti, o se l’All-on-4 è la soluzione migliore per il tuo caso.',
        ],
      },
      {
        title: 'Quale materiale per il ponte fa per te?',
        intro: ['Il ponte definitivo è disponibile in due materiali, ciascuno con un diverso equilibrio tra costo, durata e aspetto:'],
        cards: [
          { title: 'Ponte ibrido in acrilico (PMMA)', text: 'Una struttura in titanio rivestita di denti e gengiva in acrilico. Costo più basso e più leggero, anche se la superficie acrilica si consuma più in fretta e di solito va rinnovata o sostituita ogni 5-7 anni.' },
          { title: 'Ponte ibrido in zirconia', text: 'Un ponte monolitico in zirconia fresato da un unico blocco. Molto resistente a usura, macchie e fratture, con una traslucenza più naturale, simile al dente. Dura di solito 10-15 anni o più.' },
        ],
        outro: ['Quale materiale è incluso nel tuo pacchetto, e ogni differenza di prezzo, sono scritti nel preventivo prima di iniziare.'],
      },
      {
        title: 'Due viaggi, a sei mesi di distanza',
        intro: [
          'L’All-on-6 richiede due viaggi a Tirana, separati da un periodo di guarigione a casa. Gli impianti hanno bisogno di circa sei mesi per fondersi con l’osso prima che si possa applicare il ponte definitivo.',
          'Nel primo viaggio visita, intervento e ponte provvisorio fisso. Nel secondo impronte e ponte definitivo, con il morso regolato. Ti aiutiamo a organizzare viaggio e alloggio per entrambi.',
        ],
      },
    ],
    stats: [
      { value: '6', label: 'Impianti per arcata' },
      { value: '2', label: 'Viaggi' },
      { value: '6 mesi', label: 'Tra i viaggi' },
      { value: '2,5–3,5 ore', label: 'Intervento per arcata' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Denti fissi dal primo viaggio',
    whatTitle: 'Cos’è l’All-on-6?',
    what: [
      'L’All-on-6 sostituisce un’arcata completa di denti mancanti o compromessi con un unico ponte fisso, sostenuto da sei impianti invece dei quattro dell’All-on-4. I due impianti in più distribuiscono la forza del morso su più punti di appoggio lungo l’arcata.',
      'Il ponte è fisso e non viene mai rimosso dal paziente, un’alternativa permanente alla protesi mobile. Il dentista conferma dalle immagini quale approccio il tuo osso sostiene davvero.',
    ],
    calloutTitle: 'La salute conta quanto l’osso',
    calloutText:
      'Diabete non controllato, infezione gengivale attiva, fumo intenso e alcuni farmaci per le ossa influiscono sull’integrazione degli impianti. Alcuni si possono gestire e non escludono il trattamento, ma vanno conosciuti in anticipo, non scoperti dopo.',
    compareTitle: 'Quale opzione fa per te?',
    compareIntro: 'Tutte sostituiscono un’arcata completa con denti fissi. Cambiano nel numero di impianti e nell’osso che richiedono:',
    compare: [
      { id: 'all-on-6', tag: 'Questo trattamento', title: 'All-on-6', text: 'Sei impianti distribuiscono il morso su più punti. Margine in più per l’arcata superiore, un morso forte o un’arcata ampia.' },
      { id: 'all-on-4', tag: 'Meno impianti', title: 'All-on-4', text: 'Quattro impianti, due inclinati, sostengono lo stesso ponte fisso. Spesso evita l’innesto osseo quando l’osso posteriore è scarso.' },
      { id: 'sinus-lift', tag: 'Quando manca l’osso', title: 'Rialzo del seno', text: 'Quando l’osso superiore è troppo scarso anche per impianti inclinati, il rialzo del seno crea l’altezza che serve agli impianti.' },
    ],
    fitTitle: 'Per chi è l’All-on-6?',
    fitIntro: 'L’All-on-6 si consiglia di solito a chi:',
    fit: [
      'Ha perso la maggior parte o tutti i denti di un’arcata',
      'Desidera la massima stabilità per un restauro dell’arcata completa',
      'Ha ricevuto il consiglio che sei impianti si adattano meglio di quattro alla propria struttura ossea',
      'Ha un morso forte o serra i denti di notte',
      'Ha bisogno di un restauro dell’arcata superiore, dove l’osso è più morbido',
      'Vuole un’alternativa fissa e permanente alla protesi',
    ],
    fitNote:
      'L’All-on-6 di solito non si consiglia a pazienti con diabete non controllato, infezione gengivale attiva o fumo intenso, perché influiscono molto sull’integrazione degli impianti. In questi casi consigliamo di trattare prima il problema di fondo.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'L’All-on-6 richiede due viaggi a Tirana, separati da sei mesi di guarigione a casa. Tutti e sei gli impianti si inseriscono in una visita e riparti con un ponte provvisorio fisso lo stesso giorno:',
    steps: [
      { title: 'Consulto e immagini', text: 'Pianifichiamo il caso dalla tua panoramica; in clinica le immagini dell’osso definiscono la posizione di tutti e sei gli impianti per un supporto ottimale.' },
      { title: 'Inserimento degli impianti', text: 'I denti non salvabili vengono estratti e sei impianti inseriti in anestesia locale in una seduta, di solito 2,5-3,5 ore per arcata.' },
      { title: 'Denti provvisori', text: 'Un ponte provvisorio fisso viene applicato lo stesso giorno, così riparti con denti funzionali. Poi sei mesi di guarigione a casa.' },
      { title: 'Restauro definitivo', text: 'Nel secondo viaggio si applica il tuo ponte definitivo, realizzato su misura, con il morso regolato.' },
    ],
    whyBandTitle: 'Perché scegliere Veneer Clinic per l’All-on-6?',
    whyBandText:
      'L’All-on-6 richiede più precisione di pianificazione dell’All-on-4: i sei impianti devono distribuire il carico in modo uniforme lungo l’arcata. Ogni caso si pianifica sull’anatomia del tuo osso, il prezzo del pacchetto è fisso fin dall’inizio, e ti diciamo apertamente se quattro impianti bastano.',
    caseText: 'Restauro dell’arcata completa con All-on-6',
    faq: [
      { question: 'Quanto costa l’All-on-6?', answer: '5.500 € per arcata come pacchetto completo: i sei impianti, il ponte provvisorio fisso nel primo viaggio e il ponte definitivo nel secondo. Il preventivo esatto, con il materiale del ponte e le eventuali estrazioni, ti viene inviato per iscritto dopo la valutazione.' },
      { question: 'In cosa differisce l’All-on-6 dall’All-on-4?', answer: 'L’All-on-6 usa due impianti in più per distribuire il morso su più punti di appoggio, il che per alcuni pazienti, a seconda della struttura ossea o della forza del morso, lo rende la scelta preferita. L’All-on-4 usa impianti inclinati dietro e spesso evita l’innesto quando l’osso è scarso. Il risultato che vedi, un ponte fisso con tutti i denti, è lo stesso.' },
      { question: 'Come si decide se mi servono quattro o sei impianti?', answer: 'Dal tuo osso e dal tuo morso. Le immagini mostrano se c’è abbastanza osso in sei posizioni e quanto è denso; il morso mostra quanto carico sosterrà il ponte. Se l’osso non sostiene sei impianti senza innesto, l’All-on-4 con impianti inclinati è di solito la soluzione migliore, e te lo diciamo.' },
      { question: 'Quanto durano gli impianti All-on-6?', answer: 'Con le giuste cure e controlli regolari, gli impianti sono progettati per durare molti anni, spesso decenni. Il ponte definitivo si consuma come ogni restauro: l’acrilico di solito si rinnova ogni 5-7 anni, la zirconia dura 10-15 anni o più.' },
      { question: 'Quanti viaggi servono?', answer: 'Due. Nel primo visita, intervento e ponte provvisorio fisso. Dopo sei mesi, nel secondo viaggio, si applica il ponte definitivo. Ti aiutiamo a organizzare entrambi i viaggi e il soggiorno.' },
      { question: 'Quanto dura l’intervento?', answer: 'Di solito 2,5-3,5 ore per arcata, un po’ più dell’All-on-4 per via dei due impianti in più. Estrazioni, inserimento degli impianti e ponte provvisorio avvengono tutti nello stesso viaggio.' },
      { question: 'L’intervento è doloroso?', answer: 'L’intervento si esegue in anestesia locale e durante senti pressione, non dolore. La maggior parte dei pazienti riferisce un lieve fastidio dopo, gestito con comuni antidolorifici. Il gonfiore dei primi giorni è normale e passa presto.' },
      { question: 'Riparto con i denti il primo giorno?', answer: 'Sì. Un ponte provvisorio viene fissato sui sei impianti lo stesso giorno, così non resti mai senza denti. Il ponte provvisorio non si toglie; nelle prime settimane si segue una dieta morbida mentre gli impianti si integrano.' },
      { question: 'Mi serve un innesto osseo?', answer: 'Non necessariamente. L’All-on-6 richiede osso in sei posizioni, per questo le immagini si controllano con cura prima di pianificare. Se l’osso è scarso, l’All-on-4 con impianti inclinati di solito evita l’innesto; se il tuo caso richiede comunque un innesto o un rialzo del seno, te lo diciamo in anticipo ed è scritto nel preventivo.' },
      { question: 'Posso trattare entrambe le arcate?', answer: 'Sì. Molti pazienti trattano l’arcata superiore e inferiore nello stesso viaggio, e la combinazione può essere anche All-on-6 sopra e All-on-4 sotto, a seconda dell’osso. Il prezzo è per arcata.' },
      { question: 'Come mi prendo cura del ponte?', answer: 'Come per i denti naturali, con un passo in più: la pulizia sotto il ponte, dove si accumula la placca. Spazzolino, filo speciale o idropulsore ogni giorno, e controlli regolari. Ti mostriamo esattamente come e vai via con istruzioni scritte.' },
    ],
  },
};

export default function AllOn6Page() {
  return (
    <TreatmentArticle
      content={content}
      itemId="all-on-6"
      heroImage={images.surgery[5] ?? images.heroAfter}
      whatImage={images.surgery[6] ?? images.heroAfter}
    />
  );
}
