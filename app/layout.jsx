import { Cormorant_Garamond, Jost, Yellowtail } from "next/font/google";
import "./globals.css";
import ClientWrapper from './_helper/ClientWrapper';

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const SITE_URL = "https://arthabalivillaresort.com";
const SITE_NAME = "Artha Baliness Villa";
const DESCRIPTION =
  "Artha Baliness Villa — a premium luxury nature resort offering elegant cottages, curated experiences, and serene escapes. Escape into nature where luxury meets serenity.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Luxury Nature Resort`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "luxury resort",
    "nature resort",
    "Bali villa",
    "luxury villa",
    "weekend getaway",
    "family resort",
    "best resort near me",
    "eco resort",
    "outdoor stay",
    "cottages",
    "adventure resort",
    "Artha Baliness Villa",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Luxury Nature Resort`,
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/assets/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Luxury Nature Resort`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Luxury Nature Resort`,
    description: DESCRIPTION,
    images: [`${SITE_URL}/assets/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: SITE_NAME,
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: "+91-9999999999",
  email: "reservations@arthabalivillaresort.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Artha Baliness Villa",
    addressCountry: "IN",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Swimming Pool", value: true },
    { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
    { "@type": "LocationFeatureSpecification", name: "Garden", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
  ],
  starRating: { "@type": "Rating", ratingValue: "5" },
  priceRange: "$$$",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${yellowtail.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
