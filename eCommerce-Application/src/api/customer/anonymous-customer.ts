import { ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { authUrl, client, clientId, clientSecret, httpMiddleware, projectKey, scopes } from '../client/client';
import { AuthMiddlewareOptions } from '@commercetools/ts-client';

export async function createAnonymousCustomer() {
  const getOrCreatedAnonymousId = () => {
    let id = localStorage.getItem('anonymousId');
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem('anonymousId', id);
    }
    return id;
  };

  //Anonymous middleware

  const anonymousMiddleware: AuthMiddlewareOptions = {
    host: authUrl,
    projectKey,
    credentials: {
      clientId: clientId,
      clientSecret: clientSecret,
      anonymousId: localStorage.getItem('anonymousId') || getOrCreatedAnonymousId(),
    },

    scopes: scopes.split(','),
    httpClient: fetch,
  };

  const apiRootAnonymous: ApiRoot = createApiBuilderFromCtpClient(
    client
      .withProjectKey(projectKey)
      .withAnonymousSessionFlow(anonymousMiddleware)
      .withHttpMiddleware(httpMiddleware)
      .build(),
  );
  apiRootAnonymous
    .withProjectKey({ projectKey })
    .carts()
    .post({ body: { currency: 'USD', anonymousId: localStorage.getItem('anonymousId') || getOrCreatedAnonymousId() } });
}
