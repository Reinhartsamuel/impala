import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Zap, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { StepComponentProps, calculateRiskProfile, RiskProfile } from './types';

interface ResultStepProps extends StepComponentProps {
  onComplete: () => void;
}

const RISK_PROFILE_CONFIG = {
  Conservative: {
    icon: Shield,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    gradient: 'from-blue-500 to-emerald-500',
    description: 'Prioritizes capital preservation with lower volatility strategies',
    recommendations: [
      'Stablecoin yield strategies',
      'Low-risk lending protocols',
      'Insurance-protected vaults',
      'Diversified portfolio allocation'
    ],
    vaultTypes: ['Stablecoin', 'Bond RWA', 'Insurance'],
  },
  Moderate: {
    icon: TrendingUp,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    gradient: 'from-emerald-500 to-amber-500',
    description: 'Balanced approach with moderate risk for steady growth',
    recommendations: [
      'Blue-chip DeFi protocols',
      'Diversified yield strategies',
      'Liquid staking derivatives',
      'Risk-adjusted portfolio mix'
    ],
    vaultTypes: ['Lending', 'Stablecoin', 'Bond RWA'],
  },
  Degen: {
    icon: Zap,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Maximum yield pursuit with higher risk tolerance',
    recommendations: [
      'Leveraged yield strategies',
      'New protocol opportunities',
      'High APY farming',
      'Advanced DeFi composability'
    ],
    vaultTypes: ['Leveraged', 'High-Yield', 'Experimental', 'Commodity RWA'],
  },
} as const;

export const ResultStep: React.FC<ResultStepProps> = ({
  data,
  onComplete,
}) => {
  const [riskProfile, setRiskProfile] = useState<RiskProfile>('Moderate');
  const [score, setScore] = useState(0);
  const [isCalculating, setIsCalculating] = useState(true);

  useEffect(() => {
    // Simulate calculation delay for better UX
    const timer = setTimeout(() => {
      const profile = calculateRiskProfile(data);
      setRiskProfile(profile);
      
      // Calculate score for visualization
      const calculatedScore = 
        (data.goal === 'Protect Capital' ? 1 : data.goal === 'Steady Growth' ? 2 : 3) +
        (data.tolerance === 'Panic sell' ? 1 : data.tolerance === 'Do nothing' ? 2 : 3) +
        (data.experience === '0' ? 1 : data.experience === '1-5' ? 2 : 3);
      setScore(calculatedScore);
      
      setIsCalculating(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [data]);

  const config = RISK_PROFILE_CONFIG[riskProfile];
  const Icon = config.icon;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mb-4"
        >
          <Sparkles className="w-8 h-8 text-white" />
        </motion.div>
        
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
          Your Risk Profile
        </h1>
        
        <p className="text-zinc-500 text-sm">
          Based on your responses, we've calculated your optimal risk level
        </p>
      </div>

      {/* Calculating animation */}
      {isCalculating ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-blue-500/30 animate-spin" />
              <div className="text-center space-y-2">
                <p className="text-zinc-100 font-medium">Calculating your profile</p>
                <p className="text-sm text-zinc-500">Analyzing your risk preferences...</p>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Risk Profile Card */}
          <div className={`bg-zinc-900/40 border ${config.borderColor} rounded-2xl p-6`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl ${config.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${config.color}`} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-zinc-100">{riskProfile}</h2>
                  <p className="text-sm text-zinc-500">Risk Level</p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-zinc-100">Score: {score}/9</div>
                <div className="text-xs text-zinc-500">Risk Assessment</div>
              </div>
            </div>

            {/* Score visualization */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-zinc-500 mb-2">
                <span>Conservative</span>
                <span>Moderate</span>
                <span>Degen</span>
              </div>
              
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(score / 9) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${config.gradient} rounded-full`}
                />
              </div>
              
              <div className="flex justify-between mt-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((point) => (
                  <div
                    key={point}
                    className={`w-1 h-1 rounded-full ${
                      point <= score ? config.color.replace('text-', 'bg-') : 'bg-zinc-800'
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              {config.description}
            </p>
          </div>

          {/* Recommendations */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-zinc-100 mb-4">Recommended Strategies</h3>
            
            <div className="space-y-3">
              {config.recommendations.map((rec, index) => (
                <motion.div
                  key={rec}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/60"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-zinc-300">{rec}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vault Types */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-zinc-100 mb-4">Suggested Vault Types</h3>
            
            <div className="flex flex-wrap gap-2">
              {config.vaultTypes.map((type, index) => (
                <motion.span
                  key={type}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                    riskProfile === 'Conservative' ? 'bg-blue-500/20 text-blue-400' :
                    riskProfile === 'Moderate' ? 'bg-emerald-500/20 text-emerald-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}
                >
                  {type}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-zinc-900/40 to-zinc-900/20 border border-zinc-800 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium text-zinc-100">Personalized Experience</h4>
                <p className="text-sm text-zinc-500 mt-1">
                  Your vault recommendations, risk alerts, and portfolio suggestions will now be tailored to your {riskProfile.toLowerCase()} risk profile.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Complete Button */}
      {!isCalculating && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="pt-6 border-t border-zinc-900"
        >
          <button
            onClick={onComplete}
            className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-medium rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-blue-900/20"
          >
            <span className="text-sm font-medium">Complete Onboarding</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <p className="text-xs text-zinc-600 text-center mt-3">
            You can update your risk profile anytime in Settings
          </p>
        </motion.div>
      )}
    </div>
  );
};