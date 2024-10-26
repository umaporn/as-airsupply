'use client';

import { useState } from 'react';
import SectionToggle from './SectionToggle';

const sections = [
  { id: 'fonts', title: 'Fonts' },
  { id: 'sizing', title: 'Sizing' },
  { id: 'colors', title: 'Colors' },
  { id: 'buttons', title: 'Buttons' },
  { id: 'image', title: 'Image' },
  { id: 'form', title: 'Forms' },
  { id: 'breadcrumbs', title: 'Breadcrumbs' },
  { id: 'pagination', title: 'Pagination' },
  { id: 'modal', title: 'Modal' },
  { id: 'product-cards', title: 'Product Card' },
  { id: 'product-carousel', title: 'Product Carousel' },
  { id: 'product-filter', title: 'Product Filter' },
  { id: 'review-cards', title: 'Review Cards' },
  { id: 'article-cards', title: 'Article Cards' },
  { id: 'how-to-order', title: 'How to order' },
  { id: 'bank-transfer', title: 'Bank Transfer' },
];

const Appendix = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleToggle = (sectionId: string) => {
    setActiveSection((prevSection) =>
      prevSection === sectionId ? null : sectionId
    );
  };

  return (
    <div className="mx-auto min-h-screen bg-gray-300 p-4 md:p-8">
      <h1 className="text-gray-800 mb-4 text-lg md:mb-8">Component Appendix</h1>
      <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg md:flex-row">
        <div className="bg-gray-50 border-b border-gray-300 p-4 md:w-1/4 md:border-b-0 md:border-r">
          <ul className="space-y-2 md:space-y-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleToggle(section.id)}
                  className={`hover:text-blue-600 block text-xs font-medium text-gray transition-colors duration-200 ${
                    activeSection === section.id
                      ? 'text-blue-600 font-semibold'
                      : ''
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 md:w-3/4 md:p-6">
          {sections.map((section) => (
            <SectionToggle
              key={section.id}
              id={section.id}
              title={section.title}
              isActive={activeSection === section.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appendix;
