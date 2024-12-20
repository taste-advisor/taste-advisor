'use client';

import { Logo } from '@/components/Logo/Logo.jsx';
import { LoginForm } from '@/app/login/components/login-form/login-form';
import './login-page.scss';

export default function LoginPage() {
  return (
    <div className="loginBackground">
      <div className="loginPage">
        <Logo className="loginLogo" />
        <LoginForm />
      </div>
    </div>
  );
}
