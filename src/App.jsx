import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Import your existing sections (names/paths used in your repo)
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import AboutUs from "./AboutUs.jsx";
import ServicesSection from "./ServicesSection.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

const Home = () => (
  <>
    <Header />
    <Hero />
    {/* Keep your small internal blog link if present inside Hero/Home */}
    <AboutUs />
    <ServicesSection />
    <Contact />
    <Footer />
  </>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Send /blog to the static blog index so nothing breaks */}
      <Route path="/blog" element={<Navigate to="/blog.html" replace />} />
      {/* Send /ar to your Arabic landing (existing folder) */}
      <Route path="/ar" element={<Navigate to="/ar/" replace />} />
      {/* Any unknown route → fallback */}
      <Route
        path="*"
        element={
          <div style={{padding:"2rem", fontFamily:"system-ui,Segoe UI"}}>
            <h1>Page not found</h1>
            <p>
              Try the <a href="/">home page</a> or the <a href="/blog.html">blog</a>.
            </p>
          </div>
        }
      />
    </Routes>
  );
}
