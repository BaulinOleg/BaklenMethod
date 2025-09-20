'use client';

import React from 'react'
import ReusableSlider from '@/components/sliders/ReusableSlider'
import {articles} from '@/data/articles'
import { toTimeTagDateTime, toTimeTagAriaLabel } from '@/utils/formatTimeTag'
import Link from "next/link"


export default function ArticlesSlider() {
  return (
    <ReusableSlider
      title="Последние статьи наших авторов"
      items={articles}
      renderSlide={(article) => (
        <div className="articles-slide">
          <div className="articles-slide__title">
            <h3>{article.title}</h3>
          </div>
          <div className="articles-slide__info">
            <p>{article.author}</p>
            <div className="articles-slide__inner">
              <time
                dateTime={toTimeTagDateTime(article.time)}
                aria-label={toTimeTagAriaLabel(article.time)}
              >
                {article.time}
              </time>
              <Link className="articles-slide__link slide-link" href={`/articles#${article.anchor}`}>Узнать больше</Link>
            </div>
          </div>
        </div>
      )}
      className="articles-slider"
      wrapperClassName="articles-slider__wrapper"
      prevButtonClass="articles-slider__btn-prev slider-btn-prev"
      nextButtonClass="articles-slider__btn-next slider-btn-next"
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
