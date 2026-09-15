import { useState, useCallback } from 'react';
import { useI18n } from '@/lib/i18n';

interface TreatmentPrice {
  key: string;
  name_de: string;
  name_en: string;
  unit_de: string;
  unit_en: string;
  tirana_price_eur: number;
  germany_price_eur: number;
  max_quantity: number;
}

const TREATMENT_PRICING: TreatmentPrice[] = [
  {
    key: 'implant',
    name_de: 'MegaGen-Titanium Implantat',
    name_en: 'MegaGen-Titanium Implant',
    unit_de: 'Implantat',
    unit_en: 'implant',
    tirana_price_eur: 500,
    germany_price_eur: 1500,
    max_quantity: 12,
  },
  {
    key: 'porcelain-crown',
    name_de: 'Porzellankrone Made in Germany',
    name_en: 'Porcelain Crown Made in Germany',
    unit_de: 'Krone',
    unit_en: 'crown',
    tirana_price_eur: 100,
    germany_price_eur: 700,
    max_quantity: 24,
  },
  {
    key: 'zirconia-crown',
    name_de: 'Zirkonia-Krone Made in Germany',
    name_en: 'Zirkonia Crown Made in Germany',
    unit_de: 'Krone',
    unit_en: 'crown',
    tirana_price_eur: 200,
    germany_price_eur: 900,
    max_quantity: 24,
  },
  {
    key: 'emax-crown-veneer',
    name_de: 'E-Max Krone/Veneer Made in Germany',
    name_en: 'E-Max Crown and Veneer Made in Germany',
    unit_de: 'Zahn',
    unit_en: 'tooth',
    tirana_price_eur: 300,
    germany_price_eur: 2350,
    max_quantity: 24,
  },
  {
    key: 'removable-prosthetic',
    name_de: 'Herausnehmbare Prothese',
    name_en: 'Removable Prosthetic',
    unit_de: 'Kiefer',
    unit_en: 'jaw',
    tirana_price_eur: 600,
    germany_price_eur: 1200,
    max_quantity: 2,
  },
  {
    key: 'tartar-clean',
    name_de: 'Zahnsteinreinigung',
    name_en: 'Tartar Clean',
    unit_de: 'Behandlung',
    unit_en: 'treatment',
    tirana_price_eur: 30,
    germany_price_eur: 100,
    max_quantity: 1,
  },
  {
    key: 'whitening',
    name_de: 'Professionelle Zahnaufhellung',
    name_en: 'Professional Teeth Whitening',
    unit_de: 'Behandlung',
    unit_en: 'treatment',
    tirana_price_eur: 150,
    germany_price_eur: 400,
    max_quantity: 1,
  },
  {
    key: 'filling-grade-2',
    name_de: 'Füllung Grad 2',
    name_en: 'Filling Grade 2',
    unit_de: 'Füllung',
    unit_en: 'filling',
    tirana_price_eur: 50,
    germany_price_eur: 150,
    max_quantity: 12,
  },
  {
    key: 'filling-grade-3',
    name_de: 'Füllung Grad 3',
    name_en: 'Filling Grade 3',
    unit_de: 'Füllung',
    unit_en: 'filling',
    tirana_price_eur: 70,
    germany_price_eur: 200,
    max_quantity: 12,
  },
  {
    key: 'surgery',
    name_de: 'Chirurgie',
    name_en: 'Surgery',
    unit_de: 'Eingriff',
    unit_en: 'procedure',
    tirana_price_eur: 200,
    germany_price_eur: 600,
    max_quantity: 1,
  },
];

export default function Calculator() {
  const { lang, localized, t } = useI18n();
  const [treatmentIndex, setTreatmentIndex] = useState(7);
  const selectedTreatment =
    TREATMENT_PRICING[treatmentIndex] ?? TREATMENT_PRICING[0]!;
  const [quantity, setQuantity] = useState(8);

  const calculate = useCallback(() => {
    const germany = quantity * selectedTreatment.germany_price_eur;
    const tirana = quantity * selectedTreatment.tirana_price_eur;
    const savings = germany - tirana;
    const pct = germany > 0 ? Math.round((savings / germany) * 100) : 0;
    return { germany, tirana, savings, pct };
  }, [selectedTreatment, quantity]);

  const { germany, tirana, savings, pct } = calculate();
  const treatmentName = localized({ de: selectedTreatment.name_de, en: selectedTreatment.name_en });
  const unitName = localized({ de: selectedTreatment.unit_de, en: selectedTreatment.unit_en });

  const formatEuro = (n: number) =>
    new Intl.NumberFormat(lang === 'de' ? 'de-DE' : 'en-US', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <section className='py-section-padding bg-surface-container-low'>
      <div className='max-w-[1200px] mx-auto px-gutter'>
        <div className='text-center mb-16'>
          <h2 className='font-headline-md text-headline-md mb-4 text-primary'>
            {t('Treatment Price Calculator')}
          </h2>
          <p className='text-on-surface-variant max-w-xl mx-auto'>
            {t('Choose a treatment and calculate your savings compared with Germany.')}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start'>
          {/* Input Controls */}
          <div className='lg:col-span-5 bg-white p-8 rounded-xl border border-outline-variant shadow-sm space-y-10'>
            {/* Treatment */}
            <div>
              <label className='font-label-md block mb-4 text-on-surface-variant'>
                {t('Treatment')}
              </label>
              <select
                className='w-full border-b border-outline focus:border-primary focus:ring-0 py-3 bg-transparent font-body-md appearance-none cursor-pointer outline-none'
                value={treatmentIndex}
                onChange={(e) => {
                  const nextIndex = Number(e.target.value);
                  const nextTreatment =
                    TREATMENT_PRICING[nextIndex] ?? TREATMENT_PRICING[0]!;
                  setTreatmentIndex(nextIndex);
                  setQuantity((current) =>
                    Math.min(current, nextTreatment.max_quantity),
                  );
                }}
              >
                {TREATMENT_PRICING.map((treatment, i) => (
                  <option key={treatment.key} value={i}>
                    {localized({ de: treatment.name_de, en: treatment.name_en })}
                  </option>
                ))}
              </select>
            </div>

            {/* Unit Prices */}
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-surface-container-low rounded-lg border border-outline-variant p-4'>
                <p className='font-label-md text-on-surface-variant mb-1'>
                  {t('Tirana / Unit')}
                </p>
                <p className='font-headline-sm text-primary'>
                  {formatEuro(selectedTreatment.tirana_price_eur)}
                </p>
              </div>
              <div className='bg-surface-container-low rounded-lg border border-outline-variant p-4'>
                <p className='font-label-md text-on-surface-variant mb-1'>
                  {t('DE / Unit')}
                </p>
                <p className='font-headline-sm text-error'>
                  {formatEuro(selectedTreatment.germany_price_eur)}
                </p>
              </div>
            </div>

            {/* Quantity Slider */}
            {selectedTreatment.max_quantity > 1 && (
              <div>
                <div className='flex justify-between mb-4'>
                  <label className='font-label-md text-on-surface-variant'>
                    {t('Number of')} {unitName}{localized({ de: '', en: 's' })}
                  </label>
                  <span className='font-headline-sm text-primary'>
                    {quantity}
                  </span>
                </div>
                <input
                  type='range'
                  min={1}
                  max={selectedTreatment.max_quantity}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className='w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer slider-thumb'
                />
                <div className='flex justify-between mt-2 text-[12px] text-outline font-label-md'>
                  <span>1</span>
                  <span>{selectedTreatment.max_quantity}</span>
                </div>
              </div>
            )}
          </div>

          {/* Result Display */}
          <div className='lg:col-span-7 bg-primary rounded-xl p-10 text-white relative overflow-hidden h-full flex flex-col justify-between'>
            {/* Decorative */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-secondary-fixed/10 rounded-full blur-3xl -mr-32 -mt-32' />

            <div className='relative z-10'>
              <h3 className='font-label-md text-secondary-fixed uppercase tracking-widest mb-10'>
                {t('Your Price Comparison')}
              </h3>

              <div className='grid grid-cols-1 md:grid-cols-[1fr_240px] gap-6 mb-10'>
                <div className='savings-pulse bg-secondary-fixed text-on-secondary-fixed rounded-2xl p-8 shadow-xl'>
                  <div className='font-label-md uppercase tracking-widest opacity-70 mb-3'>
                    {t('Tirana Price')}
                  </div>
                  <div className='text-[64px] font-bold leading-none'>
                    {formatEuro(tirana)}
                  </div>
                  <div className='font-label-md mt-3 opacity-80'>
                    {quantity} × {treatmentName}
                  </div>
                </div>

                <aside className='bg-white/10 border border-white/15 rounded-2xl p-6 flex flex-col justify-center'>
                  <div className='font-label-md opacity-70 mb-2'>
                    {t('Your Savings')}
                  </div>
                  <div className='text-4xl font-bold text-secondary-fixed'>
                    {formatEuro(savings)}
                  </div>
                  <div className='mt-2 inline-flex w-fit items-center rounded-full bg-secondary-fixed/15 px-3 py-1 text-secondary-fixed font-label-md'>
                    -{pct}%
                  </div>
                  <p className='mt-4 text-sm opacity-70'>
                    {t('compared with an average German reference price')}
                  </p>
                </aside>
              </div>

              {/* Bar Chart */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='bg-white/5 p-5 rounded border border-white/10'>
                  <div className='font-label-md opacity-60 mb-1'>
                    {t('Cost DE')}
                  </div>
                  <div className='font-headline-sm'>{formatEuro(germany)}</div>
                  <div className='w-full bg-white/10 h-2 mt-4 rounded-full overflow-hidden'>
                    <div className='bg-error w-full h-full' />
                  </div>
                </div>
                <div className='bg-white/10 p-5 rounded border border-secondary-fixed/40'>
                  <div className='font-label-md text-secondary-fixed mb-1'>
                    {t('Cost Tirana')}
                  </div>
                  <div className='font-headline-sm text-secondary-fixed'>
                    {formatEuro(tirana)}
                  </div>
                  <div className='w-full bg-white/10 h-2 mt-4 rounded-full overflow-hidden'>
                    <div
                      className='bg-secondary-fixed h-full transition-all duration-500'
                      style={{ width: `${Math.max(8, 100 - pct)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-12 relative z-10'>
              <a
                href='/contact'
                className='w-full bg-secondary-fixed text-on-secondary-fixed py-5 font-label-md text-lg rounded-lg hover:brightness-110 active:scale-[0.98] transition-all block text-center'
              >
                {t('Get a Personalized Quote')}
              </a>
              <p className='text-center mt-4 font-label-md opacity-50 text-[12px]'>
                {t('Free initial consultation including Digital Smile Design')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
