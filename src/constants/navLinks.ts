export enum NavHref {
  Method = '#method',
  Author = '#author',
  Courses = '#courses',
  Team = '#team',
  Goods = '#goods',
  Articles = '#articles',
  Contacts = '#contacts',
}

export interface NavLink {
  href: NavHref;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: NavHref.Method, label: 'О методе' },
  { href: NavHref.Author, label: 'Об авторе' },
  { href: NavHref.Courses, label: 'Курсы' },
  { href: NavHref.Team, label: 'Команда' },
  { href: NavHref.Goods, label: 'Товары' },
  { href: NavHref.Articles, label: 'Статьи' },
  { href: NavHref.Contacts, label: 'Контакты' },
];
