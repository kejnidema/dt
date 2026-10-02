import { useI18n } from '@/lib/i18n';

interface TrustItem {
  icon: string;
  title: Record<'de' | 'en', string>;
  subtitle: Record<'de' | 'en', string>;
}

const trustItems: TrustItem[] = [
  {
    icon: 'verified_user',
    title: { de: 'ISO-Zertifiziert', en: 'ISO Certified' },
    subtitle: { de: 'Deutsche Qualitätsstandards', en: 'German quality standards' },
  },
  {
    icon: 'star',
    title: { de: '4.9/5 Google Reviews', en: '4.9/5 Google Reviews' },
    subtitle: { de: '500+ glückliche Patienten', en: '500+ happy patients' },
  },
  {
    icon: 'flight_takeoff',
    title: { de: '2 Std. von Frankfurt', en: '2 hrs from Frankfurt' },
    subtitle: { de: 'Täglich Direktflüge', en: 'Daily direct flights' },
  },
  {
    icon: 'payments',
    title: { de: '-70% Kosten', en: '-70% Costs' },
    subtitle: { de: 'Beste Preisgarantie', en: 'Best price guarantee' },
  },
];

export default function TrustBar() {
  const { localized } = useI18n();

  return (
    <section className="bg-primary py-8 md:py-10">
      <div className="max-w-[1200px] mx-auto px-gutter">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 text-on-primary">
          {trustItems.map((item, i) => (
            <div
              key={item.icon}
              className={`flex items-center gap-3 min-w-0 cursor-default px-4 lg:px-6 ${
                i > 0 ? 'lg:border-l lg:border-white/10' : 'lg:pl-0'
              } ${i % 2 === 1 ? 'border-l border-white/10 lg:border-l' : ''}`}
            >
              <div className="w-10 h-10 rounded-full bg-aqua/15 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-aqua text-[20px]">{item.icon}</span>
              </div>
              <div className="min-w-0">
                <p className="font-headline-sm text-[15px] leading-5 font-semibold tracking-[-0.01em]">
                  {localized({ ...item.title, en: item.title.en })}
                </p>
                <p className="text-[12px] leading-4 text-on-primary/55 mt-0.5 whitespace-nowrap">
                  {localized({ ...item.subtitle, en: item.subtitle.en })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
