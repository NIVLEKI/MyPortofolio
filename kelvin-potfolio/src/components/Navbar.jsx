// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = ({ toggleTheme, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow to navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container header-container">
        <a href="#home" className="logo">Kelvin<span>Kariuki</span></a>
        
        <div className="header-controls">
            <button className="theme-toggle" onClick={toggleTheme}>
            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>

            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
        </div>
        
        <nav>
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;