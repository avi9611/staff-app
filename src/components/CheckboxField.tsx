import { forwardRef } from 'react';

interface CheckboxFieldProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
  disabled?: boolean;
  name?: string;
}

const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(({
  id,
  label,
  checked,
  onChange,
  error,
  className = '',
  disabled = false,
  name
}, ref) => {
  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex items-center">
        <input
          id={id}
          name={name}
          type="checkbox"
          ref={ref}
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded"
          disabled={disabled}
        />
        <label htmlFor={id} className="ml-2 block text-sm text-neutral-700">
          {label}
        </label>
      </div>
      {error && <p className="form-error mt-1">{error}</p>}
    </div>
  );
});

export default CheckboxField;
