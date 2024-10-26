'use client';
import React from 'react';
import Link from 'next/link';
import ResponsiveImage from '@/components/common/Image';
import Button from '@/components/common/Button';

interface ContentItem {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

const contentData: ContentItem[] = [
  {
    title: 'ช่อดอกไม้',
    description:
      'รับช่อดอกไม้สวย ๆ เพื่อเป็นตัวแทนความรู้สึกที่พิเศษสำหรับคุณ ส่งฟรี! ทั่วกรุงเทพฯ และพื้นที่ใกล้เคียง ร้าน FruitNFlora™ ยินดีให้บริการค่ะ',
    linkText: 'เลือกชมช่อดอกไม้ คลิก',
    linkUrl: '#',
  },
  {
    title: 'กระเช้าดอกไม้',
    description:
      'รับจัดกระเช้าดอกไม้ หลากหลายสไตล์ เพื่อส่งมอบให้คนพิเศษในทุกโอกาส ส่งฟรี! ทั่วกรุงเทพฯ และพื้นที่ใกล้เคียง ร้าน FruitNFlora™ ยินดีให้บริการค่ะ',
    linkText: 'เลือกชมกระเช้าดอกไม้ คลิก',
    linkUrl: '#',
  },
  {
    title: 'แจกันดอกไม้',
    description:
      'บริการจัดและส่งแจกันดอกไม้ ฟรี! ทั่วกรุงเทพฯ และพื้นที่ใกล้เคียง มีให้เลือกหลายสไตล์ตรงตามใจลูกค้าแน่นอนค่ะ รับประกันคุณภาพดีกุหลาบที่ร้านเราเลือกสรร วัตถุดิบอย่างดี',
    linkText: 'เลือกชมแจกันดอกไม้ คลิก',
    linkUrl: '#',
  },
  {
    title: 'กระเช้าผลไม้',
    description:
      'รับจัดกระเช้าผลไม้สดๆ ตามฤดูกาล ตกแต่งอย่างสวยงามด้วยดอกไม้นานาชนิด ส่งฟรี! ทั่วกรุงเทพฯ และพื้นที่ใกล้เคียง ร้าน FruitNFlora™ บริการด้วยใจทุกขั้นตอนค่ะ',
    linkText: 'เลือกชมกระเช้าผลไม้ คลิก',
    linkUrl: '#',
  },
  {
    title: 'จัดดอกไม้ตามสถานที่',
    description:
      'บริการจัดดอกไม้ตามสถานที่ FruitNFlora™ มีบริการครบทุกงานค่ะ สามารถสอบถามเพิ่มเติม',
    linkText: 'ดูตัวอย่างผลงานได้ที่ คลิก',
    linkUrl: '#',
  },
  {
    title: 'ช่อดอกไม้ลูกโป่ง',
    description:
      'รับจัดช่อดอกไม้ลูกโป่งหลากหลายแบบ สวยเก๋อย่างมีสไตล์เหมาะกับทุกงานเลี้ยงหรือเทศกาล ร้าน FruitNFlora™ ยินดีจัดให้ค่ะ ส่งฟรีในเขตพื้นที่ใกล้เคียง',
    linkText: 'ดูตัวอย่างได้ที่ คลิก',
    linkUrl: '#',
  },
];
const Content = () => {
  return (
    <>
      <div className="space-y-6 py-10">
        <Link href="#">
          <ResponsiveImage
            desktopSrc="/images/banner-desktop.webp"
            mobileSrc="/images/banner-mobile.webp"
            alt="Banner"
            className="w-full"
          />
        </Link>
        <h2 className="text-center text-2xs font-bold text-purple md:text-lg">
          วางใจได้ในคุณภาพจากลูกค้าที่เลือกใช้บริการมากมาย
        </h2>
        <div className="space-y-6">
          <p>
            ร้านดอกไม้ ผลไม้ FruitNFlora™ บริการจัดช่อดอกไม้, กระเช้าดอกไม้,
            แจกันดอกไม้ และกระเช้าผลไม้ค่ะ วัตถุดิบคัดเลือกสดใหม่ทุกวัน
            มั่นใจได้ในคุณภาพ จัดส่งฟรี! ทุกโอกาสพิเศษ ทั่วกรุงเทพฯ
            และพื้นที่ใกล้เคียง สามารถสั่งซื้อออนไลน์ได้ตลอด 24 ชม
            <Link href="#" className="text-blue underline">
              คลิกที่นี่เพื่อชมสินค้าทั้งหมด
            </Link>
          </p>
          {contentData.map((item, index) => (
            <div key={index}>
              <h2 className="font-bold text-purple">{item.title}</h2>
              <span>{item.description}</span>
              <Link href={item.linkUrl} className="text-blue underline">
                {item.linkText}
              </Link>
            </div>
          ))}
        </div>
        <div className="mx-auto text-center">
          <Button
            icon={null}
            backgroundColor="bg-purple"
            textColor="text-white"
            borderColor="border-purple"
            hoverBackgroundColor="hover:bg-gray-400"
            paddingX="px-4 xs:px-2"
            paddingY="py-1"
            isWidthFull={false}
            onClick={() => {
              console.log('Button clicked');
            }}
          >
            เลือกชมสินค้าหรือสอบถามเพิ่มเติม คลิก
          </Button>
        </div>
      </div>
    </>
  );
};

export default Content;
