import { Geist, Geist_Mono, Yellowtail } from "next/font/google";
import "./globals.css";
import { Suspense } from 'react';
import Loading from "./loading";
import ClientWrapper from './_helper/ClientWrapper';
import Header from "./_components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Artha Baliness Villa",
  description: "Step into paradise your bali villa awaits"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${yellowtail.variable}`}>
      <body>
        <ClientWrapper>{children}</ClientWrapper> 
      </body>
    </html>
  );
}