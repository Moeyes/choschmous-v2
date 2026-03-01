'use client';

import Link from 'next/link';
import {
  CalendarDays,
  Medal,
  Trophy,
  UserRound,
  Users,
  Building2,
  RefreshCw,
  ArrowRight,
  MapPinned,
} from 'lucide-react';
import { Button } from '@/ui/design-system/primitives/Button';
import { StatCard } from '@/ui/components/data-display/StatCard';
import { ROUTES } from '@/config/routes';
import { useDashboardData } from '../hooks/useDashboardData';

type DashboardOverviewProps = {
  role: 'admin' | 'superadmin';
};

function formatDate(iso: string) {
  if (!iso) return '-';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '-';
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function DashboardOverview({ role }: DashboardOverviewProps) {
  const { data, isLoading, error, reload } = useDashboardData();
  const routes = role === 'superadmin' ? ROUTES.SUPERADMIN : ROUTES.ADMIN;
  const modules = [
    { label: 'Dashboard', href: routes.ROOT, helper: 'Overview and reports' },
    { label: 'Events', href: routes.EVENTS, helper: 'Manage competition events' },
    { label: 'Sports', href: routes.SPORTS, helper: 'Manage sport master list' },
    { label: 'Participants', href: routes.PARTICIPANTS, helper: 'Review participant records' },
    { label: 'Provinces', href: routes.PROVINCES, helper: 'Browse by organization region' },
    { label: 'Survey', href: routes.SURVEY, helper: 'Survey and intake flow' },
  ];
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-primary/15 bg-linear-to-br from-primary to-primary/70 p-8 text-primary-foreground shadow-xl">
        <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
              {role === 'superadmin' ? 'System Command Center' : 'Admin Workspace'}
            </p>
            <h1 className="mt-2 text-3xl font-bold">Dashboard Overview</h1>
            <p className="mt-2 max-w-2xl text-sm text-primary-foreground/85">
              Live snapshot of events, sports, participants, and registrations synced from backend APIs.
            </p>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-right backdrop-blur-sm">
            <p className="text-xs uppercase tracking-wide text-primary-foreground/75">Today</p>
            <p className="mt-1 text-sm font-medium">{today}</p>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-8 -top-10 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 left-1/3 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      </section>

      {error && (
        <div className="rounded-xl border border-destructive/40 bg-destructive/10 p-4">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <StatCard
          label="Events"
          value={isLoading ? '...' : data.stats.events}
          description="Total events"
          icon={<CalendarDays className="h-5 w-5" />}
        />
        <StatCard
          label="Sports"
          value={isLoading ? '...' : data.stats.sports}
          description="Active sports"
          icon={<Medal className="h-5 w-5" />}
        />
        <StatCard
          label="Participants"
          value={isLoading ? '...' : data.stats.participants}
          description="Athletes + leaders"
          icon={<Users className="h-5 w-5" />}
        />
        <StatCard
          label="Registrations"
          value={isLoading ? '...' : data.stats.registrations}
          description="Enrollment records"
          icon={<UserRound className="h-5 w-5" />}
        />
        <StatCard
          label="Organizations"
          value={isLoading ? '...' : data.stats.organizations}
          description="Registered organizations"
          icon={<Building2 className="h-5 w-5" />}
        />
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-6">
        <div className="rounded-2xl border bg-card p-6 shadow-sm xl:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Latest Events</h2>
            <Button variant="outline" size="sm" onClick={() => void reload()}>
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
          </div>
          <div className="space-y-3">
            {!isLoading && data.events.length === 0 && (
              <p className="rounded-xl bg-muted px-4 py-6 text-center text-sm text-muted-foreground">
                No event records available.
              </p>
            )}
            {data.events.map((event) => (
              <div key={event.id} className="flex items-center justify-between rounded-xl border bg-background px-4 py-3">
                <div>
                  <p className="font-medium text-foreground">{event.name}</p>
                  <p className="text-xs text-muted-foreground">{event.type || 'General event'}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{formatDate(event.createdAt)}</p>
                  <Link
                    href={routes.EVENT(String(event.id))}
                    className="mt-1 inline-flex text-xs font-medium text-primary hover:underline"
                  >
                    Open
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm xl:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Latest Sports</h2>
            <Button asChild variant="ghost" size="sm">
              <Link href={routes.SPORTS}>View all</Link>
            </Button>
          </div>
          <div className="space-y-3">
            {!isLoading && data.sports.length === 0 && (
              <p className="rounded-xl bg-muted px-4 py-6 text-center text-sm text-muted-foreground">
                No sport records available.
              </p>
            )}
            {data.sports.map((sport) => (
              <div key={sport.id} className="flex items-center justify-between rounded-xl border bg-background px-4 py-3">
                <div className="flex items-center gap-2">
                  <Medal className="h-4 w-4 text-primary" />
                  <p className="font-medium text-foreground">{sport.name}</p>
                </div>
                <Link
                  href={routes.SPORT(String(sport.id))}
                  className="inline-flex text-xs font-medium text-primary hover:underline"
                >
                  Open
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-5">
        <div className="space-y-6 xl:col-span-2">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Top Organizations</h2>
            <div className="space-y-3">
              {!isLoading && data.topOrganizations.length === 0 && (
                <p className="text-sm text-muted-foreground">No organization activity yet.</p>
              )}
              {data.topOrganizations.map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-lg bg-muted/40 px-3 py-2">
                  <p className="line-clamp-1 text-sm font-medium">
                    <MapPinned className="mr-1 inline h-4 w-4 text-primary/70" />
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.participants} participants</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
            <div className="grid grid-cols-1 gap-3">
              <Button asChild variant="outline" className="justify-between">
                <Link href={routes.EVENTS}>
                  Manage Events
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="justify-between">
                <Link href={routes.SPORTS}>
                  Manage Sports
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="justify-between">
                <Link href={routes.PARTICIPANTS}>
                  View Participants
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="justify-between">
                <Link href={routes.SURVEY}>
                  Open Survey
                  <Trophy className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="justify-between">
                <Link href={routes.PROVINCES}>
                  Open Provinces
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm xl:col-span-3">
          <h2 className="mb-4 text-lg font-semibold">Portal Modules</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {modules.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border bg-background p-4 transition-colors hover:bg-muted/40"
              >
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.helper}</p>
                <p className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                  Open
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
