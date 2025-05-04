import React from 'react'
import './Header.css'; 

function Footer() {
  return (
    <div>
    <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="logo">
                <h1>MOJAF</h1>
                <span>Your Procurement Partner</span>
              </div>
              <p>We deliver your promise with high-quality products and reliable service.</p>
            </div>
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Services</h3>
              <ul>
                <li><a href="#services">Screws & Fasteners</a></li>
                <li><a href="#services">MDF & PVC Skirting</a></li>
                <li><a href="#services">Safety Equipment</a></li>
                <li><a href="#services">Doors</a></li>
                <li><a href="#services">Electrical Items</a></li>
                <li><a href="#services">Flooring</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 MOJAF. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer