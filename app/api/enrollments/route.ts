import { NextRequest, NextResponse } from 'next/server';

// FIX #1: Use the same env var name as registrations.repository.ts
const BACKEND = process.env.BACKEND_API_BASE_URL ?? 'http://127.0.0.1:8000';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await fetch(`${BACKEND}/api/enrollments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error('[POST /api/enrollments] Error:', err);
    return NextResponse.json(
      { detail: err instanceof Error ? err.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const res = await fetch(`${BACKEND}/api/v1/enrollments/`);
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error('[GET /api/enrollments] Error:', err);
    return NextResponse.json(
      { detail: err instanceof Error ? err.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
