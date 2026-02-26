export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-screen bg-background">{children}</div>;
}
