import type { BaseFilters } from '@/types/common';
export type Sport = { id: string; name: string; nameKh?: string | null; eventId: string; maxTeamSize: number; createdAt: Date; updatedAt: Date };
export type CreateSportInput = { name: string; nameKh?: string; eventId: string; maxTeamSize?: number };
export type UpdateSportInput = Partial<Omit<CreateSportInput, 'eventId'>>;
export type SportFilters     = BaseFilters & { eventId?: string };
