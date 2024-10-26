import React from 'react';
import Link from 'next/link';
import ResponsiveImage from '@/components/common/Image';
import { sitemapLinks } from './data';

const Footer = () => {
  return (
    <footer className="bg-purple py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-1 flex flex-col items-center lg:col-span-3 lg:items-start lg:border-r">
            <span className="font-kanit-bold text-md">AS AIRSUPPLY</span>
            <h3 className="mb-4 flex text-md font-bold lg:hidden">
              สั่งซื้อได้ทุกวัน ตลอด 24 ชั่วโมง
            </h3>
          </div>

          <div className="col-span-1 mx-auto flex grid grid-cols-2 gap-4 text-2xs lg:col-span-4 lg:grid-cols-2 lg:border-r lg:pr-4">
            {sitemapLinks.map((section, index) => (
              <div key={index}>
                <h3 className="mb-2 font-bold lg:mt-6 ">{section.title}</h3>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-1">
                      <Link href="/" className="hover:underline">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 lg:mt-6">
            <h3 className="mx-auto hidden text-md font-bold lg:flex">
              สั่งซื้อได้ทุกวัน ตลอด 24 ชั่วโมง
            </h3>
            <div className="mx-auto flex flex-col items-center justify-center lg:mx-1 lg:flex-row lg:items-start lg:justify-start lg:space-x-4">
              <div className="mb-2 mb-2 text-xs text-xs lg:mb-0 lg:mt-8 lg:w-2/5">
                กดดูช่องทางติดต่อ
              </div>
              <div className="space-y-2 lg:mt-8 lg:w-1/2">
                <p className="flex items-center pb-3">
                  <ResponsiveImage
                    desktopSrc="/images/svg/tel-white-ico-small.svg"
                    mobileSrc="/images/svg/tel-white-ico-small.svg"
                    alt="หรีดมาลา"
                    className="h-8 w-8"
                  />
                  <span className="ml-2 hover:underline">
                    <Link href="tel:02-383-0536">02-383-0536</Link>
                  </span>
                </p>
                <p className="flex items-center pb-3">
                  <ResponsiveImage
                    desktopSrc="/images/svg/line-white-ico-small.svg"
                    mobileSrc="/images/svg/line-white-ico-small.svg"
                    alt="หรีดมาลา"
                    className="h-8 w-8"
                  />
                  <span className="ml-2 hover:underline">
                    <Link href="/" rel="nofollow" target="_blank">
                      @ASAIRSUPPLY
                    </Link>
                  </span>
                </p>
                <p className="flex items-center pb-3">
                  <ResponsiveImage
                    desktopSrc="/images/svg/envelop-ico.svg"
                    mobileSrc="/images/svg/envelop-ico.svg"
                    alt="หรีดมาลา"
                    className="h-8 w-8"
                  />
                  <span className="ml-2 hover:underline">
                    <Link href="mailto:contact@asairsupply.com">
                      contact@asairsupply.com
                    </Link>
                  </span>
                </p>
              </div>
            </div>

            <div className="mx-auto flex flex flex-col lg:hidden">
              <p className="mt-4 text-center text-xs">สั่งแอร์อย่างมั่นใจ</p>
              <ResponsiveImage
                desktopSrc="/images/svg/dbd-logo.svg"
                mobileSrc="/images/svg/dbd-logo.svg"
                alt="หรีดมาลา"
                className="mx-auto flex w-56"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
