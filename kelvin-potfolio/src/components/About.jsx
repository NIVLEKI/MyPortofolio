// src/components/About.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [tab, setTab] = useState('education');
  
  // NEW: State to track if image failed to load
  const [imageError, setImageError] = useState(false);

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
          {/* LOGIC: If NO error, show Image. If Error, show Fallback. */}
          {!imageError ? (
            <img 
               src="/images/about.jpg" 
               alt="About Kelvin"
               onError={() => setImageError(true)} // If load fails, switch state to true
               style={{ 
                 width: '100%', 
                 borderRadius: '15px', 
                 boxShadow: 'var(--shadow)',
                 border: '4px solid var(--bg-alt)'
               }}
            />
          ) : (
            /* Fallback Icon (Only shows if imageError is true) */
            <div className="fallback-icon" style={{
              height: '350px', 
              width: '100%',
              background: 'var(--bg-alt)', 
              borderRadius: '15px', 
              display: 'flex', // This is safe now because it's only rendered on error
              alignItems: 'center', 
              justifyContent: 'center',
              border: '2px dashed var(--accent-color)'
            }}>
               <i className="fas fa-user-graduate" style={{fontSize: '80px', color: 'var(--accent-color)'}}></i>
            </div>
          )}
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
            I am a dedicated BSc. IT undergraduate at the University of Embu and a Power Learn Project (PLP) graduate. My passion lies in bridging the gap between secure backend logic and intuitive frontend design. I focus on Mobile Security, Hybrid Encryption, and building scalable full-stack applications.
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
            
            {/* EDUCATION TAB */}
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

            {/* CERTIFICATIONS TAB */}
            {tab === 'certs' && (
              <ul className="tab-list">
                {/* PLP Entry with Download Button */}
                <li>
                  <span>Full Stack Development</span>
                  <strong>MERN Stack Specialization</strong>
                  <small>Power Learn Project (PLP) • Graduated</small>
                  
                  <a 
                    href="/plp-certificate.pdf" 
                    download="Kelvin_PLP_Certificate.pdf"
                    className="btn-sm"
                    style={{marginTop: '10px'}}
                  >
                    <i className="fas fa-file-download"></i> View Certificate
                  </a>
                </li>

                <li>
                  <span>Competency</span>
                  <strong>Cybersecurity Essentials</strong>
                </li>
                <li>
                  <span>Development</span>
                  <strong>Android App Development</strong>
                </li>
              </ul>
            )}

            {/* GOALS TAB */}
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