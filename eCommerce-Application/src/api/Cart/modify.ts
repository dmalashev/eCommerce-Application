import { Cart, ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { client, projectKey, httpMiddleware } from '../client/client';
import { getCart } from './get';

export async function modifyQuantity(productId: string, quantity: number): Promise<void> {
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
            action: 'changeLineItemQuantity',
            lineItemId: productId,
            quantity,
          },
        ],
      },
    })
    .execute();
}
