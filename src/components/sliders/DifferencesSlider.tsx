'use client';

import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import ReusableSlider from '@/components/sliders/ReusableSlider'
import { differenceItems } from '@/data/differences'
import type { Swiper as SwiperType } from 'swiper'


type DifferencesSliderProps = {
  onSlideChange?: (index: number) => void;
};

export type DifferencesSliderRef = {
  goToSlide: (index: number) => void;
};

const DifferencesSlider = forwardRef<DifferencesSliderRef, DifferencesSliderProps>(
  ({ onSlideChange }, ref) => {
    const swiperRef = useRef<SwiperType | null>(null);

    useImperativeHandle(ref, () => ({
      goToSlide: (index: number) => {
        swiperRef.current?.slideTo(index);
      },
    }));

    return (
      <ReusableSlider
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={onSlideChange}
        direction="vertical"
        items={differenceItems}
        renderSlide={(item, index) => (
          <div className={`differences-slide differences-slide--${item.imageKey}`} key={index}>
            {item.description.map((desc, i) => (
              <p key={i}>
                {desc.bold && <strong>{desc.bold}</strong>}
                {desc.text}
              </p>
            ))}
          </div>
        )}
        className="differences-slider"
        wrapperClassName="differences-slider__wrapper"
        prevButtonClass="differences-slider__btn-prev slider-btn-prev"
        nextButtonClass="differences-slider__btn-next slider-btn-next"
        breakpoints={{
          0: { slidesPerView: 1 },
        }}
        showNavigation={true}
      />
    );
  }
);

DifferencesSlider.displayName = 'DifferencesSlider';
export default DifferencesSlider;
