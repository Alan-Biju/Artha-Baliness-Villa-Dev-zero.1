'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leaf, Star, Heart } from 'lucide-react';
import styles from './AboutSection.module.scss';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const storyBlocks = [
  {
    label: 'Our Story',
    title: 'A Sanctuary Rooted in Nature',
    body: "Artha Baliness Villa was born from a simple belief: that the finest luxury is found not in grandeur, but in deep, unhurried connection with nature. Nestled in nature's lap, our estate was designed to be a place where every element — from the rustling canopy overhead to the mist rising from the valleys — becomes part of your experience.",
    image: '/assets/wallpaper2.jpg',
    imageAlt: 'The resort nestled in lush greenery',
    icon: <Leaf size={20} />,
    reverse: false,
  },
  {
    label: 'Our Vision',
    title: 'Crafting Timeless Escapes',
    body: "We believe a great retreat does more than offer comfort — it transforms. Every cottage, every path, every meal at Artha has been curated to help you rediscover stillness, rekindle warmth with loved ones, and return to the world renewed. Our vision is to be the most beloved nature resort in the region, known for genuine hospitality and soulful experiences.",
    image: '/assets/wallpaper.jpg',
    imageAlt: 'Guests enjoying the resort grounds at sunset',
    icon: <Star size={20} />,
    reverse: true,
  },
  {
    label: 'Our Promise',
    title: 'Luxury Without Compromise',
    body: "From the moment you arrive, every detail reflects our commitment to excellence. Plush bedding meets panoramic views. Fine dining meets local flavours. Curated adventures meet peaceful mornings. At Artha Baliness Villa, luxury and nature are not opposites — they are complements, perfectly woven into every moment of your stay.",
    image: '/assets/wallpaper2.jpg',
    imageAlt: 'Luxury cottage interior with nature views',
    icon: <Heart size={20} />,
    reverse: false,
  },
];

function StoryBlock({ block, index }) {
  return (
    <motion.div
      className={`${styles.block} ${block.reverse ? styles.reverse : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Image */}
      <motion.div
        className={styles.imageWrapper}
        variants={{
          hidden: { opacity: 0, x: block.reverse ? 40 : -40 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } },
        }}
      >
        <div className={styles.imageFrame}>
          <Image
            src={block.image}
            alt={block.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className={styles.imageOverlay} />
        </div>
        {/* Accent card */}
        <div className={styles.accentCard}>
          <div className={styles.accentIcon}>{block.icon}</div>
          <span className={styles.accentLabel}>{block.label}</span>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        className={styles.text}
        variants={{
          hidden: { opacity: 0, x: block.reverse ? -40 : 40 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut', delay: 0.15 } },
        }}
      >
        <p className="section-label">{block.label}</p>
        <h2 className={styles.blockTitle}>{block.title}</h2>
        <div className="gold-divider" />
        <p className={styles.body}>{block.body}</p>
      </motion.div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      {/* Section Header */}
      <motion.div
        className={styles.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
      >
        <p className="section-label">About the Resort</p>
        <h2 className="section-title">The Artha Baliness Experience</h2>
        <div className="gold-divider" style={{ margin: '1rem auto' }} />
        <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
          Where every stay becomes a story worth telling, and every moment is crafted with intention.
        </p>
      </motion.div>

      {/* Story Blocks */}
      <div className={styles.blocks}>
        {storyBlocks.map((block, i) => (
          <StoryBlock key={block.label} block={block} index={i} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className={styles.cta}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
      >
        <Link href="/about" className="btn-primary">
          Learn More About Us
        </Link>
      </motion.div>
    </section>
  );
}
