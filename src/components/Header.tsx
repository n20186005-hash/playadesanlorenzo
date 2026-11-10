'use client';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { Link, usePathname } from '@/i18n/navigation';

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => {if (menuRef.current) menuRef.current.open = false;};
  useEffect(() => {closeMenu();}, [pathname, locale]);
  useEffect(() => {
    window.addEventListener('hashchange', closeMenu);
    return () => window.removeEventListener('hashchange', closeMenu);
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'color-mix(in srgb, var(--bg-primary) 85%, transparent)' }}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-2">
        <Link href="/" className="site-header-brand font-serif text-xl font-bold tracking-wide flex-1 min-w-0" style={{ color: 'var(--text-primary)' }}>
          Playa de San Lorenzo
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <Link href="/#about" className="hover:opacity-70 transition-opacity">{t('home')}</Link>
          <Link href="/#gallery" className="hover:opacity-70 transition-opacity">{t('gallery')}</Link>
          <Link href="/#reviews" className="hover:opacity-70 transition-opacity">{t('reviews')}</Link>
          <Link href="/#nearby" className="hover:opacity-70 transition-opacity">{t('nearby')}</Link>
          <Link href="/#map" className="hover:opacity-70 transition-opacity">{t('map')}</Link>
        </nav>
        <div className="flex items-center gap-2 flex-shrink-0">
          <ThemeToggle />
          <LanguageToggle />
          <details ref={menuRef} className="mobile-nav"><summary aria-label={t('menu')} aria-controls="mobile-navigation">☰</summary><nav id="mobile-navigation" aria-label={t('menu')} onClick={closeMenu}>
            <Link href="/#about">{t('home')}</Link>
            <Link href="/#gallery">{t('gallery')}</Link>
            <Link href="/#nearby">{t('nearby')}</Link>
            <Link href="/#map">{t('map')}</Link>
          </nav></details>
        </div>
      </div>
    </header>
  );
}
