import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { FaQuoteRight, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const thumbnailSliderRef = useRef(null);
  const mainSliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

   // Slider settings for main carousel
  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <FaArrowRight className="pp-slider-arrow" />,
    prevArrow: <FaArrowLeft className="pp-slider-arrow" />,
    adaptiveHeight: true,
    afterChange: (current) => {
      setCurrentSlide(current);
      thumbnailSliderRef.current.slickGoTo(current);
    }
  };

  // Slider settings for thumbnails
  const thumbnailSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
    mainSliderRef.current.slickGoTo(index);
  };

  const handleQuoteClick = (productId) => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    setCurrentSlide(0);
  };

  return (
    <div className="pp-container" id='pp-products'>
      {/* Featured Products Section */}
      <section className="pp-featured-products">
        <h2 className="pp-section-title">Featured Products</h2>
        <div className="pp-products-grid">
          {featuredProducts.map(product => (
            <div onClick={() => openProductModal(product)} key={product.id} className="pp-product-card">
              <div className="pp-product-image-container">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="pp-product-image"
                />
                <button 
                  className="pp-quote-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleQuoteClick(product.id);
                  }}
                >
                  <FaQuoteRight /> Get Quote
                </button>
              </div>
              <div className="pp-product-info">
                <h3 className="pp-product-name">{product.name}</h3>
                <p className="pp-product-description">{product.description.substring(0, 100)}...</p>
                <div className="pp-product-specs">{product.specs.split(', ').slice(0, 2).join(', ')}...</div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/all-products" className="pp-see-all-button">
          See All Products <FaArrowRight />
        </Link>
      </section>

      {/* Enhanced Product Modal */}
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
              <Slider 
                {...mainSliderSettings}
                ref={mainSliderRef}
              >
                {selectedProduct.images.map((img, index) => (
                  <div key={index} className="pp-modal-slide">
                    <div className="pp-slide-image-container">
                      <img 
                        src={img} 
                        alt={`${selectedProduct.name} ${index + 1}`}
                        className="pp-modal-image"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
                 {/* Thumbnail Navigation */}
              <div className="pp-thumbnail-container">
                <Slider 
                  {...thumbnailSliderSettings}
                  ref={thumbnailSliderRef}
                >
                  {selectedProduct.images.map((img, index) => (
                    <div 
                      key={index} 
                      className={`pp-thumbnail-slide ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${index + 1}`}
                        className="pp-thumbnail-image"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
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
          cursor: pointer;
        }

        .pp-product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .pp-product-image-container {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .pp-product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .pp-product-card:hover .pp-product-image {
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

        /* Enhanced Slider Styles */
        .pp-modal-slider {
          padding: 0;
          background: #f5f5f5;
          position: relative;
        }

        .pp-modal-slide {
          width: 100%;
          outline: none;
        }

        .pp-slide-image-container {
          width: 100%;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .pp-slide-image-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%);
          pointer-events: none;
        }

        .pp-modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .pp-slider-arrow {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.9);
          border-radius: 50%;
          display: flex !important;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          color: #2c3e50;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .pp-slider-arrow:hover {
          background: #d4af37;
          color: white;
          transform: scale(1.1);
        }

        .slick-prev {
          left: 20px;
        }

        .slick-next {
          right: 20px;
        }

        .slick-dots {
          bottom: 20px;
        }

        .slick-dots li button:before {
          color: white;
          opacity: 0.7;
          font-size: 10px;
        }

        .slick-dots li.slick-active button:before {
          color: #d4af37;
          opacity: 1;
        }

        .pp-modal-info {
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

        @media (max-width: 768px) {
          .pp-modal-content {
            width: 95%;
          }

          .pp-slide-image-container {
            height: 300px;
          }
          
          .slick-prev {
            left: 10px;
          }
          
          .slick-next {
            right: 10px;
          }

          .pp-products-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
        }

        @media (max-width: 480px) {
          .pp-slide-image-container {
            height: 250px;
          }
          
          .pp-slider-arrow {
            width: 30px;
            height: 30px;
            font-size: 0.8rem;
          }

          .pp-modal-actions {
            flex-direction: column;
          }

          .pp-section-title {
            font-size: 1.5rem;
          }
        }
          .pp-thumbnail-container {
          padding: 10px 20px;
          margin-top: 10px;
        }

        .pp-thumbnail-slide {
          padding: 0 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pp-thumbnail-slide:hover {
          opacity: 0.8;
        }

        .pp-thumbnail-slide.active {
          position: relative;
        }

        .pp-thumbnail-slide.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 5px;
          right: 5px;
          height: 3px;
          background: #d4af37;
        }

        .pp-thumbnail-image {
          width: 100%;
          height: 80px;
          object-fit: cover;
          border-radius: 4px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .pp-thumbnail-slide.active .pp-thumbnail-image {
          border-color: #d4af37;
        }

        /* Responsive adjustments for thumbnails */
        @media (max-width: 768px) {
          .pp-thumbnail-image {
            height: 60px;
          }
        }

        @media (max-width: 480px) {
          .pp-thumbnail-image {
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductShowcase;