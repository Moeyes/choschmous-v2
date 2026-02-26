'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ROUTES } from '@/config/routes';

type Event = {
  id: string;
  name: string;
  description?: string;
};

export function EventSelectionClient({ events }: { events: Event[] }) {
  const router = useRouter();
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const selectEvent = (eventId: string) => {
    setSelectedEventId(eventId);
    sessionStorage.setItem('selectedEventId', eventId);
    router.push(ROUTES.PUBLIC.REGISTER.organization);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <div
          key={event.id}
          onClick={() => selectEvent(event.id)}
          className={`cursor-pointer rounded-xl border p-4 transition ${
            selectedEventId === event.id ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
          }`}
        >
          <h3 className="font-semibold">{event.name}</h3>
          {event.description && (
            <p className="text-muted-foreground mt-2 text-sm">{event.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
