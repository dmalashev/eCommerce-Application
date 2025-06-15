import { ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import {
  AuthMiddlewareOptions,
  ClientBuilder,
  HttpMiddlewareOptions,
  Middleware,
  TokenStore,
} from '@commercetools/ts-client';
import { StorageTokenKeys } from '../../types/enums';

const projectKey: string = import.meta.env.VITE_PROJECT_KEY;
const clientId: string = import.meta.env.VITE_CLIENT_ID;
const clientSecret: string = import.meta.env.VITE_CLIENT_SECRET;
const authUrl: string = import.meta.env.VITE_AUTH_URL;
const apiUrl: string = import.meta.env.VITE_API_URL;
const scopes: string = import.meta.env.VITE_SCOPES;
const accessToken: string = localStorage.getItem('access_token') || '';
const userScopesClientId: string = import.meta.env.VITE_USER_API_CLIENT_ID;
const userScopesClientSecret: string = import.meta.env.VITE_USER_API_CLIENT_SECRET;
const userScopes: string = import.meta.env.VITE_USER_API_SCOPES;

// Authorization of the server application to create a user
const authMiddleware: AuthMiddlewareOptions = {
  host: authUrl,
  projectKey,
  credentials: {
    clientId: clientId,
    clientSecret: clientSecret,
  },
  scopes: scopes.split(','),
  httpClient: fetch,
};

// Middleware for sending requests
const httpMiddleware: HttpMiddlewareOptions = {
  host: apiUrl,
  includeOriginalRequest: true,
  includeRequestInErrorResponse: true,
  httpClient: fetch,
};

const client: ClientBuilder = new ClientBuilder();
const apiRoot: ApiRoot = createApiBuilderFromCtpClient(
  client
    .withProjectKey(projectKey)
    .withClientCredentialsFlow(authMiddleware)
    .withHttpMiddleware(httpMiddleware)
    .build(),
);

export const createClientWithPasswordFlow = (email: string, password: string): ClientBuilder => {
  return new ClientBuilder().withPasswordFlow({
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
        return {
          token: localStorage.getItem(StorageTokenKeys.ACCESS_TOKEN) || '',
          refreshToken: localStorage.getItem(StorageTokenKeys.REFRESH_TOKEN) || '',
          expirationTime: Number(localStorage.getItem(StorageTokenKeys.TOKEN_EXPIRATION)) || 0,
        };
      },
      set(tokenObject: TokenStore): void {
        const token = tokenObject;
        localStorage.setItem(StorageTokenKeys.ACCESS_TOKEN, token.token);
        localStorage.setItem(StorageTokenKeys.REFRESH_TOKEN, token.refreshToken || '');
        localStorage.setItem(StorageTokenKeys.TOKEN_EXPIRATION, (Date.now() + token.expirationTime * 1000)?.toString());
      },
    },
  });
};

function createAuthMiddleware(accessToken: string): Middleware {
  return (next) => async (request) => {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${accessToken}`,
    };
    return next(request);
  };
}

const clientCustomer = new ClientBuilder()
  .withProjectKey(projectKey)
  .withHttpMiddleware(httpMiddleware)
  .withMiddleware(createAuthMiddleware(accessToken))
  .build();
const apiRootCustomer: ApiRoot = createApiBuilderFromCtpClient(clientCustomer);

export {
  apiRootCustomer,
  apiRoot,
  authMiddleware,
  projectKey,
  clientId,
  clientSecret,
  authUrl,
  apiUrl,
  scopes,
  client,
  httpMiddleware,
  userScopesClientId,
  userScopesClientSecret,
  userScopes,
};
