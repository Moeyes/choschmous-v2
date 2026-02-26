'use server';

import { registrationsService } from '@/domains/registrations/registrations.service';
import type { RegistrationFormData } from '../hooks/useRegistration';

export interface SubmitResult { success: boolean; enrollId?: number; error?: string }

export async function submitRegistrationAction(
  data: Omit<RegistrationFormData, 'photoUpload' | 'nationalityDocumentUpload'>,
  photoUrl: string | null,
  nationalityDocumentUrl: string | null,
): Promise<SubmitResult> {
  try {
    const result = await registrationsService.create({
      fullNameKhmer: data.fullNameKhmer || null,
      fullNameEnglish: data.fullNameEnglish || null,
      gender: data.gender as 'Male' | 'Female',
      dateOfBirth: data.dateOfBirth,
      nationality: data.nationality,
      nationalID: data.nationalID,
      phone: data.phone,
      photoUrl,
      nationalityDocumentUrl,
      role: data.role as 'Athlete' | 'Leader',
      athleteCategory: data.athleteCategory as 'Male' | 'Female' | null || null,
      leaderRole: data.leaderRole as any || null,
      eventId: Number(data.eventId),
      sportId: Number(data.sportId),
      categoryId: data.categoryId ? Number(data.categoryId) : null,
      organizationId: Number(data.organizationId),
    });
    return { success: true, enrollId: result.enrollId };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : 'ការដាក់ស្នើបរាជ័យ' };
  }
}
