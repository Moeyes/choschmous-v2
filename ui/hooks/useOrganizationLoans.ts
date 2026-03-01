'use client';
// ============================================================
// ui/hooks/useOrganizationLoans.ts
// Fetches organizations list for selection
// ============================================================

import { useEffect, useState } from 'react';
import type { Organization } from '@/domains/organizations/organizations.types';
import { organizationsRepository } from '@/domains/organizations/organizations.repository';

interface UseOrganizationsReturn {
  organizations: Organization[];
  selectedOrgId: number | null;
  setSelectedOrgId: (id: number | null) => void;
  isLoadingOrgs: boolean;
  error: string | null;
}

/** @deprecated Rename: prefer `useOrganizations` */
export const useOrganizationLoans = useOrganizations;

export function useOrganizations(): UseOrganizationsReturn {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [selectedOrgId, setSelectedOrgId] = useState<number | null>(null);
  const [isLoadingOrgs, setIsLoadingOrgs] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load organizations on mount
  useEffect(() => {
    const controller = new AbortController();

    async function loadOrganizations() {
      try {
        const { data } = await organizationsRepository.findMany();
        setOrganizations(data);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setError((err as Error).message ?? 'Failed to load organizations');
        }
      } finally {
        setIsLoadingOrgs(false);
      }
    }

    loadOrganizations();
    return () => controller.abort();
  }, []);

  return {
    organizations,
    selectedOrgId,
    setSelectedOrgId,
    isLoadingOrgs,
    error,
  };
}
