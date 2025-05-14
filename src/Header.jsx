import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Header.css'; // Make sure you create and import styles
import Hero from './Hero';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const navigate = useNavigate();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

    const handleClick = (e) => {
  e.preventDefault();
  navigate('/all-products');
};

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>MOJAF</h1>
            <span>Your Procurement Partner</span>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#hero1">Home</a></li>
              <li><a href="#in-info">About</a></li>
              <li><a href="#ss-services">Services</a></li>
              <li><a href="/all-products" onClick={handleClick}>Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <FaBars />
            </div>
          </nav>
        </div>
      </header>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href="#hero1" onClick={toggleMobileMenu}>Home</a></li>
            <li><a href="#in-info" onClick={toggleMobileMenu}>About</a></li>
            <li><a href="#ss-services" onClick={toggleMobileMenu}>Services</a></li>
            <li><a href="/all-products" onClick={()=>{
              handleClick()
              toggleMobileMenu()
              }}>Products</a></li>
            <li><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
