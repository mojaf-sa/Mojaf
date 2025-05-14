import { 
    FaScrewdriver,
    FaBorderStyle,
    FaUserShield,
    FaDoorOpen,
    FaPlug,
    FaLayerGroup,
    FaCheck,
    FaSearchDollar,
    FaTruckMoving,
    FaWarehouse,
    FaHeadset
  } from 'react-icons/fa';
  
  const ServicesSection = () => {
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
        title: "Screws & Fasteners",
        icon: <FaScrewdriver />,
        image: "https://images.pexels.com/photos/4792494/pexels-photo-4792494.jpeg",
        description: "Premium screws made from high-grade steel with anti-corrosion coating.",
        features: [
          "Custom Fastener Types",
          "Precision Threading",
          "Anti-Corrosion Coating"
        ]
      },
      {
        title: "MDF & PVC Skirting",
        icon: <FaBorderStyle />,
        image: "https://images.pexels.com/photos/5824519/pexels-photo-5824519.jpeg",
        description: "Durable skirting boards for sleek finish and lasting protection.",
        features: [
          "Flooring Installation Assistance",
          "Skirting Design Options",
          "Moisture-Resistant Materials"
        ]
      },
      {
        title: "Safety Equipment",
        icon: <FaUserShield />,
        image: "https://images.pexels.com/photos/5325635/pexels-photo-5325635.jpeg",
        description: "Built for tough environments with rugged design and reinforced protection.",
        features: [
          "High-Visibility Safety Gear",
          "Reinforced Protection",
          "Comfortable Design"
        ]
      },
      {
        title: "Doors",
        icon: <FaDoorOpen />,
        image: "https://images.pexels.com/photos/3958961/pexels-photo-3958961.jpeg",
        description: "Wooden and steel doors offering durability, beauty, and security.",
        features: [
          "Fire-Rated Steel Doors",
          "Waterproof WPC Doors",
          "Sustainable Wooden Doors"
        ]
      },
      {
        title: "Electrical Items",
        icon: <FaPlug />,
        image: "https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg",
        description: "Premium safety-tested materials for electrical reliability.",
        features: [
          "Socket & Fixture Sets",
          "Safety-Tested Components",
          "High Performance Solutions"
        ]
      },
      {
        title: "Flooring",
        icon: <FaLayerGroup />,
        image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
        description: "Vinyl and timber options for beauty and long-term durability.",
        features: [
          "Vinyl vs Timber Guide",
          "Waterproof Solutions",
          "Easy Installation"
        ]
      }
    ];
  
    return (
      <div className="ss-main-container" id='ss-services'>
        {/* Services Section at Top */}
        <section className="ss-services-section">
          <div className="ss-container">
            <h2 className="ss-section-title">Our Services</h2>
            <div className="ss-services-grid">
              {services.map((service, index) => (
                <div key={index} className="ss-service-card">
                  <div className="ss-service-image-container">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="ss-service-image"
                    />
                    <div className="ss-service-icon">
                      {service.icon}
                    </div>
                  </div>
                  <div className="ss-service-content">
                    <h3 className="ss-service-title">{service.title}</h3>
                    <p className="ss-service-description">{service.description}</p>
                    <ul className="ss-service-highlights">
                      {service.highlights.map((highlight, i) => (
                        <li key={i} className="ss-highlight-item">
                          <FaCheck className="ss-highlight-icon" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
    
        <section className="ss-products-section">
          <div className="ss-container">
            <h2 className="ss-section-title">Construction & Building Solutions</h2>
            <div className="ss-products-grid">
              {products.map((product, index) => (
                <div key={index} className="ss-product-card">
                  <div className="ss-product-image-container">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="ss-product-image"
                    />
                    <div className="ss-product-icon">
                      {product.icon}
                    </div>
                  </div>
                  <div className="ss-product-content">
                    <h3 className="ss-product-title">{product.title}</h3>
                    <p className="ss-product-description">{product.description}</p>
                    <ul className="ss-product-features">
                      {product.features.map((feature, i) => (
                        <li key={i} className="ss-feature-item">
                          <FaCheck className="ss-feature-icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        <style jsx>{`
          .ss-main-container {
            font-family: 'Arial', sans-serif;
            color: #333;
          }
          
          .ss-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .ss-header {
            text-align: center;
            margin-bottom: 40px;
          }
          
          .ss-title {
            font-size: 2.5rem;
            color: #2c3e50;
            margin-bottom: 10px;
          }
          
          .ss-subtitle {
            font-size: 1.2rem;
            color: #7f8c8d;
          }
          
          .ss-section-title {
            font-size: 2rem;
            color: #2c3e50;
            text-align: center;
            margin-bottom: 40px;
            position: relative;
          }
          
          .ss-section-title::after {
            content: '';
            display: block;
            width: 80px;
            height: 3px;
            background: #d4af37;
            margin: 15px auto;
          }
          
          .ss-services-grid,
          .ss-products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
            margin-bottom: 60px;
          }
          
          .ss-service-card,
          .ss-product-card {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .ss-service-card:hover,
          .ss-product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          }
          
          .ss-service-image-container,
          .ss-product-image-container {
            position: relative;
            height: 220px;
          }
          
          .ss-service-image,
          .ss-product-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .ss-service-icon,
          .ss-product-icon {
            position: absolute;
            top: 15px;
            right: 15px;
            background: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
          
          .ss-service-icon svg,
          .ss-product-icon svg {
            color: #d4af37;
            font-size: 1.5rem;
          }
          
          .ss-service-content,
          .ss-product-content {
            padding: 20px;
          }
          
          .ss-service-title,
          .ss-product-title {
            font-size: 1.4rem;
            color: #2c3e50;
            margin-bottom: 10px;
          }
          
          .ss-service-description,
          .ss-product-description {
            color: #7f8c8d;
            margin-bottom: 15px;
            line-height: 1.6;
          }
          
          .ss-service-highlights,
          .ss-product-features {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          
          .ss-highlight-item,
          .ss-feature-item {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            color: #34495e;
            font-size: 0.95rem;
          }
          
          .ss-highlight-icon,
          .ss-feature-icon {
            color: #d4af37;
            margin-right: 10px;
            font-size: 1rem;
          }
          
          @media (max-width: 768px) {
            .ss-services-grid,
            .ss-products-grid {
              grid-template-columns: 1fr;
            }
            
            .ss-title {
              font-size: 2rem;
            }
            
            .ss-section-title {
              font-size: 1.6rem;
            }
          }
        `}</style>
      </div>
    );
  };
  
  export default ServicesSection;