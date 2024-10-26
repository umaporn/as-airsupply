import React from 'react';

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  disabled: boolean;
}

const Input = ({ type, name, placeholder, required, disabled }: InputProps) => {
  return (
    <>
      <label className="block text-xs font-medium text-gray">
        {placeholder} {required && <span className="text-red">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full rounded-md border ${
          disabled ? 'cursor-not-allowed bg-gray-100' : 'bg-white'
        } border-gray-300 px-3 py-2 shadow-sm focus:outline-none sm:text-xs`}
      />
    </>
  );
};

export default Input;
