'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './ExperiencesSection.module.scss';

const FALLBACK_EXPERIENCES = [
  { id: 'nature-walks', title: 'Nature Walks', label: 'Guided', description: 'Discover the hidden flora, fauna and secrets of the estate on guided morning nature trails led by expert naturalists.', highlights: ['2–4 km forest trail', 'Expert naturalist guide', 'Bird identification sessions'], image: '/assets/wallpaper.jpg' },
  { id: 'trekking', title: 'Trekking', label: 'Adventure', description: 'Conquer scenic mountain trails with our curated trekking experiences, suitable for beginners and seasoned trekkers alike.', highlights: ['Multiple difficulty levels', 'Safety equipment provided', 'Waterfall & viewpoint stops'], image: '/assets/wallpaper2.jpg' },
  { id: 'cycling', title: 'Cycling Tours', label: 'Active', description: 'Pedal through winding plantation roads, breathe in the crisp mountain air, and discover hidden village gems.', highlights: ['Resort & estate bicycles', 'Village heritage routes', 'Sunrise & sunset tours'], image: '/assets/wallpaper.jpg' },
  { id: 'campfire-nights', title: 'Campfire Nights', label: 'Signature', description: 'As the stars emerge, gather around a crackling campfire, share stories, enjoy local music and roasted specialties.', highlights: ['Live folk music', "Artisan s'mores & snacks", 'Storytelling sessions'], image: '/assets/wallpaper2.jpg' },
  { id: 'wellness', title: 'Wellness Sessions', label: 'Rejuvenating', description: 'From sunrise yoga to forest bathing and traditional Ayurvedic treatments, our wellness programme restores body and mind.', highlights: ['Expert yoga instructors', 'Ayurvedic spa treatments', 'Meditation & breathwork'], image: '/assets/wallpaper.jpg' },
  { id: 'sightseeing', title: 'Local Sightseeing', label: 'Cultural', description: 'Explore nearby temples, waterfalls, spice gardens and bustling local markets on expertly guided cultural excursions.', highlights: ['Curated day tours', 'Resort vehicle available', 'Local expert guides'], image: '/assets/wallpaper2.jpg' },
];

function ExperienceCard({ exp, index }) {
  const [imgSrc, setImgSrc] = useState(exp.image);

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={imgSrc}
          alt={`${exp.title} experience at Artha Baliness Villa`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
          loading="lazy"
          className={styles.img}
          onError={() => setImgSrc('/assets/wallpaper.jpg')}
        />
        <div className={styles.overlay} />
        <span className={styles.label}>{exp.label}</span>

        <div className={styles.hoverContent}>
          <ul className={styles.highlights}>
            {exp.highlights.map((h) => (
              <li key={h} className={styles.highlightItem}>
                <span className={styles.bullet} />
                {h}
              </li>
            ))}
          </ul>
          <Link href="/contact" className={styles.enquireBtn}>
            Enquire <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.title}>{exp.title}</h3>
        <p className={styles.description}>{exp.description}</p>
      </div>
    </motion.article>
  );
}

export default function ExperiencesSection({ experiences: dynamicData = [] }) {
  const experiences = dynamicData.length > 0 ? dynamicData : FALLBACK_EXPERIENCES;
  return (
    <section id="experiences" className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-label">Curated Experiences</p>
        <h2 className="section-title">Adventures Worth Remembering</h2>
        <div className="gold-divider" style={{ margin: '1rem auto' }} />
        <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
          Every day at Artha brings a new opportunity to explore, discover, and be moved.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.id} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
