'use client';

import { StepSidebar } from '@/ui/components/navigation/StepSidebar';
import { CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import React from 'react';

type sidebarStep = {
  icon: LucideIcon;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  isAccessible: boolean;
  key: string;
  label: string;
  completedIcon: React.ReactNode;
};

type registrationSidebarProps = {
  steps: sidebarStep[];
  activeIndex: number;
  gotoStep: (index: number) => void;
  gotoStepByKey: (key: string) => void;
  prevStep: () => void;
  nextStep: () => void;
};

export function RegistrationSidebar({ steps, gotoStep }: registrationSidebarProps) {
  return (
    <StepSidebar
      title="ជំហានចុះឈ្មោះ"
      steps={steps.map((s) => ({
        id: s.key,
        label: s.label,
        index: s.index,
        isActive: s.isActive,
        isCompleted: s.isCompleted,
        isAccessible: s.isAccessible,
        icon: (s.icon as LucideIcon) || CheckCircle2,
      }))}
      totalSteps={steps.length}
      onNavigate={(id) => {
        const idx = steps.findIndex((s) => s.key === id);
        if (idx !== -1) gotoStep(idx);
      }}
    />
  );
}
