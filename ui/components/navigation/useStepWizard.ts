'use client';

import { useState, useCallback } from 'react';
import type { FC, ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';

export interface WizardStep {
  key: string;
  label: string;
  icon?: FC<any>; // optional icon for step
  component: ReactNode;
  validate?: () => boolean;
}

export function useStepWizard(steps: WizardStep[], initialStep = 0) {
  const [activeIndex, setActiveIndex] = useState(initialStep);

  const nextStep = useCallback(() => {
    setActiveIndex((i) => Math.min(i + 1, steps.length - 1));
  }, [steps.length]);

  const prevStep = useCallback(() => {
    setActiveIndex((i) => Math.max(i - 1, 0));
  }, []);

  const goToStep = useCallback(
    (index: number) => {
      if (index >= 0 && index < steps.length) setActiveIndex(index);
    },
    [steps.length]
  );

  const stepsWithState = steps.map((step, idx) => ({
    ...step,
    index: idx,
    isActive: idx === activeIndex,
    isCompleted: idx < activeIndex,
    isAccessible: idx <= activeIndex,
    icon: step.icon || CheckCircle2, // fallback icon
  }));

  return {
    activeIndex,
    stepsWithState,
    stepsLength: steps.length,
    nextStep,
    prevStep,
    goToStep,
  };
}
