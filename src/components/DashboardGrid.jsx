import React from 'react';
import { MoreHorizontal, BarChart2 } from 'lucide-react';
import './DashboardGrid.css';

const DashboardGrid = () => {
  return (
    <div className="dashboard-grid">
      {/* Column 1 */}
      <div className="grid-col">
        <div className="card share-accounts-card shadow-sm">
          <div className="card-header">
            <span className="badge">Share Accounts</span>
            <button className="icon-btn-small"><MoreHorizontal size={16} /></button>
          </div>
          <div className="card-body">
            <h3>Share Draft</h3>
            <p className="account-details">Zuhair Nissan - XXX 73-S0011</p>
            <div className="balance-row">
              <div className="balance-col">
                <span className="balance-label">Available</span>
                <span className="balance-amount success">$21.77</span>
              </div>
              <div className="balance-col text-right">
                <span className="balance-label">Current Balance</span>
                <span className="balance-amount">$21.77</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card new-share-card shadow-sm">
          <div className="new-share-content">
            <div className="new-share-text">
              <h3>New Share</h3>
              <p>Add custom savings & checking accounts, share certificates, money market accounts and more</p>
            </div>
            <div className="new-share-action">
              <div className="chart-icon"><BarChart2 size={32} color="#4a446c" /></div>
              <button className="btn btn-primary">Create Share</button>
            </div>
          </div>
        </div>
      </div>

      {/* Column 2 */}
      <div className="grid-col">
        <div className="card loan-accounts-card shadow-sm">
          <div className="card-header">
            <span className="badge">Loan Accounts</span>
            <button className="icon-btn-small"><MoreHorizontal size={16} /></button>
          </div>
          <div className="card-body">
            <h3>Home Equity 100%</h3>
            <p className="account-details">Zuhair Nissan - XXX 73-L5000</p>
            <div className="balance-row mt-4">
              <div className="balance-col">
                <span className="balance-label">Due Jun 28, 2026</span>
                <span className="balance-amount">$1,679.73</span>
              </div>
              <div className="balance-col text-right">
                <span className="balance-label">Current Balance</span>
                <span className="balance-amount">$84,886.73</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Column 3 */}
      <div className="grid-col">
        <div className="card bnpl-card shadow-sm center-content">
          <h3>Buy Now, Pay Later</h3>
          <button className="btn btn-primary mt-4">View My Offers</button>
        </div>
      </div>

      {/* Column 4 */}
      <div className="grid-col">
        <div className="card ad-card shadow-sm">
          <img src="/summer_ad.png" alt="Summer Loans" className="ad-image" />
          <div className="ad-overlay">
            <h4>MAKE A SPLASH<br/>THIS SUMMER</h4>
            <p>Applications for Summer Fun Loans are now open!</p>
          </div>
        </div>

        <div className="card transactions-card shadow-sm">
          <div className="card-header">
            <span className="badge">Transactions</span>
          </div>
          <div className="transactions-list">
            
            <div className="transaction-item">
              <div className="tx-icon withdraw-icon">💳</div>
              <div className="tx-details">
                <p className="tx-title">ATM Withdrawal INTOU...</p>
                <p className="tx-date">Jun 11, 2026</p>
              </div>
              <div className="tx-amount negative">
                <p>-$100.00</p>
                <p className="tx-balance">$21.77</p>
              </div>
            </div>

            <div className="transaction-item">
              <div className="tx-icon withdraw-icon">💳</div>
              <div className="tx-details">
                <p className="tx-title">ATM Withdrawal INTOU...</p>
                <p className="tx-date">Jun 9, 2026</p>
              </div>
              <div className="tx-amount negative">
                <p>-$500.00</p>
                <p className="tx-balance">$121.77</p>
              </div>
            </div>

            <div className="transaction-item">
              <div className="tx-icon deposit-icon">💰</div>
              <div className="tx-details">
                <p className="tx-title">Home banking Deposit Tr...</p>
                <p className="tx-date">Jun 9, 2026</p>
              </div>
              <div className="tx-amount positive">
                <p>$600.00</p>
                <p className="tx-balance">$621.77</p>
              </div>
            </div>
            
            <div className="transaction-item">
              <div className="tx-icon advance-icon">💸</div>
              <div className="tx-details">
                <p className="tx-title">Home banking Advance...</p>
                <p className="tx-date">Jun 9, 2026</p>
              </div>
              <div className="tx-amount negative">
                <p>-$600.00</p>
                <p className="tx-balance">$84,886.73</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DashboardGrid;
