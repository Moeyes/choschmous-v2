'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Calendar,
  Building2,
  Trophy,
  Grid3x3,
  User,
  CheckCircle2,
  PartyPopper,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useStepWizard } from '@/ui/components/navigation/useStepWizard';
import { RegistrationSidebar } from './RegistrationSidebar';
import { useRegistration, validateStep } from '../hooks/useRegistration';
import type { RegistrationErrors, RegistrationFormData } from '../hooks/useRegistration';
import {
  EventStep,
  OrganizationStep,
  SportStep,
  CategoryStep,
  PersonalInfoStep,
  ConfirmationStep,
  CompletedStep,
} from '@/ui/features/registrations/components/steps';

interface Event {
  id: string;
  name: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  sports?: any[];
}

const ICONS: LucideIcon[] = [Calendar, Building2, Trophy, Grid3x3, User, CheckCircle2, PartyPopper];
const LABELS = [
  'ព្រឹត្តិការណ៍',
  'អង្គភាព',
  'កីឡា',
  'ប្រភេទ',
  'ព័ត៌មានផ្ទាល់ខ្លួន',
  'បញ្ជាក់',
  'បញ្ចប់',
];
const KEYS = [
  'events',
  'organization',
  'sport',
  'category',
  'personal-info',
  'confirmation',
  'action',
];

export function RegistrationWizard({
  events,
  eventsLoading,
}: {
  events: Event[];
  eventsLoading?: boolean;
}) {
  const router = useRouter();
  const { formData, setFields, resetPersonal } = useRegistration();
  const [errors, setErrors] = useState<RegistrationErrors>({});
  const [enrollId, setEnrollId] = useState<number | null>(null);

  const currentEvent = events.filter(Boolean).find((e) => e && e.id === formData.eventId);
  const sports = (currentEvent?.sports ?? []) as any[];

  const steps = LABELS.map((label, i) => ({
    key: KEYS[i],
    label,
    icon: ICONS[i],
    component: null as any,
  }));
  const wizard = useStepWizard(steps);

  // override lets EventStep (and others) pass freshly-selected values
  // before React has flushed the setFields state update
  const attemptNext = useCallback(
    (override?: Partial<RegistrationFormData>) => {
      const merged = override ? { ...formData, ...override } : formData;
      const errs = validateStep(wizard.activeIndex, merged);
      if (Object.keys(errs).length) {
        setErrors(errs);
        return;
      }
      setErrors({});
      wizard.nextStep();
    },
    [wizard, formData]
  );

  const goToStep = useCallback(
    (idx: number) => {
      setErrors({});
      wizard.goToStep(idx);
    },
    [wizard]
  );

  const renderStep = () => {
    const p = { formData, setFields, errors, onNext: attemptNext };
    switch (wizard.activeIndex) {
      case 0:
        return <EventStep {...p} events={events} loading={eventsLoading} />;
      case 1:
        return <OrganizationStep {...p} />;
      case 2:
        return <SportStep {...p}  />;
      case 3:
        return <CategoryStep {...p} />;
      case 4:
        return <PersonalInfoStep {...p} />;
      case 5:
        return (
          <ConfirmationStep
            formData={formData}
            onEdit={goToStep}
            onSuccess={(id) => {
              setEnrollId(id);
              wizard.nextStep();
            }}
          />
        );
      case 6:
        return (
          <CompletedStep
            formData={formData}
            enrollId={enrollId}
            onGoHome={() => router.push('/')}
            onAddMore={() => {
              resetPersonal();
              setErrors({});
              setEnrollId(null);
              goToStep(4);
            }}
          />
        );
    }
  };

  const hideNav = wizard.activeIndex >= 4;

  return (
    <div className="reg-split-layout min-h-[80vh]">
      <RegistrationSidebar
        steps={wizard.stepsWithState.map((s, i) => ({
          ...s,
          icon: ICONS[i],
          completedIcon: undefined,
        }))}
        activeIndex={wizard.activeIndex}
        gotoStep={goToStep}
        gotoStepByKey={(key) => {
          const i = KEYS.indexOf(key);
          if (i !== -1) goToStep(i);
        }}
        prevStep={wizard.prevStep}
        nextStep={wizard.nextStep}
      />

      <div className="reg-content flex-1 overflow-y-auto p-6">
        {Object.keys(errors).length > 0 && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            សូមបំពេញព័ត៌មានដែលខ្វះ
          </div>
        )}

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={wizard.activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {!hideNav && (
          <div className="mt-6 flex justify-between">
            <button
              type="button"
              onClick={wizard.prevStep}
              disabled={wizard.activeIndex === 0}
              className="rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 disabled:opacity-40"
            >
              ត្រលប់
            </button>
            <button
              type="button"
              onClick={() => attemptNext()}
              className="rounded-full bg-indigo-600 px-8 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              បន្ត
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
