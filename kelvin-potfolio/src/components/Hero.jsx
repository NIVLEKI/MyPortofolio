// src/components/Hero.jsx
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        
        {/* Animated Text Section */}
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{personalInfo.name} <span style={{color: 'var(--accent-color)'}}>{personalInfo.surname}</span></h1>
          
          <h2 style={{ fontSize: '24px', margin: '10px 0', color: 'var(--text-light)', fontWeight: '500' }}>
            I am a{' '}
            <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>
              <Typewriter
                words={['Developer.', 'IT Student.', 'Problem Solver.', 'Tech Enthusiast.']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p>{personalInfo.bio}</p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </motion.div>
        </motion.div>

        {/* Animated Image Section */}
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
           {/* Replace 'me.jpg' with your actual image file name inside the public/images folder */}
           <img 
             src="/images/profile.jpg" 
             alt="Kelvin" 
             className="profile-image" 
             // Fallback if image not found
             onError={(e) => {
               e.target.onerror = null; 
               e.target.src = "https://via.placeholder.com/300";
               e.target.style.display = 'none'; // Hide if fails, or show icon
               e.target.parentNode.innerHTML = '<i class="fas fa-user-circle" style="font-size: 200px; color: var(--text-light)"></i>';
             }}
            />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;