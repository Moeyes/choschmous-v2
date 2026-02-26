// 'use client';

// import { StepSidebar } from '@/ui/components/navigation/StepSidebar';
// import { useSurveySteps } from './hooks/useSurveySteps';

// export function SurveySidebar() {
//   const { stepsWithState, stepsLength, navigateToStep } = useSurveySteps();

//   return (
//     <StepSidebar
//       title="Survey Steps"
//       steps={stepsWithState.map((s) => ({
//         id: s.param,
//         label: s.displayLabel,
//         index: s.index,
//         isActive: s.isActive,
//         isCompleted: s.isCompleted,
//         isAccessible: s.isAccessible,
//         icon: s.icon,
//       }))}
//       totalSteps={stepsLength}
//       onNavigate={navigateToStep}
//     />
//   );
// }
