import { expectTypeOf, vi } from 'vitest';
import { getProducts } from './getProduct';

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

vi.mock('@commercetools/platform-sdk', async () => {
  const product = {
    id: 'mockProduct-id',
    version: 1,
    createdAt: 'mockCreatedAt',
    lastModifiedAt: 'mockLastModifiedAt',
    productType: {
      id: 'mockProductType-id',
      typeId: 'product-type',
    },
    masterData: {
      current: {
        slug: { en: 'mockSlug' },
        name: { en: 'mockName' },
        categories: [
          {
            id: 'mockCategory-id',
            typeId: 'category',
          },
        ],
      },
    },
  };
  const actual = await vi.importActual<typeof import('@commercetools/platform-sdk')>('@commercetools/platform-sdk');
  return {
    ...actual,
    createApiBuilderFromCtpClient: vi.fn(() => ({
      withProjectKey: () => ({
        products: () => ({
          get: () => ({
            execute: vi.fn().mockResolvedValue({ body: { results: [product] } }),
          }),
        }),
      }),
    })),
  };
});
describe('getProducts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it('should return array products', async () => {
    const result = await getProducts();
    expect(result).toHaveLength(1);
    expectTypeOf(getProducts).returns.resolves.toBeArray();
  });
  it('should return not undefined', async () => {
    const result = await getProducts();
    expect(result[0]).toBeDefined();
  });
});
describe('dataProducts', () => {
  it('should return dataProducts', async () => {
    const arrayProduct = await getProducts();
    const result = arrayProduct.map((product) => ({
      id: product.id,
      current: {
        slug: product.masterData.current.slug,
        name: product.masterData.current.name,
      },
    }));
    expect(result[0]).toEqual({
      id: 'mockProduct-id',
      current: {
        slug: { en: 'mockSlug' },
        name: { en: 'mockName' },
      },
    });
  });
});
