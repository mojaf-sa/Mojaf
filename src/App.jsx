import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AllProductsPage from './AllProductsPage';


function App() {
  return (
<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProductsPage />} />
      </Routes>
    </Router>
  )
}

export default App
