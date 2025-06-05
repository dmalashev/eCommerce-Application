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
        { name: 'genre', value: [ 'electronic'] },
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

