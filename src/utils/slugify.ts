export function slugify(str: string): string {
  const charMap: Record<string, string> = {
    а: 'a', б: 'b', в: 'v', г: 'g', д: 'd',
    е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i',
    й: 'y', к: 'k', л: 'l', м: 'm', н: 'n',
    о: 'o', п: 'p', р: 'r', с: 's', т: 't',
    у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch',
    ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '',
    э: 'e', ю: 'yu', я: 'ya',
    А: 'A', Б: 'B', В: 'V', Г: 'G', Д: 'D',
    Е: 'E', Ё: 'E', Ж: 'Zh', З: 'Z', И: 'I',
    Й: 'Y', К: 'K', Л: 'L', М: 'M', Н: 'N',
    О: 'O', П: 'P', Р: 'R', С: 'S', Т: 'T',
    У: 'U', Ф: 'F', Х: 'H', Ц: 'Ts', Ч: 'Ch',
    Ш: 'Sh', Щ: 'Sch', Ъ: '', Ы: 'Y', Ь: '',
    Э: 'E', Ю: 'Yu', Я: 'Ya'
  };

  const transliterated = str
    .split('')
    .map(char => charMap[char] || char)
    .join('');

  const slug = transliterated
    .toLowerCase()
    .normalize('NFD')                                                   // нормализация юникода
    .replace(/[\u0300-\u036f]/g, '')                 // удаление диакритики
    .replace(/\s+/g, '-')                            // пробелы -> тире
    .replace(/[^a-z0-9_-]+/g, '')                    // оставить только нужные символы
    .replace(/--+/g, '-')                            // несколько тире -> одно
    .replace(/^-+|-+$/g, '');                        // обрезаем тире в начале/конце

  return slug || 'article';
}
