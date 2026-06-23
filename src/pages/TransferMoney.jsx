import React from 'react';
import TopNav from '../components/TopNav';
import { RefreshCw, User } from 'lucide-react';
import './TransferMoney.css';

const TransferMoney = () => {
  return (
    <div className="page-container fade-in">
      <TopNav />
      
      <div className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title">Transfer Money - Select Transfer Type</h1>
        </div>
      </div>
      
      <div className="page-main">
        <div className="transfer-card shadow-lg">
          <div className="transfer-options">
            <div className="transfer-option shadow-sm">
              <div className="option-icon between-accounts">
                <RefreshCw size={24} color="white" />
              </div>
              <div className="option-text">
                <h3>Between Your Accounts</h3>
                <p>Transfer money between your accounts in the financial institution</p>
              </div>
            </div>

            <div className="transfer-option shadow-sm">
              <div className="option-icon contacts">
                <User size={24} color="white" />
              </div>
              <div className="option-text">
                <h3>Contacts</h3>
                <p>Send money to your friends and family</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferMoney;
