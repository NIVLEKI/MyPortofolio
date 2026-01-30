// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
  return (
    <section className="section" id="skills" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
        </div>
        
        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div 
              className="skill-item"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <motion.div 
                  className="skill-progress" 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;