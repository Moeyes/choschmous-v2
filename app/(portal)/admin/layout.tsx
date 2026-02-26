import Link from 'next/link';
import { ROUTES } from '@/config/routes';
const NAV = [
  { href: ROUTES.ADMIN.ROOT, label: 'Dashboard' }, { href: ROUTES.ADMIN.EVENTS, label: 'Events' },
  { href: ROUTES.ADMIN.SPORTS, label: 'Sports' }, { href: ROUTES.ADMIN.PARTICIPANTS, label: 'Participants' },
  { href: ROUTES.ADMIN.PROVINCES, label: 'Provinces' }, { href: ROUTES.ADMIN.SURVEY, label: 'Survey' },
];
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1">
      <aside className="w-60 border-r bg-card flex flex-col">
        <div className="px-6 py-5 border-b"><p className="font-bold text-lg">Choschmous</p><p className="text-xs text-muted-foreground">Admin</p></div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map((i) => <Link key={i.href} href={i.href} className="flex items-center rounded-lg px-3 py-2 text-sm hover:bg-accent transition-colors">{i.label}</Link>)}
        </nav>
      </aside>
      <main className="flex-1 flex flex-col">
        <header className="border-b px-8 py-4"><div className="text-sm text-muted-foreground text-right">Admin</div></header>
        <div className="flex-1 p-8">{children}</div>
      </main>
    </div>
  );
}
