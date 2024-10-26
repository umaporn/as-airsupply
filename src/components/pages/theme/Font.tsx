import React from 'react';

import useCopyToClipboard from '@/hooks/useCopyToClipboard';

const Font = () => {
  const { copiedClassName, handleCopyClassName } = useCopyToClipboard();

  return (
    <div className="space-y-4">
      <div>
        <p className="font-kanit-reg text-md">This is a kanit font. หรีดมาลา</p>
        <p
          className="cursor-pointer text-xs text-gray-300"
          onClick={() => handleCopyClassName('.font-kanit-reg')}
          title="Click to copy class name"
        >
          {copiedClassName === '.font-kanit-reg'
            ? 'Copied!'
            : '.font-kanit-reg'}
        </p>
      </div>
      <div>
        <p className="font-bsru-reg text-md">
          This is a bansomdej font. หรีดมาลา
        </p>
        <p
          className="cursor-pointer text-xs text-gray-300"
          onClick={() => handleCopyClassName('.font-bsru-reg')}
          title="Click to copy class name"
        >
          {copiedClassName === '.font-bsru-reg' ? 'Copied!' : '.font-bsru-reg'}
        </p>
      </div>
      <div>
        <p className="font-taviraj-reg text-md">
          This is a taviraj font. หรีดมาลา
        </p>
        <p
          className="cursor-pointer text-xs text-gray-300"
          onClick={() => handleCopyClassName('.font-taviraj-reg')}
          title="Click to copy class name"
        >
          {copiedClassName === '.font-taviraj-reg'
            ? 'Copied!'
            : '.font-taviraj-reg'}
        </p>
      </div>
    </div>
  );
};

export default Font;
