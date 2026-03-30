'use client';
import { useTranslations } from 'next-intl';

export default function References() {
  const t = useTranslations('references');

  return (
    <section className="section">
      <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
        {t('title')}
      </h2>
      <p className="text-sm mb-6 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
        {t('disclaimer')}
      </p>
      <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
        <li className="flex items-center gap-2">
          <span style={{ color: 'var(--accent)' }}>•</span>
          {t('sources.google')}
        </li>
        <li className="flex items-center gap-2">
          <span style={{ color: 'var(--accent)' }}>•</span>
          {t('sources.unsplash')}
        </li>
        <li className="flex items-center gap-2">
          <span style={{ color: 'var(--accent)' }}>•</span>
          {t('sources.wikipedia')}
        </li>
      </ul>
    </section>
  );
}
