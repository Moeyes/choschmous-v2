import type { BaseFilters } from '@/types/common';
export type Event = { id: string; name: string; nameKh?: string | null; description?: string | null; startDate?: Date | null; endDate?: Date | null; location?: string | null; isActive: boolean; createdAt: Date; updatedAt: Date };
export type CreateEventInput = { name: string; nameKh?: string; description?: string; startDate?: Date; endDate?: Date; location?: string; isActive?: boolean };
export type UpdateEventInput = Partial<CreateEventInput>;
export type EventFilters    = BaseFilters & { isActive?: boolean };
