import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Zap } from 'lucide-react';
import type { StepComponentProps } from './types';
import { STEP_CONFIG } from './types';

const ICON_MAP = {
  'Protect Capital': Shield,
  'Steady Growth': TrendingUp,
  'Maximum Yield': Zap,
} as const;

const COLOR_MAP = {
  'Protect Capital': 'text-blue-400',
  'Steady Growth': 'text-emerald-400',
  'Maximum Yield': 'text-purple-400',
} as const;

const BORDER_COLOR_MAP = {
  'Protect Capital': 'border-blue-500/50',
  'Steady Growth': 'border-emerald-500/50',
  'Maximum Yield': 'border-purple-500/50',
} as const;

export const GoalStep: React.FC<StepComponentProps> = ({
  data,
  onUpdate,
}) => {
  const { title, description, options } = STEP_CONFIG.goal;
  const selectedValue = data.goal;

  const handleSelect = (value: typeof options[number]['value']) => {
    onUpdate({ goal: value });
  };

  return (
    <div className="space-y-8">
      {/* Step header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-sm text-blue-400 font-medium">Step 1 of 3</span>
        </div>
        
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
          {title}
        </h1>
        
        <p className="text-zinc-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Options grid */}
      <div className="space-y-3">
        {options.map((option) => {
          const Icon = ICON_MAP[option.value];
          const isSelected = selectedValue === option.value;
          
          return (
            <motion.button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`w-full text-left bg-zinc-900/40 border rounded-2xl p-5 transition-all duration-300 ${
                isSelected 
                  ? `${BORDER_COLOR_MAP[option.value]} shadow-lg shadow-blue-900/10` 
                  : 'border-zinc-800 hover:border-zinc-700'
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-zinc-900/60 flex items-center justify-center ${
                  isSelected ? 'ring-2 ring-offset-2 ring-offset-black' : ''
                }`}>
                  <Icon className={`w-6 h-6 ${COLOR_MAP[option.value]}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`font-semibold text-lg ${
                      isSelected ? 'text-zinc-100' : 'text-zinc-200'
                    }`}>
                      {option.label}
                    </h3>
                    
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center"
                      >
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </motion.div>
                    )}
                  </div>
                  
                  <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>

              {/* Selection indicator */}
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 pt-4 border-t border-zinc-800"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500">Selected</span>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${COLOR_MAP[option.value]}`} />
                      <span className={`text-sm font-medium ${COLOR_MAP[option.value]}`}>
                        Ready to continue
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Helper text */}
      <div className="pt-4 border-t border-zinc-900">
        <p className="text-xs text-zinc-600 text-center">
          Your selection helps us recommend suitable vaults and strategies
        </p>
      </div>
    </div>
  );
};