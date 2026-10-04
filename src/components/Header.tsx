'use client';
import { useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { Link } from '@/i18n/navigation';

export default function Header() {
  const t = useTranslations('header');
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'color-mix(in srgb, var(--bg-primary) 85%, transparent)' }}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold tracking-wide" style={{ color: 'var(--text-primary)' }}>
          Playa de San Lorenzo
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <Link href="/#about" className="hover:opacity-70 transition-opacity">{t('home')}</Link>
          <Link href="/#gallery" className="hover:opacity-70 transition-opacity">{t('gallery')}</Link>
          <Link href="/#reviews" className="hover:opacity-70 transition-opacity">{t('reviews')}</Link>
          <Link href="/#map" className="hover:opacity-70 transition-opacity">{t('map')}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
