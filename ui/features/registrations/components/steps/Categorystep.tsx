'use client';

import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { Skeleton } from '@/ui/design-system/primitives/Skeleton';
import { StepHeader, Grid } from '@/ui/components/layout/LayoutPrimitives';
import type { StepProps } from '../../types/Registration.types';

// ─── Types ────────────────────────────────────────────────────

interface CategoryItem {
  id: number;
  name: string;
}

// ─── Component ────────────────────────────────────────────────

export function CategoryStep({ formData, setFields, errors, onNext }: StepProps) {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    if (!formData.sportId) return;

    const controller = new AbortController();

    fetch(`/api/categories/?sport_id=${formData.sportId}&skip=0&limit=100`, {
      signal: controller.signal,
    })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((json) => {
        const data: CategoryItem[] = Array.isArray(json?.data) ? json.data : [];
        // Fall back to single 'Open' category when none defined for this sport
        setCategories(data.length > 0 ? data : [{ id: 0, name: 'Open' }]);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('[CategoryStep] fetch error:', err);
          setFetchError('មិនអាចទាញទិន្នន័យបាន');
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [formData.sportId]);

  const handleSelect = (category: CategoryItem) => {
    const fields = { categoryId: String(category.id), categoryName: category.name };
    setFields(fields);
    (onNext as any)(fields);
  };

  return (
    <div className="space-y-6">
      <StepHeader title="ជ្រើសរើសប្រភេទ" subtitle={`ប្រភេទសម្រាប់កីឡា ${formData.sportName}`} />

      {loading ? (
        <LoadingGrid />
      ) : fetchError ? (
        <p className="py-10 text-center" style={{ color: 'var(--destructive)' }}>
          {fetchError}
        </p>
      ) : categories.length === 0 ? (
        <p className="py-10 text-center" style={{ color: 'var(--reg-slate-600)' }}>
          មិនមានប្រភេទ
        </p>
      ) : (
        <Grid cols={2}>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isSelected={formData.categoryId === String(category.id)}
              onSelect={handleSelect}
            />
          ))}
        </Grid>
      )}

      {errors.categoryId && (
        <p className="text-xs" style={{ color: 'var(--destructive)' }}>
          {errors.categoryId}
        </p>
      )}
    </div>
  );
}

// ─── CategoryCard ─────────────────────────────────────────────

interface CategoryCardProps {
  category: CategoryItem;
  isSelected: boolean;
  onSelect: (category: CategoryItem) => void;
}

function CategoryCard({ category, isSelected, onSelect }: CategoryCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(category)}
      className={`event-card group ${isSelected ? 'selected' : ''}`}
    >
      {isSelected && (
        <div className="event-card-check">
          <Check style={{ width: '0.875rem', height: '0.875rem', color: 'white' }} />
        </div>
      )}
      <h3 className={`event-card-title ${isSelected ? 'selected' : ''}`}>{category.name}</h3>
    </button>
  );
}

// ─── LoadingGrid ──────────────────────────────────────────────

function LoadingGrid() {
  return (
    <Grid cols={2}>
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-24 rounded-2xl" />
      ))}
    </Grid>
  );
}
