import { createApiBuilderFromCtpClient,  ProductDraft } from '@commercetools/platform-sdk';
import { authMiddleware, client as clientBuilder, httpMiddleware, projectKey } from '../client/client';
import {PRODUCTS} from '../data/products';


export async function setProductType(data:ProductDraft[]) {

  const client = clientBuilder
    .withProjectKey(projectKey)
    .withClientCredentialsFlow(authMiddleware)
    .withHttpMiddleware(httpMiddleware)
    .build();
  const apiRoot = createApiBuilderFromCtpClient(client);
  data.forEach(async (product) => {
    const response = await apiRoot.withProjectKey({ projectKey }).products().post({ body:product }).execute();
    console.log(response.body,'response');

  })
}
setProductType(PRODUCTS);
