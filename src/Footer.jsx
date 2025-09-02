import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="f-footer-container">
      <footer className="f-footer">
        <div className="f-container">
          <div className="f-footer-grid">
            {/* Logo + Intro */}
            <div className="f-footer-col">
              <div className="f-logo">
                <h1>MOJAF</h1>
                <span>Your Procurement Partner</span>
              </div>
              <p>We deliver your promise with high-quality products and reliable service.</p>
            </div>

            {/* Quick Links */}
            <div className="f-footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><a onClick={() => handleNavigation('/')}>Home</a></li>
                <li><a onClick={() => handleNavigation('/about')}>About Us</a></li>
                <li><a onClick={() => handleNavigation('/services')}>Services</a></li>
                <li><a onClick={() => handleNavigation('/all-products')}>Products</a></li>
                <li><a onClick={() => handleNavigation('/contact')}>Contact</a></li>
              </ul>
            </div>

            {/* Products */}
            <div className="f-footer-col">
              <h3>Products</h3>
              <ul>
                <li><a onClick={() => handleNavigation('/all-products')}>Screws & Fasteners</a></li>
                <li><a onClick={() => handleNavigation('/all-products')}>MDF & PVC Skirting</a></li>
                <li><a onClick={() => handleNavigation('/all-products')}>Safety Equipment</a></li>
                <li><a onClick={() => handleNavigation('/all-products')}>Doors</a></li>
                <li><a onClick={() => handleNavigation('/all-products')}>Electrical Items</a></li>
                <li><a onClick={() => handleNavigation('/all-products')}>Flooring</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="f-footer-col">
              <h3>Services</h3>
              <ul>
                <li><a onClick={() => handleNavigation('/services')}>Procurement Outsourcing</a></li>
                <li><a onClick={() => handleNavigation('/services')}>Logistics Coordination & Management</a></li>
                <li><a onClick={() => handleNavigation('/services')}>Warehousing Services</a></li>
                <li><a onClick={() => handleNavigation('/services')}>After Sales Services Support</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="f-footer-col">
              <h3>Contact Info</h3>
              <ul>
                <li><FaEnvelope className="f-icon" /> info@mojaf-sa.com</li>
                <li><FaPhone className="f-icon" /> +966 56 840 1900</li>
                <li><FaMapMarkerAlt className="f-icon" /> Jeddah, Riyadh, Dammam, Khobar, Madinah, Makkah</li>
                <li>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61576350434274" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="f-icon" /> Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="f-footer-bottom">
            <p>&copy; 2025 MOJAF. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
