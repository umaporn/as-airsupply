'use client';
import React, { useRef, useState, useEffect } from 'react';
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import Link from 'next/link';
import ChevronDown from '/public/images/svg/chevron-down.svg';
import ResponsiveImage from '@/components/common/Image';
import SearchPopover from './SearchPopover';

interface NavItem {
  name: string;
  link: string;
  submenu?: NavItem[];
  flattenSubmenu?: boolean;
}

interface DesktopMenuProps {
  navItems: NavItem[];
}
const DesktopMenu: React.FC<DesktopMenuProps> = (navItems) => {
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const submenuRefs = useRef<(HTMLButtonElement | HTMLDivElement | null)[]>([]);
  const [submenuPositions, setSubmenuPositions] = useState<
    { left: number; width: number }[]
  >([]);

  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    left: 0,
  });

  useEffect(() => {
    const updatePositions = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        setContainerDimensions({
          width: containerRect.width,
          left: containerRect.left,
        });
        const positions = submenuRefs.current.map((ref) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            return {
              left: rect.left - containerRect.left,
              width: rect.width,
            };
          }
          return {
            left: 0,
            width: 0,
          };
        });
        setSubmenuPositions(positions);
      }
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  const popoverWidth = containerDimensions.width * 0.8;

  const handleMouseEnter = (index: number) => {
    setOpenSubmenu(index);
  };

  const handleMouseLeave = () => {
    setOpenSubmenu(null);
  };

  const isOpen = (index: number) => openSubmenu === index;

  const renderSubMenu = (
    navItems: { name: string; submenu?: { name: string }[] }[],
    level = 1,
    parentName = ''
  ) => {
    const isSpecialMenu =
      parentName === 'แอร์อื่นๆ' ||
      navItems.some((item) => item.name === 'แอร์พัดลม');

    if (isSpecialMenu) {
      const midPoint = Math.ceil(navItems.length / 2);
      const leftColumn = navItems.slice(0, midPoint);
      const rightColumn = navItems.slice(midPoint);

      return (
        <div className="grid grid-cols-3 gap-1">
          {[leftColumn, rightColumn].map((column, columnIndex) => (
            <ul key={columnIndex}>
              {column.map((subItem, subIndex) => (
                <li key={subIndex} className={`${level > 1 ? 'pl-5' : ''}`}>
                  {renderMenuItem(subItem, level)}
                </li>
              ))}
            </ul>
          ))}
        </div>
      );
    }

    return (
      <ul>
        {navItems.map((subItem, subIndex) => (
          <li key={subIndex} className={`${level > 1 ? 'pl-5' : ''}`}>
            {renderMenuItem(subItem, level)}
          </li>
        ))}
      </ul>
    );
  };

  const renderMenuItem = (item: any, level: number) => {
    if (item.submenu) {
      return (
        <Popover className="relative">
          <PopoverButton
            className="block w-full px-4 text-xs text-purple transition-colors duration-200 hover:bg-purple hover:text-white"
            style={{ textAlign: 'left' }}
          >
            <Link href={item.link}>{item.name}</Link>
          </PopoverButton>
          {renderSubMenu(item.submenu, level + 1, item.name)}
        </Popover>
      );
    }

    return (
      <Link
        href={item.link}
        className="block px-4 py-2 text-xs text-purple transition-colors duration-200 hover:bg-purple hover:text-white"
      >
        {item.name}
      </Link>
    );
  };

  return (
    <nav className="relative hidden bg-purple p-2 text-white lg:flex">
      <div className="container mx-auto">
        <div className="flex items-center justify-between" ref={containerRef}>
          <ul className="flex">
            {navItems.navItems.map((item, index) => (
              <li key={index} className="group relative text-3xs md:text-2xs">
                <Popover
                  className="relative"
                  onMouseEnter={() => item.submenu && handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <PopoverButton
                    ref={(el) => {
                      submenuRefs.current[index] =
                        el as HTMLButtonElement | null;
                    }}
                    className={`relative flex cursor-pointer items-center px-3 py-3 focus:outline-none ${
                      index !== navItems.navItems.length - 1
                        ? 'after:absolute after:right-0 after:top-1/2 after:h-4 after:w-[1px] after:-translate-y-1/2 after:bg-gray-300 after:content-[""]'
                        : ''
                    }`}
                  >
                    <Link href={item.link}>{item.name}</Link>
                    {item.submenu && (
                      <ChevronDown
                        className={`ml-1 transition-transform duration-200 ${
                          openSubmenu === index ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </PopoverButton>

                  {item.submenu && (
                    <Transition
                      show={isOpen(index)}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <PopoverPanel
                        static
                        className={`absolute left-0 top-full z-10 w-[780px] bg-white text-3xs shadow-xl transition-opacity duration-200 md:text-2xs ${
                          openSubmenu === index
                            ? 'visible opacity-95'
                            : 'invisible opacity-0'
                        }`}
                        style={{
                          width: `${popoverWidth}px`,
                          left: -submenuPositions[index]?.left,
                        }}
                      >
                        <div className="container mx-auto px-4 py-2">
                          <div
                            className="absolute -top-2 h-4 w-4 rotate-45 transform bg-white"
                            style={{
                              left: `${submenuPositions[index]?.left + 50}px`,
                            }}
                          ></div>
                          <div className="relative z-10 bg-white">
                            {renderSubMenu(item.submenu, 1, item.name)}
                          </div>
                        </div>
                      </PopoverPanel>
                    </Transition>
                  )}
                </Popover>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <SearchPopover />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopMenu;
