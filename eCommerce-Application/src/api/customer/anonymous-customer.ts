import { ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { authUrl, client, clientId, clientSecret, httpMiddleware, projectKey, scopes } from '../client/client';
import {
  AuthMiddlewareOptions,
  ClientBuilder,
  createAuthMiddlewareForAnonymousSessionFlow,
} from '@commercetools/ts-client';
import { build } from 'vite';

export async function createAnonymousCustomer() {
  const getOrCreatedAnonymousId = () => {
    let id = localStorage.getItem('anonymousId');
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem('anonymousId', id);
    }
    console.log('anonymousId', localStorage.getItem('anonymousId'));
    return id;
  };

  const anonymousId = getOrCreatedAnonymousId();

  const anonymousMiddleware: AuthMiddlewareOptions = {
    host: authUrl,
    projectKey,
    credentials: {
      clientId: clientId,
      clientSecret: clientSecret,
      anonymousId,
    },

    scopes: scopes.split(','),
    httpClient: fetch,
  };
  const apiRootAnonymous = createApiBuilderFromCtpClient(
    client
      .withProjectKey(projectKey)
      .withAnonymousSessionFlow(anonymousMiddleware)
      .withHttpMiddleware(httpMiddleware)
      .build()
  );

  try {
    const cart = await apiRootAnonymous
      .withProjectKey({ projectKey })
      .carts()
      .post({
        body: { currency: 'USD', anonymousId },
      })
      .execute();
    console.log(cart, 'cart createAnonymousCustomer');
    localStorage.setItem('cartId', cart.body.id);
    localStorage.setItem('cartVersion', cart.body.version.toString());
  } catch (error: any) {
    if (error.message?.includes('anonymousId is already in use')) {
      localStorage.removeItem('anonymousId');
      return await createAnonymousCustomer();
    }
    throw error;
  }
}
