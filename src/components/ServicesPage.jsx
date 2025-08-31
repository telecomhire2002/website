import React from 'react';
import { useLanguage } from './LanguageContext.jsx';
import { translations } from '../data/translations.js';
import '../styles/ServicesPage.css';

const ServicesPage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="services-page">
      {/* Job Categories Section */}
      <section className="job-categories" id="services">
        <div className="container">
          <h2>{t.jobCategoriesTitle}</h2>
          <p className="section-subtitle">{t.jobCategoriesSubtitle}</p>
          
          <div className="job-categories-grid">
            <div className="job-category-card">
              <div className="category-header">
                <div className="category-icon">🛠️</div>
                <h3>{t.engineerTechnician}</h3>
              </div>
              <ul className="job-titles">
                <li>{t.fieldEngineer}</li>
                <li>{t.telecomTechnician}</li>
                <li>{t.networkInstallation}</li>
                <li>{t.ubrSiteMaintenance}</li>
              </ul>
            </div>

            <div className="job-category-card">
              <div className="category-header">
                <div className="category-icon">👨‍💼</div>
                <h3>{t.ibsSupervisory}</h3>
              </div>
              <ul className="job-titles">
                <li>{t.ibsSiteSupervisor}</li>
                <li>{t.telecomNetworkOps}</li>
                <li>{t.regionalOMLead}</li>
                <li>{t.smpsISPCoordination}</li>
              </ul>
            </div>

            <div className="job-category-card">
              <div className="category-header">
                <div className="category-icon">🔧</div>
                <h3>Field Services</h3>
              </div>
              <ul className="job-titles">
                <li>Field Service Engineer</li>
                <li>Installation Technician</li>
                <li>Maintenance Specialist</li>
                <li>Site Surveyor</li>
              </ul>
            </div>

            <div className="job-category-card">
              <div className="category-header">
                <div className="category-icon">📡</div>
                <h3>Network Operations</h3>
              </div>
              <ul className="job-titles">
                <li>NOC Engineer</li>
                <li>Network Administrator</li>
                <li>Transmission Engineer</li>
                <li>Fiber Optic Technician</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      {/* <section className="companies-section"> */}
        {/* <div className="container">
          <h2>{t.partnerCompanies}</h2>
          <p className="section-subtitle">{t.partnerCompaniesSubtitle}</p>
          
          <div className="companies-grid">
            <div className="company-card">
              <div className="company-logo">📱</div>
              <h3>{t.relianceJio}</h3>
              <p>{t.relianceJioDesc}</p>
              <div className="company-roles">
                <h4>{t.availableRoles}</h4>
                <ul>
                  <li>{t.fiberInstallation}</li>
                  <li>{t.networkOperations}</li>
                  <li>{t.siteMaintenance}</li>
                  <li>{t.customerService}</li>
                </ul>
              </div>
            </div>

            <div className="company-card">
              <div className="company-logo">📡</div>
              <h3>{t.bhartiAirtel}</h3>
              <p>{t.bhartiAirtelDesc}</p>
              <div className="company-roles">
                <h4>{t.availableRoles}</h4>
                <ul>
                  <li>{t.ibsSiteEngineer}</li>
                  <li>{t.networkInstallationTech}</li>
                  <li>{t.operationsSupervisor}</li>
                  <li>{t.fieldServiceEngineer}</li>
                </ul>
              </div>
            </div>

            <div className="company-card">
              <div className="company-logo">🏢</div>
              <h3>{t.bsnl}</h3>
              <p>{t.bsnlDesc}</p>
              <div className="company-roles">
                <h4>{t.availableRoles}</h4>
                <ul>
                  <li>{t.telecomTechnicianRole}</li>
                  <li>{t.networkMaintenance}</li>
                  <li>{t.regionalOperations}</li>
                  <li>{t.infrastructureSpecialist}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>{t.whyChooseUs}</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📍</div>
              <h3>{t.localOpportunitiesTitle}</h3>
              <p>{t.localOpportunitiesDesc}</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🏢</div>
              <h3>{t.topCompanies}</h3>
              <p>{t.topCompaniesDesc}</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>{t.careerGrowth}</h3>
              <p>{t.careerGrowthDesc}</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>{t.competitiveSalaries}</h3>
              <p>{t.competitiveSalariesDesc}</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🎓</div>
              <h3>Training & Development</h3>
              <p>Comprehensive training programs to enhance your technical skills and knowledge.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>All companies follow strict safety protocols with proper PPE and training requirements.</p>
            </div>
          </div>
        </div>
      </section>

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
      </footer> 
    </div>
  );
};

export default ServicesPage; 