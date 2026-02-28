// ============================================================
// domains/organizations/organizations.types.ts
// Organization + Loan data for survey pre-loading
// ============================================================

/** Maps to: Organizations table */
export interface Organization {
  id: string;
  name: string;
  createdAt?: Date;
}

/** Maps to: Loans table (linked to organization) */
export interface Loan {
  id: string;
  organizationId: string;
  amount: number;
  status: string;
  createdAt?: Date;
}

// ── DTOs ──────────────────────────────────────────────────────

/** Filters for fetching organizations */
export interface OrganizationFilters {
  search?: string;
  page?: number;
  limit?: number;
}
