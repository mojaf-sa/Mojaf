import React, { useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';

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
      {/* SEO Meta Tags in Helmet (should be included in your main layout component) */}
      <Helmet>
        <title>Contact Mojaf Saudi Arabia - Construction & Engineering Services</title>
        <meta name="description" content="Get in touch with Mojaf Saudi Arabia for construction and engineering services. Contact us via phone, email, or visit our branches in Jeddah, Riyadh, Dammam and more." />
        <meta name="keywords" content="Mojaf Saudi Arabia, construction Saudi Arabia, engineering services, contact Mojaf, Jeddah construction, Riyadh engineering" />
        <meta property="og:title" content="Contact Mojaf Saudi Arabia - Construction & Engineering Services" />
        <meta property="og:description" content="Get in touch with Mojaf Saudi Arabia for construction and engineering services." />
        <meta property="og:url" content="https://www.mojaf-sa.com/contact" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.mojaf-sa.com/contact" />
</Helmet>
      <section className="c-contact-section" id="contact">
        <div className="c-contact-wrapper">
          <h1 className="c-section-title" data-aos="fade-up">Contact Mojaf Saudi Arabia</h1>
          
          <div className="c-contact-grid">
            {/* Contact Info Section */}
            <div className="c-contact-info" data-aos="fade-right">
              <h2 className="c-info-title">Get in Touch With Our Team</h2>
              
              <div className="c-info-item">
                <FaEnvelope className="c-info-icon" />
                <p className="c-info-text">
                  <a href="mailto:Info@mojaf-sa.com" aria-label="Email Mojaf Saudi Arabia">
                    Info@mojaf-sa.com
                  </a>
                </p>
              </div>
              
              <div className="c-info-item">
                <FaPhone className="c-info-icon" />
                <p className="c-info-text">
                  <a href="tel:+966568401900" aria-label="Call Mojaf Saudi Arabia first number">
                    +966 56 840 1900
                  </a>
                  <br />
                  <a href="tel:+966566792904" aria-label="Call Mojaf Saudi Arabia second number">
                    +966 56 679 2904
                  </a>
                </p>
              </div>
              
              <div className="c-info-item">
                <FaMapMarkerAlt className="c-info-icon" />
                <p className="c-info-text">
                  <strong>Branches:</strong> Jeddah, Riyadh, Dammam, Khobar, Madinah, Makkah
                </p>
              </div>
            </div>
            
            {/* Contact Form Section */}
            <div className="c-contact-form" data-aos="fade-left">
              <h2 className="visually-hidden">Contact Form</h2>
              <form 
                action="https://formsubmit.co/Info@mojaf-sa.com" 
                method="POST"
                className="c-form"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://www.mojaf-sa.com/thanks" />
                <input type="hidden" name="_subject" value="New Contact Request from Mojaf Website" />
                
                <div className="c-form-group">
                  <label htmlFor="name" className="visually-hidden">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    placeholder="Your Name" 
                    className="c-form-input" 
                    required 
                  />
                </div>
                
                <div className="c-form-group">
                  <label htmlFor="email" className="visually-hidden">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    placeholder="Your Email" 
                    className="c-form-input" 
                    required 
                  />
                </div>
                
                <div className="c-form-group">
                  <label htmlFor="phone" className="visually-hidden">Your Phone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    placeholder="Your Phone" 
                    className="c-form-input" 
                  />
                </div>
                
                <div className="c-form-group">
                  <label htmlFor="message" className="visually-hidden">Your Message</label>
                  <textarea 
                    id="message"
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
        
        .c-info-text a {
          color: #555;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .c-info-text a:hover {
          color: #d4af37;
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
        
        /* Accessibility Styles */
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
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