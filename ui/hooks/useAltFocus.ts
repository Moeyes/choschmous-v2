'use client';

import { useEffect, useRef } from 'react';

/**
 * Focus element when pressing Alt + <key>
 * - Case insensitive
 * - Prevents triggering while typing in input/textarea/contentEditable
 */
export function useAltFocus<T extends HTMLElement>(key: string = 'f') {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!e.altKey) return;

      if (e.key.toLowerCase() !== key.toLowerCase()) return;

      const active = document.activeElement as HTMLElement | null;

      // Skip if user is typing
      if (
        active &&
        (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable)
      ) {
        return;
      }

      e.preventDefault();
      ref.current?.focus();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [key]);

  return ref;
}
