import React, { useEffect } from 'react'
import MojafHero from './MojafHero'
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
    document.title = 'MOJAF | Building Materials Supplier in Saudi Arabia';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'MOJAF is a building materials supplier in Saudi Arabia for construction materials in Riyadh and Jeddah, building supplies in Dammam, interior finishing materials and portacabin materials.');
    }
  }, []);

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
      <MojafHero />
      <AboutUs />
      <ServicesSection />
      <BlogPreview />
      <section className="mojaf-service-areas" aria-labelledby="service-areas-title">
        <div className="mojaf-service-areas-inner">
          <span className="mojaf-service-areas-kicker">Service Areas &amp; Buyer Keywords</span>
          <h2 id="service-areas-title">Construction Supply Support Across Saudi Arabia</h2>
          <p>
            MOJAF supports procurement teams looking for a building materials supplier in Saudi Arabia,
            construction materials in Riyadh, construction materials in Jeddah, and building supplies in Dammam.
            As a KSA construction product distributor, we coordinate interior finishing materials Saudi Arabia wide
            and help buyers source from one dependable portacabin material supplier.
          </p>
          <div className="mojaf-service-area-grid" aria-label="MOJAF service cities">
            {['Riyadh', 'Jeddah', 'Dammam', 'Khobar', 'Jubail', 'Makkah', 'Madinah'].map((city) => (
              <a key={city} href="/contact/">{city}</a>
            ))}
          </div>
        </div>
        <style>{`
          .mojaf-service-areas { padding: 86px 20px; background: linear-gradient(135deg, #0a2540 0%, #102f50 60%, #d4af37 160%); color: #fff; }
          .mojaf-service-areas-inner { max-width: 1120px; margin: 0 auto; text-align: center; }
          .mojaf-service-areas-kicker { color: #d4af37; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; }
          .mojaf-service-areas h2 { font-size: clamp(2rem, 4vw, 3rem); margin: 14px 0 18px; }
          .mojaf-service-areas p { max-width: 900px; margin: 0 auto 30px; color: rgba(255,255,255,.86); line-height: 1.8; font-size: 1.08rem; }
          .mojaf-service-area-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 12px; }
          .mojaf-service-area-grid a { color: #0a2540; background: #fff; border: 1px solid rgba(212,175,55,.5); border-radius: 999px; padding: 13px 10px; font-weight: 800; text-decoration: none; box-shadow: 0 10px 30px rgba(0,0,0,.12); }
          .mojaf-service-area-grid a:hover { background: #d4af37; }
          @media (max-width: 900px) { .mojaf-service-area-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
          @media (max-width: 560px) { .mojaf-service-area-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        `}</style>
      </section>
      <Contact />
      <Footer />
    </>
  )
}

export default Home
