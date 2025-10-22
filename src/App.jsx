import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Fasteners from './pages/Fasteners.jsx'
import WallSkirting from './pages/WallSkirting.jsx'
import ConstructionMaterials from './pages/ConstructionMaterials.jsx'
import VinylFlooring from './pages/VinylFlooring.jsx'
import CementBoards from './pages/CementBoards.jsx'
import FiberBoards from './pages/FiberBoards.jsx'
import GypsumBoards from './pages/GypsumBoards.jsx'
import RockWoolInsulation from './pages/RockWoolInsulation.jsx'
import Products from './pages/Products.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import Jeddah from './pages/Jeddah.jsx'
import Riyadh from './pages/Riyadh.jsx'
import Dammam from './pages/Dammam.jsx'
import Makkah from './pages/Makkah.jsx'
import Medina from './pages/Medina.jsx'
import Tabuk from './pages/Tabuk.jsx'
import Khobar from './pages/Khobar.jsx'

export default function App() {
  return (
    <>
      <header style={{padding:'10px',borderBottom:'1px solid #eee'}}>
        <nav style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <a href="/">Home</a>
          <a href="/fasteners-screws">Fasteners</a>
          <a href="/wall-skirting">Wall Skirting</a>
          <a href="/construction-materials">Materials</a>
          <a href="/vinyl-flooring">Vinyl</a>
          <a href="/products">Products</a>
          <a href="/services">Services</a>
          <a href="/blog">Blog</a>
          <a href="/jeddah">Jeddah</a>
          <a href="/riyadh">Riyadh</a>
          <a href="/dammam">Dammam</a>
          <a href="/makkah">Makkah</a>
          <a href="/medina">Medina</a>
          <a href="/tabuk">Tabuk</a>
          <a href="/khobar">Khobar</a>
        </nav>
      </header>
      <main style={{padding:'16px'}}>
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/fasteners-screws" element={<Fasteners/>} />
          <Route path="/wall-skirting" element={<WallSkirting/>} />
          <Route path="/construction-materials" element={<ConstructionMaterials/>} />
          <Route path="/vinyl-flooring" element={<VinylFlooring/>} />
          <Route path="/cement-boards" element={<CementBoards/>} />
          <Route path="/fiber-boards" element={<FiberBoards/>} />
          <Route path="/gypsum-boards" element={<GypsumBoards/>} />
          <Route path="/rock-wool-insulation" element={<RockWoolInsulation/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/jeddah" element={<Jeddah/>} />
          <Route path="/riyadh" element={<Riyadh/>} />
          <Route path="/dammam" element={<Dammam/>} />
          <Route path="/makkah" element={<Makkah/>} />
          <Route path="/medina" element={<Medina/>} />
          <Route path="/tabuk" element={<Tabuk/>} />
          <Route path="/khobar" element={<Khobar/>} />
        </Routes>
      </main>
      <footer style={{padding:'10px',borderTop:'1px solid #eee'}}>
        <p>© MOJAF Trading</p>
      </footer>
    </>
  )
}
