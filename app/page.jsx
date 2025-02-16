"use client";
import styles from './Home.module.scss';
import Image from 'next/image';
import { motion } from "framer-motion";
import Carousel from './_components/Carousel';
import RotatingCards from "./_components/RotatingCards";
import Cards from "./_components/Cards"

export default function Home() {
  const text = "Step into Paradise! Your Bali awaits!";

  return (
    <>
    <div className={styles.home_text}>
      <div className={styles.home_wallpaper}>
        <div className={styles.main_logo}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/assets/mainLogo.svg"
              width={700}
              height={700}
              alt="Main Logo"
            />
          </motion.div>
        </div>
        <div className={styles.scroll_btn}>
          <p>SCROLL DOWN</p>
          <motion.div  
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <Image
              src="/assets/arrowDown.svg"
              width={20}
              height={20}
              alt="arrowDown"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className={styles.typing_container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}  // Triggers animation multiple times when entering the viewport
      >
        <div>
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={typingVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className="yellowtail-text"
              id={styles.text_tag}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.2  }}
        className={styles.description}
      >
        Designed for your utmost comfort, a stay in one of our luxury cottages is guaranteed 
        to bring you closer to Mother Nature’s soul than you have ever been.
      </motion.p>

      <div className={styles.video_container}>
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.9, bounce: 0.3 },
          }}
        >
          <video 
            className={styles.videoContent} 
            autoPlay={true} 
            loop={true} 
            playsInline={true}
            muted={true} // Required for autoplay in most browsers
          >
            <source 
              src="https://d33m3g343o7hgb.cloudfront.net/ayatana-coorg/Video/home-banner.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </div>
    <Carousel/>
    {/* <RotatingCards/> */}
    <Cards/>
    </>
  );
}

const typingVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1, // Stagger letters
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};