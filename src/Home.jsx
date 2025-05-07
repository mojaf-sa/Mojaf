import React, { useEffect } from 'react'
import Info from './Info'
import Hero from './Hero'
import Header from './Header';
import Services from './Services';
import { useLocation } from 'react-router-dom';

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
      <Info />
      <Services />
    </>
  )
}

export default Home