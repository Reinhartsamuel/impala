import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, MinusCircle, PlusCircle } from 'lucide-react';
import type { StepComponentProps } from './types';
import { STEP_CONFIG } from './types';

const ICON_MAP = {
  'Panic sell': AlertTriangle,
  'Do nothing': MinusCircle,
  'Buy more': PlusCircle,
} as const;

const COLOR_MAP = {
  'Panic sell': 'text-rose-400',
  'Do nothing': 'text-amber-400',
  'Buy more': 'text-emerald-400',
} as const;

const BORDER_COLOR_MAP = {
  'Panic sell': 'border-rose-500/50',
  'Do nothing': 'border-amber-500/50',
  'Buy more': 'border-emerald-500/50',
} as const;

export const ToleranceStep: React.FC<StepComponentProps> = ({
  data,
  onUpdate,

}) => {
  const { title, description, options } = STEP_CONFIG.tolerance;
  const selectedValue = data.tolerance;

  const handleSelect = (value: typeof options[number]['value']) => {
    onUpdate({ tolerance: value });
  };

  return (
    <div className="space-y-8">
      {/* Step header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-sm text-blue-400 font-medium">Step 2 of 3</span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
          {title}
        </h1>

        <p className="text-zinc-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Market drop visualization */}
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-zinc-500">Hypothetical Scenario</p>
            <p className="text-lg font-bold text-zinc-100">Market Drop: -20%</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-rose-500/10 to-amber-500/10 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
          </div>
        </div>

        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden mb-2">
          <div className="h-full w-full bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500" />
        </div>

        <div className="flex justify-between text-xs text-zinc-500">
          <span>Start of Week</span>
          <span className="text-rose-400">-20% Drop</span>
          <span>Your Reaction</span>
        </div>
      </div>

      {/* Options grid */}
      <div className="space-y-3">
        {options.map((option, index) => {
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
              transition={{ duration: 0.3, delay: index * 0.1 }}
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

              {/* Risk level indicator */}
              <div className="mt-4 pt-4 border-t border-zinc-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500">Risk Tolerance</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={`w-2 h-2 rounded-full ${
                            level <= (option.value === 'Panic sell' ? 1 :
                                     option.value === 'Do nothing' ? 2 : 3)
                              ? COLOR_MAP[option.value]
                              : 'bg-zinc-800'
                          }`}
                        />
                      ))}
                    </div>
                    <span className={`text-xs font-medium ${COLOR_MAP[option.value]}`}>
                      {option.value === 'Panic sell' ? 'Low' :
                       option.value === 'Do nothing' ? 'Medium' : 'High'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Helper text */}
      <div className="pt-4 border-t border-zinc-900">
        <p className="text-xs text-zinc-600 text-center">
          Understanding your reaction to volatility helps us manage risk appropriately
        </p>
      </div>
    </div>
  );
};
