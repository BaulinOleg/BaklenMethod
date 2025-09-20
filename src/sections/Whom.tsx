import Image from "next/image"
import fits from "@/data/fits"
import noFits from "@/data/nofits"
import AccordionItem from "@/components/ui/AccordionItem"

export default function Whom() {
  return (
    <section className="whom" id="whom">
      <div className="container">
        <div className="whom__wrapper">

          <ul className="whom__fits whom__list" role="list">
            <h2 className="whom__title">Методика<br />подходит для</h2>
            {fits.map((item, index) => (
              <AccordionItem
                className="whom__item"
                summaryClassName="whom__summary"
                bodyClassName="whom__body"
                key={index}
                defaultOpen={index === 0}
                titleContent={<h3 className="whom__item-title">{item.title}</h3>}
              >
                <h4>ЕСЛИ ВЫ</h4>
                <p>{item.ifYou}</p>
                <h4>BAKLEN METHOD</h4>
                <p>{item.method}</p>
              </AccordionItem>
            ))}
          </ul>

          <ul className="whom__no-fits whom__list" role="list">
            <h2 className="whom__title">
              Кому{" "}
              <span>
                <Image
                  src="/images/whom/whom-not.png"
                  alt="Не"
                  width={85}
                  height={55}
                  loading="lazy"
                />
              </span>{" "}
              подойдет<br />данная программа
            </h2>
            {noFits.map((item, index) => (
              <AccordionItem
                className="whom__item"
                summaryClassName="whom__summary"
                bodyClassName="whom__body"
                key={index}
                defaultOpen={index === 0}
                titleContent={<h3 className="whom__item-title">{item.title}</h3>}
              >
                <h4>ЛЮДИ КОТОРЫЕ</h4>
                <p>{item.ifYou}</p>
                <p>
                  {item.description.map((desc, i) =>
                    typeof desc === "string" ? (
                      <span key={i}>{desc}</span>
                    ) : (
                      <strong key={i}>{desc.strongText}</strong>
                    )
                  )}
                </p>
              </AccordionItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

