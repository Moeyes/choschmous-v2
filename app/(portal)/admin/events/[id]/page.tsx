export default async function AdminEventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div><h1 className="text-2xl font-bold mb-4">Event Detail</h1><p className="text-muted-foreground text-sm">ID: {id}</p></div>;
}
