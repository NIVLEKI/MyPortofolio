// src/components/Hero.jsx
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const Hero = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="hero-section">

      {/* Animated background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="container hero-container">

        {/* ── LEFT: Text ── */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Status badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-dot" />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <h1 className="hero-name">
            <span className="name-first">{personalInfo.name}</span>
            <span className="name-last">{personalInfo.surname}</span>
          </h1>

          {/* Typewriter */}
          <p className="hero-typewriter">
            I build{' '}
            <span className="tw-accent">
              <Typewriter
                words={[
                  'Full-Stack Applications.',
                  'Secure Mobile Apps.',
                  'Real-Time Systems.',
                  'Cloud Infrastructure.',
                  'E2EE Encryption.',
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={65}
                deleteSpeed={45}
                delaySpeed={2200}
              />
            </span>
          </p>

          {/* Bio */}
          <p className="hero-bio">{personalInfo.bio}</p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-code" /> View Projects
            </a>
            <a href="/Kelvin_Kariuki_CV.pdf" download className="btn btn-outline">
              <i className="fas fa-download" /> Download CV
            </a>
            <a href="#contact" className="btn btn-ghost">
              <i className="fas fa-paper-plane" /> Contact Me
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="hero-stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Production Apps</span>
            </div>
            <div className="hero-stat">
              <span className="stat-num">5★</span>
              <span className="stat-label">Google Rating</span>
            </div>
            <div className="hero-stat">
              <span className="stat-num">2+</span>
              <span className="stat-label">Years Building</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Image ── */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-img-container">
            <div className="hero-img-ring">
              <div className="hero-img-ring-dot" />
            </div>
            <div className="hero-img-ring-2" />

            <div className="hero-img-wrapper">
              {!imgError ? (
                <img
                  src="/images/profile.jpg"
                  alt="Kelvin Kariuki"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="hero-img-fallback">
                  <i className="fas fa-user-astronaut" />
                  <span>Kelvin Kariuki</span>
                </div>
              )}
            </div>

            {/* Floating tech badges */}
            <div className="hero-tech-badge">
              <i className="fas fa-shield-halved" /> Security
            </div>
            <div className="hero-tech-badge">
              <i className="fab fa-react" /> Full-Stack
            </div>
            <div className="hero-tech-badge">
              <i className="fas fa-cloud" /> Cloud
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator">
        <span>scroll</span>
        <i className="fas fa-chevron-down scroll-chevron" />
      </a>
    </section>
  );
};

export default Hero;