import { register } from '@/api/auth';
import { AlreadyRegisterLink } from '@/app/register/components/already-registered-link/already-registered-link';
import { InputField } from '@/components/InputFields/InputFields.jsx';
import { PasswordInput } from '@/components/PasswordInputs/PasswordInputs';
import { Button } from '@/components/SubmitButton/SubmitButtons';
import './register-form.scss';

export const RegisterForm = () => {
  const handleRegisterSubmit = async formData => {
    const registerData = {
      username: formData.get('username')?.toString(),
      email: formData.get('email')?.toString(),
      password: formData.get('password')?.toString(),
    };
    console.log(registerData);
    await register(registerData);
  };

  return (
    <div className="container">
      <h1>Registration</h1>
      <form className="registerForm" action={handleRegisterSubmit}>
        <div className="labels">
          <InputField label="Username" name="username" placeholder="Username" />
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
        <AlreadyRegisterLink />
      </form>
    </div>
  );
};
