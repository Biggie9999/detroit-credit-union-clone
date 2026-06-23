import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TransferMoney from './pages/TransferMoney';
import MyFinance from './pages/MyFinance';
import Cards from './pages/Cards';
import AccountDetails from './pages/AccountDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts/:accountId" element={<AccountDetails />} />
        <Route path="/transfer-money" element={<TransferMoney />} />
        <Route path="/my-finance" element={<MyFinance />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
