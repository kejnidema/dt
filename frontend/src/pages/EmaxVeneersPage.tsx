import type { Lang } from '@/lib/i18n';
import { images } from '@/lib/images';
import TreatmentArticle, { type TreatmentArticleContent } from '@/components/TreatmentArticle';

const content: Record<Lang, TreatmentArticleContent> = {
  sq: {
    name: 'Faseta e.max',
    eyebrow: 'Estetikë · Shqipëri',
    subtitle:
      'Faseta shumë të holla prej disilikati litiumi për një buzëqeshje të ndritshme dhe natyrale. Përgatitje minimale e dhëmbit dhe ngjyrë e qëndrueshme.',
    lead: 'Guaska të holla qeramike të ngjitura mbi dhëmbët tuaj: thyerje, hapësira dhe njolla të korrigjuara në pak seanca.',
    kicker: 'Faseta e.max në Tiranë, Shqipëri',
    articleTitle: 'Faseta e.max në Tiranë: buzëqeshje natyrale, me dhëmbët tuaj të ruajtur',
    intro: [
      'Faseta është mënyra më konservative për të ndryshuar pamjen e një dhëmbi. Në vend që ta mbulojë plotësisht, ngjitet në sipërfaqen e përparme: dhëmbi poshtë saj mbetet pothuajse i paprekur dhe rezultati duket si smalt, jo si punë dentare.',
      'Këtë e bën të mundur materiali. E.max është një qeramikë qelqi me disilikat litiumi, dhe zgjidhi një problem që për dekada frenoi stomatologjinë estetike: porcelanët e dikurshëm që dukeshin bindës ishin të brishtë, ndërsa materialet mjaft të forta për të zgjatur dukeshin opakë. E.max është njëkohësisht e fortë dhe natyrale, prandaj mund të punohet aq e hollë sa të ngjitet mbi një dhëmb të përgatitur lehtë dhe prapë të zgjasë për shumë vite.',
      'Në Veneer Clinic në Tiranë, fasetat e.max janë Made in Germany dhe i gjithë trajtimi përfundon brenda 3 ditësh, në dy takime dhe një udhëtim të vetëm.',
    ],
    sections: [
      {
        title: 'Çfarë janë fasetat e.max?',
        intro: [
          'Fasetat e.max janë guaska të holla prej qeramike me disilikat litiumi që ngjiten në sipërfaqen e përparme të dhëmbëve natyralë. Materiali shtypet ose frezohet nga një bllok i vetëm, në vend që të shtresohet mbi një bërthamë, dhe kjo i jep një rezistencë ndaj përkuljes rreth 400–500 MPa: aq e lartë sa një fasetë mund të jetë rreth 0,3–0,5 mm e trashë dhe të mbetet e besueshme.',
          'Pikërisht kjo hollësi është thelbi. Më pak trashësi do të thotë më pak përgatitje, dhe ruajtja e smaltit të shëndetshëm është një nga vendimet me pasojat më të mëdha afatgjata në çdo rast estetik. Smalti është gjithashtu sipërfaqja ku fasetat ngjiten më mirë, kështu që ruajtja e tij mbron si dhëmbin, ashtu edhe lidhjen.',
          'Meqë nuk ka strukturë metalike apo bërthamë opake, drita kalon përmes një fasete e.max pothuajse njësoj si përmes smaltit. Nuk ka asgjë që e errëson dhëmbin dhe asgjë që krijon hije te buza e mishit të dhëmbit me kalimin e viteve.',
        ],
      },
      {
        title: 'Çfarë mund të korrigjojnë fasetat e.max',
        intro: ['Fasetat përshkruhen si trajtim estetik, edhe pse problemet që zgjidhin rrallë duken thjesht estetike për atë që i jeton:'],
        points: [
          { title: 'Njolla të thella ose të brendshme:', text: 'nga tetraciklina, fluoroza ose errësimi me moshën, të cilat zbardhimi nuk i çel dot sepse ngjyra është brenda dhëmbit, jo sipër tij.' },
          { title: 'Skaje të thyera ose të konsumuara:', text: 'nga shtrëngimi i dhëmbëve, ushqimi acid ose thjesht vitet e përdorimit, kur dhëmbët e përparmë kanë humbur formën dhe gjatësinë origjinale.' },
          { title: 'Hapësira mes dhëmbëve:', text: 'hapësira të lehta deri të mesme që mbyllen pa ortodonci.' },
          { title: 'Mbivendosje ose rrotullim i lehtë,', text: 'kur një trajtim i plotë ortodontik do të ishte më shumë nga sa kërkon rezultati.' },
          { title: 'Formë ose përmasa jo të harmonishme:', text: 'dhëmbë shumë të shkurtër, të ngushtë ose asimetrikë në krahasim me vijën e buzëqeshjes.' },
          { title: 'Mbushje të vjetra me kompozit', text: 'të njollosura në buzë, ose që nuk përputhen më me dhëmbët fqinjë.' },
        ],
        outro: [
          'Mishrat e shëndetshëm të dhëmbëve dhe smalti i mjaftueshëm për ngjitje janë themeli. Kur duhet trajtuar më parë njëri prej tyre, e përfshijmë në planin tuaj. Shtrëngimi i dhëmbëve menaxhohet pa problem me zgjedhjen e duhur të materialit dhe një mbrojtëse nate.',
        ],
      },
      {
        title: 'Faseta apo kurora: si vendosim',
        cards: [
          { title: 'Një fasetë', text: 'mbulon pjesën e përparme të dhëmbit dhe kërkon përgatitje minimale. Kur dhëmbi është i shëndetshëm dhe ka smalt të mirë, jep rezultat estetik të shkëlqyer duke ruajtur sa më shumë nga dhëmbi natyral. Është zgjedhja jonë e preferuar sa herë që gjendja klinike e lejon.' },
          { title: 'Një kurorë', text: 'e mbulon dhëmbin plotësisht. Është zgjedhja e duhur kur dhëmbi është i devitalizuar, me mbushje të mëdha, i plasaritur ose pa smalt të mjaftueshëm për një ngjitje të besueshme: në këto raste mbulimi i plotë është vërtet restaurimi më i fortë afatgjatë. Për këta dhëmbë zakonisht përdorim kurora zirkoni.' },
        ],
        outro: [
          'Shumica e rasteve të plota përdorin të dyja. Plani juaj me shkrim tregon, dhëmb për dhëmb, çfarë do të vendoset dhe pse, që të dini saktësisht çfarë do të merrni para se të fillojmë.',
          'Nëse rasti juaj zgjidhet më mirë me diçka më të thjeshtë, si zbardhim ose faseta kompoziti në dy dhëmbë në vend të fasetave e.max në tetë, jua themi në vizitë. Një këshillë që mund t’i besoni vlen më shumë se një plan trajtimi më i madh.',
        ],
      },
      {
        title: 'Si funksionon trajtimi te ne',
        inline: [
          { title: 'Vizita dhe planifikimi.', text: 'Në vizitën e parë bëjmë ekzaminim të plotë klinik, grafi panoramike dhe vlerësim të mishrave të dhëmbëve dhe kafshimit. Përcaktojmë planin sipas asaj që gjejmë dhe biem dakord me ju për formën, gjatësinë dhe ngjyrën e buzëqeshjes së re para se të fillojmë.' },
          { title: 'Përgatitja.', text: 'Përgatitet një sasi minimale smalti për të krijuar hapësirën që u duhet fasetave. Sasia e saktë varet nga rasti juaj dhe e mbajmë në minimumin që lejon çdo dhëmb.' },
          { title: 'Laboratori dhe materialet.', text: 'Matjet dhe ngjyra e rënë dakord dërgohen në laborator. Fasetat tuaja punohen në qeramikë e.max, Made in Germany, të ndërtuara për rastin tuaj dhe jo sipas një modeli standard, dhe përfundohen me teksturën sipërfaqësore dhe variacionet e holla të ngjyrës që e bëjnë qeramikën të duket natyrale, jo uniforme.' },
          { title: 'Prova.', text: 'Fasetat provohen para ngjitjes përfundimtare, që përshtatja, ngjyra dhe profili të kontrollohen në fytyrën tuaj dhe të rregullohen sa ndryshimet janë ende të thjeshta.' },
          { title: 'Vendosja dhe kontrolli përfundimtar.', text: 'Kur jeni të kënaqur, fasetat ngjiten, kafshimi rregullohet që gjithçka të mbyllet rehat dhe çdo sipërfaqe lustrohet para se të largoheni.' },
        ],
        outro: ['Shumica e rasteve përfundojnë brenda 3 ditësh, në dy takime dhe një udhëtim të vetëm.'],
      },
      {
        title: 'Pse Veneer Clinic',
        inline: [
          { title: 'Përgatitje konservative.', text: 'E reduktojmë smaltin në minimumin që lejon çdo dhëmb, sepse ajo që hiqet nuk rritet më dhe pikërisht te smalti fasetat ngjiten më mirë.' },
          { title: 'Made in Germany.', text: 'Fasetat tona e.max punohen me cilësi gjermane, me materiale që janë pikë reference në stomatologjinë estetike evropiane.' },
          { title: 'Preventiv me shkrim, element për element.', text: 'E dini sa faseta dhe me çfarë çmimi para se të fillojmë, dhe preventivi nuk ndryshon kur jeni në karrige.' },
          { title: 'Buzëqeshja e rënë dakord që më parë.', text: 'Forma, gjatësia dhe ngjyra vendosen bashkë me ju para se të fillojmë.' },
          { title: 'Pas trajtimit.', text: 'Merrni udhëzime kujdesi me shkrim dhe kontrolle të rregullta, që fasetat dhe mishrat e dhëmbëve të mbeten në gjendje të mirë për vite.' },
        ],
      },
      {
        title: 'Sa zgjasin fasetat e.max?',
        intro: [
          'Me ngjitje të mirë, mishra të shëndetshëm dhe kujdes të vazhdueshëm, fasetat e.max zakonisht zgjasin nga dhjetë deri në pesëmbëdhjetë vjet, shpesh edhe më shumë. Ajo që ua zgjat jetën është e thjeshtë: larje e përditshme dhe pastrim mes dhëmbëve, seanca të rregullta higjiene, një mbrojtëse nate nëse i shtrëngoni dhëmbët dhe shmangia e ngarkesave pikësore si akulli, stilolapsat, paketimet dhe thonjtë.',
          'E.max i reziston njollave shumë më mirë se kompoziti. Kafeja, vera dhe duhani nuk e çngjyrosin qeramikën, por veprojnë mbi dhëmbët natyralë përreth, prandaj seancat e higjienës kanë rëndësi për pamjen e të gjithë rezultatit.',
        ],
      },
    ],
    stats: [
      { value: '3 ditë', label: 'Koha e trajtimit' },
      { value: '2', label: 'Takime: përgatitja, pastaj vendosja' },
      { value: '1', label: 'Udhëtim' },
      { value: '10–15 vjet', label: 'Jetëgjatësia tipike' },
    ],
    priceTitle: 'Çmimi për dhëmb',
    priceNote: 'Fasetë ose kurorë, Made in Germany',
    whatTitle: 'Çfarë janë fasetat e.max?',
    what: [
      'Fasetat e.max punohen me disilikat litiumi, një qeramikë qelqi e vlerësuar për fortësinë dhe për mënyrën si e përcjell dritën njësoj si smalti natyral. Çdo fasetë punohet sipas matjeve të dhëmbit tuaj dhe ngjitet në sipërfaqen e përparme pasi hiqet vetëm një shtresë e hollë smalti, shpesh më pak se me porcelanin tradicional.',
      'Meqë materiali është më i fortë se porcelani standard, fasetat e.max mund të jenë më të holla dhe prapë t’i rezistojnë thyerjes, dhe kjo është pikërisht ajo që lejon një reduktim kaq të vogël të dhëmbit.',
    ],
    calloutTitle: 'Fasetat janë një zgjedhje afatgjatë',
    calloutText:
      'Edhe me përgatitje minimale, fasetat kërkojnë heqjen e smaltit që nuk rritet më. Para se të vendosni, biem dakord me ju për formën, gjatësinë dhe ngjyrën, dhe mund t’ju tregojmë një provë me kompozit mbi dhëmbët tuaj.',
    compareTitle: 'E.max apo faseta kompoziti',
    compareIntro: 'Të dyja korrigjojnë ngjyrën, formën dhe hapësirat: ndryshimi është te qëndrueshmëria, pamja dhe sa zgjasin.',
    compare: [
      { id: 'crown-emax', tag: 'Ky trajtim', title: 'E.max (disilikat litiumi)', text: 'Më e fortë dhe më pak e prirur ndaj thyerjeve se porcelani tradicional, lejon një fasetë më të hollë dhe më pak heqje smalti. Nuk njollohet dhe e ruan shkëlqimin për vite.' },
      { id: 'veneer-composite', tag: 'Alternativë', title: 'Faseta kompoziti', text: 'Një opsion më ekonomik që modelohet direkt mbi dhëmb, pa laborator dhe me pak ose aspak limim, por më pak i qëndrueshëm dhe më i prirur ndaj njollave se qeramika.' },
    ],
    fitTitle: 'Për kë janë fasetat e.max?',
    fitIntro: 'Fasetat e.max ia vlen t’i merrni në konsideratë nëse doni të korrigjoni:',
    fit: ['Ngjyrën e dhëmbëve dhe njollat', 'Forma të parregullta të dhëmbëve', 'Përmasat dhe simetrinë e dhëmbëve', 'Papërsosmëri estetike'],
    fitNote:
      'Fasetat e.max kërkojnë heqjen e një shtrese të hollë smalti që nuk rritet më. Nëse doni ta shihni rezultatin paraprakisht, mund të fillojmë me një provë me kompozit direkt mbi dhëmbët tuaj.',
    stepsTitle: 'Si funksionon trajtimi',
    stepsIntro: 'Fasetat e.max zakonisht kërkojnë dy takime: një për planifikimin dhe përgatitjen, një tjetër për vendosjen.',
    steps: [
      { title: 'Vizita dhe vlerësimi', text: 'Dentisti ekzaminon dhëmbët, mishrat dhe kafshimin dhe flet me ju për atë që doni të ndryshoni. Këtu konfirmojmë nëse fasetat e.max janë zgjedhja e duhur për rastin tuaj.' },
      { title: 'Planifikimi i trajtimit', text: 'Buzëqeshja e re planifikohet sipas përmasave të fytyrës, formës së dhëmbëve dhe preferencave tuaja. Biem dakord për formën, gjatësinë dhe ngjyrën para çdo përgatitjeje.' },
      { title: 'Përgatitja e dhëmbëve', text: 'Përgatitet një sasi minimale smalti për të krijuar hapësirën që u duhet fasetave. Sasia e saktë varet nga rasti dhe mbahet në minimumin që lejon dhëmbi.' },
      { title: 'Matjet dhe laboratori', text: 'Matjet e detajuara shkojnë në laborator bashkë me ngjyrën e rënë dakord. Fasetat punohen në qeramikë e.max, me teksturë dhe nuanca natyrale.' },
      { title: 'Vendosja e fasetave', text: 'Kur fasetat janë gati, dentisti kontrollon formën, ngjyrën dhe përshtatjen me dhëmbët fqinjë. Kur jeni të kënaqur me rezultatin, ato ngjiten përfundimisht.' },
      { title: 'Rregullimet përfundimtare', text: 'Kafshimi dhe buzëqeshja kontrollohen me kujdes, me retushet e fundit dhe lustrimin, që fasetat të funksionojnë mirë dhe jo vetëm të duken mirë.' },
    ],
    whyBandTitle: 'Pse të zgjidhni Veneer Clinic për fasetat e.max?',
    whyBandText:
      'Përgatisim në mënyrë konservative, duke ruajtur sa më shumë smalt, dhe biem dakord me ju për formën, gjatësinë dhe ngjyrën para se të prekim dhëmbët. Fasetat më pas punohen me porosi, Made in Germany.',
    caseText: 'Buzëqeshje e përmirësuar me faseta e.max',
    faq: [
      { question: 'Sa dhëmb natyral hiqet?', answer: 'Vetëm aq sa kërkon rasti, zakonisht një pjesë e milimetrit smalt. Pikërisht fortësia e e.max në trashësi të vogla lejon një përgatitje kaq konservative.' },
      { question: 'A dhemb?', answer: 'Përgatitja bëhet me anestezi lokale. Një ndjeshmëri e lehtë mes përgatitjes dhe vendosjes përfundimtare është normale dhe kalon pasi fasetat ngjiten.' },
      { question: 'A mund të zgjedh sa të bardha do të jenë?', answer: 'Po. Ngjyra vendoset bashkë me ju para se të fillojmë. Do t’ju japim një mendim të sinqertë se çfarë do të duket natyrale me lëkurën dhe tiparet tuaja: shumica e pacientëve zgjedhin një ose dy nuanca nën më të çelëtën.' },
      { question: 'A do të duket që kam faseta?', answer: 'Fasetat e.max të punuara mirë janë shumë të vështira për t’u dalluar. Ato që i tradhtojnë janë mënyra si materiali përcjell dritën, tekstura sipërfaqësore dhe variacionet e holla të ngjyrës, dhe pikërisht këtyre u kushtojmë kujdes.' },
      { question: 'Faseta apo kurora: çfarë është më mirë për mua?', answer: 'Varet nga çdo dhëmb. Kur dhëmbi është i shëndetshëm me smalt të mirë, faseta ruan më shumë. Kur është i devitalizuar ose shumë i restauruar, kurora është më e fortë. Plani juaj tregon cila zgjidhje vlen për secilin dhëmb.' },
      { question: 'Sa takime duhen?', answer: 'Zakonisht dy, brenda 3 ditësh dhe një udhëtimi të vetëm: një për vizitën, planifikimin dhe përgatitjen, dhe një për provën dhe vendosjen e fasetave. Ju japim kalendarin e saktë bashkë me planin e trajtimit.' },
      { question: 'Sa kushton një fasetë e.max?', answer: '300 € për dhëmb, për fasetë ose kurorë e.max. Dërgoni një grafi panoramike dhe ju japim një ofertë me rreth 90% saktësi para se të udhëtoni.' },
      { question: 'A është trajtimi i përhershëm?', answer: 'Po. Pasi smalti përgatitet, fasetat zëvendësohen në fund të jetës së tyre në vend që thjesht të hiqen. Prandaj përgatisim në mënyrë konservative, që dhëmbi poshtë të mbetet sa më i fortë.' },
      { question: 'Si kujdesem për fasetat pas vendosjes?', answer: 'Njësoj si për dhëmbët natyralë: larje dy herë në ditë, pastrim mes dhëmbëve dhe seanca higjiene të rregullta. Nëse i shtrëngoni dhëmbët natën, ju përgatisim një mbrojtëse nate që ruan qeramikën.' },
    ],
  },
  en: {
    name: 'E.max Veneers',
    eyebrow: 'Aesthetics · Albania',
    subtitle:
      'Ultra-thin lithium disilicate veneers for a bright, natural smile. Minimal tooth preparation and a colour that lasts.',
    lead: 'Thin ceramic shells bonded onto your teeth: chips, gaps and stains corrected in just a few appointments.',
    kicker: 'E.max Veneers in Tirana, Albania',
    articleTitle: 'E.max veneers in Tirana: a natural smile, with your own teeth preserved',
    intro: [
      'A veneer is the most conservative way to change how a tooth looks. Instead of covering it completely, it is bonded to the front surface: the tooth underneath stays almost untouched and the result looks like enamel, not like dental work.',
      'The material is what makes this possible. E.max is a lithium disilicate glass ceramic, and it solved a problem that held cosmetic dentistry back for decades: the porcelains that looked convincing were fragile, while the materials strong enough to last looked opaque. E.max is both strong and natural, so it can be made thin enough to bond onto a lightly prepared tooth and still last for many years.',
      'At Veneer Clinic in Tirana, our E.max veneers are made in Germany and the whole treatment is completed within 3 days, over two appointments and a single trip.',
    ],
    sections: [
      {
        title: 'What are E.max veneers?',
        intro: [
          'E.max veneers are thin shells of lithium disilicate ceramic bonded to the front surface of natural teeth. The material is pressed or milled from a single block rather than layered over a core, which gives it a flexural strength of around 400–500 MPa: high enough that a veneer can be about 0.3–0.5 mm thick and remain reliable.',
          'That thinness is the whole point. Less thickness means less preparation, and preserving healthy enamel is one of the most consequential long-term decisions in any cosmetic case. Enamel is also the surface veneers bond to best, so preserving it protects both the tooth and the bond.',
          'Because there is no metal framework or opaque core, light passes through an E.max veneer almost exactly as it does through enamel. Nothing darkens the tooth and nothing creates a shadow at the gum line over the years.',
        ],
      },
      {
        title: 'What E.max veneers can correct',
        intro: ['Veneers are described as a cosmetic treatment, although the problems they solve rarely feel purely cosmetic to the person living with them:'],
        points: [
          { title: 'Deep or internal staining:', text: 'from tetracycline, fluorosis or age-related darkening, which whitening cannot lighten because the colour is inside the tooth, not on it.' },
          { title: 'Chipped or worn edges:', text: 'from grinding, acidic food or simply years of use, when the front teeth have lost their original shape and length.' },
          { title: 'Gaps between teeth:', text: 'small to moderate spaces closed without orthodontics.' },
          { title: 'Mild overlap or rotation,', text: 'when full orthodontic treatment would be more than the result requires.' },
          { title: 'Unharmonious shape or size:', text: 'teeth that are too short, narrow or asymmetric compared with the smile line.' },
          { title: 'Old composite fillings', text: 'stained at the edges or no longer matching the neighbouring teeth.' },
        ],
        outro: [
          'Healthy gums and enough enamel for bonding are the foundation. When either needs treating first, we include it in your plan. Grinding is managed without problems through the right choice of material and a night guard.',
        ],
      },
      {
        title: 'Veneers or crowns: how we decide',
        cards: [
          { title: 'A veneer', text: 'covers the front of the tooth and needs minimal preparation. When the tooth is healthy with good enamel, it gives an excellent aesthetic result while preserving as much of the natural tooth as possible. It is our preferred choice whenever the clinical situation allows.' },
          { title: 'A crown', text: 'covers the tooth completely. It is the right choice when the tooth is root-treated, heavily filled, cracked or lacks enough enamel for reliable bonding: in these cases full coverage is genuinely the strongest long-term restoration. For these teeth we usually use zirconia crowns.' },
        ],
        outro: [
          'Most full cases use both. Your written plan shows, tooth by tooth, what will be placed and why, so you know exactly what you are getting before we start.',
          'If your case is better solved with something simpler, such as whitening or composite veneers on two teeth instead of E.max veneers on eight, we will tell you at the visit. Advice you can trust is worth more than a bigger treatment plan.',
        ],
      },
      {
        title: 'How treatment works with us',
        inline: [
          { title: 'Visit and planning.', text: 'At the first visit we carry out a full clinical examination, a panoramic X-ray and an assessment of your gums and bite. We set the plan based on what we find and agree with you on the shape, length and colour of your new smile before we start.' },
          { title: 'Preparation.', text: 'A minimal amount of enamel is prepared to create the space the veneers need. The exact amount depends on your case and we keep it to the minimum each tooth allows.' },
          { title: 'Laboratory and materials.', text: 'The impressions and the agreed shade are sent to the laboratory. Your veneers are made in E.max ceramic, made in Germany, built for your case rather than from a standard template, and finished with the surface texture and subtle colour variations that make ceramic look natural, not uniform.' },
          { title: 'Try-in.', text: 'The veneers are tried in before final bonding, so fit, colour and profile can be checked on your face and adjusted while changes are still simple.' },
          { title: 'Fitting and final check.', text: 'Once you are happy, the veneers are bonded, the bite is adjusted so everything closes comfortably, and every surface is polished before you leave.' },
        ],
        outro: ['Most cases are completed within 3 days, over two appointments and a single trip.'],
      },
      {
        title: 'Why Veneer Clinic',
        inline: [
          { title: 'Conservative preparation.', text: 'We reduce enamel to the minimum each tooth allows, because what is removed never grows back and enamel is exactly where veneers bond best.' },
          { title: 'Made in Germany.', text: 'Our E.max veneers are made to German quality standards, with materials that are a benchmark in European cosmetic dentistry.' },
          { title: 'Written quote, unit by unit.', text: 'You know how many veneers and at what price before we start, and the quote does not change once you are in the chair.' },
          { title: 'Your smile agreed in advance.', text: 'Shape, length and colour are decided together with you before we start.' },
          { title: 'After treatment.', text: 'You receive written care instructions and regular check-ups, so your veneers and gums stay in good condition for years.' },
        ],
      },
      {
        title: 'How long do E.max veneers last?',
        intro: [
          'With good bonding, healthy gums and ongoing care, E.max veneers usually last ten to fifteen years, often longer. What extends their life is simple: daily brushing and cleaning between the teeth, regular hygiene appointments, a night guard if you grind, and avoiding point loads such as ice, pens, packaging and fingernails.',
          'E.max resists staining far better than composite. Coffee, wine and tobacco do not discolour the ceramic, but they do affect the natural teeth around it, which is why hygiene appointments matter for the look of the whole result.',
        ],
      },
    ],
    stats: [
      { value: '3 days', label: 'Treatment time' },
      { value: '2', label: 'Appointments: preparation, then fitting' },
      { value: '1', label: 'Trip' },
      { value: '10–15 yrs', label: 'Typical lifespan' },
    ],
    priceTitle: 'Price per tooth',
    priceNote: 'Veneer or crown, made in Germany',
    whatTitle: 'What are E.max veneers?',
    what: [
      'E.max veneers are made from lithium disilicate, a glass ceramic valued for its strength and for the way it transmits light just like natural enamel. Each veneer is made to the impressions of your tooth and bonded to the front surface after removing only a thin layer of enamel, often less than with traditional porcelain.',
      'Because the material is stronger than standard porcelain, E.max veneers can be thinner and still resist fracture, and that is exactly what allows such a small reduction of the tooth.',
    ],
    calloutTitle: 'Veneers are a long-term choice',
    calloutText:
      'Even with minimal preparation, veneers require removing enamel that does not grow back. Before you decide, we agree on shape, length and colour with you, and we can show you a composite mock-up on your own teeth.',
    compareTitle: 'E.max or composite veneers',
    compareIntro: 'Both correct colour, shape and gaps: the difference is in durability, appearance and how long they last.',
    compare: [
      { id: 'crown-emax', tag: 'This treatment', title: 'E.max (lithium disilicate)', text: 'Stronger and less prone to fracture than traditional porcelain, allowing a thinner veneer and less enamel removal. It does not stain and keeps its lustre for years.' },
      { id: 'veneer-composite', tag: 'Alternative', title: 'Composite veneers', text: 'A more economical option sculpted directly on the tooth, with no lab and little or no reduction, but less durable and more prone to staining than ceramic.' },
    ],
    fitTitle: 'Who are E.max veneers for?',
    fitIntro: 'E.max veneers are worth considering if you want to correct:',
    fit: ['Tooth colour and staining', 'Irregular tooth shapes', 'Tooth size and symmetry', 'Aesthetic imperfections'],
    fitNote:
      'E.max veneers require removing a thin layer of enamel that does not grow back. If you would like to see the result in advance, we can start with a composite mock-up directly on your teeth.',
    stepsTitle: 'How the treatment works',
    stepsIntro: 'E.max veneers usually take two appointments: one for planning and preparation, another for fitting.',
    steps: [
      { title: 'Visit and assessment', text: 'The dentist examines your teeth, gums and bite and talks with you about what you want to change. This is where we confirm whether E.max veneers are right for your case.' },
      { title: 'Treatment planning', text: 'Your new smile is planned around your facial proportions, tooth shape and preferences. We agree on shape, length and colour before any preparation.' },
      { title: 'Tooth preparation', text: 'A minimal amount of enamel is prepared to create the space the veneers need. The exact amount depends on the case and is kept to the minimum the tooth allows.' },
      { title: 'Impressions and laboratory', text: 'Detailed impressions go to the laboratory together with the agreed shade. The veneers are made in E.max ceramic, with natural texture and shading.' },
      { title: 'Fitting the veneers', text: 'When the veneers are ready, the dentist checks shape, colour and fit against the neighbouring teeth. Once you are happy with the result, they are permanently bonded.' },
      { title: 'Final adjustments', text: 'Your bite and smile are carefully checked, with final touch-ups and polishing, so the veneers function well and do not just look good.' },
    ],
    whyBandTitle: 'Why choose Veneer Clinic for E.max veneers?',
    whyBandText:
      'We prepare conservatively, preserving as much enamel as possible, and agree on shape, length and colour with you before we touch your teeth. The veneers are then custom-made, made in Germany.',
    caseText: 'Smile improved with E.max veneers',
    faq: [
      { question: 'How much natural tooth is removed?', answer: 'Only as much as the case requires, usually a fraction of a millimetre of enamel. It is precisely the strength of E.max at small thicknesses that allows such conservative preparation.' },
      { question: 'Does it hurt?', answer: 'Preparation is done under local anaesthesia. Mild sensitivity between preparation and final fitting is normal and passes once the veneers are bonded.' },
      { question: 'Can I choose how white they will be?', answer: 'Yes. The shade is decided together with you before we start. We will give you an honest opinion on what will look natural with your skin and features: most patients choose one or two shades below the brightest.' },
      { question: 'Will it be obvious that I have veneers?', answer: 'Well-made E.max veneers are very hard to spot. What gives veneers away is how the material transmits light, the surface texture and subtle colour variations, and that is exactly where we put our care.' },
      { question: 'Veneer or crown: which is better for me?', answer: 'It depends on each tooth. When the tooth is healthy with good enamel, a veneer preserves more. When it is root-treated or heavily restored, a crown is stronger. Your plan shows which solution applies to each tooth.' },
      { question: 'How many appointments are needed?', answer: 'Usually two, within 3 days and a single trip: one for the visit, planning and preparation, and one for the try-in and fitting of the veneers. We give you the exact schedule together with the treatment plan.' },
      { question: 'How much does an E.max veneer cost?', answer: '€300 per tooth, for an E.max veneer or crown. Send us a panoramic X-ray and we will give you a quote with about 90% accuracy before you travel.' },
      { question: 'Is the treatment permanent?', answer: 'Yes. Once the enamel is prepared, veneers are replaced at the end of their life rather than simply removed. That is why we prepare conservatively, so the tooth underneath stays as strong as possible.' },
      { question: 'How do I care for veneers after fitting?', answer: 'Just like natural teeth: brushing twice a day, cleaning between the teeth and regular hygiene appointments. If you grind at night, we make you a night guard that protects the ceramic.' },
    ],
  },
  de: {
    name: 'E.max Veneers',
    eyebrow: 'Ästhetik · Albanien',
    subtitle:
      'Hauchdünne Veneers aus Lithiumdisilikat für ein strahlendes, natürliches Lächeln. Minimale Zahnpräparation und eine Farbe, die bleibt.',
    lead: 'Dünne Keramikschalen, die auf Ihre Zähne geklebt werden: Absplitterungen, Lücken und Verfärbungen in wenigen Terminen korrigiert.',
    kicker: 'E.max Veneers in Tirana, Albanien',
    articleTitle: 'E.max Veneers in Tirana: ein natürliches Lächeln, mit Erhalt Ihrer eigenen Zähne',
    intro: [
      'Ein Veneer ist die schonendste Art, das Aussehen eines Zahns zu verändern. Statt ihn vollständig zu überkronen, wird es auf die Vorderseite geklebt: Der Zahn darunter bleibt nahezu unberührt, und das Ergebnis wirkt wie Zahnschmelz, nicht wie Zahnersatz.',
      'Möglich macht das das Material. E.max ist eine Glaskeramik aus Lithiumdisilikat und hat ein Problem gelöst, das die ästhetische Zahnmedizin jahrzehntelang gebremst hat: Überzeugend aussehende Keramiken waren zerbrechlich, während ausreichend feste Materialien opak wirkten. E.max ist zugleich stabil und natürlich und kann daher so dünn gefertigt werden, dass es auf einen leicht präparierten Zahn geklebt wird und trotzdem viele Jahre hält.',
      'In der Veneer Clinic in Tirana sind unsere E.max Veneers Made in Germany, und die gesamte Behandlung ist innerhalb von 3 Tagen abgeschlossen, in zwei Terminen und mit nur einer Reise.',
    ],
    sections: [
      {
        title: 'Was sind E.max Veneers?',
        intro: [
          'E.max Veneers sind dünne Schalen aus Lithiumdisilikat-Keramik, die auf die Vorderseite natürlicher Zähne geklebt werden. Das Material wird aus einem einzigen Block gepresst oder gefräst, statt über einen Kern geschichtet zu werden. Das verleiht ihm eine Biegefestigkeit von etwa 400–500 MPa: hoch genug, dass ein Veneer nur etwa 0,3–0,5 mm dick sein kann und trotzdem zuverlässig bleibt.',
          'Genau diese geringe Stärke ist der Kern. Weniger Dicke bedeutet weniger Präparation, und der Erhalt gesunden Zahnschmelzes ist eine der folgenreichsten langfristigen Entscheidungen in jedem ästhetischen Fall. Schmelz ist außerdem die Oberfläche, auf der Veneers am besten haften. Ihn zu erhalten schützt also sowohl den Zahn als auch die Verbindung.',
          'Da es kein Metallgerüst und keinen opaken Kern gibt, fällt Licht fast genauso durch ein E.max Veneer wie durch Zahnschmelz. Nichts verdunkelt den Zahn, und nichts erzeugt mit den Jahren einen Schatten am Zahnfleischrand.',
        ],
      },
      {
        title: 'Was E.max Veneers korrigieren können',
        intro: ['Veneers gelten als ästhetische Behandlung, auch wenn sich die Probleme, die sie lösen, für Betroffene selten rein ästhetisch anfühlen:'],
        points: [
          { title: 'Tiefe oder innere Verfärbungen:', text: 'durch Tetrazyklin, Fluorose oder altersbedingtes Nachdunkeln, die Bleaching nicht aufhellen kann, weil die Farbe im Zahn liegt, nicht auf ihm.' },
          { title: 'Abgebrochene oder abgenutzte Kanten:', text: 'durch Knirschen, säurehaltige Nahrung oder einfach jahrelangen Gebrauch, wenn die Frontzähne ihre ursprüngliche Form und Länge verloren haben.' },
          { title: 'Lücken zwischen den Zähnen:', text: 'kleine bis mittlere Lücken, die ohne Kieferorthopädie geschlossen werden.' },
          { title: 'Leichte Überlappung oder Drehung,', text: 'wenn eine vollständige kieferorthopädische Behandlung mehr wäre, als das Ergebnis erfordert.' },
          { title: 'Unharmonische Form oder Größe:', text: 'zu kurze, schmale oder asymmetrische Zähne im Verhältnis zur Lächellinie.' },
          { title: 'Alte Kompositfüllungen,', text: 'die am Rand verfärbt sind oder nicht mehr zu den Nachbarzähnen passen.' },
        ],
        outro: [
          'Gesundes Zahnfleisch und genügend Schmelz zum Kleben sind das Fundament. Muss eines davon zuerst behandelt werden, nehmen wir es in Ihren Plan auf. Zähneknirschen lässt sich mit der richtigen Materialwahl und einer Nachtschiene problemlos beherrschen.',
        ],
      },
      {
        title: 'Veneers oder Kronen: wie wir entscheiden',
        cards: [
          { title: 'Ein Veneer', text: 'bedeckt die Vorderseite des Zahns und erfordert minimale Präparation. Ist der Zahn gesund und hat guten Schmelz, liefert es ein hervorragendes ästhetisches Ergebnis und erhält so viel natürliche Zahnsubstanz wie möglich. Es ist unsere bevorzugte Wahl, wann immer die klinische Situation es erlaubt.' },
          { title: 'Eine Krone', text: 'umschließt den Zahn vollständig. Sie ist die richtige Wahl, wenn der Zahn wurzelbehandelt, stark gefüllt, gerissen ist oder nicht genug Schmelz für eine zuverlässige Klebung hat: In diesen Fällen ist die vollständige Überkronung tatsächlich die stabilste Langzeitversorgung. Für diese Zähne verwenden wir meist Zirkonkronen.' },
        ],
        outro: [
          'Die meisten vollständigen Fälle nutzen beides. Ihr schriftlicher Plan zeigt Zahn für Zahn, was eingesetzt wird und warum, damit Sie vor Beginn genau wissen, was Sie bekommen.',
          'Lässt sich Ihr Fall besser mit etwas Einfacherem lösen, etwa mit Bleaching oder Komposit-Veneers an zwei Zähnen statt E.max Veneers an acht, sagen wir Ihnen das beim Termin. Ein Rat, dem Sie vertrauen können, ist mehr wert als ein größerer Behandlungsplan.',
        ],
      },
      {
        title: 'So läuft die Behandlung bei uns ab',
        inline: [
          { title: 'Termin und Planung.', text: 'Beim ersten Termin führen wir eine vollständige klinische Untersuchung, ein Panorama-Röntgenbild und eine Beurteilung von Zahnfleisch und Biss durch. Wir legen den Plan nach unseren Befunden fest und stimmen Form, Länge und Farbe Ihres neuen Lächelns mit Ihnen ab, bevor wir beginnen.' },
          { title: 'Präparation.', text: 'Eine minimale Menge Schmelz wird präpariert, um den Platz zu schaffen, den die Veneers brauchen. Die genaue Menge hängt von Ihrem Fall ab, und wir halten sie auf dem Minimum, das jeder Zahn erlaubt.' },
          { title: 'Labor und Materialien.', text: 'Die Abdrücke und der vereinbarte Farbton gehen ins Labor. Ihre Veneers werden aus E.max-Keramik gefertigt, Made in Germany, für Ihren Fall und nicht nach Schablone, und mit der Oberflächentextur und den feinen Farbnuancen vollendet, die Keramik natürlich statt uniform wirken lassen.' },
          { title: 'Anprobe.', text: 'Die Veneers werden vor der endgültigen Klebung anprobiert, damit Passform, Farbe und Profil an Ihrem Gesicht geprüft und angepasst werden können, solange Änderungen noch einfach sind.' },
          { title: 'Einsetzen und Endkontrolle.', text: 'Sind Sie zufrieden, werden die Veneers verklebt, der Biss so eingestellt, dass alles angenehm schließt, und jede Oberfläche wird poliert, bevor Sie gehen.' },
        ],
        outro: ['Die meisten Fälle sind innerhalb von 3 Tagen abgeschlossen, in zwei Terminen und mit nur einer Reise.'],
      },
      {
        title: 'Warum Veneer Clinic',
        inline: [
          { title: 'Substanzschonende Präparation.', text: 'Wir reduzieren den Schmelz auf das Minimum, das jeder Zahn erlaubt, denn was entfernt wird, wächst nicht nach, und genau auf dem Schmelz haften Veneers am besten.' },
          { title: 'Made in Germany.', text: 'Unsere E.max Veneers werden in deutscher Qualität gefertigt, mit Materialien, die in der europäischen ästhetischen Zahnmedizin als Referenz gelten.' },
          { title: 'Schriftliches Angebot, Einheit für Einheit.', text: 'Sie wissen vor Beginn, wie viele Veneers zu welchem Preis, und das Angebot ändert sich nicht, wenn Sie auf dem Stuhl sitzen.' },
          { title: 'Ihr Lächeln vorab abgestimmt.', text: 'Form, Länge und Farbe werden vor Beginn gemeinsam mit Ihnen festgelegt.' },
          { title: 'Nach der Behandlung.', text: 'Sie erhalten schriftliche Pflegehinweise und regelmäßige Kontrollen, damit Veneers und Zahnfleisch über Jahre in gutem Zustand bleiben.' },
        ],
      },
      {
        title: 'Wie lange halten E.max Veneers?',
        intro: [
          'Mit guter Verklebung, gesundem Zahnfleisch und regelmäßiger Pflege halten E.max Veneers in der Regel zehn bis fünfzehn Jahre, oft länger. Was ihre Lebensdauer verlängert, ist einfach: tägliches Putzen und Reinigen der Zahnzwischenräume, regelmäßige Prophylaxe, eine Nachtschiene bei Knirschen und das Vermeiden punktueller Belastungen wie Eis, Stifte, Verpackungen und Fingernägel.',
          'E.max ist viel verfärbungsresistenter als Komposit. Kaffee, Wein und Tabak verfärben die Keramik nicht, wirken aber auf die umliegenden natürlichen Zähne. Deshalb sind Prophylaxetermine für das Aussehen des gesamten Ergebnisses wichtig.',
        ],
      },
    ],
    stats: [
      { value: '3 Tage', label: 'Behandlungsdauer' },
      { value: '2', label: 'Termine: Präparation, dann Einsetzen' },
      { value: '1', label: 'Reise' },
      { value: '10–15 J.', label: 'Typische Lebensdauer' },
    ],
    priceTitle: 'Preis pro Zahn',
    priceNote: 'Veneer oder Krone, Made in Germany',
    whatTitle: 'Was sind E.max Veneers?',
    what: [
      'E.max Veneers werden aus Lithiumdisilikat gefertigt, einer Glaskeramik, die für ihre Festigkeit und dafür geschätzt wird, dass sie Licht genauso leitet wie natürlicher Zahnschmelz. Jedes Veneer wird nach den Abdrücken Ihres Zahns gefertigt und auf die Vorderseite geklebt, nachdem nur eine dünne Schmelzschicht abgetragen wurde, oft weniger als bei herkömmlicher Keramik.',
      'Da das Material fester ist als Standardkeramik, können E.max Veneers dünner sein und trotzdem bruchfest bleiben, und genau das ermöglicht einen so geringen Abtrag am Zahn.',
    ],
    calloutTitle: 'Veneers sind eine langfristige Entscheidung',
    calloutText:
      'Auch bei minimaler Präparation erfordern Veneers den Abtrag von Schmelz, der nicht nachwächst. Bevor Sie sich entscheiden, stimmen wir Form, Länge und Farbe mit Ihnen ab und können Ihnen ein Komposit-Mock-up auf Ihren eigenen Zähnen zeigen.',
    compareTitle: 'E.max oder Komposit-Veneers',
    compareIntro: 'Beide korrigieren Farbe, Form und Lücken: Der Unterschied liegt in Haltbarkeit, Aussehen und Lebensdauer.',
    compare: [
      { id: 'crown-emax', tag: 'Diese Behandlung', title: 'E.max (Lithiumdisilikat)', text: 'Fester und weniger bruchanfällig als herkömmliche Keramik, ermöglicht ein dünneres Veneer und weniger Schmelzabtrag. Verfärbt sich nicht und behält über Jahre seinen Glanz.' },
      { id: 'veneer-composite', tag: 'Alternative', title: 'Komposit-Veneers', text: 'Eine günstigere Option, die direkt auf dem Zahn modelliert wird, ohne Labor und mit wenig oder keinem Abtrag, aber weniger haltbar und verfärbungsanfälliger als Keramik.' },
    ],
    fitTitle: 'Für wen sind E.max Veneers?',
    fitIntro: 'E.max Veneers lohnen sich, wenn Sie Folgendes korrigieren möchten:',
    fit: ['Zahnfarbe und Verfärbungen', 'Unregelmäßige Zahnformen', 'Zahngröße und Symmetrie', 'Ästhetische Unvollkommenheiten'],
    fitNote:
      'E.max Veneers erfordern den Abtrag einer dünnen Schmelzschicht, die nicht nachwächst. Wenn Sie das Ergebnis vorab sehen möchten, können wir mit einem Komposit-Mock-up direkt auf Ihren Zähnen beginnen.',
    stepsTitle: 'So funktioniert die Behandlung',
    stepsIntro: 'E.max Veneers erfordern meist zwei Termine: einen für Planung und Präparation, einen weiteren für das Einsetzen.',
    steps: [
      { title: 'Termin und Beurteilung', text: 'Der Zahnarzt untersucht Zähne, Zahnfleisch und Biss und bespricht mit Ihnen, was Sie ändern möchten. Hier bestätigen wir, ob E.max Veneers die richtige Wahl für Ihren Fall sind.' },
      { title: 'Behandlungsplanung', text: 'Ihr neues Lächeln wird nach Ihren Gesichtsproportionen, Ihrer Zahnform und Ihren Wünschen geplant. Form, Länge und Farbe legen wir vor jeder Präparation fest.' },
      { title: 'Zahnpräparation', text: 'Eine minimale Menge Schmelz wird präpariert, um Platz für die Veneers zu schaffen. Die genaue Menge hängt vom Fall ab und bleibt auf dem Minimum, das der Zahn erlaubt.' },
      { title: 'Abdrücke und Labor', text: 'Detaillierte Abdrücke gehen mit dem vereinbarten Farbton ins Labor. Die Veneers werden aus E.max-Keramik gefertigt, mit natürlicher Textur und Farbgebung.' },
      { title: 'Einsetzen der Veneers', text: 'Sind die Veneers fertig, prüft der Zahnarzt Form, Farbe und Passung zu den Nachbarzähnen. Sind Sie mit dem Ergebnis zufrieden, werden sie endgültig verklebt.' },
      { title: 'Letzte Anpassungen', text: 'Biss und Lächeln werden sorgfältig kontrolliert, mit letzten Feinkorrekturen und Politur, damit die Veneers gut funktionieren und nicht nur gut aussehen.' },
    ],
    whyBandTitle: 'Warum Veneer Clinic für E.max Veneers?',
    whyBandText:
      'Wir präparieren substanzschonend, erhalten so viel Schmelz wie möglich und stimmen Form, Länge und Farbe mit Ihnen ab, bevor wir Ihre Zähne berühren. Die Veneers werden dann individuell gefertigt, Made in Germany.',
    caseText: 'Lächeln verbessert mit E.max Veneers',
    faq: [
      { question: 'Wie viel natürliche Zahnsubstanz wird abgetragen?', answer: 'Nur so viel, wie der Fall erfordert, meist ein Bruchteil eines Millimeters Schmelz. Gerade die Festigkeit von E.max bei geringer Stärke ermöglicht eine so schonende Präparation.' },
      { question: 'Tut es weh?', answer: 'Die Präparation erfolgt unter örtlicher Betäubung. Eine leichte Empfindlichkeit zwischen Präparation und endgültigem Einsetzen ist normal und vergeht, sobald die Veneers verklebt sind.' },
      { question: 'Kann ich wählen, wie weiß sie werden?', answer: 'Ja. Der Farbton wird vor Beginn gemeinsam mit Ihnen festgelegt. Wir sagen Ihnen ehrlich, was zu Ihrer Haut und Ihren Gesichtszügen natürlich wirkt: Die meisten Patienten wählen ein oder zwei Nuancen unter dem hellsten Ton.' },
      { question: 'Wird man sehen, dass ich Veneers habe?', answer: 'Gut gefertigte E.max Veneers sind kaum zu erkennen. Verräterisch sind die Lichtleitung des Materials, die Oberflächentextur und feine Farbnuancen, und genau darauf legen wir besonderen Wert.' },
      { question: 'Veneer oder Krone: Was ist besser für mich?', answer: 'Das hängt vom einzelnen Zahn ab. Ist der Zahn gesund mit gutem Schmelz, erhält ein Veneer mehr. Ist er wurzelbehandelt oder stark restauriert, ist eine Krone stabiler. Ihr Plan zeigt, welche Lösung für jeden Zahn gilt.' },
      { question: 'Wie viele Termine sind nötig?', answer: 'Meist zwei, innerhalb von 3 Tagen und mit nur einer Reise: einer für Untersuchung, Planung und Präparation, einer für Anprobe und Einsetzen der Veneers. Den genauen Zeitplan erhalten Sie zusammen mit dem Behandlungsplan.' },
      { question: 'Was kostet ein E.max Veneer?', answer: '300 € pro Zahn, für ein E.max Veneer oder eine E.max Krone. Senden Sie uns ein Panorama-Röntgenbild, und Sie erhalten vor der Reise ein Angebot mit etwa 90 % Genauigkeit.' },
      { question: 'Ist die Behandlung dauerhaft?', answer: 'Ja. Ist der Schmelz einmal präpariert, werden Veneers am Ende ihrer Lebensdauer ersetzt, statt einfach entfernt. Deshalb präparieren wir substanzschonend, damit der Zahn darunter so stark wie möglich bleibt.' },
      { question: 'Wie pflege ich Veneers nach dem Einsetzen?', answer: 'Genau wie natürliche Zähne: zweimal täglich putzen, Zahnzwischenräume reinigen und regelmäßige Prophylaxe. Wenn Sie nachts knirschen, fertigen wir Ihnen eine Nachtschiene an, die die Keramik schützt.' },
    ],
  },
  it: {
    name: 'Faccette E.max',
    eyebrow: 'Estetica · Albania',
    subtitle:
      'Faccette sottilissime in disilicato di litio per un sorriso luminoso e naturale. Preparazione minima del dente e un colore che dura.',
    lead: 'Sottili gusci in ceramica applicati sui tuoi denti: scheggiature, spazi e macchie corretti in poche sedute.',
    kicker: 'Faccette E.max a Tirana, Albania',
    articleTitle: 'Faccette E.max a Tirana: un sorriso naturale, preservando i tuoi denti',
    intro: [
      'La faccetta è il modo più conservativo per cambiare l’aspetto di un dente. Invece di rivestirlo completamente, viene incollata sulla superficie anteriore: il dente sottostante resta quasi intatto e il risultato sembra smalto, non un lavoro odontoiatrico.',
      'A renderlo possibile è il materiale. L’E.max è una vetroceramica al disilicato di litio e ha risolto un problema che per decenni ha frenato l’odontoiatria estetica: le porcellane convincenti erano fragili, mentre i materiali abbastanza resistenti da durare apparivano opachi. L’E.max è insieme resistente e naturale, per questo può essere realizzato così sottile da aderire a un dente appena preparato e durare comunque molti anni.',
      'Alla Veneer Clinic di Tirana, le nostre faccette E.max sono Made in Germany e l’intero trattamento si conclude in 3 giorni, in due appuntamenti e con un solo viaggio.',
    ],
    sections: [
      {
        title: 'Cosa sono le faccette E.max?',
        intro: [
          'Le faccette E.max sono sottili gusci in ceramica al disilicato di litio incollati sulla superficie anteriore dei denti naturali. Il materiale viene pressato o fresato da un unico blocco invece di essere stratificato su un nucleo, il che gli conferisce una resistenza alla flessione di circa 400–500 MPa: abbastanza alta perché una faccetta possa avere uno spessore di circa 0,3–0,5 mm e restare affidabile.',
          'Proprio questa sottigliezza è il punto. Meno spessore significa meno preparazione, e preservare lo smalto sano è una delle decisioni con le conseguenze più importanti a lungo termine in qualsiasi caso estetico. Lo smalto è anche la superficie su cui le faccette aderiscono meglio, quindi preservarlo protegge sia il dente sia l’adesione.',
          'Poiché non c’è struttura metallica né nucleo opaco, la luce attraversa una faccetta E.max quasi esattamente come attraversa lo smalto. Nulla scurisce il dente e nulla crea ombre sul bordo gengivale con il passare degli anni.',
        ],
      },
      {
        title: 'Cosa possono correggere le faccette E.max',
        intro: ['Le faccette sono descritte come un trattamento estetico, anche se i problemi che risolvono raramente sembrano solo estetici a chi li vive:'],
        points: [
          { title: 'Macchie profonde o interne:', text: 'da tetraciclina, fluorosi o scurimento dovuto all’età, che lo sbiancamento non riesce a schiarire perché il colore è dentro il dente, non sopra.' },
          { title: 'Bordi scheggiati o consumati:', text: 'dal bruxismo, da cibi acidi o semplicemente dagli anni di uso, quando i denti anteriori hanno perso forma e lunghezza originali.' },
          { title: 'Spazi tra i denti:', text: 'spazi da lievi a moderati chiusi senza ortodonzia.' },
          { title: 'Lieve sovrapposizione o rotazione,', text: 'quando un trattamento ortodontico completo sarebbe più di quanto richieda il risultato.' },
          { title: 'Forma o dimensioni non armoniche:', text: 'denti troppo corti, stretti o asimmetrici rispetto alla linea del sorriso.' },
          { title: 'Vecchie otturazioni in composito', text: 'macchiate ai bordi o non più in armonia con i denti vicini.' },
        ],
        outro: [
          'Gengive sane e smalto sufficiente per l’adesione sono la base. Quando uno dei due va trattato prima, lo includiamo nel tuo piano. Il bruxismo si gestisce senza problemi con la scelta giusta del materiale e un bite notturno.',
        ],
      },
      {
        title: 'Faccette o corone: come decidiamo',
        cards: [
          { title: 'Una faccetta', text: 'copre la parte anteriore del dente e richiede una preparazione minima. Quando il dente è sano con un buon smalto, offre un risultato estetico eccellente preservando il più possibile il dente naturale. È la nostra scelta preferita ogni volta che la situazione clinica lo consente.' },
          { title: 'Una corona', text: 'riveste completamente il dente. È la scelta giusta quando il dente è devitalizzato, con grandi otturazioni, incrinato o senza smalto sufficiente per un’adesione affidabile: in questi casi la copertura completa è davvero il restauro più solido nel lungo periodo. Per questi denti usiamo di solito corone in zirconia.' },
        ],
        outro: [
          'La maggior parte dei casi completi usa entrambe. Il tuo piano scritto indica, dente per dente, cosa verrà applicato e perché, così sai esattamente cosa riceverai prima di iniziare.',
          'Se il tuo caso si risolve meglio con qualcosa di più semplice, come uno sbiancamento o faccette in composito su due denti invece di faccette E.max su otto, te lo diciamo durante la visita. Un consiglio di cui fidarti vale più di un piano di trattamento più grande.',
        ],
      },
      {
        title: 'Come funziona il trattamento da noi',
        inline: [
          { title: 'Visita e pianificazione.', text: 'Alla prima visita eseguiamo un esame clinico completo, una radiografia panoramica e una valutazione di gengive e morso. Definiamo il piano in base a ciò che troviamo e concordiamo con te forma, lunghezza e colore del nuovo sorriso prima di iniziare.' },
          { title: 'Preparazione.', text: 'Si prepara una quantità minima di smalto per creare lo spazio necessario alle faccette. La quantità esatta dipende dal tuo caso e la manteniamo al minimo consentito da ogni dente.' },
          { title: 'Laboratorio e materiali.', text: 'Le impronte e il colore concordato vengono inviati al laboratorio. Le tue faccette sono realizzate in ceramica E.max, Made in Germany, costruite per il tuo caso e non su un modello standard, e rifinite con la texture superficiale e le sottili variazioni di colore che rendono la ceramica naturale, non uniforme.' },
          { title: 'Prova.', text: 'Le faccette vengono provate prima dell’adesione definitiva, così adattamento, colore e profilo possono essere verificati sul tuo viso e regolati finché le modifiche sono ancora semplici.' },
          { title: 'Applicazione e controllo finale.', text: 'Quando sei soddisfatto, le faccette vengono incollate, il morso viene regolato perché tutto chiuda comodamente e ogni superficie viene lucidata prima che tu vada via.' },
        ],
        outro: ['La maggior parte dei casi si conclude in 3 giorni, in due appuntamenti e con un solo viaggio.'],
      },
      {
        title: 'Perché Veneer Clinic',
        inline: [
          { title: 'Preparazione conservativa.', text: 'Riduciamo lo smalto al minimo consentito da ogni dente, perché ciò che si rimuove non ricresce e proprio sullo smalto le faccette aderiscono meglio.' },
          { title: 'Made in Germany.', text: 'Le nostre faccette E.max sono realizzate con qualità tedesca, con materiali di riferimento nell’odontoiatria estetica europea.' },
          { title: 'Preventivo scritto, elemento per elemento.', text: 'Sai quante faccette e a quale prezzo prima di iniziare, e il preventivo non cambia una volta sulla poltrona.' },
          { title: 'Il tuo sorriso concordato in anticipo.', text: 'Forma, lunghezza e colore vengono decisi insieme a te prima di iniziare.' },
          { title: 'Dopo il trattamento.', text: 'Ricevi istruzioni scritte per la cura e controlli regolari, così faccette e gengive restano in buone condizioni per anni.' },
        ],
      },
      {
        title: 'Quanto durano le faccette E.max?',
        intro: [
          'Con una buona adesione, gengive sane e cure costanti, le faccette E.max durano di solito dai dieci ai quindici anni, spesso di più. Ciò che ne allunga la vita è semplice: spazzolamento quotidiano e pulizia tra i denti, sedute di igiene regolari, un bite notturno se digrigni i denti ed evitare carichi puntuali come ghiaccio, penne, confezioni e unghie.',
          'L’E.max resiste alle macchie molto meglio del composito. Caffè, vino e tabacco non scoloriscono la ceramica, ma agiscono sui denti naturali circostanti, per questo le sedute di igiene contano per l’aspetto dell’intero risultato.',
        ],
      },
    ],
    stats: [
      { value: '3 giorni', label: 'Durata del trattamento' },
      { value: '2', label: 'Appuntamenti: preparazione, poi applicazione' },
      { value: '1', label: 'Viaggio' },
      { value: '10–15 anni', label: 'Durata tipica' },
    ],
    priceTitle: 'Prezzo per dente',
    priceNote: 'Faccetta o corona, Made in Germany',
    whatTitle: 'Cosa sono le faccette E.max?',
    what: [
      'Le faccette E.max sono realizzate in disilicato di litio, una vetroceramica apprezzata per la sua resistenza e per il modo in cui trasmette la luce proprio come lo smalto naturale. Ogni faccetta è realizzata sulle impronte del tuo dente e incollata sulla superficie anteriore dopo aver rimosso solo un sottile strato di smalto, spesso meno che con la porcellana tradizionale.',
      'Poiché il materiale è più resistente della porcellana standard, le faccette E.max possono essere più sottili e resistere comunque alla frattura, ed è proprio questo che consente una riduzione così piccola del dente.',
    ],
    calloutTitle: 'Le faccette sono una scelta a lungo termine',
    calloutText:
      'Anche con una preparazione minima, le faccette richiedono la rimozione di smalto che non ricresce. Prima di decidere, concordiamo con te forma, lunghezza e colore e possiamo mostrarti un mock-up in composito sui tuoi denti.',
    compareTitle: 'E.max o faccette in composito',
    compareIntro: 'Entrambe correggono colore, forma e spazi: la differenza sta nella resistenza, nell’aspetto e nella durata.',
    compare: [
      { id: 'crown-emax', tag: 'Questo trattamento', title: 'E.max (disilicato di litio)', text: 'Più resistente e meno soggetta a fratture della porcellana tradizionale, consente una faccetta più sottile e una minore rimozione di smalto. Non si macchia e mantiene la sua lucentezza per anni.' },
      { id: 'veneer-composite', tag: 'Alternativa', title: 'Faccette in composito', text: 'Un’opzione più economica modellata direttamente sul dente, senza laboratorio e con riduzione minima o nulla, ma meno durevole e più soggetta alle macchie rispetto alla ceramica.' },
    ],
    fitTitle: 'Per chi sono le faccette E.max?',
    fitIntro: 'Vale la pena considerare le faccette E.max se desideri correggere:',
    fit: ['Colore dei denti e macchie', 'Forme irregolari dei denti', 'Dimensioni e simmetria dei denti', 'Imperfezioni estetiche'],
    fitNote:
      'Le faccette E.max richiedono la rimozione di un sottile strato di smalto che non ricresce. Se desideri vedere il risultato in anticipo, possiamo iniziare con un mock-up in composito direttamente sui tuoi denti.',
    stepsTitle: 'Come funziona il trattamento',
    stepsIntro: 'Le faccette E.max richiedono di solito due appuntamenti: uno per pianificazione e preparazione, un altro per l’applicazione.',
    steps: [
      { title: 'Visita e valutazione', text: 'Il dentista esamina denti, gengive e morso e parla con te di cosa desideri cambiare. Qui confermiamo se le faccette E.max sono la scelta giusta per il tuo caso.' },
      { title: 'Pianificazione del trattamento', text: 'Il nuovo sorriso viene pianificato in base alle proporzioni del viso, alla forma dei denti e alle tue preferenze. Concordiamo forma, lunghezza e colore prima di ogni preparazione.' },
      { title: 'Preparazione dei denti', text: 'Si prepara una quantità minima di smalto per creare lo spazio necessario alle faccette. La quantità esatta dipende dal caso e resta al minimo consentito dal dente.' },
      { title: 'Impronte e laboratorio', text: 'Impronte dettagliate vanno in laboratorio insieme al colore concordato. Le faccette sono realizzate in ceramica E.max, con texture e sfumature naturali.' },
      { title: 'Applicazione delle faccette', text: 'Quando le faccette sono pronte, il dentista controlla forma, colore e adattamento ai denti vicini. Quando sei soddisfatto del risultato, vengono incollate definitivamente.' },
      { title: 'Ritocchi finali', text: 'Morso e sorriso vengono controllati con cura, con gli ultimi ritocchi e la lucidatura, perché le faccette funzionino bene e non siano solo belle.' },
    ],
    whyBandTitle: 'Perché scegliere Veneer Clinic per le faccette E.max?',
    whyBandText:
      'Prepariamo in modo conservativo, preservando il più possibile lo smalto, e concordiamo con te forma, lunghezza e colore prima di toccare i denti. Le faccette vengono poi realizzate su misura, Made in Germany.',
    caseText: 'Sorriso migliorato con faccette E.max',
    faq: [
      { question: 'Quanto dente naturale viene rimosso?', answer: 'Solo quanto richiede il caso, di solito una frazione di millimetro di smalto. È proprio la resistenza dell’E.max a spessori ridotti a consentire una preparazione così conservativa.' },
      { question: 'Fa male?', answer: 'La preparazione viene eseguita in anestesia locale. Una lieve sensibilità tra la preparazione e l’applicazione definitiva è normale e scompare una volta incollate le faccette.' },
      { question: 'Posso scegliere quanto saranno bianche?', answer: 'Sì. Il colore viene deciso insieme a te prima di iniziare. Ti daremo un parere sincero su cosa apparirà naturale con la tua carnagione e i tuoi lineamenti: la maggior parte dei pazienti sceglie una o due tonalità sotto la più chiara.' },
      { question: 'Si vedrà che ho le faccette?', answer: 'Le faccette E.max ben realizzate sono molto difficili da notare. A tradirle sono il modo in cui il materiale trasmette la luce, la texture superficiale e le sottili variazioni di colore, ed è proprio lì che mettiamo la nostra cura.' },
      { question: 'Faccetta o corona: cosa è meglio per me?', answer: 'Dipende da ogni dente. Quando il dente è sano con un buon smalto, la faccetta preserva di più. Quando è devitalizzato o molto restaurato, la corona è più resistente. Il tuo piano indica quale soluzione vale per ciascun dente.' },
      { question: 'Quanti appuntamenti servono?', answer: 'Di solito due, in 3 giorni e con un solo viaggio: uno per visita, pianificazione e preparazione, e uno per la prova e l’applicazione delle faccette. Ti forniamo il calendario esatto insieme al piano di trattamento.' },
      { question: 'Quanto costa una faccetta E.max?', answer: '300 € per dente, per faccetta o corona E.max. Inviaci una radiografia panoramica e ti daremo un preventivo con circa il 90% di precisione prima di partire.' },
      { question: 'Il trattamento è permanente?', answer: 'Sì. Una volta preparato lo smalto, le faccette vengono sostituite alla fine della loro vita invece di essere semplicemente rimosse. Per questo prepariamo in modo conservativo, affinché il dente sottostante resti il più forte possibile.' },
      { question: 'Come mi prendo cura delle faccette dopo l’applicazione?', answer: 'Proprio come i denti naturali: spazzolamento due volte al giorno, pulizia tra i denti e sedute di igiene regolari. Se digrigni i denti di notte, ti prepariamo un bite notturno che protegge la ceramica.' },
    ],
  },
};

export default function EmaxVeneersPage() {
  return (
    <TreatmentArticle
      content={content}
      itemId="crown-emax"
      heroImage={images.emaxAfter}
      whatImage={images.results[2]?.[0] ?? images.heroAfter}
    />
  );
}
