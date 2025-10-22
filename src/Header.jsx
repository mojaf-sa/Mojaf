import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{background:"#fff", padding:"12px 20px", borderBottom:"1px solid #eee"}}>
      <div style={{maxWidth:1200, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <div><a href="/" style={{textDecoration:"none", color:"#0a2540", fontWeight:700}}>MOJAF</a></div>
        <nav>
          <ul style={{display:"flex", gap:18, listStyle:"none", margin:0, padding:0}}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/all-products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog/">Blog</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
