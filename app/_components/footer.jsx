import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import styles from './styles/_footer.module.scss';

const footerLinks = [
  { name: 'Home',        path: '/' },
  { name: 'About',       path: '/about' },
  { name: 'Cottages',    path: '/#accommodations' },
  { name: 'Experiences', path: '/#experiences' },
  { name: 'Gallery',     path: '/#gallery' },
  { name: 'Events',      path: '/#events' },
  { name: 'Contact',     path: '/contact' },
  { name: 'FAQ',         path: '/#faq' },
];

const contact = {
  phone: '+91 9999 999 999',
  email: 'reservations@arthabalivillaresort.com',
  whatsapp: 'https://wa.me/919999999999?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Artha%20Baliness%20Villa',
  address: ['Artha Baliness Villa', 'Nature\'s Lap, Karnataka', 'India — 571236'],
};

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.top}>
        {/* Brand Column */}
        <div className={styles.brand}>
          <Image
            src="/assets/logo.png"
            width={130}
            height={65}
            alt="Artha Baliness Villa"
            style={{ objectFit: 'contain' }}
          />
          <p className={styles.tagline}>
            Where luxury meets the serenity of nature. An unforgettable escape awaits at Artha Baliness Villa.
          </p>
          <div className={styles.social}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className={styles.socialIcon}
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className={styles.socialIcon}
            >
              <Facebook size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className={styles.column} aria-label="Footer navigation">
          <h3 className={styles.columnTitle}>Explore</h3>
          <ul className={styles.linkList}>
            {footerLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.path} className={styles.footerLink}>
                  <ArrowRight size={12} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <address className={styles.column}>
          <h3 className={styles.columnTitle}>Contact</h3>
          <ul className={styles.contactList}>
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className={styles.contactItem}>
                <Phone size={14} strokeWidth={1.5} />
                <span>{contact.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className={styles.contactItem}>
                <Mail size={14} strokeWidth={1.5} />
                <span>{contact.email}</span>
              </a>
            </li>
            <li>
              <div className={styles.contactItem}>
                <MapPin size={14} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                <address style={{ fontStyle: 'normal' }}>
                  {contact.address.map((line, i) => (
                    <span key={i} style={{ display: 'block' }}>{line}</span>
                  ))}
                </address>
              </div>
            </li>
          </ul>
        </address>

        {/* CTA Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Plan Your Stay</h3>
          <p className={styles.ctaText}>
            Ready to experience paradise? Reach out to us directly — we&apos;re happy to help you plan the perfect getaway.
          </p>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            aria-label="Enquire via WhatsApp"
          >
            WhatsApp Us
          </a>
          <a
            href="/contact"
            className={styles.enquiryBtn}
          >
            Send Inquiry
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.bottom}>
        <p>© 2025 Artha Baliness Villa. All rights reserved.</p>
        <p>An <strong>Aratt Experience</strong></p>
      </div>
    </footer>
  );
}
