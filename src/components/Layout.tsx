import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, TrendingUp, BarChart3, Settings, Wallet } from 'lucide-react';
import { RiskOnboarding } from './risk-onboarding';

const Layout: React.FC = () => {
  const location = useLocation();
  const [showOnboarding, setShowOnboarding] = useState(false);


  const navigation = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Vaults', path: '/vaults', icon: TrendingUp },
    { name: 'Dashboard', path: '/dashboard', icon: BarChart3 },
    { name: 'Wallet', path: '/wallet', icon: Wallet },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 relative overflow-hidden">
      {/* Subtle Background Illumination */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]" />

      <div className="max-w-md mx-auto px-4 py-8 relative z-10 min-h-screen">
        {/* Top Navigation */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Impala</h1>
            <p className="text-zinc-500 text-sm">DeFi Management Suite</p>
            <button onClick={() => setShowOnboarding(true)}>Start Risk Assessment</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-xs font-bold">JD</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pb-20">
          <Outlet />
        </main>

        {/* Risk Onboarding Modal */}
        {showOnboarding && (
          <div className="fixed inset-0 z-50">
            <RiskOnboarding onComplete={() => setShowOnboarding(false)} />
          </div>
        )}


        {/* Bottom Navigation - hide during onboarding */}
        {!showOnboarding && (
          <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-zinc-900 px-8 py-4">
            <div className="max-w-md mx-auto flex justify-between items-center">
              {navigation.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex flex-col items-center justify-center p-2 transition-all ${
                      isActive
                        ? 'text-blue-500'
                        : 'text-zinc-400 hover:text-zinc-300'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-[10px] mt-1 font-medium tracking-tight">
                      {item.name}
                    </span>
                    {isActive && (
                      <div className="w-1 h-1 rounded-full bg-blue-500 mt-1" />
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Layout;
