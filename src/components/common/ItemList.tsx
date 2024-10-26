import Link from 'next/link';
import React from 'react';

interface Item {
  text: string;
  link: string;
}

interface ItemListProps {
  items: Item[];
}

export default function ItemList({ items }: ItemListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-4">
      {items.map((item, index) => (
        <Link key={index} href={item.link} className="block md:p-2">
          <div className="flex items-center text-xs text-purple md:text-base">
            <span className="mr-2">&#8226;</span>
            {item.text}
          </div>
        </Link>
      ))}
    </div>
  );
}
