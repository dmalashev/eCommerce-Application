import { ApiRoot, Cart } from '@commercetools/platform-sdk';
import { projectKey } from '../client/client';

export async function mergeCarts(apiRoot: ApiRoot, userCart: Cart, anonymousCart: Cart) {
  const mapPromises = anonymousCart.lineItems.map(async (item) => {
    await apiRoot
      .withProjectKey({ projectKey })
      .me()
      .carts()
      .withId({ ID: userCart.id })
      .post({
        body: {
          version: userCart.version + i,
          actions: [
            {
              action: 'addLineItem',
              productId: item.productId,
              variantId: item.variant.id,
              quantity: item.quantity,
            },
          ],
        },
      })
      .execute();
    userCart.version;
  });
}
