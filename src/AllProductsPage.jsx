import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilter, FaTimes, FaQuoteRight, FaStar } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { allProducts, productCategories, subCategories } from './product.js';
import Header from './Header.jsx';

const AllProductsPage = () => {
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [loading, setLoading] = useState(true);

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
        (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.subCategory && product.subCategory.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredProducts(results);
    setLoading(false);
  }, [searchTerm, selectedCategory, selectedSubCategory]);

  const handleQuoteClick = () => {
    navigate('/contact');
  };

  const renderRating = (rating) => {
    return (
      <div className="ap-product-rating">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={i < rating ? 'ap-star-filled' : 'ap-star-empty'} 
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="ap-container">
        {/* Header with optimized animated background */}
        <div className="ap-header">
          <div className="ap-header-slideshow">
            {allProducts.slice(0, 16).map((product, index) => (
              product.images?.[0] && (
                <div key={index} className="ap-header-slide-container" style={{ '--delay': index * 3 }}>
                  <img 
                    src={product.images[0]}
                    alt={product.name}
                    className="ap-header-slide"
                    loading="eager"
                  />
                  <div className="ap-header-slide-overlay"></div>
                </div>
              )
            ))}
          </div>
          
          <div className="ap-header-content">
            <h1 className="ap-title">Our Product Collection</h1>
            <p className="ap-subtitle">Discover high-quality materials for your next project</p>
            
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
        </div>

        {/* Rest of your existing code remains exactly the same */}
        {selectedCategory !== 'All' && (
          <div className="ap-subcategory-filter">
            <div className="ap-subcategory-scroll">
              {subCategories[selectedCategory]?.map(subCat => (
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

          <div className="ap-product-list">
            {loading ? (
              <div className="ap-loading">
                <div className="ap-loading-spinner"></div>
                <p>Loading products...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div key={product.id} className="ap-product-card-horizontal">
                  <div className="ap-product-image-container">
                    {product.images?.length > 0 ? (
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="ap-product-image"
                        loading="lazy"
                      />
                    ) : (
                      <div className="ap-product-image-placeholder">
                        {product.name}
                      </div>
                    )}
                    <div className="ap-product-badge">{product.category}</div>
                  </div>
                  
                  <div className="ap-product-info">
                    <div className="ap-product-header">
                      <h3 className="ap-product-name">{product.name}</h3>
                      <p className="ap-product-subcategory">{product.subCategory}</p>
                      {product.rating > 0 && renderRating(product.rating)}
                    </div>
                    
                    {product.description && (
                      <p className="ap-product-description">{product.description}</p>
                    )}
                    
                    {product.specs && Object.keys(product.specs).length > 0 && (
                      <div className="ap-product-specs">
                        <h4>Specifications:</h4>
                        <ul>
                          {Object.entries(product.specs).map(([key, value]) => (
                            <li key={key}>
                              <strong>{key}:</strong> {value}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="ap-product-actions">
                      <Link 
                        to={`/products/${product.id}`}
                        className="ap-details-button"
                      >
                        View Details
                      </Link>
                      <button 
                        className="ap-quote-button"
                        onClick={handleQuoteClick}
                      >
                        <FaQuoteRight /> Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="ap-no-results">
                <img 
                  src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif" 
                  alt="No results found" 
                  className="ap-no-results-image"
                />
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

        <style jsx="true">{`
          .ap-container {
            font-family: 'Inter', sans-serif;
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px 40px;
            background-color: #f5f5f5;
          }

          /* Improved Header Styles */
          .ap-header {
            background: linear-gradient(135deg, rgba(44, 62, 80, 0.92) 0%, rgba(26, 37, 47, 0.92) 100%);
            color: white;
            padding: 40px 0;
            margin: 0 -20px 30px;
            position: relative;
            overflow: hidden;
            min-height: 400px;
            display: flex;
            align-items: center;
            border-radius: 0 0 10px 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }

          .ap-header-slideshow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
          }

          .ap-header-slide-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            animation: slideFade 24s infinite;
            animation-delay: calc(var(--delay) * 1s);
          }

          .ap-header-slide {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            filter: blur(2px) brightness(0.7);
            transform: scale(1.1);
            transition: transform 8s ease-out;
          }

          .ap-header-slide-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
          }

          @keyframes slideFade {
            0% {
              opacity: 0;
              transform: scale(1);
            }
            8% {
              opacity: 1;
            }
            12% {
              opacity: 1;
              transform: scale(1.03);
            }
            20% {
              opacity: 0;
              transform: scale(1.05);
            }
            100% {
              opacity: 0;
            }
          }

          .ap-header-content {
            position: relative;
            z-index: 2;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            width: 100%;
          }

          /* Rest of your existing styles remain exactly the same */
          .ap-title {
            font-size: 2.5rem;
            margin: 0 0 10px 0;
            font-weight: 700;
          }

          .ap-subtitle {
            font-size: 1.1rem;
            opacity: 0.9;
            margin: 0 0 25px 0;
          }

          .ap-search-filter {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
          }

          .ap-search-box {
            flex: 1;
            max-width: 600px;
            position: relative;
          }

          .ap-search-icon {
            position: absolute;
            left: 18px;
            top: 50%;
            transform: translateY(-50%);
            color: #7f8c8d;
          }

          .ap-search-input {
            width: 100%;
            padding: 14px 20px 14px 50px;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }

          .ap-search-input:focus {
            outline: none;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
          }

          .ap-mobile-filter-btn {
            display: none;
            background: #d4af37;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 8px;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.2s ease;
          }

          .ap-mobile-filter-btn:hover {
            background: #c19b2e;
            transform: translateY(-2px);
          }

          .ap-subcategory-filter {
            margin-bottom: 25px;
            overflow-x: auto;
            padding-bottom: 15px;
          }

          .ap-subcategory-scroll {
            display: flex;
            gap: 12px;
            padding: 8px 0;
          }

          .ap-subcategory-btn {
            background: #f5f5f5;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            white-space: nowrap;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 0.95rem;
            font-weight: 500;
          }

          .ap-subcategory-btn:hover {
            background: #e0e0e0;
            transform: translateY(-2px);
          }

          .ap-subcategory-btn.active {
            background: #d4af37;
            color: white;
            box-shadow: 0 4px 8px rgba(212, 175, 55, 0.3);
          }

          .ap-content {
            display: flex;
            gap: 30px;
          }

          .ap-sidebar {
            width: 280px;
            flex-shrink: 0;
            background: white;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            height: fit-content;
          }

          .ap-sidebar-header {
            display: none;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }

          .ap-sidebar-header h3 {
            font-size: 1.3rem;
            margin: 0;
          }

          .ap-close-sidebar {
            background: none;
            border: none;
            font-size: 1.3rem;
            color: #7f8c8d;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .ap-close-sidebar:hover {
            color: #2c3e50;
            transform: rotate(90deg);
          }

          .ap-category-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .ap-category-item {
            padding: 14px 18px;
            margin-bottom: 6px;
            border-radius: 6px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.2s ease;
            font-weight: 500;
          }

          .ap-category-item:hover {
            background: #f8f9fa;
            transform: translateX(5px);
          }

          .ap-active-category {
            background: #d4af37;
            color: white;
            font-weight: 600;
          }

          .ap-category-count {
            font-size: 0.85rem;
            opacity: 0.8;
            background: rgba(255, 255, 255, 0.2);
            padding: 2px 8px;
            border-radius: 10px;
          }

          .ap-loading {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 50px;
            grid-column: 1 / -1;
          }

          .ap-loading-spinner {
            width: 50px;
            height: 50px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #d4af37;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 20px;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .ap-product-list {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 25px;
          }

          .ap-product-card-horizontal {
            display: flex;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            position: relative;
          }

          .ap-product-card-horizontal:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          }

          .ap-product-image-container {
            position: relative;
            width: 320px;
            flex-shrink: 0;
            overflow: hidden;
          }

          .ap-product-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .ap-product-card-horizontal:hover .ap-product-image {
            transform: scale(1.05);
          }

          .ap-product-image-placeholder {
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 20px;
            color: #7f8c8d;
            font-weight: 600;
            min-height: 220px;
            font-size: 1.1rem;
          }

          .ap-product-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 0.8rem;
            font-weight: 500;
            z-index: 1;
          }

          .ap-product-info {
            flex: 1;
            padding: 30px;
            display: flex;
            flex-direction: column;
          }

          .ap-product-header {
            margin-bottom: 18px;
          }

          .ap-product-name {
            font-size: 1.5rem;
            color: #2c3e50;
            margin: 0 0 8px 0;
            font-weight: 700;
          }

          .ap-product-subcategory {
            font-size: 0.95rem;
            color: #d4af37;
            margin: 0 0 12px 0;
            font-weight: 600;
          }

          .ap-product-rating {
            display: flex;
            gap: 4px;
            margin: 10px 0;
          }

          .ap-star-filled {
            color: #FFD700;
            font-size: 0.9rem;
          }

          .ap-star-empty {
            color: #ddd;
            font-size: 0.9rem;
          }

          .ap-product-description {
            color: #4a5568;
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 20px;
            text-align: justify;
          }

          .ap-product-specs {
            margin-bottom: 25px;
          }

          .ap-product-specs h4 {
            font-size: 1.1rem;
            color: #2c3e50;
            margin: 0 0 12px 0;
            font-weight: 600;
          }

          .ap-product-specs ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 12px;
          }

          .ap-product-specs li {
            font-size: 0.95rem;
            color: #4a5568;
            padding: 8px 0;
            border-bottom: 1px dashed #eee;
          }

          .ap-product-specs strong {
            color: #2c3e50;
            font-weight: 600;
          }

          .ap-product-actions {
            display: flex;
            gap: 15px;
            margin-top: auto;
          }

          .ap-quote-button {
            background: linear-gradient(135deg, #d4af37 0%, #c19b2e 100%);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.95rem;
            font-weight: 600;
            box-shadow: 0 4px 8px rgba(212, 175, 55, 0.3);
          }

          .ap-quote-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(212, 175, 55, 0.4);
          }

          .ap-details-button {
            background: linear-gradient(135deg, #2c3e50 0%, #1a252f 100%);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            text-align: center;
            font-size: 0.95rem;
            font-weight: 600;
            box-shadow: 0 4px 8px rgba(44, 62, 80, 0.2);
          }

          .ap-details-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(44, 62, 80, 0.3);
          }

          .ap-no-results {
            grid-column: 1 / -1;
            text-align: center;
            padding: 50px 20px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          }

          .ap-no-results-image {
            max-width: 300px;
            margin-bottom: 20px;
          }

          .ap-no-results h3 {
            color: #2c3e50;
            margin-bottom: 10px;
            font-size: 1.5rem;
          }

          .ap-no-results p {
            color: #7f8c8d;
            margin-bottom: 25px;
            font-size: 1.1rem;
          }

          .ap-clear-filters {
            background: linear-gradient(135deg, #d4af37 0%, #c19b2e 100%);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 8px rgba(212, 175, 55, 0.3);
          }

          .ap-clear-filters:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(212, 175, 55, 0.4);
          }

          @media (max-width: 1200px) {
            .ap-product-image-container {
              width: 280px;
            }
          }

          @media (max-width: 992px) {
            .ap-product-card-horizontal {
              flex-direction: column;
            }

            .ap-product-image-container {
              width: 100%;
              height: 280px;
            }
          }

          @media (max-width: 768px) {
            .ap-header {
              padding: 30px 0;
              min-height: 350px;
            }

            .ap-title {
              font-size: 2rem;
            }

            .ap-content {
              flex-direction: column;
            }

            .ap-sidebar {
              width: 100%;
              position: fixed;
              top: 0;
              left: 0;
              bottom: 0;
              z-index: 1000;
              transform: translateX(-100%);
              transition: transform 0.3s ease;
              padding-top: 70px;
              overflow-y: auto;
            }

            .ap-mobile-visible {
              transform: translateX(0);
            }

            .ap-sidebar-header {
              display: flex;
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              padding: 15px 20px;
              background: white;
              border-bottom: 1px solid #eee;
              z-index: 1001;
            }

            .ap-mobile-filter-btn {
              display: flex;
            }

            .ap-product-specs ul {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 576px) {
            .ap-header {
              padding: 25px 0;
              min-height: 300px;
            }

            .ap-title {
              font-size: 1.8rem;
            }

            .ap-subtitle {
              font-size: 1rem;
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

            .ap-product-actions {
              flex-direction: column;
            }

            .ap-no-results-image {
              max-width: 200px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default AllProductsPage;