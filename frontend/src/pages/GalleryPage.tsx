import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export default function GalleryPage() {
  const { lang } = useI18n();

  const t = {
    de: {
      headline: 'Vorher & Nachher',
      subtitle: 'Echte Ergebnisse unserer Patienten. Jedes Lächeln erzählt eine Geschichte.',
      filterAll: 'Alle',
      filterEMax: 'E-Max',
      filterZirconia: 'Zirkonia',
      teeth: 'Zähne',
      days: 'Tage in Tirana',
      savings: 'Ersparnis vs DE',
    },
    en: {
      headline: 'Before & After',
      subtitle: 'Real results from our patients. Every smile tells a story.',
      filterAll: 'All',
      filterEMax: 'E-Max',
      filterZirconia: 'Zirconia',
      teeth: 'Teeth',
      days: 'Days in Tirana',
      savings: 'Savings vs DE',
    },
  }[lang];

  const cases = [
    { treatment: 'e-max', teeth: 10, days: 5, savings: 9200 },
    { treatment: 'e-max', teeth: 8, days: 4, savings: 7400 },
    { treatment: 'zirconia', teeth: 6, days: 3, savings: 5400 },
    { treatment: 'e-max', teeth: 10, days: 5, savings: 8800 },
    { treatment: 'zirconia', teeth: 8, days: 4, savings: 6800 },
    { treatment: 'e-max', teeth: 10, days: 5, savings: 9600 },
  ];

  const [filter, setFilter] = useState<'all' | 'e-max' | 'zirconia'>('all');

  const filtered = filter === 'all' ? cases : cases.filter((c) => c.treatment === filter);

  return (
    <>
      {/* Header */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <h1 className="font-display-lg text-display-lg text-primary mb-6">{t.headline}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter flex justify-center gap-4">
          {[
            { key: 'all' as const, label: t.filterAll },
            { key: 'e-max' as const, label: t.filterEMax },
            { key: 'zirconia' as const, label: t.filterZirconia },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-6 py-2 rounded-sm font-label-md transition-all ${filter === f.key
                ? 'bg-primary text-on-primary'
                : 'bg-white text-on-surface-variant border border-outline-variant hover:border-primary'
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-section-padding">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((caseItem, i) => (
              <div key={i} className="bg-white border border-outline-variant rounded-xl overflow-hidden hover:shadow-xl transition-all">
                <BeforeAfterSlider
                  beforeImage={`/images/before-after/before-${i + 1}.jpg`}
                  afterImage={`/images/before-after/after-${i + 1}.jpg`}
                  aspectRatio="square"
                />
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇩🇪</span>
                    <span className="text-label-md text-on-surface-variant">
                      {caseItem.treatment === 'e-max' ? 'E-Max' : 'Zirconia'}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-xs text-on-surface-variant">{t.teeth}</p>
                      <p className="font-bold text-primary">{caseItem.teeth}</p>
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant">{t.days}</p>
                      <p className="font-bold text-primary">{caseItem.days}</p>
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant">{t.savings}</p>
                      <p className="font-bold text-secondary">€{caseItem.savings.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
