"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from '../styles/_cards.module.scss'

const images = [
  "/assets/wallpaper.jpg",
  "/assets/wallpaper2.jpg",
  "/assets/wallpaper.jpg",
  "/assets/wallpaper2.jpg",
];

export default function StandardCottages() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-brown-800">Standard Cottages</h2>
        <p className="mt-4 text-gray-700">
          Imagine waking up after a restful night of sleep on exquisite, soft
          bedding, to a private balcony with a stunning view while sipping on a
          warm cup of coffee. With a range of amenities, our cottages are
          designed to make you feel at home while you’re on vacation.
        </p>
      </div>
      <div className="relative md:w-1/2 overflow-hidden rounded-2xl shadow-lg bg-white p-4">
        <div className="relative">
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          <div className={`${styles.image_size} w-full h-64 md:h-96 relative`}>
            <Image
              src={images[current]}
              alt="Cottage view"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
