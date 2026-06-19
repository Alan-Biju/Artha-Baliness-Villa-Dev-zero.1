'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { X, Phone, MessageCircle } from 'lucide-react';
import styles from './styles/_navbar.module.scss';

const menuItems = [
  { name: 'Home',        path: '/',              num: '01' },
  { name: 'About',       path: '/about',         num: '02' },
  { name: 'Cottages',    path: '/#accommodations', num: '03' },
  { name: 'Experiences', path: '/#experiences',  num: '04' },
  { name: 'Gallery',     path: '/#gallery',      num: '05' },
  { name: 'Dining',      path: '/#dining',       num: '06' },
  { name: 'Events',      path: '/#events',       num: '07' },
  { name: 'Contact',     path: '/contact',       num: '08' },
];

const sidebarVariants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: { duration: 0.35, ease: [0.55, 0, 1, 0.45] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function Navbar({ isSidebarOpen, setSidebarOpen }) {
  const handleClose = () => setSidebarOpen(false);

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Sidebar */}
          <motion.nav
            className={styles.sidebar}
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className={styles.sidebarHeader}>
              <Image
                src="/assets/logo.png"
                width={100}
                height={50}
                alt="Artha Baliness Villa"
                style={{ objectFit: 'contain' }}
              />
              <button
                onClick={handleClose}
                className={styles.closeBtn}
                aria-label="Close navigation menu"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Divider */}
            <div className={styles.divider} />

            {/* Nav Links */}
            <ul className={styles.navList} role="list">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={item.path}
                    className={styles.navItem}
                    onClick={handleClose}
                  >
                    <span className={styles.navNum}>{item.num}</span>
                    <span className={styles.navLabel}>{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* CTA Area */}
            <div className={styles.sidebarFooter}>
              <div className={styles.divider} />
              <p className={styles.footerLabel}>Get in touch</p>
              <div className={styles.contactBtns}>
                <a
                  href="https://wa.me/919999999999?text=Hello%2C%20I%20am%20interested%20in%20booking%20at%20Artha%20Baliness%20Villa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                  aria-label="WhatsApp us"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href="tel:+919999999999"
                  className={styles.callBtn}
                  aria-label="Call us"
                >
                  <Phone size={16} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
