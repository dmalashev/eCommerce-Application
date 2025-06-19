import { vi, describe, it, expect, beforeEach } from 'vitest';
import { addItemToCart } from './your-module';
import { ApiRoot, ClientResponse, Cart, ProductProjection, LineItem } from '@commercetools/platform-sdk';
import { apiRootCustomer, client, projectKey } from '../client/client';
import { createAnonymousCustomer } from '../customer/anonymous-customer';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    clear: vi.fn(() => {
      store = {};
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
  };
})();

vi.stubGlobal('localStorage', localStorageMock);

// Mock the API client and related functions
vi.mock('../client/client', () => ({
  apiRootCustomer: {
    withProjectKey: vi.fn().mockReturnThis(),
    me: vi.fn().mockReturnThis(),
    activeCart: vi.fn().mockReturnThis(),
    carts: vi.fn().mockReturnThis(),
    get: vi.fn().mockReturnThis(),
    post: vi.fn().mockReturnThis(),
    withId: vi.fn().mockReturnThis(),
    execute: vi.fn(),
  },
  client: {
    withProjectKey: vi.fn().mockReturnThis(),
    withHttpMiddleware: vi.fn().mockReturnThis(),
    build: vi.fn(),
  },
  projectKey: 'test-project-key',
}));

vi.mock('../customer/anonymous-customer', () => ({
  createAnonymousCustomer: vi.fn(),
}));

vi.mock('@commercetools/platform-sdk', () => ({
  createApiBuilderFromCtpClient: vi.fn().mockReturnValue({
    withProjectKey: vi.fn().mockReturnThis(),
    carts: vi.fn().mockReturnThis(),
    withId: vi.fn().mockReturnThis(),
    post: vi.fn().mockReturnThis(),
    execute: vi.fn(),
  }),
  ApiRoot: vi.fn(),
  Cart: vi.fn(),
  ClientResponse: vi.fn(),
  ProductProjection: vi.fn(),
  LineItem: vi.fn(),
}));

describe('addItemToCart', () => {
  const mockProduct: ProductProjection = {
    id: 'prod-123',
    version: 1,
    createdAt: '',
    lastModifiedAt: '',
    productType: { typeId: 'product-type', id: 'type-123' },
    name: { en: 'Test Product' },
    slug: { en: 'test-product' },
    // Add other required properties
  };

  const mockCart: Cart = {
    id: 'cart-123',
    version: 1,
    createdAt: '',
    lastModifiedAt: '',
    lineItems: [],
    totalPrice: {
      currencyCode: 'USD',
      centAmount: 0,
    },
    // Add other required properties
  };

  const mockUpdatedCart: Cart = {
    ...mockCart,
    version: 2,
    lineItems: [
      {
        id: 'line-item-1',
        productId: 'prod-123',
        quantity: 1,
        // Add other required line item properties
      },
    ],
  };

  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('should add item to cart for authenticated user', async () => {
    localStorage.setItem('access_token', 'test-token');

    const mockExecute = vi
      .fn()
      .mockResolvedValueOnce({ body: mockCart })
      .mockResolvedValueOnce({ body: mockUpdatedCart });

    vi.mocked(apiRootCustomer.execute).mockImplementation(mockExecute);

    const result = await addItemToCart(mockProduct);

    expect(apiRootCustomer.withProjectKey).toHaveBeenCalledWith({ projectKey: 'test-project-key' });
    expect(apiRootCustomer.me).toHaveBeenCalled();
    expect(apiRootCustomer.activeCart).toHaveBeenCalled();
    expect(apiRootCustomer.get).toHaveBeenCalled();

    expect(apiRootCustomer.carts).toHaveBeenCalled();
    expect(apiRootCustomer.withId).toHaveBeenCalledWith({ ID: 'cart-123' });
    expect(apiRootCustomer.post).toHaveBeenCalledWith({
      body: {
        version: 1,
        actions: [
          {
            action: 'addLineItem',
            productId: 'prod-123',
            quantity: 1,
          },
        ],
      },
    });

    expect(result).toEqual(mockUpdatedCart.lineItems);
  });

  it('should add item to existing cart for anonymous user', async () => {
    localStorage.setItem('anonymousId', 'anon-123');
    localStorage.setItem('cartId', 'cart-456');
    localStorage.setItem('cartVersion', '3');

    const mockApiRootAnonymous = {
      withProjectKey: vi.fn().mockReturnThis(),
      carts: vi.fn().mockReturnThis(),
      withId: vi.fn().mockReturnThis(),
      post: vi.fn().mockReturnThis(),
      execute: vi.fn().mockResolvedValue({ body: mockUpdatedCart }),
    };

    vi.mocked(createApiBuilderFromCtpClient).mockReturnValue(mockApiRootAnonymous);

    const result = await addItemToCart(mockProduct);

    expect(mockApiRootAnonymous.withProjectKey).toHaveBeenCalledWith({ projectKey: 'test-project-key' });
    expect(mockApiRootAnonymous.carts).toHaveBeenCalled();
    expect(mockApiRootAnonymous.withId).toHaveBeenCalledWith({ ID: 'cart-456' });
    expect(mockApiRootAnonymous.post).toHaveBeenCalledWith({
      body: {
        version: 3,
        actions: [
          {
            action: 'addLineItem',
            productId: 'prod-123',
            quantity: 1,
          },
        ],
      },
    });

    expect(localStorage.setItem).toHaveBeenCalledWith('cartVersion', '2');
    expect(result).toEqual(mockUpdatedCart.lineItems);
  });

  it('should create anonymous customer when no cart exists', async () => {
    localStorage.setItem('anonymousId', 'anon-123');

    const mockApiRootAnonymous = {
      withProjectKey: vi.fn().mockReturnThis(),
      carts: vi.fn().mockReturnThis(),
      withId: vi.fn().mockReturnThis(),
      post: vi.fn().mockReturnThis(),
      execute: vi.fn().mockResolvedValue({ body: mockUpdatedCart }),
    };

    vi.mocked(createApiBuilderFromCtpClient).mockReturnValue(mockApiRootAnonymous);
    vi.mocked(createAnonymousCustomer).mockResolvedValue(undefined);

    const result = await addItemToCart(mockProduct);

    expect(createAnonymousCustomer).toHaveBeenCalled();
  });

  it('should handle API errors gracefully', async () => {
    localStorage.setItem('access_token', 'test-token');

    vi.mocked(apiRootCustomer.execute).mockRejectedValueOnce(new Error('API error'));

    await expect(addItemToCart(mockProduct)).rejects.toThrow('API error');
  });
});
