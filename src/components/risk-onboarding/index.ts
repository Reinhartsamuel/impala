// Risk Onboarding Components
export { default as RiskOnboarding } from './RiskOnboarding';
export type {
  RiskOnboardingProps,
  RiskOnboardingData,
  RiskProfile,
  OnboardingStep,
} from './types';

// Individual components (for testing or custom implementations)
export { GoalStep } from './GoalStep';
export { ToleranceStep } from './ToleranceStep';
export { ExperienceStep } from './ExperienceStep';
export { ResultStep } from './ResultStep';
export { ProgressBar } from './ProgressBar';

// Utility functions
export { calculateRiskProfile } from './types';