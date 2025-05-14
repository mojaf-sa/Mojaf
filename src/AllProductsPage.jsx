import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaFilter, FaTimes, FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { allProducts, productCategories, subCategories } from './product.js';

const AllProductsPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);


// Filter products based on search, category and sub-category
  useEffect(() => {
    let results = allProducts;
    
    if (selectedCategory !== 'All') {
      results = results.filter(product => product.category === selectedCategory);
      
      if (selectedSubCategory !== 'All') {
        results = results.filter(product => product.subCategory === selectedSubCategory);
      }
    }
    
    if (searchTerm) {
      results = results.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.subCategory && product.subCategory.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredProducts(results);
  }, [searchTerm, selectedCategory, selectedSubCategory]);
  // Slider settings for main carousel
  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <FaArrowRight className="ap-slider-arrow" />,
    prevArrow: <FaArrowLeft className="ap-slider-arrow" />,
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

  const handleQuoteClick = () => {
    navigate('/#contact');
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    setCurrentSlide(0);
  };

  const renderSpecifications = (specs) => {
    return Object.entries(specs).map(([key, value]) => (
      <div key={key} className="ap-spec-item">
        <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="ap-container">
      {/* Header with search and filters */}
      <div className="ap-header">
        <h1 className="ap-title">All Products</h1>
        
        <div className="ap-search-filter">
          <div className="ap-search-box">
            <FaSearch className="ap-search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="ap-search-input"
            />
          </div>
          
          <button 
            className="ap-mobile-filter-btn"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <FaFilter /> Filters
          </button>
        </div>
      </div>

      {/* Sub-category filter bar */}
      {selectedCategory !== 'All' && (
        <div className="ap-subcategory-filter">
          <div className="ap-subcategory-scroll">
            {subCategories[selectedCategory].map(subCat => (
              <button
                key={subCat}
                className={`ap-subcategory-btn ${selectedSubCategory === subCat ? 'active' : ''}`}
                onClick={() => setSelectedSubCategory(subCat)}
              >
                {subCat}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="ap-content">
        {/* Category sidebar - hidden on mobile by default */}
        <div className={`ap-sidebar ${showMobileFilters ? 'ap-mobile-visible' : ''}`}>
          <div className="ap-sidebar-header">
            <h3>Categories</h3>
            <button 
              className="ap-close-sidebar"
              onClick={() => setShowMobileFilters(false)}
            >
              <FaTimes />
            </button>
          </div>
          
          <ul className="ap-category-list">
            {productCategories.map(category => (
              <li 
                key={category}
                className={`ap-category-item ${selectedCategory === category ? 'ap-active-category' : ''}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedSubCategory('All');
                  setShowMobileFilters(false);
                }}
              >
                {category}
                {selectedCategory === category && (
                  <span className="ap-category-count">
                    ({filteredProducts.length})
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Main product grid */}
        <div className="ap-product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="ap-product-card">
                <div className="ap-product-image-container">
                  {product.images.length > 0 ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="ap-product-image"
                      onClick={() => openProductModal(product)}
                    />
                  ) : (
                    <div className="ap-product-image-placeholder" onClick={() => openProductModal(product)}>
                      {product.name}
                    </div>
                  )}
                  <div className="ap-product-badge">{product.category}</div>
                </div>
                
                <div className="ap-product-info">
                  <h3 className="ap-product-name">{product.name}</h3>
                  <p className="ap-product-subcategory">{product.subCategory}</p>
                  <p className="ap-product-description">{product.description}</p>
                  <div className="ap-product-specs">
                    {/* <span>Price: {product.price}</span> */}
                    <span>MOQ: {product.moq}</span>
                  </div>
                  
                  <div className="ap-product-actions">
                    <button 
                      className="ap-quote-button"
                      onClick={handleQuoteClick}
                    >
                      <FaQuoteRight /> Get Quote
                    </button>
                    <button 
                      className="ap-details-button"
                      onClick={() => openProductModal(product)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="ap-no-results">
              <h3>No products found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button 
                className="ap-clear-filters"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedSubCategory('All');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Detail Modal with Thumbnail Navigation */}
      {showModal && selectedProduct && (
        <div className="ap-product-modal">
          <div className="ap-modal-content">
            <button 
              className="ap-close-modal"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            
            <div className="ap-modal-columns">
              <div className="ap-modal-slider-container">
                <div className="ap-modal-slider">
                  <Slider 
                    {...mainSliderSettings}
                    ref={mainSliderRef}
                  >
                    {selectedProduct.images.length > 0 ? (
                      selectedProduct.images.map((img, index) => (
                        <div key={index} className="ap-modal-slide">
                          <div className="ap-slide-image-container">
                            <img 
                              src={img} 
                              alt={`${selectedProduct.name} ${index + 1}`}
                              className="ap-modal-image"
                            />
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="ap-modal-slide">
                        <div className="ap-slide-image-container">
                          <div className="ap-modal-image-placeholder">
                            {selectedProduct.name}
                          </div>
                        </div>
                      </div>
                    )}
                  </Slider>
                </div>
                
                {/* Thumbnail Navigation */}
                {selectedProduct.images.length > 1 && (
                  <div className="ap-thumbnail-container">
                    <Slider 
                      {...thumbnailSliderSettings}
                      ref={thumbnailSliderRef}
                    >
                      {selectedProduct.images.map((img, index) => (
                        <div 
                          key={index} 
                          className={`ap-thumbnail-slide ${index === currentSlide ? 'active' : ''}`}
                          onClick={() => handleThumbnailClick(index)}
                        >
                          <img 
                            src={img} 
                            alt={`Thumbnail ${index + 1}`}
                            className="ap-thumbnail-image"
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                )}
              </div>
              
              <div className="ap-modal-info">
                <div className="ap-modal-header">
                  <h2>{selectedProduct.name}</h2>
                  <div className="ap-modal-category">
                    <span>{selectedProduct.category}</span>
                    <span>{selectedProduct.subCategory}</span>
                  </div>
                </div>
                
                <p className="ap-modal-description">{selectedProduct.description}</p>
                
                <div className="ap-modal-specs">
                  <h3>Specifications</h3>
                  <div className="ap-specs-grid">
                    {renderSpecifications(selectedProduct.specs)}
                    {/* <div className="ap-spec-item">
                      <strong>Price:</strong>
                      <span>{selectedProduct.price}</span>
                    </div> */}
                    <div className="ap-spec-item">
                      <strong>MOQ:</strong>
                      <span>{selectedProduct.moq}</span>
                    </div>
                  </div>
                </div>
                
                <div className="ap-modal-actions">
                  <button 
                    className="ap-modal-quote"
                    onClick={() => {
                      setShowModal(false);
                      handleQuoteClick();
                    }}
                  >
                    <FaQuoteRight /> Request Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .ap-container {
          font-family: 'Arial', sans-serif;
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px;
        }

        .ap-header {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 20px;
        }

        .ap-title {
          font-size: 2.2rem;
          color: #2c3e50;
          margin: 0;
        }

        .ap-search-filter {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .ap-search-box {
          flex: 1;
          max-width: 500px;
          position: relative;
        }

        .ap-search-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #7f8c8d;
        }

        .ap-search-input {
          width: 100%;
          padding: 12px 20px 12px 45px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }

        .ap-mobile-filter-btn {
          display: none;
          background: #d4af37;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        /* Sub-category filter */
        .ap-subcategory-filter {
          margin-bottom: 20px;
          overflow-x: auto;
          padding-bottom: 10px;
        }

        .ap-subcategory-scroll {
          display: flex;
          gap: 10px;
          padding: 5px 0;
        }

        .ap-subcategory-btn {
          background: #f5f5f5;
          border: none;
          padding: 8px 15px;
          border-radius: 20px;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ap-subcategory-btn:hover {
          background: #e0e0e0;
        }

        .ap-subcategory-btn.active {
          background: #d4af37;
          color: white;
        }

        .ap-content {
          display: flex;
          gap: 30px;
        }

        .ap-sidebar {
          width: 250px;
          flex-shrink: 0;
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .ap-sidebar-header {
          display: none;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .ap-close-sidebar {
          background: none;
          border: none;
          font-size: 1.2rem;
          color: #7f8c8d;
          cursor: pointer;
        }

        .ap-category-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ap-category-item {
          padding: 12px 15px;
          margin-bottom: 5px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background 0.2s ease;
        }

        .ap-category-item:hover {
          background: #f5f5f5;
        }

        .ap-active-category {
          background: #d4af37;
          color: white;
        }

        .ap-category-count {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .ap-product-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
        }

        .ap-product-card {
          height: 500px;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .ap-product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .ap-product-image-container {
          position: relative;
          height: 220px;
          cursor: pointer;
        }

        .ap-product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ap-product-image-placeholder {
          width: 100%;
          height: 100%;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          color: #7f8c8d;
          font-weight: 500;
        }

        .ap-product-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 0.8rem;
        }

        .ap-product-info {
          padding: 20px;
        }

        .ap-product-name {
          font-size: 1.2rem;
          color: #2c3e50;
          margin: 0 0 5px 0;
        }

        .ap-product-subcategory {
          font-size: 0.9rem;
          color: #d4af37;
          margin: 0 0 10px 0;
          font-weight: 500;
        }

        .ap-product-description {
          color: #34495e;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 15px;
           display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
        }

        .ap-product-specs {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 15px;
          font-size: 0.9rem;
          color: #2c3e50;
        }

        .ap-product-actions {
          display: flex;
          gap: 10px;
        }

        .ap-quote-button {
          flex: 1;
          background: #d4af37;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .ap-quote-button:hover {
          background: #2980b9;
        }

        .ap-details-button {
          flex: 1;
          background: #2c3e50;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .ap-details-button:hover {
          background: #1a252f;
        }

        .ap-no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 50px 20px;
        }

        .ap-no-results h3 {
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .ap-no-results p {
          color: #7f8c8d;
          margin-bottom: 20px;
        }

        .ap-clear-filters {
          background: #d4af37;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
        }

        /* Modal Styles */
        .ap-product-modal {
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

        .ap-modal-content {
          background: white;
          width: 90%;
          max-width: 1000px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 8px;
          position: relative;
        }

        .ap-close-modal {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #7f8c8d;
          z-index: 10;
        }

        .ap-modal-columns {
          display: flex;
        }

        .ap-modal-slider-container {
          width: 50%;
          padding: 20px;
        }

        .ap-modal-slider {
          margin-bottom: 15px;
        }

        .ap-modal-slide {
          height: 400px;
        }

        .ap-slide-image-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f9f9f9;
        }

        .ap-modal-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .ap-modal-image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px;
          color: #7f8c8d;
          font-size: 1.2rem;
          font-weight: 500;
        }

        /* Thumbnail Navigation Styles */
        .ap-thumbnail-container {
          padding: 10px 0;
        }

        .ap-thumbnail-slide {
          padding: 0 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ap-thumbnail-slide:hover {
          opacity: 0.8;
        }

        .ap-thumbnail-slide.active {
          position: relative;
        }

        .ap-thumbnail-slide.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 5px;
          right: 5px;
          height: 3px;
          background: #d4af37;
        }

        .ap-thumbnail-image {
          width: 100%;
          height: 80px;
          object-fit: cover;
          border-radius: 4px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .ap-thumbnail-slide.active .ap-thumbnail-image {
          border-color: #d4af37;
        }

        .ap-modal-info {
          width: 50%;
          padding: 30px;
        }

        .ap-modal-header h2 {
          margin: 0 0 10px 0;
          color: #2c3e50;
        }

        .ap-modal-category {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .ap-modal-category span {
          background: #f1f1f1;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 0.9rem;
          color: #7f8c8d;
        }

        .ap-modal-description {
          color: #34495e;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .ap-modal-specs h3 {
          margin: 0 0 15px 0;
          color: #2c3e50;
        }

        .ap-specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-bottom: 25px;
        }

        .ap-spec-item {
          display: flex;
          flex-direction: column;
        }

        .ap-spec-item strong {
          color: #7f8c8d;
          font-size: 0.9rem;
          margin-bottom: 5px;
        }

        .ap-modal-actions {
          display: flex;
          gap: 15px;
        }

        .ap-modal-quote {
          flex: 1;
          background: #d4af37;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          font-size: 1rem;
        }

        /* Slider arrows */
        .ap-slider-arrow {
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

        .ap-slider-arrow:hover {
          background: #d4af37;
          color: white;
          transform: scale(1.1);
        }

        .slick-prev {
          left: 10px;
        }

        .slick-next {
          right: 10px;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .ap-content {
            flex-direction: column;
          }

          .ap-sidebar {
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            z-index: 100;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            padding-top: 60px;
          }

          .ap-mobile-visible {
            transform: translateX(0);
          }

          .ap-sidebar-header {
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            padding: 15px 20px;
            background: #f8f9fa;
            border-bottom: 1px solid #eee;
          }

          .ap-mobile-filter-btn {
            display: flex;
          }

          .ap-modal-columns {
            flex-direction: column;
          }

          .ap-modal-slider-container,
          .ap-modal-info {
            width: 100%;
          }

          .ap-modal-slider-container {
            padding: 15px;
          }

          .ap-modal-slide {
            height: 300px;
          }

          .ap-modal-info {
            padding: 20px;
          }

          .ap-product-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .ap-product-grid {
            grid-template-columns: 1fr;
          }

          .ap-header {
            flex-direction: column;
          }

          .ap-search-filter {
            flex-direction: column;
            align-items: stretch;
          }

          .ap-mobile-filter-btn {
            width: 100%;
            justify-content: center;
          }

          .ap-subcategory-scroll {
            padding-right: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default AllProductsPage;