import { EventsRepository, EventsService } from '@/domains/events';
import { Card } from '@/ui/design-system/primitives/Card';
import { EmptyState } from '@/ui/components/data-display/EmptyState';
import { EventSelectionClient } from './EventSelectionClient';
import { prisma } from '@/infrastructure/db';

export async function EventSelectionSection() {
  // const events = await EventsRepository.list({ isActive: true, take: 100 }).then((res) => res.data);
  const service = new EventsService(new EventsRepository(prisma));
  const events = (await service.list({ isActive: true, take: 100 })).data;

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
