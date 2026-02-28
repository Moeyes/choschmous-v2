// import type { WizardViewModel, WizardStepState } from './types';
// import { CheckCircle2 } from 'lucide-react';

// interface WizardLike {
//   stepsWithState: WizardStepState[];
//   stepsLength: number;
//   goToStep: (index: number) => void;
// }

// export function mapWizardToViewModel(wizard: WizardLike): WizardViewModel {
//   return {
//     steps: wizard.stepsWithState.map((s) => ({
//       key: s.key,
//       label: s.label,
//       index: s.index,
//       isActive: s.isActive,
//       isCompleted: s.isCompleted,
//       isAccessible: s.isAccessible,
//       icon: s.icon || CheckCircle2,
//     })),
//     stepsLength: wizard.stepsLength,
//     goToStepByKey: (key: string) => {
//       const idx = wizard.stepsWithState.findIndex((s) => s.key === key);
//       if (idx !== -1) wizard.goToStep(idx);
//     },
//   };
// }
