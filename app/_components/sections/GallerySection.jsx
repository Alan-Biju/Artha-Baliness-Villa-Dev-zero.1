'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import styles from './GallerySection.module.scss';

const categories = ['All', 'Rooms', 'Resort', 'Nature', 'Activities', 'Dining'];

const FALLBACK_ITEMS = [
  { id: '1', src: '/assets/wallpaper2.jpg', alt: 'Luxury cottage exterior', cat: 'Rooms',      span: 'large' },
  { id: '2', src: '/assets/wallpaper.jpg',  alt: 'Resort pool at sunset',   cat: 'Resort',     span: 'normal' },
  { id: '3', src: '/assets/wallpaper2.jpg', alt: 'Forest trail',            cat: 'Nature',     span: 'normal' },
  { id: '4', src: '/assets/wallpaper.jpg',  alt: 'Trekking activity',       cat: 'Activities', span: 'normal' },
  { id: '5', src: '/assets/wallpaper2.jpg', alt: 'Outdoor dining',          cat: 'Dining',     span: 'large' },
  { id: '6', src: '/assets/wallpaper.jpg',  alt: 'Suite interior',          cat: 'Rooms',      span: 'normal' },
  { id: '7', src: '/assets/wallpaper2.jpg', alt: 'Garden pathway',          cat: 'Nature',     span: 'normal' },
  { id: '8', src: '/assets/wallpaper.jpg',  alt: 'Resort aerial view',      cat: 'Resort',     span: 'normal' },
  { id: '9', src: '/assets/wallpaper2.jpg', alt: 'Campfire evening',        cat: 'Activities', span: 'normal' },
];

export default function GallerySection({ items = [] }) {
  const galleryItems = items.length > 0 ? items : FALLBACK_ITEMS;
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((img) => img.cat === activeFilter);

  return (
    <section id="gallery" className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-label">Photo Gallery</p>
        <h2 className="section-title">A Glimpse of Paradise</h2>
        <div className="gold-divider" style={{ margin: '1rem auto' }} />
      </motion.div>

      {/* Filters */}
      <div className={styles.filters} role="group" aria-label="Gallery category filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ''}`}
            aria-pressed={activeFilter === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div className={styles.grid} layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((img, i) => (
            <motion.div
              key={img.id || img.alt}
              className={`${styles.item} ${img.span === 'large' ? styles.large : ''}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              layout
              onClick={() => setLightbox(img)}
              role="button"
              tabIndex={0}
              aria-label={`View fullscreen: ${img.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                loading="lazy"
                className={styles.img}
              />
              <div className={styles.itemOverlay}>
                <ZoomIn size={22} strokeWidth={1.5} />
                <span className={styles.itemLabel}>{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Fullscreen view: ${lightbox.alt}`}
          >
            <button
              className={styles.lightboxClose}
              onClick={() => setLightbox(null)}
              aria-label="Close fullscreen view"
            >
              <X size={24} />
            </button>
            <motion.div
              className={styles.lightboxImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                style={{ objectFit: 'contain' }}
                sizes="100vw"
              />
            </motion.div>
            <p className={styles.lightboxCaption}>{lightbox.alt}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
