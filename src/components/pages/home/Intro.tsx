import React from 'react';
import ResponsiveImage from '@/components/common/Image';
import Link from 'next/link';

const Intro = () => {
  return (
    <>
      <h1 className="font-bsru-reg text-center text-md font-[550] text-purple md:text-lg">
        แอร์แคเรียร์ Carrier กรุงเทพ สมุทรปราการและปริมณฑล <br />
        จำหน่ายแอร์แคเรียร์ครบวงจร ราคาถูก!
      </h1>
      {/* <div className="md:px-8">
        <Link href="#">
          <ResponsiveImage
            desktopSrc="/images/banner-desktop.webp"
            mobileSrc="/images/banner-mobile.webp"
            alt="Banner"
            isLazyLoad={false}
          />
        </Link>
      </div> */}
      <div>
        <span className="text-bold text-purple">
          ร้านแอร์ออนไลน์ “เอแอนด์เอส แอร์ซัพพลาย”
        </span>
        จำหน่ายเครื่องปรับอากาศยี่ห้อชั้นนำทุกรุ่นราคาปลีก-ส่ง แอร์บ้าน
        แอร์โรงงาน แอร์สำนักงาน ชิลเลอร์ VRF VRV และงานโครงการต่างๆ
        จัดส่งทั่วประเทศ พร้อมให้บริการติดตั้งและบริการหลังการขาย
        ด้วยประสบการณ์มากกว่า20ปี * รับสั่งผลิตแผงคอยล์เครื่องปรับอากาศ
        แผงคอยล์เย็น แผงคอยล์ร้อน และแผงคอยล์น้ำ Mobile. / Line ID. 092-494-1818
        Tel. 02-383-0536 Email. as_airsupply@hotmail.com
      </div>
    </>
  );
};

export default Intro;
