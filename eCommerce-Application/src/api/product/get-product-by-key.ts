import { apiRoot, projectKey } from '../client/client';
import { ProductProjection } from '@commercetools/platform-sdk';

export async function getProductByKey(productKey: string): Promise<ProductProjection> {
  const response = await apiRoot
    .withProjectKey({ projectKey })
    .productProjections()
    .withKey({ key: productKey })
    .get()
    .execute();

  return response.body;
}
