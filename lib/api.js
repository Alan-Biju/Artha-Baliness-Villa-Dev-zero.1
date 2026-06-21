import { databases, DB_ID, Query, getFileUrl } from './appwrite';

const COL = {
  gallery: process.env.NEXT_PUBLIC_COL_GALLERY,
  accommodations: process.env.NEXT_PUBLIC_COL_ACCOMMODATIONS,
  testimonials: process.env.NEXT_PUBLIC_COL_TESTIMONIALS,
  experiences: process.env.NEXT_PUBLIC_COL_EXPERIENCES,
  events: process.env.NEXT_PUBLIC_COL_EVENTS,
  settings: process.env.NEXT_PUBLIC_COL_SETTINGS,
};

async function listDocs(collection, queries = []) {
  try {
    const res = await databases.listDocuments(DB_ID, collection, queries);
    return res.documents;
  } catch {
    return [];
  }
}

export async function fetchGallery() {
  const docs = await listDocs(COL.gallery, [Query.orderAsc('order'), Query.limit(50)]);
  return docs.map((doc) => ({
    id: doc.$id,
    src: getFileUrl(doc.fileId) || '/assets/wallpaper.jpg',
    alt: doc.alt || doc.title,
    cat: doc.category,
    title: doc.title,
    span: doc.featured ? 'large' : 'normal',
  }));
}

export async function fetchAccommodations() {
  const docs = await listDocs(COL.accommodations, [Query.orderAsc('order'), Query.limit(20)]);
  return docs.map((doc) => ({
    id: doc.$id,
    title: doc.title,
    tag: doc.tag,
    subtitle: doc.subtitle,
    description: doc.description,
    image: getFileUrl(doc.imageFileId) || '/assets/wallpaper2.jpg',
    occupancy: doc.occupancy,
    size: doc.size,
    amenities: doc.amenities || [],
  }));
}

export async function fetchTestimonials() {
  const docs = await listDocs(COL.testimonials, [Query.limit(20)]);
  return docs.map((doc) => ({
    id: doc.$id,
    name: doc.guestName,
    origin: doc.location || '',
    rating: doc.rating ?? 5,
    text: doc.text,
    stay: [doc.stayType, doc.date].filter(Boolean).join(' · '),
  }));
}

export async function fetchExperiences() {
  const docs = await listDocs(COL.experiences, [Query.orderAsc('order'), Query.limit(20)]);
  return docs.map((doc) => ({
    id: doc.$id,
    title: doc.title,
    label: doc.duration || '',
    description: doc.description,
    highlights: doc.highlights || [],
    image: getFileUrl(doc.imageFileId) || '/assets/wallpaper.jpg',
  }));
}

export async function fetchEvents() {
  const docs = await listDocs(COL.events, [Query.orderAsc('order'), Query.limit(20)]);
  return docs.map((doc) => ({
    id: doc.$id,
    title: doc.title,
    description: doc.description,
    features: doc.features || [],
    image: getFileUrl(doc.imageFileId) || '/assets/wallpaper2.jpg',
    iconName: doc.icon || 'Star',
  }));
}

export async function fetchSettings() {
  const docs = await listDocs(COL.settings, [Query.limit(50)]);
  return docs.reduce((acc, doc) => {
    acc[doc.key] = doc.value;
    return acc;
  }, {});
}
