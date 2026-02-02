// src/components/Projects.jsx
import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { projects } from '../data';

const defaultOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.02,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
}

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects & Ventures</h2>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Tilt options={defaultOptions} key={index}>
              <motion.div 
                className="project-card"
                // 1. CONDITIONAL STYLING: Gold Border if it is a Venture
                style={project.isVenture ? { border: '2px solid #FFD700', position: 'relative' } : {}}
                
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                
                {/* 2. VENTURE BADGE: Shows "MY BUSINESS" label */}
                {project.isVenture && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: '#FFD700',
                    color: '#000',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    zIndex: 10
                  }}>
                    MY BUSINESS
                  </div>
                )}

                {/* Image Area */}
                <div 
                  className="project-img" 
                  style={{
                    height: '200px',
                    // 3. BACKGROUND: Gold Gradient for Business, Blue/Purple for others
                    background: project.isVenture 
                      ? 'linear-gradient(135deg, #FFD700, #FDB931)' 
                      : 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: project.isVenture ? '#000' : '#fff',
                    fontSize: '50px'
                  }}
                >
                  <i className={project.icon}></i>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  
                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} style={project.isVenture ? {borderColor: '#FFD700', color: 'var(--text-color)'} : {}}>{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    
                    {/* 4. LINK LOGIC: Toggle between Google Profile and GitHub */}
                    {project.isVenture ? (
                       // GOOGLE BUSINESS LINK
                       <a href={project.googleProfile} target="_blank" rel="noreferrer" title="View Google Profile" style={{ fontSize: '24px', color: '#DB4437' }}>
                         <i className="fab fa-google"></i>
                       </a>
                    ) : (
                       // GITHUB LINK
                       <a href={project.github} target="_blank" rel="noreferrer" title="View Code" style={{ fontSize: '24px' }}>
                         <i className="fab fa-github"></i>
                       </a>
                    )}
                    
                    {/* Live Website Link */}
                    {project.demo && (
                       <a href={project.demo} target="_blank" rel="noreferrer" title="Visit Website" style={{ fontSize: '20px' }}>
                         <i className="fas fa-external-link-alt"></i>
                       </a>
                    )}

                    {/* 5. APK BUTTON: Only appears if 'apk' exists (NivlockX) */}
                    {project.apk && (
                       <a 
                         href={project.apk} 
                         download 
                         style={{ 
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: '#3ddc84', 
                            color: '#fff',         
                            padding: '6px 14px',
                            borderRadius: '20px',
                            fontSize: '13px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                            marginLeft: 'auto'
                         }}
                       >
                         <i className="fab fa-android" style={{ fontSize: '16px' }}></i>
                         <span>Download APK</span>
                       </a>
                    )}
                  </div>
                </div>

              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;