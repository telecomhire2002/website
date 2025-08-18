import React from 'react';
import '../styles/LanguageSelector.css';

const LanguageSelector = ({ onLanguageSelect, onClose }) => {
  return (
    <div className="language-selector-overlay" onClick={onClose}>
      <div className="language-selector-modal" onClick={(e) => e.stopPropagation()}>
        <div className="language-selector-header">
          <h2>Choose Your Language</h2>
          <p>अपनी भाषा चुनें</p>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="language-options">
          <div 
            className="language-option" 
            onClick={() => onLanguageSelect('english')}
          >
            <div className="language-flag">🇺🇸</div>
            <div className="language-info">
              <h3>English</h3>
              <p>English</p>
            </div>
            <div className="language-arrow">→</div>
          </div>
          
          <div 
            className="language-option" 
            onClick={() => onLanguageSelect('hindi')}
          >
            <div className="language-flag">🇮🇳</div>
            <div className="language-info">
              <h3>हिंदी</h3>
              <p>Hindi</p>
            </div>
            <div className="language-arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector; 