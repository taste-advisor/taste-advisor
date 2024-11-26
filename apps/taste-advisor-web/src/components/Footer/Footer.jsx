'use client';

import { Logo } from '@/components/Logo/Logo';
import { Navigation } from '@/components/Navigation/Navigation';
import { usePathname } from 'next/navigation';
import './Footer.scss';

export const Footer = () => {
  const pathname = usePathname();

  const noFooterPaths = ['/login', '/register'];

  if (noFooterPaths.includes(pathname)) {
    return null;
  }

  return (
    <div className="footer">
      <Logo className="logo" />
      <Navigation />
    </div>
  );
};
