import './InputFields.scss';

export const InputField = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
}) => (
  <label htmlFor={name}>
    {label}
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </label>
);
