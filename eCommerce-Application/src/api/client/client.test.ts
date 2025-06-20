import { HttpMiddlewareOptions } from '@commercetools/ts-client';
import { client } from './client';
import { test } from 'vitest';
import { reloaded } from './client';
import { logout } from '../customer/logout';
import { createAnonymousCustomer } from '../customer/anonymous-customer';
import { StorageTokenKeys } from '../../types/enums';
import { vi } from 'vitest';


const httpMiddleware: HttpMiddlewareOptions = {
  host: 'http://localhost:3000',
  includeOriginalRequest: true,
  includeRequestInErrorResponse: true,
  httpClient: fetch,
};


vi.mock('../customer/logout', () => ({
  logout: vi.fn(),
}));

vi.mock('../customer/anonymous-customer', () => ({
  createAnonymousCustomer: vi.fn(),
}));

describe('reloaded()', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should logout и createAnonymousCustomer, if not token', async () => {
    await reloaded();

    expect(logout).toHaveBeenCalledTimes(1);
    expect(createAnonymousCustomer).toHaveBeenCalledTimes(1);
  });

  it('should not logout и createAnonymousCustomer, if token exists', async () => {
    localStorage.setItem(StorageTokenKeys.ACCESS_TOKEN, 'fake-token');

    await reloaded();

    expect(logout).not.toHaveBeenCalled();
    expect(createAnonymousCustomer).not.toHaveBeenCalled();
  });
});



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
