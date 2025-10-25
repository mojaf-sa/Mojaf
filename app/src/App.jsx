import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <section style={{padding:'2rem'}}>
      <h1 data-i18n="site.tagline">Grow your business with confidence</h1>
      <p><Link to="/all-products">All Products</Link></p>
    </section>
  )
}

function AllProducts(){
  return (
    <section style={{padding:'2rem'}}>
      <h2>All Products</h2>
      <p>Content goes here…</p>
    </section>
  )
}

export default function App(){
  return (
    <>
      <nav style={{display:'flex',gap:'1rem',padding:'1rem',borderBottom:'1px solid #eee'}}>
        <Link to="/" data-i18n="nav.home">Home</Link>
        <Link to="/all-products" data-i18n="nav.products">Products</Link>
        <button id="lang-toggle" type="button">العربية</button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
      </Routes>
    </>
  )
}
