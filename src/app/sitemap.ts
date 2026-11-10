import type { MetadataRoute } from 'next';
import { attractionSlugs } from '@/data/attractions';
import { siteUrl, locales, localizedPath } from '@/lib/seo';
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/como-llegar', '/parking', '/servicios', '/privacy-policy', '/terms-of-service', '/cookie-settings', ...attractionSlugs.map(s=>`/${s}`)];
  return paths.flatMap(path => locales.map(locale => ({
    url: `${siteUrl}${localizedPath(locale, path)}`,
    lastModified: '2026-11-10',
    alternates: {languages: {...Object.fromEntries(locales.map(l => [l, `${siteUrl}${localizedPath(l, path)}`])), 'x-default': `${siteUrl}${localizedPath('es', path)}`}},
  })));
}
