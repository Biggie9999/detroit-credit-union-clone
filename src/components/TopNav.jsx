import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, RefreshCw, PieChart, CreditCard, LayoutGrid, Plus, LogOut, User, Menu, X, Settings, Bell, ChevronRight, FileText, Lock, MapPin, Send, HelpCircle, FilePlus, ArrowRight, CircleDollarSign, BarChart2 } from 'lucide-react';
import './TopNav.css';

const TopNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleMoreMenu = () => setIsMoreMenuOpen(!isMoreMenuOpen);
  const toggleQuickActions = () => setIsQuickActionsOpen(!isQuickActionsOpen);

  return (
    <>
      <div className="topnav">
        <div className="topnav-content">
          
          {/* Mobile Hamburger */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <Menu size={32} color="white" />
          </button>

          {/* User Balance Section */}
          <div className="topnav-user">
            <div className="user-avatar">
              <User size={24} color="#666" />
            </div>
            <div className="user-balance-info">
              <div className="balance-amount">$ 22.73</div>
              <div className="balance-label">Total Available Balance</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="topnav-links">
            <NavLink to="/dashboard" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              <LayoutDashboard size={18} />
              Dashboard
            </NavLink>
            <NavLink to="/transfer-money" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              <RefreshCw size={18} />
              Transfer Money
            </NavLink>
            <NavLink to="/my-finance" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              <PieChart size={18} />
              My Finance
            </NavLink>
            <NavLink to="/cards" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              <CreditCard size={18} />
              Cards
            </NavLink>
            
            {/* More Dropdown */}
            <div className="more-menu-container">
              <button 
                className={`nav-link ${isMoreMenuOpen ? "active" : ""}`} 
                onClick={toggleMoreMenu}
                onBlur={() => setTimeout(() => setIsMoreMenuOpen(false), 200)}
              >
                <LayoutGrid size={18} />
                More
              </button>
              
              {isMoreMenuOpen && (
                <div className="dropdown-menu shadow-lg fade-in">
                  <div className="dropdown-item"><Settings size={18} /> Profile Settings</div>
                  <div className="dropdown-item"><Bell size={18} /> Alerts</div>
                  <div className="dropdown-item"><ChevronRight size={18} /> Buy Now Pay Later</div>
                  <div className="dropdown-item"><ChevronRight size={18} /> Find My Ride</div>
                  <div className="dropdown-item"><FileText size={18} /> Statements</div>
                  <div className="dropdown-item"><FilePlus size={18} /> Check Ordering</div>
                  <div className="dropdown-item"><Lock size={18} /> Secure Message</div>
                  <div className="dropdown-item"><MapPin size={18} /> Locations</div>
                  <div className="dropdown-item"><RefreshCw size={18} /> Routing Number</div>
                  <div className="dropdown-item"><Send size={18} /> Contact Us</div>
                  <div className="dropdown-item"><HelpCircle size={18} /> FAQ</div>
                  <div className="dropdown-item"><ChevronRight size={18} /> Fee Schedule</div>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="topnav-actions">
            <button className="action-btn plus-btn" onClick={toggleQuickActions}>
              <Plus size={20} />
            </button>
            <button className="action-btn logout-btn">
              <LogOut size={20} />
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-header">
          <div className="topnav-user">
            <div className="user-avatar">
              <User size={24} color="#666" />
            </div>
            <div className="user-balance-info" style={{ color: 'var(--text-dark)' }}>
              <div className="balance-amount">$ 22.73</div>
              <div className="balance-label" style={{ color: 'var(--text-muted)' }}>Total Available Balance</div>
            </div>
          </div>
          <button className="close-btn" onClick={toggleMobileMenu}>
            <X size={32} color="var(--primary-color)" />
          </button>
          <button className="action-btn plus-btn mobile-plus" onClick={toggleQuickActions}>
            <Plus size={20} />
          </button>
        </div>

        <div className="mobile-sidebar-links">
          <NavLink to="/dashboard" onClick={toggleMobileMenu} className={({isActive}) => isActive ? "mobile-link active" : "mobile-link"}>
            <LayoutDashboard size={24} /> Dashboard
          </NavLink>
          <NavLink to="/transfer-money" onClick={toggleMobileMenu} className={({isActive}) => isActive ? "mobile-link active" : "mobile-link"}>
            <RefreshCw size={24} /> Transfer Money
          </NavLink>
          <NavLink to="/my-finance" onClick={toggleMobileMenu} className={({isActive}) => isActive ? "mobile-link active" : "mobile-link"}>
            <PieChart size={24} /> My Finance
          </NavLink>
          <NavLink to="/cards" onClick={toggleMobileMenu} className={({isActive}) => isActive ? "mobile-link active" : "mobile-link"}>
            <CreditCard size={24} /> Cards
          </NavLink>
          <div className="mobile-link">
            <LayoutGrid size={24} /> More
          </div>
          <div className="mobile-link logout">
            <LogOut size={24} /> Log Out
          </div>
        </div>
      </div>
      {isMobileMenuOpen && <div className="mobile-overlay fade-in" onClick={toggleMobileMenu}></div>}

      {/* Quick Actions Overlay Sidebar */}
      <div className={`quick-actions-sidebar ${isQuickActionsOpen ? 'open' : ''}`}>
        <button className="qa-close-btn" onClick={toggleQuickActions}>
          <X size={24} color="var(--primary-color)" />
        </button>
        <div className="qa-items">
          <div className="qa-item">
            <div className="qa-icon alert"><Bell size={24} color="white" /></div>
            <span>Add Alert</span>
          </div>
          <div className="qa-item">
            <div className="qa-icon bill"><FileText size={24} color="white" /></div>
            <span>Pay Bill</span>
          </div>
          <div className="qa-item">
            <div className="qa-icon loan"><CircleDollarSign size={24} color="white" /></div>
            <span>Apply for Loan</span>
          </div>
          <div className="qa-item">
            <div className="qa-icon share"><BarChart2 size={24} color="white" /></div>
            <span>Create Share</span>
          </div>
        </div>
      </div>
      {isQuickActionsOpen && <div className="qa-overlay fade-in" onClick={toggleQuickActions}></div>}
    </>
  );
};

export default TopNav;
