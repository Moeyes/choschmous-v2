export default function AdminEventsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6"><h1 className="text-2xl font-bold">Events</h1><button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">+ New Event</button></div>
      {/* TODO: <EventList role="admin" /> from @/ui/features/events */}
      <div className="rounded-xl border p-8 text-center text-muted-foreground text-sm">Connect EventList component here</div>
    </div>
  );
}
