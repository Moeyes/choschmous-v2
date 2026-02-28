// 'use client';

// import { useStepWizard, WizardStep } from '@/ui/components/navigation/useStepWizard';
// import { RegistrationSidebar } from './RegistrationSidebar';
// import { AnimatePresence, motion } from 'framer-motion';
// import { Button } from '@/ui/design-system/primitives/Button';
// import { LucideIcon } from 'lucide-react';

// // // --- Import your step components ---
// // import { EventStep } from './steps/EventStep';
// // import { OrganizationStep } from './steps/OrganizationStep';
// // import { SportStep } from './steps/SportStep';
// // import { CategoryStep } from './steps/CategoryStep';
// // import { PersonalInfoStep } from './steps/PersonalInfoStep';
// // import { ConfirmationStep } from './steps/ConfirmationStep';
// // import { CompletedStep } from './steps/CompletedStep';

// export function RegistrationWizard() {
//   // const steps: WizardStep[] = [
//   //   { key: 'events', label: 'Events', component: <EventStep /> },
//   //   { key: 'organization', label: 'Organization', component: <OrganizationStep /> },
//   //   { key: 'sport', label: 'Sport', component: <SportStep /> },
//   //   { key: 'category', label: 'Category', component: <CategoryStep /> },
//   //   { key: 'personal-info', label: 'Personal Info', component: <PersonalInfoStep /> },
//   //   { key: 'confirmation', label: 'Confirmation', component: <ConfirmationStep /> },
//   //   { key: 'action', label: 'Completed', component: <CompletedStep /> },
//   // ];

//   const steps: WizardStep[] = [
//     { key: 'events', label: 'ព្រឹត្តិការណ៍', component: <div>Events Step</div> },
//     { key: 'organization', label: 'អង្គភាព', component: <div>Organization Step</div> },
//     { key: 'sport', label: 'កីឡា', component: <div>Sport Step</div> },
//     { key: 'category', label: 'ប្រភេទ', component: <div>Category Step</div> },
//     { key: 'personal-info', label: 'ព័ត៌មានផ្ទាល់ខ្លួន', component: <div>Personal Info Step</div> },
//     { key: 'confirmation', label: 'បញ្ជាក់', component: <div>Confirmation Step</div> },
//     { key: 'action', label: 'បញ្ចប់', component: <div>Completed Step</div> },
//   ];

//   const wizard = useStepWizard(steps);

//   const goTobyKey = (key: string) => {
//     const idx = steps.findIndex((s) => s.key === key);
//     if (idx !== -1) wizard.goToStep(idx);
//   };

//   return (
//     <div className="reg-split-layout min-h-[80vh]">
//       <RegistrationSidebar
//         steps={wizard.stepsWithState.map((step, index) => ({
//           key: step.key,
//           label: step.label,
//           index: step.index,
//           isActive: step.isActive,
//           isCompleted: step.isCompleted,
//           isAccessible: step.isAccessible,

//           icon: (steps[index]?.icon ?? null) as LucideIcon,
//           completedIcon: undefined, 
//         }))}
//         activeIndex={wizard.activeIndex}
//         gotoStep={wizard.goToStep}
//         gotoStepByKey={goTobyKey}
//         prevStep={wizard.prevStep}
//         nextStep={wizard.nextStep}
//       />

//       {/* Content */}
//       <div className="reg-content p-6">
//         <AnimatePresence mode="wait" initial={false}>
//           <motion.div
//             key={wizard.activeIndex}
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -40 }}
//             transition={{ type: 'tween', duration: 0.45, ease: 'easeInOut' }}
//           >
//             {wizard.stepsWithState[wizard.activeIndex].component}
//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation buttons */}
//         <div className="mt-6 flex justify-between">
//           <Button onClick={wizard.prevStep} disabled={wizard.activeIndex === 0}>
//             ត្រលប់
//           </Button>
//           <Button onClick={wizard.nextStep}>បន្ត</Button>
//         </div>
//       </div>
//     </div>
//   );
// }


// 'use client';

// // import { useStepWizard, WizardStep } from '@/ui/components/navigation/useStepWizard';
// // import { RegistrationSidebar } from './RegistrationSidebar';
// // import { AnimatePresence, motion } from 'framer-motion';
// // import { Button } from '@/ui/design-system/primitives/Button';
// // import { LucideIcon } from 'lucide-react';

// // // // --- Import your step components ---
// // // import { EventStep } from './steps/EventStep';
// // // import { OrganizationStep } from './steps/OrganizationStep';
// // // import { SportStep } from './steps/SportStep';
// // // import { CategoryStep } from './steps/CategoryStep';
// // // import { PersonalInfoStep } from './steps/PersonalInfoStep';
// // // import { ConfirmationStep } from './steps/ConfirmationStep';
// // // import { CompletedStep } from './steps/CompletedStep';

// // export function RegistrationWizard() {

// import { useStepWizard, WizardStep } from '@/ui/components/navigation/useStepWizard';
// import { RegistrationSidebar } from './RegistrationSidebar';
// import { AnimatePresence, motion } from 'framer-motion';
// import { Button } from '@/ui/design-system/primitives/Button';
// import { LucideIcon } from 'lucide-react';

// // Essential registration wizard component
// export function RegistrationForm() {
//   const steps: WizardStep[] = [
//     { key: 'events', label: 'ព្រឹត្តិការណ៍', component: <div>Events Step</div> },
//     { key: 'organization', label: 'អង្គភាព', component: <div>Organization Step</div> },
//     { key: 'sport', label: 'កីឡា', component: <div>Sport Step</div> },
//     { key: 'category', label: 'ប្រភេទ', component: <div>Category Step</div> },
//     { key: 'personal-info', label: 'ព័ត៌មានផ្ទាល់ខ្លួន', component: <div>Personal Info Step</div> },
//     { key: 'confirmation', label: 'បញ្ជាក់', component: <div>Confirmation Step</div> },
//     { key: 'action', label: 'បញ្ចប់', component: <div>Completed Step</div> },
//   ];

//   const wizard = useStepWizard(steps);

//   const goTobyKey = (key: string) => {
//     const idx = steps.findIndex((s) => s.key === key);
//     if (idx !== -1) wizard.goToStep(idx);
//   };

//   return (
//     <div className="reg-split-layout min-h-[80vh]">
//       <RegistrationSidebar
//         steps={wizard.stepsWithState.map((step, index) => ({
//           key: step.key,
//           label: step.label,
//           index: step.index,
//           isActive: step.isActive,
//           isCompleted: step.isCompleted,
//           isAccessible: step.isAccessible,
//           icon: (steps[index]?.icon ?? null) as LucideIcon,
//           completedIcon: undefined,
//         }))}
//         activeIndex={wizard.activeIndex}
//         gotoStep={wizard.goToStep}
//         gotoStepByKey={goTobyKey}
//         prevStep={wizard.prevStep}
//         nextStep={wizard.nextStep}
//       />
//       <div className="reg-content p-6">
//         <AnimatePresence mode="wait" initial={false}>
//           <motion.div
//             key={wizard.activeIndex}
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -40 }}
//             transition={{ type: 'tween', duration: 0.45, ease: 'easeInOut' }}
//           >
//             {wizard.stepsWithState[wizard.activeIndex].component}
//           </motion.div>
//         </AnimatePresence>
//         <div className="mt-6 flex justify-between">
//           <Button onClick={wizard.prevStep} disabled={wizard.activeIndex === 0}>
//             ត្រលប់
//           </Button>
//           <Button onClick={wizard.nextStep}>បន្ត</Button>
//         </div>
//       </div>
//     </div>
//   );
// }
// //           <Button onClick={wizard.nextStep}>បន្ត</Button>
