// Example mock province object for testing and wizard integration
export const mockProvince = {
  id: 1,
  name: 'Phnom Penh',
  code: 'PP',
  region: 'Central',
  population: 2200000,
};
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
