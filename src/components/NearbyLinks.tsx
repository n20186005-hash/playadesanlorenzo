import { Link } from '@/i18n/navigation';
import { attractionSlugs, getNearby } from '@/data/attractions';
export default function NearbyLinks({locale, exclude}: {locale: string; exclude?: string}) {
  const {labels, pages} = getNearby(locale);
  return <section id="nearby" className="section nearby-links">
    <h2>{exclude ? labels.related : labels.title}</h2>
    <p className="nearby-intro">{labels.description}</p>
    <div className="nearby-grid">{attractionSlugs.filter(s => s !== exclude).map(slug => <article className="nearby-card" key={slug}>
      <h3><Link href={`/${slug}`}>{pages[slug].title}</Link></h3>
      <p>{pages[slug].tagline}</p>
      <Link href={`/${slug}`} className="nearby-text-link">{labels.cta} →</Link>
    </article>)}</div>
  </section>;
}
