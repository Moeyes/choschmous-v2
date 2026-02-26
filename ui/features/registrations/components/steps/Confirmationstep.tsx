'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/ui/design-system/primitives/Button';
import { SectionCard, StepHeader, InfoRow } from '@/ui/components/layout/LayoutPrimitives';
import { submitRegistrationAction } from '../../actions/submitRegistration';
import { GENDER_LABELS, ROLE_LABELS } from '../../types/Registration.types';
import type {
  RegistrationFormData,
  LeaderRole,
  PositionRole,
} from '../../types/Registration.types';

// ─── Props ────────────────────────────────────────────────────

interface ConfirmationStepProps {
  formData: RegistrationFormData;
  onEdit: (step: number) => void;
  onSuccess: (enrollId: number) => void;
}

// ─── Helpers ──────────────────────────────────────────────────

function resolveRoleLabel(formData: RegistrationFormData): string {
  if (formData.role === 'Athlete') return ROLE_LABELS.Athlete;
  if (formData.role === 'Leader' || formData.role === 'Technical') {
    return ROLE_LABELS[formData.leaderRole as LeaderRole] ?? formData.leaderRole;
  }
  return '—';
}

// ─── Component ────────────────────────────────────────────────

export function ConfirmationStep({ formData, onEdit, onSuccess }: ConfirmationStepProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      // File objects are not serialisable — strip them before sending to server action
      const { photoUpload, nationalityDocumentUpload, ...payload } = formData;
      const result = await submitRegistrationAction(payload, null, null);

      if (result.success && result.enrollId) {
        onSuccess(result.enrollId);
      } else {
        setError(result.error ?? 'ការដាក់ស្នើបរាជ័យ');
      }
    } catch {
      setError('ការដាក់ស្នើបរាជ័យ');
    } finally {
      setLoading(false);
    }
  };

  const roleLabel = resolveRoleLabel(formData);

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <StepHeader title="បញ្ជាក់ការចុះឈ្មោះ" subtitle="សូមពិនិត្យព័ត៌មានមុនបញ្ជូន" />

      <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
        <AlertCircle className="h-4 w-4 shrink-0" />
        <span>ពិនិត្យព័ត៌មានឱ្យបានត្រឹមត្រូវ</span>
      </div>

      {/* Event & Sport summary */}
      <SectionCard title="ព្រឹត្តិការណ៍ និង កីឡា">
        <InfoRow label="ព្រឹត្តិការណ៍" value={formData.eventName} onEdit={() => onEdit(0)} />
        <InfoRow label="ស្ថាប័ន" value={formData.organizationName} onEdit={() => onEdit(1)} />
        <InfoRow label="កីឡា" value={formData.sportName} onEdit={() => onEdit(2)} />
        <InfoRow label="ប្រភេទ" value={formData.categoryName} onEdit={() => onEdit(3)} />
      </SectionCard>

      {/* Personal info summary */}
      <SectionCard title="ព័ត៌មានផ្ទាល់ខ្លួន">
        <InfoRow label="ឈ្មោះ (ខ្មែរ)" value={formData.fullNameKhmer} onEdit={() => onEdit(4)} />
        <InfoRow label="ឈ្មោះ (ឡាតាំង)" value={formData.fullNameEnglish} onEdit={() => onEdit(4)} />
        <InfoRow
          label="ភេទ"
          value={GENDER_LABELS[formData.gender as keyof typeof GENDER_LABELS] ?? formData.gender}
          onEdit={() => onEdit(4)}
        />
        <InfoRow label="ថ្ងៃកំណើត" value={formData.dateOfBirth} onEdit={() => onEdit(4)} />
        <InfoRow label="លេខអត្តសញ្ញាណ" value={formData.nationalID} onEdit={() => onEdit(4)} />
        <InfoRow label="ទូរស័ព្ទ" value={formData.phone} onEdit={() => onEdit(4)} />
        <InfoRow label="តួនាទី" value={roleLabel} onEdit={() => onEdit(4)} />
        <InfoRow
          label="រូបថត"
          value={formData.photoUpload ? '✓ បានបញ្ចូល' : 'មិនទាន់'}
          onEdit={() => onEdit(4)}
        />
        <InfoRow
          label="ឯកសារ"
          value={formData.nationalityDocumentUpload ? '✓ បានបញ្ចូល' : 'មិនទាន់'}
          onEdit={() => onEdit(4)}
        />
      </SectionCard>

      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="flex justify-center gap-3 pt-2">
        <Button variant="outline" onClick={() => onEdit(4)} disabled={loading}>
          កែសម្រួល
        </Button>
        <Button onClick={handleSubmit} disabled={loading} className="min-w-40">
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">⏳</span>
              កំពុងបញ្ជូន...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              បញ្ជាក់ ចុះឈ្មោះ
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}
