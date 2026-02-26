'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// import { useEvents } from '@/ui/features/events/hooks/useEvents';

import { ROUTES } from '@/config/routes';

export function useEventSelection() {
  const router = useRouter();
  const { events, loading } = useEvents();
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('selectedEventId');
    if (stored) setSelectedEventId(stored);
  }, []);

  const selectEvent = (eventId: string) => {
    setSelectedEventId(eventId);
    sessionStorage.setItem('selectedEventId', eventId);

    setTimeout(() => {
      router.push(ROUTES.registration.organization);
    }, 300);
  };

  const selectedEvent = events.find((e) => e.id === selectedEventId);

  return {
    events,
    loading,
    selectedEvent,
    selectedEventId,
    selectEvent,
  };
}
