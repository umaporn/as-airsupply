'use client';
import React from 'react';
import Button from '@/components/common/Button';
import FilterSelect from '@/components/common/FilterSelect';

import ProductFilter from '@/components/pages/products/Filter';
import ProductCard from '@/components/pages/products/Card';
import Pagination from '@/components/common/Pagination';
const ProductSection = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 hidden p-4 md:col-span-3 md:block">
          <ProductFilter />
        </div>
        <div className="col-span-12 md:col-span-9">
          <FilterSelect />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <ProductCard sku="0111" price={1490} />
            <ProductCard sku="0111" price={1490} />
            <ProductCard sku="0111" price={1490} />
            <ProductCard sku="0111" price={1490} />
            <ProductCard sku="0111" price={1490} />
            <ProductCard sku="0111" price={1490} />
            <ProductCard sku="0111" price={1490} />
            <ProductCard sku="0111" price={1490} />
            <ProductCard sku="0111" price={1490} />
          </div>
          <div className="flex items-center justify-center px-4 py-8 md:hidden">
            <Pagination currentPage={1} totalPages={10} />
          </div>
          <div className="mt-4 flex justify-center">
            <Button
              backgroundColor="bg-purple"
              icon="LineIcon"
              textColor="text-white"
              borderColor="border-purple-100"
              hoverBackgroundColor="hover:bg-purple-100"
              paddingX="8"
              paddingY="0.5"
              isWidthFull={true}
              onClick={() => {
                console.log('Button clicked');
              }}
            >
              สั่งด่วน @as-airsupply
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
