import { createApiBuilderFromCtpClient, ProductDraft } from "@commercetools/platform-sdk";
import { authMiddleware, client, httpMiddleware, projectKey } from "../client/client";
import { getProducts } from "./getProducts";

export async function updateProductData() {
  const array = await getProducts()

  const apiRootclient = client
    .withProjectKey(projectKey)
    .withClientCredentialsFlow(authMiddleware)
    .withHttpMiddleware(httpMiddleware)
    .build();
  const apiRoot = createApiBuilderFromCtpClient(apiRootclient);


  const tax = await apiRoot.withProjectKey({ projectKey }).taxCategories().get().execute();


  const taxCategoryId = tax.body.results[0].id;


  const mapPromises = array.map(async (product) => {

    const updatedProduct = await apiRoot
    .withProjectKey({ projectKey })
    .products()
    .withId({ ID: product.id })
    .post({
      body: {
        version: product.version,
        actions: [
          {
            action: 'setTaxCategory',
            taxCategory: {
              typeId: 'tax-category',
              id: taxCategoryId,
            },
          },
        ],
      },
    })
      .execute();
    return updatedProduct;
  })

  await Promise.all(mapPromises)

  // console.log('update', array)
}
