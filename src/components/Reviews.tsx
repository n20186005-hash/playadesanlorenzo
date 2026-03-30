'use client';
import { useTranslations } from 'next-intl';

const COLORS = ['#0077b6', '#e94560', '#2d6a4f', '#e07c24', '#6c63ff', '#d63384', '#0d9488', '#b45309'];

export default function Reviews() {
  const t = useTranslations('reviews');
  const items = [0, 1, 2, 3, 4, 5];

  return (
    <div style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <section id="reviews" className="section">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <p className="mb-10 text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          {t('declaration')}
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((i) => {
            const name: string = t(`items.${i}.name`);
            const initial = name.charAt(0).toUpperCase();
            return (
              <div key={i} className="review-card">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                    style={{ backgroundColor: COLORS[i % COLORS.length] }}
                  >
                    {initial}
                  </div>
                  <div>
                    <div className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>{name}</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{t(`items.${i}.date`)}</div>
                  </div>
                  <div className="ml-auto stars text-sm">★★★★★</div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {t(`items.${i}.text`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* See all link */}
        <div className="mt-8 text-center">
          <a
            href="https://maps.app.goo.gl/uyyo6isCirshqbQL6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: 'var(--accent)' }}
            title={t('seeAll')}
          >
            {t('seeAll')}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </section>
    </div>
  );
}