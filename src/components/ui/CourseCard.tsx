import Link from "next/link"
import {CourseItem} from "@/data/courses"


interface CourseCardProps {
  item: CourseItem;
}

export function CourseCard({item}: CourseCardProps) {
  return (
    <div className="programs__course course" id={item.slug}>
      <h5>{item.title}</h5>

      <div className="course__info">
        {item.description && (
          Array.isArray(item.description)
            ? item.description.map((p, i) => <p key={i}>{p}</p>)
            : <p>{item.description}</p>
        )}

        {item.description2 && <p>{item.description2}</p>}

        {item.list && (
          <ul className="course__list" role="list">
            {item.list.map((li, idx) => (
              <li className="course__item" key={idx}>{li}</li>
            ))}
          </ul>
        )}

        <div className="course__footer">
          {(item.previousPrice || item.currentPrice) && (
            <div className="course__prices">
              {item.previousPrice && (
                <p className="course__price-previous">{item.previousPrice}</p>
              )}
              {item.currentPrice && (
                <p className="course__price-current">
                  {item.currentPrice}
                  {item.currentPriceSuffix && <span>{item.currentPriceSuffix}</span>}
                </p>
              )}
            </div>
          )}

          <Link className="course__link" href={`/courses/${item.slug}`}>
            Узнать больше
          </Link>
        </div>
      </div>
    </div>
  );
}
