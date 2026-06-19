import InquirySection from '../_components/sections/InquirySection';
import LocationSection from '../_components/sections/LocationSection';

export const metadata = {
  title: 'Contact & Enquiries',
  description:
    'Get in touch with Artha Baliness Villa. Send an inquiry, WhatsApp us, or call directly to plan your personalised luxury nature retreat.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section
        style={{
          background: 'var(--color-forest-700)',
          padding: '10rem clamp(1.5rem, 5vw, 5rem) 5rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-jost), sans-serif',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-gold-400)',
            marginBottom: '0.75rem',
          }}
        >
          Get In Touch
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 300,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}
        >
          Let&apos;s Plan Your<br />
          <em style={{ fontStyle: 'italic', color: 'var(--color-gold-300)' }}>Perfect Getaway</em>
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-jost), sans-serif',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.6)',
            fontWeight: 300,
            maxWidth: '50ch',
            margin: '0 auto',
          }}
        >
          We don&apos;t do impersonal online bookings. We do personalised conversations. Tell us what you have in mind.
        </p>
      </section>

      <InquirySection />
      <LocationSection />
    </>
  );
}
