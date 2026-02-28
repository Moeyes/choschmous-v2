'use client';
import { PartyPopper, RotateCcw } from 'lucide-react';
import type { SurveyFormData } from '../../types/Survey.types';

interface Props { formData: SurveyFormData; onReset: () => void; }

export function SurveyCompletedStep({ formData, onReset }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center space-y-6">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-50">
        <PartyPopper className="h-10 w-10 text-teal-500" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-900">បញ្ជូនដោយជោគជ័យ!</h2>
        <p className="text-slate-500">ការស្ទង់មតិសម្រាប់ <span className="font-semibold text-teal-600">{formData.organizationName}</span> នៅក្នុង <span className="font-semibold text-slate-700">{formData.eventName}</span> ត្រូវបានចុះឈ្មោះ។</p>
        <p className="text-sm text-slate-400">{formData.sportIds.length} កីឡាត្រូវបានជ្រើស</p>
      </div>
      <button type="button" onClick={onReset} className="flex items-center gap-2 rounded-full border border-teal-200 px-6 py-2.5 text-sm font-medium text-teal-600 hover:bg-teal-50 transition-colors">
        <RotateCcw className="h-4 w-4" /> ស្ទង់មតិម្ដងទៀត
      </button>
    </div>
  );
}
