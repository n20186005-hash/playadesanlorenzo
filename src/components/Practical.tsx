'use client';
import { useTranslations } from 'next-intl';

const ICONS = {
  address: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  hours: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  transport: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  parking: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>,
  accessibility: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-4-4"/></svg>,
};

const fields = ['address', 'hours', 'transport', 'parking', 'accessibility'] as const;

export default function Practical() {
  const t = useTranslations('practical');

  return (
    <section className="section">
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
        {t('title')}
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        {fields.map((field) => (
          <div key={field} className="flex gap-4">
            <div className="flex-shrink-0 mt-1" style={{ color: 'var(--accent)' }}>
              {ICONS[field]}
            </div>
            <div>
              <div className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{t(`${field}.label`)}</div>
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t(`${field}.value`)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
