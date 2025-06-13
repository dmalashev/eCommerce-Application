import { ApiRequest, Cart, ClientResponse, createApiBuilderFromCtpClient, LineItem, ProductProjection, ProductProjectionPagedSearchResponse } from '@commercetools/platform-sdk';
import { client, httpMiddleware, projectKey } from '../client/client';

export async function getCart(): Promise<Cart> {
  const isLogin: boolean = !!localStorage.getItem('access_token');
  if (isLogin) {
    const apiRootCustomer = createApiBuilderFromCtpClient(
      client.withProjectKey(projectKey).withHttpMiddleware(httpMiddleware).build(),
    );

    const response = await apiRootCustomer.withProjectKey({ projectKey }).me().activeCart().get().execute();
    console.log('logined customer cart', response.body);
    return response.body;
  } else {
    const apiRootAnonymous = createApiBuilderFromCtpClient(
      client.withProjectKey(projectKey).withHttpMiddleware(httpMiddleware).build(),
    );

    const response = await apiRootAnonymous
      .withProjectKey({ projectKey })
      .carts()
      .withId({ ID: localStorage.getItem('cartId')! })
      .get()
      .execute();
    console.log('anonymous customer cart', response.body);
    return response.body;
  }
}


export async function getCartProducts(): Promise<ProductProjection[]> {
  const items: LineItem[] = (await getCart()).lineItems;
  const apiRootCustomer = createApiBuilderFromCtpClient(
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

export async function getTotalCost() {
  const cart = await getCart();
  return cart.totalPrice.centAmount / 100;
}