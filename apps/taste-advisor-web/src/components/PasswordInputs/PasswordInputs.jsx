import usePasswordToggle from '@/hooks/usePasswordToggle';

export const PasswordInput = ({ name, placeholder }) => {
  const { inputType, eyeIcon, toggleVisibility } = usePasswordToggle();

  return (
    <label htmlFor="password">
      Password
      <div className="password">
        <input
          className="passwordInput"
          name={name}
          type={inputType}
          placeholder={placeholder}
        />
        <img
          className="passwordIcon"
          src={eyeIcon}
          onClick={toggleVisibility}
          alt="toggle visibility"
        />
      </div>
    </label>
  );
};
