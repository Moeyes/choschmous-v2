'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';
import type { FC } from 'react';
import type { WizardStep } from './useStepWizard';

interface StepWizardProps {
  steps: WizardStep[];
  initialStep?: number;
  onFinish?: () => void;
}

export function StepWizard({ steps, initialStep = 0, onFinish }: StepWizardProps) {
  const [activeIndex, setActiveIndex] = useState(initialStep);

  const nextStep = () => {
    if (activeIndex < steps.length - 1) setActiveIndex(activeIndex + 1);
    else onFinish?.();
  };

  const prevStep = () => {
    setActiveIndex((i) => Math.max(0, i - 1));
  };

  const goToStep = (index: number) => {
    if (index >= 0 && index < steps.length) setActiveIndex(index);
  };

  return (
    <div className="reg-split-layout">
      {/* Sidebar */}
      <aside className="reg-sidebar">
        <div className="reg-sidebar-content">
          <h3 className="reg-sidebar-title">ជំហាន</h3>
          <div className="space-y-2">
            {steps.map((step, idx) => {
              const isActive = idx === activeIndex;
              const isCompleted = idx < activeIndex;
              const Icon = step.icon || CheckCircle2;
              return (
                <button
                  key={step.key}
                  onClick={() => goToStep(idx)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all',
                    isActive &&
                      'border-primary bg-primary/10 text-primary border-l-4 font-semibold shadow',
                    !isActive && isCompleted && 'bg-green-50 text-green-700 hover:bg-green-100',
                    !isActive && !isCompleted && 'text-slate-600 hover:bg-slate-50'
                  )}
                >
                  <div
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                      isActive && 'bg-primary text-white',
                      isCompleted && !isActive && 'bg-green-600 text-white',
                      !isActive && !isCompleted && 'bg-slate-200 text-slate-600'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium">{step.label}</div>
                    <div className="text-xs text-slate-500">
                      ជំហាន {idx + 1} នៃ {steps.length}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="reg-content">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ type: 'tween', duration: 0.45, ease: 'easeInOut' }}
          >
            {steps[activeIndex].component}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={prevStep}
            disabled={activeIndex === 0}
            className="rounded border bg-slate-100 px-4 py-2 hover:bg-slate-200"
          >
            ត្រលប់
          </button>
          <button
            onClick={() => {
              const valid = steps[activeIndex].validate?.() ?? true;
              if (valid) nextStep();
            }}
            className="bg-primary hover:bg-primary/90 rounded border px-4 py-2 text-white"
          >
            បន្ត
          </button>
        </div>
      </div>
    </div>
  );
}
