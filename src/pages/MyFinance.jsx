import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import { FileText, Calendar, Clock, Users, Receipt, Search, Printer } from 'lucide-react';
import './MyFinance.css';

const MyFinance = () => {
  const [activeTab, setActiveTab] = useState('loans');

  return (
    <div className="page-container fade-in">
      <TopNav />
      
      <div className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title">My Finance</h1>
        </div>
      </div>
      
      <div className="page-main">
        {/* Tabs Container */}
        <div className="finance-tabs-container">
          <div className="finance-tabs shadow-lg">
            <button className={`tab-btn ${activeTab === 'loans' ? 'active' : ''}`} onClick={() => setActiveTab('loans')}>
              <div className="tab-icon"><FileText size={24} /></div>
              <span>Loans Due</span>
            </button>
            <button className={`tab-btn ${activeTab === 'transfers' ? 'active' : ''}`} onClick={() => setActiveTab('transfers')}>
              <div className="tab-icon"><Calendar size={24} /></div>
              <span>Transfers</span>
            </button>
            <button className={`tab-btn ${activeTab === 'transactions' ? 'active' : ''}`} onClick={() => setActiveTab('transactions')}>
              <div className="tab-icon"><Clock size={24} /></div>
              <span>All Transactions</span>
            </button>
            <button className={`tab-btn ${activeTab === 'recipients' ? 'active' : ''}`} onClick={() => setActiveTab('recipients')}>
              <div className="tab-icon"><Users size={24} /></div>
              <span>My Recipients</span>
            </button>
            <button className={`tab-btn ${activeTab === 'billpay' ? 'active' : ''}`} onClick={() => setActiveTab('billpay')}>
              <div className="tab-icon"><Receipt size={24} /></div>
              <span>Bill Pay</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="finance-content">
          <div className="finance-actions">
            <div className="search-bar">
              <Search size={18} color="var(--text-muted)" />
              <input type="text" placeholder="Search" />
            </div>
            <button className="print-btn">
              <Printer size={18} /> Print
            </button>
          </div>

          <div className="loans-list">
            <div className="loan-item-header">
              <div className="col-payee">Payee Name</div>
              <div className="col-standard">Standard Payment</div>
              <div className="col-next">Next Payment Due Date</div>
              <div className="col-amount">Due Amount</div>
            </div>
            
            <div className="loan-item">
              <div className="col-payee">
                <div className="payee-icon">
                  <Receipt size={20} color="white" />
                </div>
                <span>Home Equity 100%</span>
              </div>
              <div className="col-standard"></div>
              <div className="col-next">
                Jun 28, 2026 - in 5 days
              </div>
              <div className="col-amount amount-wrapper">
                <span className="due-amount-value">$1,679.73</span>
                <button className="btn btn-outline btn-sm">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MyFinance;
