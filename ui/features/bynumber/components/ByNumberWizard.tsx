'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, Building2, TableProperties, CheckCircle2, PartyPopper } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useStepWizard } from '@/ui/components/navigation/useStepWizard';
import { ByNumberSidebar } from './ByNumberSidebar';
import { useByNumber, validateByNumberStep } from '../hooks/useByNumber';
import type { ByNumberErrors } from '../types/ByNumber.types';
// Step components — reuse registration steps where possible
import { EventStep } from '@/ui/features/registrations/components/steps/Eventstep';
import { OrganizationStep } from '@/ui/features/registrations/components/steps/Organizationstep';
import { SportTableStep } from './steps/SportTableStep';
import { ConfirmByNumberStep } from './steps/ConfirmByNumberStep';
import { CompletedByNumberStep } from './steps/CompletedByNumberStep';

interface Event {
  id: string;
  name: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  sports?: any[];
  type?: string;
}

const ICONS: LucideIcon[] = [Calendar, Building2, TableProperties, CheckCircle2, PartyPopper];
const LABELS = ['ព្រឹត្តិការណ៍', 'អង្គភាព', 'កីឡា', 'បញ្ជាក់', 'បញ្ចប់'];
const STEP_KEYS = ['event', 'organization', 'sports', 'confirmation', 'completed'];
const STEP_ROUTES = STEP_KEYS.map((k) => `/bynumber?step=${k}`);

export function ByNumberWizard({
  events,
  eventsLoading,
}: {
  events: Event[];
  eventsLoading?: boolean;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const stepParam = searchParams.get('step');
  const initialStep = stepParam ? Math.max(STEP_KEYS.indexOf(stepParam), 0) : 0;

  const { formData, setFields, reset, initSports, setCount } = useByNumber();
  const [errors, setErrors] = useState<ByNumberErrors>({});

  const steps = LABELS.map((label, i) => ({
    key: STEP_KEYS[i],
    label,
    icon: ICONS[i],
    component: null as any,
  }));

  const handleStepChange = useCallback(
    (index: number) => {
      router.replace(STEP_ROUTES[index], { scroll: false });
    },
    [router]
  );

  const wizard = useStepWizard(steps, initialStep, handleStepChange);

  useEffect(() => {
    const param = searchParams.get('step');
    const idx = param ? STEP_KEYS.indexOf(param) : 0;
    if (idx !== -1 && idx !== wizard.activeIndex) {
      wizard.goToStep(idx);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const attemptNext = useCallback(
    (override?: Partial<typeof formData>) => {
      const merged = override ? { ...formData, ...override } : formData;
      const errs = validateByNumberStep(wizard.activeIndex, merged);
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

  // Adapt formData to match StepProps shape expected by reused steps
  const registrationFormData = {
    eventId: formData.eventId,
    eventName: formData.eventName,
    organizationId: formData.organizationId,
    organizationName: formData.organizationName,
    organizationType: formData.organizationType,
    // Unused fields — required by StepProps type
    sportId: '',
    sportName: '',
    categoryId: '',
    categoryName: '',
    firstNameKhmer: '',
    lastNameKhmer: '',
    firstNameLatin: '',
    lastNameLatin: '',
    fullNameKhmer: '',
    fullNameEnglish: '',
    gender: '' as const,
    dateOfBirth: '',
    nationality: '',
    nationalID: '',
    phone: '',
    idDocType: '' as const,
    selectedDocKeys: '',
    role: '' as const,
    leaderRole: '' as const,
    athleteCategory: '' as const,
    photoUpload: null,
    nationalityDocumentUpload: null,
    docBirthCertificate: null,
    docNationalId: null,
    docPassport: null,
  };

  const registrationErrors = {
    eventId: errors.eventId,
    organizationId: errors.organizationId,
  };

  const renderStep = () => {
    switch (wizard.activeIndex) {
      case 0:
        return (
          <EventStep
            formData={registrationFormData}
            setFields={(fields) => setFields(fields as any)}
            errors={registrationErrors}
            onNext={(fields?: any) => attemptNext(fields)}
            events={events}
            loading={eventsLoading}
          />
        );
      case 1:
        return (
          <OrganizationStep
            formData={registrationFormData}
            setFields={(fields) => setFields(fields as any)}
            errors={registrationErrors}
            onNext={(fields?: any) => attemptNext(fields)}
          />
        );
      case 2:
        return (
          <SportTableStep
            formData={formData}
            errors={errors}
            setCount={setCount}
            initSports={initSports}
          />
        );
      case 3:
        return (
          <ConfirmByNumberStep
            formData={formData}
            onEdit={goToStep}
            onSuccess={() => wizard.nextStep()}
          />
        );
      case 4:
        return <CompletedByNumberStep formData={formData} onGoHome={() => router.push('/')} />;
    }
  };

  // Steps 3 (confirmation) and 4 (completed) have their own nav buttons
  const hideNav = wizard.activeIndex >= 3;

  return (
    <div className="reg-split-layout min-h-[80vh]">
      <ByNumberSidebar
        steps={wizard.stepsWithState.map((s, i) => ({
          ...s,
          icon: ICONS[i],
        }))}
        activeIndex={wizard.activeIndex}
        gotoStep={goToStep}
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
              className="rounded-full px-8 py-2 text-sm font-medium text-white hover:opacity-90"
              style={{ backgroundColor: 'var(--reg-indigo-600)' }}
            >
              បន្ត
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
