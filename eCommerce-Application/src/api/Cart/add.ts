import {
  ApiRoot,
  Cart,
  ClientResponse,
  createApiBuilderFromCtpClient,
  LineItemDraft,
  ProductProjection,
  LineItem,
} from '@commercetools/platform-sdk';
import { apiRoot, client, httpMiddleware, projectKey } from '../client/client';
import { createAnonymousCustomer } from '../customer/anonymous-customer';
import { getCart } from './get';

export async function addItemToCart(product: ProductProjection, quantity: number = 1): Promise<LineItem[] | undefined> {
  const item: LineItemDraft = {
    productId: product.id,
    quantity: quantity,
  };

  const isLogined: boolean = !!localStorage.getItem('access_token');

  if (isLogined) {
    const apiRootCustomer: ApiRoot = createApiBuilderFromCtpClient(
      client.withProjectKey(projectKey).withHttpMiddleware(httpMiddleware).build(),
    );

    const response: ClientResponse<Cart> = await apiRootCustomer
      .withProjectKey({ projectKey })
      .me()
      .activeCart()
      .get()
      .execute();

    await apiRootCustomer
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

    console.log('logged add', response.body);

    return response.body.lineItems;
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

    console.log('NON logged add', response.body);
    return response.body.lineItems;
  }
}

// Apply Promo Code and Display Updated Prices

export async function applyPromoCode(code: string): Promise<boolean> {
  const response = await apiRoot.withProjectKey({ projectKey }).discountCodes().withKey({ key: code }).get().execute();

  const isCode: boolean = !!response.body.id;

  if (isCode) {
    const cart = await getCart();
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
              action: 'addDiscountCode',
              code: code,
            },
          ],
        },
      })
      .execute();
  }

  return isCode;
}
