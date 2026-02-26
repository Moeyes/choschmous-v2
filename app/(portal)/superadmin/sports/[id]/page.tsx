export default async function SuperadminSportDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; return <div><h1 className="text-2xl font-bold mb-4">Sport</h1><p className="text-sm text-muted-foreground">ID: {id}</p></div>;
}
