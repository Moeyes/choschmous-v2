'use client';

import { useState } from 'react';
import { Edit2 } from 'lucide-react';
import { SectionCard } from '@/ui/components/layout/LayoutPrimitives';
import type { ByNumberFormData } from '../../types/ByNumber.types';

interface ConfirmByNumberStepProps {
  formData: ByNumberFormData;
  onEdit: (step: number) => void;
  onSuccess: () => void;
}

export function ConfirmByNumberStep({ formData, onEdit, onSuccess }: ConfirmByNumberStepProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalMale = formData.sportSelections.reduce((s, x) => s + (x.maleCount || 0), 0);
  const totalFemale = formData.sportSelections.reduce((s, x) => s + (x.femaleCount || 0), 0);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      // Submit one record per sport row
      const results = await Promise.all(
        formData.sportSelections.map((sel) =>
          fetch('/api/bynumber', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sportsEventOrgId: sel.sportsEventOrgId,
              maleCount: sel.maleCount,
              femaleCount: sel.femaleCount,
            }),
          }).then((r) => {
            if (!r.ok) throw new Error(`Failed for ${sel.sportName}`);
            return r.json();
          })
        )
      );
      onSuccess();
    } catch (e: any) {
      setError(e.message ?? 'មានបញ្ហាកើតឡើង');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">បញ្ជាក់ព័ត៌មាន</h2>
        <p className="mt-1 text-sm text-slate-500">សូមពិនិត្យព័ត៌មានមុនពេលដាក់ស្នើ</p>
      </div>

      {/* Event & Org */}
      <SectionCard>
        <SummaryRow label="ព្រឹត្តិការណ៍" value={formData.eventName} onEdit={() => onEdit(0)} />
        <SummaryRow label="អង្គភាព" value={formData.organizationName} onEdit={() => onEdit(1)} />
      </SectionCard>

      {/* Sport table */}
      <SectionCard
        title="កីឡាដែលបានបំពេញ"
        headerSlot={
          <button
            type="button"
            onClick={() => onEdit(2)}
            className="flex items-center gap-1 text-xs"
            style={{ color: 'var(--reg-indigo-600)' }}
          >
            <Edit2 className="h-3 w-3" />
            កែប្រែ
          </button>
        }
      >
        <div
          className="overflow-hidden rounded-xl border"
          style={{ borderColor: 'var(--reg-slate-200)' }}
        >
          {/* Header */}
          <div
            className="grid text-center text-xs font-semibold tracking-wide uppercase"
            style={{
              gridTemplateColumns: '2fr 1fr 1fr 1fr',
              backgroundColor: 'var(--reg-indigo-600)',
              color: 'white',
            }}
          >
            <div className="px-3 py-2 text-left">ប្រភេទកីឡា</div>
            <div className="border-l px-3 py-2" style={{ borderColor: 'oklch(1 0 0 / 0.2)' }}>
              បុរស
            </div>
            <div className="border-l px-3 py-2" style={{ borderColor: 'oklch(1 0 0 / 0.2)' }}>
              នារី
            </div>
            <div className="border-l px-3 py-2" style={{ borderColor: 'oklch(1 0 0 / 0.2)' }}>
              សរុប
            </div>
          </div>

          {formData.sportSelections.map((sel, idx) => (
            <div
              key={sel.sportsEventOrgId}
              className="grid text-center text-sm"
              style={{
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                borderTop: '1px solid',
                borderColor: 'var(--reg-slate-200)',
                backgroundColor: idx % 2 === 0 ? 'white' : 'var(--reg-indigo-50)',
              }}
            >
              <div
                className="px-3 py-2.5 text-left font-medium"
                style={{ color: 'var(--reg-slate-800)' }}
              >
                {sel.sportName}
              </div>
              <div
                className="border-l py-2.5"
                style={{ borderColor: 'var(--reg-slate-200)', color: 'var(--reg-indigo-600)' }}
              >
                {sel.maleCount > 0 ? '✓' : '—'}
              </div>
              <div
                className="border-l py-2.5"
                style={{ borderColor: 'var(--reg-slate-200)', color: 'var(--reg-purple-600)' }}
              >
                {sel.femaleCount > 0 ? '✓' : '—'}
              </div>
              <div
                className="border-l py-2.5 font-semibold"
                style={{ borderColor: 'var(--reg-slate-200)', color: 'var(--reg-slate-700)' }}
              >
                {sel.maleCount + sel.femaleCount}
              </div>
            </div>
          ))}

          {/* Totals row */}
          <div
            className="grid text-center text-sm font-bold"
            style={{
              gridTemplateColumns: '2fr 1fr 1fr 1fr',
              borderTop: '2px solid',
              borderColor: 'var(--reg-indigo-200)',
              backgroundColor: 'var(--reg-indigo-50)',
            }}
          >
            <div className="px-3 py-2.5 text-left" style={{ color: 'var(--reg-slate-700)' }}>
              សរុប
            </div>
            <div
              className="border-l py-2.5"
              style={{ borderColor: 'var(--reg-slate-200)', color: 'var(--reg-indigo-600)' }}
            >
              {totalMale}
            </div>
            <div
              className="border-l py-2.5"
              style={{ borderColor: 'var(--reg-slate-200)', color: 'var(--reg-purple-600)' }}
            >
              {totalFemale}
            </div>
            <div
              className="border-l py-2.5"
              style={{ borderColor: 'var(--reg-slate-200)', color: 'var(--reg-slate-800)' }}
            >
              {totalMale + totalFemale}
            </div>
          </div>
        </div>
      </SectionCard>

      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        className="w-full rounded-full py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: 'var(--reg-indigo-600)' }}
      >
        {loading ? 'កំពុងដាក់ស្នើ...' : 'ដាក់ស្នើ'}
      </button>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  onEdit,
}: {
  label: string;
  value: string;
  onEdit: () => void;
}) {
  return (
    <div
      className="flex items-center justify-between border-b py-2.5 text-sm last:border-0"
      style={{ borderColor: 'var(--reg-slate-200)' }}
    >
      <span className="w-32 shrink-0" style={{ color: 'var(--reg-slate-600)' }}>
        {label}
      </span>
      <span className="flex-1 text-right font-medium" style={{ color: 'var(--reg-slate-800)' }}>
        {value || '—'}
      </span>
      <button
        type="button"
        onClick={onEdit}
        className="ml-3 shrink-0 transition"
        style={{ color: 'var(--reg-indigo-600)' }}
      >
        <Edit2 className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
