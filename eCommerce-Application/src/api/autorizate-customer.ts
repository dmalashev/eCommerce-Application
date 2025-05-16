import { createApiBuilderFromCtpClient, CustomerDraft } from '@commercetools/platform-sdk';
import { projectKey, authUrl, client as clientBuilder, httpMiddleware } from './client';
import { TokenStore } from '@commercetools/ts-client';
import { checkingError, commercetoolsError } from './checking-errors';
console.log(projectKey);

async function loginCustomer(email: string, password: string) {
  let token: TokenStore = {
    token: '',
    expirationTime: 0,
    refreshToken: '',
  };

  const client = clientBuilder
    .withProjectKey(projectKey)
    .withPasswordFlow({
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
    })

    .withHttpMiddleware(httpMiddleware)
    .build();
  const apiRoot = createApiBuilderFromCtpClient(client);
  try {
    const response = await apiRoot.withProjectKey({ projectKey }).products().get().execute();

    return {
      customer: response, // Возвращает залогиненого customer
      token, // token объект
    };
  } catch (error) {
    console.log(error);
    const message = checkingError(error as commercetoolsError);
    console.log(message);
    throw new Error(message);
  }
}

export async function login(customer: CustomerDraft) {
  // принимает объект который содержит почту  и  пароль типа строка
  const { email, password } = customer;
  try {
    const result = await loginCustomer(email, password!);
    console.log('Customer login and token return:', result.customer, result.token);
    return result.customer;
  } catch (error) {
    console.error(error);
  }
}
