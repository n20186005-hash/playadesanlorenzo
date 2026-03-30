'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t py-10 px-4" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
          <Link href="/privacy-policy" className="hover:underline" style={{ color: 'var(--text-muted)' }}>
            {t('privacy')}
          </Link>
          <Link href="/terms-of-service" className="hover:underline" style={{ color: 'var(--text-muted)' }}>
            {t('terms')}
          </Link>
          <Link href="/cookie-settings" className="hover:underline" style={{ color: 'var(--text-muted)' }}>
            {t('cookies')}
          </Link>
        </div>
        <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
          {t('support')}
        </p>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}
