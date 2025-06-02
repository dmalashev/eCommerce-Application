import { ProductDraft } from '@commercetools/platform-sdk';

const APHEX_TWIN: ProductDraft = {
  key: 'selected-ambient-works-85-92-aphex-twin',
  productType: {
    typeId: 'product-type',
    key: 'music-media',
  },
  name: { en: 'Selected Ambient Works 85-92', ru: 'Selected Ambient Works 85-92' },
  slug: { en: 'selected-ambient-works-85-92', ru: 'selected-ambient-works-85-92' },
  description: { en: 'English electronic musician and composer', ru: 'Английский электронный музыкант и композитор' },
  masterVariant: {
    sku: 'aphex-twin' + crypto.randomUUID(),
    key: 'selected-ambient-works-85-92-aphex-twin',
    prices: [
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 12000,
        },
      },
      {
        country: 'RU',
        value: {
          type: 'centPrecision',
          currencyCode: 'RUB',
          centAmount: 12000,
        },
      },
    ],
    attributes: [
      {
        name: 'artist',
        value: 'Aphex Twin',
      },
      {
        name: 'genre',
        value: ['electronic', 'ambient', 'idm'],
      },
      {
        name: 'release_year',
        value: '1992-03-23',
      },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
          { en: 'digital', ru: 'Цифровой' },
        ],
      },

      {
        name: 'tracklist',
        value: ['Xtal', 'Pulsewidth', 'Alberto Balsalm'],
      },
      {
        name: 'country',
        value: { en: 'UK', ru: 'Великобритания' },
      },
      {
        name: 'record_label',
        value: ['Warp Records'],
      },
    ],
    images: [
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFs47L8K90OXh5wKdaWVh4pbN04mFLfsMYlw&s',
        label: 'Aphex Twin Logo',
        dimensions: { w: 300, h: 300 },
      },
      {
        url: 'https://lannerchronicle.wordpress.com/wp-content/uploads/2022/10/future-music-may-2008.jpg?w=643',
        label: 'Aphex Twin',
        dimensions: { w: 300, h: 300 },
      },
    ],
  },
  categories: [
    {
      typeId: 'category',
      key: 'cat-music-media',
    },
  ],
  metaTitle: { en: 'Aphex Twin', ru: 'Апплекс Твин' },
  publish: true,
};

const DDT_OTTEPEL: ProductDraft = {
  key: 'd-d-t-ottepel',
  productType: {
    typeId: 'product-type',
    key: 'music-media',
  },
  name: { en: 'Ottepel', ru: 'Оттепель' },
  slug: { en: 'ottepel', ru: 'ottepel' },
  description: {
    en: 'Russian rock band DDT and their album "Ottepel"',
    ru: 'Российская рок-группа ДДТ и их альбом "Оттепель"',
  },
  masterVariant: {
    sku: 'ddt-ottepel-' + crypto.randomUUID(),
    key: 'd-d-t-ottepel',
    prices: [
      {
        country: 'RU',
        value: {
          type: 'centPrecision',
          currencyCode: 'RUB',
          centAmount: 9000,
        },
      },
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 11000,
        },
      },
    ],
    attributes: [
      {
        name: 'artist',
        value: 'ДДТ',
      },
      {
        name: 'genre',
        value: ['rock', 'russian rock'],
      },
      {
        name: 'release_year',
        value: '1991-01-01',
      },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cassette', ru: 'кассета' },
          { en: 'cd', ru: 'сд' },
        ],
      },
      {
        name: 'album',
        value: [{ en: 'Ottepel', ru: 'Оттепель' }],
      },
      {
        name: 'tracklist',
        value: ['Rodina', 'Metel', 'V poslednyuyu osen', 'Prosto zhit'],
      },
      {
        name: 'country',
        value: { en: 'RU', ru: 'Россия' },
      },
      {
        name: 'record_label',
        value: ['Soyuz', 'Real Records'],
      },
    ],
    images: [
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx51MRQjKprBwcVvBWNDZ-dIn9KDoeNcrDtA&s',
        label: 'ДДТ - Оттепель',
        dimensions: { w: 300, h: 300 },
      },
    ],
  },
  categories: [
    {
      typeId: 'category',
      key: 'cat-music-media',
    },
  ],
  metaTitle: { en: 'DDT - Ottepel', ru: 'ДДТ - Оттепель' },
  publish: true,
};
const BOWIE_LETS_DANCE: ProductDraft = {
  key: 'lets-dance-david-bowie',
  productType: {
    typeId: 'product-type',
    key: 'music-media',
  },
  name: { en: "Let's Dance", ru: "Let's Dance" },
  slug: { en: 'lets-dance', ru: 'lets-dance' },
  description: {
    en: 'Album "Let\'s Dance" by English singer David Bowie',
    ru: 'Альбом "Let\'s Dance" английского певца Дэвида Боуи',
  },
  masterVariant: {
    sku: 'bowie-lets-dance-' + crypto.randomUUID(),
    key: 'lets-dance-david-bowie',
    prices: [
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 13000,
        },
      },
      {
        country: 'RU',
        value: {
          type: 'centPrecision',
          currencyCode: 'RUB',
          centAmount: 11500,
        },
      },
    ],
    attributes: [
      {
        name: 'artist',
        value: 'David Bowie',
      },
      {
        name: 'genre',
        value: ['rock', 'pop', 'new wave'],
      },
      {
        name: 'release_year',
        value: '1983-04-14',
      },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
          { en: 'digital', ru: 'Цифровой' },
        ],
      },
      {
        name: 'album',
        value: [{ en: "Let's Dance", ru: "Let's Dance" }],
      },
      {
        name: 'tracklist',
        value: ['Modern Love', 'China Girl', "Let's Dance", 'Without You'],
      },
      {
        name: 'country',
        value: { en: 'UK', ru: 'Великобритания' },
      },
      {
        name: 'record_label',
        value: ['EMI America'],
      },
    ],
    images: [
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Xh_LGkdFtH7Gk07TfbiM436JBsiPeerK4Q&s',
        label: "David Bowie - Let's Dance",
        dimensions: { w: 300, h: 300 },
      },
    ],
  },
  categories: [
    {
      typeId: 'category',
      key: 'cat-music-media',
    },
  ],
  metaTitle: { en: "David Bowie - Let's Dance", ru: "Дэвид Боуи - Let's Dance" },
  publish: true,
};
const BOWIE_STATION_TO_STATION: ProductDraft = {
  key: 'station-to-station-david-bowie',
  productType: {
    typeId: 'product-type',
    key: 'music-media',
  },
  name: { en: 'Station to Station', ru: 'Station to Station' },
  slug: { en: 'station-to-station', ru: 'station-to-station' },
  description: {
    en: 'Album "Station to Station" by English singer David Bowie',
    ru: 'Альбом "Station to Station" английского певца Дэвида Боуи',
  },
  masterVariant: {
    sku: 'bowie-station-' + crypto.randomUUID(),
    key: 'station-to-station-david-bowie',
    prices: [
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 14000,
        },
      },
      {
        country: 'RU',
        value: {
          type: 'centPrecision',
          currencyCode: 'RUB',
          centAmount: 12000,
        },
      },
    ],
    attributes: [
      {
        name: 'artist',
        value: 'David Bowie',
      },
      {
        name: 'genre',
        value: ['art rock', 'funk', 'soul', 'krautrock'],
      },
      {
        name: 'release_year',
        value: '1976-01-23',
      },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
          { en: 'digital', ru: 'Цифровой' },
        ],
      },
      {
        name: 'album',
        value: [{ en: 'Station to Station', ru: 'Station to Station' }],
      },
      {
        name: 'tracklist',
        value: ['Station to Station', 'Golden Years', 'Word on a Wing', 'TVC 15', 'Stay', 'Wild Is the Wind'],
      },
      {
        name: 'country',
        value: { en: 'UK', ru: 'Великобритания' },
      },
      {
        name: 'record_label',
        value: ['RCA Records'],
      },
    ],
    images: [
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqXy3cYu6FJolk3TKW7e5-lalTV5KL4qB6A&s',
        label: 'David Bowie - Station to Station',
        dimensions: { w: 300, h: 300 },
      },
    ],
  },
  categories: [
    {
      typeId: 'category',
      key: 'cat-music-media',
    },
  ],
  metaTitle: {
    en: 'David Bowie - Station to Station',
    ru: 'Дэвид Боуи - Station to Station',
  },
  publish: true,
};
const BEATLES_SGT_PEPPER: ProductDraft = {
  key: 'sgt-peppers-lonely-hearts-club-band-the-beatles',
  productType: {
    typeId: 'product-type',
    key: 'music-media',
  },
  name: {
    en: "Sgt. Pepper's Lonely Hearts Club Band",
    ru: 'Оркестр клуба одиноких сердец сержанта Пеппера',
  },
  slug: {
    en: 'sgt-peppers-lonely-hearts-club-band',
    ru: 'sgt-peppers-lonely-hearts-club-band',
  },
  description: {
    en: "The Beatles' groundbreaking concept album released in 1967",
    ru: 'Легендарный концептуальный альбом The Beatles, выпущенный в 1967 году',
  },
  masterVariant: {
    sku: 'beatles-sgt-pepper-' + crypto.randomUUID(),
    key: 'sgt-peppers-lonely-hearts-club-band-the-beatles',
    prices: [
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 15000,
        },
      },
      {
        country: 'RU',
        value: {
          type: 'centPrecision',
          currencyCode: 'RUB',
          centAmount: 13000,
        },
      },
    ],
    attributes: [
      {
        name: 'artist',
        value: 'The Beatles',
      },
      {
        name: 'genre',
        value: ['rock', 'psychedelic rock', 'pop'],
      },
      {
        name: 'release_year',
        value: '1967-05-26',
      },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
          { en: 'cassette', ru: 'Кассета' },
          { en: 'digital', ru: 'Цифровой' },
        ],
      },
      {
        name: 'album',
        value: [
          {
            en: "Sgt. Pepper's Lonely Hearts Club Band",
            ru: 'Оркестр клуба одиноких сердец сержанта Пеппера',
          },
        ],
      },
      {
        name: 'tracklist',
        value: [
          "Sgt. Pepper's Lonely Hearts Club Band",
          'With a Little Help from My Friends',
          'Lucy in the Sky with Diamonds',
          'Getting Better',
          'Fixing a Hole',
          "She's Leaving Home",
          'Being for the Benefit of Mr. Kite!',
          'Within You Without You',
          'When I’m Sixty-Four',
          'Lovely Rita',
          'Good Morning Good Morning',
          'A Day in the Life',
        ],
      },
      {
        name: 'country',
        value: { en: 'UK', ru: 'Великобритания' },
      },
      {
        name: 'record_label',
        value: ['Parlophone', 'Capitol'],
      },
    ],
    images: [
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUVEzNQM_PcmuwnI-htkcow5bFAb1lEPE7w&s',
        label: 'Sgt. Pepper Album Cover',
        dimensions: { w: 300, h: 300 },
      },
    ],
  },
  categories: [
    {
      typeId: 'category',
      key: 'cat-music-media',
    },
  ],
  metaTitle: {
    en: "The Beatles - Sgt. Pepper's Lonely Hearts Club Band",
    ru: 'The Beatles - Оркестр клуба одиноких сердец сержанта Пеппера',
  },
  publish: true,
};
const POLICE_ZENYATTA: ProductDraft = {
  key: 'zenyatta-mondatta-the-police',
  productType: {
    typeId: 'product-type',
    key: 'music-media',
  },
  name: {
    en: 'Zenyatta Mondatta',
    ru: 'Зенятта Мондатта',
  },
  slug: {
    en: 'zenyatta-mondatta',
    ru: 'zenyatta-mondatta',
  },
  description: {
    en: "The Police's third studio album blending rock, reggae, and new wave, released in 1980",
    ru: 'Третий студийный альбом The Police в жанрах рок, регги и нью-вейв, выпущенный в 1980 году',
  },
  masterVariant: {
    sku: 'the-police-zenyatta-' + crypto.randomUUID(),
    key: 'zenyatta-mondatta-the-police',
    prices: [
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 14000,
        },
      },
      {
        country: 'RU',
        value: {
          type: 'centPrecision',
          currencyCode: 'RUB',
          centAmount: 11000,
        },
      },
    ],
    attributes: [
      {
        name: 'artist',
        value: 'The Police',
      },
      {
        name: 'genre',
        value: ['rock', 'reggae', 'new wave'],
      },
      {
        name: 'release_year',
        value: '1980-10-03',
      },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
          { en: 'cassette', ru: 'Кассета' },
        ],
      },
      {
        name: 'album',
        value: [
          {
            en: 'Zenyatta Mondatta',
            ru: 'Зенятта Мондатта',
          },
        ],
      },
      {
        name: 'tracklist',
        value: [
          "Don't Stand So Close to Me",
          'Driven to Tears',
          "When the World Is Running Down, You Make the Best of What's Still Around",
          'Canary in a Coalmine',
          'Voices Inside My Head',
          'Bombs Away',
          'De Do Do Do, De Da Da Da',
          'Behind My Camel',
          'Man in a Suitcase',
          'Shadows in the Rain',
          'The Other Way of Stopping',
        ],
      },
      {
        name: 'country',
        value: { en: 'UK', ru: 'Великобритания' },
      },
      {
        name: 'record_label',
        value: ['A&M Records'],
      },
    ],
    images: [
      {
        url: 'https://m.media-amazon.com/images/I/71InwRmyNvL._UF1000,1000_QL80_.jpg',
        label: 'Zenyatta Mondatta Album Cover',
        dimensions: { w: 300, h: 300 },
      },
    ],
  },
  categories: [
    {
      typeId: 'category',
      key: 'cat-music-media',
    },
  ],
  metaTitle: {
    en: 'The Police - Zenyatta Mondatta',
    ru: 'The Police - Зенятта Мондатта',
  },
  publish: true,
};
const PARALLEL_LINES: ProductDraft = {
  key: 'parallel-lines-blondie',
  productType: {
    typeId: 'product-type',
    key: 'music-media',
  },
  name: {
    en: 'Parallel Lines',
    ru: 'Parallel Lines',
  },
  slug: {
    en: 'parallel-lines',
    ru: 'parallel-lines',
  },
  description: {
    en: "Blondie's breakthrough third studio album, blending punk, pop, and disco, released in 1978",
    ru: 'Прорывной третий студийный альбом Blondie, сочетающий панк, поп и диско, выпущенный в 1978 году',
  },
  masterVariant: {
    sku: 'blondie-parallel-lines-' + crypto.randomUUID(),
    key: 'parallel-lines-blondie',
    prices: [
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 13000,
        },
      },
      {
        country: 'RU',
        value: {
          type: 'centPrecision',
          currencyCode: 'RUB',
          centAmount: 9500,
        },
      },
    ],
    attributes: [
      {
        name: 'artist',
        value: 'Blondie',
      },
      {
        name: 'genre',
        value: ['punk', 'pop', 'disco'],
      },
      {
        name: 'release_year',
        value: '1978-09-23',
      },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
          { en: 'cassette', ru: 'Кассета' },
        ],
      },
      {
        name: 'album',
        value: [
          {
            en: 'Parallel Lines',
            ru: 'Parallel Lines',
          },
        ],
      },
      {
        name: 'tracklist',
        value: [
          'Hanging on the Telephone',
          'One Way or Another',
          'Picture This',
          'Fade Away and Radiate',
          'Pretty Baby',
          'I Know But I Don’t Know',
          '11:59',
          'Will Anything Happen?',
          'Sunday Girl',
          'Heart of Glass',
          'I’m Gonna Love You Too',
          'Just Go Away',
        ],
      },
      {
        name: 'country',
        value: { en: 'US', ru: 'США' },
      },
      {
        name: 'record_label',
        value: ['Chrysalis Records'],
      },
    ],
    images: [
      {
        url: 'https://i.discogs.com/xgABqL7lFN6aZWS6xrgm7KlDLYdvMXyNFSbWgvr8gp0/rs:fit/g:sm/q:90/h:582/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2NzEw/OTMwLTE2MDkzNzY2/NDQtMzUyMS5qcGVn.jpeg',
        label: 'Parallel Lines Album Cover',
        dimensions: { w: 300, h: 300 },
      },
    ],
  },
  categories: [
    {
      typeId: 'category',
      key: 'cat-music-media',
    },
  ],
  metaTitle: {
    en: 'Blondie - Parallel Lines',
    ru: 'Blondie - Parallel Lines',
  },
  publish: true,
};
const VIOLATOR: ProductDraft = {
  key: 'violator-depeche-mode',
  productType: {
    typeId: 'product-type',
    key: 'music-media',
  },
  name: {
    en: 'Violator',
    ru: 'Violator',
  },
  slug: {
    en: 'violator',
    ru: 'violator',
  },
  description: {
    en: "Depeche Mode's landmark 1990 album, blending synth-pop and dark electronic rock",
    ru: 'Знаковый альбом Depeche Mode 1990 года, сочетающий синти-поп и тёмный электронный рок',
  },
  masterVariant: {
    sku: 'depeche-mode-violator-' + crypto.randomUUID(),
    key: 'violator-depeche-mode',
    prices: [
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 15000,
        },
      },
      {
        country: 'RU',
        value: {
          type: 'centPrecision',
          currencyCode: 'RUB',
          centAmount: 12000,
        },
      },
    ],
    attributes: [
      {
        name: 'artist',
        value: 'Depeche Mode',
      },
      {
        name: 'genre',
        value: ['synth-pop', 'electronic', 'dark wave'],
      },
      {
        name: 'release_year',
        value: '1990-03-19',
      },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
          { en: 'digital', ru: 'Цифровой' },
        ],
      },
      {
        name: 'album',
        value: [
          {
            en: 'Violator',
            ru: 'Violator',
          },
        ],
      },
      {
        name: 'tracklist',
        value: [
          'World in My Eyes',
          'Sweetest Perfection',
          'Personal Jesus',
          'Halo',
          'Waiting for the Night',
          'Enjoy the Silence',
          'Policy of Truth',
          'Blue Dress',
          'Clean',
        ],
      },
      {
        name: 'country',
        value: { en: 'UK', ru: 'Великобритания' },
      },
      {
        name: 'record_label',
        value: ['Mute Records'],
      },
    ],
    images: [
      {
        url: 'https://m.media-amazon.com/images/I/714McwlTjNL._UF1000,1000_QL80_.jpg',
        label: 'Violator Album Cover',
        dimensions: { w: 300, h: 300 },
      },
    ],
  },
  categories: [
    {
      typeId: 'category',
      key: 'cat-music-media',
    },
  ],
  metaTitle: {
    en: 'Depeche Mode - Violator',
    ru: 'Depeche Mode - Violator',
  },
  publish: true,
};
export const PRODUCTS: ProductDraft[] = [
  { ...APHEX_TWIN },
  { ...DDT_OTTEPEL },
  { ...BOWIE_LETS_DANCE },
  { ...BOWIE_STATION_TO_STATION },
  { ...BEATLES_SGT_PEPPER },
  { ...POLICE_ZENYATTA },
  { ...PARALLEL_LINES },
  { ...VIOLATOR },
];
