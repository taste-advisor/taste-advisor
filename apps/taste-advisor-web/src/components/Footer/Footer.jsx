import { Logo } from '@/components/Logo/Logo';
import { Navigation } from '@/components/Navigation/Navigation';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className="footer">
      <Logo className="logo" />
      <Navigation />
    </div>
  );
};
