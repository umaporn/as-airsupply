import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import {
  Breadcrumb,
  ResponsiveImage,
  PaymentMethods,
} from '@/components/common/';
import ProductSection from '@/components/pages/temples/ProductSection';

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
  { href: '/temples', label: 'แอร์วัดดัง' },
  { href: '#', label: 'รายชื่อวัดทั้งหมด' },
];
const items = [
  { text: 'แอร์ วัดธาตุทอง', link: '/' },
  { text: 'แอร์ วัดธาตุทอง', link: '/' },
  { text: 'แอร์ วัดพระศรีมหาธาตุ', link: '/' },
  { text: 'แอร์ วัดพระศรีมหาธาตุ', link: '/' },
  { text: 'แอร์ วัดธาตุทอง', link: '/' },
  { text: 'แอร์ วัดหัวลำโพง', link: '/' },
  { text: 'แอร์ วัดธาตุทอง', link: '/' },
  { text: 'แอร์ วัดธาตุทอง', link: '/' },
  { text: 'แอร์ วัดพระศรีมหาธาตุ', link: '/' },
  { text: 'แอร์ วัดพระศรีมหาธาตุ', link: '/' },
  { text: 'แอร์ วัดธาตุทอง', link: '/' },
  { text: 'แอร์ วัดหัวลำโพง', link: '/' },
  { text: 'แอร์ วัดธาตุทอง', link: '/' },
  { text: 'แอร์ วัดธาตุทอง', link: '/' },
  { text: 'แอร์ วัดพระศรีมหาธาตุ', link: '/' },
  { text: 'แอร์ วัดพระศรีมหาธาตุ', link: '/' },
  { text: 'แอร์ วัดธาตุทอง', link: '/' },
  { text: 'แอร์ วัดหัวลำโพง', link: '/' },
];

const SalaList = [
  'ศาลา 1 เพ็ญ นิวาสภา',
  'ศาลา 2 พิณ บาลศรีน์',
  'ศาลา 3 วุฒ บุญประคบ',
  'ศาลา 4 ลักษ์ ลิยาพันธ์',
  'ศาลา 5 ศรีเนตร์พิทักษ์',
  'ศาลา 6 ม่วงจีจี๊',
  'ศาลา 7 มณีทองดิถีธการ',
  'ศาลา 8 วรรณสุพิน',
  'ศาลา 9 ชูนิวัฒน์',
  'ศาลา 10 สวนวิชาศฤตวัฒน์',
  'ศาลา 44 เสถียรไทย',
];
const TempleLanding = () => {
  return (
    <>
      <div className="container flex flex-col space-y-6 px-[24px] py-8 pt-8 md:px-[72px]">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-center text-sm font-bold text-purple md:text-xl">
          บริการจัดส่งแอร์ฟรี วัดธาตุทอง
        </h1>
        <div>
          ร้านหรีดมาลาให้บริการจัดส่งแอร์วัดธาตุทองติดต่อกันมาหลายปี
          ด้วยจุดเด่นด้านการบริการคุณภาพและความสวยงามที่ลูกค้าต่างไว้วางใจ
          เพราะเราใส่ใจในทุกขั้นตอนของการให้บริการ ด้วยแอร์วัสดุคัดพิเศษ
          มีให้เลือกหลากหลายแบบ ทั้งแบบดอกไม้สด แบบพัดลม แบบผ้า และแบบต้นไม้
          ตกแต่งอย่างพิถีพิถันจากช่างฝีมือสุดประณีต ในราคาคุ้มค่าที่สุด
          ทั้งยังสามารถสั่งแอร์ออนไลน์ถึงวัดธาตุทองได้อย่างรวดเร็วและรับประกันถึงก่อนเริ่มพิธีอย่างแน่นอนค่ะ
        </div>
        <ProductSection />
        <div className="space-y-4">
          <div className="text-sm font-bold text-purple md:text-lg">
            รายละเอียดวัดธาตุทอง
          </div>
          <div className="py-4 text-xs font-bold text-purple md:text-md">
            วีธีการเดินทางวัดธาตุทอง
          </div>
          <div>
            วัดธาตุทอง ตั้งอยู่บนถนนสุขุมวิท (ถัดจากซอยสุขุมวิท 63)
            แขวงพระโขนงเหนือ เขตวัฒนา อยู่ตรงกับสถานีรถไฟฟ้าเอกมัย
            การเดินทางที่สะดวกที่สุดคือใช้บริการรถไฟฟ้า ลงสถานีเอกมัย ทางออกที่
            3 หากลูกค้าท่านใดขับรถมา ทางวัดมีลานจอดรถหน้าวัดไว้คอยรองรับอีกด้วย
            หรืออีกหนึ่งทางเลือกคือ จอดรถไว้ที่ Major Cineplex Ekamai
            ก่อนถึงวัดธาตุทองหรือที่ศูนย์การค้า Gateway Ekamai ฝั่งตรงข้ามวัด
            และสุดท้ายคือ การเดินทางด้วยรถเมล์ที่ผ่านวัดธาตุทอง ได้แก่ สาย 2,
            23, 25, 38, 40, 48, 71, 72, 98, 501, 508, 511 และ 513 ค่ะ
          </div>

          <div className="py-4 text-xs font-bold text-purple md:text-md">
            ชื่อศาลา
          </div>
          <div className="py-2">ภายในวัดจะมีศาลาอยู่ 44 ศาลา</div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {SalaList.map((item, index) => (
              <div key={index} className={`order-${index + 1} text-left`}>
                {item}
              </div>
            ))}
          </div>
          <div className="py-4">
            ที่อยู่ : 1325 ถนนสุขุมวิท แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพมหานคร{' '}
          </div>
          <div className="py-4">เกร็ดความรู้ ประวัติวัด</div>
          <div>
            วัดธาตุทองเป็นหนึ่งในวัดที่มีชื่อเสียงมากที่สุดในกรุงเทพฯ
            แม้จะเป็นวัดราษฎร์ก็ตาม โดยประชาชนนิยมมาทำบุญ เที่ยวชม
            และจัดงานศพที่วัดแห่งนี้ค่ะ สิ่งที่โดดเด่นในวัดธาตุทองคือ
            พระมหาเจดีย์ 84 พรรษา ราชนครินทร์
            ที่สร้างขึ้นเพื่อน้อมถวายเป็นพระราชกุศลแด่สมเด็จพระเจ้าพี่นางเธอเจ้าฟ้ากัลยาณิวัฒนาฯ
            เป็นเจดีย์ทรงระฆังคว่ำเหนืออา
          </div>
        </div>
        <div className="md:px-8">
          <Link href="#">
            <ResponsiveImage
              desktopSrc="/images/banner-desktop.webp"
              mobileSrc="/images/banner-mobile.webp"
              alt="Banner"
              className="w-full"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-8 px-[24px] md:px-[72px]">
        <PaymentMethods />
      </div>
    </>
  );
};

export default TempleLanding;
