import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, X, Search } from 'lucide-react';
import ResponsiveImage from '@/components/common/Image';
interface NavItem {
  name: string;
  link: string;
  submenu?: NavItem[];
  flattenSubmenu?: boolean;
  isPadding?: boolean | undefined;
}

interface MenuState {
  items: NavItem[];
  parentName: string | null;
}

interface MobileMenuProps {
  navItems: NavItem[];
  onClose: () => void;
  isOpen: boolean;
}

const MobileMenu = ({ navItems, onClose, isOpen }: MobileMenuProps) => {
  const [currentMenu, setCurrentMenu] = useState<MenuState>({
    items: navItems,
    parentName: null,
  });
  const [menuStack, setMenuStack] = useState<MenuState[]>([]);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    } else {
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const flattenMenu = (menu: NavItem[]): NavItem[] => {
    return menu.reduce((acc: NavItem[], item) => {
      if (item.flattenSubmenu && item.submenu) {
        return [...acc, { ...item, submenu: undefined }, ...item.submenu];
      }
      return [...acc, item];
    }, []);
  };

  const handleMenuClick = (item: NavItem) => {
    if (item.submenu) {
      setMenuStack([...menuStack, currentMenu]);
      setCurrentMenu({
        items: flattenMenu(item.submenu),
        parentName: item.name,
      });
    }
  };

  const handleBackClick = () => {
    if (menuStack.length > 0) {
      const previousMenu = menuStack[menuStack.length - 1];
      setCurrentMenu(previousMenu);
      setMenuStack(menuStack.slice(0, -1));
    }
  };

  if (!isRendered) {
    return null;
  }

  return (
    <>
      <button
        onClick={onClose}
        className="absolute right-2 top-2 text-gray hover:text-gray-100"
      >
        <X size={24} />
      </button>
      <div className="p-4 pr-10">
        <div className="mb-4 mt-8 flex items-center justify-between">
          <div className="relative mr-4 flex w-full items-center">
            <input
              type="text"
              placeholder="ค้นหา"
              className="w-full border p-2 pr-12 shadow-lg focus:outline-none"
            />
            <button
              className="absolute right-0 h-full bg-purple px-3 text-white"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>
        </div>

        {currentMenu.parentName && (
          <div className="mr-4 flex items-center justify-between border-b border-gray-200 px-4 py-2">
            <span className="text-2xs text-black">
              {currentMenu.parentName}
            </span>
            <button
              onClick={handleBackClick}
              className="flex items-center text-black"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        )}

        <ul className="space-y-0 pr-4">
          {currentMenu.items.map((item, index) => (
            <li key={item.name} className="relative">
              <div
                className={`flex items-center justify-between border-b border-gray-200 px-4 py-2 ${
                  currentMenu.parentName &&
                  currentMenu.parentName !== item.name &&
                  item.isPadding
                    ? 'ml-2'
                    : ''
                }`}
              >
                <a href={item.link} className="flex-grow text-2xs text-black">
                  {item.name}
                </a>
                {item.submenu && !item.flattenSubmenu && (
                  <button
                    onClick={() => handleMenuClick(item)}
                    className="ml-2 text-black"
                    aria-label="Open submenu"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>
            </li>
          ))}
          {menuStack.length === 0 && (
            <li className="px-4 py-2">
              <a href="/login" className="text-2xs text-black">
                <div className="flex ">
                  <ResponsiveImage
                    desktopSrc="/images/svg/user-ico-black.svg"
                    mobileSrc="/images/svg/user-ico-black.svg"
                    alt="User Icon"
                    className="mr-2"
                    isLazyLoad={false}
                    width={24}
                    height={24}
                  />
                  เข้าสู่ระบบ
                </div>
              </a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
