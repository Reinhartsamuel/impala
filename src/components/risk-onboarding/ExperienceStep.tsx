import React from 'react';
import { motion } from 'framer-motion';
import { Book, Cpu, Zap } from 'lucide-react';
import type { StepComponentProps } from './types';
import { STEP_CONFIG } from './types';

const ICON_MAP = {
  '0': Book,
  '1-5': Cpu,
  'I am a Degen': Zap,
} as const;

const COLOR_MAP = {
  '0': 'text-blue-400',
  '1-5': 'text-emerald-400',
  'I am a Degen': 'text-purple-400',
} as const;

const BORDER_COLOR_MAP = {
  '0': 'border-blue-500/50',
  '1-5': 'border-emerald-500/50',
  'I am a Degen': 'border-purple-500/50',
} as const;

const LEVEL_MAP = {
  '0': 'Beginner',
  '1-5': 'Intermediate',
  'I am a Degen': 'Advanced',
} as const;

export const ExperienceStep: React.FC<StepComponentProps> = ({
  data,
  onUpdate,

}) => {
  const { title, description, options } = STEP_CONFIG.experience;
  const selectedValue = data.experience;

  const handleSelect = (value: typeof options[number]['value']) => {
    onUpdate({ experience: value });
  };

  return (
    <div className="space-y-8">
      {/* Step header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-sm text-blue-400 font-medium">Step 3 of 3</span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
          {title}
        </h1>

        <p className="text-zinc-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Experience visualization */}
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-zinc-500">DeFi Experience Spectrum</p>
            <p className="text-lg font-bold text-zinc-100">From Newcomer to Expert</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-emerald-400" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500" />
          </div>

          <div className="flex justify-between">
            {options.map((option) => (
              <div key={option.value} className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full mb-2 ${
                  selectedValue === option.value
                    ? COLOR_MAP[option.value]
                    : 'bg-zinc-700'
                }`} />
                <span className="text-xs text-zinc-500">{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Options grid */}
      <div className="space-y-3">
        {options.map((option, index) => {
          const Icon = ICON_MAP[option.value];
          const isSelected = selectedValue === option.value;
          const level = LEVEL_MAP[option.value];

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
                    <div>
                      <h3 className={`font-semibold text-lg ${
                        isSelected ? 'text-zinc-100' : 'text-zinc-200'
                      }`}>
                        {option.label}
                      </h3>
                      <span className={`text-xs font-medium ${COLOR_MAP[option.value]} mt-1`}>
                        {level} Level
                      </span>
                    </div>

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

              {/* Protocol examples */}
              <div className="mt-4 pt-4 border-t border-zinc-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500">Typical Protocols</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {(() => {
                        const protocols = option.value === '0' ? ['AAVE'] :
                                         option.value === '1-5' ? ['AAVE', 'Compound', 'Curve'] :
                                         ['AAVE', 'Compound', 'Curve', 'Maker', 'Uniswap', 'Yearn'];

                        return protocols.map((protocol, idx) => (
                          <div
                            key={idx}
                            className="px-2 py-0.5 bg-zinc-800 rounded text-xs text-zinc-400"
                          >
                            {protocol}
                          </div>
                        ));
                      })()}
                    </div>
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
          Your experience level determines the complexity of strategies we recommend
        </p>
      </div>
    </div>
  );
};
