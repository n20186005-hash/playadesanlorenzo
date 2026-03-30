'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useState, useEffect } from 'react';

interface CookiePrefs {
  analytics: boolean;
  preferences: boolean;
  marketing: boolean;
}

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
      style={{ backgroundColor: enabled ? 'var(--accent)' : 'var(--border-color)' }}
    >
      <span
        className="inline-block h-4 w-4 rounded-full bg-white transition-transform"
        style={{ transform: enabled ? 'translateX(24px)' : 'translateX(4px)' }}
      />
    </button>
  );
}

export default function CookieSettings() {
  const t = useTranslations('cookieSettings');
  const [prefs, setPrefs] = useState<CookiePrefs>({ analytics: true, preferences: true, marketing: false });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookiePrefs');
    if (stored) {
      try { setPrefs(JSON.parse(stored)); } catch {}
    }
  }, []);

  const save = () => {
    localStorage.setItem('cookiePrefs', JSON.stringify(prefs));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="section pt-24">
      <Link href="/" className="inline-flex items-center gap-2 mb-8 text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--accent)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        {t('backHome')}
      </Link>

      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
        {t('title')}
      </h1>
      <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>{t('lastUpdated')}</p>
      <p className="mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('intro')}</p>

      <div className="space-y-6 max-w-2xl">
        {/* Essential - always on */}
        <div className="review-card flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{t('necessary.title')}</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('necessary.description')}</p>
          </div>
          <span className="text-xs font-medium whitespace-nowrap px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
            {t('necessary.status')}
          </span>
        </div>

        {/* Analytics */}
        <div className="review-card flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{t('analytics.title')}</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('analytics.description')}</p>
          </div>
          <Toggle enabled={prefs.analytics} onChange={(v) => setPrefs({...prefs, analytics: v})} />
        </div>

        {/* Preferences */}
        <div className="review-card flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{t('preferences.title')}</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('preferences.description')}</p>
          </div>
          <Toggle enabled={prefs.preferences} onChange={(v) => setPrefs({...prefs, preferences: v})} />
        </div>

        {/* Marketing */}
        <div className="review-card flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{t('marketing.title')}</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('marketing.description')}</p>
          </div>
          <Toggle enabled={prefs.marketing} onChange={(v) => setPrefs({...prefs, marketing: v})} />
        </div>
      </div>

      <div className="mt-8">
        <button onClick={save} className="btn-primary">
          {saved ? '\u2713' : ''} {t('save')}
        </button>
      </div>
    </div>
  );
}
