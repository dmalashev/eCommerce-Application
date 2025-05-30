import { Client } from '@commercetools/ts-client';
import { projectKey, client as clientBuilder, httpMiddleware, authMiddleware } from '../client/client';
import {
  ApiRoot,
  ClientResponse,
  createApiBuilderFromCtpClient,
  LocalizedString,
  Image,
  ProductPagedQueryResponse,
  Product,
} from '@commercetools/platform-sdk';
type DataProduct = {
  id: string;
  name: string | LocalizedString;
  description: string | LocalizedString;
  images: Image[] | undefined;
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
getProducts();
export const dataProducts = async (): Promise<DataProduct[]> => {
  const array: ProductPagedQueryResponse['results'] = await getProducts();
  const data = array.map((item:Product) => {
    return {
      id: item.id,
      name: item.masterData.current.name,
      description: item.masterData.current.description || '',
      images: item.masterData.current.masterVariant.images,
    };
  });
  console.log(data);
  return data;
};
