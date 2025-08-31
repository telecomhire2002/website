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

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Get started in just 4 simple steps</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-content">
                <div className="step-icon">📝</div>
                <h3>Register Yourself</h3>
                <p>Create your profile with your skills and experience in just a few minutes.</p>
              </div>
            </div>
            <div className="step-card">
            
              <div className="step-content">
                <div className="step-icon">🔍</div>
                <h3>Get Verified</h3>
                <p>Complete our quick verification process to unlock all opportunities.</p>
              </div>
            </div>
            <div className="step-card">
      
              <div className="step-content">
                <div className="step-icon">🤝</div>
                <h3>Get Hired</h3>
                <p>Connect with top telecom companies looking for your expertise.</p>
              </div>
            </div>
            <div className="step-card">
  
              <div className="step-content">
                <div className="step-icon">💰</div>
                <h3>Earn Money</h3>
                <p>Get paid on time with our secure payment system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <h3>Telecom Hire</h3>
                <p>Connecting telecom professionals with the best opportunities across India</p>
              </div>
              <div className="footer-newsletter">
                <h4>Stay Updated</h4>
                <p>Subscribe to our newsletter for the latest job opportunities</p>
                <div className="newsletter-form">
                  <input type="email" placeholder="Your email address" />
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
                <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
                <li><a href="#blog" onClick={() => scrollToSection('blog')}>News</a></li>
                <li><a href="#how-it-works" onClick={() => scrollToSection('how-it-works')}>How It Works</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>For Job Seekers</h4>
              <ul>
                <li><a href="#">Browse Jobs</a></li>
                <li><a href="#">Create Profile</a></li>
                <li><a href="#">Career Resources</a></li>
                <li><a href="#">Success Stories</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Us</h4>
              <div className="contact-info">
                <p><i className="fas fa-envelope"></i> info@telecomhire.com</p>
                <p><i className="fas fa-phone"></i> +91 98765 43210</p>
                <p><i className="fas fa-map-marker-alt"></i> Mumbai, India</p>
              </div>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; {new Date().getFullYear()} Telecom Hire. All rights reserved.</p>
              <div className="legal-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default LandingPage;