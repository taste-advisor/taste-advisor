import { register } from '@/api/auth';
import { AlreadyRegisterLink } from '@/app/register/components/already-registered-link/already-registered-link';
import usePasswordToggle from '@/hooks/usePasswordToggle';
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

  const { inputType, eyeIcon, toggleVisibility } = usePasswordToggle();

  return (
    <div className="container">
      <h1>Registration</h1>
      <form className="registerForm" action={handleRegisterSubmit}>
        <div className="labels">
          <label htmlFor="username">
            Username
            <input name="username" placeholder="Username" />
          </label>
          <label htmlFor="email">
            Email
            <input name="email" placeholder="Email" />
          </label>
          <label htmlFor="password">
            Password
            <div className="password">
              <input
                className="passwordInput"
                name="password"
                type={inputType}
                placeholder="Password"
              />
              <img
                className="passwordIcon"
                src={eyeIcon}
                onClick={toggleVisibility}
              />
            </div>
          </label>
          <button type="submit"> Sign up</button>
        </div>
        <AlreadyRegisterLink />
      </form>
    </div>
  );
};
