// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { href: '#home',       label: 'Home',       icon: 'fas fa-house' },
  { href: '#about',      label: 'About',      icon: 'fas fa-user' },
  { href: '#experience', label: 'Experience', icon: 'fas fa-briefcase' },
  { href: '#skills',     label: 'Skills',     icon: 'fas fa-code' },
  { href: '#projects',   label: 'Projects',   icon: 'fas fa-layer-group' },
  { href: '#contact',    label: 'Contact',    icon: 'fas fa-paper-plane' },
];

const Navbar = ({ toggleTheme, isDark }) => {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('#home');
  const menuRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setIsOpen(false);
    };
    if (isOpen) document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [isOpen]);

  const handleNavClick = (href) => {
    setActive(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* ════════════════════════════════
          DESKTOP NAVBAR  (> 640px)
          ════════════════════════════════ */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="nav-logo" onClick={() => handleNavClick('#home')}>
            KELVIN<span>.</span><span style={{ color: 'var(--accent-2)' }}>dev</span>
          </a>

          <ul className="nav-links">
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
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'} />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* ════════════════════════════════
          MOBILE FLOATING WIDGET (≤ 640px)
          Small pill fixed top-right corner
          ════════════════════════════════ */}
      <div className="mob-float-widget" ref={menuRef}>

        {/* Pill: theme + divider + hamburger */}
        <div className={`mob-float-pill ${isOpen ? 'pill-open' : ''}`}>
          <button
            className="mob-float-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'} />
          </button>

          <div className="mob-float-divider" />

          <button
            className="mob-float-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <i className={isOpen ? 'fas fa-xmark' : 'fas fa-bars'} />
          </button>
        </div>

        {/* Dropdown card */}
        <div className={`mob-dropdown ${isOpen ? 'mob-dropdown-open' : ''}`}>
          <div className="mob-dropdown-header">
            KELVIN<span>.</span>dev
          </div>
          <ul className="mob-dropdown-links">
            {NAV_LINKS.map(({ href, label, icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className={active === href ? 'mob-link-active' : ''}
                  onClick={() => handleNavClick(href)}
                >
                  <span className="mob-link-icon"><i className={icon} /></span>
                  <span>{label}</span>
                  {active === href && <span className="mob-link-dot" />}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </>
  );
};

export default Navbar;