// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // <--- IMPORT THIS
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
  }, [theme]);

  return (
    <div className="app-container">
      <Navbar toggleTheme={toggleTheme} isDark={theme === 'dark'} />
      
      <main>
        <Hero />
        <About /> {/* <--- ADD THIS HERE */}
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer>
        <div className="container">
            <p className="copyright">© {new Date().getFullYear()} Kelvin Kariuki. Built with React & Vite.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;