// src/components/Hero.jsx
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Side: Text Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Small Intro Tag */}
          <h3 style={{ 
            fontSize: '18px', 
            color: 'var(--accent-color)', 
            fontWeight: '600', 
            marginBottom: '10px' 
          }}>
            Hello, I am
          </h3>

          <h1>
            {personalInfo.name} <span style={{color: 'var(--accent-color)'}}>{personalInfo.surname}</span>
          </h1>
          
          <h2 style={{ fontSize: '24px', margin: '15px 0', color: 'var(--text-light)', fontWeight: '500' }}>
            I am a{' '}
            <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>
              <Typewriter
                words={['Developer.', 'IT Student.', 'Problem Solver.', 'Tech Enthusiast.']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h2>

          <p style={{ maxWidth: '500px', margin: '0 0 30px 0' }}>
            {personalInfo.bio}
          </p>
          
          <motion.div 
            className="hero-buttons"
            style={{ display: 'flex', gap: '15px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#projects" className="btn">
              View Work
            </a>
            
            <a href="#contact" className="btn" style={{ 
              background: 'transparent', 
              border: '2px solid var(--accent-color)', 
              color: 'var(--accent-color)' 
            }}>
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          className="hero-img"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
           {/* IMPORTANT: Ensure 'profile.jpg' is inside 'public/images/' folder */}
           <div className="img-wrapper">
             <img 
               src="/images/profile.jpg" 
               alt="Kelvin Kariuki" 
               onError={(e) => {
                 // If image fails, hide it and log error
                 e.target.style.display = 'none'; 
                 console.error("Profile image not found. Check public/images/ folder.");
               }}
              />
           </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-light)',
          fontSize: '24px'
        }}
      >
        <a href="#about" style={{ color: 'inherit' }}><i className="fas fa-chevron-down"></i></a>
      </motion.div>
    </section>
  );
};

export default Hero;