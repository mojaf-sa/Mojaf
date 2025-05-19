import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CatalogComponent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const catalogs = [
    {
      id: 1,
      title: "Flooring Catalogue",
      pdfUrl: "https://drive.google.com/file/d/16S5AyahBqGL2dXrJ_eNG2j2UPGEmUxoA/view?usp=sharing",
      thumbnail: "/floorth.png",
      category: "Flooring Solutions"
    },
    {
      id: 2,
      title: "Doors Catalogue",
      pdfUrl: "https://drive.google.com/file/d/1AXswFpJmy2DQxknGwSyiXJvlyIj0TPoI/view?usp=sharing",
      thumbnail: "/door2th.png",
      category: "Door Systems"
    },
    {
      id: 3,
      title: "Screws Catalogue",
      pdfUrl: "https://drive.google.com/file/d/19UHoDRE2I4mrYAlVAnBdEGjNy7Sx196_/view?usp=sharing",
      thumbnail: "/screwsth.png",
      category: "Fastening Solutions"
    },
    {
      id: 4,
      title: "Premium Doors",
      pdfUrl: "https://drive.google.com/file/d/1a97kGN25xUINPmANx9_2qkajgb--RX--/view?usp=sharing",
      thumbnail: "/doorth.png",
      category: "Door Systems"
    },
    {
      id: 5,
      title: "Fasteners Catalogue",
      pdfUrl: "https://drive.google.com/file/d/1YNgJI0dfm1AoZ5nP-f4owQ6S3B5ssUZc/view?usp=sharing",
      thumbnail: "/festth.png",
      category: "Hardware"
    }
  ];

  const handleDownload = (pdfUrl) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0,0,0,0.12)"
    }
  };

  return (
    <div className="catalog-container">
      <div className="catalog-header">
        <div className="breadcrumb">Home / Resources / Catalogues</div>
        <motion.h1 
          className="main-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Product Catalogues
        </motion.h1>
        <p className="subtitle">Browse our comprehensive collection of product catalogues</p>
      </div>
      
      <div className="catalog-grid">
        {catalogs.map((catalog, index) => (
          <motion.div
            key={catalog.id}
            className="catalog-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onMouseEnter={() => setHoveredCard(catalog.id)}
            onMouseLeave={() => setHoveredCard(null)}
            transition={{ delay: index * 0.1 }}
          >
            <div className="card-badge">{catalog.category}</div>
            
            <div 
              className="thumbnail-container" 
              onClick={() => handlePreview(catalog.pdfUrl)}
            >
              <img 
                src={catalog.thumbnail} 
                alt={`${catalog.title} preview`} 
                className="thumbnail-image"
              />
              <div className={`preview-overlay ${hoveredCard === catalog.id ? 'active' : ''}`}>
                <span>Preview Catalogue</span>
                <div className="zoom-icon">🔍</div>
              </div>
            </div>
            
            <h3 className="catalog-title">{catalog.title}</h3>
            
            <div className="button-group">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePreview(catalog.pdfUrl)}
                className="preview-button"
              >
                <span>View Online</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDownload(catalog.pdfUrl)}
                className="download-button"
              >
                <span>Download PDF</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .catalog-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 20px;
          background-color: #f8fafc;
          min-height: 100vh;
        }
        
        .catalog-header {
          margin-bottom: 50px;
          text-align: center;
          padding: 0 20px;
        }
        
        .breadcrumb {
          color: #64748b;
          font-size: 14px;
          margin-bottom: 12px;
          font-weight: 500;
        }
        
        .main-title {
          color: #1e293b;
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 12px 0;
          line-height: 1.2;
          background: #222;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        
        .subtitle {
          color: #64748b;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .catalog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
          padding: 0 20px;
        }
        
        .catalog-card {
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          padding: 25px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }
        
        .card-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background-color: #d4af37;
          color: white;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          z-index: 2;
        }
        
        .catalog-title {
          color: #1e293b;
          font-size: 1.25rem;
          margin: 15px 0;
          font-weight: 600;
          text-align: center;
          flex-grow: 1;
        }
        
        .thumbnail-container {
          position: relative;
          width: 100%;
          height: 220px;
          margin-bottom: 15px;
          cursor: pointer;
          overflow: hidden;
          border-radius: 8px;
          background-color: #f1f5f9;
        }
        
        .thumbnail-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.4s ease;
        }
        
        .catalog-card:hover .thumbnail-image {
          transform: scale(1.03);
        }
        
        .preview-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(30, 41, 59, 0.8);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          padding: 20px;
          text-align: center;
        }
        
        .preview-overlay.active {
          opacity: 1;
        }
        
        .preview-overlay span {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
        }
        
        .zoom-icon {
          font-size: 24px;
          margin-top: 5px;
        }
        
        .button-group {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }
        
        .preview-button, .download-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          flex: 1;
          transition: all 0.3s ease;
          border: none;
        }
        
        .preview-button {
          background-color: #d4af37;
          color: white;
        }
        
        .preview-button:hover {
          background-color: #333333;
        }
        
        .download-button {
          background-color: #ffffff;
          color: #333333;
          border: 1px solid #d4af37;
        }
        
        .download-button:hover {
          background-color: #f8fafc;
          border-color: #333333;
          color: #333333;
        }
        
        @media (max-width: 1024px) {
          .catalog-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
          
          .main-title {
            font-size: 2.2rem;
          }
        }
        
        @media (max-width: 768px) {
          .catalog-container {
            padding: 30px 15px;
          }
          
          .catalog-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 20px;
          }
          
          .main-title {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
          
          .catalog-card {
            padding: 20px;
          }
          
          .thumbnail-container {
            height: 180px;
          }
        }
        
        @media (max-width: 480px) {
          .catalog-header {
            margin-bottom: 30px;
          }
          
          .main-title {
            font-size: 1.8rem;
          }
          
          .catalog-grid {
            grid-template-columns: 1fr;
            padding: 0;
          }
          
          .button-group {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default CatalogComponent;