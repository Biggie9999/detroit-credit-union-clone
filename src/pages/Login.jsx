import React from 'react';
import './Login.css';
import LoginModal from '../components/LoginModal';

const Login = () => {
  return (
    <div className="login-container fade-in">
      
      {/* Mobile Top Header */}
      <div className="mobile-login-top hidden-desktop">
        <div className="store-buttons">
          <button className="store-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" />
          </button>
          <button className="store-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
          </button>
        </div>
      </div>

      {/* Background Image Container */}
      <div className="login-background">
        <div className="login-overlay"></div>
        <div className="login-content">
          <div className="login-text-section">
            <div className="mobile-links hidden-desktop">
              <a href="#locations">CU Locations</a>
              <a href="#contact">Contact Us</a>
            </div>
            <h1 className="login-headline">One Detroit Credit Union Online</h1>
            <p className="login-subheadline">A simple way to your daily banking</p>
            
            <div className="store-buttons hidden-mobile">
              <button className="store-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" />
              </button>
              <button className="store-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
              </button>
            </div>
          </div>
          
          <div className="login-modal-section">
            <LoginModal />
            <div className="login-footer hidden-mobile">
              <a href="#locations">CU Locations</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
