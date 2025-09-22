import React, { useEffect } from 'react';
import Info from './Info';
import Hero from './Hero';
import Header from './Header';
import Services from './Services';
import { useLocation } from 'react-router-dom';
import AboutUs from './AboutUs';
import ServicesSection from './ServicesSection';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <Hero />

      {/* SEO: internal link to Blog (simple, non-intrusive) */}
      <div style={{ maxWidth: '1200px', margin: '16px auto', padding: '0 20px' }}>
        <p style={{ marginTop: 12 }}>
          Read our <a href="/blog/">Blog</a> for city-specific guides on SPC flooring, wall skirting, and fasteners in Riyadh, Jeddah, and Dammam.
        </p>
      </div>

      <AboutUs />
      {/* <Info /> */}
      {/* <Services /> */}
      <ServicesSection />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
