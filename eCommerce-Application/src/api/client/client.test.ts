import { HttpMiddlewareOptions } from '@commercetools/ts-client';
import { client } from './client';
import { test, expect, describe } from 'vitest';

const httpMiddleware: HttpMiddlewareOptions = {
  host: 'http://localhost:3000',
  includeOriginalRequest: true,
  includeRequestInErrorResponse: true,
  httpClient: fetch,
};

describe('client', () => {
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
