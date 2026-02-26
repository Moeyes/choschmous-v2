import { EventsRepository, EventsService } from '@/domains/events';
import { Card } from '@/ui/design-system/primitives/Card';
import { EmptyState } from '@/ui/components/data-display/EmptyState';
import { EventSelectionClient } from './EventSelectionClient';
import { prisma } from '@/infrastructure/db';

export async function EventSelectionSection() {
  const service = new EventsService(new EventsRepository(prisma));
  const rawEvents = (await service.list({ take: 100 })).data;
  const events = rawEvents.map((e) => ({ ...e, id: String(e.id) }));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">ជ្រើសរើសព្រឹត្តិការណ៍</h1>
        <p className="text-muted-foreground">ជ្រើសរើសព្រឹត្តិការណ៍ដែលអ្នកចង់ចូលរួម</p>
      </div>

      <Card className="space-y-6 p-6">
        {events.length === 0 ? (
          <EmptyState title="មិនមានព្រឹត្តិការណ៍" description="មិនមានព្រឹត្តិការណ៍នៅពេលនេះទេ" />
        ) : (
          <EventSelectionClient events={events} />
        )}
      </Card>
    </div>
  );
}
