import { ProductProjection } from '@commercetools/platform-sdk';
import { apiRoot, projectKey } from '../client/client';

export async function searchingProducts(value: string): Promise<ProductProjection[]> {
  const options = {
    queryArgs: {
      'text.en': `${value}`,
      sort: 'price asc',
      limit: 20,
      offset: 0,
      fuzzy: true,
    },
  };

  const response = await apiRoot.withProjectKey({ projectKey }).productProjections().search().get(options).execute();

  console.log(response.body);
  return response.body.results;
}
