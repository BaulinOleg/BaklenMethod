import Consultation from "@/components/popup/Consultation"
import {heroItems} from "@/data/hero-list"


export default function Hero() {
  return (
    <section className="section hero">
      <div className="container">
        <div className="hero__title">
          <h1>Baklen<br/><span>Method</span></h1>
          <p>искусство заботы о себе</p>
          <div className="hero__slogan">Тело + Ум + Дух</div>
          <div className="hero__subtitle">
            <p>Авторская программа<br/><span>тернировок, охватывающая многие сферы жизни человека</span></p>
          </div>
        </div>
        <ul className="hero__list" role='list'>
          {heroItems.map((item, index) => (
            <li className="hero__list-item" key={index}>
              <p>{item.item}</p>
            </li>
          ))}
        </ul>
        <Consultation/>
      </div>
    </section>
  );
}