// ============================================================
// domains/provinces/provinces.types.ts
// "Provinces" are really Organizations with type='province'
// Matches backend OrganizationPublic schema
// ============================================================

export interface Province {
  id: number;
  name: string; // mapped from name_kh
  type: string; // instituteType ('province' | 'ministry')
  code: string | null;
  createdAt: string;
}

/** Backend OrganizationCreate: { name_kh, type, code? } */
export interface CreateProvinceInput {
  name_kh: string;
  type: string; // 'province' | 'ministry'
  code?: string | null;
}

/** Backend OrganizationUpdate: { name_kh?, type?, code? } */
export interface UpdateProvinceInput {
  name_kh?: string;
  type?: string;
  code?: string | null;
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
