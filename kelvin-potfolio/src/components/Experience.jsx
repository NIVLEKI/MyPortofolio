// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">

        <div className="section-header">
          <p className="section-label">Work history</p>
          <h2 className="section-title">My <span>Experience</span></h2>
          <p className="section-desc">
            Hands-on industry exposure working with enterprise ERP systems, field data tools, and customer-facing platforms.
          </p>
        </div>

        <div className="experience-grid">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="exp-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="exp-header">
                <div
                  className="exp-icon-wrap"
                  style={{ background: `${exp.color}18`, color: exp.color }}
                >
                  <i className={exp.icon} />
                </div>

                <div className="exp-meta">
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-badges">
                    <span className="exp-badge type-badge">
                      <i className="fas fa-circle" style={{ fontSize: 6, marginRight: 4 }} />
                      {exp.type}
                    </span>
                    <span className="exp-badge">Nyeri, Kenya</span>
                  </div>
                </div>

                <div className="exp-period">
                  {exp.period.split('–').map((part, i) => (
                    <span key={i} style={{ display: 'block' }}>{part.trim()}{i === 0 ? ' —' : ''}</span>
                  ))}
                </div>
              </div>

              <div className="exp-points">
                {exp.points.map((point, i) => (
                  <div className="exp-point" key={i}>{point}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;