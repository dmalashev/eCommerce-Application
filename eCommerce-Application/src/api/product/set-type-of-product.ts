import {
  Attribute,
  Category,
  CategoryPagedQueryResponse,
  ClientResponse,
  createApiBuilderFromCtpClient,
  ProductDraft,
} from '@commercetools/platform-sdk';
import { authMiddleware, client as clientBuilder, httpMiddleware, projectKey } from '../client/client';
import { productDrafts, PRODUCTS } from '../data/products';
import { updateProductData } from './update';
import { ErrorHandlerOptions, ErrorMiddlewareOptions, HttpErrorType } from '@commercetools/ts-client';

export async function setProductType(data: ProductDraft[]) {
  const client = clientBuilder
    .withProjectKey(projectKey)
    .withClientCredentialsFlow(authMiddleware)
    .withHttpMiddleware(httpMiddleware)
    .build();
  const apiRoot = createApiBuilderFromCtpClient(client);
  for (let i = 0;i <= data.length; i++){
    const responseProducts = apiRoot.withProjectKey({ projectKey }).products().get({queryArgs: {limit:100}}).execute()

    const dublicateProduct = (await responseProducts).body.results.find(product => product.masterData.current.slug.en === data[i].slug.en)
    if (dublicateProduct) {
      // console.log((await responseProducts).body.results)
      // console.log('dublicate' ,dublicateProduct)

      continue
    } else {
      const categories: ClientResponse<CategoryPagedQueryResponse> = await apiRoot
        .withProjectKey({ projectKey })
        .categories()
        .get({ queryArgs: { limit: 500 } })
        .execute();

      const catArray: Category[] = categories.body.results;
      const catname = catArray.map((category: Category) => category.slug.en);


      // console.log(catname, 'slug');
      data.forEach((product) => {
        product.masterVariant?.attributes?.forEach((attribute: Attribute) => {
          if (catname.includes(attribute.name)) {

            const cat = catArray.find((category: Category) => category.slug.en === attribute.name);

            product.categories?.push({
              typeId: 'category',
              key: cat?.key,
            });
          }
          if (Array.isArray(attribute.value) && attribute.name === 'genre' ) {
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
          if (attribute.name === 'country') {
            const cat = catArray.find((category: Category) => category.slug.en === attribute.value.en.toLowerCase());
            product.categories?.push({
              typeId: 'category',
              key: cat?.key,
            });
          }
        });
      });

      data.forEach(async (product) => {
        const response = apiRoot.withProjectKey({ projectKey }).products().post({ body: product }).execute();
        response.then().catch((rej: HttpErrorType) => {if(rej.code === 'InvalidField')  console.log(rej.message, product)});

      });
      // console.log((await apiRoot.withProjectKey({ projectKey }).products().get().execute()).body.results.length);
    }
  }

}

setProductType(productDrafts);
setProductType(PRODUCTS);
updateProductData();
