import {  ProductProjection,  } from '@commercetools/platform-sdk';
import { apiRoot, projectKey } from '../client/client';

export async function searchingProducts(value: string): Promise<ProductProjection[]> {
  const options  = {
    queryArgs: {
      'text.en': `${value}`, // поиск по названию или описанию
      sort: 'price asc', // сортировка
      limit: 20, // лимит на количество результатов
      offset: 0, // сдвиг (для пагинации)
      fuzzy: true, // нестрогий поиск
    },
  };

  const response = await apiRoot.withProjectKey({ projectKey }).productProjections().search().get(options).execute();

  console.log(response.body);
  return response.body.results;
}
