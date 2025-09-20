import Logotype from '@/components/Logotype'
import Navigation from '@/components/Navigation'
import {articles} from '@/data/articles'
import Link from "next/link"


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__inner">
            <Logotype className="logotype--footer" text="Подойди к тренировкам осознанно"/>
            <div className="contacts__links">
              <a
                className="contacts__link"
                href="tel:+79999999999"
              >
                +7 (999) 999-99-99
              </a>
              <a
                className="contacts__link"
                href="mailto:info@baklen.site"
              >
                info@baklen.site
              </a>
            </div>
          </div>
          <div className="footer__inner">
            <div className="footer__column">
              <h3 className="footer__column-title">Навигация:</h3>
              <Navigation
                className="footer__nav"
                listClassName="footer__list"
                itemClassName="footer__item"
                linkClassName="footer__link"
                activeClassName="footer__link--active"
              />
            </div>
            <div className="footer__column">
              <h3 className="footer__column-title">Полезные статьи:</h3>
              <ul className="footer__articles-list footer__list" role="list">
                {articles.map((article) => (
                <li className="footer__articles-item" key={article.anchor}>
                  <Link className="footer__articles-link footer__link" href={`/articles#${article.anchor}`}>{article.title}</Link>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          2025 Авторская программа Baklen Method - больше, чем тренировка тела
        </p>
      </div>
    </footer>
  );
}