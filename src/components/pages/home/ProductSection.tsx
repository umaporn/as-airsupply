'use client';
import Button from '@/components/common/Button';
import ProductCarousel from './ProductCarousel';
import React from 'react';

const products = [
  { sku: 'A001', price: 1590 },
  { sku: 'B002', price: 1490 },
  { sku: 'C003', price: 1390 },
  { sku: 'C004', price: 1290 },
  { sku: 'C005', price: 1190 },
  { sku: 'C005', price: 1190 },
  { sku: 'C005', price: 1190 },
  { sku: 'C005', price: 1190 },
];

const priceRanges = [
  {
    label: 'ราคาประหยัด ไม่เกิน 1,500',
    minPrice: 0,
    maxPrice: 1500,
  },
  {
    label: '1,500-2,000',
    minPrice: 1500,
    maxPrice: 2000,
  },
  {
    label: '2,000-2,500',
    minPrice: 2000,
    maxPrice: 2500,
  },
  {
    label: '2,500-3,000',
    minPrice: 2500,
    maxPrice: 3000,
  },
  {
    label: 'ราคา 3,000 ขึ้นไป',
    minPrice: 3000,
    maxPrice: null,
  },
  {
    label: 'สินค้าดอกไม้สดทั้งหมด',
    category: 'fresh_flowers',
  },
];

const description =
  'สินค้ายอดนิยมที่หลาย ๆ ท่านมอบให้ผู้วายชนม์ด้วยความเคารพ ความคิดถึง ความรักความผูกพัน และอาลัยต่อการจากไปของผู้ล่วงลับ อีกทั้งยังเป็นสิ่งที่ทำให้ผู้รับมอบหรือเจ้าภาพรู้สึกอุ่นใจ เสมือนว่าผู้มอบนั้นได้มอบกำลังใจให้และคอยอยู่เคียงข้างกันเสมอในช่วงเวลาโศกเศร้าเสียใจจากการสูญเสียคนที่รักไป';

type ProductSectionProps = {
  title: string;
  hasButton: boolean;
  displayPriceRange: boolean;
  displayDescription: boolean;
  titleAlign?: string;
};

const ProductSection = ({
  title,
  hasButton,
  displayPriceRange = true,
  displayDescription = true,
  titleAlign = 'center',
}: ProductSectionProps) => {
  return (
    <section className="md:py8 container mx-auto py-2">
      <h3
        className={`text-bold text-${titleAlign} text-base text-purple md:text-lg`}
      >
        {title}
      </h3>
      {displayDescription ? (
        <p className="mb-6 text-center">{description}</p>
      ) : null}
      {displayPriceRange ? (
        <div className="mb-8 flex justify-center">
          <ul className="mx-2 flex flex-wrap justify-center text-3xs text-gray md:text-2xs">
            {priceRanges.map((range, index) => (
              <li key={index} className="mb-2 w-fit px-2 sm:mb-0 sm:w-auto">
                <a
                  href="#"
                  className={`relative block pr-2 hover:underline focus:outline-none ${
                    index !== priceRanges.length - 1
                      ? 'pr-3 after:absolute after:right-0 after:top-1/2 after:h-4 after:w-[1px] after:-translate-y-1/2 after:bg-gray-100 after:content-[""]'
                      : ''
                  }`}
                >
                  {range.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <ProductCarousel products={products} uniqueId={title} />
      {hasButton ? (
        <div className="mt-4 flex justify-center">
          <Button
            backgroundColor="bg-purple"
            icon="LineIcon"
            textColor="text-white"
            borderColor="border-purple-100"
            hoverBackgroundColor="hover:bg-purple-100"
            paddingX="8"
            paddingY="0.5"
            onClick={() => {
              console.log('Button clicked');
            }}
            isWidthFull={false}
          >
            สั่งด่วน @as-airsupply
          </Button>
        </div>
      ) : null}
    </section>
  );
};

export default ProductSection;
