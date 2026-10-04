'use client';
import { useTranslations } from 'next-intl';

export default function Reviews() {
  const t = useTranslations('reviews');
  const stats = [
    { label: t('ratingLabel'), value: t('rating') },
    { label: t('reviewCountLabel'), value: t('reviewCount') },
    { label: t('updatedLabel'), value: t('updatedAt') },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <section id="reviews" className="section">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <p className="mb-10 text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          {t('declaration')}
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="stars text-lg">★★★★★</span>
              <span className="text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                {t('rating')}
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
              {t('summary')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg p-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <div className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                  <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('ctaTitle')}
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              {t('ctaText')}
            </p>
            <a
              href="https://maps.app.goo.gl/aqnvo1aDhdaWHtMQA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              title={t('seeAll')}
            >
              {t('seeAll')}
            </a>
            <p className="mt-4 text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {t('sourceNote')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
