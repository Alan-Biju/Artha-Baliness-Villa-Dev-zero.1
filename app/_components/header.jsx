'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import styles from './styles/_header.module.scss';

const Header = ({ isSidebarOpen, setSidebarOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpenSidebar = () => setSidebarOpen(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo} aria-label="Artha Baliness Villa — Home">
        <Image
          src="/assets/logo.png"
          width={120}
          height={60}
          alt="Artha Baliness Villa logo"
          priority
        />
      </Link>

      <nav className={styles.desktopNav} aria-label="Primary navigation">
        {[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Cottages', path: '/#accommodations' },
          { label: 'Experiences', path: '/#experiences' },
          { label: 'Gallery', path: '/#gallery' },
          { label: 'Contact', path: '/contact' },
        ].map((item) => (
          <Link key={item.label} href={item.path} className={styles.navLink}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className={styles.headerRight}>
        <Link href="/contact" className={styles.ctaBtn}>
          Enquire Now
        </Link>
        <button
          onClick={handleOpenSidebar}
          className={styles.menuIcon}
          aria-label="Open navigation menu"
          aria-expanded={isSidebarOpen}
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
};

export default Header;
