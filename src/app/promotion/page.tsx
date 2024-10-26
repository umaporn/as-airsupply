import { Breadcrumb } from '@/components/common';
import PromotionSection from '@/components/pages/promotion/ProductSection';
import HeaderContent from '@/components/pages/promotion/HeaderContent';
import React from 'react';
import type { Metadata } from 'next';
interface Promotion {
  id: number;
  name: string;
  price: number;
}

const breadcrumbItems = [
  { href: '/', label: 'หน้าหลัก' },
  { href: '#', label: 'โปรโมชั่น' },
];

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

const PromotionList = () => {
  return (
    <>
      <div className="container flex flex-col space-y-6 px-[24px] py-8 pt-8 md:px-[72px]">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-center text-sm font-bold text-purple md:text-xl">
          โปรโมชั่น
        </h1>
        <HeaderContent />
        <PromotionSection />
      </div>
    </>
  );
};

export default PromotionList;
