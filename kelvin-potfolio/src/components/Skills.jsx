// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">

        <div className="section-header">
          <p className="section-label">Technical expertise</p>
          <h2 className="section-title">My <span>Skills</span></h2>
          <p className="section-desc">
            A full-stack toolkit — from frontend frameworks and mobile development to cloud infrastructure and cryptographic security.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-cat-header">
                <div
                  className="skill-cat-icon"
                  style={{ background: `${category.color}18`, color: category.color }}
                >
                  <i className={category.icon} />
                </div>
                <span className="skill-cat-name">{category.category}</span>
              </div>

              <div className="skill-tags">
                {category.items.map((item, i) => (
                  <span className="skill-tag" key={i}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;