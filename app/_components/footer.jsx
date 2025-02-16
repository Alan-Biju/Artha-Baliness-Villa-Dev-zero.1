import Link from "next/link";
import styles from "./styles/_footer.module.scss";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const menuItems = [
    { name: "Home", path: "/about" },
    { name: "About Ayatana", path: "/about" },
    { name: "Our Cottages", path: "/about" },
    { name: "Our Experiences", path: "/about" },
    { name: "Our Adventure", path: "/about" },
    { name: "Contact us", path: "/about" },
    { name: "FAQ", path: "/about" },
  ];

  const contactDetails = {
    phone: "+91 9945502000",
    email: "reservations@Ayatanacoorg.com",
    location: [
      "Ayatana Coorg",
      "Mallalli Water Falls Rd",
      "Kumaralli, Karnataka - 571236",
    ],
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Navigation Links */}
        <nav className={styles.column}>
          <h1>Ayatana Coorg</h1>
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path} className={styles.underline}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact & Location */}
        <address className={styles.column}>
          <h1>Contact</h1>
          <p>{contactDetails.phone}</p>
          <p>
            <a
              href={`mailto:${contactDetails.email}`}
              className={styles.underline}
            >
              {contactDetails.email}
            </a>
          </p>

          <h1>Location</h1>
          {contactDetails.location.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </address>

        {/* Social Media */}
        <div className={styles.column}>
          <h1>Social:</h1>
          <div className={styles.socialIcons}>
            <Link href="/about">
              <FaInstagram />
            </Link>
            <Link href="/about">
              <FaFacebookF />
            </Link>
          </div>
          <div className={styles.logos}></div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className={styles.footerBottom}>
        <p>An Aratt Experience</p>
        <p>@ 2025 Ayatana Coorg</p>
      </div>
    </footer>
  );
}
