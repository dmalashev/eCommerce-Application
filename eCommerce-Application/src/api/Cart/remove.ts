import { ApiRoot, Cart, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { client, httpMiddleware, projectKey } from '../client/client';
import { getCart } from './get';
import { createCart } from './create';

export async function removedProduct(productId: string) {
  const cart: Cart = await getCart();

  const apiRoot: ApiRoot = createApiBuilderFromCtpClient(
    client.withProjectKey(projectKey).withHttpMiddleware(httpMiddleware).build(),
  );

  await apiRoot
    .withProjectKey({ projectKey })
    .me()
    .carts()
    .withId({ ID: cart.id })
    .post({
      body: {
        version: cart.version,
        actions: [
          {
            action: 'removeLineItem',
            lineItemId: productId,
          },
        ],
      },
    })
    .execute();
}
export async function removedCart() {
  const cart = await getCart();

  const apiRoot: ApiRoot = createApiBuilderFromCtpClient(
    client.withProjectKey(projectKey).withHttpMiddleware(httpMiddleware).build(),
  );

  await apiRoot
    .withProjectKey({ projectKey })
    .me()
    .carts()
    .withId({ ID: cart.id })
    .delete({ queryArgs: { version: cart.version } })
    .execute();
  await createCart();
  return cart;
}
