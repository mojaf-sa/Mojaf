import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  // Update active link when route changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-links') && !event.target.closest('.hamburger')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <style>{`
        .header {
          background-color: #fff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 100;
          
        }
        
        .logo-container {
          display: flex;
          align-items: center;
          text-decoration: none;
          z-index: 1001;
        }
        
        .logo {
          height: 48px;
          width: auto;
          object-fit: cover;
          border-radius: 5%;
        }
        
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: all 0.3s;
          padding: 0.5rem 0;
          position: relative;
        }
        
        .nav-links a:hover {
          color: #FFD700;
        }
        
        .nav-links a.active {
          color: #FFD700;
          border-bottom: 2px dashed #FFD700;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #FFD700;
          transition: width 0.3s;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }

        /* Dropdown (Blog) */
        .dropdown{position:relative}
        .dropdown > a, .dropdown > button{display:inline-block;padding:0.5rem 0.75rem;text-decoration:none;color:#333;position:relative}
        .dropdown-menu{position:absolute;top:2.6rem;left:0;background:#fff;border:1px solid rgba(0,0,0,.12);border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.12);padding:0.25rem;display:none;min-width:260px;z-index:1002}
        .dropdown:hover .dropdown-menu{display:block}
        .dropdown-menu a{display:block;padding:0.5rem 0.75rem;border-radius:8px;color:#111827;text-decoration:none}
        .dropdown-menu a:hover{background:#f3f4f6}
        
        .hamburger {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #333;
          z-index: 1001;
        }
        
        .close-icon {
          display: none;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            left: ${isMenuOpen ? '0' : '-100%'};
            width: 70%;
            height: 100vh;
            background-color: #fff;
            flex-direction: column;
            gap: 1rem;
            padding: 6rem 2rem 2rem;
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
            transition: left 0.3s ease;
            z-index: 1000;
          }
          
          .nav-links a {
            padding: 0.8rem;
            border-bottom: 1px solid #eee;
          }
          
          .hamburger {
            display: ${isMenuOpen ? 'none' : 'block'};
          }
          
          .close-icon {
            display: ${isMenuOpen ? 'block' : 'none'};
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 1001;
          }
        }
      `}</style>

      <header className="header">
        <Link to="/" className="logo-container" onClick={() => handleLinkClick('/')}>
          <img 
            src='/MOJ.jpg'
            alt="Company Logo" 
            className="logo" 
          />
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </button>
        
        {isMenuOpen && (
          <button className="close-icon" onClick={toggleMenu}>
            <FaTimes />
          </button>
        )}

        <nav className="nav-links">
          <Link 
            to="/" 
            className={activeLink === '/' ? 'active' : ''}
            onClick={() => handleLinkClick('/')}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={activeLink === '/about' ? 'active' : ''}
            onClick={() => handleLinkClick('/about')}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={activeLink === '/services' ? 'active' : ''}
            onClick={() => handleLinkClick('/services')}
          >
            Services
          </Link>
          <Link 
            to="/all-products" 
            className={activeLink === '/all-products' ? 'active' : ''}
            onClick={() => handleLinkClick('/all-products')}
          >
            Products
          </Link>
          <Link 
            to="/catalogs" 
            className={activeLink === '/catalogs' ? 'active' : ''}
            onClick={() => handleLinkClick('/catalogs')}
          >
            Catalogs
          </Link>
          <Link 
            to="/partners" 
            className={activeLink === '/partners' ? 'active' : ''}
            onClick={() => handleLinkClick('/partners')}
          >
            Partners
          </Link>
          <div className="dropdown">
            <a href="/blog/">Blog</a>
            <div className="dropdown-menu">
              <a href="/construction-materials.html">Construction Materials</a>
              <a href="/fasteners-screws.html">Fasteners & Screws</a>
              <a href="/wall-skirting.html">Wall Skirting</a>
            </div>
          </div>
          <Link 
            to="/contact" 
            className={activeLink === '/contact' ? 'active' : ''}
            onClick={() => handleLinkClick('/contact')}
          >
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;