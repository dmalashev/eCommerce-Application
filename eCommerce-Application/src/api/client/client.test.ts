import { HttpMiddlewareOptions } from '@commercetools/ts-client';
import { client } from './client';
import { test, expect } from 'vitest';

const httpMiddleware: HttpMiddlewareOptions = {
  host: 'http://localhost:3000',
  includeOriginalRequest: true,
  includeRequestInErrorResponse: true,
  httpClient: fetch,
};

test('should build client with no errors', () => {
  expect(() => {
    client.withHttpMiddleware(httpMiddleware).build();
  }).not.toThrow();
});
