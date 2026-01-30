// src/components/About.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [tab, setTab] = useState('education');
  const [imageError, setImageError] = useState(false);

  const handleTab = (selectedTab) => {
    setTab(selectedTab);
  };

  // Animation variants for tab content
  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
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
          {!imageError ? (
            <div className="img-wrapper">
                <img 
                src="/images/about.jpg" 
                alt="About Kelvin"
                onError={() => setImageError(true)}
                />
            </div>
          ) : (
            /* Fallback Icon */
            <div className="fallback-box">
               <i className="fas fa-user-graduate"></i>
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
          <div className="section-title left-align">
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

          {/* Tab Content Area */}
          <div className="tab-content-wrapper" style={{ minHeight: '180px' }}>
            <AnimatePresence mode="wait">
                
                {/* EDUCATION TAB */}
                {tab === 'education' && (
                <motion.ul 
                    key="education"
                    className="tab-list"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <li>
                        <span>Currently Enrolled</span>
                        <strong>BSc. Information Technology</strong>
                        <small>University of Embu</small>
                    </li>
                    <li>
                        <span>Focus Areas</span>
                        <strong>Network Security & Mobile Dev</strong>
                    </li>
                </motion.ul>
                )}

                {/* CERTIFICATIONS TAB */}
                {tab === 'certs' && (
                <motion.ul 
                    key="certs"
                    className="tab-list"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <li>
                        <span>Full Stack Development</span>
                        <strong>MERN Stack Specialization</strong>
                        <small>Power Learn Project (PLP) • Graduated</small>
                        
                        {/* Ensure 'plp-certificate.pdf' is in your public folder */}
                        <a 
                            href="/plpcertificate.pdf" 
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
                </motion.ul>
                )}

                {/* GOALS TAB */}
                {tab === 'goals' && (
                <motion.ul 
                    key="goals"
                    className="tab-list"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <li>
                        <span>Research</span>
                        <strong>Implementing Hybrid E2EE in Mobile Apps</strong>
                    </li>
                    <li>
                        <span>Community</span>
                        <strong>Building Open Source Security Tools</strong>
                    </li>
                </motion.ul>
                )}
            </AnimatePresence>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;