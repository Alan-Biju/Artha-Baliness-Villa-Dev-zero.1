import { fetchGallery, fetchAccommodations, fetchTestimonials, fetchExperiences, fetchEvents, fetchSettings } from '../lib/api';
import HeroSection from './_components/sections/HeroSection';
import TrustSection from './_components/sections/TrustSection';
import AboutSection from './_components/sections/AboutSection';
import AccommodationsSection from './_components/sections/AccommodationsSection';
import AmenitiesSection from './_components/sections/AmenitiesSection';
import ExperiencesSection from './_components/sections/ExperiencesSection';
import GallerySection from './_components/sections/GallerySection';
import TestimonialsSection from './_components/sections/TestimonialsSection';
import LocationSection from './_components/sections/LocationSection';
import EventsSection from './_components/sections/EventsSection';
import InquirySection from './_components/sections/InquirySection';

export default async function Home() {
  const [gallery, accommodations, testimonials, experiences, events, settings] = await Promise.all([
    fetchGallery(),
    fetchAccommodations(),
    fetchTestimonials(),
    fetchExperiences(),
    fetchEvents(),
    fetchSettings(),
  ]);

  return (
    <>
      <HeroSection settings={settings} />
      <TrustSection />
      <AboutSection />
      <AccommodationsSection rooms={accommodations} />
      <AmenitiesSection />
      <ExperiencesSection experiences={experiences} />
      <GallerySection items={gallery} />
      <TestimonialsSection testimonials={testimonials} />
      <LocationSection settings={settings} />
      <EventsSection events={events} />
      <InquirySection />
    </>
  );
}
