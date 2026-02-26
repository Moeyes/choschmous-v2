'use client';

import { useCallback, useReducer } from 'react';
import type { Gender, LeaderRole, PositionRole, AthleteCategory } from '@/domains/registrations/registrations.types';

export interface RegistrationFormData {
  eventId: string;       eventName: string;
  organizationId: string; organizationName: string; organizationType: 'province' | 'ministry' | '';
  sportId: string;       sportName: string;
  categoryId: string;    categoryName: string;
  fullNameKhmer: string; fullNameEnglish: string;
  gender: Gender | '';   dateOfBirth: string;
  nationality: string;   nationalID: string; phone: string;
  role: PositionRole | ''; leaderRole: LeaderRole | ''; athleteCategory: AthleteCategory | '';
  photoUpload: File | null; nationalityDocumentUpload: File | null;
}

export type RegistrationErrors = Partial<Record<keyof RegistrationFormData, string>>;

const INITIAL: RegistrationFormData = {
  eventId: '', eventName: '',
  organizationId: '', organizationName: '', organizationType: '',
  sportId: '', sportName: '',
  categoryId: '', categoryName: '',
  fullNameKhmer: '', fullNameEnglish: '',
  gender: '', dateOfBirth: '', nationality: '', nationalID: '', phone: '',
  role: '', leaderRole: '', athleteCategory: '',
  photoUpload: null, nationalityDocumentUpload: null,
};

type Action =
  | { type: 'SET';   payload: Partial<RegistrationFormData> }
  | { type: 'RESET' }
  | { type: 'RESET_PERSONAL' };

function reducer(state: RegistrationFormData, action: Action): RegistrationFormData {
  switch (action.type) {
    case 'SET':          return { ...state, ...action.payload };
    case 'RESET':        return INITIAL;
    case 'RESET_PERSONAL': return {
      ...state,
      fullNameKhmer: '', fullNameEnglish: '',
      gender: '', dateOfBirth: '', nationality: '', nationalID: '', phone: '',
      role: '', leaderRole: '', athleteCategory: '',
      photoUpload: null, nationalityDocumentUpload: null,
    };
  }
}

export function validateStep(step: number, data: RegistrationFormData): RegistrationErrors {
  const e: RegistrationErrors = {};
  if (step === 0 && !data.eventId)        e.eventId = 'សូមជ្រើសរើសព្រឹត្តិការណ៍';
  if (step === 1 && !data.organizationId) e.organizationId = 'សូមជ្រើសរើសស្ថាប័ន';
  if (step === 2 && !data.sportId)        e.sportId = 'សូមជ្រើសរើសកីឡា';
  if (step === 3 && !data.categoryId)     e.categoryId = 'សូមជ្រើសរើសប្រភេទ';
  if (step === 4) {
    if (!data.fullNameKhmer && !data.fullNameEnglish) e.fullNameKhmer = 'សូមបំពេញឈ្មោះ';
    if (!data.gender)      e.gender = 'សូមជ្រើសរើសភេទ';
    if (!data.dateOfBirth) e.dateOfBirth = 'សូមបំពេញថ្ងៃកំណើត';
    if (!data.nationalID)  e.nationalID = 'សូមបំពេញលេខអត្តសញ្ញាណ';
    if (!data.phone)       e.phone = 'សូមបំពេញលេខទូរស័ព្ទ';
    if (!data.role)        e.role = 'សូមជ្រើសរើសតួនាទី';
    if (!data.photoUpload) e.photoUpload = 'សូមបញ្ចូលរូបថត';
    if (!data.nationalityDocumentUpload) e.nationalityDocumentUpload = 'សូមបញ្ចូលឯកសារ';
  }
  return e;
}

export function useRegistration() {
  const [formData, dispatch] = useReducer(reducer, INITIAL);
  const setFields      = useCallback((p: Partial<RegistrationFormData>) => dispatch({ type: 'SET', payload: p }), []);
  const reset          = useCallback(() => dispatch({ type: 'RESET' }), []);
  const resetPersonal  = useCallback(() => dispatch({ type: 'RESET_PERSONAL' }), []);
  return { formData, setFields, reset, resetPersonal };
}
