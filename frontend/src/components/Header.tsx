import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n, type Lang } from '@/lib/i18n';
import { treatmentGroups } from '@/pages/TreatmentsPage';
import { formatPrice, menuItemsOf, menuNames, subsectionItemsOf, menuSummaries, priceCategories, priceListLabels, treatmentHref, type PriceItem } from '@/lib/priceList';

const navItems = [
  { label: 'Home2', path: '/home2' },
  { label: 'Treatments', path: '/treatments', children: treatmentGroups },
  { label: 'Gallery', path: '/veneers/gallery' },
  { label: 'Travel', path: '/journey' },
  { label: 'About Us', path: '/about' },
];

const languageOptions: Array<{ code: Lang; label: string; flag: string }> = [
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'sq', label: 'Shqip', flag: '🇦🇱' },
];

function pathMatches(pathname: string, itemPath: string) {
  return pathname === itemPath || pathname.startsWith(`${itemPath}/`);
}

function isNavActive(pathname: string, item: (typeof navItems)[number]) {
  if (pathMatches(pathname, item.path)) return true;

  const anotherTopLevelItemMatches = navItems.some(
    (other) => other.path !== item.path && pathMatches(pathname, other.path),
  );
  if (anotherTopLevelItemMatches) return false;

  return item.children?.some((child) => pathMatches(pathname, child.link)) ?? false;
}

function MenuEntry({ entry, lang }: { entry: PriceItem; lang: Lang }) {
  return (
    <li>
      <Link to={treatmentHref(entry.id)} className="group/item flex gap-3 py-2 rounded-md">
        <span className="w-8 h-8 shrink-0 rounded-md bg-aqua-soft text-primary flex items-center justify-center transition-colors group-hover/item:bg-primary group-hover/item:text-white">
          <span className="material-symbols-outlined text-[17px]">{entry.icon}</span>
        </span>
        <span className="min-w-0">
          <span className="flex items-baseline justify-between gap-2">
            <span className="text-[14px] font-semibold text-primary leading-snug">{(menuNames[entry.id] ?? entry.name)[lang]}</span>
            <span className="text-[12px] text-on-surface-variant whitespace-nowrap">{formatPrice(entry.price, lang)}</span>
          </span>
          <span className="block text-[12px] leading-snug text-on-surface-variant truncate">
            {menuSummaries[entry.id]?.[lang] ?? entry.description[lang]}
          </span>
        </span>
      </Link>
    </li>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const overlay = location.pathname === '/home2' && !scrolled && !menuOpen && !languageOpen;
  const { lang, setLang, t } = useI18n();

  const currentLanguage =
    languageOptions.find((option) => option.code === lang) ??
    { code: 'en' as Lang, label: 'English', flag: '🇬🇧' };

  const selectLanguage = (code: Lang) => {
    setLang(code);
    setLanguageOpen(false);
  };

  const [megaHidden, setMegaHidden] = useState(false);
  const closeMega = () => {
    setMegaHidden(true);
    (document.activeElement as HTMLElement | null)?.blur();
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setLanguageOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`site-header w-full sticky top-0 z-50 h-20 ${scrolled ? 'scrolled' : ''} ${overlay ? 'is-overlay' : ''}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex justify-between items-center h-full">
        <Link to="/" className="flex items-center gap-3">
          <div className="header-logo h-10 w-10 rounded-md bg-primary flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined text-on-primary text-2xl">dentistry</span>
          </div>
          <span className="header-brand font-headline-sm text-[18px] font-semibold tracking-tight text-primary hidden sm:block transition-colors">
            Veneer Clinic Tirana
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = isNavActive(location.pathname, item);
            const label = t(item.label);

            if (item.path === '/treatments') {
              return (
                <div key={item.path} className="group h-20 flex items-center">
                  <Link
                    to={item.path}
                    onMouseEnter={() => setMegaHidden(false)}
                    onFocus={() => setMegaHidden(false)}
                    onClick={closeMega}
                    className={`nav-link font-label-md text-label-md flex items-center gap-1 ${isActive ? 'active' : ''}`}
                  >
                    {label}
                    <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${megaHidden ? '' : 'group-hover:rotate-180'}`}>expand_more</span>
                  </Link>

                  <div
                    onClick={(e) => {
                      if ((e.target as HTMLElement).closest('a')) closeMega();
                    }}
                    className={`invisible opacity-0 translate-y-2 transition-all duration-300 ease-out-soft absolute inset-x-0 top-full px-6 md:px-10 ${
                      megaHidden
                        ? 'pointer-events-none'
                        : 'group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0'
                    }`}
                  >
                    <div className="max-w-[1360px] mx-auto bg-white border border-outline-variant rounded-lg shadow-header">
                      <div className="grid grid-cols-4 gap-8 p-8">
                        {priceCategories.map((category) => (
                          <div key={category.id}>
                            <p className="font-label-md text-[12px] uppercase tracking-[0.12em] text-on-surface-variant pb-3 mb-2 border-b border-outline-variant">
                              {category.title[lang]}
                            </p>
                            <ul>
                              {menuItemsOf(category).map((entry) => (
                                <MenuEntry key={entry.id} entry={entry} lang={lang} />
                              ))}
                            </ul>
                            {category.subsection && (
                              <>
                                <p className="font-label-md text-[12px] uppercase tracking-[0.12em] text-on-surface-variant pb-3 mb-2 mt-5 border-b border-outline-variant">
                                  {category.subsection.title[lang]}
                                </p>
                                <ul>
                                  {subsectionItemsOf(category).map((entry) => (
                                    <MenuEntry key={entry.id} entry={entry} lang={lang} />
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between gap-4 px-8 py-4 border-t border-outline-variant bg-surface-container-low rounded-b-lg">
                        <div className="flex flex-wrap gap-2">
                          {(item.children ?? []).map((child) => (
                            <Link
                              key={`${child.link}-${child.title}`}
                              to={child.link}
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-outline-variant text-[13px] font-medium text-on-surface-variant hover:text-primary hover:border-primary/40 transition-colors"
                            >
                              <span className="material-symbols-outlined text-[16px]">{child.icon}</span>
                              {t(child.title)}
                            </Link>
                          ))}
                        </div>
                        <Link to="/services" className="inline-flex items-center gap-1 text-[13px] font-semibold text-primary whitespace-nowrap">
                          {priceListLabels[lang].title}
                          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (item.children) {
              return (
                <div key={item.path} className="relative group h-20 flex items-center">
                  <Link
                    to={item.path}
                    className={`nav-link font-label-md text-label-md flex items-center gap-1 ${isActive ? 'active' : ''}`}
                  >
                    {label}
                    <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:rotate-180">expand_more</span>
                  </Link>

                  <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 transition-all duration-300 ease-out-soft absolute left-0 top-full w-72 bg-white border border-outline-variant rounded-2xl shadow-header p-2">
                    {item.children.map((child) => (
                      <Link
                        key={`${child.link}-${child.title}`}
                        to={child.link}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                      >
                        <span className="w-9 h-9 rounded-full bg-aqua-soft flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-[20px]">{child.icon}</span>
                        </span>
                        <span className="font-label-md text-label-md">{t(child.title)}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link font-label-md text-label-md ${isActive ? 'active' : ''}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block relative" aria-label={t('Language selector')}>
            <button
              type="button"
              onClick={() => setLanguageOpen((open) => !open)}
              className="header-lang flex items-center gap-2 border border-outline-variant rounded-md pl-1.5 pr-3 py-1.5 bg-white text-on-surface-variant hover:text-primary hover:border-primary/40 transition-colors"
              aria-expanded={languageOpen}
            >
              <span className="w-7 h-7 rounded-full flex items-center justify-center text-lg overflow-hidden">
                {currentLanguage.flag}
              </span>
              <span className="font-label-md text-label-md">{currentLanguage.code.toUpperCase()}</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>

            {languageOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-outline-variant rounded-2xl shadow-header p-2 animate-[fade-up_.3s_cubic-bezier(.22,1,.36,1)_both]">
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => selectLanguage(option.code)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left transition-colors ${
                      lang === option.code
                        ? 'bg-aqua text-primary'
                        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                    }`}
                  >
                    <span className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-lg overflow-hidden">
                      {option.flag}
                    </span>
                    <span className="font-label-md text-label-md">{option.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="header-cta bg-primary text-on-primary px-5 py-2.5 font-label-md text-label-md rounded-md active:scale-[0.98]"
          >
            {t('Book Now')}
          </Link>

          <button
            className="header-menu-btn lg:hidden p-2 text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-3 right-3 bg-white border border-outline-variant rounded-xl shadow-header animate-[fade-up_.35s_cubic-bezier(.22,1,.36,1)_both]">
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => {
              const isActive = isNavActive(location.pathname, item);
              const label = t(item.label);

              if (item.children) {
                return (
                  <div key={item.path} className="space-y-2">
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`nav-link font-label-md text-label-md py-2 w-fit flex items-center gap-1 ${isActive ? 'active' : ''}`}
                    >
                      {label}
                      <span className="material-symbols-outlined text-[18px]">expand_more</span>
                    </Link>
                    <div className="pl-4 border-l border-outline-variant flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={`${child.link}-${child.title}`}
                          to={child.link}
                          onClick={closeMenu}
                          className="flex items-center gap-3 py-2 text-on-surface-variant hover:text-primary transition-colors"
                        >
                          <span className="w-8 h-8 rounded-full bg-aqua-soft flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-[18px]">{child.icon}</span>
                          </span>
                          <span className="font-label-md text-label-md">{t(child.title)}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`nav-link font-label-md text-label-md py-2 self-start ${isActive ? 'active' : ''}`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="flex items-center gap-3 pt-4 border-t border-outline-variant">
              <div className="relative" aria-label={t('Language selector')}>
                <button
                  type="button"
                  onClick={() => setLanguageOpen((open) => !open)}
                  className="flex items-center gap-2 border border-outline-variant rounded-md pl-1.5 pr-3 py-1.5 bg-white text-on-surface-variant"
                  aria-expanded={languageOpen}
                >
                  <span className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-lg overflow-hidden">
                    {currentLanguage.flag}
                  </span>
                  <span className="font-label-md text-label-md">{currentLanguage.code.toUpperCase()}</span>
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </button>

                {languageOpen && (
                  <div className="absolute left-0 bottom-full mb-2 w-48 bg-white border border-outline-variant rounded-2xl shadow-header p-2">
                    {languageOptions.map((option) => (
                      <button
                        key={option.code}
                        type="button"
                        onClick={() => selectLanguage(option.code)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left transition-colors ${
                          lang === option.code
                            ? 'bg-aqua text-primary'
                            : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                        }`}
                      >
                        <span className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-lg overflow-hidden">
                          {option.flag}
                        </span>
                        <span className="font-label-md text-label-md">{option.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="bg-primary text-on-primary px-6 py-3 font-label-md rounded-md w-full text-center"
              >
                {t('Book Now')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
