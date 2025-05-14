import { forwardRef } from 'react';

interface TextFieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

// Forward ref so React Hook Form can control it
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  id,
  label,
  type = 'text',
  required = false,
  error,
  className = '',
  placeholder = '',
  disabled = false,
  value,
  onChange,
  name,
}, ref) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className={`form-label ${required ? 'required' : ''}`}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        ref={ref}
        className={`form-input ${error ? 'border-error' : ''}`}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      {error && <p className="form-error">{error}</p>}
    </div>
  );
});

export default TextField;
