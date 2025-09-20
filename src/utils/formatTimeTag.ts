export function toTimeTagDateTime(dateStr: string): string {
  const [day, month, year] = dateStr.split('.');
  if (!day || !month || !year) return '';
  return `${year}-${month}-${day}`;
}

export function toTimeTagAriaLabel(dateStr: string, locale: string = 'ru-RU'): string {
  const [day, month, year] = dateStr.split('.');
  const date = new Date(`${year}-${month}-${day}`);
  if (isNaN(date.getTime())) return dateStr;

  return date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
