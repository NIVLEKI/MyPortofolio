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
          <h2>My Projects</h2>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Tilt options={defaultOptions} key={index}>
              <motion.div 
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                
                {/* Image Area */}
                <div 
                  className="project-img" 
                  style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
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
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {/* 1. GitHub Link */}
                    <a href={project.github} target="_blank" rel="noreferrer" title="View Code" style={{ fontSize: '24px' }}>
                      <i className="fab fa-github"></i>
                    </a>
                    
                    {/* 2. Live Demo Link */}
                    {project.demo && (
                       <a href={project.demo} target="_blank" rel="noreferrer" title="Live Demo" style={{ fontSize: '20px' }}>
                         <i className="fas fa-external-link-alt"></i>
                       </a>
                    )}

                    {/* 3. NEW: Highlighted APK Button */}
                    {project.apk && (
                       <a 
                         href={project.apk} 
                         download 
                         style={{ 
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: '#3ddc84', // Android Green Background
                            color: '#fff',         // White Text
                            padding: '6px 14px',
                            borderRadius: '20px',
                            fontSize: '13px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                            marginLeft: 'auto'     // Pushes button to the right
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