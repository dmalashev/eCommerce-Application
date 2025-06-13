import {
  ApiRoot,
  Cart,
  ClientResponse,
  createApiBuilderFromCtpClient,
  LineItem,
  ProductProjection,
  ProductProjectionPagedSearchResponse,
} from '@commercetools/platform-sdk';
import { client, httpMiddleware, projectKey } from '../client/client';

export async function getCart(): Promise<Cart> {
  const isLogin: boolean = !!localStorage.getItem('access_token');
  if (isLogin) {
    const apiRootCustomer: ApiRoot = createApiBuilderFromCtpClient(
      client.withProjectKey(projectKey).withHttpMiddleware(httpMiddleware).build(),
    );

    const response: ClientResponse<Cart> = await apiRootCustomer
      .withProjectKey({ projectKey })
      .me()
      .activeCart()
      .get()
      .execute();
    return response.body;
  } else {
    const apiRootAnonymous: ApiRoot = createApiBuilderFromCtpClient(
      client.withProjectKey(projectKey).withHttpMiddleware(httpMiddleware).build(),
    );

    const response: ClientResponse<Cart> = await apiRootAnonymous
      .withProjectKey({ projectKey })
      .carts()
      .withId({ ID: localStorage.getItem('cartId')! })
      .get()
      .execute();
    return response.body;
  }
}

export async function getCartProducts(): Promise<ProductProjection[]> {
  const response: Cart = await getCart();
  const items: LineItem[] = response.lineItems;

  const apiRootCustomer: ApiRoot = createApiBuilderFromCtpClient(
    client.withProjectKey(projectKey).withHttpMiddleware(httpMiddleware).build(),
  );

  const responseProducts: ClientResponse<ProductProjectionPagedSearchResponse> = await apiRootCustomer
    .withProjectKey({ projectKey })
    .productProjections()
    .search()
    .get({
      queryArgs: {
        markMatchingVariants: true,
        filter: items.map((item) => item.id),
      },
    })
    .execute();
  return responseProducts.body.results;
}

export async function getTotalCost(): Promise<number> {
  const cart: Cart = await getCart();
  return cart.totalPrice.centAmount / 100;
}
