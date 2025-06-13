import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { client, httpMiddleware, projectKey } from '../client/client';

export async function getCart() {
  const isLogin = localStorage.getItem('access_token');
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
