import { useI18n } from '@/lib/i18n';
import { images } from '@/lib/images';

export default function ReviewsPage() {
  const { localized, t: tr } = useI18n();

  const reviews = [
    {
      name: 'Maria S.',
      flag: 'DE',
      rating: 5,
      commentDe: 'Absolut fantastisches Ergebnis! Meine E-Max Veneers sehen perfekt aus.',
      commentEn: 'Absolutely fantastic result! My E-Max veneers look perfect.',
      treatment: 'E-Max Veneers',
      daysAgo: 14,
      photo: images.patients[0] ?? images.doctor,
    },
    {
      name: 'Thomas K.',
      flag: 'DE',
      rating: 5,
      commentDe: 'Die Kostenersparnis im Vergleich zu Deutschland ist enorm.',
      commentEn: 'The cost savings compared to Germany are enormous.',
      treatment: 'E-Max Veneers',
      daysAgo: 30,
      photo: images.patients[1] ?? images.doctor,
    },
    {
      name: 'Anna W.',
      flag: 'DE',
      rating: 5,
      commentDe: 'Ich war skeptisch, aber das Ergebnis hat alle Erwartungen übertroffen.',
      commentEn: 'I was skeptical, but the result exceeded all expectations.',
      treatment: 'Zirconia',
      daysAgo: 45,
      photo: images.patients[2] ?? images.doctorFemale,
    },
    {
      name: 'Peter M.',
      flag: 'DE',
      rating: 5,
      commentDe: 'Die Reise nach Tirana war es absolut wert. Ich werde wiederkommen!',
      commentEn: 'The trip to Tirana was absolutely worth it. I will come back!',
      daysAgo: 60,
      photo: images.patients[3] ?? images.doctor,
    },
    {
      name: 'Sandra L.',
      flag: 'DE',
      rating: 5,
      commentDe: 'Professionelles Team, erstklassige Ergebnisse. Kann ich nur weiterempfehlen!',
      commentEn: 'Professional team, top-class results. I can only recommend!',
      treatment: 'E-Max Veneers',
      daysAgo: 90,
      photo: images.patients[4] ?? images.doctorFemale,
    },
    {
      name: 'Michael R.',
      flag: 'DE',
      rating: 4,
      commentDe: 'Sehr gute Erfahrung. Die Kommunikation war immer auf Deutsch.',
      commentEn: 'Very good experience. Communication was always in German.',
      daysAgo: 120,
      photo: images.patients[5] ?? images.doctor,
    },
  ];

  const avgRating = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;

  return (
    <>
      {/* Header */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <h1 className="font-display-lg text-display-lg text-primary mb-6">
            {tr('Patient Reviews')}
          </h1>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-5xl font-bold text-primary">{avgRating.toFixed(1)}</div>
            <div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-secondary text-2xl"
                    style={{ fontVariationSettings: `'FILL' ${i < Math.round(avgRating) ? 1 : 0}` }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-on-surface-variant text-sm">{reviews.length} {tr('reviews')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary overflow-hidden flex items-center justify-center text-on-primary font-bold text-sm">
                    <img src={review.photo} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-label-md text-primary">{review.name}</p>
                    <p className="text-xs text-on-surface-variant">
                      {review.flag === 'DE' ? '🇩🇪' : ''} {review.daysAgo} {tr('days ago')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <span
                      key={j}
                      className="material-symbols-outlined text-secondary text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>

                <p className="text-on-surface-variant text-sm mb-3">
                  "{localized({ de: review.commentDe, en: review.commentEn })}"
                </p>

                {review.treatment && (
                  <span className="inline-block text-xs px-2 py-1 bg-surface-container-low rounded-sm text-on-surface-variant border border-outline-variant">
                    {review.treatment}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
