'use client';

import React, { useState, useCallback, useRef } from 'react'
import ReusableSlider from '@/components/sliders/ReusableSlider'
import { transformationData, TransformationData } from '@/data/transformation'
import FallbackImage from '@/components/common/FallbackImage'
import SliderNavButton from '@/components/ui/SliderNavButton'
import type { Swiper as SwiperType } from 'swiper'

type SlideItem = {
  image: string;
  type: 'before' | 'after';
  dataIndex: number;
};

export default function TransformationsSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  const slides: SlideItem[] = transformationData.flatMap((item, index) => [
    { image: item.beforeImg, type: 'before', dataIndex: index },
    { image: item.afterImg, type: 'after', dataIndex: index }
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const currentDataIndex = slides[currentSlide]?.dataIndex ?? 0;
  const currentData: TransformationData = transformationData[currentDataIndex];

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="transformations-slider-container">
      <ReusableSlider
        title={
          <>
            Посмотрите как <span>Baklen Method</span><br/> преображает людей
          </>
        }
        subtitle="Внешние результаты:"
        items={slides}
        renderSlide={(slide: SlideItem) => (
          <div className="slide-inner">
            <div className="transformations-slider__image">
              <FallbackImage
                src={slide.image}
                alt={slide.type === 'before' ? 'До' : 'После'}
                loading="lazy"
              />
            </div>
          </div>
        )}
        className="transformations-slider"
        wrapperClassName="transformations-slider__wrapper"
        prevButtonClass="transformations-slider__btn-prev slider-btn-prev"
        nextButtonClass="transformations-slider__btn-next slider-btn-next"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1280: { slidesPerView: 2, spaceBetween: 40 },
        }}
        showNavigation={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
      />

      <div className="transformations-slider__info">
        <h3>Внутренние результаты:</h3>
        <div className="transformations-slider__info-item">
          <h4>{`${currentData.name}, ${currentData.age}`}</h4>
          {currentData.description.map((desc, idx) => (
            <p key={idx}>
              <strong>{desc.bold}</strong>
              {desc.text}
            </p>
          ))}
        </div>

        <SliderNavButton
          className="slider-btn-prev"
          direction="prev"
          onClick={handlePrev} />
        <SliderNavButton
          className="slider-btn-next"
          direction="next"
          onClick={handleNext} />
      </div>
    </div>
  );
}


