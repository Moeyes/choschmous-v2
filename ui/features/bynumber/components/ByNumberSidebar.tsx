'use client';

import { StepSidebar } from '@/ui/components/navigation/StepSidebar';
import { CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type SidebarStep = {
  icon: LucideIcon;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  isAccessible: boolean;
  key: string;
  label: string;
};

type ByNumberSidebarProps = {
  steps: SidebarStep[];
  activeIndex: number;
  gotoStep: (index: number) => void;
};

export function ByNumberSidebar({ steps, gotoStep }: ByNumberSidebarProps) {
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
