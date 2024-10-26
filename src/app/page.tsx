import React from 'react';
import type { Metadata } from 'next';
import IntroSection from '@/components/pages/home/Intro';
import ProductSection from '@/components/pages/home/ProductSection';
import CustomerReview from '@/components/pages/home/CustomerReview';
import {
  ContactMethods,
  PaymentMethods,
  FullWidthSection,
  FloatingAds,
} from '@/components/common';

export const metadata: Metadata = {
  title:
    'แอร์แคเรียร์ Carrier กรุงเทพ สมุทรปราการและปริมณฑล - จำหน่ายแอร์แคเรียร์ครบวงจร ราคาถูก!',
  description:
    'ให้บริการขายแอร์แคเรียร์ ติดตั้งดูแลแอร์ Carrier ครบวงจร จำหน่ายแอร์แคเรียร์ทุกรุ่นทุกแบบ แอร์แคเรียร์ กรุงเทพ-สมุทรปราการ การันตีความถูกและประหยัดของแอร์แคเรียร์ มีทั้งราคาปลีก-ส่งร้านแอร์ออนไลน์ บริการจัดส่งแอร์ที่เราคัดสรรมาอย่างดี ราคาเป็นมิตร สั่งซื้อง่าย จัดส่งไวอยู่ใกล้วัด จัดส่งฟรีทั่ว กทม. พร้อมโปรสุดพิเศษ',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'th-TH': '/th-TH',
    },
  },
  openGraph: {
    url: '/',
    type: 'website',
  },
};
const Home = async () => {
  return (
    <>
      <div className="container flex flex-col space-y-8 px-[24px] pt-8 md:px-[72px]">
        {/* <FloatingAds /> */}
        <IntroSection />
        <ProductSection
          title={'สินค้ามาแรง'}
          hasButton={true}
          displayPriceRange={false}
          displayDescription={false}
        />
        <ProductSection
          title={'แอร์ประเภท1'}
          hasButton={false}
          displayPriceRange={false}
          displayDescription={false}
        />
        <ProductSection
          title={'แอร์ประเภท2'}
          hasButton={false}
          displayPriceRange={false}
          displayDescription={false}
        />
        <ProductSection
          title={'แอร์ประเภท3'}
          hasButton={false}
          displayPriceRange={false}
          displayDescription={false}
        />
        <ProductSection
          title={'แอร์ประเภท4'}
          hasButton={false}
          displayPriceRange={false}
          displayDescription={false}
        />
        <ProductSection
          title={'แอร์ประเภท5'}
          hasButton={false}
          displayPriceRange={false}
          displayDescription={false}
        />
      </div>
      <FullWidthSection>
        <ContactMethods isColor={true} />
      </FullWidthSection>
      <div className="flex flex-col space-y-8 px-[24px] md:px-[72px]">
        <CustomerReview />
        <PaymentMethods />
      </div>
    </>
  );
};

export default Home;
