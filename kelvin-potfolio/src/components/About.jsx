// src/components/About.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = [
  { key: 'education',   label: 'Education' },
  { key: 'certs',       label: 'Certifications' },
  { key: 'goals',       label: 'Goals' },
];

const tabContent = {
  education: [
    {
      label: 'Currently Enrolled · 2022 – 2026',
      title: 'BSc. Information Technology',
      sub:   'University of Embu',
      extra: 'Focus: Network Security, Mobile Development, DSA',
    },
    {
      label: 'Google Developer Group',
      title: 'GDG Member — University of Embu Chapter',
      sub:   'Tech talks, workshops & cloud dev sessions',
    },
    {
      label: 'KCSE · 2018 – 2021',
      title: 'Gathera Secondary School',
    },
  ],
  certs: [
    {
      label: 'Completed · 2025',
      title: 'Full-Stack Web Development Certificate',
      sub:   'Power Learn Project (PLP) — Python, JavaScript, SQL & modern web frameworks',
      download: '/plpcertificate.pdf',
      downloadLabel: 'View Certificate',
    },
    {
      label: 'Competency',
      title: 'Cybersecurity Essentials',
      sub:   'End-to-End Encryption, Mobile Security & JWT Auth',
    },
  ],
  goals: [
    {
      label: 'Research',
      title: 'Hybrid E2EE in Mobile Applications',
      sub:   'Advancing RSA/AES cryptographic architecture for mobile',
    },
    {
      label: 'Community',
      title: 'Open Source Security Tooling',
      sub:   'Contributing developer tools to the security community',
    },
    {
      label: 'Career',
      title: 'Software Engineer — Cloud & Security',
      sub:   'Building impactful, constitution-driven software at scale',
    },
  ],
};

const tabVariants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.18 } },
};

const About = () => {
  const [tab, setTab]           = useState('education');
  const [imgError, setImgError] = useState(false);

  return (
    <section className="section about-section" id="about">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">About <span>Me</span></h2>
        </div>

        <div className="about-grid">

          {/* ── LEFT: Image ── */}
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="about-img-frame">
              {!imgError ? (
                <img
                  src="/images/about.jpeg"
                  alt="Kelvin Kariuki"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="about-img-fallback">
                  <i className="fas fa-user-graduate" />
                </div>
              )}
            </div>

            {/* Floating stat badge */}
            <div className="about-img-badge">
              <div className="badge-num">3+</div>
              <div className="badge-text">Years of<br/>Building</div>
            </div>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="section-label" style={{ justifyContent: 'flex-start', marginBottom: 16 }}>
              Nyeri, Kenya
            </p>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 16 }}>
              Developer &<br /><span>Security Enthusiast</span>
            </h2>

            <p className="about-intro">
              I'm a dedicated BSc. IT undergraduate at the University of Embu and a Power Learn Project graduate. My passion is bridging the gap between secure backend logic and intuitive frontend design — managing every layer from database schema to cloud deployment.
            </p>

            <p className="about-intro" style={{ marginTop: '-8px' }}>
              I run <strong>Nivlek Solutions</strong>, an IT consultancy providing web development and SEO to local clients, rated <strong style={{ color: 'var(--accent)' }}>5 stars on Google Reviews</strong>.
            </p>

            {/* Tabs Nav */}
            <div className="about-tabs">
              {TABS.map(({ key, label }) => (
                <button
                  key={key}
                  className={`tab-btn ${tab === key ? 'active' : ''}`}
                  onClick={() => setTab(key)}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="tab-content-area">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  className="tab-card"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {tabContent[tab].map((item, i) => (
                    <div className="tab-item" key={i}>
                      <div className="tab-item-label">{item.label}</div>
                      <div className="tab-item-title">{item.title}</div>
                      {item.sub   && <div className="tab-item-sub">{item.sub}</div>}
                      {item.extra && <div className="tab-item-sub">{item.extra}</div>}
                      {item.download && (
                        <a
                          href={item.download}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline"
                          style={{ marginTop: 12 }}
                        >
                          <i className="fas fa-file-arrow-down" /> {item.downloadLabel}
                        </a>
                      )}
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;