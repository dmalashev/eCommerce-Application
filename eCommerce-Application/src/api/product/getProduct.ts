import { Client } from '@commercetools/ts-client';
import { projectKey, client as clientBuilder, httpMiddleware, authMiddleware } from '../client/client';
import {
  ApiRoot,
  ClientResponse,
  createApiBuilderFromCtpClient,
  ProductPagedQueryResponse,
  Product,
  ProductData,
} from '@commercetools/platform-sdk';
export type DataProduct = {
  id: string;
  current: ProductData;
};
export async function getProducts(): Promise<ProductPagedQueryResponse['results']> {
  const client: Client = clientBuilder
    .withProjectKey(projectKey)
    .withClientCredentialsFlow(authMiddleware)
    .withHttpMiddleware(httpMiddleware)
    .build();

  const apiRoot: ApiRoot = createApiBuilderFromCtpClient(client);

  const response: ClientResponse<ProductPagedQueryResponse> = await apiRoot
    .withProjectKey({ projectKey })
    .products()
    .get()
    .execute();
  return response.body.results;
}
export const dataProducts = async (): Promise<DataProduct[]> => {
  const array: ProductPagedQueryResponse['results'] = await getProducts();
  const data = array.map((item: Product) => {
    return {
      id: item.id,
      current: item.masterData.current,
    };
  });
  return data;
};
