'use client';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');
  const highlights: string[] = t.raw('highlights.items');
  const keywords: string[] = t.raw('keywordsList');

  return (
    <section id="about" className="section">
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
        {t('title')}
      </h2>
      <p className="text-lg leading-relaxed mb-8 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
        {t('description')}
      </p>

      <h3 className="font-serif text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
        {t('highlights.title')}
      </h3>
      <ul className="space-y-3 mb-10 max-w-2xl">
        {highlights.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-3" style={{ color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--accent)' }} className="mt-1.5 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h3 className="font-serif text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
        {t('keywords.title')}
      </h3>
      <div className="flex flex-wrap gap-2">
        {keywords.map((kw: string, i: number) => (
          <span key={i} className="tag">{kw}</span>
        ))}
      </div>
    </section>
  );
}
