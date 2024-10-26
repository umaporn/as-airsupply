import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import Phone from '/public/images/svg/tel-white-ico-small.svg';
// import Line from '/public/images/svg/line-white-ico-small.svg';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="border-gray-700 flex items-center justify-between border-b py-2">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo-placeholder.webp"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-semibold">หรีดมาลา</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {/* <Phone size={16} /> */}
              <span>02-026-3338</span>
            </div>
            <div className="flex items-center space-x-2">
              {/* <Line size={16} /> */}
              <span>@as-airsupply</span>
            </div>
          </div>
        </div>

        <nav className="flex items-center justify-between py-4">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-purple-300">
                แอร์ประเภท
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-purple-300">
                โปรโมชั่น
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-purple-300">
                แอร์อื่นๆ
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-purple-300">
                แอร์พัดลม
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-purple-300">
                ร้านดอกไม้
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-purple-300">
                ทำไมถึงเลือกเรา
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-purple-300">
                ติดต่อเรา
              </Link>
            </li>
          </ul>
          <Link href="/en" className="hover:text-purple-300">
            ENGLISH
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
