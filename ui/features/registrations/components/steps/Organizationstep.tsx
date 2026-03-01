'use client';

import { useEffect, useState } from 'react';
import { Check, Building2 } from 'lucide-react';
import { Skeleton } from '@/ui/design-system/primitives/Skeleton';
import { StepHeader, Grid } from '@/ui/components/layout/LayoutPrimitives';
import type { StepProps } from '../../types/Registration.types';

interface OrgItem {
  id: number;
  name: string;
  type: string;
  code?: string | null;
}

function mapOrg(raw: any): OrgItem {
  return {
    id: raw.id,
    name: raw.name_kh ?? raw.name ?? '',
    type: raw.type ?? '',
    code: raw.code ?? null,
  };
}

export function OrganizationStep({ formData, setFields, errors, onNext }: StepProps) {
  const [orgs, setOrgs] = useState<OrgItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/organizations?limit=100', { signal: controller.signal })
      .then((r) => r.json())
      .then((json) => {
        const data = Array.isArray(json.data) ? json.data : Array.isArray(json) ? json : [];
        setOrgs(data.map(mapOrg));
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setFetchError('មិនអាចទាញទិន្នន័យបាន');
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const handleSelect = (org: OrgItem) => {
    const fields = {
      organizationId: String(org.id),
      organizationName: org.name,
      organizationType: (org.type === 'province' ? 'province' : 'ministry') as
        | 'province'
        | 'ministry',
    };
    setFields(fields);
    onNext(fields);
  };

  return (
    <div className="space-y-6">
      <StepHeader title="ជ្រើសរើសអង្គភាព" subtitle="ជ្រើសរើសខេត្ត ឬស្ថាប័នដែលអ្នកតំណាង" />

      {loading ? (
        <LoadingGrid />
      ) : fetchError ? (
        <p className="py-10 text-center" style={{ color: 'var(--destructive)' }}>
          {fetchError}
        </p>
      ) : orgs.length === 0 ? (
        <p className="py-10 text-center" style={{ color: 'var(--reg-slate-600)' }}>
          មិនមានអង្គភាព
        </p>
      ) : (
        <Grid cols={2}>
          {orgs.map((org) => (
            <OrgCard
              key={org.id}
              org={org}
              isSelected={formData.organizationId === String(org.id)}
              onSelect={handleSelect}
            />
          ))}
        </Grid>
      )}

      {errors.organizationId && (
        <p className="text-xs" style={{ color: 'var(--destructive)' }}>
          {errors.organizationId}
        </p>
      )}
    </div>
  );
}

interface OrgCardProps {
  org: OrgItem;
  isSelected: boolean;
  onSelect: (org: OrgItem) => void;
}

function OrgCard({ org, isSelected, onSelect }: OrgCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(org)}
      className={`event-card group ${isSelected ? 'selected' : ''}`}
    >
      {isSelected && (
        <div className="event-card-check">
          <Check style={{ width: '0.875rem', height: '0.875rem', color: 'white' }} />
        </div>
      )}

      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            backgroundColor: isSelected ? 'var(--reg-indigo-600)' : 'var(--reg-indigo-50)',
          }}
        >
          <Building2
            style={{
              width: '1rem',
              height: '1rem',
              color: isSelected ? 'white' : 'var(--reg-indigo-600)',
            }}
          />
        </div>
        <div>
          <h3
            className={`event-card-title ${isSelected ? 'selected' : ''}`}
            style={{ marginBottom: 0 }}
          >
            {org.name}
          </h3>
          {org.code && <p className="event-card-text mt-0.5 text-xs">{org.code}</p>}
        </div>
      </div>

      {org.type && (
        <p
          className="mt-3 text-xs font-medium tracking-wide uppercase"
          style={{ color: isSelected ? 'var(--reg-indigo-600)' : 'var(--reg-slate-600)' }}
        >
          {org.type === 'province' ? 'ខេត្ត / រាជធានី' : org.type}
        </p>
      )}
    </button>
  );
}

function LoadingGrid() {
  return (
    <Grid cols={2}>
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-28 rounded-2xl" />
      ))}
    </Grid>
  );
}
