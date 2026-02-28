'use client';

import { useState, useEffect } from 'react';
import { RegistrationWizard } from '@/ui/features/registrations/components/RegistrationWizard';

export default function RegisterPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events', { signal: controller.signal });
        const payload = await response.json();
        if (payload?.data && Array.isArray(payload.data)) {
          setEvents(payload.data);
        } else {
          setEvents([]);
        }
      } catch {
        setEvents([]);
      } finally {
        setEventsLoading(false);
      }
    };
    fetchEvents();
    return () => controller.abort();
  }, []);

  return (
    <div className="px-8 py-10">
      {/* <h1 className="mb-6 text-2xl font-semibold">Event Registration</h1> */}
      <RegistrationWizard events={events} eventsLoading={eventsLoading} />
    </div>
  );
}
