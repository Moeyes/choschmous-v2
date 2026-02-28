'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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
import { ROUTES } from '@/config/routes';

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

// Maps index → ROUTES.PUBLIC.REGISTER step values
const STEP_ROUTES = [
  ROUTES.PUBLIC.REGISTER.event, // ?step=event
  ROUTES.PUBLIC.REGISTER.organization, // ?step=organization
  ROUTES.PUBLIC.REGISTER.sport, // ?step=sport
  ROUTES.PUBLIC.REGISTER.category, // ?step=category
  ROUTES.PUBLIC.REGISTER.personalInfo, // ?step=personal-info
  ROUTES.PUBLIC.REGISTER.confirmation, // ?step=confirmation
  ROUTES.PUBLIC.REGISTER.completed, // ?step=action
] as const;

// Extract just the step value from each route string (e.g. 'event', 'organization', ...)
const STEP_KEYS = STEP_ROUTES.map((r) => new URLSearchParams(r.split('?')[1]).get('step') ?? '');

export function RegistrationWizard({
  events,
  eventsLoading,
}: {
  events: Event[];
  eventsLoading?: boolean;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Derive initial step index from ?step= URL param
  const stepParam = searchParams.get('step');
  const initialStep = stepParam ? Math.max(STEP_KEYS.indexOf(stepParam), 0) : 0;

  const { formData, setFields, resetPersonal } = useRegistration();
  const [errors, setErrors] = useState<RegistrationErrors>({});
  const [enrollId, setEnrollId] = useState<number | null>(null);

  const currentEvent = events.filter(Boolean).find((e) => e && e.id === formData.eventId);

  const steps = LABELS.map((label, i) => ({
    key: STEP_KEYS[i],
    label,
    icon: ICONS[i],
    component: null as any,
  }));

  // Sync URL whenever the active step changes
  const handleStepChange = useCallback(
    (index: number) => {
      router.replace(STEP_ROUTES[index], { scroll: false });
    },
    [router]
  );

  const wizard = useStepWizard(steps, initialStep, handleStepChange);

  // If user navigates back/forward in browser, sync wizard to URL
  useEffect(() => {
    const param = searchParams.get('step');
    const idx = param ? STEP_KEYS.indexOf(param) : 0;
    if (idx !== -1 && idx !== wizard.activeIndex) {
      wizard.goToStep(idx);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

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
        return <SportStep {...p} />;
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
          const i = STEP_KEYS.indexOf(key);
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
