import { NextRequest, NextResponse } from 'next/server';
import { uploadFile } from '@/infrastructure/storage/storage.service';

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get('file');
    const subfolder = (form.get('subfolder') as string) || 'registrations';
    const customFilename = (form.get('filename') as string) || undefined;

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const result = await uploadFile(file as File, subfolder, customFilename);
    return NextResponse.json({ url: result.url, filename: result.filename });
  } catch (err) {
    console.error('[POST /api/upload] Error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Upload failed' },
      { status: 500 }
    );
  }
}
