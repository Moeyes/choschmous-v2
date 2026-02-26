export type ID = string;
export type Timestamps = { createdAt: Date; updatedAt: Date };
export type SortOrder = 'asc' | 'desc';
export type PaginationParams = { page?: number; pageSize?: number };
export type BaseFilters = PaginationParams & { search?: string; sortBy?: string; sortOrder?: SortOrder };
