import {
  ApiRoot,
  Cart,
  ClientResponse,
  createApiBuilderFromCtpClient,
  LineItemDraft,
  ProductProjection,
} from '@commercetools/platform-sdk';
import { apiRoot, apiRootCustomer, authMiddleware, client, createAuthMiddleware, httpMiddleware, projectKey } from '../client/client';
import { createAnonymousCustomer } from '../customer/anonymous-customer';
import { getCart, getTotalCost } from './get';
import { ClientBuilder } from '@commercetools/ts-client';

export async function addItemToCart(product: ProductProjection, quantity: number = 1): Promise<void> {
  const item: LineItemDraft = {
    productId: product.id,
    quantity: quantity,
  };

  const isLogined: boolean = !!localStorage.getItem('access_token');

  if (isLogined) {


    const response: ClientResponse<Cart> = await apiRootCustomer
      .withProjectKey({ projectKey })
      .me()
      .activeCart()
      .get()
      .execute();

    const result = await apiRootCustomer
      .withProjectKey({ projectKey })
      .me()
      .carts()
      .withId({ ID: response.body.id })
      .post({
        body: {
          version: response.body.version,
          actions: [
            {
              action: 'addLineItem',
              ...item,
            },
          ],
        },
      })
      .execute();
    console.log('add item to cart = ' + result);
  } else if (!localStorage.getItem('cartId')) {
    await createAnonymousCustomer();
  }
  if (localStorage.getItem('anonymousId')) {
    const cartId: string = localStorage.getItem('cartId')!;
    const version: number = Number(localStorage.getItem('cartVersion'));
    const apiRootAnonymous: ApiRoot = createApiBuilderFromCtpClient(
      client.withProjectKey(projectKey).withHttpMiddleware(httpMiddleware).build(),
    );
    const response: ClientResponse<Cart> = await apiRootAnonymous
      .withProjectKey({ projectKey })
      .carts()
      .withId({ ID: cartId })
      .post({
        body: {
          version,
          actions: [
            {
              action: 'addLineItem',
              ...item,
            },
          ],
        },
      })
      .execute();
    localStorage.setItem('cartVersion', response.body.version.toString());
  }
}

// Apply Promo Code and Display Updated Prices

export async function applyPromoCode(code: string): Promise<boolean> {
  const apiRoot: ApiRoot = createApiBuilderFromCtpClient(
    client
      .withProjectKey(projectKey)
      .withClientCredentialsFlow(authMiddleware)
      .withHttpMiddleware(httpMiddleware)
      .build(),
  );
  const response = await apiRoot.withProjectKey({ projectKey }).discountCodes().withKey({ key: code }).get().execute();
  const isCode: boolean = !!response.body.id;
  console.log(await apiRoot.withProjectKey({ projectKey }).discountCodes().get().execute());
  if (isCode) {
    const cart = await getCart();

    console.log(cart)
    console.log(await getTotalCost());

    await apiRootCustomer
      .withProjectKey({ projectKey })
      .me()
      .carts()
      .withId({ ID: cart.id })
      .post({
        body: {
          version: cart.version,
          actions: [
            {
              action: 'addDiscountCode',
              code: code,
            },
          ],
        },
      })
      .execute();
  }
  console.log(await getTotalCost());
  return isCode;
}
