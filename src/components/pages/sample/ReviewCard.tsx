import React from 'react';
import ResponsiveImage from '@/components/common/Image';
import Star from '/public/images/svg/star-ico.svg';

interface ReviewCardProps {
  imageUrl: string;
  title: string;
  code: string;
  description: string;
  rating: number;
}

const ReviewCard = ({
  imageUrl,
  title,
  code,
  description,
  rating,
}: ReviewCardProps) => {
  return (
    <>
      <div className="overflow-hidden bg-white">
        <div className="relative">
          <ResponsiveImage
            desktopSrc={imageUrl}
            mobileSrc={imageUrl}
            alt="Product"
            className="w-full"
          />
          <div className="py-4">
            <h2 className="text-xs font-semibold">
              {title} รหัส {code}
            </h2>
            <div className="mt-4 flex items-center">
              {Array.from({ length: rating }).map((_, index) => (
                <Star
                  key={index}
                  className={` ${
                    index < rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600 mt-2 text-2xs">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
