import React from 'react'
import {goods} from '@/data/goods'
import FallbackImage from '@/components/common/FallbackImage'
import '@/styles/pages/_goods-page.scss'


export default function GoodsPage() {
  return (
    <main className="goods-page">
      <div className="container">
        <h1 className="goods-page__title">Товары Baklen Method</h1>

        {goods.map((product) => (
          <section className="section goods-section" key={product.anchor} id={product.anchor}>
            <div className="goods-card">
              <div className="goods-card__image">
                <FallbackImage
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
              </div>
              <div className="goods-card__info">
                <h2 className="goods-card__name">{product.name}</h2>
                <p className="goods-card__desc">{product.description}</p>
                <p className="goods-card__price">{product.price}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
