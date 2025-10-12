import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { 
  FaCheckCircle, FaTruck, FaTag, FaHeadset,
  FaHome, FaBorderStyle, FaVectorSquare, FaSnowflake,
  FaThLarge, FaDoorOpen, FaShieldAlt, FaBolt, FaScrewdriver
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();
  const productCategories = [
    { id: 1, name: 'Flooring', icon: <FaHome />, description: 'Premium quality flooring solutions for residential and commercial spaces' },
    { id: 2, name: 'Skirting Board', icon: <FaBorderStyle />, description: 'Elegant and durable skirting boards to complete your interior design' },
    { id: 3, name: 'Wall Panels/Wallpapers', icon: <FaVectorSquare />, description: 'Stylish wall coverings to transform any space with texture and pattern' },
    { id: 4, name: 'Insulation', icon: <FaSnowflake />, description: 'Energy-efficient insulation materials for temperature and sound control' },
    { id: 5, name: 'Boards', icon: <FaThLarge />, description: 'High-quality construction boards for various building applications' },
    { id: 6, name: 'Doors', icon: <FaDoorOpen />, description: 'Durable and secure door solutions for all types of properties' },
    { id: 7, name: 'Safety Products', icon: <FaShieldAlt />, description: 'Reliable safety equipment to protect workers and comply with regulations' },
    { id: 8, name: 'Electrical Items', icon: <FaBolt />, description: 'Comprehensive range of electrical components for construction needs' },
    { id: 9, name: 'Screws/Fasteners', icon: <FaScrewdriver />, description: 'High-performance fastening solutions for all construction projects' }
  ];

  const handleQuoteClick = () => {
    navigate('/contact');
  };

  return (
    <HelmetProvider>
      <div className="s-services-container">
        <Helmet>
          <title>MOJAF - Premium Construction Materials & Services in Saudi Arabia</title>
          <meta name="description" content="MOJAF offers high-quality construction materials including flooring, wall panels, insulation, doors, and safety products in Saudi Arabia. Your trusted procurement partner." />
          <meta name="keywords" content="construction materials, building supplies, Saudi Arabia, flooring, wall panels, insulation, doors, safety products, electrical items, fasteners" />
          <meta property="og:title" content="MOJAF - Premium Construction Materials in Saudi Arabia" />
          <meta property="og:description" content="Your trusted partner for high-quality construction materials and building supplies in Saudi Arabia." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.mojaf-sa.com/services" />
          <meta property="og:image" content="https://www.mojaf-sa.com/og-image.jpg" />
          <meta property="og:site_name" content="MOJAF" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="MOJAF - Premium Construction Materials in Saudi Arabia" />
          <meta name="twitter:description" content="Your trusted partner for high-quality construction materials and building supplies in Saudi Arabia." />
          <meta name="twitter:image" content="https://www.mojaf-sa.com/twitter-image.jpg" />
          <link rel="canonical" href="https://www.mojaf-sa.com/services" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>

        {/* HERO */}
        <section className="s-hero" id="home" style={{backgroundImage: "url('/herobg.avif')" }}>
          <div className="s-container">
            <div className="s-hero-content" data-aos="fade-up">
              <h1>Your Procurement Partner</h1>
              <p>We deliver your promise with high-quality products and reliable service.</p>
              <a href="#contact" onClick={handleQuoteClick} className="s-btn">Get in Touch</a>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="s-why-choose-us">
          <div className="s-container">
            <h2 className="s-section-title" data-aos="fade-up">Why Choose MOJAF</h2>

            {/* ⭐ Popular Guides — INTERNAL LINKS (SPC / Skirting / Fasteners) */}
            <div style={{margin:'24px 0 36px', padding:'14px 16px', border:'1px solid #eee', borderRadius:'10px', background:'#fafafa'}}>
              <h3 style={{margin:'0 0 8px', color:'#1f2937'}}>⭐ Popular Guides by City</h3>

              <div style={{display:'grid', gap:'16px', gridTemplateColumns:'repeat(auto-fit, minmax(260px,1fr))'}}>
                {/* SPC */}
                <div>
                  <strong>SPC Flooring</strong>
                  <ul style={{margin:'6px 0 0', paddingLeft:'18px', lineHeight:'1.6'}}>
                    <li><a href="/blog/riyadh-spc-flooring-supplier.html">SPC flooring supplier in Riyadh — stock, specs & delivery</a></li>
                    <li><a href="/blog/jeddah-spc-flooring-supplier.html">SPC flooring supplier in Jeddah — coastal projects</a></li>
                    <li><a href="/blog/dammam-spc-flooring-supplier.html">SPC flooring supplier in Dammam/Khobar — industrial & retail</a></li>
                  </ul>
                </div>

                {/* Skirting */}
                <div>
                  <strong>Wall Skirting</strong>
                  <ul style={{margin:'6px 0 0', paddingLeft:'18px', lineHeight:'1.6'}}>
                    <li><a href="/blog/riyadh-wall-skirting-supplier.html">Wall skirting supplier in Riyadh — MDF & PS profiles</a></li>
                    <li><a href="/blog/jeddah-wall-skirting-supplier.html">Wall skirting supplier in Jeddah — MDF & PS</a></li>
                    <li><a href="/blog/dammam-wall-skirting-supplier.html">Wall skirting supplier in Dammam/Khobar — MDF & PS</a></li>
                  </ul>
                </div>

                {/* Fasteners */}
                <div>
                  <strong>Screws & Fasteners</strong>
                  <ul style={{margin:'6px 0 0', paddingLeft:'18px', lineHeight:'1.6'}}>
                    <li><a href="/blog/riyadh-screws-fasteners-supplier.html">Screws & fasteners supplier in Riyadh — get the spec right</a></li>
                    <li><a href="/blog/jeddah-screws-fasteners-supplier.html">Screws & fasteners supplier in Jeddah — coastal protection</a></li>
                    <li><a href="/blog/dammam-screws-fasteners-supplier.html">Screws & fasteners supplier in Dammam — MEP & fit-out</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FEATURES GRID */}
            <div className="s-features-grid">
              {productCategories.map((product) => (
                <div className="s-feature" data-aos="fade-up" data-aos-delay="100" key={product.id}>
                  <div className="s-icon">{product.icon}</div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              ))}
              <div className="s-feature" data-aos="fade-up" data-aos-delay="100">
                <div className="s-icon"><FaCheckCircle /></div>
                <h3>Quality Assurance</h3>
                <p>Our dedicated quality assurance team ensures all products meet the highest industry standards.</p>
              </div>
              <div className="s-feature" data-aos="fade-up" data-aos-delay="200">
                <div className="s-icon"><FaTruck /></div>
                <h3>Fast Delivery</h3>
                <p>We pride ourselves on fast and reliable delivery to keep your projects on schedule.</p>
              </div>
              <div className="s-feature" data-aos="fade-up" data-aos-delay="300">
                <div className="s-icon"><FaTag /></div>
                <h3>Competitive Pricing</h3>
                <p>Get high-quality products at competitive prices without compromising on quality.</p>
              </div>
              <div className="s-feature" data-aos="fade-up" data-aos-delay="400">
                <div className="s-icon"><FaHeadset /></div>
                <h3>Customer Support</h3>
                <p>Our comprehensive customer support is always ready to assist you with any inquiries.</p>
              </div>
            </div>
          </div>
        </section>

        <div style={{marginTop: 40}} />

        <style jsx>{`
          /* Services Component Styles */
          .s-services-container { font-family: 'Poppins', sans-serif; color: #555555; line-height: 1.6; }
          .s-container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px; }

          /* Hero Section */
          .s-hero { height: 100vh; min-height: 700px; background-size: cover; background-position: center; background-repeat: no-repeat; display: flex; align-items: center; position: relative; margin-top: 80px; }
          .s-hero::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(10, 37, 64, 0.7); }
          .s-hero-content { position: relative; z-index: 1; color: #ffffff; max-width: 600px; }
          .s-hero-content h1 { font-size: 3.5rem; color: #ffffff; margin-bottom: 20px; font-weight: 600; line-height: 1.2; }
          .s-hero-content p { font-size: 1.2rem; margin-bottom: 30px; color: rgba(255, 255, 255, 0.9); }
          .s-btn { display: inline-block; background-color: #d4af37; color: #ffffff; padding: 12px 30px; border-radius: 8px; font-weight: 500; transition: all 0.3s ease; border: none; cursor: pointer; }
          .s-btn:hover { background-color: #c19b2c; transform: translateY(-3px); box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3); }

          /* Why Choose Us Section */
          .s-why-choose-us { padding: 100px 0; background-color: #f5f5f5; }
          .s-section-title { font-size: 2.5rem; margin-bottom: 24px; text-align: center; position: relative; color: #333333; font-weight: 600; }
          .s-section-title::after { content: ''; position: absolute; bottom: -15px; left: 50%; transform: translateX(-50%); width: 80px; height: 3px; background-color: #d4af37; }

          /* Features + Guides */
          .s-features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }
          .s-feature { background-color: #ffffff; padding: 30px; border-radius: 8px; text-align: center; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; }
          .s-feature:hover { transform: translateY(-10px); }
          .s-icon { width: 70px; height: 70px; background-color: rgba(212, 175, 55, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: #d4af37; font-size: 1.8rem; }

          /* Responsive */
          @media (max-width: 992px) {
            .s-section-title { font-size: 2rem; }
            .s-hero-content h1 { font-size: 3rem; }
          }
          @media (max-width: 768px) {
            .s-hero { min-height: 600px; }
            .s-hero-content h1 { font-size: 2.5rem; }
            .s-hero-content p { font-size: 1rem; }
            .s-section-title { font-size: 1.8rem; margin-bottom: 40px; }
          }
          @media (max-width: 576px) {
            .s-section-title { font-size: 1.6rem; }
            .s-hero-content h1 { font-size: 2rem; }
            .s-btn { padding: 10px 25px; }
            .s-features-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </div>
    </HelmetProvider>
  );
}

export default Services;
