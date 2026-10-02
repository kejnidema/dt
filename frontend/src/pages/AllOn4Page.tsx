import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Implantet All-on-4',
    eyebrow: 'Implante · Shqipëri',
    subtitle: 'Zëvendësim i plotë i harkut me vetëm 4 implante: një urë fikse që nuk hiqet kurrë.',
    lead: 'Një hark i plotë dhëmbësh që po dështojnë, i zëvendësuar në një vizitë: katër implante mbajnë një urë fikse dhe ju largoheni me dhëmbë fiks që ditën e parë.',
    kicker: 'Implantet All-on-4 në Tiranë, Shqipëri',
    articleTitle: 'All-on-4: një hark i plotë dhëmbësh fiks mbi katër implante',
    intro: [
      'All-on-4 zëvendëson një hark të plotë dhëmbësh të munguar ose të dëmtuar me vetëm katër implante të vendosura në mënyrë strategjike, që mbajnë një urë fikse, të palëvizshme.',
      'Dy implante vendosen vertikalisht në pjesën e përparme të nofullës, ndërsa dy të tjera vendosen të anuara në pjesën e pasme, për të kapur kockën më të dendur dhe për të shmangur sinusin apo kanalin e nervit. Kjo e bën teknikën të mundshme edhe kur vëllimi i kockës është reduktuar nga vite humbjeje dhëmbësh.',
      'Meqë implantet pozicionohen që të punojnë së bashku si një njësi e vetme, shumica e pacientëve kualifikohen pa pasur nevojë për shtimin e kockës që do të kërkonte vendosja tradicionale e implanteve. E përfundoni udhëtimin e parë me një set të plotë dhëmbësh fiks, jo me boshllëk dhe jo me pllakë të lëvizshme, ndërkohë që implantet integrohen me kockën gjatë muajve në vijim.',
      'Në Veneer Clinic, All-on-4 kushton 4.500 € për nofull si paketë e plotë dhe kryhet në dy udhëtime, me gjashtë muaj ndërmjet tyre.',
    ],
    sections: [
      {
        title: 'Pse mjaftojnë vetëm katër implante',
        intro: [
          'Dy implantet e përparme vendosen drejt. Dy të pasmet anohen, zakonisht 30 deri në 45 gradë, drejt pjesës së pasme. Kjo u lejon të mbërthehen në kockë më të trashë dhe më të qëndrueshme dhe të arrijnë më larg përgjatë nofullës pa kaluar nëpër sinus.',
          'Meqë të katër implantet ndajnë ngarkesën e urës dhe pozicionohen për kontakt maksimal me kockën, zakonisht mund të mbajnë një urë fikse që në ditën kur vendosen. Teknika u zhvillua posaçërisht për pacientët me kockë të reduktuar në pjesën e pasme të nofullës, pikërisht grupi të cilit më shpesh i thuhet se ka nevojë për shtim kocke ose se nuk është kandidat për implante fare.',
        ],
      },
      {
        title: 'Dhëmbë fiks që në udhëtimin e parë',
        intro: [
          'Çdo dhëmb që nuk shpëtohet hiqet dhe katër implantet vendosen në të njëjtën seancë. Pastaj mbi to fiksohet një urë provizore, kështu që largoheni me dhëmbë të plotë dhe jo me boshllëk apo me protezë të lëvizshme.',
          'Ura e përkohshme është fikse: nuk hiqet natën dhe nuk lëviz kur flisni apo hani. Në javët e para ndiqet një dietë e butë, ndërsa implantet fillojnë të integrohen me kockën.',
        ],
      },
      {
        title: 'Planifikimi para kirurgjisë',
        intro: [
          'All-on-4 nuk fal hamendje: pozicioni, këndi dhe gjatësia e çdo implanti duhet të jenë të sakta që herën e parë. Prandaj rasti planifikohet nga imazhet e kockës suaj, jo nga një vlerësim me sy.',
          'Para kirurgjisë kontrollojmë vëllimin dhe dendësinë e kockës, pozicionin e sinusit dhe të nervit, dhe vendosim nëse rasti juaj është më i përshtatshëm për All-on-4 apo All-on-6. Nëse kocka është shumë e pakët edhe për implante të anuara, ju themi paraprakisht cilat janë alternativat.',
        ],
      },
      {
        title: 'Materiali i urës përfundimtare',
        intro: ['Ura përfundimtare mund të punohet në dy materiale, secili me një balancë të ndryshme kostoje, qëndrueshmërie dhe pamjeje:'],
        cards: [
          { title: 'Urë hibride akrilike (PMMA)', text: 'Një strukturë titani e veshur me dhëmbë dhe mish akrilik. Më e lehtë dhe më ekonomike, megjithëse sipërfaqja akrilike konsumohet më shpejt dhe zakonisht ka nevojë për rifreskim ose zëvendësim çdo 5 deri në 7 vjet.' },
          { title: 'Urë hibride zirkoni', text: 'Një urë zirkoni e frezuar nga një bllok i vetëm. Shumë rezistente ndaj konsumit, njollave dhe çarjes, me një tejdukshmëri më natyrale. Zakonisht zgjat 10 deri në 15 vjet ose më shumë.' },
        ],
        outro: ['Cili material përfshihet në paketën tuaj, dhe çdo diferencë çmimi, shkruhen në ofertë para se të filloni.'],
      },
      {
        title: 'Dy udhëtime, gjashtë muaj larg',
        intro: [
          'All-on-4 kërkon dy udhëtime në Tiranë, të ndara nga një periudhë shërimi në shtëpi. Kjo nuk është çështje planifikimi, është biologji: implantet kanë nevojë për rreth gjashtë muaj që të shkrihen me kockën para se mbi to të vendoset ura përfundimtare.',
          'Në udhëtimin e parë bëhen ekzaminimi, kirurgjia dhe ura e përkohshme fikse. Në të dytin merren masat dhe vendoset ura përfundimtare, me kafshimin e rregulluar. Ju ndihmojmë me organizimin e udhëtimit dhe të qëndrimit për të dyja.',
        ],
      },
    ],
    stats: [
      { value: '4', label: 'Implante për nofull' },
      { value: '2', label: 'Udhëtime' },
      { value: '6 muaj', label: 'Ndërmjet udhëtimeve' },
      { value: '2–3 orë', label: 'Kirurgjia për nofull' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Dhëmbë fiks që në udhëtimin e parë',
    whatTitle: 'Çfarë është All-on-4?',
    what: [
      'All-on-4 është një teknikë restaurimi për gjithë harkun që zëvendëson çdo dhëmb të nofullës së sipërme ose të poshtme me vetëm katër implante dentare, në vend të një implanti për çdo dhëmb që mungon.',
      'Dy implante vendosen vertikalisht përpara dhe dy të anuara prapa, ku kapin kockë më të fortë pa kaluar nëpër sinus. Të katër së bashku mbajnë një urë fikse që vendoset që në ditën e kirurgjisë dhe nuk hiqet kurrë nga pacienti.',
    ],
    calloutTitle: 'Shëndeti ka po aq rëndësi sa nofulla',
    calloutText:
      'Diabeti i pakontrolluar, infeksioni aktiv i mishrave, duhanpirja e rëndë dhe disa barna për kockat ndikojnë në integrimin e implanteve. Disa prej tyre menaxhohen dhe nuk e përjashtojnë trajtimin, por duhen ditur paraprakisht, jo të zbulohen më pas.',
    compareTitle: 'Cili opsion ju përshtatet?',
    compareIntro: 'Të gjitha zëvendësojnë një hark të plotë dhëmbësh. Ndryshojnë në stabilitet, kosto dhe komoditet:',
    compare: [
      { id: 'all-on-4', tag: 'Ky trajtim', title: 'All-on-4', text: 'Katër implante mbajnë një urë fikse. Teknika e anuar shpesh shmang shtimin e kockës, dhe largoheni me dhëmbë fiks që në udhëtimin e parë.' },
      { id: 'all-on-6', tag: 'Stabilitet shtesë', title: 'All-on-6', text: 'Gjashtë implante shpërndajnë forcën e kafshimit në më shumë pika, kur kocka i lejon. Zgjidhje e mirë për kafshim të fortë ose nofullën e sipërme.' },
      { id: 'denture', tag: 'Opsioni i lëvizshëm', title: 'Protezë e lëvizshme', text: 'Më e lirë dhe pa kirurgji, por mbështetet mbi mishra, hiqet natën dhe nuk e ruan kockën. Shumë pacientë vijnë te All-on-4 pikërisht për t’u ndarë prej saj.' },
    ],
    fitTitle: 'Për kë është i përshtatshëm All-on-4?',
    fitIntro: 'All-on-4 është krijuar për njerëzit që kanë humbur shumicën ose të gjithë dhëmbët në njërën ose të dyja nofullat, ose dhëmbët e mbetur të të cilëve nuk shpëtohen:',
    fit: [
      'Përdorues afatgjatë të protezës së lëvizshme, të lodhur nga lëvizja, ngjitësi, pikat e dhimbshme ose shija e reduktuar',
      'Sëmundje e avancuar e mishrave, ku dhëmbët janë të lëkundur dhe kocka mbështetëse është humbur',
      'Karies i përhapur ose punime të vjetra dentare që po dështojnë, ku riparimet një nga një nuk kanë më kuptim',
      'Humbje kocke në pjesën e pasme të nofullës, ku implantet e anuara shpesh shmangin shtimin e kockës',
      'Kushdo që përballet me heqjen e të gjithë dhëmbëve të një nofulle dhe po vendos çfarë të bëjë më pas',
    ],
    fitNote:
      'All-on-4 zakonisht nuk rekomandohet për pacientët me diabet të pakontrolluar, infeksion aktiv të mishrave ose duhanpirje të rëndë, pasi këto ndikojnë ndjeshëm në integrimin e implanteve. Në këto raste rekomandojmë që fillimisht të trajtohet problemi bazë dhe më pas të rivlerësohet përshtatshmëria.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'All-on-4 kërkon dy udhëtime në Tiranë, të ndara nga gjashtë muaj shërimi në shtëpi:',
    steps: [
      { title: 'Vlerësim në distancë', text: 'Na dërgoni foto dhe një grafi panoramike ose skanim të fundit. Ju kthejmë një plan paraprak: All-on-4 apo All-on-6, nëse duhen heqje dhëmbësh, dhe një kosto indikative. Falas, pa detyrim.' },
      { title: 'Ekzaminimi dhe planifikimi', text: 'Ekzaminim i plotë klinik dhe imazhe të kockës në mbërritje. Pozicioni, këndi dhe gjatësia e implanteve planifikohen sipas vëllimit dhe dendësisë reale të kockës suaj.' },
      { title: 'Kirurgjia e implanteve', text: 'Çdo dhëmb që nuk shpëtohet hiqet dhe katër implantet vendosen me anestezi lokale: dy vertikale përpara, dy të anuara prapa. Zakonisht 2 deri në 3 orë për nofull.' },
      { title: 'Ura e përkohshme fikse', text: 'Një urë provizore fikse vendoset mbi implante, kështu që largoheni me dhëmbë të plotë dhe jo me boshllëk apo pllakë të lëvizshme. Ndiqet një dietë e butë.' },
      { title: 'Shërimi dhe integrimi', text: 'Gjatë gjashtë muajve implantet shkrihen me kockën. Ktheheni në jetën normale me urën e përkohshme, dhe ne mbetemi të kontaktueshëm gjatë gjithë kohës.' },
      { title: 'Ura përfundimtare', text: 'Në udhëtimin e dytë merren masat dhe ura përfundimtare punohet e vendoset, me kafshimin e rregulluar dhe çdo sipërfaqe të përfunduar.' },
    ],
    whyBandTitle: 'Pse të zgjidhni Veneer Clinic për All-on-4?',
    whyBandText:
      'All-on-4 nuk fal gabime të bazuara në hamendje: pozicioni, këndi dhe gjatësia e implanteve duhet të jenë të sakta që herën e parë. Çdo rast planifikohet sipas anatomisë së kockës suaj, çmimi i paketës është i fiksuar që në fillim, dhe ju largoheni nga udhëtimi i parë me një set të plotë dhëmbësh fiks.',
    caseText: 'Restaurim i plotë i harkut me All-on-4',
    faq: [
      { question: 'Sa kushton All-on-4?', answer: '4.500 € për nofull, si paketë e plotë: implantet, ura e përkohshme fikse në udhëtimin e parë dhe ura përfundimtare në të dytin. Oferta e saktë, me materialin e urës dhe çdo heqje dhëmbi të nevojshme, ju dërgohet me shkrim pas vlerësimit.' },
      { question: 'Sa zgjat procedura All-on-4?', answer: 'Vetë vendosja e implanteve zgjat zakonisht 2 deri në 3 orë për nofull dhe përfundon brenda një dite. Shërimi i plotë para urës përfundimtare zgjat rreth gjashtë muaj, gjatë të cilëve mbani urën e përkohshme fikse.' },
      { question: 'Sa udhëtime duhen?', answer: 'Dy. Në të parin bëhen ekzaminimi, kirurgjia dhe ura e përkohshme fikse. Pas gjashtë muajsh, në udhëtimin e dytë, vendoset ura përfundimtare. Ju ndihmojmë me organizimin e të dyja udhëtimeve dhe të qëndrimit.' },
      { question: 'A është e dhimbshme procedura?', answer: 'Procedura kryhet me anestezi lokale, dhe shumica e pacientëve raportojnë një siklet të lehtë më pas, që menaxhohet me qetësues të zakonshëm dhimbjeje. Ënjtja e ditëve të para është normale dhe kalon shpejt.' },
      { question: 'A largohem vërtet me dhëmbë fiks?', answer: 'Po. Pas kirurgjisë fiksohet mbi implante një urë provizore, kështu që nuk kaloni asnjë ditë pa dhëmbë dhe nuk mbani protezë të lëvizshme. Në javët e para hani ushqim të butë, ndërsa implantet integrohen.' },
      { question: 'Po nëse më kanë thënë se nuk kam kockë të mjaftueshme?', answer: 'All-on-4 u krijua pikërisht për këtë. Implantet e pasme anohen që të kapin kockën më të dendur përpara sinusit, kështu që shumë pacientë që u është thënë se duhen shtime kocke kualifikohen pa to. Nëse kocka është shumë e pakët, ju themi paraprakisht nëse duhet ngritje sinusi ose implante zigomatike.' },
      { question: 'All-on-4 apo All-on-6?', answer: 'All-on-6 përdor dy implante shtesë për të shpërndarë kafshimin në më shumë pika, gjë që për disa pacientë, sipas kockës dhe forcës së kafshimit, është zgjedhja më e mirë. All-on-4 është më e thjeshtë dhe shpesh shmang shtimin e kockës. Ju rekomandojmë njërën pas vlerësimit të kockës suaj.' },
      { question: 'Sa zgjasin implantet All-on-4?', answer: 'Me kujdesin e duhur dhe kontrolle të rregullta, implantet janë projektuar të zgjasin shumë vite, shpesh dekada. Ura përfundimtare mund të ketë nevojë për rifreskim ose zëvendësim pas disa vitesh, sipas materialit, ndërsa implantet mbeten në vend.' },
    ],
  },
  en: {
    name: 'All-on-4 Implants',
    eyebrow: 'Implants · Albania',
    subtitle: 'Full-arch replacement with just 4 implants: a fixed bridge that never comes out.',
    lead: 'A full arch of failing teeth, replaced in one visit: four implants hold a fixed bridge and you leave with fixed teeth from day one.',
    kicker: 'All-on-4 implants in Tirana, Albania',
    articleTitle: 'All-on-4: a full arch of fixed teeth on four implants',
    intro: [
      'All-on-4 replaces a full arch of missing or damaged teeth with just four strategically placed implants that hold a fixed, non-removable bridge.',
      'Two implants are placed vertically in the front of the jaw, while the other two are tilted at the back to grip the densest bone and avoid the sinus or the nerve canal. That makes the technique possible even when bone volume has been reduced by years of tooth loss.',
      'Because the implants are positioned to work together as a single unit, most patients qualify without the bone grafting that traditional implant placement would require. You finish the first trip with a full set of fixed teeth, not a gap and not a removable plate, while the implants fuse with the bone over the following months.',
      'At Veneer Clinic, All-on-4 costs €4,500 per jaw as a complete package and is done over two trips, six months apart.',
    ],
    sections: [
      {
        title: 'Why four implants are enough',
        intro: [
          'The two front implants go in straight. The two back ones are tilted, usually 30 to 45 degrees, towards the back. That lets them anchor in thicker, more stable bone and reach further along the jaw without passing through the sinus.',
          'Because all four implants share the load of the bridge and are positioned for maximum bone contact, they can usually carry a fixed bridge on the day they are placed. The technique was developed specifically for patients with reduced bone at the back of the jaw, exactly the group most often told they need bone grafting or are not implant candidates at all.',
        ],
      },
      {
        title: 'Fixed teeth from the first trip',
        intro: [
          'Any tooth that cannot be saved is removed and the four implants are placed in the same session. A provisional bridge is then fixed on top, so you leave with a full set of teeth rather than a gap or a removable denture.',
          'The temporary bridge is fixed: it does not come out at night and does not move when you talk or eat. For the first weeks you follow a soft diet while the implants begin to fuse with the bone.',
        ],
      },
      {
        title: 'Planning before surgery',
        intro: [
          'All-on-4 does not forgive guesswork: the position, angle and length of every implant have to be right the first time. That is why the case is planned from images of your bone, not from a visual estimate.',
          'Before surgery we check bone volume and density, the position of the sinus and nerve, and decide whether your case is better suited to All-on-4 or All-on-6. If the bone is too thin even for tilted implants, we tell you in advance what the alternatives are.',
        ],
      },
      {
        title: 'The final bridge material',
        intro: ['The final bridge can be made in two materials, each with a different balance of cost, durability and appearance:'],
        cards: [
          { title: 'Acrylic hybrid bridge (PMMA)', text: 'A titanium framework covered with acrylic teeth and gum. Lighter and more economical, although the acrylic surface wears faster and usually needs refreshing or replacing every 5 to 7 years.' },
          { title: 'Zirconia hybrid bridge', text: 'A zirconia bridge milled from a single block. Highly resistant to wear, staining and chipping, with a more natural, tooth-like translucency. Usually lasts 10 to 15 years or more.' },
        ],
        outro: ['Which material is included in your package, and any price difference, is written in your quote before you start.'],
      },
      {
        title: 'Two trips, six months apart',
        intro: [
          'All-on-4 requires two trips to Tirana, separated by a healing period at home. This is not a scheduling matter, it is biology: the implants need about six months to fuse with the bone before the final bridge is fitted on them.',
          'On the first trip we do the examination, surgery and fixed temporary bridge. On the second, impressions are taken and the final bridge is fitted with the bite adjusted. We help you organise travel and accommodation for both.',
        ],
      },
    ],
    stats: [
      { value: '4', label: 'Implants per jaw' },
      { value: '2', label: 'Trips' },
      { value: '6 months', label: 'Between trips' },
      { value: '2–3 hrs', label: 'Surgery per jaw' },
    ],
    priceTitle: 'Price',
    priceNote: 'Fixed teeth from the first trip',
    whatTitle: 'What is All-on-4?',
    what: [
      'All-on-4 is a full-arch restoration technique that replaces every tooth in the upper or lower jaw with just four dental implants, instead of one implant for every missing tooth.',
      'Two implants go in vertically at the front and two tilted at the back, where they grip stronger bone without passing through the sinus. Together, all four carry a fixed bridge that is fitted on the day of surgery and is never removed by the patient.',
    ],
    calloutTitle: 'Health matters as much as the jaw',
    calloutText:
      'Uncontrolled diabetes, active gum infection, heavy smoking and some bone medications all affect how well implants integrate. Some of these are manageable and do not rule out treatment, but they need to be known in advance, not discovered afterwards.',
    compareTitle: 'Which option suits you?',
    compareIntro: 'All of them replace a full arch of teeth. They differ in stability, cost and comfort:',
    compare: [
      { id: 'all-on-4', tag: 'This treatment', title: 'All-on-4', text: 'Four implants carry a fixed bridge. The tilted technique often avoids bone grafting, and you leave with fixed teeth from the first trip.' },
      { id: 'all-on-6', tag: 'Extra stability', title: 'All-on-6', text: 'Six implants spread the bite over more points, when the bone allows it. A good choice for a strong bite or the upper jaw.' },
      { id: 'denture', tag: 'Removable option', title: 'Removable denture', text: 'Cheaper and without surgery, but it rests on the gums, comes out at night and does not preserve the bone. Many patients come to All-on-4 precisely to leave it behind.' },
    ],
    fitTitle: 'Who is All-on-4 suitable for?',
    fitIntro: 'All-on-4 is designed for people who have lost most or all of their teeth in one or both jaws, or whose remaining teeth cannot be saved:',
    fit: [
      'Long-term denture wearers tired of movement, adhesive, sore spots or reduced taste',
      'Advanced gum disease, where teeth are loose and supporting bone has been lost',
      'Widespread decay or failing old dental work, where one-by-one repairs no longer make sense',
      'Existing bone loss at the back of the jaw, where tilted implants often avoid grafting',
      'Anyone facing removal of all the teeth in one jaw and deciding what to do next',
    ],
    fitNote:
      'All-on-4 is usually not recommended for patients with uncontrolled diabetes, active gum infection or heavy smoking, as these significantly affect implant integration. In these cases we recommend treating the underlying problem first and then reassessing suitability.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'All-on-4 takes two trips to Tirana, separated by six months of healing at home:',
    steps: [
      { title: 'Remote assessment', text: 'Send us photos and a recent panoramic X-ray or scan. We send back a preliminary plan: All-on-4 or All-on-6, whether extractions are needed, and an indicative cost. Free and without obligation.' },
      { title: 'Examination and planning', text: 'A full clinical examination and bone imaging on arrival. Implant positions, angles and lengths are planned from the real volume and density of your bone.' },
      { title: 'Implant surgery', text: 'Any tooth that cannot be saved is removed and the four implants are placed under local anaesthesia: two vertical at the front, two tilted at the back. Usually 2 to 3 hours per jaw.' },
      { title: 'Fixed temporary bridge', text: 'A fixed provisional bridge is attached to the implants, so you leave with a full set of teeth rather than a gap or removable plate. A soft diet follows.' },
      { title: 'Healing and integration', text: 'Over six months the implants fuse with the jawbone. You return to normal life with the temporary bridge in place, and we stay reachable throughout.' },
      { title: 'Final bridge', text: 'On the second trip impressions are taken and your final bridge is made and fitted, with the bite adjusted and every surface finished.' },
    ],
    whyBandTitle: 'Why choose Veneer Clinic for All-on-4?',
    whyBandText:
      'All-on-4 does not forgive mistakes based on guesswork: implant position, angle and length have to be right the first time. Every case is planned from your bone anatomy, the package price is fixed from the start, and you leave the first trip with a full set of fixed teeth.',
    caseText: 'Full-arch restoration with All-on-4',
    faq: [
      { question: 'How much does All-on-4 cost?', answer: '€4,500 per jaw as a complete package: the implants, the fixed temporary bridge on the first trip and the final bridge on the second. The exact quote, with the bridge material and any extractions needed, is sent to you in writing after the assessment.' },
      { question: 'How long does the All-on-4 procedure take?', answer: 'Placing the implants usually takes 2 to 3 hours per jaw and is completed within a single day. Full healing before the final bridge takes about six months, during which you wear the fixed temporary bridge.' },
      { question: 'How many trips are needed?', answer: 'Two. On the first, the examination, surgery and fixed temporary bridge. After six months, on the second trip, the final bridge is fitted. We help you organise both trips and your stay.' },
      { question: 'Is the procedure painful?', answer: 'The procedure is done under local anaesthesia, and most patients report mild discomfort afterwards, managed with ordinary painkillers. Swelling in the first days is normal and passes quickly.' },
      { question: 'Do I really leave with fixed teeth?', answer: 'Yes. After surgery a provisional bridge is fixed onto the implants, so you do not spend a single day without teeth and do not wear a removable denture. For the first weeks you eat soft food while the implants integrate.' },
      { question: 'What if I have been told I do not have enough bone?', answer: 'All-on-4 was created precisely for this. The back implants are tilted to grip the denser bone in front of the sinus, so many patients told they need bone grafts qualify without them. If the bone is too thin, we tell you in advance whether a sinus lift or zygomatic implants are needed.' },
      { question: 'All-on-4 or All-on-6?', answer: 'All-on-6 uses two extra implants to spread the bite over more points, which for some patients, depending on bone and bite force, is the better choice. All-on-4 is simpler and often avoids bone grafting. We recommend one after assessing your bone.' },
      { question: 'How long do All-on-4 implants last?', answer: 'With proper care and regular check-ups, the implants are designed to last many years, often decades. The final bridge may need refreshing or replacing after some years, depending on the material, while the implants stay in place.' },
    ],
  },
  de: {
    name: 'All-on-4 Implantate',
    eyebrow: 'Implantate · Albanien',
    subtitle: 'Kompletter Kieferersatz mit nur 4 Implantaten: eine feste Brücke, die nie herausgenommen wird.',
    lead: 'Ein ganzer Kiefer mit kranken Zähnen, in einem Besuch ersetzt: Vier Implantate tragen eine feste Brücke, und Sie gehen vom ersten Tag an mit festen Zähnen.',
    kicker: 'All-on-4 Implantate in Tirana, Albanien',
    articleTitle: 'All-on-4: ein ganzer Kiefer fester Zähne auf vier Implantaten',
    intro: [
      'All-on-4 ersetzt einen ganzen Kiefer fehlender oder geschädigter Zähne durch nur vier strategisch gesetzte Implantate, die eine feste, nicht herausnehmbare Brücke tragen.',
      'Zwei Implantate werden senkrecht im vorderen Kiefer gesetzt, die beiden anderen hinten schräg, um den dichtesten Knochen zu fassen und Kieferhöhle oder Nervkanal zu umgehen. So ist die Technik auch möglich, wenn das Knochenvolumen durch jahrelangen Zahnverlust abgenommen hat.',
      'Da die Implantate so positioniert werden, dass sie als eine Einheit zusammenarbeiten, kommen die meisten Patienten ohne den Knochenaufbau aus, den eine herkömmliche Implantation erfordern würde. Sie beenden die erste Reise mit einem kompletten Satz fester Zähne, nicht mit einer Lücke und nicht mit einer herausnehmbaren Platte, während die Implantate in den folgenden Monaten einheilen.',
      'In der Veneer Clinic kostet All-on-4 4.500 € pro Kiefer als Komplettpaket und erfolgt in zwei Reisen im Abstand von sechs Monaten.',
    ],
    sections: [
      {
        title: 'Warum vier Implantate genügen',
        intro: [
          'Die beiden vorderen Implantate werden gerade gesetzt. Die beiden hinteren werden schräg nach hinten geneigt, meist 30 bis 45 Grad. So verankern sie sich in dickerem, stabilerem Knochen und reichen weiter entlang des Kiefers, ohne die Kieferhöhle zu durchqueren.',
          'Da alle vier Implantate die Last der Brücke teilen und für maximalen Knochenkontakt positioniert sind, können sie meist schon am Tag des Einsetzens eine feste Brücke tragen. Die Technik wurde speziell für Patienten mit reduziertem Knochen im hinteren Kiefer entwickelt, genau die Gruppe, der man am häufigsten sagt, sie brauche Knochenaufbau oder komme für Implantate gar nicht infrage.',
        ],
      },
      {
        title: 'Feste Zähne ab der ersten Reise',
        intro: [
          'Nicht erhaltungsfähige Zähne werden entfernt und die vier Implantate in derselben Sitzung gesetzt. Darauf wird eine provisorische Brücke fixiert, sodass Sie mit vollständigen Zähnen gehen statt mit einer Lücke oder herausnehmbaren Prothese.',
          'Die provisorische Brücke ist fest: Sie wird nachts nicht herausgenommen und bewegt sich beim Sprechen oder Essen nicht. In den ersten Wochen essen Sie weiche Kost, während die Implantate einzuheilen beginnen.',
        ],
      },
      {
        title: 'Planung vor dem Eingriff',
        intro: [
          'All-on-4 verzeiht kein Raten: Position, Winkel und Länge jedes Implantats müssen beim ersten Mal stimmen. Deshalb wird der Fall anhand von Bildern Ihres Knochens geplant, nicht nach Augenmaß.',
          'Vor dem Eingriff prüfen wir Knochenvolumen und -dichte, die Lage von Kieferhöhle und Nerv und entscheiden, ob Ihr Fall besser für All-on-4 oder All-on-6 geeignet ist. Ist der Knochen selbst für schräge Implantate zu dünn, sagen wir Ihnen vorher, welche Alternativen es gibt.',
        ],
      },
      {
        title: 'Das Material der definitiven Brücke',
        intro: ['Die definitive Brücke kann aus zwei Materialien gefertigt werden, jeweils mit anderem Verhältnis von Kosten, Haltbarkeit und Aussehen:'],
        cards: [
          { title: 'Acryl-Hybridbrücke (PMMA)', text: 'Ein Titangerüst mit Zähnen und Zahnfleisch aus Acryl. Leichter und günstiger, allerdings nutzt sich die Acryloberfläche schneller ab und muss meist alle 5 bis 7 Jahre aufgefrischt oder ersetzt werden.' },
          { title: 'Zirkon-Hybridbrücke', text: 'Eine aus einem Block gefräste Zirkonbrücke. Sehr widerstandsfähig gegen Abnutzung, Verfärbung und Absplitterung, mit natürlicherer, zahnähnlicher Transluzenz. Hält meist 10 bis 15 Jahre oder länger.' },
        ],
        outro: ['Welches Material in Ihrem Paket enthalten ist und eventuelle Preisunterschiede stehen in Ihrem Angebot, bevor Sie beginnen.'],
      },
      {
        title: 'Zwei Reisen, sechs Monate Abstand',
        intro: [
          'All-on-4 erfordert zwei Reisen nach Tirana, getrennt durch eine Heilungsphase zu Hause. Das ist keine Terminfrage, sondern Biologie: Die Implantate brauchen etwa sechs Monate, um mit dem Knochen zu verwachsen, bevor die definitive Brücke darauf gesetzt wird.',
          'Bei der ersten Reise erfolgen Untersuchung, Eingriff und feste provisorische Brücke. Bei der zweiten werden Abdrücke genommen und die definitive Brücke mit angepasstem Biss eingesetzt. Wir helfen Ihnen bei Reise und Unterkunft für beide.',
        ],
      },
    ],
    stats: [
      { value: '4', label: 'Implantate pro Kiefer' },
      { value: '2', label: 'Reisen' },
      { value: '6 Monate', label: 'Zwischen den Reisen' },
      { value: '2–3 Std.', label: 'Eingriff pro Kiefer' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Feste Zähne ab der ersten Reise',
    whatTitle: 'Was ist All-on-4?',
    what: [
      'All-on-4 ist eine Technik zur Versorgung des ganzen Kiefers, die jeden Zahn im Ober- oder Unterkiefer mit nur vier Zahnimplantaten ersetzt, statt einem Implantat pro fehlendem Zahn.',
      'Zwei Implantate werden vorne senkrecht und zwei hinten schräg gesetzt, wo sie festeren Knochen fassen, ohne die Kieferhöhle zu durchqueren. Zusammen tragen alle vier eine feste Brücke, die am Tag des Eingriffs eingesetzt und vom Patienten nie herausgenommen wird.',
    ],
    calloutTitle: 'Die Gesundheit zählt so viel wie der Kiefer',
    calloutText:
      'Unkontrollierter Diabetes, aktive Zahnfleischentzündung, starkes Rauchen und manche Knochenmedikamente beeinflussen, wie gut Implantate einheilen. Manches davon ist beherrschbar und schließt die Behandlung nicht aus, muss aber vorher bekannt sein, nicht hinterher entdeckt werden.',
    compareTitle: 'Welche Option passt zu Ihnen?',
    compareIntro: 'Alle ersetzen einen ganzen Kiefer. Sie unterscheiden sich in Stabilität, Kosten und Komfort:',
    compare: [
      { id: 'all-on-4', tag: 'Diese Behandlung', title: 'All-on-4', text: 'Vier Implantate tragen eine feste Brücke. Die schräge Technik vermeidet oft Knochenaufbau, und Sie gehen ab der ersten Reise mit festen Zähnen.' },
      { id: 'all-on-6', tag: 'Mehr Stabilität', title: 'All-on-6', text: 'Sechs Implantate verteilen den Biss auf mehr Punkte, wenn der Knochen es erlaubt. Eine gute Wahl bei starkem Biss oder im Oberkiefer.' },
      { id: 'denture', tag: 'Herausnehmbare Option', title: 'Herausnehmbare Prothese', text: 'Günstiger und ohne Eingriff, liegt aber auf dem Zahnfleisch, wird nachts herausgenommen und erhält den Knochen nicht. Viele Patienten kommen gerade deshalb zu All-on-4.' },
    ],
    fitTitle: 'Für wen eignet sich All-on-4?',
    fitIntro: 'All-on-4 ist für Menschen gedacht, die die meisten oder alle Zähne in einem oder beiden Kiefern verloren haben oder deren restliche Zähne nicht zu retten sind:',
    fit: [
      'Langjährige Prothesenträger, die Bewegung, Haftcreme, Druckstellen oder vermindertes Geschmacksempfinden leid sind',
      'Fortgeschrittene Parodontitis mit lockeren Zähnen und verlorenem Stützknochen',
      'Ausgedehnte Karies oder versagende alte Zahnarbeiten, bei denen Einzelreparaturen keinen Sinn mehr ergeben',
      'Bestehender Knochenschwund im hinteren Kiefer, wo schräge Implantate oft Knochenaufbau vermeiden',
      'Alle, denen die Entfernung aller Zähne eines Kiefers bevorsteht und die entscheiden, wie es weitergeht',
    ],
    fitNote:
      'All-on-4 wird bei unkontrolliertem Diabetes, aktiver Zahnfleischentzündung oder starkem Rauchen meist nicht empfohlen, da diese die Einheilung deutlich beeinträchtigen. In diesen Fällen empfehlen wir, zuerst die Grundursache zu behandeln und die Eignung danach neu zu beurteilen.',
    stepsTitle: 'So funktioniert die Behandlung',
    stepsIntro: 'All-on-4 erfordert zwei Reisen nach Tirana, getrennt durch sechs Monate Heilung zu Hause:',
    steps: [
      { title: 'Ferneinschätzung', text: 'Senden Sie uns Fotos und ein aktuelles Panorama-Röntgenbild oder einen Scan. Wir schicken einen vorläufigen Plan: All-on-4 oder All-on-6, ob Extraktionen nötig sind, und eine Kostenschätzung. Kostenlos und unverbindlich.' },
      { title: 'Untersuchung und Planung', text: 'Eine vollständige klinische Untersuchung und Knochenbildgebung bei Ankunft. Position, Winkel und Länge der Implantate werden nach dem tatsächlichen Volumen und der Dichte Ihres Knochens geplant.' },
      { title: 'Implantation', text: 'Nicht erhaltungsfähige Zähne werden entfernt und die vier Implantate unter örtlicher Betäubung gesetzt: zwei senkrecht vorne, zwei schräg hinten. Meist 2 bis 3 Stunden pro Kiefer.' },
      { title: 'Feste provisorische Brücke', text: 'Eine feste provisorische Brücke wird auf den Implantaten befestigt, sodass Sie mit vollständigen Zähnen gehen statt mit Lücke oder Platte. Danach weiche Kost.' },
      { title: 'Heilung und Einheilung', text: 'Über sechs Monate verwachsen die Implantate mit dem Kieferknochen. Sie leben mit der provisorischen Brücke normal weiter, und wir bleiben jederzeit erreichbar.' },
      { title: 'Definitive Brücke', text: 'Bei der zweiten Reise werden Abdrücke genommen und Ihre definitive Brücke gefertigt und eingesetzt, mit angepasstem Biss und fertig bearbeiteten Flächen.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für All-on-4?',
    whyBandText:
      'All-on-4 verzeiht keine Fehler aus Schätzungen: Position, Winkel und Länge der Implantate müssen beim ersten Mal stimmen. Jeder Fall wird nach Ihrer Knochenanatomie geplant, der Paketpreis steht von Anfang an fest, und Sie verlassen die erste Reise mit einem kompletten Satz fester Zähne.',
    caseText: 'Komplette Kieferversorgung mit All-on-4',
    faq: [
      { question: 'Was kostet All-on-4?', answer: '4.500 € pro Kiefer als Komplettpaket: die Implantate, die feste provisorische Brücke bei der ersten Reise und die definitive Brücke bei der zweiten. Das genaue Angebot mit Brückenmaterial und eventuell nötigen Extraktionen erhalten Sie nach der Einschätzung schriftlich.' },
      { question: 'Wie lange dauert der All-on-4-Eingriff?', answer: 'Das Setzen der Implantate dauert meist 2 bis 3 Stunden pro Kiefer und ist an einem Tag abgeschlossen. Die vollständige Heilung vor der definitiven Brücke dauert etwa sechs Monate, in denen Sie die feste provisorische Brücke tragen.' },
      { question: 'Wie viele Reisen sind nötig?', answer: 'Zwei. Bei der ersten Untersuchung, Eingriff und feste provisorische Brücke. Nach sechs Monaten wird bei der zweiten Reise die definitive Brücke eingesetzt. Wir helfen Ihnen bei beiden Reisen und der Unterkunft.' },
      { question: 'Ist der Eingriff schmerzhaft?', answer: 'Der Eingriff erfolgt unter örtlicher Betäubung, und die meisten Patienten berichten danach über leichte Beschwerden, die mit üblichen Schmerzmitteln gut zu behandeln sind. Schwellungen in den ersten Tagen sind normal und gehen schnell zurück.' },
      { question: 'Gehe ich wirklich mit festen Zähnen?', answer: 'Ja. Nach dem Eingriff wird eine provisorische Brücke auf den Implantaten fixiert, sodass Sie keinen Tag ohne Zähne verbringen und keine herausnehmbare Prothese tragen. In den ersten Wochen essen Sie weiche Kost, während die Implantate einheilen.' },
      { question: 'Was, wenn man mir gesagt hat, mein Knochen reiche nicht?', answer: 'Genau dafür wurde All-on-4 entwickelt. Die hinteren Implantate werden schräg gesetzt, um den dichteren Knochen vor der Kieferhöhle zu fassen, sodass viele Patienten, denen ein Knochenaufbau empfohlen wurde, ohne auskommen. Ist der Knochen zu dünn, sagen wir Ihnen vorher, ob ein Sinuslift oder Zygoma-Implantate nötig sind.' },
      { question: 'All-on-4 oder All-on-6?', answer: 'All-on-6 nutzt zwei zusätzliche Implantate, um den Biss auf mehr Punkte zu verteilen, was für manche Patienten je nach Knochen und Beißkraft die bessere Wahl ist. All-on-4 ist einfacher und vermeidet oft Knochenaufbau. Wir empfehlen eine Variante nach Beurteilung Ihres Knochens.' },
      { question: 'Wie lange halten All-on-4-Implantate?', answer: 'Bei guter Pflege und regelmäßigen Kontrollen sind die Implantate auf viele Jahre, oft Jahrzehnte ausgelegt. Die definitive Brücke muss je nach Material nach einigen Jahren eventuell aufgefrischt oder ersetzt werden, während die Implantate bleiben.' },
    ],
  },
  it: {
    name: 'Impianti All-on-4',
    eyebrow: 'Impianti · Albania',
    subtitle: 'Sostituzione dell’arcata completa con soli 4 impianti: un ponte fisso che non si toglie mai.',
    lead: 'Un’arcata intera di denti compromessi, sostituita in una visita: quattro impianti sostengono un ponte fisso e vai via con denti fissi dal primo giorno.',
    kicker: 'Impianti All-on-4 a Tirana, Albania',
    articleTitle: 'All-on-4: un’arcata completa di denti fissi su quattro impianti',
    intro: [
      'L’All-on-4 sostituisce un’arcata completa di denti mancanti o danneggiati con soli quattro impianti posizionati strategicamente, che sostengono un ponte fisso e non rimovibile.',
      'Due impianti vengono inseriti verticalmente nella parte anteriore dell’arcata, mentre gli altri due vengono inclinati nella parte posteriore per afferrare l’osso più denso ed evitare il seno o il canale del nervo. Questo rende la tecnica possibile anche quando il volume osseo si è ridotto dopo anni di perdita dei denti.',
      'Poiché gli impianti sono posizionati per lavorare insieme come un’unica unità, la maggior parte dei pazienti è idonea senza l’innesto osseo che richiederebbe l’implantologia tradizionale. Concludi il primo viaggio con un set completo di denti fissi, non con uno spazio vuoto né con una placca mobile, mentre gli impianti si integrano con l’osso nei mesi successivi.',
      'Alla Veneer Clinic, l’All-on-4 costa 4.500 € per arcata come pacchetto completo e si svolge in due viaggi, a sei mesi di distanza.',
    ],
    sections: [
      {
        title: 'Perché bastano quattro impianti',
        intro: [
          'I due impianti anteriori vengono inseriti dritti. I due posteriori vengono inclinati, di solito di 30-45 gradi, verso la parte posteriore. Così si ancorano in un osso più spesso e stabile e arrivano più lontano lungo l’arcata senza attraversare il seno.',
          'Poiché tutti e quattro condividono il carico del ponte e sono posizionati per il massimo contatto osseo, di solito possono sostenere un ponte fisso il giorno stesso dell’inserimento. La tecnica è stata sviluppata proprio per i pazienti con osso ridotto nella parte posteriore, esattamente il gruppo a cui più spesso si dice che serve un innesto o che non è candidato agli impianti.',
        ],
      },
      {
        title: 'Denti fissi dal primo viaggio',
        intro: [
          'I denti non recuperabili vengono estratti e i quattro impianti inseriti nella stessa seduta. Sopra viene fissato un ponte provvisorio, così vai via con denti completi invece che con uno spazio vuoto o una protesi mobile.',
          'Il ponte provvisorio è fisso: non si toglie la notte e non si muove quando parli o mangi. Nelle prime settimane segui una dieta morbida mentre gli impianti iniziano a integrarsi con l’osso.',
        ],
      },
      {
        title: 'La pianificazione prima dell’intervento',
        intro: [
          'L’All-on-4 non perdona le supposizioni: posizione, angolo e lunghezza di ogni impianto devono essere giusti la prima volta. Per questo il caso viene pianificato dalle immagini del tuo osso, non a occhio.',
          'Prima dell’intervento controlliamo volume e densità dell’osso, posizione del seno e del nervo, e decidiamo se il tuo caso è più adatto all’All-on-4 o all’All-on-6. Se l’osso è troppo sottile anche per impianti inclinati, ti diciamo in anticipo quali sono le alternative.',
        ],
      },
      {
        title: 'Il materiale del ponte definitivo',
        intro: ['Il ponte definitivo può essere realizzato in due materiali, ciascuno con un diverso equilibrio di costo, resistenza e aspetto:'],
        cards: [
          { title: 'Ponte ibrido in acrilico (PMMA)', text: 'Una struttura in titanio rivestita con denti e gengiva in acrilico. Più leggero ed economico, anche se la superficie acrilica si consuma più in fretta e di solito va rinnovata o sostituita ogni 5-7 anni.' },
          { title: 'Ponte ibrido in zirconia', text: 'Un ponte in zirconia fresato da un unico blocco. Molto resistente a usura, macchie e scheggiature, con una traslucenza più naturale, simile al dente. Dura di solito 10-15 anni o più.' },
        ],
        outro: ['Quale materiale è incluso nel tuo pacchetto, ed eventuali differenze di prezzo, sono scritti nel preventivo prima di iniziare.'],
      },
      {
        title: 'Due viaggi, a sei mesi di distanza',
        intro: [
          'L’All-on-4 richiede due viaggi a Tirana, separati da un periodo di guarigione a casa. Non è una questione di agenda, è biologia: gli impianti hanno bisogno di circa sei mesi per integrarsi con l’osso prima di applicare il ponte definitivo.',
          'Nel primo viaggio si fanno visita, intervento e ponte provvisorio fisso. Nel secondo si prendono le impronte e si applica il ponte definitivo con il morso regolato. Ti aiutiamo a organizzare viaggio e soggiorno per entrambi.',
        ],
      },
    ],
    stats: [
      { value: '4', label: 'Impianti per arcata' },
      { value: '2', label: 'Viaggi' },
      { value: '6 mesi', label: 'Tra i viaggi' },
      { value: '2–3 ore', label: 'Intervento per arcata' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Denti fissi dal primo viaggio',
    whatTitle: 'Cos’è l’All-on-4?',
    what: [
      'L’All-on-4 è una tecnica di riabilitazione dell’intera arcata che sostituisce ogni dente superiore o inferiore con soli quattro impianti dentali, invece di un impianto per ogni dente mancante.',
      'Due impianti vengono inseriti verticalmente davanti e due inclinati dietro, dove afferrano un osso più solido senza attraversare il seno. Insieme, tutti e quattro sostengono un ponte fisso applicato il giorno dell’intervento e che il paziente non toglie mai.',
    ],
    calloutTitle: 'La salute conta quanto l’osso',
    calloutText:
      'Diabete non controllato, infezione gengivale attiva, fumo intenso e alcuni farmaci per le ossa influiscono sull’integrazione degli impianti. Alcuni sono gestibili e non escludono il trattamento, ma vanno conosciuti in anticipo, non scoperti dopo.',
    compareTitle: 'Quale opzione fa per te?',
    compareIntro: 'Tutte sostituiscono un’arcata completa. Si differenziano per stabilità, costo e comfort:',
    compare: [
      { id: 'all-on-4', tag: 'Questo trattamento', title: 'All-on-4', text: 'Quattro impianti sostengono un ponte fisso. La tecnica inclinata spesso evita l’innesto osseo, e vai via con denti fissi dal primo viaggio.' },
      { id: 'all-on-6', tag: 'Stabilità extra', title: 'All-on-6', text: 'Sei impianti distribuiscono il morso su più punti, quando l’osso lo permette. Una buona scelta per un morso forte o per l’arcata superiore.' },
      { id: 'denture', tag: 'Opzione mobile', title: 'Protesi mobile', text: 'Più economica e senza intervento, ma poggia sulle gengive, si toglie la notte e non preserva l’osso. Molti pazienti arrivano all’All-on-4 proprio per lasciarla.' },
    ],
    fitTitle: 'Per chi è indicato l’All-on-4?',
    fitIntro: 'L’All-on-4 è pensato per chi ha perso la maggior parte o tutti i denti in una o entrambe le arcate, o i cui denti rimasti non possono essere salvati:',
    fit: [
      'Portatori di protesi da lungo tempo, stanchi di movimenti, adesivo, punti dolenti o gusto ridotto',
      'Malattia gengivale avanzata, con denti mobili e osso di supporto perso',
      'Carie diffuse o vecchi lavori dentali che cedono, dove le riparazioni una per una non hanno più senso',
      'Perdita ossea nella parte posteriore, dove gli impianti inclinati spesso evitano l’innesto',
      'Chiunque debba estrarre tutti i denti di un’arcata e stia decidendo cosa fare dopo',
    ],
    fitNote:
      'L’All-on-4 di solito non è consigliato in caso di diabete non controllato, infezione gengivale attiva o fumo intenso, perché influiscono molto sull’integrazione degli impianti. In questi casi consigliamo di trattare prima il problema di base e poi rivalutare l’idoneità.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'L’All-on-4 richiede due viaggi a Tirana, separati da sei mesi di guarigione a casa:',
    steps: [
      { title: 'Valutazione a distanza', text: 'Inviaci foto e una radiografia panoramica o una TAC recente. Ti rimandiamo un piano preliminare: All-on-4 o All-on-6, se servono estrazioni, e un costo indicativo. Gratis e senza impegno.' },
      { title: 'Visita e pianificazione', text: 'Una visita clinica completa e immagini dell’osso all’arrivo. Posizione, angolo e lunghezza degli impianti vengono pianificati sul volume e sulla densità reali del tuo osso.' },
      { title: 'Intervento implantare', text: 'I denti non recuperabili vengono estratti e i quattro impianti inseriti in anestesia locale: due verticali davanti, due inclinati dietro. Di solito 2-3 ore per arcata.' },
      { title: 'Ponte provvisorio fisso', text: 'Un ponte provvisorio fisso viene collegato agli impianti, così vai via con denti completi invece che con uno spazio o una placca mobile. Segue una dieta morbida.' },
      { title: 'Guarigione e integrazione', text: 'In sei mesi gli impianti si fondono con l’osso. Torni alla vita normale con il ponte provvisorio, e restiamo raggiungibili per tutto il tempo.' },
      { title: 'Ponte definitivo', text: 'Nel secondo viaggio si prendono le impronte e il ponte definitivo viene realizzato e applicato, con il morso regolato e ogni superficie rifinita.' },
    ],
    whyBandTitle: 'Perché scegliere Veneer Clinic per l’All-on-4?',
    whyBandText:
      'L’All-on-4 non perdona errori basati su supposizioni: posizione, angolo e lunghezza degli impianti devono essere giusti la prima volta. Ogni caso viene pianificato sulla tua anatomia ossea, il prezzo del pacchetto è fisso fin dall’inizio, e lasci il primo viaggio con un set completo di denti fissi.',
    caseText: 'Riabilitazione completa dell’arcata con All-on-4',
    faq: [
      { question: 'Quanto costa l’All-on-4?', answer: '4.500 € per arcata come pacchetto completo: gli impianti, il ponte provvisorio fisso nel primo viaggio e il ponte definitivo nel secondo. Il preventivo esatto, con il materiale del ponte ed eventuali estrazioni necessarie, ti viene inviato per iscritto dopo la valutazione.' },
      { question: 'Quanto dura l’intervento All-on-4?', answer: 'L’inserimento degli impianti richiede di solito 2-3 ore per arcata e si conclude in un solo giorno. La guarigione completa prima del ponte definitivo richiede circa sei mesi, durante i quali porti il ponte provvisorio fisso.' },
      { question: 'Quanti viaggi servono?', answer: 'Due. Nel primo, visita, intervento e ponte provvisorio fisso. Dopo sei mesi, nel secondo viaggio, si applica il ponte definitivo. Ti aiutiamo a organizzare entrambi i viaggi e il soggiorno.' },
      { question: 'L’intervento è doloroso?', answer: 'L’intervento si esegue in anestesia locale, e la maggior parte dei pazienti riferisce un lieve fastidio dopo, gestito con comuni antidolorifici. Il gonfiore dei primi giorni è normale e passa presto.' },
      { question: 'Vado via davvero con denti fissi?', answer: 'Sì. Dopo l’intervento un ponte provvisorio viene fissato sugli impianti, così non passi neanche un giorno senza denti e non porti una protesi mobile. Nelle prime settimane mangi cibi morbidi mentre gli impianti si integrano.' },
      { question: 'E se mi hanno detto che non ho abbastanza osso?', answer: 'L’All-on-4 è nato proprio per questo. Gli impianti posteriori vengono inclinati per afferrare l’osso più denso davanti al seno, così molti pazienti a cui era stato detto che servivano innesti risultano idonei senza. Se l’osso è troppo sottile, ti diciamo in anticipo se serve un rialzo del seno o impianti zigomatici.' },
      { question: 'All-on-4 o All-on-6?', answer: 'L’All-on-6 usa due impianti in più per distribuire il morso su più punti, cosa che per alcuni pazienti, in base a osso e forza masticatoria, è la scelta migliore. L’All-on-4 è più semplice e spesso evita l’innesto osseo. Ti consigliamo l’uno o l’altro dopo aver valutato il tuo osso.' },
      { question: 'Quanto durano gli impianti All-on-4?', answer: 'Con le cure giuste e controlli regolari, gli impianti sono progettati per durare molti anni, spesso decenni. Il ponte definitivo può richiedere un rinnovo o una sostituzione dopo alcuni anni, a seconda del materiale, mentre gli impianti restano al loro posto.' },
    ],
  },
};

export default function AllOn4Page() {
  return (
    <TreatmentArticle
      content={content}
      itemId="all-on-4"
      heroImage={images.beforeAfterEdited[0] ?? images.heroAfter}
      whatImage={images.surgery[1] ?? images.heroAfter}
    />
  );
}
