'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Briefcase, Users, Cake, ArrowRight } from 'lucide-react';
import styles from './EventsSection.module.scss';

const events = [
  {
    icon: <Heart size={28} strokeWidth={1.3} />,
    title: 'Weddings & Ceremonies',
    description: 'Say your vows surrounded by nature. Our dedicated event team crafts bespoke ceremonies, from intimate garden weddings to grand celebrations.',
    features: ['Capacity: up to 300 guests', 'Decor & floral services', 'Catering & bar packages', 'Honeymoon suite included'],
    image: '/assets/wallpaper2.jpg',
  },
  {
    icon: <Briefcase size={28} strokeWidth={1.3} />,
    title: 'Corporate Retreats',
    description: 'Reconnect your team in nature. Our resort provides the perfect backdrop for strategy offsites, team-building workshops, and executive retreats.',
    features: ['Conference facilities', 'AV equipment', 'Team-building activities', 'Customised menus'],
    image: '/assets/wallpaper.jpg',
  },
  {
    icon: <Users size={28} strokeWidth={1.3} />,
    title: 'Family Gatherings',
    description: 'Create lasting memories with the people who matter most. Our family event packages ensure every age group has a wonderful time.',
    features: ['Multi-villa bookings', 'Kids activities', 'Family dining menus', 'Pool & garden access'],
    image: '/assets/wallpaper2.jpg',
  },
  {
    icon: <Cake size={28} strokeWidth={1.3} />,
    title: 'Milestone Celebrations',
    description: 'Birthdays, anniversaries, and life milestones deserve a setting as extraordinary as the occasion. We create tailored celebrations, perfectly.',
    features: ['Custom décor & themes', 'Personalised cakes', 'Photography services', 'Private dining options'],
    image: '/assets/wallpaper.jpg',
  },
];

function EventCard({ event, index }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={event.image}
          alt={`${event.title} at Artha Baliness Villa`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: 'cover' }}
          loading="lazy"
        />
        <div className={styles.overlay} />
        <div className={styles.iconBadge}>{event.icon}</div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{event.title}</h3>
        <p className={styles.desc}>{event.description}</p>
        <ul className={styles.features}>
          {event.features.map((f) => (
            <li key={f} className={styles.feature}>
              <span className={styles.bullet} />
              {f}
            </li>
          ))}
        </ul>
        <Link href="/contact" className={styles.enquireLink}>
          Get a Quote <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  );
}

export default function EventsSection() {
  return (
    <section id="events" className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-label">Events & Celebrations</p>
        <h2 className="section-title">Mark Every Milestone in Style</h2>
        <div className="gold-divider" style={{ margin: '1rem auto' }} />
        <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
          From intimate gatherings to grand celebrations, our team brings your vision to life with flawless precision.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {events.map((ev, i) => (
          <EventCard key={ev.title} event={ev} index={i} />
        ))}
      </div>

      {/* CTA Banner */}
      <motion.div
        className={styles.ctaBanner}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.bannerText}>
          <h3 className={styles.bannerTitle}>Planning a Special Event?</h3>
          <p className={styles.bannerSubtitle}>
            Our dedicated events team is ready to make your vision a reality. Reach out for a personalised proposal.
          </p>
        </div>
        <Link href="/contact" className="btn-gold">
          Start Planning
        </Link>
      </motion.div>
    </section>
  );
}
