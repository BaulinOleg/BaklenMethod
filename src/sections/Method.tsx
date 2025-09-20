import HelpSlider from "@/components/sliders/HelpSlider"
import {methodNavList} from "@/data/method-nav-list"
import Image from "next/image"
import Link from "next/link"


export default function Method() {
  return (
    <section className="section method" id="method">
      <div className="container-wide-s">
        <div className="method__wrapper">
          <div className="container">
            <div className="method__inner">
              <h2 className="method__title">Программа тренировок,<br/>
                <span>
              выходящая
              <Image
                src="/images/method/method-text.png"
                alt="за рамки"
                width={488}
                height={179}
                loading="lazy"
              />
            </span><br/>
                физических упражнений</h2>
              <div className="method__text">
                <p>Истинное преображение начинается с гармонии внутри вас!</p>
                <p>Наш подход объединяет физическую активность, эмоциональный баланс и энергетическое развитие.
                  Позволяя достичь результат не разово, на короткий период, а сделать этот результат жизнью,
                  превращая ее в настоящее произведение искусства, наполненное качеством и смыслом!</p>
              </div>
              <div className="method__nav">
                <ul className="method__nav-list" role="list">
                  {methodNavList.map(({title, link}) => (
                    <li className="method__nav-item" key={title}>
                      <Link className="method__nav-link" href={link}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="method__author">
            <p>Александр Бакушин</p>
            <p>тренер, автор программы<br/>Baklen Method</p>
          </div>
          <div className="method__slogan">
            <p>Истинное преображение<br/>начинается с гармонии<br/>внутри вас!</p>
          </div>
        </div>
      </div>
      <div className="container-wide">
        <HelpSlider/>
      </div>
    </section>
  );
}