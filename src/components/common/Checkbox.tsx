import React from 'react';

interface CheckboxProps {
  name: string | undefined;
  label: string | undefined;
  required: boolean | undefined;
  disabled: boolean | undefined;
}

const Checkbox = ({ name, label, required, disabled }: CheckboxProps) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={name}
        required={required}
        disabled={disabled}
        className={`text-indigo-600 focus:ring-indigo-500 h-3 w-3 rounded border-gray-300 ${
          disabled ? 'cursor-not-allowed' : ''
        }`}
      />
      <label className="text-gray-900 ml-2 block text-xs">
        {label} {required && <span className="text-red">*</span>}
      </label>
    </div>
  );
};

export default Checkbox;
