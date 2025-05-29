import { createApiBuilderFromCtpClient, ProductDraft } from '@commercetools/platform-sdk';
import { authMiddleware, client as clientBuilder, httpMiddleware, projectKey } from '../client/client';

const Limp_Bizkit: ProductDraft = {
  key: 'limp-bizkit',
  productType: {
    typeId: 'product-type',
    key: "music-media",
  },
  name: { en: 'Limp Bizkit', ru: 'Limp Bizkit' },
  slug: { en: 'limp-bizkit', ru: 'limp-bizkit' },
  description: { en: 'American nu metal/rap rock band', ru: 'Американская ню-метал/рэп-рок-группа' },
  masterVariant: {
    sku: 'limp-bizkit',
    key: 'limp-bizkit',
    prices: [
      {
        country: 'US',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 10000,
        },
      },
      {
        country: 'RU',
        value: {
          type: 'centPrecision',
          currencyCode: 'RUB',
          centAmount: 10000,
        },
      },
    ],
    attributes: [
      {
        name: 'artist',
        value: 'Limp Bizkit',
      },
      {
        name: 'genre',
        value: ['rock', 'jazz'],
      },
      {
        name: 'release_year',
        value: '1997-10-31',
      },

      {
        name: 'format',
        value: [
          { en: 'vinyl', ru: 'Винил' },
          { en: 'cd', ru: 'CD' },
          { en: 'cassette', ru: 'Кассета' },
        ],
      },
      {
        name: 'album',
        value: [
          { en: 'Three Dollar Bill, Y’all$ ', ru: 'Three Dollar Bill, Y’all$ ' },
          { en: 'Significant Other ', ru: 'Significant Other ' },
          {
            en: 'Chocolate Starfish and the Hot Dog Flavored Water ',
            ru: 'Chocolate Starfish and the Hot Dog Flavored Water ',
          },
          { en: 'Results May Vary ', ru: 'Results May Vary ' },
        ],
      },
      {
        name: 'tracklist',
        value: ['Everything', 'Pollution', 'Stuck'],
      },
      {
        name: 'country',
        value: { en: 'US', ru: 'США' },
      },
      {
        name: 'record_label',
        value: ['Interscope', 'Geffen', 'Cash Money', 'Flip'],
      },
    ],
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/13-06-09_RiP_Limp_Bizkit_Wes_Borland_4.JPG/800px-13-06-09_RiP_Limp_Bizkit_Wes_Borland_4.JPG',
        label: 'Limp Bizkit',
        dimensions: { w: 300, h: 300 },
      },
      {
        url: "url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Limp_Bizkit.jpg'",
        label: 'Limp Bizkit',
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
  metaTitle: { en: 'Limp Bizkit', ru: 'Limp Bizkit' },
  publish: true,
};

export async function setProductType() {
  const client = clientBuilder
    .withProjectKey(projectKey)
    .withClientCredentialsFlow(authMiddleware)
    .withHttpMiddleware(httpMiddleware)
    .build();
    console.log(Limp_Bizkit);
  const apiRoot = createApiBuilderFromCtpClient(client);
  const response = await apiRoot.withProjectKey({ projectKey }).products().post({ body: Limp_Bizkit}).execute();
  console.log(response.body,'response');
}
setProductType();
