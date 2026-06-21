'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wifi, Coffee, Bath, Users, TreePine, Eye, Utensils, Car, Dumbbell, Wind, ArrowRight } from 'lucide-react';
import styles from './AccommodationsSection.module.scss';

const AMENITY_ICONS = {
  'wifi': <Wifi size={14} />, 'free wifi': <Wifi size={14} />,
  'breakfast': <Coffee size={14} />, 'coffee': <Coffee size={14} />, 'kitchenette': <Coffee size={14} />,
  'private bath': <Bath size={14} />, 'bath': <Bath size={14} />, 'rain shower': <Bath size={14} />,
  'forest view': <Eye size={14} />, 'view': <Eye size={14} />,
  'family friendly': <Users size={14} />, 'family rooms': <Users size={14} />, 'occupancy': <Users size={14} />,
  'private garden': <TreePine size={14} />, 'courtyard': <TreePine size={14} />, 'garden': <TreePine size={14} />,
  'dining': <Utensils size={14} />, 'restaurant': <Utensils size={14} />,
  'parking': <Car size={14} />,
  'gym': <Dumbbell size={14} />,
  'ac': <Wind size={14} />, 'air conditioning': <Wind size={14} />,
};

function getAmenityIcon(label) {
  const key = label.toLowerCase();
  for (const [k, icon] of Object.entries(AMENITY_ICONS)) {
    if (key.includes(k)) return icon;
  }
  return <Wifi size={14} />;
}

const FALLBACK_ROOMS = [
  {
    id: 'presidential-suite',
    title: 'Presidential Suite',
    tag: 'Most Popular',
    description: 'Treat yourself and your loved one to our contemporarily designed Presidential Suite. Distinguished furniture, a private balcony, and panoramic forest views create an unrivalled space for connection.',
    image: '/assets/wallpaper2.jpg',
    amenities: ['Free WiFi', 'Breakfast', 'Private Bath', 'Forest View'],
    occupancy: '2 Adults',
    size: '1,200 sq ft',
  },
  {
    id: 'luxury-cottage',
    title: 'Luxury Cottage',
    tag: 'Nature Retreat',
    description: "Wake after a restful night on exquisite bedding to a private balcony with stunning views, a warm cup of coffee in hand. Our cottages are designed to make you feel perfectly at home.",
    image: '/assets/wallpaper.jpg',
    amenities: ['Free WiFi', 'Private Garden', 'Rain Shower', 'Family Friendly'],
    occupancy: '2–4 Adults',
    size: '950 sq ft',
  },
  {
    id: 'family-villa',
    title: 'Family Villa',
    tag: 'Spacious',
    description: 'Designed with families in mind, our villas offer two spacious bedrooms, a living area, and a private courtyard surrounded by lush greenery — the perfect setting for memorable family getaways.',
    image: '/assets/wallpaper2.jpg',
    amenities: ['Free WiFi', 'Kitchenette', 'Family Rooms', 'Courtyard'],
    occupancy: '4–6 Adults',
    size: '1,600 sq ft',
  },
];

function RoomCard({ room, index }) {
  const [hovered, setHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(room.image);

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className={styles.imageWrapper}>
        <Image
          src={imgSrc}
          alt={`${room.title} at Artha Baliness Villa`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
            transition: 'transform 0.7s ease',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
          }}
          loading="lazy"
          onError={() => setImgSrc('/assets/wallpaper.jpg')}
        />
        <div className={styles.imageOverlay} />

        {/* Tag */}
        {room.tag && (
          <span className={styles.tag}>{room.tag}</span>
        )}

        {/* Occupancy badge */}
        <div className={styles.occupancyBadge}>
          <Users size={12} />
          <span>{room.occupancy}</span>
        </div>
      </div>

      {/* Content */}
      <div className={styles.cardBody}>
        <h3 className={styles.roomTitle}>{room.title}</h3>
        <p className={styles.size}>{room.size}</p>
        <p className={styles.description}>{room.description}</p>

        {/* Amenities */}
        <ul className={styles.amenities}>
          {room.amenities.map((a) => (
            <li key={a} className={styles.amenityItem}>
              <span className={styles.amenityIcon}>{getAmenityIcon(a)}</span>
              {a}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/contact" className={styles.viewBtn}>
          View Details
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  );
}

export default function AccommodationsSection({ rooms: dynamicRooms = [] }) {
  const rooms = dynamicRooms.length > 0 ? dynamicRooms : FALLBACK_ROOMS;
  return (
    <section id="accommodations" className={styles.section}>
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-label">Accommodation</p>
        <h2 className="section-title">Your Private Sanctuary</h2>
        <div className="gold-divider" style={{ margin: '1rem auto' }} />
        <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
          Each room and cottage is thoughtfully designed to blend modern luxury with the raw beauty of nature.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {rooms.map((room, i) => (
          <RoomCard key={room.id} room={room} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className={styles.bottomCta}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <p className={styles.ctaNote}>
          All room rates are available upon enquiry. Contact us for special packages and seasonal offers.
        </p>
        <Link href="/contact" className="btn-primary">
          Enquire About Availability
        </Link>
      </motion.div>
    </section>
  );
}
