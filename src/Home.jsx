import React, { useEffect } from 'react'
import Hero from './Hero'
import Header from './Header';
import { useLocation } from 'react-router-dom';
import AboutUs from './AboutUs';
import ServicesSection from './ServicesSection';
import Contact from './Contact';
import Footer from './Footer';
import BlogPreview from './BlogPreview';

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
      <AboutUs />
      <ServicesSection />
      <BlogPreview />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
