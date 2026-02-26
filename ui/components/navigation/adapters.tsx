import type { WizardViewModel } from './types';
import { CheckCircle2 } from 'lucide-react';

export function mapWizardToViewModel(wizard: any): WizardViewModel {
  return {
    steps: wizard.stepsWithState.map((s: any) => ({
      key: s.key,
      label: s.label,
      index: s.index,
      isActive: s.isActive,
      isCompleted: s.isCompleted,
      isAccessible: s.isAccessible,
      icon: s.icon || CheckCircle2,
    })),
    stepsLength: wizard.stepsLength,
    goToStepByKey: (key: string) => {
      const idx = wizard.stepsWithState.findIndex((s: any) => s.key === key);
      if (idx !== -1) wizard.goToStep(idx);
    },
  };
}
