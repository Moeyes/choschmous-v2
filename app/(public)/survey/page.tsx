import { SurveyWizard } from '@/ui/features/surveys/components/SurveyWizard';

export default function SurveyPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-teal-50 via-white to-cyan-50">
      <div className="mx-auto max-w-6xl">
        <SurveyWizard />
      </div>
    </main>
  );
}
