import { Client, Databases, Query } from 'node-appwrite';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

export const databases = new Databases(client);

export const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
export const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;
export const ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
export const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

export { Query };

export function getFileUrl(fileId) {
  if (!fileId) return null;
  return `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${PROJECT_ID}`;
}
