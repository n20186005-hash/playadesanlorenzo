'use client';
import { useTranslations } from 'next-intl';

export default function Explore() {
  const t = useTranslations('explore');
  const items = [0, 1, 2, 3];

  return (
    <div style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="section">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <div className="max-w-3xl mx-auto">
          {items.map((i) => (
            <div key={i} className="numbered-item">
              <div className="num">{i + 1}</div>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {t(`items.${i}.title`)}
                </h3>
                <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
                  {t(`items.${i}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
