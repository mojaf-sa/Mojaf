import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilter, FaTimes, FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AllProductsPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sample product data with 50+ products across categories
  const productCategories = [
    'All', 'Flooring', 'Skirting Board', 'Wall Panels', 
    'Insulation', 'Boards', 'Doors', 'Safety Products', 
    'Electrical Items', 'Screws/Fasteners'
  ];

  const subCategories = {
    'Flooring': ['Vinyl/PVC Flooring', 'SPC Flooring', 'LVT Flooring'],
    'Skirting Board': ['MDF Skirting', 'WPC Skirting', 'PS Skirting'],
    'Wall Panels': ['PU Stone Panel', 'Acoustic Wall Panel', 'WPC Wall Panels'],
    'Doors': ['Steel Doors', 'MDF Wooden Door', 'WPC Door']
  };

  // Generate sample products
  useEffect(() => {
    const sampleProducts = [];
    const materials = ['Steel', 'Wood', 'PVC', 'Aluminum', 'Fiberglass'];
    const sizes = ['Small', 'Medium', 'Large', 'Extra Large'];
    const colors = ['White', 'Black', 'Brown', 'Gray', 'Beige'];
    const brands = ['MOJAF', 'Premium', 'Elite', 'Standard', 'Economy'];

    // Generate products for each category
    productCategories.slice(1).forEach(category => {
      const categorySubs = subCategories[category] || [category];
      
      categorySubs.forEach(subCategory => {
        for (let i = 1; i <= 5; i++) {
          sampleProducts.push({
            id: `${category}-${subCategory}-${i}`,
            name: `${subCategory} ${i}`,
            category,
            subCategory,
            description: `High-quality ${subCategory.toLowerCase()} made from ${materials[i % materials.length]} with ${colors[i % colors.length]} finish`,
            specs: `Material: ${materials[i % materials.length]} | Size: ${sizes[i % sizes.length]} | Color: ${colors[i % colors.length]} | Brand: ${brands[i % brands.length]}`,
            images: [
              `https://source.unsplash.com/random/300x300/?${subCategory.replace(/ /g,',')},${i}`,
              `https://source.unsplash.com/random/300x300/?${category.replace(/ /g,',')},${i+1}`,
              `https://source.unsplash.com/random/300x300/?building,material,${i+2}`
            ],
            price: `$${(50 + Math.random() * 200).toFixed(2)}`,
            moq: `${Math.ceil(Math.random() * 10)} units`,
            link: '#'
          });
        }
      });
    });

    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
  }, []);

  // Filter products based on search and category
  useEffect(() => {
    let results = products;
    
    if (selectedCategory !== 'All') {
      results = results.filter(product => product.category === selectedCategory);
    }
    
    if (searchTerm) {
      results = results.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(results);
  }, [searchTerm, selectedCategory, products]);

  // Slider settings for product images
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleQuoteClick = () => {
    navigate('/contact');
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
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
                  setShowMobileFilters(false);
                }}
              >
                {category}
                {selectedCategory === category && <span className="ap-category-count">({filteredProducts.length})</span>}
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
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="ap-product-image"
                    onClick={() => openProductModal(product)}
                  />
                  <div className="ap-product-badge">{product.category}</div>
                </div>
                
                <div className="ap-product-info">
                  <h3 className="ap-product-name">{product.name}</h3>
                  <p className="ap-product-category">{product.subCategory}</p>
                  <p className="ap-product-description">{product.description}</p>
                  <div className="ap-product-specs">
                    <span>Price: {product.price}</span>
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
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Detail Modal */}
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
              <div className="ap-modal-slider">
                <Slider {...sliderSettings}>
                  {selectedProduct.images.map((img, index) => (
                    <div key={index} className="ap-modal-slide">
                      <img 
                        src={img} 
                        alt={`${selectedProduct.name} ${index + 1}`}
                        className="ap-modal-image"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              
              <div className="ap-modal-info">
                <div className="ap-modal-header">
                  <h2>{selectedProduct.name}</h2>
                  <div className="ap-modal-category">
                    <span>{selectedProduct.category}</span>
                    {selectedProduct.subCategory && <span>{selectedProduct.subCategory}</span>}
                  </div>
                </div>
                
                <p className="ap-modal-description">{selectedProduct.description}</p>
                
                <div className="ap-modal-specs">
                  <h3>Specifications</h3>
                  <div className="ap-specs-grid">
                    <div>
                      <strong>Material:</strong>
                      <span>{selectedProduct.specs.split('|')[0]?.split(':')[1]?.trim() || 'N/A'}</span>
                    </div>
                    <div>
                      <strong>Size:</strong>
                      <span>{selectedProduct.specs.split('|')[1]?.split(':')[1]?.trim() || 'N/A'}</span>
                    </div>
                    <div>
                      <strong>Color:</strong>
                      <span>{selectedProduct.specs.split('|')[2]?.split(':')[1]?.trim() || 'N/A'}</span>
                    </div>
                    <div>
                      <strong>Brand:</strong>
                      <span>{selectedProduct.specs.split('|')[3]?.split(':')[1]?.trim() || 'N/A'}</span>
                    </div>
                    <div>
                      <strong>Price:</strong>
                      <span>{selectedProduct.price}</span>
                    </div>
                    <div>
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
                  <a 
                    href={selectedProduct.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ap-modal-link"
                  >
                    View Full Specifications
                  </a>
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
          margin-bottom: 30px;
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

        .ap-product-category {
          font-size: 0.9rem;
          color: #7f8c8d;
          margin: 0 0 10px 0;
        }

        .ap-product-description {
          color: #34495e;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 15px;
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

        .ap-modal-slider {
          width: 50%;
          padding: 20px;
        }

        .ap-modal-slide {
          height: 400px;
        }

        .ap-modal-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
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

        .ap-specs-grid div {
          display: flex;
          flex-direction: column;
        }

        .ap-specs-grid strong {
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

        .ap-modal-link {
          flex: 1;
          background: #2c3e50;
          color: white;
          text-align: center;
          padding: 12px;
          border-radius: 4px;
          text-decoration: none;
          font-size: 1rem;
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

          .ap-modal-slider,
          .ap-modal-info {
            width: 100%;
          }

          .ap-modal-slider {
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
        }
      `}</style>
    </div>
  );
};

export default AllProductsPage;