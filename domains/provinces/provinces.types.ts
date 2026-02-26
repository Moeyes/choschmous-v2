// ============================================================
// domains/provinces/provinces.types.ts
// Provinces are a subset of Organizations with type = 'province'
// Kept as separate domain to match route/UI separation in the app
// ============================================================

/** Province display record */
export interface Province {
  id: number;
  name: string;
  khmerName?: string | null;
  createdAt: Date;
}

export interface CreateProvinceInput {
  name: string;
  khmerName?: string | null;
}

export interface UpdateProvinceInput {
  id: number;
  name?: string;
  khmerName?: string | null;
}

export interface ProvinceFilters {
  search?: string;
  page?: number;
  limit?: number;
}

/** Province enriched with participant counts for dashboard */
export interface ProvinceSummary extends Province {
  totalParticipants: number;
  athletes: number;
  leaders: number;
}
