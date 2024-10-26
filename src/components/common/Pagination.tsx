import React from 'react';

interface PaginationProps {
  currentPage: number | null;
  totalPages: number | null;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  return (
    <>
      <div className="flex space-x-2">
        <button className="btn btn-secondary rounded-full text-black">
          Previous
        </button>
        <button className="btn btn-secondary h-6 w-6 rounded-full bg-purple text-white hover:bg-purple-100 md:h-8  md:w-8">
          1
        </button>
        <button className="btn btn-secondary h-6 w-6 rounded-full bg-gray-300 text-black hover:bg-gray-400 md:h-8 md:w-8">
          2
        </button>
        <button className="btn btn-secondary h-6 w-6 rounded-full bg-gray-300 text-black hover:bg-gray-400 md:h-8 md:w-8">
          3
        </button>
        <button className="btn btn-secondary h-6 w-6 rounded-full text-black md:h-8 md:w-8">
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
