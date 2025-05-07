import React from 'react';
import './Header.css'; 
import {
  FaCheckCircle,
  FaTruck,
  FaTag,
  FaHeadset,
  FaScrewdriver,
  FaBorderStyle,
  FaUserShield,
  FaDoorOpen,
  FaPlug,
  FaLayerGroup
} from 'react-icons/fa';
import Contact from './Contact';
import Footer from './Footer';
import ServicesSection from './ServicesSection';
import ProductShowcase from './ProductShowcase';
import Header from './Header';



function Services() {
  return (
    <div>
      {/* <header className="header">
        <div className="container">
          <div className="logo">
            <h1>MOJAF</h1>
            <span>Your Procurement Partner</span>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#hero1">Home</a></li>
              <li><a href="#in-info">About</a></li>
              <li><a href="#ss-services">Services</a></li>
              <li><a href="#pp-products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="mobile-menu-btn">
              <i className="fas fa-bars"></i>
            </div>
          </nav>
        </div>
      </header> */}
     <Header />
      <div id="hero1"></div>
      <div id="info1"></div>

      <div className="mobile-menu">
        <ul>
          <li><a href="#hero1">Home</a></li>
          <li><a href="#in-info">About</a></li>
          <li><a href="#ss-services">Services</a></li>
          <li><a href="#pp-products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <section className="hero" id="home" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1>Your Procurement Partner</h1>
            <p>We deliver your promise with high-quality products and reliable service.</p>
            <a href="#contact" className="btn">Get in Touch</a>
          </div>
        </div>
      </section>

     <section className="why-choose-us">
     <div className="container">
       <h2 className="section-title" data-aos="fade-up">Why Choose MOJAF</h2>
       <div className="features-grid">
         <div className="feature" data-aos="fade-up" data-aos-delay="100">
           <div className="icon"><FaCheckCircle /></div>
           <h3>Quality Assurance</h3>
           <p>Our dedicated quality assurance team ensures all products meet the highest industry standards.</p>
         </div>
         <div className="feature" data-aos="fade-up" data-aos-delay="200">
           <div className="icon"><FaTruck /></div>
           <h3>Fast Delivery</h3>
           <p>We pride ourselves on fast and reliable delivery to keep your projects on schedule.</p>
         </div>
         <div className="feature" data-aos="fade-up" data-aos-delay="300">
           <div className="icon"><FaTag /></div>
           <h3>Competitive Pricing</h3>
           <p>Get high-quality products at competitive prices without compromising on quality.</p>
         </div>
         <div className="feature" data-aos="fade-up" data-aos-delay="400">
           <div className="icon"><FaHeadset /></div>
           <h3>Customer Support</h3>
           <p>Our comprehensive customer support is always ready to assist you with any inquiries.</p>
         </div>
       </div>
     </div>
   </section>

  <ServicesSection />

<ProductShowcase />
     <Contact />

     <Footer />
    </div>
  );
}

export default Services;
