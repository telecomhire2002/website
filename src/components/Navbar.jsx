import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext.jsx';
import { translations } from '../data/translations.js';
import '../styles/Navbar.css';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    changeLanguage(language === 'english' ? 'hindi' : 'english');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <h2>Telecom Hire</h2>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => scrollToSection('about')}>{t.about}</a></li>
          <li><a href="#services" onClick={() => scrollToSection('services')}>{t.services}</a></li>
          <li><a href="#blog" onClick={() => scrollToSection('blog')}>{t.blog}</a></li>
          <li><a href="/join" className="join-btn">{t.joinUs}</a></li>
          <li><button className="language-btn" onClick={toggleLanguage}>{t.languageButton}</button></li>
        </ul>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 