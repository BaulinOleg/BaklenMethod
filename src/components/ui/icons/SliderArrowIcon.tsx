'use client';

import React from 'react'


interface SliderArrowIconProps {
  direction?: 'prev' | 'next';
  className?: string;
  fillColor?: string;
}

export default function SliderArrowIcon(
  {
    direction = 'next',
    className = '',
  }: SliderArrowIconProps) {
  const isPrev = direction === 'prev';

  return (
    <svg
      viewBox="0 0 69 69"
      xmlns="http://www.w3.org/2000/svg"
      className={`slider-arrow-icon ${className}`}
      style={{transform: isPrev ? 'scaleX(-1)' : 'none'}}
    >
      <circle cx="34.5" cy="34.5" r="33.5" fill="currentColor"/>
      <path
        d="M47.1193 35.7618C47.705 35.176 47.705 34.2263 47.1193 33.6405L37.5733 24.0946C36.9875 23.5088 36.0378 23.5088 35.452 24.0946C34.8662 24.6804 34.8662 25.6301 35.452 26.2159L43.9373 34.7012L35.452 43.1865C34.8662 43.7722 34.8662 44.722 35.452 45.3078C36.0378 45.8936 36.9875 45.8936 37.5733 45.3078L47.1193 35.7618ZM21.6992 36.2012H46.0586V33.2012H21.6992V36.2012Z"
        fill="white"
      />
    </svg>
  );
}
