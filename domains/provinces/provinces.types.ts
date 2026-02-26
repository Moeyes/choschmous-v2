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
  name?: string;
  khmerName?: string | null;
}

export interface ProvinceFilters {
  search?: string;
  page?: number;
  limit?: number;
}

export interface ProvinceSummary extends Province {
  totalParticipants: number;
  athletes: number;
  leaders: number;
}
