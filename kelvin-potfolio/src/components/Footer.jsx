// src/components/Footer.jsx
import React from 'react';
import { personalInfo } from '../data';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">

        <div className="footer-copy">
          © {year} <strong>{personalInfo.name} {personalInfo.surname}</strong>. All rights reserved.
        </div>

        <div className="footer-built">
          <span>Built with</span>
          <i className="fab fa-react react-icon" title="React" />
          <span>React + Vite</span>
          <span style={{ color: 'var(--border)', margin: '0 4px' }}>·</span>
          <span>Contact Me 0717328354.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;