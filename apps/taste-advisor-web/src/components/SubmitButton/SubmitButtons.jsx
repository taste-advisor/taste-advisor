import './SubmitButtons.scss';

export const Button = ({
  type = 'button',
  onClick,
  children,
  disabled = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className="submitButton"
  >
    {children}
  </button>
);
