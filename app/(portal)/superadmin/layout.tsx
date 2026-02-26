import Link from 'next/link';
import { ROUTES } from '@/config/routes';
const NAV = [
  { href: ROUTES.SUPERADMIN.ROOT, label: 'Dashboard' }, { href: ROUTES.SUPERADMIN.EVENTS, label: 'Events' },
  { href: ROUTES.SUPERADMIN.SPORTS, label: 'Sports' }, { href: ROUTES.SUPERADMIN.PARTICIPANTS, label: 'Participants' },
  { href: ROUTES.SUPERADMIN.PROVINCES, label: 'Provinces' }, { href: ROUTES.SUPERADMIN.SURVEY, label: 'Survey' },
];
export default function SuperadminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1">
      <aside className="w-60 border-r bg-slate-900 text-slate-100 flex flex-col">
        <div className="px-6 py-5 border-b border-slate-700"><p className="font-bold text-lg">Choschmous</p><p className="text-xs text-slate-400">Superadmin</p></div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map((i) => <Link key={i.href} href={i.href} className="flex items-center rounded-lg px-3 py-2 text-sm hover:bg-slate-800 transition-colors">{i.label}</Link>)}
        </nav>
      </aside>
      <main className="flex-1 flex flex-col">
        <header className="border-b px-8 py-4 bg-slate-50"><div className="text-sm font-medium text-slate-600 text-right">Superadmin</div></header>
        <div className="flex-1 p-8">{children}</div>
      </main>
    </div>
  );
}
