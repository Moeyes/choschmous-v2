'use client';

import { useCallback, useEffect, useState } from 'react';
import type { ApiResponse } from '@/types/api';
import type { DashboardPayload } from '../types/Dashboard.types';

const EMPTY: DashboardPayload = {
  stats: { events: 0, sports: 0, participants: 0, registrations: 0, organizations: 0 },
  events: [],
  sports: [],
  topOrganizations: [],
};

export function useDashboardData() {
  const [data, setData] = useState<DashboardPayload>(EMPTY);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/dashboard', { cache: 'no-store' });
      const json = (await res.json()) as ApiResponse<DashboardPayload>;

      if (!res.ok || !json.success) {
        throw new Error(json.success ? 'Failed to load dashboard' : json.error);
      }

      setData(json.data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load dashboard');
      setData(EMPTY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return { data, isLoading, error, reload: load };
}
