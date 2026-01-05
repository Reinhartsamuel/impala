
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number; // 0 to 100
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full">
      {/* Progress labels */}
      <div className="flex justify-between mb-2">
        <span className="text-xs text-zinc-500 font-medium">Risk Assessment</span>
        <span className="text-xs text-zinc-500 font-medium">{Math.round(progress)}%</span>
      </div>
      
      {/* Progress bar container */}
      <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      
      {/* Step indicators */}
      <div className="flex justify-between mt-3">
        {[0, 33, 66, 100].map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                progress >= step ? 'bg-blue-500' : 'bg-zinc-800'
              }`}
            />
            <span className="text-[10px] text-zinc-600 mt-1">
              {index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};