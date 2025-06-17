import {
  ApiRoot,
  Cart,
  ClientResponse,
  createApiBuilderFromCtpClient,
  LineItemDraft,
  ProductProjection,
  LineItem,
} from '@commercetools/platform-sdk';
import {
  // apiRoot,
  apiRootCustomer,
  authMiddleware,
  client,
  createClientWithPasswordFlow,
  // createAuthMiddleware,
  httpMiddleware,
  projectKey,
} from '../client/client';
import { createAnonymousCustomer } from '../customer/anonymous-customer';
import { getCart, getCartPasswordFlow } from './get';
// import { ClientBuilder } from '@commercetools/ts-client';

export async function addItemToCart(product: ProductProjection, quantity: number = 1): Promise<LineItem[] | undefined> {
  const item: LineItemDraft = {
    productId: product.id,
    quantity: quantity,
  };

  const isLogined: boolean = !!localStorage.getItem('access_token');
  const apiRootCustomer: ApiRoot = createApiBuilderFromCtpClient(
    client.withProjectKey(projectKey).withHttpMiddleware(httpMiddleware).build(),
  );

  if (isLogined) {
    const response: ClientResponse<Cart> = await apiRootCustomer
      .withProjectKey({ projectKey })
      .me()
      .activeCart()
      .get()
      .execute();

    const addItemResponse: ClientResponse<Cart> = await apiRootCustomer
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

    return addItemResponse.body.lineItems;
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

    return response.body.lineItems;
  }
}

// Apply Promo Code and Display Updated Prices

export async function applyPromoCode(code: string, email?: string, password?: string): Promise<boolean> {
  let isCode = false;
  const isLogined: boolean = !!localStorage.getItem('access_token');
  if (isLogined) {
    try {
      const apiRoot: ApiRoot = createApiBuilderFromCtpClient(
        createClientWithPasswordFlow(email || '', password || '')
          .withProjectKey(projectKey)
          .withHttpMiddleware(httpMiddleware)
          .build(),
      );
      const response = await apiRoot
        .withProjectKey({ projectKey })
        .discountCodes()
        .withKey({ key: code })
        .get()
        .execute();
      isCode = !!response.body.id;
      console.log(await apiRoot.withProjectKey({ projectKey }).discountCodes().get().execute());
      if (isCode) {
        const cart = await getCartPasswordFlow(email, password);
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
    } catch {
      return false;
    }
  } else {
    try {
      const apiRootAnonymous: ApiRoot = createApiBuilderFromCtpClient(
        client.withProjectKey(projectKey).withHttpMiddleware(httpMiddleware).build(),
      );

      const response = await apiRootAnonymous
        .withProjectKey({ projectKey })
        .discountCodes()
        .withKey({ key: code })
        .get()
        .execute();
      isCode = !!response.body.id;
      if (isCode) {
        const cart = await getCart();
        await apiRootAnonymous
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
    } catch {
      return false;
    }
  }
  // console.log(await getTotalCost());
  return isCode;
}
