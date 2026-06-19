'use client';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Car } from 'lucide-react';
import styles from './LocationSection.module.scss';

const attractions = [
  { name: 'Nearest Airport',        distance: '45 km',  time: '1 hr drive',  icon: '✈' },
  { name: 'Nearest Railway Station', distance: '12 km', time: '20 min drive', icon: '🚂' },
  { name: 'Local Waterfalls',        distance: '3 km',  time: '8 min drive',  icon: '💧' },
  { name: 'Spice Plantation Tour',   distance: '5 km',  time: '12 min drive', icon: '🌿' },
  { name: 'Heritage Temple',         distance: '8 km',  time: '18 min drive', icon: '🏛' },
  { name: 'Town Market',             distance: '10 km', time: '22 min drive', icon: '🏪' },
];

export default function LocationSection() {
  return (
    <section id="location" className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-label">How To Find Us</p>
        <h2 className="section-title">Getting Here</h2>
        <div className="gold-divider" style={{ margin: '1rem auto' }} />
        <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
          Nestled in nature&apos;s lap, Artha Baliness Villa is easily reachable yet blissfully secluded.
        </p>
      </motion.div>

      <div className={styles.content}>
        {/* Map Embed */}
        <motion.div
          className={styles.mapWrapper}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.mapPlaceholder} aria-label="Map location of Artha Baliness Villa">
            <div className={styles.mapOverlay}>
              <MapPin size={40} strokeWidth={1.3} className={styles.mapPin} />
              <p className={styles.mapNote}>Interactive map</p>
              <p className={styles.mapAddress}>
                Artha Baliness Villa<br />
                Nature&apos;s Lap, Karnataka, India
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                <Navigation size={14} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </motion.div>

        {/* Attractions List */}
        <motion.div
          className={styles.attractions}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className={styles.addressCard}>
            <h3 className={styles.addressTitle}>Resort Address</h3>
            <p className={styles.addressText}>
              Artha Baliness Villa<br />
              Nature&apos;s Lap Road<br />
              Karnataka, India — 571236
            </p>
            <div className={styles.travelInfo}>
              <div className={styles.travelItem}>
                <Car size={16} strokeWidth={1.5} />
                <span>Complimentary airport pickup available on request</span>
              </div>
              <div className={styles.travelItem}>
                <Clock size={16} strokeWidth={1.5} />
                <span>Check-in: 2 PM · Check-out: 11 AM</span>
              </div>
            </div>
          </div>

          <h3 className={styles.nearbyTitle}>Nearby Attractions</h3>
          <ul className={styles.attractionList}>
            {attractions.map((a) => (
              <li key={a.name} className={styles.attractionItem}>
                <span className={styles.attractionEmoji} aria-hidden="true">{a.icon}</span>
                <div>
                  <p className={styles.attractionName}>{a.name}</p>
                  <p className={styles.attractionMeta}>{a.distance} · {a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
