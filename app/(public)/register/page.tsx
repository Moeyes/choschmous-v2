'use client';

import { RegistrationWizard } from '@/ui/features/registrations/components/RegistrationForm';

export default function RegisterPage() {
  return (
    <div className="px-8 py-10">
      <h1 className="mb-6 text-2xl font-semibold">Event Registration</h1>
      <RegistrationWizard />
    </div>
  );
}
