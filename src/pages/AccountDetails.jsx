import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TopNav from '../components/TopNav';
import { ChevronLeft, ChevronUp, ChevronDown, Edit2, RefreshCw, Bell, Search, Filter, Calendar, Printer, Download } from 'lucide-react';
import './AccountDetails.css';

const AccountDetails = () => {
  const { accountId } = useParams();
  const navigate = useNavigate();

  const [shareExpanded, setShareExpanded] = useState(true);
  const [loanExpanded, setLoanExpanded] = useState(true);

  const isShareDraft = accountId === 'share-draft';
  const isHomeEquity = accountId === 'home-equity';

  // Mock data for the two accounts based on screenshots
  const accountInfo = isShareDraft ? {
    title: 'Share Draft',
    desc: 'Zuhair Nissan - XXX 73-S0011',
    available: '$21.77',
    current: '$21.77',
    type: 'share'
  } : {
    title: 'Home Equity 100%',
    desc: 'Zuhair Nissan - XXX 73-L5000',
    dueDate: 'Jun 28, 2026',
    dueAmount: '$1,679.73',
    current: '$84,886.73',
    type: 'loan'
  };

  const shareTransactions = [
    { id: 1, type: 'withdraw', icon: '💳', desc: 'ATM Withdrawal INTOUCH CU 1005 E 13 MILE RD MADISON HEIGH MI', date: 'Jun 11, 2026', amount: '-$100.00', balance: '$21.77' },
    { id: 2, type: 'withdraw', icon: '💳', desc: 'ATM Withdrawal INTOUCH CU 1005 E 13 MILE RD MADISON HEIGH MI', date: 'Jun 9, 2026', amount: '-$500.00', balance: '$121.77' },
    { id: 3, type: 'deposit', icon: '💰', desc: 'Home banking Deposit Transfer From L 5000', date: 'Jun 9, 2026', amount: '$600.00', amountColor: 'green', balance: '$621.77' },
    { id: 4, type: 'withdraw', icon: '💳', desc: 'ATM Withdrawal INTOUCH CU 1005 E 13 MILE RD MADISON HEIGH MI', date: 'Jun 6, 2026', amount: '-$280.00', amountColor: '#ccc', balance: '$21.77' }
  ];

  const loanTransactions = [
    { id: 1, type: 'advance', icon: '💸', desc: 'Home banking Advance Transfer To S 0011', date: 'Jun 9, 2026', amount: '-$600.00', balance: '$84,886.73' },
    { id: 2, type: 'advance', icon: '💸', desc: 'Home banking Advance Transfer To S 0011', date: 'Jun 5, 2026', amount: '-$300.00', balance: '$84,286.73' },
    { id: 3, type: 'payment', icon: '💸', desc: 'Cash Payment', date: 'May 28, 2026', amount: '$598.25', amountColor: 'green', balance: '$83,986.73' },
    { id: 4, type: 'payment', icon: '💸', desc: 'Home banking Payment From S 0011', date: 'May 28, 2026', amount: '$1,080.00', amountColor: 'green', balance: '$84,584.98' }
  ];

  const transactions = isShareDraft ? shareTransactions : loanTransactions;

  return (
    <div className="page-container fade-in account-details-page">
      <TopNav />
      
      <div className="page-hero small-hero">
        <div className="page-hero-content">
          <button className="back-btn" onClick={() => navigate('/dashboard')}>
            <ChevronLeft size={24} /> Accounts
          </button>
        </div>
      </div>
      
      <div className="page-main account-layout">
        
        {/* Left Sidebar */}
        <div className="account-sidebar">
          
          <div className="sidebar-section shadow-sm">
            <div className="sidebar-header" onClick={() => setShareExpanded(!shareExpanded)}>
              <h4>Share Accounts</h4>
              {shareExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            {shareExpanded && (
              <div className="sidebar-content">
                <div 
                  className={`sidebar-account-item ${isShareDraft ? 'active' : ''}`}
                  onClick={() => navigate('/accounts/share-draft')}
                >
                  <h5>Share Draft</h5>
                  <p className="sidebar-account-desc">Zuhair Nissan - XXX 73-S0011</p>
                  <div className="sidebar-balance-row">
                    <div>
                      <span className="label">Available</span>
                      <span className="value success">$21.77</span>
                    </div>
                    <div className="text-right">
                      <span className="label">Current Balance</span>
                      <span className="value">$21.77</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="sidebar-section shadow-sm mt-4">
            <div className="sidebar-header" onClick={() => setLoanExpanded(!loanExpanded)}>
              <h4>Loan Accounts</h4>
              {loanExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            {loanExpanded && (
              <div className="sidebar-content">
                <div 
                  className={`sidebar-account-item ${isHomeEquity ? 'active' : ''}`}
                  onClick={() => navigate('/accounts/home-equity')}
                >
                  <h5>Home Equity 100%</h5>
                  <p className="sidebar-account-desc">Zuhair Nissan - XXX 73-L5000</p>
                  <div className="sidebar-balance-row">
                    <div>
                      <span className="label">Due Jun 28, 2026</span>
                      <span className="value">$1,679.73</span>
                    </div>
                    <div className="text-right">
                      <span className="label">Current Balance</span>
                      <span className="value">$84,886.73</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Right Main Content */}
        <div className="account-main-content">
          
          {/* Header Card */}
          <div className="account-header-card shadow-sm">
            <div className="header-card-top">
              <h2 className="account-title">{accountInfo.title} <Edit2 size={16} color="var(--text-muted)" className="ml-2 cursor-pointer" /></h2>
            </div>
            
            {isShareDraft ? (
              <div className="share-draft-header">
                <div className="balances-side">
                  <div className="mb-4">
                    <div className="label">Available</div>
                    <div className="value large success">{accountInfo.available}</div>
                  </div>
                  <div>
                    <div className="label">Current Balance</div>
                    <div className="value large">{accountInfo.current}</div>
                  </div>
                </div>
                <div className="chart-side">
                  {/* Mock Chart using SVG */}
                  <div className="mock-chart-container">
                    <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="mock-chart">
                      <path d="M0,20 L20,20 L30,80 L50,80 L60,85 L200,85 L210,80 L250,80 L260,85 L350,85 L360,40 L370,40 L375,85 L480,85 L485,70 L490,85 L500,85" 
                            fill="none" stroke="#6b8e23" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <div className="chart-labels">
                      <span>OCT</span><span>NOV</span><span>DEC</span><span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="home-equity-header">
                <div className="balances-side">
                  <div className="mb-4">
                    <div className="label">Due: {accountInfo.dueDate}</div>
                    <div className="value large">{accountInfo.dueAmount}</div>
                  </div>
                  <div>
                    <div className="label">Current Balance</div>
                    <div className="value large">{accountInfo.current}</div>
                  </div>
                </div>
                <div className="action-side">
                  <button className="btn btn-primary pay-loan-btn">Pay Loan</button>
                </div>
              </div>
            )}
          </div>

          {/* History Section */}
          <div className="account-history-card shadow-sm">
            
            <div className="history-tabs-row">
              <div className="history-tabs">
                <button className="h-tab active">History</button>
                <button className="h-tab">Account Info</button>
              </div>
              <div className="history-quick-actions">
                <button className="icon-btn"><RefreshCw size={18} /></button>
                <button className="icon-btn"><Bell size={18} /></button>
              </div>
            </div>

            <div className="history-filters-row">
              <div className="filter-group">
                <div className="search-input">
                  <Search size={16} />
                  <input type="text" placeholder="Search" />
                </div>
                <button className="filter-btn"><Filter size={16} /> All Categories</button>
                <button className="filter-btn"><Filter size={16} /> All Transactions</button>
                <button className="filter-btn"><Calendar size={16} /> All Time</button>
              </div>
              <div className="action-group">
                <button className="action-link"><Printer size={16} /> Print</button>
                <button className="action-link"><Download size={16} /> Download</button>
              </div>
            </div>

            <div className="transaction-status-tabs">
              <button className="t-tab active">Posted</button>
              <button className="t-tab">Pending (0)</button>
              <button className="t-tab">Hold (0)</button>
            </div>

            <div className="transactions-table">
              <div className="table-header hidden-mobile">
                <div className="col-desc">Transaction Description</div>
                <div className="col-date">Date</div>
                <div className="col-amount">Amount</div>
                <div className="col-balance">Balance</div>
              </div>
              
              <div className="table-body">
                {transactions.map(tx => (
                  <div className="table-row" key={tx.id}>
                    <div className="col-desc">
                      <div className={`tx-icon ${tx.type === 'deposit' ? 'deposit' : 'withdraw'}`}>
                        {tx.icon}
                      </div>
                      <span className="desc-text">{tx.desc}</span>
                    </div>
                    <div className="col-date mobile-label" data-label="Date">{tx.date}</div>
                    <div className={`col-amount mobile-label`} data-label="Amount" style={{ color: tx.amountColor || 'var(--text-dark)' }}>
                      {tx.amount}
                    </div>
                    <div className="col-balance mobile-label" data-label="Balance">{tx.balance}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
