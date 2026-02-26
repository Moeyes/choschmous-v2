// Auto-generated TypeScript interfaces based on the ER diagram provided by the user.
// Each interface reflects a table along with its fields and basic types.

export interface User {
  userID: number; // primary key
  username: string;
  password: string;
  userLevel: number;
  photoPath?: string;
  createdAt: Date;
}

export interface Enrol {
  id: number; // primary key
  userID: number; // foreign key -> User.userID
  name: string;
  gender: string;
  nationality: string;
  dob: Date;
  idDocType: string;
  address: string;
  photoPath?: string;
  documentsPath?: string;
  createdAt: Date;
}

export interface Leader {
  id: number; // primary key
  enrolID: number; // foreign key -> Enrol.id
  roles: string;
  phoneNumber: string; // unique
  createdAt: Date;
}

export interface LeaderParticipant {
  id: number; // primary key
  leaderID: number; // foreign key -> Leader.id
  enrolID?: number; // optional foreign key -> Enrol.id
  eventsID?: number; // foreign key -> Event.id
  sportsID?: number; // foreign key -> Sport.id
  organizationID?: number; // foreign key -> Organization.id
  createdAt: Date;
}

export interface Athlete {
  id: number; // primary key
  enrolID: number; // foreign key -> Enrol.id
  class?: string;
  uniformSize?: string;
  createdAt: Date;
}

export interface AthleteParticipant {
  id: number; // primary key
  athleteID: number; // foreign key -> Athlete.id
  eventsID?: number; // foreign key -> Event.id
  categoryID?: number; // foreign key -> Category.id
  sportsID?: number; // foreign key -> Sport.id
  organizationID?: number; // foreign key -> Organization.id
  createdAt: Date;
}

export interface Medal {
  id: number; // primary key
  athleteParticipantID: number; // foreign key -> AthleteParticipant.id
  medalType: string;
  key_performance?: string;
  createdAt: Date;
}

export interface SportsEventOrg {
  id: number; // primary key
  eventsID: number; // foreign key -> Event.id
  sportsID: number; // foreign key -> Sport.id
  organizationID: number; // foreign key -> Organization.id
  createdAt: Date;
}

export interface Category {
  id: number; // primary key
  eventsID: number; // foreign key -> Event.id
  sportsID: number; // foreign key -> Sport.id
  category: string;
  createdAt: Date;
}

export interface Event {
  id: number; // primary key
  name: string;
  date: Date;
  createdAt: Date;
}

export interface Organization {
  id: number; // primary key
  name: string;
  createdAt: Date;
}

export interface Sport {
  id: number; // primary key
  name: string;
  createdAt: Date;
}
