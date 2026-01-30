// src/components/About.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [tab, setTab] = useState('education');

  const handleTab = (selectedTab) => {
    setTab(selectedTab);
  };

  return (
    <section className="section" id="about">
      <div className="container about-container">
        
        {/* Left Side: Image/Visual */}
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Using a tech-themed placeholder or your image */}
          <img 
             src="/images/WALL 5_1.jpg" 
             alt="About Kelvin"
             onError={(e) => {
               e.target.style.display = 'none';
               e.target.nextSibling.style.display = 'flex';
             }} 
          />
          {/* Fallback Icon if image fails */}
          <div className="fallback-icon" style={{display: 'none', height: '300px', background: 'var(--bg-alt)', borderRadius: '15px', alignItems: 'center', justifyContent: 'center'}}>
             <i className="fas fa-user-graduate" style={{fontSize: '80px', color: 'var(--accent-color)'}}></i>
          </div>
        </motion.div>

        {/* Right Side: Content & Tabs */}
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="section-title" style={{textAlign: 'left', marginBottom: '20px'}}>
            <h2>About Me</h2>
          </div>
          
          <p className="about-text">
            I am a dedicated BSc. IT undergraduate at the University of Embu, passionate about bridging the gap between secure backend logic and intuitive frontend design. My journey involves deep dives into Mobile Security, Hybrid Encryption, and full-stack web development.
          </p>

          {/* Tabs Navigation */}
          <div className="about-tabs">
            <button 
              className={`tab-btn ${tab === 'education' ? 'active' : ''}`} 
              onClick={() => handleTab('education')}
            >
              Education
            </button>
            <button 
              className={`tab-btn ${tab === 'certs' ? 'active' : ''}`} 
              onClick={() => handleTab('certs')}
            >
              Certifications
            </button>
            <button 
              className={`tab-btn ${tab === 'goals' ? 'active' : ''}`} 
              onClick={() => handleTab('goals')}
            >
              Goals
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {tab === 'education' && (
              <ul className="tab-list">
                <li>
                  <span>Currently Enrolled</span>
                  <strong>BSc. Information Technology</strong>
                  <small>University of Embu</small>
                </li>
                <li>
                  <span>Focus Areas</span>
                  <strong>Network Security & Mobile Dev</strong>
                </li>
              </ul>
            )}

            {tab === 'certs' && (
              <ul className="tab-list">
                <li>
                  <span>Competency</span>
                  <strong>Cybersecurity Essentials</strong>
                </li>
                <li>
                  <span>Development</span>
                  <strong>Android App Development</strong>
                </li>
                <li>
                  <span>Frameworks</span>
                  <strong>React & Django Fullstack</strong>
                </li>
              </ul>
            )}

            {tab === 'goals' && (
              <ul className="tab-list">
                <li>
                  <span>Research</span>
                  <strong>Implementing Hybrid E2EE in Mobile Apps</strong>
                </li>
                <li>
                  <span>Community</span>
                  <strong>Building Open Source Security Tools</strong>
                </li>
              </ul>
            )}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;