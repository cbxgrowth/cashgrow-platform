
import { LucideIcon } from 'lucide-react';

export interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  completed: boolean;
  points: number;
  category: 'setup' | 'first_action' | 'exploration' | 'achievement';
}

export interface OnboardingStats {
  totalPoints: number;
  level: number;
  completedSteps: number;
  progress: number;
}
