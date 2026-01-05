import React, { useState } from 'react';
import { RiskOnboarding } from '../components/risk-onboarding';
import type { RiskProfile, RiskOnboardingData } from '../components/risk-onboarding';
import { ArrowLeft, Home, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const RiskOnboardingDemo: React.FC = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [completedData, setCompletedData] = useState<{
    profile: RiskProfile;
    data: RiskOnboardingData;
  } | null>(null);

  const handleComplete = (profile: RiskProfile, data: RiskOnboardingData) => {
    setCompletedData({ profile, data });
    setShowOnboarding(false);
    
    // In a real app, you would save this to your state management/store
    console.log('Risk onboarding completed:', { profile, data });
  };

  const handleSkip = () => {
    console.log('Risk onboarding skipped');
    setShowOnboarding(false);
  };

  const resetDemo = () => {
    setCompletedData(null);
    setShowOnboarding(false);
  };

  if (showOnboarding) {
    return (
      <RiskOnboarding
        onComplete={handleComplete}
        onSkip={handleSkip}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Subtle OLED illumination effects */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-indigo-900/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-emerald-900/10 rounded-full blur-[120px]" />

      <div className="max-w-md mx-auto px-4 py-8 relative z-10 min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Home className="w-4 h-4 text-zinc-500" />
            <span className="text-sm text-zinc-500">Demo</span>
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-8">
          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
              Risk Onboarding Flow
            </h1>
            <p className="text-zinc-500 text-sm">
              Production-grade 3-step risk assessment for DeFi applications
            </p>
          </div>

          {/* Demo card */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-emerald-500/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h2 className="font-semibold text-zinc-100">Risk Assessment Demo</h2>
                  <p className="text-sm text-zinc-500">Test the onboarding flow</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-zinc-400">
                  This demo showcases a production-ready risk onboarding flow with:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-zinc-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    3-step risk assessment questionnaire
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Smooth animations with Framer Motion
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Risk score calculation (Conservative/Moderate/Degen)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Mobile-first responsive design
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    Skip functionality with default values
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setShowOnboarding(true)}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-medium rounded-xl transition-all active:scale-[0.98]"
              >
                Start Risk Assessment
              </button>
            </div>
          </div>

          {/* Results display */}
          {completedData && (
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-zinc-100">Assessment Complete</h2>
                    <p className="text-sm text-zinc-500">Your risk profile has been calculated</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-zinc-900/60">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-zinc-500">Risk Profile</span>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        completedData.profile === 'Conservative' ? 'bg-blue-500/20 text-blue-400' :
                        completedData.profile === 'Moderate' ? 'bg-emerald-500/20 text-emerald-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {completedData.profile}
                      </span>
                    </div>
                    
                    <div className="space-y-3 pt-3 border-t border-zinc-800">
                      <div className="flex justify-between">
                        <span className="text-xs text-zinc-500">Investment Goal</span>
                        <span className="text-xs text-zinc-300">{completedData.data.goal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-zinc-500">Risk Tolerance</span>
                        <span className="text-xs text-zinc-300">{completedData.data.tolerance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-zinc-500">DeFi Experience</span>
                        <span className="text-xs text-zinc-300">{completedData.data.experience}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-zinc-600 mb-3">
                      This data would be saved to your user profile in a production environment
                    </p>
                    <button
                      onClick={resetDemo}
                      className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-medium rounded-lg transition-colors"
                    >
                      Reset Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Integration instructions */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
            <h3 className="font-semibold text-zinc-100 mb-4">Integration Example</h3>
            
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-black/60 border border-zinc-800">
                <pre className="text-xs text-zinc-400 overflow-x-auto">
{`import { RiskOnboarding } from './components/risk-onboarding';

function App() {
  const handleComplete = (profile, data) => {
    // Save to your state management
    console.log('Risk profile:', profile);
    console.log('User data:', data);
  };

  return (
    <RiskOnboarding
      onComplete={handleComplete}
      onSkip={() => console.log('Skipped')}
    />
  );
}`}
                </pre>
              </div>
              
              <p className="text-sm text-zinc-500">
                The component is fully self-contained and can be integrated into any part of your application.
              </p>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mb-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
              </div>
              <p className="text-xs text-zinc-400">Type-safe with TypeScript</p>
            </div>
            
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <p className="text-xs text-zinc-400">Framer Motion animations</p>
            </div>
            
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
              </div>
              <p className="text-xs text-zinc-400">Mobile-first responsive</p>
            </div>
            
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center mb-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
              </div>
              <p className="text-xs text-zinc-400">Clean state machine</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 mt-8 border-t border-zinc-900">
          <p className="text-xs text-zinc-600 text-center">
            Production-grade Risk Onboarding Flow • Built with Vite + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiskOnboardingDemo;