'use client';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  const tags: string[] = t.raw('tags');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/gallery/images (1).jpg"
          alt="Playa de San Lorenzo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto pt-16">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 leading-tight">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-6 font-light">
          {t('subtitle')}
        </p>

        {/* Rating & Hours */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="stars">★★★★★</span>
            <span className="font-semibold">{t('rating')}</span>
            <span className="opacity-70">({t('reviewCount')} {t('reviewLabel')})</span>
          </div>
          <span className="opacity-40">|</span>
          <span className="opacity-90">{t('hours')}</span>
        </div>

        {/* Google Maps link */}
        <a
          href="https://maps.app.goo.gl/uyyo6isCirshqbQL6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/30 transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          {t('openMaps')}
        </a>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-xs font-medium tracking-wide">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </section>
  );
}