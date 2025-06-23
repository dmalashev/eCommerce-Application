import { ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import {
  AuthMiddlewareOptions,
  ClientBuilder,
  HttpMiddlewareOptions,
  Middleware,
  RefreshAuthMiddlewareOptions,
  TokenStore,
} from '@commercetools/ts-client';
import { StorageTokenKeys } from '../../types/enums';
import { createAnonymousCustomer } from '../customer/anonymous-customer';
import { logout } from '../customer/logout';


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

let reloaded = async function () {
  if (!localStorage.getItem(StorageTokenKeys.ACCESS_TOKEN)) {
    logout();
    await createAnonymousCustomer();

  }
}

window.onload = function () {
  var loaded = sessionStorage.getItem('loaded');
  if (loaded) {
    reloaded();
  } else {
    sessionStorage.setItem('loaded', 'true');
  }
};



const tokenCache = {
  get(): TokenStore {
    return token;
  },
  set(tokenObject: TokenStore): void {
    token = tokenObject;
    localStorage.setItem(StorageTokenKeys.ACCESS_TOKEN, token.token);
    localStorage.setItem(StorageTokenKeys.REFRESH_TOKEN, token.refreshToken || '');
    localStorage.setItem(StorageTokenKeys.TOKEN_EXPIRATION, (Date.now() + token.expirationTime * 1000)?.toString());
  },
};


let token: TokenStore = {
  token: localStorage.getItem(StorageTokenKeys.ACCESS_TOKEN) || '',
  expirationTime: Number(localStorage.getItem(StorageTokenKeys.TOKEN_EXPIRATION) || 0),
  refreshToken: localStorage.getItem(StorageTokenKeys.REFRESH_TOKEN) || '',
};




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

export function createAuthMiddleware(accessToken: string): Middleware {
  return (next) => async (request) => {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${accessToken}`,
    };
    return next(request);
  };
}
const refreshMiddleware: RefreshAuthMiddlewareOptions = {
  host: authUrl,
  projectKey,
  credentials: {
    clientId,
    clientSecret
  },
  refreshToken: token.refreshToken!,
  tokenCache,
    httpClient: fetch,
  };





const clientCustomer = new ClientBuilder()
  .withProjectKey(projectKey)
  .withHttpMiddleware(httpMiddleware)
  .withRefreshTokenFlow(refreshMiddleware)
  .withMiddleware(createAuthMiddleware(accessToken))
  .build();
const clientAnonCustomer = new ClientBuilder()
  .withProjectKey(projectKey)
  .withHttpMiddleware(httpMiddleware)
  .build();
export const apiRootAnonymous: ApiRoot = createApiBuilderFromCtpClient(clientAnonCustomer);
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
