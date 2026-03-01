// ============================================================
// domains/registrations/registrations.repository.ts
// ============================================================

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

// Strip trailing slash from env var to prevent //api// double-slash URLs
const BACKEND_URL = (process.env.BACKEND_API_BASE_URL ?? 'http://127.0.0.1:8000').replace(
  /\/+$/,
  ''
);
const API = `${BACKEND_URL}/api`;

function splitName(fullName: string | null): { family: string; given: string } {
  if (!fullName) return { family: '', given: '' };
  const parts = fullName.trim().split(/\s+/);
  const family = parts[0] ?? '';
  const given = parts.slice(1).join(' ') || family;
  return { family, given };
}

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

const ID_DOC_MAP: Record<string, string> = {
  IDCard: 'national_id',
  NationalID: 'national_id',
  national_id: 'national_id',
  Passport: 'passport',
  passport: 'passport',
  BirthCertificate: 'birth_certificate',
  birth_certificate: 'birth_certificate',
  FamilyBook: 'family_book',
  family_book: 'family_book',
  Other: 'other',
  other: 'other',
};

// ─── FIX: Map every frontend leaderRole value → exact backend enum value ──────
//
// FastAPI's LeaderRole enum likely uses snake_case values. Check your
// Backend/src/database/enumdata.py (or model.py) for the exact strings.
// The keys below cover all common frontend variants; adjust values if needed.
//
const LEADER_ROLE_MAP: Record<string, string> = {
  // Frontend value          → Backend enum value
  coach_trainer: 'coach_trainer',
  CoachTrainer: 'coach_trainer',
  coach: 'coach_trainer',

  team_manager: 'team_manager',
  TeamManager: 'team_manager',
  manager: 'team_manager',

  delegate: 'delegate',
  Delegate: 'delegate',

  technical_official: 'technical_official',
  TechnicalOfficial: 'technical_official',
  technical: 'technical_official',

  medical_staff: 'medical_staff',
  MedicalStaff: 'medical_staff',
  medical: 'medical_staff',

  media: 'media',
  Media: 'media',

  security: 'security',
  Security: 'security',

  volunteer: 'volunteer',
  Volunteer: 'volunteer',

  official: 'official',
  Official: 'official',

  other: 'other',
  Other: 'other',
};

/**
 * Map a frontend leader role string to the exact enum value the backend expects.
 * Falls back to the raw value so you can see the unrecognised string in the error.
 */
function mapLeaderRole(role: string | null | undefined): string {
  if (!role) return 'delegate';
  return LEADER_ROLE_MAP[role] ?? role;
}

export const registrationsRepository = {
  async createEnroll(data: {
    khmerName: string | null;
    englishName: string | null;
    gender: string;
    nationality: string;
    dob: Date | string;
    idDocType: string;
    address?: string | null;
    phoneNumber?: string | null;
    userId?: string | null;
    photoPath?: string | null;
    documentsPath?: string | null;
  }): Promise<Enroll> {
    const kh = splitName(data.khmerName);
    const en = splitName(data.englishName);

    const res = await fetch(`${API}/enrollments/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        kh_family_name: kh.family,
        kh_given_name: kh.given,
        en_family_name: en.family,
        en_given_name: en.given,
        phonenumber: data.phoneNumber ?? '',
        gender: GENDER_MAP[data.gender] ?? 'other',
        nationality: data.nationality ?? 'Cambodian',
        date_of_birth: formatDate(data.dob),
        id_document_type: ID_DOC_MAP[data.idDocType] ?? 'other',
        address: data.address ?? null,
        user_id: data.userId ?? null,
        photo_path: data.photoPath ?? null,
        documents_path: data.documentsPath ?? null,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to create enrollment' }));
      throw new Error(typeof err.detail === 'string' ? err.detail : JSON.stringify(err.detail));
    }

    const result = await res.json();
    return {
      id: result.id,
      gender: result.gender as Gender,
      name: `${result.en_given_name} ${result.en_family_name}`.trim(),
      nationality: result.nationality,
      dob: new Date(result.date_of_birth),
      idDocType: result.id_document_type as IdDocType,
      address: result.address,
      photoPath: result.photo_path,
      documentsPath: result.documents_path,
      userID: 0,
      createdAt: new Date(result.created_at),
    };
  },

  async findEnrollById(id: number): Promise<Enroll | null> {
    const res = await fetch(`${API}/enrollments/${id}`);
    if (!res.ok) return null;
    const result = await res.json();
    return {
      id: result.id,
      gender: result.gender as Gender,
      name: `${result.en_given_name} ${result.en_family_name}`.trim(),
      nationality: result.nationality,
      dob: new Date(result.date_of_birth),
      idDocType: result.id_document_type as IdDocType,
      address: result.address,
      photoPath: result.photo_path,
      documentsPath: result.documents_path,
      userID: 0,
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
    if (data.categoriesID && data.categoriesID !== 0) {
      body.category_id = data.categoriesID;
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

  async createLeader(data: {
    enroll_id: number;
    roles: string;
    phoneNumber?: string | null;
  }): Promise<Leader> {
    // ─── FIX: Map the role before sending to backend ──────────────────────────
    const mappedRole = mapLeaderRole(data.roles);

    const res = await fetch(`${API}/leaders/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        enroll_id: data.enroll_id,
        leader_role: mappedRole, // ← was: data.roles (unmapped)
      }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to create leader' }));
      // Include the mapped role in the error for easier debugging
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
        photoPath: item.photo_path,
        documentsPath: item.documents_path,
        role: 'Athlete',
        status: 'pending',
        athleteClass: null,
        athleteCategory: null,
        leaderRole: null,
        phoneNumber: item.phonenumber ?? null,
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
