import React, { useEffect } from 'react'
import Info from './Info'
import Hero from './Hero'
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
      <AboutUs />
      {/* <Info /> */}
      {/* <Services /> */}
      <ServicesSection />
      <Contact />
      <Footer />
    </>
  )
}

export default Home