import './login-form.scss';
import { login } from '@/api/auth';
import { RegisterLink } from '@/app/login/components/register-link/register-link';
import { InputField } from '@/components/InputFields/InputFields';
import { PasswordInput } from '@/components/PasswordInputs/PasswordInputs';
import { Button } from '@/components/SubmitButton/SubmitButtons';

export const LoginForm = () => {
  const handleLoginSubmit = async formData => {
    const loginData = {
      email: formData.get('email')?.toString(),
      password: formData.get('password')?.toString(),
    };
    await login(loginData);
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form className="loginForm" action={handleLoginSubmit}>
        <div className="labels">
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <PasswordInput name="password" placeholder="Enter your password" />
          <Button type="submit" className="submitButton">
            Sign up
          </Button>
        </div>
        <RegisterLink />
      </form>
    </div>
  );
};
