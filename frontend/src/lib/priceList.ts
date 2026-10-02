import type { Lang } from '@/lib/translations';

export type Localized = Record<Lang, string>;

export interface PriceItem {
  id: string;
  icon: string;
  name: Localized;
  /** Single price, [from, to] range in EUR, or 'free' */
  price: number | [number, number] | 'free';
  unit?: Localized;
  description: Localized;
  duration: Localized;
  visits: Localized;
  healing?: Localized;
}

export type PriceGroupId =
  | 'hygiene'
  | 'whitening'
  | 'implants'
  | 'advanced-implants'
  | 'fillings'
  | 'crowns'
  | 'prosthetics'
  | 'orthodontics'
  | 'diagnostics'
  | 'surgery';

export interface PriceGroup {
  id: PriceGroupId;
  title: Localized;
  intro?: Localized;
  items: PriceItem[];
}

const perTooth: Localized = { en: 'per tooth', de: 'pro Zahn', it: 'per dente', sq: 'për dhëmb' };
const perImplant: Localized = { en: 'per implant', de: 'pro Implantat', it: 'per impianto', sq: 'për implant' };
const perJaw: Localized = { en: 'per jaw', de: 'pro Kiefer', it: 'per arcata', sq: 'për nofull' };
const fullPackage: Localized = {
  en: 'full package, per jaw',
  de: 'Komplettpaket, pro Kiefer',
  it: 'pacchetto completo, per arcata',
  sq: 'paketë e plotë, për nofull',
};

function oneTrip(days: string): Localized {
  const single = days === '1';
  return {
    en: `1 trip · ${days} ${single ? 'day' : 'days'}`,
    de: `1 Reise · ${days} ${single ? 'Tag' : 'Tage'}`,
    it: `1 viaggio · ${days} ${single ? 'giorno' : 'giorni'}`,
    sq: `1 udhëtim · ${days} ditë`,
  };
}

const oneVisit = oneTrip('1');
const fullTreatment: Localized = { en: 'full treatment', de: 'gesamte Behandlung', it: 'trattamento completo', sq: 'trajtim i plotë' };
const twoTrips: Localized = { en: '2 trips', de: '2 Reisen', it: '2 viaggi', sq: '2 udhëtime' };
const implantWait: Localized = {
  en: '6 months between the two trips',
  de: '6 Monate zwischen den beiden Reisen',
  it: '6 mesi tra i due viaggi',
  sq: '6 muaj ndërmjet dy udhëtimeve',
};

export const priceGroups: PriceGroup[] = [
  {
    id: 'diagnostics',
    title: {
      en: 'Examination & Diagnostics',
      de: 'Untersuchung & Diagnostik',
      it: 'Visita e diagnostica',
      sq: 'Ekzaminim dhe diagnostikë',
    },
    items: [
      {
        id: 'dental-exam',
        icon: 'stethoscope',
        name: {
          en: 'Dental examination',
          de: 'Zahnärztliche Untersuchung',
          it: 'Visita odontoiatrica',
          sq: 'Ekzaminim dentar',
        },
        price: 'free',
        description: {
          en: 'A complete check of teeth, gums, bite, existing work and soft tissues, with your X-rays reviewed together. You leave with a written treatment plan and a detailed quote, with no obligation.',
          de: 'Eine vollständige Kontrolle von Zähnen, Zahnfleisch, Biss, bestehenden Arbeiten und Weichgewebe, mit gemeinsamer Besprechung Ihrer Röntgenbilder. Sie erhalten einen schriftlichen Behandlungsplan und ein detailliertes Angebot, unverbindlich.',
          it: 'Un controllo completo di denti, gengive, morso, lavori esistenti e tessuti molli, con le radiografie esaminate insieme. Esci con un piano di trattamento scritto e un preventivo dettagliato, senza impegno.',
          sq: 'Kontroll i plotë i dhëmbëve, mishrave, kafshimit, punimeve ekzistuese dhe indeve të buta, me radiografitë të shqyrtuara bashkë. Largoheni me një plan trajtimi me shkrim dhe një ofertë të detajuar, pa asnjë detyrim.',
        },
        duration: { en: '30–45 min', de: '30–45 Min.', it: '30–45 min', sq: '30–45 min' },
        visits: oneVisit,
      },
      {
        id: 'ct-scan',
        icon: 'view_in_ar',
        name: {
          en: '3D CT scan (CBCT)',
          de: '3D-Röntgen (DVT)',
          it: 'TAC 3D (CBCT)',
          sq: 'Skanim 3D CT',
        },
        price: 'free',
        unit: { en: 'with your treatment', de: 'im Rahmen Ihrer Behandlung', it: 'con il trattamento', sq: 'me trajtimin tuaj' },
        description: {
          en: 'A low-dose cone-beam 3D scan of bone, roots, nerves and sinuses, taken in under a minute. Used when it changes the plan: implants, difficult extractions and complex root canals. Free for patients treated with us.',
          de: 'Ein niedrig dosierter 3D-Scan (digitale Volumentomographie) von Knochen, Wurzeln, Nerven und Kieferhöhlen, in weniger als einer Minute. Eingesetzt, wenn er den Plan verändert: Implantate, schwierige Extraktionen und komplexe Wurzelbehandlungen. Kostenlos für Patienten in Behandlung bei uns.',
          it: 'Una scansione 3D cone-beam a basso dosaggio di osso, radici, nervi e seni, eseguita in meno di un minuto. Si usa quando cambia il piano: impianti, estrazioni difficili e cure canalari complesse. Gratuita per i pazienti in trattamento da noi.',
          sq: 'Skanim 3D me rreze konike dhe dozë të ulët i kockës, rrënjëve, nervave dhe sinuseve, në më pak se një minutë. Përdoret kur ndryshon planin: implante, heqje të vështira dhe trajtime kanali komplekse. Falas për pacientët që trajtohen te ne.',
        },
        duration: { en: 'Under 1 min', de: 'Unter 1 Min.', it: 'Meno di 1 min', sq: 'Nën 1 min' },
        visits: oneVisit,
      },
    ],
  },
  {
    id: 'hygiene',
    title: {
      en: 'Dental Hygiene',
      de: 'Prophylaxe',
      it: 'Igiene dentale',
      sq: 'Higjienë dentare',
    },
    items: [
      {
        id: 'scaling',
        icon: 'clean_hands',
        name: {
          en: 'Scaling & polishing',
          de: 'Zahnsteinentfernung & Politur',
          it: 'Ablazione del tartaro e lucidatura',
          sq: 'Pastrim gurëzash',
        },
        price: 30,
        description: {
          en: 'Ultrasonic removal of tartar and plaque above and just below the gumline, followed by polishing. Usually painless and done without anaesthesia. Recommended every 6 months.',
          de: 'Entfernung von Zahnstein und Belägen ober- und knapp unterhalb des Zahnfleischrands mit Ultraschall, anschließend Politur. In der Regel schmerzfrei und ohne Betäubung. Empfohlen alle 6 Monate.',
          it: 'Rimozione ad ultrasuoni di tartaro e placca sopra e appena sotto il bordo gengivale, seguita da lucidatura. Generalmente indolore e senza anestesia. Consigliata ogni 6 mesi.',
          sq: 'Heqja me ultratinguj e gurëzave dhe pllakës mbi dhe pak nën vijën e mishit të dhëmbëve, e ndjekur nga lustrimi. Zakonisht pa dhimbje dhe pa anestezi. Rekomandohet çdo 6 muaj.',
        },
        duration: { en: '30–60 min', de: '30–60 Min.', it: '30–60 min', sq: '30–60 min' },
        visits: oneVisit,
      },
    ],
  },
  {
    id: 'whitening',
    title: {
      en: 'Teeth Whitening',
      de: 'Bleaching',
      it: 'Sbiancamento',
      sq: 'Zbardhim',
    },
    items: [
      {
        id: 'whitening',
        icon: 'auto_awesome',
        name: {
          en: 'Professional teeth whitening',
          de: 'Professionelles Bleaching',
          it: 'Sbiancamento professionale',
          sq: 'Zbardhim profesional dhëmbësh',
        },
        price: 150,
        description: {
          en: 'In-clinic whitening with a professional-strength gel while your gums are protected. Teeth are typically several shades lighter after one session. Mild sensitivity for 24–48 hours is normal; avoid coffee, red wine and other staining foods for 48 hours.',
          de: 'Bleaching in der Praxis mit professionellem Gel, während das Zahnfleisch geschützt wird. Die Zähne sind nach einer Sitzung meist mehrere Nuancen heller. Leichte Empfindlichkeit für 24–48 Stunden ist normal; 48 Stunden lang auf Kaffee, Rotwein und färbende Lebensmittel verzichten.',
          it: 'Sbiancamento in studio con gel professionale, proteggendo le gengive. Dopo una seduta i denti risultano in genere più chiari di diverse tonalità. Una lieve sensibilità per 24–48 ore è normale; evitare caffè, vino rosso e cibi pigmentanti per 48 ore.',
          sq: 'Zbardhim në klinikë me xhel profesional, duke mbrojtur mishin e dhëmbëve. Pas një seance dhëmbët zakonisht janë disa nuanca më të bardhë. Ndjeshmëria e lehtë për 24–48 orë është normale; shmangni kafen, verën e kuqe dhe ushqimet që njollosin për 48 orë.',
        },
        duration: { en: '60–90 min', de: '60–90 Min.', it: '60–90 min', sq: '60–90 min' },
        visits: oneVisit,
      },
    ],
  },
  {
    id: 'implants',
    title: {
      en: 'Implants & All-on-X',
      de: 'Implantate & All-on-X',
      it: 'Impianti e All-on-X',
      sq: 'Implante & All-on-X',
    },
    intro: {
      en: 'Every implant treatment takes 2 trips: on the first the implants are placed, then they need 6 months to fuse with the bone before the final teeth are fitted on the second trip.',
      de: 'Jede Implantatbehandlung erfordert 2 Reisen: Bei der ersten werden die Implantate gesetzt, danach brauchen sie 6 Monate zum Einheilen in den Knochen, bevor bei der zweiten Reise die definitiven Zähne eingesetzt werden.',
      it: 'Ogni trattamento implantare richiede 2 viaggi: al primo si inseriscono gli impianti, che poi hanno bisogno di 6 mesi per integrarsi nell’osso prima di applicare i denti definitivi al secondo viaggio.',
      sq: 'Çdo trajtim me implante kërkon 2 udhëtime: në të parin vendosen implantet, të cilat më pas kanë nevojë për 6 muaj që të integrohen me kockën, para se në udhëtimin e dytë të vendosen dhëmbët përfundimtarë.',
    },
    items: [
      {
        id: 'implant-megagen',
        icon: 'hardware',
        name: {
          en: 'MegaGen titanium implant',
          de: 'MegaGen Titanimplantat',
          it: 'Impianto in titanio MegaGen',
          sq: 'Implant MegaGen-Titanium',
        },
        price: 500,
        unit: perImplant,
        description: {
          en: 'A premium Korean titanium implant placed under local anaesthesia to replace the root of a missing tooth. After it has fused with the bone, a crown is fixed on top. The crown is quoted separately.',
          de: 'Hochwertiges koreanisches Titanimplantat, das unter örtlicher Betäubung als Ersatz für die Zahnwurzel eingesetzt wird. Nach dem Einheilen in den Knochen wird eine Krone darauf befestigt. Die Krone wird separat berechnet.',
          it: 'Impianto coreano in titanio di alta qualità, inserito in anestesia locale per sostituire la radice del dente mancante. Dopo l’osteointegrazione viene fissata una corona. La corona è quotata a parte.',
          sq: 'Implant premium korean prej titani, i vendosur me anestezi lokale për të zëvendësuar rrënjën e dhëmbit që mungon. Pasi integrohet me kockën, mbi të vendoset një kurorë. Kurora llogaritet veçmas.',
        },
        duration: {
          en: '30–60 min per implant',
          de: '30–60 Min. pro Implantat',
          it: '30–60 min per impianto',
          sq: '30–60 min për implant',
        },
        visits: {
          en: '2 trips: implant, then crown',
          de: '2 Reisen: Implantat, dann Krone',
          it: '2 viaggi: impianto, poi corona',
          sq: '2 udhëtime: implanti, pastaj kurora',
        },
        healing: implantWait,
      },
      {
        id: 'implant-bridge',
        icon: 'linear_scale',
        name: {
          en: 'Implant-supported bridge',
          de: 'Implantatgetragene Brücke',
          it: 'Ponte su impianti',
          sq: 'Urë e mbështetur nga implante',
        },
        price: 500,
        unit: perImplant,
        description: {
          en: 'Replaces several missing teeth in a row with one fixed bridge carried by two or three MegaGen implants, without grinding down any healthy teeth. Three missing teeth usually need only two implants. The bridge itself is quoted separately, depending on material and number of teeth.',
          de: 'Ersetzt mehrere nebeneinander fehlende Zähne durch eine feste Brücke auf zwei oder drei MegaGen-Implantaten, ohne gesunde Zähne zu beschleifen. Drei fehlende Zähne brauchen meist nur zwei Implantate. Die Brücke selbst wird je nach Material und Zahnzahl separat berechnet.',
          it: 'Sostituisce più denti mancanti in fila con un unico ponte fisso sostenuto da due o tre impianti MegaGen, senza limare denti sani. Tre denti mancanti richiedono di solito solo due impianti. Il ponte è quotato a parte, in base al materiale e al numero di denti.',
          sq: 'Zëvendëson disa dhëmbë të munguar me radhë me një urë fikse të mbajtur nga dy ose tre implante MegaGen, pa gdhendur asnjë dhëmb të shëndetshëm. Tre dhëmbë të munguar zakonisht kërkojnë vetëm dy implante. Ura llogaritet veçmas, sipas materialit dhe numrit të dhëmbëve.',
        },
        duration: {
          en: '1–2 hours for 2–3 implants',
          de: '1–2 Stunden für 2–3 Implantate',
          it: '1–2 ore per 2–3 impianti',
          sq: '1–2 orë për 2–3 implante',
        },
        visits: {
          en: '2 trips: implants, then bridge',
          de: '2 Reisen: Implantate, dann Brücke',
          it: '2 viaggi: impianti, poi ponte',
          sq: '2 udhëtime: implantet, pastaj ura',
        },
        healing: implantWait,
      },
      {
        id: 'all-on-4',
        icon: 'view_week',
        name: {
          en: 'All-on-4',
          de: 'All-on-4',
          it: 'All-on-4',
          sq: 'All-on-4',
        },
        price: 4500,
        unit: fullPackage,
        description: {
          en: 'A complete fixed set of teeth for one jaw, held by 4 implants. Ideal for patients who have lost most or all of their teeth or wear a loose denture. On the first trip the implants are placed and you leave with fixed temporary teeth; on the second trip the final bridge is fitted.',
          de: 'Ein kompletter fester Zahnersatz für einen Kiefer, getragen von 4 Implantaten. Ideal für Patienten, die die meisten oder alle Zähne verloren haben oder eine lockere Prothese tragen. Bei der ersten Reise werden die Implantate gesetzt und Sie reisen mit festen provisorischen Zähnen ab; bei der zweiten Reise wird die definitive Brücke eingesetzt.',
          it: 'Un’arcata completa di denti fissi sostenuta da 4 impianti. Ideale per chi ha perso la maggior parte o tutti i denti o porta una protesi instabile. Al primo viaggio si inseriscono gli impianti e si riparte con denti fissi provvisori; al secondo viaggio si applica il ponte definitivo.',
          sq: 'Një nofull e plotë me dhëmbë fiks, e mbajtur nga 4 implante. Ideale për pacientët që kanë humbur shumicën ose të gjithë dhëmbët, ose që mbajnë protezë që lëviz. Në udhëtimin e parë vendosen implantet dhe largoheni me dhëmbë të përkohshëm fiks; në udhëtimin e dytë vendoset ura përfundimtare.',
        },
        duration: {
          en: '2–3 hours per jaw',
          de: '2–3 Stunden pro Kiefer',
          it: '2–3 ore per arcata',
          sq: '2–3 orë për nofull',
        },
        visits: twoTrips,
        healing: implantWait,
      },
      {
        id: 'all-on-6',
        icon: 'view_column',
        name: {
          en: 'All-on-6',
          de: 'All-on-6',
          it: 'All-on-6',
          sq: 'All-on-6',
        },
        price: 5500,
        unit: fullPackage,
        description: {
          en: 'A complete fixed set of teeth for one jaw, held by 6 implants. The extra implants spread the chewing load for even more stability and longevity, especially in the upper jaw. Same process: fixed temporary teeth on the first trip, final bridge on the second.',
          de: 'Ein kompletter fester Zahnersatz für einen Kiefer, getragen von 6 Implantaten. Die zusätzlichen Implantate verteilen die Kaukraft für noch mehr Stabilität und Langlebigkeit, besonders im Oberkiefer. Gleicher Ablauf: feste Provisorien bei der ersten Reise, definitive Brücke bei der zweiten.',
          it: 'Un’arcata completa di denti fissi sostenuta da 6 impianti. Gli impianti aggiuntivi distribuiscono il carico masticatorio per maggiore stabilità e durata, soprattutto nell’arcata superiore. Stesso percorso: denti fissi provvisori al primo viaggio, ponte definitivo al secondo.',
          sq: 'Një nofull e plotë me dhëmbë fiks, e mbajtur nga 6 implante. Implantet shtesë e shpërndajnë forcën e përtypjes për më shumë stabilitet dhe jetëgjatësi, sidomos në nofullën e sipërme. I njëjti proces: dhëmbë të përkohshëm fiks në udhëtimin e parë, ura përfundimtare në të dytin.',
        },
        duration: {
          en: '2.5–3.5 hours per jaw',
          de: '2,5–3,5 Stunden pro Kiefer',
          it: '2,5–3,5 ore per arcata',
          sq: '2,5–3,5 orë për nofull',
        },
        visits: twoTrips,
        healing: implantWait,
      },
      {
        id: 'sinus-lift',
        icon: 'layers',
        name: {
          en: 'Sinus lift (bone augmentation)',
          de: 'Sinuslift (Knochenaufbau)',
          it: 'Rialzo del seno (innesto osseo)',
          sq: 'Sinuslift (shtim kocke)',
        },
        price: 500,
        description: {
          en: 'Raises the floor of the maxillary sinus and fills it with artificial or human bone graft, creating enough bone height for implants in the upper back jaw. The new bone needs time to mature before the implant can carry a tooth.',
          de: 'Anhebung des Kieferhöhlenbodens und Auffüllen mit künstlichem oder humanem Knochenersatz, um genug Knochenhöhe für Implantate im hinteren Oberkiefer zu schaffen. Der neue Knochen braucht Zeit zum Ausreifen, bevor das Implantat einen Zahn tragen kann.',
          it: 'Solleva il pavimento del seno mascellare e lo riempie con innesto osseo artificiale o umano, creando l’altezza ossea necessaria per gli impianti nell’arcata superiore posteriore. Il nuovo osso ha bisogno di tempo per maturare prima che l’impianto possa sostenere un dente.',
          sq: 'Ngre dyshemenë e sinusit maksilar dhe e mbush me kockë artificiale ose humane, duke krijuar lartësinë e nevojshme të kockës për implante në pjesën e pasme të nofullës së sipërme. Kocka e re ka nevojë për kohë të piqet para se implanti të mbajë dhëmbin.',
        },
        duration: { en: '45–120 min', de: '45–120 Min.', it: '45–120 min', sq: '45–120 min' },
        visits: twoTrips,
        healing: {
          en: '8 months between the two trips',
          de: '8 Monate zwischen den beiden Reisen',
          it: '8 mesi tra i due viaggi',
          sq: '8 muaj ndërmjet dy udhëtimeve',
        },
      },
      {
        id: 'bone-graft',
        icon: 'add_box',
        name: {
          en: 'Bone grafting',
          de: 'Knochenaufbau',
          it: 'Innesto osseo',
          sq: 'Shtim kocke',
        },
        price: 500,
        description: {
          en: 'Rebuilds jawbone that has shrunk after tooth loss, using artificial or human bone graft under a resorbable membrane, so an implant has a solid base. Small grafts are done together with the implant; larger ones heal first and the implant follows.',
          de: 'Baut Kieferknochen wieder auf, der nach Zahnverlust geschwunden ist – mit künstlichem oder humanem Knochenersatz unter einer resorbierbaren Membran –, damit ein Implantat festen Halt hat. Kleine Aufbauten erfolgen zusammen mit dem Implantat, größere heilen zuerst ein.',
          it: 'Ricostruisce l’osso mascellare che si è ridotto dopo la perdita di un dente, con innesto osseo artificiale o umano sotto una membrana riassorbibile, così l’impianto ha una base solida. Gli innesti piccoli si fanno insieme all’impianto; quelli più grandi guariscono prima.',
          sq: 'Rindërton kockën e nofullës që është tërhequr pas humbjes së dhëmbit, me kockë artificiale ose humane nën një membranë të tretshme, që implanti të ketë një bazë të fortë. Shtimet e vogla bëhen bashkë me implantin; të mëdhatë shërohen të parat.',
        },
        duration: { en: '45–60 min per area', de: '45–60 Min. pro Bereich', it: '45–60 min per zona', sq: '45–60 min për zonë' },
        visits: twoTrips,
        healing: {
          en: '6–8 months between the two trips',
          de: '6–8 Monate zwischen den beiden Reisen',
          it: '6–8 mesi tra i due viaggi',
          sq: '6–8 muaj ndërmjet dy udhëtimeve',
        },
      },
    ],
  },
  {
    id: 'advanced-implants',
    title: {
      en: 'Advanced Implant Surgery: Zygomatic & Pterygoid',
      de: 'Fortgeschrittene Implantatchirurgie: Zygoma & Pterygoid',
      it: 'Chirurgia implantare avanzata: zigomatici e pterigoidei',
      sq: 'Kirurgji implantare e avancuar: zigomatik & pterygoid',
    },
    intro: {
      en: 'When are they used? For patients with severe bone loss in the upper jaw, where standard implants have nothing to hold on to. This is common after many years without teeth, after wearing a denture for a long time, or after a failed bone graft. Instead of rebuilding bone with months of grafting, these implants anchor in the dense bone of the cheekbone (zygomatic) or at the very back of the upper jaw (pterygoid). Fixed temporary teeth are often possible within days. Suitability is confirmed with a 3D CT scan.',
      de: 'Wann werden sie eingesetzt? Bei Patienten mit starkem Knochenschwund im Oberkiefer, bei denen normale Implantate keinen Halt finden. Das ist häufig nach vielen Jahren ohne Zähne, nach langem Tragen einer Prothese oder nach einem misslungenen Knochenaufbau der Fall. Statt den Knochen über Monate aufzubauen, werden diese Implantate im dichten Knochen des Jochbeins (Zygoma) oder ganz hinten im Oberkiefer (Pterygoid) verankert. Feste provisorische Zähne sind oft innerhalb weniger Tage möglich. Die Eignung wird mit einem 3D-CT bestätigt.',
      it: 'Quando si usano? Nei pazienti con grave perdita ossea nell’arcata superiore, dove gli impianti standard non trovano appoggio. Succede spesso dopo molti anni senza denti, dopo aver portato a lungo una protesi o dopo un innesto osseo non riuscito. Invece di ricostruire l’osso con mesi di innesti, questi impianti si ancorano nell’osso denso dello zigomo (zigomatici) o nella parte più posteriore dell’arcata (pterigoidei). Spesso è possibile avere denti fissi provvisori in pochi giorni. L’idoneità viene confermata con una TAC 3D.',
      sq: 'Kur përdoren? Te pacientët me humbje të rëndë kocke në nofullën e sipërme, ku implantet standarde nuk kanë ku të mbahen. Kjo ndodh shpesh pas shumë vitesh pa dhëmbë, pas mbajtjes së gjatë të protezës ose pas një shtimi kocke të dështuar. Në vend që kocka të rindërtohet me muaj, këto implante ankorohen në kockën e dendur të mollëzës (zigomatik) ose në pjesën më të pasme të nofullës së sipërme (pterygoid). Dhëmbët e përkohshëm fiks shpesh vendosen brenda pak ditësh. Përshtatshmëria konfirmohet me skanim 3D (CT).',
    },
    items: [
      {
        id: 'implant-zygomatic',
        icon: 'face',
        name: {
          en: 'Zygomatic implant',
          de: 'Zygoma-Implantat',
          it: 'Impianto zigomatico',
          sq: 'Implant zigomatik',
        },
        price: 1500,
        unit: perImplant,
        description: {
          en: 'A long implant anchored in the cheekbone. Recommended when the upper jaw has too little bone even for a sinus lift, or when the patient wants to avoid months of bone grafting. Often combined with standard implants to carry a full fixed bridge. Performed under sedation or general anaesthesia.',
          de: 'Langes Implantat, das im Jochbein verankert wird. Empfohlen, wenn der Oberkiefer selbst für einen Sinuslift zu wenig Knochen hat oder der Patient monatelangen Knochenaufbau vermeiden möchte. Oft kombiniert mit normalen Implantaten für eine komplette feste Brücke. Unter Sedierung oder Vollnarkose.',
          it: 'Impianto lungo ancorato all’osso zigomatico. Consigliato quando l’arcata superiore ha troppo poco osso persino per un rialzo del seno, o quando il paziente vuole evitare mesi di innesti. Spesso combinato con impianti standard per sostenere un ponte fisso completo. Eseguito in sedazione o anestesia generale.',
          sq: 'Implant i gjatë i ankoruar në kockën e mollëzës. Rekomandohet kur nofulla e sipërme ka shumë pak kockë, madje edhe për sinuslift, ose kur pacienti dëshiron të shmangë muajt e shtimit të kockës. Shpesh kombinohet me implante standarde për të mbajtur një urë të plotë fikse. Kryhet me sedacion ose anestezi të përgjithshme.',
        },
        duration: {
          en: '2–4 hours (full arch)',
          de: '2–4 Stunden (ganzer Kiefer)',
          it: '2–4 ore (arcata completa)',
          sq: '2–4 orë (nofull e plotë)',
        },
        visits: twoTrips,
        healing: implantWait,
      },
      {
        id: 'implant-pterygoid',
        icon: 'architecture',
        name: {
          en: 'Pterygoid implant',
          de: 'Pterygoid-Implantat',
          it: 'Impianto pterigoideo',
          sq: 'Implant pterygoid',
        },
        price: 800,
        unit: perImplant,
        description: {
          en: 'An implant anchored in the dense pterygoid bone at the very back of the upper jaw. Recommended when the back of the upper jaw has lost bone and the sinus has dropped. It supports the back teeth without a sinus lift and often allows immediate temporary teeth.',
          de: 'Implantat, das im dichten Pterygoid-Knochen ganz hinten im Oberkiefer verankert wird. Empfohlen, wenn im hinteren Oberkiefer Knochen verloren gegangen und die Kieferhöhle abgesunken ist. Es trägt die Seitenzähne ohne Sinuslift und ermöglicht oft sofortige Provisorien.',
          it: 'Impianto ancorato nell’osso pterigoideo, molto denso, nella parte più posteriore dell’arcata superiore. Consigliato quando la zona posteriore ha perso osso e il seno si è abbassato. Sostiene i denti posteriori senza rialzo del seno e spesso consente denti provvisori immediati.',
          sq: 'Implant i ankoruar në kockën e dendur pterygoide, në pjesën më të pasme të nofullës së sipërme. Rekomandohet kur pjesa e pasme e nofullës ka humbur kockë dhe sinusi ka zbritur. Mban dhëmbët e pasmë pa sinuslift dhe shpesh lejon dhëmbë të përkohshëm menjëherë.',
        },
        duration: { en: '1–2 hours', de: '1–2 Stunden', it: '1–2 ore', sq: '1–2 orë' },
        visits: twoTrips,
        healing: implantWait,
      },
    ],
  },
  {
    id: 'fillings',
    title: {
      en: 'Fillings & Root Canals',
      de: 'Füllungen & Wurzelbehandlung',
      it: 'Otturazioni e devitalizzazioni',
      sq: 'Mbushje dhe trajtim kanali',
    },
    items: [
      {
        id: 'filling-2',
        icon: 'healing',
        name: {
          en: 'Filling, grade II',
          de: 'Füllung, Grad II',
          it: 'Otturazione, grado II',
          sq: 'Mbushje gradë e II',
        },
        price: 50,
        unit: perTooth,
        description: {
          en: 'Tooth-coloured composite filling for a medium-sized cavity. Decay is removed under local anaesthesia and the tooth is restored in a single visit. You can eat normally once the numbness wears off.',
          de: 'Zahnfarbene Kompositfüllung für eine mittelgroße Kavität. Die Karies wird unter örtlicher Betäubung entfernt und der Zahn in einem Termin versorgt. Essen ist wieder möglich, sobald die Betäubung nachlässt.',
          it: 'Otturazione in composito del colore del dente per una carie di media entità. La carie viene rimossa in anestesia locale e il dente ricostruito in un’unica seduta. Si può mangiare normalmente appena svanisce l’anestesia.',
          sq: 'Mbushje kompozite me ngjyrën e dhëmbit për një kavitet me madhësi mesatare. Karies hiqet me anestezi lokale dhe dhëmbi restaurohet në një vizitë. Mund të hani normalisht sapo të kalojë mpirja.',
        },
        duration: { en: '30–45 min', de: '30–45 Min.', it: '30–45 min', sq: '30–45 min' },
        visits: oneVisit,
      },
      {
        id: 'filling-3',
        icon: 'healing',
        name: {
          en: 'Filling, grade III',
          de: 'Füllung, Grad III',
          it: 'Otturazione, grado III',
          sq: 'Mbushje gradë e III',
        },
        price: 70,
        unit: perTooth,
        description: {
          en: 'Composite filling for a deep cavity close to the nerve. A protective liner is placed under the filling to keep the tooth vital. Mild sensitivity for a few days is normal.',
          de: 'Kompositfüllung für eine tiefe Kavität nahe am Nerv. Unter der Füllung wird eine schützende Unterfüllung gelegt, um den Zahn vital zu erhalten. Leichte Empfindlichkeit für einige Tage ist normal.',
          it: 'Otturazione in composito per una carie profonda vicina al nervo. Sotto l’otturazione viene applicato un sottofondo protettivo per mantenere il dente vitale. Una lieve sensibilità per qualche giorno è normale.',
          sq: 'Mbushje kompozite për një kavitet të thellë afër nervit. Nën mbushje vendoset një shtresë mbrojtëse për ta mbajtur dhëmbin të gjallë. Ndjeshmëria e lehtë për disa ditë është normale.',
        },
        duration: { en: '45–60 min', de: '45–60 Min.', it: '45–60 min', sq: '45–60 min' },
        visits: oneVisit,
      },
      {
        id: 'root-canal',
        icon: 'dentistry',
        name: {
          en: 'Root canal treatment',
          de: 'Wurzelkanalbehandlung',
          it: 'Cura canalare (devitalizzazione)',
          sq: 'Trajtim kanali',
        },
        price: 100,
        unit: perTooth,
        description: {
          en: 'Saves an infected or inflamed tooth by removing the damaged pulp, then cleaning, shaping and sealing the canals under local anaesthesia. Back teeth usually need a crown afterwards to protect them.',
          de: 'Rettet einen entzündeten oder infizierten Zahn: Das geschädigte Nervgewebe wird entfernt, die Kanäle unter örtlicher Betäubung gereinigt, aufbereitet und versiegelt. Seitenzähne brauchen danach meist eine Krone zum Schutz.',
          it: 'Salva un dente infiammato o infetto rimuovendo la polpa danneggiata, poi pulendo, sagomando e sigillando i canali in anestesia locale. I denti posteriori di solito hanno bisogno di una corona dopo, per proteggerli.',
          sq: 'Shpëton një dhëmb të infektuar ose të inflamuar duke hequr pulpën e dëmtuar, pastaj duke pastruar, formësuar dhe mbyllur kanalet me anestezi lokale. Dhëmbët e pasmë zakonisht kanë nevojë më pas për një kurorë që t’i mbrojë.',
        },
        duration: { en: '60–90 min', de: '60–90 Min.', it: '60–90 min', sq: '60–90 min' },
        visits: oneTrip('1–2'),
      },
    ],
  },
  {
    id: 'crowns',
    title: {
      en: 'Hollywood Smile (Crowns & Veneers, Made in Germany)',
      de: 'Hollywood Smile (Kronen & Veneers, Made in Germany)',
      it: 'Hollywood Smile (Corone e faccette, Made in Germany)',
      sq: 'Hollywood Smile (Kurora & faseta, Made in Germany)',
    },
    intro: {
      en: 'A Hollywood Smile is a complete smile makeover with crowns or veneers on all visible teeth, usually 8–10 per jaw. The price depends on the material and number of teeth. Gum and tooth contouring is included free of charge.',
      de: 'Ein Hollywood Smile ist eine komplette Lächeln-Neugestaltung mit Kronen oder Veneers auf allen sichtbaren Zähnen, meist 8–10 pro Kiefer. Der Preis richtet sich nach Material und Anzahl der Zähne. Die Zahnfleisch- und Zahnkonturierung ist kostenlos inbegriffen.',
      it: 'Un Hollywood Smile è un rifacimento completo del sorriso con corone o faccette su tutti i denti visibili, di solito 8–10 per arcata. Il prezzo dipende dal materiale e dal numero di denti. Il modellamento di gengive e denti è incluso gratuitamente.',
      sq: 'Hollywood Smile është rikonstruksion i plotë i buzëqeshjes me kurora ose faseta në të gjithë dhëmbët e dukshëm, zakonisht 8–10 për nofull. Çmimi varet nga materiali dhe numri i dhëmbëve. Konturimi i mishit dhe i dhëmbëve përfshihet falas.',
    },
    items: [
      {
        id: 'hollywood-smile',
        icon: 'auto_awesome',
        name: {
          en: 'Hollywood Smile',
          de: 'Hollywood Smile',
          it: 'Hollywood Smile',
          sq: 'Hollywood Smile',
        },
        price: [100, 300],
        unit: perTooth,
        description: {
          en: 'A complete smile makeover: veneers, crowns and whitening planned together around your face. The price depends on the material and the number of teeth; gum contouring is included free of charge.',
          de: 'Eine komplette Lächeln-Neugestaltung: Veneers, Kronen und Bleaching, gemeinsam rund um Ihr Gesicht geplant. Der Preis hängt von Material und Anzahl der Zähne ab; die Zahnfleischkonturierung ist kostenlos inbegriffen.',
          it: 'Un rifacimento completo del sorriso: faccette, corone e sbiancamento pianificati insieme attorno al tuo viso. Il prezzo dipende dal materiale e dal numero di denti; il modellamento gengivale è incluso gratuitamente.',
          sq: 'Rikonstruksion i plotë i buzëqeshjes: faseta, kurora dhe zbardhje të planifikuara së bashku sipas fytyrës suaj. Çmimi varet nga materiali dhe numri i dhëmbëve; konturimi i mishrave përfshihet falas.',
        },
        duration: { en: '3 appointments', de: '3 Termine', it: '3 appuntamenti', sq: '3 seanca' },
        visits: oneTrip('3–5'),
      },
      {
        id: 'crown-emax',
        icon: 'diamond',
        name: {
          en: 'E-max crown & veneer',
          de: 'E-max Krone & Veneer',
          it: 'Corona e faccetta E-max',
          sq: 'Kurorë dhe fasetë Emax',
        },
        price: 300,
        unit: perTooth,
        description: {
          en: 'Lithium-disilicate glass ceramic with the highest translucency for the most natural look. Veneers need only 0.3–0.7 mm of enamel reduction. The first choice for front teeth and smile makeovers.',
          de: 'Lithiumdisilikat-Glaskeramik mit höchster Transluzenz für das natürlichste Ergebnis. Veneers erfordern nur 0,3–0,7 mm Schmelzabtrag. Erste Wahl für Frontzähne und Smile Makeovers.',
          it: 'Vetroceramica al disilicato di litio con la massima traslucenza per il risultato più naturale. Le faccette richiedono solo 0,3–0,7 mm di riduzione dello smalto. Prima scelta per i denti anteriori e il rifacimento del sorriso.',
          sq: 'Qeramikë xhami me disilikat litiumi, me transparencën më të lartë për pamjen më natyrale. Fasetat kërkojnë vetëm 0,3–0,7 mm limim të smaltit. Zgjedhja e parë për dhëmbët e përparmë dhe rikonstruksionin e buzëqeshjes.',
        },
        duration: {
          en: '60–120 min preparation',
          de: '60–120 Min. Präparation',
          it: '60–120 min di preparazione',
          sq: '60–120 min përgatitje',
        },
        visits: oneTrip('3'),
      },
      {
        id: 'veneer-composite',
        icon: 'brush',
        name: {
          en: 'Composite veneer',
          de: 'Komposit-Veneer',
          it: 'Faccetta in composito',
          sq: 'Fasetë kompoziti',
        },
        price: 100,
        unit: perTooth,
        description: {
          en: 'Tooth-coloured composite resin applied and sculpted directly on the tooth, with little or no enamel removal and no lab work. An affordable way to correct colour, small gaps and chipped edges. Less durable than ceramic and may need polishing over time.',
          de: 'Zahnfarbenes Komposit wird direkt auf den Zahn aufgetragen und modelliert, mit wenig oder keinem Schmelzabtrag und ohne Labor. Eine günstige Lösung für Farbe, kleine Lücken und abgebrochene Kanten. Weniger langlebig als Keramik und mit der Zeit eventuell nachzupolieren.',
          it: 'Resina composita del colore del dente applicata e modellata direttamente sul dente, con minima o nessuna riduzione dello smalto e senza laboratorio. Una soluzione economica per correggere colore, piccoli spazi e bordi scheggiati. Meno durevole della ceramica, può richiedere lucidature nel tempo.',
          sq: 'Kompozit me ngjyrën e dhëmbit që aplikohet dhe modelohet direkt mbi dhëmb, me pak ose aspak limim të smaltit dhe pa punë laboratori. Zgjidhje e përballueshme për ngjyrën, hapësirat e vogla dhe cepat e thyer. Më pak e qëndrueshme se qeramika dhe mund të kërkojë lustrim me kalimin e kohës.',
        },
        duration: {
          en: '45–60 min per tooth',
          de: '45–60 Min. pro Zahn',
          it: '45–60 min per dente',
          sq: '45–60 min për dhëmb',
        },
        visits: oneTrip('1–2'),
      },
      {
        id: 'gum-contouring',
        icon: 'auto_fix_high',
        name: {
          en: 'Gum & tooth contouring',
          de: 'Zahnfleisch- & Zahnkonturierung',
          it: 'Modellamento di gengive e denti',
          sq: 'Konturim i mishit dhe i dhëmbëve',
        },
        price: 'free',
        unit: {
          en: 'included in Hollywood Smile',
          de: 'im Hollywood Smile inbegriffen',
          it: 'incluso nell’Hollywood Smile',
          sq: 'përfshihet në Hollywood Smile',
        },
        description: {
          en: 'The gumline is reshaped with a laser so every tooth shows the same, harmonious height, and tooth edges are gently refined for a balanced, symmetrical smile. Done under local anaesthesia before your veneers or crowns are prepared.',
          de: 'Der Zahnfleischrand wird mit dem Laser so geformt, dass jeder Zahn eine gleichmäßige, harmonische Höhe zeigt, und die Zahnkanten werden sanft angepasst für ein ausgewogenes, symmetrisches Lächeln. Unter örtlicher Betäubung, bevor Ihre Veneers oder Kronen präpariert werden.',
          it: 'Il margine gengivale viene rimodellato con il laser in modo che ogni dente mostri un’altezza uniforme e armoniosa, e i bordi dei denti vengono rifiniti delicatamente per un sorriso equilibrato e simmetrico. In anestesia locale, prima della preparazione di faccette o corone.',
          sq: 'Vija e mishit të dhëmbëve rregullohet me lazer që çdo dhëmb të ketë lartësi të njëjtë dhe harmonike, dhe cepat e dhëmbëve rafinohen lehtë për një buzëqeshje të balancuar dhe simetrike. Bëhet me anestezi lokale, para përgatitjes së fasetave ose kurorave.',
        },
        duration: { en: '30–60 min', de: '30–60 Min.', it: '30–60 min', sq: '30–60 min' },
        visits: {
          en: 'Same trip as your Hollywood Smile',
          de: 'Während der Hollywood-Smile-Reise',
          it: 'Nello stesso viaggio dell’Hollywood Smile',
          sq: 'Në të njëjtin udhëtim me Hollywood Smile',
        },
        healing: {
          en: 'Gums settle in about 1 week',
          de: 'Zahnfleisch beruhigt sich in ca. 1 Woche',
          it: 'Le gengive si assestano in circa 1 settimana',
          sq: 'Mishi qetësohet për rreth 1 javë',
        },
      },
    ],
  },
  {
    id: 'prosthetics',
    title: {
      en: 'Crowns & Dentures',
      de: 'Kronen & Prothesen',
      it: 'Corone e protesi',
      sq: 'Kurora dhe proteza',
    },
    items: [
      {
        id: 'crown-zirconia',
        icon: 'shield',
        name: {
          en: 'Zirconia crown',
          de: 'Zirkonkrone',
          it: 'Corona in zirconia',
          sq: 'Kurorë zirkoni',
        },
        price: 200,
        unit: perTooth,
        description: {
          en: 'Metal-free crown milled from high-strength zirconia. Extremely durable and biocompatible, with a natural white appearance and no dark line at the gum. Suitable for front and back teeth.',
          de: 'Metallfreie Krone aus hochfestem Zirkonoxid. Extrem belastbar und biokompatibel, mit natürlich weißer Optik ohne dunklen Rand am Zahnfleisch. Für Front- und Seitenzähne geeignet.',
          it: 'Corona senza metallo fresata in zirconia ad alta resistenza. Estremamente durevole e biocompatibile, con un aspetto bianco naturale e senza bordo scuro sulla gengiva. Adatta a denti anteriori e posteriori.',
          sq: 'Kurorë pa metal e frezuar nga zirkon me rezistencë të lartë. Shumë e qëndrueshme dhe biokompatibile, me pamje të bardhë natyrale dhe pa vijë të errët te mishi. E përshtatshme për dhëmbët e përparmë dhe të pasmë.',
        },
        duration: {
          en: '60–90 min preparation',
          de: '60–90 Min. Präparation',
          it: '60–90 min di preparazione',
          sq: '60–90 min përgatitje',
        },
        visits: oneTrip('3'),
      },
      {
        id: 'crown-porcelain',
        icon: 'layers',
        name: {
          en: 'Porcelain-metal crown',
          de: 'Metallkeramikkrone',
          it: 'Corona in metallo-ceramica',
          sq: 'Kurorë porcelan-metal',
        },
        price: 100,
        unit: perTooth,
        description: {
          en: 'Metal-ceramic crown: a strong metal framework covered with tooth-coloured porcelain. A durable, economical choice, especially for back teeth. A temporary crown is worn while the final one is made.',
          de: 'Metallkeramikkrone: stabiles Metallgerüst mit zahnfarbener Keramikverblendung. Langlebig und preiswert, besonders für Seitenzähne. Bis zur Fertigstellung tragen Sie ein Provisorium.',
          it: 'Corona in metallo-ceramica: struttura metallica resistente rivestita di porcellana del colore del dente. Scelta durevole ed economica, soprattutto per i denti posteriori. Nell’attesa si porta una corona provvisoria.',
          sq: 'Kurorë metal-qeramike: skelet i fortë metalik i veshur me porcelan me ngjyrën e dhëmbit. Zgjedhje e qëndrueshme dhe ekonomike, sidomos për dhëmbët e pasmë. Gjatë përgatitjes mbani një kurorë të përkohshme.',
        },
        duration: {
          en: '60–90 min preparation',
          de: '60–90 Min. Präparation',
          it: '60–90 min di preparazione',
          sq: '60–90 min përgatitje',
        },
        visits: oneTrip('5'),
      },
      {
        id: 'denture',
        icon: 'sentiment_satisfied',
        name: {
          en: 'Removable denture',
          de: 'Herausnehmbare Prothese',
          it: 'Protesi mobile',
          sq: 'Protezë e lëvizshme',
        },
        price: 600,
        unit: perJaw,
        description: {
          en: 'A custom full or partial denture for one jaw. Impressions, bite registration, wax try-in and final fitting are all done within one 7-day stay, and adjustments are made before you fly home. Expect a few weeks of getting used to it.',
          de: 'Individuelle Voll- oder Teilprothese für einen Kiefer. Abdruck, Bissregistrierung, Wachseinprobe und Eingliederung erfolgen innerhalb eines 7-tägigen Aufenthalts, Anpassungen werden vor Ihrer Heimreise vorgenommen. Rechnen Sie mit einigen Wochen Eingewöhnung.',
          it: 'Protesi totale o parziale su misura per un’arcata. Impronte, registrazione del morso, prova in cera e consegna avvengono in un unico soggiorno di 7 giorni, con le regolazioni fatte prima del rientro. Servono alcune settimane di adattamento.',
          sq: 'Protezë e plotë ose e pjesshme e personalizuar për një nofull. Masat, regjistrimi i kafshimit, prova në dyll dhe vendosja bëhen brenda një qëndrimi 7-ditor, dhe korrigjimet bëhen para se të ktheheni në shtëpi. Duhen disa javë për t’u mësuar.',
        },
        duration: {
          en: '30–60 min per appointment',
          de: '30–60 Min. pro Termin',
          it: '30–60 min per seduta',
          sq: '30–60 min për vizitë',
        },
        visits: oneTrip('7'),
        healing: {
          en: '2–4 weeks of adjustment',
          de: '2–4 Wochen Eingewöhnung',
          it: '2–4 settimane di adattamento',
          sq: '2–4 javë përshtatje',
        },
      },
    ],
  },
  {
    id: 'orthodontics',
    title: {
      en: 'Orthodontics',
      de: 'Kieferorthopädie',
      it: 'Ortodonzia',
      sq: 'Ortodonci',
    },
    items: [
      {
        id: 'aligners',
        icon: 'align_horizontal_center',
        name: {
          en: 'Invisible aligners',
          de: 'Unsichtbare Aligner',
          it: 'Allineatori invisibili',
          sq: 'Aligner të padukshëm',
        },
        price: 1700,
        unit: fullTreatment,
        description: {
          en: 'Clear, removable trays that straighten teeth step by step. Each aligner is worn for about two weeks, 20–22 hours a day. The movement plan is shown to you and approved before anything is made.',
          de: 'Transparente, herausnehmbare Schienen, die die Zähne Schritt für Schritt begradigen. Jeder Aligner wird etwa zwei Wochen lang 20–22 Stunden am Tag getragen. Der Bewegungsplan wird Ihnen gezeigt und vor der Herstellung von Ihnen freigegeben.',
          it: 'Mascherine trasparenti e rimovibili che raddrizzano i denti passo dopo passo. Ogni allineatore si porta per circa due settimane, 20–22 ore al giorno. Il piano dei movimenti ti viene mostrato e approvato prima di realizzare qualsiasi cosa.',
          sq: 'Shina transparente të lëvizshme që i drejtojnë dhëmbët hap pas hapi. Çdo aligner mbahet rreth dy javë, 20–22 orë në ditë. Plani i lëvizjeve ju tregohet dhe e miratoni para se të prodhohet çdo gjë.',
        },
        duration: { en: 'Several months, case-dependent', de: 'Mehrere Monate, je nach Fall', it: 'Alcuni mesi, a seconda del caso', sq: 'Disa muaj, sipas rastit' },
        visits: { en: 'Start visit + check-ups', de: 'Startbesuch + Kontrollen', it: 'Visita iniziale + controlli', sq: 'Vizitë fillestare + kontrolle' },
        healing: { en: '~2 weeks per aligner', de: '~2 Wochen pro Aligner', it: '~2 settimane per allineatore', sq: '~2 javë për çdo aligner' },
      },
    ],
  },
  {
    id: 'surgery',
    title: {
      en: 'Oral Surgery',
      de: 'Oralchirurgie',
      it: 'Chirurgia orale',
      sq: 'Kirurgji orale',
    },
    items: [
      {
        id: 'oral-surgery',
        icon: 'medical_services',
        name: {
          en: 'Tooth extraction & oral surgery',
          de: 'Zahnextraktion & Oralchirurgie',
          it: 'Estrazioni e chirurgia orale',
          sq: 'Heqje dhëmbi dhe kirurgji orale',
        },
        price: [100, 300],
        description: {
          en: 'Simple and surgical tooth extractions, wisdom tooth removal, cyst removal and other minor oral surgery, performed under local anaesthesia. The exact price depends on complexity and is confirmed after an X-ray or 3D scan.',
          de: 'Einfache und chirurgische Zahnextraktionen, Weisheitszahnentfernung, Zystenentfernung und weitere kleine oralchirurgische Eingriffe unter örtlicher Betäubung. Der genaue Preis hängt vom Aufwand ab und wird nach Röntgen oder 3D-Scan bestätigt.',
          it: 'Estrazioni semplici e chirurgiche, estrazione dei denti del giudizio, rimozione di cisti e altri piccoli interventi di chirurgia orale, in anestesia locale. Il prezzo esatto dipende dalla complessità e viene confermato dopo una radiografia o una TAC 3D.',
          sq: 'Heqje të thjeshta dhe kirurgjikale të dhëmbëve, heqjen e dhëmballëve të pjekurisë, heqjen e kisteve dhe ndërhyrje të tjera të vogla kirurgjikale, me anestezi lokale. Çmimi i saktë varet nga kompleksiteti dhe konfirmohet pas grafisë ose skanimit 3D.',
        },
        duration: { en: '30–90 min', de: '30–90 Min.', it: '30–90 min', sq: '30–90 min' },
        visits: oneTrip('1–2'),
        healing: {
          en: '3–7 days of recovery',
          de: '3–7 Tage Erholung',
          it: '3–7 giorni di recupero',
          sq: '3–7 ditë rikuperim',
        },
      },
    ],
  },
];

/** Short one-liners for the header mega menu */
export const menuSummaries: Record<string, Localized> = {
  'hollywood-smile': { en: 'Complete smile makeover', de: 'Komplette Lächeln-Neugestaltung', it: 'Rifacimento completo del sorriso', sq: 'Rikonstruksion i plotë i buzëqeshjes' },
  'crown-porcelain': { en: 'Strong, economical crown', de: 'Stabile, preiswerte Krone', it: 'Corona robusta ed economica', sq: 'Kurorë e fortë dhe ekonomike' },
  'crown-zirconia': { en: 'Metal-free, very durable', de: 'Metallfrei, sehr langlebig', it: 'Senza metallo, molto resistente', sq: 'Pa metal, shumë e qëndrueshme' },
  'crown-emax': { en: 'Most natural, for front teeth', de: 'Am natürlichsten, für Frontzähne', it: 'La più naturale, per denti anteriori', sq: 'Më natyralja, për dhëmbët e përparmë' },
  'veneer-composite': { en: 'Quick, same-day veneer', de: 'Schnelles Veneer am selben Tag', it: 'Faccetta rapida in giornata', sq: 'Fasetë e shpejtë, brenda ditës' },
  'gum-contouring': { en: 'Free with Hollywood Smile', de: 'Gratis beim Hollywood Smile', it: 'Gratis con Hollywood Smile', sq: 'Falas me Hollywood Smile' },
  whitening: { en: 'Brighter smile in one visit', de: 'Hellere Zähne in einer Sitzung', it: 'Più bianchi in una seduta', sq: 'Më të bardhë në një seancë' },
  'implant-megagen': { en: 'Replaces a single tooth', de: 'Ersetzt einen einzelnen Zahn', it: 'Sostituisce un singolo dente', sq: 'Zëvendëson një dhëmb' },
  'all-on-4': { en: 'Fixed jaw on 4 implants', de: 'Fester Kiefer auf 4 Implantaten', it: 'Arcata fissa su 4 impianti', sq: 'Nofull fikse me 4 implante' },
  'all-on-6': { en: 'Fixed jaw on 6 implants', de: 'Fester Kiefer auf 6 Implantaten', it: 'Arcata fissa su 6 impianti', sq: 'Nofull fikse me 6 implante' },
  'implant-bridge': { en: 'Several teeth on 2–3 implants', de: 'Mehrere Zähne auf 2–3 Implantaten', it: 'Più denti su 2–3 impianti', sq: 'Disa dhëmbë mbi 2–3 implante' },
  'sinus-lift': { en: 'Bone height in the upper jaw', de: 'Knochenhöhe im Oberkiefer', it: 'Altezza ossea nell’arcata superiore', sq: 'Lartësi kocke në nofullën e sipërme' },
  'bone-graft': { en: 'Rebuilds bone for implants', de: 'Knochenaufbau für Implantate', it: 'Ricostruisce l’osso per impianti', sq: 'Rindërton kockën për implante' },
  'implant-zygomatic': { en: 'For severe bone loss', de: 'Bei starkem Knochenschwund', it: 'Per grave perdita ossea', sq: 'Për humbje të rëndë kocke' },
  'implant-pterygoid': { en: 'Back teeth without sinus lift', de: 'Seitenzähne ohne Sinuslift', it: 'Denti posteriori senza rialzo', sq: 'Dhëmbët e pasmë pa sinuslift' },
  scaling: { en: 'Tartar removal & polish', de: 'Zahnstein entfernen & polieren', it: 'Rimozione tartaro e lucidatura', sq: 'Heqje gurëzash dhe lustrim' },
  'filling-2': { en: 'Medium cavity, one visit', de: 'Mittlere Karies, ein Termin', it: 'Carie media, una seduta', sq: 'Kavitet mesatar, një vizitë' },
  'filling-3': { en: 'Deep cavity near the nerve', de: 'Tiefe Karies nahe am Nerv', it: 'Carie profonda vicino al nervo', sq: 'Kavitet i thellë afër nervit' },
  'oral-surgery': { en: 'Extractions, wisdom teeth & more', de: 'Extraktionen, Weisheitszähne u. a.', it: 'Estrazioni, denti del giudizio e altro', sq: 'Heqje dhëmbësh, dhëmballë pjekurie etj.' },
  'dental-exam': { en: 'Full check & written plan', de: 'Komplette Kontrolle & Plan', it: 'Controllo completo e piano scritto', sq: 'Kontroll i plotë dhe plan me shkrim' },
  'ct-scan': { en: '3D view of bone & nerves', de: '3D-Bild von Knochen & Nerven', it: 'Vista 3D di osso e nervi', sq: 'Pamje 3D e kockës dhe nervave' },
  'root-canal': { en: 'Saves an infected tooth', de: 'Rettet einen entzündeten Zahn', it: 'Salva un dente infetto', sq: 'Shpëton një dhëmb të infektuar' },
  aligners: { en: 'Clear trays, straight teeth', de: 'Transparente Schienen', it: 'Mascherine trasparenti', sq: 'Shina transparente, dhëmbë të drejtë' },
  denture: { en: 'Removable, ready in 7 days', de: 'Herausnehmbar, in 7 Tagen fertig', it: 'Mobile, pronta in 7 giorni', sq: 'E lëvizshme, gati për 7 ditë' },
};

export interface PriceCategory {
  id: string;
  icon: string;
  title: Localized;
  groupIds: PriceGroupId[];
}

export const priceCategories: PriceCategory[] = [
  {
    id: 'smile',
    icon: 'sentiment_very_satisfied',
    title: { en: 'Smile Makeover', de: 'Lächeln-Design', it: 'Rifacimento del sorriso', sq: 'Ndryshimi i buzëqeshjes' },
    groupIds: ['crowns', 'whitening'],
  },
  {
    id: 'implants',
    icon: 'hardware',
    title: { en: 'Dental Implants', de: 'Zahnimplantate', it: 'Impianti dentali', sq: 'Implantet dentare' },
    groupIds: ['implants', 'advanced-implants'],
  },
  {
    id: 'general',
    icon: 'medical_services',
    title: { en: 'General Treatments', de: 'Allgemeine Behandlungen', it: 'Trattamenti generali', sq: 'Trajtime të përgjithshme' },
    groupIds: ['diagnostics', 'hygiene', 'fillings', 'surgery'],
  },
  {
    id: 'prosthetics',
    icon: 'layers',
    title: { en: 'Prosthetic Treatments', de: 'Prothetik', it: 'Trattamenti protesici', sq: 'Trajtime protetike' },
    groupIds: ['prosthetics', 'orthodontics'],
  },
];

export function groupsOf(category: PriceCategory) {
  return category.groupIds
    .map((id) => priceGroups.find((g) => g.id === id))
    .filter((g): g is PriceGroup => Boolean(g));
}

export function itemsOf(category: PriceCategory) {
  return groupsOf(category).flatMap((g) => g.items);
}

export function lowestPrice(items: PriceItem[]) {
  const values = items
    .map((i) => (i.price === 'free' ? null : Array.isArray(i.price) ? i.price[0] : i.price))
    .filter((v): v is number => v !== null);
  return values.length ? Math.min(...values) : null;
}

/** Price items that have their own rebuilt treatment page */
export const treatmentPages: Record<string, string> = {
  'hollywood-smile': '/treatments/hollywood-smile',
  'crown-emax': '/treatments/emax-veneers',
  'veneer-composite': '/treatments/composite-veneers',
  whitening: '/treatments/whitening',
  'gum-contouring': '/treatments/gum-contouring',
  'implant-megagen': '/treatments/single-implant',
  'implant-bridge': '/treatments/implant-bridge',
  'all-on-4': '/treatments/all-on-4',
  'all-on-6': '/treatments/all-on-6',
  'sinus-lift': '/treatments/sinus-lift',
  'bone-graft': '/treatments/bone-graft',
  'ct-scan': '/treatments/3d-ct-scan',
  'oral-surgery': '/treatments/tooth-extraction',
  'filling-2': '/treatments/composite-fillings',
  'filling-3': '/treatments/composite-fillings',
  'root-canal': '/treatments/root-canal',
  'crown-zirconia': '/treatments/zirconia-crown',
  'crown-porcelain': '/treatments/porcelain-crown',
  denture: '/treatments/dentures',
  aligners: '/treatments/invisible-aligners',
  'dental-exam': '/treatments/dental-exam',
  scaling: '/treatments/teeth-cleaning',
};

export function treatmentHref(itemId: string) {
  return treatmentPages[itemId] ?? `/services#${itemId}`;
}

/** Price groups shown on each /treatments/:slug page */
export const treatmentPriceGroups: Record<string, PriceGroupId[]> = {
  'tartar-clean': ['hygiene'],
  whitening: ['whitening'],
  'megagen-implant': ['implants', 'advanced-implants'],
  'all-on-x': ['implants', 'advanced-implants'],
  'porcelain-crown': ['crowns'],
  'zirconia-crown': ['crowns'],
  'emax-crown-veneer': ['crowns'],
  'removable-prosthetic': ['prosthetics'],
};

const freeLabel: Localized = { en: 'Free', de: 'Gratis', it: 'Gratis', sq: 'Falas' };

export function formatPrice(price: PriceItem['price'], lang: Lang) {
  if (price === 'free') return freeLabel[lang];
  const [from, to] = Array.isArray(price) ? price : [price, undefined];
  const fmt = (n: number) => n.toLocaleString(lang === 'en' ? 'en-US' : 'de-DE');
  const amount = to ? `${fmt(from)}–${fmt(to)}` : fmt(from);
  return lang === 'en' ? `€${amount}` : `${amount} €`;
}

export const priceListLabels: Record<Lang, {
  title: string;
  subtitle: string;
  duration: string;
  visits: string;
  healing: string;
  note: string;
  from: string;
  treatment: string;
  treatments: string;
  details: string;
}> = {
  en: {
    from: 'from',
    treatment: 'treatment',
    treatments: 'treatments',
    details: 'Details',
    title: 'Price List',
    subtitle: 'Transparent prices for every treatment, with what to expect: how long it takes, how many trips you need and how long to wait between them.',
    duration: 'Treatment time',
    visits: 'Trips & stay',
    healing: 'Waiting time',
    note: 'Send us a panoramic X-ray before you travel: it lets us confirm your diagnosis and price with about 90% accuracy. The final quote is confirmed at the clinic.',
  },
  de: {
    from: 'ab',
    treatment: 'Behandlung',
    treatments: 'Behandlungen',
    details: 'Details',
    title: 'Preisliste',
    subtitle: 'Transparente Preise für jede Behandlung, mit allem, was Sie erwartet: Behandlungsdauer, Anzahl der Reisen und Wartezeit dazwischen.',
    duration: 'Behandlungsdauer',
    visits: 'Reisen & Aufenthalt',
    healing: 'Wartezeit',
    note: 'Senden Sie uns vor der Reise ein Panorama-Röntgenbild (OPG): Damit bestimmen wir Diagnose und Preis mit ca. 90 % Genauigkeit. Der endgültige Kostenvoranschlag wird in der Klinik bestätigt.',
  },
  it: {
    from: 'da',
    treatment: 'trattamento',
    treatments: 'trattamenti',
    details: 'Dettagli',
    title: 'Listino prezzi',
    subtitle: 'Prezzi trasparenti per ogni trattamento, con tutto ciò che devi sapere: durata, numero di viaggi e tempi di attesa tra un viaggio e l’altro.',
    duration: 'Durata',
    visits: 'Viaggi e soggiorno',
    healing: 'Tempo di attesa',
    note: 'Inviaci una radiografia panoramica (OPT) prima di partire: ci permette di definire diagnosi e prezzo con circa il 90% di precisione. Il preventivo definitivo viene confermato in clinica.',
  },
  sq: {
    from: 'nga',
    treatment: 'trajtim',
    treatments: 'trajtime',
    details: 'Detaje',
    title: 'Listë çmimesh',
    subtitle: 'Çmime transparente për çdo trajtim, me gjithçka që duhet të dini: sa zgjat, sa udhëtime nevojiten dhe sa kohë pritet ndërmjet tyre.',
    duration: 'Kohëzgjatja',
    visits: 'Udhëtime & qëndrim',
    healing: 'Koha e pritjes',
    note: 'Na dërgoni një grafi panoramike para udhëtimit: ajo na lejon të përcaktojmë diagnozën dhe çmimin me rreth 90% saktësi. Oferta përfundimtare konfirmohet në klinikë.',
  },
};
