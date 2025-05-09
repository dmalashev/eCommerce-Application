import {
  AuthMiddlewareOptions,
  ClientBuilder,
  HttpMiddlewareOptions,
} from '@commercetools/ts-client';
import { createApiBuilderFromCtpClient, CustomerDraft } from '@commercetools/platform-sdk';

const projectKey = import.meta.env.VITE_PROJECT_KEY;
const clientId = import.meta.env. VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const authUrl = import.meta.env.VITE_AUTH_URL;
const apiUrl = import.meta.env.VITE_API_URL;
const scopes = import.meta.env.VITE_SCOPES;


// авторизация серверного приложения для создания пользователя
const authMiddleware: AuthMiddlewareOptions = {
  host: authUrl,
  projectKey,
  credentials: {
    clientId: clientId,
    clientSecret: clientSecret,
  },
  scopes: [scopes],
  httpClient:fetch
};



const httpMiddleware: HttpMiddlewareOptions = {
  host: apiUrl,
  includeOriginalRequest: true,
  includeRequestInErrorResponse: true,
  httpClient: fetch,
};
// клиент
const client = new ClientBuilder()




export {authMiddleware, projectKey, clientId, clientSecret, authUrl, apiUrl, scopes,client, httpMiddleware };
