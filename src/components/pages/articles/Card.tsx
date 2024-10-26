import React from 'react';
import ResponsiveImage from '@/components/common/Image';
interface ArticleCardProps {
  imageUrl: string;
  title: string;
}

const ArticleCard = ({ imageUrl, title }: ArticleCardProps) => {
  return (
    <div className="w-full p-4 sm:w-1/2 md:w-1/3 ">
      <div className="overflow-hidden bg-white">
        <div className="relative">
          <ResponsiveImage
            desktopSrc={imageUrl}
            mobileSrc={imageUrl}
            alt="Product Image"
            className="w-full"
          />
          <div className="absolute bottom-0 left-0 w-full bg-purple bg-opacity-50 px-4 py-2 text-white">
            <p className={`text-xxxs md:text-xs20`}>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
