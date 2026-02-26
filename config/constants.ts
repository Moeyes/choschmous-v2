export const APP_NAME = 'Choschmous';
export const DEFAULT_PAGE_SIZE = 20;
export const MAX_UPLOAD_SIZE_MB = 5;
export const SUPPORTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
export const SESSION_COOKIE_NAME = 'choschmous_session';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7;
export const PATTERNS = {
  phone: /^\+?[0-9\s\-()]{7,15}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  numeric: /^[0-9]+$/,
} as const;
export const UPLOAD_LIMITS = {
  maxImageSize: 2 * 1024 * 1024, // 2MB
  allowedImageTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
} as const;