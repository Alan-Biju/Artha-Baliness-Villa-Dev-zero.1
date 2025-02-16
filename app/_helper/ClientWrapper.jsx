"use client"; // This component is client-side

import { useState } from "react";
import Header from "../_components/header";
import Navbar from "../_components/navbar";
import Footer from "../_components/footer";

export default function ClientWrapper({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      {children}
      <Footer />
    </>
  );
}
