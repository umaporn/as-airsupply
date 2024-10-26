interface ResponsiveImageProps {
  alt: string;
  desktopSrc: string;
  mobileSrc: string;
  className?: string;
  width?: number;
  height?: number;
  isLazyLoad?: boolean;
}

const ResponsiveImage = ({
  alt,
  desktopSrc,
  mobileSrc,
  className = '',
  width = 1024,
  height = 768,
  isLazyLoad = true,
}: ResponsiveImageProps) => {
  const aspectRatio = width / height;

  return isLazyLoad ? (
    <img
      className={className}
      alt={alt}
      src={desktopSrc}
      srcSet={`${mobileSrc} 768w, ${desktopSrc} 1024w`}
      sizes="(max-width: 768px) 100vw, (min-width: 769px) 1024px"
      width={width}
      height={width / aspectRatio}
      loading="lazy"
    />
  ) : (
    <img
      className={className}
      alt={alt}
      src={desktopSrc}
      srcSet={`${mobileSrc} 768w, ${desktopSrc} 1024w`}
      sizes="(max-width: 768px) 100vw, (min-width: 769px) 1024px"
      width={width}
      height={width / aspectRatio}
    />
  );
};

export default ResponsiveImage;
