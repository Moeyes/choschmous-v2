import type { BaseFilters } from '@/types/common';
export type Province = { id: string; name: string; nameKh?: string | null; code?: string | null; createdAt: Date; updatedAt: Date };
export type CreateProvinceInput = { name: string; nameKh?: string; code?: string };
export type UpdateProvinceInput = Partial<CreateProvinceInput>;
export type ProvinceFilters    = BaseFilters;
