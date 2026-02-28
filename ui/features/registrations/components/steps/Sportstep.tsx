'use client';

import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { Skeleton } from '@/ui/design-system/primitives/Skeleton';
import { StepHeader, Grid } from '@/ui/components/layout/LayoutPrimitives';
import type { StepProps } from '../../types/Registration.types';

// ─── Types ────────────────────────────────────────────────────

interface SportItem {
  id: number;
  name: string;
}

// ─── Mapper ───────────────────────────────────────────────────

function mapSport(raw: any): SportItem {
  return {
    id: raw.id,
    name: raw.name_kh ?? raw.name ?? '',
  };
}

// ─── Helpers ──────────────────────────────────────────────────

function extractArray(json: any): any[] {
  if (Array.isArray(json?.data)) return json.data;
  if (Array.isArray(json)) return json;
  if (Array.isArray(json?.items)) return json.items;
  if (Array.isArray(json?.results)) return json.results;
  return [];
}

// ─── Component ────────────────────────────────────────────────

export function SportStep({ formData, setFields, errors, onNext }: StepProps) {
  const [sports, setSports] = useState<SportItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    // Relative path — proxied to BACKEND_API_BASE_URL via next.config.ts rewrite
    // Trailing slash avoids FastAPI's 307 Temporary Redirect
    fetch('/api/sports/?skip=0&limit=100', { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((json) => {
        const data = extractArray(json);
        setSports(data.map(mapSport));
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('[SportStep] fetch error:', err);
          setFetchError('មិនអាចទាញទិន្នន័យបាន');
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  const handleSelect = (sport: SportItem) => {
    const fields = {
      sportId: String(sport.id),
      sportName: sport.name,
      categoryId: '',
      categoryName: '',
    };
    setFields(fields);
    (onNext as any)(fields);
  };

  return (
    <div className="space-y-6">
      <StepHeader title="ជ្រើសរើសកីឡា" subtitle="ជ្រើសរើសកីឡាដែលអ្នកចង់ប្រកួត" />

      {loading ? (
        <LoadingGrid />
      ) : fetchError ? (
        <p className="py-10 text-center" style={{ color: 'var(--destructive)' }}>
          {fetchError}
        </p>
      ) : sports.length === 0 ? (
        <p className="py-10 text-center" style={{ color: 'var(--reg-slate-600)' }}>
          មិនមានកីឡា
        </p>
      ) : (
        <Grid cols={2}>
          {sports.map((sport) => (
            <SportCard
              key={sport.id}
              sport={sport}
              isSelected={formData.sportId === String(sport.id)}
              onSelect={handleSelect}
            />
          ))}
        </Grid>
      )}

      {errors.sportId && (
        <p className="text-xs" style={{ color: 'var(--destructive)' }}>
          {errors.sportId}
        </p>
      )}
    </div>
  );
}

// ─── SportCard ────────────────────────────────────────────────

interface SportCardProps {
  sport: SportItem;
  isSelected: boolean;
  onSelect: (sport: SportItem) => void;
}

function SportCard({ sport, isSelected, onSelect }: SportCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(sport)}
      className={`event-card group ${isSelected ? 'selected' : ''}`}
    >
      {isSelected && (
        <div className="event-card-check">
          <Check style={{ width: '0.875rem', height: '0.875rem', color: 'white' }} />
        </div>
      )}
      <h3 className={`event-card-title ${isSelected ? 'selected' : ''}`}>{sport.name}</h3>
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
