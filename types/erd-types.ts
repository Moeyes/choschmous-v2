// TypeScript interfaces matching the actual backend SQLAlchemy models (model.py + enumdata.py).
// Column names use snake_case to mirror the database; frontend domain types may use camelCase.

// ─── Enums ────────────────────────────────────────────────────────────────────

export enum GenderEnum {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export enum MedalType {
  GOLD = 'gold',
  SILVER = 'silver',
  BRONZE = 'bronze',
  NONE = 'none',
}

export enum IdDocumentType {
  NATIONAL_ID = 'national_id',
  PASSPORT = 'passport',
  BIRTH_CERTIFICATE = 'birth_certificate',
  FAMILY_BOOK = 'family_book',
  OTHER = 'other',
}

export enum EventType {
  NATIONAL = 'កីឡាជាតិ',
  UNIVERSITY = 'កីឡាឧត្តមសិក្សា និងមធ្យមសិក្សា​បចេ្ចកទេសថ្នាក់ជាតិថ្នាក់ជាតិ',
  HIGH_SCHOOL = 'សិស្សមធ្យមសិក្សា​ថ្នាក់ជាតិ',
  PRIMARY_SCHOOL = 'កីឡាសិស្សបថមសិក្សាជាតិ',
}

export enum InstituteType {
  PROVINCE = 'province',
  MINISTRY = 'ministry',
}

export enum UserRole {
  ADMIN = 'admin',
  USER1 = 'user1',
  USER2 = 'user2',
  GUEST = 'guest',
}

// ─── Tables ───────────────────────────────────────────────────────────────────

/** users – PK is UUID */
export interface User {
  id: string; // UUID
  kh_family_name: string;
  kh_given_name: string;
  en_family_name: string;
  en_given_name: string;
  email: string;
  username: string;
  full_name: string | null;
  is_active: boolean;
  is_superuser: boolean;
  role: UserRole;
  photo_path: string | null;
  created_at: string; // ISO datetime
}

/** organizations */
export interface Organization {
  id: number;
  name_kh: string;
  type: InstituteType;
  code: string;
  created_at: string;
}

/** events */
export interface Event {
  id: number;
  name_kh: string;
  type: EventType;
  created_at: string;
}

/** sports */
export interface Sport {
  id: number;
  name_kh: string;
  sport_type: string | null;
  created_at: string;
}

/** enrollments */
export interface Enrollment {
  id: number;
  kh_family_name: string;
  kh_given_name: string;
  en_family_name: string;
  en_given_name: string;
  phonenumber: string;
  gender: GenderEnum;
  nationality: string;
  date_of_birth: string; // ISO date
  id_document_type: IdDocumentType;
  address: string | null;
  photo_path: string | null;
  documents_path: string | null;
  user_id: string | null; // UUID FK → users.id
  created_at: string;
}

/** leaders */
export interface Leader {
  id: number;
  LeaderRole: string | null; // enum is empty, pass-through
  enroll_id: number; // FK → enrollments.id
  created_at: string;
}

/** athletes */
export interface Athlete {
  id: number;
  enroll_id: number; // FK → enrollments.id
  created_at: string;
}

/** categories */
export interface Category {
  id: number;
  sports_id: number | null; // FK → sports.id
  category: string;
  events_id: number | null; // FK → events.id
  created_at: string;
}

/** sports_event_org – many-to-many link */
export interface SportsEventOrg {
  id: number;
  events_id: number | null; // FK → events.id
  sports_id: number | null; // FK → sports.id
  organization_id: number | null; // FK → organizations.id
  created_at: string;
}

/** leader_participation */
export interface LeaderParticipation {
  id: number;
  leaders_id: number | null; // FK → leaders.id
  events_id: number | null; // FK → events.id
  sports_id: number | null; // FK → sports.id
  organization_id: number | null; // FK → organizations.id
  created_at: string;
}

/** athlete_participation */
export interface AthleteParticipation {
  id: number;
  athletes_id: number | null; // FK → athletes.id
  events_id: number | null; // FK → events.id
  sports_id: number | null; // FK → sports.id
  category_id: number | null; // FK → categories.id
  organization_id: number | null; // FK → organizations.id
  created_at: string;
}

/** medals */
export interface Medal {
  id: number;
  athlete_participation_id: number | null; // FK → athlete_participation.id
  medal_type: MedalType;
  key_performance: string | null;
  created_at: string;
}

/** participation_per_sport */
export interface ParticipationPerSport {
  id: number;
  sports_Events_id: number | null; // FK → sports_event_org.id
  female_count: number;
  male_count: number;
  created_at: string;
}

/** refresh_tokens */
export interface RefreshToken {
  id: number;
  jti: string;
  token_hash: string;
  user_id: string; // UUID FK → users.id
  expires_at: string; // ISO datetime
  revoked: boolean;
  created_at: string;
}
