'use client';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './TrustSection.module.scss';

const stats = [
  { value: 12,   suffix: '+',  label: 'Years of Excellence',    desc: 'Creating unforgettable stays since 2013' },
  { value: 8500, suffix: '+',  label: 'Happy Guests',           desc: 'Guests who became lifelong admirers' },
  { value: 320,  suffix: '+',  label: 'Events Hosted',          desc: 'Weddings, retreats & celebrations' },
  { value: 98,   suffix: '%',  label: 'Guest Satisfaction',     desc: 'Based on verified post-stay reviews' },
];

function useCounter(target, isActive, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isActive, target, duration]);

  return count;
}

function StatCard({ stat, isActive }) {
  const count = useCounter(stat.value, isActive);

  return (
    <div className={styles.statCard}>
      <div className={styles.statValue}>
        {count.toLocaleString()}
        <span className={styles.suffix}>{stat.suffix}</span>
      </div>
      <div className={styles.statLabel}>{stat.label}</div>
      <p className={styles.statDesc}>{stat.desc}</p>
    </div>
  );
}

export default function TrustSection() {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={ref} aria-label="Trust statistics">
      {/* Background texture */}
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label" style={{ color: 'var(--color-gold-300)' }}>
            By The Numbers
          </p>
          <h2 className={styles.title}>A Legacy of Exceptional Hospitality</h2>
          <div className="gold-divider" style={{ margin: '1rem auto' }} />
        </motion.div>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isActive={isActive} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
