import React from 'react';
import type { Metadata } from 'next';
import { ResponsiveImage, Pagination } from '@/components/common/';

export const metadata: Metadata = {
  title: 'ร้านแอร์ หรีดมาลา ส่งแอร์ราคาย่อมเยา ส่งตรงถึงวัด',
  description:
    'ร้านแอร์ออนไลน์ บริการจัดส่งแอร์ที่เราคัดสรรมาอย่างดี ราคาเป็นมิตร สั่งซื้อง่าย จัดส่งไวอยู่ใกล้วัด จัดส่งฟรีทั่ว กทม. พร้อมโปรสุดพิเศษ',
  alternates: {
    canonical: 'https://www.as-airsupply.com/',
    languages: {
      'en-US': '/en-US',
      'th-TH': '/th-TH',
    },
  },
  openGraph: {
    url: 'https://www.as-airsupply.com/',
    type: 'website',
  },
};

const Articles = () => {
  return (
    <>
      <div className="container flex flex-col space-y-4 px-[24px] py-4 pt-8 md:px-[72px]">
        <h1 className="text-center text-sm font-bold text-purple md:text-xl">
          บทความ
        </h1>
        <div className="flex flex-col items-center justify-center px-4 py-8">
          <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="flex flex-col">
                <ResponsiveImage
                  desktopSrc="/images/thumbnail.webp"
                  mobileSrc="/images/thumbnail.webp"
                  alt="article"
                  className="w-full"
                />
                <p className="mt-2 text-purple">เกร็ดความรู้</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center px-4 py-8">
            <Pagination currentPage={1} totalPages={10} />
          </div>
          <div className="text-black">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At
              vero eos et accusamus et justo duo dolores et ea rebum. Stet clita
              kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
              amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              diam nonummy eirmod tempor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
