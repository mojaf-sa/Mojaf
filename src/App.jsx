import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AllProductsPage from './AllProductsPage';
import ThankYou from './ThankYou';
import ProductDetailPage from './ProductDetailPage';
import AboutScreen from './AboutScreen';
import ServicesScreen from './ServicesScreen';
import ContactScreen from './ContactScreen';
import PartnersScreen from './PartnersScreen';
import CatalogsScreen from './CatalogsScreen';
import { useLocation } from 'react-router-dom';
import FloatingContactButtons from './FloatingContactButtons';
import { HelmetProvider, Helmet} from 'react-helmet-async';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // or 'auto'
    }, [pathname]);

    return null;
};

function App() {
  return (
    <HelmetProvider>
    
 <Helmet>
        <title>Mojaf SA | Premium Construction & Building Materials Supplier in Saudi Arabia</title>
        <meta 
          name="description" 
          content="Leading supplier of flooring, wall panels, doors & construction & building materials in Jeddah, Riyadh, Dammam. Contact +966 56 840 1900 for wholesale prices."
        />
        <link rel="icon" href="https://mojaf-sa.com/MOJ.jpg" type="image/jpg" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Mojaf SA | Construction Materials Supplier Saudi Arabia" />
        <meta property="og:description" content="Authorized distributor of building materials across Jeddah, Riyadh, Dammam. Certified quality products." />
        <meta property="og:image" content="https://www.mojaf-sa.com/logo-social.png" />
        
      </Helmet>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/thanks" element={<ThankYou />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/services" element={<ServicesScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/partners" element={<PartnersScreen />} />
          <Route path="/catalogs" element={<CatalogsScreen />} />
        </Routes>
      </Router>
      <FloatingContactButtons />
    </HelmetProvider>
  );
}

export default App;