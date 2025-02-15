"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./styles/_carousel.module.scss"; // Add styling

const images = [
  "/assets/wallpaper.jpg",
  "/assets/wallpaper1.jpg",
  "/assets/wallpaper.jpg",
  "/assets/wallpaper1.jpg",
];

export default function Carousel() {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Calculate width dynamically based on container
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <div className={styles.carousel}>
      <motion.div
        ref={carouselRef}
        className={styles.carousel_inner}
        whileTap={{ cursor: "grabbing" }} // Changes cursor when dragging
      >
        <motion.div
          className={styles.carousel_track}
          drag="x"
          dragConstraints={{ right: 0, left: -width }} // Limits drag
          animate={{ x: [0, -width, 0] }} // Looping effect
          transition={{ duration: 12, ease: "linear", repeat: Infinity }} // Infinite looping
        >
          {images.map((src, index) => (
            <motion.div className={styles.carousel_item} key={index}>
              <Image src={src} width={600} height={400} alt={`Slide ${index}`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
