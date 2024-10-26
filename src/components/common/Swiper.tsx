'use client';
import React, { useRef, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper as SwiperContainer } from 'swiper/react';
import PrevArrow from '/public/images/svg/arrow-prev.svg';
import NextArrow from '/public/images/svg/arrow-next.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface SwiperProps {
  children: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  navigation?: boolean;
  pagination?: boolean;
  scrollbar?: boolean;
  uniqueId: string;
}

const Swiper = ({
  children,
  spaceBetween = 30,
  scrollbar = true,
  uniqueId,
}: SwiperProps) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const navigation: {
        prevEl: HTMLDivElement | null;
        nextEl: HTMLDivElement | null;
      } = {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      };
      return () => {
        navigation.prevEl = null;
        navigation.nextEl = null;
      };
    }
  }, []);

  return (
    <>
      <div className="swiper-container-wrapper relative">
        <SwiperContainer
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={spaceBetween}
          scrollbar={{ draggable: scrollbar }}
          navigation={{
            prevEl: `.custom-prev-arrow-${uniqueId}`,
            nextEl: `.custom-next-arrow-${uniqueId}`,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 2.5,
            },
          }}
          className={`swiper-container-${uniqueId}`}
        >
          {children}
        </SwiperContainer>
        <PrevArrow
          ref={prevRef}
          className={`custom-prev-arrow custom-prev-arrow-${uniqueId}`}
        />
        <NextArrow
          ref={nextRef}
          className={`custom-next-arrow custom-next-arrow-${uniqueId}`}
        />
      </div>
    </>
  );
};

export default Swiper;
