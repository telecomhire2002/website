import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LanguageProvider } from './LanguageContext.jsx'
import Navbar from './Navbar.jsx'
import LandingPage from './LandingPage.jsx'
import ServicesPage from './ServicesPage.jsx'
import JoinForm from './JoinForm.jsx'
import TelecomGigPage from '../../Gig.jsx'
import LoginPage from './LoginPage.jsx'
import '../styles/App.css'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="app-container">
          <Navbar />
          <div className="content-area">
            <Routes>
              <Route path="/" element={
                <>
                  <LandingPage />
                  <ServicesPage />
                  
                  {/* <TelecomGigPage /> */}
                </>
              } />
              <Route path="/join" element={<JoinForm />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App
