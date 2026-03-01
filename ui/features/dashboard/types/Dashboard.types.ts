export type DashboardStats = {
  events: number;
  sports: number;
  participants: number;
  registrations: number;
  organizations: number;
};

export type DashboardEvent = {
  id: number;
  name: string;
  type: string;
  createdAt: string;
};

export type DashboardSport = {
  id: number;
  name: string;
  createdAt: string;
};

export type TopOrganization = {
  name: string;
  participants: number;
};

export type DashboardPayload = {
  stats: DashboardStats;
  events: DashboardEvent[];
  sports: DashboardSport[];
  topOrganizations: TopOrganization[];
};
