import React from 'react';
import ResponsiveImage from '@/components/common/Image';
interface SampleCardProps {
  imageUrl: string;
  title: string;
}

const SampleCard = ({ imageUrl, title }: SampleCardProps) => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative">
        <ResponsiveImage
          desktopSrc={imageUrl}
          mobileSrc={imageUrl}
          alt="Product Image"
          className="w-full"
        />
        <div className="absolute bottom-0 left-0 w-full bg-purple bg-opacity-50 px-4 py-2 text-white">
          <p className="text-3xs xl:text-base">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default SampleCard;
