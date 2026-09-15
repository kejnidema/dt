import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n, type Lang } from '@/lib/i18n';
import { treatments } from '@/pages/TreatmentsPage';

const navItems = [
  { label: 'Treatments', path: '/treatments', children: treatments },
  { label: 'Pricing', path: '/pricing' },
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useI18n();

  const currentLanguage =
    languageOptions.find((option) => option.code === lang) ??
    { code: 'en' as Lang, label: 'English', flag: '🇬🇧' };

  const selectLanguage = (code: Lang) => {
    setLang(code);
    setLanguageOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setLanguageOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 bg-surface border-b border-outline-variant transition-shadow duration-300 h-20 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-gutter flex justify-between items-center h-full">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary-fixed text-2xl">tooth</span>
          </div>
          <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary hidden sm:block">
            Veneer Clinic Tirana
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = isNavActive(location.pathname, item);
            const label = t(item.label);

            if (item.children) {
              return (
                <div key={item.path} className="relative group h-20 flex items-center">
                  <Link
                    to={item.path}
                    className={`font-label-md text-label-md transition-colors duration-200 flex items-center gap-1 ${
                      isActive
                        ? 'text-primary border-b-2 border-primary pb-1'
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    {label}
                    <span className="material-symbols-outlined text-[18px]">expand_more</span>
                  </Link>

                  <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 transition-all duration-200 absolute left-0 top-full w-72 bg-white border border-outline-variant rounded-xl shadow-xl p-3">
                    {item.children.map((child) => (
                      <Link
                        key={`${child.link}-${child.title}`}
                        to={child.link}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                      >
                        <span className="material-symbols-outlined text-secondary">{child.icon}</span>
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
                className={`font-label-md text-label-md transition-colors duration-200 ${
                  isActive
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
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
              className="flex items-center gap-2 border border-outline-variant rounded-full px-2.5 py-1.5 bg-white text-on-surface-variant hover:text-primary hover:border-primary transition-colors"
              aria-expanded={languageOpen}
            >
              <span className="w-8 h-8 rounded-full bg-surface-container-low border border-outline-variant flex items-center justify-center text-lg overflow-hidden">
                {currentLanguage.flag}
              </span>
              <span className="font-label-md text-label-md">{currentLanguage.code.toUpperCase()}</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>

            {languageOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-outline-variant rounded-xl shadow-xl p-2">
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => selectLanguage(option.code)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      lang === option.code
                        ? 'bg-primary text-on-primary'
                        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                    }`}
                  >
                    <span className="w-8 h-8 rounded-full bg-surface-container-low border border-outline-variant flex items-center justify-center text-lg overflow-hidden">
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
            className="bg-primary text-on-primary px-6 py-2.5 font-label-md text-label-md rounded-sm hover:opacity-90 active:opacity-80 transition-all"
          >
            {t('Book Now')}
          </Link>

          <button
            className="lg:hidden p-2 text-primary"
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
        <div className="lg:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant shadow-lg">
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
                      className={`font-label-md text-label-md py-2 flex items-center justify-between ${
                        isActive
                          ? 'text-primary font-bold'
                          : 'text-on-surface-variant hover:text-primary'
                      }`}
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
                          className="flex items-center gap-3 py-2 text-on-surface-variant hover:text-primary"
                        >
                          <span className="material-symbols-outlined text-secondary text-[20px]">{child.icon}</span>
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
                  className={`font-label-md text-label-md py-2 ${
                    isActive
                      ? 'text-primary font-bold'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
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
                  className="flex items-center gap-2 border border-outline-variant rounded-full px-2.5 py-1.5 bg-white text-on-surface-variant"
                  aria-expanded={languageOpen}
                >
                  <span className="w-8 h-8 rounded-full bg-surface-container-low border border-outline-variant flex items-center justify-center text-lg overflow-hidden">
                    {currentLanguage.flag}
                  </span>
                  <span className="font-label-md text-label-md">{currentLanguage.code.toUpperCase()}</span>
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </button>

                {languageOpen && (
                  <div className="absolute left-0 bottom-full mb-2 w-48 bg-white border border-outline-variant rounded-xl shadow-xl p-2">
                    {languageOptions.map((option) => (
                      <button
                        key={option.code}
                        type="button"
                        onClick={() => selectLanguage(option.code)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                          lang === option.code
                            ? 'bg-primary text-on-primary'
                            : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                        }`}
                      >
                        <span className="w-8 h-8 rounded-full bg-surface-container-low border border-outline-variant flex items-center justify-center text-lg overflow-hidden">
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
                className="bg-primary text-on-primary px-6 py-3 font-label-md rounded-sm w-full text-center"
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
