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
        
        <div className="projects-container">
          {projects.map((project, index) => (
            <Tilt options={defaultOptions} key={index}>
              <motion.div 
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="project-image">
                  <i className={project.icon}></i>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-buttons">
                    {/* Always show GitHub */}
                    <a href={project.github} className="btn" target="_blank" rel="noreferrer">GitHub</a>
                    
                    {/* ONLY show Live Demo if the link is not empty */}
                    {project.demo && (
                       <a href={project.demo} className="btn btn-outline" target="_blank" rel="noreferrer">Live Demo</a>
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