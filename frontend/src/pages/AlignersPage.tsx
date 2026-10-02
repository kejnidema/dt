import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Aligner të padukshëm',
    eyebrow: 'Ortodonci · Shqipëri',
    subtitle: 'Drejtoni dhëmbët në mënyrë diskrete me shina transparente të lëvizshme, të planifikuara sipas kafshimit tuaj dhe të miratuara nga ju para prodhimit.',
    lead: 'Shina transparente të lëvizshme që i lëvizin dhëmbët hap pas hapi, me një vlerësim të ndershëm nëse janë të përshtatshme për rastin tuaj.',
    kicker: 'Aligner të padukshëm në Tiranë, Shqipëri',
    articleTitle: 'Aligner të padukshëm në Tiranë: dhëmbë të drejtë, në mënyrë diskrete',
    intro: [
      'Aligner-ët e padukshëm janë shina transparente të lëvizshme që i çojnë dhëmbët gradualisht në një pozicion më të drejtë.',
      'Çdo aligner i serisë ka një formë pak më ndryshe. E mbani secilin rreth dy javë, pastaj kaloni te tjetri, dhe hap pas hapi dhëmbët e ndjekin. Meqë shinat janë transparente dhe të holla, shumica e njerëzve nuk do ta vënë re që i keni. Kjo është ortodonci e padukshme që e zgjedhin shumë të rritur.',
      'Në Veneer Clinic, trajtimi i plotë me aligner të padukshëm kushton 1.700 €.',
    ],
    sections: [
      {
        title: 'Pse zgjidhen shinat transparente',
        intro: [
          'Shinat transparente pëlqehen nga të rriturit që duan dhëmbë më të drejtë pa pamjen e aparatit me metal. Janë të lëvizshme, ndaj i hiqni për të ngrënë, për të pirë çdo gjë përveç ujit dhe për t’i larë dhëmbët normalisht. Nuk ka braketa apo tela ku ngec ushqimi ose që gërvishtin faqet nga brenda.',
          'Kjo liri vjen me përgjegjësi. Aligner-ët funksionojnë vetëm kur i mbani, zakonisht 20 deri në 22 orë në ditë. Nëse i lini jashtë shumë shpesh, dhëmbët nuk lëvizin siç është planifikuar. Jua themi qartë që në fillim, sepse ky është faktori që ndikon më shumë në rezultat.',
        ],
      },
      {
        title: 'Fillimisht, një vlerësim i ndershëm',
        intro: [
          'Jo çdo rast është i përshtatshëm për aligner. Funksionojnë shumë mirë për dhëmbë të mbivendosur, hapësira mes dhëmbëve dhe shumë probleme të lehta ose të moderuara të kafshimit. Disa raste më komplekse mund të trajtohen me një seri më të gjatë, por problemet e rënda të kafshimit ose mospërputhjet e mëdha mes nofullave mund të trajtohen më mirë ndryshe.',
          'Para se t’ju rekomandojmë drejtimin e dhëmbëve me aligner, ekzaminojmë dhëmbët, mishrat dhe kafshimin, bëjmë imazherinë që i nevojitet rastit tuaj dhe kontrollojmë që dhëmbët dhe mishrat të jenë mjaft të shëndetshëm për të nisur. Kariesi dhe problemet e mishrave trajtohen më parë. Nëse aligner-ët nuk janë mjeti i duhur për ju, jua themi para se të angazhoheni.',
        ],
      },
      {
        title: 'E shihni planin para se të prodhohet çdo gjë',
        intro: [
          'Matjet dhe dokumentacioni juaj klinik dërgohen në laboratorin e aligner-ëve, ku lëvizja e çdo dhëmbi planifikohet fazë pas faze. E shqyrtoni planin me dentistin, përfshirë si pritet të lëvizin dhëmbët dhe përafërsisht sa kohë do të duhet, para se të prodhohen aligner-ët. Asgjë nuk punohet derisa të jeni të kënaqur.',
        ],
      },
      {
        title: 'Aligner të padukshëm në Veneer Clinic',
        intro: [
          'Trajtimi nis me një vizitë fillestare në Tiranë dhe vazhdon me aligner-ët që i mbani në shtëpi, ndërsa kontrollet planifikohen sipas një kalendari që e biem dakord bashkë që në fillim, duke marrë parasysh që mund të vini nga jashtë. Oferta e detajuar me shkrim tregon qartë çfarë përfshin trajtimi, kontrollet dhe retainerët, që të mos ketë surpriza më vonë.',
        ],
      },
      {
        title: 'Si funksionojnë aligner-ët e padukshëm?',
        intro: ['Shinat transparente i lëvizin dhëmbët duke ushtruar një presion të lehtë dhe të kontrolluar. Çdo aligner ka një formë pak më ndryshe nga i mëparshmi, dhe e gjithë seria i drejton dhëmbët drejt pozicionit të planifikuar.'],
        inline: [
          { title: 'Vlerësimi dhe dokumentacioni.', text: 'Dentisti ekzaminon dhëmbët, mishrat dhe kafshimin, dhe merr foto, matje dhe imazherinë që i nevojitet rastit. Nëse ka karies, inflamacion të mishrave ose probleme të tjera, ato trajtohen para se të nisë trajtimi, sepse dhëmbët duhet të jenë të shëndetshëm që të lëvizin në mënyrë të sigurt.' },
          { title: 'Planifikimi.', text: 'Dokumentacioni dërgohet në laboratorin e aligner-ëve, ku lëvizja e çdo dhëmbi planifikohet me faza. Plani tregon si pritet të lëvizin dhëmbët dhe sa aligner do t’ju duhen. E shqyrtoni me dentistin dhe e miratoni para se të prodhohet çdo gjë.' },
          { title: 'Attachment-et dhe rregullimet e vogla.', text: 'Për disa lëvizje, në disa dhëmbë vendosen ngritje të vogla me ngjyrën e dhëmbit, të quajtura attachment. Ato i japin aligner-it një pikë kapjeje, që të lëvizë dhëmbët me më shumë saktësi. Në disa raste lëmohet një sasi shumë e vogël smalti mes dhëmbëve për të krijuar hapësirë. Të dyja planifikohen paraprakisht dhe ju shpjegohen.' },
          { title: 'Mbajtja e aligner-ëve.', text: 'E mbani çdo aligner rreth dy javë, 20 deri në 22 orë në ditë, dhe e hiqni vetëm për të ngrënë, për të pirë diçka tjetër përveç ujit dhe për të pastruar dhëmbët. Çdo aligner i ri mund të shtrëngojë për një ose dy ditë. Ky presion tregon që po punon, dhe kalon shpejt.' },
          { title: 'Kontrollet.', text: 'Kontrollet e rregullta verifikojnë që dhëmbët po lëvizin sipas planit. Nëse një dhëmb mbetet pas, plani mund të përmirësohet me aligner shtesë. Kalendarin e kontrolleve e biem dakord bashkë para se të nisim.' },
          { title: 'Përfundimi dhe retensioni.', text: 'Kur përfundon aligner-i i fundit, attachment-et hiqen dhe dhëmbët lustrohen. Pastaj kaloni te retainerët, të punuar sipas matjeve të dhëmbëve tuaj në pozicionin e ri, që i mbajnë dhëmbët aty ndërsa kocka dhe mishrat stabilizohen.' },
        ],
      },
    ],
    stats: [
      { value: '20–22 orë', label: 'Mbajtje në ditë' },
      { value: '~2 javë', label: 'Për çdo aligner' },
      { value: 'Disa muaj', label: 'Sipas rastit' },
      { value: 'Transparente', label: 'Pa braketa, pa tela' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Trajtim i plotë',
    whatTitle: 'Çfarë janë aligner-ët e padukshëm?',
    what: [
      'Aligner-ët e padukshëm janë një seri shinash transparente, të punuara sipas dhëmbëve tuaj, që i lëvizin dhëmbët gradualisht drejt një pozicioni më të drejtë. Çdo shinë mbahet rreth dy javë para se të kaloni te tjetra.',
      'Janë të lëvizshme dhe mezi duken, ndaj hiqen për të ngrënë dhe për të larë dhëmbët. Rezultati varet shumë nga mbajtja e tyre 20 deri në 22 orë në ditë.',
    ],
    calloutTitle: 'Retensioni është pjesë e trajtimit',
    calloutText:
      'Pasi lëvizin, dhëmbët priren natyrshëm të kthehen pas. Mbajtja e retainerëve siç ju këshillojmë është ajo që e ruan buzëqeshjen e re, ndaj retensioni planifikohet që në fillim, jo në fund.',
    compareTitle: 'Drejtim i vërtetë apo korrigjim estetik?',
    compareIntro: 'Aligner-ët i lëvizin vetë dhëmbët. Për ndryshime të vogla estetike te dhëmbët e përparmë, ka edhe rrugë të tjera:',
    compare: [
      { id: 'aligners', tag: 'Ky trajtim', title: 'Aligner të padukshëm', text: 'I lëvizin dhëmbët në pozicionin e duhur pa i limuar. Zgjat disa muaj dhe kërkon mbajtje të rregullt.' },
      { id: 'veneer-composite', tag: 'Për ndryshime të vogla', title: 'Faseta kompoziti', text: 'Mund të mbyllin hapësira të vogla ose të maskojnë pak çrregullsi te dhëmbët e përparmë, pa i lëvizur ata.' },
      { id: 'crown-emax', tag: 'Për ndryshim të plotë', title: 'Faseta E-max', text: 'Ndryshojnë formën dhe ngjyrën e buzëqeshjes; nuk e korrigjojnë kafshimin dhe kërkojnë pak limim.' },
    ],
    fitTitle: 'A janë aligner-ët e padukshëm të përshtatshëm për ju?',
    fitIntro: 'Aligner-ët e padukshëm zakonisht funksionojnë mirë nëse keni:',
    fit: [
      'Dhëmbë që hipin mbi njëri-tjetrin ose rrotullohen sepse nuk ka hapësirë të mjaftueshme',
      'Boshllëqe mes dhëmbëve që dëshironi t’i mbyllni',
      'Kafshim të thellë, të kundërt ose të kryqëzuar të lehtë deri të moderuar',
      'Dhëmbë që kanë lëvizur sërish pas një trajtimi të mëparshëm ortodontik',
      'Preferencë për një trajtim që mezi duket në punë dhe në foto',
      'Mundësinë për t’i mbajtur aligner-ët 20 deri në 22 orë në ditë dhe për t’i ndërruar në kohë',
    ],
    fitNote:
      'Aligner-ët nuk janë mjeti i duhur për çdo rast. Problemet e rënda të kafshimit, mospërputhjet e mëdha mes nofullave ose dhëmbët që kërkojnë rrotullime të mëdha mund të trajtohen më mirë ndryshe, dhe jua themi gjatë vlerësimit, jo pasi të keni nisur.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'Trajtimi zgjat disa muaj. Nis me një vlerësim të plotë dhe një plan që e miratoni ju, dhe vazhdon me aligner që i ndërroni në shtëpi dhe kontrolle të rregullta:',
    steps: [
      { title: 'Vlerësimi dhe dokumentacioni', text: 'Ekzaminojmë dhëmbët, mishrat dhe kafshimin, marrim foto, matje dhe imazherinë e nevojshme, dhe trajtojmë më parë kariesin ose problemet e mishrave.' },
      { title: 'Plani i trajtimit', text: 'Dokumentacioni dërgohet në laboratorin e aligner-ëve, ku planifikohet çdo lëvizje. E shqyrtoni dhe e miratoni planin para prodhimit.' },
      { title: 'Seria e aligner-ëve', text: 'Aligner-ët prodhohen dhe dorëzohen. Nëse duhen, vendosen attachment-et, dhe ju tregojmë si t’i mbani dhe t’i kujdeseni shinat.' },
      { title: 'Mbajtja dhe progresi', text: 'E mbani çdo aligner rreth dy javë, 20 deri në 22 orë në ditë, me kontrolle që konfirmojnë se dhëmbët lëvizin sipas planit.' },
      { title: 'Retensioni', text: 'Kur përfundon seria, hiqen attachment-et dhe retainerët i mbajnë dhëmbët në pozicionin e ri.' },
    ],
    whyBandTitle: 'Pse Veneer Clinic për aligner të padukshëm?',
    whyBandText:
      'Ju themi hapur nëse aligner-ët i përshtaten rastit tuaj para se të angazhoheni. E shihni dhe e miratoni planin para se të prodhohet çdo gjë, çdo fazë është në ofertën e detajuar me shkrim dhe retensioni është pjesë e trajtimit që në ditën e parë.',
    caseText: 'Dhëmbë të drejtuar në mënyrë diskrete',
    faq: [
      { question: 'Sa kostojnë aligner-ët e padukshëm?', answer: 'Trajtimi i plotë me aligner të padukshëm kushton 1.700 €. Para se të nisim, oferta e detajuar me shkrim tregon qartë çfarë përfshin trajtimi, kontrollet e planifikuara dhe retainerët, si dhe çdo trajtim që duhet bërë më parë, si mbushje ose pastrim.' },
      { question: 'A janë vërtet të padukshëm aligner-ët?', answer: 'Pothuajse. Shinat janë të holla dhe transparente, ndaj në një bisedë normale shumica e njerëzve nuk i vënë re. Nëse plani përfshin attachment, ngritje të vogla me ngjyrën e dhëmbit, këto mund të duken pak nga afër. Hiqen në fund të trajtimit.' },
      { question: 'A janë aligner-ët për të gjithë?', answer: 'Jo. Funksionojnë mirë për dhëmbë të mbivendosur, hapësira dhe shumë probleme të lehta ose të moderuara të kafshimit, si dhe për disa raste më komplekse me një seri më të gjatë. Problemet e rënda të kafshimit, mospërputhjet e mëdha mes nofullave ose dhëmbët që kërkojnë rrotullime të mëdha mund të trajtohen më mirë ndryshe. E vlerësojmë rastin tuaj hapur dhe jua themi para se të angazhoheni.' },
      { question: 'Sa zgjat trajtimi?', answer: 'Varet nga sa duhet të lëvizin dhëmbët. Rastet e thjeshta mund të zgjasin disa muaj, ato më komplekse më gjatë. Plani i trajtimit ju tregon numrin e përafërt të aligner-ëve dhe kohëzgjatjen e pritur para se të prodhohet çdo gjë. Mbajtja e aligner-ëve siç udhëzohet është faktori më i rëndësishëm për të respektuar afatet.' },
      { question: 'Sa orë në ditë duhet t’i mbaj?', answer: 'Rreth 20 deri në 22 orë në ditë. Hiqini vetëm për të ngrënë, për të pirë diçka tjetër përveç ujit dhe për të pastruar dhëmbët. Nëse aligner-ët qëndrojnë jashtë shumë gjatë, dhëmbët nuk lëvizin siç është planifikuar dhe trajtimi zgjatet.' },
      { question: 'A dhembin aligner-ët?', answer: 'Shumica e njerëzve ndiejnë presion ose shtrëngim për një ose dy ditë kur kalojnë te një aligner i ri. Kjo tregon që po punon, dhe kalon shpejt. Shinat janë të lëmuara, ndaj nuk i gërvishtin faqet si mund ta bëjnë braketat. Nëse një skaj ju shqetëson, na e thoni dhe e lëmojmë.' },
      { question: 'A mund të ha dhe të pi normalisht?', answer: 'Po, sepse aligner-ët i hiqni për të ngrënë. Ndërsa i keni në gojë, pini vetëm ujë. Pas ngrënies, lani dhëmbët para se t’i vendosni sërish, që ushqimi dhe sheqeri të mos mbeten mbi dhëmbë.' },
      { question: 'Çfarë janë attachment-et?', answer: 'Attachment-et janë ngritje të vogla me ngjyrën e dhëmbit që ngjiten në disa dhëmbë. I japin aligner-it një pikë kapjeje për t’i lëvizur dhëmbët me më shumë saktësi. Jo çdo rast ka nevojë për to. Nëse rasti juaj ka nevojë, planifikohen paraprakisht dhe hiqen në fund të trajtimit.' },
      { question: 'Sa shpesh duhet të vij për kontroll?', answer: 'Kalendarin e kontrolleve e biem dakord bashkë para se të nisim, sipas rastit tuaj dhe duke marrë parasysh nga vini. Kontrollet verifikojnë që dhëmbët po lëvizin sipas planit dhe që aligner-ët përshtaten mirë. Nëse mes kontrolleve diçka nuk përshtatet ose një dhëmb mbetet pas, na kontaktoni dhe ju këshillojmë.' },
      { question: 'A më duhen retainerë pas aligner-ëve?', answer: 'Po. Pas trajtimit, dhëmbët priren natyrshëm të kthehen pas. Retainerët i mbajnë në pozicionin e ri ndërsa kocka dhe mishrat stabilizohen. Dentisti ju tregon sa shpesh t’i mbani. Shumë njerëz vazhdojnë t’i mbajnë natën për një kohë të gjatë për të mbrojtur rezultatin.' },
      { question: 'A mund t’i korrigjojnë aligner-ët dhëmbët që lëvizën pas aparatit?', answer: 'Shpesh po. Rikthimi pas një trajtimi të mëparshëm ortodontik është një nga arsyet më të shpeshta pse të rriturit zgjedhin aligner. Vlerësojmë sa kanë lëvizur dhëmbët dhe nëse aligner-ët mund ta korrigjojnë, pastaj planifikojmë një seri për t’i rreshtuar sërish, të ndjekur nga retainerët për t’i mbajtur.' },
      { question: 'Çfarë përfshin oferta?', answer: 'Oferta e detajuar me shkrim tregon trajtimin me aligner, çdo trajtim që duhet bërë më parë, si mbushje ose pastrim, kontrollet e planifikuara dhe retainerët, secila e shënuar qartë. Pasi të nisë trajtimi, nuk shtohet asgjë që nuk e kemi diskutuar më parë me ju.' },
    ],
  },
  en: {
    name: 'Invisible Aligners',
    eyebrow: 'Orthodontics · Albania',
    subtitle: 'Straighten your teeth discreetly with removable clear aligners, planned around your bite and approved by you before production.',
    lead: 'Removable clear aligners that move your teeth step by step, with an honest assessment of whether they suit your case.',
    kicker: 'Invisible aligners in Tirana, Albania',
    articleTitle: 'Invisible aligners in Tirana: straight teeth, discreetly',
    intro: [
      'Invisible aligners are removable clear trays that gradually guide your teeth into a straighter position.',
      'Each aligner in the series has a slightly different shape. You wear each one for about two weeks, then move to the next, and step by step your teeth follow. Because the trays are clear and thin, most people will not notice you are wearing them. This is the invisible orthodontics many adults choose.',
      'At Veneer Clinic, full invisible aligner treatment costs €1,700.',
    ],
    sections: [
      {
        title: 'Why clear aligners are chosen',
        intro: [
          'Clear aligners appeal to adults who want straighter teeth without the look of metal braces. They are removable, so you take them out to eat, to drink anything other than water and to brush your teeth normally. There are no brackets or wires for food to catch on or to rub the inside of your cheeks.',
          'That freedom comes with responsibility. Aligners only work when you wear them, usually 20 to 22 hours a day. If you leave them out too often, the teeth do not move as planned. We tell you this clearly from the start, because it is the factor that most affects the result.',
        ],
      },
      {
        title: 'First, an honest assessment',
        intro: [
          'Not every case is suitable for aligners. They work very well for crowded teeth, gaps between teeth and many mild or moderate bite problems. Some more complex cases can be treated with a longer series, but severe bite problems or large jaw discrepancies may be better treated another way.',
          'Before recommending aligner treatment, we examine your teeth, gums and bite, take the imaging your case needs and check that teeth and gums are healthy enough to start. Decay and gum problems are treated first. If aligners are not the right tool for you, we tell you before you commit.',
        ],
      },
      {
        title: 'You see the plan before anything is made',
        intro: [
          'Your measurements and clinical records go to the aligner lab, where the movement of each tooth is planned stage by stage. You review the plan with the dentist, including how the teeth are expected to move and roughly how long it will take, before the aligners are produced. Nothing is made until you are happy.',
        ],
      },
      {
        title: 'Invisible aligners at Veneer Clinic',
        intro: [
          'Treatment starts with an initial visit in Tirana and continues with aligners you wear at home, while check-ups are planned on a schedule we agree together from the start, taking into account that you may be travelling from abroad. Your detailed written quote clearly shows what the treatment, check-ups and retainers include, so there are no surprises later.',
        ],
      },
      {
        title: 'How invisible aligners work',
        intro: ['Clear aligners move teeth by applying gentle, controlled pressure. Each aligner is shaped slightly differently from the previous one, and the whole series guides the teeth towards the planned position.'],
        inline: [
          { title: 'Assessment and records.', text: 'The dentist examines your teeth, gums and bite, and takes photos, measurements and the imaging your case needs. If there is decay, gum inflammation or other problems, they are treated before treatment starts, because teeth need to be healthy to move safely.' },
          { title: 'Planning.', text: 'The records go to the aligner lab, where the movement of each tooth is planned in stages. The plan shows how the teeth are expected to move and how many aligners you will need. You review it with the dentist and approve it before anything is produced.' },
          { title: 'Attachments and small adjustments.', text: 'For some movements, small tooth-coloured bumps called attachments are placed on certain teeth. They give the aligner a grip point so it moves the teeth more precisely. In some cases a very small amount of enamel is smoothed between teeth to create space. Both are planned in advance and explained to you.' },
          { title: 'Wearing the aligners.', text: 'You wear each aligner for about two weeks, 20 to 22 hours a day, removing it only to eat, to drink anything other than water and to clean your teeth. Each new aligner may feel tight for a day or two. That pressure shows it is working, and it passes quickly.' },
          { title: 'Check-ups.', text: 'Regular check-ups confirm the teeth are moving according to plan. If a tooth lags behind, the plan can be refined with additional aligners. We agree the check-up schedule together before starting.' },
          { title: 'Finishing and retention.', text: 'When the last aligner is done, the attachments are removed and the teeth polished. You then move to retainers, made to the measurements of your teeth in their new position, which hold the teeth there while the bone and gums stabilise.' },
        ],
      },
    ],
    stats: [
      { value: '20–22 h', label: 'Wear per day' },
      { value: '~2 weeks', label: 'Per aligner' },
      { value: 'Several months', label: 'Depending on the case' },
      { value: 'Clear', label: 'No brackets, no wires' },
    ],
    priceTitle: 'Price',
    priceNote: 'Full treatment',
    whatTitle: 'What are invisible aligners?',
    what: [
      'Invisible aligners are a series of clear trays, made to your teeth, that gradually move your teeth towards a straighter position. Each tray is worn for about two weeks before you move to the next.',
      'They are removable and barely visible, so you take them out to eat and brush. The result depends heavily on wearing them 20 to 22 hours a day.',
    ],
    calloutTitle: 'Retention is part of the treatment',
    calloutText:
      'Once moved, teeth naturally tend to drift back. Wearing your retainers as advised is what preserves your new smile, so retention is planned from the start, not at the end.',
    compareTitle: 'True straightening or cosmetic correction?',
    compareIntro: 'Aligners move the teeth themselves. For small cosmetic changes on front teeth, there are other routes too:',
    compare: [
      { id: 'aligners', tag: 'This treatment', title: 'Invisible aligners', text: 'Move the teeth into the right position without reshaping them. Takes several months and needs consistent wear.' },
      { id: 'veneer-composite', tag: 'For small changes', title: 'Composite veneers', text: 'Can close small gaps or mask slight irregularities on front teeth, without moving them.' },
      { id: 'crown-emax', tag: 'For a full change', title: 'E-max veneers', text: 'Change the shape and colour of the smile; they do not correct the bite and need a little preparation.' },
    ],
    fitTitle: 'Are invisible aligners right for you?',
    fitIntro: 'Invisible aligners usually work well if you have:',
    fit: [
      'Teeth that overlap or are rotated because there is not enough space',
      'Gaps between teeth you would like to close',
      'A mild to moderate deep bite, underbite or crossbite',
      'Teeth that have moved again after previous orthodontic treatment',
      'A preference for treatment that is barely visible at work and in photos',
      'The ability to wear aligners 20 to 22 hours a day and change them on time',
    ],
    fitNote:
      'Aligners are not the right tool for every case. Severe bite problems, large jaw discrepancies or teeth needing major rotations may be better treated another way, and we tell you at the assessment, not after you have started.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'Treatment takes several months. It starts with a full assessment and a plan you approve, and continues with aligners you change at home and regular check-ups:',
    steps: [
      { title: 'Assessment and records', text: 'We examine teeth, gums and bite, take photos, measurements and the imaging needed, and treat any decay or gum problems first.' },
      { title: 'Treatment plan', text: 'The records go to the aligner lab, where every movement is planned. You review and approve the plan before production.' },
      { title: 'Your aligner series', text: 'The aligners are produced and delivered. If needed, attachments are placed, and we show you how to wear and care for the trays.' },
      { title: 'Wear and progress', text: 'You wear each aligner for about two weeks, 20 to 22 hours a day, with check-ups confirming the teeth move as planned.' },
      { title: 'Retention', text: 'When the series is finished, attachments are removed and retainers hold the teeth in their new position.' },
    ],
    whyBandTitle: 'Why Veneer Clinic for invisible aligners?',
    whyBandText:
      'We tell you openly whether aligners suit your case before you commit. You see and approve the plan before anything is made, every stage is in the detailed written quote and retention is part of the treatment from day one.',
    caseText: 'Teeth straightened discreetly',
    faq: [
      { question: 'How much do invisible aligners cost?', answer: 'Full invisible aligner treatment costs €1,700. Before we start, your detailed written quote clearly shows what the treatment, planned check-ups and retainers include, as well as any treatment needed first, such as fillings or a cleaning.' },
      { question: 'Are aligners really invisible?', answer: 'Almost. The trays are thin and clear, so in normal conversation most people do not notice them. If your plan includes attachments, small tooth-coloured bumps, these may be slightly visible up close. They are removed at the end of treatment.' },
      { question: 'Are aligners for everyone?', answer: 'No. They work well for crowded teeth, gaps and many mild or moderate bite problems, and for some more complex cases with a longer series. Severe bite problems, large jaw discrepancies or teeth needing major rotations may be better treated another way. We assess your case openly and tell you before you commit.' },
      { question: 'How long does treatment take?', answer: 'It depends on how far the teeth need to move. Simple cases can take a few months, more complex ones longer. Your treatment plan shows the approximate number of aligners and expected duration before anything is produced. Wearing the aligners as instructed is the most important factor in staying on schedule.' },
      { question: 'How many hours a day do I need to wear them?', answer: 'About 20 to 22 hours a day. Remove them only to eat, to drink anything other than water and to clean your teeth. If the aligners stay out too long, the teeth do not move as planned and treatment takes longer.' },
      { question: 'Do aligners hurt?', answer: 'Most people feel pressure or tightness for a day or two when switching to a new aligner. This shows it is working, and it passes quickly. The trays are smooth, so they do not rub your cheeks the way brackets can. If an edge bothers you, tell us and we smooth it.' },
      { question: 'Can I eat and drink normally?', answer: 'Yes, because you remove the aligners to eat. While they are in, drink only water. After eating, brush your teeth before putting them back, so food and sugar do not stay on your teeth.' },
      { question: 'What are attachments?', answer: 'Attachments are small tooth-coloured bumps bonded to some teeth. They give the aligner a grip point to move the teeth more precisely. Not every case needs them. If yours does, they are planned in advance and removed at the end of treatment.' },
      { question: 'How often do I need check-ups?', answer: 'We agree the check-up schedule together before starting, based on your case and where you travel from. Check-ups confirm the teeth are moving according to plan and the aligners fit well. If something does not fit between check-ups or a tooth lags behind, contact us and we advise you.' },
      { question: 'Do I need retainers after aligners?', answer: 'Yes. After treatment, teeth naturally tend to drift back. Retainers hold them in their new position while the bone and gums stabilise. The dentist tells you how often to wear them. Many people keep wearing them at night long-term to protect the result.' },
      { question: 'Can aligners fix teeth that moved after braces?', answer: 'Often, yes. Relapse after previous orthodontic treatment is one of the most common reasons adults choose aligners. We assess how far the teeth have moved and whether aligners can correct it, then plan a series to realign them, followed by retainers to hold them.' },
      { question: 'What does the quote include?', answer: 'Your detailed written quote shows the aligner treatment, any treatment needed first, such as fillings or a cleaning, the planned check-ups and the retainers, each clearly listed. Once treatment starts, nothing is added that we have not discussed with you first.' },
    ],
  },
  de: {
    name: 'Unsichtbare Aligner',
    eyebrow: 'Kieferorthopädie · Albanien',
    subtitle: 'Richten Sie Ihre Zähne diskret mit herausnehmbaren transparenten Schienen, geplant nach Ihrem Biss und von Ihnen vor der Herstellung freigegeben.',
    lead: 'Herausnehmbare transparente Schienen, die Ihre Zähne Schritt für Schritt bewegen, mit einer ehrlichen Einschätzung, ob sie zu Ihrem Fall passen.',
    kicker: 'Unsichtbare Aligner in Tirana, Albanien',
    articleTitle: 'Unsichtbare Aligner in Tirana: gerade Zähne, diskret',
    intro: [
      'Unsichtbare Aligner sind herausnehmbare transparente Schienen, die die Zähne schrittweise in eine geradere Position führen.',
      'Jeder Aligner der Serie hat eine leicht andere Form. Sie tragen jeden etwa zwei Wochen, dann wechseln Sie zum nächsten, und Schritt für Schritt folgen die Zähne. Da die Schienen transparent und dünn sind, bemerken die meisten nicht, dass Sie sie tragen. Das ist die unsichtbare Kieferorthopädie, die viele Erwachsene wählen.',
      'In der Veneer Clinic kostet die komplette Behandlung mit unsichtbaren Alignern 1.700 €.',
    ],
    sections: [
      {
        title: 'Warum transparente Schienen gewählt werden',
        intro: [
          'Transparente Schienen gefallen Erwachsenen, die geradere Zähne ohne die Optik einer Metallspange möchten. Sie sind herausnehmbar, sodass Sie sie zum Essen, zum Trinken von allem außer Wasser und zum normalen Zähneputzen herausnehmen. Es gibt keine Brackets oder Drähte, an denen Essen hängen bleibt oder die an der Wange reiben.',
          'Diese Freiheit bringt Verantwortung mit sich. Aligner wirken nur, wenn Sie sie tragen, meist 20 bis 22 Stunden täglich. Lassen Sie sie zu oft heraus, bewegen sich die Zähne nicht wie geplant. Das sagen wir Ihnen von Anfang an klar, denn es ist der Faktor, der das Ergebnis am meisten beeinflusst.',
        ],
      },
      {
        title: 'Zuerst eine ehrliche Einschätzung',
        intro: [
          'Nicht jeder Fall eignet sich für Aligner. Sie wirken sehr gut bei Engstand, Lücken zwischen den Zähnen und vielen leichten oder mittleren Bissproblemen. Manche komplexeren Fälle lassen sich mit einer längeren Serie behandeln, doch schwere Bissprobleme oder große Kieferabweichungen werden oft besser anders behandelt.',
          'Bevor wir eine Alignerbehandlung empfehlen, untersuchen wir Zähne, Zahnfleisch und Biss, machen die nötige Bildgebung und prüfen, ob Zähne und Zahnfleisch gesund genug für den Start sind. Karies und Zahnfleischprobleme werden zuerst behandelt. Sind Aligner nicht das richtige Mittel für Sie, sagen wir es, bevor Sie sich festlegen.',
        ],
      },
      {
        title: 'Sie sehen den Plan, bevor etwas gefertigt wird',
        intro: [
          'Ihre Abdrücke und klinischen Unterlagen gehen an das Alignerlabor, wo die Bewegung jedes Zahns Phase für Phase geplant wird. Sie besprechen den Plan mit dem Zahnarzt, einschließlich der erwarteten Zahnbewegung und der ungefähren Dauer, bevor die Aligner hergestellt werden. Nichts wird gefertigt, bevor Sie zufrieden sind.',
        ],
      },
      {
        title: 'Unsichtbare Aligner in der Veneer Clinic',
        intro: [
          'Die Behandlung beginnt mit einem Ersttermin in Tirana und geht mit Alignern weiter, die Sie zu Hause tragen, während die Kontrollen nach einem gemeinsam vereinbarten Zeitplan erfolgen, der berücksichtigt, dass Sie eventuell aus dem Ausland anreisen. Ihr detailliertes schriftliches Angebot zeigt klar, was Behandlung, Kontrollen und Retainer umfassen, damit es später keine Überraschungen gibt.',
        ],
      },
      {
        title: 'So funktionieren unsichtbare Aligner',
        intro: ['Transparente Schienen bewegen Zähne mit sanftem, kontrolliertem Druck. Jeder Aligner ist etwas anders geformt als der vorherige, und die ganze Serie führt die Zähne zur geplanten Position.'],
        inline: [
          { title: 'Untersuchung und Unterlagen.', text: 'Der Zahnarzt untersucht Zähne, Zahnfleisch und Biss und macht Fotos, Abdrücke und die nötige Bildgebung. Liegen Karies, Zahnfleischentzündung oder andere Probleme vor, werden sie vor Beginn behandelt, denn Zähne müssen gesund sein, um sich sicher zu bewegen.' },
          { title: 'Planung.', text: 'Die Unterlagen gehen an das Alignerlabor, wo die Bewegung jedes Zahns in Phasen geplant wird. Der Plan zeigt, wie sich die Zähne voraussichtlich bewegen und wie viele Aligner Sie brauchen. Sie besprechen ihn mit dem Zahnarzt und geben ihn frei, bevor etwas hergestellt wird.' },
          { title: 'Attachments und kleine Anpassungen.', text: 'Für manche Bewegungen werden kleine zahnfarbene Erhebungen, sogenannte Attachments, auf einzelne Zähne geklebt. Sie geben dem Aligner einen Haltepunkt, damit er die Zähne präziser bewegt. In manchen Fällen wird zwischen den Zähnen minimal Schmelz geglättet, um Platz zu schaffen. Beides wird vorab geplant und erklärt.' },
          { title: 'Tragen der Aligner.', text: 'Sie tragen jeden Aligner etwa zwei Wochen, 20 bis 22 Stunden täglich, und nehmen ihn nur zum Essen, zum Trinken von allem außer Wasser und zum Zähneputzen heraus. Jeder neue Aligner kann ein bis zwei Tage spannen. Dieser Druck zeigt, dass er wirkt, und vergeht schnell.' },
          { title: 'Kontrollen.', text: 'Regelmäßige Kontrollen bestätigen, dass sich die Zähne nach Plan bewegen. Bleibt ein Zahn zurück, kann der Plan mit zusätzlichen Alignern verfeinert werden. Den Kontrollplan vereinbaren wir vor Beginn gemeinsam.' },
          { title: 'Abschluss und Retention.', text: 'Wenn der letzte Aligner fertig ist, werden die Attachments entfernt und die Zähne poliert. Dann wechseln Sie zu Retainern, gefertigt nach den Abdrücken Ihrer Zähne in der neuen Position, die die Zähne dort halten, während sich Knochen und Zahnfleisch stabilisieren.' },
        ],
      },
    ],
    stats: [
      { value: '20–22 Std.', label: 'Tragezeit pro Tag' },
      { value: '~2 Wochen', label: 'Pro Aligner' },
      { value: 'Mehrere Monate', label: 'Je nach Fall' },
      { value: 'Transparent', label: 'Keine Brackets, keine Drähte' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Komplette Behandlung',
    whatTitle: 'Was sind unsichtbare Aligner?',
    what: [
      'Unsichtbare Aligner sind eine Serie transparenter Schienen, nach Ihren Zähnen gefertigt, die die Zähne schrittweise in eine geradere Position bewegen. Jede Schiene wird etwa zwei Wochen getragen, bevor Sie zur nächsten wechseln.',
      'Sie sind herausnehmbar und kaum sichtbar, sodass Sie sie zum Essen und Putzen herausnehmen. Das Ergebnis hängt stark davon ab, dass Sie sie 20 bis 22 Stunden täglich tragen.',
    ],
    calloutTitle: 'Retention gehört zur Behandlung',
    calloutText:
      'Einmal bewegt, neigen Zähne natürlich dazu, zurückzuwandern. Die Retainer wie empfohlen zu tragen, bewahrt Ihr neues Lächeln, daher wird die Retention von Anfang an geplant, nicht erst am Ende.',
    compareTitle: 'Echte Zahnkorrektur oder ästhetische Korrektur?',
    compareIntro: 'Aligner bewegen die Zähne selbst. Für kleine ästhetische Änderungen an Frontzähnen gibt es auch andere Wege:',
    compare: [
      { id: 'aligners', tag: 'Diese Behandlung', title: 'Unsichtbare Aligner', text: 'Bewegen die Zähne in die richtige Position, ohne sie zu beschleifen. Dauert mehrere Monate und erfordert konsequentes Tragen.' },
      { id: 'veneer-composite', tag: 'Für kleine Änderungen', title: 'Komposit-Veneers', text: 'Können kleine Lücken schließen oder leichte Unregelmäßigkeiten an Frontzähnen kaschieren, ohne sie zu bewegen.' },
      { id: 'crown-emax', tag: 'Für eine komplette Veränderung', title: 'E-max-Veneers', text: 'Verändern Form und Farbe des Lächelns; sie korrigieren nicht den Biss und erfordern eine leichte Präparation.' },
    ],
    fitTitle: 'Sind unsichtbare Aligner das Richtige für Sie?',
    fitIntro: 'Unsichtbare Aligner wirken meist gut bei:',
    fit: [
      'Zähnen, die sich überlappen oder verdreht sind, weil nicht genug Platz ist',
      'Lücken zwischen den Zähnen, die Sie schließen möchten',
      'Leichtem bis mittlerem Tiefbiss, Unterbiss oder Kreuzbiss',
      'Zähnen, die sich nach einer früheren kieferorthopädischen Behandlung wieder verschoben haben',
      'Dem Wunsch nach einer Behandlung, die bei der Arbeit und auf Fotos kaum sichtbar ist',
      'Der Möglichkeit, die Aligner 20 bis 22 Stunden täglich zu tragen und pünktlich zu wechseln',
    ],
    fitNote:
      'Aligner sind nicht für jeden Fall das richtige Mittel. Schwere Bissprobleme, große Kieferabweichungen oder Zähne, die starke Drehungen brauchen, werden oft besser anders behandelt, und das sagen wir Ihnen bei der Untersuchung, nicht nachdem Sie begonnen haben.',
    stepsTitle: 'So läuft die Behandlung ab',
    stepsIntro: 'Die Behandlung dauert mehrere Monate. Sie beginnt mit einer vollständigen Untersuchung und einem Plan, den Sie freigeben, und geht mit Alignern weiter, die Sie zu Hause wechseln, sowie regelmäßigen Kontrollen:',
    steps: [
      { title: 'Untersuchung und Unterlagen', text: 'Wir untersuchen Zähne, Zahnfleisch und Biss, machen Fotos, Abdrücke und die nötige Bildgebung und behandeln zuerst Karies oder Zahnfleischprobleme.' },
      { title: 'Behandlungsplan', text: 'Die Unterlagen gehen an das Alignerlabor, wo jede Bewegung geplant wird. Sie prüfen und genehmigen den Plan vor der Herstellung.' },
      { title: 'Ihre Alignerserie', text: 'Die Aligner werden hergestellt und übergeben. Bei Bedarf werden Attachments gesetzt, und wir zeigen Ihnen Tragen und Pflege der Schienen.' },
      { title: 'Tragen und Fortschritt', text: 'Sie tragen jeden Aligner etwa zwei Wochen, 20 bis 22 Stunden täglich, mit Kontrollen, die bestätigen, dass sich die Zähne nach Plan bewegen.' },
      { title: 'Retention', text: 'Nach Abschluss der Serie werden die Attachments entfernt, und Retainer halten die Zähne in ihrer neuen Position.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für unsichtbare Aligner?',
    whyBandText:
      'Wir sagen Ihnen offen, ob Aligner zu Ihrem Fall passen, bevor Sie sich festlegen. Sie sehen und genehmigen den Plan, bevor etwas gefertigt wird, jede Phase steht im detaillierten schriftlichen Angebot, und die Retention gehört vom ersten Tag an zur Behandlung.',
    caseText: 'Diskret begradigte Zähne',
    faq: [
      { question: 'Was kosten unsichtbare Aligner?', answer: 'Die komplette Behandlung mit unsichtbaren Alignern kostet 1.700 €. Vor Beginn zeigt Ihr detailliertes schriftliches Angebot klar, was Behandlung, geplante Kontrollen und Retainer umfassen, sowie jede vorher nötige Behandlung, etwa Füllungen oder eine Reinigung.' },
      { question: 'Sind Aligner wirklich unsichtbar?', answer: 'Fast. Die Schienen sind dünn und transparent, sodass die meisten sie im normalen Gespräch nicht bemerken. Enthält Ihr Plan Attachments, kleine zahnfarbene Erhebungen, können diese aus der Nähe leicht sichtbar sein. Sie werden am Ende der Behandlung entfernt.' },
      { question: 'Sind Aligner für jeden geeignet?', answer: 'Nein. Sie wirken gut bei Engstand, Lücken und vielen leichten oder mittleren Bissproblemen sowie bei manchen komplexeren Fällen mit einer längeren Serie. Schwere Bissprobleme, große Kieferabweichungen oder Zähne, die starke Drehungen brauchen, werden oft besser anders behandelt. Wir beurteilen Ihren Fall offen und sagen es Ihnen, bevor Sie sich festlegen.' },
      { question: 'Wie lange dauert die Behandlung?', answer: 'Das hängt davon ab, wie weit sich die Zähne bewegen müssen. Einfache Fälle können einige Monate dauern, komplexere länger. Ihr Behandlungsplan zeigt die ungefähre Anzahl der Aligner und die erwartete Dauer, bevor etwas hergestellt wird. Das Tragen nach Anweisung ist der wichtigste Faktor, um im Zeitplan zu bleiben.' },
      { question: 'Wie viele Stunden täglich muss ich sie tragen?', answer: 'Etwa 20 bis 22 Stunden täglich. Nehmen Sie sie nur zum Essen, zum Trinken von allem außer Wasser und zum Zähneputzen heraus. Bleiben die Aligner zu lange draußen, bewegen sich die Zähne nicht wie geplant und die Behandlung dauert länger.' },
      { question: 'Tun Aligner weh?', answer: 'Die meisten spüren beim Wechsel zu einem neuen Aligner ein bis zwei Tage Druck oder Spannung. Das zeigt, dass er wirkt, und vergeht schnell. Die Schienen sind glatt und reiben nicht an der Wange wie Brackets. Stört Sie eine Kante, sagen Sie es und wir glätten sie.' },
      { question: 'Kann ich normal essen und trinken?', answer: 'Ja, denn Sie nehmen die Aligner zum Essen heraus. Solange sie drin sind, trinken Sie nur Wasser. Nach dem Essen putzen Sie die Zähne, bevor Sie sie wieder einsetzen, damit Essen und Zucker nicht auf den Zähnen bleiben.' },
      { question: 'Was sind Attachments?', answer: 'Attachments sind kleine zahnfarbene Erhebungen, die auf einige Zähne geklebt werden. Sie geben dem Aligner einen Haltepunkt, um die Zähne präziser zu bewegen. Nicht jeder Fall braucht sie. Braucht Ihrer sie, werden sie vorab geplant und am Ende der Behandlung entfernt.' },
      { question: 'Wie oft muss ich zur Kontrolle kommen?', answer: 'Den Kontrollplan vereinbaren wir vor Beginn gemeinsam, je nach Fall und Herkunftsort. Kontrollen bestätigen, dass sich die Zähne nach Plan bewegen und die Aligner gut sitzen. Passt zwischen den Kontrollen etwas nicht oder bleibt ein Zahn zurück, kontaktieren Sie uns und wir beraten Sie.' },
      { question: 'Brauche ich nach den Alignern Retainer?', answer: 'Ja. Nach der Behandlung neigen Zähne natürlich dazu, zurückzuwandern. Retainer halten sie in der neuen Position, während sich Knochen und Zahnfleisch stabilisieren. Der Zahnarzt sagt Ihnen, wie oft Sie sie tragen sollen. Viele tragen sie langfristig nachts, um das Ergebnis zu schützen.' },
      { question: 'Können Aligner Zähne korrigieren, die sich nach einer Zahnspange verschoben haben?', answer: 'Oft ja. Ein Rezidiv nach früherer kieferorthopädischer Behandlung ist einer der häufigsten Gründe, warum Erwachsene Aligner wählen. Wir beurteilen, wie weit sich die Zähne bewegt haben und ob Aligner das korrigieren können, planen dann eine Serie zur erneuten Ausrichtung, gefolgt von Retainern zum Halten.' },
      { question: 'Was umfasst das Angebot?', answer: 'Ihr detailliertes schriftliches Angebot zeigt die Alignerbehandlung, jede vorher nötige Behandlung wie Füllungen oder eine Reinigung, die geplanten Kontrollen und die Retainer, jeweils klar aufgeführt. Nach Behandlungsbeginn kommt nichts hinzu, was wir nicht vorher mit Ihnen besprochen haben.' },
    ],
  },
  it: {
    name: 'Allineatori invisibili',
    eyebrow: 'Ortodonzia · Albania',
    subtitle: 'Raddrizza i denti con discrezione grazie a mascherine trasparenti rimovibili, pianificate sul tuo morso e approvate da te prima della produzione.',
    lead: 'Mascherine trasparenti rimovibili che muovono i denti passo dopo passo, con una valutazione onesta se sono adatte al tuo caso.',
    kicker: 'Allineatori invisibili a Tirana, Albania',
    articleTitle: 'Allineatori invisibili a Tirana: denti dritti, con discrezione',
    intro: [
      'Gli allineatori invisibili sono mascherine trasparenti rimovibili che guidano gradualmente i denti in una posizione più dritta.',
      'Ogni allineatore della serie ha una forma leggermente diversa. Porti ciascuno circa due settimane, poi passi al successivo, e passo dopo passo i denti lo seguono. Poiché le mascherine sono trasparenti e sottili, la maggior parte delle persone non noterà che le porti. È l’ortodonzia invisibile che scelgono molti adulti.',
      'Alla Veneer Clinic, il trattamento completo con allineatori invisibili costa 1.700 €.',
    ],
    sections: [
      {
        title: 'Perché si scelgono le mascherine trasparenti',
        intro: [
          'Le mascherine trasparenti piacciono agli adulti che vogliono denti più dritti senza l’aspetto dell’apparecchio metallico. Sono rimovibili, quindi le togli per mangiare, per bere qualsiasi cosa tranne l’acqua e per lavarti i denti normalmente. Non ci sono attacchi o fili dove si ferma il cibo o che graffiano le guance.',
          'Questa libertà comporta responsabilità. Gli allineatori funzionano solo quando li porti, di solito 20–22 ore al giorno. Se li lasci fuori troppo spesso, i denti non si muovono come previsto. Te lo diciamo chiaramente fin dall’inizio, perché è il fattore che influisce di più sul risultato.',
        ],
      },
      {
        title: 'Prima, una valutazione onesta',
        intro: [
          'Non ogni caso è adatto agli allineatori. Funzionano molto bene per denti affollati, spazi tra i denti e molti problemi di morso lievi o moderati. Alcuni casi più complessi si possono trattare con una serie più lunga, ma problemi di morso gravi o grandi discrepanze tra le arcate si trattano meglio in altro modo.',
          'Prima di consigliarti gli allineatori, esaminiamo denti, gengive e morso, facciamo le immagini necessarie al tuo caso e verifichiamo che denti e gengive siano abbastanza sani per iniziare. Carie e problemi gengivali si trattano prima. Se gli allineatori non sono lo strumento giusto per te, te lo diciamo prima che tu ti impegni.',
        ],
      },
      {
        title: 'Vedi il piano prima che si produca qualcosa',
        intro: [
          'Le tue impronte e la documentazione clinica vanno al laboratorio degli allineatori, dove il movimento di ogni dente si pianifica fase per fase. Esamini il piano con il dentista, compreso come si prevede che si muovano i denti e quanto tempo servirà circa, prima che gli allineatori vengano prodotti. Nulla si realizza finché non sei soddisfatto.',
        ],
      },
      {
        title: 'Allineatori invisibili alla Veneer Clinic',
        intro: [
          'Il trattamento inizia con una visita iniziale a Tirana e prosegue con gli allineatori che porti a casa, mentre i controlli si pianificano secondo un calendario concordato insieme fin dall’inizio, tenendo conto che potresti arrivare dall’estero. Il preventivo scritto dettagliato mostra chiaramente cosa comprendono trattamento, controlli e contenzione, così non ci sono sorprese dopo.',
        ],
      },
      {
        title: 'Come funzionano gli allineatori invisibili',
        intro: ['Le mascherine trasparenti muovono i denti esercitando una pressione leggera e controllata. Ogni allineatore ha una forma leggermente diversa dal precedente, e l’intera serie guida i denti verso la posizione pianificata.'],
        inline: [
          { title: 'Valutazione e documentazione.', text: 'Il dentista esamina denti, gengive e morso, e prende foto, impronte e le immagini necessarie. Se ci sono carie, infiammazione gengivale o altri problemi, si trattano prima di iniziare, perché i denti devono essere sani per muoversi in sicurezza.' },
          { title: 'Pianificazione.', text: 'La documentazione va al laboratorio degli allineatori, dove il movimento di ogni dente si pianifica per fasi. Il piano mostra come si prevede che si muovano i denti e quanti allineatori ti serviranno. Lo esamini con il dentista e lo approvi prima che si produca qualcosa.' },
          { title: 'Attachment e piccoli aggiustamenti.', text: 'Per alcuni movimenti, su alcuni denti si applicano piccoli rilievi del colore del dente, chiamati attachment. Danno all’allineatore un punto di presa, perché muova i denti con più precisione. In alcuni casi si leviga una quantità minima di smalto tra i denti per creare spazio. Entrambi si pianificano in anticipo e ti vengono spiegati.' },
          { title: 'Portare gli allineatori.', text: 'Porti ogni allineatore circa due settimane, 20–22 ore al giorno, e lo togli solo per mangiare, per bere qualcosa che non sia acqua e per pulire i denti. Ogni nuovo allineatore può stringere per uno o due giorni. Questa pressione indica che funziona, e passa presto.' },
          { title: 'Controlli.', text: 'Controlli regolari verificano che i denti si muovano secondo il piano. Se un dente resta indietro, il piano si può perfezionare con allineatori aggiuntivi. Il calendario dei controlli lo concordiamo insieme prima di iniziare.' },
          { title: 'Fine e contenzione.', text: 'Quando finisce l’ultimo allineatore, gli attachment si rimuovono e i denti si lucidano. Poi passi alle mascherine di contenzione, realizzate sulle impronte dei denti nella nuova posizione, che li tengono lì mentre osso e gengive si stabilizzano.' },
        ],
      },
    ],
    stats: [
      { value: '20–22 ore', label: 'Al giorno' },
      { value: '~2 settimane', label: 'Per allineatore' },
      { value: 'Alcuni mesi', label: 'A seconda del caso' },
      { value: 'Trasparenti', label: 'Niente attacchi, niente fili' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Trattamento completo',
    whatTitle: 'Cosa sono gli allineatori invisibili?',
    what: [
      'Gli allineatori invisibili sono una serie di mascherine trasparenti, realizzate sui tuoi denti, che li muovono gradualmente verso una posizione più dritta. Ogni mascherina si porta circa due settimane prima di passare alla successiva.',
      'Sono rimovibili e si vedono appena, quindi le togli per mangiare e lavarti i denti. Il risultato dipende molto dal portarle 20–22 ore al giorno.',
    ],
    calloutTitle: 'La contenzione fa parte del trattamento',
    calloutText:
      'Una volta spostati, i denti tendono naturalmente a tornare indietro. Portare le mascherine di contenzione come consigliato è ciò che conserva il nuovo sorriso, quindi la contenzione si pianifica fin dall’inizio, non alla fine.',
    compareTitle: 'Allineamento vero o correzione estetica?',
    compareIntro: 'Gli allineatori muovono i denti stessi. Per piccoli cambiamenti estetici sui denti anteriori, ci sono anche altre strade:',
    compare: [
      { id: 'aligners', tag: 'Questo trattamento', title: 'Allineatori invisibili', text: 'Muovono i denti nella posizione giusta senza limarli. Richiede alcuni mesi e un uso costante.' },
      { id: 'veneer-composite', tag: 'Per piccoli cambiamenti', title: 'Faccette in composito', text: 'Possono chiudere piccoli spazi o mascherare lievi irregolarità sui denti anteriori, senza spostarli.' },
      { id: 'crown-emax', tag: 'Per un cambiamento completo', title: 'Faccette E-max', text: 'Cambiano forma e colore del sorriso; non correggono il morso e richiedono una leggera preparazione.' },
    ],
    fitTitle: 'Gli allineatori invisibili sono adatti a te?',
    fitIntro: 'Gli allineatori invisibili di solito funzionano bene se hai:',
    fit: [
      'Denti che si sovrappongono o sono ruotati perché non c’è abbastanza spazio',
      'Spazi tra i denti che vorresti chiudere',
      'Un morso profondo, inverso o crociato da lieve a moderato',
      'Denti che si sono spostati di nuovo dopo un precedente trattamento ortodontico',
      'Una preferenza per un trattamento che si nota appena al lavoro e in foto',
      'La possibilità di portare gli allineatori 20–22 ore al giorno e cambiarli in tempo',
    ],
    fitNote:
      'Gli allineatori non sono lo strumento giusto per ogni caso. Problemi di morso gravi, grandi discrepanze tra le arcate o denti che richiedono grandi rotazioni si trattano meglio in altro modo, e te lo diciamo durante la valutazione, non dopo che hai iniziato.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'Il trattamento dura alcuni mesi. Inizia con una valutazione completa e un piano che approvi tu, e prosegue con allineatori che cambi a casa e controlli regolari:',
    steps: [
      { title: 'Valutazione e documentazione', text: 'Esaminiamo denti, gengive e morso, prendiamo foto, impronte e le immagini necessarie, e trattiamo prima carie o problemi gengivali.' },
      { title: 'Piano di trattamento', text: 'La documentazione va al laboratorio degli allineatori, dove si pianifica ogni movimento. Esamini e approvi il piano prima della produzione.' },
      { title: 'La tua serie di allineatori', text: 'Gli allineatori si producono e ti vengono consegnati. Se servono, si applicano gli attachment, e ti mostriamo come portare e curare le mascherine.' },
      { title: 'Uso e progressi', text: 'Porti ogni allineatore circa due settimane, 20–22 ore al giorno, con controlli che confermano che i denti si muovono secondo il piano.' },
      { title: 'Contenzione', text: 'Quando la serie è finita, si rimuovono gli attachment e le mascherine di contenzione tengono i denti nella nuova posizione.' },
    ],
    whyBandTitle: 'Perché Veneer Clinic per gli allineatori invisibili?',
    whyBandText:
      'Ti diciamo apertamente se gli allineatori sono adatti al tuo caso prima che tu ti impegni. Vedi e approvi il piano prima che si produca qualcosa, ogni fase è nel preventivo scritto dettagliato e la contenzione fa parte del trattamento fin dal primo giorno.',
    caseText: 'Denti allineati con discrezione',
    faq: [
      { question: 'Quanto costano gli allineatori invisibili?', answer: 'Il trattamento completo con allineatori invisibili costa 1.700 €. Prima di iniziare, il preventivo scritto dettagliato mostra chiaramente cosa comprendono trattamento, controlli previsti e contenzione, oltre a ogni trattamento necessario prima, come otturazioni o una pulizia.' },
      { question: 'Gli allineatori sono davvero invisibili?', answer: 'Quasi. Le mascherine sono sottili e trasparenti, quindi in una conversazione normale la maggior parte delle persone non le nota. Se il piano comprende attachment, piccoli rilievi del colore del dente, questi possono vedersi un po’ da vicino. Si rimuovono alla fine del trattamento.' },
      { question: 'Gli allineatori sono per tutti?', answer: 'No. Funzionano bene per denti affollati, spazi e molti problemi di morso lievi o moderati, e per alcuni casi più complessi con una serie più lunga. Problemi di morso gravi, grandi discrepanze tra le arcate o denti che richiedono grandi rotazioni si trattano meglio in altro modo. Valutiamo il tuo caso apertamente e te lo diciamo prima che tu ti impegni.' },
      { question: 'Quanto dura il trattamento?', answer: 'Dipende da quanto devono muoversi i denti. I casi semplici possono durare alcuni mesi, quelli più complessi di più. Il piano di trattamento ti mostra il numero approssimativo di allineatori e la durata prevista prima che si produca qualcosa. Portare gli allineatori come indicato è il fattore più importante per rispettare i tempi.' },
      { question: 'Quante ore al giorno devo portarli?', answer: 'Circa 20–22 ore al giorno. Toglili solo per mangiare, per bere qualcosa che non sia acqua e per pulire i denti. Se gli allineatori restano fuori troppo a lungo, i denti non si muovono come previsto e il trattamento si allunga.' },
      { question: 'Gli allineatori fanno male?', answer: 'La maggior parte delle persone sente pressione o tensione per uno o due giorni quando passa a un nuovo allineatore. Indica che funziona, e passa presto. Le mascherine sono lisce, quindi non graffiano le guance come possono fare gli attacchi. Se un bordo ti dà fastidio, diccelo e lo leviganmo.' },
      { question: 'Posso mangiare e bere normalmente?', answer: 'Sì, perché togli gli allineatori per mangiare. Mentre li porti, bevi solo acqua. Dopo aver mangiato, lavati i denti prima di rimetterli, perché cibo e zucchero non restino sui denti.' },
      { question: 'Cosa sono gli attachment?', answer: 'Gli attachment sono piccoli rilievi del colore del dente incollati su alcuni denti. Danno all’allineatore un punto di presa per muovere i denti con più precisione. Non ogni caso ne ha bisogno. Se il tuo ne ha bisogno, si pianificano in anticipo e si rimuovono alla fine del trattamento.' },
      { question: 'Ogni quanto devo venire per i controlli?', answer: 'Il calendario dei controlli lo concordiamo insieme prima di iniziare, in base al tuo caso e a da dove arrivi. I controlli verificano che i denti si muovano secondo il piano e che gli allineatori calzino bene. Se tra un controllo e l’altro qualcosa non calza o un dente resta indietro, contattaci e ti consigliamo.' },
      { question: 'Servono mascherine di contenzione dopo gli allineatori?', answer: 'Sì. Dopo il trattamento, i denti tendono naturalmente a tornare indietro. Le mascherine di contenzione li tengono nella nuova posizione mentre osso e gengive si stabilizzano. Il dentista ti dice quanto spesso portarle. Molte persone continuano a portarle di notte a lungo per proteggere il risultato.' },
      { question: 'Gli allineatori possono correggere denti spostati dopo l’apparecchio?', answer: 'Spesso sì. La recidiva dopo un precedente trattamento ortodontico è uno dei motivi più frequenti per cui gli adulti scelgono gli allineatori. Valutiamo quanto si sono spostati i denti e se gli allineatori possono correggerlo, poi pianifichiamo una serie per riallinearli, seguita dalla contenzione per mantenerli.' },
      { question: 'Cosa comprende il preventivo?', answer: 'Il preventivo scritto dettagliato mostra il trattamento con allineatori, ogni trattamento necessario prima, come otturazioni o una pulizia, i controlli previsti e la contenzione, ciascuno indicato chiaramente. Una volta iniziato il trattamento, non si aggiunge nulla che non abbiamo discusso prima con te.' },
    ],
  },
};

export default function AlignersPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="aligners"
      heroImage={images.results[5]?.[0] ?? images.heroAfter}
      whatImage={images.results[6]?.[0] ?? images.heroAfter}
    />
  );
}
