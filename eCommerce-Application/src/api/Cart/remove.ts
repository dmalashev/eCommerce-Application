import { ApiRoot, Cart, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { client, httpMiddleware, projectKey } from '../client/client';
import { getCart, getCartPasswordFlow, getCartProductsPasswordFlow } from './get';
import { createCart } from './create';

export async function removedProduct(productId: string): Promise<void | Cart> {
  const cart: Cart = await getCart();

  const lineItem = cart.lineItems.find((item) => item.productId === productId);

  const apiRoot: ApiRoot = createApiBuilderFromCtpClient(
    client.withProjectKey(projectKey).withHttpMiddleware(httpMiddleware).build(),
  );
  if (lineItem) {
    const response = await apiRoot
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
              lineItemId: lineItem.id,
            },
          ],
        },
      })
      .execute();
    return response.body;
  }
}

export async function removeProductPasswordFlow(email: string, password: string, productId: string): Promise<void> {
  const cart: Cart = await getCartPasswordFlow(email, password);

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

export async function removedCart(): Promise<Cart | void> {
  const cart: Cart = await getCart();

  const apiRoot: ApiRoot = createApiBuilderFromCtpClient(
    client.withProjectKey(projectKey).withHttpMiddleware(httpMiddleware).build(),
  );

  const response = await apiRoot
    .withProjectKey({ projectKey })
    .me()
    .carts()
    .withId({ ID: cart.id })
    .delete({ queryArgs: { version: cart.version } })
    .execute();
  await createCart();
  return response.body;
}
