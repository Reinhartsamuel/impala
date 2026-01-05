import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import VaultsPage from './pages/VaultsPage';
import DashboardPage from './pages/DashboardPage';
import WalletPage from './pages/WalletPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="vaults" element={<VaultsPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="settings" element={<SettingsPage />} />
          {/* Add more routes here as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;