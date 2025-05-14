import React from 'react'
import './Header.css'; 
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'


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
                <li><a href="#hero1">Home</a></li>
                <li><a href="#in-info">About Us</a></li>
                <li><a href="#ss-services">Services</a></li>
                <li><a href="#pp-products">Products</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Services</h3>
              <ul>
                <li><a href="#ss-services">Screws & Fasteners</a></li>
                <li><a href="#ss-services">MDF & PVC Skirting</a></li>
                <li><a href="#ss-services">Safety Equipment</a></li>
                <li><a href="#ss-services">Doors</a></li>
                <li><a href="#ss-services">Electrical Items</a></li>
                <li><a href="#ss-services">Flooring</a></li>
              </ul>
            </div>
            <div className="footer-col">
                    <h3>Contact Info</h3>
                    <ul>
                        <li><FaEnvelope className="icon" /> Info@mojaf-sa.com</li>
                        <li> <FaPhone className="icon" /> +966 56 840 1900</li>
                        <li> <FaMapMarkerAlt className="icon" /> Jeddah, Riyadh, Dammam</li>
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