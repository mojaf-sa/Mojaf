import { useState } from 'react'
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


function App() {
  return (
<Router>
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
  )
}

export default App
