import { Cart, ClientResponse, createApiBuilderFromCtpClient, LineItemDraft, ProductProjection } from "@commercetools/platform-sdk";
import {  apiRootCustomer, client, httpMiddleware, projectKey } from "../client/client";
import { createAnonymousCustomer } from "../customer/anonymous-customer";
import { getCart } from "./get";

export async function addItemToCart(product: ProductProjection ,quantity:number =1 ) {
  const item: LineItemDraft = {
    productId: product.id,
    quantity: quantity,
  }
  let cartId = localStorage.getItem('cartId') || ''
  let version: number = Number(localStorage.getItem('cartVersion') || 1)



  if (localStorage.getItem('access_token')) {
    const response = await apiRootCustomer.withProjectKey({ projectKey }).me().activeCart().get().execute()
    cartId = response.body.id
    version = response.body.version

     await apiRootCustomer.withProjectKey({ projectKey }).me().carts().withId({ ID: cartId }).post({
      body: {
        version: version,
        actions: [
          {
            action: 'addLineItem',
            ...item
          }
        ]
      }
    }).execute();

  } else if(localStorage.getItem('cartId')) {

    await createAnonymousCustomer();
    const apiRootAnonymous = createApiBuilderFromCtpClient(
      client
        .withProjectKey(projectKey)
        .withHttpMiddleware(httpMiddleware)
        .build(),
    );
    const response : ClientResponse<Cart> = await apiRootAnonymous.withProjectKey({ projectKey }).carts().withId({ ID: cartId }).post({
      body: {
        version: version,
        actions: [
          {
              action: 'addLineItem',
              ...item
          }
        ]
      }
    }).execute()

    localStorage.setItem('cartVersion', response.body.version.toString() );
  }
  await getCart()







}
