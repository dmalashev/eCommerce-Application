import { ProductProjection } from '@commercetools/platform-sdk';
import { projectKey, apiRoot } from '../client/client';

export async function getProductsWithCategories(value: string): Promise<ProductProjection[]> {
  const categoryResponse = await apiRoot
    .withProjectKey({ projectKey })
    .categories()
    .get({ queryArgs: { where: `slug(en="${value.toLowerCase()}")` } })
    .execute();
  const categoryId = categoryResponse.body.results[0]?.id;

  console.log(categoryId);

  const options = {
    queryArgs: {
      filter: [`categories.id:"${categoryId}"`],
      priceCountry: 'US',
      priceCurrency: 'USD',
      localeProjection: 'en-US',
      limit: 20,
    },
  };

  const response = await apiRoot.withProjectKey({ projectKey }).productProjections().search().get(options).execute();

  console.log(response.body);
  return response.body.results;
}
