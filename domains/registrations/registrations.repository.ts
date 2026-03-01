// domains/registrations/registrations.repository.ts

import type {
  Enroll,
  Athlete,
  Leader,
  AthleteParticipation,
  LeaderParticipation,
  Registration,
  RegistrationFilters,
  Gender,
  IdDocType,
} from './registrations.types';

const BACKEND_URL = (process.env.BACKEND_API_BASE_URL ?? 'http://127.0.0.1:8000').replace(
  /\/+$/,
  ''
);
const API = `${BACKEND_URL}/api`;

function formatDate(dob: Date | string | null | undefined): string {
  if (!dob) return '';
  if (dob instanceof Date) return dob.toISOString().split('T')[0];
  return new Date(dob).toISOString().split('T')[0];
}

const GENDER_MAP: Record<string, string> = {
  Male: 'male',
  Female: 'female',
  Other: 'other',
  male: 'male',
  female: 'female',
  other: 'other',
};

// Backend IdDocumentType enum values (snake_case)
const ID_DOC_MAP: Record<string, string> = {
  IDCard: 'national_id',
  NationalID: 'national_id',
  national_id: 'national_id',
  docNationalId: 'national_id',
  Passport: 'passport',
  passport: 'passport',
  docPassport: 'passport',
  BirthCertificate: 'birth_certificate',
  birth_certificate: 'birth_certificate',
  docBirthCertificate: 'birth_certificate',
  FamilyBook: 'family_book',
  family_book: 'family_book',
  Other: 'other',
  other: 'other',
};

const LEADER_ROLE_MAP: Record<string, string> = {
  coach_trainer: 'coach_trainer',
  CoachTrainer: 'coach_trainer',
  coach: 'coach_trainer',
  team_manager: 'team_manager',
  TeamManager: 'team_manager',
  manager: 'team_manager',
  delegate: 'delegate',
  Delegate: 'delegate',
  technical_official: 'technical_official',
  medical_staff: 'medical_staff',
  media: 'media',
  security: 'security',
  volunteer: 'volunteer',
  team_lead: 'team_lead',
  teacher_assistant: 'teacher_assistant',
  official: 'official',
  Official: 'official',
  other: 'other',
  Other: 'other',
};

function mapLeaderRole(role: string | null | undefined): string {
  if (!role) return 'delegate';
  return LEADER_ROLE_MAP[role] ?? role;
}

export interface EnrollWithUuid extends Enroll {
  uuid: string | null;
}

export const registrationsRepository = {
  async createEnroll(data: {
    // ── Send split name fields directly — no joinng/splitting ──
    khGivenName: string;
    khFamilyName: string;
    enGivenName: string;
    enFamilyName: string;
    gender: string;
    nationality: string;
    dob: Date | string;
    idDocType: string; // already mapped to backend enum value
    address?: string | null;
    phoneNumber?: string | null;
    userId?: string | null;
    photoPath?: string | null;
    documentsPath?: string | null;
  }): Promise<EnrollWithUuid> {
    const body = {
      kh_given_name: data.khGivenName || '',
      kh_family_name: data.khFamilyName || '',
      en_given_name: data.enGivenName || '',
      en_family_name: data.enFamilyName || '',
      phonenumber: data.phoneNumber ?? '',
      gender: GENDER_MAP[data.gender] ?? 'other',
      nationality: data.nationality || 'Cambodian',
      date_of_birth: formatDate(data.dob),
      id_document_type: ID_DOC_MAP[data.idDocType] ?? 'other',
      address: data.address ?? null,
      user_id: data.userId ?? null,
      photo_path: data.photoPath ?? null,
      documents_path: data.documentsPath ?? null,
    };

    console.log('[createEnroll] body →', JSON.stringify(body, null, 2));

    const res = await fetch(`${API}/enrollments/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to create enrollment' }));
      throw new Error(typeof err.detail === 'string' ? err.detail : JSON.stringify(err.detail));
    }

    const result = await res.json();

    return {
      id: result.id,
      uuid: result.user_id ?? null, // uuid col — may be null for public registrations
      khFamilyName: result.kh_family_name ?? '',
      khGivenName: result.kh_given_name ?? '',
      enFamilyName: result.en_family_name ?? '',
      enGivenName: result.en_given_name ?? '',
      phonenumber: result.phonenumber ?? '',
      gender: result.gender as Gender,
      nationality: result.nationality,
      dob: new Date(result.date_of_birth),
      idDocType: result.id_document_type as IdDocType,
      address: result.address,
      photoPath: result.photo_path,
      documentsPath: result.documents_path,
      userId: result.user_id ?? null,
      createdAt: new Date(result.created_at),
    };
  },

  async findEnrollById(id: number): Promise<Enroll | null> {
    const res = await fetch(`${API}/enrollments/${id}`);
    if (!res.ok) return null;
    const result = await res.json();
    return {
      id: result.id,
      khFamilyName: result.kh_family_name ?? '',
      khGivenName: result.kh_given_name ?? '',
      enFamilyName: result.en_family_name ?? '',
      enGivenName: result.en_given_name ?? '',
      phonenumber: result.phonenumber ?? '',
      gender: result.gender as Gender,
      nationality: result.nationality,
      dob: new Date(result.date_of_birth),
      idDocType: result.id_document_type as IdDocType,
      address: result.address,
      photoPath: result.photo_path,
      documentsPath: result.documents_path,
      userId: result.user_id ?? null,
      createdAt: new Date(result.created_at),
    };
  },

  async createAthlete(data: { enroll_id: number }): Promise<Athlete> {
    const res = await fetch(`${API}/athletes/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ enroll_id: data.enroll_id }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to create athlete' }));
      throw new Error(typeof err.detail === 'string' ? err.detail : JSON.stringify(err.detail));
    }
    return res.json();
  },

  async createAthleteParticipation(
    data: Omit<AthleteParticipation, 'id' | 'createdAt'>
  ): Promise<AthleteParticipation> {
    const body: Record<string, unknown> = {
      athletes_id: data.athletesID,
      events_id: data.eventsID,
      sports_id: data.sportsID,
      organization_id: data.organizationID,
    };
    if (data.categoryID && data.categoryID !== 0) {
      body.category_id = data.categoryID;
    }
    const res = await fetch(`${API}/athlete-participation/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const err = await res
        .json()
        .catch(() => ({ detail: 'Failed to create athlete participation' }));
      throw new Error(typeof err.detail === 'string' ? err.detail : JSON.stringify(err.detail));
    }
    return res.json();
  },

  async createLeader(data: { enroll_id: number; roles: string }): Promise<Leader> {
    const mappedRole = mapLeaderRole(data.roles);
    const res = await fetch(`${API}/leaders/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ enroll_id: data.enroll_id, leader_role: mappedRole }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to create leader' }));
      throw new Error(
        typeof err.detail === 'string'
          ? `${err.detail} (sent leader_role="${mappedRole}")`
          : JSON.stringify(err.detail)
      );
    }
    return res.json();
  },

  async createLeaderParticipation(
    data: Omit<LeaderParticipation, 'id' | 'createdAt'>
  ): Promise<LeaderParticipation> {
    const res = await fetch(`${API}/leader-participation/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        leaders_id: data.leadersID,
        events_id: data.eventsID,
        sports_id: data.sportsID,
        organization_id: data.organizationID,
      }),
    });
    if (!res.ok) {
      const err = await res
        .json()
        .catch(() => ({ detail: 'Failed to create leader participation' }));
      throw new Error(typeof err.detail === 'string' ? err.detail : JSON.stringify(err.detail));
    }
    return res.json();
  },

  async patchEnroll(
    id: number,
    patch: { photo_path?: string; documents_path?: string }
  ): Promise<void> {
    const res = await fetch(`${API}/enrollments/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patch),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'PATCH failed' }));
      console.error('[patchEnroll] failed:', err);
    }
  },

  async findAll(filters: RegistrationFilters): Promise<Registration[]> {
    const { page = 1, limit = 20 } = filters;
    const skip = (page - 1) * limit;
    const res = await fetch(`${API}/enrollments/?skip=${skip}&limit=${limit}`);
    if (!res.ok) throw new Error('Failed to fetch registrations');
    const json = await res.json();
    return json.data.map(
      (item: any): Registration => ({
        enrollId: item.id,
        name: `${item.en_given_name} ${item.en_family_name}`.trim(),
        gender: item.gender as Gender,
        nationality: item.nationality,
        dob: item.date_of_birth,
        idDocType: item.id_document_type as IdDocType,
        phonenumber: item.phonenumber ?? null,
        photoPath: item.photo_path,
        documentsPath: item.documents_path,
        role: 'Athlete',
        status: 'pending',
        athleteCategory: null,
        leaderRole: null,
        eventId: null,
        sportId: null,
        categoryId: null,
        organizationId: null,
        createdAt: new Date(item.created_at),
      })
    );
  },

  async count(filters: RegistrationFilters): Promise<number> {
    const res = await fetch(`${API}/enrollments/?skip=0&limit=1`);
    if (!res.ok) throw new Error('Failed to count registrations');
    const json = await res.json();
    return json.count;
  },
};
