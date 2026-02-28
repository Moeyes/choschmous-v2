'use client';
// ============================================================
// ui/hooks/useOrganizationLoans.ts
// Matches useUserSession pattern — AbortController + useEffect
// ============================================================

import { useEffect, useState } from 'react';
import type { Organization, Loan } from '@/domains/organizations/organizations.types';
import { organizationsRepository } from '@/domains/organizations/organizations.repository';

interface UseOrganizationLoansReturn {
  organizations: Organization[];
  loans: Loan[];
  selectedOrgId: string | null;
  setSelectedOrgId: (id: string | null) => void;
  isLoadingOrgs: boolean;
  isLoadingLoans: boolean;
  error: string | null;
}

export function useOrganizationLoans(): UseOrganizationLoansReturn {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loans, setLoans] = useState<Loan[]>([]);
  const [selectedOrgId, setSelectedOrgId] = useState<string | null>(null);
  const [isLoadingOrgs, setIsLoadingOrgs] = useState(true);
  const [isLoadingLoans, setIsLoadingLoans] = useState(false);
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

  // Load loans when org is selected
  useEffect(() => {
    if (!selectedOrgId) {
      setLoans([]);
      return;
    }

    const controller = new AbortController();

    async function loadLoans() {
      setIsLoadingLoans(true);
      setError(null);
      try {
        const data = await organizationsRepository.findLoansByOrganization(selectedOrgId!);
        setLoans(data);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setError((err as Error).message ?? 'Failed to load loans');
        }
      } finally {
        setIsLoadingLoans(false);
      }
    }

    loadLoans();
    return () => controller.abort();
  }, [selectedOrgId]);

  return {
    organizations,
    loans,
    selectedOrgId,
    setSelectedOrgId,
    isLoadingOrgs,
    isLoadingLoans,
    error,
  };
}
