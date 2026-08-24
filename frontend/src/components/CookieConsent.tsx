import { useEffect, useState } from 'react';
import { useI18n } from '@/lib/i18n';

export default function CookieConsent() {
  const { lang } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(localStorage.getItem('cookie-consent') !== 'accepted'), []);

  if (!visible) return null;

  const t = lang === 'de'
    ? {
        title: 'Cookies & Datenschutz.',
        text: 'Wir nutzen notwendige Cookies und optionale Analyse-Cookies, um diese Website zu verbessern.',
        reject: 'Ablehnen',
        accept: 'Akzeptieren',
      }
    : lang === 'it'
      ? {
          title: 'Cookie e privacy.',
          text: 'Utilizziamo cookie necessari e cookie analitici opzionali per migliorare questo sito web.',
          reject: 'Rifiuta',
          accept: 'Accetta',
        }
      : lang === 'sq'
        ? {
            title: 'Cookie dhe privatësia.',
            text: 'Përdorim cookie të domosdoshme dhe cookie analitike opsionale për të përmirësuar këtë faqe.',
            reject: 'Refuzo',
            accept: 'Prano',
          }
        : {
            title: 'Cookies & privacy.',
            text: 'We use necessary cookies and optional analytics cookies to improve this website.',
            reject: 'Reject',
            accept: 'Accept',
          };

  return (
    <div className="fixed left-4 right-4 bottom-4 z-[60] max-w-3xl mx-auto bg-white border border-outline-variant rounded-xl shadow-2xl p-5 flex flex-col md:flex-row gap-4 items-start md:items-center">
      <div className="flex-1 text-sm text-on-surface-variant">
        <strong className="text-primary">{t.title}</strong> {t.text}
      </div>
      <div className="flex gap-3">
        <button onClick={() => setVisible(false)} className="px-4 py-2 border border-outline-variant rounded-sm">{t.reject}</button>
        <button onClick={() => { localStorage.setItem('cookie-consent', 'accepted'); setVisible(false); }} className="px-4 py-2 bg-primary text-on-primary rounded-sm">{t.accept}</button>
      </div>
    </div>
  );
}
