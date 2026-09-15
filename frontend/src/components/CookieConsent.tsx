import { useEffect, useState } from 'react';
import { useI18n } from '@/lib/i18n';

export default function CookieConsent() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(localStorage.getItem('cookie-consent') !== 'accepted'), []);

  if (!visible) return null;


  return (
    <div className="fixed left-4 right-4 bottom-4 z-[60] max-w-3xl mx-auto bg-white border border-outline-variant rounded-xl shadow-2xl p-5 flex flex-col md:flex-row gap-4 items-start md:items-center">
      <div className="flex-1 text-sm text-on-surface-variant">
        <strong className="text-primary">{t('Cookies & privacy.')}</strong> {t('We use necessary cookies and optional analytics cookies to improve this website.')}
      </div>
      <div className="flex gap-3">
        <button onClick={() => setVisible(false)} className="px-4 py-2 border border-outline-variant rounded-sm">{t('Reject')}</button>
        <button onClick={() => { localStorage.setItem('cookie-consent', 'accepted'); setVisible(false); }} className="px-4 py-2 bg-primary text-on-primary rounded-sm">{t('Accept')}</button>
      </div>
    </div>
  );
}
