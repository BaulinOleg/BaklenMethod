'use client';

import React from 'react'
import ReusableSlider from '@/components/sliders/ReusableSlider'
import {teamMembers} from '@/data/team'
import FallbackImage from '@/components/common/FallbackImage'


export default function TeamSlider() {
  return (
    <ReusableSlider
      title="С вами будут работать"
      items={teamMembers}
      renderSlide={(team) => (
        <div className="slide-inner" key={team.name}>
          <div className="team-slider__image">
            <FallbackImage
              src={team.image}
              alt={team.name}
              loading="lazy"
            />
          </div>
          <div className="team-slider__info">
            <h3>{team.name}</h3>
            <p>{team.profession}</p>
          </div>
        </div>
      )}
      className="team-slider"
      wrapperClassName="team-slider__wrapper"
      prevButtonClass="team-slider__btn-prev slider-btn-prev"
      nextButtonClass="team-slider__btn-next slider-btn-next"
      breakpoints={{
        0: {slidesPerView: 1},
        768: {slidesPerView: 2, spaceBetween: 20},
        1024: {slidesPerView: 3, spaceBetween: 20},
        1280: {slidesPerView: 3, spaceBetween: 40},
      }}
      showNavigation={true}
    />
  );
}
