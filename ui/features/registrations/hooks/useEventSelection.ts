'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { ROUTES } from '@/config/routes';

export function useEventSelection() {
  const router = useRouter();
  const events: Array<{ id: string }> = [];
  const loading = false;
  const [selectedEventId, setSelectedEventId] = useState<string | null>(() =>
    typeof window === 'undefined' ? null : sessionStorage.getItem('selectedEventId')
  );

  const selectEvent = (eventId: string) => {
    setSelectedEventId(eventId);
    sessionStorage.setItem('selectedEventId', eventId);

    setTimeout(() => {
      router.push(ROUTES.PUBLIC.REGISTER.organization);
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
