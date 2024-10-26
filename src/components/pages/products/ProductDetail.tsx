'use client';
import ResponsiveImage from '@/components/common/Image';
import Button from '@/components/common/Button';
import React from 'react';
import AddItemButton from './AddItemButton';

interface ProductDetailProps {
  productName: string;
  price: number;
  productId: string;
  description: string;
  imgSrc: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  productName,
  price,
  productId,
  description,
  imgSrc,
}) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:space-x-16">
        <div className="">
          <ResponsiveImage
            desktopSrc={imgSrc}
            mobileSrc={imgSrc}
            alt={productName}
            className="w-full rounded-md"
          />
          <div className="mx-8 mt-4 flex justify-between">
            <ResponsiveImage
              desktopSrc={imgSrc}
              mobileSrc={imgSrc}
              alt={`${productName} thumbnail 1`}
              className="h-auto w-32 border-gray shadow-md"
            />
            <ResponsiveImage
              desktopSrc={imgSrc}
              mobileSrc={imgSrc}
              alt={`${productName} thumbnail 2`}
              className="h-auto w-32 border-gray shadow-md"
            />
            <ResponsiveImage
              desktopSrc={imgSrc}
              mobileSrc={imgSrc}
              alt={`${productName} thumbnail 3`}
              className="h-auto w-32 border-gray shadow-md"
            />
          </div>
        </div>
        <div>
          <h1 className="font-bsru-reg mt-4 text-center text-lg font-semibold text-purple">
            {productName}
          </h1>
          <p className="font-taviraj-reg text-center text-lg font-bold">
            {price.toLocaleString('th-TH')} ฿
          </p>

          <p className="mt-6">{description}</p>

          <div className="">
            <AddItemButton />
          </div>
          <div className="mt-6 text-center">
            <div className="mb-2">
              สั่งซื้อสินค้าง่ายๆ พร้อมรับสิทธิพิเศษเพียงแอดไลน์
            </div>
            <Button
              backgroundColor="bg-green"
              icon="LineIcon"
              textColor="text-white"
              borderColor="border-green"
              hoverBackgroundColor="hover:bg-green"
              paddingX="2"
              paddingY="0"
              isWidthFull={false}
              onClick={() => {
                console.log('Button clicked');
              }}
            >
              สั่งด่วน กดติดต่อ @as-airsupply
            </Button>
            <button className="bg-green-500 rounded-md px-6 py-2 text-white">
              สั่งด่วน กดติดต่อ @as-airsupply
            </button>
          </div>

          <div className="mt-8 border-t pt-4">
            <p className="text-sm">จัดส่งฟรีในพื้นที่กรุงเทพฯและปริมณฑล</p>
            <p className="text-sm">ขนาดแอร์: 100-110 ซม.</p>
            <p className="text-sm">หมวดหมู่: ดอกไม้สด</p>
          </div>
          <div className="mt-8 bg-gray-400 p-4">
            <h2 className="font-semibold">หมายเหตุ</h2>
            <ul className="mt-4 list-inside list-disc text-gray-100">
              <li>จัดส่งแอร์ฟรีทั่วกรุงเทพฯและปริมณฑล</li>
              <li>แอร์จัดด้วยดอกไม้สดคุณภาพสูง</li>
              <li>ขนาดโดยประมาณ 100-110 ซม.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
