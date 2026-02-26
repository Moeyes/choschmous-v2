export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
      <p className="text-muted-foreground mb-8">Welcome to the admin portal</p>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {['Events', 'Sports', 'Participants', 'Registrations'].map((l) => (
          <div key={l} className="rounded-xl border bg-card p-6 shadow-sm"><p className="text-sm text-muted-foreground">{l}</p><p className="text-3xl font-bold mt-1">—</p></div>
        ))}
      </div>
    </div>
  );
}
