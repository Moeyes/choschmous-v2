// ============================================================
// domains/provinces/provinces.repository.ts
// Calls FastAPI backend — no Prisma
// NOTE: Your backend has /organizations for provinces (orgpro.router)
// Update the path below if your backend uses /provinces instead
// ============================================================

import type { ProvinceFilters, CreateProvinceInput, UpdateProvinceInput } from './provinces.types';

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:8000';
const API = `${BACKEND_URL}/api/v1`;

export class ProvincesRepository {
  async findMany(filters: ProvinceFilters = {}) {
    const { page = 1, limit = 20 } = filters as any;
    const skip = (page - 1) * limit;

    const res = await fetch(`${API}/organizations?skip=${skip}&limit=${limit}`);
    if (!res.ok) throw new Error('Failed to fetch provinces');

    const json = await res.json();
    return { data: json.data, total: json.count };
  }

  async findById(id: number) {
    const res = await fetch(`${API}/organizations/${id}`);
    if (!res.ok) return null;
    return res.json();
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
    return res.json();
  }

  async update(id: number, input: UpdateProvinceInput) {
    const res = await fetch(`${API}/organizations/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to update province' }));
      throw new Error(err.detail ?? 'Failed to update province');
    }
    return res.json();
  }

  async delete(id: number) {
    const res = await fetch(`${API}/organizations/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to delete province' }));
      throw new Error(err.detail ?? 'Failed to delete province');
    }
  }
}
