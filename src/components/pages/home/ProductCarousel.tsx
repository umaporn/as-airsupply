import React from 'react';
import ProductCard from '../products/Card';
import Swiper from '@/components/common/Swiper';
import { SwiperSlide } from 'swiper/react';

interface CarouselProps {
  products: { sku: string; price: number }[] | null;
  uniqueId: string;
}

const ProductCarousel = ({ products, uniqueId }: CarouselProps) => {
  return (
    <div className="carousel-container mx-auto w-full md:w-5/6">
      <Swiper navigation uniqueId={uniqueId}>
        {products && products.length > 0 ? (
          products.map((product) => (
            <SwiperSlide key={product.sku}>
              <ProductCard sku={product.sku} price={product.price} />
            </SwiperSlide>
          ))
        ) : (
          <>
            {[...Array(8)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="w-50 mx-auto h-full rounded-lg border-2 p-4 shadow-lg xs:p-1">
                  TBC
                </div>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
