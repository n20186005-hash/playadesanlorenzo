'use client';
import { useTranslations } from 'next-intl';
export default function References() {
  const t = useTranslations('references');
  return <section className="section">
    <h2 className="font-serif text-2xl font-bold mb-4">{t('title')}</h2>
    <p className="text-sm mb-6 max-w-2xl" style={{color:'var(--text-muted)'}}>{t('disclaimer')}</p>
    <ul className="space-y-3 text-sm" style={{color:'var(--text-secondary)'}}>
      <li><a href="https://maps.app.goo.gl/aqnvo1aDhdaWHtMQA" target="_blank" rel="noopener noreferrer" className="underline">{t('sources.google')}</a></li>
      <li><a href="https://www.turismoasturias.es/en/descubre/costa/playas/playa-de-san-lorenzo" target="_blank" rel="noopener noreferrer" className="underline">Turismo Asturias · Playa de San Lorenzo</a></li>
      <li><a href="https://www.gijon.es/es/directorio/playa-de-san-lorenzo" target="_blank" rel="noopener noreferrer" className="underline">Ayuntamiento de Gijón · Playa de San Lorenzo</a></li>
      <li>{t('sources.unsplash')}</li><li>{t('sources.wikipedia')}</li>
    </ul>
  </section>;
}
