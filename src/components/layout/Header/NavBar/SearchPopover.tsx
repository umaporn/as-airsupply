'use client';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { useState } from 'react';
import ResponsiveImage from '@/components/common/Image';
import Button from '@/components/common/Button';

import SearchIcon from '/public/images/svg/search-ico.svg';

const SearchPopover = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <>
      <Popover className="relative">
        <PopoverButton className="flex items-center p-2 text-gray-500 hover:text-gray focus:outline-none">
          <ResponsiveImage
            desktopSrc="/images/svg/search-ico.svg"
            mobileSrc="/images/svg/search-ico.svg"
            alt="หรีดมาลา"
            isLazyLoad={false}
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </PopoverButton>
        <PopoverPanel className="absolute left-1/2 z-10 mt-2 -translate-x-1/2 transform rounded-lg bg-white p-3 shadow-lg ring-1 ring-black ring-opacity-5">
          <div
            className="absolute -top-2 h-4 w-4 rotate-45 transform bg-white"
            style={{
              left: '50%',
            }}
          ></div>
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหา..."
              className="rounded-xs border border-gray-300 p-1 text-black  focus:outline-none focus:ring"
            />
            <Button
              backgroundColor="bg-purple"
              icon={null}
              textColor="text-white"
              borderColor="border-purple-100"
              hoverBackgroundColor="hover:bg-purple-100"
              paddingX="3"
              paddingY="0"
              isWidthFull={false}
              onClick={() => {
                console.log('search');
              }}
            >
              <SearchIcon />
            </Button>
          </form>
        </PopoverPanel>
      </Popover>
    </>
  );
};

export default SearchPopover;
