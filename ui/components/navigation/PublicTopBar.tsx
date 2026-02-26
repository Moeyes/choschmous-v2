'use client';

import { useMobile } from '@/ui/hooks/useMobile';
import { Button } from '@/ui/design-system/primitives/Button';

import { Container } from '@/ui/components/layout/Container';
import { NavLink } from '@/ui/components/navigation/NavLink';
import { Dropdown } from '@/ui/components/navigation/Dropdown';
import { Logo } from '@/ui/components/navigation/Logo';

interface TopBarLink {
  label: string;
  href: string;
}

interface PublicTopBarProps {
  links: TopBarLink[];
}

export function PublicTopBar({ links }: PublicTopBarProps) {
  const isMobile = useMobile();

  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        {!isMobile ? (
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        ) : (
          <Dropdown
            trigger={
              <Button variant="ghost" size="sm">
                Menu
              </Button>
            }
          >
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </Dropdown>
        )}
      </Container>
    </header>
  );
}
