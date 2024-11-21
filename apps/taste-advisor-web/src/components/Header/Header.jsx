import { Logo } from '@/components/Logo/Logo.jsx';
import { UnautorizedMenu } from '@/components/Header/components/unautorized-menu';
import { AutorizedMenu } from '@/components/Header/components/autorized-menu';
import { Navigation } from '@/components/Navigation/Navigation.jsx';
import { getToken } from '@/api/utils';
import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <Logo className="logo" />
      <Navigation />
      {getToken() ? <AutorizedMenu /> : <UnautorizedMenu />}
    </div>
  );
};
