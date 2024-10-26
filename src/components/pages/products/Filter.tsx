import React from 'react';
import Link from 'next/link';
import Checkbox from '@/components/common/Checkbox';
const filterConfigs = [
  {
    name: 'ช่วงราคา',
    options: [
      { value: 2000, label: '0 - 2,000', name: '' },
      { value: 3000, label: '2,000 - 3,000', name: '' },
      { value: 4000, label: '3,000 - 4,000', name: '' },
      { value: 4001, label: '4,000 - ขึ้นไป', name: '' },
    ],
  },
  {
    name: 'ขนาด',
    options: [
      { value: 'S', label: 'S', name: '' },
      { value: 'M', label: 'M', name: '' },
      { value: 'L', label: 'L', name: '' },
      { value: 'XL', label: 'XL', name: '' },
      { value: 'XXL', label: 'XXL', name: '' },
    ],
  },
  {
    name: 'ประเภท',
    options: [
      { value: 'ดอกไม้สด', label: 'ดอกไม้สด', name: '' },
      { value: 'ผ้า', label: 'ผ้า', name: '' },
    ],
  },
  {
    name: 'สี',
    options: [
      { value: 'แดง', label: 'แดง', name: '#F00E0E' },
      { value: 'ชมพู', label: 'ชมพู', name: '#F00EBC' },
      { value: 'ฟ้า', label: 'ฟ้า', name: '#0EE7F0' },
      { value: 'ส้ม', label: 'ส้ม', name: '#F0990E' },
    ],
  },
];

const ProductFilter = () => {
  return (
    <div className="w-full bg-gray-light">
      {filterConfigs.map((config) => (
        <div key={config.name}>
          <h3 className="mb-2 bg-purple-100 p-2 text-sm text-white">
            {config.name}
          </h3>
          <ul className="space-y-2">
            {config.options.map((option) => (
              <li key={option.value} className="border-b border-gray-300">
                <Link
                  href={`/${config.name}/${option.value}`}
                  passHref
                  className="text-bold text-purple hover:underline"
                >
                  {config.name !== 'สี' ? (
                    <div className="flex justify-between">
                      <span className="px-2">{option.label}</span>
                      <Checkbox
                        name={undefined}
                        label={undefined}
                        required={undefined}
                        disabled={undefined}
                      />
                    </div>
                  ) : (
                    <div className="flex justify-between">
                      <div>
                        <div
                          style={{
                            display: 'inline-block',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            margin: '0px 5px',
                            backgroundColor: option.name || undefined,
                          }}
                        ></div>
                        <span>{option.label}</span>
                      </div>
                      <Checkbox
                        name={undefined}
                        label={undefined}
                        required={undefined}
                        disabled={undefined}
                      />
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductFilter;
