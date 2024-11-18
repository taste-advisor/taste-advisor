import './SubmitButtons.scss';

export const Button = ({
  type = 'button',
  onClick,
  children,
  disabled = false,
}) => (
  <button type={type} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);
