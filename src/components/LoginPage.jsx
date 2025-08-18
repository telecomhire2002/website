import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext.jsx';
import { translations } from '../data/translations.js';
import LanguageSelector from './LanguageSelector.jsx';
import teleImage from '../assets/tele.jpg';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { language, changeLanguage } = useLanguage();
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const t = translations[language];
  
  useEffect(() => {
    // Show language selector on first visit
    const hasVisited = localStorage.getItem('has-visited');
    if (!hasVisited) {
      setShowLanguageSelector(true);
      localStorage.setItem('has-visited', 'true');
    }
  }, []);
  
  const handleJoinUs = () => {
    setIsLoading(true);
    try {
      // Use React Router's navigate function
      navigate('/join', { replace: true });
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLanguageSelect = (selectedLanguage) => {
    changeLanguage(selectedLanguage);
    setShowLanguageSelector(false);
  };

  return (
    <div className="login-page" style={{ backgroundImage: `linear-gradient(135deg, rgba(13, 19, 33, 0.9), rgba(62, 92, 118, 0.8)), url(${teleImage})` }}>
      <div className="login-overlay"></div>
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">{t.loginTitle}</h1>
            <p className="login-subtitle">{t.loginSubtitle}</p>
          </div>
          
          <div className="login-content">
            <div className="welcome-text">
              <h2>{t.welcomeTitle}</h2>
              <p>{t.welcomeSubtitle}</p>
            </div>
            
            <button 
              className="join-us-btn" 
              onClick={handleJoinUs}
              disabled={isLoading}
              type="button"
            >
              <span className="btn-text">{isLoading ? 'Loading...' : t.joinUsButton}</span>
              <span className="btn-icon">{isLoading ? '⏳' : '→'}</span>
            </button>
            
            <div className="features">
              <div className="feature">
                <span className="feature-icon">🏢</span>
                <span>{t.leadingCompanies}</span>
              </div>
              <div className="feature">
                <span className="feature-icon">📍</span>
                <span>{t.localOpportunities}</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🚀</span>
                <span>{t.fastGrowth}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showLanguageSelector && (
        <LanguageSelector 
          onLanguageSelect={handleLanguageSelect}
          onClose={() => setShowLanguageSelector(false)}
        />
      )}
    </div>
  );
};

export default LoginPage; 