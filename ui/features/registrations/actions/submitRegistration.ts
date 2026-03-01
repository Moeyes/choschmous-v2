'use server';

import { registrationsService } from '@/domains/registrations/registrations.service';
import type { RegistrationFormData } from '../types/Registration.types';

export interface SubmitResult {
  success: boolean;
  enrollId?: number;
  error?: string;
}

/**
 * Convert a relative path like /uploads/img/abc.jpg to an absolute URL
 * like http://localhost:3000/uploads/img/abc.jpg.
 *
 * The FastAPI backend validates URLs with strict url() — it rejects
 * relative paths — so we must send absolute URLs.
 *
 * In production NEXT_PUBLIC_APP_URL should be set to your domain,
 * e.g. https://choschmous.example.com
 */
function toAbsoluteUrl(path: string | null): string | null {
  if (!path) return null;
  // Already absolute (https:// or http://)
  try {
    new URL(path);
    return path;
  } catch {
    // Relative path — prepend origin
    const base =
      process.env.NEXT_PUBLIC_APP_URL ||
      (process.env.NODE_ENV === 'production'
        ? 'https://choschmous.example.com' // fallback — set NEXT_PUBLIC_APP_URL in prod
        : 'http://localhost:3000');
    return `${base.replace(/\/$/, '')}${path}`;
  }
}

export async function submitRegistrationAction(
  data: Omit<RegistrationFormData, 'photoUpload' | 'nationalityDocumentUpload'>,
  photoUrl: string | null,
  nationalityDocumentUrl: string | null
): Promise<SubmitResult> {
  try {
    // FIX: Convert relative paths to absolute URLs before validation + backend call
    const absolutePhotoUrl = toAbsoluteUrl(photoUrl);
    const absoluteDocUrl = toAbsoluteUrl(nationalityDocumentUrl);

    // Get logged-in user id from session if available
    let userId: string | null = null;
    try {
      const { getSession } = await import('@/infrastructure/session/session.service');
      const session = await getSession();
      userId = (session as any)?.userId ?? (session as any)?.id ?? null;
    } catch {
      // No session or session service unavailable — public registration, user_id stays null
    }

    const result = await registrationsService.create({
      fullNameKhmer: data.fullNameKhmer || null,
      fullNameEnglish: data.fullNameEnglish || null,
      gender: data.gender as 'Male' | 'Female',
      dateOfBirth: data.dateOfBirth,
      nationality: data.nationality,
      nationalID: data.nationalID,
      phone: data.phone,
      photoUrl: absolutePhotoUrl,
      nationalityDocumentUrl: absoluteDocUrl,
      role: data.role as 'Athlete' | 'Leader',
      athleteCategory: (data.athleteCategory as 'Male' | 'Female' | null) || null,
      leaderRole: (data.leaderRole as any) || null,
      eventId: Number(data.eventId),
      sportId: Number(data.sportId),
      categoryId: data.categoryId ? Number(data.categoryId) : null,
      organizationId: Number(data.organizationId),
      // FIX: pass userId and organizationAddress so repository sends them to backend
      userId,
      organizationAddress: (data as any).organizationAddress ?? null,
    } as any);
    return { success: true, enrollId: result.enrollId };
  } catch (err) {
    console.error('[submitRegistrationAction] error:', err);
    return {
      success: false,
      error: err instanceof Error ? err.message : 'ការដាក់ស្នើបរាជ័យ',
    };
  }
}
