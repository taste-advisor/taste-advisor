import { RegisterLink } from '@/components/RegisterLink/RegisterLink.jsx';
import { LoginLink } from '@/components/LoginLink/LoginLink';
import './unauthorized-menu.scss';

export const UnauthorizedMenu = () => {
  return (
    <div className="unauthorizedMenu">
      <RegisterLink className="registerLink" />
      <LoginLink className="loginLink" />
    </div>
  );
};
