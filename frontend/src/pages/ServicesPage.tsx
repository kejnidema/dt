import { useI18n } from '@/lib/i18n';
import { priceListLabels } from '@/lib/priceList';
import PriceList from '@/components/PriceList';

export default function ServicesPage() {
  const { t: tr, lang } = useI18n();

  return (
    <>
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <h1 className="font-display-lg text-display-lg text-primary mb-6">
            {tr('Services & Prices')}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {priceListLabels[lang].subtitle}
          </p>
        </div>
      </section>

      <PriceList showHeading={false} />
    </>
  );
}
