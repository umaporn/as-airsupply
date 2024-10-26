'use client';
import React from 'react';
import ResponsiveImage from '@/components/common/Image';
interface TOCItem {
  level: number;
  title: string;
  id: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="w-1/3 bg-white">
      <div className="flex items-center bg-purple-100 p-2 text-xs text-white">
        <ResponsiveImage
          desktopSrc="/images/svg/compass-ico.svg"
          mobileSrc="/images/banner-mobile.webp"
          alt="logo"
          className="w-5"
        />
        เลือกอ่านส่วนที่สนใจ
      </div>
      <div className="bg-gray-500 p-2">
        {items.map((item, index) => {
          const Tag = `h${item.level}` as keyof JSX.IntrinsicElements;
          return (
            <div key={index} className={`pl-${(item.level - 2) * 4} text-xs`}>
              <Tag
                onClick={() => handleClick(item.id)}
                className="cursor-pointer hover:underline"
              >
                {item.title}
              </Tag>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableOfContents;
