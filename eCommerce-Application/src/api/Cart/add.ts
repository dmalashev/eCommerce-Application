import { createApiBuilderFromCtpClient, LineItemDraft, Product, ProductProjection } from "@commercetools/platform-sdk";
import {  client, httpMiddleware, projectKey } from "../client/client";
import { getCart } from "./get";

export async function addItemToCart(product: ProductProjection ,quantity:number =1 ) {


  // let isLogin = false
  if(localStorage.getItem('access_token')){}






  const item: LineItemDraft = {
    productId: product.id,
    quantity: quantity,
  }


}
