import React from 'react';
import { TrendingUp, Shield, Zap, Globe, ArrowUpRight, Sparkles } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Vaults',
      description: 'Enterprise-grade security for your digital assets',
      color: 'bg-blue-500',
      textColor: 'text-blue-400',
    },
    {
      icon: TrendingUp,
      title: 'High Yield',
      description: 'Access top-performing DeFi strategies',
      color: 'bg-emerald-500',
      textColor: 'text-emerald-400',
    },
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Deposit and withdraw anytime, anywhere',
      color: 'bg-purple-500',
      textColor: 'text-purple-400',
    },
    {
      icon: Globe,
      title: 'Multi-Chain',
      description: 'Support for Ethereum, Solana, and more',
      color: 'bg-orange-500',
      textColor: 'text-orange-400',
    },
  ];

  const trendingVaults = [
    {
      name: 'Aave V3',
      apy: '4.5%',
      tvl: '$2.4B',
      change: '+0.2%',
      color: 'bg-purple-500',
    },
    {
      name: 'Curve Finance',
      apy: '8.1%',
      tvl: '$850M',
      change: '+0.5%',
      color: 'bg-emerald-500',
    },
    {
      name: 'Ondo RWA',
      apy: '5.2%',
      tvl: '$1.1B',
      change: '+0.1%',
      color: 'bg-blue-600',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-400" />
          <span className="text-sm text-blue-400 font-medium">Welcome back, John</span>
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight">
          Your DeFi
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Command Center
          </span>
        </h1>
        
        <p className="text-zinc-400">
          Manage, track, and optimize your decentralized finance portfolio in one place.
        </p>
      </div>

      {/* Portfolio Summary */}
      <div className="bg-black border border-zinc-800 rounded-2xl p-5">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-zinc-500">Total Portfolio Value</p>
            <p className="text-2xl font-bold">$42,689.50</p>
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <ArrowUpRight className="w-4 h-4" />
            <span className="text-sm font-medium">+12.4%</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-900">
          <div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">24h Change</p>
            <p className="text-sm font-medium text-emerald-400">+$1,240.50</p>
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">APY</p>
            <p className="text-sm font-medium text-zinc-200">6.8%</p>
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Vaults</p>
            <p className="text-sm font-medium text-zinc-200">3 Active</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-zinc-100">Why Choose Impala</h2>
        
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-xl p-4 group hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg ${feature.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-100">{feature.title}</h3>
                    <p className="text-xs text-zinc-500 mt-1">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trending Vaults */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-zinc-100">Trending Vaults</h2>
          <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            View All →
          </button>
        </div>
        
        <div className="space-y-3">
          {trendingVaults.map((vault, index) => (
            <div
              key={index}
              className="bg-black border border-zinc-800 rounded-xl p-4 group hover:border-zinc-700 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${vault.color} flex items-center justify-center`}>
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-100">{vault.name}</h3>
                    <p className="text-xs text-zinc-500">DeFi Protocol</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-zinc-500">APY</p>
                  <p className="text-lg font-bold text-emerald-400">{vault.apy}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-zinc-900">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase">TVL</p>
                  <p className="text-sm font-medium text-zinc-200">{vault.tvl}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase">24h</p>
                  <p className="text-sm font-medium text-emerald-400">{vault.change}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-zinc-100">Quick Actions</h2>
        
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-xl transition-all active:scale-[0.98]">
            Deposit Funds
          </button>
          <button className="bg-black border border-zinc-800 hover:border-zinc-700 text-zinc-100 font-medium py-3 px-4 rounded-xl transition-all active:scale-[0.98]">
            Explore Vaults
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;