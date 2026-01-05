import React from 'react';
import { Search, Filter, TrendingUp, Info, ShieldCheck } from 'lucide-react';

interface Vault {
  id: string;
  name: string;
  protocol: string;
  type: 'Lending' | 'Stablecoin' | 'Bond RWA' | 'Commodity RWA';
  tvl: string;
  apy: string;
  dailyChange: string;
  fees: string;
  ltv?: string;
  iconColor: string;
}

const VAULTS: Vault[] = [
  {
    id: '1',
    name: 'Aave V3 ETH',
    protocol: 'Aave',
    type: 'Lending',
    tvl: '$2.4B',
    apy: '4.5%',
    dailyChange: '+0.2%',
    fees: '0.1%',
    ltv: '70%',
    iconColor: 'bg-purple-500',
  },
  {
    id: '2',
    name: 'Curve USD-3CRV',
    protocol: 'Curve',
    type: 'Stablecoin',
    tvl: '$850M',
    apy: '8.1%',
    dailyChange: '+0.5%',
    fees: '0.04%',
    iconColor: 'bg-green-500',
  },
  {
    id: '3',
    name: 'Ondo US Treasuries',
    protocol: 'Ondo Finance',
    type: 'Bond RWA',
    tvl: '$1.1B',
    apy: '5.2%',
    dailyChange: '+0.1%',
    fees: '0.25%',
    iconColor: 'bg-blue-600',
  },
  {
    id: '4',
    name: 'Paxos Gold (PAXG)',
    protocol: 'Paxos',
    type: 'Commodity RWA',
    tvl: '$600M',
    apy: '1.5%',
    dailyChange: '+0.1%',
    fees: '0.02%',
    iconColor: 'bg-orange-500',
  },
];

const Badge = ({ type }: { type: Vault['type'] }) => {
  const styles = {
    Lending: 'bg-blue-900/30 text-blue-400 border-blue-800',
    Stablecoin: 'bg-emerald-900/30 text-emerald-400 border-emerald-800',
    'Bond RWA': 'bg-violet-900/30 text-violet-400 border-violet-800',
    'Commodity RWA': 'bg-amber-900/30 text-amber-400 border-amber-800',
  };

  return (
    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border ${styles[type]}`}>
      {type}
    </span>
  );
};

export default function VaultsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 relative overflow-hidden">
      {/* Subtle Background Illumination */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]" />

      <div className="max-w-md mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">YieldHub</h1>
            <p className="text-zinc-500 text-sm">Top Performing Vaults</p>
          </div>
          <div className="flex gap-4">
            <Search className="w-5 h-5 text-zinc-400" />
            <Filter className="w-5 h-5 text-zinc-400" />
          </div>
        </header>

        {/* Vault List */}
        <div className="space-y-4">
          {VAULTS.map((vault) => (
            <div
              key={vault.id}
              className="group bg-black border border-zinc-800 hover:border-zinc-600 transition-all rounded-2xl p-5 active:scale-[0.98] cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-3">
                  <div className={`w-10 h-10 rounded-full ${vault.iconColor} flex items-center justify-center shadow-lg shadow-black/50`}>
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-100">{vault.name}</h3>
                    <Badge type={vault.type} />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-zinc-500 uppercase tracking-tighter">APY</p>
                  <p className="text-xl font-bold text-emerald-400">{vault.apy}</p>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-4 gap-2 border-t border-zinc-900 pt-4">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase">TVL</p>
                  <p className="text-sm font-medium text-zinc-200">{vault.tvl}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase">24h</p>
                  <p className="text-sm font-medium text-emerald-500">{vault.dailyChange}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase">Fees</p>
                  <p className="text-sm font-medium text-zinc-200">{vault.fees}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase">{vault.ltv ? 'LTV' : 'Risk'}</p>
                  <p className="text-sm font-medium text-zinc-200">{vault.ltv || 'Low'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
