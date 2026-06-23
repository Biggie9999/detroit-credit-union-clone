import React from 'react';
import TopNav from '../components/TopNav';
import './Cards.css';

const Cards = () => {
  return (
    <div className="page-container fade-in">
      <TopNav />
      
      <div className="page-hero">
        <div className="page-hero-content cards-hero-content">
          <h1 className="page-title">Cards</h1>
          <button className="btn btn-outline support-btn">Contact Support</button>
        </div>
      </div>
      
      <div className="page-main">
        <div className="cards-container">
          <div className="card-wrapper shadow-lg">
            <img src="/detroit_debit_card.png" alt="Detroit Debit Card" className="debit-card-img" />
          </div>
          <div className="card-pagination">
            <span className="dot active"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
