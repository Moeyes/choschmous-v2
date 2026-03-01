// ============================================================
// domains/organizations/organizations.repository.ts
// Matches backend: OrganizationPublic schema
// ============================================================

import type { Organization, OrganizationFilters } from './organizations.types';

const BACKEND_URL = (process.env.BACKEND_API_BASE_URL ?? 'http://127.0.0.1:8000').replace(
  /\/+$/,
  ''
);
const API = `${BACKEND_URL}/api`;

function mapOrganization(o: any): Organization {
  return {
    id: o.id,
    name: o.name_kh ?? '',
    type: o.type ?? 'province',
    code: o.code ?? null,
    createdAt: o.created_at ?? '',
  };
}

export const organizationsRepository = {
  async findMany(
    filters: OrganizationFilters = {}
  ): Promise<{ data: Organization[]; total: number }> {
    const { page = 1, limit = 20 } = filters;
    const skip = (page - 1) * limit;

    const res = await fetch(`${API}/organizations/?skip=${skip}&limit=${limit}`);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(`Backend ${res.status}: ${JSON.stringify(body)}`);
    }

    const json = await res.json();
    return {
      data: (json.data ?? []).map(mapOrganization),
      total: json.count ?? 0,
    };
  },

  async findById(id: number): Promise<Organization | null> {
    const res = await fetch(`${API}/organizations/${id}`);
    if (!res.ok) return null;
    const o = await res.json();
    return mapOrganization(o);
  },
};
