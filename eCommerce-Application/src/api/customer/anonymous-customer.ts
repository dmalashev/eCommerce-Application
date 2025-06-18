import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { authUrl, client, clientId, clientSecret, httpMiddleware, projectKey, scopes } from '../client/client';
import { AuthMiddlewareOptions } from '@commercetools/ts-client';
import { CountriesCodes, CurrencyCodes, StorageKeys } from '../../types/enums';

const getOrCreatedAnonymousId = (): string => {
  let id = localStorage.getItem(StorageKeys.ANONYMOUS_ID);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(StorageKeys.ANONYMOUS_ID, id);
  }
  return id;
};
export async function createAnonymousCustomer() {
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
    console.log('create')
    const cart = await apiRootAnonymous
      .withProjectKey({ projectKey })
      .carts()
      .post({
        body: { currency: CurrencyCodes.USD, country: CountriesCodes.US, anonymousId },
      })
      .execute();
    console.log('new CART ID' + cart.body.id);
    localStorage.setItem(StorageKeys.CART_ID, cart.body.id);
    localStorage.setItem(StorageKeys.CART_VERSION, cart.body.version.toString());
  } catch (error: unknown) {
    if (error instanceof Error && error.message?.includes('anonymousId is already in use')) {
      localStorage.removeItem(StorageKeys.ANONYMOUS_ID);
      return await createAnonymousCustomer();
    }
    throw error;
  }
}
