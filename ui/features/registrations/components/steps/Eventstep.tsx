'use client';

import { useState } from 'react';
import { Check, ChevronLeft } from 'lucide-react';
import { Skeleton } from '@/ui/design-system/primitives/Skeleton';
import { StepHeader, Grid } from '@/ui/components/layout/LayoutPrimitives';
import type { StepProps, Event } from '../../types/Registration.types';
// Uses .event-card, .event-card-title, .event-card-text, .event-card-check from globals.css

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
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Derive unique types from events
  const types = Array.from(
    new Set(
      events
        .filter((e) => !!e && e.id != null)
        .map((e) => (e as any).type)
        .filter(Boolean)
    )
  ) as string[];

  // Events filtered by selected type
  const filteredEvents = selectedType ? events.filter((e) => (e as any).type === selectedType) : [];

  const handleSelectType = (type: string) => {
    setSelectedType(type);
    // Clear previously selected event if type changes
    setFields({ eventId: '', eventName: '' });
  };

  const handleSelectEvent = (event: Event) => {
    const fields = { eventId: String(event.id), eventName: event.name };
    setFields(fields);
    onNext(fields);
  };

  return (
    <div className="space-y-6">
      {!selectedType ? (
        // ── Phase 1: Pick event type ──
        <>
          <StepHeader
            title="ជ្រើសរើសប្រភេទព្រឹត្តិការណ៍"
            subtitle="ជ្រើសរើសប្រភេទព្រឹត្តិការណ៍ដែលអ្នកចង់ចូលរួម"
          />

          {loading ? (
            <LoadingGrid />
          ) : types.length === 0 ? (
            <EmptyState message="មិនមានព្រឹត្តិការណ៍" />
          ) : (
            <Grid cols={2}>
              {types.map((type) => (
                <TypeCard
                  key={type}
                  type={type}
                  count={events.filter((e) => (e as any).type === type).length}
                  onSelect={handleSelectType}
                />
              ))}
            </Grid>
          )}
        </>
      ) : (
        // ── Phase 2: Pick specific event ──
        <>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSelectedType(null)}
              className="flex items-center gap-1 text-sm"
              style={{ color: 'var(--reg-indigo-600)' }}
            >
              <ChevronLeft style={{ width: '1rem', height: '1rem' }} />
              ត្រលប់
            </button>
            <span style={{ color: 'var(--reg-slate-300)' }}>|</span>
            <span className="text-sm font-medium" style={{ color: 'var(--reg-slate-700)' }}>
              {selectedType}
            </span>
          </div>

          <StepHeader
            title="ជ្រើសរើសព្រឹត្តិការណ៍"
            subtitle="ជ្រើសរើសព្រឹត្តិការណ៍ដែលអ្នកចង់ចូលរួម"
          />

          {filteredEvents.length === 0 ? (
            <EmptyState message="មិនមានព្រឹត្តិការណ៍ក្នុងប្រភេទនេះ" />
          ) : (
            <Grid cols={2}>
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  isSelected={formData.eventId === String(event.id)}
                  onSelect={handleSelectEvent}
                />
              ))}
            </Grid>
          )}
        </>
      )}

      {errors.eventId && (
        <p className="text-xs" style={{ color: 'var(--destructive)' }}>
          {errors.eventId}
        </p>
      )}
    </div>
  );
}

// ─── TypeCard ─────────────────────────────────────────────────

interface TypeCardProps {
  type: string;
  count: number;
  onSelect: (type: string) => void;
}

function TypeCard({ type, count, onSelect }: TypeCardProps) {
  return (
    <button type="button" onClick={() => onSelect(type)} className="event-card group text-left">
      <h3 className="event-card-title">{type}</h3>
      <p className="event-card-text mt-2 text-sm">{count} ព្រឹត្តិការណ៍</p>
    </button>
  );
}

// ─── EventCard ────────────────────────────────────────────────

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
      className={`event-card group ${isSelected ? 'selected' : ''}`}
    >
      {isSelected && (
        <div className="event-card-check">
          <Check style={{ width: '0.875rem', height: '0.875rem', color: 'white' }} />
        </div>
      )}

      <h3 className={`event-card-title ${isSelected ? 'selected' : ''}`}>{event.name}</h3>

      {event.startDate && (
        <p className="event-card-text mt-2 text-sm">
          {new Date(event.startDate).toLocaleDateString('km-KH', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
      )}

      {event.location && <p className="event-card-text mt-1 text-sm">📍 {event.location}</p>}

      {event.sports && event.sports.length > 0 && (
        <p className={`event-card-text mt-3 text-xs font-medium ${isSelected ? 'selected' : ''}`}>
          {event.sports.length} កីឡា
        </p>
      )}
    </button>
  );
}

// ─── Shared ───────────────────────────────────────────────────

function LoadingGrid() {
  return (
    <Grid cols={2}>
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-36 rounded-2xl" />
      ))}
    </Grid>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <p className="py-10 text-center" style={{ color: 'var(--reg-slate-600)' }}>
      {message}
    </p>
  );
}
