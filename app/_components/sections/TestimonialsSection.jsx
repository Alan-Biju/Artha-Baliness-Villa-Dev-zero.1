'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import styles from './TestimonialsSection.module.scss';

const testimonials = [
  {
    id: 1,
    name: 'Priya & Rahul Sharma',
    origin: 'Mumbai, India',
    rating: 5,
    text: "Our anniversary stay at Artha was beyond words. The cottage was immaculate, the views breathtaking, and the staff remembered every small detail we mentioned. We have already planned our return trip. Truly a world-class experience.",
    stay: 'Presidential Suite · 5 Nights',
  },
  {
    id: 2,
    name: 'David & Sarah Mitchell',
    origin: 'London, UK',
    rating: 5,
    text: "We have stayed at luxury resorts across the world, and Artha Baliness Villa stands out for the sheer authenticity of its hospitality. The guided nature walk was a highlight — our naturalist guide was extraordinary.",
    stay: 'Luxury Cottage · 3 Nights',
  },
  {
    id: 3,
    name: 'The Krishnamurthy Family',
    origin: 'Bengaluru, India',
    rating: 5,
    text: "Perfect for families. The kids absolutely loved the campfire evening and the nature trail. The staff were warm, attentive and genuinely cared about making every moment special. We will be back every year.",
    stay: 'Family Villa · 4 Nights',
  },
  {
    id: 4,
    name: 'Amélie Fontaine',
    origin: 'Paris, France',
    rating: 5,
    text: "A magical place that captures the essence of luxury and nature in perfect harmony. The sunrise yoga, the spa treatments, and the outdoor dining under the stars — each experience was thoughtfully curated.",
    stay: 'Luxury Cottage · 7 Nights',
  },
];

function StarRating({ rating }) {
  return (
    <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? 'currentColor' : 'none'}
          strokeWidth={1.5}
          style={{ color: 'var(--color-gold-400)' }}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  const t = testimonials[active];

  return (
    <section id="testimonials" className={styles.section}>
      {/* Background */}
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">Guest Stories</p>
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="gold-divider" style={{ margin: '1rem auto' }} />
        </motion.div>

        {/* Testimonial Card */}
        <div className={styles.carouselWrapper}>
          <button onClick={prev} className={styles.navBtn} aria-label="Previous testimonial">
            <ChevronLeft size={20} />
          </button>

          <div className={styles.cardWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                className={styles.card}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <Quote size={40} strokeWidth={1} className={styles.quoteIcon} />
                <StarRating rating={t.rating} />
                <blockquote className={styles.quote}>
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className={styles.attribution}>
                  <div className={styles.avatar} aria-hidden="true">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className={styles.guestName}>{t.name}</p>
                    <p className={styles.guestMeta}>{t.origin} · {t.stay}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={next} className={styles.navBtn} aria-label="Next testimonial">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots} role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.activeDot : ''}`}
              onClick={() => setActive(i)}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
