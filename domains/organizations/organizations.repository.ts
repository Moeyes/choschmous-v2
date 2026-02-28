// ============================================================
// domains/organizations/organizations.repository.ts
// Calls FastAPI backend — matches events.repository.ts pattern
// ============================================================

import type { Organization, Loan, OrganizationFilters } from './organizations.types';

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:8000';
const API = `${BACKEND_URL}/api`;

function mapOrganization(o: any): Organization {
  return {
    id: String(o.id),
    name: o.name ?? '',
    createdAt: o.created_at,
  };
}

function mapLoan(l: any): Loan {
  return {
    id: String(l.id),
    organizationId: String(l.organization_id),
    amount: l.amount ?? 0,
    status: l.status ?? '',
    createdAt: l.created_at,
  };
}

export const organizationsRepository = {
  async findMany(filters: OrganizationFilters = {}): Promise<{ data: Organization[]; total: number }> {
    const { page = 1, limit = 20 } = filters;
    const skip = (page - 1) * limit;

    const res = await fetch(`${API}/organizations/?skip=${skip}&limit=${limit}`);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(`Backend ${res.status}: ${JSON.stringify(body)}`);
    }

    const json = await res.json();
    return {
      data: (json.data ?? json ?? []).map(mapOrganization),
      total: json.count ?? 0,
    };
  },

  async findById(id: string): Promise<Organization | null> {
    const res = await fetch(`${API}/organizations/${id}`);
    if (!res.ok) return null;
    const o = await res.json();
    return mapOrganization(o);
  },

  async findLoansByOrganization(orgId: string): Promise<Loan[]> {
    const res = await fetch(`${API}/organizations/${orgId}/loans`);
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to fetch loans' }));
      throw new Error(err.detail ?? `Backend ${res.status}: failed to fetch loans`);
    }
    const json = await res.json();
    return (json.data ?? json ?? []).map(mapLoan);
  },
};
