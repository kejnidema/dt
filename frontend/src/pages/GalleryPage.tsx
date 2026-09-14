import { useI18n } from "@/lib/i18n";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ScrollingGallery from "@/components/ScrollingGallery";
import { images } from "@/lib/images";

export default function GalleryPage() {
  const { lang } = useI18n();

  const t = {
    de: {
      headline: "Vorher & Nachher",
      subtitle:
        "Echte Ergebnisse unserer Patienten. Jedes Lächeln erzählt eine Geschichte.",
      filterAll: "Alle",
      filterEMax: "E-Max",
      filterZirconia: "Zirkonia",
      teeth: "Zähne",
      days: "Tage in Tirana",
      savings: "Ersparnis vs DE",
      resultsTitle: "Weitere Patientenergebnisse",
      resultsSubtitle:
        "Zusätzliche echte Lächeln aus unserer Galerie — einige Fälle enthalten mehrere Bilder.",
    },
    en: {
      headline: "Before & After",
      subtitle: "Real results from our patients. Every smile tells a story.",
      filterAll: "All",
      filterEMax: "E-Max",
      filterZirconia: "Zirconia",
      teeth: "Teeth",
      days: "Days in Tirana",
      savings: "Savings vs DE",
      resultsTitle: "More Patient Results",
      resultsSubtitle:
        "Additional real smiles from our gallery — some cases include multiple images.",
    },
  }[lang === "de" ? "de" : "en"];

  return (
    <>
      {/* Header */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <h1 className="font-display-lg text-display-lg text-primary mb-6">
            {t.headline}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Before/After Gallery Grid */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.beforeAfter.map((caseItem, i) => {
              return (
                <div
                  key={i}
                  className="bg-white border border-outline-variant rounded-xl overflow-hidden hover:shadow-xl transition-all"
                >
                  <BeforeAfterSlider
                    beforeImage={caseItem.before[0] ?? ""}
                    afterImage={caseItem.after[1] ?? caseItem.after[0] ?? ""}
                    aspectRatio="square"
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <ScrollingGallery
              groups={images.beforeAfterEdited.map((image) => [image])}
              variant="grid"
            />
          </div>
        </div>
      </section>

      <ScrollingGallery
        groups={images.results}
        title={t.resultsTitle}
        subtitle={t.resultsSubtitle}
      />
    </>
  );
}
