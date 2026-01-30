// src/components/Contact.jsx
import React, { useState } from 'react';
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

    // Standard Netlify Form Encoding
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
      });
  };

  return (
    <section className="section" id="contact" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
        </div>
        <div className="contact-container">
            <div className="contact-info">
                <h3>Get In Touch</h3>
                <p>Have a project in mind? Connect with me on social media or send a message!</p>
                
                <div className="social-links-grid">
                    <a href={personalInfo.github} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer" style={{background: '#25D366'}}><i className="fab fa-whatsapp"></i></a>
                    <a href={personalInfo.instagram} target="_blank" rel="noreferrer" style={{background: '#C13584'}}><i className="fab fa-instagram"></i></a>
                    <a href={personalInfo.discord} target="_blank" rel="noreferrer" style={{background: '#5865F2'}}><i className="fab fa-discord"></i></a>
                </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
                {/* Hidden input for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message" 
                    rows="5" 
                    placeholder="Message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn" disabled={status === "sending"}>
                  {status === "sending" ? (
                    <span><i className="fas fa-spinner fa-spin"></i> Sending...</span>
                  ) : "Send Message"}
                </button>

                {status === "success" && (
                  <p style={{color: '#2ecc71', marginTop: '10px', fontWeight: 'bold'}}>
                    <i className="fas fa-check-circle"></i> Message sent successfully!
                  </p>
                )}
                
                {status === "error" && (
                  <p style={{color: '#e74c3c', marginTop: '10px'}}>
                    Something went wrong. Please try again.
                  </p>
                )}
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;