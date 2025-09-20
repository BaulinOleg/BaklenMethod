import React from 'react'
import {articles} from '@/data/articles'
import { toTimeTagDateTime, toTimeTagAriaLabel } from '@/utils/formatTimeTag'


export default function ArticlesPage() {
  return (
    <main className="articles-page">
      <div className="container">
        <h1>Статьи наших авторов</h1>

        <div className="articles-list">
          {articles.map((article) => (
            <section className="section article-block" key={article.anchor} id={article.anchor}>
              <h2>{article.title}</h2>

              <div className="article-content">
                Здесь будет содержимое статьи. Пока его нет, но вы уже можете перейти к нужной статье по якорю!
              </div>

              <p>{article.author}</p>

              <time
                dateTime={toTimeTagDateTime(article.time)}
                aria-label={toTimeTagAriaLabel(article.time)}
              >
                {article.time}
              </time>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
