import { forwardRef } from 'react';

interface TextareaFieldProps {
  id: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: string;
  className?: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  name?: string;
}

const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(({
  id,
  label,
  value,
  onChange,
  required = false,
  error,
  className = '',
  placeholder = '',
  rows = 4,
  disabled = false,
  name
}, ref) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className={`form-label ${required ? 'required' : ''}`}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        ref={ref}
        value={value}
        onChange={onChange}
        className={`form-textarea ${error ? 'border-error' : ''}`}
        placeholder={placeholder}
        required={required}
        rows={rows}
        disabled={disabled}
      ></textarea>
      {error && <p className="form-error">{error}</p>}
    </div>
  );
});

export default TextareaField;
