'use client';
import { useEffect, useState } from 'react';
import { Check, ChevronLeft, Calendar } from 'lucide-react';
import { Skeleton } from '@/ui/design-system/primitives/Skeleton';
import { StepHeader, Grid } from '@/ui/components/layout/LayoutPrimitives';
import type { StepProps, EventItem } from '../../types/Survey.types';

function mapEvent(raw: any): EventItem {
  return { id: raw.id, name: raw.name_kh ?? raw.name ?? '', type: raw.type ?? '', startDate: raw.start_date ?? raw.startDate ?? null, location: raw.location ?? null };
}

export function SurveyEventStep({ formData, setFields, errors, onNext }: StepProps) {
  const [events, setEvents]         = useState<EventItem[]>([]);
  const [loading, setLoading]       = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  useEffect(() => {
    const c = new AbortController();
    fetch('/api/events?skip=0&limit=100', { signal: c.signal })
      .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then((json) => setEvents((Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : []).map(mapEvent)))
      .catch((err) => { if (err.name !== 'AbortError') setFetchError('មិនអាចទាញទិន្នន័យបាន'); })
      .finally(() => setLoading(false));
    return () => c.abort();
  }, []);

  const types = Array.from(new Set(events.map((e) => e.type).filter(Boolean))) as string[];
  const filtered = selectedType ? events.filter((e) => e.type === selectedType) : [];

  const handleSelectEvent = (event: EventItem) => {
    const fields = { eventId: String(event.id), eventName: event.name };
    setFields(fields);
    (onNext as any)(fields);
  };

  return (
    <div className="space-y-6">
      {!selectedType ? (
        <>
          <StepHeader title="ជ្រើសរើសប្រភេទព្រឹត្តិការណ៍" subtitle="ជ្រើសប្រភេទព្រឹត្តិការណ៍ដែលអ្នកចង់ស្ទង់មតិ" />
          {loading ? (
            <Grid cols={2}>{[1,2,3,4].map((i) => <Skeleton key={i} className="h-28 rounded-2xl" />)}</Grid>
          ) : fetchError ? (
            <p className="py-10 text-center text-red-500">{fetchError}</p>
          ) : types.length === 0 ? (
            <p className="py-10 text-center text-slate-400">មិនមានព្រឹត្តិការណ៍</p>
          ) : (
            <Grid cols={2}>
              {types.map((type) => (
                <button key={type} type="button" onClick={() => setSelectedType(type)} className="survey-card group text-left">
                  <div className="survey-card-icon"><Calendar className="h-5 w-5" /></div>
                  <h3 className="survey-card-title">{type}</h3>
                  <p className="survey-card-sub">{events.filter((e) => e.type === type).length} ព្រឹត្តិការណ៍</p>
                </button>
              ))}
            </Grid>
          )}
        </>
      ) : (
        <>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setSelectedType(null)} className="flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700">
              <ChevronLeft className="h-4 w-4" /> ត្រលប់
            </button>
            <span className="text-slate-300">|</span>
            <span className="text-sm font-medium text-slate-700">{selectedType}</span>
          </div>
          <StepHeader title="ជ្រើសរើសព្រឹត្តិការណ៍" subtitle="ជ្រើសព្រឹត្តិការណ៍ដែលអ្នកចង់ស្ទង់មតិ" />
          {filtered.length === 0 ? (
            <p className="py-10 text-center text-slate-400">មិនមានព្រឹត្តិការណ៍ក្នុងប្រភេទនេះ</p>
          ) : (
            <Grid cols={2}>
              {filtered.map((event) => {
                const sel = formData.eventId === String(event.id);
                return (
                  <button key={event.id} type="button" onClick={() => handleSelectEvent(event)} className={`survey-card group ${sel ? 'selected' : ''}`}>
                    {sel && <div className="survey-card-check"><Check className="h-3.5 w-3.5 text-white" /></div>}
                    <h3 className={`survey-card-title ${sel ? 'selected' : ''}`}>{event.name}</h3>
                    {event.startDate && <p className="survey-card-sub mt-1">{new Date(event.startDate).toLocaleDateString('km-KH', { year: 'numeric', month: 'short', day: 'numeric' })}</p>}
                    {event.location && <p className="survey-card-sub mt-0.5">📍 {event.location}</p>}
                  </button>
                );
              })}
            </Grid>
          )}
        </>
      )}
      {errors.eventId && <p className="text-xs text-red-500">{errors.eventId}</p>}
    </div>
  );
}
