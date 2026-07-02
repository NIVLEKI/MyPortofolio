// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data';

const SOCIALS = [
  { href: personalInfo.github,    icon: 'fab fa-github',      label: 'GitHub',    bg: '#24292e' },
  { href: personalInfo.linkedin,  icon: 'fab fa-linkedin-in', label: 'LinkedIn',  bg: '#0077b5' },
  { href: personalInfo.whatsapp,  icon: 'fab fa-whatsapp',    label: 'WhatsApp',  bg: '#25D366' },
  { href: personalInfo.instagram, icon: 'fab fa-instagram',   label: 'Instagram', bg: '#C13584' },
  { href: personalInfo.discord,   icon: 'fab fa-discord',     label: 'Discord',   bg: '#5865F2' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status,   setStatus]   = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const encode = (data) =>
      Object.entries(data)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
        .join('&');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(null), 6000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus(null), 6000);
      });
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">

        <div className="section-header">
          <p className="section-label">Let's work together</p>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className="section-desc">
            Have a project in mind, or want to chat about security and code? I'd love to hear from you.
          </p>
        </div>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          {/* ── LEFT: Info Panel ── */}
          <div className="contact-info-panel">
            <h3>Contact Info</h3>
            <p>Based in Nyeri, Kenya. Open to remote opportunities and local collaborations.</p>

            <div className="contact-detail-list">
              <div className="contact-detail">
                <div className="contact-detail-icon"><i className="fas fa-envelope" /></div>
                <span>{personalInfo.email}</span>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><i className="fas fa-phone" /></div>
                <span>{personalInfo.phone}</span>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><i className="fas fa-location-dot" /></div>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* CV & Certificate Downloads */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
                Documents
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a
                  href="/Kelvin_Kariuki-resume.pdf"
                  download
                  className="proj-link-btn"
                  style={{ justifyContent: 'flex-start', gap: 10 }}
                >
                  <i className="fas fa-file-user" style={{ color: 'var(--accent)' }} />
                  Download My CV
                  <i className="fas fa-download" style={{ marginLeft: 'auto', fontSize: 12 }} />
                </a>
                <a
                  href="/plpcertificate.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="proj-link-btn"
                  style={{ justifyContent: 'flex-start', gap: 10 }}
                >
                  <i className="fas fa-certificate" style={{ color: 'var(--accent-2)' }} />
                  View PLP Certificate
                  <i className="fas fa-arrow-up-right-from-square" style={{ marginLeft: 'auto', fontSize: 12 }} />
                </a>
              </div>
            </div>

            {/* Socials */}
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
              Find me on
            </div>
            <div className="social-grid">
              {SOCIALS.map(({ href, icon, label, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  title={label}
                  style={{ '--social-bg': bg }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = bg;
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = bg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '';
                    e.currentTarget.style.color = '';
                    e.currentTarget.style.borderColor = '';
                  }}
                >
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="contact-form-panel">
            <h4>Send a Message</h4>

            <form
              onSubmit={handleSubmit}
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* Netlify required hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="cf-name">Your Name</label>
                  <input
                    id="cf-name"
                    type="text"
                    name="name"
                    placeholder="Kelvin Kariuki"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="cf-email">Email Address</label>
                  <input
                    id="cf-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-field" style={{ marginBottom: 16 }}>
                <label htmlFor="cf-subject">Subject</label>
                <input
                  id="cf-subject"
                  type="text"
                  name="subject"
                  placeholder="Project inquiry / Collaboration / Just saying hi"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field" style={{ marginBottom: 0 }}>
                <label htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project, idea, or question..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-submit-row">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                >
                  {status === 'sending' ? (
                    <><i className="fas fa-circle-notch fa-spin" /> Sending...</>
                  ) : (
                    <><i className="fas fa-paper-plane" /> Send Message</>
                  )}
                </button>
              </div>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    className="form-status success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <i className="fas fa-circle-check" />
                    Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    className="form-status error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <i className="fas fa-circle-exclamation" />
                    Something went wrong. Try emailing me directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;