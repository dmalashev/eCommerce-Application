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

export async function login(customer: CustomerDraft) {
  const { email, password } = customer;
  let token: TokenStore = {
    token: '',
    expirationTime: 0,
    refreshToken: '',
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

  try {
    const response: ClientResponse<CustomerSignInResult> = await apiRoot
      .withProjectKey({ projectKey })
      .me()
      .login()
      .post({ body: { email, password } })
      .execute();

    return {
      customer: response, //  Customer object
      token, //  token
    };
  } catch (error: Error | any) {
    return Promise.reject(error);
  }
}
