import React, { useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
    
    const params = new URLSearchParams(location.search);
    if (params.get('submitted') === 'true') {
      alert('Your request has been submitted successfully!');
      window.history.replaceState({}, document.title, location.pathname);
    }
  }, [location]);

  return (
    <div className="c-contact-container">
      <section className="c-contact-section" id="contact">
        <div className="c-contact-wrapper">
          <h2 className="c-section-title" data-aos="fade-up">Contact Us</h2>
          
          <div className="c-contact-grid">
            {/* Contact Info Section */}
            <div className="c-contact-info" data-aos="fade-right">
              <h3 className="c-info-title">Get in Touch</h3>
              
              <div className="c-info-item">
                <FaEnvelope className="c-info-icon" />
                <p className="c-info-text">Info@mojaf-sa.com</p>
              </div>
              
              <div className="c-info-item">
                <FaPhone className="c-info-icon" />
                <p className="c-info-text">
                  +966 56 840 1900<br />
                  +966 56 679 2904
                </p>
              </div>
              
              <div className="c-info-item">
                <FaMapMarkerAlt className="c-info-icon" />
                <p className="c-info-text">Branches: Jeddah, Riyadh, Dammam, Khobar, Madinah, Makkah</p>
              </div>
            </div>
            
            {/* Contact Form Section */}
            <div className="c-contact-form" data-aos="fade-left">
              <form 
                action="https://formsubmit.co/Info@mojaf-sa.com" 
                method="POST"
                className="c-form"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="http://localhost:5173/thanks" />
                
                <div className="c-form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    className="c-form-input" 
                    required 
                  />
                </div>
                
                <div className="c-form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    className="c-form-input" 
                    required 
                  />
                </div>
                
                <div className="c-form-group">
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Your Phone" 
                    className="c-form-input" 
                  />
                </div>
                
                <div className="c-form-group">
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    className="c-form-textarea" 
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="c-submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Base Styles */
        .c-contact-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          line-height: 1.6;
        }
        
        /* Section Styles */
        .c-contact-section {
          padding: 4rem 1rem;
          background-color: #f5f5f5;
        }
        
        .c-contact-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .c-section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #222;
          position: relative;
        }
        
        .c-section-title:after {
          content: '';
          display: block;
          width: 80px;
          height: 3px;
          background: #d4af37;
          margin: 0.5rem auto;
        }
        
        /* Grid Layout */
        .c-contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        
        @media (min-width: 768px) {
          .c-contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        /* Contact Info Styles */
        .c-contact-info {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        
        .c-info-title {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #222;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .c-info-title:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 2px;
          background: #d4af37;
        }
        
        .c-info-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }
        
        .c-info-icon {
          color: #d4af37;
          margin-right: 1rem;
          font-size: 1.2rem;
          margin-top: 0.2rem;
        }
        
        .c-info-text {
          margin: 0;
          font-size: 1rem;
          color: #555;
        }
        
        /* Form Styles */
        .c-contact-form {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        
        .c-form-group {
          margin-bottom: 1.5rem;
        }
        
        .c-form-input,
        .c-form-textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .c-form-input:focus,
        .c-form-textarea:focus {
          outline: none;
          border-color: #d4af37;
          box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
        }
        
        .c-form-textarea {
          min-height: 120px;
          resize: vertical;
        }
        
        /* Button Styles */
        .c-submit-btn {
          background: #d4af37;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          font-size: 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          font-weight: 500;
        }
        
        .c-submit-btn:hover {
          background: #c19b2e;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        /* Divider Styles */
        .c-divider {
          height: 1px;
          background: #eee;
          margin: 1.5rem 0;
        }
        
        /* Responsive Adjustments */
        @media (max-width: 480px) {
          .c-section-title {
            font-size: 2rem;
          }
          
          .c-contact-info,
          .c-contact-form {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;