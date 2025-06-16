import {
  ApiRoot,
  Cart,
  ClientResponse,
  createApiBuilderFromCtpClient,
  LineItem,
  ProductProjection,
  ProductProjectionPagedSearchResponse,
} from '@commercetools/platform-sdk';
import { apiRootCustomer, client, createClientWithPasswordFlow, httpMiddleware, projectKey } from '../client/client';
import { StorageKeys, StorageTokenKeys } from '../../types/enums';

export async function getCart(): Promise<Cart> {
  const isLogin: boolean = !!localStorage.getItem(StorageTokenKeys.ACCESS_TOKEN);
  if (isLogin) {

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
      .withId({ ID: localStorage.getItem(StorageKeys.CART_ID)! })
      .get()
      .execute();
    return response.body;
  }
}

export async function getCartPasswordFlow(email?: string, password?: string): Promise<Cart> {
  const isLogin: boolean = !!localStorage.getItem(StorageTokenKeys.ACCESS_TOKEN);
  if (isLogin) {
    const apiRootCustomer: ApiRoot = createApiBuilderFromCtpClient(
      createClientWithPasswordFlow(email || '', password || '')
        .withProjectKey(projectKey)
        .withHttpMiddleware(httpMiddleware)
        .build(),
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
      .withId({ ID: localStorage.getItem(StorageKeys.CART_ID)! })
      .get()
      .execute();
    return response.body;
  }
}

interface ProductProjectionWithQuantity extends ProductProjection {
  quantity: number;
}

export async function getCartProductsPasswordFlow(
  email?: string,
  password?: string,
): Promise<ProductProjectionWithQuantity[]> {
  const response: Cart = await getCartPasswordFlow(email, password);
  const items: LineItem[] = response.lineItems;
  if (items.length === 0) {
    return [];
  }

  const apiRootCustomer: ApiRoot = createApiBuilderFromCtpClient(
    client.withProjectKey(projectKey).withHttpMiddleware(httpMiddleware).build(),
  );

  const productIds = items.map((item) => `"${item.productId}"`).join(',');
  const filterQuery = `id:${productIds}`;

  const responseProducts: ClientResponse<ProductProjectionPagedSearchResponse> = await apiRootCustomer
    .withProjectKey({ projectKey })
    .productProjections()
    .search()
    .get({
      queryArgs: {
        markMatchingVariants: true,
        filter: [filterQuery],
      },
    })
    .execute();

  // add quantity field to product
  const results = responseProducts.body.results;
  const extendResults = results.map((product) => {
    const extendProduct: ProductProjectionWithQuantity = {
      ...product,
      quantity: 1,
    };
    const lineItem = items.find((item) => item.productId === product.id);
    if (lineItem) {
      extendProduct.quantity = lineItem.quantity;
    }
    return extendProduct;
  });
  return extendResults;
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
