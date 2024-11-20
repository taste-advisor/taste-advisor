import { RegisterLink } from '@/components/RegisterLink/RegisterLink.jsx';
import { LoginLink } from '@/components/LoginLink/LoginLink';
import './unautorized-menu.scss';

export const UnautorizedMenu = () => {
  return (
    <div className="unautorizedMenu">
      <RegisterLink className="registerLink" />
      <LoginLink className="loginLink" />
    </div>
  );
};
