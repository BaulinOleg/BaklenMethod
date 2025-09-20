import { slugify } from '@/utils/slugify'

export interface ArticleBase {
  title: string;
  author: string;
  time: string;
}

export interface Article extends ArticleBase {
  anchor: string;
}

const rawArticles: ArticleBase[] = [
  {
    title: 'Подробно о Baklen Method',
    author: 'Александр Бакушин',
    time: '19.08.2025',
  },
  {
    title: 'Восстановление организма - наиважнейшая часть тренировки',
    author: 'Мария Ковалёва',
    time: '19.08.2025',
  },
  {
    title: 'Желание мгновенного результата — ошибка',
    time: '19.08.2025',
    author: 'Алексей Новиков',
  },
  {
    title: 'Как тренироваться, когда нет времени',
    time: '19.08.2025',
    author: 'Анна Серебрякова',
  },
  {
    title: 'Питание до и после тренировок: основы',
    time: '19.08.2025',
    author: 'Дмитрий Кулагин',
  },
  {
    title: 'Что мешает прогрессу: 5 распространённых ошибок',
    time: '19.08.2025',
    author: 'Елена Громова',
  },
];

// Добавляем anchor и делаем якоря уникальными (если дублируются)
const slugCounts = new Map<string, number>();

export const articles: Article[] = rawArticles.map(({ title, author, time }) => {
  const baseSlug = slugify(title);
  const count = slugCounts.get(baseSlug) || 0;
  const uniqueSlug = count === 0 ? baseSlug : `${baseSlug}-${count}`;
  slugCounts.set(baseSlug, count + 1);

  return {
    title,
    author,
    time,
    anchor: uniqueSlug,
  };
});
