export type ApiSuccess<T> = {
  success: true;
  data: T;
  meta?: { total?: number; page?: number; pageSize?: number; totalPages?: number };
};
export type ApiError = { success: false; error: string; details?: Record<string, string[]> };
export type ApiResponse<T> = ApiSuccess<T> | ApiError;
export type PaginatedResponse<T> = {
  success: true;
  data: T[];
  meta: { total: number; page: number; pageSize: number; totalPages: number };
};

export function apiSuccess<T>(data: T, meta?: ApiSuccess<T>['meta']): ApiSuccess<T> {
  return { success: true, data, ...(meta ? { meta } : {}) };
}
export function apiError(error: string, details?: Record<string, string[]>): ApiError {
  return { success: false, error, ...(details ? { details } : {}) };
}
