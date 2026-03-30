'use client';
import { useTranslations } from 'next-intl';

export default function Comparison() {
  const t = useTranslations('comparison');

  return (
    <section id="comparison" className="section">
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
        {t('title')}
      </h2>
      <p className="mb-8 text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--text-muted)' }}>
        {t('description')}
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Nearby Beaches */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('nearbyBeaches.title')}
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium" style={{ color: 'var(--text-primary)' }}>Playa de Poniente</h4>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {t('nearbyBeaches.poniente')}
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-medium" style={{ color: 'var(--text-primary)' }}>Playa de Arbeyal</h4>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {t('nearbyBeaches.arbeyal')}
              </p>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('tips.title')}
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {t('tips.bestTime')}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {t('tips.safety')}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {t('tips.parking')}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {t('tips.services')}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Safety Warning */}
      <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <div className="flex items-start gap-3">
          <span className="text-yellow-600 mt-1">⚠️</span>
          <div>
            <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
              {t('safety.title')}
            </h4>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              {t('safety.content')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}