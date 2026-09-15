import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { dictionaries, type Lang } from '@/lib/translations';

export type { Lang } from '@/lib/translations';

type LocalizedMap<T> = Partial<Record<Lang, T>> & { en: T };

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  localized: <T,>(content: LocalizedMap<T>) => T;
};

const STORAGE_KEY = 'veneer-clinic-language';
const I18nCtx = createContext<I18nCtx>({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
  localized: (content) => content.en,
});

function normalize(value: string) {
  return value.replace(/\s+/g, ' ').trim().replace(/^"|"$/g, '');
}

function translateNodeText(text: string, dictionary: Record<string, string>) {
  const key = normalize(text);
  const translated = dictionary[key];
  return translated ? text.replace(text.trim(), translated) : text;
}

function translatePage(lang: Lang) {
  const dictionary = dictionaries[lang];
  if (!dictionary) return;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return node.textContent?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  nodes.forEach((node) => {
    node.textContent = translateNodeText(node.textContent ?? '', dictionary);
  });

  document.querySelectorAll<HTMLElement>('[placeholder],[aria-label],[title]').forEach((el) => {
    ['placeholder', 'aria-label', 'title'].forEach((attr) => {
      const value = el.getAttribute(attr);
      if (value) el.setAttribute(attr, dictionary[normalize(value)] ?? value);
    });
  });
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    return saved === 'it' || saved === 'sq' || saved === 'en' || saved === 'de' ? saved : 'en';
  });

  const setLang = (next: Lang) => {
    localStorage.setItem(STORAGE_KEY, next);
    setLangState(next);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    if (!dictionaries[lang]) return;

    translatePage(lang);
    const observer = new MutationObserver(() => translatePage(lang));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [lang]);

  const t = (key: string) => dictionaries[lang]?.[normalize(key)] ?? key;
  const localized = <T,>(content: LocalizedMap<T>) => content[lang] ?? content.en;

  return (
    <I18nCtx.Provider value={{ lang, setLang, t, localized }}>
      <div key={lang}>{children}</div>
    </I18nCtx.Provider>
  );
}

export function useI18n() {
  return useContext(I18nCtx);
}
