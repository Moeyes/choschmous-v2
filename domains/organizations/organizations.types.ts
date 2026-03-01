// ============================================================
// domains/organizations/organizations.types.ts
// Matches backend: Organizations table + OrganizationPublic schema
// ============================================================

// Backend instituteType enum
export type InstituteType = 'province' | 'ministry';

/** Maps to: Organizations table (id, name_kh, type, code, created_at) */
export interface Organization {
  id: number;
  name: string; // mapped from name_kh
  type: InstituteType;
  code: string | null;
  createdAt: string;
}

// ── DTOs ──────────────────────────────────────────────────────

/** Filters for fetching organizations */
export interface OrganizationFilters {
  search?: string;
  page?: number;
  limit?: number;
}
