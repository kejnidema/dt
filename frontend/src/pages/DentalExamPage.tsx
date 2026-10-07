import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Ekzaminim dentar',
    eyebrow: 'Ekzaminim dhe diagnostikë · Shqipëri',
    subtitle: 'Kontroll klinik i plotë i dhëmbëve, mishrave dhe kafshimit, me plan trajtimi dhe ofertë të detajuar me shkrim që e merrni me vete.',
    lead: 'Kontroll i plotë i dhëmbëve, mishrave dhe kafshimit: pika e nisjes për çdo plan trajtimi që ju rekomandojmë.',
    kicker: 'Ekzaminim dentar në Tiranë, Shqipëri',
    articleTitle: 'Ekzaminim dentar në Tiranë: ku nis çdo plan trajtimi',
    intro: [
      'Një ekzaminim dentar është hapi i parë i çdo plani trajtimi në Veneer Clinic. Është takimi ku mësoni çfarë i nevojitet vërtet gojës suaj, jo atë që keni supozuar.',
      'Zgjat 30 deri në 45 minuta dhe është falas. Dilni me dy gjëra me shkrim: një plan dhe një çmim. Asnjëra prej tyre nuk ju detyron për asgjë.',
    ],
    sections: [
      {
        title: 'Nuk është takim shitjeje',
        intro: [
          'Një klinikë që fiton nga trajtimet e mëdha ka çdo interes t’i gjejë ato. Ne punojmë ndryshe, dhe kjo duket që në mënyrën si mbaron ekzaminimi: me një plan të shkruar që e merrni me vete dhe me një vendim që e merrni më pas, pa nxitim.',
          'Kur një trajtim më i vogël arrin atë që dëshironi, ai është trajtimi që ju rekomandojmë. Kur ajo që kërkoni nuk është e mirë për dhëmbët tuaj, jua themi hapur në vend që ta pranojmë rezervimin.',
        ],
      },
      {
        title: 'Imazheria, vetëm kur nevojitet',
        intro: [
          'Jo çdo ekzaminim ka nevojë për imazheri. Kur rasti juaj e kërkon (planifikimi i implanteve e kërkon gjithmonë), ju shpjegojmë çfarë nevojitet dhe pse para se të bëhet. Skanimi 3D CT është falas për pacientët që trajtohen te ne.',
          'Nëse vini nga jashtë, mund të na dërgoni një grafi panoramike para udhëtimit. Kështu dentisti e shqyrton rastin tuaj që përpara dhe ju jep një plan paraprak, që e konfirmojmë gjatë ekzaminimit në klinikë.',
        ],
      },
      {
        title: 'Një ekip, nga fillimi deri në fund',
        intro: [
          'Mjeku që ju ekzaminon është pjesë e të njëjtit ekip që ju trajton. Nuk ka dërgime te palë të treta dhe as ndryshime mendimi në mes të planit: ajo që vendoset në ekzaminim është ajo që bëhet në karrige. Nëse diçka ndryshon gjatë trajtimit, jua shpjegojmë para se të vazhdojmë.',
        ],
      },
      {
        title: 'Nëse keni radiografi ose plan nga një klinikë tjetër',
        intro: [
          'Sillini me vete. Nëse keni radiografi apo skanim të kohëve të fundit, mund të mos jetë nevoja t’i përsërisni. Nëse keni një plan trajtimi nga një klinikë tjetër, e shqyrtojmë me gojën tuaj përpara dhe ju japim një mendim të argumentuar.',
        ],
      },
      {
        title: 'Çfarë përfshin ekzaminimi?',
        intro: ['Çdo ekzaminim dentar në klinikën tonë ndjek të njëjtën radhë, dhe çdo hap ka arsyen e vet.'],
        inline: [
          { title: 'Historia juaj dhe shqetësimet.', text: 'Fillojmë me bisedë: çfarë ju shqetëson, çfarë trajtimesh keni bërë më parë, çfarë ilaçesh merrni dhe çfarë rezultati prisni. Sa më qartë ta kuptojmë këtë, aq më i saktë del plani.' },
          { title: 'Dhëmbët, një nga një.', text: 'Kontrollojmë çdo dhëmb: karies, mbushje dhe kurora të vjetra, plasaritje, konsumim dhe lëvizshmëri. Gjithçka regjistrohet në kartelën tuaj dentare, që plani të bazohet në të dhëna konkrete dhe jo në përshtypje.' },
          { title: 'Mishrat dhe kafshimi.', text: 'Vlerësojmë gjendjen e mishrave të dhëmbëve, sepse asnjë trajtim estetik apo me implante nuk zgjat mbi mishra të sëmurë. Kontrollojmë gjithashtu si mbyllen dhëmbët dhe nëse ka shenja bruksizmi (shtrëngim ose kërcëllim i dhëmbëve), sepse këto përcaktojnë materialin dhe dizajnin e çdo restaurimi.' },
          { title: 'Skanim 3D kur rasti e kërkon.', text: 'Nëse plani juaj përfshin implante, skanimi 3D është i domosdoshëm: tregon kockën me saktësi dhe me të vendosim pozicionin, gjatësinë dhe diametrin e çdo implanti para ndërhyrjes. Përdorim implante MegaGen. Për kurorat dhe fasetat marrim matje që dërgohen në laborator, ku punohen në zirkon Made in Germany ose në E-max.' },
          { title: 'Plani dhe oferta.', text: 'Në fund shqyrtojmë bashkë çfarë kemi parë, mundësitë që keni dhe çfarë rekomandojmë. Merrni me vete një plan trajtimi dhe një ofertë të detajuar me shkrim, zë për zë, me implantet dhe materialet e specifikuara. Nëse keni pyetje, bëjini aty: asnjë pyetje nuk është e tepërt kur bëhet fjalë për gojën tuaj dhe për koston e trajtimit.' },
        ],
      },
      {
        title: 'Pse i përmendim markat dhe materialet',
        intro: [
          'Shumë klinika shkruajnë në ofertë thjesht «implant» ose «kurorë», pa treguar prodhuesin apo materialin. Diferenca nuk është e vogël. Në ofertën tuaj shkruhet emri i secilit, implanti MegaGen, zirkoni Made in Germany ose E-max, që të krahasoni të njëjtën gjë me të njëjtën gjë.',
        ],
      },
    ],
    stats: [
      { value: '30–45', label: 'Minuta' },
      { value: '1', label: 'Takim' },
      { value: 'Me shkrim', label: 'Plan dhe ofertë' },
      { value: 'Falas', label: 'Pa detyrim' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Pa detyrim për trajtim',
    whatTitle: 'Çfarë është ekzaminimi dentar?',
    what: [
      'Ekzaminimi dentar është një kontroll i plotë i dhëmbëve, mishrave dhe kafshimit, që përfundon me një plan trajtimi dhe një ofertë të detajuar me shkrim.',
      'Zgjat 30 deri në 45 minuta, është falas dhe nuk ju detyron për asgjë. Është pika e nisjes për çdo trajtim në Veneer Clinic, nga një mbushje te një rikonstruksion i plotë me implante.',
    ],
    calloutTitle: 'Dilni me një plan dhe një çmim, pa detyrim',
    calloutText:
      'Plani i trajtimit dhe oferta e detajuar janë tuajat për t’i marrë me vete dhe për t’i menduar me qetësi. Çfarë bëni me to e vendosni ju, përfshirë edhe zgjedhjen për të mos bërë asgjë.',
    compareTitle: 'Ekzaminimi dhe diagnostika',
    compareIntro: 'Ekzaminimi është hapi i parë. Ja si lidhet me hapat e tjerë diagnostikë dhe parandalues:',
    compare: [
      { id: 'dental-exam', tag: 'Ky shërbim', title: 'Ekzaminim dentar', text: 'Kontroll klinik i plotë, me plan trajtimi dhe ofertë me shkrim. Falas dhe pa detyrim.' },
      { id: 'ct-scan', tag: 'Kur nevojitet', title: 'Skanim 3D CT', text: 'Imazh tredimensional i kockës dhe rrënjëve, i domosdoshëm për implantet. Falas me trajtimin.' },
      { id: 'scaling', tag: 'Shpesh në të njëjtën ditë', title: 'Pastrim i dhëmbëve', text: 'Heq gurëzat dhe pllakën që shkaktojnë probleme të mishrave. Shpesh bëhet menjëherë pas ekzaminimit.' },
    ],
    fitTitle: 'Kur duhet të rezervoni një ekzaminim?',
    fitIntro: 'Ekzaminimi është pika e duhur e nisjes nëse:',
    fit: [
      'Po mendoni për implante, faseta ose rikonstruksion të plotë të buzëqeshjes dhe ju duhet një plan',
      'Keni një dhëmb që dhemb, është i ndjeshëm, lëviz ose është thyer dhe doni ta kontrolloni',
      'Kanë kaluar vite nga kontrolli i fundit dhe nuk e dini në çfarë gjendje janë dhëmbët tuaj',
      'Keni një plan trajtimi nga një klinikë tjetër dhe doni një mendim të dytë',
      'Po përgatiteni për implante ose kurora dhe doni planin të konfirmuar para se të nisë puna',
      'Thjesht doni një kontroll rutinë dhe të siguroheni që gjithçka është në rregull',
    ],
    fitNote:
      'Rezervimi nuk ju detyron për asgjë. Ekzaminimi ju jep një plan dhe një çmim; çfarë bëni me to e vendosni ju, përfshirë edhe zgjedhjen për të mos bërë asgjë.',
    stepsTitle: 'Si funksionon ekzaminimi',
    stepsIntro: 'Takimi zgjat 30 deri në 45 minuta, dhe dilni me diçka konkrete, jo me një rekomandim të paqartë:',
    steps: [
      { title: 'Historia dhe shqetësimet', text: 'Flasim për atë që ju shqetëson, trajtimet e mëparshme, ilaçet që merrni dhe rezultatin që kërkoni.' },
      { title: 'Ekzaminimi klinik', text: 'Kontrollojmë çdo dhëmb për karies, mbushje e kurora të vjetra, plasaritje, konsumim dhe lëvizshmëri, dhe gjithçka regjistrohet në kartelën tuaj.' },
      { title: 'Mishrat dhe kafshimi', text: 'Vlerësojmë shëndetin e mishrave dhe mënyrën si mbyllen dhëmbët, përfshirë shenjat e bruksizmit që ndikojnë në çdo restaurim.' },
      { title: 'Imazheri nëse nevojitet', text: 'Nëse rasti kërkon radiografi ose skanim 3D, ju shpjegojmë cilin dhe pse para se ta bëjmë. Skanimi 3D është falas me trajtimin.' },
      { title: 'Plani dhe oferta', text: 'Shqyrtojmë bashkë rezultatet dhe mundësitë, dhe merrni planin dhe ofertën e detajuar me shkrim, me implantet dhe materialet e specifikuara.' },
    ],
    whyBandTitle: 'Pse Veneer Clinic për ekzaminimin tuaj dentar?',
    whyBandText:
      'Ju tregojmë çfarë i nevojitet gojës suaj, jo çfarë është e leverdishme për t’u shitur. Kur një trajtim më i thjeshtë arrin atë që kërkoni, ju rekomandojmë trajtimin më të thjeshtë. Kur mendojmë se një trajtim nuk u bën mirë dhëmbëve tuaj, jua themi hapur në vend që ta pranojmë. Oferta që merrni është trajtimi që merrni.',
    caseText: 'Plan i qartë që në ditën e parë',
    faq: [
      { question: 'A është ekzaminimi vërtet falas?', answer: 'Po. Ekzaminimi dentar është falas dhe nuk ju detyron për asgjë. Përfshin kontrollin e plotë të dhëmbëve, mishrave dhe kafshimit, dhe një plan trajtimi me ofertë të detajuar me shkrim që e merrni me vete.' },
      { question: 'A përfshihet skanimi 3D?', answer: 'Skanimi 3D CT bëhet vetëm kur rasti e kërkon, për shembull për planifikimin e implanteve, dhe është falas për pacientët që trajtohen te ne. Ju shpjegojmë çfarë nevojitet dhe pse para se të bëhet. Nëse keni radiografi ose skanim të kohëve të fundit, sillini me vete: mund të mos jetë nevoja t’i përsërisni.' },
      { question: 'Sa zgjat ekzaminimi dentar?', answer: 'Në shumicën e rasteve, 30 deri në 45 minuta. Kjo kohë përfshin bisedën fillestare për historinë dhe shqetësimet tuaja, kontrollin e çdo dhëmbi, vlerësimin e mishrave dhe kafshimit, dhe shqyrtimin përfundimtar të planit dhe ofertës bashkë me ju. Nëse rasti kërkon skanim 3D, shtohen disa minuta. Rastet komplekse mund të zgjasin pak më shumë sepse ka më shumë mundësi për të shpjeguar. Nuk ju nxitojmë kurrë: takimi mbaron kur e keni kuptuar planin tuaj.' },
      { question: 'A mund të marr një plan para se të udhëtoj?', answer: 'Po. Nëse vini nga jashtë, na dërgoni një grafi panoramike dhe disa foto. Dentisti e shqyrton rastin dhe ju jep një plan paraprak me çmime, që ta planifikoni udhëtimin me qetësi. Plani konfirmohet gjatë ekzaminimit në klinikë, ku shohim drejtpërdrejt dhëmbët dhe mishrat.' },
      { question: 'A jam i detyruar të trajtohem pas ekzaminimit?', answer: 'Jo. Ekzaminimi ju jep një plan dhe një ofertë me shkrim, dhe me kaq mbaron detyrimi juaj. Mund t’i merrni me vete, t’i krahasoni me mundësi të tjera, t’i diskutoni me familjen dhe të vendosni me qetësi. Nëse vendosni të mos trajtoheni, ose të trajtoheni diku tjetër, nuk ka asnjë problem. Një vendim i marrë nën presion rrallë është i mirë.' },
      { question: 'A mund të nis trajtimin në të njëjtën ditë?', answer: 'Shpesh po. Trajtimet e thjeshta, si pastrimi, mbushja ose zbardhja, zakonisht mund të bëhen në të njëjtën ditë me ekzaminimin. Punimet më të mëdha i planifikojmë bashkë gjatë takimit, në ditët që ju përshtaten. Ajo që nuk mund të nxitohet është gjithçka që varet nga laboratori ose nga shërimi. Kurorat dhe fasetat zakonisht përfundojnë brenda 3 deri në 5 ditëve. Implantet kanë nevojë për rreth gjashtë muaj shërim para kurorës përfundimtare, prandaj ky trajtim bëhet në dy udhëtime.' },
      { question: 'Po nëse nuk kam shkuar te dentisti prej vitesh?', answer: 'Ndodh shumë më shpesh nga sa mendoni, dhe nuk keni pse të jepni shpjegime. Ekzaminimi është pikërisht pika më e mirë e nisjes. I kontrollojmë të gjitha me qetësi, ju themi qartë çfarë është në rregull, çfarë kërkon vëmendje dhe çfarë është urgjente, dhe e rendisim trajtimin sipas përparësive. Nëse ka shumë punë, mund ta ndajmë në faza. Nëse vizita te dentisti ju shkakton ankth, na e thoni kur rezervoni: ju shpjegojmë çdo hap para se ta bëjmë dhe ndalojmë sa herë të keni nevojë.' },
      { question: 'A mund të sjell një plan trajtimi nga një klinikë tjetër?', answer: 'Po, dhe është ide e mirë. Një mendim i dytë është një nga arsyet më të zakonshme për të rezervuar ekzaminim. Sillni planin bashkë me radiografitë ose skanimet mbi të cilat bazohet. E shqyrtojmë duke parë gojën tuaj dhe ju themi nëse jemi dakord, çfarë do të ndryshonim dhe pse. Ndonjëherë e konfirmojmë planin ashtu siç është. Herë të tjera shohim që një trajtim më konservativ arrin të njëjtin rezultat: faseta në vend të kurorave, për shembull, ose ruajtja e një dhëmbi që plani tjetër propozonte ta hiqte.' },
      { question: 'Çfarë duhet të sjell me vete?', answer: 'Pak gjëra: listën e ilaçeve që merrni dhe çdo problem shëndetësor që ka rëndësi; radiografi, skanime ose raporte dentare të kohëve të fundit, nëse i keni; çdo plan trajtimi nga një klinikë tjetër që doni ta shqyrtojmë. Nëse mbani protezë të lëvizshme ose pllakë nate, sillni edhe atë: na ndihmon të kuptojmë kafshimin tuaj.' },
      { question: 'A do të më thoni nëse nuk kam nevojë për trajtim?', answer: 'Po. Nëse goja juaj është në rregull, jua themi, dhe ekzaminimi mbaron aty. Nuk kërkojmë trajtime për të shitur. Nëse keni ardhur duke menduar për faseta dhe dhëmbët tuaj nuk kanë nevojë, ose nëse një zbardhje arrin atë që kërkoni, këtë ju rekomandojmë. Po ashtu, nëse na kërkoni diçka që mendojmë se do t’u bënte dëm dhëmbëve tuaj, si limimi i dhëmbëve të shëndetshëm pa arsye, jua themi hapur. Një ekzaminim që mbaron me «gjithçka në rregull» është gjithashtu rezultat i mirë.' },
      { question: 'Po nëse diçka kërkon ndërhyrje urgjente?', answer: 'E trajtojmë sa më shpejt. Nëse ekzaminimi zbulon një infeksion, një dhëmb të thyer ose një dhimbje që nuk pret, jua themi menjëherë dhe ju shpjegojmë mundësitë. Në shumë raste mund ta zgjidhim në të njëjtën ditë ose ditën pasardhëse, para se të vazhdojmë me pjesën tjetër të planit. Urgjenca vjen gjithmonë e para. Nëse keni dhimbje, ënjtje ose ndjeshmëri, na e thoni kur rezervoni, që të lëmë kohë të mjaftueshme.' },
      { question: 'A mund ta ndaj trajtimin në faza?', answer: 'Po. Pas ekzaminimit, plani mund të ndahet në faza që i përshtaten kohës dhe ritmit tuaj. Në fazën e parë trajtojmë atë që është urgjente ose që ndikon te shëndeti: infeksionet, kariesin aktiv, mishrat. Fazat pasuese përfshijnë restaurimet dhe punimet estetike. Te implantet, fazat janë të domosdoshme: pas vendosjes nevojiten rreth gjashtë muaj shërim para kurorës përfundimtare. Çdo fazë shfaqet veçmas në ofertën tuaj me shkrim.' },
    ],
  },
  en: {
    name: 'Dental Examination',
    eyebrow: 'Examination & diagnostics · Albania',
    subtitle: 'A full clinical check of your teeth, gums and bite, with a treatment plan and detailed written quote to take home.',
    lead: 'A complete check of teeth, gums and bite: the starting point for every treatment plan we recommend.',
    kicker: 'Dental examination in Tirana, Albania',
    articleTitle: 'Dental examination in Tirana: where every treatment plan starts',
    intro: [
      'A dental examination is the first step of every treatment plan at Veneer Clinic. It is the appointment where you learn what your mouth really needs, not what you assumed.',
      'It takes 30 to 45 minutes and is free. You leave with two things in writing: a plan and a price. Neither of them commits you to anything.',
    ],
    sections: [
      {
        title: 'Not a sales appointment',
        intro: [
          'A clinic that profits from big treatments has every interest in finding them. We work differently, and it shows in how the examination ends: with a written plan you take home and a decision you make afterwards, without pressure.',
          'When a smaller treatment achieves what you want, that is the treatment we recommend. When what you ask for is not good for your teeth, we tell you openly rather than accept the booking.',
        ],
      },
      {
        title: 'Imaging, only when needed',
        intro: [
          'Not every examination needs imaging. When your case requires it (implant planning always does), we explain what is needed and why before it is taken. The 3D CT scan is free for patients treated with us.',
          'If you are travelling from abroad, you can send us a panoramic X-ray before your trip. The dentist then reviews your case in advance and gives you a preliminary plan, which we confirm at the examination in the clinic.',
        ],
      },
      {
        title: 'One team, from start to finish',
        intro: [
          'The doctor who examines you is part of the same team that treats you. There are no referrals to third parties and no change of opinion mid-plan: what is decided at the examination is what is done in the chair. If anything changes during treatment, we explain it before continuing.',
        ],
      },
      {
        title: 'If you have X-rays or a plan from another clinic',
        intro: [
          'Bring them. If you have a recent X-ray or scan, it may not need repeating. If you have a treatment plan from another clinic, we review it with your mouth in front of us and give you a reasoned opinion.',
        ],
      },
      {
        title: 'What the examination includes',
        intro: ['Every dental examination at our clinic follows the same order, and each step has its reason.'],
        inline: [
          { title: 'Your history and concerns.', text: 'We start with a conversation: what bothers you, what treatments you have had before, what medication you take and what result you expect. The more clearly we understand this, the more accurate the plan.' },
          { title: 'Teeth, one by one.', text: 'We check every tooth: decay, old fillings and crowns, cracks, wear and mobility. Everything is recorded in your dental chart, so the plan is based on concrete data rather than impressions.' },
          { title: 'Gums and bite.', text: 'We assess the health of your gums, because no cosmetic or implant treatment lasts on diseased gums. We also check how your teeth close and whether there are signs of bruxism (clenching or grinding), because these determine the material and design of any restoration.' },
          { title: '3D scan when the case requires it.', text: 'If your plan includes implants, a 3D scan is essential: it shows the bone precisely and lets us decide the position, length and diameter of each implant before surgery. We use MegaGen implants. For crowns and veneers we take measurements that go to the lab, where they are made in Made in Germany zirconia or E-max.' },
          { title: 'The plan and quote.', text: 'Finally we review together what we have seen, your options and what we recommend. You take home a treatment plan and a detailed written quote, line by line, with implants and materials specified. If you have questions, ask them there: no question is too much when it comes to your mouth and the cost of treatment.' },
        ],
      },
      {
        title: 'Why we name brands and materials',
        intro: [
          'Many clinics write simply “implant” or “crown” on a quote, without naming the manufacturer or material. The difference is not small. Your quote names each one, the MegaGen implant, Made in Germany zirconia or E-max, so you can compare like with like.',
        ],
      },
    ],
    stats: [
      { value: '30–45', label: 'Minutes' },
      { value: '1', label: 'Appointment' },
      { value: 'In writing', label: 'Plan and quote' },
      { value: 'Free', label: 'No obligation' },
    ],
    priceTitle: 'Price',
    priceNote: 'No obligation to treat',
    whatTitle: 'What is a dental examination?',
    what: [
      'A dental examination is a complete check of your teeth, gums and bite, ending with a treatment plan and a detailed written quote.',
      'It takes 30 to 45 minutes, is free and commits you to nothing. It is the starting point for every treatment at Veneer Clinic, from a filling to a full implant reconstruction.',
    ],
    calloutTitle: 'You leave with a plan and a price, without obligation',
    calloutText:
      'The treatment plan and detailed quote are yours to take home and think over calmly. What you do with them is your decision, including choosing to do nothing.',
    compareTitle: 'Examination and diagnostics',
    compareIntro: 'The examination is the first step. Here is how it connects with other diagnostic and preventive steps:',
    compare: [
      { id: 'dental-exam', tag: 'This service', title: 'Dental examination', text: 'A full clinical check, with a treatment plan and written quote. Free and without obligation.' },
      { id: 'ct-scan', tag: 'When needed', title: '3D CT scan', text: 'A three-dimensional image of bone and roots, essential for implants. Free with treatment.' },
      { id: 'scaling', tag: 'Often the same day', title: 'Teeth cleaning', text: 'Removes the tartar and plaque that cause gum problems. Often done right after the examination.' },
    ],
    fitTitle: 'When should you book an examination?',
    fitIntro: 'The examination is the right starting point if:',
    fit: [
      'You are considering implants, veneers or a full smile makeover and need a plan',
      'You have a tooth that hurts, is sensitive, loose or broken and want it checked',
      'It has been years since your last check-up and you do not know the state of your teeth',
      'You have a treatment plan from another clinic and want a second opinion',
      'You are preparing for implants or crowns and want the plan confirmed before work starts',
      'You simply want a routine check-up to make sure everything is fine',
    ],
    fitNote:
      'Booking commits you to nothing. The examination gives you a plan and a price; what you do with them is your decision, including choosing to do nothing.',
    stepsTitle: 'How the examination works',
    stepsIntro: 'The appointment takes 30 to 45 minutes, and you leave with something concrete, not a vague recommendation:',
    steps: [
      { title: 'History and concerns', text: 'We talk about what bothers you, previous treatments, medication and the result you are looking for.' },
      { title: 'Clinical examination', text: 'We check every tooth for decay, old fillings and crowns, cracks, wear and mobility, and everything is recorded in your chart.' },
      { title: 'Gums and bite', text: 'We assess gum health and how your teeth close, including signs of bruxism that affect any restoration.' },
      { title: 'Imaging if needed', text: 'If your case needs an X-ray or 3D scan, we explain which and why before taking it. The 3D scan is free with treatment.' },
      { title: 'The plan and quote', text: 'We review the results and options together, and you receive the plan and detailed written quote, with implants and materials specified.' },
    ],
    whyBandTitle: 'Why Veneer Clinic for your dental examination?',
    whyBandText:
      'We tell you what your mouth needs, not what is profitable to sell. When a simpler treatment achieves what you want, we recommend the simpler treatment. When we think a treatment is not good for your teeth, we tell you openly rather than accept it. The quote you receive is the treatment you get.',
    caseText: 'A clear plan from day one',
    faq: [
      { question: 'Is the examination really free?', answer: 'Yes. The dental examination is free and commits you to nothing. It includes a full check of teeth, gums and bite, and a treatment plan with a detailed written quote to take home.' },
      { question: 'Is the 3D scan included?', answer: 'The 3D CT scan is only taken when your case requires it, for example for implant planning, and it is free for patients treated with us. We explain what is needed and why before it is taken. If you have a recent X-ray or scan, bring it: it may not need repeating.' },
      { question: 'How long does a dental examination take?', answer: 'In most cases, 30 to 45 minutes. This includes the initial conversation about your history and concerns, checking every tooth, assessing gums and bite, and the final review of the plan and quote with you. If your case needs a 3D scan, add a few minutes. Complex cases may take a little longer because there are more options to explain. We never rush you: the appointment ends when you understand your plan.' },
      { question: 'Can I get a plan before I travel?', answer: 'Yes. If you are travelling from abroad, send us a panoramic X-ray and a few photos. The dentist reviews your case and gives you a preliminary plan with prices, so you can plan your trip calmly. The plan is confirmed at the examination in the clinic, where we see your teeth and gums directly.' },
      { question: 'Am I obliged to have treatment after the examination?', answer: 'No. The examination gives you a written plan and quote, and that is where your obligation ends. You can take them home, compare them with other options, discuss them with your family and decide calmly. If you decide not to have treatment, or to have it elsewhere, that is no problem at all. A decision made under pressure is rarely a good one.' },
      { question: 'Can I start treatment the same day?', answer: 'Often, yes. Simple treatments such as cleaning, fillings or whitening can usually be done on the same day as the examination. Larger work we plan together during the appointment, on the days that suit you. What cannot be rushed is anything that depends on the lab or on healing. Crowns and veneers are usually finished within 3 to 5 days. Implants need about six months of healing before the final crown, which is why that treatment is done over two trips.' },
      { question: 'What if I have not been to a dentist for years?', answer: 'It happens far more often than you think, and you do not need to explain. The examination is exactly the best starting point. We check everything calmly, tell you clearly what is fine, what needs attention and what is urgent, and order treatment by priority. If there is a lot to do, we can split it into phases. If visiting the dentist makes you anxious, tell us when you book: we explain each step before doing it and stop whenever you need.' },
      { question: 'Can I bring a treatment plan from another clinic?', answer: 'Yes, and it is a good idea. A second opinion is one of the most common reasons to book an examination. Bring the plan along with the X-rays or scans it is based on. We review it while looking at your mouth and tell you whether we agree, what we would change and why. Sometimes we confirm the plan as it is. Other times we see that a more conservative treatment achieves the same result: veneers instead of crowns, for example, or keeping a tooth the other plan proposed removing.' },
      { question: 'What should I bring?', answer: 'Just a few things: a list of medication you take and any relevant health problems; recent X-rays, scans or dental reports, if you have them; any treatment plan from another clinic you want us to review. If you wear a removable denture or night guard, bring that too: it helps us understand your bite.' },
      { question: 'Will you tell me if I do not need treatment?', answer: 'Yes. If your mouth is fine, we tell you, and the examination ends there. We do not look for treatments to sell. If you came thinking about veneers and your teeth do not need them, or whitening achieves what you want, that is what we recommend. Likewise, if you ask for something we think would harm your teeth, such as reducing healthy teeth without reason, we tell you openly. An examination that ends with “everything is fine” is also a good result.' },
      { question: 'What if something needs urgent attention?', answer: 'We treat it as soon as possible. If the examination reveals an infection, a broken tooth or pain that cannot wait, we tell you immediately and explain the options. In many cases we can solve it the same day or the next, before continuing with the rest of the plan. Urgent problems always come first. If you have pain, swelling or sensitivity, tell us when you book so we allow enough time.' },
      { question: 'Can I split treatment into phases?', answer: 'Yes. After the examination, the plan can be split into phases that suit your time and pace. The first phase treats what is urgent or affects your health: infections, active decay, gums. Later phases include restorations and cosmetic work. With implants, phases are essential: after placement about six months of healing are needed before the final crown. Each phase appears separately in your written quote.' },
    ],
  },
  de: {
    name: 'Zahnärztliche Untersuchung',
    eyebrow: 'Untersuchung & Diagnostik · Albanien',
    subtitle: 'Eine vollständige klinische Kontrolle von Zähnen, Zahnfleisch und Biss, mit Behandlungsplan und detailliertem schriftlichem Angebot zum Mitnehmen.',
    lead: 'Eine vollständige Kontrolle von Zähnen, Zahnfleisch und Biss: der Ausgangspunkt für jeden Behandlungsplan, den wir empfehlen.',
    kicker: 'Zahnärztliche Untersuchung in Tirana, Albanien',
    articleTitle: 'Zahnärztliche Untersuchung in Tirana: wo jeder Behandlungsplan beginnt',
    intro: [
      'Eine zahnärztliche Untersuchung ist der erste Schritt jedes Behandlungsplans in der Veneer Clinic. Es ist der Termin, bei dem Sie erfahren, was Ihr Mund wirklich braucht, nicht was Sie vermutet haben.',
      'Sie dauert 30 bis 45 Minuten und ist kostenlos. Sie gehen mit zwei Dingen schriftlich: einem Plan und einem Preis. Keines davon verpflichtet Sie zu irgendetwas.',
    ],
    sections: [
      {
        title: 'Kein Verkaufstermin',
        intro: [
          'Eine Klinik, die an großen Behandlungen verdient, hat jedes Interesse, sie zu finden. Wir arbeiten anders, und das zeigt sich daran, wie die Untersuchung endet: mit einem schriftlichen Plan, den Sie mitnehmen, und einer Entscheidung, die Sie danach treffen, ohne Druck.',
          'Wenn eine kleinere Behandlung erreicht, was Sie möchten, empfehlen wir diese. Wenn das, was Sie wünschen, Ihren Zähnen nicht guttut, sagen wir es offen, statt die Buchung anzunehmen.',
        ],
      },
      {
        title: 'Bildgebung nur bei Bedarf',
        intro: [
          'Nicht jede Untersuchung braucht Bildgebung. Erfordert Ihr Fall sie (die Implantatplanung immer), erklären wir vorher, was nötig ist und warum. Der 3D-Scan ist für Patienten in Behandlung bei uns kostenlos.',
          'Reisen Sie aus dem Ausland an, können Sie uns vor der Reise ein Panoramaröntgen schicken. Der Zahnarzt prüft Ihren Fall dann vorab und gibt Ihnen einen vorläufigen Plan, den wir bei der Untersuchung in der Klinik bestätigen.',
        ],
      },
      {
        title: 'Ein Team, von Anfang bis Ende',
        intro: [
          'Der Arzt, der Sie untersucht, gehört zum selben Team, das Sie behandelt. Es gibt keine Überweisungen an Dritte und keinen Meinungswechsel mitten im Plan: Was bei der Untersuchung entschieden wird, wird auf dem Stuhl gemacht. Ändert sich während der Behandlung etwas, erklären wir es, bevor wir weitermachen.',
        ],
      },
      {
        title: 'Wenn Sie Röntgenbilder oder einen Plan einer anderen Klinik haben',
        intro: [
          'Bringen Sie sie mit. Haben Sie ein aktuelles Röntgenbild oder einen Scan, muss er eventuell nicht wiederholt werden. Haben Sie einen Behandlungsplan einer anderen Klinik, prüfen wir ihn mit Blick in Ihren Mund und geben Ihnen eine begründete Meinung.',
        ],
      },
      {
        title: 'Was die Untersuchung umfasst',
        intro: ['Jede Untersuchung in unserer Klinik folgt derselben Reihenfolge, und jeder Schritt hat seinen Grund.'],
        inline: [
          { title: 'Ihre Vorgeschichte und Anliegen.', text: 'Wir beginnen mit einem Gespräch: was Sie stört, welche Behandlungen Sie hatten, welche Medikamente Sie nehmen und welches Ergebnis Sie erwarten. Je klarer wir das verstehen, desto genauer wird der Plan.' },
          { title: 'Die Zähne, einer nach dem anderen.', text: 'Wir prüfen jeden Zahn: Karies, alte Füllungen und Kronen, Risse, Abnutzung und Lockerung. Alles wird in Ihrem Zahnstatus festgehalten, damit der Plan auf konkreten Daten beruht und nicht auf Eindrücken.' },
          { title: 'Zahnfleisch und Biss.', text: 'Wir beurteilen die Gesundheit Ihres Zahnfleisches, denn keine ästhetische oder Implantatbehandlung hält auf krankem Zahnfleisch. Wir prüfen auch, wie Ihre Zähne schließen und ob es Anzeichen von Bruxismus (Pressen oder Knirschen) gibt, denn diese bestimmen Material und Design jeder Versorgung.' },
          { title: '3D-Scan, wenn der Fall es erfordert.', text: 'Umfasst Ihr Plan Implantate, ist ein 3D-Scan unerlässlich: Er zeigt den Knochen genau und lässt uns Position, Länge und Durchmesser jedes Implantats vor dem Eingriff festlegen. Wir verwenden MegaGen-Implantate. Für Kronen und Veneers nehmen wir Abdrücke, die ins Labor gehen, wo sie aus Zirkon Made in Germany oder E-max gefertigt werden.' },
          { title: 'Plan und Angebot.', text: 'Zum Schluss besprechen wir gemeinsam, was wir gesehen haben, Ihre Optionen und unsere Empfehlung. Sie nehmen einen Behandlungsplan und ein detailliertes schriftliches Angebot mit, Position für Position, mit angegebenen Implantaten und Materialien. Haben Sie Fragen, stellen Sie sie gleich: Keine Frage ist zu viel, wenn es um Ihren Mund und die Kosten geht.' },
        ],
      },
      {
        title: 'Warum wir Marken und Materialien nennen',
        intro: [
          'Viele Kliniken schreiben einfach „Implantat“ oder „Krone“ ins Angebot, ohne Hersteller oder Material zu nennen. Der Unterschied ist nicht klein. In Ihrem Angebot steht jedes beim Namen, das MegaGen-Implantat, Zirkon Made in Germany oder E-max, damit Sie Gleiches mit Gleichem vergleichen können.',
        ],
      },
    ],
    stats: [
      { value: '30–45', label: 'Minuten' },
      { value: '1', label: 'Termin' },
      { value: 'Schriftlich', label: 'Plan und Angebot' },
      { value: 'Kostenlos', label: 'Unverbindlich' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Keine Verpflichtung zur Behandlung',
    whatTitle: 'Was ist eine zahnärztliche Untersuchung?',
    what: [
      'Eine zahnärztliche Untersuchung ist eine vollständige Kontrolle von Zähnen, Zahnfleisch und Biss, die mit einem Behandlungsplan und einem detaillierten schriftlichen Angebot endet.',
      'Sie dauert 30 bis 45 Minuten, ist kostenlos und verpflichtet Sie zu nichts. Sie ist der Ausgangspunkt jeder Behandlung in der Veneer Clinic, von einer Füllung bis zur vollständigen Implantatversorgung.',
    ],
    calloutTitle: 'Sie gehen mit Plan und Preis, unverbindlich',
    calloutText:
      'Behandlungsplan und detailliertes Angebot gehören Ihnen, zum Mitnehmen und in Ruhe Überdenken. Was Sie damit machen, entscheiden Sie, einschließlich der Wahl, nichts zu tun.',
    compareTitle: 'Untersuchung und Diagnostik',
    compareIntro: 'Die Untersuchung ist der erste Schritt. So hängt sie mit anderen diagnostischen und vorbeugenden Schritten zusammen:',
    compare: [
      { id: 'dental-exam', tag: 'Diese Leistung', title: 'Zahnärztliche Untersuchung', text: 'Vollständige klinische Kontrolle mit Behandlungsplan und schriftlichem Angebot. Kostenlos und unverbindlich.' },
      { id: 'ct-scan', tag: 'Bei Bedarf', title: '3D-Röntgen (DVT)', text: 'Dreidimensionales Bild von Knochen und Wurzeln, unerlässlich für Implantate. Kostenlos mit der Behandlung.' },
      { id: 'scaling', tag: 'Oft am selben Tag', title: 'Zahnreinigung', text: 'Entfernt Zahnstein und Plaque, die Zahnfleischprobleme verursachen. Oft direkt nach der Untersuchung.' },
    ],
    fitTitle: 'Wann sollten Sie eine Untersuchung buchen?',
    fitIntro: 'Die Untersuchung ist der richtige Ausgangspunkt, wenn:',
    fit: [
      'Sie über Implantate, Veneers oder eine komplette Lächelkorrektur nachdenken und einen Plan brauchen',
      'Ein Zahn schmerzt, empfindlich, locker oder gebrochen ist und Sie ihn prüfen lassen möchten',
      'Ihre letzte Kontrolle Jahre zurückliegt und Sie den Zustand Ihrer Zähne nicht kennen',
      'Sie einen Behandlungsplan einer anderen Klinik haben und eine Zweitmeinung möchten',
      'Sie sich auf Implantate oder Kronen vorbereiten und den Plan vor Arbeitsbeginn bestätigt haben möchten',
      'Sie einfach eine Routinekontrolle möchten, um sicherzugehen, dass alles in Ordnung ist',
    ],
    fitNote:
      'Die Buchung verpflichtet Sie zu nichts. Die Untersuchung gibt Ihnen einen Plan und einen Preis; was Sie damit machen, entscheiden Sie, einschließlich der Wahl, nichts zu tun.',
    stepsTitle: 'So läuft die Untersuchung ab',
    stepsIntro: 'Der Termin dauert 30 bis 45 Minuten, und Sie gehen mit etwas Konkretem, nicht mit einer vagen Empfehlung:',
    steps: [
      { title: 'Vorgeschichte und Anliegen', text: 'Wir sprechen über das, was Sie stört, frühere Behandlungen, Medikamente und das gewünschte Ergebnis.' },
      { title: 'Klinische Untersuchung', text: 'Wir prüfen jeden Zahn auf Karies, alte Füllungen und Kronen, Risse, Abnutzung und Lockerung, und alles wird im Zahnstatus festgehalten.' },
      { title: 'Zahnfleisch und Biss', text: 'Wir beurteilen die Zahnfleischgesundheit und wie Ihre Zähne schließen, einschließlich Anzeichen von Bruxismus, die jede Versorgung beeinflussen.' },
      { title: 'Bildgebung bei Bedarf', text: 'Braucht Ihr Fall ein Röntgenbild oder einen 3D-Scan, erklären wir vorher welches und warum. Der 3D-Scan ist mit der Behandlung kostenlos.' },
      { title: 'Plan und Angebot', text: 'Wir besprechen gemeinsam Ergebnisse und Optionen, und Sie erhalten Plan und detailliertes schriftliches Angebot mit angegebenen Implantaten und Materialien.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für Ihre Untersuchung?',
    whyBandText:
      'Wir sagen Ihnen, was Ihr Mund braucht, nicht was sich gut verkaufen lässt. Erreicht eine einfachere Behandlung, was Sie möchten, empfehlen wir die einfachere. Halten wir eine Behandlung für schlecht für Ihre Zähne, sagen wir es offen, statt sie anzunehmen. Das Angebot, das Sie erhalten, ist die Behandlung, die Sie bekommen.',
    caseText: 'Ein klarer Plan vom ersten Tag an',
    faq: [
      { question: 'Ist die Untersuchung wirklich kostenlos?', answer: 'Ja. Die zahnärztliche Untersuchung ist kostenlos und verpflichtet Sie zu nichts. Sie umfasst eine vollständige Kontrolle von Zähnen, Zahnfleisch und Biss sowie einen Behandlungsplan mit detailliertem schriftlichem Angebot zum Mitnehmen.' },
      { question: 'Ist der 3D-Scan enthalten?', answer: 'Der 3D-Scan wird nur gemacht, wenn Ihr Fall ihn erfordert, etwa für die Implantatplanung, und ist für Patienten in Behandlung bei uns kostenlos. Wir erklären vorher, was nötig ist und warum. Haben Sie ein aktuelles Röntgenbild oder einen Scan, bringen Sie ihn mit: Er muss eventuell nicht wiederholt werden.' },
      { question: 'Wie lange dauert die Untersuchung?', answer: 'In den meisten Fällen 30 bis 45 Minuten. Dazu gehören das Erstgespräch über Ihre Vorgeschichte und Anliegen, die Prüfung jedes Zahns, die Beurteilung von Zahnfleisch und Biss und die abschließende Besprechung von Plan und Angebot mit Ihnen. Braucht Ihr Fall einen 3D-Scan, kommen einige Minuten hinzu. Komplexe Fälle können etwas länger dauern, weil es mehr Optionen zu erklären gibt. Wir hetzen Sie nie: Der Termin endet, wenn Sie Ihren Plan verstanden haben.' },
      { question: 'Kann ich vor der Reise einen Plan bekommen?', answer: 'Ja. Reisen Sie aus dem Ausland an, schicken Sie uns ein Panoramaröntgen und einige Fotos. Der Zahnarzt prüft Ihren Fall und gibt Ihnen einen vorläufigen Plan mit Preisen, damit Sie Ihre Reise in Ruhe planen können. Der Plan wird bei der Untersuchung in der Klinik bestätigt, wo wir Zähne und Zahnfleisch direkt sehen.' },
      { question: 'Bin ich nach der Untersuchung zur Behandlung verpflichtet?', answer: 'Nein. Die Untersuchung gibt Ihnen einen schriftlichen Plan und ein Angebot, und damit endet Ihre Verpflichtung. Sie können beides mitnehmen, mit anderen Optionen vergleichen, mit der Familie besprechen und in Ruhe entscheiden. Entscheiden Sie sich gegen eine Behandlung oder für eine andere Klinik, ist das kein Problem. Eine Entscheidung unter Druck ist selten eine gute.' },
      { question: 'Kann ich am selben Tag mit der Behandlung beginnen?', answer: 'Oft ja. Einfache Behandlungen wie Reinigung, Füllungen oder Bleaching sind meist am Tag der Untersuchung möglich. Größere Arbeiten planen wir gemeinsam beim Termin, an den Tagen, die Ihnen passen. Nicht beschleunigen lässt sich alles, was vom Labor oder von der Heilung abhängt. Kronen und Veneers sind meist innerhalb von 3 bis 5 Tagen fertig. Implantate brauchen etwa sechs Monate Heilung vor der definitiven Krone, daher erfolgt diese Behandlung in zwei Reisen.' },
      { question: 'Was, wenn ich seit Jahren nicht beim Zahnarzt war?', answer: 'Das kommt viel häufiger vor, als Sie denken, und Sie müssen nichts erklären. Die Untersuchung ist genau der beste Ausgangspunkt. Wir prüfen alles in Ruhe, sagen Ihnen klar, was in Ordnung ist, was Aufmerksamkeit braucht und was dringend ist, und ordnen die Behandlung nach Priorität. Gibt es viel zu tun, können wir es in Phasen aufteilen. Macht Ihnen der Zahnarztbesuch Angst, sagen Sie es bei der Buchung: Wir erklären jeden Schritt vorher und halten an, wann immer Sie es brauchen.' },
      { question: 'Kann ich einen Behandlungsplan einer anderen Klinik mitbringen?', answer: 'Ja, und das ist eine gute Idee. Eine Zweitmeinung ist einer der häufigsten Gründe für eine Untersuchung. Bringen Sie den Plan mit den Röntgenbildern oder Scans mit, auf denen er beruht. Wir prüfen ihn mit Blick in Ihren Mund und sagen Ihnen, ob wir zustimmen, was wir ändern würden und warum. Manchmal bestätigen wir den Plan, wie er ist. Manchmal sehen wir, dass eine konservativere Behandlung dasselbe erreicht: Veneers statt Kronen etwa, oder den Erhalt eines Zahns, den der andere Plan entfernen wollte.' },
      { question: 'Was sollte ich mitbringen?', answer: 'Nur wenig: eine Liste Ihrer Medikamente und relevanter Gesundheitsprobleme; aktuelle Röntgenbilder, Scans oder zahnärztliche Berichte, falls vorhanden; einen Behandlungsplan einer anderen Klinik, den wir prüfen sollen. Tragen Sie eine herausnehmbare Prothese oder Knirscherschiene, bringen Sie sie ebenfalls mit: Das hilft uns, Ihren Biss zu verstehen.' },
      { question: 'Sagen Sie mir, wenn ich keine Behandlung brauche?', answer: 'Ja. Ist Ihr Mund in Ordnung, sagen wir es Ihnen, und die Untersuchung endet dort. Wir suchen keine Behandlungen zum Verkaufen. Kamen Sie wegen Veneers und Ihre Zähne brauchen keine, oder erreicht ein Bleaching, was Sie möchten, empfehlen wir das. Ebenso sagen wir es offen, wenn Sie etwas wünschen, das Ihren Zähnen schaden würde, etwa grundloses Beschleifen gesunder Zähne. Eine Untersuchung, die mit „alles in Ordnung“ endet, ist auch ein gutes Ergebnis.' },
      { question: 'Was, wenn etwas dringend behandelt werden muss?', answer: 'Wir behandeln es so schnell wie möglich. Zeigt die Untersuchung eine Entzündung, einen gebrochenen Zahn oder einen Schmerz, der nicht warten kann, sagen wir es sofort und erklären die Optionen. Oft können wir es am selben oder nächsten Tag lösen, bevor wir mit dem restlichen Plan weitermachen. Dringendes kommt immer zuerst. Haben Sie Schmerzen, Schwellung oder Empfindlichkeit, sagen Sie es bei der Buchung, damit wir genug Zeit einplanen.' },
      { question: 'Kann ich die Behandlung in Phasen aufteilen?', answer: 'Ja. Nach der Untersuchung kann der Plan in Phasen aufgeteilt werden, die zu Ihrer Zeit und Ihrem Tempo passen. In der ersten Phase behandeln wir, was dringend ist oder die Gesundheit betrifft: Entzündungen, aktive Karies, Zahnfleisch. Spätere Phasen umfassen Versorgungen und ästhetische Arbeiten. Bei Implantaten sind Phasen unerlässlich: Nach dem Setzen braucht es etwa sechs Monate Heilung vor der definitiven Krone. Jede Phase steht separat in Ihrem schriftlichen Angebot.' },
    ],
  },
  it: {
    name: 'Visita odontoiatrica',
    eyebrow: 'Visita e diagnostica · Albania',
    subtitle: 'Un controllo clinico completo di denti, gengive e morso, con piano di trattamento e preventivo scritto dettagliato da portare a casa.',
    lead: 'Un controllo completo di denti, gengive e morso: il punto di partenza di ogni piano di trattamento che consigliamo.',
    kicker: 'Visita odontoiatrica a Tirana, Albania',
    articleTitle: 'Visita odontoiatrica a Tirana: dove inizia ogni piano di trattamento',
    intro: [
      'La visita odontoiatrica è il primo passo di ogni piano di trattamento alla Veneer Clinic. È l’appuntamento in cui scopri cosa serve davvero alla tua bocca, non ciò che avevi supposto.',
      'Dura 30–45 minuti ed è gratuita. Esci con due cose per iscritto: un piano e un prezzo. Nessuno dei due ti impegna a nulla.',
    ],
    sections: [
      {
        title: 'Non è un appuntamento di vendita',
        intro: [
          'Una clinica che guadagna dai grandi trattamenti ha ogni interesse a trovarli. Noi lavoriamo diversamente, e si vede da come finisce la visita: con un piano scritto che porti a casa e una decisione che prendi dopo, senza fretta.',
          'Quando un trattamento più piccolo ottiene ciò che desideri, è quello che ti consigliamo. Quando ciò che chiedi non fa bene ai tuoi denti, te lo diciamo apertamente invece di accettare la prenotazione.',
        ],
      },
      {
        title: 'Immagini, solo quando servono',
        intro: [
          'Non ogni visita richiede immagini. Quando il tuo caso lo richiede (la pianificazione implantare sempre), ti spieghiamo cosa serve e perché prima di farla. La TAC 3D è gratuita per i pazienti in trattamento da noi.',
          'Se arrivi dall’estero, puoi inviarci una panoramica prima del viaggio. Il dentista esamina il tuo caso in anticipo e ti dà un piano preliminare, che confermiamo durante la visita in clinica.',
        ],
      },
      {
        title: 'Un solo team, dall’inizio alla fine',
        intro: [
          'Il medico che ti visita fa parte dello stesso team che ti cura. Non ci sono invii a terzi né cambi di opinione a metà piano: ciò che si decide alla visita è ciò che si fa sulla poltrona. Se qualcosa cambia durante il trattamento, te lo spieghiamo prima di continuare.',
        ],
      },
      {
        title: 'Se hai radiografie o un piano di un’altra clinica',
        intro: [
          'Portali. Se hai una radiografia o una scansione recente, potrebbe non essere necessario ripeterla. Se hai un piano di trattamento di un’altra clinica, lo esaminiamo guardando la tua bocca e ti diamo un parere motivato.',
        ],
      },
      {
        title: 'Cosa comprende la visita',
        intro: ['Ogni visita nella nostra clinica segue lo stesso ordine, e ogni passo ha il suo motivo.'],
        inline: [
          { title: 'La tua storia e le tue preoccupazioni.', text: 'Iniziamo con una conversazione: cosa ti preoccupa, quali trattamenti hai fatto prima, quali farmaci prendi e quale risultato ti aspetti. Più chiaramente lo capiamo, più preciso sarà il piano.' },
          { title: 'I denti, uno per uno.', text: 'Controlliamo ogni dente: carie, vecchie otturazioni e corone, crepe, usura e mobilità. Tutto si registra nella tua cartella dentale, perché il piano si basi su dati concreti e non su impressioni.' },
          { title: 'Gengive e morso.', text: 'Valutiamo la salute delle gengive, perché nessun trattamento estetico o implantare dura su gengive malate. Controlliamo anche come si chiudono i denti e se ci sono segni di bruxismo (serramento o digrignamento), perché determinano materiale e design di ogni restauro.' },
          { title: 'TAC 3D quando il caso lo richiede.', text: 'Se il tuo piano comprende impianti, la TAC 3D è indispensabile: mostra l’osso con precisione e ci permette di decidere posizione, lunghezza e diametro di ogni impianto prima dell’intervento. Usiamo impianti MegaGen. Per corone e faccette prendiamo impronte che vanno al laboratorio, dove si realizzano in zirconia Made in Germany o E-max.' },
          { title: 'Il piano e il preventivo.', text: 'Alla fine esaminiamo insieme ciò che abbiamo visto, le tue opzioni e ciò che consigliamo. Porti a casa un piano di trattamento e un preventivo scritto dettagliato, voce per voce, con impianti e materiali specificati. Se hai domande, falle lì: nessuna domanda è di troppo quando si tratta della tua bocca e del costo del trattamento.' },
        ],
      },
      {
        title: 'Perché indichiamo marchi e materiali',
        intro: [
          'Molte cliniche scrivono semplicemente «impianto» o «corona» nel preventivo, senza indicare produttore o materiale. La differenza non è piccola. Nel tuo preventivo si scrive il nome di ciascuno, l’impianto MegaGen, la zirconia Made in Germany o l’E-max, così confronti la stessa cosa con la stessa cosa.',
        ],
      },
    ],
    stats: [
      { value: '30–45', label: 'Minuti' },
      { value: '1', label: 'Appuntamento' },
      { value: 'Per iscritto', label: 'Piano e preventivo' },
      { value: 'Gratuita', label: 'Senza impegno' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Nessun obbligo di trattamento',
    whatTitle: 'Cos’è la visita odontoiatrica?',
    what: [
      'La visita odontoiatrica è un controllo completo di denti, gengive e morso, che si conclude con un piano di trattamento e un preventivo scritto dettagliato.',
      'Dura 30–45 minuti, è gratuita e non ti impegna a nulla. È il punto di partenza di ogni trattamento alla Veneer Clinic, da un’otturazione a una riabilitazione completa su impianti.',
    ],
    calloutTitle: 'Esci con un piano e un prezzo, senza impegno',
    calloutText:
      'Il piano di trattamento e il preventivo dettagliato sono tuoi da portare a casa e valutare con calma. Cosa farne lo decidi tu, compresa la scelta di non fare nulla.',
    compareTitle: 'Visita e diagnostica',
    compareIntro: 'La visita è il primo passo. Ecco come si collega agli altri passi diagnostici e preventivi:',
    compare: [
      { id: 'dental-exam', tag: 'Questo servizio', title: 'Visita odontoiatrica', text: 'Controllo clinico completo, con piano di trattamento e preventivo scritto. Gratuita e senza impegno.' },
      { id: 'ct-scan', tag: 'Quando serve', title: 'TAC 3D', text: 'Immagine tridimensionale di osso e radici, indispensabile per gli impianti. Gratuita con il trattamento.' },
      { id: 'scaling', tag: 'Spesso lo stesso giorno', title: 'Pulizia dei denti', text: 'Rimuove tartaro e placca che causano problemi gengivali. Spesso si fa subito dopo la visita.' },
    ],
    fitTitle: 'Quando prenotare una visita?',
    fitIntro: 'La visita è il punto di partenza giusto se:',
    fit: [
      'Stai pensando a impianti, faccette o un rifacimento completo del sorriso e ti serve un piano',
      'Hai un dente che fa male, è sensibile, si muove o è rotto e vuoi controllarlo',
      'Sono passati anni dall’ultimo controllo e non sai in che stato sono i tuoi denti',
      'Hai un piano di trattamento di un’altra clinica e vuoi un secondo parere',
      'Ti stai preparando per impianti o corone e vuoi il piano confermato prima di iniziare',
      'Vuoi semplicemente un controllo di routine per assicurarti che sia tutto a posto',
    ],
    fitNote:
      'Prenotare non ti impegna a nulla. La visita ti dà un piano e un prezzo; cosa farne lo decidi tu, compresa la scelta di non fare nulla.',
    stepsTitle: 'Come funziona la visita',
    stepsIntro: 'L’appuntamento dura 30–45 minuti, ed esci con qualcosa di concreto, non con una raccomandazione vaga:',
    steps: [
      { title: 'Storia e preoccupazioni', text: 'Parliamo di ciò che ti preoccupa, dei trattamenti precedenti, dei farmaci e del risultato che cerchi.' },
      { title: 'Esame clinico', text: 'Controlliamo ogni dente per carie, vecchie otturazioni e corone, crepe, usura e mobilità, e tutto si registra nella tua cartella.' },
      { title: 'Gengive e morso', text: 'Valutiamo la salute delle gengive e come si chiudono i denti, compresi i segni di bruxismo che influiscono su ogni restauro.' },
      { title: 'Immagini se servono', text: 'Se il caso richiede una radiografia o una TAC 3D, ti spieghiamo quale e perché prima di farla. La TAC 3D è gratuita con il trattamento.' },
      { title: 'Il piano e il preventivo', text: 'Esaminiamo insieme risultati e opzioni, e ricevi il piano e il preventivo scritto dettagliato, con impianti e materiali specificati.' },
    ],
    whyBandTitle: 'Perché Veneer Clinic per la tua visita?',
    whyBandText:
      'Ti diciamo cosa serve alla tua bocca, non cosa conviene vendere. Quando un trattamento più semplice ottiene ciò che cerchi, ti consigliamo quello più semplice. Quando pensiamo che un trattamento non faccia bene ai tuoi denti, te lo diciamo apertamente invece di accettarlo. Il preventivo che ricevi è il trattamento che ricevi.',
    caseText: 'Un piano chiaro dal primo giorno',
    faq: [
      { question: 'La visita è davvero gratuita?', answer: 'Sì. La visita odontoiatrica è gratuita e non ti impegna a nulla. Comprende il controllo completo di denti, gengive e morso, e un piano di trattamento con preventivo scritto dettagliato da portare a casa.' },
      { question: 'La TAC 3D è inclusa?', answer: 'La TAC 3D si fa solo quando il caso lo richiede, per esempio per la pianificazione implantare, ed è gratuita per i pazienti in trattamento da noi. Ti spieghiamo cosa serve e perché prima di farla. Se hai una radiografia o una scansione recente, portala: potrebbe non essere necessario ripeterla.' },
      { question: 'Quanto dura la visita?', answer: 'Nella maggior parte dei casi, 30–45 minuti. Comprende la conversazione iniziale sulla tua storia e preoccupazioni, il controllo di ogni dente, la valutazione di gengive e morso, e l’esame finale di piano e preventivo con te. Se serve una TAC 3D, si aggiungono alcuni minuti. I casi complessi possono durare un po’ di più perché ci sono più opzioni da spiegare. Non ti mettiamo mai fretta: l’appuntamento finisce quando hai capito il tuo piano.' },
      { question: 'Posso avere un piano prima di partire?', answer: 'Sì. Se arrivi dall’estero, inviaci una panoramica e qualche foto. Il dentista esamina il caso e ti dà un piano preliminare con i prezzi, così pianifichi il viaggio con calma. Il piano si conferma durante la visita in clinica, dove vediamo direttamente denti e gengive.' },
      { question: 'Sono obbligato a curarmi dopo la visita?', answer: 'No. La visita ti dà un piano e un preventivo scritti, e lì finisce il tuo impegno. Puoi portarli a casa, confrontarli con altre opzioni, parlarne in famiglia e decidere con calma. Se decidi di non curarti, o di curarti altrove, non c’è alcun problema. Una decisione presa sotto pressione raramente è buona.' },
      { question: 'Posso iniziare il trattamento lo stesso giorno?', answer: 'Spesso sì. I trattamenti semplici, come pulizia, otturazioni o sbiancamento, di solito si possono fare lo stesso giorno della visita. I lavori più grandi li pianifichiamo insieme durante l’appuntamento, nei giorni che ti vanno bene. Ciò che non si può affrettare è tutto ciò che dipende dal laboratorio o dalla guarigione. Corone e faccette di solito si completano in 3–5 giorni. Gli impianti hanno bisogno di circa sei mesi di guarigione prima della corona definitiva, quindi quel trattamento si fa in due viaggi.' },
      { question: 'E se non vado dal dentista da anni?', answer: 'Succede molto più spesso di quanto pensi, e non devi dare spiegazioni. La visita è proprio il miglior punto di partenza. Controlliamo tutto con calma, ti diciamo chiaramente cosa va bene, cosa richiede attenzione e cosa è urgente, e ordiniamo il trattamento per priorità. Se c’è molto da fare, possiamo dividerlo in fasi. Se andare dal dentista ti mette ansia, dillo quando prenoti: ti spieghiamo ogni passo prima di farlo e ci fermiamo ogni volta che serve.' },
      { question: 'Posso portare un piano di un’altra clinica?', answer: 'Sì, ed è una buona idea. Un secondo parere è uno dei motivi più comuni per prenotare una visita. Porta il piano con le radiografie o le scansioni su cui si basa. Lo esaminiamo guardando la tua bocca e ti diciamo se siamo d’accordo, cosa cambieremmo e perché. A volte confermiamo il piano così com’è. Altre volte vediamo che un trattamento più conservativo ottiene lo stesso risultato: faccette invece di corone, per esempio, o conservare un dente che l’altro piano proponeva di togliere.' },
      { question: 'Cosa devo portare?', answer: 'Poche cose: l’elenco dei farmaci che prendi e qualsiasi problema di salute rilevante; radiografie, scansioni o referti dentali recenti, se li hai; qualsiasi piano di un’altra clinica che vuoi farci esaminare. Se porti una protesi mobile o un bite notturno, porta anche quello: ci aiuta a capire il tuo morso.' },
      { question: 'Mi direte se non ho bisogno di trattamento?', answer: 'Sì. Se la tua bocca è a posto, te lo diciamo, e la visita finisce lì. Non cerchiamo trattamenti da vendere. Se sei venuto pensando alle faccette e i tuoi denti non ne hanno bisogno, o uno sbiancamento ottiene ciò che cerchi, è questo che ti consigliamo. Allo stesso modo, se ci chiedi qualcosa che pensiamo danneggerebbe i tuoi denti, come limare denti sani senza motivo, te lo diciamo apertamente. Una visita che finisce con «è tutto a posto» è anche un buon risultato.' },
      { question: 'E se qualcosa richiede un intervento urgente?', answer: 'Lo trattiamo il prima possibile. Se la visita rivela un’infezione, un dente rotto o un dolore che non può aspettare, te lo diciamo subito e ti spieghiamo le opzioni. In molti casi possiamo risolverlo lo stesso giorno o il giorno dopo, prima di proseguire con il resto del piano. L’urgenza viene sempre prima. Se hai dolore, gonfiore o sensibilità, dillo quando prenoti, così lasciamo abbastanza tempo.' },
      { question: 'Posso dividere il trattamento in fasi?', answer: 'Sì. Dopo la visita, il piano si può dividere in fasi adatte ai tuoi tempi e al tuo ritmo. Nella prima fase trattiamo ciò che è urgente o incide sulla salute: infezioni, carie attive, gengive. Le fasi successive comprendono restauri e lavori estetici. Con gli impianti le fasi sono indispensabili: dopo l’inserimento servono circa sei mesi di guarigione prima della corona definitiva. Ogni fase compare separatamente nel preventivo scritto.' },
    ],
  },
};

export default function DentalExamPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="dental-exam"
      heroImage={images.surgery[3] ?? images.heroAfter}
      whatImage={images.surgery[13] ?? images.heroAfter}
    />
  );
}
