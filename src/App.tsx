import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PrivyProvider } from './components/PrivyProvider';
import { usePrivy } from '@privy-io/react-auth';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import VaultsPage from './pages/VaultsPage';
import DashboardPage from './pages/DashboardPage';
import WalletPage from './pages/WalletPage';
import SettingsPage from './pages/SettingsPage';
import RiskOnboardingDemo from './pages/RiskOnboardingDemo';
import HyperliquidPage from './pages/HyperliquidPge';
import LoginPage from './pages/LoginPage';

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { authenticated } = usePrivy();

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <PrivyProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } />
            <Route path="vaults" element={
              <ProtectedRoute>
                <VaultsPage />
              </ProtectedRoute>
            } />
            <Route path="dashboard" element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } />
            <Route path="wallet" element={
              <ProtectedRoute>
                <WalletPage />
              </ProtectedRoute>
            } />
            <Route path="settings" element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            } />
            <Route path="hyperliquid" element={
              <ProtectedRoute>
                <HyperliquidPage />
              </ProtectedRoute>
            } />
            <Route path="risk-onboarding" element={
              <ProtectedRoute>
                <RiskOnboardingDemo />
              </ProtectedRoute>
            } />
            {/* Add more routes here as needed */}
          </Route>
        </Routes>
      </Router>
    </PrivyProvider>
  );
}

export default App;
