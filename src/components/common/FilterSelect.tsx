import { useState } from 'react';
import FilterIcon from '/public/images/svg/filter-ico.svg';

const FilterSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center md:hidden">
        <FilterIcon className="w-30 h-30" />
        <span className="text-gray-700 font-semibold">ตัวกรอง</span>
      </div>
      <div className="flex flex-row-reverse md:ml-auto md:flex-row">
        <select
          value={selectedOption}
          onChange={handleChange}
          className="bg-purple px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-purple-100"
        >
          <option value="" disabled>
            จัดเรียง
          </option>
          <option value="rating">Rating</option>
          <option value="date">Date</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSelect;
