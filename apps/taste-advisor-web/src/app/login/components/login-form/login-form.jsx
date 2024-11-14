import './login-form.scss';
import { login } from '@/api/auth';
import { RegisterLink } from '@/app/login/components/register-link/register-link';
import usePasswordToggle from '@/hooks/usePasswordToggle';

export const LoginForm = () => {
  const handleLoginSubmit = async formData => {
    const loginData = {
      email: formData.get('email')?.toString(),
      password: formData.get('password')?.toString(),
    };
    await login(loginData);
  };

  const { inputType, eyeIcon, toggleVisibility } = usePasswordToggle();

  return (
    <div className="container">
      <h1>Login</h1>
      <form className="loginForm" action={handleLoginSubmit}>
        <div className="labels">
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
          <button type="submit"> Log in</button>
        </div>
        <RegisterLink />
      </form>
    </div>
  );
};
