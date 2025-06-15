import { apiRoot, projectKey } from '../client/client';
import { Product } from '@commercetools/platform-sdk';

export async function getProductByKey(productKey: string): Promise<Product> {
  const response = await apiRoot.withProjectKey({ projectKey }).products().withKey({ key: productKey }).get().execute();

  return response.body;
}
