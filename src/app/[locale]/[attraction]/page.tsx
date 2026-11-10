import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { attractionSlugs, getNearby, sources, type AttractionSlug } from '@/data/attractions';
import { Link } from '@/i18n/navigation';
import { pageMetadata, siteUrl, localizedPath, locales } from '@/lib/seo';
import NearbyLinks from '@/components/NearbyLinks';

type Props = {params: Promise<{locale: string; attraction: string}>};
function isAttraction(slug: string): slug is AttractionSlug {return attractionSlugs.includes(slug as AttractionSlug);}
export function generateStaticParams() {return attractionSlugs.map(attraction => ({attraction}));}
export async function generateMetadata({params}: Props) {
  const {locale, attraction} = await params;
  if (!isAttraction(attraction)) notFound();
  const p = getNearby(locale).pages[attraction];
  return pageMetadata(locale, `/${attraction}`, p.title, p.description);
}
function Bullets({items, ordered = false}: {items: string[]; ordered?: boolean}) {
  const Tag = ordered ? 'ol' : 'ul';
  return <Tag className={ordered ? 'attraction-route' : 'attraction-list'}>{items.map(item => <li key={item}>{item}</li>)}</Tag>;
}
export default async function AttractionPage({params}: Props) {
  const {locale, attraction} = await params;
  if (!locales.includes(locale as typeof locales[number]) || !isAttraction(attraction)) notFound();
  setRequestLocale(locale);
  const {labels: l, pages} = getNearby(locale);
  const p = pages[attraction];
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.address)}`;
  const jsonLd = {'@context':'https://schema.org', '@type':'WebPage', name:p.title, description:p.description,
    url:`${siteUrl}${localizedPath(locale, `/${attraction}`)}`, inLanguage:locale, dateModified:'2026-11-10',
    citation:sources[attraction].map(s=>s.url),
    breadcrumb:{'@type':'BreadcrumbList',itemListElement:[
      {'@type':'ListItem',position:1,name:'Playa de San Lorenzo',item:`${siteUrl}${localizedPath(locale)}`},
      {'@type':'ListItem',position:2,name:p.title,item:`${siteUrl}${localizedPath(locale, `/${attraction}`)}`},
    ]}};
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} />
    <article className="attraction-page">
      <header className="attraction-hero">
        <div className="attraction-wrap">
          <Link href="/" className="attraction-back">← {l.back}</Link>
          <p className="attraction-eyebrow">Gijón · Asturias</p>
          <h1>{p.title}</h1><p className="attraction-tagline">{p.tagline}</p>
          <a className="btn-primary" href={mapUrl} target="_blank" rel="noopener noreferrer">{l.mapCta}</a>
        </div>
      </header>
      <div className="attraction-body attraction-wrap">
        <section><h2>{l.intro}</h2><p>{p.intro}</p></section>
        <section className="attraction-note"><h2>{l.tips}</h2><Bullets items={p.tips} /></section>
        <section><h2>{l.highlights}</h2><Bullets items={p.highlights} /></section>
        <section><h2>{l.about}</h2><p>{p.about}</p></section>
        <section><h2>{l.facts}</h2><dl className="attraction-facts">{p.facts.map(([key,value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl></section>
        {p.hours && <section><h2>{l.hours}</h2><p>{p.hours}</p></section>}
        {p.admission && <section><h2>{l.admission}</h2><p>{p.admission}</p></section>}
        <section><h2>{l.transport}</h2><p>{p.transport}</p></section>
        <section><h2>{l.appeal}</h2><div className="attraction-appeal">{p.appeal.map(item => <div key={item.title}><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></section>
        <section><h2>{l.route}</h2><Bullets items={p.route} ordered /></section>
        <section className="attraction-note"><h2>{l.notices}</h2><Bullets items={p.notices} /></section>
        {p.photo && <section><h2>{l.photo}</h2><p>{p.photo}</p></section>}
        <section><h2>{l.stay}</h2><p>{p.stay}</p></section>
        <section><h2>{l.faq}</h2>{p.faq.map(item => <details className="attraction-faq" key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</section>
        <section className="attraction-map"><h2>{l.map}</h2><p>{p.address}</p><a className="btn-primary" href={mapUrl} target="_blank" rel="noopener noreferrer">{l.mapCta}</a></section>
        <section className="attraction-sources"><h2>{l.sources}</h2><p>{l.reviewed}</p><ul>{sources[attraction].map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title} ↗</a></li>)}</ul></section>
        <nav className="attraction-practical" aria-label={l.practical}><h2>{l.practical}</h2><Link href="/como-llegar">{locale === 'es' ? 'Cómo llegar' : locale === 'fr' ? 'Comment venir' : locale === 'zh-Hant' ? '前往海灘' : 'Getting to the beach'}</Link><Link href="/parking">{locale === 'zh-Hant' ? '停車指南' : locale === 'fr' ? 'Stationnement' : 'Parking'}</Link><Link href="/servicios">{locale === 'es' ? 'Servicios' : locale === 'fr' ? 'Services' : locale === 'zh-Hant' ? '海灘服務' : 'Beach services'}</Link></nav>
      </div>
    </article>
    <NearbyLinks locale={locale} exclude={attraction} />
  </>;
}
