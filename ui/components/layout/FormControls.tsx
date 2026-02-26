/**
 * ui/design-system/primitives/FormControls.tsx
 *
 * WHAT: Core form building blocks used across the entire app.
 *
 * HOW TO USE:
 *
 *   import { Field, NativeSelect, FieldError } from '@/ui/design-system/primitives/FormControls'
 *
 *   // Wrap any input with a label + error
 *   <Field label="ឈ្មោះ" error={errors.name} required>
 *     <Input value={name} onChange={...} />
 *   </Field>
 *
 *   // Native select (no Radix dep, accessible, styled)
 *   <NativeSelect value={gender} onChange={setGender} options={GENDER_OPTIONS} placeholder="ជ្រើសភេទ" />
 *
 *   // Standalone error (when you need it outside Field)
 *   <FieldError message={errors.role} />
 */

import * as React from 'react';
import { cn } from '@/lib/utils/cn';

// ── FieldError ────────────────────────────────────────────────

interface FieldErrorProps {
  message?: string | null;
  className?: string;
}

export function FieldError({ message, className }: FieldErrorProps) {
  if (!message) return null;
  return (
    <p className={cn('mt-1 text-xs text-red-600', className)} role="alert">
      {message}
    </p>
  );
}

// ── Field ─────────────────────────────────────────────────────

interface FieldProps {
  label?: string;
  error?: string | null;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}

export function Field({ label, error, required, hint, children, className }: FieldProps) {
  return (
    <div className={cn('space-y-1.5', className)}>
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
          {required && <span className="ml-1 text-red-500" aria-hidden>*</span>}
          {hint && <span className="ml-2 text-xs font-normal text-slate-400">{hint}</span>}
        </label>
      )}
      {children}
      <FieldError message={error} />
    </div>
  );
}

// ── NativeSelect ──────────────────────────────────────────────

interface NativeSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  disabled?: boolean;
  error?: string | null;
  className?: string;
}

export function NativeSelect({
  value, onChange, options, placeholder, disabled, error, className,
}: NativeSelectProps) {
  return (
    <select
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      className={cn(
        'h-10 w-full rounded-md border border-input bg-background px-3 text-sm transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1',
        'disabled:cursor-not-allowed disabled:opacity-50',
        !value && 'text-muted-foreground',
        error && 'border-red-500 focus:ring-red-300',
        className,
      )}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}
