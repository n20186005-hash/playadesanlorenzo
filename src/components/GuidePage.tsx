import { Link } from '@/i18n/navigation';

type GuideSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

type FaqItem = {
  q: string;
  a: string;
};

type RelatedGuide = {
  href: string;
  title: string;
  description: string;
  cta: string;
};

type GuidePageProps = {
  backHome: string;
  title: string;
  description: string;
  lastUpdated: string;
  highlightsTitle: string;
  highlights: string[];
  sections: GuideSection[];
  faqTitle: string;
  faqItems: FaqItem[];
  mapCta: string;
  relatedTitle: string;
  relatedGuides: RelatedGuide[];
};

export default function GuidePage({
  backHome,
  title,
  description,
  lastUpdated,
  highlightsTitle,
  highlights,
  sections,
  faqTitle,
  faqItems,
  mapCta,
  relatedTitle,
  relatedGuides,
}: GuidePageProps) {
  return (
    <div className="section pt-24">
      <Link href="/" className="inline-flex items-center gap-2 mb-8 text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--accent)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        {backHome}
      </Link>

      <h1 className="font-serif text-3xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h1>
      <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
        {lastUpdated}
      </p>
      <p className="leading-relaxed max-w-4xl mb-10" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border mb-10" style={{ borderColor: 'var(--border-color)' }}>
        <h2 className="font-serif text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {highlightsTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span style={{ color: 'var(--accent)' }} className="mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <section key={index}>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex} className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {section.items && section.items.length > 0 ? (
              <ul className="space-y-3 mt-5">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent)' }} className="mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border" style={{ borderColor: 'var(--border-color)' }}>
        <a
          href="https://maps.app.goo.gl/aqnvo1aDhdaWHtMQA"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          {mapCta}
        </a>
      </div>

      <section className="mt-12">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
          {faqTitle}
        </h2>
        <div className="grid gap-4">
          {faqItems.map((item, index) => (
            <details key={index} className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm border" style={{ borderColor: 'var(--border-color)' }}>
              <summary className="cursor-pointer list-none font-semibold" style={{ color: 'var(--text-primary)' }}>
                {item.q}
              </summary>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
          {relatedTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {relatedGuides.map((guide) => (
            <div key={guide.href} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border" style={{ borderColor: 'var(--border-color)' }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {guide.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                {guide.description}
              </p>
              <Link href={guide.href} className="btn-primary">
                {guide.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
