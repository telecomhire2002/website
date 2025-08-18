import React, { useState } from 'react';
import './Gig.css';

const TelecomGigPage = () => {
  const [activeTab, setActiveTab] = useState('request');
  const [selectedService, setSelectedService] = useState('');
  const [location, setLocation] = useState('');
  const [requestForm, setRequestForm] = useState({
    title: '',
    description: '',
    urgency: 'normal',
    budget: '',
    preferredTime: '',
    contactNumber: ''
  });
  
  const [showMap, setShowMap] = useState(false);
  
  const [nearbyTechnicians] = useState([
    { id: 1, name: "Rajesh K.", rating: 4.8, distance: "0.5 km", speciality: "WiFi Expert", online: true, position: { top: '20%', left: '30%' } },
    { id: 2, name: "Amit S.", rating: 4.9, distance: "1.2 km", speciality: "Fiber Optic", online: true, position: { top: '40%', left: '60%' } },
    { id: 3, name: "Priya M.", rating: 4.7, distance: "2.1 km", speciality: "DTH Setup", online: true, position: { top: '70%', left: '25%' } },
    { id: 4, name: "Suresh T.", rating: 4.6, distance: "1.8 km", speciality: "Network Config", online: false, position: { top: '30%', left: '70%' } },
    { id: 5, name: "Kavita R.", rating: 4.9, distance: "0.8 km", speciality: "CCTV Install", online: true, position: { top: '60%', left: '45%' } },
    { id: 6, name: "Deepak L.", rating: 4.5, distance: "3.2 km", speciality: "Tower Work", online: true, position: { top: '15%', left: '55%' } }
  ]);

  const [nearbyRequests, setNearbyRequests] = useState([
    {
      id: 1,
      title: "Wifi Installation & Setup",
      location: "Sector 15, Noida",
      budget: "₹1,500 - ₹2,500",
      urgency: "urgent",
      timePosted: "2 min ago",
      description: "Need wifi installation in 2BHK apartment with router configuration",
      distance: "0.8 km",
      responses: 3,
      position: { top: '25%', left: '40%' }
    },
    {
      id: 2,
      title: "DTH Signal Problem",
      location: "Golf Course Road, Gurgaon",
      budget: "₹500 - ₹800",
      urgency: "normal",
      timePosted: "15 min ago",
      description: "DTH showing no signal, need technician to check dish alignment",
      distance: "2.1 km",
      responses: 7,
      position: { top: '50%', left: '65%' }
    },
    {
      id: 3,
      title: "Fiber Optic Cable Repair",
      location: "Cyber City, Gurgaon",
      budget: "₹2,000 - ₹3,500",
      urgency: "high",
      timePosted: "32 min ago",
      description: "Fiber cable damaged during construction, need immediate repair",
      distance: "3.2 km",
      responses: 12,
      position: { top: '75%', left: '30%' }
    },
    {
      id: 4,
      title: "Mobile Tower Installation",
      location: "Industrial Area, Faridabad",
      budget: "₹25,000 - ₹40,000",
      urgency: "normal",
      timePosted: "1 hour ago",
      description: "Small cell tower installation for improved network coverage",
      distance: "8.5 km",
      responses: 2
    }
  ]);

  const serviceCategories = [
    { id: 'wifi', name: 'WiFi Installation & Repair', icon: '📶', popular: true },
    { id: 'dth', name: 'DTH/Satellite Setup', icon: '📡', popular: true },
    { id: 'fiber', name: 'Fiber Optic Services', icon: '🔌', popular: false },
    { id: 'mobile', name: 'Mobile Network Issues', icon: '📱', popular: true },
    { id: 'landline', name: 'Landline Installation', icon: '☎️', popular: false },
    { id: 'cctv', name: 'CCTV & Security Systems', icon: '📹', popular: true },
    { id: 'tower', name: 'Tower Installation/Repair', icon: '🗼', popular: false },
    { id: 'networking', name: 'Office Networking', icon: '🌐', popular: true }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Service request submitted! Nearby technicians will be notified.');
  };

  const getUrgencyClass = (urgency) => {
    switch(urgency) {
      case 'urgent': return 'urgency-urgent';
      case 'high': return 'urgency-high';
      default: return 'urgency-normal';
    }
  };

  return (
    <div className="app">
      <div className="tab-navigation">
                <button
                  onClick={() => setActiveTab('request')}
                  className={`tab-button ${activeTab === 'request' ? 'active' : ''}`}
                >
                  Request Service
                </button>
                <button
                  onClick={() => setActiveTab('browse')}
                  className={`tab-button ${activeTab === 'browse' ? 'active' : ''}`}
                >
                  Browse Gigs
                </button>
              </div>
      {/* Header
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="header-left">
              <div className="logo">TelecomGigs</div>
              <div className="tab-navigation">
                <button
                  onClick={() => setActiveTab('request')}
                  className={`tab-button ${activeTab === 'request' ? 'active' : ''}`}
                >
                  Request Service
                </button>
                <button
                  onClick={() => setActiveTab('browse')}
                  className={`tab-button ${activeTab === 'browse' ? 'active' : ''}`}
                >
                  Browse Gigs
                </button>
              </div>
            </div>
            
            <div className="header-right">
              <div className="online-status">
                <span className="status-dot"></span>
                <span>247 technicians online</span>
              </div>
              <button className="login-button">
                Login
              </button>
            </div>
          </div>
        </div>
      </header> */}

      {activeTab === 'request' && (
        <div className="main-content">
          <div className="container">
            {/* <div className="max-width-container"> */}
              {/* <div className="hero">
                <h1>Get Telecom Service in Your Area</h1>
                <p>Post your telecom service request and get quotes from verified technicians nearby</p>
              </div> */}

              <div className="grid grid-3-col">
                {/* Service Request Form */}
                <div>
                  <div className="card">
                    <h2>What do you need help with?</h2>
                    
                    {/* Service Categories */}
                    <div className="form-group">
                      <h3 className="form-label">Select Service Category</h3>
                      <div className="grid grid-services">
                        {serviceCategories.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => setSelectedService(service.id)}
                            className={`service-category ${selectedService === service.id ? 'selected' : ''}`}
                          >
                            <div className="service-icon">{service.icon}</div>
                            <div className="service-name">{service.name}</div>
                            {service.popular && (
                              <div className="service-popular">Popular</div>
                            )}
                          </button>
                        ))}
                      </div>
                    {/* </div> */}

                    {/* Request Form */}
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <label className="form-label">Service Title</label>
                        <input
                          type="text"
                          value={requestForm.title}
                          onChange={(e) => setRequestForm({...requestForm, title: e.target.value})}
                          placeholder="e.g., WiFi installation in 3BHK apartment"
                          className="form-input"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Detailed Description</label>
                        <textarea
                          value={requestForm.description}
                          onChange={(e) => setRequestForm({...requestForm, description: e.target.value})}
                          placeholder="Describe what you need in detail..."
                          className="form-textarea"
                          required
                        />
                      </div>

                      <div className="grid grid-2-col">
                        <div className="form-group">
                          <label className="form-label">Your Location</label>
                          <div className="location-input-wrapper">
                            <input
                              type="text"
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                              placeholder="Enter your area/landmark"
                              className="form-input"
                              required
                            />
                            <button type="button" className="location-button">📍</button>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Budget Range</label>
                          <select
                            value={requestForm.budget}
                            onChange={(e) => setRequestForm({...requestForm, budget: e.target.value})}
                            className="form-select"
                            required
                          >
                            <option value="">Select budget</option>
                            <option value="under-500">Under ₹500</option>
                            <option value="500-1000">₹500 - ₹1,000</option>
                            <option value="1000-2500">₹1,000 - ₹2,500</option>
                            <option value="2500-5000">₹2,500 - ₹5,000</option>
                            <option value="5000-10000">₹5,000 - ₹10,000</option>
                            <option value="above-10000">Above ₹10,000</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-2-col">
                        <div className="form-group">
                          <label className="form-label">Urgency Level</label>
                          <select
                            value={requestForm.urgency}
                            onChange={(e) => setRequestForm({...requestForm, urgency: e.target.value})}
                            className="form-select"
                          >
                            <option value="normal">Normal (Within 2-3 days)</option>
                            <option value="high">High  please complete the code </option>                           <option value="urgent">Urgent (Same day)</option>
                          </select>
                        
                        </div>
              

                        <div className="form-group">
                          <label className="form-label">Preferred Time</label>
                          <input
                            type="time"
                            value={requestForm.preferredTime}
                            onChange={(e) => setRequestForm({...requestForm, preferredTime: e.target.value})}
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Contact Number</label>
                        <input
                          type="tel"
                          value={requestForm.contactNumber}
                          onChange={(e) => setRequestForm({...requestForm, contactNumber: e.target.value})}
                          placeholder="Enter your phone number"
                          className="form-input"
                          required
                        />
                      </div>

                      <div className="form-actions">
                        <button type="submit" className="submit-button">Submit Request</button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Map / Nearby Technicians */}
                <div>
                  <div className="card">
                    <h2>Nearby Technicians</h2>
                    <div className="map-container">
                      {nearbyTechnicians.map(tech => (
                        <div
                          key={tech.id}
                          className={`technician-dot ${tech.online ? 'online' : 'offline'}`}
                          style={{ top: tech.position.top, left: tech.position.left }}
                          title={`${tech.name} - ${tech.speciality}`}
                        >
                          {tech.name.split(' ')[0]}
                        </div>
                      ))}
                    </div>
                    <div className="technician-list">
                      {nearbyTechnicians.map(tech => (
                        <div key={tech.id} className="technician-card">
                          <div className="tech-name">{tech.name}</div>
                          <div className="tech-details">
                            {tech.speciality} • ⭐ {tech.rating} • {tech.distance}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Popular Services */}
                <div>
                  <div className="card">
                    <h2>Popular Services</h2>
                    <ul className="popular-services">
                      {serviceCategories.filter(s => s.popular).map(s => (
                        <li key={s.id}>
                          <span className="service-icon">{s.icon}</span>
                          {s.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'browse' && (
        <div className="main-content">
          <div className="container">
            <h1>Browse Nearby Gigs</h1>
            <div className="grid grid-2-col">
              {nearbyRequests.map(req => (
                <div key={req.id} className={`gig-card ${getUrgencyClass(req.urgency)}`}>
                  <h3>{req.title}</h3>
                  <div className="gig-meta">
                    <span>{req.location}</span> • 
                    <span>{req.distance}</span> • 
                    <span>{req.budget}</span>
                  </div>
                  <p>{req.description}</p>
                  <div className="gig-footer">
                    <span>{req.timePosted}</span>
                    <span>{req.responses} responses</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TelecomGigPage;
