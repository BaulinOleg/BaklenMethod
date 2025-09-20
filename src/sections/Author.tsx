import ReviewsSlider from "@/components/sliders/ReviewsSlider";
import Link from "next/link";
import Consultation from "@/components/popup/Consultation";


export default function Author() {
  return (
    <section className="section" id="author">
      <div className="author">
        <div className="author__title">
          <p>Основатель Baklen method </p>
          <h2>Александр Бакушин</h2>
        </div>
        <div className="author__numbers">
          <ul className="author__top-list" role="list">
            <li className="author__item">
              <h3>&gt;750 <span>человек</span></h3>
              <p>уже познакомились с моей методикой, повысив уровень здоровья и социальной жизни</p>
            </li>
            <li className="author__item">
              <h3>26 <span>лет</span></h3>
              <p>занимаюсь различными видами спорта и физической активности: фитнес, боевые искусства, кроссфит, йога,
                бег, игровые виды спорта и т.п.</p>
            </li>
          </ul>
          <ul className="author__bottom-list" role="list">
            <li className="author__item">
              <h3>16 <span>лет</span></h3>
              <p>помогаю спортсменам и новичкам улучшать физические показатели и состояние здоровья</p>
            </li>
            <li className="author__item">
              <h3>16 <span>тонн</span></h3>
              <p>избыточного веса помог сбросить женщинам и мужчинам, благодаря совместной работе</p>
            </li>
          </ul>
        </div>
        <div className="author__text">
          <p>Я тщательно отбираю каждого клиента, чтобы понять, чем программа Baklen method может вам помочь.</p>
          <p>Для этого провожу диагностическую сессию, чтобы выявить проблемы и понять, готовы ли вы к работе над
            собой.</p>
        </div>
        <div className="author__inner">
          {/*<Link href="/diagnosis">Пройти бесплатную<br/> онлайн-диагностику</Link>*/}
          <Consultation />
          <Link href="/author">Подробнее обо мне</Link>
        </div>
        <blockquote className="author__quote">
          <p>&ldquo;Посвятив свою жизнь спорту, я адаптировал движения из различных спортивных направлений под определённые цели
            и задачи, создав неповторимый агрегатор методик. 5 лет структурировал, 5 лет оптимизировал и теперь готов
            делиться этим с тобой.&rdquo;</p>
        </blockquote>
      </div>
      <div className="container-wide">
        <ReviewsSlider/>
      </div>
    </section>
  );
}