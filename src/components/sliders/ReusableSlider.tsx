'use client';

import React, {useRef, useEffect, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {A11y, Navigation, Pagination} from 'swiper/modules'
import SliderNavButton from '@/components/ui/SliderNavButton'
import type {Swiper as SwiperType} from 'swiper'
import type {SwiperOptions} from 'swiper/types'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

interface ReusableSliderProps<T> {
  title?: React.ReactNode;
  subtitle?: string;
  items: T[];
  renderSlide: (item: T, index: number) => React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  prevButtonClass?: string;
  nextButtonClass?: string;
  breakpoints?: SwiperOptions['breakpoints'];
  showNavigation?: boolean;
  pagination?: boolean | SwiperOptions['pagination'];
  loop?: boolean;
  direction?: 'horizontal' | 'vertical';
  onSwiper?: (swiper: SwiperType) => void;
  onSlideChange?: (index: number) => void;
}

export default function ReusableSlider<T>(
  {
    title,
    subtitle,
    items,
    renderSlide,
    className = '',
    wrapperClassName = '',
    prevButtonClass,
    nextButtonClass,
    breakpoints,
    showNavigation = true,
    pagination = false,
    loop = false,
    direction = 'horizontal',
    onSwiper,
    onSlideChange,
  }: ReusableSliderProps<T>) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isInit, setIsInit] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    setIsInit(true);
  }, []);

  useEffect(() => {
    if (!swiperInstance || !onSlideChange) return;

    const handleSlideChange = () => {
      onSlideChange(swiperInstance.activeIndex);
    };

    swiperInstance.on('slideChange', handleSlideChange);
    return () => {
      swiperInstance.off('slideChange', handleSlideChange);
    };
  }, [swiperInstance, onSlideChange]);

  const modules = [A11y];
  if (showNavigation) modules.push(Navigation);
  if (pagination) modules.push(Pagination);

  return (
    <div className={className}>
      {(title || subtitle) && (
        <div className="slider-title">
          <h2 className={`${className}__title`}>{title}</h2>
          {subtitle && <p className={`${className}__subtitle`}>{subtitle}</p>}
        </div>
      )}

      <div className={wrapperClassName}>
        {isInit && (
          <Swiper
            modules={modules}
            spaceBetween={40}
            slidesPerView={3}
            loop={loop}
            breakpoints={breakpoints}
            direction={direction}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
              onSwiper?.(swiper);
            }}
            navigation={
              showNavigation
                ? {
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }
                : undefined
            }
            pagination={
              pagination
                ? {
                  clickable: true,
                  ...(typeof pagination === 'object' ? pagination : {}),
                }
                : undefined
            }
            a11y={{
              enabled: true,
              paginationBulletMessage: 'Перейти к слайду {{index}}',
            }}
            onInit={(swiper) => {
              if (showNavigation) {
                const nav = swiper.params.navigation as {
                  prevEl: HTMLElement | null;
                  nextEl: HTMLElement | null;
                };
                nav.prevEl = prevRef.current;
                nav.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>{renderSlide(item, index)}</SwiperSlide>
            ))}
          </Swiper>
        )}

        {showNavigation && (
          <>
            <SliderNavButton
              direction="prev"
              buttonRef={prevRef}
              alt="Предыдущий слайд"
              className={prevButtonClass}
            />
            <SliderNavButton
              direction="next"
              buttonRef={nextRef}
              alt="Следующий слайд"
              className={nextButtonClass}
            />
          </>
        )}
      </div>
    </div>
  );
}
