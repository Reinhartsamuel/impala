import React from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { useNavigate } from 'react-router-dom';
import { Wallet, Mail, Lock, Sparkles, Shield, Zap, Globe, ArrowRight } from 'lucide-react';

const LoginPage: React.FC = () => {
  const { login, authenticated } = usePrivy();
  const navigate = useNavigate();

  // If user is already authenticated, redirect to home
  React.useEffect(() => {
    if (authenticated) {
      navigate('/');
    }
  }, [authenticated, navigate]);

  const loginMethods = [
    {
      id: 'email',
      title: 'Continue with Email',
      description: 'No wallet needed',
      icon: Mail,
      color: 'bg-blue-500 hover:bg-blue-600',
      onClick: () => login(),
    },
    {
      id: 'wallet',
      title: 'Connect Wallet',
      description: 'MetaMask, Coinbase, etc.',
      icon: Wallet,
      color: 'bg-purple-500 hover:bg-purple-600',
      onClick: () => login(),
    },
    {
      id: 'google',
      title: 'Continue with Google',
      description: 'Quick and secure',
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
      ),
      color: 'bg-white hover:bg-gray-100 text-gray-900',
      onClick: () => login(),
    },
    {
      id: 'twitter',
      title: 'Continue with Twitter',
      description: 'Connect your account',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: 'bg-black hover:bg-gray-900',
      onClick: () => login(),
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Your assets are protected with enterprise-level security',
    },
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'No KYC required. Start earning in seconds',
    },
    {
      icon: Globe,
      title: 'Multi-Chain',
      description: 'Access DeFi across Ethereum, Solana, and more',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Subtle Background Illumination */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]" />

      <div className="max-w-xl mx-auto px-4 py-8 relative z-10 min-h-screen">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Impala</h1>
              <p className="text-blue-400 text-sm font-medium">DeFi Management Suite</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4">
            Welcome to the future of
            <span className="block bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              decentralized finance
            </span>
          </h2>

          <p className="text-zinc-400 mb-8">
            Manage, track, and optimize your DeFi portfolio with enterprise-grade security and seamless UX.
          </p>
        </header>

        {/* Login Card */}
        <div className="bg-black border border-zinc-800 rounded-2xl p-5 mb-8">
          <div className="space-y-2 mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 mx-auto mb-4">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-center">Get Started</h3>
            <p className="text-zinc-500 text-center text-sm">
              Choose your preferred login method
            </p>
          </div>

          {/* Login Methods */}
          <div className="space-y-3">
            {loginMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={method.onClick}
                  className={`w-full ${method.color} text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 active:scale-[0.98] flex items-center gap-3`}
                >
                  <Icon className="w-5 h-5" />
                  <div className="text-left flex-1">
                    <div className="font-semibold">{method.title}</div>
                    <div className="text-xs opacity-80">{method.description}</div>
                  </div>
                  <ArrowRight className="w-4 h-4" />
                </button>
              );
            })}
          </div>

          {/* Demo Note */}
          <div className="mt-6 pt-6 border-t border-zinc-900">
            <p className="text-sm text-blue-300 text-center">
              <span className="font-semibold">Demo Mode:</span> Use any email or connect a test wallet on Sepolia network.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-6 mb-8">
          <h3 className="text-lg font-semibold text-zinc-100">Why Choose Impala</h3>

          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-black border border-zinc-800 rounded-xl p-4 group hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-100">{feature.title}</h4>
                      <p className="text-sm text-zinc-500 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-900">
          <div className="text-center">
            <p className="text-xl font-bold">$2.4B+</p>
            <p className="text-xs text-zinc-500">Total Value Locked</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">50K+</p>
            <p className="text-xs text-zinc-500">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">99.9%</p>
            <p className="text-xs text-zinc-500">Uptime</p>
          </div>
        </div>

        {/* Terms */}
        <div className="mt-8 pt-6 border-t border-zinc-900">
          <p className="text-xs text-zinc-500 text-center">
            By continuing, you agree to our{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Privacy Policy
            </a>
            . Your data is encrypted and secure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
