export const ROUTES = {
  PUBLIC: {
    HOME: '/', 
    SURVEY: '/survey', 
    CATEGORY: '/category',
    REGISTER: '/register' 
  },
  AUTH: { 
    LOGIN: '/login'
  },
  ADMIN: {
    ROOT: '/admin',
    EVENTS: '/admin/events',
    EVENT: (id: string) => `/admin/events/${id}`,
    SPORTS: '/admin/sports',
    SPORT: (id: string) => `/admin/sports/${id}`,
    PARTICIPANTS: '/admin/participants',
    PROVINCES: '/admin/provinces',
    SURVEY: '/admin/survey',
  },
  SUPERADMIN: {
    ROOT: '/superadmin',
    EVENTS: '/superadmin/events',
    EVENT: (id: string) => `/superadmin/events/${id}`,
    SPORTS: '/superadmin/sports',
    SPORT: (id: string) => `/superadmin/sports/${id}`,
    PARTICIPANTS: '/superadmin/participants',
    PROVINCES: '/superadmin/provinces',
    SURVEY: '/superadmin/survey',
  },
  API: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    SESSION: '/api/auth/session',
    EVENTS: '/api/events',
    SPORTS: '/api/sports',
    REGISTRATIONS: '/api/registrations',
    PARTICIPANTS: '/api/participants',
    PROVINCES: '/api/provinces',
    ORGANIZATIONS: '/api/organizations',
    SURVEYS: '/api/surveys',
    DASHBOARD: '/api/dashboard',
  },
} as const;
