'use client';

import React, {useState} from 'react'
import Image, {ImageProps} from 'next/image'


interface FallbackImageProps extends ImageProps {
  fallbackText?: string;
}

export default function FallbackImage(
  {
    alt = '',
    fallbackText = 'Нет изображения',
    sizes = '(max-width: 768px) 100vw, 350px',
    ...rest
  }: FallbackImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="img-placeholder">
        <span>{fallbackText}</span>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      {...rest}
      fill
      sizes={sizes}
      style={{objectFit: 'cover'}}
      onError={() => setHasError(true)}
    />
  );
}
