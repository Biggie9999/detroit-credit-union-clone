import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import './LoginModal.css';

const LoginModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login and go to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login-modal shadow-lg">
      <div className="modal-header">
        <div className="logo-container">
          <img src="/logo.svg" alt="One Detroit Credit Union" className="brand-logo" />
        </div>
        <h2>Sign In to Continue</h2>
      </div>

      <form onSubmit={handleLogin} className="modal-form">
        <div className="input-group">
          <label className="input-label">Username</label>
          <input type="text" className="input-field bg-light" required />
        </div>

        <div className="input-group password-group">
          <label className="input-label">Password</label>
          <div className="password-input-wrapper">
            <input 
              type={showPassword ? "text" : "password"} 
              className="input-field bg-light" 
              required 
            />
            <button 
              type="button" 
              className="toggle-password" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="form-actions">
          <label className="remember-device">
            <input type="checkbox" className="hidden-checkbox" defaultChecked />
            <div className="custom-checkbox">
              <svg viewBox="0 0 24 24" width="12" height="12" stroke="white" strokeWidth="3" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span>Remember Device</span>
          </label>
          <a href="#help" className="help-link">Need Login Help?</a>
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4 btn-large btn-pill">
          Continue
        </button>

        <div className="secondary-actions">
          <button type="button" className="btn secondary-btn">Enroll</button>
          <button type="button" className="btn secondary-btn">Join</button>
        </div>
      </form>

      <div className="modal-footer">
        <p>By signing in, you agree to our <strong>Privacy Policy</strong> and <strong>Terms of Service</strong></p>
      </div>
    </div>
  );
};

export default LoginModal;
