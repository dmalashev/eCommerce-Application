import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { authUrl, client, clientId, clientSecret, httpMiddleware, projectKey, scopes } from '../client/client';
import { AuthMiddlewareOptions } from '@commercetools/ts-client';
import { CountriesCodes, CurrencyCodes, StorageKeys } from '../../types/enums';

export async function createAnonymousCustomer() {
  const getOrCreatedAnonymousId = () => {
    let id = localStorage.getItem(StorageKeys.ANONYMOUS_ID);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(StorageKeys.ANONYMOUS_ID, id);
    }
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
      .build(),
  );

  try {
    const cart = await apiRootAnonymous
      .withProjectKey({ projectKey })
      .carts()
      .post({
        body: { currency: CurrencyCodes.USD, country: CountriesCodes.US, anonymousId },
      })
      .execute();
    localStorage.setItem(StorageKeys.CART_ID, cart.body.id);
    localStorage.setItem(StorageKeys.CART_VERSION, cart.body.version.toString());
  } catch (error: any) {
    if (error.message?.includes('anonymousId is already in use')) {
      localStorage.removeItem(StorageKeys.ANONYMOUS_ID);
      return await createAnonymousCustomer();
    }
    throw error;
  }
}
