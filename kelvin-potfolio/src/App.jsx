// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Experience from './components/Experience';
import Skills     from './components/Skills';
import Projects   from './components/Projects';
import Contact    from './components/Contact';
import Footer     from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
  };

  useEffect(() => {
    // dark mode = default (no class needed, :root vars are dark)
    // light mode = add 'light-theme' class
    document.body.className = theme === 'light' ? 'light-theme' : '';
  }, [theme]);

  return (
    <div className="app-container">
      <Navbar toggleTheme={toggleTheme} isDark={theme === 'dark'} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;