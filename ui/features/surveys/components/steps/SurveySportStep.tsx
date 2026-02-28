'use client';
import { useEffect, useState } from 'react';
import { Check, Trophy } from 'lucide-react';
import { Skeleton } from '@/ui/design-system/primitives/Skeleton';
import { StepHeader, Grid } from '@/ui/components/layout/LayoutPrimitives';
import type { StepProps, SportItem } from '../../types/Survey.types';

function mapSport(raw: any): SportItem {
  return { id: raw.id, name: raw.name_kh ?? raw.name ?? '' };
}

export function SurveySportStep({ formData, setFields, errors, onNext }: StepProps) {
  const [sports, setSports]         = useState<SportItem[]>([]);
  const [loading, setLoading]       = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const c = new AbortController();
    fetch('/api/sports?skip=0&limit=100', { signal: c.signal })
      .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then((json) => setSports((Array.isArray(json.data) ? json.data : Array.isArray(json) ? json : []).map(mapSport)))
      .catch((err) => { if (err.name !== 'AbortError') setFetchError('មិនអាចទាញទិន្នន័យបាន'); })
      .finally(() => setLoading(false));
    return () => c.abort();
  }, []);

  const toggle = (sport: SportItem) => {
    const id = String(sport.id);
    const already = formData.sportIds.includes(id);
    const sportIds   = already ? formData.sportIds.filter((s) => s !== id) : [...formData.sportIds, id];
    const sportNames = already
      ? formData.sportNames.filter((_, i) => formData.sportIds[i] !== id)
      : [...formData.sportNames, sport.name];
    setFields({ sportIds, sportNames });
  };

  return (
    <div className="space-y-6">
      <StepHeader title="ជ្រើសរើសកីឡា" subtitle="អ្នកអាចជ្រើសរើសកីឡាច្រើន" />
      {formData.sportIds.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {formData.sportNames.map((name, i) => (
            <span key={i} className="survey-tag">
              <Trophy className="h-3 w-3" />
              {name}
              <button type="button" onClick={() => toggle({ id: Number(formData.sportIds[i]), name })} className="ml-1 opacity-60 hover:opacity-100">✕</button>
            </span>
          ))}
        </div>
      )}
      {loading ? (
        <Grid cols={2}>{[1,2,3,4].map((i) => <Skeleton key={i} className="h-20 rounded-2xl" />)}</Grid>
      ) : fetchError ? (
        <p className="py-10 text-center text-red-500">{fetchError}</p>
      ) : sports.length === 0 ? (
        <p className="py-10 text-center text-slate-400">មិនមានកីឡា</p>
      ) : (
        <Grid cols={2}>
          {sports.map((sport) => {
            const sel = formData.sportIds.includes(String(sport.id));
            return (
              <button key={sport.id} type="button" onClick={() => toggle(sport)} className={`survey-card group ${sel ? 'selected' : ''}`}>
                {sel && <div className="survey-card-check"><Check className="h-3.5 w-3.5 text-white" /></div>}
                <h3 className={`survey-card-title ${sel ? 'selected' : ''}`}>{sport.name}</h3>
                {sel && <p className="mt-1 text-xs text-teal-200">✓ បានជ្រើស</p>}
              </button>
            );
          })}
        </Grid>
      )}
      {errors.sports && <p className="text-xs text-red-500">{errors.sports}</p>}
      {formData.sportIds.length > 0 && (
        <div className="flex justify-end">
          <button type="button" onClick={() => (onNext as any)()} className="survey-btn-primary">
            បន្ត ({formData.sportIds.length} កីឡា)
          </button>
        </div>
      )}
    </div>
  );
}
