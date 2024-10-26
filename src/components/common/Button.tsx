import React from 'react';
import ResponsiveImage from '@/components/common/Image';
interface ButtonProps {
  backgroundColor: string;
  icon: string | null;
  textColor: string;
  borderColor: string;
  hoverBackgroundColor: string;
  paddingX: string;
  paddingY: string;
  isWidthFull: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({
  backgroundColor,
  icon,
  textColor,
  borderColor,
  hoverBackgroundColor,
  paddingX,
  paddingY,
  isWidthFull,
  onClick,
  children,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonClasses = `
    ${backgroundColor} 
    ${textColor}
    ${borderColor}
    ${isHovered ? hoverBackgroundColor : ''}
    ${isWidthFull ? 'w-full' : ''}
    px-${paddingX} 
    py-${paddingY}
    border 
    cursor-pointer 
    transition 
    duration-200 
    ease-in-out 
    rounded
    text-3xs lg:text-2xs 
    md:w-auto
    flex justify-center p-1
  `;
  let iconComponent;
  if (icon === 'LineIcon') {
    iconComponent = (
      <ResponsiveImage
        desktopSrc="/images/svg/line-white-ico-small.svg"
        mobileSrc="/images/svg/line-white-ico-small.svg"
        alt="Line"
        width={32}
      />
    );
  }
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon && <span className="pr-3">{iconComponent}</span>}
      {children}
    </button>
  );
};

export default Button;
