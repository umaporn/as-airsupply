'use client';
import React, { useState } from 'react';
import DesktopNavBar from './NavBar/DesktopnavBar';
import MobileNavBar from './NavBar/MobileNavBar';
import ResponsiveImage from '@/components/common/Image';
import Link from 'next/link';
import { navItems } from './data';
import AnnouncementBar from './NavBar/AnnouncementBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black-100 text-white">
      <div className="container mx-auto px-1">
        <div className="flex items-center justify-between">
          <div className="relative md:flex lg:hidden">
            <button
              onClick={handleMenuToggle}
              className="bg-blue-500 text-balck rounded-md p-2"
            >
              <ResponsiveImage
                desktopSrc="/images/svg/hamburger-ico.svg"
                mobileSrc="/images/svg/hamburger-ico.svg"
                alt="หรีดมาลา"
                isLazyLoad={false}
                width={32}
                height={32}
              />
            </button>

            <div
              className={`fixed left-0 top-0 z-20 h-full w-11/12 transform overflow-y-auto bg-white text-black shadow-lg transition-transform duration-300 ease-in-out  ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <div className="p-4">
                <MobileNavBar
                  navItems={navItems}
                  onClose={handleMenuClose}
                  isOpen={isMenuOpen}
                />
              </div>
            </div>

            {isMenuOpen && (
              <div
                onClick={handleMenuClose}
                className="fixed inset-0 z-10 bg-black opacity-50"
              ></div>
            )}
          </div>
          <div className="flex flex-col items-center space-x-0 md:space-y-0 lg:flex-row">
            <Link href="/">
              <span className="font-kanit-bold text-md">AS AIRSUPPLY</span>
            </Link>
          </div>
          <div className="hidden items-center space-x-4 lg:flex lg:space-x-2">
            <div className="flex items-center space-x-2">
              <span>กดดูช่องทางติดต่อ</span>
              <ResponsiveImage
                desktopSrc="/images/svg/tel-white-ico-small.svg"
                mobileSrc="/images/svg/tel-white-ico-small.svg"
                alt="หรีดมาลา"
                isLazyLoad={false}
                width={32}
                height={32}
              />
              <span className="hover:underline">
                <Link href="tel:02-383-0536">02-383-0536</Link>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <ResponsiveImage
                desktopSrc="/images/svg/line-white-ico-small.svg"
                mobileSrc="/images/svg/line-white-ico-small.svg"
                alt=""
                isLazyLoad={false}
                width={32}
                height={32}
              />
              <span className="hover:underline">
                <Link href="/" rel="nofollow" target="_blank">
                  @AS-AIRSUPPLY
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex items-center justify-center bg-purple-100 p-2 text-white">
          <div className="flex items-center space-x-4">
            <div className="flex items-center border-r border-white pr-4">
              <ResponsiveImage
                desktopSrc="/images/svg/tel-white-ico-small.svg"
                mobileSrc="/images/svg/tel-white-ico-small.svg"
                alt=""
                isLazyLoad={false}
                width={32}
                height={32}
              />
              <span className="ml-1 text-2xs underline">02-383-0536</span>
            </div>
            <div className="flex items-center">
              <ResponsiveImage
                desktopSrc="/images/svg/line-white-ico-small.svg"
                mobileSrc="/images/svg/line-white-ico-small.svg"
                alt=""
                isLazyLoad={false}
                width={32}
                height={32}
              />
              <span className="ml-1 text-2xs underline">@as-airsupply</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <DesktopNavBar navItems={navItems} />
      </div>
      <AnnouncementBar />
    </header>
  );
};

export default Header;
