import { cn } from '@/lib/utils/cn';
interface StatCardProps { label: string; value: string | number; description?: string; icon?: React.ReactNode; trend?: { value: number; label: string }; className?: string }
export function StatCard({ label, value, description, icon, trend, className }: StatCardProps) {
  return (
    <div className={cn('rounded-xl border bg-card p-6 shadow-sm', className)}>
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
      <p className="text-3xl font-bold">{value}</p>
      {description && <p className="mt-1 text-xs text-muted-foreground">{description}</p>}
      {trend && <p className={cn('mt-2 text-xs', trend.value >= 0 ? 'text-green-600' : 'text-red-600')}>{trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}% {trend.label}</p>}
    </div>
  );
}
