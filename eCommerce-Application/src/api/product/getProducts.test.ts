import { expectTypeOf, vi } from "vitest";
import { getProducts } from "./getProduct";





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
  const actual = await vi.importActual<typeof import('@commercetools/platform-sdk')>('@commercetools/platform-sdk');
  return {
    ...actual,
    createApiBuilderFromCtpClient: vi.fn(() => ({
      withProjectKey: () => ({
        products: () => ({
          get: () => ({
            execute:vi.fn().mockResolvedValue({body:{results:[{id:'123344', version:1}]}})
          })
        }),
      }),
    })),
  };
});
describe('getProducts', () => {


  beforeEach(() => {
    vi.clearAllMocks()
  })
  it('should return array products', async () => {


    const result = await getProducts()
    expect(result).toHaveLength(1)
    expectTypeOf(getProducts).returns.resolves.toBeArray()
  })
  it('should return array products', async () => {


    const result = await getProducts()
    expect(result[0]).toBeDefined()
  })
  

})