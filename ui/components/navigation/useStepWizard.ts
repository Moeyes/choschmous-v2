'use client';

import { useState, useCallback } from 'react';
import type { ComponentType, ReactNode, SVGProps } from 'react';
import { CheckCircle2 } from 'lucide-react';

export interface WizardStep {
  key: string;
  label: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  component: ReactNode;
  validate?: () => boolean;
}

export function useStepWizard(
  steps: WizardStep[],
  initialStep = 0,
  onStepChange?: (index: number) => void
) {
  const [activeIndex, setActiveIndex] = useState(initialStep);

  const setStep = useCallback(
    (index: number) => {
      setActiveIndex(index);
      onStepChange?.(index);
    },
    [onStepChange]
  );

  const nextStep = useCallback(() => {
    setStep(Math.min(activeIndex + 1, steps.length - 1));
  }, [activeIndex, steps.length, setStep]);

  const prevStep = useCallback(() => {
    setStep(Math.max(activeIndex - 1, 0));
  }, [activeIndex, setStep]);

  const goToStep = useCallback(
    (index: number) => {
      if (index >= 0 && index < steps.length) setStep(index);
    },
    [steps.length, setStep]
  );

  const stepsWithState = steps.map((step, idx) => ({
    ...step,
    index: idx,
    isActive: idx === activeIndex,
    isCompleted: idx < activeIndex,
    isAccessible: idx <= activeIndex,
    icon: step.icon || CheckCircle2,
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
