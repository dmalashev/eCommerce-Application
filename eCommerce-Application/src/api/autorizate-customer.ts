import {
  ApiRoot,
  ClientResponse,
  createApiBuilderFromCtpClient,
  CustomerDraft,
  ProductPagedQueryResponse,
} from '@commercetools/platform-sdk';
import { projectKey, authUrl, client as clientBuilder, httpMiddleware } from './client';
import {
  Client,
  PasswordAuthMiddlewareOptions,
  TokenStore,
} from '@commercetools/ts-client';
import { checkingError } from './checking-errors';

async function login(customer: CustomerDraft) {
  const { email, password } = customer;
  let token: TokenStore = {
    token: '',
    expirationTime: 0,
    refreshToken: '',
  };

  const optionsPasswordFlow = (email: string, password: string): PasswordAuthMiddlewareOptions => {
    return {
      host: authUrl,
      projectKey,
      credentials: {
        clientId: import.meta.env.VITE_USER_API_CLIENT_ID,
        clientSecret: import.meta.env.VITE_USER_API_CLIENT_SECRET,
        user: {
          username: email,
          password: password,
        },
      },
      scopes: import.meta.env.VITE_USER_API_SCOPES.split(','), // array strings
      httpClient: fetch,
      tokenCache: {
        get(): TokenStore {
          return token;
        },
        set(tokenObject: TokenStore): void {
          token = tokenObject;
          console.log('Token  сохранен');
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
    const response: ClientResponse<ProductPagedQueryResponse> = await apiRoot
      .withProjectKey({ projectKey })
      .products()
      .get()
      .execute();

    console.log('Customer login and token return:', response.body.results, token);
    return {
      customer: response, //  Customer object
      token, //  token
    };
  } catch (error: Error | any) {
    console.error(error);
    const message: string = checkingError(error);
    throw new Error(message);
  }
}

// export async function login(customer: CustomerDraft) {
//   // принимает объект который содержит почту  и  пароль типа строка
//   const { email, password } = customer;
//   try {
//     const result = await loginCustomer(email, password!);
//     console.log('Customer login and token return:', result.customer, result.token);
//     return result.customer;
//   } catch (error) {
//     console.error(error);
//   }
// }
