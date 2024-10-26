import React from 'react';

interface FullWidthSectionProps {
  children: React.ReactNode;
}

const FullWidthSection = ({ children }: FullWidthSectionProps) => {
  return (
    <div className="w-full bg-purple-100">
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default FullWidthSection;
