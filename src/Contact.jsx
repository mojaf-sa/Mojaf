import React from 'react'
import './Header.css'; 
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

function Contact() {
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
          <form id="contactForm">
            <div className="form-group">
              <input type="text" id="name" placeholder="Your Name" required/>
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Your Email" required/>
            </div>
            <div className="form-group">
              <input type="tel" id="phone" placeholder="Your Phone"/>
            </div>
            <div className="form-group">
              <textarea id="message" placeholder="Your Message" required></textarea>
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