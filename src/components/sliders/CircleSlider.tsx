'use client'

import {aspects} from '@/data/aspects'
import SliderNavButton from '@/components/ui/SliderNavButton'
import {ArticlesBase} from '@/data/aspects'

const DEGREE_STEP = 360 / aspects.length

interface CircleSliderProps {
  activeAspect: ArticlesBase
  setActiveAspect: (aspect: ArticlesBase) => void
  onPrevAspect?: () => void
  onNextAspect?: () => void
}

export default function CircleSlider(
  {activeAspect, setActiveAspect, onPrevAspect, onNextAspect}: CircleSliderProps) {
  const activeIndex = aspects.findIndex(a => a.title === activeAspect.title)

  const rotatedAspects = [
    ...aspects.slice(activeIndex),
    ...aspects.slice(0, activeIndex),
  ]

  return (
    <div className="circle-slider-container">
      <div className="slider">
        <div className="slider__center">Я</div>

        {rotatedAspects.map((aspect, i) => {
          const angle = i * DEGREE_STEP
          const originalIndex = (activeIndex + i) % aspects.length

          return (
            <div
              key={aspect.title}
              className={`slider__petal slider__petal--${originalIndex + 1} ${i === 0 ? 'active' : ''}`}
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg)${i === 0 ? ' scale(1.3)' : ''}`,
              }}
              onClick={() => setActiveAspect(aspects[originalIndex])}
            >
              <div className="slider__petal-inner">
                <ul className="slider__petal-list" role="list">
                  {aspect.items.map((item, j) => (
                    <li key={j} className="slider__petal-item">
                      {item.text}
                    </li>
                  ))}
                </ul>
                <h3 className="slider__petal-title">{aspect.title}</h3>
              </div>
            </div>
          )
        })}
      </div>

      <SliderNavButton
        direction="prev"
        onClick={onPrevAspect}
        className="circle-slider-btn-prev"
        buttonRef={{current: null}}
      />
      <SliderNavButton
        direction="next"
        onClick={onNextAspect}
        className="circle-slider-btn-next"
        buttonRef={{current: null}}
      />
    </div>
  )
}
