import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { treatments } from '@/pages/TreatmentsPage';

export default function ServicesPage() {
  const { t: tr } = useI18n();

  return (
    <>
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <h1 className="font-display-lg text-display-lg text-primary mb-6">
            {tr('Services & Prices')}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {tr('A simple overview of treatment prices.')}
          </p>
        </div>
      </section>

      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[900px] mx-auto px-gutter">
          <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
            {treatments.map((t, index) => (
              <Link
                key={t.title}
                to={t.link}
                state={t.state}
                className={`flex items-center justify-between gap-6 px-6 py-5 hover:bg-surface-container-low transition-colors ${
                  index !== treatments.length - 1 ? 'border-b border-outline-variant' : ''
                }`}
              >
                <span className="font-headline-sm text-headline-sm text-primary">
                  {tr(t.title)}
                </span>
                <span className="font-headline-sm text-headline-sm text-secondary whitespace-nowrap">
                  {tr(t.price)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
