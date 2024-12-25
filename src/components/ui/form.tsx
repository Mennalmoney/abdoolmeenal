import React from 'react';
import { cn } from '../../lib/utils';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function FormField({ label, error, className, ...props }: FormFieldProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        className={cn(
          'block w-full rounded-md border-gray-300 shadow-sm',
          'focus:border-blue-500 focus:ring-blue-500 sm:text-sm',
          error && 'border-red-300',
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
}

export function SelectField({
  label,
  error,
  options,
  className,
  ...props
}: SelectFieldProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        className={cn(
          'block w-full rounded-md border-gray-300 shadow-sm',
          'focus:border-blue-500 focus:ring-blue-500 sm:text-sm',
          error && 'border-red-300',
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}