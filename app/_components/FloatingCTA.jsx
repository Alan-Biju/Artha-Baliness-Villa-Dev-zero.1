'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, ChevronUp } from 'lucide-react';
import styles from './styles/_floatingCTA.module.scss';

export default function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.floatingGroup} role="complementary" aria-label="Quick contact actions">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            className={styles.scrollTopBtn}
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expandable contact group */}
      <div className={styles.contactGroup}>
        <AnimatePresence>
          {isExpanded && (
            <>
              {/* WhatsApp */}
              <motion.a
                key="whatsapp"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.25, delay: 0.05 }}
                href="https://wa.me/919999999999?text=Hello%2C%20I%20am%20interested%20in%20staying%20at%20Artha%20Baliness%20Villa"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle size={20} strokeWidth={2} />
                <span className={styles.btnLabel}>WhatsApp</span>
              </motion.a>

              {/* Call */}
              <motion.a
                key="call"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                href="tel:+919999999999"
                className={styles.callBtn}
                aria-label="Call us"
              >
                <Phone size={20} strokeWidth={2} />
                <span className={styles.btnLabel}>Call Now</span>
              </motion.a>
            </>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsExpanded((prev) => !prev)}
          className={`${styles.toggleBtn} ${isExpanded ? styles.expanded : ''}`}
          aria-label={isExpanded ? 'Close contact options' : 'Open contact options'}
          aria-expanded={isExpanded}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <MessageCircle size={22} strokeWidth={2} />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
