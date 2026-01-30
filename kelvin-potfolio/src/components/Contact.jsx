// src/components/Contact.jsx
import React from 'react';
import { personalInfo } from '../data';

const Contact = () => {
  return (
    <section className="section" id="contact" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
        </div>
        <div className="contact-container">
            <div className="contact-info">
                <h3>Get In Touch</h3>
                <p>Have a project in mind or want to discuss encryption protocols? Connect with me on social media or send a message!</p>
                
                <div className="social-links-grid">
                    {/* Professional - Using 'fab' for brands */}
                    <a href={personalInfo.github} target="-blank" rel="noreferrer" title="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
                        <i className="fab fa-linkedin-in"></i> {/* Changed to linkedin-in */}
                    </a>
                    {/* Socials */}
                    <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer" title="WhatsApp" style={{background: '#25D366'}}><i className="fab fa-whatsapp"></i></a>
                    <a href={personalInfo.instagram} target="_blank" rel="noreferrer" title="Instagram" style={{background: '#C13584'}}><i className="fab fa-instagram"></i></a>
                    {/* <a href={personalInfo.facebook} target="_blank" rel="noreferrer" title="Facebook" style={{background: '#1877F2'}}><i className="fab fa-facebook-f"></i></a>*/}
                    <a href={personalInfo.discord} target="_blank" rel="noreferrer" title="Discord" style={{background: '#5865F2'}}><i className="fab fa-discord"></i></a>
                </div>
            </div>
            
            {/* NETLIFY FORM START */}
            <form 
              className="contact-form" 
              name="contact" 
              method="POST" 
              data-netlify="true"
            >
                {/* Required for Netlify to identify the form */}
                <input type="hidden" name="form-name" value="contact" />

                <div className="form-group">
                  <input type="text" name="name" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <textarea name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
            </form>
            {/* NETLIFY FORM END */}
        </div>
      </div>
    </section>
  );
};

export default Contact;