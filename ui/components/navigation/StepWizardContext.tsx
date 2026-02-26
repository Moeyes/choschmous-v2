// ui/components/navigation/StepWizardContext.tsx
'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useStepWizard } from './useStepWizard';

type StepWizardReturn = ReturnType<typeof useStepWizard>;

const StepWizardContext = createContext<StepWizardReturn | null>(null);

export function StepWizardProvider({
  steps,
  children,
}: {
  steps: Parameters<typeof useStepWizard>[0];
  children: ReactNode;
}) {
  const wizard = useStepWizard(steps);

  return <StepWizardContext.Provider value={wizard}>{children}</StepWizardContext.Provider>;
}

export function useStepWizardContext() {
  const ctx = useContext(StepWizardContext);
  if (!ctx) throw new Error('useStepWizardContext must be used inside StepWizardProvider');
  return ctx;
}
