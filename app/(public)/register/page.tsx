'use client';

import { useState, useEffect } from 'react';
import { RegistrationWizard } from '@/ui/features/registrations/components/RegistrationWizard';

export default function RegisterPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/events')
      .then((r) => r.json())
      .then((payload) => {
        if (payload?.data && Array.isArray(payload.data)) {
          setEvents(
            payload.data.map((e: any) => {
              // build sports list from categories if available
              const sportsMap: Record<string, any> = {};
              if (Array.isArray(e.categories)) {
                e.categories.forEach((c: any) => {
                  const s = c.sports;
                  if (!s) return;
                  const key = String(s.id);
                  if (!sportsMap[key]) {
                    sportsMap[key] = { id: key, name: s.name, categories: [] };
                  }
                  if (c.category && !sportsMap[key].categories.includes(c.category)) {
                    sportsMap[key].categories.push(c.category);
                  }
                });
              }
              const sportsArr = Object.values(sportsMap);
              return {
                id: String(e.id),
                name: e.name,
                startDate: e.date ? new Date(e.date).toISOString() : undefined,
                location: e.location,
                sports: sportsArr,
              };
            })
          );
        } else {
          const { mockEvent } = require('@/domains/events/events.types');
          setEvents([mockEvent]);
        }
      })
      .catch(() => {
        const { mockEvent } = require('@/domains/events/events.types');
        setEvents([mockEvent]);
      })
      .finally(() => setEventsLoading(false));
  }, []);

  return (
    <div className="px-8 py-10">
      <h1 className="mb-6 text-2xl font-semibold">Event Registration</h1>
      <RegistrationWizard events={events} eventsLoading={eventsLoading} />
    </div>
  );
}
