// components/DynamicForm.js

import React from 'react';
import Input from '../../common/Input';
import Checkbox from '../../common/Checkbox';
import Radio from '../../common/Radio';
import Select from '../../common/Select';

const formFields = [
  {
    type: 'text',
    name: 'wat_name',
    placeholder: 'กรุณาระบุชื่อวัด',
    required: true,
    disabled: true,
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'Enter your email',
    required: true,
    disabled: false,
  },
  { type: 'password', name: 'password', placeholder: 'Enter your password' },
  {
    type: 'checkbox',
    name: 'acceptTerms',
    label: 'I accept the terms and conditions',
    required: true,
  },
  {
    type: 'radio',
    name: 'bankTransfer',
    label: 'โอนเงินผ่านบัญชีธนาคาร',
    required: true,
  },
  {
    type: 'select',
    name: 'country',
    label: 'Select your country',
    options: [
      { value: 'usa', label: 'USA' },
      { value: 'canada', label: 'Canada' },
    ],
  },
];

const DynamicForm = () => {
  return (
    <>
      <form className="space-y-4">
        {formFields.map((field, index) => {
          switch (field.type) {
            case 'text':
            case 'email':
            case 'password':
              return (
                <Input
                  key={index}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder || ''}
                  required={field.required || false}
                  disabled={field.disabled || false}
                />
              );
            case 'checkbox':
              return (
                <Checkbox
                  key={index}
                  name={field.name}
                  label={field.label || ''}
                  required={field.required || false}
                  disabled={field.disabled || false}
                />
              );
            case 'radio':
              return (
                <Radio
                  key={index}
                  name={field.name}
                  label={field.label || ''}
                  required={field.required || false}
                  disabled={field.disabled || false}
                />
              );
            case 'select':
              return (
                <Select
                  key={index}
                  name={field.name}
                  options={field.options || []}
                  placeholder={field.label}
                  required={field.required}
                  disabled={field.disabled}
                />
              );
            default:
              return null;
          }
        })}
      </form>
    </>
  );
};

export default DynamicForm;
