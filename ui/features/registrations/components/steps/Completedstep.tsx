'use client';

import { CheckCircle2, Trophy, Medal, Hash, Building2, UserPlus, Home } from 'lucide-react';
import { Button } from '@/ui/design-system/primitives/Button';
import type { RegistrationFormData } from '@/ui/features/registrations/types/Registration.types';

// ─── Props ────────────────────────────────────────────────────

interface CompletedStepProps {
  formData: RegistrationFormData;
  enrollId: number | null;
  onAddMore: () => void;
  onGoHome: () => void;
}

// ─── Component ────────────────────────────────────────────────

export function CompletedStep({ formData, enrollId, onAddMore, onGoHome }: CompletedStepProps) {
  const displayName = formData.fullNameKhmer || formData.fullNameEnglish || 'អ្នកចូលរួម';

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <SuccessHeader displayName={displayName} enrollId={enrollId} />
      <RegistrationSummary formData={formData} displayName={displayName} />
      <AddMoreSection onAddMore={onAddMore} />

      <div className="flex justify-center">
        <Button variant="outline" size="lg" onClick={onGoHome} className="min-w-44">
          <Home className="h-4 w-4" />
          ទំព័រដើម
        </Button>
      </div>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────

function SuccessHeader({
  displayName,
  enrollId,
}: {
  displayName: string;
  enrollId: number | null;
}) {
  return (
    <div className="space-y-4 py-8 text-center">
      <div className="flex justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-green-700">បានចុះឈ្មោះដោយជោគជ័យ!</h2>
      <p className="text-slate-600">
        <span className="font-semibold text-slate-900">{displayName}</span> បានចុះឈ្មោះរួចរាល់
      </p>
      {enrollId && (
        <p className="text-sm text-slate-500">
          លេខសម្គាល់: <span className="font-mono font-semibold">#{enrollId}</span>
        </p>
      )}
    </div>
  );
}

function RegistrationSummary({
  formData,
  displayName,
}: {
  formData: RegistrationFormData;
  displayName: string;
}) {
  const pills: { icon: React.ReactNode; label: string }[] = [
    { icon: <Medal className="h-3.5 w-3.5 text-emerald-600" />, label: formData.sportName || '—' },
    {
      icon: <Hash className="h-3.5 w-3.5 text-emerald-600" />,
      label: formData.categoryName || '—',
    },
    {
      icon: <Building2 className="h-3.5 w-3.5 text-emerald-600" />,
      label: formData.organizationName || '—',
    },
  ];

  return (
    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <Trophy className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-emerald-700 uppercase">
            សង្ខេបការចុះឈ្មោះ
          </p>
          <p className="text-lg font-semibold text-slate-900">{displayName}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {pills.map(({ icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700"
          >
            {icon}
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function AddMoreSection({ onAddMore }: { onAddMore: () => void }) {
  return (
    <div className="space-y-4 rounded-xl border border-blue-200 bg-blue-50 p-6 text-center">
      <h3 className="font-semibold text-slate-800">ចង់ចុះឈ្មោះអ្នកផ្សេងទៀតទេ?</h3>
      <Button onClick={onAddMore} className="bg-blue-600 text-white hover:bg-blue-700" size="lg">
        <UserPlus className="h-5 w-5" />
        ចុះឈ្មោះអ្នកបន្ថែម
      </Button>
    </div>
  );
}
