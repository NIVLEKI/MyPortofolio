// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = ({ toggleTheme, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Handle Scroll Effect (Adds background when scrolling down)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
      <div className="container nav-container">
        {/* Logo links to top (#home) */}
        <a href="#home" className="logo">Kelvin<span>.</span></a>
        
        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
            <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {/* UPDATED: Changed #hero to #home to match Hero.jsx */}
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {isDark ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;