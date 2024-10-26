import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import {
  Breadcrumb,
  ItemList,
  ResponsiveImage,
  ContactMethods,
  PaymentMethods,
  FullWidthSection,
} from '@/components/common/';

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
const TempleAll = () => {
  return (
    <>
      <div className="container flex flex-col space-y-4 px-[24px] py-8 pt-8 md:px-[72px]">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-center text-sm font-bold text-purple md:text-xl">
          รายชื่อวัดทั้งหมด
        </h1>
        <div className="flex justify-center md:px-8">
          <Link href="#">
            <ResponsiveImage
              desktopSrc="/images/banner-desktop.webp"
              mobileSrc="/images/banner-mobile.webp"
              alt="Banner"
              className="w-full"
            />
          </Link>
        </div>
        <div>
          <div className="text-md text-purple">กรุงเทพ </div>
          <div className="text-base">เขตในกรุงเทพมหานครทั้ง 50 เขต</div>
          <div className="text-base">
            หนองจอก ลาดกระบัง บางขุนเทียน คลองสามวา มีนบุรี ประเวศ ทวีวัฒนา
            สายไหม บางแค บางเขน ดอนเมือง หนองแขม บางบอน จตุจักร ทุ่งครุ ตลิ่งชัน
            บางกะปิ สะพานสูง จอมทอง คันนายาว บึงกุ่ม สวนหลวง หลักสี่ ลาดพร้าว
            วังทองหลาง บางนา ภาษีเจริญ ยานนาวา ราษฎร์บูรณะ ห้วยขวาง พระโขนง
            คลองเตย วัฒนา บางกอกน้อย บางซื่อ บางพลัด บางคอแหลม ดุสิต พญาไท สาทร
            ธนบุรี ดินแดง ปทุมวัน ราชเทวี บางกอกใหญ่ คลองสาน บางรัก พระนคร
            ป้อมปราบศัตรูพ่าย สัมพันธวงศ์
          </div>
        </div>
        <div className="container flex flex-col space-y-8 px-[24px] md:px-[72px]">
          <ItemList items={items} />
        </div>
        <div className="flex justify-center md:px-8">
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
      <FullWidthSection>
        <ContactMethods isColor={true} />
      </FullWidthSection>
      <div className="flex flex-col space-y-8 px-[24px] md:px-[72px]">
        <PaymentMethods />
      </div>
    </>
  );
};

export default TempleAll;
