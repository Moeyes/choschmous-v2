// ============================================================
// domains/organizations/organizations.service.ts
// Matches surveysService functional object pattern
// ============================================================

import { organizationsRepository } from './organizations.repository';
import type { OrganizationFilters } from './organizations.types';
import { NotFoundError } from '@/lib/api/errors';

export const organizationsService = {
  async list(filters: OrganizationFilters = {}) {
    return organizationsRepository.findMany(filters);
  },

  async getById(id: string) {
    const org = await organizationsRepository.findById(id);
    if (!org) throw new NotFoundError('Organization');
    return org;
  },

  async getLoansByOrganization(orgId: string) {
    await this.getById(orgId); // validate org exists first
    return organizationsRepository.findLoansByOrganization(orgId);
  },
};
