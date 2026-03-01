'use client';

/**
 * useRegistration.ts
 *
 * Central form-state hook for the registration wizard.
 *
 * All types are imported from Registration.types — this file owns
 * zero type declarations so there is only one source of truth.
 * RegistrationFormData and RegistrationErrors are re-exported so
 * RegistrationWizard can keep its existing import path unchanged.
 */

import { useState, useCallback } from 'react';
import type { RegistrationFormData, RegistrationErrors } from '../types/Registration.types';
import { EMPTY_FORM_DATA } from '../types/Registration.types';

// Re-export so RegistrationWizard import path stays the same
export type { RegistrationFormData, RegistrationErrors };

// ── Validation ────────────────────────────────────────────────

export function validateStep(step: number, data: RegistrationFormData): RegistrationErrors {
  const errors: RegistrationErrors = {};

  switch (step) {
    case 0: // Event
      if (!data.eventId) errors.eventId = 'សូមជ្រើសព្រឹត្តិការណ៍';
      break;

    case 1: // Organization
      if (!data.organizationId) errors.organizationId = 'សូមជ្រើសអង្គភាព';
      break;

    case 2: // Sport
      if (!data.sportId) errors.sportId = 'សូមជ្រើសកីឡា';
      break;

    case 3: // Category
      if (!data.categoryId) errors.categoryId = 'សូមជ្រើសប្រភេទ';
      break;

    case 4: // Personal info
      if (!data.firstNameKhmer && !data.lastNameKhmer) errors.firstNameKhmer = 'សូមបំពេញឈ្មោះខ្មែរ';
      if (!data.gender) errors.gender = 'សូមជ្រើសភេទ';
      if (!data.dateOfBirth) errors.dateOfBirth = 'សូមបំពេញថ្ងៃខែឆ្នាំកំណើត';
      if (!data.nationalID) errors.nationalID = 'សូមបំពេញលេខអត្តសញ្ញាណ';
      if (!data.phone) errors.phone = 'សូមបំពេញលេខទូរស័ព្ទ';
      if (!data.role) errors.role = 'សូមជ្រើសតួនាទី';
      break;

    case 5: // Confirmation — nothing to validate
      break;
  }

  return errors;
}

// ── Hook ──────────────────────────────────────────────────────

export function useRegistration() {
  // EMPTY_FORM_DATA already contains all new fields with safe defaults,
  // so formData always satisfies the full RegistrationFormData interface.
  const [formData, setFormData] = useState<RegistrationFormData>(EMPTY_FORM_DATA);

  const setFields = useCallback((patch: Partial<RegistrationFormData>) => {
    setFormData((prev) => ({ ...prev, ...patch }));
  }, []);

  /** Reset only the personal-info fields back to defaults (used by "Add More"). */
  const resetPersonal = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      firstNameKhmer: '',
      lastNameKhmer: '',
      firstNameLatin: '',
      lastNameLatin: '',
      fullNameKhmer: '',
      fullNameEnglish: '',
      gender: '',
      nationality: '',
      dateOfBirth: '',
      nationalID: '',
      phone: '',
      idDocType: '',
      role: '',
      leaderRole: '',
      athleteCategory: '',
      photoUpload: null,
      nationalityDocumentUpload: null,
      docBirthCertificate: null,
      docNationalId: null,
      docPassport: null,
    }));
  }, []);

  /** Reset everything back to the initial empty state. */
  const resetAll = useCallback(() => {
    setFormData(EMPTY_FORM_DATA);
  }, []);

  return { formData, setFields, resetPersonal, resetAll };
}
