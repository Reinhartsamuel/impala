import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type {
  RiskOnboardingProps,
  RiskOnboardingData,
  OnboardingStep,
} from './types';
import { calculateRiskProfile } from './types';
import { ProgressBar } from './ProgressBar';
import { GoalStep } from './GoalStep';
import { ToleranceStep } from './ToleranceStep';
import { ExperienceStep } from './ExperienceStep';
import { ResultStep } from './ResultStep';

const STEPS: OnboardingStep[] = ['goal', 'tolerance', 'experience', 'result'];
const TOTAL_STEPS = STEPS.length - 1; // Excluding result step from progress

export const RiskOnboarding: React.FC<RiskOnboardingProps> = ({
  onComplete,
  onSkip,
  initialStep = 'goal'
}) => {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(initialStep);
  const [formData, setFormData] = useState<RiskOnboardingData>({
    goal: null,
    tolerance: null,
    experience: null,
  });

  const currentStepIndex = STEPS.indexOf(currentStep);
  const progress = (currentStepIndex / TOTAL_STEPS) * 100;

  const handleUpdateData = useCallback((updates: Partial<RiskOnboardingData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  }, []);

  const handleNext = useCallback(() => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < STEPS.length) {
      setCurrentStep(STEPS[nextIndex]);
    }
  }, [currentStepIndex]);

  const handleBack = useCallback(() => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(STEPS[prevIndex]);
    }
  }, [currentStepIndex]);

  const handleSkip = useCallback(() => {
    const defaultData: RiskOnboardingData = {
      goal: 'Steady Growth',
      tolerance: 'Do nothing',
      experience: '1-5',
    };
    const riskProfile = calculateRiskProfile(defaultData);
    onComplete(riskProfile, defaultData);
    onSkip?.();
  }, [onComplete, onSkip]);

  const handleComplete = useCallback(() => {
    const riskProfile = calculateRiskProfile(formData);
    onComplete(riskProfile, formData);
  }, [formData, onComplete]);

  const renderStep = () => {
    const commonProps = {
      data: formData,
      onUpdate: handleUpdateData,
      onNext: handleNext,
      onBack: currentStepIndex > 0 ? handleBack : undefined,
      onSkip: handleSkip,
    };

    switch (currentStep) {
      case 'goal':
        return <GoalStep {...commonProps} />;
      case 'tolerance':
        return <ToleranceStep {...commonProps} />;
      case 'experience':
        return <ExperienceStep {...commonProps} />;
      case 'result':
        return <ResultStep {...commonProps} onComplete={handleComplete} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-auto">
      {/* Subtle OLED illumination effects */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-indigo-900/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-emerald-900/10 rounded-full blur-[120px]" />

      <div className="max-w-md mx-auto px-4 py-8 relative z-10 min-h-screen flex flex-col">
        {/* Header with progress and skip */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleSkip}
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors group"
          >
            <X className="w-4 h-4" />
            <span className="text-sm font-medium">Skip</span>
          </button>

          <div className="flex-1 max-w-xs mx-4">
            <ProgressBar progress={progress} />
          </div>

          <div className="w-10" /> {/* Spacer for alignment */}
        </div>

        {/* Main content with animations */}
        <div className="flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-1"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <div className="mt-8 pt-6 border-t border-zinc-900">
          <div className="flex justify-between items-center">
            {currentStepIndex > 0 ? (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-4 py-3 text-zinc-400 hover:text-zinc-200 transition-colors group"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Back</span>
              </button>
            ) : (
            <></>
            )}

            {currentStep !== 'result' && (
              <button
                onClick={handleNext}
                className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-blue-900/20 ${
                  (currentStep === 'goal' && !formData.goal) ||
                  (currentStep === 'tolerance' && !formData.tolerance) ||
                  (currentStep === 'experience' && !formData.experience)
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                disabled={
                  (currentStep === 'goal' && !formData.goal) ||
                  (currentStep === 'tolerance' && !formData.tolerance) ||
                  (currentStep === 'experience' && !formData.experience)
                }
              >
                <span className="text-sm font-medium">Continue</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskOnboarding;
