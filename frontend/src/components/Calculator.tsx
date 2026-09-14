import { useState, useCallback } from 'react';
import { useI18n } from '@/lib/i18n';

interface CityPricing {
  name: string;
  price_eur_per_tooth: number;
}

interface MaterialPrice {
  key: string;
  name_de: string;
  name_en: string;
  price_eur_per_tooth: number;
}

interface PricingConfig {
  german_cities: CityPricing[];
  materials: MaterialPrice[];
}

const PRICING_CONFIG: PricingConfig = {
  german_cities: [
    { name: 'Berlin', price_eur_per_tooth: 1200 },
    { name: 'München', price_eur_per_tooth: 1500 },
    { name: 'Hamburg', price_eur_per_tooth: 1300 },
    { name: 'Frankfurt', price_eur_per_tooth: 1400 },
    { name: 'Düsseldorf', price_eur_per_tooth: 1100 },
  ],
  materials: [
    {
      key: 'e-max',
      name_de: 'E-Max Porzellan',
      name_en: 'E-Max Porcelain',
      price_eur_per_tooth: 350,
    },
    {
      key: 'zirconia',
      name_de: 'Zirkonoxid',
      name_en: 'Zirconia',
      price_eur_per_tooth: 400,
    },
  ],
};

export default function Calculator() {
  const { lang } = useI18n();
  const config = PRICING_CONFIG;
  const [cityIndex, setCityIndex] = useState(0);
  const [materialIndex, setMaterialIndex] = useState(0);
  const [toothCount, setToothCount] = useState(8);

  const calculate = useCallback(() => {
    const city = config.german_cities[cityIndex];
    const material = config.materials[materialIndex];
    const germany = toothCount * (city?.price_eur_per_tooth ?? 0);
    const tirana = toothCount * (material?.price_eur_per_tooth ?? 0);
    const savings = germany - tirana;
    const pct = germany > 0 ? Math.round((savings / germany) * 100) : 0;
    return { germany, tirana, savings, pct };
  }, [config, cityIndex, materialIndex, toothCount]);

  const { germany, tirana, savings, pct } = calculate();

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
            {lang === 'de' ? 'Veneer Preisrechner' : 'Veneer Price Calculator'}
          </h2>
          <p className='text-on-surface-variant max-w-xl mx-auto'>
            {lang === 'de'
              ? 'Berechnen Sie Ihre Ersparnis basierend auf Material und Standort.'
              : 'Calculate your savings based on material and location.'}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start'>
          {/* Input Controls */}
          <div className='lg:col-span-5 bg-white p-8 rounded-xl border border-outline-variant shadow-sm space-y-10'>
            {/* City */}
            <div>
              <label className='font-label-md block mb-4 text-on-surface-variant'>
                {lang === 'de'
                  ? 'Referenzstadt in Deutschland'
                  : 'Reference City in Germany'}
              </label>
              <select
                className='w-full border-b border-outline focus:border-primary focus:ring-0 py-3 bg-transparent font-body-md appearance-none cursor-pointer'
                value={cityIndex}
                onChange={(e) => setCityIndex(Number(e.target.value))}
              >
                {config.german_cities.map((city, i) => (
                  <option key={i} value={i}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Material Toggle */}
            <div>
              <label className='font-label-md block mb-4 text-on-surface-variant'>
                {lang === 'de' ? 'Material-Qualität' : 'Material Quality'}
              </label>
              <div className='flex p-1 bg-surface-container rounded-lg border border-outline-variant'>
                {config.materials.map((m, i) => (
                  <button
                    key={m.key}
                    onClick={() => setMaterialIndex(i)}
                    className={`flex-1 py-3 text-center rounded font-label-md transition-all ${
                      materialIndex === i
                        ? 'bg-primary text-white'
                        : 'text-on-surface-variant hover:bg-white/50'
                    }`}
                  >
                    {lang === 'de' ? m.name_de : m.name_en}
                  </button>
                ))}
              </div>
            </div>

            {/* Tooth Slider */}
            <div>
              <div className='flex justify-between mb-4'>
                <label className='font-label-md text-on-surface-variant'>
                  {lang === 'de' ? 'Anzahl der Veneers' : 'Number of Veneers'}
                </label>
                <span className='font-headline-sm text-primary'>
                  {toothCount}
                </span>
              </div>
              <input
                type='range'
                min={1}
                max={24}
                value={toothCount}
                onChange={(e) => setToothCount(Number(e.target.value))}
                className='w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer slider-thumb'
              />
              <div className='flex justify-between mt-2 text-[12px] text-outline font-label-md'>
                <span>1</span>
                <span>12</span>
                <span>24</span>
              </div>
            </div>
          </div>

          {/* Result Display */}
          <div className='lg:col-span-7 bg-primary rounded-xl p-10 text-white relative overflow-hidden h-full flex flex-col justify-between'>
            {/* Decorative */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-secondary-fixed/10 rounded-full blur-3xl -mr-32 -mt-32' />

            <div className='relative z-10'>
              <h3 className='font-label-md text-secondary-fixed uppercase tracking-widest mb-10'>
                {lang === 'de' ? 'Ihr Preisvergleich' : 'Your Price Comparison'}
              </h3>

              <div className='grid grid-cols-1 md:grid-cols-[1fr_240px] gap-6 mb-10'>
                <div className='savings-pulse bg-secondary-fixed text-on-secondary-fixed rounded-2xl p-8 shadow-xl'>
                  <div className='font-label-md uppercase tracking-widest opacity-70 mb-3'>
                    {lang === 'de' ? 'Tirana Preis' : 'Tirana Price'}
                  </div>
                  <div className='text-[64px] font-bold leading-none'>
                    {formatEuro(tirana)}
                  </div>
                  <div className='font-label-md mt-3 opacity-80'>
                    {toothCount} {lang === 'de' ? 'Veneers' : 'veneers'} ·{' '}
                    {lang === 'de'
                      ? config.materials[materialIndex]?.name_de
                      : config.materials[materialIndex]?.name_en}
                  </div>
                </div>

                <aside className='bg-white/10 border border-white/15 rounded-2xl p-6 flex flex-col justify-center'>
                  <div className='font-label-md opacity-70 mb-2'>
                    {lang === 'de'
                      ? 'Ihre Ersparnis'
                      : 'Your Savings'}
                  </div>
                  <div className='text-4xl font-bold text-secondary-fixed'>
                    {formatEuro(savings)}
                  </div>
                  <div className='mt-2 inline-flex w-fit items-center rounded-full bg-secondary-fixed/15 px-3 py-1 text-secondary-fixed font-label-md'>
                    -{pct}%
                  </div>
                  <p className='mt-4 text-sm opacity-70'>
                    {lang === 'de'
                      ? 'gegenüber dem ausgewählten deutschen Referenzpreis'
                      : 'compared with the selected German reference price'}
                  </p>
                </aside>
              </div>

              {/* Bar Chart */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='bg-white/5 p-5 rounded border border-white/10'>
                  <div className='font-label-md opacity-60 mb-1'>
                    {lang === 'de' ? 'Kosten DE' : 'Cost DE'}
                  </div>
                  <div className='font-headline-sm'>{formatEuro(germany)}</div>
                  <div className='w-full bg-white/10 h-2 mt-4 rounded-full overflow-hidden'>
                    <div className='bg-error w-full h-full' />
                  </div>
                </div>
                <div className='bg-white/10 p-5 rounded border border-secondary-fixed/40'>
                  <div className='font-label-md text-secondary-fixed mb-1'>
                    {lang === 'de' ? 'Kosten Tirana' : 'Cost Tirana'}
                  </div>
                  <div className='font-headline-sm text-secondary-fixed'>{formatEuro(tirana)}</div>
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
                {lang === 'de'
                  ? 'Erhalten Sie ein individuelles Angebot'
                  : 'Get a Personalized Quote'}
              </a>
              <p className='text-center mt-4 font-label-md opacity-50 text-[12px]'>
                {lang === 'de'
                  ? 'Kostenlose Erstberatung inklusive Digital Smile Design'
                  : 'Free initial consultation including Digital Smile Design'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
