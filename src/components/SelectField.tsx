import { forwardRef } from 'react';
import { SelectOption } from '../types/staff';

interface SelectFieldProps {
  id: string;
  label: string;
  options: SelectOption[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  error?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
}

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(({
  id,
  label,
  options,
  value,
  onChange,
  required = false,
  error,
  className = '',
  placeholder = 'Select an option',
  disabled = false,
  name
}, ref) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className={`form-label ${required ? 'required' : ''}`}>
        {label}
      </label>
      <select
        id={id}
        name={name}
        ref={ref}
        value={value}
        onChange={onChange}
        className={`form-select ${error ? 'border-error' : ''}`}
        required={required}
        disabled={disabled}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="form-error">{error}</p>}
    </div>
  );
});

export default SelectField;
