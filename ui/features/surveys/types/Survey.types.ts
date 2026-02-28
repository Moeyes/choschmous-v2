export interface SurveyFormData {
  eventTypeId: string;    eventTypeName: string;
  eventId: string;        eventName: string;
  organizationId: string; organizationName: string;
  sportIds: string[];     sportNames: string[];
}
export type SurveyErrors = Partial<Record<keyof SurveyFormData | 'sports', string>>;
export interface StepProps {
  formData: SurveyFormData;
  setFields: (p: Partial<SurveyFormData>) => void;
  errors: SurveyErrors;
  onNext: (override?: Partial<SurveyFormData>) => void;
}
export interface EventItem { id: number; name: string; type?: string; startDate?: string; location?: string; }
export interface OrgItem   { id: number; name: string; type: string; code?: string | null; }
export interface SportItem { id: number; name: string; }
