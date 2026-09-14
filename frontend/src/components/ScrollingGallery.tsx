import { useMemo, useState } from "react";

interface ScrollingGalleryProps {
  groups: string[][];
  title?: string;
  subtitle?: string;
  variant?: "section" | "grid";
}

export default function ScrollingGallery({
  groups,
  title,
  subtitle,
  variant = "section",
}: ScrollingGalleryProps) {
  const cases = useMemo(
    () => groups.filter((group) => group.length > 0),
    [groups],
  );
  const [activeByCase, setActiveByCase] = useState<Record<number, number>>({});

  const showImage = (caseIndex: number, direction: -1 | 1) => {
    const imageCount = cases[caseIndex]?.length ?? 0;
    if (imageCount <= 1) return;

    setActiveByCase((prev) => {
      const current = prev[caseIndex] ?? 0;
      return {
        ...prev,
        [caseIndex]: (current + direction + imageCount) % imageCount,
      };
    });
  };

  if (cases.length === 0) return null;

  const grid = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cases.map((images, caseIndex) => {
        const activeIndex = activeByCase[caseIndex] ?? 0;
        const activeImage = images[activeIndex] ?? images[0];
        const hasMultipleImages = images.length > 1;

        return (
          <article
            key={caseIndex}
            className="bg-white border border-outline-variant rounded-xl overflow-hidden hover:shadow-xl transition-all group"
          >
            <div className="relative aspect-square bg-surface-container overflow-hidden">
              <img
                src={activeImage}
                alt={`Patient result ${caseIndex + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={() => showImage(caseIndex, -1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/80 text-on-primary backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors shadow-md"
                    aria-label="Previous image"
                  >
                    <span className="material-symbols-outlined">
                      chevron_left
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => showImage(caseIndex, 1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/80 text-on-primary backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors shadow-md"
                    aria-label="Next image"
                  >
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-primary/60 backdrop-blur-md rounded-full px-3 py-2">
                    {images.map((_, imageIndex) => (
                      <button
                        key={imageIndex}
                        type="button"
                        onClick={() =>
                          setActiveByCase((prev) => ({
                            ...prev,
                            [caseIndex]: imageIndex,
                          }))
                        }
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeIndex === imageIndex
                            ? "bg-secondary-fixed w-5"
                            : "bg-white/70"
                        }`}
                        aria-label={`Show image ${imageIndex + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );

  if (variant === "grid") return grid;

  return (
    <section className="py-section-padding bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto px-gutter">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="font-display-lg text-display-lg text-primary mb-6">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {grid}
      </div>
    </section>
  );
}
