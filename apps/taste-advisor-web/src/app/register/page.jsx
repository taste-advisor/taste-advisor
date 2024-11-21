'use client';

import { Logo } from '@/components/Logo/Logo.jsx';
import { RegisterForm } from '@/app/register/components/register-form/register-form';
import './register-page.scss';

export default function RegisterPage() {
  return (
    <div className="registerBackground">
      <div className="registerPage">
        <Logo />
        <RegisterForm />
      </div>
    </div>
  );
}
