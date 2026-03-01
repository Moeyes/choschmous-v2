// ============================================================
// domains/provinces/provinces.repository.ts
// "Provinces" hit /api/organizations endpoint on the backend
// ============================================================

import type {
  Province,
  ProvinceFilters,
  CreateProvinceInput,
  UpdateProvinceInput,
} from './provinces.types';

const BACKEND_URL = (process.env.BACKEND_API_BASE_URL ?? 'http://127.0.0.1:8000').replace(
  /\/+$/,
  ''
);
const API = `${BACKEND_URL}/api`;

function mapProvince(o: any): Province {
  return {
    id: o.id,
    name: o.name_kh ?? '',
    type: o.type ?? 'province',
    code: o.code ?? null,
    createdAt: o.created_at ?? '',
  };
}

export class ProvincesRepository {
  async findMany(filters: ProvinceFilters = {}) {
    const { page = 1, limit = 20 } = filters;
    const skip = (page - 1) * limit;

    const res = await fetch(`${API}/organizations?skip=${skip}&limit=${limit}`);
    if (!res.ok) throw new Error('Failed to fetch provinces');

    const json = await res.json();
    return {
      data: (json.data ?? []).map(mapProvince),
      total: json.count ?? 0,
    };
  }

  async findById(id: number) {
    const res = await fetch(`${API}/organizations/${id}`);
    if (!res.ok) return null;
    return mapProvince(await res.json());
  }

  async create(input: CreateProvinceInput) {
    const res = await fetch(`${API}/organizations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to create province' }));
      throw new Error(err.detail ?? 'Failed to create province');
    }
    return mapProvince(await res.json());
  }

  async update(id: number, input: UpdateProvinceInput) {
    const res = await fetch(`${API}/organizations/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to update province' }));
      throw new Error(err.detail ?? 'Failed to update province');
    }
    return mapProvince(await res.json());
  }

  async delete(id: number) {
    const res = await fetch(`${API}/organizations/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to delete province' }));
      throw new Error(err.detail ?? 'Failed to delete province');
    }
  }
}
