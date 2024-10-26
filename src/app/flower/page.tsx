import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumb, SampleCard, Pagination } from '@/components/common/';
import Content from '@/components/pages/flower/Content';

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

const breadcrumbItems = [
  { href: '/', label: 'หน้าหลัก' },
  { href: '#', label: 'ร้านดอกไม้' },
];

const services = [
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'รูปตัวอย่างดอกไม้',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'รูปตัวอย่างดอกไม้',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'รูปตัวอย่างดอกไม้',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'รูปตัวอย่างดอกไม้',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'รูปตัวอย่างดอกไม้',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'รูปตัวอย่างดอกไม้',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'รูปตัวอย่างดอกไม้',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'รูปตัวอย่างดอกไม้',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'รูปตัวอย่างดอกไม้',
  },
];

const Flower = () => {
  return (
    <>
      <div className="container flex flex-col space-y-4 px-[24px] py-4 pt-8 md:px-[72px]">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-center text-sm font-bold text-purple md:text-xl">
          บริการจัดช่อดอกไม้/จัดดอกไม้นอกสถานที่ FRUITNFLORA™
        </h1>
        <Content />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {services.map((service, index) => (
            <SampleCard imageUrl={service.imageUrl} title={service.title} />
          ))}
        </div>
        <div className="flex items-center justify-center px-4 py-8">
          <Pagination currentPage={1} totalPages={10} />
        </div>
      </div>
    </>
  );
};

export default Flower;
