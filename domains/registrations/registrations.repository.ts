// ============================================================
// domains/registrations/registrations.repository.ts
// Calls FastAPI backend — no Prisma
// ============================================================

import type {
  Enroll, Athlete, Leader,
  AthleteParticipation, LeaderParticipation,
  Registration, RegistrationFilters, Gender, IdDocType, LeaderRole,
} from './registrations.types';

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:8000';
const API = `${BACKEND_URL}/api/v1`;

export const registrationsRepository = {

  // ── Enroll ──────────────────────────────────────────────────

  async createEnroll(data: Omit<Enroll, 'id' | 'createdAt'>): Promise<Enroll> {
    const res = await fetch(`${API}/enrollments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userID: data.userID,
        name: data.name,
        gender: data.gender,
        nationality: data.nationality,
        dob: data.dob,
        idDocType: data.idDocType,
        address: data.address,
        photoPath: data.photoPath,
        DocumentsPath: data.documentsPath,
      }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to create enrollment' }));
      throw new Error(err.detail ?? 'Failed to create enrollment');
    }
    const result = await res.json();
    return { ...result, gender: result.gender as Gender, documentsPath: result.DocumentsPath };
  },

  async findEnrollById(id: number): Promise<Enroll | null> {
    const res = await fetch(`${API}/enrollments/${id}`);
    if (!res.ok) return null;
    const result = await res.json();
    return { ...result, gender: result.gender as Gender, documentsPath: result.DocumentsPath };
  },

  // ── Athletes ─────────────────────────────────────────────────
  // NOTE: Your backend doesn't have /athletes routes yet.
  // These are placeholders — add the routes to your backend when ready.

  async createAthlete(data: Omit<Athlete, 'id' | 'createdAt'>): Promise<Athlete> {
    const res = await fetch(`${API}/athletes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to create athlete' }));
      throw new Error(err.detail ?? 'Failed to create athlete');
    }
    return res.json();
  },

  async createAthleteParticipation(
    data: Omit<AthleteParticipation, 'id' | 'createdAt'>
  ): Promise<AthleteParticipation> {
    const res = await fetch(`${API}/athletes/participations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to create athlete participation' }));
      throw new Error(err.detail ?? 'Failed to create athlete participation');
    }
    return res.json();
  },

  // ── Leaders ──────────────────────────────────────────────────

  async createLeader(data: Omit<Leader, 'id' | 'createdAt'>): Promise<Leader> {
    const res = await fetch(`${API}/leaders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to create leader' }));
      throw new Error(err.detail ?? 'Failed to create leader');
    }
    return res.json();
  },

  async createLeaderParticipation(
    data: Omit<LeaderParticipation, 'id' | 'createdAt'>
  ): Promise<LeaderParticipation> {
    const res = await fetch(`${API}/leaders/participations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Failed to create leader participation' }));
      throw new Error(err.detail ?? 'Failed to create leader participation');
    }
    return res.json();
  },

  // ── Queries ───────────────────────────────────────────────────

  async findAll(filters: RegistrationFilters): Promise<Registration[]> {
    const { page = 1, limit = 20 } = filters;
    const skip = (page - 1) * limit;

    // Backend has /enrollments — fetch them and map to Registration shape
    const res = await fetch(`${API}/enrollments?skip=${skip}&limit=${limit}`);
    if (!res.ok) throw new Error('Failed to fetch registrations');

    const json = await res.json();

    return json.data.map((item: any): Registration => ({
      enrollId: item.id,
      name: item.name,
      gender: item.gender as Gender,
      nationality: item.nationality,
      dob: item.dob,
      idDocType: item.idDocType as IdDocType,
      photoPath: item.photoPath,
      documentsPath: item.DocumentsPath,
      role: 'Athlete', // default — update when backend returns role
      status: 'pending',
      athleteClass: null,
      athleteCategory: null,
      leaderRole: null,
      phoneNumber: null,
      eventId: item.eventId ?? null,
      sportId: item.sportId ?? null,
      categoryId: item.categoryId ?? null,
      organizationId: item.organizationId ?? null,
      createdAt: new Date(item.createdAt),
    }));
  },

  async count(filters: RegistrationFilters): Promise<number> {
    const res = await fetch(`${API}/enrollments?skip=0&limit=1`);
    if (!res.ok) throw new Error('Failed to count registrations');
    const json = await res.json();
    return json.count;
  },
};
