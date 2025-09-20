'use client';

import { useRef, useEffect, useState } from 'react';
import { differenceItems } from '@/data/differences';
import DifferencesSlider, { DifferencesSliderRef } from '@/components/sliders/DifferencesSlider';

export default function Differences() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<DifferencesSliderRef>(null);
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  const handleToggle = (index: number) => {
    const clickedDetails = detailsRefs.current[index];

    // Если кликнутый details открыт — обновляем активный индекс
    if (clickedDetails?.open) {
      setActiveIndex(index);
    } else {}
  };

  // Открываем только текущий activeIndex, остальные закрываем
  useEffect(() => {
    detailsRefs.current.forEach((details, idx) => {
      if (details) {
        details.open = idx === activeIndex;
      }
    });
  }, [activeIndex]);

  return (
    <section className="section differences">
      <div className="container">
        <div className="differences__title">
          <h2>
            В чем отличие <span>Baklen Method</span>
            <br />
            от обычных тренировок
          </h2>
        </div>
        <div className="differences__wrapper">
          <ul className="differences__accordion-list" role="list">
            {differenceItems.map((item, index) => (
              <li className="differences__accordion-item" key={index}>
                <details
                  className={`differences__accordion ${index === activeIndex ? 'is-active' : ''}`}
                  ref={(el) => {
                    detailsRefs.current[index] = el;
                  }}
                  onToggle={() => handleToggle(index)}
                >
                  <summary className="differences__accordion-title">
                    <h3>{item.title}</h3>
                  </summary>
                  <div
                    className={`differences__accordion-body differences__accordion-body--${item.imageKey}`}
                  >
                    {item.description.map((desc, i) => (
                      <p key={i}>
                        {desc.bold && <strong>{desc.bold}</strong>}
                        {desc.text}
                      </p>
                    ))}
                  </div>
                </details>
              </li>
            ))}
          </ul>
          <DifferencesSlider ref={sliderRef} onSlideChange={setActiveIndex} />
        </div>
        <div className="differences__conclusion">
          <p>
            Эти особенности делают методику Baklen Method уникальной и эффективной,
            <span> отличая ее от традиционных тренировочных программ.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
