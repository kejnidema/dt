import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import {
  formatPrice,
  groupsOf,
  itemsOf,
  localMarkets,
  lowestPrice,
  priceCategories,
  priceGroups,
  priceListLabels,
  savingOf,
  type LocalMarket,
  type PriceGroup,
  type PriceGroupId,
  type PriceItem,
} from '@/lib/priceList';
import type { Lang } from '@/lib/translations';

interface PriceListProps {
  showHeading?: boolean;
  /** Restrict to these group ids; full categorised list when omitted */
  groupIds?: PriceGroupId[];
  tone?: 'low' | 'white';
}

type Labels = (typeof priceListLabels)[Lang];

export default function PriceList({ showHeading = true, groupIds, tone = 'low' }: PriceListProps) {
  const { lang } = useI18n();
  const labels = priceListLabels[lang];
  const market = localMarkets[lang];
  const location = useLocation();
  const full = !groupIds;
  const [open, setOpen] = useState<Set<string>>(() => new Set());
  const [activeCategory, setActiveCategory] = useState(priceCategories[0]?.id ?? '');

  const groups = useMemo(
    () => (groupIds ? priceGroups.filter((g) => groupIds.includes(g.id)) : priceGroups),
    [groupIds],
  );
  const itemIds = useMemo(() => new Set(groups.flatMap((g) => g.items.map((i) => i.id))), [groups]);

  const toggle = useCallback((id: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const focusItem = useCallback((id: string) => {
    setOpen((prev) => new Set(prev).add(id));
    requestAnimationFrame(() =>
      document.getElementById(`price-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
    );
  }, []);

  const scrollToCategory = (id: string) =>
    document.getElementById(`price-cat-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  useEffect(() => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id || !itemIds.has(id)) return;
    const timer = window.setTimeout(() => focusItem(id), 350);
    return () => window.clearTimeout(timer);
  }, [location.hash, itemIds, focusItem]);

  useEffect(() => {
    if (!full) return;
    const sections = document.querySelectorAll<HTMLElement>('[data-price-category]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveCategory(entry.target.getAttribute('data-price-category')!);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [full]);

  const bg = tone === 'white' ? 'bg-surface' : 'bg-surface-container-low';
  const navBg = tone === 'white' ? 'bg-surface/90' : 'bg-surface-container-low/90';

  return (
    <section className={`py-section-padding ${bg}`}>
      <div className={`${full ? 'max-w-[1200px]' : 'max-w-[1000px]'} mx-auto px-gutter`}>
        {showHeading && (
          <div className="mb-10 max-w-2xl">
            <h2 className="font-headline-md text-headline-md text-primary mb-3">{labels.title}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">{labels.subtitle}</p>
          </div>
        )}

        {market && (
          <div className="mb-10 flex flex-col md:flex-row md:items-center gap-5 rounded-md border border-aqua-deep/40 bg-aqua-soft px-6 py-5">
            <span className="w-12 h-12 shrink-0 rounded-md bg-primary text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">trending_down</span>
            </span>
            <div>
              <p className="font-headline-sm text-[18px] leading-snug text-primary mb-1">{market.bannerTitle}</p>
              <p className="text-[14px] leading-relaxed text-on-surface-variant max-w-3xl">{market.bannerText}</p>
            </div>
          </div>
        )}

        {full && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {priceCategories.map((category) => {
              const items = itemsOf(category);
              const low = lowestPrice(items);
              return (
                <div key={category.id} className="bg-white border border-outline-variant rounded-md p-5 flex flex-col">
                  <button
                    type="button"
                    onClick={() => scrollToCategory(category.id)}
                    className="flex items-center gap-3 mb-4 text-left"
                  >
                    <span className="w-10 h-10 shrink-0 rounded-md bg-primary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">{category.icon}</span>
                    </span>
                    <span>
                      <span className="block font-headline-sm text-[16px] leading-tight text-primary">
                        {category.title[lang]}
                      </span>
                      <span className="text-[12px] text-on-surface-variant">
                        {items.length} {items.length === 1 ? labels.treatment : labels.treatments}
                        {low !== null && ` · ${labels.from} ${formatPrice(low, lang)}`}
                      </span>
                    </span>
                  </button>
                  <ul className="border-t border-outline-variant divide-y divide-outline-variant/70">
                    {items.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => focusItem(item.id)}
                          className="group w-full flex items-baseline justify-between gap-3 py-2.5 text-left text-[14px]"
                        >
                          <span className="text-on-surface-variant group-hover:text-primary transition-colors">
                            {item.name[lang]}
                          </span>
                          <span className="font-medium text-primary whitespace-nowrap">
                            {formatPrice(item.price, lang)}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}

        {full && (
          <nav
            className={`sticky top-20 z-30 -mx-gutter px-gutter py-3 mb-10 ${navBg} backdrop-blur border-b border-outline-variant flex gap-2 overflow-x-auto`}
          >
            {priceCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => scrollToCategory(category.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-md border font-label-md text-[13px] transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-on-surface-variant border-outline-variant hover:text-primary hover:border-primary/40'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{category.icon}</span>
                {category.title[lang]}
              </button>
            ))}
          </nav>
        )}

        {full
          ? priceCategories.map((category) => (
              <div
                key={category.id}
                id={`price-cat-${category.id}`}
                data-price-category={category.id}
                className="scroll-mt-40 mb-16 last:mb-0"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant">
                  <span className="w-11 h-11 rounded-md bg-primary text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">{category.icon}</span>
                  </span>
                  <h2 className="font-headline-md text-[26px] leading-tight text-primary">{category.title[lang]}</h2>
                  <span className="ml-auto text-[13px] text-on-surface-variant whitespace-nowrap">
                    {itemsOf(category).length}{' '}
                    {itemsOf(category).length === 1 ? labels.treatment : labels.treatments}
                  </span>
                </div>
                {groupsOf(category).map((group) => (
                  <Group key={group.id} group={group} lang={lang} labels={labels} market={market} open={open} onToggle={toggle} />
                ))}
              </div>
            ))
          : groups.map((group) => (
              <Group key={group.id} group={group} lang={lang} labels={labels} market={market} open={open} onToggle={toggle} />
            ))}

        <p className="mt-10 flex items-start gap-2 text-[13px] text-on-surface-variant">
          <span className="material-symbols-outlined text-[18px]">info</span>
          {labels.note}
        </p>
      </div>
    </section>
  );
}

interface GroupProps {
  group: PriceGroup;
  lang: Lang;
  labels: Labels;
  market?: LocalMarket;
  open: Set<string>;
  onToggle: (id: string) => void;
}

function Group({ group, lang, labels, market, open, onToggle }: GroupProps) {
  return (
    <div className="mb-10 last:mb-0">
      <h3 className="font-label-md text-label-md uppercase tracking-[0.12em] text-on-surface-variant mb-3">
        {group.title[lang]}
      </h3>
      {group.intro && (
        <p className="mb-5 border-l-2 border-aqua-deep pl-4 text-[15px] leading-relaxed text-on-surface-variant max-w-3xl">
          {group.intro[lang]}
        </p>
      )}
      <div className="bg-white border border-outline-variant rounded-md divide-y divide-outline-variant">
        {group.items.map((item) => (
          <Row
            key={item.id}
            item={item}
            lang={lang}
            labels={labels}
            market={market}
            isOpen={open.has(item.id)}
            onToggle={() => onToggle(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

interface RowProps {
  item: PriceItem;
  lang: Lang;
  labels: Labels;
  market?: LocalMarket;
  isOpen: boolean;
  onToggle: () => void;
}

function Row({ item, lang, labels, market, isOpen, onToggle }: RowProps) {
  const local = market?.prices[item.id];
  const saving = local !== undefined ? savingOf(local, item.price) : null;
  return (
    <article id={`price-${item.id}`} className="scroll-mt-40">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto_auto] items-center gap-x-5 px-5 md:px-6 py-4 text-left hover:bg-surface-container-low/60 transition-colors"
      >
        <span className="hidden md:flex w-10 h-10 rounded-md bg-aqua-soft text-primary items-center justify-center">
          <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
        </span>
        <span className="min-w-0">
          <span className="block font-headline-sm text-[17px] leading-snug text-primary">{item.name[lang]}</span>
          <span className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-on-surface-variant">
            <span className="inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px]">schedule</span>
              {item.duration[lang]}
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px]">flight</span>
              {item.visits[lang]}
            </span>
          </span>
        </span>
        <span className="text-right">
          {market && local !== undefined && (
            <span className="block mb-2">
              <span className="block text-[11px] uppercase tracking-wider text-on-surface-variant">{market.localLabel}</span>
              <s className="block text-[15px] text-on-surface-variant/80 whitespace-nowrap">{formatPrice(local, lang)}</s>
              <span className="block mt-2 text-[11px] uppercase tracking-wider text-primary font-semibold">{market.ourLabel}</span>
            </span>
          )}
          <span className="block font-headline-md text-[22px] leading-none text-primary whitespace-nowrap">
            {formatPrice(item.price, lang)}
          </span>
          {item.unit && (
            <span className="block mt-1 text-[11px] uppercase tracking-wider text-on-surface-variant">
              {item.unit[lang]}
            </span>
          )}
          {market && saving && (
            <span className="inline-block mt-2 rounded-sm bg-primary px-2 py-0.5 text-[11px] font-semibold text-white whitespace-nowrap">
              {market.saveLabel} {formatPrice(saving.amount, lang)} (−{saving.percent}%)
            </span>
          )}
        </span>
        <span
          className={`hidden md:flex w-8 h-8 rounded-full border border-outline-variant items-center justify-center text-primary transition-transform duration-300 ${
            isOpen ? 'rotate-180 bg-surface-container-low' : ''
          }`}
          aria-label={labels.details}
        >
          <span className="material-symbols-outlined text-[20px]">expand_more</span>
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out-soft ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 md:px-6 md:pl-[84px] pb-6">
            <p className="font-body-md text-[15px] leading-relaxed text-on-surface-variant mb-4 max-w-3xl">
              {item.description[lang]}
            </p>
            <dl className="grid sm:grid-cols-3 gap-3 text-[13px]">
              <Fact icon="schedule" label={labels.duration} value={item.duration[lang]} />
              <Fact icon="flight" label={labels.visits} value={item.visits[lang]} />
              {item.healing && <Fact icon="hourglass_top" label={labels.healing} value={item.healing[lang]} />}
            </dl>
          </div>
        </div>
      </div>
    </article>
  );
}

function Fact({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2 bg-surface-container-low rounded-sm px-3 py-2">
      <span className="material-symbols-outlined text-[16px] text-primary mt-[1px]">{icon}</span>
      <div>
        <dt className="text-[11px] uppercase tracking-wider text-on-surface-variant">{label}</dt>
        <dd className="text-primary font-medium leading-snug">{value}</dd>
      </div>
    </div>
  );
}
