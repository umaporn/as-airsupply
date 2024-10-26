import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import Link from 'next/link';
import ResponsiveImage from '@/components/common/Image';
import ServiceCard from '@/components/common/Card';
import Pagination from '@/components/common/Pagination';

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
  { href: '/', label: 'แอร์อื่นๆ' },
  {
    href: '#',
    label: 'จัดดอกไม้งานศพ ดอกไม้หน้าศพ / หน้าเมรุ',
  },
];

const services = [
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'บริการจัดดอกไม้งานศพแบบที่ 1',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'บริการจัดดอกไม้งานศพแบบที่ 1',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'บริการจัดดอกไม้งานศพแบบที่ 1',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'บริการจัดดอกไม้งานศพแบบที่ 1',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'บริการจัดดอกไม้งานศพแบบที่ 1',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'บริการจัดดอกไม้งานศพแบบที่ 1',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'บริการจัดดอกไม้งานศพแบบที่ 1',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'บริการจัดดอกไม้งานศพแบบที่ 1',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'บริการจัดดอกไม้งานศพแบบที่ 1',
  },
];

const Service = () => {
  return (
    <div className="container flex flex-col space-y-4 px-[24px] py-4 pt-8 md:px-[72px]">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-center text-sm font-bold text-purple md:text-xl">
        บริการจัดดอกไม้งานศพ
      </h1>
      <div className="space-y-6 py-10">
        <div>
          <span className="text-2xs font-bold text-purple md:text-md">
            ร้านแอร์ หรีดมาลา (as-airsupply™) รับบริการจัดดอกไม้งานศพ
            ดอกไม้หน้าศพ / หน้าเมรุ
          </span>
          ด้วยช่างฝีมือที่มีประสบการณ์มายาวนาน
          พร้อมด้วยดอกไม้ที่เราคัดสรรมาเป็นอย่างดี ประณีตทุกขั้นตอนการผลิต
          มั่นใจได้ว่าทุกความอาลัยจะถูกส่งไปถึงผู้ที่ลาลับไปแล้วอย่างแน่นอน
        </div>
        <div>
          หากต้องการติดต่อบริการจัดดอกไม้งานศพ หน้าศพ / หน้าเมรุ
          <span className="text-2xs font-bold text-purple md:text-md">
            โดยทางเจ้าหน้าที่จะประเมินราคาตามรูปแบบ หรือ
            ตามงบประมาณที่คุณต้องการ และจะติดต่อกลับให้เร็วที่สุดค่ะ
          </span>
        </div>
      </div>
      <div className="mx-auto text-center">
        มองหาบริการจัดดอกไม้งานศพ ไว้ใจ as-airsupply™
        ร้านแอร์ออนไลน์ที่ลูกค้าไว้วางใจ
      </div>
      <Link href="#">
        <ResponsiveImage
          desktopSrc="/images/banner-desktop.webp"
          mobileSrc="/images/banner-mobile.webp"
          alt="Banner"
          className="w-full"
        />
      </Link>
      <div className="text-bold py-4 text-2xs text-purple md:text-md">
        ตัวอย่าง งานบริการจัดดอกไม้งานศพ
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard imageUrl={service.imageUrl} title={service.title} />
        ))}
      </div>
      <div className="flex items-center justify-center px-4 py-8">
        <Pagination currentPage={1} totalPages={10} />
      </div>
    </div>
  );
};

export default Service;
