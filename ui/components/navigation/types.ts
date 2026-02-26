import type { LucideIcon } from 'lucide-react';

export interface WizardStepState {
  key: string;
  label: string;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  isAccessible: boolean;
  icon?: LucideIcon;
}

export interface WizardViewModel {
  steps: WizardStepState[];
  stepsLength: number;
  goToStepByKey: (key: string) => void;
}