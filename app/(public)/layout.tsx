// app/(public)/layout.tsx
import { PublicTopBar } from '@/ui/components/navigation/PublicTopBar';
import { ROUTES } from '@/config/routes';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicTopBar
        links={[
          { label: 'Register', href: ROUTES.PUBLIC.REGISTER.event },
          { label: 'Survey', href: ROUTES.PUBLIC.SURVEY },
          { label: 'By Number', href: ROUTES.PUBLIC.BYNUMBER },
        ]}
      />
      {children}
    </>
  );
}
