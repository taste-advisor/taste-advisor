import { useState } from 'react';
import { register } from '@/api/auth';
import { LoginLink } from '@/components/LoginLink/LoginLink.jsx';
import { InputField } from '@/components/InputFields/InputFields.jsx';
import { PasswordInput } from '@/components/PasswordInputs/PasswordInputs';
import { Button } from '@/components/SubmitButton/SubmitButtons';
import './register-form.scss';

export const RegisterForm = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleRegisterSubmit = async event => {
    console.log(formData.password.length);
    event.preventDefault();
    setError(null);

    if (!formData.username || !formData.email) {
      setError('*All fields are required!');
      return;
    }

    const registerData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    try {
      await register(registerData);
      window.location.replace('/');
    } catch (err) {
      setError('*There was an error registering, please try again later.');
    }
  };

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <h1>Registration</h1>
      <form className="registerForm" onSubmit={handleRegisterSubmit}>
        <div className="labels">
          <InputField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Username"
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <PasswordInput
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
          {error && <p className="errorMessage">{error}</p>}
          <Button type="submit" className="submitButton">
            Sign up
          </Button>
        </div>
        <div className="alreadyRegistered">
          <p> Already have an account? </p>
          <LoginLink />
        </div>
      </form>
    </div>
  );
};
