import { ProductProjection } from '@commercetools/platform-sdk';
import { projectKey, apiRoot } from '../client/client';

export async function getProductsWithCategories(value: string): Promise<ProductProjection[]> {
  switch (value) {
    case 'Russia': {
      value = 'RU';
      break;
    }

    case 'USA': {
      value = 'US';
      break;
    }

    case 'United Kingdom': {
      value = 'UK';
      break;
    }

    default: {
      break;
    }
  }
  value = value.replace(' ', '-');
  const categoryResponse = await apiRoot
    .withProjectKey({ projectKey })
    .categories()
    .get({ queryArgs: { where: `slug(en="${value.toLowerCase()}")` } })
    .execute();
  const categoryId = categoryResponse.body.results[0]?.id;

  const options = {
    queryArgs: {
      filter: [`categories.id:"${categoryId}"`],
      priceCountry: 'US',
      priceCurrency: 'USD',
      localeProjection: 'en-US',
      limit: 100,
    },
  };

  const response = await apiRoot.withProjectKey({ projectKey }).productProjections().search().get(options).execute();

  return response.body.results;
}
