import React from 'react';
import { TrendingUp, BarChart3, Wallet, Users, ArrowUpRight, ArrowDownRight, Activity, PieChart, Clock, Shield } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const stats = [
    {
      title: 'Total Value',
      value: '$42,689.50',
      change: '+12.4%',
      isPositive: true,
      icon: TrendingUp,
      color: 'bg-emerald-500',
      textColor: 'text-emerald-400',
    },
    {
      title: 'Daily Yield',
      value: '$89.24',
      change: '+2.1%',
      isPositive: true,
      icon: Activity,
      color: 'bg-blue-500',
      textColor: 'text-blue-400',
    },
    {
      title: 'Active Vaults',
      value: '3',
      change: '+1',
      isPositive: true,
      icon: Wallet,
      color: 'bg-purple-500',
      textColor: 'text-purple-400',
    },
    {
      title: 'Risk Score',
      value: 'Low',
      change: '-5%',
      isPositive: true,
      icon: Shield,
      color: 'bg-green-500',
      textColor: 'text-green-400',
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      type: 'deposit',
      amount: '+$5,000',
      description: 'Aave V3 ETH',
      time: '2 hours ago',
      icon: ArrowUpRight,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
    },
    {
      id: 2,
      type: 'withdrawal',
      amount: '-$1,200',
      description: 'Curve USD-3CRV',
      time: '1 day ago',
      icon: ArrowDownRight,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
    },
    {
      id: 3,
      type: 'yield',
      amount: '+$89.24',
      description: 'Daily Yield',
      time: 'Today',
      icon: TrendingUp,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
    },
    {
      id: 4,
      type: 'deposit',
      amount: '+$2,500',
      description: 'Ondo RWA',
      time: '3 days ago',
      icon: ArrowUpRight,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
    },
  ];

  const allocation = [
    { protocol: 'Aave V3', percentage: 45, color: 'bg-purple-500', value: '$19,210' },
    { protocol: 'Curve Finance', percentage: 30, color: 'bg-emerald-500', value: '$12,807' },
    { protocol: 'Ondo RWA', percentage: 25, color: 'bg-blue-600', value: '$10,672' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-zinc-500 text-sm">Your DeFi portfolio at a glance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-black border border-zinc-800 rounded-xl p-4 group hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">{stat.title}</p>
                  <p className="text-xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex items-center gap-1 mt-3">
                {stat.isPositive ? (
                  <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                ) : (
                  <ArrowDownRight className="w-3 h-3 text-red-400" />
                )}
                <span className={`text-xs font-medium ${stat.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                  {stat.change}
                </span>
                <span className="text-xs text-zinc-500 ml-1">from yesterday</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Portfolio Allocation */}
      <div className="bg-black border border-zinc-800 rounded-2xl p-5">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-100">Portfolio Allocation</h2>
            <p className="text-sm text-zinc-500 mt-1">Distribution across protocols</p>
          </div>
          <PieChart className="w-5 h-5 text-zinc-400" />
        </div>

        {/* Progress Bars */}
        <div className="space-y-4">
          {allocation.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-sm font-medium text-zinc-200">{item.protocol}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-zinc-200">{item.value}</p>
                  <p className="text-xs text-zinc-500">{item.percentage}%</p>
                </div>
              </div>
              <div className="h-2 bg-zinc-900 rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.color} rounded-full transition-all duration-500`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6 pt-6 border-t border-zinc-900">
          <div>
            <p className="text-xs text-zinc-500">Total Allocated</p>
            <p className="text-lg font-bold">$42,689</p>
          </div>
          <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            Rebalance →
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-black border border-zinc-800 rounded-2xl p-5">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-100">Recent Activity</h2>
            <p className="text-sm text-zinc-500 mt-1">Latest transactions and yields</p>
          </div>
          <Clock className="w-5 h-5 text-zinc-400" />
        </div>

        <div className="space-y-4">
          {recentTransactions.map((tx) => {
            const Icon = tx.icon;
            return (
              <div
                key={tx.id}
                className="flex items-center justify-between py-3 border-b border-zinc-900 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${tx.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${tx.color}`} />
                  </div>
                  <div>
                    <p className="font-medium text-zinc-100">{tx.description}</p>
                    <p className="text-xs text-zinc-500 mt-1">{tx.time}</p>
                  </div>
                </div>
                <div className={`text-right ${tx.color}`}>
                  <p className="font-bold">{tx.amount}</p>
                  <p className="text-xs text-zinc-500 capitalize">{tx.type}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button className="w-full mt-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-medium rounded-xl transition-colors">
          View All Activity
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-black border border-zinc-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-zinc-500">Avg. APY</p>
              <p className="text-lg font-bold text-emerald-400">6.8%</p>
            </div>
          </div>
          <p className="text-xs text-zinc-500">Across all vaults</p>
        </div>

        <div className="bg-black border border-zinc-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Users className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <p className="text-xs text-zinc-500">Total Users</p>
              <p className="text-lg font-bold">42.5K</p>
            </div>
          </div>
          <p className="text-xs text-zinc-500">On platform</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-xl transition-all active:scale-[0.98]">
          Add Funds
        </button>
        <button className="bg-black border border-zinc-800 hover:border-zinc-700 text-zinc-100 font-medium py-3 px-4 rounded-xl transition-all active:scale-[0.98]">
          Analytics
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;