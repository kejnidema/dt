import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Trajtimi i kanalit të rrënjës',
    eyebrow: 'Trajtime të përgjithshme · Shqipëri',
    subtitle: 'Heq infeksionin nga brenda dhëmbit, qetëson dhimbjen dhe ruan dhëmbin natyral, zakonisht në një ose dy seanca me anestezi lokale.',
    lead: 'Infeksioni hiqet nga brenda dhëmbit, dhimbja qetësohet dhe dhëmbi natyral ruhet, me një kurorë që e mbron kur nevojitet.',
    kicker: 'Trajtim kanali në Tiranë, Shqipëri',
    articleTitle: 'Trajtim kanali në Tiranë: ruani dhëmbin, ndalni dhimbjen',
    intro: [
      'Trajtimi i kanalit do të thotë heqja e indit të infektuar ose të përflakur nga brenda dhëmbit, për të qetësuar dhimbjen dhe për ta ruajtur dhëmbin.',
      'Brenda çdo dhëmbi ndodhet pulpa: nerva dhe enë gjaku që kalojnë nëpër kanale të ngushta në rrënjë. Kur një karies i thellë, një plasaritje ose punime të përsëritura i lejojnë bakteret ta arrijnë pulpën, ajo përflaket ose infektohet. Nuk shërohet vetë, dhe infeksioni mund të përhapet në kockën rreth rrënjës.',
      'Në Veneer Clinic, trajtimi i kanalit kushton 100 € për dhëmb dhe përfundon brenda një qëndrimi prej 1–2 ditësh.',
    ],
    sections: [
      {
        title: 'Ruajtja e dhëmbit natyral',
        intro: [
          'Për një dhëmb të infektuar, alternativa e trajtimit të kanalit zakonisht është heqja. Heqja e dhëmbit e mbyll dhimbjen, por lë një boshllëk që më pas kërkon implant, urë ose protezë. Ruajtja e dhëmbit tuaj, me rrënjën e vet në kockën e vet, është pothuajse gjithmonë rezultati më i mirë afatgjatë kur dhëmbi mund të shpëtohet.',
          'Prandaj fillimisht kontrollojmë nëse trajtimi i kanalit është realist. Nëse dhëmbi është çarë nën mish, ka shumë pak strukturë për t’u rindërtuar ose ka humbur mbështetjen e kockës, jua themi para se të nisim dhe ju shpjegojmë hapur alternativat, përfshirë një implant MegaGen.',
        ],
      },
      {
        title: 'Më pak i frikshëm nga sa thuhet',
        intro: [
          'Trajtimi i kanalit ka famë si procedurë e dhimbshme, por dhimbja që njerëzit mbajnë mend zakonisht vjen nga infeksioni, jo nga trajtimi. Me anestezi lokale, procedura ndihet pak a shumë si një mbushje e madhe. Shumica e pacientëve e vënë re që dhimbja therëse me të cilën erdhën zhduket sapo hiqet indi i infektuar.',
        ],
      },
      {
        title: 'I planifikuar me kujdes',
        intro: [
          'Çdo trajtim kanali në Veneer Clinic nis me imazheri. Grafia panoramike dhe një radiografi e zakonshme tregojnë rrënjët dhe çdo infeksion në majat e tyre. Për dhëmbë me kanale të përkulura, shtesë ose të kalcifikuara, ose për një trajtim të mëparshëm që ka dështuar, një skanim 3D CT tregon në detaje anatominë e kanaleve para se të nisim, që të mos humbasë asgjë.',
          'Skanimi bëhet vetëm kur rasti juaj e kërkon, dhe është falas për pacientët që trajtohen te ne.',
        ],
      },
      {
        title: 'Kurora është pjesë e planit',
        intro: [
          'Pasi brendësia e dhëmbit pastrohet dhe mbyllet, dhëmbi është më i brishtë se më parë. Dhëmbët e përparmë shpesh rindërtohen me mbushje. Dhëmballët dhe paradhëmballët, që mbajnë pjesën më të madhe të forcës së përtypjes, zakonisht kanë nevojë për kurorë që të mos thyhen.',
          'Në Veneer Clinic kurorat punohen prej zirkoni Made in Germany ose E-max, në laborator, dhe kurora është në ofertën e detajuar me shkrim që në fillim, jo e shtuar më vonë.',
        ],
      },
      {
        title: 'Si bëhet trajtimi i kanalit të rrënjës?',
        intro: ['Trajtimi i kanalit bëhet me anestezi lokale, zakonisht në një ose dy seanca. Qëllimi është i thjeshtë: të hiqet gjithçka e infektuar nga brenda dhëmbit, të dezinfektohen plotësisht kanalet dhe të mbyllen që bakteret të mos rikthehen.'],
        inline: [
          { title: 'Mpirja dhe izolimi i dhëmbit.', text: 'Zona mpihet dhe kontrollojmë që të jetë plotësisht e mpirë para se të nisim. Pastaj dhëmbi izolohet nga pështyma, sepse kanalet duhet të mbeten sa më të pastra gjatë gjithë trajtimit.' },
          { title: 'Hapja e dhëmbit.', text: 'Bëhet një hapje e vogël në pjesën e sipërme të dhëmbit për të arritur dhomën e pulpës. Në të njëjtën kohë hiqet çdo karies ose material i vjetër mbushjeje.' },
          { title: 'Pastrimi dhe formësimi i kanaleve.', text: 'Çdo kanal gjendet, matet dhe pastrohet në të gjithë gjatësinë e tij me instrumente të holla, duke hequr pulpën e infektuar. Kanalet formësohen që të mund të dezinfektohen dhe të mbushen si duhet. Kjo është pjesa më e rëndësishme e trajtimit: një kanal që nuk gjendet ose nuk pastrohet deri në fund është arsyeja më e zakonshme pse një trajtim kanali dështon.' },
          { title: 'Dezinfektimi.', text: 'Kanalet shpëlahen vazhdimisht me solucione dezinfektuese për të vrarë bakteret në zonat ku instrumentet nuk arrijnë. Kur infeksioni është i madh, mund të vendoset një ilaç brenda dhëmbit dhe dhëmbi të mbyllet deri në seancën tjetër, që infeksioni të ketë kohë të qetësohet.' },
          { title: 'Mbushja dhe mbyllja.', text: 'Kur kanalet janë të pastra dhe të thata, mbushen me një material biokompatibël dhe një ngjitës që i mbyll plotësisht. Pastaj mbyllet hapja e qasjes.' },
          { title: 'Rindërtimi i dhëmbit.', text: 'Hapi i fundit është mbrojtja e dhëmbit. Dhëmbët e përparmë shpesh rindërtohen me mbushje me kompozit. Dhëmbët e pasmë zakonisht kanë nevojë për kurorë prej zirkoni Made in Germany ose E-max, e punuar në laborator dhe e vendosur në një takim të mëvonshëm.' },
          { title: 'Ritrajtimi i kanalit.', text: 'Nëse një dhëmb i trajtuar diku tjetër dhemb ose shfaq sërish infeksion, trajtimi i kanalit shpesh mund të përsëritet. Hiqet materiali i vjetër, kanalet pastrohen sërish dhe trajtohet çdo kanal që nuk ishte gjetur herën e parë. Këtu skanimi 3D është veçanërisht i dobishëm.' },
        ],
      },
    ],
    stats: [
      { value: '1–2', label: 'Seanca' },
      { value: 'Lokale', label: 'Anestezi' },
      { value: 'Kurorë', label: 'Mbrojtje për dhëmbët e pasmë' },
      { value: '60–90 min', label: 'Për seancë' },
    ],
    priceTitle: 'Çmimi',
    priceNote: 'Për dhëmb',
    whatTitle: 'Çfarë është trajtimi i kanalit?',
    what: [
      'Trajtimi i kanalit heq pulpën e infektuar ose të përflakur nga brenda dhëmbit, pastron dhe dezinfekton kanalet e rrënjës dhe i mbyll, që bakteret të mos rikthehen.',
      'Bëhet me anestezi lokale, në një ose dy seanca. Pas trajtimit dhëmbi rindërtohet: me mbushje te dhëmbët e përparmë, dhe zakonisht me kurorë te dhëmbët e pasmë.',
    ],
    calloutTitle: 'Dhëmbët e pasmë zakonisht kanë nevojë për kurorë',
    calloutText:
      'Një dhëmb me kanal të trajtuar është më i brishtë. Te dhëmballët dhe paradhëmballët, kurora e mbron nga thyerja. E planifikojmë që në fillim, prej zirkoni Made in Germany ose E-max, ndaj është në ofertë para se të nisë trajtimi.',
    compareTitle: 'Mundësitë tuaja',
    compareIntro: 'Në varësi të dhëmbit, këto janë rrugët realiste:',
    compare: [
      { id: 'root-canal', tag: 'Më e zakonshmja', title: 'Trajtim kanali', text: 'Kanalet pastrohen dhe mbyllen, dhe dhëmbi juaj natyral ruhet. Te ritrajtimi, edhe kanalet e patrajtuara më parë.' },
      { id: 'crown-zirconia', tag: 'Për dhëmbët e pasmë', title: 'Kurorë zirkoni', text: 'Mbron dhëmbin e trajtuar nga thyerja. Rruga standarde për dhëmballët dhe paradhëmballët.' },
      { id: 'implant-megagen', tag: 'Kur nuk shpëtohet', title: 'Heqje dhe implant', text: 'Kur dhëmbi nuk mund të shpëtohet, hiqet dhe zëvendësohet me implant MegaGen pas rreth 6 muajsh shërim.' },
    ],
    fitTitle: 'Kur keni nevojë për trajtim kanali?',
    fitIntro: 'Trajtimi i kanalit zakonisht rekomandohet nëse keni:',
    fit: [
      'Një dhimbje therëse ose të zgjatur, sidomos natën ose kur shtriheni',
      'Dhimbje nga i nxehti ose i ftohti që vazhdon gjatë pasi keni mbaruar së ngrëni ose pirë',
      'Mish të fryrë, një puçërr në mish ose shije të keqe nga një dhëmb i infektuar',
      'Një karies që ka arritur nervin e dhëmbit ose është shumë afër tij',
      'Një dhëmb që është bërë gri ose i errët pas një goditjeje ose një mbushjeje të madhe',
      'Një dhëmb të trajtuar më parë që ka filluar sërish të dhembë ose është infektuar',
    ],
    fitNote:
      'Nëse dhëmbi është çarë, ka shumë pak strukturë për t’u rindërtuar ose ka humbur mbështetjen e kockës, trajtimi i kanalit nuk do ta shpëtojë. Jua themi para se të nisim dhe ju shpjegojmë alternativat.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'Trajtimi i kanalit zakonisht përfundon në një ose dy seanca, në varësi të dhëmbit dhe sa i përhapur është infeksioni:',
    steps: [
      { title: 'Diagnoza dhe imazheria', text: 'Ekzaminojmë dhëmbin dhe bëjmë radiografi, ose skanim 3D për kanale komplekse, falas me trajtimin tuaj.' },
      { title: 'Anestezi lokale', text: 'Zona mpihet dhe kontrollohet para se të nisim. Trajtimi ndihet si një mbushje e madhe.' },
      { title: 'Pastrimi dhe dezinfektimi', text: 'Pulpa e infektuar hiqet, çdo kanal pastrohet në gjithë gjatësinë dhe shpëlahet disa herë për të vrarë bakteret.' },
      { title: 'Mbushja dhe mbyllja', text: 'Kanalet e pastra mbushen dhe mbyllen që bakteret të mos rikthehen. Rastet me shumë infeksion mund të kërkojnë dy seanca.' },
      { title: 'Mbrojtja e dhëmbit', text: 'Dhëmbët e përparmë zakonisht marrin mbushje. Ata të pasmë marrin kurorë prej zirkoni Made in Germany ose E-max, e punuar në laborator.' },
    ],
    whyBandTitle: 'Pse Veneer Clinic për trajtimin e kanalit?',
    whyBandText:
      'Përpiqemi ta ruajmë dhëmbin tuaj natyral dhe ju themi hapur kur trajtimi i kanalit nuk do të funksionojë. Rastet komplekse planifikohen me skanim 3D, kurora është pjesë e planit që në ditën e parë dhe çdo hap është në ofertën e detajuar me shkrim. Çmimi që ju japim është çmimi që paguani.',
    caseText: 'Dhëmb natyral i ruajtur',
    faq: [
      { question: 'Sa kushton trajtimi i kanalit?', answer: 'Trajtimi i kanalit kushton 100 € për dhëmb. Skanimi 3D, kur nevojitet për kanale komplekse, është falas me trajtimin. Nëse dhëmbi ka nevojë për kurorë pas trajtimit, ajo shfaqet veçmas në ofertë: kurora zirkoni Made in Germany kushton 200 € dhe kurora E-max 300 € për dhëmb.' },
      { question: 'A dhemb trajtimi i kanalit?', answer: 'Vetë trajtimi nuk duhet të dhembë. Dhëmbi mpihet dhe shumica e pacientëve thonë se ndihet si një mbushje e madhe. Dhimbja që lidhet me trajtimin e kanalit zakonisht vjen nga infeksioni para trajtimit. Sapo hiqet indi i infektuar, ajo dhimbje therëse zakonisht zhduket. Më pas, dhëmbi mund të jetë i ndjeshëm për disa ditë, sidomos kur kafshoni. Kjo është normale dhe zakonisht kontrollohet mirë me qetësues.' },
      { question: 'Sa seanca nevojiten?', answer: 'Zakonisht një ose dy, brenda një qëndrimi prej 1–2 ditësh. Shumë dhëmbë mund të pastrohen, dezinfektohen dhe mbyllen në një seancë të vetme. Nëse infeksioni është i madh ose kanalet janë komplekse, mund të vendosim një ilaç, ta mbyllim dhëmbin dhe ta përfundojmë trajtimin në një seancë të dytë, pasi të jetë qetësuar infeksioni. Dhëmbët e pasmë më pas kanë nevojë për kurorë, e cila punohet në laborator dhe vendoset në një takim të mëvonshëm.' },
      { question: 'A më duhet kurorë pas trajtimit të kanalit?', answer: 'Te dhëmbët e pasmë, pothuajse gjithmonë. Dhëmballët dhe paradhëmballët mbajnë pjesën më të madhe të forcës së përtypjes, dhe një dhëmb me kanal të trajtuar është më i brishtë. Pa kurorë mund të plasaritet ose të çahet, ndonjëherë pa mundësi riparimi. Dhëmbët e përparmë, që mbajnë më pak forcë, shpesh rindërtohen me mbushje me kompozit. Në Veneer Clinic kurorat punohen prej zirkoni Made in Germany ose E-max. Kurora planifikohet që në fillim dhe shfaqet në ofertën me shkrim para se të nisë trajtimi.' },
      { question: 'A është më mirë ta heq dhëmbin dhe të vendos implant?', answer: 'Nëse dhëmbi mund të shpëtohet, ruajtja e tij zakonisht është zgjedhja më e mirë. Dhëmbi juaj, në kockën tuaj dhe me ligamentin e vet, është i vështirë për t’u zëvendësuar. Implanti është zëvendësim i shkëlqyer kur dhëmbi nuk shpëtohet, për shembull kur është çarë nën mish, ka shumë pak strukturë ose ka humbur mbështetjen e kockës. Përdorim implante MegaGen, që kanë nevojë për rreth gjashtë muaj shërim para kurorës përfundimtare. Ju shpjegojmë hapur të dyja mundësitë, me parashikimin realist për dhëmbin tuaj.' },
      { question: 'Sa zgjat një dhëmb me kanal të trajtuar?', answer: 'Me trajtim të kujdesshëm dhe kurorë të përshtatshme, shumë vite, shpesh gjithë jetën. Dy gjërat më të rëndësishme janë sa mirë janë pastruar dhe mbyllur kanalet dhe nëse dhëmbi mbrohet nga thyerja. Pas kësaj, ka nevojë për të njëjtin kujdes si çdo dhëmb tjetër: larje, pastrim ndërmjet dhëmbëve dhe kontrolle të rregullta.' },
      { question: 'A mund të ribëhet një trajtim kanali që ka dështuar?', answer: 'Shpesh po. Nëse një dhëmb i trajtuar në të kaluarën fillon sërish të dhembë ose infektohet, ritrajtimi mund ta shpëtojë. Hiqet materiali i vjetër, kanalet pastrohen dhe dezinfektohen sërish, dhe trajtohet çdo kanal që nuk ishte gjetur herën e parë. Këtu skanimi 3D është veçanërisht i dobishëm për të parë anatominë e plotë të kanaleve. Nëse ritrajtimi ka pak gjasa të ketë sukses, jua themi para se të nisim dhe diskutojmë alternativat.' },
      { question: 'A më duhet skanim 3D për trajtimin e kanalit?', answer: 'Jo gjithmonë. Për shumë dhëmbë mjafton një radiografi e zakonshme. Skanimi 3D është i dobishëm për dhëmbë me kanale të përkulura, shtesë ose të kalcifikuara, për trajtime të dështuara dhe kur infeksioni nuk duket qartë në radiografi. Tregon në detaje anatominë e kanaleve dhe kockën rreth rrënjës. Bëhet vetëm kur rasti juaj e kërkon, dhe për pacientët tanë është falas.' },
      { question: 'Pse më dhemb dhëmbi pas trajtimit?', answer: 'Indet rreth rrënjës kanë qenë të përflakura para trajtimit, dhe pastrimi i kanaleve i ngacmon edhe pak. Kanë nevojë për disa ditë që të qetësohen. Ndjesia më e zakonshme është shqetësimi kur kafshoni. Shmangni ushqimet e forta nga ajo anë dhe merrni qetësuesit sipas këshillës. Na kontaktoni nëse dhimbja shtohet pas disa ditësh, nëse shfaqet ënjtje ose nëse dhëmbi është ende shumë i ndjeshëm pas një jave.' },
      { question: 'Kur mund të kthehem në punë ose të fluturoj?', answer: 'Shumica e pacientëve kthehen në aktivitet normal po atë ditë ose të nesërmen. Trajtimi i kanalit nuk kërkon pushim, përveç rasteve kur ka ënjtje të madhe. Mpirja mund të zgjasë disa orë, ndaj nëse keni fluturim, mund ta planifikoni pas seancës së fundit pa problem.' },
      { question: 'A do ta ndryshojë dhëmbi ngjyrën?', answer: 'Një dhëmb që ka humbur nervin mund të errësohet gradualisht me kohë, sidomos dhëmbët e përparmë që kanë pësuar goditje. Te dhëmbët e pasmë, kurora e mbulon plotësisht. Te dhëmbët e përparmë, nëse errësimi bëhet i dukshëm, ka mundësi për të përmirësuar ngjyrën, të cilat dentisti mund t’i vlerësojë bashkë me ju.' },
      { question: 'Çfarë përfshin oferta për trajtimin e kanalit?', answer: 'Oferta e detajuar me shkrim përfshin trajtimin e kanalit për çdo dhëmb dhe mbushjen ose kurorën që do ta mbrojë dhëmbin, secila në rresht më vete dhe me materialin e kurorës të shënuar. Nëse nevojitet një seancë e dytë, shpjegohet paraprakisht. Pasi të nisë trajtimi, nuk shtohet asgjë që nuk e kemi diskutuar më parë me ju.' },
    ],
  },
  en: {
    name: 'Root Canal Treatment',
    eyebrow: 'General treatments · Albania',
    subtitle: 'Removes infection from inside the tooth, relieves pain and saves your natural tooth, usually in one or two sessions under local anaesthesia.',
    lead: 'The infection is removed from inside the tooth, the pain settles and your natural tooth is saved, with a crown to protect it when needed.',
    kicker: 'Root canal treatment in Tirana, Albania',
    articleTitle: 'Root canal treatment in Tirana: save the tooth, stop the pain',
    intro: [
      'Root canal treatment means removing infected or inflamed tissue from inside the tooth, to relieve pain and keep the tooth.',
      'Inside every tooth is the pulp: nerves and blood vessels running through narrow canals in the root. When deep decay, a crack or repeated dental work lets bacteria reach the pulp, it becomes inflamed or infected. It does not heal on its own, and the infection can spread to the bone around the root.',
      'At Veneer Clinic, root canal treatment costs €100 per tooth and is completed within a 1–2 day stay.',
    ],
    sections: [
      {
        title: 'Keeping your natural tooth',
        intro: [
          'For an infected tooth, the alternative to a root canal is usually extraction. Extraction ends the pain but leaves a gap that later needs an implant, a bridge or a denture. Keeping your own tooth, with its own root in its own bone, is almost always the best long-term outcome when the tooth can be saved.',
          'That is why we first check whether root canal treatment is realistic. If the tooth is cracked below the gum, has too little structure to rebuild or has lost its bone support, we tell you before starting and explain the alternatives openly, including a MegaGen implant.',
        ],
      },
      {
        title: 'Less frightening than its reputation',
        intro: [
          'Root canal treatment has a reputation for being painful, but the pain people remember usually comes from the infection, not the treatment. Under local anaesthesia the procedure feels much like a large filling. Most patients notice that the throbbing pain they came in with disappears once the infected tissue is removed.',
        ],
      },
      {
        title: 'Carefully planned',
        intro: [
          'Every root canal at Veneer Clinic starts with imaging. The panoramic and a standard X-ray show the roots and any infection at their tips. For teeth with curved, extra or calcified canals, or a previous treatment that has failed, a 3D CT scan shows the canal anatomy in detail before we start, so nothing is missed.',
          'The scan is only taken when your case needs it, and it is free for patients treated with us.',
        ],
      },
      {
        title: 'The crown is part of the plan',
        intro: [
          'Once the inside of the tooth is cleaned and sealed, the tooth is more brittle than before. Front teeth are often rebuilt with a filling. Molars and premolars, which carry most of the chewing force, usually need a crown so they do not fracture.',
          'At Veneer Clinic crowns are made from Made in Germany zirconia or E-max, in the lab, and the crown is in your detailed written quote from the start, not added later.',
        ],
      },
      {
        title: 'How root canal treatment is done',
        intro: ['Root canal treatment is done under local anaesthesia, usually in one or two sessions. The goal is simple: remove everything infected from inside the tooth, fully disinfect the canals and seal them so bacteria cannot return.'],
        inline: [
          { title: 'Numbing and isolating the tooth.', text: 'The area is numbed and we check it is fully numb before starting. The tooth is then isolated from saliva, because the canals need to stay as clean as possible throughout the treatment.' },
          { title: 'Opening the tooth.', text: 'A small opening is made in the top of the tooth to reach the pulp chamber. At the same time any decay or old filling material is removed.' },
          { title: 'Cleaning and shaping the canals.', text: 'Each canal is located, measured and cleaned along its full length with fine instruments, removing the infected pulp. The canals are shaped so they can be disinfected and filled properly. This is the most important part of the treatment: a canal that is missed or not cleaned to the end is the most common reason a root canal fails.' },
          { title: 'Disinfection.', text: 'The canals are rinsed repeatedly with disinfecting solutions to kill bacteria in areas instruments cannot reach. When the infection is large, a medication may be placed inside the tooth and the tooth sealed until the next session, giving the infection time to settle.' },
          { title: 'Filling and sealing.', text: 'When the canals are clean and dry, they are filled with a biocompatible material and a sealer that closes them completely. The access opening is then closed.' },
          { title: 'Rebuilding the tooth.', text: 'The last step is protecting the tooth. Front teeth are often rebuilt with a composite filling. Back teeth usually need a Made in Germany zirconia or E-max crown, made in the lab and fitted at a later appointment.' },
          { title: 'Root canal retreatment.', text: 'If a tooth treated elsewhere hurts or shows infection again, the root canal can often be redone. The old material is removed, the canals cleaned again and any canal missed the first time is treated. This is where the 3D scan is especially useful.' },
        ],
      },
    ],
    stats: [
      { value: '1–2', label: 'Sessions' },
      { value: 'Local', label: 'Anaesthesia' },
      { value: 'Crown', label: 'Protection for back teeth' },
      { value: '60–90 min', label: 'Per session' },
    ],
    priceTitle: 'Price',
    priceNote: 'Per tooth',
    whatTitle: 'What is root canal treatment?',
    what: [
      'Root canal treatment removes infected or inflamed pulp from inside the tooth, cleans and disinfects the root canals and seals them so bacteria cannot return.',
      'It is done under local anaesthesia, in one or two sessions. Afterwards the tooth is rebuilt: with a filling on front teeth, and usually with a crown on back teeth.',
    ],
    calloutTitle: 'Back teeth usually need a crown',
    calloutText:
      'A root-treated tooth is more brittle. On molars and premolars, a crown protects it from fracturing. We plan it from the start, in Made in Germany zirconia or E-max, so it is in your quote before treatment begins.',
    compareTitle: 'Your options',
    compareIntro: 'Depending on the tooth, these are the realistic paths:',
    compare: [
      { id: 'root-canal', tag: 'Most common', title: 'Root canal', text: 'The canals are cleaned and sealed, and your natural tooth is kept. With retreatment, previously missed canals too.' },
      { id: 'crown-zirconia', tag: 'For back teeth', title: 'Zirconia crown', text: 'Protects the treated tooth from fracturing. The standard path for molars and premolars.' },
      { id: 'implant-megagen', tag: 'When it cannot be saved', title: 'Extraction and implant', text: 'When the tooth cannot be saved, it is removed and replaced with a MegaGen implant after about 6 months of healing.' },
    ],
    fitTitle: 'When do you need a root canal?',
    fitIntro: 'Root canal treatment is usually recommended if you have:',
    fit: [
      'Throbbing or lingering pain, especially at night or when lying down',
      'Pain from hot or cold that lasts long after you finish eating or drinking',
      'Swollen gum, a pimple on the gum or a bad taste from an infected tooth',
      'Decay that has reached the nerve of the tooth or is very close to it',
      'A tooth that has turned grey or dark after a knock or a large filling',
      'A previously treated tooth that has started hurting again or become infected',
    ],
    fitNote:
      'If the tooth is cracked, has too little structure to rebuild or has lost its bone support, a root canal will not save it. We tell you before starting and explain the alternatives.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'A root canal is usually completed in one or two sessions, depending on the tooth and how widespread the infection is:',
    steps: [
      { title: 'Diagnosis and imaging', text: 'We examine the tooth and take an X-ray, or a 3D scan for complex canals, free with your treatment.' },
      { title: 'Local anaesthesia', text: 'The area is numbed and checked before we start. The treatment feels like a large filling.' },
      { title: 'Cleaning and disinfection', text: 'The infected pulp is removed, each canal cleaned along its full length and rinsed several times to kill bacteria.' },
      { title: 'Filling and sealing', text: 'The clean canals are filled and sealed so bacteria cannot return. Heavily infected cases may need two sessions.' },
      { title: 'Protecting the tooth', text: 'Front teeth usually get a filling. Back teeth get a Made in Germany zirconia or E-max crown, made in the lab.' },
    ],
    whyBandTitle: 'Why Veneer Clinic for your root canal?',
    whyBandText:
      'We try to keep your natural tooth and tell you openly when a root canal will not work. Complex cases are planned with a 3D scan, the crown is part of the plan from day one and every step is in the detailed written quote. The price we give you is the price you pay.',
    caseText: 'A natural tooth saved',
    faq: [
      { question: 'How much does a root canal cost?', answer: 'Root canal treatment costs €100 per tooth. The 3D scan, when needed for complex canals, is free with your treatment. If the tooth needs a crown afterwards, it appears separately in your quote: a Made in Germany zirconia crown costs €200 and an E-max crown €300 per tooth.' },
      { question: 'Does a root canal hurt?', answer: 'The treatment itself should not hurt. The tooth is numbed and most patients say it feels like a large filling. The pain associated with root canals usually comes from the infection before treatment. Once the infected tissue is removed, that throbbing pain usually disappears. Afterwards the tooth may be tender for a few days, especially when biting. This is normal and usually well controlled with painkillers.' },
      { question: 'How many sessions are needed?', answer: 'Usually one or two, within a 1–2 day stay. Many teeth can be cleaned, disinfected and sealed in a single session. If the infection is large or the canals are complex, we may place a medication, seal the tooth and finish the treatment in a second session once the infection has settled. Back teeth then need a crown, which is made in the lab and fitted at a later appointment.' },
      { question: 'Do I need a crown after a root canal?', answer: 'On back teeth, almost always. Molars and premolars carry most of the chewing force, and a root-treated tooth is more brittle. Without a crown it can crack or split, sometimes beyond repair. Front teeth, which carry less force, are often rebuilt with a composite filling. At Veneer Clinic crowns are made from Made in Germany zirconia or E-max. The crown is planned from the start and appears in your written quote before treatment begins.' },
      { question: 'Is it better to remove the tooth and get an implant?', answer: 'If the tooth can be saved, keeping it is usually the better choice. Your own tooth, in your own bone with its own ligament, is hard to replace. An implant is an excellent replacement when the tooth cannot be saved, for example when it is cracked below the gum, has too little structure or has lost its bone support. We use MegaGen implants, which need about six months of healing before the final crown. We explain both options openly, with a realistic prognosis for your tooth.' },
      { question: 'How long does a root-treated tooth last?', answer: 'With careful treatment and a suitable crown, many years, often a lifetime. The two most important things are how well the canals were cleaned and sealed and whether the tooth is protected from fracture. After that it needs the same care as any other tooth: brushing, cleaning between teeth and regular check-ups.' },
      { question: 'Can a failed root canal be redone?', answer: 'Often, yes. If a tooth treated in the past starts hurting again or becomes infected, retreatment can save it. The old material is removed, the canals cleaned and disinfected again, and any canal missed the first time is treated. This is where the 3D scan is especially useful to see the full canal anatomy. If retreatment is unlikely to succeed, we tell you before starting and discuss the alternatives.' },
      { question: 'Do I need a 3D scan for a root canal?', answer: 'Not always. For many teeth a standard X-ray is enough. The 3D scan is useful for teeth with curved, extra or calcified canals, for failed treatments and when the infection is not clearly visible on the X-ray. It shows the canal anatomy and the bone around the root in detail. It is only taken when your case needs it, and it is free for our patients.' },
      { question: 'Why does my tooth hurt after treatment?', answer: 'The tissues around the root were inflamed before treatment, and cleaning the canals irritates them a little more. They need a few days to settle. The most common sensation is discomfort when biting. Avoid hard foods on that side and take painkillers as advised. Contact us if the pain gets worse after a few days, if swelling appears or if the tooth is still very tender after a week.' },
      { question: 'When can I go back to work or fly?', answer: 'Most patients return to normal activity the same day or the next. A root canal does not need time off unless there is significant swelling. The numbness can last a few hours, so if you have a flight, you can plan it after your last session without any problem.' },
      { question: 'Will the tooth change colour?', answer: 'A tooth that has lost its nerve can gradually darken over time, especially front teeth that have had a knock. On back teeth, the crown covers it completely. On front teeth, if the darkening becomes visible, there are ways to improve the colour, which the dentist can assess with you.' },
      { question: 'What does the quote for a root canal include?', answer: 'Your detailed written quote includes the root canal for each tooth and the filling or crown that will protect it, each on its own line with the crown material stated. If a second session is needed, it is explained in advance. Once treatment starts, nothing is added that we have not discussed with you first.' },
    ],
  },
  de: {
    name: 'Wurzelkanalbehandlung',
    eyebrow: 'Allgemeine Behandlungen · Albanien',
    subtitle: 'Entfernt die Entzündung aus dem Zahninneren, lindert Schmerzen und erhält Ihren natürlichen Zahn, meist in ein oder zwei Sitzungen unter örtlicher Betäubung.',
    lead: 'Die Entzündung wird aus dem Zahninneren entfernt, der Schmerz lässt nach und Ihr natürlicher Zahn bleibt erhalten, bei Bedarf mit einer schützenden Krone.',
    kicker: 'Wurzelkanalbehandlung in Tirana, Albanien',
    articleTitle: 'Wurzelkanalbehandlung in Tirana: Zahn erhalten, Schmerz stoppen',
    intro: [
      'Eine Wurzelkanalbehandlung entfernt entzündetes oder infiziertes Gewebe aus dem Zahninneren, um Schmerzen zu lindern und den Zahn zu erhalten.',
      'In jedem Zahn liegt die Pulpa: Nerven und Blutgefäße, die durch enge Kanäle in der Wurzel verlaufen. Wenn tiefe Karies, ein Riss oder wiederholte Behandlungen Bakterien bis zur Pulpa lassen, entzündet oder infiziert sie sich. Sie heilt nicht von selbst, und die Infektion kann sich in den Knochen um die Wurzel ausbreiten.',
      'In der Veneer Clinic kostet eine Wurzelkanalbehandlung 100 € pro Zahn und ist innerhalb eines Aufenthalts von 1–2 Tagen abgeschlossen.',
    ],
    sections: [
      {
        title: 'Den natürlichen Zahn erhalten',
        intro: [
          'Bei einem infizierten Zahn ist die Alternative zur Wurzelbehandlung meist die Extraktion. Sie beendet den Schmerz, hinterlässt aber eine Lücke, die später ein Implantat, eine Brücke oder eine Prothese braucht. Den eigenen Zahn mit seiner Wurzel im eigenen Knochen zu behalten, ist fast immer das beste Langzeitergebnis, wenn der Zahn zu retten ist.',
          'Deshalb prüfen wir zuerst, ob eine Wurzelbehandlung realistisch ist. Ist der Zahn unter dem Zahnfleisch gerissen, hat zu wenig Substanz für einen Aufbau oder seinen Knochenhalt verloren, sagen wir es Ihnen vor Beginn und erklären offen die Alternativen, einschließlich eines MegaGen-Implantats.',
        ],
      },
      {
        title: 'Weniger schlimm als ihr Ruf',
        intro: [
          'Die Wurzelbehandlung gilt als schmerzhaft, doch der Schmerz, an den sich Menschen erinnern, kommt meist von der Entzündung, nicht von der Behandlung. Unter örtlicher Betäubung fühlt sich der Eingriff ähnlich an wie eine große Füllung. Die meisten Patienten merken, dass der pochende Schmerz verschwindet, sobald das infizierte Gewebe entfernt ist.',
        ],
      },
      {
        title: 'Sorgfältig geplant',
        intro: [
          'Jede Wurzelbehandlung in der Veneer Clinic beginnt mit Bildgebung. Panoramaröntgen und ein normales Röntgenbild zeigen die Wurzeln und jede Entzündung an ihren Spitzen. Bei gekrümmten, zusätzlichen oder verkalkten Kanälen oder einer gescheiterten Vorbehandlung zeigt ein 3D-Scan die Kanalanatomie vor Beginn im Detail, damit nichts übersehen wird.',
          'Der Scan wird nur gemacht, wenn Ihr Fall ihn erfordert, und ist für Patienten in Behandlung bei uns kostenlos.',
        ],
      },
      {
        title: 'Die Krone gehört zum Plan',
        intro: [
          'Nach Reinigung und Versiegelung ist der Zahn spröder als vorher. Frontzähne werden oft mit einer Füllung aufgebaut. Backenzähne und Prämolaren, die den Großteil der Kaukraft tragen, brauchen meist eine Krone, damit sie nicht brechen.',
          'In der Veneer Clinic werden Kronen aus Zirkon Made in Germany oder E-max im Labor gefertigt, und die Krone steht von Anfang an in Ihrem detaillierten schriftlichen Angebot, nicht nachträglich.',
        ],
      },
      {
        title: 'So wird eine Wurzelkanalbehandlung durchgeführt',
        intro: ['Die Wurzelbehandlung erfolgt unter örtlicher Betäubung, meist in ein oder zwei Sitzungen. Das Ziel ist einfach: alles Infizierte aus dem Zahninneren entfernen, die Kanäle vollständig desinfizieren und versiegeln, damit keine Bakterien zurückkehren.'],
        inline: [
          { title: 'Betäubung und Isolierung.', text: 'Der Bereich wird betäubt und wir prüfen vor Beginn, dass er vollständig betäubt ist. Dann wird der Zahn vom Speichel isoliert, denn die Kanäle müssen während der ganzen Behandlung so sauber wie möglich bleiben.' },
          { title: 'Öffnen des Zahns.', text: 'Eine kleine Öffnung oben im Zahn führt zur Pulpakammer. Gleichzeitig werden Karies und altes Füllungsmaterial entfernt.' },
          { title: 'Reinigen und Formen der Kanäle.', text: 'Jeder Kanal wird gefunden, vermessen und auf ganzer Länge mit feinen Instrumenten gereinigt, wobei die infizierte Pulpa entfernt wird. Die Kanäle werden so geformt, dass sie richtig desinfiziert und gefüllt werden können. Das ist der wichtigste Teil: Ein übersehener oder nicht bis zum Ende gereinigter Kanal ist der häufigste Grund für das Scheitern einer Wurzelbehandlung.' },
          { title: 'Desinfektion.', text: 'Die Kanäle werden wiederholt mit desinfizierenden Lösungen gespült, um Bakterien dort abzutöten, wo Instrumente nicht hinkommen. Bei großer Entzündung kann ein Medikament in den Zahn gelegt und dieser bis zur nächsten Sitzung verschlossen werden, damit sich die Entzündung beruhigt.' },
          { title: 'Füllen und Versiegeln.', text: 'Sind die Kanäle sauber und trocken, werden sie mit einem biokompatiblen Material und einem Sealer vollständig verschlossen. Dann wird die Zugangsöffnung verschlossen.' },
          { title: 'Aufbau des Zahns.', text: 'Der letzte Schritt ist der Schutz des Zahns. Frontzähne werden oft mit einer Kompositfüllung aufgebaut. Seitenzähne brauchen meist eine Krone aus Zirkon Made in Germany oder E-max, im Labor gefertigt und bei einem späteren Termin eingesetzt.' },
          { title: 'Revision.', text: 'Schmerzt ein anderswo behandelter Zahn oder zeigt er erneut eine Entzündung, kann die Wurzelbehandlung oft wiederholt werden. Das alte Material wird entfernt, die Kanäle erneut gereinigt und jeder beim ersten Mal übersehene Kanal behandelt. Hier ist der 3D-Scan besonders hilfreich.' },
        ],
      },
    ],
    stats: [
      { value: '1–2', label: 'Sitzungen' },
      { value: 'Lokal', label: 'Betäubung' },
      { value: 'Krone', label: 'Schutz für Seitenzähne' },
      { value: '60–90 Min.', label: 'Pro Sitzung' },
    ],
    priceTitle: 'Preis',
    priceNote: 'Pro Zahn',
    whatTitle: 'Was ist eine Wurzelkanalbehandlung?',
    what: [
      'Die Wurzelkanalbehandlung entfernt entzündete oder infizierte Pulpa aus dem Zahninneren, reinigt und desinfiziert die Wurzelkanäle und versiegelt sie, damit keine Bakterien zurückkehren.',
      'Sie erfolgt unter örtlicher Betäubung in ein oder zwei Sitzungen. Danach wird der Zahn aufgebaut: mit einer Füllung bei Frontzähnen und meist mit einer Krone bei Seitenzähnen.',
    ],
    calloutTitle: 'Seitenzähne brauchen meist eine Krone',
    calloutText:
      'Ein wurzelbehandelter Zahn ist spröder. Bei Backenzähnen und Prämolaren schützt eine Krone vor dem Bruch. Wir planen sie von Anfang an, aus Zirkon Made in Germany oder E-max, sodass sie vor Behandlungsbeginn im Angebot steht.',
    compareTitle: 'Ihre Möglichkeiten',
    compareIntro: 'Je nach Zahn sind dies die realistischen Wege:',
    compare: [
      { id: 'root-canal', tag: 'Am häufigsten', title: 'Wurzelbehandlung', text: 'Die Kanäle werden gereinigt und versiegelt, Ihr natürlicher Zahn bleibt. Bei einer Revision auch zuvor übersehene Kanäle.' },
      { id: 'crown-zirconia', tag: 'Für Seitenzähne', title: 'Zirkonkrone', text: 'Schützt den behandelten Zahn vor dem Bruch. Der Standardweg für Backenzähne und Prämolaren.' },
      { id: 'implant-megagen', tag: 'Wenn er nicht zu retten ist', title: 'Extraktion und Implantat', text: 'Ist der Zahn nicht zu retten, wird er entfernt und nach etwa 6 Monaten Heilung durch ein MegaGen-Implantat ersetzt.' },
    ],
    fitTitle: 'Wann brauchen Sie eine Wurzelbehandlung?',
    fitIntro: 'Eine Wurzelbehandlung wird meist empfohlen bei:',
    fit: [
      'Pochendem oder anhaltendem Schmerz, besonders nachts oder im Liegen',
      'Schmerz durch Heißes oder Kaltes, der lange nach dem Essen oder Trinken anhält',
      'Geschwollenem Zahnfleisch, einer Fistel oder schlechtem Geschmack durch einen infizierten Zahn',
      'Karies, die den Nerv erreicht hat oder sehr nah daran ist',
      'Einem Zahn, der nach einem Schlag oder einer großen Füllung grau oder dunkel geworden ist',
      'Einem früher behandelten Zahn, der wieder schmerzt oder sich entzündet hat',
    ],
    fitNote:
      'Ist der Zahn gerissen, hat zu wenig Substanz für einen Aufbau oder seinen Knochenhalt verloren, rettet ihn eine Wurzelbehandlung nicht. Wir sagen es Ihnen vor Beginn und erklären die Alternativen.',
    stepsTitle: 'So läuft die Behandlung ab',
    stepsIntro: 'Eine Wurzelbehandlung ist meist in ein oder zwei Sitzungen abgeschlossen, je nach Zahn und Ausmaß der Entzündung:',
    steps: [
      { title: 'Diagnose und Bildgebung', text: 'Wir untersuchen den Zahn und machen ein Röntgenbild oder bei komplexen Kanälen einen 3D-Scan, kostenlos mit Ihrer Behandlung.' },
      { title: 'Örtliche Betäubung', text: 'Der Bereich wird betäubt und vor Beginn geprüft. Die Behandlung fühlt sich wie eine große Füllung an.' },
      { title: 'Reinigung und Desinfektion', text: 'Die infizierte Pulpa wird entfernt, jeder Kanal auf ganzer Länge gereinigt und mehrfach gespült, um Bakterien abzutöten.' },
      { title: 'Füllen und Versiegeln', text: 'Die sauberen Kanäle werden gefüllt und versiegelt, damit keine Bakterien zurückkehren. Stark entzündete Fälle brauchen eventuell zwei Sitzungen.' },
      { title: 'Schutz des Zahns', text: 'Frontzähne bekommen meist eine Füllung. Seitenzähne eine Krone aus Zirkon Made in Germany oder E-max, im Labor gefertigt.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für Ihre Wurzelbehandlung?',
    whyBandText:
      'Wir versuchen, Ihren natürlichen Zahn zu erhalten, und sagen Ihnen offen, wenn eine Wurzelbehandlung nicht funktionieren wird. Komplexe Fälle werden mit 3D-Scan geplant, die Krone gehört vom ersten Tag an zum Plan und jeder Schritt steht im detaillierten schriftlichen Angebot. Der Preis, den wir nennen, ist der Preis, den Sie zahlen.',
    caseText: 'Ein natürlicher Zahn erhalten',
    faq: [
      { question: 'Was kostet eine Wurzelbehandlung?', answer: 'Eine Wurzelkanalbehandlung kostet 100 € pro Zahn. Der 3D-Scan ist bei komplexen Kanälen mit Ihrer Behandlung kostenlos. Braucht der Zahn danach eine Krone, steht sie separat im Angebot: Eine Zirkonkrone Made in Germany kostet 200 €, eine E-max-Krone 300 € pro Zahn.' },
      { question: 'Tut eine Wurzelbehandlung weh?', answer: 'Die Behandlung selbst sollte nicht wehtun. Der Zahn wird betäubt, und die meisten Patienten sagen, es fühlt sich wie eine große Füllung an. Der mit Wurzelbehandlungen verbundene Schmerz kommt meist von der Entzündung vor der Behandlung. Sobald das infizierte Gewebe entfernt ist, verschwindet dieser pochende Schmerz meist. Danach kann der Zahn einige Tage empfindlich sein, besonders beim Beißen. Das ist normal und meist gut mit Schmerzmitteln zu kontrollieren.' },
      { question: 'Wie viele Sitzungen sind nötig?', answer: 'Meist ein oder zwei, innerhalb eines Aufenthalts von 1–2 Tagen. Viele Zähne können in einer einzigen Sitzung gereinigt, desinfiziert und versiegelt werden. Bei großer Entzündung oder komplexen Kanälen legen wir eventuell ein Medikament ein, verschließen den Zahn und beenden die Behandlung in einer zweiten Sitzung, wenn sich die Entzündung beruhigt hat. Seitenzähne brauchen danach eine Krone, die im Labor gefertigt und bei einem späteren Termin eingesetzt wird.' },
      { question: 'Brauche ich nach der Wurzelbehandlung eine Krone?', answer: 'Bei Seitenzähnen fast immer. Backenzähne und Prämolaren tragen den Großteil der Kaukraft, und ein wurzelbehandelter Zahn ist spröder. Ohne Krone kann er reißen oder brechen, manchmal irreparabel. Frontzähne, die weniger Kraft tragen, werden oft mit einer Kompositfüllung aufgebaut. In der Veneer Clinic werden Kronen aus Zirkon Made in Germany oder E-max gefertigt. Die Krone wird von Anfang an geplant und steht vor Behandlungsbeginn im schriftlichen Angebot.' },
      { question: 'Ist es besser, den Zahn zu ziehen und ein Implantat zu setzen?', answer: 'Ist der Zahn zu retten, ist ihn zu behalten meist die bessere Wahl. Ihr eigener Zahn, in Ihrem Knochen mit eigenem Halteapparat, ist schwer zu ersetzen. Ein Implantat ist ein ausgezeichneter Ersatz, wenn der Zahn nicht zu retten ist, etwa wenn er unter dem Zahnfleisch gerissen ist, zu wenig Substanz hat oder seinen Knochenhalt verloren hat. Wir verwenden MegaGen-Implantate, die etwa sechs Monate Heilung vor der definitiven Krone brauchen. Wir erklären beide Möglichkeiten offen, mit einer realistischen Prognose für Ihren Zahn.' },
      { question: 'Wie lange hält ein wurzelbehandelter Zahn?', answer: 'Bei sorgfältiger Behandlung und passender Krone viele Jahre, oft ein Leben lang. Die zwei wichtigsten Faktoren sind, wie gut die Kanäle gereinigt und versiegelt wurden und ob der Zahn vor Brüchen geschützt ist. Danach braucht er dieselbe Pflege wie jeder andere Zahn: Putzen, Reinigung der Zwischenräume und regelmäßige Kontrollen.' },
      { question: 'Kann eine gescheiterte Wurzelbehandlung wiederholt werden?', answer: 'Oft ja. Beginnt ein früher behandelter Zahn wieder zu schmerzen oder entzündet sich, kann eine Revision ihn retten. Das alte Material wird entfernt, die Kanäle erneut gereinigt und desinfiziert, und jeder beim ersten Mal übersehene Kanal wird behandelt. Hier ist der 3D-Scan besonders hilfreich, um die vollständige Kanalanatomie zu sehen. Hat eine Revision wenig Aussicht auf Erfolg, sagen wir es vor Beginn und besprechen die Alternativen.' },
      { question: 'Brauche ich für die Wurzelbehandlung einen 3D-Scan?', answer: 'Nicht immer. Für viele Zähne reicht ein normales Röntgenbild. Der 3D-Scan ist hilfreich bei gekrümmten, zusätzlichen oder verkalkten Kanälen, bei gescheiterten Behandlungen und wenn die Entzündung im Röntgenbild nicht klar sichtbar ist. Er zeigt Kanalanatomie und Knochen um die Wurzel im Detail. Er wird nur gemacht, wenn Ihr Fall ihn erfordert, und ist für unsere Patienten kostenlos.' },
      { question: 'Warum schmerzt mein Zahn nach der Behandlung?', answer: 'Das Gewebe um die Wurzel war vor der Behandlung entzündet, und die Reinigung der Kanäle reizt es noch etwas. Es braucht einige Tage, um sich zu beruhigen. Am häufigsten ist ein Unbehagen beim Beißen. Meiden Sie harte Speisen auf dieser Seite und nehmen Sie Schmerzmittel wie empfohlen. Kontaktieren Sie uns, wenn der Schmerz nach einigen Tagen zunimmt, eine Schwellung auftritt oder der Zahn nach einer Woche noch sehr empfindlich ist.' },
      { question: 'Wann kann ich wieder arbeiten oder fliegen?', answer: 'Die meisten Patienten sind am selben oder nächsten Tag wieder normal aktiv. Eine Wurzelbehandlung erfordert keine Auszeit, außer bei starker Schwellung. Die Betäubung kann einige Stunden anhalten, daher können Sie einen Flug problemlos nach Ihrer letzten Sitzung planen.' },
      { question: 'Verfärbt sich der Zahn?', answer: 'Ein Zahn ohne Nerv kann mit der Zeit allmählich dunkler werden, besonders Frontzähne nach einem Schlag. Bei Seitenzähnen deckt die Krone ihn vollständig ab. Bei Frontzähnen gibt es, falls die Verfärbung sichtbar wird, Möglichkeiten zur Farbverbesserung, die der Zahnarzt mit Ihnen beurteilen kann.' },
      { question: 'Was umfasst das Angebot für eine Wurzelbehandlung?', answer: 'Ihr detailliertes schriftliches Angebot umfasst die Wurzelbehandlung für jeden Zahn und die Füllung oder Krone, die ihn schützt, jeweils als eigene Position mit angegebenem Kronenmaterial. Ist eine zweite Sitzung nötig, wird das vorher erklärt. Nach Behandlungsbeginn kommt nichts hinzu, was wir nicht vorher mit Ihnen besprochen haben.' },
    ],
  },
  it: {
    name: 'Cura canalare',
    eyebrow: 'Trattamenti generali · Albania',
    subtitle: 'Rimuove l’infezione dall’interno del dente, calma il dolore e salva il dente naturale, di solito in una o due sedute in anestesia locale.',
    lead: 'L’infezione si rimuove dall’interno del dente, il dolore si calma e il dente naturale si salva, con una corona che lo protegge quando serve.',
    kicker: 'Cura canalare a Tirana, Albania',
    articleTitle: 'Cura canalare a Tirana: salva il dente, ferma il dolore',
    intro: [
      'La cura canalare significa rimuovere il tessuto infetto o infiammato dall’interno del dente, per calmare il dolore e conservare il dente.',
      'Dentro ogni dente c’è la polpa: nervi e vasi sanguigni che passano in canali stretti nella radice. Quando una carie profonda, una crepa o lavori ripetuti permettono ai batteri di raggiungere la polpa, questa si infiamma o si infetta. Non guarisce da sola, e l’infezione può diffondersi all’osso attorno alla radice.',
      'Alla Veneer Clinic, la cura canalare costa 100 € per dente e si completa in un soggiorno di 1–2 giorni.',
    ],
    sections: [
      {
        title: 'Conservare il dente naturale',
        intro: [
          'Per un dente infetto, l’alternativa alla cura canalare di solito è l’estrazione. L’estrazione elimina il dolore ma lascia uno spazio che poi richiede un impianto, un ponte o una protesi. Conservare il proprio dente, con la sua radice nel suo osso, è quasi sempre il miglior risultato a lungo termine quando il dente si può salvare.',
          'Per questo verifichiamo prima se la cura canalare è realistica. Se il dente è fratturato sotto la gengiva, ha troppo poca struttura per essere ricostruito o ha perso il sostegno osseo, te lo diciamo prima di iniziare e ti spieghiamo apertamente le alternative, compreso un impianto MegaGen.',
        ],
      },
      {
        title: 'Meno spaventosa della sua fama',
        intro: [
          'La cura canalare ha fama di essere dolorosa, ma il dolore che le persone ricordano di solito viene dall’infezione, non dal trattamento. In anestesia locale, la procedura si sente più o meno come un’otturazione grande. La maggior parte dei pazienti nota che il dolore pulsante con cui è arrivata scompare appena si rimuove il tessuto infetto.',
        ],
      },
      {
        title: 'Pianificata con cura',
        intro: [
          'Ogni cura canalare alla Veneer Clinic inizia con le immagini. La panoramica e una radiografia normale mostrano le radici e ogni infezione alle loro punte. Per denti con canali curvi, extra o calcificati, o per una cura precedente fallita, una TAC 3D mostra in dettaglio l’anatomia dei canali prima di iniziare, perché nulla sfugga.',
          'La scansione si fa solo quando il tuo caso la richiede, ed è gratuita per i pazienti in trattamento da noi.',
        ],
      },
      {
        title: 'La corona fa parte del piano',
        intro: [
          'Una volta pulito e sigillato l’interno, il dente è più fragile di prima. I denti anteriori spesso si ricostruiscono con un’otturazione. Molari e premolari, che sostengono gran parte della forza masticatoria, di solito hanno bisogno di una corona per non fratturarsi.',
          'Alla Veneer Clinic le corone si realizzano in zirconia Made in Germany o E-max, in laboratorio, e la corona è nel preventivo scritto dettagliato fin dall’inizio, non aggiunta dopo.',
        ],
      },
      {
        title: 'Come si fa la cura canalare',
        intro: ['La cura canalare si fa in anestesia locale, di solito in una o due sedute. L’obiettivo è semplice: rimuovere tutto ciò che è infetto dall’interno del dente, disinfettare completamente i canali e sigillarli perché i batteri non tornino.'],
        inline: [
          { title: 'Anestesia e isolamento del dente.', text: 'La zona viene anestetizzata e controlliamo che lo sia completamente prima di iniziare. Poi il dente si isola dalla saliva, perché i canali devono restare il più puliti possibile durante tutto il trattamento.' },
          { title: 'Apertura del dente.', text: 'Si fa una piccola apertura nella parte superiore del dente per raggiungere la camera pulpare. Allo stesso tempo si rimuove ogni carie o vecchio materiale da otturazione.' },
          { title: 'Pulizia e sagomatura dei canali.', text: 'Ogni canale si individua, si misura e si pulisce per tutta la lunghezza con strumenti sottili, rimuovendo la polpa infetta. I canali si sagomano perché si possano disinfettare e otturare bene. È la parte più importante del trattamento: un canale non trovato o non pulito fino in fondo è il motivo più comune per cui una cura canalare fallisce.' },
          { title: 'Disinfezione.', text: 'I canali si sciacquano ripetutamente con soluzioni disinfettanti per uccidere i batteri dove gli strumenti non arrivano. Quando l’infezione è estesa, si può inserire un medicamento nel dente e chiuderlo fino alla seduta successiva, perché l’infezione abbia tempo di calmarsi.' },
          { title: 'Otturazione e sigillatura.', text: 'Quando i canali sono puliti e asciutti, si riempiono con un materiale biocompatibile e un sigillante che li chiude completamente. Poi si chiude l’apertura d’accesso.' },
          { title: 'Ricostruzione del dente.', text: 'L’ultimo passo è proteggere il dente. I denti anteriori spesso si ricostruiscono con un’otturazione in composito. I denti posteriori di solito hanno bisogno di una corona in zirconia Made in Germany o E-max, realizzata in laboratorio e applicata in un appuntamento successivo.' },
          { title: 'Ritrattamento canalare.', text: 'Se un dente curato altrove fa male o mostra di nuovo infezione, la cura canalare spesso si può ripetere. Si rimuove il vecchio materiale, i canali si puliscono di nuovo e si tratta ogni canale non trovato la prima volta. Qui la TAC 3D è particolarmente utile.' },
        ],
      },
    ],
    stats: [
      { value: '1–2', label: 'Sedute' },
      { value: 'Locale', label: 'Anestesia' },
      { value: 'Corona', label: 'Protezione per i denti posteriori' },
      { value: '60–90 min', label: 'Per seduta' },
    ],
    priceTitle: 'Prezzo',
    priceNote: 'Per dente',
    whatTitle: 'Cos’è la cura canalare?',
    what: [
      'La cura canalare rimuove la polpa infetta o infiammata dall’interno del dente, pulisce e disinfetta i canali radicolari e li sigilla perché i batteri non tornino.',
      'Si fa in anestesia locale, in una o due sedute. Dopo il trattamento il dente si ricostruisce: con un’otturazione sui denti anteriori, e di solito con una corona su quelli posteriori.',
    ],
    calloutTitle: 'I denti posteriori di solito hanno bisogno di una corona',
    calloutText:
      'Un dente devitalizzato è più fragile. Su molari e premolari, la corona lo protegge dalla frattura. La pianifichiamo fin dall’inizio, in zirconia Made in Germany o E-max, quindi è nel preventivo prima che inizi il trattamento.',
    compareTitle: 'Le tue opzioni',
    compareIntro: 'A seconda del dente, queste sono le strade realistiche:',
    compare: [
      { id: 'root-canal', tag: 'La più comune', title: 'Cura canalare', text: 'I canali si puliscono e sigillano, e il tuo dente naturale si conserva. Con il ritrattamento, anche i canali non trattati prima.' },
      { id: 'crown-zirconia', tag: 'Per i denti posteriori', title: 'Corona in zirconia', text: 'Protegge il dente trattato dalla frattura. La strada standard per molari e premolari.' },
      { id: 'implant-megagen', tag: 'Quando non si salva', title: 'Estrazione e impianto', text: 'Quando il dente non si può salvare, si estrae e si sostituisce con un impianto MegaGen dopo circa 6 mesi di guarigione.' },
    ],
    fitTitle: 'Quando serve una cura canalare?',
    fitIntro: 'La cura canalare di solito è consigliata se hai:',
    fit: [
      'Un dolore pulsante o prolungato, soprattutto di notte o da sdraiato',
      'Dolore da caldo o freddo che dura a lungo dopo aver finito di mangiare o bere',
      'Gengiva gonfia, un brufolo sulla gengiva o cattivo sapore da un dente infetto',
      'Una carie che ha raggiunto il nervo del dente o è molto vicina',
      'Un dente diventato grigio o scuro dopo un colpo o un’otturazione grande',
      'Un dente già curato che ha ricominciato a fare male o si è infettato',
    ],
    fitNote:
      'Se il dente è fratturato, ha troppo poca struttura per essere ricostruito o ha perso il sostegno osseo, la cura canalare non lo salverà. Te lo diciamo prima di iniziare e ti spieghiamo le alternative.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'La cura canalare di solito si completa in una o due sedute, a seconda del dente e di quanto è estesa l’infezione:',
    steps: [
      { title: 'Diagnosi e immagini', text: 'Esaminiamo il dente e facciamo una radiografia, o una TAC 3D per canali complessi, gratuita con il tuo trattamento.' },
      { title: 'Anestesia locale', text: 'La zona viene anestetizzata e controllata prima di iniziare. Il trattamento si sente come un’otturazione grande.' },
      { title: 'Pulizia e disinfezione', text: 'La polpa infetta si rimuove, ogni canale si pulisce per tutta la lunghezza e si sciacqua più volte per uccidere i batteri.' },
      { title: 'Otturazione e sigillatura', text: 'I canali puliti si otturano e sigillano perché i batteri non tornino. I casi molto infetti possono richiedere due sedute.' },
      { title: 'Protezione del dente', text: 'I denti anteriori di solito ricevono un’otturazione. Quelli posteriori una corona in zirconia Made in Germany o E-max, realizzata in laboratorio.' },
    ],
    whyBandTitle: 'Perché Veneer Clinic per la cura canalare?',
    whyBandText:
      'Cerchiamo di conservare il tuo dente naturale e ti diciamo apertamente quando la cura canalare non funzionerà. I casi complessi si pianificano con TAC 3D, la corona fa parte del piano fin dal primo giorno e ogni passo è nel preventivo scritto dettagliato. Il prezzo che ti diamo è il prezzo che paghi.',
    caseText: 'Un dente naturale salvato',
    faq: [
      { question: 'Quanto costa una cura canalare?', answer: 'La cura canalare costa 100 € per dente. La TAC 3D, quando serve per canali complessi, è gratuita con il trattamento. Se il dente ha bisogno di una corona dopo, compare separatamente nel preventivo: una corona in zirconia Made in Germany costa 200 € e una corona E-max 300 € per dente.' },
      { question: 'La cura canalare fa male?', answer: 'Il trattamento in sé non dovrebbe fare male. Il dente viene anestetizzato e la maggior parte dei pazienti dice che si sente come un’otturazione grande. Il dolore associato alla cura canalare di solito viene dall’infezione prima del trattamento. Appena si rimuove il tessuto infetto, quel dolore pulsante di solito scompare. Dopo, il dente può essere sensibile per qualche giorno, soprattutto quando mordi. È normale e di solito si controlla bene con antidolorifici.' },
      { question: 'Quante sedute servono?', answer: 'Di solito una o due, in un soggiorno di 1–2 giorni. Molti denti si possono pulire, disinfettare e sigillare in una sola seduta. Se l’infezione è estesa o i canali sono complessi, possiamo inserire un medicamento, chiudere il dente e completare il trattamento in una seconda seduta, quando l’infezione si è calmata. I denti posteriori poi hanno bisogno di una corona, realizzata in laboratorio e applicata in un appuntamento successivo.' },
      { question: 'Serve una corona dopo la cura canalare?', answer: 'Sui denti posteriori, quasi sempre. Molari e premolari sostengono gran parte della forza masticatoria, e un dente devitalizzato è più fragile. Senza corona può incrinarsi o spaccarsi, a volte senza possibilità di riparazione. I denti anteriori, che sostengono meno forza, spesso si ricostruiscono con un’otturazione in composito. Alla Veneer Clinic le corone si realizzano in zirconia Made in Germany o E-max. La corona si pianifica fin dall’inizio e compare nel preventivo scritto prima che inizi il trattamento.' },
      { question: 'È meglio togliere il dente e mettere un impianto?', answer: 'Se il dente si può salvare, conservarlo di solito è la scelta migliore. Il tuo dente, nel tuo osso e con il suo legamento, è difficile da sostituire. L’impianto è un’ottima sostituzione quando il dente non si salva, per esempio quando è fratturato sotto la gengiva, ha troppo poca struttura o ha perso il sostegno osseo. Usiamo impianti MegaGen, che hanno bisogno di circa sei mesi di guarigione prima della corona definitiva. Ti spieghiamo apertamente entrambe le opzioni, con una prognosi realistica per il tuo dente.' },
      { question: 'Quanto dura un dente devitalizzato?', answer: 'Con un trattamento accurato e una corona adatta, molti anni, spesso tutta la vita. Le due cose più importanti sono quanto bene sono stati puliti e sigillati i canali e se il dente è protetto dalla frattura. Dopo, ha bisogno della stessa cura di qualsiasi altro dente: spazzolino, pulizia tra i denti e controlli regolari.' },
      { question: 'Una cura canalare fallita si può rifare?', answer: 'Spesso sì. Se un dente curato in passato ricomincia a fare male o si infetta, il ritrattamento può salvarlo. Si rimuove il vecchio materiale, i canali si puliscono e disinfettano di nuovo, e si tratta ogni canale non trovato la prima volta. Qui la TAC 3D è particolarmente utile per vedere l’anatomia completa dei canali. Se il ritrattamento ha poche probabilità di successo, te lo diciamo prima di iniziare e valutiamo le alternative.' },
      { question: 'Serve una TAC 3D per la cura canalare?', answer: 'Non sempre. Per molti denti basta una radiografia normale. La TAC 3D è utile per denti con canali curvi, extra o calcificati, per cure fallite e quando l’infezione non si vede chiaramente in radiografia. Mostra in dettaglio l’anatomia dei canali e l’osso attorno alla radice. Si fa solo quando il tuo caso la richiede, ed è gratuita per i nostri pazienti.' },
      { question: 'Perché il dente fa male dopo il trattamento?', answer: 'I tessuti attorno alla radice erano infiammati prima del trattamento, e la pulizia dei canali li irrita un po’ di più. Hanno bisogno di qualche giorno per calmarsi. La sensazione più comune è fastidio quando mordi. Evita cibi duri da quel lato e prendi gli antidolorifici come consigliato. Contattaci se il dolore aumenta dopo qualche giorno, se compare gonfiore o se il dente è ancora molto sensibile dopo una settimana.' },
      { question: 'Quando posso tornare al lavoro o volare?', answer: 'La maggior parte dei pazienti torna alle attività normali lo stesso giorno o il giorno dopo. La cura canalare non richiede riposo, salvo in caso di gonfiore importante. L’anestesia può durare qualche ora, quindi se hai un volo puoi pianificarlo dopo l’ultima seduta senza problemi.' },
      { question: 'Il dente cambierà colore?', answer: 'Un dente che ha perso il nervo può scurirsi gradualmente nel tempo, soprattutto i denti anteriori che hanno subito un colpo. Sui denti posteriori la corona lo copre completamente. Sui denti anteriori, se lo scurimento diventa visibile, ci sono modi per migliorare il colore, che il dentista può valutare con te.' },
      { question: 'Cosa comprende il preventivo per la cura canalare?', answer: 'Il preventivo scritto dettagliato comprende la cura canalare per ogni dente e l’otturazione o la corona che lo proteggerà, ciascuna su una riga con il materiale della corona indicato. Se serve una seconda seduta, viene spiegato in anticipo. Una volta iniziato il trattamento, non si aggiunge nulla che non abbiamo discusso prima con te.' },
    ],
  },
};

export default function RootCanalPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="root-canal"
      heroImage={images.surgery[14] ?? images.heroAfter}
      whatImage={images.clinicGallery[3] ?? images.heroAfter}
    />
  );
}
