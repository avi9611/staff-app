import { forwardRef } from 'react';
import { Calendar } from 'lucide-react';

interface DateFieldProps {
  id: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  className?: string;
  disabled?: boolean;
  name?: string;
}

const DateField = forwardRef<HTMLInputElement, DateFieldProps>(({
  id,
  label,
  value,
  onChange,
  required = false,
  error,
  className = '',
  disabled = false,
  name
}, ref) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className={`form-label ${required ? 'required' : ''}`}>
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type="date"
          ref={ref}
          value={value}
          onChange={onChange}
          className={`form-input pr-10 ${error ? 'border-error' : ''}`}
          required={required}
          disabled={disabled}
        />
        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 pointer-events-none" />
      </div>
      {error && <p className="form-error">{error}</p>}
    </div>
  );
});

export default DateField;
