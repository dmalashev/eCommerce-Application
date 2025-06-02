import { Client } from '@commercetools/ts-client';
import { projectKey, client as clientBuilder, httpMiddleware, authMiddleware, apiRoot } from '../client/client';
import {
  ApiRoot,
  ClientResponse,
  createApiBuilderFromCtpClient,
  ProductPagedQueryResponse,
  Product,
  ProductProjection,
} from '@commercetools/platform-sdk';
import { DataProduct } from '../types-api';

// export async function getProducts(): Promise<ProductPagedQueryResponse['results']> {
//   const client: Client = clientBuilder
//     .withProjectKey(projectKey)
//     .withClientCredentialsFlow(authMiddleware)
//     .withHttpMiddleware(httpMiddleware)
//     .build();

//   const apiRoot: ApiRoot = createApiBuilderFromCtpClient(client);

//   const response: ClientResponse<ProductPagedQueryResponse> = await apiRoot
//     .withProjectKey({ projectKey })
//     .products()
//     .get()
//     .execute();
//   return response.body.results;
// }
// export const dataProducts = async (): Promise<DataProduct[]> => {
//   const array: ProductPagedQueryResponse['results'] = await getProducts();
//   const data = array.map((item: Product) => {
//     return {
//       id: item.id,
//       current: item.masterData.current,
//     };
//   });
//   return data;
// };
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
      filter: `categories.id = ("${categoryId}")`,
      limit: 20, // лимит на количество результатов

    },
  };

  const response = await apiRoot.withProjectKey({ projectKey }).productProjections().search().get(options).execute();

  console.log(response.body);
  return response.body.results;
}
