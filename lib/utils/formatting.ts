export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return '—';
  return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(date));
}
export function formatName(first: string, last: string) { return `${first} ${last}`.trim(); }
export function truncate(str: string, length = 40) { return str.length > length ? str.slice(0, length) + '…' : str; }
