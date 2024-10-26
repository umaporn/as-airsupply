import Breadcrumb from '@/components/common/Breadcrumb';
import ProductSection from '@/components/pages/products/ProductSection';
import HeaderContent from '@/components/pages/products/HeaderContent';
import React from 'react';
import type { Metadata } from 'next';
interface Product {
  id: number;
  name: string;
  price: number;
}

const breadcrumbItems = [
  { href: '/', label: 'หน้าหลัก' },
  { href: '#', label: 'แอร์ประเภท' },
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

const ProductList = () => {
  return (
    <>
      <div className="container flex flex-col space-y-6 px-[24px] py-8 pt-8 md:px-[72px]">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-center text-sm font-bold text-purple md:text-xl">
          แอร์ประเภท
        </h1>
        <HeaderContent />
        <ProductSection />
      </div>
    </>
  );
};

export default ProductList;
