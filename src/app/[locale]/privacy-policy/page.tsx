'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function PrivacyPolicy() {
  const t = useTranslations('privacy');
  const sections = [0, 1, 2, 3, 4];

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
      <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('intro')}</p>

      {sections.map((i) => (
        <div key={i} className="mb-8">
          <h2 className="font-serif text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {t(`sections.${i}.title`)}
          </h2>
          <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {t(`sections.${i}.content`)}
          </p>
        </div>
      ))}
    </div>
  );
}
