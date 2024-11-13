import {useState, useEffect} from 'react'
import { register } from "@/api/auth";
import {AlreadyRegisterLink} from "@/app/register/components/already-registered-link/already-registered-link";
import "./register-form.scss"

export const RegisterForm = () => {

  const handleRegisterSubmit = async formData => {
    const registerData = {
      username: formData.get('username')?.toString(),
      email: formData.get('email')?.toString(),
      password: formData.get('password')?.toString(),
    };
    await register(registerData);
  };

  const [isClicked, setIsClicked] = useState(false);
  const [eyeIcon, setEyeIcon] = useState("/images/visibility-off.png");

  const handleClickEyeIcon = () => {
    setIsClicked(prevState => !prevState);
  };

  useEffect(() => {
    setEyeIcon(isClicked ? "/images/visibility.png" : "/images/visibility-off.png");
  }, [isClicked]);

  return (
    <div className="container">
      <h1>Registration</h1>
      <form className="register-form" action={handleRegisterSubmit}>
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
              <input className="password-input" type={isClicked ? "text" : "password"} placeholder="Password" />
              <img className="password-icon" src={eyeIcon} onClick={handleClickEyeIcon}/>
            </div>
          </label>
          <button type="submit"> Sign up</button>
        </div>
        <AlreadyRegisterLink />
      </form>
    </div>
  );
}