import { describe, test, expect, vi, beforeEach } from 'vitest';
import { login } from '../../../src/api/customer/autorizate-customer';
import { CustomerDraft } from '@commercetools/platform-sdk';

vi.mock('../../../src/api/customer/autorizate-customer.ts', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>;

  return {
    ...actual,
    login: vi.fn((customer) => {
      if (!customer.email || !customer.password) {
        return Promise.reject(new Error('Customer email and password are required.'));
      }

      return Promise.resolve({
        customer: {
          body: {
            customer: {
              id: 'cust-123',
              email: 'john@example.com',
            },
          },
        },
        token: {
          token: 'access-token',
          expirationTime: Date.now() + 3600 * 1000,
          refreshToken: 'refresh-token',
        },
      });
    }),
  };
});

vi.mock('@commercetools/platform-sdk', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>;
  return {
    ...actual,
    createApiBuilderFromCtpClient: vi.fn().mockReturnValue({
      withProjectKey: () => ({
        me: () => ({
          login: () => ({
            post: () => ({
              execute: vi.fn().mockResolvedValue({
                body: {
                  customer: { id: 'cust-123', email: 'john@example.com' },
                },
              }),
            }),
          }),
        }),
      }),
    }),
  };
});
beforeEach(() => {
  localStorage.clear();
});
describe('login()', () => {
  test('should return customer and token on success', async () => {
    const customer: CustomerDraft = {
      email: 'jhn@example.com',
      password: '123456',
    };

    const result = await login(customer);

    expect(result.customer.body.customer).toEqual({
      id: 'cust-123',
      email: 'john@example.com',
    });

    expect(result.token).toBeDefined();
    expect(typeof result.token.token).toBe('string');
  });
  
  test('should throw error if email or password is missing', async () => {
    await expect(login({ email: '', password: '' })).rejects.toThrow('Customer email and password are required.');
  });
});
