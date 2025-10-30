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
            <div className="f-footer-col">
              <div className="f-logo">
                <h1>MOJAF</h1>
                <span>Your Procurement Partner</span>
              </div>
              <p>We deliver your promise with high-quality products and reliable service.</p>
            </div>
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
            <div className="f-footer-col">
              <h3>Services</h3>
              <ul>
                <li><a onClick={() => handleNavigation('/services')}>Procurement Outsourcing</a></li>
                <li><a onClick={() => handleNavigation('/services')}>Logistics Coordination & Management</a></li>
                <li><a onClick={() => handleNavigation('/services')}>Warehousing Services</a></li>
                <li><a onClick={() => handleNavigation('/services')}>After Sales Services Support</a></li>
              </ul>
            </div>
            <div className="f-footer-col">
              <h3>Contact Info</h3>
              <ul>
                <li><FaEnvelope className="f-icon" /> Info@mojaf-sa.com</li>
                <li><FaPhone className="f-icon" /> +966 56 840 1900</li>
                <li><FaMapMarkerAlt className="f-icon" /> Jeddah, Riyadh, Dammam,Khobar, Madinah, Makkah</li>
                {/* Facebook button added here */}
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
          <div className="f-footer-bottom">
            <p>&copy; 2025 MOJAF. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* Footer Component Styles */
        .f-footer-container {
          font-family: 'Poppins', sans-serif;
        }
        
        .f-footer {
          background-color: #0a2540;
          color: #ffffff;
          padding: 80px 0 0;
        }
        
        .f-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .f-footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin-bottom: 50px;
        }
        
        .f-footer-col h3 {
          color: #ffffff;
          margin-bottom: 20px;
          font-size: 1.2rem;
          font-weight: 600;
        }
        
        .f-footer-col ul {
          list-style: none;
          padding: 0;
        }
        
        .f-footer-col ul li {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }
        
        .f-footer-col ul li a {
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .f-footer-col ul li a:hover {
          color: #d4af37;
          padding-left: 5px;
        }
        
        .f-logo h1 {
          color: #ffffff;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 5px;
        }
        
        .f-logo span {
          color: #d4af37;
          font-size: 0.8rem;
          display: block;
        }
        
        .f-footer-col p {
          color: rgba(255, 255, 255, 0.7);
          margin-top: 20px;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        
        .f-icon {
          color: #d4af37;
          margin-right: 10px;
          width: 20px;
          text-align: center;
        }
        
        .f-footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px 0;
          text-align: center;
        }
        
        .f-footer-bottom p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
          margin: 0;
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
          .f-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
          
          .f-footer {
            padding: 60px 0 0;
          }
        }
        
        @media (max-width: 576px) {
          .f-footer-grid {
            grid-template-columns: 1fr;
          }
          
          .f-footer-col {
            margin-bottom: 30px;
          }
          
          .f-footer-col:last-child {
            margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Footer;