import React, { useState } from 'react';
import '../styles/JoinForm.css';
import axios from 'axios';

const JoinForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    pincode: '',
    state: '',
    district: '',
    designation: '',
    activity: '',
    workAtHeight: '',
    farmToCli: '',
    jbthCertificate: '',
    ppes: ''
  });

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
    'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const activities = [
    'SURVEY-INFRA,CONNECTION CHECK',
    'LOS SURVEY',
    'SITE INSTALLATION-4G+5G',
    'MICROWAVE INSTALLATION',
    '4G SITE -ANTENA,RRH,CDU-RDU,CONNECTED WITH BLACK HOLE,CONNECTED WITH JUMBER',
    'AIR FIBER INSTALLATION',
    'UBR INSTALLTION',
    'EMF SURVEY',
    'IBS SITE INSTALLATION',
    'DE-INSTALLATION',
    'NONE',
    'SOME OTHER'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      console.log('Login attempt:', { email: formData.email });
      alert('Login functionality would be implemented here');
      return;
    }

    // Create payload according to backend format
    const payload = {
      email_primary: formData.email,
      circle: "Delhi",                     // you can change or ask user
      state: formData.state,
      district: formData.district,
      name: formData.name,
      contact_number: formData.contact,
      pin_code: formData.pincode,
      designation: formData.designation,
      email_alt: "",                       // optional field
      activity: formData.activity,
      work_at_height_certificate: formData.workAtHeight,
      farm_tocli_number: formData.farmToCli,
      jbth_certificate_number: formData.jbthCertificate,
      ppes: formData.ppes
    };

    console.log('Sending payload:', payload);

    try {
      const response = await axios.post(
        "https://form-backend-alpha.vercel.app/api/submit",
        payload
      );
      console.log("Server response:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed!");
    }
  };

  return (
    <div className="app-container">
      <div className="form-card">
        <div className="form-layout">
          {/* Form Section */}
          <div className={`form-section ${isLogin ? 'half-width' : 'full-width'}`}>
            <div className="form-content">
              <h2 className="form-title">
                {isLogin ? 'Welcome Back' : 'Registration Portal'}
              </h2>

              <div className="form-fields">
                {!isLogin ? (
                  <>
                    {/* Registration Form Fields */}
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">
                          Full Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">
                          Email Address <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">
                          Contact Number <span className="required">*</span>
                        </label>
                        <input
                          type="tel"
                          name="contact"
                          value={formData.contact}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="Enter contact number"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">
                          Pincode <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="Enter pincode"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">
                          State <span className="required">*</span>
                        </label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="form-select"
                        >
                          <option value="">Select State</option>
                          {states.map(state => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">
                          District <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="district"
                          value={formData.district}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="Enter district"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Designation <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your designation"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Activity <span className="required">*</span>
                      </label>
                      <select
                        name="activity"
                        value={formData.activity}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">Select Activity</option>
                        {activities.map(activity => (
                          <option key={activity} value={activity}>{activity}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label radio-label">
                        Work at Height Certificate <span className="required">*</span>
                      </label>
                      <div className="radio-group">
                        <label className="radio-option">
                          <input
                            type="radio"
                            name="workAtHeight"
                            value="YES"
                            checked={formData.workAtHeight === 'YES'}
                            onChange={handleInputChange}
                            className="radio-input"
                          />
                          <span className="radio-text">YES</span>
                        </label>
                        <label className="radio-option">
                          <input
                            type="radio"
                            name="workAtHeight"
                            value="NO"
                            checked={formData.workAtHeight === 'NO'}
                            onChange={handleInputChange}
                            className="radio-input"
                          />
                          <span className="radio-text">NO</span>
                        </label>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">
                          Farm-ToCli Number
                        </label>
                        <input
                          type="text"
                          name="farmToCli"
                          value={formData.farmToCli}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="Enter Farm-ToCli number"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">
                          JBTH Certificate Number
                        </label>
                        <input
                          type="text"
                          name="jbthCertificate"
                          value={formData.jbthCertificate}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="Enter JBTH certificate number"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label radio-label">
                        PPEs <span className="required">*</span>
                      </label>
                      <div className="radio-group">
                        <label className="radio-option">
                          <input
                            type="radio"
                            name="ppes"
                            value="YES"
                            checked={formData.ppes === 'YES'}
                            onChange={handleInputChange}
                            className="radio-input"
                          />
                          <span className="radio-text">YES</span>
                        </label>
                        <label className="radio-option">
                          <input
                            type="radio"
                            name="ppes"
                            value="NO"
                            checked={formData.ppes === 'NO'}
                            onChange={handleInputChange}
                            className="radio-input"
                          />
                          <span className="radio-text">NO</span>
                        </label>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Login Form Fields */}
                    <div className="form-group">
                      <label className="form-label">
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Password <span className="required">*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter your password"
                      />
                    </div>
                  </>
                )}

                <div className="submit-btn-container">
                  <button
                    onClick={handleSubmit}
                    className="submit-btn"
                  >
                    {isLogin ? 'Sign In' : 'Register'}
                  </button>
                </div>

                <div className="toggle-section">
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="toggle-btn"
                  >
                    {isLogin ? "Don't have an account? Register here" : "Already have an account? Sign in"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel - Only show on login */}
          {isLogin && (
            <div className="side-panel">
              <div className="side-panel-content">
                <h3 className="side-panel-title">Welcome Back!</h3>
                <p className="side-panel-text">
                  Sign in to access your dashboard and continue your work.
                </p>
                <div className="feature-box">
                  <h4 className="feature-title">Portal Features</h4>
                  <ul className="feature-list">
                    <li>• Site Installation Management</li>
                    <li>• Survey & Infrastructure Tracking</li>
                    <li>• Certificate Management</li>
                    <li>• Real-time Updates</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinForm;