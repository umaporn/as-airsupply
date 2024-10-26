'use client';
import Carousel from './ProductCarousel';
import React from 'react';

const products = null;

const ProductSection = () => {
  return (
    <section className="container mx-auto py-8">
      <h2 className="mb-6 text-center text-sm font-bold text-purple md:text-lg">
        ขอขอบคุณลูกค้าที่ไว้วางใจ
      </h2>
      <Carousel products={products} uniqueId={''} />
    </section>
  );
};

export default ProductSection;
