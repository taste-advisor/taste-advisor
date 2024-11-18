export const Button = ({
  type = 'button',
  onClick,
  className,
  children,
  disabled = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={className}
    disabled={disabled}
  >
    {children}
  </button>
);
