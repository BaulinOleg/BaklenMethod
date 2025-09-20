import { slugify } from '@/utils/slugify'

export interface ProductBase {
  image: string,
  name: string;
  description: string;
  price: string;
}

export interface Product extends ProductBase {
  anchor: string;
}

const rawProducts: ProductBase[] = [
  {
    image: '/images/goods/01.jpg',
    name: 'Товар 1',
    description: 'Краткое описание',
    price: '12.000₽',
  },
  {
    image: '/images/goods/02.jpg',
    name: 'Товар 2',
    description: 'Краткое описание',
    price: '22.000₽',
  },
  {
    image: '/images/goods/03.jpg',
    name: 'Товар 3',
    description: 'Краткое описание',
    price: '32.000₽',
  },
  {
    image: '/images/goods/04.jpg',
    name: 'Товар 4',
    description: 'Краткое описание',
    price: '42.000₽',
  },
  {
    image: '/images/goods/05.jpg',
    name: 'Товар 5',
    description: 'Краткое описание',
    price: '52.000₽',
  },
  {
    image: '/images/goods/06.jpg',
    name: 'Товар 6',
    description: 'Краткое описание',
    price: '62.000₽',
  },
];

// Добавляем anchor и делаем якоря уникальными (если дублируются)
const slugCounts = new Map<string, number>();

export const goods: Product[] = rawProducts.map(({ image, name, description, price }) => {
  const baseSlug = slugify(name);
  const count = slugCounts.get(baseSlug) || 0;
  const uniqueSlug = count === 0 ? baseSlug : `${baseSlug}-${count}`;
  slugCounts.set(baseSlug, count + 1);

  return {
    image,
    name,
    description,
    price,
    anchor: uniqueSlug,
  };
});
