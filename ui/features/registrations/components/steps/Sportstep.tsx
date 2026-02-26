'use client';

import { SectionCard, StepHeader, Grid } from '@/ui/components/layout/LayoutPrimitives';
import { SelectionPill } from '@/ui/components/layout/SelectionPill';
import type { StepProps, Sport } from '@/ui/features/registrations/types/Registration.types';

// ─── Props ────────────────────────────────────────────────────

interface SportStepProps extends StepProps {
  sports: Sport[];
}

// ─── Component ────────────────────────────────────────────────

export function SportStep({ sports, formData, setFields, errors, onNext }: SportStepProps) {
  const handleSelect = (sport: Sport) => {
    setFields({ sportId: sport.id, sportName: sport.name, categoryId: '', categoryName: '' });
    setTimeout(onNext, 250);
  };

  return (
    <div className="space-y-6">
      <StepHeader title="ជ្រើសរើសកីឡា" subtitle="ជ្រើសរើសកីឡាដែលអ្នកចង់ប្រកួត" />

      {errors.sportId && <p className="text-xs text-red-600">{errors.sportId}</p>}

      <SectionCard title="បញ្ជីកីឡា">
        {sports.length === 0 ? (
          <p className="py-8 text-center text-slate-500">មិនមានកីឡា</p>
        ) : (
          <Grid cols={4} gap={3}>
            {sports.map((sport) => (
              <SelectionPill
                key={sport.id}
                label={sport.name}
                isSelected={formData.sportId === sport.id}
                onClick={() => handleSelect(sport)}
                variant="indigo"
              />
            ))}
          </Grid>
        )}
      </SectionCard>
    </div>
  );
}
