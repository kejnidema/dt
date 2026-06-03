import { createContext, useContext, useState, type ReactNode } from 'react';

type Lang = 'de' | 'en';

type I18nCtx = { lang: Lang; setLang: (l: Lang) => void };

const I18nCtx = createContext<I18nCtx>({ lang: 'de', setLang: () => {} });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('de');
  return <I18nCtx.Provider value={{ lang, setLang }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  return useContext(I18nCtx);
}
