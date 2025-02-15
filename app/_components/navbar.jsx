import { motion } from 'framer-motion';
import styles from './styles/_navbar.module.scss';
import Link from 'next/link';

export default function Navbar({isSidebarOpen, setSidebarOpen}) {
    const handleCloseSidebar = () => {
        setSidebarOpen(()=>false); // This will close the sidebar
      };
  return (
    <>
      <motion.div
        className={styles.sidebar_container}
        initial={{ x: '-100%' }}
        animate={{ x: isSidebarOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        onClick={handleCloseSidebar}
      >
        <Link href="/">home</Link>
        |||
        <Link href="/contact">contact</Link>
        |||
        <Link href="/about">ABOUT</Link>
      </motion.div>
    </>
  );
}
