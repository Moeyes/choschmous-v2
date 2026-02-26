import Link from 'next/link';
import { ROUTES } from '@/config/routes';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight">Choschmous</h1>
        <p className="mt-3 text-lg text-muted-foreground">Sports Registration Management System</p>
      </div>
      <div className="flex gap-3">
        <Link href={ROUTES.AUTH.LOGIN} className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Login</Link>
        <Link href={ROUTES.PUBLIC.SURVEY} className="rounded-md border px-6 py-2.5 text-sm font-medium hover:bg-accent transition-colors">Survey</Link>
      </div>
    </main>
  );
}
