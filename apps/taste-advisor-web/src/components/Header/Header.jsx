'use client';

import { Logo } from '@/components/Logo/Logo.jsx';
import { UnauthorizedMenu } from '@/components/Header/components/unauthorized-menu';
import { AuthorizedMenu } from '@/components/Header/components/authorized-menu';
import { Navigation } from '@/components/Navigation/Navigation.jsx';
import { getToken } from '@/api/utils';
import { usePathname } from 'next/navigation';
import './Header.scss';

export const Header = () => {
  const pathname = usePathname();
  const noHeaderPaths = ['/login', '/register'];

  if (noHeaderPaths.includes(pathname)) {
    return null;
  }

  return (
    <div className="header">
      <Logo className="logo" />
      <Navigation />
      {getToken() ? <AuthorizedMenu /> : <UnauthorizedMenu />}
    </div>
  );
};
