import React, { useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';

function Contact() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const params = new URLSearchParams(location.search);
    if (params.get('submitted') === 'true') {
      alert('Your request has been submitted successfully!');
      window.history.replaceState({}, document.title, location.pathname);
    }
  }, [location]);

  return (
    <div className="c-contact-container">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact MOJAF Saudi Arabia - Construction & Engineering Services</title>
        <meta
          name="description"
          content="Get in touch with MOJAF Trading (Establishment Mohamed Abdallah Mohamed Al-Jifri for Trading). Main office: Q3FW+2JG, Al Shera'a, Jeddah 23816, Saudi Arabia. Call +966 56 840 1900 or email info@mojaf-sa.com."
        />
        <meta
          name="keywords"
          content="MOJAF Trading contact, construction Saudi Arabia, engineering services, contact MOJAF, Jeddah address, Riyadh, Dammam"
        />
        <meta property="og:title" content="Contact MOJAF Saudi Arabia - Construction & Engineering Services" />
        <meta property="og:description" content="Reach MOJAF Trading at our Jeddah office or by phone/email. We serve Jeddah, Riyadh, Dammam and more." />
        <meta property="og:url" content="https://www.mojaf-sa.com/contact" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.mojaf-sa.com/contact" />
      </Helmet>

      <section className="c-contact-section" id="contact">
        <div className="c-contact-wrapper">
          <h1 className="c-section-title" data-aos="fade-up">Contact MOJAF Saudi Arabia</h1>

          <div className="c-contact-grid">
            {/* Contact Info Section */}
            <div className="c-contact-info" data-aos="fade-right">
              <h2 className="c-info-title">Get in Touch With Our Team</h2>

              <div className="c-info-item">
                <FaEnvelope className="c-info-icon" />
                <p className="c-info-text">
                  <a href="mailto:info@mojaf-sa.com" aria-label="Email MOJAF Saudi Arabia">
                    info@mojaf-sa.com
                  </a>
                </p>
              </div>

              <div className="c-info-item">
                <FaPhone className="c-info-icon" />
                <p className="c-info-text">
                  <a href="tel:+966568401900" aria-label="Call MOJAF Saudi Arabia first number">
                    +966 56 840 1900
                  </a>
                  <br />
                  <a href="tel:+966566792904" aria-label="Call MOJAF Saudi Arabia second number">
                    +966 56 679 2904
                  </a>
                </p>
              </div>

              <div className="c-info-item">
                <FaMapMarkerAlt className="c-info-icon" />
                <p className="c-info-text">
                  <strong>Main Office:</strong> Q3FW+2JG, Al Shera&apos;a, Jeddah 23816, Saudi Arabia
                  <br />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Q3FW%2B2JG%2C%20Al%20Shera%27a%2C%20Jeddah%2023816%2C%20Saudi%20Arabia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Google Maps
                  </a>
                  <br />
                  <strong>Service Coverage:</strong> Jeddah · Riyadh · Dammam · Khobar · Madinah · Makkah
                </p>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="c-contact-form" data-aos="fade-left">
              <h2 className="visually-hidden">Contact Form</h2>
              <form
                action="https://formsubmit.co/info@mojaf-sa.com"
                method="POST"
                className="c-form"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://www.mojaf-sa.com/thanks" />
                <input type="hidden" name="_subject" value="New Contact Request from MOJAF Website" />

                <div className="c-form-group">
                  <label htmlFor="name" className="visually-hidden">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" className="c-form-input" required />
                </div>

                <div className="c-form-group">
                  <label htmlFor="email" className="visually-hidden">Your Email</label>
                  <input type="email" id="email" name="email" placeholder="Your Email" className="c-form-input" required />
                </div>

                <div className="c-form-group">
                  <label htmlFor="phone" className="visually-hidden">Your Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="Your Phone" className="c-form-input" />
                </div>

                <div className="c-form-group">
                  <label htmlFor="message" className="visually-hidden">Your Message</label>
                  <textarea id="message" name="message" placeholder="Your Message" className="c-form-textarea" required></textarea>
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
        .c-contact-section { padding: 4rem 1rem; background-color: #f5f5f5; }
        .c-contact-wrapper { max-width: 1200px; margin: 0 auto; }
        .c-section-title { text-align: center; font-size: 2.5rem; margin-bottom: 3rem; color: #222; position: relative; }
        .c-section-title:after { content: ''; display: block; width: 80px; height: 3px; background: #d4af37; margin: 0.5rem auto; }

        /* Grid */
        .c-contact-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; }
        @media (min-width: 768px) { .c-contact-grid { grid-template-columns: 1fr 1fr; } }

        /* Info */
        .c-contact-info { background: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .c-info-title { font-size: 1.5rem; margin-bottom: 1.5rem; color: #222; position: relative; padding-bottom: 0.5rem; }
        .c-info-title:after { content: ''; position: absolute; left: 0; bottom: 0; width: 50px; height: 2px; background: #d4af37; }
        .c-info-item { display: flex; align-items: flex-start; margin-bottom: 1.5rem; }
        .c-info-icon { color: #d4af37; margin-right: 1rem; font-size: 1.2rem; margin-top: 0.2rem; }
        .c-info-text { margin: 0; font-size: 1rem; color: #555; }
        .c-info-text a { color: #555; text-decoration: none; transition: color 0.3s; }
        .c-info-text a:hover { color: #d4af37; }

        /* Form */
        .c-contact-form { background: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .c-form-group { margin-bottom: 1.5rem; }
        .c-form-input, .c-form-textarea {
          width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; transition: all 0.3s ease;
        }
        .c-form-input:focus, .c-form-textarea:focus {
          outline: none; border-color: #d4af37; box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
        }
        .c-form-textarea { min-height: 120px; resize: vertical; }

        /* Button */
        .c-submit-btn {
          background: #d4af37; color: #fff; border: none; padding: 0.75rem 2rem; font-size: 1rem; border-radius: 4px; cursor: pointer; transition: all 0.3s ease; width: 100%; font-weight: 500;
        }
        .c-submit-btn:hover { background: #c19b2e; transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.1); }

        /* A11y */
        .visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }

        /* Responsive */
        @media (max-width: 480px) {
          .c-section-title { font-size: 2rem; }
          .c-contact-info, .c-contact-form { padding: 1.5rem; }
        }
      `}</style>
    </div>
  );
}

export default Contact;
