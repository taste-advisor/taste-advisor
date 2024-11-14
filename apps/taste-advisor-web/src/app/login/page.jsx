'use client';

import { LoginLogo } from '@/app/login/components/login-logo/login-logo';
import { LoginForm } from '@/app/login/components/login-form/login-form';
import './login-page.scss';

export default function LoginPage() {
  return (
    <div className="loginBackground">
      <div className="loginPage">
        <LoginForm />
        <LoginLogo />
      </div>
    </div>
  );
}
