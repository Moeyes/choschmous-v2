// ============================================================
// domains/organizations/organizations.service.ts
// ============================================================

import { organizationsRepository } from './organizations.repository';
import type { OrganizationFilters } from './organizations.types';
import { NotFoundError } from '@/lib/api/errors';

export const organizationsService = {
  async list(filters: OrganizationFilters = {}) {
    return organizationsRepository.findMany(filters);
  },

  async getById(id: number) {
    const org = await organizationsRepository.findById(id);
    if (!org) throw new NotFoundError('Organization');
    return org;
  },
};
