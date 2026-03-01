import type { PaginationParams } from '@/types/common';
export function toPageMeta(total: number, { page = 1, pageSize = 20 }: PaginationParams) {
  return { total, page, pageSize, totalPages: Math.ceil(total / pageSize) };
}
