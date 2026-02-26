import Link from 'next/link';
import { ROUTES } from '@/config/routes';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md rounded-xl border bg-card p-8 shadow-sm">
        <h1 className="text-2xl font-bold mb-1">Welcome back</h1>
        <p className="text-sm text-muted-foreground mb-6">Sign in to your account</p>
        {/* TODO: <LoginForm /> from @/ui/features/auth/LoginForm */}
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-1">Email</label><input type="email" className="w-full rounded-md border px-3 py-2 text-sm" placeholder="admin@example.com" /></div>
          <div><label className="block text-sm font-medium mb-1">Password</label><input type="password" className="w-full rounded-md border px-3 py-2 text-sm" /></div>
          <button className="w-full rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">Sign in</button>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          No account? <Link href={ROUTES.AUTH.REGISTER} className="text-primary hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
}
