'use client';

import { useEffect, useState } from 'react';
import type { SessionData } from '@/infrastructure/session/session.service';
import { ROUTES } from '@/config/routes';

interface UseUserSessionReturn {
  session: SessionData | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export function useUserSession(): UseUserSessionReturn {
  const [session, setSession] = useState<SessionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadSession() {
      try {
        const response = await fetch(ROUTES.API.SESSION, {
          signal: controller.signal,
          credentials: 'include', // important for cookies
        });

        if (!response.ok) throw new Error('Failed to fetch session');

        const result = await response.json();

        setSession(result?.success ? result.data : null);
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          setSession(null);
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadSession();

    return () => controller.abort();
  }, []);

  return {
    session,
    isLoading,
    isAuthenticated: !!session,
  };
}
