'use client';
import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PHOTOS = [
  '/gallery/images (1).jpg',
  '/gallery/images (2).jpg',
  '/gallery/images (3).jpg',
  '/gallery/images (4).jpg',
  '/gallery/images (5).jpg',
  '/gallery/images (6).jpg',
  '/gallery/images (7).jpg',
  '/gallery/images (8).jpg',
  '/gallery/images (9).jpg',
  '/gallery/images (10).jpg',
  '/gallery/images (11).jpg',
  '/gallery/images (12).jpg',
  '/gallery/images (13).jpg',
];

export default function Gallery() {
  const t = useTranslations('gallery');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = t.raw('images') as Array<{ alt: string; caption: string }>;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogTitleId = useId();
  const lightboxOpen = lightboxIndex !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!lightboxOpen || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (!dialog.open) dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus({ preventScroll: true });
    };
  }, [lightboxOpen]);

  const closeLightbox = () => setLightboxIndex(null);
  const changeImage = (direction: number) => setLightboxIndex(index =>
    index === null ? null : (index + direction + PHOTOS.length) % PHOTOS.length
  );

  return (
    <section id="gallery" className="section">
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
        {t('title')}
      </h2>
      <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={12}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="gallery-swiper"
        >
          {PHOTOS.map((src, i) => (
            <SwiperSlide key={i}>
              <button
                type="button"
                className="gallery-item gallery-trigger cursor-pointer"
                aria-label={t('openImage', { number: i + 1, description: images[i]?.alt ?? 'Playa de San Lorenzo' })}
                aria-haspopup="dialog"
                onClick={event => {
                  if (event.defaultPrevented) return;
                  triggerRef.current = event.currentTarget;
                  setLightboxIndex(i);
                }}
              >
                <img
                  src={src}
                  alt={images[i]?.alt ?? images[images.length - 1]?.alt ?? 'Playa de San Lorenzo'}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-full object-cover select-none"
                />
                <span className="caption">
                  {images[i]?.caption ?? images[images.length - 1]?.caption ?? 'Playa de San Lorenzo'}
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p className="mt-6 text-sm text-center" style={{ color: 'var(--text-muted)' }}>
        {t('source')}{' '}
        <a
          href="https://maps.app.goo.gl/aqnvo1aDhdaWHtMQA"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent)' }}
          className="hover:underline"
        >
          {t('viewAll')}
        </a>
      </p>

      <dialog
        ref={dialogRef}
        className="gallery-dialog"
        aria-labelledby={dialogTitleId}
        onClose={event => {
          if (!event.currentTarget.open) closeLightbox();
        }}
        onClick={event => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right ||
              event.clientY < bounds.top || event.clientY > bounds.bottom) closeLightbox();
        }}
      >
        {lightboxIndex !== null && <>
          <div className="gallery-dialog-header">
            <h2 id={dialogTitleId}>{t('lightboxTitle')}</h2>
            <button type="button" className="gallery-dialog-control" onClick={closeLightbox} autoFocus>
              {t('close')}
            </button>
          </div>
          <figure className="gallery-dialog-figure">
            <img
              src={PHOTOS[lightboxIndex]}
              alt={images[lightboxIndex]?.alt ?? 'Playa de San Lorenzo'}
              draggable={false}
            />
            <figcaption>{images[lightboxIndex]?.caption}</figcaption>
          </figure>
          <div className="gallery-dialog-navigation">
            <button type="button" className="gallery-dialog-control" onClick={() => changeImage(-1)}>
              ← {t('previous')}
            </button>
            <p className="gallery-dialog-count" aria-live="polite" aria-atomic="true">
              {t('imageCount', { current: lightboxIndex + 1, total: PHOTOS.length })}
            </p>
            <button type="button" className="gallery-dialog-control" onClick={() => changeImage(1)}>
              {t('next')} →
            </button>
          </div>
        </>}
      </dialog>
    </section>
  );
}
