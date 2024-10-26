import type { Metadata } from 'next';
import '../styles/globals.css';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'ร้านแอร์ หรีดมาลา ส่งแอร์ราคาย่อมเยา ส่งตรงถึงวัด',
  description:
    'ร้านแอร์ออนไลน์ บริการจัดส่งแอร์ที่เราคัดสรรมาอย่างดี ราคาเป็นมิตร สั่งซื้อง่าย จัดส่งไวอยู่ใกล้วัด จัดส่งฟรีทั่ว กทม. พร้อมโปรสุดพิเศษ',
};

const MainLayout = ({
  children,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <html lang="th" suppressHydrationWarning={true}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />

      <link
        rel="preload"
        href="/fonts/kanit-regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />

      <link
        rel="preload"
        href="/fonts/bsrubansomdej-regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />

      <link
        rel="preload"
        href="/fonts/taviraj-regular-webfont.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <body suppressHydrationWarning={true}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
