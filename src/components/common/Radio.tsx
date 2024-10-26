import React from 'react';

interface RadioProps {
  name: string;
  label: string;
  required: boolean;
  disabled: boolean;
}

const Radio = ({ name, label, required, disabled }: RadioProps) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
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

export default Radio;
