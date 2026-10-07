import { useRef, useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { images } from '@/lib/images';

interface Testimonial {
  id: string;
  patientName: string;
  rating: number;
  commentDe: string;
  commentEn: string;
  patientFlag?: string;
  treatment?: string;
  daysAgo?: number;
  photoUrl?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    patientName: 'Maria S.',
    rating: 5,
    commentDe: 'Absolut fantastisches Ergebnis! Meine E-Max Veneers sehen perfekt aus. Das Team war unglaublich professionell.',
    commentEn: 'Absolutely fantastic result! My E-Max veneers look perfect. The team was incredibly professional.',
    patientFlag: 'DE',
    treatment: 'e-max',
    daysAgo: 14,
    photoUrl: images.patients[0] ?? images.doctor,
  },
  {
    id: '2',
    patientName: 'Thomas K.',
    rating: 5,
    commentDe: 'Die Kostenersparnis im Vergleich zu Deutschland ist enorm. Qualität ist auf dem gleichen Niveau.',
    commentEn: 'The cost savings compared to Germany are enormous. Quality is at the same level.',
    patientFlag: 'DE',
    treatment: 'e-max',
    daysAgo: 30,
    photoUrl: images.patients[1] ?? images.doctor,
  },
  {
    id: '3',
    patientName: 'Anna W.',
    rating: 5,
    commentDe: 'Ich war skeptisch, aber das Ergebnis hat alle meine Erwartungen übertroffen.',
    commentEn: 'I was skeptical, but the result exceeded all my expectations.',
    patientFlag: 'DE',
    treatment: 'zirconia',
    daysAgo: 45,
    photoUrl: images.patients[2] ?? images.doctorFemale,
  },
  {
    id: '4',
    patientName: 'Peter M.',
    rating: 5,
    commentDe: 'Die Reise nach Tirana war es absolut wert. Ich werde wieder kommen!',
    commentEn: 'The trip to Tirana was absolutely worth it. I will come again!',
    patientFlag: 'DE',
    daysAgo: 60,
    photoUrl: images.patients[3] ?? images.doctor,
  },
];

const INTERVAL_MS = 6000;

export default function TestimonialsCarousel() {
  const { localized, t: tr } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const testimonials = defaultTestimonials;
  const count = testimonials.length;

  const goTo = (index: number, dir: 'next' | 'prev') => {
    setDirection(dir);
    setActiveIndex((index + count) % count);
  };
  const next = () => goTo(activeIndex + 1, 'next');
  const prev = () => goTo(activeIndex - 1, 'prev');

  const current = testimonials[activeIndex];
  if (!current) return null;

  const arrow = 'grid place-items-center w-11 h-11 rounded-full bg-white border border-outline-variant text-primary shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-primary hover:text-on-primary transition-all duration-300';

  return (
    <section className="py-section-padding bg-surface-container-low overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-gutter">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">
            {tr('What Our Patients Say')}
          </h2>
        </div>

        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => (touchStart.current = e.touches[0]?.clientX ?? null)}
          onTouchEnd={(e) => {
            const start = touchStart.current;
            const end = e.changedTouches[0]?.clientX;
            touchStart.current = null;
            if (start === null || end === undefined || Math.abs(end - start) < 40) return;
            if (end < start) next();
            else prev();
          }}
        >
          <div className="flex items-center gap-4">
            <button type="button" onClick={prev} className={`${arrow} hidden md:grid shrink-0`} aria-label="Previous">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>

            <div className="relative flex-1 bg-white border border-outline-variant rounded-xl p-8 md:p-12 text-center shadow-sm hover:shadow-xl transition-shadow duration-500">
              <div className="testimonial-quote absolute -top-4 left-8 text-6xl text-secondary-fixed opacity-50 font-serif" aria-hidden>
                „
              </div>

              <div key={activeIndex} className={direction === 'next' ? 'testimonial-in-next' : 'testimonial-in-prev'}>
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <span
                      key={i}
                      className="testimonial-star material-symbols-outlined text-secondary text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1", animationDelay: `${150 + i * 90}ms` }}
                    >
                      star
                    </span>
                  ))}
                </div>

                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 italic">
                  "{localized({ de: current.commentDe, en: current.commentEn })}"
                </p>

                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary overflow-hidden flex items-center justify-center text-on-primary font-bold text-sm ring-2 ring-aqua ring-offset-2">
                    {current.photoUrl ? (
                      <img src={current.photoUrl} alt={current.patientName} className="w-full h-full object-cover" />
                    ) : (
                      current.patientName.charAt(0)
                    )}
                  </div>
                  <div className="text-left">
                    <p className="font-label-md text-primary">{current.patientName}</p>
                    <p className="text-xs text-on-surface-variant">
                      {current.patientFlag === 'DE' ? '🇩🇪' : ''}{' '}
                      {current.daysAgo ? `${current.daysAgo} days ago` : ''}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" onClick={next} className={`${arrow} hidden md:grid shrink-0`} aria-label="Next">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>

          {/* Dots; the active one fills up and advances the carousel when full */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i, i > activeIndex ? 'next' : 'prev')}
                className={`relative h-2.5 rounded-full overflow-hidden transition-all duration-500 ${
                  i === activeIndex ? 'w-10 bg-outline-variant' : 'w-2.5 bg-outline-variant hover:bg-outline'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              >
                {i === activeIndex && (
                  <span
                    key={activeIndex}
                    className="testimonial-progress absolute inset-0 bg-primary origin-left"
                    style={{ animationDuration: `${INTERVAL_MS}ms`, animationPlayState: paused ? 'paused' : 'running' }}
                    onAnimationEnd={next}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
