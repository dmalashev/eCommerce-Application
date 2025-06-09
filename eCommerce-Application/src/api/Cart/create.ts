import { ApiRoot } from "@commercetools/platform-sdk";
import { projectKey } from "../client/client";


export async function createCart(api: ApiRoot) : Promise<void> {

  const resp = await api.withProjectKey({ projectKey }).me().carts().post(
    { body: { currency: 'USD' } }
  ).execute();

  console.log(resp.body, 'cart create-cart');

}
