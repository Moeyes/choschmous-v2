// ============================================================
// domains/organizations/organizations.types.ts
// Derived from: Organization table in ER diagram
// ============================================================

export type OrganizationType = 'province' | 'ministry' | 'department' | string;

/** Maps to: Organization table */
export interface Organization {
  id: number;
  name: string;
  createdAt: Date;
}

/** Enriched org with type metadata (derived from usage context) */
export interface OrganizationDetail extends Organization {
  type: OrganizationType;
  khmerName?: string | null;
}

// ── DTOs ──────────────────────────────────────────────────────

export interface CreateOrganizationInput {
  name: string;
  type?: OrganizationType;
  khmerName?: string | null;
}

export interface UpdateOrganizationInput {
  id: number;
  name?: string;
  type?: OrganizationType;
  khmerName?: string | null;
}

export interface OrganizationFilters {
  type?: OrganizationType;
  search?: string;
  page?: number;
  limit?: number;
}
