import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Breadcrumb, ItemList, ResponsiveImage } from '@/components/common/';
import ProductSection from '@/components/pages/home/ProductSection';

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
  { href: '#', label: 'แอร์วัดดัง' },
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
];
const Temples = () => {
  return (
    <>
      <div className="container flex flex-col space-y-4 px-[24px] py-4 pt-8 md:px-[72px]">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-center text-sm font-bold text-purple md:text-xl">
          แอร์วัดดัง
        </h1>
        <div>
          ร้านแอร์ใกล้วัด “หรีดมาลา” มีสาขาใกล้วัด
          ให้บริการจัดส่งแอร์ทั่วพื้นที่กรุงเทพฯ และพื้นที่ใกล้เคียง ฟรีค่าจัด!
          แอร์สวยคุณภาพดี มีแบบให้เลือกเยอะ จัดตกแต่งโดยช่างผู้มีประสบการณ์
          จัดส่งตรงถึงศาลา ทันเริ่มพิธีแน่นอน ลูกค้าต่างไว้วางใจ
          ในด้านสินค้าและการให้บริการ
        </div>
        <div className="container flex flex-col space-y-8 px-[24px] md:px-[72px]">
          <ItemList items={items} />
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
        <div>
          <span className="text-bold text-purple">
            ร้านแอร์ออนไลน์ “หรีดมาลา”
          </span>
          ส่งแอร์ทั่วไทย ตัวอยู่ไกลแค่ไหน ความอาลัยส่งไปถึงได้เสมอ
          เพราะร้านหรีดมาลา (as-airsupply) มีบริการส่งแอร์ทั่วประเทศ
          ไม่ว่าจะภาคไหนของไทย ภาคเหนือ ภาคกลาง ภาคอีสาน ภาคใต้ ภาคตะวันออก
          หรือภาคตะวันตก เราก็พร้อมส่งความอาลัยของคุณถึงวัด
          และนี่คือข้อดีที่คุณจะได้รับหากเลือกใช้บริการของเรา
        </div>
        <div>
          <ul className="mb-6 list-disc pl-5">
            <li>
              เลือกสินค้าได้หลากหลาย ทั้ง{' '}
              <Link
                href="#"
                className="text-xs text-purple hover:underline md:text-md"
              >
                แอร์ประเภท แอร์พัดลม แอร์ต้นไม้ แอร์ผ้า และแอร์อื่น ๆ
              </Link>
            </li>
            <li>ราคาประหยัด มีส่วนลด</li>
            <li>ส่งไวถึงศาลาวัด ทันเวลาพระสวด</li>
            <li>สินค้ามีมาตรฐาน จัดสวยตรงปก</li>
            <li>มีบริการถ่ายรูปหลังจัดเสร็จและหลังจัดส่ง</li>
            <li>ออกใบเสร็จและใบกำกับภาษีได้</li>
          </ul>

          <h3 className="mb-2 text-md font-semibold text-purple">
            บริการส่งฟรีในพื้นที่
          </h3>

          <p className="mb-6">
            <Link href="#" className="px-2 text-purple hover:underline">
              กรุงเทพ
            </Link>
            |
            <Link href="#" className="px-2 text-purple hover:underline">
              นนทบุรี
            </Link>
            |
            <Link href="#" className="px-2 text-purple hover:underline">
              สมุทรปราการ
            </Link>
          </p>
          <h3 className="mb-2 text-md font-semibold text-purple">
            บริการส่งฟรีบางพื้นที่
          </h3>

          <p className="mb-6">
            <Link href="#" className="px-2 text-purple hover:underline">
              สมุทรสาคร
            </Link>
            |
            <Link href="#" className="px-2 text-purple hover:underline">
              ปทุมธานี
            </Link>
            |
            <Link href="#" className="px-2 text-purple hover:underline">
              นครปฐม
            </Link>
          </p>

          <h3 className="mb-2 text-md font-semibold text-purple">
            ทำไมต้องเลือกซื้อแอร์ "หรีดมาลา"
          </h3>

          <ul className="mb-6 list-disc pl-5">
            <li>
              จัดทำแอร์ด้วยความใส่ใจ ให้ความสำคัญกับทุกขั้นตอน
              ตั้งแต่การเลือกดอกไม้สดใหม่ คุณภาพดี มาจัดแต่งอย่างพิถีพิถัน{' '}
            </li>
            <li>ราคาเป็นมิตร สบายกระเป๋า มีส่วนลดสำหรับลูกค้าเก่า </li>
            <li>
              ได้รับความไว้วางใจจากลูกค้าทั่วประเทศ ทั้งลูกค้าบุคคล
              และองค์กรชั้้นนำหลายแห่ง{' '}
            </li>
            <li>จัดส่งตรงเวลา</li>
            <li>
              จัดส่งแอร์ทั่วไทย ฟรีค่าส่งในเขตกรุงเทพฯ นนทบุรี
              และบางพื้นที่ในปริมณฑล
            </li>
          </ul>

          <p>*หากต้องการส่งแอร์ด่วน กรุณาสั่งล่วงหน้า 2-3 ชั่วโมง</p>
          <p>**ราคานี้เฉพาะบริการส่งฟรีในพื้นที่เท่านั้น</p>
        </div>
        <ProductSection
          title={'สินค้ามาแรง'}
          hasButton={false}
          displayDescription={false}
          displayPriceRange={false}
        />
        <Link href="#">
          <ResponsiveImage
            desktopSrc="/images/banner-desktop.webp"
            mobileSrc="/images/banner-mobile.webp"
            alt="Banner"
            className="w-full"
          />
        </Link>
        <div className="text-center hover:underline">
          <Link href="temples/list">-รายชื่อ วัดทั้งหมด -</Link>
        </div>
      </div>
    </>
  );
};

export default Temples;
