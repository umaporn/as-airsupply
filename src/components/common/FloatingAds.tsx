'use client';
import { useState } from 'react';
import ResponsiveImage from './Image';

const FloatingAd = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeAd = () => {
    setIsVisible(false);
  };
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 bottom-4 right-0 z-50 md:right-4 ">
      <div className="relative mx-4 md:mx-0 ">
        <button
          onClick={closeAd}
          className="absolute right-1 top-0 text-md text-gray-100"
        >
          &times;
        </button>
        <div className="float-start w-full sm:w-[140px]">
          <ResponsiveImage
            desktopSrc="/images/floating-ads-desktop.webp"
            mobileSrc="/images/floating-ads-mobile.webp"
            alt="หรีดมาลา"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingAd;
