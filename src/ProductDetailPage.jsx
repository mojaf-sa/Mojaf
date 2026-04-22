import React, { useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaQuoteRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getProductById } from './product';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);

  const product = getProductById(id);

  const handleQuote = () => {
    navigate('/contact');
  }

  if (!product) {
    return (
      <div className="pdp-container">
        <div className="pdp-not-found">
          <h2>Product not found</h2>
          <button onClick={() => navigate('/all-products')}>Back to Products</button>
        </div>
      </div>
    );
  }

  // Slider settings
  const mainSliderSettings = {
    dots: false,
    infinite: product.images?.length > 1, // Only infinite if more than 1 image
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: product.images?.length > 1, // Only show arrows if more than 1 image
    nextArrow: <FaArrowRight className="pdp-slider-arrow" />,
    prevArrow: <FaArrowLeft className="pdp-slider-arrow" />,
    afterChange: (current) => {
      setCurrentSlide(current);
      if (thumbnailSliderRef.current) {
        thumbnailSliderRef.current.slickGoTo(current);
      }
    }
  };

  const thumbnailSliderSettings = {
    dots: false,
    infinite: product.images?.length > 4, // Only infinite if more than 4 thumbnails
    speed: 300,
    slidesToShow: Math.min(4, product.images?.length || 0),
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(3, product.images?.length || 0)
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(2, product.images?.length || 0)
        }
      }
    ]
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
    mainSliderRef.current.slickGoTo(index);
  };

  const renderFeaturesList = (items) => {
    return (
      <ul className="pdp-features-list">
        {items.map((item, index) => (
          <li key={index} className="pdp-feature-item">
            <span className="pdp-feature-icon">✓</span>
            <span className="pdp-feature-text">{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  const renderSpecifications = () => {
    if (!product.specs) return null;
    
    return (
      <div className="pdp-table-container">
        <table className="pdp-specs-table">
          <tbody>
            {Object.entries(product.specs).map(([key, value]) => (
              <tr key={key}>
                <td><strong>{key}</strong></td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderTechnicalTable = () => {
    if (!product.technicalProperties) return null;
    
    return (
      <div className="pdp-table-container">
        <table className="pdp-tech-table">
          <tbody>
            {Object.entries(product.technicalProperties).map(([key, value]) => (
              <tr key={key}>
                <td><strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</strong></td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderThermalConductivityTable = () => {
    if (!product.thermalConductivity) return null;
    
    return (
      <div className="pdp-table-container">
        <table className="pdp-thermal-table">
          <thead>
            <tr>
              {product.thermalConductivity.headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.thermalConductivity.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="pdp-container">
      {/* Breadcrumbs */}
      <section className="pdp-breadcrumbs">
        <div className="container">
          <ul className="pdp-breadcrumb-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-products">All Products</Link></li>
            <li>{product.name}</li>
          </ul>
        </div>
      </section>

      {/* Product Hero Section */}
      <section className="pdp-hero">
        <div className="container">
          <div className="pdp-hero-content">
            <div className="pdp-hero-info">
              <div className="pdp-category-badge">{product.category}</div>
              <h1>{product.name}</h1>
              {product.shortDescription && <p className="pdp-short-desc">{product.shortDescription}</p>}
              
              <div className="pdp-hero-actions">
                <button onClick={handleQuote} className="pdp-quote-button">
                  <FaQuoteRight /> Request Quote
                </button>
              </div>
            </div>
            
            <div className="pdp-hero-image">
              {product.images?.length > 0 ? (
                <img src={product.images[0]} alt={product.name} loading="lazy" />
              ) : (
                <div className="pdp-image-placeholder">{product.name}</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Slider Section */}
      {product.images?.length > 0 && (
        <section className="pdp-slider-section">
          <div className="container">
            <div className="pdp-main-slider">
              <Slider {...mainSliderSettings} ref={mainSliderRef}>
                {product.images.map((img, index) => (
                  <div key={index} className="pdp-slide">
                    <img src={img} alt={`${product.name} ${index + 1}`} loading="lazy" />
                  </div>
                ))}
              </Slider>
            </div>
            
            {product.images.length > 1 && (
              <div className="pdp-thumbnail-slider">
                <Slider {...thumbnailSliderSettings} ref={thumbnailSliderRef}>
                  {product.images.map((img, index) => (
                    <div 
                      key={index} 
                      className={`pdp-thumbnail-slide ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <img src={img} alt={`Thumbnail ${index + 1}`} loading="lazy" />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Product Details Section */}
      <section className="pdp-details">
        <div className="container">
          <div className="pdp-details-content">
            {/* Description */}
            {product.description && (
              <div className="pdp-section">
                <h2>Product Description</h2>
                <div className="pdp-description">
                  <p>{product.description}</p>
                </div>
              </div>
            )}

            {/* Specifications */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div className="pdp-section">
                <h2>Specifications</h2>
                {renderSpecifications()}
              </div>
            )}

            {/* Application */}
            {product.features?.application && (
              <div className="pdp-section">
                <h2>Applications</h2>
                {renderFeaturesList(product.features.application)}
              </div>
            )}

            {/* Facing */}
            {product.features?.facing && (
              <div className="pdp-section">
                <h2>Available Facing Options</h2>
                {renderFeaturesList(product.features.facing)}
              </div>
            )}

            {/* Advantages */}
            {product.features?.advantages && (
              <div className="pdp-section">
                <h2>Key Advantages</h2>
                {renderFeaturesList(product.features.advantages)}
              </div>
            )}

            {/* Fire Safety */}
            {product.features?.fireSafety && (
              <div className="pdp-section">
                <h2>Fire Safety Features</h2>
                {renderFeaturesList(product.features.fireSafety)}
              </div>
            )}

            {/* Technical Properties */}
            {product.technicalProperties && (
              <div className="pdp-section">
                <h2>Technical Specifications</h2>
                {renderTechnicalTable()}
              </div>
            )}

            {/* Thermal Conductivity */}
            {product.thermalConductivity && (
              <div className="pdp-section">
                <h2>Thermal Conductivity Data</h2>
                {renderThermalConductivityTable()}
              </div>
            )}

   {product?.option && (
              <div className="pdp-section">
                <h2>Option</h2>
                <div className="pdp-description">
                  <p>{product.option}</p>
                </div>
              </div>
            )}

            {product?.note && (
              <div className="pdp-section">
                <h2>Note</h2>
                <div className="pdp-description">
                  <p>{product.note}</p>
                </div>
              </div>
            )}
              <div className="pdp-hero-actions">
                <button onClick={handleQuote}  className="pdp-quote-button">
                  <FaQuoteRight /> Request Quote
                </button>
              </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* ... (keep all your existing styles) ... */
 .pdp-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          color: #2d3748;
          line-height: 1.6;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Breadcrumbs */
        .pdp-breadcrumbs {
          background: #f8fafc;
          padding: 16px 0;
          border-bottom: 1px solid #edf2f7;
        }

        .pdp-breadcrumb-list {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 0.9rem;
          align-items: center;
        }

        .pdp-breadcrumb-list li {
          margin-right: 12px;
          display: flex;
          align-items: center;
        }

        .pdp-breadcrumb-list li:after {
          content: '›';
          margin-left: 12px;
          color: #a0aec0;
          font-size: 1.1rem;
        }

        .pdp-breadcrumb-list li:last-child:after {
          content: '';
        }

        .pdp-breadcrumb-list a {
          color: #4a5568;
          text-decoration: none;
          transition: color 0.2s;
        }

        .pdp-breadcrumb-list a:hover {
          color: #d4af37;
        }

        /* Hero Section */
        .pdp-hero {
          padding: 60px 0;
          background: linear-gradient(135deg, #2c3e50 0%, #1a252f 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .pdp-hero:before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
        }

        .pdp-hero-content {
          display: flex;
          align-items: center;
          gap: 60px;
          position: relative;
          z-index: 1;
        }

        .pdp-hero-info {
          flex: 1;
        }

        .pdp-category-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          color: white;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 500;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .pdp-hero-info h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          font-weight: 700;
          line-height: 1.2;
        }

        .pdp-short-desc {
          font-size: 1.1rem;
          margin-bottom: 30px;
          opacity: 0.9;
          text-align: justify;
          max-width: 800px;
        }

        .pdp-hero-actions {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .pdp-quote-button {
          background: linear-gradient(to right, #d4af37, #d4af37);
          color: white;
          padding: 14px 28px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          gap: 10px;
        }

        .pdp-quote-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          background: linear-gradient(to right, #c8911b, #a56b16);
        }

        .pdp-hero-image {
          flex: 1;
          max-width: 500px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s;
        }

        .pdp-hero-image:hover {
          transform: translateY(-5px);
        }

        .pdp-hero-image img {
          width: 100%;
          height: auto;
          display: block;
        }

        .pdp-image-placeholder {
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4a5568;
          font-weight: 600;
          padding: 20px;
          text-align: center;
        }

        /* Slider Section */
        .pdp-slider-section {
          padding: 60px 0;
          background: #f8fafc;
          border-bottom: 1px solid #edf2f7;
        }

        .pdp-main-slider {
          margin-bottom: 30px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
        }

        .pdp-slide {
          outline: none;
        }

        .pdp-slide img {
          width: 100%;
          max-height: 600px;
          object-fit: contain;
          margin: 0 auto;
          display: block;
          background: white;
          padding: 20px;
        }

        .pdp-thumbnail-slider {
          max-width: 80%;
          margin: 0 auto;
        }

        .pdp-thumbnail-slide {
          padding: 0 10px;
          cursor: pointer;
          outline: none;
          transition: all 0.3s;
        }

        .pdp-thumbnail-slide img {
          width: 100%;
          height: 100px;
          object-fit: cover;
          border-radius: 6px;
          opacity: 0.7;
          transition: all 0.3s;
          border: 2px solid transparent;
        }

        .pdp-thumbnail-slide.active img,
        .pdp-thumbnail-slide:hover img {
          opacity: 1;
          border-color: #d4af37;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        /* Details Section */
        .pdp-details {
          padding: 60px 0;
          background: white;
        }

        .pdp-section {
          margin-bottom: 50px;
        }

        .pdp-section h2 {
          font-size: 1.8rem;
          color: #2d3748;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e2e8f0;
          font-weight: 700;
          position: relative;
        }

        .pdp-section h2:after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 80px;
          height: 3px;
          background: #d4af37;
        }

        .pdp-description p {
          text-align: justify;
          margin-bottom: 20px;
          font-size: 1.05rem;
          color: #4a5568;
        }

        /* Features List */
        .pdp-features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 15px;
        }

        .pdp-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          background: #f8fafc;
          border-radius: 8px;
          transition: all 0.3s;
        }

        .pdp-feature-item:hover {
          background: #edf2f7;
          transform: translateX(5px);
        }

        .pdp-feature-icon {
          color: #d4af37;
          font-weight: bold;
          font-size: 1.1rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pdp-feature-text {
          text-align: justify;
        }

        /* Tables */
        .pdp-table-container {
          overflow-x: auto;
          margin: 20px 0;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .pdp-tech-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }

        .pdp-tech-table td {
          padding: 16px 20px;
          border: 1px solid #e2e8f0;
          text-align: left;
        }

        .pdp-tech-table tr:nth-child(even) {
          background: #f8fafc;
        }

        .pdp-tech-table tr:hover {
          background: #edf2f7;
        }

        .pdp-thermal-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 800px;
        }

        .pdp-thermal-table th,
        .pdp-thermal-table td {
          padding: 14px 16px;
          border: 1px solid #e2e8f0;
          text-align: center;
        }

        .pdp-thermal-table th {
          background: #2c3e50;
          color: white;
          font-weight: 600;
        }

        .pdp-thermal-table tr:nth-child(even) {
          background: #f8fafc;
        }

        .pdp-thermal-table tr:hover {
          background: #edf2f7;
        }

        /* Slider Arrows */
        .pdp-slider-arrow {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 50%;
          display: flex !important;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          color: #2c3e50;
          z-index: 10;
          transition: all 0.3s;
          cursor: pointer;
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .pdp-slider-arrow:hover {
          background: #d4af37;
          color: white;
          opacity: 1;
          transform: scale(1.1);
        }

        .pdp-slider-arrow.slick-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        /* Not Found State */
        .pdp-not-found {
          text-align: center;
          padding: 100px 20px;
        }

        .pdp-not-found h2 {
          font-size: 2rem;
          margin-bottom: 30px;
          color: #2d3748;
        }

        .pdp-not-found button {
          background: #d4af37;
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .pdp-not-found button:hover {
          background: #b7791f;
          transform: translateY(-2px);
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .pdp-hero-content {
            gap: 40px;
          }
        }

        @media (max-width: 992px) {
          .pdp-hero-content {
            flex-direction: column;
          }

          .pdp-hero-image {
            max-width: 100%;
            margin-top: 30px;
          }

          .pdp-hero-info h1 {
            font-size: 2.2rem;
          }

          .pdp-features-list {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .pdp-hero {
            padding: 40px 0;
          }

          .pdp-hero-info h1 {
            font-size: 2rem;
          }

          .pdp-hero-actions {
            flex-direction: column;
            gap: 12px;
          }

          .pdp-quote-button {
            width: 100%;
            text-align: center;
            justify-content: center;
          }

          .pdp-thumbnail-slider {
            max-width: 100%;
          }

          .pdp-section h2 {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 576px) {
          .pdp-hero-info h1 {
            font-size: 1.8rem;
          }

          .pdp-short-desc {
            font-size: 1rem;
          }

          .pdp-section h2 {
            font-size: 1.4rem;
          }

          .pdp-features-list {
            grid-template-columns: 1fr;
          }

          .pdp-slider-section {
            padding: 40px 0;
          }
        }
        /* Add this new style for the specifications table */
        .pdp-specs-table {
          width: 100%;
          border-collapse: collapse;
        }

        .pdp-specs-table td {
          padding: 12px 16px;
          border: 1px solid #e2e8f0;
          text-align: left;
        }

        .pdp-specs-table tr:nth-child(even) {
          background: #f8fafc;
        }

        .pdp-specs-table tr:hover {
          background: #edf2f7;
        }
      `}</style>
    </div>
  );
};

export default ProductDetailPage;