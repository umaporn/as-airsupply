import React from 'react';
import ProductCard from './Card';
import Swiper from '@/components/common/Swiper';
import { SwiperSlide } from 'swiper/react';

interface CarouselProps {
  products: { sku: string; price: number }[];
}

const ProductCarousel = ({ products }: CarouselProps) => {
  return (
    <div className="carousel-container mx-auto w-full md:w-5/6">
      <Swiper navigation uniqueId={''}>
        {products.map((product) => (
          <SwiperSlide key={product.sku}>
            <ProductCard sku={product.sku} price={product.price} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
