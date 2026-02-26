'use client';

import { SectionCard, StepHeader, Grid } from '@/ui/components/layout/LayoutPrimitives';
import { SelectionPill } from '@/ui/components/layout/SelectionPill';
import type { StepProps, Sport } from '../../types/Registration.types';

// ─── Props ────────────────────────────────────────────────────

interface CategoryStepProps extends StepProps {
  sports: Sport[];
}

// ─── Component ────────────────────────────────────────────────

export function CategoryStep({ sports, formData, setFields, errors, onNext }: CategoryStepProps) {
  const selectedSport = sports.find((s) => s.id === formData.sportId);

  // Fall back to a single 'Open' category when the sport has none defined
  const categories: string[] = selectedSport?.categories?.length
    ? selectedSport.categories
    : ['Open'];

  const handleSelect = (categoryName: string, index: number) => {
    setFields({ categoryId: String(index), categoryName });
    setTimeout(onNext, 250);
  };

  return (
    <div className="space-y-6">
      <StepHeader title="ជ្រើសរើសប្រភេទ" subtitle={`ប្រភេទសម្រាប់កីឡា ${formData.sportName}`} />

      {errors.categoryId && <p className="text-xs text-red-600">{errors.categoryId}</p>}

      <SectionCard title="ប្រភេទកីឡា">
        <Grid cols={3} gap={3}>
          {categories.map((category, index) => (
            <SelectionPill
              key={category}
              label={category}
              isSelected={formData.categoryName === category}
              onClick={() => handleSelect(category, index)}
              variant="purple"
            />
          ))}
        </Grid>
      </SectionCard>
    </div>
  );
}
