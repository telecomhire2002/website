import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageContext.jsx';
import { translations } from '../data/translations.js';
import teleImage from '../assets/tele.jpg';
import jobImage from '../assets/job.jpg';
import networkImage from '../assets/network.jpg';
import telImage from '../assets/tel.jpg';
import '../styles/LandingPage.css';


const LandingPage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3; // Number of blog posts
  const titleText = t.heroTitle;

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Auto-advance slides every 5 seconds
  // Typewriter effect
  useEffect(() => {
    if (currentIndex < titleText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + titleText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, titleText]);

  // Reset animation when language changes
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [language]);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero" id="home" style={{ background: `linear-gradient(rgba(0, 31, 63, 0.95), rgba(0, 31, 63, 0.85)), url(${teleImage}) center/cover no-repeat` }}>
        <div className="hero-content">
          <h1 className="gradient-text typewriter">
            {displayText}
            <span className="cursor">|</span>
          </h1>
          <p>{t.heroSubtitle}</p>
          <button className="cta-button" onClick={() => scrollToSection('about')}>
            {t.discoverMore}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="animate-fade-in">{t.aboutTitle}</h2>
          <div className="about-content">
            <div className="about-text">
              <div className="mission-content animate-fade-in-left hover-lift">
                <h3>{t.missionTitle}</h3>
                <p>{t.missionText1}</p>
                <p>{t.missionText2}</p>
                <p>{t.missionText3}</p>
              </div>
            </div>
            
            <div className="about-stats">
              <div className="stat animate-scale-in hover-lift">
                <div className="stat-icon">🗺️</div>
                <h3>{t.allOverIndia}</h3>
                <p>{t.panIndiaCoverage}</p>
              </div>
              <div className="stat animate-scale-in hover-lift" style={{animationDelay: '0.2s'}}>
                <div className="stat-icon">🏢</div>
                <h3>{t.leadingCompaniesTitle}</h3>
                <p>{t.jioVodafoneAirtel}</p>
              </div>
              <div className="stat animate-scale-in hover-lift" style={{animationDelay: '0.4s'}}>
                <div className="stat-icon">📍</div>
                <h3>{t.localFocus}</h3>
                <p>{t.regionalOpportunities}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Local News & Highlights */}
      <section className="blog" id="blog">
        <div className="container">
          <h2 className="animate-fade-in">{t.latestNews}</h2>
          <p className="blog-subtitle animate-fade-in">{t.blogSubtitle}</p>
          <div className="blog-carousel">
            <button 
              className="carousel-arrow left-arrow" 
              onClick={goToPrevSlide}
              aria-label="Previous"
            >
              <span>❮</span>
            </button>
            <div className="blog-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              <article className={`blog-card ${currentSlide === 0 ? 'active' : ''}`}>
                <div className="blog-image" style={{
                  background: `linear-gradient(135deg, rgba(13, 19, 33, 0.8), rgba(29, 45, 68, 0.7)), url(${jobImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
                <div className="blog-content">
                  <h3>Local Telecom Job Opportunities</h3>
                  <p>Discover exciting career opportunities in your local telecom sector. From network engineers to customer service roles, find the perfect position that matches your skills and location preferences.</p>
                  <a href="#" className="read-more">{t.readMore}</a>
                </div>
              </article>
              <article className={`blog-card ${currentSlide === 1 ? 'active' : ''}`}>
                <div className="blog-image" style={{
                  background: `linear-gradient(135deg, rgba(62, 92, 118, 0.8), rgba(116, 140, 171, 0.7)), url(${networkImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
                <div className="blog-content">
                  <h3>Regional Network Expansion</h3>
                  <p>Stay updated on the latest network expansion projects across different regions. Learn about new infrastructure developments and how they create job opportunities in telecom.</p>
                  <a href="#" className="read-more">{t.readMore}</a>
                </div>
              </article>
              <article className={`blog-card ${currentSlide === 2 ? 'active' : ''}`}>
                <div className="blog-image" style={{
                  background: `linear-gradient(135deg, rgba(29, 45, 68, 0.8), rgba(240, 235, 216, 0.7)), url(${telImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
                <div className="blog-content">
                  <h3>Community Telecom Projects</h3>
                  <p>Explore community-driven telecom initiatives that are transforming local connectivity. See how these projects create sustainable employment opportunities.</p>
                  <a href="#" className="read-more">{t.readMore}</a>
                </div>
              </article>
            </div>
            <button 
              className="carousel-arrow right-arrow" 
              onClick={goToNextSlide}
              aria-label="Next"
            >
              <span>❯</span>
            </button>
          </div>
          <div className="carousel-dots">
            {[...Array(totalSlides)].map((_, index) => (
              <button 
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics" id="statistics">
        <div className="container">
          <h2 className="animate-fade-in">Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-item animate-scale-in">
              <div className="stat-number">500+</div>
              <div className="stat-label">Jobs Posted</div>
            </div>
            <div className="stat-item animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="stat-number">50+</div>
              <div className="stat-label">Partner Companies</div>
            </div>
            <div className="stat-item animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="stat-number">25+</div>
              <div className="stat-label">Cities Covered</div>
            </div>
            <div className="stat-item animate-scale-in" style={{animationDelay: '0.6s'}}>
              <div className="stat-number">1000+</div>
              <div className="stat-label">Successful Placements</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <h2 className="animate-fade-in">How It Works</h2>
          <div className="steps-grid">
            <div className="step-item animate-fade-in-left">
              <div className="step-icon">📝</div>
              <h3>1. Create Profile</h3>
              <p>Sign up and create your professional profile with skills and experience</p>
            </div>
            <div className="step-item animate-fade-in-left" style={{animationDelay: '0.2s'}}>
              <div className="step-icon">🔍</div>
              <h3>2. Browse Jobs</h3>
              <p>Explore local telecom opportunities from leading companies</p>
            </div>
            <div className="step-item animate-fade-in-left" style={{animationDelay: '0.4s'}}>
              <div className="step-icon">📱</div>
              <h3>3. Apply</h3>
              <p>Apply to positions that match your skills and location preferences</p>
            </div>
            <div className="step-item animate-fade-in-left" style={{animationDelay: '0.6s'}}>
              <div className="step-icon">✅</div>
              <h3>4. Get Hired</h3>
              <p>Connect with employers and start your telecom career journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      
    </div>
  );
};

export default LandingPage; 