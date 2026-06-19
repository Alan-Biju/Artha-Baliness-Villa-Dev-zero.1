'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, ChevronDown } from 'lucide-react';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax: background drifts upward at 40% of scroll speed
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  // Content fades and rises on scroll
  const contentY = useTransform(scrollYProgress, [0, 0.6], ['0%', '18%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  return (
    <section
      ref={containerRef}
      className={styles.hero}
      aria-label="Hero — Welcome to Artha Baliness Villa"
    >
      {/* Parallax Background Image */}
      <motion.div className={styles.bgWrapper} style={{ y: bgY }}>
        <Image
          src="/assets/wallpaper2.jpg"
          alt="Artha Baliness Villa — aerial view of the resort"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div className={styles.overlay} />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className={styles.content}
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className={styles.logoWrapper}
        >
          <Image
            src="/assets/mainLogo.svg"
            width={260}
            height={100}
            alt="Artha Baliness Villa"
            priority
            style={{ objectFit: 'contain' }}
          />
        </motion.div>

        {/* Label */}
        <motion.p
          className={styles.label}
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.2em' }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
        >
          Luxury Nature Resort
        </motion.p>

        {/* Headline */}
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.7 }}
        >
          Where Luxury
          <br />
          <em>Meets Serenity</em>
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          className={styles.divider}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
        />

        {/* Description */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.1 }}
        >
          Designed for your utmost comfort, a stay in one of our luxury cottages
          is guaranteed to bring you closer to Mother Nature&apos;s soul than you have ever been.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.3 }}
        >
          <Link href="/#accommodations" className={styles.btnPrimary}>
            Explore Resort
          </Link>
          <a
            href="https://wa.me/919999999999?text=Hello%2C%20I%20am%20interested%20in%20staying%20at%20Artha%20Baliness%20Villa"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnWhatsApp}
          >
            <MessageCircle size={16} strokeWidth={2} />
            WhatsApp Us
          </a>
          <Link href="/contact" className={styles.btnOutline}>
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} strokeWidth={1.5} />
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}
