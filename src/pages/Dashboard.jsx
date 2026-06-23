import React from 'react';
import TopNav from '../components/TopNav';
import DashboardGrid from '../components/DashboardGrid';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container fade-in">
      <TopNav />
      
      <div className="dashboard-hero">
        <div className="dashboard-hero-content">
          <h1 className="dashboard-title">Dashboard</h1>
          <div className="hero-actions">
            <button className="icon-btn"><span className="grid-icon"></span></button>
            <button className="icon-btn"><span className="menu-icon"></span></button>
            <button className="icon-btn"><span className="settings-icon"></span></button>
          </div>
        </div>
      </div>
      
      <div className="dashboard-main">
        <DashboardGrid />
      </div>
    </div>
  );
};

export default Dashboard;
