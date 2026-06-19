import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About | Our Story',
  description:
    'Discover the story behind Artha Baliness Villa — a luxury nature resort born from a belief that the finest experiences come from deep connection with nature, exceptional hospitality, and timeless design.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '70vh',
          minHeight: '420px',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/assets/wallpaper2.jpg"
          alt="Artha Baliness Villa — resort grounds"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          sizes="100vw"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(10,30,15,0.72) 100%)',
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: 'clamp(2rem, 5vw, 5rem)',
            maxWidth: '900px',
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
            Our Story
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              fontWeight: 300,
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            About Artha<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-gold-300)' }}>Baliness Villa</em>
          </h1>
          <div
            style={{
              width: 70,
              height: 1,
              background: 'linear-gradient(90deg, transparent, var(--color-gold-400), transparent)',
            }}
          />
        </div>
      </section>

      {/* Main Content */}
      <section
        style={{
          background: 'var(--color-beige-50)',
          padding: '6rem clamp(1.5rem, 5vw, 5rem)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Philosophy */}
          <div style={{ marginBottom: '4rem' }}>
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
              Philosophy
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                fontWeight: 400,
                color: 'var(--color-forest-600)',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
              }}
            >
              Luxury is not a destination. It&apos;s a feeling.
            </h2>
            <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, transparent, var(--color-gold-400), transparent)', marginBottom: '1.5rem' }} />
            <p
              style={{
                fontFamily: 'var(--font-jost), sans-serif',
                fontSize: '1.05rem',
                lineHeight: 1.85,
                color: 'var(--muted)',
                fontWeight: 300,
                maxWidth: '70ch',
              }}
            >
              Artha Baliness Villa was founded on a simple conviction: that true luxury is not
              measured in thread counts or gold fixtures, but in the quality of moments —
              the morning light filtering through the forest canopy, the taste of a meal cooked
              with local produce, the warmth of being cared for by people who genuinely mean it.
            </p>
          </div>

          {/* Heritage Block */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3.5rem',
              marginBottom: '4rem',
              alignItems: 'center',
            }}
            className="about-grid"
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 400,
                  color: 'var(--color-forest-600)',
                  marginBottom: '1rem',
                }}
              >
                Our Heritage
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-jost), sans-serif',
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  color: 'var(--muted)',
                  fontWeight: 300,
                  marginBottom: '1rem',
                }}
              >
                Part of the Aratt family of experiences, Artha Baliness Villa draws on decades
                of hospitality expertise passed down through generations. Our team of naturalists,
                chefs, artisans, and wellness practitioners bring together a tapestry of knowledge
                to create an experience that feels deeply rooted in its place.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-jost), sans-serif',
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  color: 'var(--muted)',
                  fontWeight: 300,
                }}
              >
                Every stone, every plant, every recipe tells a story. We invite you to become
                part of that story.
              </p>
            </div>
            <div
              style={{
                position: 'relative',
                height: '360px',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/assets/wallpaper.jpg"
                alt="The resort heritage and grounds"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              background: 'var(--color-forest-600)',
              padding: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 400,
                  color: '#fff',
                  marginBottom: '0.35rem',
                }}
              >
                Ready to Experience Artha?
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-jost), sans-serif',
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.6)',
                  fontWeight: 300,
                }}
              >
                Reach out to our team for a personalised escape curated just for you.
              </p>
            </div>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.9rem 2rem',
                background: 'var(--color-gold-400)',
                color: '#fff',
                fontFamily: 'var(--font-jost), sans-serif',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
