'use client';
import Button from '@/components/common/Button';
import ResponsiveImage from '@/components/common/Image';
import Link from 'next/link';
import React from 'react';

interface ProductCardProps {
  sku: string;
  price: number;
}

const ProductCard = ({ sku, price }: ProductCardProps) => {
  return (
    <div className="mx-auto rounded-lg p-4 xs:p-1">
      <Link href="#">
        <ResponsiveImage
          desktopSrc="/images/product-img.webp"
          mobileSrc="/images/product-img.webp"
          alt="Product"
          className="w-full"
        />
      </Link>
      <div className="mt-4 flex items-center justify-center">
        <p className="mr-2 text-3xs md:text-xs">รหัส</p>
        <p className="font-taviraj-reg text-3xs font-bold text-purple md:text-xs">
          {sku}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <p className="mr-2 text-3xs md:text-xs">ราคา</p>
        <p className="font-taviraj-reg text-3xs font-bold text-purple md:text-xs">
          {price.toLocaleString()}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-1 pt-2 xs:space-x-0 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Button
          backgroundColor="bg-purple"
          icon={null}
          textColor="text-white"
          borderColor="border-purple-100"
          hoverBackgroundColor="hover:bg-purple-100"
          paddingX="0"
          paddingY="0"
          isWidthFull={false}
          onClick={() => {
            console.log('Button clicked');
          }}
        >
          เลือกลงตะกร้า
        </Button>
        <Button
          backgroundColor="bg-white"
          icon={null}
          textColor="text-purple"
          borderColor="border-purple"
          hoverBackgroundColor="hover:bg-gray-400"
          paddingX="0"
          paddingY="0"
          isWidthFull={false}
          onClick={() => {
            console.log('Button clicked');
          }}
        >
          ดูรายละเอียด
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
