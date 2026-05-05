// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';

/* ─────────────── Project Detail Modal ─────────────── */
const ProjectModal = ({ project, onClose }) => {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 2000,
          background: 'rgba(0,0,0,0.75)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px',
          backdropFilter: 'blur(6px)',
        }}
      >
        <motion.div
          className="modal-panel"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 20,
            maxWidth: 720,
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
          }}
        >
          {/* Modal Header Banner */}
          <div
            style={{
              height: 200,
              background: project.isVenture
                ? 'linear-gradient(135deg, #c9a800, #FFD700, #ffe566)'
                : `linear-gradient(135deg, ${project.color}33, ${project.color}88)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', borderRadius: '20px 20px 0 0',
              overflow: 'hidden',
            }}
          >
            {/* Pattern overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }} />
            <div style={{
              width: 80, height: 80, borderRadius: 20,
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 36,
              color: project.isVenture ? '#000' : '#fff',
              position: 'relative', zIndex: 1,
            }}>
              <i className={project.icon} />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute', top: 16, right: 16,
                width: 36, height: 36, borderRadius: 8,
                background: 'rgba(0,0,0,0.3)', border: 'none',
                color: '#fff', fontSize: 16, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 2,
              }}
            >
              <i className="fas fa-xmark" />
            </button>

            {/* Badge */}
            {project.isVenture && (
              <div style={{
                position: 'absolute', top: 16, left: 16,
                background: '#FFD700', color: '#000',
                padding: '4px 12px', borderRadius: 20,
                fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
              }}>
                MY BUSINESS
              </div>
            )}
            {project.featured && (
              <div style={{
                position: 'absolute', top: 16, left: 16,
                background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                color: '#fff',
                padding: '4px 12px', borderRadius: 20,
                fontSize: 11, fontWeight: 700,
              }}>
                ★ FEATURED PROJECT
              </div>
            )}
          </div>

          {/* Modal Body */}
          <div style={{ padding: '32px 36px 36px' }}>

            {/* Title */}
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--text-muted)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
              {project.subtitle}
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 800, color: 'var(--text)', marginBottom: 16 }}>
              {project.title}
            </h2>

            {/* Description */}
            <p style={{ fontSize: 15, color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: 28 }}>
              {project.desc}
            </p>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>
                  Key Highlights
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 10 }}>
                  {project.highlights.map((h, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 10,
                      background: 'var(--bg-alt)', border: '1px solid var(--border)',
                      borderRadius: 10, padding: '12px 16px',
                      fontSize: 14, color: 'var(--text-dim)',
                    }}>
                      <span style={{ color: 'var(--accent)', fontSize: 12, marginTop: 2 }}>▸</span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div style={{ marginBottom: 28 }}>
              <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>
                Tech Stack
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{
                    padding: '5px 14px', borderRadius: 6,
                    background: 'var(--bg-alt)', border: '1px solid var(--border)',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12, color: 'var(--accent)',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 8, borderTop: '1px solid var(--border)' }}>
              {project.isVenture ? (
                <a href={project.googleProfile} target="_blank" rel="noreferrer" className="proj-link-btn google">
                  <i className="fab fa-google" /> Google Reviews
                </a>
              ) : (
                <a href={project.github} target="_blank" rel="noreferrer" className="proj-link-btn">
                  <i className="fab fa-github" /> View Source Code
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="proj-link-btn primary">
                  <i className="fas fa-external-link-alt" /> Visit Live Site
                </a>
              )}
              {project.apk && (
                <a href={project.apk} download className="proj-link-btn android">
                  <i className="fab fa-android" /> Download APK
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─────────────── Project Card ─────────────── */
const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <motion.div
      className={`project-card ${project.isVenture ? 'venture-card' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
    >
      {/* Card Top Banner */}
      <div
        className="project-card-top"
        style={{
          background: project.isVenture
            ? 'linear-gradient(135deg, #c9a800, #FFD700)'
            : `linear-gradient(135deg, ${project.color}22, ${project.color}55)`,
          borderBottom: `1px solid ${project.isVenture ? 'rgba(255,215,0,0.3)' : 'var(--border)'}`,
        }}
      >
        <div className="project-icon-wrap" style={{ background: `${project.color}30`, color: project.isVenture ? '#000' : project.color, border: `1px solid ${project.color}40` }}>
          <i className={project.icon} />
        </div>

        {project.featured && (
          <div className="project-badge badge-featured">★ Featured</div>
        )}
        {project.isVenture && (
          <div className="project-badge badge-venture">My Business</div>
        )}
      </div>

      {/* Card Body */}
      <div className="project-body">
        <div className="project-subtitle">{project.subtitle}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>

        {/* Key Highlights (top 2) */}
        {project.highlights && (
          <div className="project-highlights">
            {project.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="project-highlight">{h}</div>
            ))}
          </div>
        )}

        {/* Tech tags (top 4) */}
        <div className="project-tech">
          {project.tech.slice(0, 5).map((t, i) => (
            <span key={i}>{t}</span>
          ))}
          {project.tech.length > 5 && (
            <span>+{project.tech.length - 5}</span>
          )}
        </div>

        {/* Links + Detail button */}
        <div className="project-links">
          <button
            className="proj-link-btn primary"
            onClick={() => onOpen(project)}
            style={{ flex: 1, justifyContent: 'center' }}
          >
            <i className="fas fa-expand" /> View Details
          </button>

          {project.isVenture ? (
            <a href={project.googleProfile} target="_blank" rel="noreferrer" className="proj-link-btn google">
              <i className="fab fa-google" />
            </a>
          ) : (
            <a href={project.github} target="_blank" rel="noreferrer" className="proj-link-btn">
              <i className="fab fa-github" />
            </a>
          )}

          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="proj-link-btn">
              <i className="fas fa-external-link-alt" />
            </a>
          )}
          {project.apk && (
            <a href={project.apk} download className="proj-link-btn android">
              <i className="fab fa-android" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ─────────────── Main Projects Section ─────────────── */
const Projects = () => {
  const [selected, setSelected]   = useState(null);
  const [filter, setFilter]       = useState('all');

  const filters = [
    { key: 'all',      label: 'All Projects' },
    { key: 'featured', label: '★ Featured' },
    { key: 'web',      label: 'Web' },
    { key: 'mobile',   label: 'Mobile' },
    { key: 'venture',  label: 'Business' },
  ];

  const filterMap = {
    all:      () => true,
    featured: (p) => p.featured,
    web:      (p) => p.tech.some(t => ['React', 'Next.js', 'Django', 'Node.js', 'JavaScript', 'Express.js'].includes(t)),
    mobile:   (p) => p.tech.some(t => ['Flutter', 'Dart', 'Android Studio', 'Java'].includes(t)),
    venture:  (p) => p.isVenture,
  };

  const filtered = projects.filter(filterMap[filter]);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">

        <div className="section-header">
          <p className="section-label">What I've built</p>
          <h2 className="section-title">Projects & <span>Ventures</span></h2>
          <p className="section-desc">
            Production-grade applications — from real-time marketplaces and E2EE mobile apps to financial platforms and IT consultancy.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects-filter">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              className={`filter-btn ${filter === key ? 'active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence>
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onOpen={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
            <i className="fas fa-folder-open" style={{ fontSize: 40, marginBottom: 12, display: 'block' }} />
            No projects in this category yet.
          </div>
        )}

      </div>

      {/* Detail Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default Projects;