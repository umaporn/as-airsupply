import { useState } from 'react';

interface AnnouncementBarProps {
  isShow?: boolean;
}

const AnnouncementBar = ({ isShow }: AnnouncementBarProps) => {
  const [isVisible, setIsVisible] = useState(isShow);

  const closeAnnouncement = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gray-300 px-4 py-2 text-center text-black">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <button
        onClick={closeAnnouncement}
        className="absolute right-2 top-2 -translate-y-1/2 transform text-gray-200 focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
};

export default AnnouncementBar;
