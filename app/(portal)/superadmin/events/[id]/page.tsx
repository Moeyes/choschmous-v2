export default async function SuperadminEventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; return <div><h1 className="text-2xl font-bold mb-4">Event</h1><p className="text-sm text-muted-foreground">ID: {id}</p></div>;
}
