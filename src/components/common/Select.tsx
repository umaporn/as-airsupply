import React from 'react';

interface SelectProps {
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

const Select = ({
  name,
  options,
  required,
  disabled,
  placeholder,
}: SelectProps) => {
  return (
    <>
      <label className="text-gray-700 block text-xs font-medium">
        {placeholder} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        required={required}
        disabled={disabled}
        className={`focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full rounded-md border text-base ${
          disabled ? 'cursor-not-allowed bg-gray-100' : 'bg-white'
        } border-gray-300 py-2 pl-3 pr-10 focus:outline-none sm:text-xs`}
      >
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
