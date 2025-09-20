'use client';

import React, {RefObject} from 'react'
import SliderArrowIcon from '@/components/ui/icons/SliderArrowIcon'


interface SliderNavButtonProps {
  direction: 'prev' | 'next';
  buttonRef?: RefObject<HTMLButtonElement | null>;
  onClick?: () => void;
  alt?: string;
  className?: string;
  fillColor?: string;
}

export default function SliderNavButton(
  {
    direction,
    buttonRef,
    onClick,
    alt = '',
    className = '',
    fillColor = '#A70100',
  }: SliderNavButtonProps) {
  return (
    <button
      ref={buttonRef}
      className={`slider-nav-btn slider-nav-btn--${direction} ${className}`}
      aria-label={alt}
      onClick={onClick}
    >
      <SliderArrowIcon direction={direction} fillColor={fillColor}/>
    </button>
  );
}
