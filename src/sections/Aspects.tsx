'use client'

import { useState, useEffect } from 'react'
import CircleSlider from '@/components/sliders/CircleSlider'
import SliderNavButton from '@/components/ui/SliderNavButton'
import { aspects, ArticlesBase } from '@/data/aspects'


export default function Aspects() {
  const [activeAspect, setActiveAspect] = useState<ArticlesBase>(aspects[0])
  const [solutionIndex, setSolutionIndex] = useState(0)

  const handlePrevAspect = () => {
    const currentIndex = aspects.findIndex(a => a.title === activeAspect.title)
    const newIndex = (currentIndex - 1 + aspects.length) % aspects.length
    setActiveAspect(aspects[newIndex])
  }

  const handleNextAspect = () => {
    const currentIndex = aspects.findIndex(a => a.title === activeAspect.title)
    const newIndex = (currentIndex + 1) % aspects.length
    setActiveAspect(aspects[newIndex])
  }

  const currentSolution = activeAspect.items[solutionIndex]

  useEffect(() => {
    setSolutionIndex(0)
  }, [activeAspect])

  const handlePrev = () => {
    setSolutionIndex((prev) =>
      prev === 0 ? activeAspect.items.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setSolutionIndex((prev) =>
      prev === activeAspect.items.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section className="aspects">
      <h2 className="aspects__title">
        Какие <span>стороны жизни</span> человека
        <br /> затрагивает программа
      </h2>

      <div className="aspects__wrapper">
        <CircleSlider
          activeAspect={activeAspect}
          setActiveAspect={setActiveAspect}
          onPrevAspect={handlePrevAspect}
          onNextAspect={handleNextAspect}
        />
        <div className="aspects__solution">
          <p className="aspects__solution-item">{currentSolution.solution}</p>

          <SliderNavButton
            className="aspects__solution-btn-prev"
            direction="prev"
            onClick={handlePrev}
          />
          <SliderNavButton
            className="aspects__solution-btn-next"
            direction="next"
            onClick={handleNext}
          />
        </div>
      </div>
    </section>
  )
}

