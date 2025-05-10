import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { projectKey, authUrl, clientId, clientSecret, client as clientBuilder, httpMiddleware } from './client';
import {  TokenStore } from '@commercetools/ts-client';
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
        clientId: clientId,
        clientSecret,
        user: {
          username: email,
          password: password,
        },
      },
      scopes: [`manage_project:${projectKey}`],
      httpClient: fetch,
      tokenCache: {
        get(): TokenStore  {

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
    const response = await apiRoot.withProjectKey({ projectKey }).me().get().execute();

    return {
      customer: response, // Возвращает залогиненого customer body
      token, // token объект
    };
  } catch (error) {
    throw new Error(`Error login: ${error}`);
  }
}

type Customer = { [key: string]: string };

export async function login(customer: Customer) {
  const { email, password } = customer;
  try {
    const result = await loginCustomer(email, password);
    console.log('Customer login and token return:', result.customer, result.token );
    return result.customer;
  } catch (error) {
    console.error(error);
  }
}
