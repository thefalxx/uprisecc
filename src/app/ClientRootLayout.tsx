"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import ToasterContext from "./api/contex/ToasetContex";
import PreLoader from "@/components/Common/PreLoader";

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  return (
    <SessionProvider>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
        <ToasterContext />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </SessionProvider>
  );
}
