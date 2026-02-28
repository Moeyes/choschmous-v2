'use client';
import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, Building2, Trophy, CheckCircle2, PartyPopper } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useStepWizard } from '@/ui/components/navigation/useStepWizard';
import { StepSidebar } from '@/ui/components/navigation/StepSidebar';
import { useSurvey, validateSurveyStep } from '../hooks/useSurvey';
import type { SurveyErrors, SurveyFormData } from '../types/Survey.types';
import { SurveyEventStep, SurveyOrganizationStep, SurveySportStep, SurveyConfirmStep, SurveyCompletedStep } from './steps';

const ICONS: LucideIcon[] = [Calendar, Building2, Trophy, CheckCircle2, PartyPopper];
const LABELS = ['ព្រឹត្តិការណ៍', 'អង្គភាព', 'កីឡា', 'បញ្ជាក់', 'បញ្ចប់'];
const KEYS   = ['event', 'organization', 'sports', 'confirm', 'done'];

export function SurveyWizard() {
  const { formData, setFields, reset } = useSurvey();
  const [errors, setErrors] = useState<SurveyErrors>({});
  const steps = LABELS.map((label, i) => ({ key: KEYS[i], label, icon: ICONS[i], component: null as any }));
  const wizard = useStepWizard(steps);

  const attemptNext = useCallback((override?: Partial<SurveyFormData>) => {
    const merged = override ? { ...formData, ...override } : formData;
    const errs = validateSurveyStep(wizard.activeIndex, merged);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    wizard.nextStep();
  }, [wizard, formData]);

  const goToStep = useCallback((idx: number) => { setErrors({}); wizard.goToStep(idx); }, [wizard]);

  const renderStep = () => {
    const p = { formData, setFields, errors, onNext: attemptNext };
    switch (wizard.activeIndex) {
      case 0: return <SurveyEventStep {...p} />;
      case 1: return <SurveyOrganizationStep {...p} />;
      case 2: return <SurveySportStep {...p} />;
      case 3: return <SurveyConfirmStep formData={formData} onEdit={goToStep} onSuccess={() => wizard.nextStep()} />;
      case 4: return <SurveyCompletedStep formData={formData} onReset={() => { reset(); setErrors({}); wizard.goToStep(0); }} />;
    }
  };

  const hideNav = wizard.activeIndex >= 2;

  return (
    <div className="flex min-h-screen">
      <StepSidebar
        title="ជំហានស្ទង់មតិ"
        steps={wizard.stepsWithState.map((s, i) => ({ id: s.key, label: s.label, index: s.index, isActive: s.isActive, isCompleted: s.isCompleted, isAccessible: s.isAccessible, icon: ICONS[i] }))}
        totalSteps={steps.length}
        onNavigate={(id) => { const i = KEYS.indexOf(id); if (i !== -1) goToStep(i); }}
      />
      <div className="flex-1 overflow-y-auto p-6">
        {Object.keys(errors).length > 0 && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">សូមបំពេញព័ត៌មានដែលខ្វះ</div>
        )}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={wizard.activeIndex} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ type: 'tween', duration: 0.25 }}>
            {renderStep()}
          </motion.div>
        </AnimatePresence>
        {!hideNav && (
          <div className="mt-6 flex justify-between">
            <button type="button" onClick={wizard.prevStep} disabled={wizard.activeIndex === 0} className="rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 disabled:opacity-40">ត្រលប់</button>
            <button type="button" onClick={() => attemptNext()} className="survey-btn-primary">បន្ត</button>
          </div>
        )}
      </div>
    </div>
  );
}
