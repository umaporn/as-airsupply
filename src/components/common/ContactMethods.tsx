import React from 'react';
import ResponsiveImage from '@/components/common/Image';
import Link from 'next/link';

interface ContactMethod {
  icon: string;
  text: string;
  link: string;
}

interface ContactMethodsProps {
  isColor?: boolean;
}

const contactMethodsColor: ContactMethod[] = [
  {
    icon: '/images/svg/tel-white-ico-large.svg',
    text: '02-026-3338',
    link: '#phone',
  },
  {
    icon: '/images/svg/line-white-ico-large.svg',
    text: '@as-airsupply',
    link: '#line',
  },
  {
    icon: '/images/svg/www-white-ico.svg',
    text: 'วิธีสั่งซื้อผ่านเว็บไซต์',
    link: 'https://www.as-airsupply.com',
  },
];

const contactMethodsBlack: ContactMethod[] = [
  {
    icon: '/images/svg/tel-black-ico.svg',
    text: '02-026-3338',
    link: '#phone',
  },
  {
    icon: '/images/svg/line-black-ico.svg',
    text: '@as-airsupply',
    link: '#line',
  },
  {
    icon: '/images/svg/www-black-ico.svg',
    text: 'วิธีสั่งซื้อผ่านเว็บไซต์',
    link: 'https://www.as-airsupply.com',
  },
];

const ContactMethods = ({ isColor = true }: ContactMethodsProps) => {
  return (
    <>
      {isColor ? (
        <div className="mt-6 bg-purple-100 p-6">
          <h2 className="mb-6 text-center text-sm text-white md:text-lg">
            สั่งแอร์ง่าย ๆ ด้วย ผ่าน 3 ช่องทาง
          </h2>
          <div className="flex flex-col items-center justify-around gap-6 p-6 md:flex-row">
            {contactMethodsColor.map((method, index) => (
              <div
                key={index}
                className={`flex flex-1 flex-col items-center ${
                  index !== contactMethodsColor.length - 1
                    ? 'md:border-r-2'
                    : ''
                } border-white text-white`}
              >
                <div className="flex flex-row items-center sm:flex-col sm:items-center">
                  <div className="flex items-center justify-center p-2">
                    <ResponsiveImage
                      desktopSrc={method.icon}
                      mobileSrc={method.icon}
                      alt="payment"
                      className="w-full"
                    />
                  </div>
                  <span className="mt-2 text-md hover:underline ">
                    <Link href={method.link}>{method.text}</Link>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-6">
          <h2 className="mb-6 text-center text-sm text-black md:text-lg">
            เลือกดู วิธีการสั่งซื้อ
          </h2>
          <div className="flex flex-col items-center justify-around gap-6 p-6 md:flex-row">
            {contactMethodsBlack.map((method, index) => (
              <div
                key={index}
                className={`flex flex-1 flex-col items-center ${
                  index !== contactMethodsBlack.length - 1
                    ? 'md:border-r-2'
                    : ''
                } border-black text-black`}
              >
                <div className="flex flex-row items-center sm:flex-col sm:items-center">
                  <div className="flex items-center justify-center p-2">
                    <ResponsiveImage
                      desktopSrc={method.icon}
                      mobileSrc={method.icon}
                      alt="payment"
                      className="h-32 w-32"
                    />
                  </div>
                  <span className="mt-2 text-md hover:underline">
                    <Link href={method.link}>{method.text}</Link>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ContactMethods;
