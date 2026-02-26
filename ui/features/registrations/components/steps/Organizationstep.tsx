'use client';

import { useState, useEffect } from 'react';
import { Skeleton } from '@/ui/design-system/primitives/Skeleton';
import { SectionCard, StepHeader, Grid } from '@/ui/components/layout/LayoutPrimitives';
import { SelectionPill } from '@/ui/components/layout/SelectionPill';
import type { StepProps, OrgItem } from '@/ui/features/registrations/types/Registration.types';

// ─── Module-level cache (survives re-renders, cleared on page reload) ──────────

const orgCache: { data?: OrgItem[] } = {};

// ─── Component ────────────────────────────────────────────────

export function OrganizationStep({ formData, setFields, errors, onNext }: StepProps) {
  const [orgs, setOrgs] = useState<OrgItem[]>(orgCache.data ?? []);
  const [loading, setLoading] = useState(!orgCache.data);

  useEffect(() => {
    if (orgCache.data) return;

    let cancelled = false;

    fetch('/api/provinces')
      .then((r) => r.json())
      .then((data: unknown) => {
        if (!cancelled) {
          orgCache.data = Array.isArray(data) ? (data as OrgItem[]) : [];
          setOrgs(orgCache.data);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const handleSelect = (org: OrgItem) => {
    setFields({
      organizationId: org.id,
      organizationName: org.khmerName ?? org.name,
      organizationType: org.type.toLowerCase() === 'province' ? 'province' : 'ministry',
    });
    setTimeout(onNext, 250);
  };

  const ministries = orgs.filter((o) => o.type.toLowerCase() === 'ministry');
  const provinces = orgs.filter((o) => o.type.toLowerCase() === 'province');

  if (loading) return <LoadingSkeleton />;

  return (
    <div className="space-y-6">
      <StepHeader title="ជ្រើសរើសស្ថាប័ន" subtitle="ជ្រើសរើសក្រសួង ឬ ខេត្តរបស់អ្នក" />

      {errors.organizationId && <p className="text-xs text-red-600">{errors.organizationId}</p>}

      {ministries.length > 0 && (
        <SectionCard title="ក្រសួង">
          <div className="flex flex-wrap gap-2">
            {ministries.map((org) => (
              <SelectionPill
                key={org.id}
                label={org.khmerName ?? org.name}
                isSelected={formData.organizationId === org.id}
                onClick={() => handleSelect(org)}
                variant="emerald"
                size="sm"
              />
            ))}
          </div>
        </SectionCard>
      )}

      {provinces.length > 0 && (
        <SectionCard title="ខេត្ត">
          <Grid cols={4} gap={2}>
            {provinces.map((org) => (
              <SelectionPill
                key={org.id}
                label={org.khmerName ?? org.name}
                isSelected={formData.organizationId === org.id}
                onClick={() => handleSelect(org)}
                variant="emerald"
                size="sm"
              />
            ))}
          </Grid>
        </SectionCard>
      )}
    </div>
  );
}

// ─── Loading state ────────────────────────────────────────────

function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      <StepHeader title="ជ្រើសរើសស្ថាប័ន" subtitle="ជ្រើសរើសក្រសួង ឬ ខេត្ត" />
      <div className="flex flex-wrap gap-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className="h-10 w-32 rounded-full" />
        ))}
      </div>
    </div>
  );
}
