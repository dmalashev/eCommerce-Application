import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";
import { client, httpMiddleware, projectKey } from "../client/client";

export async function getCart() {

  if (localStorage.getItem('access_token')) {

     const apiRootCustomer = createApiBuilderFromCtpClient(
      client
        .withProjectKey(projectKey)
        .withHttpMiddleware(httpMiddleware)
        .build(),
    );

    const response = await apiRootCustomer.withProjectKey({ projectKey }).me().carts().get().execute();
    console.log('logined customer cart', response.body)
    return response.body;
  } else {
    const apiRootAnonymous = createApiBuilderFromCtpClient(
      client
        .withProjectKey(projectKey)
        .withHttpMiddleware(httpMiddleware)
        .build(),
    );

    const response = await apiRootAnonymous.withProjectKey({ projectKey }).carts().get().execute();
    console.log('anonymous customer cart', response.body.results)
    return response.body;
  }


}
