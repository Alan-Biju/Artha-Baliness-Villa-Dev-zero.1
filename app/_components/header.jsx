'use client'
import { useState, useEffect } from 'react';
import styles from './styles/_header.module.scss'
import Image from 'next/image';

const Header = ({ isSidebarOpen, setSidebarOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleCloseSidebar = () => {
    setSidebarOpen(()=>true); // This will close the sidebar
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = document.documentElement.scrollHeight * 0.3;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.menuIcon} onClick={handleCloseSidebar}>
        <Image 
          src="/assets/menu.svg"
          width={40}
          height={40}
          alt="Menu"
          className={styles.icon}
        />
      </div>
      <div className={styles.logo}>
        <Image
          src="/assets/logo.png"
          width={150}
          height={150}
          alt="Logo"
        />
      </div>
    </header>
  );
};

export default Header;