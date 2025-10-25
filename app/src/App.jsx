import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1 data-i18n="nav.home">Home</h1>;
}

function AllProducts() {
  return <h1>/all-products</h1>;
}

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto" }}>
      <nav style={{ display: "flex", gap: 12, padding: 12, borderBottom: "1px solid #eee" }}>
        <Link to="/">Home</Link>
        <Link to="/all-products">All products</Link>
        <button id="lang-toggle" style={{ marginLeft: "auto" }}>العربية</button>
      </nav>

      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
        </Routes>
      </main>
    </div>
  );
}
