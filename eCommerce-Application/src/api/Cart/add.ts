import { Cart, ClientResponse, createApiBuilderFromCtpClient, LineItemDraft, ProductProjection } from "@commercetools/platform-sdk";
import {  apiRootCustomer, client, httpMiddleware, projectKey } from "../client/client";
import { createAnonymousCustomer } from "../customer/anonymous-customer";
import { getCart } from "./get";
import { createdCustomer } from "../customer/create-customer";

export async function addItemToCart(product: ProductProjection ,quantity:number =1 ) {
  const item: LineItemDraft = {
    productId: product.id,
    quantity: quantity,
  }




  if (localStorage.getItem('access_token')) {
    const response = await apiRootCustomer.withProjectKey({ projectKey }).me().activeCart().get().execute()
    response.body.version

     await apiRootCustomer
       .withProjectKey({ projectKey })
       .me()
       .carts()
       .withId({ ID: response.body.id })
       .post({
         body: {
           version: response.body.version,
           actions: [
             {
               action: 'addLineItem',
               ...item,
             },
           ],
         },
       })
       .execute();

  } else if (!localStorage.getItem('cartId')) {
    console.log("createdCustomer")
    await createAnonymousCustomer();
  }
  if (localStorage.getItem('anonymousId')) {
    const cartId = localStorage.getItem('cartId')!;
    const version = Number(localStorage.getItem('cartVersion'));
    const apiRootAnonymous = createApiBuilderFromCtpClient(
      client
        .withProjectKey(projectKey)
        .withHttpMiddleware(httpMiddleware)
        .build(),
    );
    const response : ClientResponse<Cart> = await apiRootAnonymous.withProjectKey({ projectKey }).carts().withId({ ID: cartId }).post({
      body: {
        version,
        actions: [
          {
              action: 'addLineItem',
              ...item
          }
        ]
      }
    }).execute()
      console.log(response.body)
    localStorage.setItem('cartVersion', response.body.version.toString() );
    }
    await getCart()
  }








