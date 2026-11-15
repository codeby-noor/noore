import React, { useState } from 'react';
import { getSrcSet, getLuxuryFallbackSvg } from '../../data/productImages';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  aspectRatioClass?: string;
  priority?: boolean;
  categoryLabel?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'NOORÉ Luxury Fashion',
  className = '',
  aspectRatioClass = '',
  priority = false,
  sizes = '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
  categoryLabel = 'Atelier',
  fallbackSrc,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const defaultSvgFallback = getLuxuryFallbackSvg(alt, categoryLabel);
  const finalSrc = hasError || !src ? (fallbackSrc || defaultSvgFallback) : src;
  const srcSet = !hasError && src && src.includes('unsplash.com') ? getSrcSet(src) : undefined;

  return (
    <div className={`relative overflow-hidden bg-brand-sand/70 ${aspectRatioClass} w-full`}>
      {/* Loading Shimmer Skeleton (prevents CLS) */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-brand-sand via-brand-warmBeige/50 to-brand-sand animate-pulse" />
      )}

      <img
        src={finalSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        {...(priority ? ({ fetchpriority: 'high' } as any) : {})}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        className={`transition-opacity duration-500 ease-out ${
          isLoaded || priority ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...rest}
      />
    </div>
  );
};
