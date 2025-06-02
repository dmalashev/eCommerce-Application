import {
  Attribute,
  Category,
  CategoryPagedQueryResponse,
  ClientResponse,
  createApiBuilderFromCtpClient,
  ProductDraft,
} from '@commercetools/platform-sdk';
import { authMiddleware, client as clientBuilder, httpMiddleware, projectKey } from '../client/client';
import { PRODUCTS } from '../data/products';

export async function setProductType(data: ProductDraft[]) {
  const client = clientBuilder
    .withProjectKey(projectKey)
    .withClientCredentialsFlow(authMiddleware)
    .withHttpMiddleware(httpMiddleware)
    .build();
  const apiRoot = createApiBuilderFromCtpClient(client);

  const categories: ClientResponse<CategoryPagedQueryResponse> = await apiRoot
    .withProjectKey({ projectKey })
    .categories()
    .get({ queryArgs: { limit: 500 } })
    .execute();

  const catArray: Category[] = categories.body.results;
  const catname = catArray.map((category: Category) => category.slug.en);

  console.log(catname, 'slug');
  data.forEach((product) => {
    product.masterVariant?.attributes?.forEach((attribute: Attribute) => {
      if (catname.includes(attribute.name)) {
        const cat = catArray.find((category: Category) => category.slug.en === attribute.name);
        product.categories?.push({
          typeId: 'category',
          key: cat?.key,
        });
      }
      if (Array.isArray(attribute.value)) {
        attribute.value.forEach((value) => {
          if (typeof value === 'string') {

              if (catname.includes(value)) {
                const cat = catArray.find((category: Category) => category.slug.en === value);
                product.categories?.push({
                  typeId: 'category',
                  key: cat?.key,
                });
              }
          } else {
            if (catname.includes(value.en)) {
              const cat = catArray.find((category: Category) => category.slug.en.includes(value.en));
              product.categories?.push({
                typeId: 'category',
                key: cat?.key,
              });
            }
          }
        });
      }
    });
  });

  data.forEach(async (product) => {
    const response = await apiRoot.withProjectKey({ projectKey }).products().post({ body: product }).execute();
    console.log(response.body, 'response');
  });
}
setProductType(PRODUCTS);
