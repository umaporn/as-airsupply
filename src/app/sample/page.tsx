import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Breadcrumb, ResponsiveImage, Pagination } from '@/components/common';
import ReviewCard from '@/components/pages/sample/ReviewCard';

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
  { href: '#', label: 'ตัวอย่างแอร์' },
];

const reviews = [
  {
    imageUrl: '/images/review-card.webp',
    title: 'แอร์ประเภท',
    code: '0112',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4,
  },
  {
    imageUrl: '/images/review-card.webp',
    title: 'แอร์ประเภท',
    code: '0113',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 5,
  },
  {
    imageUrl: '/images/review-card.webp',
    title: 'แอร์ประเภท',
    code: '0114',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 3,
  },
  {
    imageUrl: '/images/review-card.webp',
    title: 'แอร์ประเภท',
    code: '0112',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4,
  },
  {
    imageUrl: '/images/review-card.webp',
    title: 'แอร์ประเภท',
    code: '0113',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 5,
  },
  {
    imageUrl: '/images/review-card.webp',
    title: 'แอร์ประเภท',
    code: '0114',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 3,
  },
  {
    imageUrl: '/images/review-card.webp',
    title: 'แอร์ประเภท',
    code: '0112',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4,
  },
  {
    imageUrl: '/images/review-card.webp',
    title: 'แอร์ประเภท',
    code: '0113',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 5,
  },
  {
    imageUrl: '/images/review-card.webp',
    title: 'แอร์ประเภท',
    code: '0114',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 3,
  },
];

const Sample = () => {
  return (
    <>
      <div className="container flex flex-col space-y-4 px-[24px] py-4 pt-8 md:px-[72px]">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-center text-sm font-bold text-purple md:text-xl">
          ตัวอย่างแอร์
        </h1>
        <Link href="#">
          <ResponsiveImage
            desktopSrc="/images/banner-desktop.webp"
            mobileSrc="/images/banner-mobile.webp"
            alt="Banner"
            className="w-full"
          />
        </Link>
        <div className="space-y-6 py-10">
          <div>
            <h2 className="font-bold text-purple">
              บริการส่งแอร์ที่ลูกค้าไว้วางใจ
            </h2>
            <div>
              ร้านแอร์ “หรีดมาลา” (as-airsupply™)
              ยินดีเป็นอย่างยิ่งที่ได้เป็นผู้ให้บริการจัดส่งแอร์
              และส่งมอบความอาลัยของท่านแด่ผู้ที่ล่วงลับ
              เราผลิตสินค้าทุกชิ้นด้วยความตั้งใจแรงกล้าที่อยากให้ลูกค้าทุกท่านได้รับบริการที่ดีที่สุด
              และนี่คือตัวอย่างของลูกค้าที่ให้ความไว้วางใจและใช้บริการของร้านเรา
            </div>
          </div>

          <div>
            <h2 className="font-bold text-purple">รูปแบบแอร์</h2>
            <div>
              ร้านเรามีสินค้าหลากหลายรูปแบบ ไม่ว่าจะเป็นแอร์ประเภท พัดลม ผ้า
              และอื่น ๆ อีกมากมาย สามารถเลือกชมแอร์ได้ตามต้องการ
            </div>
          </div>

          <div>
            <h2 id="section-1" className="font-bold text-purple">
              การสั่งซื้อแอร์
            </h2>
            <div>
              หากท่านต้องการสั่งซื้อแอร์สามารถคลิก สั่งแอร์ ได้เลย
              หรือติดต่อสอบถามข้อมูลทางเบอร์โทรศัพท์ หรือ LINE เพื่อความรวดเร็ว
              ทางร้านเรามีพนักงานคอยดูแลอยู่ตลอดเวลา ร้านแอร์ “หรีดมาลา”
              พร้อมให้บริการ
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard
              imageUrl={review.imageUrl}
              title={review.title}
              code={review.code}
              description={review.description}
              rating={review.rating}
            />
          ))}
        </div>
        <div className="flex items-center justify-center px-4 py-8">
          <Pagination currentPage={1} totalPages={10} />
        </div>
      </div>
    </>
  );
};

export default Sample;
