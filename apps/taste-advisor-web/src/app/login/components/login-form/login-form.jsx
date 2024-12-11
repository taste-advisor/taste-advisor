import './login-form.scss';
import { useState } from 'react';
import { login } from '@/api/auth';
import { RegisterLink } from '@/components/RegisterLink/RegisterLink.jsx';
import { InputField } from '@/components/InputFields/InputFields';
import { PasswordInput } from '@/components/PasswordInputs/PasswordInputs';
import { Button } from '@/components/SubmitButton/SubmitButtons';

export const LoginForm = () => {
  const [error, setError] = useState(null);

  const handleLoginSubmit = async event => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.target);
    const loginData = {
      email: formData.get('email')?.toString(),
      password: formData.get('password')?.toString(),
    };

    try {
      await login(loginData);
      window.location.replace('/');
    } catch (err) {
      setError('*Incorrect email or password.');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form className="loginForm" onSubmit={handleLoginSubmit}>
        <div className="labels">
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <PasswordInput name="password" placeholder="Enter your password" />
          {error && <p className="errorMessage">{error}</p>}
          <Button type="submit" className="submitButton">
            Log in
          </Button>
        </div>
        <div className="registeredLink">
          <p> Don`t have an account yet? </p>
          <RegisterLink />
        </div>
      </form>
    </div>
  );
};
