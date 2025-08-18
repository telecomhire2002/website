import React from 'react';
import { useLanguage } from './src/LanguageContext.jsx';
import { translations } from './src/translations.js';
import './LandingPage.css';

const LandingPage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
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
      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="gradient-text animate-fade-in">{t.heroTitle}</h1>
          <p className="animate-fade-in">{t.heroSubtitle}</p>
          <button className="cta-button animate-fade-in" onClick={() => scrollToSection('about')}>
            {t.discoverMore}
          </button>
        </div>
        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="floating-icon animate-float" style={{animationDelay: '0s'}}>📡</div>
          <div className="floating-icon animate-float" style={{animationDelay: '1s'}}>📱</div>
          <div className="floating-icon animate-float" style={{animationDelay: '2s'}}>🏢</div>
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

      {/* Blog Section */}
      <section className="blog" id="blog">
        <div className="container">
          <h2 className="animate-fade-in">{t.latestNews}</h2>
          <div className="blog-grid">
            <article className="blog-card animate-fade-in hover-lift">
              <div className="blog-image" style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6), url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              <div className="blog-content">
                <h3>{t.futureOfTelecom}</h3>
                <p>{t.futureOfTelecomDesc}</p>
                <a href="#" className="read-more">{t.readMore}</a>
              </div>
            </article>
            <article className="blog-card animate-fade-in hover-lift" style={{animationDelay: '0.2s'}}>
              <div className="blog-image" style={{
                background: 'linear-gradient(135deg, #f59e0b, #ef4444), url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              <div className="blog-content">
                <h3>{t.digitalTransformation}</h3>
                <p>{t.digitalTransformationDesc}</p>
                <a href="#" className="read-more">{t.readMore}</a>
              </div>
            </article>
            <article className="blog-card animate-fade-in hover-lift" style={{animationDelay: '0.4s'}}>
              <div className="blog-image" style={{
                background: 'linear-gradient(135deg, #10b981, #059669), url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              <div className="blog-content">
                <h3>{t.sustainablePractices}</h3>
                <p>{t.sustainablePracticesDesc}</p>
                <a href="#" className="read-more">{t.readMore}</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      
    </div>
  );
};

export default LandingPage; 
