import { ContentObject } from './temporary';
import coverImg1 from './David-bowie-lets-dance.jpg';
import coverImg2 from './m1000x1000.jfif';
import coverImg3 from './m1000x1000 (1).jfif';
import coverImg4 from './m1000x1000 (2).jfif';
import coverImg5 from './m1000x1000 (3).jfif';
import coverImg6 from './m1000x1000 (4).jfif';
import coverImg7 from './m1000x1000 (5).jfif';
import coverImg8 from './m1000x1000 (6).jfif';
import coverImg9 from './m1000x1000 (7).jfif';

export const cards: ContentObject[] = [
  {
    cover: coverImg1,
    name: "Let's Dance",
    author: 'David Bowie',
    year: 1983,
    price: 14.99,
  },
  {
    cover: coverImg2,
    name: 'Городские и цыганские романсы и несколько своих из концертов (В Клубе "пушкарев" 21 И 24 Января 2021 Live)',
    author: 'Пётр Налич, Иван Жук',
    year: 2022,
    price: 9.99,
    discount: 0.3,
  },
  {
    cover: coverImg3,
    name: 'Selected Ambient Works 85-92',
    author: 'Aphex Twin',
    year: 1992,
    price: 19.99,
  },
  {
    cover: coverImg4,
    name: 'Оттепель',
    author: 'ДДТ',
    year: 1991,
    price: 19.99,
  },
  {
    cover: coverImg5,
    name: 'Station to Station',
    author: 'David Bowie',
    year: 1976,
    price: 19.99,
  },
  {
    cover: coverImg6,
    name: "Sgt. Pepper's Lonely Hearts Club Band",
    author: 'The Beatles',
    year: 1967,
    price: 19.99,
  },
  {
    cover: coverImg7,
    name: 'Zenyatta Mondatta',
    author: 'The Police',
    year: 1980,
    price: 19.99,
  },
  {
    cover: coverImg8,
    name: 'Parallel Lines',
    author: 'Blondie',
    year: 1978,
    price: 19.99,
  },
  {
    cover: coverImg9,
    name: 'Violator',
    author: 'Depeche Mode',
    year: 1990,
    price: 19.99,
  },
];
