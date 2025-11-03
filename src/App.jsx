import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Core sections (these files already exist in your repo)
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import AboutUs from "./AboutUs.jsx";
import ServicesSection from "./ServicesSection.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

// ---- Small helpers ----
const ScrollToTop = () => {
  React.useEffect(() => {
    const onRoute = () => window.scrollTo(0, 0);
    window.addEventListener("hashchange", onRoute);
    return () => window.removeEventListener("hashchange", onRoute);
  }, []);
  return null;
};

// Minimal 404
const NotFound = () => (
  <div style={{maxWidth: 960, margin: "64px auto", padding: "0 16px"}}>
    <h1 style={{marginBottom: 12}}>Page not found</h1>
    <p>We couldn't find that page. Try the homepage.</p>
    <p><a href="/">Go Home</a> &middot; <a href="/blog/">Blog</a></p>
  </div>
);

// Home composed from your existing sections (no design changes)
const HomePage = () => (
  <>
    <Header />
    <Hero />
    <div style={{ maxWidth: '1200px', margin: '16px auto', padding: '0 20px' }}>
      <p style={{ marginTop: 12 }}>
        Read our <a href="/blog/">Blog</a> for city‑specific guides on SPC flooring, wall skirting, and fasteners in Riyadh, Jeddah, and Dammam.
      </p>
    </div>
    <AboutUs />
    <ServicesSection />
    <Contact />
    <Footer />
  </>
);

// Blog route – keeps your current static blog, no layout change
const BlogRedirect = () => {
  React.useEffect(() => {
    window.location.replace("/blog/");
  }, []);
  return null;
};

// Arabic root – keep existing static Arabic landing (no change)
const ArabicRedirect = () => {
  React.useEffect(() => {
    window.location.replace("/ar/");
  }, []);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogRedirect />} />
        <Route path="/ar" element={<ArabicRedirect />} />
        {/* Safety aliases */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}