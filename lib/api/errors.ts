export class ApiError extends Error {
  constructor(
    message: string,
    public status = 500,
    public details?: Record<string, string[]>
  ) {
    super(message);
    this.name = 'ApiError';
  }
}
export class NotFoundError extends ApiError {
  constructor(r: string) {
    super(`${r} not found`, 404);
  }
}
export class UnauthorizedError extends ApiError {
  constructor() {
    super('Unauthorized', 401);
  }
}
export class ForbiddenError extends ApiError {
  constructor() {
    super('Forbidden', 403);
  }
}
export class ValidationError extends ApiError {
  constructor(d: Record<string, string[]>) {
    super('Validation failed', 422, d);
  }
}
