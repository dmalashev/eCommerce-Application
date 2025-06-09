import { useUserSession } from '../../store/userSession.store';
import {
  ApiRoot,
  ClientResponse,
  createApiBuilderFromCtpClient,
  CustomerDraft,
  CustomerSignInResult,
} from '@commercetools/platform-sdk';
import {
  projectKey,
  authUrl,
  client as clientBuilder,
  httpMiddleware,
  userScopesClientId,
  userScopesClientSecret,
  userScopes,
} from '../client/client';
import { Client, PasswordAuthMiddlewareOptions, TokenStore } from '@commercetools/ts-client';
import { StorageTokenKeys } from '../../types/enums';
import { createCart } from '../Cart/create';
const { setUser } = useUserSession.getState();

export async function login(customer: CustomerDraft) {
  const { email, password } = customer;

  let token: TokenStore = {
    token: localStorage.getItem(StorageTokenKeys.ACCESS_TOKEN) || '',
    expirationTime: Number(localStorage.getItem(StorageTokenKeys.TOKEN_EXPIRATION) || 0),
    refreshToken: localStorage.getItem(StorageTokenKeys.REFRESH_TOKEN) || '',
  };

  if (!email || !password) {
    throw new Error('Customer email and password are required.');
  }

  const optionsPasswordFlow = (email: string, password: string): PasswordAuthMiddlewareOptions => {
    return {
      host: authUrl,
      projectKey,
      credentials: {
        clientId: userScopesClientId,
        clientSecret: userScopesClientSecret,
        user: {
          username: email,
          password: password,
        },
      },
      scopes: userScopes.split(','),
      httpClient: fetch,
      tokenCache: {
        get(): TokenStore {
          return token;
        },
        set(tokenObject: TokenStore): void {
          token = tokenObject;
          localStorage.setItem(StorageTokenKeys.ACCESS_TOKEN, token.token);
          localStorage.setItem(StorageTokenKeys.REFRESH_TOKEN, token.refreshToken!);
          localStorage.setItem(StorageTokenKeys.TOKEN_EXPIRATION, String(token.expirationTime));
        },
      },
    };
  };

  const client: Client = clientBuilder
    .withProjectKey(projectKey)
    .withPasswordFlow(optionsPasswordFlow(email, password!))
    .withHttpMiddleware(httpMiddleware)
    .build();

  const apiRoot: ApiRoot = createApiBuilderFromCtpClient(client);

  const response: ClientResponse<CustomerSignInResult> = await apiRoot
    .withProjectKey({ projectKey })
    .me()
    .login()
    .post({ body: { email, password } })
    .execute();

  const carts = await apiRoot.withProjectKey({ projectKey }).me().carts().get().execute();
  if (!carts.body.results.length) {
    console.log(carts.body.results)
   await createCart(apiRoot);
  }
  console.log(response)

  const addresses =
    response.body.customer.addresses?.map((address) => ({
      id: address.id,
      streetName: address.streetName,
      city: address.city,
      country: address.country,
      postalCode: address.postalCode,
    })) || [];

  setUser({
    firstName: response.body.customer.firstName,
    lastName: response.body.customer.lastName,
    email: response.body.customer.email,
    password: password,
    dateOfBirth: response.body.customer.dateOfBirth,
    addresses,
    shippingAddressIds: response.body.customer.shippingAddressIds,
    billingAddressIds: response.body.customer.billingAddressIds,
    defaultShippingAddressId: response.body.customer.defaultShippingAddressId,
    defaultBillingAddressId: response.body.customer.defaultBillingAddressId,
  });

  return {
    customer: response, //  Customer object
    token, //  Token
  };
}
