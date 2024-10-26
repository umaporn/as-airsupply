import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  href: string;
  label: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb" className="text-black">
      <ol className="inline-flex list-none p-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center">
              {!isLast ? (
                <>
                  <Link
                    href={item.href}
                    className="text-3xs text-black hover:underline md:text-base"
                  >
                    {item.label}
                  </Link>
                  <span className="mx-2">/</span>
                </>
              ) : (
                <span className="text-3xs font-bold text-purple md:text-base">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
