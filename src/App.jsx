import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home.jsx";
import AboutUs from "./AboutUs.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
