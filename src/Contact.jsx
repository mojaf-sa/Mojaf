import React, { useEffect } from 'react'
import './Header.css'; 
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useLocation } from 'react-router-dom';

function Contact() {

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('submitted') === 'true') {
      alert('Your request has been submitted successfully!');
      window.history.replaceState({}, document.title, location.pathname); // remove query param
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await fetch("https://formspree.io/f/eayzay001@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
  
    if (res.ok) {
      alert("Your request has been submitted successfully!");
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert("There was an error. Please try again.");
    }
  };
  
  return (
    <div>
    <section className="contact" id="contact">
    <div className="container">
      <h2 className="section-title" data-aos="fade-up">Contact Us</h2>
      <div className="contact-grid">
        <div className="contact-info" data-aos="fade-right">
          <h3>Get in Touch</h3>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>Info@mojaf-sa.com</p>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <p>+966 56 840 1900<br/>+966 56 679 2904</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>Branches: Jeddah, Riyadh, Dammam</p>
          </div>
        </div>
        <div className="contact-form" data-aos="fade-left">
        <form
      action="https://formsubmit.co/eayzay001@gmail.com"
      method="POST"
    >
      {/* Protect against bots */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="http://localhost:5173/thanks" />
      
      <div className="form-group">
        <input type="text" name="name" placeholder="Your Name" required />
      </div>
      <div className="form-group">
        <input type="email" name="email" placeholder="Your Email" required />
      </div>
      <div className="form-group">
        <input type="tel" name="phone" placeholder="Your Phone" />
      </div>
      <div className="form-group">
        <textarea name="message" placeholder="Your Message" required></textarea>
      </div>
      <button type="submit" className="btn">Send Message</button>
    </form>

        </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default Contact