import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { SUPPORTED_IMAGE_TYPES, MAX_UPLOAD_SIZE_MB } from '@/config/constants';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');
export type UploadResult = { url: string; filename: string };

export async function uploadFile(file: File, subfolder = ''): Promise<UploadResult> {
  if (!SUPPORTED_IMAGE_TYPES.includes(file.type)) throw new Error(`Unsupported file type: ${file.type}`);
  if (file.size > MAX_UPLOAD_SIZE_MB * 1024 * 1024) throw new Error(`File exceeds ${MAX_UPLOAD_SIZE_MB}MB limit`);
  const ext = file.name.split('.').pop();
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const dir = subfolder ? path.join(UPLOAD_DIR, subfolder) : UPLOAD_DIR;
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, filename), Buffer.from(await file.arrayBuffer()));
  return { filename, url: `/uploads/${subfolder ? subfolder + '/' : ''}${filename}` };
}
