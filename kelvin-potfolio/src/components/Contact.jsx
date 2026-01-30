// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null, "sending", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const encode = (data) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear form
        setTimeout(() => setStatus(null), 5000); // Reset message after 5 sec
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section className="section" id="contact" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        
        <div className="section-title">
          <h2>Contact Me</h2>
        </div>
        
        <div className="contact-container">
            {/* Left Side: Info & Socials */}
            <div className="contact-info">
                <h3>Get In Touch</h3>
                <p>Have a project in mind, or just want to chat about security and code? Connect with me on social media or send a message!</p>
                
                <div className="social-links-grid">
                    {/* Standard Links (inherit theme color) */}
                    <a href={personalInfo.github} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    
                    {/* Brand Colors (CSS forces white icon on these) */}
                    <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer" style={{background: '#25D366'}}><i className="fab fa-whatsapp"></i></a>
                    <a href={personalInfo.instagram} target="_blank" rel="noreferrer" style={{background: '#C13584'}}><i className="fab fa-instagram"></i></a>
                    <a href={personalInfo.discord} target="_blank" rel="noreferrer" style={{background: '#5865F2'}}><i className="fab fa-discord"></i></a>
                </div>
            </div>
            
            {/* Right Side: Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <textarea 
                    name="message" 
                    rows="5" 
                    placeholder="Your Message..." 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn" 
                  disabled={status === "sending"}
                  style={{ opacity: status === "sending" ? 0.7 : 1, cursor: status === "sending" ? 'wait' : 'pointer' }}
                >
                  {status === "sending" ? (
                    <span><i className="fas fa-circle-notch fa-spin"></i> Sending...</span>
                  ) : "Send Message"}
                </button>

                {/* Status Messages with Animation */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      style={{
                        background: '#d4edda', 
                        color: '#155724', 
                        padding: '10px', 
                        borderRadius: '5px', 
                        marginTop: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                      <i className="fas fa-check-circle"></i> Message sent successfully!
                    </motion.div>
                  )}
                  
                  {status === "error" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      style={{
                        background: '#f8d7da', 
                        color: '#721c24', 
                        padding: '10px', 
                        borderRadius: '5px', 
                        marginTop: '15px'
                      }}
                    >
                      <i className="fas fa-exclamation-circle"></i> Something went wrong.
                    </motion.div>
                  )}
                </AnimatePresence>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;