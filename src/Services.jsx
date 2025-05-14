import React from 'react';
import './Header.css'; 
import Contact from './Contact';
import Footer from './Footer';
import ServicesSection from './ServicesSection';
import ProductShowcase from './ProductShowcase';
import Header from './Header';
import { 
  FaCheckCircle, FaTruck, FaTag, FaHeadset,
  FaHome, FaBorderStyle, FaVectorSquare, FaSnowflake,
  FaThLarge, FaDoorOpen, FaShieldAlt, FaBolt, FaScrewdriver
} from 'react-icons/fa';



function Services() {
  const productCategories = [
    {
      id: 1,
      name: 'Flooring',
      icon: <FaHome />,
      description: 'Premium quality flooring solutions for residential and commercial spaces'
    },
    {
      id: 2,
      name: 'Skirting Board',
      icon: <FaBorderStyle />,
      description: 'Elegant and durable skirting boards to complete your interior design'
    },
    {
      id: 3,
      name: 'Wall Panels/Wallpapers',
      icon: <FaVectorSquare />,
      description: 'Stylish wall coverings to transform any space with texture and pattern'
    },
    {
      id: 4,
      name: 'Insulation',
      icon: <FaSnowflake />,
      description: 'Energy-efficient insulation materials for temperature and sound control'
    },
    {
      id: 5,
      name: 'Boards',
      icon: <FaThLarge />,
      description: 'High-quality construction boards for various building applications'
    },
    {
      id: 6,
      name: 'Doors',
      icon: <FaDoorOpen />,
      description: 'Durable and secure door solutions for all types of properties'
    },
    {
      id: 7,
      name: 'Safety Products',
      icon: <FaShieldAlt />,
      description: 'Reliable safety equipment to protect workers and comply with regulations'
    },
    {
      id: 8,
      name: 'Electrical Items',
      icon: <FaBolt />,
      description: 'Comprehensive range of electrical components for construction needs'
    },
    {
      id: 9,
      name: 'Screws/Fasteners',
      icon: <FaScrewdriver />,
      description: 'High-performance fastening solutions for all construction projects'
    }
  ];
  return (
    <div>
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
         {productCategories.map((product) => (
               <div className="feature" data-aos="fade-up" data-aos-delay="100">
           <div className="icon">{product?.icon}</div>
           <h3>{product?.name}</h3>
           <p>{product?.description}</p>
         </div>
            ))}
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
 
  <div style={{marginTop:40}} />
  <ServicesSection />

<ProductShowcase />
     <Contact />

     <Footer />
    </div>
  );
}

export default Services;
