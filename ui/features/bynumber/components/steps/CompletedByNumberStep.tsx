'use client';

import { PartyPopper } from 'lucide-react';
import type { ByNumberFormData } from '../../types/ByNumber.types';

interface CompletedByNumberStepProps {
  formData: ByNumberFormData;
  onGoHome: () => void;
}

export function CompletedByNumberStep({ formData, onGoHome }: CompletedByNumberStepProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center space-y-6">
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full"
        style={{ backgroundColor: 'var(--reg-indigo-50)' }}
      >
        <PartyPopper
          className="h-10 w-10"
          style={{ color: 'var(--reg-indigo-600)' }}
        />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-900">ដាក់ស្នើដោយជោគជ័យ!</h2>
        <p className="text-sm text-slate-500">
          ព្រឹត្តិការណ៍: <span className="font-medium text-slate-700">{formData.eventName}</span>
        </p>
        <p className="text-sm text-slate-500">
          អង្គភាព: <span className="font-medium text-slate-700">{formData.organizationName}</span>
        </p>
        <p className="text-sm text-slate-500">
          កីឡាដែលបានជ្រើសរើស:{' '}
          <span className="font-medium text-slate-700">
            {formData.sportSelections.filter((s) => s.maleCount || s.femaleCount).length} ប្រភេទ
          </span>
        </p>
      </div>

      <button
        type="button"
        onClick={onGoHome}
        className="mt-4 rounded-full px-10 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        style={{ backgroundColor: 'var(--reg-indigo-600)' }}
      >
        ត្រឡប់ទៅដើម
      </button>
    </div>
  );
}
