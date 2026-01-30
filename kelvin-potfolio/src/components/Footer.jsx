// src/components/Footer.jsx
import React from 'react';
import { personalInfo } from '../data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--bg-alt)', padding: '30px 0', textAlign: 'center', marginTop: 'auto' }}>
      <div className="container">
        
        <p style={{ color: 'var(--text-light)', fontSize: '15px', marginBottom: '8px' }}>
          © {currentYear} <strong>{personalInfo.name} {personalInfo.surname}</strong>. All rights reserved.
        </p>
        
        <p style={{ color: 'var(--text-light)', fontSize: '13px', opacity: 0.8 }}>
          Built with <i className="fab fa-react" style={{color: '#61DBFB'}}></i> React & Vite
        </p>

      </div>
    </footer>
  );
};

export default Footer;