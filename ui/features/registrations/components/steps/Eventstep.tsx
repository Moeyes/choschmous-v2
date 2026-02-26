'use client';

import { Check } from 'lucide-react';
import { Skeleton } from '@/ui/design-system/primitives/Skeleton';
import { StepHeader, Grid } from '@/ui/components/layout/LayoutPrimitives';
import type { StepProps, Event } from '../../types/Registration.types';

// ─── Props ────────────────────────────────────────────────────

interface EventStepProps extends StepProps {
  events: Event[];
  loading?: boolean;
}

// ─── Component ────────────────────────────────────────────────

export function EventStep({
  events,
  loading,
  formData,
  setFields,
  errors,
  onNext,
}: EventStepProps) {
  const handleSelect = (event: Event) => {
    setFields({ eventId: event.id, eventName: event.name });
    setTimeout(onNext, 250);
  };

  return (
    <div className="space-y-6">
      <StepHeader title="ជ្រើសរើសព្រឹត្តិការណ៍" subtitle="ជ្រើសរើសព្រឹត្តិការណ៍ដែលអ្នកចង់ចូលរួម" />

      {loading ? (
        <LoadingGrid />
      ) : events.length === 0 ? (
        <EmptyState />
      ) : (
        <Grid cols={2}>
          {events
            .filter((event): event is Event => !!event && typeof event.id === 'string')
            .map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isSelected={formData.eventId === event.id}
                onSelect={handleSelect}
              />
            ))}
        </Grid>
      )}

      {errors.eventId && <p className="text-xs text-red-600">{errors.eventId}</p>}
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────

interface EventCardProps {
  event: Event;
  isSelected: boolean;
  onSelect: (event: Event) => void;
}

function EventCard({ event, isSelected, onSelect }: EventCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(event)}
      className={[
        'relative rounded-2xl border-2 p-5 text-left transition-all',
        isSelected
          ? 'border-indigo-500 bg-indigo-50 shadow-md'
          : 'border-slate-200 bg-white hover:border-indigo-200',
      ].join(' ')}
    >
      {isSelected && <SelectedBadge />}

      <h3
        className={`text-base font-semibold ${isSelected ? 'text-indigo-900' : 'text-slate-900'}`}
      >
        {event.name}
      </h3>

      {event.startDate && (
        <p className="mt-2 text-sm text-slate-500">
          {new Date(event.startDate).toLocaleDateString()}
        </p>
      )}

      {event.location && <p className="mt-1 text-sm text-slate-500">📍 {event.location}</p>}

      {event.sports && event.sports.length > 0 && (
        <p
          className={`mt-3 text-xs font-medium ${isSelected ? 'text-indigo-600' : 'text-slate-400'}`}
        >
          {event.sports.length} កីឡា
        </p>
      )}
    </button>
  );
}

function SelectedBadge() {
  return (
    <div className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600">
      <Check className="h-3.5 w-3.5 text-white" />
    </div>
  );
}

function LoadingGrid() {
  return (
    <Grid cols={2}>
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-40 rounded-2xl" />
      ))}
    </Grid>
  );
}

function EmptyState() {
  return <p className="py-10 text-center text-slate-500">មិនមានព្រឹត្តិការណ៍</p>;
}
