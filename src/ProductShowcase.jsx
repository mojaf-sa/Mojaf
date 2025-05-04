import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaQuoteRight, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sample product data (replace with your actual data)
  const featuredProducts = [
    {
      id: 1,
      category: "Flooring",
      name: "Vinyl/PVC Flooring",
      description: "High-quality vinyl flooring with various thickness options, perfect for residential and commercial spaces. Our PVC flooring is durable, waterproof, and available in a wide range of designs.",
      specs: "Thickness: 1.5-3mm, Width: 2-4m, Length: 20-30m, Wear Layer: 0.3-0.7mm, Surface Treatment: UV Coated",
      images: [
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
        "https://images.pexels.com/photos/5824519/pexels-photo-5824519.jpeg",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
      ],
      link: "https://moaoflooring.en.alibaba.com/"
    },
    {
      id: 2,
      category: "Doors",
      name: "Steel Security Doors",
      description: "High-strength, corrosion-resistant steel doors with advanced locking mechanisms. These doors provide excellent security while maintaining aesthetic appeal for modern homes and offices.",
      specs: "Materials: Cold-rolled steel (1.2mm thickness), Core: Honeycomb paper/fireproof foam, Lock: Multi-point locking system, Finish: Powder coating, Size: Customizable",
      images: [
        "https://images.pexels.com/photos/3958961/pexels-photo-3958961.jpeg",
        "https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg",
        "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg"
      ],
      link: "https://www.alibaba.com/product-detail/High-Quality-2025-New-Zhejiang-Factory_1601395069517.html"
    },
    {
      id: 3,
      category: "Wall Panels",
      name: "3D Wall Panels",
      description: "Decorative 3D wall panels that add texture and style to any interior space. Made from eco-friendly PVC material that's lightweight and easy to install.",
      specs: "Material: PVC, Size: 500x500mm or 600x600mm, Thickness: 8-12mm, Weight: 1.5-2.5kg/sqm, Fire Rating: B1",
      images: [
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
        "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
        "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg"
      ],
      link: "https://www.alibaba.com/product-detail/3D-Wall-Panels-Modern-PVC-Wall_1600180280284.html"
    },
    {
      id: 4,
      category: "Skirting Board",
      name: "PVC Skirting Board",
      description: "Modern PVC skirting boards that provide a clean finish between walls and floors. Resistant to moisture, termites, and easy to maintain.",
      specs: "Height: 50-120mm, Length: 2.4-3m, Material: PVC, Colors: White, Wood Grain, or Custom, Installation: Clip-on or glue",
      images: [
        "https://images.pexels.com/photos/6758771/pexels-photo-6758771.jpeg",
        "https://images.pexels.com/photos/6758784/pexels-photo-6758784.jpeg",
        "https://images.pexels.com/photos/5824530/pexels-photo-5824530.jpeg"
      ],
      link: "https://www.alibaba.com/product-detail/High-Quality-PVC-Skirting-Board-for_1600180280284.html"
    },
    {
      id: 5,
      category: "Insulation",
      name: "XPS Insulation Board",
      description: "High-performance extruded polystyrene insulation boards with excellent thermal resistance and compressive strength, ideal for floors, walls and roofs.",
      specs: "Thickness: 20-100mm, Size: 600x1200mm or 600x2400mm, Density: 30-45kg/m3, Thermal Conductivity: 0.028-0.034W/mK, Compressive Strength: 200-500kPa",
      images: [
        "https://images.pexels.com/photos/5838428/pexels-photo-5838428.jpeg",
        "https://images.pexels.com/photos/5838429/pexels-photo-5838429.jpeg",
        "https://images.pexels.com/photos/5838431/pexels-photo-5838431.jpeg"
      ],
      link: "https://www.alibaba.com/product-detail/XPS-Insulation-Board-Extruded-Polystyrene-Foam_1600180280284.html"
    },
    {
      id: 6,
      category: "Boards",
      name: "Magnesium Oxide Board",
      description: "Fireproof magnesium oxide boards suitable for drywall, ceiling and partition applications. Non-combustible and moisture resistant.",
      specs: "Thickness: 6-20mm, Size: 1220x2440mm, Fire Rating: A1, Density: 900-1200kg/m3, Bending Strength: ≥14MPa",
      images: [
        "https://images.pexels.com/photos/5838433/pexels-photo-5838433.jpeg",
        "https://images.pexels.com/photos/5838434/pexels-photo-5838434.jpeg",
        "https://images.pexels.com/photos/5838435/pexels-photo-5838435.jpeg"
      ],
      link: "https://www.alibaba.com/product-detail/Magnesium-Oxide-Board-Fireproof-Building-Material_1600180280284.html"
    },
    {
      id: 7,
      category: "Safety Products",
      name: "Safety Handrails",
      description: "Sturdy stainless steel safety handrails for staircases, balconies and public areas. Corrosion-resistant with various design options.",
      specs: "Material: 304 Stainless Steel, Diameter: 42-50mm, Height: 900-1100mm, Surface: Brushed or Polished, Installation: Wall-mounted or Floor-mounted",
      images: [
        "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
        "https://images.pexels.com/photos/439392/pexels-photo-439392.jpeg",
        "https://images.pexels.com/photos/439393/pexels-photo-439393.jpeg"
      ],
      link: "https://www.alibaba.com/product-detail/Stainless-Steel-Safety-Handrail-for-Staircase_1600180280284.html"
    },
    {
      id: 8,
      category: "Electrical Items",
      name: "LED Panel Lights",
      description: "Energy-efficient LED panel lights with uniform illumination, perfect for offices, schools and commercial spaces.",
      specs: "Size: 600x600mm or 300x1200mm, Power: 36-48W, Luminous Flux: 3200-4500lm, CRI: ≥80, Color Temp: 3000K-6500K, Lifespan: 50,000 hours",
      images: [
        "https://images.pexels.com/photos/1435781/pexels-photo-1435781.jpeg",
        "https://images.pexels.com/photos/1435782/pexels-photo-1435782.jpeg",
        "https://images.pexels.com/photos/1435783/pexels-photo-1435783.jpeg"
      ],
      link: "https://www.alibaba.com/product-detail/LED-Panel-Light-Office-Ceiling-Lighting_1600180280284.html"
    }
  ];

  const productCategories = [
    "Flooring", "Skirting Board", "Wall Panels", 
    "Insulation", "Boards", "Doors", 
    "Safety Products", "Electrical Items", "Screws/Fasteners"
  ];

  // Slider settings for product images
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />
  };

  const handleQuoteClick = (productId) => {
    // Scroll to contact form
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div className="pp-container">
      {/* Featured Products Section */}
      <section className="pp-featured-products">
        <h2 className="pp-section-title">Featured Products</h2>
        <div className="pp-products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="pp-product-card">
              <div className="pp-product-image-container">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="pp-product-image"
                  onClick={() => openProductModal(product)}
                />
                <button 
                  className="pp-quote-button"
                  onClick={() => handleQuoteClick(product.id)}
                >
                  <FaQuoteRight /> Get Quote
                </button>
              </div>
              <div className="pp-product-info">
                <h3 className="pp-product-name">{product.name}</h3>
                <p className="pp-product-description">{product.description.substring(0, 100)}...</p>
                <div className="pp-product-specs">{product.specs.split(', ').slice(0, 2).join(', ')}...</div>
                <a 
                  href={product.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="pp-product-link"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
        <Link to="/all-products" className="pp-see-all-button">
          See All Products <FaArrowRight />
        </Link>
      </section>

      {/* Product Modal */}
      {showModal && selectedProduct && (
        <div className="pp-product-modal">
          <div className="pp-modal-content">
            <button 
              className="pp-close-modal"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            
            <div className="pp-modal-slider">
              <Slider {...sliderSettings}>
                {selectedProduct.images.map((img, index) => (
                  <div key={index} className="pp-modal-slide">
                    <img 
                      src={img} 
                      alt={`${selectedProduct.name} ${index + 1}`}
                      className="pp-modal-image"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            
            <div className="pp-modal-info">
              <h3>{selectedProduct.name}</h3>
              <p className="pp-modal-category">{selectedProduct.category}</p>
              <p className="pp-modal-description">{selectedProduct.description}</p>
              <div className="pp-modal-specs">
                <h4>Specifications:</h4>
                <ul className="pp-specs-list">
                  {selectedProduct.specs.split(',').map((spec, i) => (
                    <li key={i}>{spec.trim()}</li>
                  ))}
                </ul>
              </div>
              <div className="pp-modal-actions">
                <button 
                  className="pp-modal-quote"
                  onClick={() => {
                    setShowModal(false);
                    handleQuoteClick(selectedProduct.id);
                  }}
                >
                  <FaQuoteRight /> Request Quote
                </button>
                <a 
                  href={selectedProduct.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="pp-modal-link"
                >
                  View Full Details
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .pp-container {
          font-family: 'Arial', sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .pp-section-title {
          text-align: center;
          font-size: 2rem;
          color: #2c3e50;
          margin-bottom: 2rem;
          position: relative;
        }

        .pp-section-title::after {
          content: '';
          display: block;
          width: 80px;
          height: 3px;
          background: #d4af37;
          margin: 15px auto;
        }

        .pp-products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .pp-product-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .pp-product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .pp-product-image-container {
          position: relative;
          height: 220px;
          cursor: pointer;
          overflow: hidden;
        }

        .pp-product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .pp-product-image:hover {
          transform: scale(1.05);
        }

        .pp-quote-button {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          background: #d4af37;
          color: white;
          border: none;
          padding: 8px 15px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
          font-weight: 500;
          z-index: 2;
        }

        .pp-quote-button:hover {
          background: #2980b9;
          transform: translateX(-50%) scale(1.05);
        }

        .pp-product-info {
          padding: 1.5rem;
        }

        .pp-product-name {
          font-size: 1.3rem;
          color: #2c3e50;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .pp-product-description {
          color: #7f8c8d;
          margin-bottom: 1rem;
          line-height: 1.5;
          font-size: 0.95rem;
        }

        .pp-product-specs {
          font-size: 0.9rem;
          color: #34495e;
          margin-bottom: 1rem;
          font-style: italic;
          line-height: 1.4;
        }

        .pp-product-link {
          color: #d4af37;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          display: inline-block;
          margin-top: 0.5rem;
        }

        .pp-product-link:hover {
          color: #2980b9;
          text-decoration: underline;
        }

        .pp-see-all-button {
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
        }

        .pp-see-all-button:hover {
          background: #1a252f;
          transform: translateY(-2px);
        }

        /* Modal Styles */
        .pp-product-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .pp-modal-content {
          background: white;
          width: 90%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 8px;
          display: flex;
          position: relative;
          box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
        }

        .pp-close-modal {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          font-size: 1.8rem;
          cursor: pointer;
          color: #7f8c8d;
          z-index: 10;
          transition: color 0.3s ease;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .pp-close-modal:hover {
          color: #e74c3c;
          background: rgba(0,0,0,0.05);
        }

        .pp-modal-slider {
          width: 50%;
          padding: 2rem;
          background: #f8f9fa;
        }

        .pp-modal-slide {
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pp-modal-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 4px;
        }

        .pp-modal-info {
          width: 50%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }

        .pp-modal-info h3 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .pp-modal-category {
          color: #7f8c8d;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .pp-modal-description {
          color: #34495e;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .pp-modal-specs {
          margin: 1.5rem 0;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 4px;
          flex-grow: 1;
        }

        .pp-modal-specs h4 {
          margin-bottom: 1rem;
          color: #2c3e50;
          font-size: 1.1rem;
        }

        .pp-specs-list {
          padding-left: 1.2rem;
          margin: 0;
        }

        .pp-specs-list li {
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .pp-modal-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .pp-modal-quote {
          background: #d4af37;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
          font-weight: 500;
          flex: 1;
          justify-content: center;
        }

        .pp-modal-quote:hover {
          background: #2980b9;
        }

        .pp-modal-link {
          background: #2c3e50;
          color: white;
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 4px;
          text-align: center;
          transition: background 0.3s ease;
          flex: 1;
        }

        .pp-modal-link:hover {
          background: #1a252f;
        }

        /* Slider arrows customization */
        .slick-arrow {
          width: 40px;
          height: 40px;
          z-index: 1;
          background: rgba(255,255,255,0.7);
          border-radius: 50%;
          display: flex !important;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .slick-arrow:hover {
          background: rgba(255,255,255,0.9);
        }

        .slick-arrow::before {
          display: none;
        }

        .slick-prev {
          left: 10px;
        }

        .slick-next {
          right: 10px;
        }

        .slick-dots {
          bottom: 15px;
        }

        .slick-dots li button:before {
          font-size: 10px;
          color: white;
          opacity: 0.5;
        }

        .slick-dots li.slick-active button:before {
          color: white;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .pp-modal-content {
            flex-direction: column;
            width: 95%;
          }

          .pp-modal-slider,
          .pp-modal-info {
            width: 100%;
          }

          .pp-modal-slider {
            padding: 1rem;
          }

          .pp-modal-slide {
            height: 250px;
          }

          .pp-modal-info {
            padding: 1.5rem;
          }

          .pp-products-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
        }

        @media (max-width: 480px) {
          .pp-modal-actions {
            flex-direction: column;
          }

          .pp-section-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductShowcase;