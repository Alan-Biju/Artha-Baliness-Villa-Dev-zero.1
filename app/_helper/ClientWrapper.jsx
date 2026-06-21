'use client';

import { useState } from 'react';
import Header from '../_components/header';
import Navbar from '../_components/navbar';
import Footer from '../_components/footer';
import FloatingCTA from '../_components/FloatingCTA';

export default function ClientWrapper({ children, settings = {} }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main id="main-content">{children}</main>
      <Footer settings={settings} />
      <FloatingCTA settings={settings} />
    </>
  );
}
