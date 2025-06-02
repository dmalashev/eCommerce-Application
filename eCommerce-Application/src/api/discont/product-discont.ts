import { Client } from '@commercetools/ts-client';
import { projectKey, client as clientBuilder, httpMiddleware, authMiddleware } from '../client/client';
import { ApiRoot, ClientResponse, createApiBuilderFromCtpClient, ProductDiscount, ProductDiscountDraft } from '@commercetools/platform-sdk';

export async function createdDiscount() {
  const client: Client = clientBuilder
    .withProjectKey(projectKey)
    .withClientCredentialsFlow(authMiddleware)
    .withHttpMiddleware(httpMiddleware)
    .build();
  const apiRoot: ApiRoot = createApiBuilderFromCtpClient(client);
  const categoryCD = await apiRoot
    .withProjectKey({ projectKey })
    .categories()
    .withKey({ key: "cat-music-media" })
    .get()
    .execute();
  const productDiscount: ProductDiscountDraft = {
    name: { en: '15% cd discount', ru: 'скидка 15% на cd' },
    description: {
      en: 'Discount on all products in the sale category',
      ru: 'скидка на все продукты в категории продаж',
    },
    key: 'cd-discount-15',
    value: {
      type: 'relative',
      permyriad: 1500, // 15%
    },
    predicate: `categories.id = ("${categoryCD.body.id}")`,
    sortOrder: '0.8',
    isActive: true,
  };
  const response: ClientResponse<ProductDiscount> = await apiRoot
    .withProjectKey({ projectKey })
    .productDiscounts()
    .post({ body: productDiscount })
    .execute();
  return response;
}
