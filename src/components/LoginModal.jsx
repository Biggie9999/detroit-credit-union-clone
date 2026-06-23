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
          <div className="logo-icon">1D</div>
          <div className="logo-text">
            <strong>ONE DETROIT</strong>
            <span>CREDIT UNION</span>
          </div>
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
            <input type="checkbox" />
            <span className="checkmark"></span>
            Remember Device
          </label>
          <a href="#help" className="help-link">Need Login Help?</a>
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4 btn-large">
          Continue
        </button>

        <div className="secondary-actions mt-4">
          <button type="button" className="btn btn-outline w-full">Enroll</button>
          <button type="button" className="btn btn-outline w-full">Join</button>
        </div>
      </form>

      <div className="modal-footer">
        <p>By signing in, you agree to our <strong>Privacy Policy</strong> and <strong>Terms of Service</strong></p>
      </div>
    </div>
  );
};

export default LoginModal;
