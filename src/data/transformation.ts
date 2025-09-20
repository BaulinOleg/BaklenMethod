export interface TransformationData {
  name: string;
  age: number;
  description: {
    bold: string;
    text: string;
  }[];
  beforeImg: string;
  afterImg: string;
}

export const transformationData: TransformationData[] = [
  {
    name: 'Лопатина Наталья',
    age: 33,
    description: [
      {
        bold: 'Проблема – вес.',
        text: ' Решилась быстро. За полгода – минус 20 кг (15 из них в первые 3 месяца).',
      },
      {
        bold: 'Идеален во всем:',
        text: ' качестве тренировок, индивидуальном подходе, понимании клиента. Тренеру не пофиг! Чувствуется, что ему важен результат – твое здоровье и хорошее самочувствие. Интересные разнообразные тренировки, которые не надоедают, хотя приходится и попотеть.',
      },
    ],
    beforeImg: '/images/transformation/01.jpg',
    afterImg: '/images/transformation/02.jpg',
  },
  {
    name: 'Кузюкина Екатерина',
    age: 43,
    description: [
      {
        bold: 'Проблема – повисла жопа.',
        text: ' Решилась быстро. За полгода – лошадиный круп.',
      },
      {
        bold: 'Идеален во всем:',
        text: ' качестве тренировок, индивидуальном подходе, понимании клиента. Тренеру не пофиг! Чувствуется, что ему важен результат – твое здоровье и хорошее самочувствие. Интересные разнообразные тренировки, которые не надоедают, хотя приходится и попотеть.',
      },
    ],
    beforeImg: '/images/transformation/03.jpg',
    afterImg: '/images/transformation/04.jpg',
  },
];

