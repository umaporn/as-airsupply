import React from 'react';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import tailwindConfig from '../../../../tailwind.config';

const fontSizes = tailwindConfig.theme?.fontSize || {};

const Sizing = () => {
  const { copiedClassName, handleCopyClassName } = useCopyToClipboard();

  return (
    <>
      {Object.entries(fontSizes).map(([key, value]) => (
        <div key={key} className="mb-4">
          {/* Apply the font size using the style prop */}
          <span style={{ fontSize: value }} className="font-medium">
            Text {key.toUpperCase()}
          </span>
          <span style={{ fontSize: value }} className="ml-2">
            Size {value}
          </span>
          <p
            className="mt-1 cursor-pointer text-xs text-gray-300"
            onClick={() => handleCopyClassName(`text-${key}`)}
            title="Click to copy class name"
          >
            {copiedClassName === `text-${key}` ? 'Copied!' : `.text-${key}`}
          </p>
        </div>
      ))}
    </>
  );
};

export default Sizing;
