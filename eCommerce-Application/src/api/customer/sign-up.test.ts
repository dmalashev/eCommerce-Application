import { vi } from 'vitest';
import { describe, it, expect, beforeEach } from 'vitest';
import { signUp } from './create-customer';

vi.mock('../client/client', () => ({
  client: {
    withProjectKey: vi.fn(() => ({
      withClientCredentialsFlow: vi.fn(() => ({
        withHttpMiddleware: vi.fn(() => ({
          build: vi.fn(() => 'mockedClient'),
        })),
      })),
    })),
  },
  projectKey: 'test-key',
  httpMiddleware: {},
  authMiddleware: {},
}));
vi.mock('./autorizate-customer', () => ({
  login: vi.fn(),
}));
vi.mock('@commercetools/platform-sdk', async () => {
  const actual = await vi.importActual<typeof import('@commercetools/platform-sdk')>('@commercetools/platform-sdk');
  return {
    ...actual,
    createApiBuilderFromCtpClient: vi.fn(() => ({
      withProjectKey: () => ({
        me: () => ({
          signup: () => ({
            post: () => ({
              execute: vi.fn().mockResolvedValue({ body: { customer: 'mocked-customer' }, statusCode: 200 }),
            }),
          }),
          login: () => ({
            post: () => ({
              execute: vi.fn().mockResolvedValue({ body: { accessToken: 'mock-token' } }),
            }),
          }),
        }),
      }),
    })),
  };
});

describe('signUp', () => {
  const inputsObject = {
    name: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: '123456',
    date: '1990-01-01',
    shippingCity: 'Berlin',
    shippingCountry: 'Germany',
    shippingStreet: 'Main St',
    shippingPostalcode: '12345',
    theSameShippingBillingAddressChecker: 'true',
    defaultShippingAddressChecker: 'true',
    defaultBillingAddressChecker: 'true',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });
  it('should registrate and login customer', async () => {
    const result = await signUp(inputsObject);
    expect(result.statusCode).toBe(200);
    expect(result.body).toBeDefined();
    expect(result.body!.customer).toBe('mocked-customer');
  });
});
