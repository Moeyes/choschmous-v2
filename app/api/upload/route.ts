// app/api/upload/route.ts
// ─────────────────────────────────────────────────────────────────────────────
// Matches DB schema exactly:
//   enrollments.photo_path     → varchar  (one photo)
//   enrollments.documents_path → varchar  (one document path)
//   enrollments.user_id        → uuid     (used as the upload folder name)
//
// Files saved as:
//   public/uploads/enrollments/{uuid}/photo.{ext}
//   public/uploads/enrollments/{uuid}/document.{ext}
//
// Then PATCHes the enrollment with the saved paths.
// ─────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';
import { uploadFile } from '@/infrastructure/storage/storage.service';

const BACKEND_URL = (process.env.BACKEND_API_BASE_URL ?? 'http://127.0.0.1:8000').replace(
  /\/+$/,
  ''
);
const API = `${BACKEND_URL}/api`;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const enrollId = formData.get('enrollId');
    const uuid = formData.get('uuid');

    if (!enrollId || !uuid) {
      return NextResponse.json({ error: 'enrollId and uuid are required' }, { status: 400 });
    }

    // Sanitize uuid to prevent path traversal
    const safeUuid = String(uuid).replace(/[^a-zA-Z0-9_-]/g, '');
    if (!safeUuid || safeUuid !== String(uuid)) {
      return NextResponse.json({ error: 'Invalid uuid format' }, { status: 400 });
    }

    const subfolder = `enrollments/${safeUuid}`;
    const patch: Record<string, string> = {};

    // ── photo_path — single portrait photo ───────────────────────────────────
    const photo = formData.get('photo') as File | null;
    if (photo && photo.size > 0) {
      const ext = photo.name.split('.').pop() ?? 'jpg';
      const { url } = await uploadFile(photo, subfolder, `photo.${ext}`);
      patch.photo_path = url;
    }

    // ── documents_path — single verification document (varchar col) ──────────
    const doc = formData.get('document') as File | null;
    if (doc && doc.size > 0) {
      const ext = doc.name.split('.').pop() ?? 'pdf';
      const { url } = await uploadFile(doc, subfolder, `document.${ext}`);
      patch.documents_path = url;
    }

    // ── PATCH enrollment ──────────────────────────────────────────────────────
    if (Object.keys(patch).length > 0) {
      const patchRes = await fetch(`${API}/enrollments/${enrollId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patch),
      });

      if (!patchRes.ok) {
        const err = await patchRes.json().catch(() => ({ detail: 'PATCH failed' }));
        console.error('[upload] PATCH enrollment failed:', err);
        return NextResponse.json(
          { error: 'Files saved but enrollment update failed', detail: err.detail, ...patch },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({ ok: true, ...patch });
  } catch (err) {
    console.error('[upload] error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Upload failed' },
      { status: 500 }
    );
  }
}
