import { motion } from "framer-motion";
import styles from "./styles/_navbar.module.scss";
import Link from "next/link";

export default function Navbar({ isSidebarOpen, setSidebarOpen }) {
  const handleCloseSidebar = () => setSidebarOpen(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Ayatana", path: "/about" },
    { name: "Our Cottages", path: "/about" },
    { name: "Our Experiences", path: "/about" },
    { name: "Our Adventure", path: "/about" },
    { name: "Contact us", path: "/about" },
  ];
  return (
    <motion.div
      className={styles.sidebar_container}
      initial={{ x: "-100%" }}
      animate={{ x: isSidebarOpen ? "0%" : "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <button onClick={handleCloseSidebar} className={styles.closeButton}>
        X
      </button>
      <div className={styles.linkHolder}>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={styles.underline}
            onClick={handleCloseSidebar}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
