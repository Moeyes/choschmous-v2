'use client';

import { Input } from '@/ui/design-system/primitives/Input';
import { Field, NativeSelect } from '@/ui/components/layout/FormControls';
import {
  SectionCard,
  StepHeader,
  ActionFooter,
  Grid,
} from '@/ui/components/layout/LayoutPrimitives';
import { PhotoUpload, NationalityDocumentUpload } from '../shared/Uploads';
import {
  GENDER_OPTIONS,
  NATIONALITY_OPTIONS,
  LEADER_ROLE_OPTIONS,
} from '@/ui/features/registrations/types/Registration.types';
import type {
  StepProps,
  Gender,
  LeaderRole,
  AthleteCategory,
} from '@/ui/features/registrations/types/Registration.types';

// ─── Component ────────────────────────────────────────────────

export function PersonalInfoStep({ formData, setFields, errors, onNext }: StepProps) {
  const isAthlete = formData.role === 'Athlete';

  return (
    <div className="space-y-5">
      <StepHeader title="ព័ត៌មានផ្ទាល់ខ្លួន" subtitle="បំពេញព័ត៌មានអ្នកចូលរួម" />

      <NameSection formData={formData} setFields={setFields} errors={errors} />
      <IdentitySection formData={formData} setFields={setFields} errors={errors} />
      <ContactSection formData={formData} setFields={setFields} errors={errors} />
      <RoleSection
        formData={formData}
        setFields={setFields}
        errors={errors}
        isAthlete={isAthlete}
      />
      <DocumentsSection formData={formData} setFields={setFields} errors={errors} />

      <div className="sticky bottom-4 z-10">
        <SectionCard className="backdrop-blur-sm">
          <ActionFooter
            showBack={false}
            onNext={onNext}
            nextLabel="បន្តទៅការពិនិត្យ"
            nextDisabled={!formData.fullNameKhmer && !formData.fullNameEnglish}
          />
        </SectionCard>
      </div>
    </div>
  );
}

// ─── Section: Name ────────────────────────────────────────────

function NameSection({
  formData,
  setFields,
  errors,
}: Pick<StepProps, 'formData' | 'setFields' | 'errors'>) {
  return (
    <SectionCard title="ឈ្មោះ">
      <Grid cols={2}>
        <Field label="ឈ្មោះ (ខ្មែរ)" error={errors.fullNameKhmer}>
          <Input
            placeholder="ឈ្មោះពេញ"
            value={formData.fullNameKhmer}
            onChange={(e) => setFields({ fullNameKhmer: e.target.value })}
          />
        </Field>
        <Field label="ឈ្មោះ (ឡាតាំង)">
          <Input
            placeholder="Full name"
            value={formData.fullNameEnglish}
            onChange={(e) => setFields({ fullNameEnglish: e.target.value })}
          />
        </Field>
      </Grid>
    </SectionCard>
  );
}

// ─── Section: Identity ────────────────────────────────────────

function IdentitySection({
  formData,
  setFields,
  errors,
}: Pick<StepProps, 'formData' | 'setFields' | 'errors'>) {
  return (
    <SectionCard title="អត្តសញ្ញាណ">
      <Grid cols={2}>
        <Field label="ភេទ" error={errors.gender}>
          <NativeSelect
            value={formData.gender}
            onChange={(v) => setFields({ gender: v as Gender, athleteCategory: v as Gender })}
            options={GENDER_OPTIONS}
            placeholder="ជ្រើសភេទ"
          />
        </Field>
        <Field label="ជាតិសញ្ជាតិ">
          <NativeSelect
            value={formData.nationality}
            onChange={(v) => setFields({ nationality: v })}
            options={[...NATIONALITY_OPTIONS]}
            placeholder="ជ្រើស"
          />
        </Field>
      </Grid>
    </SectionCard>
  );
}

// ─── Section: Contact & DOB ───────────────────────────────────

function ContactSection({
  formData,
  setFields,
  errors,
}: Pick<StepProps, 'formData' | 'setFields' | 'errors'>) {
  return (
    <SectionCard title="កំណើត និង ទំនាក់ទំនង">
      <Grid cols={3}>
        <Field label="ថ្ងៃកំណើត" error={errors.dateOfBirth}>
          <Input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => setFields({ dateOfBirth: e.target.value })}
          />
        </Field>
        <Field label="លេខអត្តសញ្ញាណ" error={errors.nationalID}>
          <Input
            placeholder="xxxxxxxxxxxxxx"
            value={formData.nationalID}
            onChange={(e) => setFields({ nationalID: e.target.value })}
          />
        </Field>
        <Field label="ទូរស័ព្ទ" error={errors.phone}>
          <Input
            placeholder="0xx xxx xxx"
            value={formData.phone}
            onChange={(e) => setFields({ phone: e.target.value })}
          />
        </Field>
      </Grid>
    </SectionCard>
  );
}

// ─── Section: Role ────────────────────────────────────────────

interface RoleSectionProps extends Pick<StepProps, 'formData' | 'setFields' | 'errors'> {
  isAthlete: boolean;
}

function RoleSection({ formData, setFields, errors, isAthlete }: RoleSectionProps) {
  const handleLeaderRoleChange = (value: string) => {
    setFields({ role: 'Leader', leaderRole: value as LeaderRole, athleteCategory: '' });
  };

  const handleAthleteToggle = (checked: boolean) => {
    if (checked) {
      setFields({
        role: 'Athlete',
        leaderRole: '',
        // AthleteCategory is 'Male' | 'Female' — same values as Gender
        athleteCategory: formData.gender as AthleteCategory,
      });
    } else {
      setFields({ role: '', athleteCategory: '' });
    }
  };

  return (
    <SectionCard title="តួនាទី">
      <Grid cols={2}>
        <Field label="តួនាទី (អ្នកដឹកនាំ)">
          <NativeSelect
            value={formData.role === 'Leader' ? formData.leaderRole : ''}
            disabled={isAthlete}
            onChange={handleLeaderRoleChange}
            options={LEADER_ROLE_OPTIONS}
            placeholder="ជ្រើសតួនាទី"
          />
        </Field>

        <label className="flex h-10 cursor-pointer items-center gap-3 self-end rounded-xl border border-slate-200 bg-slate-50 px-4">
          <input
            type="checkbox"
            checked={isAthlete}
            className="h-4 w-4 rounded accent-indigo-600"
            onChange={(e) => handleAthleteToggle(e.target.checked)}
          />
          <div>
            <p className="text-sm font-medium text-slate-800">ជាកីឡាករ / កីឡាការិនី</p>
            <p className="text-xs text-slate-500">ត្រូវគ្នានឹងភេទ</p>
          </div>
        </label>
      </Grid>

      {errors.role && <p className="mt-1 text-xs text-red-600">{errors.role}</p>}
    </SectionCard>
  );
}

// ─── Section: Documents ───────────────────────────────────────

function DocumentsSection({
  formData,
  setFields,
  errors,
}: Pick<StepProps, 'formData' | 'setFields' | 'errors'>) {
  return (
    <SectionCard title="ឯកសារ">
      <Grid cols={2} gap={6}>
        <Field error={errors.photoUpload}>
          <PhotoUpload
            file={formData.photoUpload}
            onChange={(f) => setFields({ photoUpload: f })}
          />
        </Field>
        <Field error={errors.nationalityDocumentUpload}>
          <NationalityDocumentUpload
            file={formData.nationalityDocumentUpload}
            onChange={(f) => setFields({ nationalityDocumentUpload: f })}
          />
        </Field>
      </Grid>
    </SectionCard>
  );
}
