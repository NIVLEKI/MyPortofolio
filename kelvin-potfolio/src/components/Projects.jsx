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
        
        {/* Changed class to match CSS Grid */}
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
                
                {/* Image Area - Using Gradient & Icon as placeholder */}
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
                  
                  {/* Changed class to match CSS */}
                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                  
                  {/* Changed class to match CSS */}
                  <div className="project-links">
                    {/* GitHub Link */}
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                    
                    {/* Live Demo Link (Only if it exists) */}
                    {project.demo && (
                       <a href={project.demo} target="_blank" rel="noreferrer">
                         <i className="fas fa-external-link-alt"></i>
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