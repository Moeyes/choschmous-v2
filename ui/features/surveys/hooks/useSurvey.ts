'use client';
import { useCallback, useReducer } from 'react';
import type { SurveyFormData, SurveyErrors } from '../types/Survey.types';

const INITIAL: SurveyFormData = {
  eventTypeId: '', eventTypeName: '',
  eventId: '',     eventName: '',
  organizationId: '', organizationName: '',
  sportIds: [],    sportNames: [],
};

type Action = { type: 'SET'; payload: Partial<SurveyFormData> } | { type: 'RESET' };

function reducer(state: SurveyFormData, action: Action): SurveyFormData {
  switch (action.type) {
    case 'SET':   return { ...state, ...action.payload };
    case 'RESET': return INITIAL;
  }
}

export function validateSurveyStep(step: number, data: SurveyFormData): SurveyErrors {
  const e: SurveyErrors = {};
  if (step === 0 && !data.eventId)              e.eventId = 'សូមជ្រើសរើសព្រឹត្តិការណ៍';
  if (step === 1 && !data.organizationId)       e.organizationId = 'សូមជ្រើសរើសអង្គភាព';
  if (step === 2 && data.sportIds.length === 0) e.sports = 'សូមជ្រើសរើសកីឡាយ៉ាងហោចណាស់មួយ';
  return e;
}

export function useSurvey() {
  const [formData, dispatch] = useReducer(reducer, INITIAL);
  const setFields = useCallback((p: Partial<SurveyFormData>) => dispatch({ type: 'SET', payload: p }), []);
  const reset     = useCallback(() => dispatch({ type: 'RESET' }), []);
  return { formData, setFields, reset };
}
