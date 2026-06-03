import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';

interface Testimonial {
  id: string;
  patientName: string;
  rating: number;
  commentDe: string;
  commentEn: string;
  patientFlag?: string;
  treatment?: string;
  daysAgo?: number;
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
  },
  {
    id: '4',
    patientName: 'Peter M.',
    rating: 5,
    commentDe: 'Die Reise nach Tirana war es absolut wert. Ich werde wieder kommen!',
    commentEn: 'The trip to Tirana was absolutely worth it. I will come again!',
    patientFlag: 'DE',
    daysAgo: 60,
  },
];

export default function TestimonialsCarousel() {
  const { lang } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = defaultTestimonials;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const current = testimonials[activeIndex];
  if (!current) return null;

  return (
    <section className="py-section-padding bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto px-gutter">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">
            {lang === 'de' ? 'Was unsere Patienten sagen' : 'What Our Patients Say'}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-outline-variant rounded-xl p-8 md:p-12 text-center relative">
            {/* Quote mark */}
            <div className="absolute -top-4 left-8 text-6xl text-secondary-fixed opacity-50 font-serif">
              „
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: current.rating }).map((_, i) => (
                <span key={i} className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>

            {/* Comment */}
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 italic">
              "{lang === 'de' ? current.commentDe : current.commentEn}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-sm">
                {current.patientName.charAt(0)}
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

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === activeIndex ? 'bg-primary w-6' : 'bg-outline-variant hover:bg-outline'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
