import AccordionItem from "@/components/ui/AccordionItem"
import {coursesData, CourseCategory, CourseSection, CourseItem} from '@/data/courses'
import {CourseCard} from "@/components/ui/CourseCard"


export default function Programs() {
  return (
    <section className="programs section" id="courses">
      <div className="container">
        <h2 className="programs__title">Готовые программы и цены</h2>

        {coursesData.map((category: CourseCategory, index) => (
          <section key={category.title} className={`programs__inner programs__inner${index + 1}`}>
            <h3 className="programs__section-title">{category.title}</h3>

            <ul className="programs__list" role="list">
              {category.sections.map((section: CourseSection) => (
                <AccordionItem
                  key={section.title}
                  className="programs__item"
                  summaryClassName="programs__summary"
                  bodyClassName="programs__body"
                  defaultOpen={index === 0}
                  titleContent={<h4 className="programs__item-title">{section.title}</h4>}
                >
                  <div className="programs__cards">
                    {section.items.map((item: CourseItem) => (
                      <CourseCard key={item.slug} item={item}/>
                    ))}
                  </div>
                </AccordionItem>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
