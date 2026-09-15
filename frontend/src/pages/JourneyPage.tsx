import FaqAccordion from '@/components/FaqAccordion';
import Timeline, { TimelineStep } from '@/components/Timeline';
import { useI18n } from '@/lib/i18n';
import { images } from '@/lib/images';

export default function JourneyPage() {
  const { localized } = useI18n();

  const t = localized({
    de: {
      headline: 'Ihre Reise zum neuen Lächeln — Schritt für Schritt.',
      subtitle:
        'Von der ersten Beratung in Deutschland bis zum perfekten Hollywood-Lächeln in Tirana. Wir begleiten Sie bei jedem Schritt.',
      processLabel: 'Der Prozess',
      processTitle: 'Ihre 5-Schritte Transformation',
      step1Title: 'Digitale Vorberatung',
      step1Desc:
        'Senden Sie uns Fotos Ihres Lächelns bequem per WhatsApp. Unsere Experten erstellen einen ersten Behandlungsplan — völlig kostenfrei.',
      step2Title: 'Reiseplanung & Ankunft',
      step2Desc:
        'Wir unterstützen bei der Flugbuchung. Bei Ihrer Ankunft erwartet Sie unser VIP-Transfer direkt zum Hotel oder in die Klinik.',
      step3Title: 'Präzisions-Vorbereitung',
      step3Desc:
        'Finale Untersuchung und Digital Smile Design. Hochpräzise Abdrücke mit modernster Technologie.',
      step4Title: 'Einsetzen der Veneers',
      step4Desc:
        'Ihre maßgeschneiderten Veneers werden behutsam eingesetzt. Sie verlassen die Klinik mit Ihrem neuen Selbstbewusstsein.',
      step5Title: 'Nachsorge & Heimreise',
      step5Desc:
        'Nach einer finalen Kontrolle bringen wir Sie zurück zum Flughafen. Wir bleiben Ihr lebenslanger Partner.',
      travelTitle: 'Reiseinformationen für deutsche Patienten',
      travelSubtitle: 'Alles, was Sie für Ihre problemlose Reise wissen müssen.',
      flightsTitle: 'Direktflüge & Flugzeiten',
      flightsDesc:
        'Tirana ist von fast allen großen deutschen Flughäfen innerhalb von ca. 2 Stunden erreichbar.',
      munich: 'München / Frankfurt',
      munichFreq: 'Täglich direkt',
      berlin: 'Berlin / Hamburg',
      berlinFreq: '3x wöchentlich',
      visaTitle: 'Visum & Einreise',
      visaDesc:
        'Für deutsche Staatsbürger ist die Einreise nach Albanien mit einem gültigen Personalausweis oder Reisepass möglich. Kein Visum erforderlich.',
      hotelsTitle: 'Partner Hotels',
      transferTitle: 'VIP-Transfer Service',
      transferDesc:
        'Unser privater Fahrer erwartet Sie am Flughafen und bringt Sie sicher zu allen Terminen.',
      faqTitle: 'Häufig gestellte Fragen',
    },
    en: {
      headline: 'Your Journey to a New Smile — Step by Step.',
      subtitle:
        'From the first consultation in Germany to the perfect Hollywood smile in Tirana. We guide you at every step.',
      processLabel: 'The Process',
      processTitle: 'Your 5-Step Transformation',
      step1Title: 'Digital Pre-Consultation',
      step1Desc:
        'Send us photos of your smile via WhatsApp. Our experts create an initial treatment plan — completely free.',
      step2Title: 'Travel Planning & Arrival',
      step2Desc:
        'We help with flight booking. Upon arrival, our VIP transfer takes you directly to the hotel or clinic.',
      step3Title: 'Precision Preparation',
      step3Desc:
        'Final examination and Digital Smile Design. High-precision impressions with the latest technology.',
      step4Title: 'Veneer Placement',
      step4Desc:
        'Your custom veneers are carefully placed. You leave the clinic with your new confidence.',
      step5Title: 'Aftercare & Return Trip',
      step5Desc:
        'After a final check, we take you back to the airport. We remain your lifelong partner.',
      travelTitle: 'Travel Information for German Patients',
      travelSubtitle: 'Everything you need to know for a smooth trip.',
      flightsTitle: 'Direct Flights & Flight Times',
      flightsDesc:
        'Tirana is reachable from almost all major German airports within about 2 hours.',
      munich: 'Munich / Frankfurt',
      munichFreq: 'Daily direct',
      berlin: 'Berlin / Hamburg',
      berlinFreq: '3x weekly',
      visaTitle: 'Visa & Entry',
      visaDesc:
        'German citizens can enter Albania with a valid ID or passport. No visa required.',
      hotelsTitle: 'Partner Hotels',
      transferTitle: 'VIP Transfer Service',
      transferDesc:
        'Our private driver meets you at the airport and takes you safely to all appointments.',
      faqTitle: 'Frequently Asked Questions',
    },
  });

  const steps: TimelineStep[] = [
    { number: 1, icon: 'videocam', title: t.step1Title, description: t.step1Desc, imageUrl: images.heroAfter },
    { number: 2, icon: 'flight_takeoff', title: t.step2Title, description: t.step2Desc, imageUrl: images.tirana },
    { number: 3, icon: 'biotech', title: t.step3Title, description: t.step3Desc, imageUrl: images.clinic },
    { number: 4, icon: 'auto_fix_high', title: t.step4Title, description: t.step4Desc, imageUrl: images.emaxAfter },
    { number: 5, icon: 'verified', title: t.step5Title, description: t.step5Desc, imageUrl: images.doctor },
  ];

  const faqItems = localized({
    de: [
        { question: 'Wie lange muss ich in Tirana bleiben?', answer: 'Für ein komplettes Set an Veneers empfehlen wir 5-7 Werktage.' },
        { question: 'Ist die Qualität in Albanien wirklich vergleichbar?', answer: 'Unsere Ärzte sind international geschult. Wir verwenden CE-zertifizierte Materialien von Ivoclar Vivadent.' },
        { question: 'Spricht das Klinikpersonal Deutsch?', answer: 'Ja, wir haben deutschsprachige Koordinatoren und viele Ärzte sprechen Deutsch oder Englisch.' },
        { question: 'Welche Zahlungsmöglichkeiten gibt es?', answer: 'Kreditkarte, Banküberweisung oder bar. Rechnung in Euro.' },
      ],
    en: [
        { question: 'How long do I need to stay in Tirana?', answer: 'For a complete set of veneers, we recommend 5-7 working days.' },
        { question: 'Is the quality really comparable to Germany?', answer: 'Our doctors are internationally trained. We use CE-certified materials from Ivoclar Vivadent.' },
        { question: 'Does the staff speak German?', answer: 'Yes, we have German-speaking coordinators and many doctors speak German or English.' },
        { question: 'What payment options are available?', answer: 'Credit card, bank transfer, or cash. Invoice in EUR.' },
      ],
  });

  return (
    <>
      {/* Hero */}
      <header className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary">
          <img src={images.journey} alt="Tirana travel" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-gutter w-full">
          <div className="max-w-2xl">
            <h1 className="font-display-lg text-display-lg text-white mb-6">{t.headline}</h1>
            <p className="font-body-lg text-body-lg text-white/90">{t.subtitle}</p>
          </div>
        </div>
      </header>

      {/* Timeline */}
      <section className="py-section-padding bg-surface-bright">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="text-center mb-20">
            <span className="text-secondary font-label-md uppercase tracking-[0.2em]">{t.processLabel}</span>
            <h2 className="font-headline-md text-headline-md text-primary mt-2">{t.processTitle}</h2>
          </div>
          <Timeline steps={steps} />
        </div>
      </section>

      {/* Travel Info Bento Grid */}
      <section className="py-section-padding bg-background">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="mb-12">
            <h2 className="font-headline-md text-headline-md text-primary">{t.travelTitle}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-2">{t.travelSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Flights */}
            <div className="md:col-span-2 glass-card p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">airplane_ticket</span>
                  <h4 className="font-headline-sm text-headline-sm">{t.flightsTitle}</h4>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">{t.flightsDesc}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-outline-variant pl-4">
                    <span className="font-label-md text-primary block">{t.munich}</span>
                    <span className="text-sm text-on-surface-variant">{t.munichFreq}</span>
                  </div>
                  <div className="border-l-2 border-outline-variant pl-4">
                    <span className="font-label-md text-primary block">{t.berlin}</span>
                    <span className="text-sm text-on-surface-variant">{t.berlinFreq}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visa */}
            <div className="bg-primary text-on-primary p-8 flex flex-col">
              <span className="material-symbols-outlined text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                assignment_turned_in
              </span>
              <h4 className="font-headline-sm text-headline-sm mb-2">{t.visaTitle}</h4>
              <p className="font-body-md text-body-md opacity-80">{t.visaDesc}</p>
            </div>

            {/* Hotels */}
            <div className="bg-surface p-8 border border-outline-variant flex flex-col">
              <h4 className="font-headline-sm text-headline-sm mb-4">{t.hotelsTitle}</h4>
              <ul className="space-y-4">
                {['Maritim Hotel Plaza (5*)', 'Rogner Hotel Tirana (5*)', 'The Rooms Boutique (4*)'].map((h) => (
                  <li key={h} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">star</span>
                    <span className="font-body-md">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Transfer */}
            <div className="md:col-span-2 glass-card p-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h4 className="font-headline-sm text-headline-sm mb-4">{t.transferTitle}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{t.transferDesc}</p>
              </div>
              <div className="w-full md:w-64 h-40 bg-surface-container rounded overflow-hidden">
                <img src={images.clinic} alt="Clinic transfer destination" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[800px] mx-auto px-gutter">
          <h2 className="font-headline-md text-headline-md text-primary text-center mb-12">{t.faqTitle}</h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
