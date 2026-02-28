'use client';

import { useState, useEffect } from 'react';
import { ByNumberWizard } from '@/ui/features/bynumber/components/ByNumberWizard';

export default function ByNumberPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/events', { signal: controller.signal })
      .then((r) => r.json())
      .then((payload) => {
        setEvents(Array.isArray(payload.data) ? payload.data : []);
      })
      .catch(() => setEvents([]))
      .finally(() => setEventsLoading(false));
    return () => controller.abort();
  }, []);

  return (
    <div className="px-8 py-10">
      <ByNumberWizard events={events} eventsLoading={eventsLoading} />
    </div>
  );
}
