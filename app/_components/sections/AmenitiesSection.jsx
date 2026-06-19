'use client';
import { motion } from 'framer-motion';
import {
  Waves, UtensilsCrossed, Flame, ParkingCircle, Wifi,
  Trees, Baby, Compass, Sparkles, Armchair,
  Sun, Music,
} from 'lucide-react';
import styles from './AmenitiesSection.module.scss';

const amenities = [
  { icon: <Waves size={28} strokeWidth={1.3} />,        label: 'Swimming Pool',       desc: 'Infinity pool overlooking the forest canopy' },
  { icon: <UtensilsCrossed size={28} strokeWidth={1.3} />, label: 'Restaurant & Bar', desc: 'Local & international cuisine, daily specials' },
  { icon: <Flame size={28} strokeWidth={1.3} />,          label: 'Campfire Evenings',  desc: 'Curated bonfire experiences under the stars' },
  { icon: <Wifi size={28} strokeWidth={1.3} />,           label: 'High-Speed WiFi',    desc: 'Complimentary resort-wide connectivity' },
  { icon: <Trees size={28} strokeWidth={1.3} />,          label: 'Nature Gardens',     desc: '20 acres of landscaped organic gardens' },
  { icon: <Baby size={28} strokeWidth={1.3} />,           label: 'Kids Zone',          desc: 'Safe & supervised play area for children' },
  { icon: <Compass size={28} strokeWidth={1.3} />,        label: 'Adventure Centre',   desc: 'Trekking, cycling & outdoor activities' },
  { icon: <Sparkles size={28} strokeWidth={1.3} />,       label: 'Spa & Wellness',     desc: 'Holistic treatments & rejuvenating therapies' },
  { icon: <Armchair size={28} strokeWidth={1.3} />,       label: 'Outdoor Lounging',   desc: 'Curated seating areas throughout the estate' },
  { icon: <ParkingCircle size={28} strokeWidth={1.3} />,  label: 'Secure Parking',     desc: 'Complimentary valet & self-parking' },
  { icon: <Sun size={28} strokeWidth={1.3} />,            label: 'Sunrise Yoga',       desc: 'Morning wellness sessions with expert guides' },
  { icon: <Music size={28} strokeWidth={1.3} />,          label: 'Live Events',        desc: 'Curated cultural & musical evenings' },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className={styles.section}>
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-label">Resort Amenities</p>
        <h2 className="section-title">Everything You Could Desire</h2>
        <div className="gold-divider" style={{ margin: '1rem auto' }} />
        <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
          Every amenity has been curated to elevate your stay from comfortable to extraordinary.
        </p>
      </motion.div>

      {/* Amenities Grid */}
      <div className={styles.grid}>
        {amenities.map((amenity, i) => (
          <motion.div
            key={amenity.label}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.07, ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className={styles.iconWrapper}>
              {amenity.icon}
            </div>
            <h3 className={styles.cardLabel}>{amenity.label}</h3>
            <p className={styles.cardDesc}>{amenity.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
