import { useState } from 'react';

const useCopyToClipboard = () => {
  const [copiedClassName, setCopiedClassName] = useState<string | null>(null);

  const handleCopyClassName = (className: string) => {
    navigator.clipboard
      .writeText(className)
      .then(() => {
        setCopiedClassName(className);
        setTimeout(() => setCopiedClassName(null), 2000);
      })
      .catch((err) => console.error('Failed to copy text: ', err));
  };

  return { copiedClassName, handleCopyClassName };
};

export default useCopyToClipboard;
