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
          { en: 'cassette', ru: 'кассета' },
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
          { en: 'cassette', ru: 'кассета' },
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
          { en: 'cassette', ru: 'кассета' },
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
          { en: 'cassette', ru: 'кассета' },
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
          { en: 'cassette', ru: 'кассета' },
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
const PINK_FLOYD: ProductDraft = {
  key: 'the-dark-side-of-the-moon-pink-floyd',
  productType: {
    typeId: 'product-type',
    key: 'music-media',
  },
  name: { en: 'The Dark Side of the Moon', ru: 'Тёмная сторона Луны' },
  slug: { en: 'the-dark-side-of-the-moon', ru: 'tyomnaya-storona-luny' },
  description: { en: 'Legendary progressive rock album', ru: 'Легендарный альбом прогрессивного рока' },
  masterVariant: {
    sku: 'pink-floyd-' + crypto.randomUUID(),
    key: 'the-dark-side-of-the-moon-pink-floyd',
    prices: [
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 2500,
        },
      },
      {
        country: 'RU',
        value: {
          type: 'centPrecision',
          currencyCode: 'RUB',
          centAmount: 18000,
        },
      },
    ],
    attributes: [
      {
        name: 'artist',
        value: 'Pink Floyd',
      },
      {
        name: 'genre',
        value: ['rock', 'art-rock'],
      },
      {
        name: 'release_year',
        value: '1973-03-01',
      },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      {
        name: 'tracklist',
        value: ['Speak to Me', 'Breathe', 'Time', 'Money'],
      },
      {
        name: 'country',
        value: { en: 'UK', ru: 'Великобритания' },
      },
      {
        name: 'record_label',
        value: ['Harvest Records'],
      },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png',
        label: 'Dark Side of the Moon Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [
    {
      typeId: 'category',
      key: 'cat-music-media',
    },
  ],
  metaTitle: { en: 'Pink Floyd', ru: 'Пинк Флойд' },
  publish: true,
};
export const productDrafts: ProductDraft[] = [
  {
    key: 'ambient-1-music-for-airports-brian-eno',
    productType: { typeId: 'product-type', key: 'music-media' },
    name: { en: 'Ambient 1: Music for Airports', ru: 'Ambient 1: Музыка для аэропортов' },
    slug: { en: 'ambient-1-music-for-airports', ru: 'ambient-1-music-for-airports' },
    description: {
      en: 'Pioneering ambient album by Brian Eno.',
      ru: 'Пионерский альбом амбиентной музыки от Брайана Ино.',
    },
    masterVariant: {
      sku: 'brian-eno-ambient-1-' + crypto.randomUUID(),
      key: 'ambient-1-music-for-airports-brian-eno',
      prices: [
        { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 15000 } },
        { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 13000 } },
      ],
      attributes: [
        { name: 'artist', value: 'Brian Eno' },
        { name: 'genre', value: ['ambient', 'art rock'] },
        { name: 'release_year', value: '1978-01-01' },
        {
          name: 'format',
          value: [
            { en: 'vinyl', ru: 'винил' },
            { en: 'cd', ru: 'CD' },
            { en: 'cassette', ru: 'кассета' },
          ],
        },
        { name: 'tracklist', value: ['1/1', '1/2', '2/1', '2/2'] },
        { name: 'country', value: { en: 'UK', ru: 'Великобритания' } },
        { name: 'record_label', value: ['Island Records'] },
      ],
      images: [
        {
          url: 'https://pitchblackplayback.com/cdn/shop/products/brianenopbpb_2ece74db-feda-40d7-ab19-3c827acd14ba.jpg?v=1635956849',
          label: 'Ambient 1 Album Cover',
          dimensions: { w: 300, h: 300 },
        },
      ],
    },
    categories: [{ typeId: 'category', key: 'cat-music-media' }],
    metaTitle: { en: 'Brian Eno - Ambient 1', ru: 'Brian Eno - Ambient 1' },
    publish: true,
  },

  {
    key: 'substrata-biosphere',
    productType: { typeId: 'product-type', key: 'music-media' },
    name: { en: 'Substrata', ru: 'Substrata' },
    slug: { en: 'substrata', ru: 'substrata' },
    description: {
      en: 'Chilling ambient soundscapes from Norway.',
      ru: 'Холодные амбиентные пейзажи из Норвегии.',
    },
    masterVariant: {
      sku: 'biosphere-substrata-' + crypto.randomUUID(),
      key: 'substrata-biosphere',
      prices: [
        { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 14000 } },
        { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 12000 } },
      ],
      attributes: [
        { name: 'artist', value: 'Biosphere' },
        { name: 'genre', value: ['ambient'] },
        { name: 'release_year', value: '1997-06-01' },
        {
          name: 'format',
          value: [
            { en: 'vinyl', ru: 'винил' },
            { en: 'cd', ru: 'CD' },
            { en: 'cassette', ru: 'кассета' },
          ],
        },
        { name: 'tracklist', value: ['The Things I Tell You', 'Hyperborea', 'Antennaria'] },
        { name: 'country', value: { en: 'USA', ru: 'США' } },
        { name: 'record_label', value: ['Touch'] },
      ],
      images: [
        {
          url: 'https://i.scdn.co/image/ab67616d0000b273ff62d9a27c00cbc97cdc9983',
          label: 'Substrata Album Cover',
          dimensions: { w: 300, h: 300 },
        },
      ],
    },
    categories: [{ typeId: 'category', key: 'cat-music-media' }],
    metaTitle: { en: 'Biosphere - Substrata', ru: 'Biosphere - Substrata' },
    publish: true,
  },

  {
    key: 'tri-repetae-autechre',
    productType: { typeId: 'product-type', key: 'music-media' },
    name: { en: 'Tri Repetae', ru: 'Tri Repetae' },
    slug: { en: 'tri-repetae', ru: 'tri-repetae' },
    description: {
      en: 'Abstract and experimental electronic textures.',
      ru: 'Абстрактная и экспериментальная электронная музыка.',
    },
    masterVariant: {
      sku: 'autechre-tri-repetae-' + crypto.randomUUID(),
      key: 'tri-repetae-autechre',
      prices: [
        { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 16000 } },
        { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 12500 } },
      ],
      attributes: [
        { name: 'artist', value: 'Autechre' },
        { name: 'genre', value: ['idm', 'ambient'] },
        { name: 'release_year', value: '1995-11-06' },
        {
          name: 'format',
          value: [
            { en: 'vinyl', ru: 'винил' },
            { en: 'cd', ru: 'CD' },
            { en: 'cassette', ru: 'кассета' },
          ],
        },
        { name: 'tracklist', value: ['Clipper', 'Leterel', 'Stud'] },
        { name: 'country', value: { en: 'UK', ru: 'Великобритания' } },
        { name: 'record_label', value: ['Warp Records'] },
      ],
      images: [
        {
          url: 'https://images.genius.com/89151c62dd4fd02e5eeea842d309b161.1000x1000x1.jpg',
          label: 'Tri Repetae Album Cover',
          dimensions: { w: 300, h: 300 },
        },
      ],
    },
    categories: [{ typeId: 'category', key: 'cat-music-media' }],
    metaTitle: { en: 'Autechre - Tri Repetae', ru: 'Autechre - Tri Repetae' },
    publish: true,
  },
  {
    key: 'discreet-music-brian-eno',
    productType: { typeId: 'product-type', key: 'music-media' },
    name: { en: 'Discreet Music', ru: 'Discreet Music' },
    slug: { en: 'discreet-music', ru: 'discreet-music' },
    description: {
      en: 'Influential ambient album by Brian Eno.',
      ru: 'Влиятельный амбиентный альбом Брайана Ино.',
    },
    masterVariant: {
      sku: 'brian-eno-discreet-music-' + crypto.randomUUID(),
      key: 'discreet-music-brian-eno',
      prices: [
        { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 13500 } },
        { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 11500 } },
      ],
      attributes: [
        { name: 'artist', value: 'Brian Eno' },
        { name: 'genre', value: ['ambient'] },
        { name: 'release_year', value: '1975-06-01' },
        {
          name: 'format',
          value: [
            { en: 'vinyl', ru: 'винил' },
            { en: 'cd', ru: 'CD' },
            { en: 'cassette', ru: 'кассета' },
          ],
        },
        { name: 'tracklist', value: ['Discreet Music'] },
        { name: 'country', value: { en: 'UK', ru: 'Великобритания' } },
        { name: 'record_label', value: ['Obscure Records'] },
      ],
      images: [
        {
          url: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Discreet_Music_Virgin.jpg',
          label: 'Discreet Music Album Cover',
          dimensions: { w: 300, h: 300 },
        },
      ],
    },
    categories: [{ typeId: 'category', key: 'cat-music-media' }],
    metaTitle: { en: 'Brian Eno - Discreet Music', ru: 'Brian Eno - Discreet Music' },
    publish: true,
  },

  {
    key: 'musik-vom-bauch-stern-1981',
    productType: { typeId: 'product-type', key: 'music-media' },
    name: { en: 'Musik Vom Bauch', ru: 'Musik Vom Bauch' },
    slug: { en: 'musik-vom-bauch', ru: 'musik-vom-bauch' },
    description: {
      en: 'German electronic band album.',
      ru: 'Альбом немецкой электронной группы.',
    },
    masterVariant: {
      sku: 'stern-musik-vom-bauch-' + crypto.randomUUID(),
      key: 'musik-vom-bauch-stern',
      prices: [
        { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 11000 } },
        { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 9500 } },
      ],
      attributes: [
        { name: 'artist', value: 'Stern' },
        { name: 'genre', value: ['electronic'] },
        { name: 'release_year', value: '1981-05-15' },
        {
          name: 'format',
          value: [
            { en: 'vinyl', ru: 'винил' },
            { en: 'cassette', ru: 'кассета' },
          ],
        },
        { name: 'tracklist', value: ['Musik Vom Bauch'] },
        { name: 'country', value: { en: 'UK', ru: 'Великобритания' } },
        { name: 'record_label', value: ['Stern Records'] },
      ],
      images: [
        {
          url: 'https://dummyimage.com/300x300/000/fff&text=Musik+Vom+Bauch',
          label: 'Musik Vom Bauch Album Cover',
          dimensions: { w: 300, h: 300 },
        },
      ],
    },
    categories: [{ typeId: 'category', key: 'cat-music-media' }],
    metaTitle: { en: 'Stern - Musik Vom Bauch', ru: 'Stern - Musik Vom Bauch' },
    publish: true,
  },

  {
    key: 'radio-activity-kraftwerk',
    productType: { typeId: 'product-type', key: 'music-media' },
    name: { en: 'Radio-Activity', ru: 'Radio-Activity' },
    slug: { en: 'radio-activity', ru: 'radio-activity' },
    description: {
      en: 'Classic Kraftwerk electronic album.',
      ru: 'Классический электронный альбом Kraftwerk.',
    },
    masterVariant: {
      sku: 'kraftwerk-radio-activity-' + crypto.randomUUID(),
      key: 'radio-activity-kraftwerk',
      prices: [
        { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 15500 } },
        { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 13500 } },
      ],
      attributes: [
        { name: 'artist', value: 'Kraftwerk' },
        { name: 'genre', value: ['electronic'] },
        { name: 'release_year', value: '1975-10-01' },
        {
          name: 'format',
          value: [
            { en: 'vinyl', ru: 'винил' },
            { en: 'cd', ru: 'CD' },
          ],
        },
        { name: 'tracklist', value: ['Radioactivity', 'Antenna', 'Radioland'] },
        { name: 'country', value: { en: 'UK', ru: 'Великобритания' } },
        { name: 'record_label', value: ['Kling Klang'] },
      ],
      images: [
        {
          url: 'https://e.snmc.io/i/1200/s/0d16961146e9910e4c23a0e1b8488e25/1893297',
          label: 'Radio-Activity Album Cover',
          dimensions: { w: 300, h: 300 },
        },
      ],
    },
    categories: [{ typeId: 'category', key: 'cat-music-media' }],
    metaTitle: { en: 'Kraftwerk - Radio-Activity', ru: 'Kraftwerk - Radio-Activity' },
    publish: true,
  },

  {
    key: 'chill-out-future-music-may-2008',
    productType: { typeId: 'product-type', key: 'music-media' },
    name: { en: 'Chill Out', ru: 'Chill Out' },
    slug: { en: 'chill-out-future-music-may-2008', ru: 'chill-out-future-music-may-2008' },
    description: {
      en: 'Compilation of chill-out electronic tracks.',
      ru: 'Сборник чилл-аут электронной музыки.',
    },
    masterVariant: {
      sku: 'future-music-chill-out-' + crypto.randomUUID(),
      key: 'chill-out-future-music-may-2008',
      prices: [
        { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 10000 } },
        { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 9000 } },
      ],
      attributes: [
        { name: 'artist', value: 'Various Artists' },
        { name: 'genre', value: ['electronic'] },
        { name: 'release_year', value: '2008-05-01' },
        {
          name: 'format',
          value: [
            { en: 'cd', ru: 'CD' },
            { en: 'cassette', ru: 'кассета' },
          ],
        },
        { name: 'tracklist', value: ['Track 1', 'Track 2', 'Track 3'] },
        { name: 'country', value: { en: 'UK', ru: 'Великобритания' } },
        { name: 'record_label', value: ['Future Music'] },
      ],
      images: [
        {
          url: 'https://lannerchronicle.wordpress.com/wp-content/uploads/2022/10/future-music-may-2008.jpg?w=643',
          label: 'Future Music Chill Out Cover',
          dimensions: { w: 300, h: 300 },
        },
      ],
    },
    categories: [{ typeId: 'category', key: 'cat-music-media' }],
    metaTitle: { en: 'Chill Out Compilation', ru: 'Сборник Chill Out' },
    publish: true,
  },

  {
    key: 'sheet-one-dj-shadow',
    productType: { typeId: 'product-type', key: 'music-media' },
    name: { en: 'Endtroducing.....', ru: 'Endtroducing.....' },
    slug: { en: 'endtroducing-dj-shadow', ru: 'endtroducing-dj-shadow' },
    description: {
      en: 'Groundbreaking instrumental hip hop album.',
      ru: 'Новаторский инструментальный хип-хоп альбом.',
    },
    masterVariant: {
      sku: 'dj-shadow-endtroducing-' + crypto.randomUUID(),
      key: 'endtroducing-dj-shadow',
      prices: [
        { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 17000 } },
        { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 15000 } },
      ],
      attributes: [
        { name: 'artist', value: 'DJ Shadow' },
        { name: 'genre', value: ['electronic'] },
        { name: 'release_year', value: '1996-09-16' },
        {
          name: 'format',
          value: [
            { en: 'vinyl', ru: 'винил' },
            { en: 'cd', ru: 'CD' },
            { en: 'cassette', ru: 'кассета' },
          ],
        },
        { name: 'tracklist', value: ['Building Steam With A Grain Of Salt', 'Midnight In A Perfect World'] },
        { name: 'country', value: { en: 'US', ru: 'США' } },
        { name: 'record_label', value: ['Mo’ Wax'] },
      ],
      images: [
        {
          url: 'https://www.abcdrduson.com/wp-content/uploads/2022/02/NFTDJ-DJ-Shadow1-1024x990.jpg',
          label: 'Endtroducing Album Cover',
          dimensions: { w: 300, h: 300 },
        },
      ],
    },
    categories: [{ typeId: 'category', key: 'cat-music-media' }],
    metaTitle: { en: 'DJ Shadow - Endtroducing.....', ru: 'DJ Shadow - Endtroducing.....' },
    publish: true,
  },

  {
    key: 'silent-moon-paul-mccartney',
    productType: { typeId: 'product-type', key: 'music-media' },
    name: { en: 'Silent Moon', ru: 'Silent Moon' },
    slug: { en: 'silent-moon', ru: 'silent-moon' },
    description: {
      en: 'Smooth electronic ambient music.',
      ru: 'Спокойная электронная амбиент музыка.',
    },
    masterVariant: {
      sku: 'paul-mccartney-silent-moon-' + crypto.randomUUID(),
      key: 'silent-moon-paul-mccartney',
      prices: [
        { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 12500 } },
        { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 11000 } },
      ],
      attributes: [
        { name: 'artist', value: 'Paul McCartney' },
        { name: 'genre', value: ['ambient', 'electronic'] },
        { name: 'release_year', value: '2005-04-20' },
        {
          name: 'format',
          value: [
            { en: 'cd', ru: 'CD' },
            { en: 'cassette', ru: 'кассета' },
          ],
        },
        { name: 'tracklist', value: ['Silent Moon'] },
        { name: 'country', value: { en: 'UK', ru: 'Великобритания' } },
        { name: 'record_label', value: ['EMI'] },
      ],
      images: [
        {
          url: 'https://i.ytimg.com/vi/hwbGh204HWE/maxresdefault.jpg',
          label: 'Silent Moon Album Cover',
          dimensions: { w: 300, h: 300 },
        },
      ],
    },
    categories: [{ typeId: 'category', key: 'cat-music-media' }],
    metaTitle: { en: 'Paul McCartney - Silent Moon', ru: 'Пол Маккартни - Silent Moon' },
    publish: true,
  },
];
const THE_BEATLES: ProductDraft = {
  key: 'abbey-road-the-beatles',
  productType: {
    typeId: 'product-type',
    key: 'music-media',
  },
  name: { en: 'Abbey Road', ru: 'Эбби Роуд' },
  slug: { en: 'abbey-road', ru: 'ebbi-road' },
  description: { en: 'Iconic Beatles album', ru: 'Культовый альбом The Beatles' },
  masterVariant: {
    sku: 'the-beatles-' + crypto.randomUUID(),
    key: 'abbey-road-the-beatles',
    prices: [
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 3000,
        },
      },
      {
        country: 'RU',
        value: {
          type: 'centPrecision',
          currencyCode: 'RUB',
          centAmount: 22000,
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
        value: ['rock', 'pop'],
      },
      {
        name: 'release_year',
        value: '1969-09-26',
      },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      {
        name: 'tracklist',
        value: ['Come Together', 'Something', 'Here Comes the Sun'],
      },
      {
        name: 'country',
        value: { en: 'UK', ru: 'Великобритания' },
      },
      {
        name: 'record_label',
        value: ['Apple Records'],
      },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
        label: 'Abbey Road Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [
    {
      typeId: 'category',
      key: 'cat-music-media',
    },
  ],
  metaTitle: { en: 'The Beatles', ru: 'Битлз' },
  publish: true,
};
const RADIOHEAD: ProductDraft = {
  key: 'ok-computer-radiohead',
  productType: {
    typeId: 'product-type',
    key: 'music-media',
  },
  name: { en: 'OK Computer', ru: 'OK Computer' },
  slug: { en: 'ok-computer', ru: 'ok-computer' },
  description: { en: 'Experimental rock masterpiece', ru: 'Экспериментальный рок-шедевр' },
  masterVariant: {
    sku: 'radiohead-' + crypto.randomUUID(),
    key: 'ok-computer-radiohead',
    prices: [
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 2800,
        },
      },
      {
        country: 'RU',
        value: {
          type: 'centPrecision',
          currencyCode: 'RUB',
          centAmount: 20000,
        },
      },
    ],
    attributes: [
      {
        name: 'artist',
        value: 'Radiohead',
      },
      {
        name: 'genre',
        value: ['rock'],
      },
      {
        name: 'release_year',
        value: '1997-05-21',
      },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      {
        name: 'tracklist',
        value: ['Paranoid Android', 'Karma Police', 'No Surprises'],
      },
      {
        name: 'country',
        value: { en: 'UK', ru: 'Великобритания' },
      },
      {
        name: 'record_label',
        value: ['Parlophone', 'Capitol Records'],
      },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Radiohead.okcomputer.albumart.jpg',
        label: 'OK Computer Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [
    {
      typeId: 'category',
      key: 'cat-music-media',
    },
  ],
  metaTitle: { en: 'Radiohead', ru: 'Рэдиохэд' },
  publish: true,
};
const DAFT_PUNK: ProductDraft = {
  key: 'random-access-memories-daft-punk',
  productType: {
    typeId: 'product-type',
    key: 'music-media',
  },
  name: { en: 'Random Access Memories', ru: 'Random Access Memories' },
  slug: { en: 'random-access-memories', ru: 'random-access-memories' },
  description: { en: 'Electronic music revolution', ru: 'Электронная музыкальная революция' },
  masterVariant: {
    sku: 'daft-punk-' + crypto.randomUUID(),
    key: 'random-access-memories-daft-punk',
    prices: [
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 3500,
        },
      },
      {
        country: 'RU',
        value: {
          type: 'centPrecision',
          currencyCode: 'RUB',
          centAmount: 25000,
        },
      },
    ],
    attributes: [
      {
        name: 'artist',
        value: 'Daft Punk',
      },
      {
        name: 'genre',
        value: ['disco', 'funk'],
      },
      {
        name: 'release_year',
        value: '2013-05-17',
      },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      {
        name: 'tracklist',
        value: ['Get Lucky', 'Instant Crush', 'Lose Yourself to Dance'],
      },
      {
        name: 'country',
        value: { en: 'France', ru: 'Франция' },
      },
      {
        name: 'record_label',
        value: ['Columbia Records'],
      },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg',
        label: 'Random Access Memories Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [
    {
      typeId: 'category',
      key: 'cat-music-media',
    },
  ],
  metaTitle: { en: 'Daft Punk', ru: 'Daft Punk' },
  publish: true,
};
const MASSIVE_ATTACK: ProductDraft = {
  key: 'mezzanine-massive-attack',
  productType: { typeId: 'product-type', key: 'music-media' },
  name: { en: 'Mezzanine', ru: 'Mezzanine' },
  slug: { en: 'mezzanine', ru: 'mezzanine' },
  description: { en: 'Trip-hop classic', ru: 'Классика трип-хопа' },
  masterVariant: {
    sku: 'massive-attack-' + crypto.randomUUID(),
    key: 'mezzanine-massive-attack',
    prices: [
      { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 3200 } },
      { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 24000 } },
    ],
    attributes: [
      { name: 'artist', value: 'Massive Attack' },
      { name: 'genre', value: ['disco', 'funk', 'art-rock'] },
      { name: 'release_year', value: '1998-04-20' },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      { name: 'tracklist', value: ['Teardrop', 'Angel', 'Inertia Creeps'] },
      { name: 'country', value: { en: 'UK', ru: 'Великобритания' } },
      { name: 'record_label', value: ['Virgin Records'] },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Massive_Attack_-_Mezzanine.png',
        label: 'Mezzanine Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [{ typeId: 'category', key: 'cat-music-media' }],
  metaTitle: { en: 'Massive Attack', ru: 'Massive Attack' },
  publish: true,
};
const NIRVANA: ProductDraft = {
  key: 'nevermind-nirvana',
  productType: {
    typeId: 'product-type',
    key: 'music-media',
  },
  name: { en: 'Nevermind', ru: 'Nevermind' },
  slug: { en: 'nevermind', ru: 'nevermind' },
  description: { en: 'Grunge revolution', ru: 'Гранжевая революция' },
  masterVariant: {
    sku: 'nirvana-' + crypto.randomUUID(),
    key: 'nevermind-nirvana',
    prices: [
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 2200,
        },
      },
      {
        country: 'RU',
        value: {
          type: 'centPrecision',
          currencyCode: 'RUB',
          centAmount: 15000,
        },
      },
    ],
    attributes: [
      {
        name: 'artist',
        value: 'Nirvana',
      },
      {
        name: 'genre',
        value: ['rock'],
      },
      {
        name: 'release_year',
        value: '1991-09-24',
      },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      {
        name: 'tracklist',
        value: ['Smells Like Teen Spirit', 'Come as You Are', 'Lithium'],
      },
      {
        name: 'country',
        value: { en: 'USA', ru: 'США' },
      },
      {
        name: 'record_label',
        value: ['DGC Records'],
      },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg',
        label: 'Nevermind Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [
    {
      typeId: 'category',
      key: 'cat-music-media',
    },
  ],
  metaTitle: { en: 'Nirvana', ru: 'Нирвана' },
  publish: true,
};
const DAVID_BOWIE: ProductDraft = {
  key: 'ziggy-stardust-david-bowie',
  productType: { typeId: 'product-type', key: 'music-media' },
  name: { en: 'The Rise and Fall of Ziggy Stardust', ru: 'Взлёт и падение Зигги Стардаста' },
  slug: { en: 'ziggy-stardust', ru: 'ziggy-stardust' },
  description: { en: 'Glam rock masterpiece', ru: 'Шедевр глэм-рока' },
  masterVariant: {
    sku: 'david-bowie-' + crypto.randomUUID(),
    key: 'ziggy-stardust-david-bowie',
    prices: [
      { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 2800 } },
      { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 20000 } },
    ],
    attributes: [
      { name: 'artist', value: 'David Bowie' },
      { name: 'genre', value: ['rock', 'art-rock'] },
      { name: 'release_year', value: '1972-06-16' },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      { name: 'tracklist', value: ['Starman', 'Suffragette City', 'Ziggy Stardust'] },
      { name: 'country', value: { en: 'UK', ru: 'Великобритания' } },
      { name: 'record_label', value: ['RCA Records'] },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/0/01/ZiggyStardust.jpg',
        label: 'Ziggy Stardust Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [{ typeId: 'category', key: 'cat-music-media' }],
  metaTitle: { en: 'David Bowie', ru: 'Дэвид Боуи' },
  publish: true,
};
const KENDRICK_LAMAR: ProductDraft = {
  key: 'to-pimp-a-butterfly-kendrick-lamar',
  productType: { typeId: 'product-type', key: 'music-media' },
  name: { en: 'To Pimp a Butterfly', ru: 'To Pimp a Butterfly' },
  slug: { en: 'to-pimp-a-butterfly', ru: 'to-pimp-a-butterfly' },
  description: { en: 'Jazz-infused hip-hop classic', ru: 'Классика хип-хопа с элементами джаза' },
  masterVariant: {
    sku: 'kendrick-lamar-' + crypto.randomUUID(),
    key: 'to-pimp-a-butterfly-kendrick-lamar',
    prices: [
      { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 3500 } },
      { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 25000 } },
    ],
    attributes: [
      { name: 'artist', value: 'Kendrick Lamar' },
      { name: 'genre', value: ['hip-hop', 'jazz', 'conscious rap'] },
      { name: 'release_year', value: '2015-03-15' },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      { name: 'tracklist', value: ['King Kunta', 'Alright', 'The Blacker the Berry'] },
      { name: 'country', value: { en: 'USA', ru: 'США' } },
      { name: 'record_label', value: ['Top Dawg Entertainment', 'Aftermath'] },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png',
        label: 'To Pimp a Butterfly Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [{ typeId: 'category', key: 'cat-music-media' }],
  metaTitle: { en: 'Kendrick Lamar', ru: 'Кендрик Ламар' },
  publish: true,
};
const QUEEN: ProductDraft = {
  key: 'a-night-at-the-opera-queen',
  productType: { typeId: 'product-type', key: 'music-media' },
  name: { en: 'A Night at the Opera', ru: 'Ночь в опере' },
  slug: { en: 'a-night-at-the-opera', ru: 'noch-v-opere' },
  description: { en: 'Epic rock opera with Bohemian Rhapsody', ru: 'Эпичная рок-опера с "Богемской Рапсодией"' },
  masterVariant: {
    sku: 'queen-' + crypto.randomUUID(),
    key: 'a-night-at-the-opera-queen',
    prices: [
      { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 3200 } },
      { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 22000 } },
    ],
    attributes: [
      { name: 'artist', value: 'Queen' },
      { name: 'genre', value: ['rock'] },
      { name: 'release_year', value: '1975-11-21' },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      { name: 'tracklist', value: ['Bohemian Rhapsody', "You're My Best Friend", 'Love of My Life'] },
      { name: 'country', value: { en: 'UK', ru: 'Великобритания' } },
      { name: 'record_label', value: ['EMI', 'Elektra'] },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png',
        label: 'A Night at the Opera Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [{ typeId: 'category', key: 'cat-music-media' }],
  metaTitle: { en: 'Queen', ru: 'Квин' },
  publish: true,
};
const KRAFTWERK_TRANS: ProductDraft = {
  key: 'trans-europe-express-kraftwerk',
  productType: { typeId: 'product-type', key: 'music-media' },
  name: { en: 'Trans-Europe Express', ru: 'Транс-Европа Экспресс' },
  slug: { en: 'trans-europe-express', ru: 'trans-evropa-express' },
  description: { en: 'Seminal electronic album', ru: 'Знаковый электронный альбом' },
  masterVariant: {
    sku: 'kraftwerk-' + crypto.randomUUID(),
    attributes: [
      { name: 'artist', value: 'Kraftwerk' },
      { name: 'genre', value: ['krautrock', 'electronic'] },
      { name: 'release_year', value: '1977-03-01' },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      {
        name: 'album',
        value: [{ en: 'Trans-Europe Express', ru: 'Транс-Европа Экспресс' }],
      },
      { name: 'tracklist', value: ['Trans-Europe Express', 'Metal on Metal', 'Franz Schubert'] },
      { name: 'country', value: { en: 'Germany', ru: 'Германия' } },
      { name: 'record_label', value: ['Kling Klang'] },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/0/02/Trans-Europe_Express.jpg',
        label: 'Album cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
    prices: [{ country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 3500 } }],
  },
  publish: true,
};
const ROLLING_STONES: ProductDraft = {
  key: 'exile-on-main-st-rolling-stones',
  productType: { typeId: 'product-type', key: 'music-media' },
  name: { en: 'Exile on Main St.', ru: 'Изгнанник на Мэйн-стрит' },
  slug: { en: 'exile-on-main-st', ru: 'izgnannik-na-main-street' },
  description: { en: 'Double album blues rock masterpiece', ru: 'Двойной альбом — шедевр блюз-рока' },
  masterVariant: {
    sku: 'rolling-stones-' + crypto.randomUUID(),
    key: 'exile-on-main-st-rolling-stones',
    prices: [
      { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 4000 } },
      { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 28000 } },
    ],
    attributes: [
      { name: 'artist', value: 'The Rolling Stones' },
      { name: 'genre', value: ['rock', 'blues rock'] },
      { name: 'release_year', value: '1972-05-12' },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      { name: 'tracklist', value: ['Tumbling Dice', 'Happy', 'Rocks Off'] },
      { name: 'country', value: { en: 'UK', ru: 'Великобритания' } },
      { name: 'record_label', value: ['Rolling Stones Records'] },
    ],
    images: [
      {
        url: 'https://m.media-amazon.com/images/I/91IcUhRbCiL._UF1000,1000_QL80_.jpg',
        label: 'Exile on Main St. Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [{ typeId: 'category', key: 'cat-music-media' }],
  metaTitle: { en: 'The Rolling Stones', ru: 'Роллинг Стоунз' },
  publish: true,
};
const BJORK: ProductDraft = {
  key: 'homogenic-bjork',
  productType: { typeId: 'product-type', key: 'music-media' },
  name: { en: 'Homogenic', ru: 'Homogenic' },
  slug: { en: 'homogenic', ru: 'homogenic' },
  description: { en: 'Experimental electronic avant-garde', ru: 'Экспериментальный электронный авангард' },
  masterVariant: {
    sku: 'bjork-' + crypto.randomUUID(),
    key: 'homogenic-bjork',
    prices: [
      { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 2900 } },
      { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 20000 } },
    ],
    attributes: [
      { name: 'artist', value: 'Björk' },
      { name: 'genre', value: ['electronic', 'avant-garde', 'art pop'] },
      { name: 'release_year', value: '1997-09-22' },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      { name: 'tracklist', value: ['Jóga', 'Bachelorette', 'Hunter'] },
      { name: 'country', value: { en: 'Iceland', ru: 'Исландия' } },
      { name: 'record_label', value: ['One Little Indian'] },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Homogenic.jpg',
        label: 'Homogenic Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [{ typeId: 'category', key: 'cat-music-media' }],
  metaTitle: { en: 'Björk', ru: 'Бьорк' },
  publish: true,
};
const METALLICA: ProductDraft = {
  key: 'master-of-puppets-metallica',
  productType: { typeId: 'product-type', key: 'music-media' },
  name: { en: 'Master of Puppets', ru: 'Повелитель кукол' },
  slug: { en: 'master-of-puppets', ru: 'povelitel-kukol' },
  description: { en: 'Thrash metal landmark album', ru: 'Культовый альбом трэш-метала' },
  masterVariant: {
    sku: 'metallica-' + crypto.randomUUID(),
    key: 'master-of-puppets-metallica',
    prices: [
      { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 3500 } },
      { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 25000 } },
    ],
    attributes: [
      { name: 'artist', value: 'Metallica' },
      { name: 'genre', value: ['soul'] },
      { name: 'release_year', value: '1986-03-03' },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      { name: 'tracklist', value: ['Master of Puppets', 'Battery', 'Welcome Home (Sanitarium)'] },
      { name: 'country', value: { en: 'USA', ru: 'США' } },
      { name: 'record_label', value: ['Elektra'] },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg',
        label: 'Master of Puppets Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [{ typeId: 'category', key: 'cat-music-media' }],
  metaTitle: { en: 'Metallica', ru: 'Металлика' },
  publish: true,
};
const JOY_DIVISION: ProductDraft = {
  key: 'unknown-pleasures-joy-division',
  productType: { typeId: 'product-type', key: 'music-media' },
  name: { en: 'Unknown Pleasures', ru: 'Неизвестные наслаждения' },
  slug: { en: 'unknown-pleasures', ru: 'neizvestnye-naslazhdeniya' },
  description: { en: 'Post-punk and darkwave classic', ru: 'Классика пост-панка и дарквейва' },
  masterVariant: {
    sku: 'joy-division-' + crypto.randomUUID(),
    key: 'unknown-pleasures-joy-division',
    prices: [
      { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 2700 } },
      { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 19000 } },
    ],
    attributes: [
      { name: 'artist', value: 'Joy Division' },
      { name: 'genre', value: ['funk', 'alternative'] },
      { name: 'release_year', value: '1979-06-15' },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      { name: 'tracklist', value: ['Disorder', "She's Lost Control", 'Shadowplay'] },
      { name: 'country', value: { en: 'UK', ru: 'Великобритания' } },
      { name: 'record_label', value: ['Factory Records'] },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Joy_Division_-_Unknown_Pleasures.png',
        label: 'Unknown Pleasures Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [{ typeId: 'category', key: 'cat-music-media' }],
  metaTitle: { en: 'Joy Division', ru: 'Джой Дивижн' },
  publish: true,
};
const THE_DOORS: ProductDraft = {
  key: 'the-doors-the-doors',
  productType: { typeId: 'product-type', key: 'music-media' },
  name: { en: 'The Doors', ru: 'The Doors' },
  slug: { en: 'the-doors', ru: 'the-doors' },
  description: { en: 'Psychedelic rock debut album', ru: 'Дебютный альбом психоделического рока' },
  masterVariant: {
    sku: 'the-doors-' + crypto.randomUUID(),
    key: 'the-doors-the-doors',
    prices: [
      { country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 3000 } },
      { country: 'RU', value: { type: 'centPrecision', currencyCode: 'RUB', centAmount: 21000 } },
    ],
    attributes: [
      { name: 'artist', value: 'The Doors' },
      { name: 'genre', value: ['rock', 'psychedelic-rock'] },
      { name: 'release_year', value: '1967-01-04' },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      { name: 'tracklist', value: ['Break on Through', 'Light My Fire', 'The End'] },
      { name: 'country', value: { en: 'USA', ru: 'США' } },
      { name: 'record_label', value: ['Elektra'] },
    ],
    images: [
      {
        url: 'https://store.thedoors.com/cdn/shop/products/cvr_the-doors-original-album_front_1200_b508d8fd-40ca-404d-8f7c-ce6efb323ae6.jpg?v=1639508929',
        label: 'The Doors Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [{ typeId: 'category', key: 'cat-music-media' }],
  metaTitle: { en: 'The Doors', ru: 'The Doors' },
  publish: true,
};
const LED_ZEPPELIN: ProductDraft = {
  key: 'led-zeppelin-iv-led-zeppelin',
  productType: { typeId: 'product-type', key: 'music-media' },
  name: { en: 'Led Zeppelin IV', ru: 'Led Zeppelin IV' },
  slug: { en: 'led-zeppelin-iv', ru: 'led-zeppelin-iv' },
  description: { en: 'Classic rock with Stairway to Heaven', ru: 'Классический рок с "Лестницей в небо"' },
  masterVariant: {
    sku: 'led-zeppelin-' + crypto.randomUUID(),
    key: 'led-zeppelin-iv-led-zeppelin',
    prices: [{ country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 3500 } }],
    attributes: [
      { name: 'artist', value: 'Led Zeppelin' },
      { name: 'genre', value: ['rock', 'funk'] },
      { name: 'release_year', value: '1971-11-08' },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      { name: 'tracklist', value: ['Stairway to Heaven', 'Black Dog', 'Rock and Roll'] },
      { name: 'country', value: { en: 'UK', ru: 'Великобритания' } },
      { name: 'record_label', value: ['Atlantic'] },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg',
        label: 'Led Zeppelin IV Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [{ typeId: 'category', key: 'cat-music-media' }],
  metaTitle: { en: 'Led Zeppelin', ru: 'Лед Зеппелин' },
  publish: true,
};
const KING_CRIMSON: ProductDraft = {
  key: 'court-crimson-king-king-crimson',
  productType: { typeId: 'product-type', key: 'music-media' },
  name: { en: 'In the Court of the Crimson King', ru: 'При дворе малинового короля' },
  slug: { en: 'court-crimson-king', ru: 'pri-dvore-malinovogo-korolya' },
  description: { en: 'Progressive art-rock landmark', ru: 'Эталон арт-рока' },
  masterVariant: {
    sku: 'king-crimson-' + crypto.randomUUID(),
    attributes: [
      { name: 'artist', value: 'King Crimson' },
      { name: 'genre', value: ['art-rock', 'psychedelic-rock', 'progressive'] },
      { name: 'release_year', value: '1969-10-10' },
      { name: 'country', value: { en: 'UK', ru: 'Великобритания' } },
      { name: 'tracklist', value: ['21st Century Schizoid Man', 'Epitaph', 'Moonchild'] },
    ],
    prices: [{ country: 'US', value: { type: 'centPrecision', currencyCode: 'USD', centAmount: 3500 } }],
  },
  publish: true,
};
const AUTECHRE_LP5: ProductDraft = {
  key: 'lp5-autechre',
  productType: { typeId: 'product-type', key: 'music-media' },
  name: { en: 'LP5', ru: 'LP5' },
  slug: { en: 'lp5', ru: 'lp5' },
  description: { en: 'Experimental IDM album', ru: 'Экспериментальный IDM альбом' },
  masterVariant: {
    sku: 'autechre-' + crypto.randomUUID(),
    key: 'lp5-autechre',
    prices: [
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 2800,
        },
      },
    ],
    attributes: [
      {
        name: 'artist',
        value: 'Autechre',
      },
      {
        name: 'genre',
        value: ['idm', 'electronic'],
      },
      {
        name: 'release_year',
        value: '1998-07-13',
      },
      {
        name: 'format',
        value: [
          { en: 'cd', ru: 'CD' },
          { en: 'vinyl', ru: 'винил' },
        ],
      },
      {
        name: 'album',
        value: [{ en: 'LP5', ru: 'LP5' }],
      },
      {
        name: 'tracklist',
        value: ['Acroyear2', 'Rae', 'Fold4,Wrap5'],
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
        url: 'https://upload.wikimedia.org/wikipedia/en/4/4e/Autechre_-_LP5.png',
        label: 'LP5 Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [
    {
      typeId: 'category',
      key: 'cat-music-media',
    },
  ],
  metaTitle: { en: 'Autechre LP5', ru: 'Autechre LP5' },
  publish: true,
};
const BRIAN_ENO_AIRPORTS: ProductDraft = {
  key: 'music-for-airports-brian-eno',
  productType: { typeId: 'product-type', key: 'music-media' },
  name: { en: 'Ambient 1: Music for Airports', ru: 'Эмбиент 1: Музыка для аэропортов' },
  slug: { en: 'music-for-airports', ru: 'muzyka-dlya-aeroportov' },
  description: { en: 'Ambient music classic', ru: 'Классика эмбиент-музыки' },
  masterVariant: {
    sku: 'eno-' + crypto.randomUUID(),
    key: 'music-for-airports-brian-eno',
    prices: [
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 3200,
        },
      },
    ],
    attributes: [
      {
        name: 'artist',
        value: 'Brian Eno',
      },
      {
        name: 'genre',
        value: ['ambient'],
      },
      {
        name: 'release_year',
        value: '1978-01-01',
      },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      {
        name: 'album',
        value: [{ en: 'Ambient 1: Music for Airports', ru: 'Эмбиент 1: Музыка для аэропортов' }],
      },
      {
        name: 'tracklist',
        value: ['1/1', '2/1', '2/2'],
      },
      {
        name: 'country',
        value: { en: 'UK', ru: 'Великобритания' },
      },
      {
        name: 'record_label',
        value: ['Polydor'],
      },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Music_for_Airports.jpg',
        label: 'Album Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [
    {
      typeId: 'category',
      key: 'cat-music-media',
    },
  ],
  metaTitle: { en: 'Brian Eno', ru: 'Брайан Ино' },
  publish: true,
};
const MILES_DAVIS_BLUE: ProductDraft = {
  key: 'kind-of-blue-miles-davis',
  productType: { typeId: 'product-type', key: 'music-media' },
  name: { en: 'Kind of Blue', ru: 'Kind of Blue' },
  slug: { en: 'kind-of-blue', ru: 'kind-of-blue' },
  description: { en: 'Jazz masterpiece', ru: 'Шедевр джаза' },
  masterVariant: {
    sku: 'miles-' + crypto.randomUUID(),
    key: 'kind-of-blue-miles-davis',
    prices: [
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 3500,
        },
      },
    ],
    attributes: [
      {
        name: 'artist',
        value: 'Miles Davis',
      },
      {
        name: 'genre',
        value: ['jazz'],
      },
      {
        name: 'release_year',
        value: '1959-08-17',
      },
      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'винил' },
          { en: 'cd', ru: 'CD' },
        ],
      },
      {
        name: 'album',
        value: [{ en: 'Kind of Blue', ru: 'Kind of Blue' }],
      },
      {
        name: 'tracklist',
        value: ['So What', 'Freddie Freeloader', 'Blue in Green'],
      },
      {
        name: 'country',
        value: { en: 'USA', ru: 'США' },
      },
      {
        name: 'record_label',
        value: ['Columbia'],
      },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/9/9c/MilesDavisKindofBlue.jpg',
        label: 'Album Cover',
        dimensions: { w: 500, h: 500 },
      },
    ],
  },
  categories: [
    {
      typeId: 'category',
      key: 'cat-music-media',
    },
  ],
  metaTitle: { en: 'Miles Davis', ru: 'Майлз Дэвис' },
  publish: true,
};
export const PRODUCTS: ProductDraft[] = [
  MILES_DAVIS_BLUE,
  BRIAN_ENO_AIRPORTS,
  PINK_FLOYD,
  THE_BEATLES,
  RADIOHEAD,
  DAFT_PUNK,
  NIRVANA,
  DAVID_BOWIE,
  KENDRICK_LAMAR,
  MASSIVE_ATTACK,
  QUEEN,
  KING_CRIMSON,
  KRAFTWERK_TRANS,
  ROLLING_STONES,
  AUTECHRE_LP5,
  BJORK,
  METALLICA,
  JOY_DIVISION,
  THE_DOORS,
  LED_ZEPPELIN,
  { ...APHEX_TWIN },
  { ...DDT_OTTEPEL },
  { ...BOWIE_LETS_DANCE },
  { ...BOWIE_STATION_TO_STATION },
  { ...BEATLES_SGT_PEPPER },
  { ...POLICE_ZENYATTA },
  { ...PARALLEL_LINES },
  { ...VIOLATOR },
];
