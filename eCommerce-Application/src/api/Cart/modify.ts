import { Cart, ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { client, projectKey, httpMiddleware } from '../client/client';
import { getCart } from './get';

export async function modifyQuantity(productId: string, quantity: number): Promise<Cart | void> {
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
              action: 'changeLineItemQuantity',
              lineItemId: lineItem.id,
              quantity,
            },
          ],
        },
      })
      .execute();
    return response.body;
  }
}
