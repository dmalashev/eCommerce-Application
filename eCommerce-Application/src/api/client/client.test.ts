import { HttpMiddlewareOptions } from '@commercetools/ts-client';
import { client } from './client';
import { test, expect } from 'vitest';

const httpMiddleware: HttpMiddlewareOptions = {
  host: 'http://localhost:3000',
  includeOriginalRequest: true,
  includeRequestInErrorResponse: true,
  httpClient: fetch,
};


describe('client', () => {

  const projectKey: string = 'mockProjectKey';
  const clientId: string = 'mockClientId';
  const clientSecret: string = 'mockClientSecret';
  const authUrl: string = 'mockAuthUrl';
  const apiUrl: string = 'mockApiUrl';
  const scopes: string = 'mockScopes';
  const accessToken: string = localStorage.getItem('access_token') || '';
  const userScopesClientId: string = 'mockUserScopesClientId';
  const userScopesClientSecret: string = 'mockUserScopesClientSecret';
  const userScopes: string = 'mockUserScopes';


  test('should build client with no errors', () => {
    expect(() => {
      client.withHttpMiddleware(httpMiddleware).build();
    }).not.toThrow();
  });
  test('should return a client instance', () => {
    const result = client.withHttpMiddleware(httpMiddleware).build();
    expect(result).toBeDefined();
  });

});
