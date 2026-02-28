'use client';
import { useEffect, useState } from 'react';
import { Check, Building2 } from 'lucide-react';
import { Skeleton } from '@/ui/design-system/primitives/Skeleton';
import { StepHeader, Grid } from '@/ui/components/layout/LayoutPrimitives';
import type { StepProps, OrgItem } from '../../types/Survey.types';

function mapOrg(raw: any): OrgItem {
  return { id: raw.id, name: raw.name_kh ?? raw.name ?? '', type: raw.type ?? '', code: raw.code ?? null };
}

export function SurveyOrganizationStep({ formData, setFields, errors, onNext }: StepProps) {
  const [orgs, setOrgs]             = useState<OrgItem[]>([]);
  const [loading, setLoading]       = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const c = new AbortController();
    fetch('/api/organizations?limit=100', { signal: c.signal })
      .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then((json) => setOrgs((Array.isArray(json.data) ? json.data : Array.isArray(json) ? json : []).map(mapOrg)))
      .catch((err) => { if (err.name !== 'AbortError') setFetchError('មិនអាចទាញទិន្នន័យបាន'); })
      .finally(() => setLoading(false));
    return () => c.abort();
  }, []);

  const handleSelect = (org: OrgItem) => {
    const fields = { organizationId: String(org.id), organizationName: org.name };
    setFields(fields);
    (onNext as any)(fields);
  };

  return (
    <div className="space-y-6">
      <StepHeader title="ជ្រើសរើសអង្គភាព" subtitle="ជ្រើសរើសខេត្ត ឬស្ថាប័នដែលអ្នកតំណាង" />
      {loading ? (
        <Grid cols={2}>{[1,2,3,4].map((i) => <Skeleton key={i} className="h-28 rounded-2xl" />)}</Grid>
      ) : fetchError ? (
        <p className="py-10 text-center text-red-500">{fetchError}</p>
      ) : orgs.length === 0 ? (
        <p className="py-10 text-center text-slate-400">មិនមានអង្គភាព</p>
      ) : (
        <Grid cols={2}>
          {orgs.map((org) => {
            const sel = formData.organizationId === String(org.id);
            return (
              <button key={org.id} type="button" onClick={() => handleSelect(org)} className={`survey-card group ${sel ? 'selected' : ''}`}>
                {sel && <div className="survey-card-check"><Check className="h-3.5 w-3.5 text-white" /></div>}
                <div className="flex items-center gap-3">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${sel ? 'bg-teal-500' : 'bg-teal-50'}`}>
                    <Building2 className={`h-4 w-4 ${sel ? 'text-white' : 'text-teal-600'}`} />
                  </div>
                  <div>
                    <h3 className={`survey-card-title ${sel ? 'selected' : ''}`} style={{ marginBottom: 0 }}>{org.name}</h3>
                    {org.code && <p className="survey-card-sub mt-0.5 text-xs">{org.code}</p>}
                  </div>
                </div>
                {org.type && <p className={`mt-3 text-xs font-medium tracking-wide uppercase ${sel ? 'text-teal-200' : 'text-slate-400'}`}>{org.type === 'province' ? 'ខេត្ត / រាជធានី' : org.type}</p>}
              </button>
            );
          })}
        </Grid>
      )}
      {errors.organizationId && <p className="text-xs text-red-500">{errors.organizationId}</p>}
    </div>
  );
}
