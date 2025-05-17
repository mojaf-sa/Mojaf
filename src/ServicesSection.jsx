import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaSearchDollar,
  FaTruckMoving,
  FaWarehouse,
  FaHeadset,
  FaScrewdriver,
  FaBorderStyle,
  FaUserShield,
  FaDoorOpen,
  FaPlug,
  FaLayerGroup,
  FaCheck,
  FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const services = [
    {
      title: "Procurement Outsourcing",
      icon: <FaSearchDollar />,
      image: "https://images.pexels.com/photos/6804588/pexels-photo-6804588.jpeg",
      description: "We specialize in providing comprehensive Procurement Outsourcing Services to businesses seeking cost efficiency, operational excellence, and supply chain reliability.",
      highlights: [
        "Vendor identification and qualification",
        "Cost benchmarking and negotiation",
        "Order management and fulfillment",
        "Quality control and inspection",
        "Shipment coordination and tracking",
        "Customized reporting and analytics"
      ]
    },
    {
      title: "Logistics Coordination & Management",
      icon: <FaTruckMoving />,
      image: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg",
      description: "We offer Logistics Coordination & Management Services across the country to ensure smooth and efficient transportation of materials from suppliers to project sites.",
      highlights: [
        "Route planning and transport scheduling",
        "Coordination with transporters and warehouses",
        "Real-time tracking and delivery updates",
        "Handling of unloading and site delivery logistics",
        "Support for urgent and bulk deliveries"
      ]
    },
    {
      title: "Warehousing Services",
      icon: <FaWarehouse />,
      image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg",
      description: "We offer secure and strategically located warehousing services across the country, equipped to handle a wide range of building and construction materials.",
      highlights: [
        "Short-term and long-term storage",
        "Inventory control and stock management",
        "Efficient loading and unloading operations",
        "Order consolidation and dispatch support",
        "Compliance with safety standards"
      ]
    },
    {
      title: "After Sales Services Support",
      icon: <FaHeadset />,
      image: "https://images.pexels.com/photos/7658191/pexels-photo-7658191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "We are committed to delivering value beyond the initial sale with comprehensive after-sales services across the country.",
      highlights: [
        "Prompt assistance for product queries",
        "Guidance on material handling",
        "Support for returns or replacements",
        "Dedicated customer service team"
      ]
    }
  ];

 const products = [
  {
    title: "Flooring",
    icon: <FaLayerGroup />,
    image: "https://sarinaflooring.pk/wp-content/uploads/2024/08/laminate-06-scaled.webp",
    description: "Transform your spaces with our premium flooring solutions - from elegant hardwood to durable vinyl and everything in between.",
    features: [
      "Wide variety of materials & finishes",
      "Available in all standard & custom sizes",
      "Waterproof and scratch-resistant options",
      "Easy installation systems"
    ]
  },
  {
    title: "Skirting Board",
    icon: <FaBorderStyle />,
    image: "https://floor-family.com/cdn/shop/files/Sockelleiste-40mm-weiss-2.jpg?v=1685973232&width=640",
    description: "Perfect finishing touches with our extensive range of skirting boards to complement any interior style.",
    features: [
      "MDF, PVC, and wooden options",
      "Multiple profiles and heights available",
      "Moisture-resistant varieties",
      "Pre-primed and paintable selections"
    ]
  },
  {
    title: "Wall Panels/Wallpapers",
    icon: <FaBorderStyle />,
    image: "https://images.unsplash.com/photo-1701421052582-9f6935aff566?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMHBhbmVsfGVufDB8fDB8fHww",
    description: "Elevate your walls with our designer wall panels and wallpapers that combine aesthetics with functionality.",
    features: [
      "3D, acoustic, and decorative panels",
      "Premium quality wallpapers",
      "Easy-to-install systems",
      "Fire-rated options available"
    ]
  },
  {
    title: "Insulation",
    icon: <FaPlug />,
    image: "https://board.rockal.org/assets/dccf33ba-cfa3-4f93-aefc-6fb9de0f0b36?fit=cover&width=900&height=600&quality=80",
    description: "Energy-efficient insulation solutions for thermal, acoustic, and fire protection needs.",
    features: [
      "Comprehensive range of materials",
      "Various thickness options",
      "Eco-friendly alternatives",
      "High R-value products"
    ]
  },
  {
    title: "Boards",
    icon: <FaLayerGroup />,
    image: "https://timbuildwoodstock.co.za/wp-content/uploads/melamine-boards-1.png",
    description: "High-performance boards for construction, decoration, and specialized applications.",
    features: [
      "Plywood, MDF, particle boards",
      "Moisture-resistant varieties",
      "Fire-retardant options",
      "Custom sizes upon request"
    ]
  },
  {
    title: "Doors",
    icon: <FaDoorOpen />,
    image: "https://www.anglianhome.co.uk/-/media/ahi/product-catalogue/doors-and-porches/composite/designer/contemporary_anthracite-grey1.jpg?h=540&cw=665&c=1",
    description: "Entryways that impress with our collection of interior and exterior door solutions.",
    features: [
      "Wooden, steel, and WPC options",
      "Standard and custom sizes",
      "Soundproof and fire-rated doors",
      "Pre-hung and slab varieties"
    ]
  },
  {
    title: "Safety Products",
    icon: <FaUserShield />,
    image: "https://static-01.daraz.pk/p/bcadedc470bd8e04c34d66af58f03f8e.jpg",
    description: "Comprehensive safety solutions to protect workers and comply with regulations.",
    features: [
      "PPE and fall protection gear",
      "Site safety equipment",
      "High-visibility clothing",
      "Quality certified products"
    ]
  },
  {
    title: "Electronic",
    icon: <FaPlug />,
    image: "https://electrociti.pk/wp-content/uploads/2021/08/Best-1.png",
    description: "Reliable electrical components and accessories for residential and commercial projects.",
    features: [
      "Wiring and cabling solutions",
      "Switches and sockets",
      "Energy-efficient lighting",
      "Safety-certified products"
    ]
  },
  {
    title: "Screws/Fasteners",
    icon: <FaScrewdriver />,
    image: "https://www.tjlituo.com/wp-content/uploads/2022/01/our-screw-products-.jpg",
    description: "The strongest bond for every construction need with our premium fastening solutions.",
    features: [
      "Comprehensive size range",
      "Corrosion-resistant coatings",
      "Specialty fasteners available",
      "Bulk packaging options"
    ]
  }
];

  return (
    <div className="ss-main-container" id='ss-services'>
      {/* Services Header Section */}
      <section className="ss-header-section">
        <div className="ss-container">
          <div className="ss-header-content">
            <div className="ss-section-header" data-aos="fade-up">
              <div className="ss-accent-line" data-aos="flip-left" data-aos-duration="1500"></div>
              <span className="ss-section-subtitle">Our Services</span>
            </div>
            <h2 className="ss-section-title" data-aos="fade-up" data-aos-delay="100">
              Comprehensive Procurement & Logistics Solutions
            </h2>
            <p className="ss-section-description" data-aos="fade-up" data-aos-delay="200">
              We provide end-to-end procurement and logistics services to streamline your supply chain and ensure timely delivery of quality materials.
            </p>
          </div>
        </div>
      </section>

      {/* Services Features Section */}
      <section className="ss-features-section">
        <div className="ss-container">
          {services.map((service, index) => (
            <div className={`ss-feature ${index % 2 === 1 ? 'ss-reverse' : ''}`} key={index}>
              <div className="ss-feature-content" data-aos="fade-right">
                <h3 className="ss-feature-title">{service.title}</h3>
                <p className="ss-feature-description">{service.description}</p>
                <ul className="ss-feature-highlights">
                  {service.highlights.map((highlight, i) => (
                    <li className="ss-highlight-item" key={i}>
                      <div className="ss-accent-line-small"></div>
                      <FaCheck className="ss-highlight-icon" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ss-feature-image" data-aos="fade-left">
                <img src={service.image} alt={service.title} />
                <div className="ss-decorative-box ss-box-1"></div>
                <div className="ss-decorative-box ss-box-2"></div>
                <div className="ss-feature-icon">
                  {service.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="ss-products-section" id='ss-products-section'>
        <div className="ss-container">
          <div className="ss-section-header ss-center" data-aos="fade-up">
            <div className="ss-accent-line" data-aos="flip-left" data-aos-duration="1500"></div>
            <span className="ss-section-subtitle">Our Products</span>
          </div>
          <h2 className="ss-section-title ss-center" data-aos="fade-up" data-aos-delay="100">
            Construction & Building Solutions
          </h2>
          <p className="ss-section-description ss-center" data-aos="fade-up" data-aos-delay="200">
            Premium quality materials for all your construction needs
          </p>

          <div className="ss-products-grid">
            {products.map((product, index) => (
              <div className="ss-product-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="ss-product-image">
                  <img src={product.image} alt={product.title} />
                  <div className="ss-product-icon">
                    {product.icon}
                  </div>
                </div>
                <div className="ss-product-content">
                  <h3 className="ss-product-title">{product.title}</h3>
                  <p className="ss-product-description">{product.description}</p>
                  <ul className="ss-product-features">
                    {product.features.map((feature, i) => (
                      <li className="ss-feature-item" key={i}>
                          <div className="ss-accent-line-small"></div>
                        {/* <FaCheck className="ss-feature-icon" /> */}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
          <Link to="/all-products" className="ss-see-all-button">
          See All Products <FaArrowRight />
        </Link>
      </section>

      <style jsx>{`
        /* Base Styles */
        .ss-main-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          line-height: 1.6;
        }

        .ss-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }

        /* Header Section */
        .ss-header-section {
          padding: 60px 0 40px;
          background-color: #f9f9f9;
          text-align: center;
        }

        .ss-section-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .ss-accent-line {
          width: 24px;
          height: 2px;
          background-color: #c19b2c;
        }

        .ss-accent-line-small {
          width: 16px;
          height: 2px;
          background-color: #c19b2c;
          margin-right: 10px;
        }

        .ss-section-subtitle {
          color: #c19b2c;
          font-size: 1rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .ss-section-title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 20px;
          line-height: 1.2;
          color: #222;
        }

        .ss-center {
          text-align: center;
        }

        .ss-section-description {
          max-width: 700px;
          margin: 0 auto 30px;
          color: #666;
          font-size: 1.1rem;
        }

        /* Features Section */
        .ss-features-section {
          padding: 40px 0;
        }

        .ss-feature {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-bottom: 60px;
          align-items: center;
        }

        .ss-reverse {
          flex-direction: column-reverse;
        }

        .ss-feature-content {
          flex: 1;
          width: 100%;
        }

        .ss-feature-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: #222;
        }

        .ss-feature-description {
          color: #666;
          margin-bottom: 20px;
          font-size: 1rem;
          line-height: 1.7;
        }

        .ss-feature-highlights {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ss-highlight-item {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          font-size: 0.95rem;
          color: #444;
        }

        .ss-highlight-icon {
          color: #c19b2c;
          margin-right: 10px;
          font-size: 0.9rem;
        }

        .ss-feature-image {
          flex: 1;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          width: 100%;
          height: 300px;
        }

        .ss-feature-image img {
          width: 100%;
          height: 100%;
          display: block;
          position: relative;
          z-index: 2;
          object-fit: cover;
        }

        .ss-decorative-box {
          position: absolute;
          background-color: #c19b2c;
          border-radius: 10px;
          z-index: 1;
        }

        .ss-box-1 {
          width: 60px;
          height: 60px;
          top: -15px;
          left: -15px;
          animation: ss-float 3s ease-in-out infinite;
        }

        .ss-box-2 {
          width: 30px;
          height: 30px;
          top: -25px;
          right: 15px;
          border: 1px solid #c19b2c;
          background-color: transparent;
          animation: ss-float 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .ss-feature-icon {
          position: absolute;
          bottom: 15px;
          right: 15px;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
          z-index: 3;
          color: #c19b2c;
          font-size: 1rem;
        }

        /* Products Section */
        .ss-products-section {
          padding: 60px 0;
          background-color: #f9f9f9;
        }

        .ss-products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 25px;
          margin-top: 40px;
        }

        .ss-product-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .ss-product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .ss-product-image {
          position: relative;
          height: 200px;
        }

        .ss-product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ss-product-icon {
          position: absolute;
          top: 15px;
          right: 15px;
          background: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
          color: #c19b2c;
          font-size: 0.9rem;
        }

        .ss-product-content {
          padding: 20px;
        }

        .ss-product-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: #222;
        }

        .ss-product-description {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .ss-product-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ss-feature-item {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          font-size: 0.85rem;
          color: #444;
        }

        .ss-feature-icon {
          color: #c19b2c;
          margin-right: 8px;
          font-size: 0.8rem;
        }

        /* Animations */
        @keyframes ss-float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        /* Responsive Styles */
        @media (min-width: 768px) {
          .ss-header-section {
            padding: 80px 0 50px;
          }

          .ss-section-title {
            font-size: 2.5rem;
          }

          .ss-feature {
            flex-direction: row;
            gap: 50px;
            margin-bottom: 80px;
          }

          .ss-reverse {
            flex-direction: row-reverse;
          }

          .ss-feature-image {
            height: 350px;
          }

          .ss-feature-content {
            width: auto;
          }

          .ss-feature-title {
            font-size: 1.8rem;
          }
        }

        @media (min-width: 992px) {
          .ss-section-title {
            font-size: 3rem;
          }

          .ss-feature-image {
            height: 400px;
          }

          .ss-products-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (max-width: 480px) {
          .ss-section-title {
            font-size: 1.8rem;
          }

          .ss-feature {
            margin-bottom: 50px;
          }

          .ss-feature-image {
            height: 250px;
          }

          .ss-products-grid {
            grid-template-columns: 1fr;
          }
        }
        .ss-see-all-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 0 auto;
          background: #2c3e50;
          color: white;
          padding: 12px 25px;
          border-radius: 4px;
          text-decoration: none;
          width: fit-content;
          transition: background 0.3s ease, transform 0.2s ease;
          font-weight: 500;
          margin-top: 40px;
        }

        .ss-see-all-button:hover {
          background: #1a252f;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default ServicesSection;