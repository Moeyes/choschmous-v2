'use client';

import { useEffect, useState } from 'react';
import { StepHeader } from '@/ui/components/layout/LayoutPrimitives';
import { Skeleton } from '@/ui/design-system/primitives/Skeleton';
import type { ByNumberFormData, ByNumberErrors, SportSelection } from '../../types/ByNumber.types';

interface SportTableStepProps {
  formData: ByNumberFormData;
  errors: ByNumberErrors;
  setCount: (sportsEventOrgId: number, gender: 'maleCount' | 'femaleCount', value: number) => void;
  initSports: (sports: SportSelection[]) => void;
}

export function SportTableStep({ formData, errors, setCount, initSports }: SportTableStepProps) {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    if (!formData.eventId || !formData.organizationId) return;
    setLoading(true);
    setFetchError(null);
    const controller = new AbortController();

    // Fetch sports_event_org links filtered by event + org
    fetch(
      `/api/orgprosports?events_id=${formData.eventId}&organization_id=${formData.organizationId}&limit=100`,
      { signal: controller.signal }
    )
      .then((r) => r.json())
      .then((json) => {
        const raw: any[] = Array.isArray(json.data) ? json.data : Array.isArray(json) ? json : [];
        const sports: SportSelection[] = raw.map((item: any) => ({
          sportsEventOrgId: item.id,
          sportId: item.sports_id,
          sportName: item.sport_name ?? item.sports?.name_kh ?? item.sports?.name ?? `Sport ${item.sports_id}`,
          maleCount: 0,
          femaleCount: 0,
        }));
        initSports(sports);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setFetchError('មិនអាចទាញទិន្នន័យបាន');
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [formData.eventId, formData.organizationId]);

  const totalMale = formData.sportSelections.reduce((sum, s) => sum + (s.maleCount || 0), 0);
  const totalFemale = formData.sportSelections.reduce((sum, s) => sum + (s.femaleCount || 0), 0);
  const totalAll = totalMale + totalFemale;

  return (
    <div className="space-y-6">
      <StepHeader
        title="ចំនួនអ្នកចូលរួមតាមកីឡា"
        subtitle="សូមបំពេញចំនួនបុរស និងនារីសម្រាប់កីឡានីមួយៗ"
      />

      {loading ? (
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-12 w-full rounded-xl" />
          ))}
        </div>
      ) : fetchError ? (
        <p className="py-10 text-center text-sm" style={{ color: 'var(--destructive)' }}>
          {fetchError}
        </p>
      ) : formData.sportSelections.length === 0 ? (
        <p className="py-10 text-center text-sm" style={{ color: 'var(--reg-slate-600)' }}>
          អង្គភាពនេះមិនមានកីឡាក្នុងព្រឹត្តិការណ៍នេះទេ
        </p>
      ) : (
        <div
          className="overflow-hidden rounded-2xl border"
          style={{ borderColor: 'var(--reg-slate-200)' }}
        >
          {/* Header */}
          <div
            className="grid text-center text-xs font-semibold uppercase tracking-wide"
            style={{
              gridTemplateColumns: '2fr 1fr 1fr 1fr',
              backgroundColor: 'var(--reg-indigo-600)',
              color: 'white',
            }}
          >
            <div className="px-4 py-3 text-left">ប្រភេទកីឡា</div>
            <div className="border-l px-4 py-3" style={{ borderColor: 'oklch(1 0 0 / 0.2)' }}>
              បុរស
            </div>
            <div className="border-l px-4 py-3" style={{ borderColor: 'oklch(1 0 0 / 0.2)' }}>
              នារី
            </div>
            <div className="border-l px-4 py-3" style={{ borderColor: 'oklch(1 0 0 / 0.2)' }}>
              សរុប
            </div>
          </div>

          {/* Rows */}
          {formData.sportSelections.map((sel, idx) => (
            <SportRow
              key={sel.sportsEventOrgId}
              sel={sel}
              isEven={idx % 2 === 0}
              hasError={sel.maleCount === 0 && sel.femaleCount === 0 && !!errors.sportSelections}
              onChangeCount={setCount}
            />
          ))}

          {/* Summary */}
          <div
            className="grid text-center text-sm font-bold"
            style={{
              gridTemplateColumns: '2fr 1fr 1fr 1fr',
              borderTop: '2px solid',
              borderColor: 'var(--reg-indigo-200)',
              backgroundColor: 'var(--reg-indigo-50)',
            }}
          >
            <div className="px-4 py-3 text-left" style={{ color: 'var(--reg-slate-700)' }}>
              សរុប
            </div>
            <div
              className="border-l px-4 py-3"
              style={{ borderColor: 'var(--reg-slate-200)', color: 'var(--reg-indigo-600)' }}
            >
              {totalMale}
            </div>
            <div
              className="border-l px-4 py-3"
              style={{ borderColor: 'var(--reg-slate-200)', color: 'var(--reg-purple-600)' }}
            >
              {totalFemale}
            </div>
            <div
              className="border-l px-4 py-3"
              style={{ borderColor: 'var(--reg-slate-200)', color: 'var(--reg-slate-800)' }}
            >
              {totalAll}
            </div>
          </div>
        </div>
      )}

      {errors.sportSelections && (
        <p className="text-xs" style={{ color: 'var(--destructive)' }}>
          {errors.sportSelections}
        </p>
      )}
    </div>
  );
}

// ─── Sport Row ────────────────────────────────────────────────

interface SportRowProps {
  sel: SportSelection;
  isEven: boolean;
  hasError: boolean;
  onChangeCount: (id: number, gender: 'maleCount' | 'femaleCount', value: number) => void;
}

function SportRow({ sel, isEven, hasError, onChangeCount }: SportRowProps) {
  const rowTotal = (sel.maleCount || 0) + (sel.femaleCount || 0);

  return (
    <div
      className="grid items-center text-center"
      style={{
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        borderTop: '1px solid',
        borderColor: 'var(--reg-slate-200)',
        backgroundColor: hasError
          ? 'oklch(1 0.02 25 / 0.06)'
          : isEven
          ? 'white'
          : 'var(--reg-indigo-50)',
      }}
    >
      {/* Sport name */}
      <div
        className="px-4 py-2.5 text-left text-sm font-medium"
        style={{ color: 'var(--reg-slate-800)' }}
      >
        {sel.sportName}
      </div>

      {/* Male input */}
      <div
        className="border-l px-3 py-2"
        style={{ borderColor: 'var(--reg-slate-200)' }}
      >
        <NumberInput
          value={sel.maleCount}
          onChange={(v) => onChangeCount(sel.sportsEventOrgId, 'maleCount', v)}
          color="var(--reg-indigo-600)"
        />
      </div>

      {/* Female input */}
      <div
        className="border-l px-3 py-2"
        style={{ borderColor: 'var(--reg-slate-200)' }}
      >
        <NumberInput
          value={sel.femaleCount}
          onChange={(v) => onChangeCount(sel.sportsEventOrgId, 'femaleCount', v)}
          color="var(--reg-purple-600)"
        />
      </div>

      {/* Row total */}
      <div
        className="border-l px-4 py-2.5 text-sm font-semibold"
        style={{ borderColor: 'var(--reg-slate-200)', color: 'var(--reg-slate-700)' }}
      >
        {rowTotal}
      </div>
    </div>
  );
}

// ─── Number Input ─────────────────────────────────────────────

function NumberInput({
  value,
  onChange,
  color,
}: {
  value: number;
  onChange: (v: number) => void;
  color: string;
}) {
  return (
    <input
      type="number"
      min={0}
      value={value === 0 ? '' : value}
      placeholder="0"
      onChange={(e) => {
        const v = parseInt(e.target.value, 10);
        onChange(isNaN(v) || v < 0 ? 0 : v);
      }}
      className="w-full rounded-lg border px-2 py-1 text-center text-sm font-medium outline-none transition focus:ring-2"
      style={{
        borderColor: value > 0 ? color : 'var(--reg-slate-200)',
        color: value > 0 ? color : 'var(--reg-slate-400)',
        backgroundColor: value > 0 ? `color-mix(in oklch, ${color} 8%, white)` : 'white',
        // @ts-ignore
        '--tw-ring-color': color,
      }}
    />
  );
}
