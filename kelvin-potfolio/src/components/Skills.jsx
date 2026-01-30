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
        
        {/* Changed class to match CSS Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              className="skill-item"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              
              {/* Header: Icon & Name */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div className="skill-icon" style={{ 
                    fontSize: '28px', 
                    color: 'var(--accent-color)', 
                    marginRight: '15px' 
                }}>
                  <i className={skill.icon}></i>
                </div>
                <h3 style={{ margin: 0, fontSize: '18px' }}>{skill.name}</h3>
              </div>

              {/* Progress Bar Area */}
              <div className="skill-bar-container">
                <div className="skill-info" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span style={{ fontSize: '14px', color: 'var(--text-light)' }}>Proficiency</span>
                  <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{skill.level}</span>
                </div>
                
                <div className="skill-bar" style={{ background: '#e0e0e0', borderRadius: '10px', height: '10px', overflow: 'hidden' }}>
                  <motion.div 
                    className="skill-progress" 
                    style={{ 
                        height: '100%', 
                        background: 'var(--accent-color)',
                        borderRadius: '10px'
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;