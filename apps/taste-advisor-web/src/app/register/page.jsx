'use client';

import { RegisterLogo } from "@/app/register/components/register-logo/register-logo";
import {RegisterForm} from "@/app/register/components/register-form/register-form";
import "./register-page.scss"

export default function RegisterPage() {
  return (
    <div className="register-background">
      <div className="register-page">
        <RegisterLogo />
        <RegisterForm />
      </div>
    </div>
  )
}