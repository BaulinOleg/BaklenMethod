'use client';

import React from 'react'
import ReusableSlider from '@/components/sliders/ReusableSlider'
import { methodGoals } from '@/data/methodGoals'


export default function HelpSlider() {
  return (
    <ReusableSlider
      title="Программа поможет:"
      items={methodGoals}
      renderSlide={({ title, description }, index) => (
        <div className="slide-inner" data-index={index + 1}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
      className="help-slider"
      wrapperClassName="help-slider__wrapper"
      showNavigation={false}  // Навигационные кнопки не нужны
      pagination={{ clickable: true }}  // Включаем пагинацию
      breakpoints={{
        320: { slidesPerView: 1.15, spaceBetween: 12,},
        540: { slidesPerView: 2.2, spaceBetween: 16,},
        1024: { slidesPerView: 3.2, spaceBetween: 16,},
        1280: { slidesPerView: 3.2, spaceBetween: 28,},
      }}
    />
  );
}
