'use client';
import React from 'react';
import FilterSelect from '@/components/common/FilterSelect';
import ProductFilter from '@/components/pages/products/Filter';
import ProductCard from '@/components/pages/products/Card';
import Pagination from '@/components/common/Pagination';
import FooterContent from './FooterContent';
import Link from 'next/link';
import ResponsiveImage from '@/components/common/Image';

const ProductSection = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 hidden p-4 md:col-span-3 md:block">
          <ProductFilter />
          <div className="py-8">
            <Link href="#">
              <ResponsiveImage
                desktopSrc="/images/banner258.webp"
                mobileSrc="/images/banner258.webp"
                alt="Banner"
                className="w-full"
              />
            </Link>
          </div>
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
          <div className="flex items-center justify-center px-4 py-8">
            <Pagination currentPage={1} totalPages={10} />
          </div>
          <FooterContent />
        </div>
      </div>
    </>
  );
};

export default ProductSection;
