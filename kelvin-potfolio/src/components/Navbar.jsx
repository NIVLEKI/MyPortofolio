// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#home',       label: 'Home' },
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills',     label: 'Skills' },
  { href: '#projects',   label: 'Projects' },
  { href: '#contact',    label: 'Contact' },
];

const Navbar = ({ toggleTheme, isDark }) => {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (href) => {
    setActive(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Dark overlay for mobile menu */}
      <div
        className={`nav-overlay ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">

          {/* Logo */}
          <a href="#home" className="nav-logo" onClick={() => handleNavClick('#home')}>
            KELVIN<span>.</span><span style={{ color: 'var(--accent-2)' }}>dev</span>
          </a>

          {/* Desktop Links */}
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={active === href ? 'active' : ''}
                  onClick={() => handleNavClick(href)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
              </button>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <div className="nav-right-mobile">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme"
              style={{ display: 'none' }}
            >
              <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>
            <button
              className="menu-icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <i className={isOpen ? 'fas fa-xmark' : 'fas fa-bars'}></i>
            </button>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;