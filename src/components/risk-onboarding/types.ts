// Risk Onboarding Types and Interfaces

export type RiskProfile = 'Conservative' | 'Moderate' | 'Degen';

export type OnboardingStep = 'goal' | 'tolerance' | 'experience' | 'result';

export interface RiskOnboardingData {
  goal: 'Protect Capital' | 'Steady Growth' | 'Maximum Yield' | null;
  tolerance: 'Panic sell' | 'Do nothing' | 'Buy more' | null;
  experience: '0' | '1-5' | 'I am a Degen' | null;
}

export interface RiskOnboardingProps {
  onComplete: (riskProfile: RiskProfile, data: RiskOnboardingData) => void;
  onSkip?: () => void;
  initialStep?: OnboardingStep;
}

export interface StepComponentProps {
  data: RiskOnboardingData;
  onUpdate: (updates: Partial<RiskOnboardingData>) => void;
  onNext: () => void;
  onBack?: () => void;
  onSkip?: () => void;
}

// Scoring weights for risk calculation
export const RISK_WEIGHTS = {
  goal: {
    'Protect Capital': 1,
    'Steady Growth': 2,
    'Maximum Yield': 3,
  },
  tolerance: {
    'Panic sell': 1,
    'Do nothing': 2,
    'Buy more': 3,
  },
  experience: {
    '0': 1,
    '1-5': 2,
    'I am a Degen': 3,
  },
} as const;

// Risk score thresholds
export const RISK_THRESHOLDS = {
  Conservative: 3, // 1-3
  Moderate: 6,     // 4-6
  Degen: 9,        // 7-9
} as const;

// Calculate risk profile based on user responses
export function calculateRiskProfile(data: RiskOnboardingData): RiskProfile {
  if (!data.goal || !data.tolerance || !data.experience) {
    return 'Moderate'; // Default if incomplete
  }

  const score = 
    RISK_WEIGHTS.goal[data.goal] +
    RISK_WEIGHTS.tolerance[data.tolerance] +
    RISK_WEIGHTS.experience[data.experience];

  if (score <= RISK_THRESHOLDS.Conservative) {
    return 'Conservative';
  } else if (score <= RISK_THRESHOLDS.Moderate) {
    return 'Moderate';
  } else {
    return 'Degen';
  }
}

// Step configuration
export const STEP_CONFIG = {
  goal: {
    title: 'What is your primary focus?',
    description: 'Choose the investment goal that best describes your approach',
    options: [
      { value: 'Protect Capital', label: 'Protect Capital', description: 'Safety first, lower returns are acceptable' },
      { value: 'Steady Growth', label: 'Steady Growth', description: 'Balanced approach with moderate risk' },
      { value: 'Maximum Yield', label: 'Maximum Yield', description: 'Aggressive pursuit of highest returns' },
    ] as const,
  },
  tolerance: {
    title: 'If the market drops 20% in a week, you...',
    description: 'How do you typically react to market volatility?',
    options: [
      { value: 'Panic sell', label: 'Panic sell', description: 'Exit positions to minimize further losses' },
      { value: 'Do nothing', label: 'Do nothing', description: 'Hold and wait for recovery' },
      { value: 'Buy more', label: 'Buy more', description: 'See it as a buying opportunity' },
    ] as const,
  },
  experience: {
    title: 'How many DeFi protocols have you used?',
    description: 'Your experience level with decentralized finance',
    options: [
      { value: '0', label: '0', description: 'New to DeFi, just getting started' },
      { value: '1-5', label: '1-5', description: 'Some experience with major protocols' },
      { value: 'I am a Degen', label: 'I am a Degen', description: 'Experienced with multiple protocols and strategies' },
    ] as const,
  },
} as const;