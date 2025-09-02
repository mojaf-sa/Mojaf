import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    // scroll to top for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="f-footer-container">
      <footer className="f-footer" role="contentinfo">
        <div className="f-container">
          <div className="f-footer-grid">
            {/* Brand / About */}
            <div className="f-footer-col">
              <div className="f-logo" aria-label="MOJAF Trading">
                {/* changed from h1 -> p to avoid multiple H1s sitewide */}
                <p className="f-brand">MOJAF</p>
                <span>Your Procurement Partner</span>
              </div>
              <p>
                We deliver your promise with high-quality products and reliable service.
              </p>

              {/* Legal name surfaced for Google cross-verification */}
              <p className="f-legal">
                Legally registered as <strong>Establishment Mohamed Abdallah Mohamed Al-Jifri for Trading</strong>.
              </p>
            </div>

            {/* Quick Links */}
            <div className="f-footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><a role="button" tabIndex={0} onClick={() => handleNavigation('/')}>Home</a></li>
                <li><a role="button" tabIndex={0} onClick={() => handleNavigation('/about')}>About Us</a></li>
                <li><a role="button" tabIndex={0} onClick={() => handleNavigation('/services')}>Services</a></li>
                <li><a role="button" tabIndex={0} onClick={() => handleNavigation('/all-products')}>Products</a></li>
                <li><a role="button" tabIndex={0} onClick={() => handleNavigation('/contact')}>Contact</a></li>
              </ul>
            </div>

            {/* Products */}
            <div className="f-footer-col">
              <h3>Products</h3>
              <ul>
                <li><a role="button" tabIndex={0} onClick={() => handleNavigation('/all-products')}>Screws &amp; Fasteners</a></li>
                <li><a role="button" tabIndex={0} onClick={() => handleNavigation('/all-products')}>MDF &amp; PVC Skirting</a></li>
                <li><a role="button" tabIndex={0} onClick={() => handleNavigation('/all-products')}>Safety Equipment</a></li>
                <li><a role="button" tabIndex={0} onClick={() => handleNavigation('/all-products')}>Doors</a></li>
                <li><a role="button" tabIndex={0} onClick={() => handleNavigation('/all-products')}>Electrical Items</a></li>
                <li><a role="button" tabIndex={0} onClick={() => handleNavigation('/all-products')}>Flooring</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="f-footer-col">
              <h3>Services</h3>
              <ul>
                <li><a role="button" tabIndex={0} onClick={() => handleNavigation('/services')}>Procurement Outsourcing</a></li>
                <li><a role="button" tabIndex={0} onClick={() => handleNavigation('/services')}>Logistics Coordination &amp; Management</a></li>
                <li><a role="button" tabIndex={0} onClick={() => handleNavigation('/services')}>Warehousing Services</a></li>
                <li><a role="button" tabIndex={0} onClick={() => handleNavigation('/services')}>After Sales Services Support</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="f-footer-col">
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <FaEnvelope className="f-icon" />
                  <a href="mailto:info@mojaf-sa.com">info@mojaf-sa.com</a>
                </li>
                <li>
                  <FaPhone className="f-icon" />
                  <a href="tel:+966568401900">+966 56 840 1900</a>
                </li>
                <li>
                  <FaMapMarkerAlt className="f-icon" />
                  Jeddah, Riyadh, Dammam, Khobar, Madinah, Makkah
                </li>
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

          {/* Compact, human-readable keyword line (no stuffing) */}
          <div className="f-keywords">
            <p>
              Services: Fasteners • Wall &amp; Floor Skirting • Vinyl/SPC Flooring • Insulation • Electrical Components • Boards • Portacabin Materials
              &nbsp;—&nbsp; Cities: Riyadh • Jeddah • Dammam • Khobar
            </p>
          </div>

          <div className="f-footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} MOJAF Trading. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* if your project doesn't use styled-jsx, plain <style> also works */}
      <style jsx>{`
        .f-footer-container { font-family: 'Poppins', sans-serif; }
        .f-footer { background-color: #0a2540; color: #ffffff; padding: 80px 0 0; }
        .f-container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px; }

        .f-footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px; margin-bottom: 30px;
        }

        .f-footer-col h3 { color: #ffffff; margin-bottom: 16px; font-size: 1.1rem; font-weight: 600; }
        .f-footer-col ul { list-style: none; padding: 0; }
        .f-footer-col ul li { margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }

        .f-footer-col ul li a {
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.25s ease;
          cursor: pointer;
          text-decoration: none;
        }
        .f-footer-col ul li a:hover { color: #d4af37; transform: translateX(3px); }

        .f-logo .f-brand { /* was h1 */
          color: #ffffff; font-size: 1.6rem; font-weight: 700; margin: 0 0 6px 0;
        }
        .f-logo span { color: #d4af37; font-size: 0.85rem; display: block; }

        .f-footer-col p { color: rgba(255, 255, 255, 0.8); margin-top: 14px; font-size: 0.9rem; line-height: 1.6; }
        .f-legal { margin-top: 10px; color: rgba(255,255,255,0.95); }

        .f-icon { color: #d4af37; margin-right: 4px; width: 18px; min-width: 18px; text-align: center; }

        .f-keywords {
          border-top: 1px dashed rgba(255,255,255,0.12);
          border-bottom: 1px dashed rgba(255,255,255,0.12);
          padding: 12px 0; margin: 8px 0 18px;
        }
        .f-keywords p { margin: 0; color: rgba(255,255,255,0.85); font-size: 0.9rem; }

        .f-footer-bottom { padding: 18px 0 24px; text-align: center; }
        .f-footer-bottom p { color: rgba(255, 255, 255, 0.6); font-size: 0.9rem; margin: 0; }

        @media (max-width: 768px) {
          .f-footer { padding: 60px 0 0; }
          .f-footer-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
        }
        @media (max-width: 576px) {
          .f-footer-grid { grid-template-columns: 1fr; }
          .f-footer-col { margin-bottom: 12px; }
        }
      `}</style>
    </div>
  );
}

export default Footer;
