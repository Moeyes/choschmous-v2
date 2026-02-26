export enum Role {
  ADMIN = 'ADMIN',
  SUPERADMIN = 'SUPERADMIN',
}

type Permission =
  | 'read:events'
  | 'write:events'
  | 'read:sports'
  | 'write:sports'
  | 'read:provinces'
  | 'write:provinces'
  | 'read:participants'
  | 'read:registrations'
  | 'write:registrations'
  | 'read:survey'
  | 'write:survey'
  | 'read:organizations'
  | 'write:organizations'
  | 'manage:users'
  | '*';

const PERMISSIONS: Record<Role, Permission[]> = {
  [Role.ADMIN]: [
    'read:events',
    'write:events',
    'read:sports',
    'write:sports',
    'read:provinces',
    'read:participants',
    'read:registrations',
    'write:registrations',
    'read:survey',
    'read:organizations',
  ],
  [Role.SUPERADMIN]: ['*'],
};

export function hasPermission(role: Role, permission: Permission): boolean {
  const perms = PERMISSIONS[role];
  return perms.includes('*') || perms.includes(permission);
}
