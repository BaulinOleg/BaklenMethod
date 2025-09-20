'use client';

import React from 'react'
import ReusableSlider from '@/components/sliders/ReusableSlider'
import {goods} from '@/data/goods'
import Link from "next/link"
import FallbackImage from "@/components/common/FallbackImage"


export default function GoodsSlider() {
  return (
    <ReusableSlider
      title="товары Baklen method"
      items={goods}
      renderSlide={(goods) => (
        <div className="goods-slide">
          <div className="goods-slide__image">
            <FallbackImage
              src={goods.image}
              alt={goods.name}
              loading="lazy"
            />
          </div>
          <div className="goods-slide__info">
            <h3 className="goods-slide__name">{goods.name}</h3>
            <p className="goods-slide__desc">{goods.description}</p>
            <div className="goods-slide__inner">
              <p className="goods-slide__price">{goods.price}</p>
              <Link className="goods-slide__link slide-link" href={`/goods#${goods.anchor}`}>Узнать больше</Link>
            </div>
          </div>
        </div>
      )}
      className="goods-slider"
      wrapperClassName="goods-slider__wrapper"
      prevButtonClass="goods-slider__btn-prev slider-btn-prev"
      nextButtonClass="goods-slider__btn-next slider-btn-next"
      breakpoints={{
        0: {slidesPerView: 1},
        768: {slidesPerView: 2, spaceBetween: 20},
        1025: {slidesPerView: 3, spaceBetween: 20},
        1280: {slidesPerView: 3, spaceBetween: 40},
      }}
      showNavigation={true}
    />
  );
}
