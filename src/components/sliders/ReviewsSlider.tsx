'use client';

import React from 'react'
import ReusableSlider from '@/components/sliders/ReusableSlider'
import {reviews} from '@/data/reviews'
import Review from "@/components/popup/Review"
import FallbackImage from '@/components/common/FallbackImage'


export default function ReviewsSlider() {
  return (
    <div className="reviews-block" id="reviews">
      <ReusableSlider
        title={
          <>
            Что люди <span>говорят</span>
          </>
        }
        subtitle="обо мне и методике Baklen Method"
        items={reviews}
        renderSlide={(review) => (
          <div className="slide-inner">
            <div className="reviews-slider__image">
              <FallbackImage
                src={review.image}
                alt={review.alt}
                loading="lazy"
              />
            </div>
          </div>
        )}
        className="reviews-slider"
        wrapperClassName="reviews-slider__wrapper"
        prevButtonClass="reviews-slider__btn-prev slider-btn-prev"
        nextButtonClass="reviews-slider__btn-next slider-btn-next"
        breakpoints={{
          0: {slidesPerView: 1},
          768: {slidesPerView: 2, spaceBetween: 20},
          1280: {slidesPerView: 3, spaceBetween: 40},
        }}
        showNavigation={true}
      />
      <Review/>
    </div>
  );
}
