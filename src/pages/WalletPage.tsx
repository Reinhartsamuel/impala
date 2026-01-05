import React from 'react';
import { Wallet, Send, Receive, History, Copy, QrCode, ExternalLink, ChevronRight } from 'lucide-react';

const WalletPage: React.FC = () => {
  const tokens = [
    {
      id: 1,
      name: 'Ethereum',
      symbol: 'ETH',
      balance: '2.45',
      value: '$8,245.50',
      change: '+2.4%',
      iconColor: 'bg-purple-500',
      address: '0x742d...c3b9',
    },
    {
      id: 2,
      name: 'USD Coin',
      symbol: 'USDC',
      balance: '12,450.00',
      value: '$12,450.00',
      change: '+0.1%',
      iconColor: 'bg-blue-500',
      address: '0x8a3d...f7c2',
    },
    {
      id: 3,
      name: 'Wrapped Bitcoin',
      symbol: 'WBTC',
      balance: '0.125',
      value: '$7,890.25',
      change: '+1.8%',
      iconColor: 'bg-orange-500',
      address: '0x5b9c...e8a1',
    },
    {
      id: 4,
      name: 'Aave',
      symbol: 'AAVE',
      balance: '15.5',
      value: '$1,240.00',
      change: '+5.2%',
      iconColor: 'bg-pink-500',
      address: '0x3e7f...b9d4',
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      type: 'sent',
      amount: '-0.5 ETH',
      to: '0x8f2d...a9c3',
      time: '2 hours ago',
      status: 'Confirmed',
      value: '$2,100.50',
    },
    {
      id: 2,
      type: 'received',
      amount: '+2,000 USDC',
      from: '0x3b9a...d7e1',
      time: '1 day ago',
      status: 'Confirmed',
      value: '$2,000.00',
    },
    {
      id: 3,
      type: 'swap',
      amount: 'ETH → USDC',
      details: '1.2 ETH for 4,200 USDC',
      time: '3 days ago',
      status: 'Confirmed',
      value: '$5,040.00',
    },
  ];

  const networks = [
    { name: 'Ethereum Mainnet', status: 'Connected', color: 'bg-purple-500' },
    { name: 'Arbitrum', status: 'Available', color: 'bg-blue-500' },
    { name: 'Polygon', status: 'Available', color: 'bg-indigo-500' },
    { name: 'Optimism', status: 'Available', color: 'bg-red-500' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Wallet</h1>
        <p className="text-zinc-500 text-sm">Manage your digital assets</p>
      </div>

      {/* Total Balance */}
      <div className="bg-black border border-zinc-800 rounded-2xl p-5">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-zinc-500">Total Balance</p>
            <p className="text-3xl font-bold mt-1">$29,825.75</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <Wallet className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-900">
          <div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">24h Change</p>
            <p className="text-sm font-medium text-emerald-400">+$689.50</p>
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Tokens</p>
            <p className="text-sm font-medium text-zinc-200">4</p>
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Networks</p>
            <p className="text-sm font-medium text-zinc-200">4</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3">
        <button className="group bg-black border border-zinc-800 hover:border-blue-500/50 rounded-xl p-4 transition-all active:scale-[0.98]">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Send className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-sm font-medium text-zinc-200">Send</span>
          </div>
        </button>
        
        <button className="group bg-black border border-zinc-800 hover:border-emerald-500/50 rounded-xl p-4 transition-all active:scale-[0.98]">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Receive className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-sm font-medium text-zinc-200">Receive</span>
          </div>
        </button>
        
        <button className="group bg-black border border-zinc-800 hover:border-purple-500/50 rounded-xl p-4 transition-all active:scale-[0.98]">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <QrCode className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-sm font-medium text-zinc-200">QR Code</span>
          </div>
        </button>
      </div>

      {/* Tokens List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-zinc-100">Tokens</h2>
          <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            View All →
          </button>
        </div>
        
        <div className="space-y-3">
          {tokens.map((token) => (
            <div
              key={token.id}
              className="group bg-black border border-zinc-800 hover:border-zinc-700 rounded-xl p-4 transition-colors cursor-pointer active:scale-[0.98]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${token.iconColor} flex items-center justify-center`}>
                    <span className="text-xs font-bold">{token.symbol.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-zinc-100">{token.name}</h3>
                      <span className="text-xs text-zinc-500">{token.symbol}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-sm text-zinc-500">{token.balance}</p>
                      <div className="flex items-center gap-1 text-xs">
                        <Copy className="w-3 h-3 text-zinc-600" />
                        <span className="text-zinc-600">{token.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-zinc-100">{token.value}</p>
                  <p className={`text-sm ${token.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                    {token.change}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Networks */}
      <div className="bg-black border border-zinc-800 rounded-2xl p-5">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-100">Networks</h2>
            <p className="text-sm text-zinc-500 mt-1">Connected and available networks</p>
          </div>
          <ExternalLink className="w-5 h-5 text-zinc-400" />
        </div>
        
        <div className="space-y-3">
          {networks.map((network, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/50"
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${network.color}`} />
                <span className="font-medium text-zinc-200">{network.name}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  network.status === 'Connected' 
                    ? 'bg-emerald-500/10 text-emerald-400' 
                    : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {network.status}
                </span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-medium rounded-xl transition-colors">
          Add Network
        </button>
      </div>

      {/* Recent Transactions */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-zinc-100">Recent Transactions</h2>
          <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            View All →
          </button>
        </div>
        
        <div className="space-y-3">
          {recentTransactions.map((tx) => (
            <div
              key={tx.id}
              className="bg-black border border-zinc-800 rounded-xl p-4"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg ${
                    tx.type === 'sent' ? 'bg-rose-500/10' : 
                    tx.type === 'received' ? 'bg-emerald-500/10' : 
                    'bg-blue-500/10'
                  } flex items-center justify-center`}>
                    {tx.type === 'sent' ? (
                      <Send className="w-5 h-5 text-rose-400" />
                    ) : tx.type === 'received' ? (
                      <Receive className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <History className="w-5 h-5 text-blue-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-100">{tx.amount}</h3>
                    <p className="text-sm text-zinc-500 mt-1">
                      {tx.type === 'sent' ? `To: ${tx.to}` : 
                       tx.type === 'received' ? `From: ${tx.from}` : 
                       tx.details}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-zinc-500">{tx.time}</span>
                      <span className="text-xs px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded">
                        {tx.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-zinc-100">{tx.value}</p>
                  <p className="text-xs text-zinc-500 capitalize">{tx.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Note */}
      <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <Wallet className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold text-blue-400">Security Reminder</h3>
            <p className="text-sm text-blue-500/80 mt-1">
              Never share your private keys or seed phrase. Impala never asks for this information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;