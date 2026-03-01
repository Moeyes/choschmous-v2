/**
 * usePersonalInfoDraft.ts
 *
 * Persists the personal-info step form data locally so the user never
 * loses work on refresh or accidental back-navigation.
 *
 * Text / select fields  → localStorage  (JSON, synchronous)
 * File / photo fields   → IndexedDB via PhotoStorage (async)
 *
 * IMPORTANT: PersonalInfoDraft is a strict subset of RegistrationFormData,
 * using EXACTLY the same key names so setFields() never needs an `as any` cast.
 *
 * Photo slot IDs are stable per event+org session:
 *   `<sessionKey>__photoUpload`         — 4×6 portrait
 *   `<sessionKey>__docBirthCertificate` — birth certificate
 *   `<sessionKey>__docNationalId`       — national ID card
 *   `<sessionKey>__docPassport`         — passport
 */

import { useCallback, useEffect, useState } from 'react';
import { PhotoStorage } from './photoStorage';
import type { RegistrationFormData } from '../types/Registration.types';
import { buildFullNameKhmer, buildFullNameLatin } from '../types/Registration.types';

// ── Text-only draft (all keys come from RegistrationFormData) ─

export type PersonalInfoDraft = Pick<
  RegistrationFormData,
  | 'firstNameKhmer'
  | 'lastNameKhmer'
  | 'firstNameLatin'
  | 'lastNameLatin'
  | 'fullNameKhmer'
  | 'fullNameEnglish'
  | 'gender'
  | 'nationality'
  | 'dateOfBirth'
  | 'nationalID'
  | 'phone'
  | 'idDocType'
  | 'role'
  | 'leaderRole'
  | 'athleteCategory'
  | 'selectedDocKeys'
>;

// ── File-only draft (all keys come from RegistrationFormData) ─

export type PhotoDraftSlots = Pick<
  RegistrationFormData,
  | 'photoUpload'
  | 'nationalityDocumentUpload'
  | 'docBirthCertificate'
  | 'docNationalId'
  | 'docPassport'
>;

export type PhotoSlotKey = keyof PhotoDraftSlots;

// ── Defaults ──────────────────────────────────────────────────

const EMPTY_TEXT_DRAFT: PersonalInfoDraft = {
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
  selectedDocKeys: '',
};

const EMPTY_PHOTOS: PhotoDraftSlots = {
  photoUpload: null,
  nationalityDocumentUpload: null,
  docBirthCertificate: null,
  docNationalId: null,
  docPassport: null,
};

const PHOTO_SLOT_KEYS: PhotoSlotKey[] = [
  'photoUpload',
  'nationalityDocumentUpload',
  'docBirthCertificate',
  'docNationalId',
  'docPassport',
];

// ── Hook ─────────────────────────────────────────────────────

export function usePersonalInfoDraft(sessionKey: string) {
  const storageKey = `reg_personal_draft__${sessionKey}`;

  // ── Text fields ───────────────────────────────────────────

  const [textDraft, setTextDraft] = useState<PersonalInfoDraft>(() => {
    if (typeof window === 'undefined') return EMPTY_TEXT_DRAFT;
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? { ...EMPTY_TEXT_DRAFT, ...JSON.parse(raw) } : EMPTY_TEXT_DRAFT;
    } catch {
      return EMPTY_TEXT_DRAFT;
    }
  });

  // ── File state ────────────────────────────────────────────

  const [photos, setPhotos] = useState<PhotoDraftSlots>(EMPTY_PHOTOS);
  const [photosLoaded, setPhotosLoaded] = useState(false);

  // Hydrate files from IndexedDB on mount
  useEffect(() => {
    let cancelled = false;
    async function load() {
      const result: PhotoDraftSlots = { ...EMPTY_PHOTOS };
      for (const key of PHOTO_SLOT_KEYS) {
        const slotId = PhotoStorage.slotId(sessionKey, key);
        result[key] = await PhotoStorage.get(slotId);
      }
      if (!cancelled) {
        setPhotos(result);
        setPhotosLoaded(true);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [sessionKey]);

  // Persist text fields to localStorage on every change
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(textDraft));
    } catch {
      // Quota exceeded — silent fail
    }
  }, [storageKey, textDraft]);

  // ── Setters ───────────────────────────────────────────────

  /**
   * Update text fields. Automatically re-derives fullNameKhmer /
   * fullNameEnglish whenever any name part changes.
   */
  const setTextField = useCallback((patch: Partial<PersonalInfoDraft>) => {
    setTextDraft((prev) => {
      const next = { ...prev, ...patch };
      if (patch.firstNameKhmer !== undefined || patch.lastNameKhmer !== undefined) {
        next.fullNameKhmer = buildFullNameKhmer(next.firstNameKhmer, next.lastNameKhmer);
      }
      if (patch.firstNameLatin !== undefined || patch.lastNameLatin !== undefined) {
        next.fullNameEnglish = buildFullNameLatin(next.firstNameLatin, next.lastNameLatin);
      }
      return next;
    });
  }, []);

  /**
   * Save a file to a named slot. Persists to IndexedDB and updates
   * React state. Returns the stable slotId.
   */
  const setPhotoSlot = useCallback(
    async (key: PhotoSlotKey, file: File | null): Promise<string> => {
      const slotId = PhotoStorage.slotId(sessionKey, key);
      if (file) {
        await PhotoStorage.save(slotId, file);
      } else {
        await PhotoStorage.remove(slotId);
      }
      setPhotos((prev) => ({ ...prev, [key]: file }));
      return slotId;
    },
    [sessionKey]
  );

  /** Get the stable slot ID for a given photo key. */
  const getSlotId = useCallback(
    (key: PhotoSlotKey) => PhotoStorage.slotId(sessionKey, key),
    [sessionKey]
  );

  /** Wipe all local draft data — call after successful submission. */
  const clearDraft = useCallback(async () => {
    localStorage.removeItem(storageKey);
    await PhotoStorage.clear();
    setTextDraft(EMPTY_TEXT_DRAFT);
    setPhotos(EMPTY_PHOTOS);
  }, [storageKey]);

  /**
   * Returns a Partial<RegistrationFormData> ready to pass directly to
   * setFields() in the parent wizard with no casting needed.
   */
  const asFormDataPatch = useCallback(
    (): Partial<RegistrationFormData> => ({ ...textDraft, ...photos }),
    [textDraft, photos]
  );

  return {
    textDraft,
    photos,
    photosLoaded,
    setTextField,
    setPhotoSlot,
    getSlotId,
    clearDraft,
    asFormDataPatch,
  };
}
