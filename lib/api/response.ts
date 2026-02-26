import { NextResponse } from 'next/server';
import { apiSuccess, apiError } from '@/types/api';
import { ApiError } from './errors';

export function ok<T>(data: T, meta?: object, status = 200) {
  return NextResponse.json(apiSuccess(data, meta as never), { status });
}
export function created<T>(data: T) {
  return ok(data, undefined, 201);
}
export function handleError(error: unknown) {
  if (error instanceof ApiError)
    return NextResponse.json(apiError(error.message, error.details), { status: error.status });
  console.error('[API Error]', error);
  return NextResponse.json(apiError('Internal server error'), { status: 500 });
}
